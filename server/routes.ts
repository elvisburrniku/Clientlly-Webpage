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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

// Detailed subscription plan configurations with categorized features
const SUBSCRIPTION_PLANS = {
  basic: {
    id: "basic",
    name: "Basic",
    monthlyPrice: 2900, // $29.00 in cents
    yearlyPrice: 27840, // $278.40 in cents (20% discount)
    stripePriceId: {
      monthly: process.env.STRIPE_BASIC_MONTHLY_PRICE_ID || "price_basic_monthly",
      yearly: process.env.STRIPE_BASIC_YEARLY_PRICE_ID || "price_basic_yearly"
    },
    description: "Perfect for freelancers and small teams getting started",
    features: [
      "Up to 100 invoices/month",
      "Basic expense tracking",
      "CRM for up to 500 contacts",
      "Email support",
      "2 team members"
    ],
    detailedFeatures: {
      invoicing: {
        "Monthly invoices": "100",
        "Custom templates": "3 templates",
        "Payment tracking": "✓",
        "Tax calculations": "Basic",
        "Late payment reminders": "✓"
      },
      expenses: {
        "Expense categories": "10 categories",
        "Receipt scanning": "✓",
        "Mileage tracking": "Manual",
        "Bank integration": "1 account",
        "Expense reports": "Basic"
      },
      crm: {
        "Contact management": "500 contacts",
        "Deal pipeline": "Basic",
        "Email templates": "5 templates",
        "Activity tracking": "✓",
        "Lead scoring": "❌"
      },
      hr: {
        "Employee profiles": "2 employees",
        "Time tracking": "Basic",
        "Leave management": "❌",
        "Performance reviews": "❌",
        "Payroll integration": "❌"
      },
      contracts: {
        "Contract templates": "3 templates",
        "Digital signatures": "❌",
        "Version control": "❌",
        "Approval workflows": "❌",
        "Contract analytics": "❌"
      },
      analytics: {
        "Basic dashboards": "✓",
        "Financial reports": "5 reports",
        "Export data": "CSV",
        "Custom reports": "❌",
        "Advanced analytics": "❌"
      },
      support: {
        "Support channel": "Email only",
        "Response time": "48 hours",
        "Knowledge base": "✓",
        "Video tutorials": "✓",
        "Dedicated manager": "❌"
      }
    }
  },
  professional: {
    id: "professional",
    name: "Professional",
    monthlyPrice: 7900, // $79.00 in cents
    yearlyPrice: 75840, // $758.40 in cents (20% discount)
    stripePriceId: {
      monthly: process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID || "price_professional_monthly",
      yearly: process.env.STRIPE_PROFESSIONAL_YEARLY_PRICE_ID || "price_professional_yearly"
    },
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Unlimited invoices",
      "Advanced expense management",
      "CRM for up to 5,000 contacts",
      "HR management module",
      "Contract management",
      "Priority support",
      "Up to 10 team members"
    ],
    detailedFeatures: {
      invoicing: {
        "Monthly invoices": "Unlimited",
        "Custom templates": "Unlimited",
        "Payment tracking": "✓",
        "Tax calculations": "Advanced",
        "Late payment reminders": "Automated"
      },
      expenses: {
        "Expense categories": "Unlimited",
        "Receipt scanning": "AI-powered",
        "Mileage tracking": "GPS tracking",
        "Bank integration": "5 accounts",
        "Expense reports": "Advanced"
      },
      crm: {
        "Contact management": "5,000 contacts",
        "Deal pipeline": "Advanced",
        "Email templates": "Unlimited",
        "Activity tracking": "Advanced",
        "Lead scoring": "✓"
      },
      hr: {
        "Employee profiles": "10 employees",
        "Time tracking": "Advanced",
        "Leave management": "✓",
        "Performance reviews": "✓",
        "Payroll integration": "Basic"
      },
      contracts: {
        "Contract templates": "Unlimited",
        "Digital signatures": "✓",
        "Version control": "✓",
        "Approval workflows": "✓",
        "Contract analytics": "Basic"
      },
      analytics: {
        "Basic dashboards": "✓",
        "Financial reports": "20 reports",
        "Export data": "CSV, Excel, PDF",
        "Custom reports": "✓",
        "Advanced analytics": "✓"
      },
      support: {
        "Support channel": "Email & Chat",
        "Response time": "4 hours",
        "Knowledge base": "✓",
        "Video tutorials": "✓",
        "Dedicated manager": "❌"
      }
    }
  },
  business: {
    id: "business",
    name: "Business Plus",
    monthlyPrice: 15900, // $159.00 in cents
    yearlyPrice: 152640, // $1526.40 in cents (20% discount)
    stripePriceId: {
      monthly: process.env.STRIPE_BUSINESS_MONTHLY_PRICE_ID || "price_business_monthly",
      yearly: process.env.STRIPE_BUSINESS_YEARLY_PRICE_ID || "price_business_yearly"
    },
    description: "For large teams and enterprises requiring maximum capabilities",
    features: [
      "Everything in Professional",
      "Unlimited contacts & users",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support"
    ],
    detailedFeatures: {
      invoicing: {
        "Monthly invoices": "Unlimited",
        "Custom templates": "Unlimited + Custom branding",
        "Payment tracking": "✓",
        "Tax calculations": "Multi-jurisdiction",
        "Late payment reminders": "AI-optimized"
      },
      expenses: {
        "Expense categories": "Unlimited + Custom fields",
        "Receipt scanning": "AI + Machine learning",
        "Mileage tracking": "GPS + Route optimization",
        "Bank integration": "Unlimited accounts",
        "Expense reports": "Enterprise-grade"
      },
      crm: {
        "Contact management": "Unlimited",
        "Deal pipeline": "Enterprise",
        "Email templates": "Unlimited + AI suggestions",
        "Activity tracking": "Enterprise",
        "Lead scoring": "AI-powered"
      },
      hr: {
        "Employee profiles": "Unlimited",
        "Time tracking": "Enterprise",
        "Leave management": "Advanced",
        "Performance reviews": "360° reviews",
        "Payroll integration": "Full integration"
      },
      contracts: {
        "Contract templates": "Unlimited + Legal library",
        "Digital signatures": "Advanced + Bulk signing",
        "Version control": "Enterprise",
        "Approval workflows": "Complex workflows",
        "Contract analytics": "AI insights"
      },
      analytics: {
        "Basic dashboards": "✓",
        "Financial reports": "Unlimited",
        "Export data": "All formats + API",
        "Custom reports": "Advanced builder",
        "Advanced analytics": "AI-powered insights"
      },
      support: {
        "Support channel": "Email, Chat, Phone",
        "Response time": "1 hour",
        "Knowledge base": "✓",
        "Video tutorials": "✓",
        "Dedicated manager": "✓"
      }
    }
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

  // Create subscription endpoint - Demo version
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
      if (user.stripeSubscriptionId && user.subscriptionStatus === 'active') {
        return res.json({
          subscriptionId: user.stripeSubscriptionId,
          clientSecret: 'demo_client_secret',
          status: 'existing'
        });
      }

      // For demo purposes, simulate subscription creation
      console.log(`Demo: Creating subscription for user ${userId} with plan ${planId}`);
      
      // Generate demo IDs
      const demoCustomerId = `cus_demo_${userId}`;
      const demoSubscriptionId = `sub_demo_${Date.now()}`;
      const demoClientSecret = `pi_demo_${Date.now()}_secret_demo`;

      // Update user with demo subscription info
      await storage.updateUserStripeInfo(userId, demoCustomerId, demoSubscriptionId);
      await storage.updateUserSubscription(userId, 'incomplete', planId);

      res.json({
        subscriptionId: demoSubscriptionId,
        clientSecret: demoClientSecret,
        status: 'created'
      });

    } catch (error: any) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Create account and subscription with Stripe checkout (Public endpoint for new users)
  app.post("/api/create-account-and-subscription", async (req, res) => {
    try {
      const { userData, planId, billingPeriod } = req.body;
      
      // Validate required fields
      if (!userData || !userData.email || !userData.firstName || !planId || !billingPeriod) {
        return res.status(400).json({ message: "Missing required user data or plan information" });
      }

      // Get plan details
      const plans = [
        { id: 'basic', name: 'Basic', monthlyPrice: 2900, yearlyPrice: 27840 },
        { id: 'professional', name: 'Professional', monthlyPrice: 7900, yearlyPrice: 75840 },
        { id: 'business', name: 'Business Plus', monthlyPrice: 15900, yearlyPrice: 152640 }
      ];
      
      const plan = plans.find(p => p.id === planId);
      if (!plan) {
        return res.status(400).json({ message: "Invalid plan selected" });
      }

      const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
      
      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `BusinessFlow Pro ${plan.name} Plan`,
                description: `${billingPeriod === 'yearly' ? 'Annual' : 'Monthly'} subscription to BusinessFlow Pro`,
              },
              unit_amount: price,
              recurring: {
                interval: billingPeriod === 'yearly' ? 'year' : 'month',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.protocol}://${req.get('host')}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.protocol}://${req.get('host')}/subscribe?plan=${planId}&billing=${billingPeriod}&cancelled=true`,
        customer_email: userData.email,
        metadata: {
          planId,
          billingPeriod,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          companyName: userData.companyName,
          companySize: userData.companySize,
          industry: userData.industry,
        },
        subscription_data: {
          metadata: {
            planId,
            billingPeriod,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            companyName: userData.companyName,
            companySize: userData.companySize,
            industry: userData.industry,
          },
        },
        allow_promotion_codes: true,
        billing_address_collection: 'required',
      });

      console.log(`Created Stripe checkout session for ${userData.email}, plan: ${planId}, billing: ${billingPeriod}`);
      
      // In development mode, simulate webhook events since external webhooks can't reach local dev
      if (process.env.NODE_ENV === 'development') {
        // Simulate checkout completion webhook after a delay
        setTimeout(async () => {
          try {
            console.log(`[DEV] Simulating checkout.session.completed webhook for session ${session.id}`);
            
            // Create a mock subscription object
            const mockSubscription = {
              id: `sub_mock_${Date.now()}`,
              status: 'active',
              metadata: session.metadata,
              current_period_end: Math.floor(Date.now() / 1000) + (billingPeriod === 'yearly' ? 365 * 24 * 60 * 60 : 30 * 24 * 60 * 60)
            };
            
            // Simulate the webhook processing
            console.log(`[DEV] Mock subscription created: ${mockSubscription.id} for ${userData.email}`);
            
            // Trigger Laravel account creation (simulated in dev mode)
            await processSubscriptionSuccess(mockSubscription, {
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              companyName: userData.companyName,
              companySize: userData.companySize,
              industry: userData.industry,
              planId: planId,
              billingPeriod: billingPeriod
            });
            console.log(`[DEV] Mock webhook processed successfully - subscription active for ${userData.email}`);
            
          } catch (error) {
            console.error('[DEV] Error simulating webhook:', error);
          }
        }, 2000); // 2 second delay to simulate processing time
      }
      
      res.json({ 
        checkoutUrl: session.url,
        sessionId: session.id 
      });
    } catch (error: any) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ message: "Error creating checkout session: " + error.message });
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

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = req.body;
      
      // Here you would typically save to database and/or send notification email
      console.log('Contact form submission received:', contactData);
      
      // Log contact details for demo purposes
      console.log(`Contact from: ${contactData.firstName} ${contactData.lastName} (${contactData.email})`);
      console.log(`Company: ${contactData.company}`);
      console.log(`Subject: ${contactData.subject}`);
      console.log(`Message: ${contactData.message}`);
      
      res.json({ 
        success: true, 
        message: 'Contact message sent successfully' 
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      res.status(500).json({ message: 'Failed to send contact message' });
    }
  });

  // Stripe webhook endpoint
  app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    // In development mode, skip webhook verification for testing
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEV] Webhook endpoint called in development mode - processing mock event');
      res.json({ received: true, dev_mode: true });
      return;
    }

    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event;

    try {
      if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.error('STRIPE_WEBHOOK_SECRET not configured');
        return res.status(500).send('Webhook secret not configured');
      }
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session;
          
          if (session.mode === 'subscription' && session.subscription) {
            const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
            const metadata = session.metadata;
            
            if (metadata && metadata.email) {
              console.log(`Checkout completed for ${metadata.email}, subscription: ${subscription.id}`);
              
              // Store subscription data for user account creation
              // This could trigger account creation in external Laravel system
              // For now, we'll log the successful subscription
            }
          }
          break;
        }

        case 'invoice.payment_succeeded': {
          const invoice = event.data.object as any; // Use any for webhook data
          const subscriptionId = invoice.subscription;
          
          if (subscriptionId) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const userId = subscription.metadata?.userId;
            const planId = subscription.metadata?.planId;

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
          const invoice = event.data.object as any; // Use any for webhook data
          const subscriptionId = invoice.subscription;
          
          if (subscriptionId) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const userId = subscription.metadata?.userId;

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
          const subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId) as any;
          subscriptionDetails = {
            id: subscription.id,
            status: subscription.status,
            currentPeriodEnd: subscription.current_period_end ? subscription.current_period_end * 1000 : null, // Convert to milliseconds
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

  // Helper function to process successful subscriptions
  async function processSubscriptionSuccess(subscription: any, userData: any) {
    try {
      console.log(`Processing subscription success for: ${userData.email}`);
      
      // In production, this would make an HTTP request to your Laravel application
      if (process.env.NODE_ENV === 'production' && process.env.LARAVEL_WEBHOOK_URL) {
        const laravelPayload = {
          subscription_id: subscription.id,
          plan_id: userData.planId || subscription.metadata?.planId,
          user_data: {
            email: userData.email || subscription.metadata?.email,
            first_name: userData.firstName || subscription.metadata?.firstName,
            last_name: userData.lastName || subscription.metadata?.lastName,
            company_name: userData.companyName || subscription.metadata?.companyName,
            company_size: userData.companySize || subscription.metadata?.companySize,
            industry: userData.industry || subscription.metadata?.industry,
          },
          billing_period: userData.billingPeriod || subscription.metadata?.billingPeriod,
          subscription_status: subscription.status,
          current_period_end: subscription.current_period_end
        };

        // Make HTTP request to Laravel app
        const response = await fetch(process.env.LARAVEL_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.LARAVEL_WEBHOOK_SECRET || ''}`
          },
          body: JSON.stringify(laravelPayload)
        });

        if (response.ok) {
          console.log(`✅ Laravel account created successfully for ${userData.email}`);
        } else {
          console.error(`❌ Failed to create Laravel account for ${userData.email}:`, response.statusText);
        }
      } else {
        // Development mode - just log what would be sent to Laravel
        console.log(`[DEV] Would create Laravel account with data:`, {
          email: userData.email || subscription.metadata?.email,
          firstName: userData.firstName || subscription.metadata?.firstName,
          lastName: userData.lastName || subscription.metadata?.lastName,
          companyName: userData.companyName || subscription.metadata?.companyName,
          planId: userData.planId || subscription.metadata?.planId,
          subscriptionId: subscription.id
        });
      }
    } catch (error) {
      console.error('Error processing subscription success:', error);
    }
  }

  const httpServer = createServer(app);
  return httpServer;
}
