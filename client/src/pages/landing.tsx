import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ChatBot from "@/components/ChatBot";
import { 
  FileText, Receipt, Users, CreditCard, BarChart3, Building2, Package,
  Clock, Check, Shield, ChevronDown, Menu, X, ArrowRight, Car,
  TrendingUp, Headphones, Zap, Globe, CheckCircle, Star,
  Briefcase, CalendarCheck, GraduationCap, DollarSign, FileCheck,
  ChevronRight, Wallet,
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

const moduleCategories = (lang: string) => [
  {
    label: sq(lang, "Financa", "Finance"),
    color: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-500",
    items: [
      { icon: FileCheck, title: sq(lang, "Kuotime Elektronike", "Electronic Quotes"), desc: sq(lang, "Krijo & dërgo kuotim profesional brenda sekondave", "Create & send professional quotes in seconds") },
      { icon: FileText, title: sq(lang, "Faturim Profesional", "Professional Invoicing"), desc: sq(lang, "Fatura automatike, reminders & gjurmim pagesash", "Auto invoices, reminders & payment tracking") },
      { icon: Receipt, title: sq(lang, "Gjurmim Shpenzimesh", "Expense Tracking"), desc: sq(lang, "Kategorizim automatik & raport tatimor", "Automatic categorization & tax reports") },
      { icon: CreditCard, title: sq(lang, "Menaxhim Borxhesh", "Debt Management"), desc: sq(lang, "Planifikoni shlyerjet, qëndroni pa borxhe", "Plan repayments, stay debt-free") },
      { icon: BarChart3, title: sq(lang, "Raporte & Analitikë", "Insights & Reports"), desc: sq(lang, "Dashboard i plotë me KPI dhe parashikime", "Full dashboard with KPIs and forecasts") },
      { icon: Wallet, title: sq(lang, "Kartelat e Blerësit", "Buyer Cards"), desc: sq(lang, "Menaxhoni kartelat dhe historikun e blerësve", "Manage buyer cards and purchase history") },
    ],
  },
  {
    label: sq(lang, "Operacione", "Operations"),
    color: "bg-violet-50 text-violet-700 border-violet-100",
    dot: "bg-violet-500",
    items: [
      { icon: Users, title: sq(lang, "Menaxhim Klientësh", "Client Management"), desc: sq(lang, "CRM i plotë — historik, projekte & komunikim", "Full CRM — history, projects & communication") },
      { icon: Building2, title: sq(lang, "Menaxhim Furnitorësh", "Vendor Management"), desc: sq(lang, "Porosi, kontrata dhe vlerësim furnitorësh", "Orders, contracts and vendor evaluation") },
      { icon: Package, title: sq(lang, "Menaxhim Inventari", "Inventory Management"), desc: sq(lang, "Stok i saktë, alarme automatike & barkode", "Accurate stock, auto alerts & barcodes") },
      { icon: CalendarCheck, title: sq(lang, "Kalendarit & Takime", "Calendar & Meetings"), desc: sq(lang, "Caktime inteligjente dhe njoftime automatike", "Smart scheduling and automatic reminders") },
    ],
  },
  {
    label: sq(lang, "Flotë", "Fleet"),
    color: "bg-amber-50 text-amber-700 border-amber-100",
    dot: "bg-amber-500",
    items: [
      { icon: Car, title: sq(lang, "Menaxhim Floteje", "Fleet Management"), desc: sq(lang, "Gjurmoni automjetet, shpenzimet & mirëmbajtjen", "Track vehicles, costs & maintenance") },
      { icon: Zap, title: sq(lang, "Mirëmbajtje & Servisim", "Maintenance & Service"), desc: sq(lang, "Planifikoni servisimet, reduktoni kohën e ndërprerjes", "Schedule service, reduce downtime") },
    ],
  },
  {
    label: sq(lang, "Burime Njerëzore", "Human Resources"),
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
    items: [
      { icon: Clock, title: sq(lang, "Prezencë (GPS)", "Attendance (GPS)"), desc: sq(lang, "Check-in me GPS nga celulari, raporte automatike", "GPS mobile check-in, automatic reports") },
      { icon: DollarSign, title: sq(lang, "Pagat e Punonjësve", "Payroll"), desc: sq(lang, "Llogaritje automatike me zbritje dhe raporte", "Auto calculation with deductions & reports") },
      { icon: Briefcase, title: sq(lang, "Menaxhim Lejesh", "Leave Management"), desc: sq(lang, "Kërkesa, aprovim dhe bilanci i lejeve", "Requests, approval and leave balance") },
      { icon: GraduationCap, title: sq(lang, "Trajnim & Kuize", "Training & Quizzes"), desc: sq(lang, "Trajnoni ekipin tuaj drejtpërdrejt në platformë", "Train your team directly in the platform") },
    ],
  },
];

export default function Landing() {
  const { currentLanguage: lang } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedCat, setExpandedCat] = useState<number | null>(null);

  const { data: plans = [] } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  const stats = [
    { value: "200+", label: sq(lang, "Biznese", "Businesses") },
    { value: "15", label: sq(lang, "Module", "Modules") },
    { value: "5", label: sq(lang, "Vende", "Countries") },
    { value: "99.9%", label: sq(lang, "Uptime", "Uptime") },
  ];

  const testimonials = [
    {
      name: "Artan Hoxha",
      role: sq(lang, "Pronar, Hoxha & Partners", "Owner, Hoxha & Partners"),
      avatar: "AH",
      color: "from-blue-500 to-indigo-600",
      text: sq(lang, "Clientlly na kurseu mbi 12 orë në javë. Faturimi dhe gjurmimi i shpenzimeve janë bërë shumë të thjeshta.", "Clientlly saved us over 12 hours a week. Invoicing and expense tracking became so simple."),
    },
    {
      name: "Blerta Krasniqi",
      role: sq(lang, "CEO, TechStart Kosovo", "CEO, TechStart Kosovo"),
      avatar: "BK",
      color: "from-violet-500 to-purple-600",
      text: sq(lang, "Platforma më e mirë për biznese të vogla. Çdo gjë që nevojitet — në një vend, me mbështetje të jashtëzakonshme.", "The best platform for small businesses. Everything needed — in one place, with outstanding support."),
    },
    {
      name: "Mikel Doda",
      role: sq(lang, "Drejtor Financiar, Doda Group", "Finance Director, Doda Group"),
      avatar: "MD",
      color: "from-emerald-500 to-teal-600",
      text: sq(lang, "Raportet janë fantastike. Tani e di saktësisht si po shkon biznesi çdo ditë — pa asnjë spreadsheet.", "The reports are fantastic. Now I know exactly how the business is doing every day — no spreadsheets."),
    },
  ];

  const steps = [
    {
      n: "01",
      icon: CheckCircle,
      title: sq(lang, "Regjistrohuni Falas", "Sign Up Free"),
      desc: sq(lang, "Krijoni llogarinë në 2 minuta. Pa kartë kredie, pa detyrime. 14 ditë provë e plotë.", "Create your account in 2 minutes. No credit card, no obligations. 14-day full trial."),
    },
    {
      n: "02",
      icon: Package,
      title: sq(lang, "Të Gjitha Modulet të Përfshira", "All Modules Included"),
      desc: sq(lang, "Të gjitha 15 modulet aktivizohen automatikisht me planin tuaj. Shtoni ekipin dhe nisni menjëherë.", "All 15 modules are automatically activated with your plan. Add your team and get started right away."),
    },
    {
      n: "03",
      icon: TrendingUp,
      title: sq(lang, "Rrituni me Clientlly", "Grow with Clientlly"),
      desc: sq(lang, "Shpenzoni kohën tuaj në rritje, jo në administratë. Raportet tregojnë gjithçka automatikisht.", "Spend your time on growth, not admin. Reports show everything automatically."),
    },
  ];

  const cats = moduleCategories(lang);

  return (
    <div className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-semibold text-indigo-600">{sq(lang, "Ballina", "Home")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <a href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</a>
              <a href="#pricing-section" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</a>
              <button onClick={() => window.location.href = '/contact'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact")}</button>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now")}
              </button>
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2 ml-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-semibold text-indigo-600 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About")}</Link>
            <a href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features")}</a>
            <a href="#pricing-section" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing")}</a>
            <button onClick={() => { window.location.href = '/contact'; setShowMobileMenu(false); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Kontakt", "Contact")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] pt-16 pb-10">

            {/* Left: copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 shadow-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                {sq(lang, "14 ditë provë falas · Pa kartë kredie", "14-day free trial · No credit card")}
              </div>

              <h1 className="anim-rise text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                {sq(lang,
                  <>Menaxho biznesin<br /><span className="text-indigo-600">gjithçka në një vend</span></>,
                  <>Run your entire<br /><span className="text-indigo-600">business in one place</span></>
                )}
              </h1>

              <p className="anim-rise anim-d1 text-lg text-gray-500 leading-relaxed max-w-md">
                {sq(lang,
                  "15 module të integruara — faturim, shpenzime, inventar, HR, flotë dhe shumë më tepër. E gjitha në një platformë të vetme.",
                  "15 integrated modules — invoicing, expenses, inventory, HR, fleet and more. All in a single platform."
                )}
              </p>

              <div className="anim-rise anim-d2 flex flex-wrap gap-3">
                <button
                  onClick={() => window.location.href = "/trial"}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free")}</span>
                    <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial")}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => { const el = document.getElementById('pricing-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-200 transition-all duration-200 shadow-sm text-sm"
                >
                  {sq(lang, "Shiko Çmimet", "View Pricing")}
                </button>
              </div>

              <div className="anim-fade anim-d3 flex flex-wrap gap-4 text-xs text-gray-400">
                {[
                  { icon: Shield, label: sq(lang, "Mbrojtje e të dhënave", "Data protection"), href: "/data-protection" },
                  { icon: Check, label: sq(lang, "Konfigurim falas", "Free setup"), href: "/setup-migration" },
                  { icon: Headphones, label: sq(lang, "Mbështetje 24/7", "24/7 support"), href: "/expert-support" },
                ].map(({ icon: Icon, label, href }) => (
                  <button key={String(label)} onClick={() => window.location.href = href}
                    className="flex items-center gap-1 hover:text-indigo-600 transition-colors font-medium">
                    <Icon className="h-3 w-3 text-gray-300" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: dashboard mockup */}
            <div className="anim-scale anim-d1 relative hidden lg:block">
              <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-indigo-100/50 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <div className="ml-4 flex-1 h-5 bg-gray-100 rounded-md flex items-center px-2">
                    <span className="text-[9px] text-gray-400 font-mono">app.clientlly.com/dashboard</span>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-5 bg-white">
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: sq(lang, "Të ardhura", "Revenue"), value: "€24,850", change: "+12%", color: "text-emerald-600 bg-emerald-50" },
                      { label: sq(lang, "Fatura", "Invoices"), value: "48", change: "+5", color: "text-blue-600 bg-blue-50" },
                      { label: sq(lang, "Klientë", "Clients"), value: "32", change: "+3", color: "text-violet-600 bg-violet-50" },
                    ].map(({ label, value, change, color }) => (
                      <div key={String(label)} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="text-[10px] text-gray-400 mb-1 font-medium">{label}</p>
                        <p className="text-base font-bold text-gray-900">{value}</p>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${color}`}>{change}</span>
                      </div>
                    ))}
                  </div>
                  {/* Chart placeholder */}
                  <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] text-gray-400 mb-2 font-semibold uppercase tracking-wide">{sq(lang, "Të ardhura mujore", "Monthly Revenue")}</p>
                    <div className="flex items-end gap-1 h-16">
                      {[30, 55, 45, 70, 60, 85, 75, 90, 68, 95, 82, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t"
                          style={{ height: `${h}%`, background: `hsl(${239 + i * 2}, ${60 + i}%, ${i % 2 === 0 ? 65 : 60}%)`, opacity: 0.7 + i * 0.025 }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                        <span key={m} className="text-[7px] text-gray-300">{m}</span>
                      ))}
                    </div>
                  </div>
                  {/* Recent invoices */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{sq(lang, "Faturat e fundit", "Recent Invoices")}</p>
                    {[
                      { client: "TechStart Kosovo", amount: "€2,400", status: sq(lang, "Paguar", "Paid"), dot: "bg-emerald-500" },
                      { client: "Hoxha & Partners", amount: "€1,850", status: sq(lang, "Pritur", "Pending"), dot: "bg-amber-500" },
                      { client: "Doda Group", amount: "€3,200", status: sq(lang, "Paguar", "Paid"), dot: "bg-emerald-500" },
                    ].map(({ client, amount, status, dot }) => (
                      <div key={client} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${dot}`}></div>
                          <span className="text-[10px] font-medium text-gray-700">{client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400">{status}</span>
                          <span className="text-[11px] font-bold text-gray-900">{amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">{sq(lang, "Rritje mujore", "Monthly growth")}</p>
                  <p className="text-sm font-bold text-gray-900 text-emerald-600">+18.4%</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-[11px] font-semibold text-gray-700">{sq(lang, "15 module aktive", "15 active modules")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="border-t border-gray-100 bg-white py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map(({ value, label }, i) => (
                <div key={String(label)} className={`anim-rise anim-d${i + 1}`}>
                  <div className="text-2xl lg:text-3xl font-extrabold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Si funksionon", "How it works")}
            </p>
            <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, <>Filloni në <span className="text-indigo-600">3 hapa</span></>, <>Get started in <span className="text-indigo-600">3 steps</span></>)}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-[calc(33%+32px)] right-[calc(33%+32px)] h-0.5 bg-indigo-100"></div>
            {steps.map(({ n, icon: Icon, title, desc }, i) => (
              <div key={n} className={`anim-scale anim-d${i + 1} relative text-center`}>
                <div className="inline-flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-indigo-200 relative">
                    <Icon className="h-9 w-9 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                      <span className="text-[9px] font-black text-indigo-600">{n.split('0')[1]}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Platforma", "Platform")}
            </p>
            <h2 id="features-title" className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, <>15 module — <span className="text-indigo-600">gjithçka e integruar</span></>, <>15 modules — <span className="text-indigo-600">everything integrated</span></>)}
            </h2>
            <p className="anim-rise anim-d1 text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang,
                "Ndaloni së paguri për 5 aplikacione të ndryshme. Me Clientlly, 15 module komunikon me njëra-tjetrën.",
                "Stop paying for 5 different apps. With Clientlly, everything talks to each other."
              )}
            </p>
          </div>

          <div className="space-y-3">
            {cats.map((cat, ci) => {
              const isOpen = expandedCat === ci;
              return (
                <div key={ci} className={`anim-scale anim-d${ci + 1} rounded-2xl border transition-all duration-300 ${isOpen ? 'border-indigo-200 bg-indigo-50/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4"
                    onClick={() => setExpandedCat(isOpen ? null : ci)}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cat.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`}></span>
                        {cat.label}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">{cat.items.length} {sq(lang, "module", "modules")}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 grid sm:grid-cols-2 gap-3">
                      {cat.items.map(({ icon: Icon, title, desc }) => (
                        <div key={String(title)} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-200">
                          <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-50">
                            <Icon className="h-4 w-4 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{title}</p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <a href="/features"
              className="anim-fade inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition-all"
            >
              {sq(lang, "Shiko të gjitha veçoritë e detajuara", "View all detailed features")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTLLY + TESTIMONIALS ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">
                {sq(lang, "Pse Clientlly", "Why Clientlly")}
              </p>
              <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                {sq(lang,
                  <>Kurseni kohë.<br /><span className="text-indigo-600">Rritni fitimet.</span></>,
                  <>Save time.<br /><span className="text-indigo-600">Grow profits.</span></>
                )}
              </h2>
              <p className="anim-rise anim-d1 text-gray-500 leading-relaxed mb-10">
                {sq(lang,
                  "Shumica e bizneseve humbasin orë të çmuara çdo javë duke menaxhuar spreadsheets dhe aplikacione të ndryshme. Clientlly i zëvendëson të gjitha.",
                  "Most businesses waste precious hours every week managing spreadsheets and different apps. Clientlly replaces them all."
                )}
              </p>

              <div className="space-y-5">
                {[
                  { icon: TrendingUp, color: "bg-indigo-50 text-indigo-600", stat: sq(lang, "15+ orë të kursyera/javë", "15+ hours saved per week"), desc: sq(lang, "Automatizim i plotë i detyrave të përsëritura", "Full automation of repetitive tasks") },
                  { icon: Zap, color: "bg-emerald-50 text-emerald-600", stat: sq(lang, "+30% të ardhura mesatare", "+30% average revenue"), desc: sq(lang, "Bizneset tona raportojnë rritje reale", "Our businesses report real growth") },
                  { icon: Shield, color: "bg-violet-50 text-violet-600", stat: sq(lang, "95% më pak gabime", "95% fewer errors"), desc: sq(lang, "Llogaritjet automatike eliminojnë gabimet njerëzore", "Automatic calculations eliminate human errors") },
                  { icon: Headphones, color: "bg-rose-50 text-rose-600", stat: sq(lang, "Mbështetje 24/7", "24/7 Support"), desc: sq(lang, "Ekip real, jo vetëm bots — gjithmonë i gatshëm", "Real team, not just bots — always ready") },
                ].map(({ icon: Icon, color, stat, desc }, i) => (
                  <div key={String(stat)} className={`anim-rise anim-d${i + 2} flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-200`}>
                    <div className={`flex-shrink-0 p-3 rounded-xl ${color}`}>
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

            <div className="space-y-4">
              <p className="anim-fade text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                {sq(lang, "Çfarë thonë klientët tanë", "What our clients say")}
              </p>
              {testimonials.map(({ name, role, avatar, color, text }, i) => (
                <div key={name} className={`anim-scale anim-d${i + 1} p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-300`}>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{name}</div>
                      <div className="text-gray-400 text-xs">{role}</div>
                    </div>
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
        <div className="max-w-5xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="anim-fade text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-4">
                {sq(lang, "Bashkëpunim", "Collaboration")}
              </p>
              <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(lang, "Le të rritemi bashkë", "Let's grow together")}
              </h2>
              <p className="anim-rise anim-d1 text-indigo-200 leading-relaxed mb-8">
                {sq(lang,
                  "Platforma jonë ndërtohet bashkë me ju. Sugjerojini idetë tuaja dhe ekipi ynë i zhvillimit do t'i realizojë — falas. Suksesi juaj është prioriteti ynë.",
                  "Our platform is built together with you. Share your ideas and our development team will implement them — at no extra cost. Your success is our priority."
                )}
              </p>
              <button
                onClick={() => window.location.href = "/collaboration"}
                className="anim-rise anim-d2 inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
              >
                {sq(lang, "Mëso Bashkëpunimin", "Explore Collaboration")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: sq(lang, "Zhvillim i Shpejtë", "Rapid Development"), desc: sq(lang, "Idetë tuaja bëhen realitet brenda javësh", "Your ideas become reality within weeks") },
                { icon: Users, title: sq(lang, "Komuniteti i Parë", "Community First"), desc: sq(lang, "Platforma e ndërtuar mbi komentet tuaja", "Platform built on your feedback") },
                { icon: Globe, title: sq(lang, "Mbështetje Ekspertësh", "Expert Support"), desc: sq(lang, "Qasje direkte te ekipi ynë", "Direct access to our expert team") },
                { icon: TrendingUp, title: sq(lang, "Rritje e Përbashkët", "Shared Growth"), desc: sq(lang, "Ne rritemi kur rriteni edhe ju", "We grow when you grow") },
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Çmimet", "Pricing")}
            </p>
            <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Çmime të qarta, pa surpriza", "Clear pricing, no surprises")}
            </h2>
            <p className="anim-rise anim-d1 text-gray-500 max-w-xl mx-auto mb-8">
              {sq(lang, "Zgjidhni planin që i përshtatet biznesit tuaj. Të gjithë modulet — në çdo plan.", "Choose the plan that fits your business. All modules — in every plan.")}
            </p>
            <div className="anim-scale anim-d2 inline-flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
              <button onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {sq(lang, "Mujor", "Monthly")}
              </button>
              <button onClick={() => setBillingPeriod('yearly')}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {sq(lang, "Vjetor", "Yearly")}
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">-15%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan, index) => {
              const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              const isPopular = index === 1;
              return (
                <div key={plan.id}
                  className={`anim-scale anim-d${index + 1} relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isPopular ? 'border-indigo-500 bg-indigo-600 shadow-xl shadow-indigo-100' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}>
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded-full shadow-sm border border-indigo-100">
                        ★ {sq(lang, "Më i Popullarizuari", "Most Popular")}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    {billingPeriod === 'yearly' && (
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`text-sm line-through ${isPopular ? 'text-indigo-300' : 'text-gray-400'}`}>€{(plan.monthlyPrice / 100).toFixed(0)}</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">-15%</span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                        €{billingPeriod === 'yearly' ? (plan.yearlyPrice / 12 / 100).toFixed(2) : (plan.monthlyPrice / 100).toFixed(0)}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/{sq(lang, "muaj", "mo")}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className={`text-xs mt-1 ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
                        {sq(lang, `Faturuar vjetor · €${(plan.yearlyPrice / 100).toFixed(0)}/vit`, `Billed annually · €${(plan.yearlyPrice / 100).toFixed(0)}/yr`)}
                      </p>
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
                          <li key={fi} className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg border ${isPopular ? 'bg-white/10 border-white/20' : 'bg-indigo-50 border-indigo-100'}`}>
                            <span className={`mt-0.5 flex-shrink-0 text-xs font-black ${isPopular ? 'text-white' : 'text-indigo-500'}`}>✦</span>
                            <span className="text-sm">
                              <span className={`font-bold ${isPopular ? 'text-white' : 'text-indigo-700'}`}>Le të Rritemi Bashkë</span>
                              <span className={`${isPopular ? 'text-indigo-200' : 'text-indigo-500'}`}> {desc}</span>
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
                  <div className="space-y-2">
                    <button onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                      className={`w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 ${isPopular ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'}`}>
                      {sq(lang, "Blej Tani", "Buy Now")}
                    </button>
                    <button onClick={() => window.location.href = "/trial"}
                      className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all border ${isPopular ? 'border-indigo-400 text-indigo-100 hover:bg-white/10' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      {sq(lang, "Fillo Provën", "Start Trial")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              {sq(lang,
                "Të gjithë planet përfshijnë 15 modulet dhe mbështetjen 24/7. Ndryshoni planin kur të dëshironi.",
                "All plans include all 15 modules and 24/7 support. Change plans whenever you want."
              )}
            </p>
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
            {sq(lang,
              <>Gati të besoni biznesin tuaj<br /><span className="text-indigo-400">tek ne?</span></>,
              <>Ready to trust your business<br /><span className="text-indigo-400">with us?</span></>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(lang,
              "Bashkohuni me 200+ biznese që tashmë po kursejnë kohë dhe rrisin të ardhurat me Clientlly. 14-ditë provë falas, pa kartë kredie.",
              "Join 200+ businesses already saving time and growing revenue with Clientlly. 14-day free trial, no credit card required."
            )}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/subscribe"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
              {sq(lang, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
