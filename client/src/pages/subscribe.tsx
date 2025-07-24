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
    <div className="max-w-6xl mx-auto fade-in-up flex-1 flex flex-col justify-center" style={{ animationDelay: '0.3s' }}>
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1 w-full max-w-xs mx-auto">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Yearly
            </button>
            <div
              className={`absolute top-1 bottom-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md shadow-sm transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'left-1 w-[calc(50%-4px)]'
                  : 'right-1 w-[calc(50%-4px)]'
              }`}
            />
          </div>
          {billingPeriod === 'yearly' && (
            <div className="mt-2 text-center">
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">Save 17%</span>
            </div>
          )}
        </div>
      </div>
      
      <CardContent className="space-y-6 p-0">

        <div className="grid md:grid-cols-3 gap-4">
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
                className={`relative hover-lift transition-all duration-500 scale-in fade-in-up ${
                  index === 1 ? 'border-2 border-primary shadow-2xl glass-effect animate-float' : 'border border-border/50'
                } ${isSelected ? 'ring-2 ring-primary shadow-xl' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                    <div className="mt-2 relative">
                      <span className={`text-4xl font-bold gradient-text mb-1 transition-all duration-500 transform hover:scale-110 ${
                        isSelected ? 'text-white' : ''
                      }`}>
                        ${Math.floor(price / 100)}
                      </span>
                      <span className={`text-lg ml-1 ${
                        isSelected ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        /{billingPeriod === 'yearly' ? 'month' : 'month'}
                      </span>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Billed ${Math.floor((price * 12) / 100)} yearly
                        </div>
                      )}
                      {billingPeriod === 'yearly' && (
                        <div className="mt-2">
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Save 17%</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className={`h-4 w-4 ${
                          isSelected ? 'text-white' : 'text-green-500'
                        }`} />
                        <span className={`text-sm ${
                          isSelected ? 'text-white' : 'text-black'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 transition-all duration-300 transform hover:scale-105"
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {isSelected ? (
                        <div className="flex items-center space-x-2">
                          <Check className="h-4 w-4" />
                          <span>Selected</span>
                        </div>
                      ) : (
                        'Buy Now'
                      )}
                    </Button>
                    {plan.id === 'basic' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        Start Your Trial
                      </Button>
                    )}
                    {plan.id !== 'basic' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        Start Your Trial
                      </Button>
                    )}
                  </div>
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
    <div className="h-screen bg-white py-4 px-4 relative overflow-hidden">
      {/* Background Grid Pattern - Matching Landing Page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
        <div className="text-center mb-8 fade-in">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-black">
                BusinessFlow Pro
              </span>
            </Link>
            <LanguageSelector />
          </div>
          
          <div className="mb-6 fade-in-up space-y-3" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
              Choose Your Plan
            </h1>
          </div>
        </div>

        {renderStepIndicator()}
        
        <div className="mb-8">
          {renderCurrentStep()}
        </div>

        <div className="flex justify-center space-x-4 mt-6 fade-in-up" style={{ animationDelay: '0.8s' }}>
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={prevStep}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          )}
          
          {currentStep < 3 && (
            <Button 
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
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