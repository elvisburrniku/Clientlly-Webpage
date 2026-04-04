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
import { Check, ArrowLeft, ArrowRight, User, Users, CreditCard, Shield, Home, Building, Building2, Loader2, Headphones, Menu, X, Sparkles, Mail, Lock, Globe, Clock, Gift, Heart, Zap, CheckCircle } from "lucide-react";
import { InlineSpinner } from "@/components/LoadingStates";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";
import Footer from "@/components/Footer";
import clientllyLogo from '@assets/CLIENTLLY_ICON_1753793353861.png';


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
const stepTitles = ["Choose the perfect plan for your business", "Create Account", "Team & Add-ons", "Review & Pay"];

const CheckoutForm = ({ userData, plan, billingPeriod, selectedCurrency }: { 
  userData: UserData; 
  plan: SubscriptionPlan; 
  billingPeriod: 'monthly' | 'yearly';
  selectedCurrency: string;
}) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'stripe'>('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setLoadingStage(paymentMethod === 'card' ? 'Duke përgatitur pagesën...' : 'Duke u ridirektuar te Stripe...');

    try {
      const response = await fetch('/api/create-account-and-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData, planId: plan.id, billingPeriod }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.checkoutUrl) {
        setLoadingStage('Duke u ridirektuar te pagesa e sigurt...');
        setTimeout(() => { window.location.href = data.checkoutUrl; }, 800);
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error: any) {
      toast({ title: "Pagesa Dështoi", description: error.message || 'Ndodhi një gabim. Provoni përsëri.', variant: "destructive" });
      setIsProcessing(false);
      setLoadingStage('');
    }
  };

  const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  const savings = billingPeriod === 'yearly' ? ((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100 : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
            <p className="text-sm text-gray-500">
              {billingPeriod === 'yearly' ? 'Faturim vjetor' : 'Faturim mujor'}
            </p>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-2xl text-gray-900">
              €{((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice) / 100).toFixed(2)}
            </div>
            <div className="text-xs text-gray-400">/{billingPeriod === 'yearly' ? 'vit' : 'muaj'}</div>
            {billingPeriod === 'yearly' && savings > 0 && (
              <div className="text-xs text-emerald-600 font-semibold">Kurseni {Math.round(savings)}%</div>
            )}
          </div>
        </div>
        <Separator className="my-3" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-600">Detajet e llogarisë:</p>
          <p className="text-xs text-gray-500">{userData.firstName} {userData.lastName} · {userData.email}</p>
          <p className="text-xs text-gray-500">{userData.companyName}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-900">Zgjidhni mënyrën e pagesës:</p>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => setPaymentMethod('card')}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              paymentMethod === 'card'
                ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}>
            <CreditCard className={`h-5 w-5 mb-2 ${paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-400'}`} />
            <p className={`text-sm font-semibold ${paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-700'}`}>Kartë Kredie</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Visa, Mastercard, Amex</p>
          </button>
          <button type="button" onClick={() => setPaymentMethod('stripe')}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              paymentMethod === 'stripe'
                ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}>
            <Shield className={`h-5 w-5 mb-2 ${paymentMethod === 'stripe' ? 'text-indigo-600' : 'text-gray-400'}`} />
            <p className={`text-sm font-semibold ${paymentMethod === 'stripe' ? 'text-indigo-600' : 'text-gray-700'}`}>Stripe Checkout</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Pagesë e sigurt Stripe</p>
          </button>
        </div>

        {paymentMethod === 'card' && (
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
            <p className="text-xs text-gray-500">
              Do të ridirektoheni te formulari i sigurt i kartës së kreditit për të përfunduar pagesën.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-5 bg-blue-700 rounded text-white text-[8px] font-bold flex items-center justify-center">VISA</div>
                <div className="w-8 h-5 bg-red-500 rounded text-white text-[8px] font-bold flex items-center justify-center">MC</div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-[8px] font-bold flex items-center justify-center">AMEX</div>
              </div>
              <span className="text-[10px] text-gray-400">Enkriptim SSL 256-bit</span>
            </div>
          </div>
        )}

        {paymentMethod === 'stripe' && (
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-medium text-purple-700">Stripe Checkout i Sigurt</span>
            </div>
            <p className="text-xs text-purple-600">
              Do të ridirektoheni te faqja e sigurt e Stripe ku mund të paguani me kartë kredie, Apple Pay, ose Google Pay.
            </p>
          </div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <InlineSpinner size="sm" />
              <span className="animate-pulse">{loadingStage}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {paymentMethod === 'card' ? <CreditCard className="h-4 w-4" /> : <Shield className="h-4 w-4" />}
              <span>{paymentMethod === 'card' ? 'Paguaj me Kartë' : 'Vazhdo me Stripe'}</span>
            </div>
          )}
        </Button>

        {isProcessing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-14 h-14 border-4 border-indigo-100 rounded-full"></div>
                  <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                  <CreditCard className="w-5 h-5 text-indigo-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Duke procesuar...</h3>
              <p className="text-sm text-gray-500 mb-3">{loadingStage}</p>
              <p className="text-xs text-gray-400">Ju lutem mos e mbyllni këtë dritare</p>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-[10px] text-gray-400">
            Siguri nga <span className="font-medium">Stripe</span> · Informacioni juaj është i enkriptuar dhe i sigurt
          </p>
        </div>
      </div>
    </form>
  );
};

export default function Subscribe() {
  const { toast } = useToast();
  const [location, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const { locationData, isLoading: locationLoading } = useLocationDetection();
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

  // Keep EUR as default - don't auto-change currency
  useEffect(() => {
    // Always use EUR as default, user can change manually if needed
    setSelectedCurrency('EUR');
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const planFromUrl = params.get('plan');
    const billingFromUrl = params.get('billing') as 'monthly' | 'yearly';
    
    if (planFromUrl) {
      setSelectedPlan(planFromUrl);
      // Always start at step 0 so users can see and confirm their plan selection
      setCurrentStep(0);
    } else {
      // If no plan selected, start at step 0 for plan selection
      setCurrentStep(0);
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
    <div className="flex items-center justify-center gap-2 mb-10">
      {stepTitles.map((title, index) => {
        const Icon = stepIcons[index];
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <div key={index} className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : isCompleted
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-gray-200 bg-white text-gray-400'
              }`}>
                {isCompleted
                  ? <Check className="h-4 w-4" />
                  : <Icon className="h-4 w-4" />
                }
              </div>
              <span className={`hidden sm:block text-xs font-semibold transition-colors ${
                isActive ? 'text-indigo-600' : isCompleted ? 'text-emerald-600' : 'text-gray-400'
              }`}>{title}</span>
            </div>
            {index < stepTitles.length - 1 && (
              <div className={`w-10 h-0.5 mx-3 rounded-full transition-all duration-500 ${
                isCompleted ? 'bg-emerald-400' : 'bg-gray-200'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderPlanSelection = () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mujor
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Vjetor
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">-15%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {plansLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="animate-pulse rounded-2xl border border-gray-200 p-7">
              <div className="h-5 bg-gray-100 rounded mb-3 w-24"></div>
              <div className="h-10 bg-gray-100 rounded mb-6 w-32"></div>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-2"><div className="h-4 w-4 bg-gray-100 rounded-full flex-shrink-0"></div><div className="h-4 bg-gray-100 rounded flex-1"></div></div>
                ))}
              </div>
            </div>
          ))
        ) : (
          plans?.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;
            const isPopular = index === 1;
            const displayPrice = selectedCurrency === 'EUR'
              ? `€${((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100).toFixed(2)}`
              : formatCurrency(convertPrice((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100, 'USD', selectedCurrency), selectedCurrency);

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-7 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  isSelected
                    ? isPopular
                      ? 'border-indigo-500 bg-indigo-600 shadow-xl shadow-indigo-100'
                      : 'border-indigo-400 bg-white shadow-lg shadow-indigo-50'
                    : isPopular
                    ? 'border-indigo-300 bg-indigo-600 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-indigo-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded-full shadow-sm border border-indigo-100">
                      ★ Më i Popullarizuari
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  {billingPeriod === 'yearly' && (
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-sm line-through ${isPopular ? 'text-indigo-300' : 'text-gray-400'}`}>€{(plan.monthlyPrice / 100).toFixed(0)}</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">-15%</span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900'}`}>{displayPrice}</span>
                    <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/muaj</span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <div className={`text-xs mt-1 space-y-0.5`}>
                      <p className={isPopular ? 'text-indigo-200' : 'text-gray-400'}>
                        €{(plan.monthlyPrice * 12 / 100).toFixed(0)}/vit pa zbritje → €{(plan.yearlyPrice / 100).toFixed(0)}/vit
                      </p>
                      <p className="text-emerald-500 font-semibold">
                        Kurseni €{((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/vit
                      </p>
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature, fi) => {
                    const isGrow = feature.includes("Le të Rritemi Bashkë");
                    const isBold = feature.startsWith("**") && feature.endsWith("**");
                    if (isGrow) {
                      const dash = feature.indexOf("—");
                      const desc = dash !== -1 ? feature.slice(dash) : "";
                      return (
                        <li key={fi} className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg border cursor-pointer ${isPopular ? 'bg-amber-400/20 border-amber-300/40 hover:bg-amber-400/30' : 'bg-amber-50 border-amber-200 hover:bg-amber-100'} transition-colors`} onClick={() => { setLocation('/collaboration'); window.scrollTo({top:0}); }}>
                          <span className={`mt-0.5 flex-shrink-0 text-xs font-black ${isPopular ? 'text-amber-300' : 'text-amber-500'}`}>✦</span>
                          <span className="text-sm flex-1">
                            <span className={`font-bold ${isPopular ? 'text-amber-200' : 'text-amber-700'}`}>Le të Rritemi Bashkë</span>
                            <span className={`${isPopular ? 'text-amber-300' : 'text-amber-600'}`}> {desc}</span>
                            <span className={`ml-1 text-xs underline ${isPopular ? 'text-amber-300' : 'text-amber-500'}`}>→ Detajet</span>
                          </span>
                        </li>
                      );
                    }
                    const clean = feature.replace(/\*\*/g, '');
                    return (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-indigo-300' : 'text-indigo-500'}`} />
                        <span className={`text-sm ${isBold ? 'font-semibold' : ''} ${isPopular ? 'text-indigo-100' : 'text-gray-700'}`}>{clean}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan.id); }}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    isSelected
                      ? isPopular ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'
                      : isPopular ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30' : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
                  }`}
                >
                  {isSelected ? <><Check className="inline h-4 w-4 mr-1.5" />Zgjedhur</> : 'Zgjidhni Planin'}
                </button>
              </div>
            );
          })
        )}
      </div>
      <p className="text-center text-xs text-gray-400 mt-6">
        Të gjithë planet përfshijnë 16 modulet · Ndryshoni planin kur të dëshironi
      </p>
    </div>
  );

  const renderAccountCreation = () => (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-50 to-white px-8 pt-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Krijoni Llogarinë</h2>
              <p className="text-sm text-gray-500 mt-0.5">Konfiguroni llogarinë tuaj Clientlly</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-7 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Emri</Label>
              <Input id="firstName" value={userData.firstName} onChange={(e) => setUserData({...userData, firstName: e.target.value})} placeholder="Artan" required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Mbiemri</Label>
              <Input id="lastName" value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value})} placeholder="Hoxha" required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Email</Label>
            <Input id="email" type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="artan@kompania.com" required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Fjalëkalimi</Label>
            <Input id="password" type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} placeholder="Minimum 8 karaktere" required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Konfirmo Fjalëkalimin</Label>
            <Input id="confirmPassword" type="password" value={userData.confirmPassword} onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})} placeholder="Konfirmo fjalëkalimin" required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            {userData.password && userData.confirmPassword && userData.password !== userData.confirmPassword && (
              <p className="text-xs text-red-600 flex items-center gap-1"><X className="h-3 w-3" /> Fjalëkalimet nuk përputhen</p>
            )}
          </div>
          <div className="flex items-start gap-2.5 pt-1">
            <Checkbox id="terms" checked={userData.agreeToTerms} onCheckedChange={(checked) => setUserData({...userData, agreeToTerms: checked as boolean})} className="mt-0.5" />
            <Label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
              Pranoj <a href="/terms-of-service" target="_blank" className="text-indigo-600 hover:underline">Kushtet e Shërbimit</a> dhe <a href="/privacy-policy" target="_blank" className="text-indigo-600 hover:underline">Politikën e Privatësisë</a>
            </Label>
          </div>
          <p className="text-xs text-gray-400 text-center">
            Keni tashmë llogari? <a href="/api/login" className="text-indigo-600 hover:underline font-semibold">Hyni</a>
          </p>
        </div>
      </div>
    </div>
  );

  const renderTeamSetup = () => (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-br from-violet-50 to-white px-8 pt-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center shadow-md shadow-violet-200">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Detajet e Kompanisë</h2>
              <p className="text-sm text-gray-500 mt-0.5">Tregoni pak rreth biznesit tuaj</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-7 space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="companyName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Emri i Kompanisë</Label>
            <Input id="companyName" value={userData.companyName} onChange={(e) => setUserData({...userData, companyName: e.target.value})} placeholder="Kompania Juaj Sh.p.k." required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="companySize" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Madhësia e Kompanisë</Label>
            <Select value={userData.companySize} onValueChange={(value) => setUserData({...userData, companySize: value})}>
              <SelectTrigger className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 text-sm">
                <SelectValue placeholder="Zgjidhni madhësinë" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 punonjës</SelectItem>
                <SelectItem value="6-20">6-20 punonjës</SelectItem>
                <SelectItem value="21-50">21-50 punonjës</SelectItem>
                <SelectItem value="51-200">51-200 punonjës</SelectItem>
                <SelectItem value="200+">200+ punonjës</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="industry" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Industria</Label>
            <Select value={userData.industry} onValueChange={(value) => setUserData({...userData, industry: value})}>
              <SelectTrigger className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 text-sm">
                <SelectValue placeholder="Zgjidhni industrinë" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Teknologji</SelectItem>
                <SelectItem value="consulting">Konsulencë</SelectItem>
                <SelectItem value="finance">Financë & Kontabilitet</SelectItem>
                <SelectItem value="healthcare">Shëndetësi</SelectItem>
                <SelectItem value="education">Arsim</SelectItem>
                <SelectItem value="retail">Shitje me pakicë</SelectItem>
                <SelectItem value="manufacturing">Prodhim</SelectItem>
                <SelectItem value="real-estate">Pasuri të paluajtshme</SelectItem>
                <SelectItem value="legal">Shërbime Ligjore</SelectItem>
                <SelectItem value="other">Tjetër</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-xs font-semibold text-indigo-800 mb-1">Pas konfigurimit</p>
            <p className="text-xs text-indigo-600 leading-relaxed">Do të mund të ftoni anëtarë të ekipit, të personalizoni hapësirën tuaj dhe të filloni menjëherë.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewAndPay = () => {
    if (!selectedPlanData) return null;

    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-50 to-white px-8 pt-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">Rishiko & Paguaj</h2>
                <p className="text-sm text-gray-500 mt-0.5">Konfirmoni porosinë dhe finalizoni abonimin</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-6">
            <CheckoutForm
              userData={userData}
              plan={selectedPlanData}
              billingPeriod={billingPeriod}
              selectedCurrency={selectedCurrency}
            />
          </div>
        </div>
      </div>
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
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Ballina</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Rreth Nesh</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Veçoritë</Link>
              <Link href="/subscribe" className="text-sm font-semibold text-indigo-600">Çmimet</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>
            </div>
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <Link href="/subscribe" className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Blej Tani
              </Link>
              <LanguageSelector />
            </div>
            <div className="flex lg:hidden items-center ml-auto">
              <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2">
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">Ballina</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">Rreth Nesh</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">Veçoritë</Link>
            <Link href="/subscribe" className="block text-sm font-semibold text-indigo-600 py-2">Çmimet</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">Kontakt</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/subscribe" onClick={() => setShowMobileMenu(false)} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">Blej Tani</Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-28 pb-14 px-6 bg-gradient-to-b from-indigo-50/80 via-white to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Çmim transparent · Pa kosto të fshehura
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              Zgjidhni planin e <span className="text-indigo-600">duhur</span>
            </h1>
            <p className="text-lg text-gray-500">
              Të gjithë 16 modulet — në çdo plan. Ndryshimi është vetëm në numrin e përdoruesve.
            </p>
          </div>
          {/* Trust row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "Mbrojtje e të dhënave", sub: "GDPR & SSL" },
              { icon: CheckCircle, label: "Pa kartë kredie", sub: "14 ditë provë" },
              { icon: Headphones, label: "Mbështetje 24/7", sub: "Ekip real" },
              { icon: ArrowLeft, label: "Anuloni kur doni", sub: "Pa detyrime" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{label}</p>
                  <p className="text-[10px] text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-12 px-4 bg-gray-50/50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div id="pricing-section" className="mb-8">
            {renderStepIndicator()}
          </div>
          <div className="mb-8">
            {renderCurrentStep()}
          </div>
          <div className="flex justify-center gap-3 mb-16">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Kthehu
              </button>
            )}
            {currentStep < 3 && (
              <button
                onClick={nextStep}
                disabled={!canProceedToNext()}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Vazhdo
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}