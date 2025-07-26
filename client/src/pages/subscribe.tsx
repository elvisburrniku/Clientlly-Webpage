import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowLeft, ArrowRight, User, Users, CreditCard, Shield, Home, Building, Building2, Loader2, Headphones, Menu, X, Sparkles, Mail, Lock, Globe, Clock, Gift } from "lucide-react";
import { Star } from "lucide-react";
import { InlineSpinner } from "@/components/LoadingStates";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

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

interface UserData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companySize: string;
  industry: string;
  agreeToTerms: boolean;
}

const stepIcons = [Home, User, Users, CreditCard];
const stepTitles = ["Choose Plan", "Create Account", "Team & Add-ons", "Review & Pay"];

const CheckoutForm = ({ userData, plan, billingPeriod }: { 
  userData: UserData; 
  plan: SubscriptionPlan; 
  billingPeriod: 'monthly' | 'yearly' 
}) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  // No need to create payment intent here as we're using Stripe Checkout

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setLoadingStage('Preparing your subscription...');

    try {
      console.log("Processing subscription for:", {
        user: userData,
        plan: plan.name,
        billing: billingPeriod
      });
      
      setLoadingStage('Creating secure checkout session...');
      
      // Create account and redirect to Stripe checkout
      const response = await fetch('/api/create-account-and-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userData,
          planId: plan.id,
          billingPeriod
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.checkoutUrl) {
        setLoadingStage('Redirecting to secure payment...');
        
        // Add a brief delay to show the final stage
        setTimeout(() => {
          window.location.href = data.checkoutUrl;
        }, 800);
      } else {
        throw new Error('Failed to create checkout session - no checkout URL received');
      }

    } catch (error: any) {
      console.error('Payment error:', error);
      
      const errorMessage = error.message || 'There was an error setting up your payment. Please try again.';
      
      toast({
        title: "Payment Setup Failed",
        description: errorMessage,
        variant: "destructive",
      });
      setIsProcessing(false);
      setLoadingStage('');
    }
  };

  const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  const savings = billingPeriod === 'yearly' ? ((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100 : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg">{plan.name} Plan</h3>
            <p className="text-muted-foreground">
              {billingPeriod === 'yearly' ? 'Billed yearly' : 'Billed monthly'}
            </p>
          </div>
          <div className="text-right">
            <div className="font-bold text-2xl">${Math.floor(price / 100)}</div>
            <div className="text-sm text-muted-foreground">
              /{billingPeriod === 'yearly' ? 'year' : 'month'}
            </div>
            {billingPeriod === 'yearly' && savings > 0 && (
              <div className="text-sm text-green-600 font-medium">
                Save {Math.round(savings)}%
              </div>
            )}
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-2">
          <h4 className="font-medium">Account Details:</h4>
          <p className="text-sm text-muted-foreground">{userData.firstName} {userData.lastName}</p>
          <p className="text-sm text-muted-foreground">{userData.email}</p>
          <p className="text-sm text-muted-foreground">{userData.companyName}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 text-green-700">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">
              {process.env.NODE_ENV === 'development' ? 'Demo Payment Mode' : 'Secure Payment with Stripe'}
            </span>
          </div>
          <p className="text-sm text-green-600 mt-1">
            {process.env.NODE_ENV === 'development' 
              ? "You'll be redirected to Stripe's test payment page. Use test card 4242 4242 4242 4242 for testing."
              : "You'll be redirected to Stripe's secure payment page to complete your subscription."
            }
          </p>
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg disabled:opacity-70 transition-all duration-300 relative overflow-hidden"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <InlineSpinner size="sm" />
              <span className="animate-pulse">{loadingStage || 'Setting up payment...'}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Continue to Payment</span>
            </div>
          )}
          {isProcessing && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
          )}
        </Button>

        {/* Loading Overlay */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-bounce-in">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                  <CreditCard className="w-6 h-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">Processing Your Subscription</h3>
              <p className="text-muted-foreground mb-4">{loadingStage}</p>
              
              <div className="flex justify-center space-x-1 loading-dots">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Please do not close this window
              </p>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Powered by <span className="font-medium">Stripe</span> • 
            Your payment information is secure and encrypted
          </p>
        </div>
      </div>
    </form>
  );
};

export default function Subscribe() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
    companySize: '',
    industry: '',
    agreeToTerms: false
  });

  const { data: plans, isLoading: plansLoading } = useQuery<SubscriptionPlan[]>({
    queryKey: ['/api/subscription-plans'],
  });

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const planFromUrl = params.get('plan');
    const billingFromUrl = params.get('billing') as 'monthly' | 'yearly';
    
    if (planFromUrl) {
      setSelectedPlan(planFromUrl);
      setCurrentStep(1); // Skip plan selection if coming from pricing page
    }
    if (billingFromUrl) {
      setBillingPeriod(billingFromUrl);
    }
  }, [location]);

  const selectedPlanData = plans?.find(p => p.id === selectedPlan);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 0:
        return selectedPlan !== '';
      case 1:
        return userData.email && userData.password && userData.confirmPassword && 
               userData.firstName && userData.lastName && userData.agreeToTerms &&
               userData.password === userData.confirmPassword;
      case 2:
        return userData.companyName && userData.companySize && userData.industry;
      default:
        return true;
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
      {stepTitles.map((title, index) => {
        const Icon = stepIcons[index];
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <div key={index} className="flex items-center">
            <div className={`flex items-center space-x-3 transition-all duration-500 ${
              isActive ? 'text-primary scale-110' : isCompleted ? 'text-green-600' : 'text-muted-foreground'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative overflow-hidden ${
                isActive ? 'border-primary bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg shadow-primary/25 animate-pulse' : 
                isCompleted ? 'border-green-600 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30' : 'border-muted glass-effect'
              }`}>
                {isCompleted ? (
                  <Check className="h-6 w-6 animate-scale-in" />
                ) : (
                  <Icon className={`h-6 w-6 ${isActive ? 'animate-bounce-gentle' : ''}`} />
                )}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-shimmer" />
                )}
              </div>
              <span className="hidden sm:block font-semibold text-sm transition-all duration-300 hover:scale-105">{title}</span>
            </div>
            {index < stepTitles.length - 1 && (
              <div className={`w-12 h-1 mx-4 rounded-full transition-all duration-700 ${
                isCompleted ? 'bg-gradient-to-r from-green-600 to-green-500 animate-expand-width' : 'bg-muted/50'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderPlanSelection = () => (
    <div className="max-w-7xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="text-center mb-12">
        <div className="flex justify-center mb-12">
          <div className="glass-effect border border-white/20 rounded-2xl p-2 backdrop-blur-xl">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  billingPeriod === 'monthly' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-white/50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-white/50'
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold">Save 17%</Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="space-y-8 p-0">

        <div className="grid md:grid-cols-3 gap-6">
          {plansLoading ? (
            // Skeleton loading states
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className={`animate-pulse ${index === 1 ? 'border-primary/30' : ''}`}>
                <CardContent className="p-6">
                  {index === 1 && (
                    <div className="h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded mb-4 w-24"></div>
                  )}
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-32"></div>
                  <div className="space-y-2 mb-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                      </div>
                    ))}
                  </div>
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            plans?.map((plan, index) => {
            const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card 
                key={plan.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 fade-in-up relative backdrop-blur-xl ${
                  isSelected 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-blue-400 shadow-2xl scale-105' 
                    : 'glass-effect border-white/30 hover:border-blue-300/50'
                } ${index === 1 ? 'border-2 border-blue-400 ring-2 ring-blue-200/50' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardContent className="p-8 relative">
                  {index === 1 && (
                    <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-4 py-2 shadow-lg">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="mb-6">
                    <h3 className={`text-2xl font-black mb-3 ${
                      isSelected ? 'text-white' : 'text-gray-800 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <div className="mt-3">
                      <span className={`text-4xl font-black ${
                        isSelected ? 'text-white' : 'text-gray-800 dark:text-white'
                      }`}>
                        ${Math.floor(price / 100)}
                      </span>
                      <span className={`text-lg ml-2 ${
                        isSelected ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        /{billingPeriod === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          isSelected ? 'bg-white/20' : 'bg-green-100 dark:bg-green-900/30'
                        }`}>
                          <Check className={`h-3 w-3 ${
                            isSelected ? 'text-white' : 'text-green-600 dark:text-green-400'
                          }`} />
                        </div>
                        <span className={`${
                          isSelected ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 font-bold text-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Selected
                      </>
                    ) : (
                      'Select Plan'
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })
          )}
        </div>
      </CardContent>
    </div>
  );

  const renderAccountCreation = () => (
    <Card className="max-w-lg mx-auto relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl transform transition-all duration-1000 fade-in-up">
      {/* Form Header with Gradient */}
      <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-1 rounded-t-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-t-[calc(1.5rem-1px)] p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Create Your Account</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Set up your BusinessFlow Pro account to get started</p>
          </div>
        </div>
      </div>
      <CardContent className="p-8 pt-0 space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="firstName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-emerald-500" />
              First Name
            </Label>
            <Input
              id="firstName"
              value={userData.firstName}
              onChange={(e) => setUserData({...userData, firstName: e.target.value})}
              placeholder="John"
              required
              className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="lastName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              Last Name
            </Label>
            <Input
              id="lastName"
              value={userData.lastName}
              onChange={(e) => setUserData({...userData, lastName: e.target.value})}
              placeholder="Doe"
              required
              className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Mail className="h-5 w-5 mr-2 text-purple-500" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            placeholder="john@company.com"
            required
            className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="password" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Lock className="h-5 w-5 mr-2 text-orange-500" />
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            placeholder="Minimum 8 characters"
            required
            className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="confirmPassword" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Shield className="h-5 w-5 mr-2 text-green-500" />
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
            placeholder="Confirm your password"
            required
            className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-400"
          />
          {userData.password && userData.confirmPassword && userData.password !== userData.confirmPassword && (
            <p className="text-sm text-red-600 mt-2 flex items-center">
              <X className="h-4 w-4 mr-1" />
              Passwords do not match
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={userData.agreeToTerms}
            onCheckedChange={(checked) => setUserData({...userData, agreeToTerms: checked as boolean})}
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </Label>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/api/login" className="text-primary hover:underline">
              Log In
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const renderTeamSetup = () => (
    <Card className="max-w-lg mx-auto relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl transform transition-all duration-1000 fade-in-up">
      {/* Form Header with Gradient */}
      <div className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 p-1 rounded-t-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-t-[calc(1.5rem-1px)] p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Company Details</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Tell us about your business to customize your experience</p>
          </div>
        </div>
      </div>
      <CardContent className="p-8 pt-0 space-y-8">
        <div className="space-y-3">
          <Label htmlFor="companyName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Building2 className="h-5 w-5 mr-2 text-orange-500" />
            Company Name
          </Label>
          <Input
            id="companyName"
            value={userData.companyName}
            onChange={(e) => setUserData({...userData, companyName: e.target.value})}
            placeholder="Your Company Inc."
            required
            className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="companySize" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500" />
            Company Size
          </Label>
          <Select value={userData.companySize} onValueChange={(value) => setUserData({...userData, companySize: value})}>
            <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 employees</SelectItem>
              <SelectItem value="6-20">6-20 employees</SelectItem>
              <SelectItem value="21-50">21-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="200+">200+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="industry" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Globe className="h-5 w-5 mr-2 text-emerald-500" />
            Industry
          </Label>
          <Select value={userData.industry} onValueChange={(value) => setUserData({...userData, industry: value})}>
            <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="finance">Finance & Accounting</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="retail">Retail & E-commerce</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="legal">Legal Services</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-6 glass-effect border border-white/20 rounded-2xl backdrop-blur-xl">
          <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">What's Next?</h4>
          <p className="text-gray-600 dark:text-gray-300">
            After setup, you'll be able to invite team members, customize your workspace, and start managing your business operations.
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const renderReviewAndPay = () => {
    if (!selectedPlanData) return null;

    return (
      <Card className="max-w-lg mx-auto relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl transform transition-all duration-1000 fade-in-up">
        {/* Form Header with Gradient */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-1 rounded-t-3xl">
          <div className="bg-white dark:bg-gray-900 rounded-t-[calc(1.5rem-1px)] p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Review & Complete</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Review your order and complete your subscription</p>
            </div>
          </div>
        </div>
        <CardContent>
          <CheckoutForm 
            userData={userData} 
            plan={selectedPlanData} 
            billingPeriod={billingPeriod}
          />
        </CardContent>
      </Card>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderPlanSelection();
      case 1:
        return renderAccountCreation();
      case 2:
        return renderTeamSetup();
      case 3:
        return renderReviewAndPay();
      default:
        return renderPlanSelection();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 transition-all duration-300">
              <img 
                src="/attached_assets/3d_1753268267691.png" 
                alt="BusinessFlow Pro" 
                className="w-10 h-8 object-contain"
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium">About Us</Link>
              <Link href="/#features" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/subscribe?plan=business&billing=monthly'}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
              <div className="flex items-center">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {/* Navigation Links */}
              <Link href="/about" className="block text-gray-600 hover:text-gray-800">About Us</Link>
              <Link href="/#features" className="block text-gray-600 hover:text-gray-800">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => {
                  window.location.href = '/subscribe';
                  setShowMobileMenu(false);
                }}
                className="w-full text-left justify-start text-gray-600 hover:text-gray-800"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  window.location.href = '/contact';
                  setShowMobileMenu(false);
                }} 
                className="w-full text-left justify-start text-gray-600 hover:text-gray-800"
              >
                Contact Us
              </Button>
              
              {/* Action Buttons */}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    window.location.href = "/api/login";
                    setShowMobileMenu(false);
                  }} 
                  className="w-full text-left justify-start text-gray-600 hover:text-gray-800"
                >
                  Login
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    window.location.href = '/subscribe?plan=business&billing=monthly';
                    setShowMobileMenu(false);
                  }}
                  className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium"
                >
                  Start Your Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20 relative">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-full text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-8 shadow-xl">
              <CreditCard className="w-6 h-6 mr-3 animate-pulse" />
              🚀 Choose Your Perfect Plan - Get Started Today
              <Sparkles className="w-6 h-6 ml-3 animate-spin" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
              Choose your{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                perfect plan
              </span>
              <br />
              <span className="text-5xl lg:text-6xl xl:text-7xl text-gray-700 dark:text-gray-300">
                and transform your business
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join thousands of businesses already transforming their operations. 
              <br className="hidden lg:block" />
              <span className="font-bold text-emerald-600 dark:text-emerald-400">Select your subscription plan and unlock the full power of BusinessFlow Pro.</span>
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-200/50 dark:border-emerald-700/50">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Bank-Level Security</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">256-bit SSL</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <CreditCard className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-bold">Instant Access</div>
                  <div className="text-sm opacity-90">All Features</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200/50 dark:border-purple-700/50">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">24/7 Support</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">

        {renderStepIndicator()}
        
        <div className="mb-8">
          {renderCurrentStep()}
        </div>

        <div className="flex justify-center space-x-6 fade-in-up" style={{ animationDelay: '0.8s' }}>
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={prevStep}
              className="flex items-center space-x-2 px-8 py-3 glass-effect border-white/30 text-gray-700 dark:text-gray-300 hover:border-gray-400 hover:bg-white/50 font-bold backdrop-blur-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          )}
          
          {currentStep < 3 && (
            <Button 
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Continue</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Help Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="glass-effect border border-white/20 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-800 dark:text-white font-bold text-lg">Need Help?</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our support team is available 24/7 to assist you
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium hover:underline flex items-center space-x-1">
                <Headphones className="w-4 h-4" />
                <span>Chat Support</span>
              </a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium hover:underline flex items-center space-x-1">
                <Building className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* VIP Support Experience - Full Width Section */}
      <div className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 py-16 px-4 relative overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-200 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-2 h-2 bg-orange-200 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-12 left-16 w-2 h-2 bg-amber-200 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-yellow-200 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-600"></div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          {/* 5-Star Rating */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-600 text-yellow-600 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            VIP Support Experience
          </h3>
          
          <p className="text-xl lg:text-2xl text-gray-800 mb-12 leading-relaxed max-w-4xl mx-auto">
            Get <span className="font-bold text-orange-800">personal onboarding</span> and dedicated support throughout your entire subscription.
          </p>
          
          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-900 mb-2">Live Chat</p>
              <p className="text-gray-800">Instant Help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-900 mb-2">Email Support</p>
              <p className="text-gray-800">24h Response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-900 mb-2">Phone Support</p>
              <p className="text-gray-800">Priority Line</p>
            </div>
          </div>
          
          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <p className="text-lg font-bold text-gray-900 mb-2">30-Day Money Back</p>
              <p className="text-gray-800">100% Satisfaction Guaranteed</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-lg font-bold text-gray-900 mb-2">Same-Day Setup</p>
              <p className="text-gray-800">Get Started Immediately</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}