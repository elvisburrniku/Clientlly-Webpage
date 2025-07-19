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
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

const CheckoutForm = ({ planId, plan }: { planId: string; plan: SubscriptionPlan }) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Demo payment simulation
      console.log("Demo: Processing payment for plan:", plan.name);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Payment Successful!",
        description: `Welcome to BusinessFlow Pro ${plan.name} plan! Your subscription is now active.`,
      });

      // Redirect to dashboard after successful payment
      setTimeout(() => {
        window.location.href = "/?payment=success";
      }, 1000);

    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
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
            Demo Payment Information
          </label>
          <div className="border border-border rounded-lg p-4 bg-muted/20">
            <p className="text-sm text-muted-foreground mb-4">
              This is a demo environment. No real payment will be processed.
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Card Number</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-background" 
                  placeholder="4242 4242 4242 4242" 
                  disabled 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Expiry</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded bg-background" 
                    placeholder="12/34" 
                    disabled 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">CVC</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded bg-background" 
                    placeholder="123" 
                    disabled 
                  />
                </div>
              </div>
            </div>
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
        disabled={isProcessing}
      >
        {isProcessing ? "Processing Demo Payment..." : `Demo: Subscribe to ${plan.name}`}
      </Button>
    </form>
  );
};

export default function Subscribe() {
  const { toast } = useToast();
  const [location, navigate] = useLocation();
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  // Get plan and billing period from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planFromUrl = urlParams.get('plan');
    const billingFromUrl = urlParams.get('billing') as 'monthly' | 'yearly';
    
    if (planFromUrl) {
      setSelectedPlanId(planFromUrl);
    }
    if (billingFromUrl && (billingFromUrl === 'monthly' || billingFromUrl === 'yearly')) {
      setBillingPeriod(billingFromUrl);
    }
  }, []);

  // Fetch subscription plans
  const { data: plans = [], isLoading: isLoadingPlans } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  // Demo subscription - no backend call needed
  const [isProcessingSelection, setIsProcessingSelection] = useState(false);

  const handlePlanSelect = async (planId: string) => {
    setIsProcessingSelection(true);
    setSelectedPlanId(planId);
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log("Demo: Plan selected:", planId);
    setClientSecret("demo_client_secret_" + planId);
    setIsProcessingSelection(false);
  };

  if (isLoadingPlans) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
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
              <CheckoutForm planId={selectedPlanId} plan={selectedPlan} />
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Unlock the full potential of your business with our comprehensive management platform.
          </p>
          
          {/* Billing Period Toggle */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
              {/* Monthly Button */}
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Monthly
              </button>
              
              {/* Yearly Button */}
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'yearly'
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Yearly
              </button>
              
              {/* Animated Background */}
              <div
                className={`absolute top-2 bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                  billingPeriod === 'monthly'
                    ? 'left-2 w-[calc(50%-4px)]'
                    : 'right-2 w-[calc(50%-4px)]'
                }`}
              />
            </div>
            
            {/* Save Badge */}
            <div className={`mt-3 transition-all duration-300 ${
              billingPeriod === 'yearly' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
            }`}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                🎉 Save 17% with yearly billing
              </div>
            </div>
          </div>
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
                    ${Math.floor((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100)}
                    <span className="text-lg text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <div className="text-sm text-muted-foreground mb-2">
                      Billed ${Math.floor(plan.yearlyPrice / 100)} yearly
                    </div>
                  )}
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
                  disabled={isProcessingSelection}
                >
                  {isProcessingSelection && selectedPlanId === plan.id
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
