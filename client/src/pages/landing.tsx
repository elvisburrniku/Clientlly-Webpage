import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, Receipt, Users, CreditCard, BarChart3, Building2, Package,
  Clock, Check, Shield, ChevronDown, Menu, X, ArrowRight, Star,
  TrendingUp, Headphones, ExternalLink, Zap, Globe, CheckCircle
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from '@assets/CLIENTLLY_ICON_1753793353861.png';

interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

const sq = (lang: string, albanian: string, english: string) =>
  lang === 'sq' ? albanian : english;

export default function Landing() {
  const { toast } = useToast();
  const { t, currentLanguage } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const { data: plans = [] } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  const features = [
    {
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      accent: "blue",
      title: sq(currentLanguage, "Faturim Profesional", "Professional Invoicing"),
      desc: sq(currentLanguage, "Fatura të personalizuara & ndjekje pagesash", "Custom invoices & payment tracking"),
      href: "/features/invoicing",
    },
    {
      icon: Receipt,
      color: "from-emerald-500 to-emerald-600",
      accent: "emerald",
      title: sq(currentLanguage, "Gjurmim i Shpenzimeve", "Smart Expense Tracking"),
      desc: sq(currentLanguage, "Shpenzime të organizuara për kohën e taksave", "Organized expenses for tax time"),
      href: "/features/expenses",
    },
    {
      icon: CreditCard,
      color: "from-rose-500 to-rose-600",
      accent: "rose",
      title: sq(currentLanguage, "Menaxhim Borxhesh", "Debt Management"),
      desc: sq(currentLanguage, "Gjurmo borxhet & planifiko pagesat", "Track debts & payment scheduling"),
      href: "/features/debt",
    },
    {
      icon: BarChart3,
      color: "from-violet-500 to-violet-600",
      accent: "violet",
      title: sq(currentLanguage, "Raporte & Analitikë", "Insights & Reports"),
      desc: sq(currentLanguage, "Analitikë biznesi & planifikim cash flow", "Business analytics & cash flow planning"),
      href: "/features/reports",
    },
    {
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      accent: "indigo",
      title: sq(currentLanguage, "Menaxhim Klientësh", "Client Management"),
      desc: sq(currentLanguage, "Profilet, projektet & gjurmimi i komunikimit", "Profiles, projects & communication tracking"),
      href: "/features/clients",
    },
    {
      icon: Building2,
      color: "from-amber-500 to-amber-600",
      accent: "amber",
      title: sq(currentLanguage, "Menaxhim Furnitorësh", "Vendor Management"),
      desc: sq(currentLanguage, "Furnitorët, porositë & analitika e performancës", "Suppliers, orders & performance analytics"),
      href: "/features/vendors",
    },
    {
      icon: Package,
      color: "from-teal-500 to-teal-600",
      accent: "teal",
      title: sq(currentLanguage, "Menaxhim Inventari", "Inventory Management"),
      desc: sq(currentLanguage, "Gjurmim stoku & menaxhim magazinash", "Stock tracking & warehouse management"),
      href: "/features/inventory",
    },
    {
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      accent: "orange",
      title: sq(currentLanguage, "Prezencë e Zgjuar", "Smart Attendance"),
      desc: sq(currentLanguage, "Gjurmim GPS, analitikë ekipi", "GPS tracking, team analytics"),
      href: "/features/attendance",
    },
  ];

  const stats = [
    { value: "200+", label: sq(currentLanguage, "Klientë na Besojnë", "Clients Trust Us") },
    { value: "12K+", label: sq(currentLanguage, "Fatura të Përpunuara", "Invoices Processed") },
    { value: "5", label: sq(currentLanguage, "Vende në Mbarë Botën", "Countries Worldwide") },
    { value: "99.9%", label: sq(currentLanguage, "Besueshmëria e Kohës së Punës", "Uptime Reliability") },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600",
      title: sq(currentLanguage, "Kurseni 15+ Orë në Javë", "Save 15+ Hours Weekly"),
      desc: sq(currentLanguage, "Automatizoni detyrat e përsëritura dhe fokusohuni në rritjen e biznesit tuaj", "Automate repetitive tasks and focus on growing your business"),
    },
    {
      icon: Zap,
      color: "bg-emerald-50 text-emerald-600",
      title: sq(currentLanguage, "Rritni të Ardhurat me 30%", "Grow Revenue by 30%"),
      desc: sq(currentLanguage, "Bizneset që përdorin Clientlly raportojnë rritje mesatare të të ardhurave prej 30%", "Businesses using Clientlly report an average 30% revenue increase"),
    },
    {
      icon: Shield,
      color: "bg-violet-50 text-violet-600",
      title: sq(currentLanguage, "Eliminoni 95% të Gabimeve", "Eliminate 95% of Errors"),
      desc: sq(currentLanguage, "Automatizimi i llogaritjeve redukton gabimet njerëzore pothuajse plotësisht", "Calculation automation reduces human errors nearly completely"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2.5">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-lg font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Rreth Nesh", "About Us")}
              </Link>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Veçoritë", "Features")}
              </a>
              <a href="#pricing-section" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Çmimet", "Pricing")}
              </a>
              <button onClick={() => window.location.href = '/contact'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Kontakt", "Contact")}
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button onClick={() => window.location.href = "/api/login"} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
                {sq(currentLanguage, "Hyr", "Login")}
              </button>
              <button
                onClick={() => window.location.href = '/subscribe'}
                className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {sq(currentLanguage, "Blej Tani", "Buy Now")}
              </button>
              <button
                onClick={() => window.location.href = "/trial"}
                className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {sq(currentLanguage, "Provo Falas", "Free Trial")}
              </button>
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(currentLanguage, "Rreth Nesh", "About Us")}</Link>
            <a href="#features" className="block text-sm font-medium text-gray-700 py-2">{sq(currentLanguage, "Veçoritë", "Features")}</a>
            <a href="#pricing-section" className="block text-sm font-medium text-gray-700 py-2">{sq(currentLanguage, "Çmimet", "Pricing")}</a>
            <button onClick={() => window.location.href = '/contact'} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(currentLanguage, "Kontakt", "Contact")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = "/api/login"} className="text-sm font-medium text-gray-600 py-2">{sq(currentLanguage, "Hyr", "Login")}</button>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(currentLanguage, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(currentLanguage, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-b from-indigo-50/60 via-white to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(currentLanguage, "I besuar nga mbi 200 biznese", "Trusted by 200+ businesses worldwide")}
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            {sq(currentLanguage,
              <>Gjithçka që <span className="text-indigo-600">nevojitet</span><br />për biznesin tuaj</>,
              <>Everything you need<br />to <span className="text-indigo-600">run your business</span></>
            )}
          </h1>

          <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {sq(currentLanguage,
              "Fuqizoni biznesin tuaj me softuer llogaritie gjithëpërfshirëse. Thjeshtoni operacionet, rrisni produktivitetin dhe nxitni rritjen.",
              "Empower your business with all-in-one accounting software. Streamline operations, boost productivity, and accelerate growth."
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {sq(currentLanguage, "Fillo Provën 14-Ditore", "Start 14-Day Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => window.location.href = "/subscribe"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all duration-200 shadow-sm"
            >
              {sq(currentLanguage, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              { icon: Shield, label: sq(currentLanguage, "Mbrojtje e të dhënave", "Data protection"), href: "/data-protection" },
              { icon: Check, label: sq(currentLanguage, "Konfigurim falas", "Free setup & migration"), href: "/setup-migration" },
              { icon: Headphones, label: sq(currentLanguage, "Mbështetje 24/7", "24/7 expert support"), href: "/expert-support" },
              { icon: Shield, label: sq(currentLanguage, "Siguri bankare", "Bank-level security"), href: "/bank-security" },
            ].map(({ icon: Icon, label, href }) => (
              <button key={label} onClick={() => window.location.href = href}
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group">
                <Icon className="h-4 w-4 text-gray-400 group-hover:text-indigo-500" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(currentLanguage, "Veçoritë", "Features")}
            </p>
            <h2 id="features-title" className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(currentLanguage, "Veçoritë që ju nevojiten.", "The features you need.")}
              <span className="text-indigo-600"> {sq(currentLanguage, "Gjithçka në një vend", "All in one place")}</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {sq(currentLanguage, "Nuk ka nevojë të manipuloni shumë mjete. Gjithçka që nevojitet biznesi juaj në një platformë.", "No more juggling multiple tools. Everything your business needs in one powerful platform.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, color, accent, title, desc, href }) => (
              <a
                key={href}
                href={href}
                className="group relative p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="text-xs font-semibold text-indigo-600 group-hover:gap-1.5 flex items-center gap-1 transition-all">
                  {sq(currentLanguage, "Mëso më shumë", "Learn more")} <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => window.location.href = "/compare-features"}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              {sq(currentLanguage, "Krahasoni veçoritë e planeve", "Compare plan features")}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(currentLanguage, "Përfitimet", "Benefits")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(currentLanguage, "Pse bizneset zgjedhin Clientlly", "Why businesses choose Clientlly")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className={`inline-flex p-3 rounded-xl ${color} bg-opacity-10 mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's grow together */}
      <section className="py-24 px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-4">
                {sq(currentLanguage, "Komuniteti", "Community")}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(currentLanguage, "Le të rritemi bashkë", "Let's grow together")}
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                {sq(currentLanguage,
                  "Bashkohuni me komunitetin tonë të bizneseve në rritje. Ne zhvillojmë veçori bazuar në sugjerimet tuaja dhe ofrojmë mbështetje dedikuar.",
                  "Join our community of growing businesses. We build features based on your suggestions and offer dedicated support."
                )}
              </p>
              <button
                onClick={() => window.location.href = "/collaboration"}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
              >
                {sq(currentLanguage, "Mëso Më Shumë", "Learn More")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: sq(currentLanguage, "Zhvillim i Shpejtë", "Rapid Development"), desc: sq(currentLanguage, "Idetë tuaja bëhen realitet brenda javësh", "Your ideas become reality within weeks") },
                { icon: Users, title: sq(currentLanguage, "Komunitet i Parë", "Community First"), desc: sq(currentLanguage, "Platforma e ndërtuar mbi sugjerimet tuaja", "Platform built on your suggestions") },
                { icon: Globe, title: sq(currentLanguage, "Mbështetje Ekspertësh", "Expert Support"), desc: sq(currentLanguage, "Qasje direkte te ekipi ynë i ekspertëve", "Direct access to our expert team") },
                { icon: TrendingUp, title: sq(currentLanguage, "Rritje e Përbashkët", "Shared Growth"), desc: sq(currentLanguage, "Ne rritemi kur rriteni edhe ju", "We grow when you grow") },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Icon className="h-5 w-5 text-indigo-200 mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-indigo-200 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(currentLanguage, "Çmimet", "Pricing")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(currentLanguage, "Zgjidhni planin e duhur", "Choose the right plan")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {sq(currentLanguage, "Plane të thjeshta, transparente. Pa surpriza.", "Simple, transparent pricing. No surprises.")}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-1 mt-8 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {sq(currentLanguage, "Mujor", "Monthly")}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {sq(currentLanguage, "Vjetor", "Yearly")}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              const isPopular = index === 1;
              return (
                <div
                  key={plan.id}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    isPopular
                      ? 'border-indigo-500 bg-indigo-600 shadow-xl shadow-indigo-100'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                        {sq(currentLanguage, "Më i Popullarizuari", "Most Popular")}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                        €{price}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
                        /{sq(currentLanguage, "muaj", "mo")}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className={`text-xs mt-1 ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
                        {sq(currentLanguage, "Faturuar vjetor", "Billed annually")}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 6).map((feature, fi) => {
                      const clean = feature.replace(/\*\*/g, '');
                      return (
                        <li key={fi} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-indigo-300' : 'text-indigo-500'}`} />
                          <span className={`text-sm ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>{clean}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="space-y-2">
                    <button
                      onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isPopular
                          ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {sq(currentLanguage, "Blej Tani", "Buy Now")}
                    </button>
                    <button
                      onClick={() => window.location.href = "/trial"}
                      className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 border ${
                        isPopular
                          ? 'border-indigo-400 text-indigo-100 hover:bg-indigo-500'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {sq(currentLanguage, "Fillo Provën", "Start Trial")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(currentLanguage,
              <>Gati të besoni <span className="text-indigo-400">biznesin tuaj</span> tek ne?</>,
              <>Ready to trust <span className="text-indigo-400">your business</span> with us?</>
            )}
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(currentLanguage,
              "Bashkohuni me qindra biznese që kanë thjeshtuar operacionet e tyre me Clientlly. Garanci suksesi, mbështetje ekspertësh.",
              "Join hundreds of businesses who have streamlined their operations with Clientlly. Success guarantee, expert support."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-sm"
            >
              {sq(currentLanguage, "Fillo Provën Tënde", "Start Your Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => window.location.href = "/subscribe"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
            >
              {sq(currentLanguage, "Blej Tani", "Buy Now")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
