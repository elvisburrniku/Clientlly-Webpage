import { useState, useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '../lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Shield, CreditCard, Lock, CheckCircle } from 'lucide-react';

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
}

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companySize: string;
  industry: string;
}

const CheckoutForm = ({ plan, billingPeriod, formData }: { 
  plan: Plan; 
  billingPeriod: 'monthly' | 'yearly';
  formData: CheckoutFormData;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const createSubscriptionMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/create-account-and-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: (data: any) => {
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      }
    },
    onError: () => {
      toast({
        title: "Payment Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    
    setIsProcessing(true);

    createSubscriptionMutation.mutate({
      userData: formData,
      planId: plan.id,
      billingPeriod
    });
  };

  const price = billingPeriod === 'yearly' ? plan.yearlyPrice / 100 : plan.monthlyPrice / 100;
  const yearlyDiscount = billingPeriod === 'yearly' ? Math.round(((plan.monthlyPrice * 12) - plan.yearlyPrice) / 100) : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Plan Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name} Plan</h3>
            <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              €{price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              per {billingPeriod === 'yearly' ? 'year' : 'month'}
            </div>
            {yearlyDiscount > 0 && (
              <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                Save €{yearlyDiscount}/year
              </div>
            )}
          </div>
        </div>
        
        {/* Top Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {plan.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300" 
                    dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-600 dark:text-blue-400">$1</strong>') }} />
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Information</h3>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#374151',
                  '::placeholder': {
                    color: '#9CA3AF',
                  },
                },
                invalid: {
                  color: '#EF4444',
                },
              },
            }}
          />
        </div>
      </div>

      {/* Security Notice */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <Shield className="w-4 h-4 text-green-500" />
        <span>Your payment information is encrypted and secure</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing || createSubscriptionMutation.isPending}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isProcessing || createSubscriptionMutation.isPending ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Lock className="w-5 h-5" />
            <span>Complete Subscription - €{price.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        By completing your purchase, you agree to our{' '}
        <a href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
};

export default function CheckoutPage() {
  const [, params] = useRoute('/checkout/:planId/:billingPeriod');
  const [, setLocation] = useLocation();
  
  const planId = params?.planId || 'professional';
  const billingPeriod = (params?.billingPeriod as 'monthly' | 'yearly') || 'monthly';

  // Get user data from sessionStorage (from subscribe form)
  const [formData, setFormData] = useState<CheckoutFormData>(() => {
    const stored = sessionStorage.getItem('checkoutData');
    return stored ? JSON.parse(stored) : {
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
      companySize: '',
      industry: ''
    };
  });

  const { data: plans = [] } = useQuery({
    queryKey: ['/api/subscription-plans'],
  });

  const plan = (plans as Plan[]).find((p: Plan) => p.id === planId);

  useEffect(() => {
    // If no plan found or no form data, redirect to subscribe
    if (!plan || !formData.email) {
      setLocation('/subscribe');
    }
  }, [plan, formData.email, setLocation]);

  if (!plan) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setLocation('/subscribe')}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Plans</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="BusinessFlow Pro" 
                  className="w-8 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  BusinessFlow Pro
                </span>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Almost there!</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Complete Your Subscription
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              You're just one step away from streamlining your business operations with BusinessFlow Pro.
            </p>
          </div>

          {/* Customer Info Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Customer</span>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
                <p className="font-semibold text-gray-900 dark:text-white">{formData.email}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Company</span>
                <p className="font-semibold text-gray-900 dark:text-white">{formData.companyName}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Industry</span>
                <p className="font-semibold text-gray-900 dark:text-white">{formData.industry}</p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <Elements stripe={stripePromise}>
              <CheckoutForm 
                plan={plan} 
                billingPeriod={billingPeriod}
                formData={formData}
              />
            </Elements>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Lock className="w-4 h-4 text-blue-500" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="w-4 h-4 text-purple-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}