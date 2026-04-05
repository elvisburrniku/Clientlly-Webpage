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
import { useLanguage, t as tr } from "@/lib/i18n";
import { PLAN_F } from "@/lib/translations";
import { LanguageSelector } from "@/components/LanguageSelector";
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";
import Footer from "@/components/Footer";
import clientllyLogo from '@assets/CLIENTLLY_ICON_1753793353861.png';

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}


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

const CheckoutForm = ({ userData, plan, billingPeriod, selectedCurrency }: { 
  userData: UserData; 
  plan: SubscriptionPlan; 
  billingPeriod: 'monthly' | 'yearly';
  selectedCurrency: string;
}) => {
  const { toast } = useToast();
  const { currentLanguage: lang } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setLoadingStage(sq(lang, 'Duke përgatitur pagesën...', 'Preparing payment...', 'Preparando el pago...', 'Zahlung wird vorbereitet...', 'Подготовка на плаќање...') as string);

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
        setLoadingStage(sq(lang, 'Duke hapur faqen e pagesës...', 'Opening payment page...', 'Abriendo página de pago...', 'Zahlungsseite wird geöffnet...', 'Отворање на страницата за плаќање...') as string);
        setTimeout(() => {
          window.open(data.checkoutUrl, '_blank');
          setIsProcessing(false);
          setLoadingStage('');
          toast({ title: sq(lang, "Faqja e pagesës u hap", "Payment page opened", "Página de pago abierta", "Zahlungsseite geöffnet", "Страницата за плаќање е отворена") as string, description: sq(lang, "Përfundoni pagesën në dritaren e re të Stripe.", "Complete the payment in the new Stripe window.", "Complete el pago en la nueva ventana de Stripe.", "Schließen Sie die Zahlung im neuen Stripe-Fenster ab.", "Завршете го плаќањето во новиот Stripe прозорец.") as string });
        }, 600);
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error: any) {
      toast({ title: sq(lang, "Pagesa Dështoi", "Payment Failed", "Pago Fallido", "Zahlung Fehlgeschlagen", "Плаќањето Не Успеа") as string, description: sq(lang, error.message || 'Ndodhi një gabim. Provoni përsëri.', error.message || 'An error occurred. Please try again.', error.message || 'Ocurrió un error. Inténtelo de nuevo.', error.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.', error.message || 'Настана грешка. Обидете се повторно.') as string, variant: "destructive" });
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
              {billingPeriod === 'yearly' ? sq(lang, 'Faturim vjetor', 'Annual billing', 'Facturación anual', 'Jährliche Abrechnung', 'Годишна наплата') : sq(lang, 'Faturim mujor', 'Monthly billing', 'Facturación mensual', 'Monatliche Abrechnung', 'Месечна наплата')}
            </p>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-2xl text-gray-900">
              €{((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice) / 100).toFixed(2)}
            </div>
            <div className="text-xs text-gray-400">/{billingPeriod === 'yearly' ? sq(lang, 'vit', 'yr', 'año', 'Jahr', 'год.') : sq(lang, 'muaj', 'mo', 'mes', 'Mo.', 'мес.')}</div>
            {billingPeriod === 'yearly' && savings > 0 && (
              <div className="text-xs text-emerald-600 font-semibold">{sq(lang, `Kurseni ${Math.round(savings)}%`, `Save ${Math.round(savings)}%`, `Ahorre ${Math.round(savings)}%`, `Sparen Sie ${Math.round(savings)}%`, `Заштедете ${Math.round(savings)}%`)}</div>
            )}
          </div>
        </div>
        <Separator className="my-3" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-600">{sq(lang, "Detajet e llogarisë:", "Account details:", "Detalles de la cuenta:", "Kontodetails:", "Детали за сметката:")}</p>
          <p className="text-xs text-gray-500">{userData.firstName} {userData.lastName} · {userData.email}</p>
          <p className="text-xs text-gray-500">{userData.companyName}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-900">{sq(lang, "Pagesë e sigurt përmes Stripe", "Secure payment via Stripe", "Pago seguro a través de Stripe", "Sichere Zahlung über Stripe", "Безбедно плаќање преку Stripe")}</span>
          </div>
          <p className="text-xs text-gray-500">
            {sq(lang, "Do të ridirektoheni te faqja e sigurt e Stripe ku mund të paguani me kartë kredie, Apple Pay, ose Google Pay.", "You will be redirected to Stripe's secure page where you can pay with credit card, Apple Pay, or Google Pay.", "Será redirigido a la página segura de Stripe donde puede pagar con tarjeta de crédito, Apple Pay o Google Pay.", "Sie werden zur sicheren Stripe-Seite weitergeleitet, wo Sie mit Kreditkarte, Apple Pay oder Google Pay bezahlen können.", "Ќе бидете пренасочени на безбедната страница на Stripe каде што можете да платите со кредитна картичка, Apple Pay или Google Pay.")}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-5 bg-blue-700 rounded text-white text-[8px] font-bold flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-red-500 rounded text-white text-[8px] font-bold flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-blue-500 rounded text-white text-[8px] font-bold flex items-center justify-center">AMEX</div>
            </div>
            <span className="text-[10px] text-gray-400">{sq(lang, "Enkriptim SSL 256-bit", "256-bit SSL encryption", "Cifrado SSL de 256 bits", "256-Bit SSL-Verschlüsselung", "256-битна SSL енкрипција")}</span>
          </div>
        </div>

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
              <CreditCard className="h-4 w-4" />
              <span>{sq(lang, "Paguaj Tani", "Pay Now", "Pagar Ahora", "Jetzt Bezahlen", "Плати Сега")}</span>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{sq(lang, "Duke procesuar...", "Processing...", "Procesando...", "Wird verarbeitet...", "Се обработува...")}</h3>
              <p className="text-sm text-gray-500 mb-3">{loadingStage}</p>
              <p className="text-xs text-gray-400">{sq(lang, "Ju lutem mos e mbyllni këtë dritare", "Please do not close this window", "Por favor no cierre esta ventana", "Bitte schließen Sie dieses Fenster nicht", "Ве молиме не го затворајте овој прозорец")}</p>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-[10px] text-gray-400">
            {sq(lang, "Siguri nga", "Secured by", "Asegurado por", "Gesichert durch", "Обезбедено од")} <span className="font-medium">Stripe</span> · {sq(lang, "Informacioni juaj është i enkriptuar dhe i sigurt", "Your information is encrypted and secure", "Su información está cifrada y segura", "Ihre Daten sind verschlüsselt und sicher", "Вашите информации се шифрирани и безбедни")}
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
  const { currentLanguage: lang } = useLanguage();
  const stepTitles = [
    sq(lang, "Zgjidhni planin e përsosur", "Choose the perfect plan", "Elija el plan perfecto", "Wählen Sie den perfekten Plan", "Изберете го совршениот план"),
    sq(lang, "Krijo Llogari", "Create Account", "Crear Cuenta", "Konto erstellen", "Создади Сметка"),
    sq(lang, "Ekipi & Shtesa", "Team & Add-ons", "Equipo y Complementos", "Team & Erweiterungen", "Тим & Додатоци"),
    sq(lang, "Rishiko & Paguaj", "Review & Pay", "Revisar y Pagar", "Überprüfen & Bezahlen", "Прегледај & Плати"),
  ];
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

  const featureMap: Record<string, typeof PLAN_F[keyof typeof PLAN_F]> = {};
  Object.values(PLAN_F).forEach(t5 => { featureMap[t5.sq] = t5; });
  const tf = (feature: string): string => {
    const clean = feature.replace(/\*\*/g, '');
    const boldF = feature.startsWith("**") && feature.endsWith("**");
    const match = featureMap[clean] ?? featureMap[feature];
    if (!match) return feature;
    const translated = tr(lang, match);
    return boldF && !translated.startsWith("**") ? `**${translated}**` : translated;
  };
  const planName = (name: string) => {
    const n: Record<string, Record<string, string>> = {
      "Starter": { sq: "Starter", en: "Starter", es: "Inicial", de: "Starter", mk: "Стартер" },
      "Professional": { sq: "Profesional", en: "Professional", es: "Profesional", de: "Professionell", mk: "Професионален" },
      "Enterprise": { sq: "Enterprise", en: "Enterprise", es: "Empresarial", de: "Enterprise", mk: "Ентерпрајз" },
    };
    return n[name]?.[lang] ?? name;
  };

  // Keep EUR as default - don't auto-change currency
  useEffect(() => {
    // Always use EUR as default, user can change manually if needed
    setSelectedCurrency('EUR');
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planFromUrl = params.get('plan');
    const billingFromUrl = params.get('billing') as 'monthly' | 'yearly';
    
    if (planFromUrl) {
      setSelectedPlan(planFromUrl);
      setCurrentStep(1);
      window.scrollTo({ top: 0 });
    } else {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            {sq(lang, "Mujor", "Monthly", "Mensual", "Monatlich", "Месечно")}
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {sq(lang, "Vjetor", "Yearly", "Anual", "Jährlich", "Годишно")}
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
                className={`relative p-7 rounded-2xl border-2 transition-all duration-300 ${
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
                      ★ {sq(lang, "Më i Popullarizuari", "Most Popular", "El Más Popular", "Am Beliebtesten", "Најпопуларен")}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{planName(plan.name)}</h3>
                  {billingPeriod === 'yearly' && (
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-sm line-through ${isPopular ? 'text-indigo-300' : 'text-gray-400'}`}>€{(plan.monthlyPrice / 100).toFixed(0)}</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">-15%</span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900'}`}>{displayPrice}</span>
                    <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/{sq(lang, "muaj", "mo", "mes", "Mo.", "мес.")}</span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <div className={`text-xs mt-1 space-y-0.5`}>
                      <p className={isPopular ? 'text-indigo-200' : 'text-gray-400'}>
                        {sq(lang, `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/vit → €${(plan.yearlyPrice / 100).toFixed(0)}/vit`, `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/yr → €${(plan.yearlyPrice / 100).toFixed(0)}/yr`, `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/año → €${(plan.yearlyPrice / 100).toFixed(0)}/año`, `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/Jahr → €${(plan.yearlyPrice / 100).toFixed(0)}/Jahr`, `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/год → €${(plan.yearlyPrice / 100).toFixed(0)}/год`)}
                      </p>
                      <p className="text-emerald-500 font-semibold">
                        {sq(lang, `Kurseni €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/vit`, `Save €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/yr`, `Ahorre €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/año`, `Sparen Sie €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/Jahr`, `Заштедете €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/год.`)}
                      </p>
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature, fi) => {
                    const translated = tf(feature);
                    const isGrow = translated.includes("Le të Rritemi Bashkë") || translated.includes("Let's Grow Together") || translated.includes("Crezcamos Juntos") || translated.includes("Lass uns gemeinsam wachsen") || translated.includes("Да Растеме Заедно");
                    const isBold = translated.startsWith("**") && translated.endsWith("**");
                    if (isGrow) {
                      const dash = translated.indexOf("—");
                      const growTitle = sq(lang, "Le të Rritemi Bashkë", "Let's Grow Together", "Crezcamos Juntos", "Lass uns gemeinsam wachsen", "Да Растеме Заедно");
                      const desc = dash !== -1 ? translated.slice(dash) : "";
                      const detailsLabel = sq(lang, "Detajet", "Details", "Detalles", "Details", "Детали");
                      return (
                        <li key={fi} className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg border cursor-pointer ${isPopular ? 'bg-amber-400/20 border-amber-300/40 hover:bg-amber-400/30' : 'bg-amber-50 border-amber-200 hover:bg-amber-100'} transition-colors`} onClick={(e) => { e.stopPropagation(); window.location.href = '/collaboration'; }}>
                          <span className={`mt-0.5 flex-shrink-0 text-xs font-black ${isPopular ? 'text-amber-300' : 'text-amber-500'}`}>✦</span>
                          <span className="text-sm flex-1">
                            <span className={`font-bold ${isPopular ? 'text-amber-200' : 'text-amber-700'}`}>{growTitle}</span>
                            <span className={`${isPopular ? 'text-amber-300' : 'text-amber-600'}`}> {desc}</span>
                            <span className={`ml-1 text-xs underline ${isPopular ? 'text-amber-300' : 'text-amber-500'}`}>→ {detailsLabel}</span>
                          </span>
                        </li>
                      );
                    }
                    const clean = translated.replace(/\*\*/g, '');
                    return (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-indigo-300' : 'text-indigo-500'}`} />
                        <span className={`text-sm ${isBold ? 'font-semibold' : ''} ${isPopular ? 'text-indigo-100' : 'text-gray-700'}`}>{clean}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedPlan(plan.id);
                      setCurrentStep(1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      isPopular ? 'bg-white text-indigo-700 hover:shadow-lg' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
                    }`}
                  >
                    {sq(lang, "Zgjidhni Planin →", "Select Plan →", "Seleccionar Plan →", "Plan Auswählen →", "Изберете План →")}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <p className="text-center text-xs text-gray-400 mt-6">
        {sq(lang, "Të gjithë planet përfshijnë 16 modulet · Ndryshoni planin kur të dëshironi", "All plans include all 16 modules · Change plans whenever you want", "Todos los planes incluyen los 16 módulos · Cambie de plan cuando quiera", "Alle Pläne umfassen alle 16 Module · Wechseln Sie Pläne jederzeit", "Сите планови ги вклучуваат сите 16 модули · Менувајте планови кога сакате")}
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
              <h2 className="text-xl font-extrabold text-gray-900">{sq(lang, "Krijoni Llogarinë", "Create Account", "Crear Cuenta", "Konto Erstellen", "Креирајте Сметка")}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{sq(lang, "Konfiguroni llogarinë tuaj Clientlly", "Set up your Clientlly account", "Configure su cuenta Clientlly", "Richten Sie Ihr Clientlly-Konto ein", "Поставете ја вашата Clientlly сметка")}</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-7 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Emri", "First Name", "Nombre", "Vorname", "Име")}</Label>
              <Input id="firstName" value={userData.firstName} onChange={(e) => setUserData({...userData, firstName: e.target.value})} placeholder={sq(lang, "Artan", "John", "Juan", "Max", "Иван") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Mbiemri", "Last Name", "Apellido", "Nachname", "Презиме")}</Label>
              <Input id="lastName" value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value})} placeholder={sq(lang, "Hoxha", "Smith", "García", "Müller", "Петров") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Email</Label>
            <Input id="email" type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder={sq(lang, "artan@kompania.com", "john@company.com", "juan@empresa.com", "max@firma.com", "иван@компанија.мк") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Fjalëkalimi", "Password", "Contraseña", "Passwort", "Лозинка")}</Label>
            <Input id="password" type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} placeholder={sq(lang, "Minimum 8 karaktere", "Minimum 8 characters", "Mínimo 8 caracteres", "Mindestens 8 Zeichen", "Минимум 8 карактери") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Konfirmo Fjalëkalimin", "Confirm Password", "Confirmar Contraseña", "Passwort Bestätigen", "Потврди Лозинка")}</Label>
            <Input id="confirmPassword" type="password" value={userData.confirmPassword} onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})} placeholder={sq(lang, "Konfirmo fjalëkalimin", "Confirm password", "Confirmar contraseña", "Passwort bestätigen", "Потврди лозинка") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
            {userData.password && userData.confirmPassword && userData.password !== userData.confirmPassword && (
              <p className="text-xs text-red-600 flex items-center gap-1"><X className="h-3 w-3" /> {sq(lang, "Fjalëkalimet nuk përputhen", "Passwords do not match", "Las contraseñas no coinciden", "Passwörter stimmen nicht überein", "Лозинките не се совпаѓаат")}</p>
            )}
          </div>
          <div className="flex items-start gap-2.5 pt-1">
            <Checkbox id="terms" checked={userData.agreeToTerms} onCheckedChange={(checked) => setUserData({...userData, agreeToTerms: checked as boolean})} className="mt-0.5" />
            <Label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
              {sq(lang, "Pranoj", "I agree to the", "Acepto los", "Ich akzeptiere die", "Ги прифаќам")} <a href="/terms-of-service" target="_blank" className="text-indigo-600 hover:underline">{sq(lang, "Kushtet e Shërbimit", "Terms of Service", "Términos de Servicio", "Nutzungsbedingungen", "Услови за Користење")}</a> {sq(lang, "dhe", "and", "y", "und", "и")} <a href="/privacy-policy" target="_blank" className="text-indigo-600 hover:underline">{sq(lang, "Politikën e Privatësisë", "Privacy Policy", "Política de Privacidad", "Datenschutzrichtlinie", "Политика за Приватност")}</a>
            </Label>
          </div>
          <p className="text-xs text-gray-400 text-center">
            {sq(lang, "Keni tashmë llogari?", "Already have an account?", "Ya tiene una cuenta?", "Bereits ein Konto?", "Веќе имате сметка?")} <a href="/api/login" className="text-indigo-600 hover:underline font-semibold">{sq(lang, "Hyni", "Log in", "Iniciar sesión", "Anmelden", "Најавете се")}</a>
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
              <h2 className="text-xl font-extrabold text-gray-900">{sq(lang, "Detajet e Kompanisë", "Company Details", "Detalles de la Empresa", "Unternehmensdetails", "Детали за Компанијата")}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{sq(lang, "Tregoni pak rreth biznesit tuaj", "Tell us about your business", "Cuéntenos sobre su negocio", "Erzählen Sie uns von Ihrem Unternehmen", "Кажете ни за вашиот бизнис")}</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-7 space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="companyName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Emri i Kompanisë", "Company Name", "Nombre de la Empresa", "Firmenname", "Име на Компанијата")}</Label>
            <Input id="companyName" value={userData.companyName} onChange={(e) => setUserData({...userData, companyName: e.target.value})} placeholder={sq(lang, "Kompania Juaj Sh.p.k.", "Your Company Ltd.", "Su Empresa S.L.", "Ihre Firma GmbH", "Ваша Компанија ДОО") as string} required className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="companySize" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Madhësia e Kompanisë", "Company Size", "Tamaño de la Empresa", "Unternehmensgröße", "Големина на Компанијата")}</Label>
            <Select value={userData.companySize} onValueChange={(value) => setUserData({...userData, companySize: value})}>
              <SelectTrigger className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 text-sm">
                <SelectValue placeholder={sq(lang, "Zgjidhni madhësinë", "Select size", "Seleccionar tamaño", "Größe wählen", "Изберете големина") as string} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">{sq(lang, "1-5 punonjës", "1-5 employees", "1-5 empleados", "1-5 Mitarbeiter", "1-5 вработени")}</SelectItem>
                <SelectItem value="6-20">{sq(lang, "6-20 punonjës", "6-20 employees", "6-20 empleados", "6-20 Mitarbeiter", "6-20 вработени")}</SelectItem>
                <SelectItem value="21-50">{sq(lang, "21-50 punonjës", "21-50 employees", "21-50 empleados", "21-50 Mitarbeiter", "21-50 вработени")}</SelectItem>
                <SelectItem value="51-200">{sq(lang, "51-200 punonjës", "51-200 employees", "51-200 empleados", "51-200 Mitarbeiter", "51-200 вработени")}</SelectItem>
                <SelectItem value="200+">{sq(lang, "200+ punonjës", "200+ employees", "200+ empleados", "200+ Mitarbeiter", "200+ вработени")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="industry" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{sq(lang, "Industria", "Industry", "Industria", "Branche", "Индустрија")}</Label>
            <Select value={userData.industry} onValueChange={(value) => setUserData({...userData, industry: value})}>
              <SelectTrigger className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 text-sm">
                <SelectValue placeholder={sq(lang, "Zgjidhni industrinë", "Select industry", "Seleccionar industria", "Branche wählen", "Изберете индустрија") as string} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">{sq(lang, "Teknologji", "Technology", "Tecnología", "Technologie", "Технологија")}</SelectItem>
                <SelectItem value="consulting">{sq(lang, "Konsulencë", "Consulting", "Consultoría", "Beratung", "Консалтинг")}</SelectItem>
                <SelectItem value="finance">{sq(lang, "Financë & Kontabilitet", "Finance & Accounting", "Finanzas y Contabilidad", "Finanzen & Buchhaltung", "Финансии и Сметководство")}</SelectItem>
                <SelectItem value="healthcare">{sq(lang, "Shëndetësi", "Healthcare", "Salud", "Gesundheitswesen", "Здравство")}</SelectItem>
                <SelectItem value="education">{sq(lang, "Arsim", "Education", "Educación", "Bildung", "Образование")}</SelectItem>
                <SelectItem value="retail">{sq(lang, "Shitje me pakicë", "Retail", "Comercio", "Einzelhandel", "Малопродажба")}</SelectItem>
                <SelectItem value="manufacturing">{sq(lang, "Prodhim", "Manufacturing", "Manufactura", "Produktion", "Производство")}</SelectItem>
                <SelectItem value="real-estate">{sq(lang, "Pasuri të paluajtshme", "Real Estate", "Bienes Raíces", "Immobilien", "Недвижнини")}</SelectItem>
                <SelectItem value="legal">{sq(lang, "Shërbime Ligjore", "Legal Services", "Servicios Legales", "Rechtsdienstleistungen", "Правни Услуги")}</SelectItem>
                <SelectItem value="other">{sq(lang, "Tjetër", "Other", "Otro", "Sonstiges", "Друго")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-xs font-semibold text-indigo-800 mb-1">{sq(lang, "Pas konfigurimit", "After setup", "Después de la configuración", "Nach der Einrichtung", "По поставувањето")}</p>
            <p className="text-xs text-indigo-600 leading-relaxed">{sq(lang, "Do të mund të ftoni anëtarë të ekipit, të personalizoni hapësirën tuaj dhe të filloni menjëherë.", "You'll be able to invite team members, customize your workspace, and get started right away.", "Podrá invitar miembros del equipo, personalizar su espacio de trabajo y comenzar de inmediato.", "Sie können Teammitglieder einladen, Ihren Arbeitsbereich anpassen und sofort loslegen.", "Ќе можете да поканите членови на тимот, да го прилагодите вашиот работен простор и веднаш да започнете.")}</p>
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
                <h2 className="text-xl font-extrabold text-gray-900">{sq(lang, "Rishiko & Paguaj", "Review & Pay", "Revisar y Pagar", "Überprüfen & Bezahlen", "Прегледај & Плати")}</h2>
                <p className="text-sm text-gray-500 mt-0.5">{sq(lang, "Konfirmoni porosinë dhe finalizoni abonimin", "Confirm your order and finalize the subscription", "Confirme su pedido y finalice la suscripción", "Bestätigen Sie Ihre Bestellung und schließen Sie das Abonnement ab", "Потврдете ја нарачката и финализирајте ја претплатата")}</p>
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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Link href="/subscribe" className="text-sm font-semibold text-indigo-600">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            </div>
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <LanguageSelector />
            </div>
            <div className="flex lg:hidden items-center gap-2 ml-auto">
              <LanguageSelector />
              <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2">
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
            <Link href="/subscribe" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            <div className="pt-2 flex flex-col gap-2">
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - only on step 0 */}
      {currentStep === 0 && (
        <div className="pt-28 pb-14 px-6 bg-gradient-to-b from-indigo-50/80 via-white to-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                {sq(lang, "Çmim transparent · Pa kosto të fshehura", "Transparent pricing · No hidden costs", "Precios transparentes · Sin costos ocultos", "Transparente Preise · Keine versteckten Kosten", "Транспарентни цени · Без скриени трошоци")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
                {sq(lang, <>Zgjidhni planin e <span className="text-indigo-600">duhur</span></>, <>Choose the <span className="text-indigo-600">right</span> plan</>, <>Elija el plan <span className="text-indigo-600">correcto</span></>, <>Wählen Sie den <span className="text-indigo-600">richtigen</span> Plan</>, <>Изберете го <span className="text-indigo-600">вистинскиот</span> план</>)}
              </h1>
              <p className="text-lg text-gray-500">
                {sq(lang, "Të gjithë 16 modulet — në çdo plan. Ndryshimi është vetëm në numrin e përdoruesve.", "All 16 modules — in every plan. The only difference is the number of users.", "Los 16 módulos — en cada plan. La diferencia es solo el número de usuarios.", "Alle 16 Module — in jedem Plan. Der Unterschied ist nur die Anzahl der Benutzer.", "Сите 16 модули — во секој план. Разликата е само во бројот на корисници.")}
              </p>
            </div>
            {/* Trust row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: sq(lang, "Mbrojtje e të dhënave", "Data protection", "Protección de datos", "Datenschutz", "Заштита на податоци"), sub: "GDPR & SSL" },
                { icon: CheckCircle, label: sq(lang, "Pa kartë kredie", "No credit card", "Sin tarjeta de crédito", "Keine Kreditkarte", "Без кредитна картичка"), sub: sq(lang, "14 ditë provë", "14 day trial", "14 días de prueba", "14 Tage Testversion", "14 дена проба") },
                { icon: Headphones, label: sq(lang, "Mbështetje 24/7", "24/7 Support", "Soporte 24/7", "24/7-Support", "Поддршка 24/7"), sub: sq(lang, "Ekip real", "Real team", "Equipo real", "Echtes Team", "Реален тим") },
                { icon: ArrowLeft, label: sq(lang, "Anuloni kur doni", "Cancel anytime", "Cancele cuando quiera", "Jederzeit kündigen", "Откажете кога сакате"), sub: sq(lang, "Pa detyrime", "No obligations", "Sin obligaciones", "Keine Verpflichtungen", "Без обврски") },
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
      )}
      {currentStep > 0 && <div className="pt-24" />}

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
                {sq(lang, "Kthehu", "Back", "Volver", "Zurück", "Назад")}
              </button>
            )}
            {currentStep < 3 && (
              <button
                onClick={nextStep}
                disabled={!canProceedToNext()}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {sq(lang, "Vazhdo", "Continue", "Continuar", "Weiter", "Продолжи")}
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