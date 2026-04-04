import { useState } from "react";
import { Link } from "wouter";
import {
  FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package, Clock,
  Check, ArrowRight, Menu, X, CheckCircle, Star, Zap, Shield, TrendingUp,
  ChevronRight, Play, Globe, Headphones
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

const CATEGORIES = ["all", "finance", "clients", "operations", "hr"] as const;
type Category = typeof CATEGORIES[number];

const features = [
  {
    id: "invoicing",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    border: "border-blue-100",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Faturim Profesional", en: "Professional Invoicing" },
    tagline: { sq: "Dërgoni fatura në sekonda, paguani më shpejt", en: "Send invoices in seconds, get paid faster" },
    desc: { sq: "Krijoni fatura me markë profesionale, gjurmoni pagesat dhe dërgoni rikujtime automatike. Klientët tuaj paguajnë deri 40% më shpejt.", en: "Create branded invoices, track payments and send automatic reminders. Your clients pay up to 40% faster." },
    benefits: [
      { sq: "Fatura me markën tuaj në 30 sekonda", en: "Branded invoices in 30 seconds" },
      { sq: "Rikujtime automatike të pagesave", en: "Automatic payment reminders" },
      { sq: "Gjurmim i pagesave në kohë reale", en: "Real-time payment tracking" },
      { sq: "Pranoni pagesa online (kartë, bankë)", en: "Accept online payments (card, bank)" },
      { sq: "Raporte të të ardhurave mujore/vjetore", en: "Monthly/yearly revenue reports" },
    ],
    href: "/features/invoicing",
    stat: { value: "40%", label: { sq: "pagesa më shpejt", en: "faster payments" } },
  },
  {
    id: "expenses",
    icon: Receipt,
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
    border: "border-emerald-100",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking" },
    tagline: { sq: "Organizoni shpenzimet, kurseni kohë dhe para", en: "Organise expenses, save time and money" },
    desc: { sq: "Fotografoni faturat dhe sistemi i kategorizon automatikisht. Gjeneron raporte tatimore të gatshme dhe zbuloni ku po shpenzoni më shumë.", en: "Photograph receipts and the system categorises them automatically. Generates tax-ready reports and reveals where you're spending most." },
    benefits: [
      { sq: "Skanim automatik i faturave me kamerë", en: "Auto receipt scanning with camera" },
      { sq: "Kategorizim inteligjent i shpenzimeve", en: "Smart expense categorisation" },
      { sq: "Raporte të gatshme për taksën", en: "Tax-ready expense reports" },
      { sq: "Buxhet dhe alarme tejkalimi", en: "Budget limits and overspend alerts" },
      { sq: "Eksport në Excel/PDF", en: "Export to Excel/PDF" },
    ],
    href: "/features/expenses",
    stat: { value: "12h", label: { sq: "kursyer/javë", en: "saved/week" } },
  },
  {
    id: "debt",
    icon: CreditCard,
    gradient: "from-rose-500 to-rose-600",
    lightBg: "bg-rose-50",
    lightText: "text-rose-600",
    border: "border-rose-100",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Keep debts under control without stress" },
    desc: { sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.", en: "Track all debts and loans in one place. Plan repayments, get deadline alerts and see your repayment progress." },
    benefits: [
      { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Debt and creditor registration" },
      { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan" },
      { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts" },
      { sq: "Historiku i plotë i transaksioneve", en: "Full transaction history" },
      { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart" },
    ],
    href: "/features/debt",
    stat: { value: "95%", label: { sq: "më pak gabime", en: "fewer errors" } },
  },
  {
    id: "reports",
    icon: BarChart3,
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
    border: "border-violet-100",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Raporte & Analitikë", en: "Insights & Reports" },
    tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make the right decisions based on real data" },
    desc: { sq: "Paneli i analitikës ju jep një pamje të plotë të biznesit tuaj — shitjet, shpenzimet, fluksi monetar dhe trendet — të gjitha në kohë reale.", en: "The analytics dashboard gives you a complete picture of your business — sales, expenses, cash flow and trends — all in real time." },
    benefits: [
      { sq: "Panel analitike interaktive", en: "Interactive analytics dashboard" },
      { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports" },
      { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)" },
      { sq: "Parashikime financiare me AI", en: "AI financial forecasting" },
      { sq: "Eksport në PDF/Excel me klikim", en: "One-click PDF/Excel export" },
    ],
    href: "/features/reports",
    stat: { value: "2×", label: { sq: "vendime më të mira", en: "better decisions" } },
  },
  {
    id: "clients",
    icon: Users,
    gradient: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-600",
    border: "border-indigo-100",
    category: "clients" as Category,
    tag: { sq: "Klientë", en: "Clients" },
    title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)" },
    tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client" },
    desc: { sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, korespondencën dhe shënimet. Asnjë detaj nuk humb.", en: "Keep the full history of every client — orders, payments, correspondence and notes. No detail gets lost." },
    benefits: [
      { sq: "Profil i plotë 360° i çdo klienti", en: "Full 360° profile for every client" },
      { sq: "Historiku i porosive dhe pagesave", en: "Order and payment history" },
      { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders" },
      { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value" },
      { sq: "Eksport lista dhe raporte", en: "Export lists and reports" },
    ],
    href: "/features/clients",
    stat: { value: "+30%", label: { sq: "mbajtje klientësh", en: "client retention" } },
  },
  {
    id: "vendors",
    icon: Building2,
    gradient: "from-amber-500 to-amber-600",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
    border: "border-amber-100",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations" },
    title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management" },
    tagline: { sq: "Organizoni furnitorët dhe blerjiet pa kaos", en: "Organise suppliers and purchases without chaos" },
    desc: { sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.", en: "Track suppliers, purchase orders and their performance. Negotiate with real data and choose the best vendors." },
    benefits: [
      { sq: "Katalog furnitorësh me rating", en: "Supplier catalogue with ratings" },
      { sq: "Menaxhim porosish blerje (PO)", en: "Purchase order management (PO)" },
      { sq: "Krahasim çmimesh mes furnitorëve", en: "Price comparison between suppliers" },
      { sq: "Historiku i blerjieve dhe pagesave", en: "Purchase and payment history" },
      { sq: "Alarme kontratash dhe afatesh", en: "Contract and deadline alerts" },
    ],
    href: "/features/vendors",
    stat: { value: "20%", label: { sq: "ulje kostosh", en: "cost reduction" } },
  },
  {
    id: "inventory",
    icon: Package,
    gradient: "from-teal-500 to-teal-600",
    lightBg: "bg-teal-50",
    lightText: "text-teal-600",
    border: "border-teal-100",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations" },
    title: { sq: "Menaxhim Inventari", en: "Inventory Management" },
    tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control your stock, eliminate losses" },
    desc: { sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.", en: "Track stock in real time, get low-stock alerts and analyse inventory movements with detailed reports." },
    benefits: [
      { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking" },
      { sq: "Alarme stoku minimal", en: "Low-stock alerts" },
      { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for in/out" },
      { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports" },
      { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing" },
    ],
    href: "/features/inventory",
    stat: { value: "35%", label: { sq: "ulje humbje stoku", en: "stock loss reduction" } },
  },
  {
    id: "attendance",
    icon: Clock,
    gradient: "from-orange-500 to-orange-600",
    lightBg: "bg-orange-50",
    lightText: "text-orange-600",
    border: "border-orange-100",
    category: "hr" as Category,
    tag: { sq: "HR", en: "HR" },
    title: { sq: "Prezencë & Orari", en: "Attendance & Scheduling" },
    tagline: { sq: "Gjurmoni ekipin tuaj pa spreadsheets", en: "Track your team without spreadsheets" },
    desc: { sq: "Gjurmoni prezencën e ekipit me GPS, menaxhoni turnet dhe gjeneroni raporte automatike mujore. Punoni me të dhëna reale, jo hamendja.", en: "Track team attendance with GPS, manage shifts and generate automatic monthly reports. Work with real data, not guesswork." },
    benefits: [
      { sq: "Regjistrim prezence me GPS dhe foto", en: "GPS + photo attendance check-in" },
      { sq: "Menaxhim turnesh dhe orareve", en: "Shift and schedule management" },
      { sq: "Raporte automatike mujore", en: "Automatic monthly reports" },
      { sq: "Llogaritje orësh shtesë (overtime)", en: "Overtime hours calculation" },
      { sq: "Eksport për llogaritje page", en: "Export for payroll calculation" },
    ],
    href: "/features/attendance",
    stat: { value: "100%", label: { sq: "saktësi prezence", en: "attendance accuracy" } },
  },
];

const categoryLabels: Record<Category, { sq: string; en: string }> = {
  all:        { sq: "Të gjitha",  en: "All" },
  finance:    { sq: "Financë",    en: "Finance" },
  clients:    { sq: "Klientë",    en: "Clients" },
  operations: { sq: "Operacione", en: "Operations" },
  hr:         { sq: "HR & Ekipi", en: "HR & Team" },
};

export default function Features() {
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? features
    : features.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2.5">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-lg font-bold text-gray-900">Clientlly</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/features" className="text-sm font-semibold text-indigo-600">{sq(lang, "Veçoritë", "Features")}</Link>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</button>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact")}</Link>
            </div>
            <div className="hidden lg:flex items-center space-x-3">
              <button onClick={() => window.location.href = "/api/login"} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors">{sq(lang, "Hyr", "Login")}</button>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">{sq(lang, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
            <button className="lg:hidden p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About")}</Link>
            <Link href="/features" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Veçoritë", "Features")}</Link>
            <button onClick={() => { window.location.href = '/subscribe'; setShowMobileMenu(false); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-fade inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "8 module të integruara plotësisht", "8 fully integrated modules")}
          </div>
          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 leading-[1.1]">
            {sq(lang,
              <>Të gjitha veçoritë<br /><span className="text-indigo-600">në një vend</span></>,
              <>Every feature<br /><span className="text-indigo-600">in one place</span></>
            )}
          </h1>
          <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {sq(lang,
              "Nga faturimi tek HR, nga inventari tek analitika — Clientlly ka gjithçka që biznesi juaj ka nevojë, pa nevojë për asnjë aplikacion tjetër.",
              "From invoicing to HR, from inventory to analytics — Clientlly has everything your business needs, with no other app required."
            )}
          </p>

          {/* Quick stats row */}
          <div className="anim-rise anim-d3 grid grid-cols-4 gap-3 max-w-lg mx-auto mb-10">
            {[
              { v: "8", l: sq(lang, "Module", "Modules") },
              { v: "€0", l: sq(lang, "Setup", "Setup") },
              { v: "14", l: sq(lang, "Ditë Falas", "Days Free") },
              { v: "200+", l: sq(lang, "Biznese", "Businesses") },
            ].map(({ v, l }) => (
              <div key={String(l)} className="text-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="text-xl font-extrabold text-indigo-600">{v}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>

          <div className="anim-rise anim-d4 flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5">
              {sq(lang, "Provo të Gjitha Falas — 14 Ditë", "Try Everything Free — 14 Days")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/compare-features"} className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all duration-200 shadow-sm">
              {sq(lang, "Krahaso Planet", "Compare Plans")}
            </button>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="py-16 px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="p-7 bg-red-50 border border-red-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <X className="h-5 w-5 text-red-500" />
                <h3 className="font-bold text-gray-900">{sq(lang, "Pa Clientlly", "Without Clientlly")}</h3>
              </div>
              <ul className="space-y-3">
                {(lang === 'sq' ? [
                  "5+ aplikacione të ndryshme për menaxhim",
                  "Orë të humbura me Excel dhe spreadsheets",
                  "Fatura të harruara = para të humbura",
                  "Asnjë pamje e qartë e financave",
                  "Stres i vazhdueshëm dhe gabime",
                ] : [
                  "5+ different apps to manage the business",
                  "Hours wasted on Excel and spreadsheets",
                  "Forgotten invoices = lost money",
                  "No clear picture of finances",
                  "Constant stress and errors",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="p-7 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-gray-900">{sq(lang, "Me Clientlly", "With Clientlly")}</h3>
              </div>
              <ul className="space-y-3">
                {(lang === 'sq' ? [
                  "1 platformë — gjithçka e integruar",
                  "15+ orë të kursyera çdo javë",
                  "Fatura automatike — asnjë gjë nuk harrohet",
                  "Pamje 360° e financave tuaja",
                  "Paqe mendore dhe vendime të sakta",
                ] : [
                  "1 platform — everything integrated",
                  "15+ hours saved every week",
                  "Automatic invoicing — nothing forgotten",
                  "360° view of your finances",
                  "Peace of mind and accurate decisions",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Modulet", "Modules")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Eksploroni çdo veçori", "Explore every feature")}
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  {lang === 'sq' ? categoryLabels[cat].sq : categoryLabels[cat].en}
                </button>
              ))}
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(({ icon: Icon, gradient, lightBg, lightText, border, tag, title, tagline, desc, benefits, href, stat }, i) => (
              <div
                key={href}
                className={`anim-scale anim-d${Math.min(i + 1, 8)} group bg-white border ${border} rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Card header */}
                <div className={`p-6 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-3">
                        {lang === 'sq' ? tag.sq : tag.en}
                      </span>
                      <h3 className="text-xl font-extrabold text-white mb-1">
                        {lang === 'sq' ? title.sq : title.en}
                      </h3>
                      <p className="text-white/80 text-sm">{lang === 'sq' ? tagline.sq : tagline.en}</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Stat badge */}
                  <div className="relative z-10 mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-white" />
                    <span className="text-white text-xs font-bold">{stat.value} {lang === 'sq' ? stat.label.sq : stat.label.en}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{lang === 'sq' ? desc.sq : desc.en}</p>
                  <ul className="space-y-2 mb-6">
                    {benefits.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${lightBg} ${lightText} flex-shrink-0`} style={{ backgroundColor: 'currentColor' }}>
                          <div className={`w-1.5 h-1.5 rounded-full ${lightBg}`}></div>
                        </div>
                        <span className="text-xs text-gray-600">{lang === 'sq' ? b.sq : b.en}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${lightText} group-hover:gap-3 transition-all duration-200`}
                  >
                    {sq(lang, "Shiko detajet e plota", "See full details")}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION BANNER ── */}
      <section className="py-16 px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              {sq(lang, "Gjithçka e lidhur — automatikisht", "Everything connected — automatically")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              {sq(lang,
                "Modulet komunikojnë me njëri-tjetrin. Kur krijoni një faturë, inventari përditësohet. Kur regjistroni shpenzim, raporti financiar rifrekohet. Zero punë manuale.",
                "Modules talk to each other. When you create an invoice, inventory updates. When you log an expense, the financial report refreshes. Zero manual work."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: sq(lang, "Sinkronizim i menjëhershëm", "Instant sync"), desc: sq(lang, "Të dhënat lëvizin automatikisht", "Data moves automatically") },
              { icon: Shield, title: sq(lang, "Kriptim i plotë", "Full encryption"), desc: sq(lang, "Të dhënat tuaja janë të sigurta", "Your data is always secure") },
              { icon: Globe, title: sq(lang, "Qasje nga çdo pajisje", "Access from any device"), desc: sq(lang, "Desktop, tablet, smartphone", "Desktop, tablet, smartphone") },
              { icon: Headphones, title: sq(lang, "Mbështetje 24/7", "Support 24/7"), desc: sq(lang, "Gjithmonë këtu për ju", "Always here for you") },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
                <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 mb-3">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-xl font-medium text-gray-700 leading-relaxed mb-6">
            "{sq(lang,
              "Clientlly zëvendësoi 6 aplikacione të ndryshme që po përdornim. Tani gjithçka është në një vend — faturimi, shpenzimet, klientët. Kemi kursyer mbi 15 orë në javë.",
              "Clientlly replaced 6 different apps we were using. Now everything's in one place — invoicing, expenses, clients. We've saved over 15 hours a week."
            )}"
          </blockquote>
          <div className="font-bold text-gray-900">Mikel Doda</div>
          <div className="text-gray-500 text-sm">{sq(lang, "Drejtor Financiar, Doda Group", "Finance Director, Doda Group")}</div>
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
              <>Provoni të 8 modulet<br /><span className="text-indigo-400">falas për 14 ditë</span></>,
              <>Try all 8 modules<br /><span className="text-indigo-400">free for 14 days</span></>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg mb-10">
            {sq(lang, "Pa kartë kredie. Pa angazhim. Qasje e plotë.", "No credit card. No commitment. Full access.")}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/subscribe"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
