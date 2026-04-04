import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ChatBot from "@/components/ChatBot";
import { 
  FileText, Receipt, Users, CreditCard, BarChart3, Building2, Package,
  Clock, Check, Shield, ChevronDown, Menu, X, ArrowRight,
  TrendingUp, Headphones, Zap, Globe, CheckCircle, Star
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

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

export default function Landing() {
  const { currentLanguage } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const { data: plans = [] } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  const features = [
    {
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-200",
      title: sq(currentLanguage, "Faturim Profesional", "Professional Invoicing"),
      desc: sq(currentLanguage, "Krijo fatura profesionale, gjurmo pagesat dhe dërgo reminders automatike.", "Create professional invoices, track payments, and send automatic reminders."),
      href: "/features/invoicing",
    },
    {
      icon: Receipt,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200",
      title: sq(currentLanguage, "Gjurmim Shpenzimesh", "Expense Tracking"),
      desc: sq(currentLanguage, "Kategorizoni shpenzimet, gjurmoni fatura dhe përgatituni për taksën automatikisht.", "Categorize expenses, track receipts, and get ready for tax season automatically."),
      href: "/features/expenses",
    },
    {
      icon: CreditCard,
      color: "from-rose-500 to-rose-600",
      bg: "bg-rose-50",
      border: "hover:border-rose-200",
      title: sq(currentLanguage, "Menaxhim Borxhesh", "Debt Management"),
      desc: sq(currentLanguage, "Kontrolloni borxhet, planifikoni shlyerjet dhe qëndroni larg stresit financiar.", "Track debts, schedule repayments and stay ahead of your financial obligations."),
      href: "/features/debt",
    },
    {
      icon: BarChart3,
      color: "from-violet-500 to-violet-600",
      bg: "bg-violet-50",
      border: "hover:border-violet-200",
      title: sq(currentLanguage, "Raporte & Analitikë", "Insights & Reports"),
      desc: sq(currentLanguage, "Merrni vendime të informuara me raporte të detajuara dhe analitikë të biznesit.", "Make informed decisions with detailed reports and actionable business analytics."),
      href: "/features/reports",
    },
    {
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200",
      title: sq(currentLanguage, "Menaxhim Klientësh", "Client Management"),
      desc: sq(currentLanguage, "Mbani gjurmët e çdo klienti — historikun, projektet dhe komunikimet në një vend.", "Keep track of every client — history, projects and communications in one place."),
      href: "/features/clients",
    },
    {
      icon: Building2,
      color: "from-amber-500 to-amber-600",
      bg: "bg-amber-50",
      border: "hover:border-amber-200",
      title: sq(currentLanguage, "Menaxhim Furnitorësh", "Vendor Management"),
      desc: sq(currentLanguage, "Organizoni marrëdhëniet me furnitorët, porositë dhe performancën e tyre.", "Organize supplier relationships, purchase orders and their performance."),
      href: "/features/vendors",
    },
    {
      icon: Package,
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-50",
      border: "hover:border-teal-200",
      title: sq(currentLanguage, "Menaxhim Inventari", "Inventory Management"),
      desc: sq(currentLanguage, "Kontrolloni stokun, merrni alarme kur produktet po mbarojnë dhe optimizoni magazinën.", "Control your stock, get low-stock alerts and optimize your warehouse."),
      href: "/features/inventory",
    },
    {
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      border: "hover:border-orange-200",
      title: sq(currentLanguage, "Prezencë e Zgjuar", "Smart Attendance"),
      desc: sq(currentLanguage, "Gjurmoni prezencën e ekipit me GPS, raporte automatike dhe menaxhim turnesh.", "Track team attendance with GPS, automatic reports and shift management."),
      href: "/features/attendance",
    },
  ];

  const stats = [
    { value: "200+", label: sq(currentLanguage, "Biznese na Besojnë", "Businesses Trust Us") },
    { value: "12K+", label: sq(currentLanguage, "Fatura Mujore", "Monthly Invoices") },
    { value: "5", label: sq(currentLanguage, "Vende", "Countries") },
    { value: "99.9%", label: sq(currentLanguage, "Kohë Pune", "Uptime") },
  ];

  const testimonials = [
    {
      name: "Artan Hoxha",
      role: sq(currentLanguage, "Pronar, Hoxha & Partners", "Owner, Hoxha & Partners"),
      text: sq(currentLanguage, "Clientlly na kurseu mbi 12 orë në javë. Faturimi dhe gjurmimi i shpenzimeve janë bërë shumë të thjeshta.", "Clientlly saved us over 12 hours a week. Invoicing and expense tracking became so simple."),
    },
    {
      name: "Blerta Krasniqi",
      role: sq(currentLanguage, "CEO, TechStart Kosovo", "CEO, TechStart Kosovo"),
      text: sq(currentLanguage, "Platforma më e mirë për biznese të vogla. Çdo gjë që nevojitet — në një vend.", "The best platform for small businesses. Everything you need — in one place."),
    },
    {
      name: "Mikel Doda",
      role: sq(currentLanguage, "Drejtor Financiar, Doda Group", "Finance Director, Doda Group"),
      text: sq(currentLanguage, "Raportet janë fantastike. Tani e di saktësisht si po shkon biznesi çdo ditë.", "The reports are fantastic. Now I know exactly how the business is doing every day."),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            {/* Logo — majtas */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>

            {/* Nav links — qendër absolute */}
            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-semibold text-indigo-600 transition-colors">
                {sq(currentLanguage, "Ballina", "Home")}
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Rreth Nesh", "About")}
              </Link>
              <a href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Veçoritë", "Features")}
              </a>
              <a href="#pricing-section" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Çmimet", "Pricing")}
              </a>
              <button onClick={() => window.location.href = '/contact'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(currentLanguage, "Kontakt", "Contact")}
              </button>
            </div>

            {/* Butonat — djathtas */}
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(currentLanguage, "Blej Tani", "Buy Now")}
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
            <Link href="/" className="block text-sm font-semibold text-indigo-600 py-2" onClick={() => setShowMobileMenu(false)}>{sq(currentLanguage, "Ballina", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(currentLanguage, "Rreth Nesh", "About")}</Link>
            <a href="/features" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(currentLanguage, "Veçoritë", "Features")}</a>
            <a href="#pricing-section" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(currentLanguage, "Çmimet", "Pricing")}</a>
            <button onClick={() => { window.location.href = '/contact'; setShowMobileMenu(false); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(currentLanguage, "Kontakt", "Contact")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(currentLanguage, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(currentLanguage, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="anim-fade inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(currentLanguage, "Besuar nga 200+ biznese në Ballkan", "Trusted by 200+ businesses across the Balkans")}
          </div>

          {/* Headline */}
          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {sq(currentLanguage,
              <>Menaxho biznesin<br /><span className="text-indigo-600">gjithçka në një vend</span></>,
              <>Run your entire<br /><span className="text-indigo-600">business in one place</span></>
            )}
          </h1>

          {/* Subheadline */}
          <p className="anim-rise anim-d2 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
            {sq(currentLanguage,
              "Clientlly është platforma gjithëpërfshirëse që kombinon faturimin, shpenzimet, klientët, inventarin dhe shumë më tepër — në një ndërfaqe të thjeshtë dhe elegante.",
              "Clientlly is the all-in-one platform combining invoicing, expenses, clients, inventory and more — in one simple, elegant interface."
            )}
          </p>
          <p className="anim-rise anim-d3 text-base text-gray-400 max-w-xl mx-auto mb-10">
            {sq(currentLanguage,
              "Pa nevojë për shumë mjete. Pa konfuzion. Vetëm rezultate.",
              "No more juggling tools. No confusion. Just results."
            )}
          </p>

          {/* CTAs */}
          <div className="anim-rise anim-d4 flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {sq(currentLanguage, "Fillo Provën 14-Ditore — Falas", "Start 14-Day Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => window.location.href = "#pricing-section"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all duration-200 shadow-sm"
            >
              {sq(currentLanguage, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>

          {/* Trust row */}
          <div className="anim-fade anim-d5 flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            {[
              { icon: Shield, label: sq(currentLanguage, "Mbrojtje e të dhënave", "Data protection"), href: "/data-protection" },
              { icon: Check, label: sq(currentLanguage, "Konfigurim falas", "Free setup"), href: "/setup-migration" },
              { icon: Headphones, label: sq(currentLanguage, "Mbështetje 24/7", "24/7 support"), href: "/expert-support" },
              { icon: Shield, label: sq(currentLanguage, "Siguri bankare", "Bank security"), href: "/bank-security" },
            ].map(({ icon: Icon, label, href }) => (
              <button key={String(label)} onClick={() => window.location.href = href}
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group">
                <Icon className="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-6 lg:px-8 border-y border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div key={String(label)} className={`text-center anim-rise anim-d${i + 1}`}>
                <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(currentLanguage, "Veçoritë", "Features")}
            </p>
            <h2 id="features-title" className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(currentLanguage, "Gjithçka që i nevojitet biznesit tuaj", "Everything your business needs")}
              <span className="block text-indigo-600">{sq(currentLanguage, "në një platformë", "in one platform")}</span>
            </h2>
            <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto">
              {sq(currentLanguage,
                "Ndaloni së paguri për 5 aplikacione të ndryshme. Me Clientlly, gjithçka është e integruar dhe e thjeshtë.",
                "Stop paying for 5 different apps. With Clientlly, everything is integrated and simple."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, color, bg, border, title, desc, href }, i) => (
              <a
                key={href}
                href={href}
                className={`anim-scale anim-d${Math.min(i + 1, 8)} group relative p-6 bg-white border border-gray-100 ${border} rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="text-xs font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  {sq(currentLanguage, "Mëso më shumë", "Learn more")} <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => window.location.href = "/compare-features"}
              className="anim-fade anim-d5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              {sq(currentLanguage, "Krahaso të gjitha veçoritë", "Compare all features")}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTLLY ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">
                {sq(currentLanguage, "Pse Clientlly", "Why Clientlly")}
              </p>
              <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                {sq(currentLanguage,
                  <>Bizneset që e zgjedhin<br /><span className="text-indigo-600">kursejnë kohë & para</span></>,
                  <>Businesses that choose it<br /><span className="text-indigo-600">save time & money</span></>
                )}
              </h2>
              <p className="anim-rise anim-d2 text-gray-500 text-lg leading-relaxed mb-8">
                {sq(currentLanguage,
                  "Shumica e bizneseve humbasin orë të çmuara çdo javë duke menaxhuar spreadsheets, aplikacione të ndryshme dhe procese manuale. Clientlly i zëvendëson të gjitha.",
                  "Most businesses waste precious hours every week managing spreadsheets, different apps and manual processes. Clientlly replaces them all."
                )}
              </p>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, color: "text-indigo-600 bg-indigo-50", stat: sq(currentLanguage, "15+ orë të kursyera/javë", "15+ hours saved per week"), desc: sq(currentLanguage, "Automatizim i plotë i detyrave të përsëritura", "Full automation of repetitive tasks") },
                  { icon: Zap, color: "text-emerald-600 bg-emerald-50", stat: sq(currentLanguage, "+30% të ardhura mesatare", "+30% average revenue"), desc: sq(currentLanguage, "Bizneset tona raportojnë rritje reale", "Our businesses report real growth") },
                  { icon: Shield, color: "text-violet-600 bg-violet-50", stat: sq(currentLanguage, "95% më pak gabime", "95% fewer errors"), desc: sq(currentLanguage, "Llogaritjet automatike eliminojnë gabimet njerëzore", "Automatic calculations eliminate human errors") },
                ].map(({ icon: Icon, color, stat, desc }, i) => (
                  <div key={String(stat)} className={`anim-rise anim-d${i + 2} flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors`}>
                    <div className={`flex-shrink-0 p-2.5 rounded-xl ${color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{stat}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map(({ name, role, text }, i) => (
                <div key={name} className={`anim-scale anim-d${i + 1} p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300`}>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{text}"</p>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{name}</div>
                    <div className="text-gray-500 text-xs">{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="py-24 px-6 lg:px-8 bg-indigo-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-12 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-12 w-48 h-48 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="anim-fade text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-4">
                {sq(currentLanguage, "Komuniteti", "Community")}
              </p>
              <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(currentLanguage, "Le të rritemi bashkë", "Let's grow together")}
              </h2>
              <p className="anim-rise anim-d2 text-indigo-200 text-lg leading-relaxed mb-8">
                {sq(currentLanguage,
                  "Platforma jonë ndërtohet bashkë me ju. Sugjerojini idetë tuaja dhe ekipi ynë i zhvillimit do t'i realizojë — falas. Suksesi juaj është prioriteti ynë.",
                  "Our platform is built together with you. Share your ideas and our team will implement them — at no extra cost. Your success is our priority."
                )}
              </p>
              <button
                onClick={() => window.location.href = "/collaboration"}
                className="anim-rise anim-d3 inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
              >
                {sq(currentLanguage, "Mëso Bashkëpunimin", "Explore Collaboration")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: sq(currentLanguage, "Zhvillim i Shpejtë", "Rapid Development"), desc: sq(currentLanguage, "Idetë tuaja bëhen realitet brenda javësh", "Your ideas become reality within weeks") },
                { icon: Users, title: sq(currentLanguage, "Komuniteti i Parë", "Community First"), desc: sq(currentLanguage, "Platforma e ndërtuar mbi komentet tuaja", "Platform built on your feedback") },
                { icon: Globe, title: sq(currentLanguage, "Mbështetje Ekspertësh", "Expert Support"), desc: sq(currentLanguage, "Qasje direkte te ekipi ynë", "Direct access to our expert team") },
                { icon: TrendingUp, title: sq(currentLanguage, "Rritje e Përbashkët", "Shared Growth"), desc: sq(currentLanguage, "Ne rritemi kur rriteni edhe ju", "We grow when you grow") },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={String(title)} className={`anim-scale anim-d${i + 1} p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors`}>
                  <Icon className="h-5 w-5 text-indigo-200 mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-indigo-200 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing-section" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(currentLanguage, "Çmimet", "Pricing")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(currentLanguage, "Çmime të qarta, pa surpriza", "Clear pricing, no surprises")}
            </h2>
            <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-xl mx-auto mb-8">
              {sq(currentLanguage, "Zgjidhni planin që i përshtatet biznesit tuaj. Ndryshoni kur të dëshironi.", "Choose the plan that fits your business. Change whenever you want.")}
            </p>

            <div className="anim-scale anim-d3 inline-flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {sq(currentLanguage, "Mujor", "Monthly")}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
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
                  className={`anim-scale anim-d${index + 1} relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isPopular
                      ? 'border-indigo-500 bg-indigo-600 shadow-xl shadow-indigo-100'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow-sm">
                        {sq(currentLanguage, "Më i Popullarizuari", "Most Popular")}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900'}`}>€{price}</span>
                      <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/{sq(currentLanguage, "muaj", "mo")}</span>
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
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 ${isPopular ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'}`}
                    >
                      {sq(currentLanguage, "Blej Tani", "Buy Now")}
                    </button>
                    <button
                      onClick={() => window.location.href = "/trial"}
                      className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 border ${isPopular ? 'border-indigo-400 text-indigo-100 hover:bg-white/10' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}
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

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(currentLanguage,
              <>Gati të besoni biznesin tuaj<br /><span className="text-indigo-400">tek ne?</span></>,
              <>Ready to trust your business<br /><span className="text-indigo-400">with us?</span></>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(currentLanguage,
              "Bashkohuni me 200+ biznese që tashmë po kursejnë kohë dhe rrisin të ardhurat me Clientlly. Proven 14 ditore falas, pa kartë kredie.",
              "Join 200+ businesses already saving time and growing revenue with Clientlly. 14-day free trial, no credit card required."
            )}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {sq(currentLanguage, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => window.location.href = "/subscribe"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200"
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
