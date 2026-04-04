import { useState } from "react";
import { Link } from "wouter";
import {
  FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package, Clock,
  ArrowRight, Menu, X, CheckCircle, Star, Zap, Shield, TrendingUp,
  ChevronRight, Globe, Headphones, Car, CalendarDays, ClipboardList,
  MapPin, Wrench, FileCheck, LayoutTemplate
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

const CATEGORIES = ["all", "finance", "clients", "operations", "hr", "fleet"] as const;
type Category = typeof CATEGORIES[number];

const features = [
  /* ── FINANCE ─────────────────────────────────────────── */
  {
    id: "quotes",
    icon: ClipboardList,
    gradient: "from-cyan-500 to-blue-500",
    lightText: "text-cyan-600",
    border: "border-cyan-100",
    dotColor: "bg-cyan-400",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Oferta & Kuota", en: "Quotes & Offers" },
    tagline: { sq: "Nga oferta tek fatura me një klikim", en: "From quote to invoice in one click" },
    desc: {
      sq: "Krijoni oferta profesionale për produkte dhe shërbime duke zgjedhur nga shabllone të ndryshme. Me aprovimin e klientit, oferta konvertohet automatikisht në faturë — zero humbje kohe.",
      en: "Create professional offers for products and services choosing from different templates. On client approval, the quote converts automatically to an invoice — zero time wasted."
    },
    benefits: [
      { sq: "Shabllone profesionale për oferta dhe fatura", en: "Professional templates for quotes and invoices" },
      { sq: "Konvertim me 1 klikim: Ofertë → Faturë", en: "1-click conversion: Quote → Invoice" },
      { sq: "Nënshkrim dixhital i klientit online", en: "Online digital client signature" },
      { sq: "Gjurmim statusit: dërguar, parë, aprovuar", en: "Status tracking: sent, viewed, approved" },
      { sq: "Çmime, zbritje dhe taksa të personalizuara", en: "Custom prices, discounts and taxes" },
      { sq: "Eksport PDF me markën tuaj", en: "PDF export with your branding" },
    ],
    href: "/features/invoicing",
    stat: { value: "3×", label: { sq: "oferta të aprovuara", en: "faster quote approval" } },
  },
  {
    id: "invoicing",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600",
    lightText: "text-blue-600",
    border: "border-blue-100",
    dotColor: "bg-blue-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Faturim Profesional", en: "Professional Invoicing" },
    tagline: { sq: "Dërgoni fatura në sekonda, paguani më shpejt", en: "Send invoices in seconds, get paid faster" },
    desc: {
      sq: "Krijoni fatura me markë profesionale nga çdo pajisje. Shabllone të shumëfishta, rikujtime automatike dhe gjurmim pagesash në kohë reale. Klientët paguajnë deri 40% më shpejt.",
      en: "Create branded invoices from any device. Multiple templates, automatic reminders and real-time payment tracking. Clients pay up to 40% faster."
    },
    benefits: [
      { sq: "Shabllone të ndryshme — zgjidhni stilin tuaj", en: "Multiple templates — choose your style" },
      { sq: "Rikujtime automatike të pagesave", en: "Automatic payment reminders" },
      { sq: "Gjurmim i pagesave në kohë reale", en: "Real-time payment tracking" },
      { sq: "Pranoni pagesa online (kartë, bankë, cash)", en: "Accept online payments (card, bank, cash)" },
      { sq: "Fatura periodike dhe automatike", en: "Recurring and automatic invoices" },
      { sq: "Raporte të ardhurash mujore/vjetore", en: "Monthly/yearly revenue reports" },
    ],
    href: "/features/invoicing",
    stat: { value: "40%", label: { sq: "pagesa më shpejt", en: "faster payments" } },
  },
  {
    id: "expenses",
    icon: Receipt,
    gradient: "from-emerald-500 to-emerald-600",
    lightText: "text-emerald-600",
    border: "border-emerald-100",
    dotColor: "bg-emerald-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking" },
    tagline: { sq: "Organizoni shpenzimet, kurseni kohë dhe para", en: "Organise expenses, save time and money" },
    desc: {
      sq: "Fotografoni faturat dhe sistemi i kategorizon automatikisht. Gjeneron raporte tatimore të gatshme dhe zbuloni ku po shpenzoni më shumë.",
      en: "Photograph receipts and the system categorises them automatically. Generates tax-ready reports and reveals where you're spending most."
    },
    benefits: [
      { sq: "Skanim automatik i faturave me kamerë", en: "Auto receipt scanning with camera" },
      { sq: "Kategorizim inteligjent i shpenzimeve", en: "Smart expense categorisation" },
      { sq: "Raporte të gatshme për taksën", en: "Tax-ready expense reports" },
      { sq: "Buxhet dhe alarme tejkalimi", en: "Budget limits and overspend alerts" },
      { sq: "Eksport në Excel/PDF", en: "Export to Excel/PDF" },
      { sq: "Lidhje me shpenzimet e flotës së makinave", en: "Link with fleet vehicle expenses" },
    ],
    href: "/features/expenses",
    stat: { value: "12h", label: { sq: "kursyer/javë", en: "saved/week" } },
  },
  {
    id: "debt",
    icon: CreditCard,
    gradient: "from-rose-500 to-rose-600",
    lightText: "text-rose-600",
    border: "border-rose-100",
    dotColor: "bg-rose-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Keep debts under control without stress" },
    desc: {
      sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.",
      en: "Track all debts and loans in one place. Plan repayments, get deadline alerts and see your repayment progress."
    },
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
    lightText: "text-violet-600",
    border: "border-violet-100",
    dotColor: "bg-violet-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Raporte & Analitikë", en: "Insights & Reports" },
    tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make the right decisions based on real data" },
    desc: {
      sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale.",
      en: "The analytics dashboard gives a complete picture — sales, expenses, cash flow, team attendance and fleet service — all in real time."
    },
    benefits: [
      { sq: "Panel analitike interaktive me grafikë", en: "Interactive analytics dashboard with charts" },
      { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports" },
      { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)" },
      { sq: "Parashikime financiare me AI", en: "AI financial forecasting" },
      { sq: "Raporte prezence, flote dhe shitjesh", en: "Attendance, fleet and sales reports" },
      { sq: "Eksport PDF/Excel me klikim", en: "One-click PDF/Excel export" },
    ],
    href: "/features/reports",
    stat: { value: "2×", label: { sq: "vendime më të mira", en: "better decisions" } },
  },

  /* ── CLIENTS ─────────────────────────────────────────── */
  {
    id: "clients",
    icon: Users,
    gradient: "from-indigo-500 to-indigo-600",
    lightText: "text-indigo-600",
    border: "border-indigo-100",
    dotColor: "bg-indigo-500",
    category: "clients" as Category,
    tag: { sq: "Klientë", en: "Clients" },
    title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)" },
    tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client" },
    desc: {
      sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, ofertat, korespondencën dhe shënimet. Asnjë detaj nuk humb.",
      en: "Keep the full history of every client — orders, payments, quotes, correspondence and notes. No detail gets lost."
    },
    benefits: [
      { sq: "Profil i plotë 360° i çdo klienti", en: "Full 360° profile for every client" },
      { sq: "Historiku i porosive, ofertave dhe pagesave", en: "History of orders, quotes and payments" },
      { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders" },
      { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value" },
      { sq: "Lidhje direkte me kalendarin e takimeve", en: "Direct link to appointments calendar" },
    ],
    href: "/features/clients",
    stat: { value: "+30%", label: { sq: "mbajtje klientësh", en: "client retention" } },
  },

  /* ── OPERATIONS ─────────────────────────────────────── */
  {
    id: "vendors",
    icon: Building2,
    gradient: "from-amber-500 to-amber-600",
    lightText: "text-amber-600",
    border: "border-amber-100",
    dotColor: "bg-amber-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations" },
    title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management" },
    tagline: { sq: "Organizoni furnitorët dhe blerjet pa kaos", en: "Organise suppliers and purchases without chaos" },
    desc: {
      sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.",
      en: "Track suppliers, purchase orders and their performance. Negotiate with real data and choose the best vendors."
    },
    benefits: [
      { sq: "Katalog furnitorësh me rating dhe vlerësim", en: "Supplier catalogue with ratings" },
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
    lightText: "text-teal-600",
    border: "border-teal-100",
    dotColor: "bg-teal-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations" },
    title: { sq: "Menaxhim Inventari", en: "Inventory Management" },
    tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control your stock, eliminate losses" },
    desc: {
      sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
      en: "Track stock in real time, get low-stock alerts and analyse inventory movements with detailed reports."
    },
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
    id: "calendar",
    icon: CalendarDays,
    gradient: "from-sky-500 to-indigo-500",
    lightText: "text-sky-600",
    border: "border-sky-100",
    dotColor: "bg-sky-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations" },
    title: { sq: "Kalendar & Planifikim", en: "Calendar & Scheduling" },
    tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All appointments and services in one place" },
    desc: {
      sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
      en: "Plan client appointments, services and team tasks. The calendar syncs directly with Google Calendar and your phone calendar — no appointment forgotten."
    },
    benefits: [
      { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Client appointment and service scheduling" },
      { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone" },
      { sq: "NjofTime automatike para çdo takimi", en: "Automatic reminders before each appointment" },
      { sq: "Planifikim i detyrave ekipore", en: "Team task scheduling" },
      { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Link with attendance and driver modules" },
      { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily views" },
    ],
    href: "/features/attendance",
    stat: { value: "0", label: { sq: "takime të humbura", en: "missed appointments" } },
  },

  /* ── FLEET ──────────────────────────────────────────── */
  {
    id: "motorpool",
    icon: Car,
    gradient: "from-slate-600 to-slate-800",
    lightText: "text-slate-700",
    border: "border-slate-200",
    dotColor: "bg-slate-500",
    category: "fleet" as Category,
    tag: { sq: "Flotë", en: "Fleet" },
    title: { sq: "Motorpool & Flotë Makinash", en: "Motorpool & Fleet Management" },
    tagline: { sq: "Menaxhoni çdo makinë, shofer dhe shërbim nga telefoni", en: "Manage every vehicle, driver and service from your phone" },
    desc: {
      sq: "Sistemi i flotës mbulon gjithçka — nga caktimi i shoferëve për udhëtime tek gjurmimi i mirëmbajtjeve, rinovimi i sigurimeve dhe skadencat e regjistrimit. Asnjë afat nuk kalohet pa u vënë re.",
      en: "The fleet system covers everything — from driver assignment for trips to maintenance tracking, insurance renewal and registration deadlines. No deadline passes unnoticed."
    },
    benefits: [
      { sq: "Regjistrim i flotës: makina, targë, pronësi", en: "Fleet registration: vehicle, plate, ownership" },
      { sq: "Caktim shoferësh për udhëtime (ride dispatch)", en: "Driver assignment for trips (ride dispatch)" },
      { sq: "Gjurmim mirëmbajtjesh dhe servisimesh", en: "Maintenance and servicing tracking" },
      { sq: "Alarme rinovimi: sigurim, kasko, regjistrimi", en: "Renewal alerts: insurance, kasko, registration" },
      { sq: "Historiku i plotë i shpenzimeve për çdo makinë", en: "Full expense history per vehicle" },
      { sq: "Raporte km, karburant dhe kosto/makina", en: "Km, fuel and cost/vehicle reports" },
    ],
    href: "/features/attendance",
    stat: { value: "100%", label: { sq: "afate të ndjekura", en: "deadlines tracked" } },
  },
  {
    id: "maintenance",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    lightText: "text-orange-600",
    border: "border-orange-100",
    dotColor: "bg-orange-500",
    category: "fleet" as Category,
    tag: { sq: "Flotë", en: "Fleet" },
    title: { sq: "Mirëmbajtje & Servisimet", en: "Maintenance & Servicing" },
    tagline: { sq: "Asnjë servisim nuk harrohet, asnjë kosto nuk fshihet", en: "No service forgotten, no cost hidden" },
    desc: {
      sq: "Planifikoni dhe gjurmoni çdo servisim, ndërrimin e gomave, kontrollin teknik dhe çdo riparim. Merrni alarme automatike bazuar në km ose datë. Të gjitha kostot regjistrohen direkt në shpenzimet e kompanisë.",
      en: "Plan and track every service, tyre change, technical inspection and repair. Get automatic alerts based on km or date. All costs register directly in company expenses."
    },
    benefits: [
      { sq: "Plani i servisimeve sipas km ose datës", en: "Service plan based on km or date" },
      { sq: "Alarme automatike: ndërrimi gomave, vaj, filtra", en: "Auto alerts: tyre change, oil, filters" },
      { sq: "Regjistrim i çdo riparimi me kosto", en: "All repairs logged with cost" },
      { sq: "Kontroll teknik dhe afate inspektimi", en: "Technical inspection and inspection deadlines" },
      { sq: "Lidhje direkte me shpenzimet e kompanisë", en: "Direct link to company expenses" },
      { sq: "Raporte kosto mirëmbajtjeje për çdo automjet", en: "Maintenance cost reports per vehicle" },
    ],
    href: "/features/attendance",
    stat: { value: "60%", label: { sq: "ulje dështimesh", en: "fewer breakdowns" } },
  },

  /* ── HR ─────────────────────────────────────────────── */
  {
    id: "attendance",
    icon: MapPin,
    gradient: "from-green-500 to-emerald-600",
    lightText: "text-green-600",
    border: "border-green-100",
    dotColor: "bg-green-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team" },
    title: { sq: "Prezencë & Check‑In Mobile", en: "Attendance & Mobile Check‑In" },
    tagline: { sq: "Pa pajisje në zyrë — vetëm telefon dhe GPS", en: "No office device needed — just phone and GPS" },
    desc: {
      sq: "Punonjësit bëjnë check-in dhe check-out direkt nga telefoni me lokacion GPS të saktë — pa karta, pa pajisje të instaluara. Orari i punës, turnet dhe overtime llogariten automatikisht.",
      en: "Employees check in and out directly from their phone with precise GPS location — no cards, no installed devices. Work hours, shifts and overtime are calculated automatically."
    },
    benefits: [
      { sq: "Check-in/out nga telefoni me GPS + foto", en: "Phone check-in/out with GPS + photo" },
      { sq: "Pa pajisje në zyrë — zero instalim harduer", en: "No office device — zero hardware install" },
      { sq: "Llogaritje automatike orësh dhe overtime", en: "Automatic hours and overtime calculation" },
      { sq: "Caktim orarit dhe turneve të punës", en: "Work schedule and shift assignment" },
      { sq: "Raporte të avancuara prezence (ditore/mujore)", en: "Advanced attendance reports (daily/monthly)" },
      { sq: "Eksport automatik për llogaritje page", en: "Automatic export for payroll" },
    ],
    href: "/features/attendance",
    stat: { value: "100%", label: { sq: "saktësi lokacioni", en: "location accuracy" } },
  },
];

const categoryLabels: Record<Category, { sq: string; en: string }> = {
  all:        { sq: "Të gjitha",  en: "All" },
  finance:    { sq: "Financë",    en: "Finance" },
  clients:    { sq: "Klientë",    en: "Clients" },
  operations: { sq: "Operacione", en: "Operations" },
  hr:         { sq: "HR & Ekipi", en: "HR & Team" },
  fleet:      { sq: "Flotë Makinash", en: "Fleet" },
};

const categoryIcons: Record<Category, JSX.Element> = {
  all:        <span>✦</span>,
  finance:    <span>€</span>,
  clients:    <Users className="h-3.5 w-3.5" />,
  operations: <Package className="h-3.5 w-3.5" />,
  hr:         <MapPin className="h-3.5 w-3.5" />,
  fleet:      <Car className="h-3.5 w-3.5" />,
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
            {sq(lang, "12 module të integruara plotësisht", "12 fully integrated modules")}
          </div>
          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 leading-[1.1]">
            {sq(lang,
              <>Të gjitha veçoritë<br /><span className="text-indigo-600">në një vend</span></>,
              <>Every feature<br /><span className="text-indigo-600">in one place</span></>
            )}
          </h1>
          <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {sq(lang,
              "Nga faturimi dhe oferta tek menaxhimi i flotës dhe prezenca GPS — Clientlly zëvendëson çdo aplikacion tjetër që biznesi juaj po përdor sot.",
              "From invoicing and quotes to fleet management and GPS attendance — Clientlly replaces every other app your business uses today."
            )}
          </p>

          {/* Quick stats */}
          <div className="anim-rise anim-d3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-10">
            {[
              { v: "12", l: sq(lang, "Module", "Modules") },
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
      <section className="py-14 px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 bg-red-50 border border-red-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <X className="h-5 w-5 text-red-500" />
                <h3 className="font-bold text-gray-900">{sq(lang, "Pa Clientlly", "Without Clientlly")}</h3>
              </div>
              <ul className="space-y-3">
                {(lang === 'sq' ? [
                  "10+ aplikacione të ndryshme, asnjë i lidhur",
                  "Orë të humbura me Excel dhe spreadsheets",
                  "Fatura të harruara = para të humbura",
                  "Makina pa servisim — nuk di kur skadon sigurimia",
                  "Check-in me kartelë ose regjistër letër",
                  "Oferta me email — askush nuk i gjurmon",
                  "Asnjë pamje e qartë e financave dhe flotes",
                ] : [
                  "10+ different apps, none connected",
                  "Hours wasted on Excel and spreadsheets",
                  "Forgotten invoices = lost money",
                  "Vehicles without service — unknown insurance expiry",
                  "Check-in with card or paper register",
                  "Quotes via email — nobody tracks them",
                  "No clear picture of finances or fleet",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-gray-900">{sq(lang, "Me Clientlly", "With Clientlly")}</h3>
              </div>
              <ul className="space-y-3">
                {(lang === 'sq' ? [
                  "1 platformë — 12 module, të gjitha të lidhura",
                  "15+ orë të kursyera çdo javë",
                  "Fatura automatike — asnjë gjë nuk harrohet",
                  "Alarme automatike: servisim, sigurim, kasko, targa",
                  "Check-in GPS nga telefoni — pa asgjë në zyrë",
                  "Oferta → Faturë me 1 klikim, gjurmohet gjithçka",
                  "Dashboard i plotë: financa, flotë, ekip, klientë",
                ] : [
                  "1 platform — 12 modules, all connected",
                  "15+ hours saved every week",
                  "Automatic invoicing — nothing forgotten",
                  "Auto alerts: service, insurance, kasko, plates",
                  "GPS check-in from phone — nothing in the office",
                  "Quote → Invoice in 1 click, everything tracked",
                  "Full dashboard: finance, fleet, team, clients",
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

      {/* ── MODULES GRID ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Modulet", "Modules")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Eksploroni çdo modul", "Explore every module")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              {sq(lang,
                "Klikoni një kategori për të parë modulet sipas fushës tuaj të interesit.",
                "Click a category to filter modules by your area of interest."
              )}
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  {categoryIcons[cat]}
                  {lang === 'sq' ? categoryLabels[cat].sq : categoryLabels[cat].en}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(({ icon: Icon, gradient, lightText, border, dotColor, tag, title, tagline, desc, benefits, href, stat }, i) => (
              <div
                key={i}
                className={`anim-scale anim-d${Math.min(i + 1, 8)} group bg-white border ${border} rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Header */}
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
                  <div className="relative z-10 mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-white" />
                    <span className="text-white text-xs font-bold">{stat.value} {lang === 'sq' ? stat.label.sq : stat.label.en}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{lang === 'sq' ? desc.sq : desc.en}</p>
                  <ul className="space-y-2 mb-6">
                    {benefits.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor}`}></span>
                        <span className="text-xs text-gray-600">{lang === 'sq' ? b.sq : b.en}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={href} className={`inline-flex items-center gap-2 text-sm font-semibold ${lightText} group-hover:gap-3 transition-all duration-200`}>
                    {sq(lang, "Shiko detajet e plota", "See full details")}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT'S ALL CONNECTED ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              {sq(lang, "Gjithçka e lidhur — automatikisht", "Everything connected — automatically")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              {sq(lang,
                "Modulet komunikojnë mes tyre. Kur shoferi bën check-in, prezenca regjistrohet. Kur oferta aprovohet, bëhet faturë. Kur makina ka servisim, shpenzimet shtohen automatikisht.",
                "Modules talk to each other. When a driver checks in, attendance is logged. When a quote is approved, it becomes an invoice. When a vehicle is serviced, costs are added automatically."
              )}
            </p>
          </div>

          {/* Flow diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: ClipboardList, label: sq(lang, "Ofertë", "Quote"), color: "bg-cyan-500" },
              { icon: FileText, label: sq(lang, "Faturë", "Invoice"), color: "bg-blue-500", arrow: true },
              { icon: MapPin, label: sq(lang, "Prezencë GPS", "GPS Attendance"), color: "bg-green-500" },
              { icon: Car, label: sq(lang, "Flotë + Servisim", "Fleet + Service"), color: "bg-slate-500" },
              { icon: CalendarDays, label: sq(lang, "Kalendar", "Calendar"), color: "bg-sky-500" },
              { icon: BarChart3, label: sq(lang, "Raport Final", "Final Report"), color: "bg-violet-500" },
            ].map(({ icon: Icon, label, color }, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                {i < 5 && (
                  <div className="hidden lg:block absolute translate-x-10 text-gray-600 text-lg mt-3">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: sq(lang, "Sinkronizim i menjëhershëm", "Instant sync") },
              { icon: Shield, title: sq(lang, "Kriptim i plotë", "Full encryption") },
              { icon: Globe, title: sq(lang, "Qasje nga çdo pajisje", "Any device access") },
              { icon: Headphones, title: sq(lang, "Mbështetje 24/7", "Support 24/7") },
            ].map(({ icon: Icon, title }, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <Icon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-white text-xs font-semibold">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-xl font-medium text-gray-700 leading-relaxed mb-6">
            "{sq(lang,
              "Clientlly zëvendësoi 8 aplikacione. Tani shoferi ynë bën check-in me GPS, ofertat e klientëve bëhen fatura me 1 klikim, dhe ne dimë çdo kosto të çdo makine. Kursyem mbi 20 orë javore.",
              "Clientlly replaced 8 apps. Now our driver checks in with GPS, client quotes become invoices in 1 click, and we know every cost for every vehicle. We saved over 20 hours a week."
            )}"
          </blockquote>
          <div className="font-bold text-gray-900">Arben Krasniqi</div>
          <div className="text-gray-500 text-sm">{sq(lang, "Drejtor, Transport Krasniqi SH.P.K", "Director, Transport Krasniqi LLC")}</div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(lang,
              <>Provoni të 12 modulet<br />falas për 14 ditë</>,
              <>Try all 12 modules<br />free for 14 days</>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-indigo-200 text-lg mb-10">
            {sq(lang, "Pa kartë kredie. Pa angazhim. Qasje e plotë.", "No credit card. No commitment. Full access.")}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-indigo-700 font-semibold rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/contact"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Na Kontaktoni", "Contact Us")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
