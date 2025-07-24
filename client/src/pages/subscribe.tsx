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
import { Check, ArrowLeft, ArrowRight, User, Users, CreditCard, Shield, Home, Building, Loader2, Headphones } from "lucide-react";
import { InlineSpinner } from "@/components/LoadingStates";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";

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
        <div className="flex justify-center mb-8">
          <div className="glass-effect border border-white/30 rounded-2xl p-2 backdrop-blur-sm">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-500 hover:scale-105 ${
                  billingPeriod === 'monthly' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/20'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-500 hover:scale-105 relative ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/20'
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-green-500 text-white text-xs animate-pulse">Save 17%</Badge>
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
                className={`cursor-pointer transition-all duration-500 hover:scale-105 transform-gpu fade-in-up relative overflow-hidden ${
                  isSelected ? 'ring-2 ring-primary shadow-2xl shadow-primary/25 scale-105' : 'hover:shadow-xl glass-effect'
                } ${index === 1 ? 'border-primary/50 shadow-lg scale-105' : 'border-white/20'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 animate-pulse" />
                )}
                
                <CardContent className="p-8 relative z-10">
                  {index === 1 && (
                    <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white shadow-lg animate-bounce-gentle">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {plan.name}
                    </h3>
                    <div className="mt-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ${Math.floor(price / 100)}
                      </span>
                      <span className="text-muted-foreground text-lg ml-1">
                        /{billingPeriod === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg animate-pulse' 
                        : 'hover:scale-105 hover:shadow-md glass-effect border-white/30'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {isSelected ? (
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4" />
                        <span>Selected</span>
                      </div>
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
    <Card className="max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create Your Account</CardTitle>
        <p className="text-muted-foreground">
          Set up your BusinessFlow Pro account to get started
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={userData.firstName}
              onChange={(e) => setUserData({...userData, firstName: e.target.value})}
              placeholder="John"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={userData.lastName}
              onChange={(e) => setUserData({...userData, lastName: e.target.value})}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            placeholder="john@company.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            placeholder="Minimum 8 characters"
            required
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
            placeholder="Confirm your password"
            required
          />
          {userData.password && userData.confirmPassword && userData.password !== userData.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">Passwords do not match</p>
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
    <Card className="max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Company Details</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your business to customize your experience
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={userData.companyName}
            onChange={(e) => setUserData({...userData, companyName: e.target.value})}
            placeholder="Your Company Inc."
            required
          />
        </div>

        <div>
          <Label htmlFor="companySize">Company Size</Label>
          <Select value={userData.companySize} onValueChange={(value) => setUserData({...userData, companySize: value})}>
            <SelectTrigger>
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

        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select value={userData.industry} onValueChange={(value) => setUserData({...userData, industry: value})}>
            <SelectTrigger>
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

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">What's Next?</h4>
          <p className="text-sm text-blue-700">
            After setup, you'll be able to invite team members, customize your workspace, and start managing your business operations.
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const renderReviewAndPay = () => {
    if (!selectedPlanData) return null;

    return (
      <Card className="max-w-lg mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Review & Complete</CardTitle>
          <p className="text-muted-foreground">
            Review your order and complete your subscription
          </p>
        </CardHeader>
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
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-orange-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-orange-900/10 py-8 px-4 relative overflow-hidden">
      {/* Background Grid and Elements - Matching Landing Page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/80 dark:via-gray-900/60 dark:to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-50/30 dark:to-purple-900/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl floating-element opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl floating-slow opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl floating-element opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-2xl p-2 glass-effect border border-white/30">
                <div className="bg-white dark:bg-transparent p-1 rounded-xl">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-10 h-8 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 rounded-2xl"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                BusinessFlow Pro
              </span>
            </Link>
            <div className="glass-effect border border-white/30 rounded-2xl p-1">
              <LanguageSelector />
            </div>
          </div>
          
          <div className="mb-12 fade-in-up space-y-6" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block">
              <Badge className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                🚀 Start Your Business Transformation
              </Badge>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 animate-gradient-text leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-foreground/70 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              {t('subscribe.title', 'Join thousands of businesses already transforming their operations with our comprehensive platform')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect border border-white/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">Bank-Level Security</span>
              </div>
              <p className="text-sm text-foreground/60">256-bit SSL encryption protects all your data</p>
            </div>
            
            <div className="glass-effect border border-white/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">14-Day Free Trial</span>
              </div>
              <p className="text-sm text-foreground/60">Full access to all features, no commitments</p>
            </div>
            
            <div className="glass-effect border border-white/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">24/7 Support</span>
              </div>
              <p className="text-sm text-foreground/60">Expert help whenever you need it</p>
            </div>
          </div>
        </div>

        {renderStepIndicator()}
        
        <div className="mb-8">
          {renderCurrentStep()}
        </div>

        <div className="flex justify-center space-x-6 fade-in-up" style={{ animationDelay: '0.8s' }}>
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={prevStep}
              className="flex items-center space-x-2 px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 glass-effect border-white/30"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          )}
          
          {currentStep < 3 && (
            <Button 
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className="flex items-center space-x-2 px-8 py-3 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
            >
              <span>Continue</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="glass-effect border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-foreground font-semibold">Need Help?</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Our support team is available 24/7 to assist you
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium hover:underline">
                Chat Support
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium hover:underline">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}