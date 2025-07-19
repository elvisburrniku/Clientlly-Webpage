import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertDemoRequestSchema } from "@shared/schema";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

// Subscription plan configurations
const SUBSCRIPTION_PLANS = {
  basic: {
    id: "basic",
    name: "Basic",
    price: 2900, // $29.00 in cents
    stripePriceId: process.env.STRIPE_BASIC_PRICE_ID || "price_basic",
    features: [
      "Up to 100 invoices/month",
      "Basic expense tracking",
      "CRM for up to 500 contacts",
      "Email support",
      "2 team members"
    ]
  },
  professional: {
    id: "professional",
    name: "Professional",
    price: 7900, // $79.00 in cents
    stripePriceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID || "price_professional",
    features: [
      "Unlimited invoices",
      "Advanced expense management",
      "CRM for up to 5,000 contacts",
      "HR management module",
      "Contract management",
      "Priority support",
      "Up to 10 team members"
    ]
  },
  business: {
    id: "business",
    name: "Business Plus",
    price: 15900, // $159.00 in cents
    stripePriceId: process.env.STRIPE_BUSINESS_PRICE_ID || "price_business",
    features: [
      "Everything in Professional",
      "Unlimited contacts & users",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support"
    ]
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Subscription plans endpoint
  app.get('/api/subscription-plans', async (req, res) => {
    try {
      res.json(Object.values(SUBSCRIPTION_PLANS));
    } catch (error) {
      console.error("Error fetching subscription plans:", error);
      res.status(500).json({ message: "Failed to fetch subscription plans" });
    }
  });

  // Create subscription endpoint
  app.post('/api/create-subscription', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { planId } = req.body;

      if (!planId || !SUBSCRIPTION_PLANS[planId as keyof typeof SUBSCRIPTION_PLANS]) {
        return res.status(400).json({ message: "Invalid plan selected" });
      }

      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const plan = SUBSCRIPTION_PLANS[planId as keyof typeof SUBSCRIPTION_PLANS];

      // Check if user already has an active subscription
      if (user.stripeSubscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
        
        if (subscription.status === 'active') {
          return res.json({
            subscriptionId: subscription.id,
            clientSecret: (subscription.latest_invoice as any)?.payment_intent?.client_secret,
            status: 'existing'
          });
        }
      }

      // Create or get Stripe customer
      let customerId = user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email || '',
          name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          metadata: {
            userId: userId,
          }
        });
        customerId = customer.id;
        await storage.updateUserStripeInfo(userId, customerId);
      }

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: plan.stripePriceId,
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: {
          save_default_payment_method: 'on_subscription',
        },
        expand: ['latest_invoice.payment_intent'],
        metadata: {
          userId: userId,
          planId: planId,
        }
      });

      // Update user with subscription info
      await storage.updateUserStripeInfo(userId, customerId, subscription.id);
      await storage.updateUserSubscription(userId, subscription.status, planId);

      res.json({
        subscriptionId: subscription.id,
        clientSecret: (subscription.latest_invoice as any)?.payment_intent?.client_secret,
        status: 'created'
      });

    } catch (error: any) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Demo request endpoint
  app.post('/api/demo-request', async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // Here you would typically send an email notification or add to a queue
      console.log('New demo request:', demoRequest);
      
      res.json({ message: "Demo request submitted successfully", id: demoRequest.id });
    } catch (error: any) {
      console.error("Error creating demo request:", error);
      res.status(400).json({ message: "Invalid demo request data" });
    }
  });

  // Stripe webhook endpoint
  app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      switch (event.type) {
        case 'invoice.payment_succeeded': {
          const invoice = event.data.object as Stripe.Invoice;
          const subscriptionId = typeof invoice.subscription === 'string' ? invoice.subscription : invoice.subscription?.id;
          
          if (subscriptionId) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const userId = subscription.metadata.userId;
            const planId = subscription.metadata.planId;

            if (userId) {
              await storage.updateUserSubscription(userId, 'active', planId);
              
              // TODO: Queue job for Laravel account creation
              console.log(`Subscription activated for user ${userId}, plan: ${planId}`);
              
              // Here you would dispatch a job to create account in Laravel app:
              // await queueLaravelAccountCreation({ userId, planId, subscriptionId });
            }
          }
          break;
        }

        case 'invoice.payment_failed': {
          const invoice = event.data.object as Stripe.Invoice;
          const subscriptionId = typeof invoice.subscription === 'string' ? invoice.subscription : invoice.subscription?.id;
          
          if (subscriptionId) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const userId = subscription.metadata.userId;

            if (userId) {
              await storage.updateUserSubscription(userId, 'past_due');
            }
          }
          break;
        }

        case 'customer.subscription.deleted': {
          const subscription = event.data.object as Stripe.Subscription;
          const userId = subscription.metadata.userId;

          if (userId) {
            await storage.updateUserSubscription(userId, 'canceled');
          }
          break;
        }

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      res.json({ received: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ error: 'Webhook processing failed' });
    }
  });

  // Get user subscription status
  app.get('/api/subscription/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      let subscriptionDetails = null;
      if (user.stripeSubscriptionId) {
        try {
          const subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
          subscriptionDetails = {
            id: subscription.id,
            status: subscription.status,
            currentPeriodEnd: subscription.current_period_end,
            plan: user.subscriptionPlan,
          };
        } catch (error) {
          console.error('Error fetching Stripe subscription:', error);
        }
      }

      res.json({
        hasSubscription: !!user.stripeSubscriptionId,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionDetails
      });
    } catch (error) {
      console.error("Error fetching subscription status:", error);
      res.status(500).json({ message: "Failed to fetch subscription status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
