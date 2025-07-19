import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { apiRequest } from "@/lib/queryClient";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, ChartLine, Shield, CreditCard } from "lucide-react";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const CheckoutForm = ({ planId, plan }: { planId: string; plan: SubscriptionPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/?payment=success`,
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Payment Successful",
        description: "Welcome to BusinessFlow Pro!",
      });
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-muted/30 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium">{plan.name} Plan</span>
          <span className="font-bold">${Math.floor(plan.price / 100)}/month</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Payment Information
          </label>
          <div className="border border-border rounded-lg p-3">
            <PaymentElement />
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-2">
          <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm text-blue-700 font-medium">Secure Payment</p>
            <p className="text-xs text-blue-600">
              Your payment information is secure and encrypted. You can cancel anytime from your account settings.
            </p>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-primary to-secondary"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : `Subscribe to ${plan.name}`}
      </Button>
    </form>
  );
};

export default function Subscribe() {
  const { toast } = useToast();
  const { user, isLoading: isAuthLoading } = useAuth();
  const [location, navigate] = useLocation();
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");

  // Get plan from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planFromUrl = urlParams.get('plan');
    if (planFromUrl) {
      setSelectedPlanId(planFromUrl);
    }
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthLoading && !user) {
      toast({
        title: "Please log in",
        description: "You need to log in to subscribe to a plan.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [user, isAuthLoading, toast]);

  // Fetch subscription plans
  const { data: plans = [], isLoading: isLoadingPlans } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  // Create subscription mutation
  const createSubscriptionMutation = useMutation({
    mutationFn: async (planId: string) => {
      const response = await apiRequest("POST", "/api/create-subscription", { planId });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.status === 'existing') {
        toast({
          title: "Already Subscribed",
          description: "You already have an active subscription.",
        });
        navigate("/");
      } else {
        setClientSecret(data.clientSecret);
      }
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create subscription. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    createSubscriptionMutation.mutate(planId);
  };

  if (isAuthLoading || isLoadingPlans) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId);

  if (clientSecret && selectedPlan) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <ChartLine className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
              </div>
              <Button variant="ghost" onClick={() => navigate("/")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Subscription</h1>
            <p className="text-muted-foreground">
              You're just one step away from unlocking all BusinessFlow Pro features.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm planId={selectedPlanId} plan={selectedPlan} />
              </Elements>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Business Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of your business with our comprehensive management platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative hover:shadow-lg transition-all cursor-pointer ${
                selectedPlanId === plan.id ? 'ring-2 ring-primary' : ''
              } ${index === 1 ? 'border-primary shadow-lg' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-foreground mb-1">
                    ${Math.floor(plan.price / 100)}<span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.id === 'basic' && "Perfect for freelancers and small teams"}
                    {plan.id === 'professional' && "Ideal for growing businesses"}
                    {plan.id === 'business' && "For large teams and enterprises"}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    index === 1 ? 'bg-gradient-to-r from-primary to-secondary' : ''
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanSelect(plan.id);
                  }}
                  disabled={createSubscriptionMutation.isPending}
                >
                  {createSubscriptionMutation.isPending && selectedPlanId === plan.id
                    ? "Processing..." 
                    : `Choose ${plan.name}`
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Questions about our plans?</p>
          <Button variant="link" className="text-primary hover:text-primary/80">
            Contact our sales team for custom solutions →
          </Button>
        </div>
      </div>
    </div>
  );
}
