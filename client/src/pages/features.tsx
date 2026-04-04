import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package, Clock,
  ArrowRight, Menu, X, CheckCircle, Star, Zap, Shield, TrendingUp,
  ChevronRight, Globe, Headphones, Car, CalendarDays, ClipboardList,
  MapPin, Wrench, Mail, PenLine, Eye, Send, Bell, Smartphone,
  Wallet, GraduationCap, Award, CalendarX
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

const CATEGORIES = ["all", "finance", "operations", "fleet", "hr"] as const;
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
    title: { sq: "Oferta & Kuota Elektronike", en: "Electronic Quotes & Offers" },
    tagline: { sq: "Dërgoni, gjurmoni dhe nënshkruani — pa letër", en: "Send, track and sign — paperless" },
    desc: {
      sq: "Krijoni oferta profesionale me shabllone të ndryshme dhe dërgojini direkt me email. Klienti e hap, e lexon dhe e nënshkruan direkt nga telefoni ose kompjuteri i tij. Ju shikoni çdo hap në kohë reale.",
      en: "Create professional quotes with different templates and send them directly by email. The client opens, reads and signs directly from their phone or computer. You see every step in real time."
    },
    benefits: [
      { sq: "Dërgim elektronik me email — pa printer, pa letër", en: "Electronic delivery by email — no printer, no paper" },
      { sq: "Klienti nënshkruan direkt nga telefoni ose PC", en: "Client signs directly from phone or PC" },
      { sq: "Ju nënshkruani gjithashtu nga aplikacioni", en: "You also sign from the app" },
      { sq: "Gjurmim: dërguar → hapur → lexuar → nënshkruar", en: "Tracking: sent → opened → read → signed" },
      { sq: "Njoftim i menjëhershëm kur klienti e hap ofertën", en: "Instant alert when client opens the quote" },
      { sq: "Konvertim automatik Ofertë → Faturë pas aprovimit", en: "Auto conversion Quote → Invoice after approval" },
    ],
    href: "/features/quotes",
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
    title: { sq: "Faturim Profesional Elektronik", en: "Professional Electronic Invoicing" },
    tagline: { sq: "Dërgoni me email, gjurmoni hapjen, nënshkruani dixhitalisht", en: "Send by email, track the opening, sign digitally" },
    desc: {
      sq: "Krijoni dhe dërgoni fatura me email me një klikim. Ju shikoni nëse klienti e ka hapur faturën ose jo, dhe klienti mund ta nënshkruajë direkt nga telefoni ose kompjuteri pa asnjë printer.",
      en: "Create and send invoices by email in one click. You can see whether the client has opened the invoice or not, and the client can sign it directly from phone or computer without any printer."
    },
    benefits: [
      { sq: "Dërgim fature me email — profesional dhe i menjëhershëm", en: "Invoice delivery by email — professional and instant" },
      { sq: "Shiko nëse fatura është hapur nga klienti", en: "See if the invoice was opened by the client" },
      { sq: "Nënshkrim dixhital i klientit (telefon ose PC)", en: "Client digital signature (phone or PC)" },
      { sq: "Nënshkrim nga ana e kompanisë suaj gjithashtu", en: "Signature from your company side too" },
      { sq: "Rikujtime automatike kur fatura nuk paguhet", en: "Auto reminders when invoice is unpaid" },
      { sq: "Shabllone të ndryshme me markën tuaj", en: "Multiple templates with your branding" },
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
      sq: "Nëse shitësi përdor Clientlly, fatura e tij regjistrohet direkt si shpenzim për ju — pa asnjë hyrje manuale. Thjesht aprovoni dhe sistemi e bën vetë. Për blerjet e tjera, skanoni faturën me kamerë.",
      en: "If the seller uses Clientlly, their invoice registers directly as an expense for you — no manual entry. Just approve and the system does it. For other purchases, scan the receipt with your camera."
    },
    benefits: [
      { sq: "Fatura e shitësit Clientlly → shpenzim automatik për ju", en: "Clientlly seller invoice → automatic expense for you" },
      { sq: "Pa hyrje manuale — thjesht aprovoni me 1 klikim", en: "No manual entry — just approve in 1 click" },
      { sq: "Skanim automatik i faturave me kamerë (të tjerët)", en: "Auto receipt scanning with camera (others)" },
      { sq: "Kategorizim inteligjent i shpenzimeve", en: "Smart expense categorisation" },
      { sq: "Raporte të gatshme për taksën", en: "Tax-ready expense reports" },
      { sq: "Buxhet, alarme tejkalimi dhe lidhje me flotën", en: "Budget, overspend alerts and fleet link" },
    ],
    href: "/features/expenses",
    stat: { value: "0", label: { sq: "hyrje manuale mes bizneseve Clientlly", en: "manual entries between Clientlly businesses" } },
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
    tagline: { sq: "Dashboard i plotë me KPI dhe parashikime", en: "Full dashboard with KPIs and forecasts" },
    desc: {
      sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale me KPI dhe parashikime financiare.",
      en: "The analytics dashboard gives a complete picture — sales, expenses, cash flow, team attendance and fleet service — all in real time with KPIs and financial forecasts."
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

  {
    id: "buyer-cards",
    icon: Wallet,
    gradient: "from-amber-500 to-amber-600",
    lightText: "text-amber-600",
    border: "border-amber-100",
    dotColor: "bg-amber-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance" },
    title: { sq: "Kartelat e Blerësit", en: "Buyer Cards" },
    tagline: { sq: "Menaxhoni kartelat dhe historikun e blerësve", en: "Manage buyer cards and purchase history" },
    desc: {
      sq: "Krijoni kartela dixhitale për çdo blerës me historikun e plotë të blerjeve, pagesave dhe borxheve. Çdo blerës ka profilin e vet me saldo aktuale, limitet e kreditit dhe statistikat e blerjeve.",
      en: "Create digital cards for each buyer with complete purchase, payment and debt history. Each buyer has their own profile with current balance, credit limits and purchase statistics."
    },
    benefits: [
      { sq: "Kartela dixhitale me saldo dhe historik blerje", en: "Digital cards with balance and purchase history" },
      { sq: "Limit krediti dhe njoftim automatik", en: "Credit limit and automatic notification" },
      { sq: "Gjurmim i pagesave dhe borxheve të blerësit", en: "Tracking buyer payments and debts" },
      { sq: "Raport detajuar i çdo blerësi", en: "Detailed report for each buyer" },
      { sq: "Kategorizim sipas llojit të blerësit", en: "Categorization by buyer type" },
      { sq: "Eksport i listës së blerësve (PDF/Excel)", en: "Export buyer list (PDF/Excel)" },
    ],
    href: "/features/buyer-cards",
    stat: { value: "100%", label: { sq: "transparencë blerësi", en: "buyer transparency" } },
  },

  /* ── CLIENTS ─────────────────────────────────────────── */
  {
    id: "clients",
    icon: Users,
    gradient: "from-indigo-500 to-indigo-600",
    lightText: "text-indigo-600",
    border: "border-indigo-100",
    dotColor: "bg-indigo-500",
    category: "operations" as Category,
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
    href: "/features/calendar",
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
    href: "/features/fleet",
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
    href: "/features/maintenance",
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
  {
    id: "payroll",
    icon: Wallet,
    gradient: "from-violet-600 to-purple-700",
    lightText: "text-violet-600",
    border: "border-violet-100",
    dotColor: "bg-violet-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team" },
    title: { sq: "Paga & Kompensimi", en: "Payroll & Compensation" },
    tagline: { sq: "Çdo mënyrë pagese — e automatizuar plotësisht", en: "Every pay method — fully automated" },
    desc: {
      sq: "Konfiguroni pagën për çdo punonjës sipas mënyrës që i përshtatet rolit të tij — pagë fikse, komision, kombinim, ose bonus performancë. Llogaritja bëhet automatikisht bazuar në orët e prezencës.",
      en: "Configure pay for each employee according to their role — fixed salary, commission, combination, or performance bonus. Calculation is done automatically based on attendance hours."
    },
    benefits: [
      { sq: "Pagë fikse mujore ose javore", en: "Fixed monthly or weekly salary" },
      { sq: "Komision me përqindje të shitjeve", en: "Commission as a percentage of sales" },
      { sq: "Pagë fikse + përqindje (hibride)", en: "Fixed salary + percentage (hybrid)" },
      { sq: "Bonus performancë dhe stimuj të personalizuar", en: "Performance bonuses and custom incentives" },
      { sq: "Llogaritje automatike bazuar në orë prezence", en: "Auto calculation based on attendance hours" },
      { sq: "Raporte pagash dhe eksport payroll", en: "Payroll reports and payroll export" },
    ],
    href: "/features/payroll",
    stat: { value: "100%", label: { sq: "saktësi llogaritje page", en: "payroll accuracy" } },
  },
  {
    id: "leaves",
    icon: CalendarX,
    gradient: "from-pink-500 to-rose-600",
    lightText: "text-pink-600",
    border: "border-pink-100",
    dotColor: "bg-pink-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team" },
    title: { sq: "Menaxhim Lejesh", en: "Leave Management" },
    tagline: { sq: "Pushime të organizuara, aprovim i shpejtë", en: "Organised leave, fast approval" },
    desc: {
      sq: "Menaxhoni të gjitha llojet e pushimeve, kërkesat dhe balancin e ditëve të mbetura. Punonjësit kërkojnë pushim nga telefoni, menaxherët e aprovojnë me një klikim.",
      en: "Manage all types of leave, requests and remaining day balances. Employees request leave from their phone, managers approve with one click."
    },
    benefits: [
      { sq: "Të gjitha llojet: vjetore, sëmundje, lindje, pa pagesë", en: "All types: annual, sick, maternity, unpaid" },
      { sq: "Kërkesë pushimi nga telefoni — aprovim direkt", en: "Leave request from phone — direct approval" },
      { sq: "Ditët e mbetura, dieta e pushimit dhe afati i skadimit", en: "Remaining days, leave allowance and expiry date" },
      { sq: "Kalendar vizual i pushimeve të ekipit", en: "Visual calendar of team leave" },
      { sq: "Raporte dhe eksport të pushimeve mujore", en: "Monthly leave reports and export" },
      { sq: "Historiku i plotë i pushimeve", en: "Full leave history" },
    ],
    href: "/features/leaves",
    stat: { value: "0", label: { sq: "kërkesa pushimi të humbura", en: "lost leave requests" } },
  },
  {
    id: "training",
    icon: GraduationCap,
    gradient: "from-teal-500 to-emerald-600",
    lightText: "text-teal-600",
    border: "border-teal-100",
    dotColor: "bg-teal-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team" },
    title: { sq: "Trajnim & Kuize", en: "Training & Quizzes" },
    tagline: { sq: "Trajnoni ekipin tuaj drejtpërdrejt në platformë", en: "Train your team directly in the platform" },
    desc: {
      sq: "Krijoni programe trajnimi me kuize, testime dhe certifikata dixhitale për çdo punonjës. Gjurmoni progresin e trajnimit dhe siguroni që ekipi juaj është gjithmonë i përgatitur.",
      en: "Create training programs with quizzes, tests and digital certificates for each employee. Track training progress and ensure your team is always prepared."
    },
    benefits: [
      { sq: "Kuize dhe testime interaktive", en: "Interactive quizzes and tests" },
      { sq: "Certifikata dixhitale pas kalimit të provimit", en: "Digital certificates after passing the test" },
      { sq: "Programe trajnimi me module të ndryshme", en: "Training programs with different modules" },
      { sq: "Gjurmim i progresit të çdo punonjësi", en: "Progress tracking for each employee" },
      { sq: "Material trajnimi: video, PDF, artikuj", en: "Training materials: video, PDF, articles" },
      { sq: "Raporte detajuara të trajnimit të ekipit", en: "Detailed team training reports" },
    ],
    href: "/features/training",
    stat: { value: "100%", label: { sq: "ekip i trajnuar", en: "trained team" } },
  },
];

const categoryLabels: Record<Category, { sq: string; en: string }> = {
  all:        { sq: "Të gjitha",  en: "All" },
  finance:    { sq: "Financë",    en: "Finance" },
  operations: { sq: "Operacione", en: "Operations" },
  fleet:      { sq: "Flotë Makinash", en: "Fleet" },
  hr:         { sq: "Burimet Njerëzore", en: "Human Resources" },
};

const categoryIcons: Record<Category, JSX.Element> = {
  all:        <span>✦</span>,
  finance:    <span>€</span>,
  operations: <Package className="h-3.5 w-3.5" />,
  fleet:      <Car className="h-3.5 w-3.5" />,
  hr:         <GraduationCap className="h-3.5 w-3.5" />,
};

export default function Features() {
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? features
    : features.filter(f => f.category === activeCategory);


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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/features" className="text-sm font-semibold text-indigo-600">{sq(lang, "Veçoritë", "Features")}</Link>
              <button onClick={() => go("/subscribe")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</button>
              <button onClick={() => go("/contact")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact")}</button>
            </div>
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
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
            <button onClick={() => { setShowMobileMenu(false); go("/subscribe"); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <button onClick={() => { setShowMobileMenu(false); go("/contact"); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Kontakt", "Contact")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => { setShowMobileMenu(false); go("/trial"); }} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial")}</button>
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
            {sq(lang, "16 module të integruara plotësisht", "16 fully integrated modules")}
          </div>
          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 leading-[1.1]">
            {sq(lang,
              <>Të gjitha veçoritë<br /><span className="text-indigo-600">në një vend</span></>,
              <>Every feature<br /><span className="text-indigo-600">in one place</span></>
            )}
          </h1>
          <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {sq(lang,
              "Nga oferta, faturimi dhe shpenzimet, tek mirëmbajtja, menaxhimi i flotës dhe burimet njerëzore — Clientlly zëvendëson çdo aplikacion tjetër që biznesi juaj po përdor sot.",
              "From quotes, invoicing and expenses, to maintenance, fleet management and human resources — Clientlly replaces every other app your business uses today."
            )}
          </p>

          {/* Quick stats */}
          <div className="anim-rise anim-d3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-10">
            {[
              { v: "16", l: sq(lang, "Module", "Modules") },
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
            <button onClick={() => go("/compare-features")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-200 transition-all duration-200 shadow-sm text-sm">
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

      {/* ── B2B NETWORK CALLOUT ── */}
      <section className="py-10 px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-extrabold text-white mb-1.5">
                {sq(lang,
                  "Shpenzimi regjistrohet vetë — nëse shitësi përdor Clientlly",
                  "Expense registers itself — if the seller uses Clientlly"
                )}
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                {sq(lang,
                  "Kur shitësi ju dërgon faturën përmes Clientlly, ajo shfaqet direkt në listën tuaj të shpenzimeve. Pa kopjim, pa hyrje manuale — thjesht klikoni Aprovo dhe shpenzimi regjistrohet menjëherë.",
                  "When a seller sends you an invoice through Clientlly, it appears directly in your expense list. No copying, no manual entry — just click Approve and the expense is registered instantly."
                )}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3 text-sm font-semibold">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><FileText className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Faturë (shitësi)", "Invoice (seller)")}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-300" />
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><CheckCircle className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Aprovo", "Approve")}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-300" />
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-emerald-500/80 rounded-xl flex items-center justify-center"><Receipt className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Shpenzim (blersit)", "Expense (buyer)")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-SIGNATURE & DOCUMENT TRACKING ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5">
              <PenLine className="h-3.5 w-3.5" />
              {sq(lang, "Nënshkrimi Dixhital & Gjurmimi i Dokumenteve", "Digital Signature & Document Tracking")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {sq(lang,
                <>Dërgoni, gjurmoni dhe nënshkruani<br /><span className="text-indigo-600">pa asnjë printer</span></>,
                <>Send, track and sign<br /><span className="text-indigo-600">without a single printer</span></>
              )}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              {sq(lang,
                "Çdo faturë dhe ofertë dërgohet elektronikisht. Ju shikoni çdo hap — kur u dërgua, kur u hap, dhe kur u nënshkrua.",
                "Every invoice and quote is sent electronically. You see every step — when it was sent, when it was opened, and when it was signed."
              )}
            </p>
          </div>

          {/* Flow steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: Send,
                color: "bg-indigo-100 text-indigo-600",
                step: "1",
                title: { sq: "Krijoni & Dërgoni", en: "Create & Send" },
                desc: { sq: "Zgjidhni shabllonin, plotësoni detajet dhe dërgoni me email me 1 klikim.", en: "Choose a template, fill in the details and send by email in 1 click." },
              },
              {
                icon: Eye,
                color: "bg-amber-100 text-amber-600",
                step: "2",
                title: { sq: "Gjurmoni Hapjen", en: "Track the Opening" },
                desc: { sq: "Merrni njoftim të menjëhershëm kur klienti e hap emailin dhe faturën/ofertën.", en: "Get an instant notification when the client opens the email and document." },
              },
              {
                icon: PenLine,
                color: "bg-emerald-100 text-emerald-600",
                step: "3",
                title: { sq: "Nënshkrim Dixhital", en: "Digital Signature" },
                desc: { sq: "Klienti nënshkruan direkt nga telefoni ose kompjuteri. Ju nënshkruani gjithashtu.", en: "Client signs directly from phone or computer. You sign too." },
              },
              {
                icon: CheckCircle,
                color: "bg-green-100 text-green-600",
                step: "4",
                title: { sq: "Finalizuar & Arkivuar", en: "Finalised & Archived" },
                desc: { sq: "Dokumenti i plotë ruhet automatikisht. Oferta bëhet faturë me 1 klikim.", en: "Complete document saved automatically. Quote becomes invoice in 1 click." },
              },
            ].map(({ icon: Icon, color, step, title, desc }, i) => (
              <div key={i} className="relative p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-indigo-100 hover:bg-white transition-all duration-300 group">
                <div className="absolute -top-2.5 -left-2.5 w-6 h-6 bg-gray-900 text-white text-xs font-extrabold rounded-full flex items-center justify-center">
                  {step}
                </div>
                <div className={`inline-flex p-2.5 rounded-xl ${color} mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1.5">{lang === 'sq' ? title.sq : title.en}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{lang === 'sq' ? desc.sq : desc.en}</p>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-7">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  {sq(lang, "Çfarë shihni JU (kompania)", "What YOU see (company side)")}
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'sq' ? [
                    "✓ Dërguar — 14 Prill 2025, 10:32",
                    "✓ Hapur — 14 Prill 2025, 11:15 (3 herë)",
                    "✓ Nënshkruar nga klienti — 14 Prill 2025, 11:22",
                    "✓ Nënshkruar nga kompania — 14 Prill 2025, 11:30",
                    "✓ Fatura e gjeneruar automatikisht",
                  ] : [
                    "✓ Sent — 14 April 2025, 10:32",
                    "✓ Opened — 14 April 2025, 11:15 (3 times)",
                    "✓ Signed by client — 14 April 2025, 11:22",
                    "✓ Signed by company — 14 April 2025, 11:30",
                    "✓ Invoice generated automatically",
                  ]).map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 font-medium flex items-center gap-2">
                      <span className="text-emerald-500">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-indigo-600" />
                  {sq(lang, "Çfarë sheh KLIENTI (nga email-i)", "What the CLIENT sees (from email)")}
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'sq' ? [
                    "📧 Merr email me PDF të ofertës/faturës",
                    "🔗 Klikon linkun — hapet direkt në browser",
                    "📱 Lexon dokumentin nga telefoni ose PC",
                    "✍️ Nënshkruan me gisht ose mouse",
                    "✅ Merr konfirmimin dhe kopjen finale",
                  ] : [
                    "📧 Receives email with PDF quote/invoice",
                    "🔗 Clicks the link — opens directly in browser",
                    "📱 Reads the document from phone or PC",
                    "✍️ Signs with finger or mouse",
                    "✅ Receives confirmation and final copy",
                  ]).map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                  <button onClick={() => go(href)} className={`inline-flex items-center gap-2 text-sm font-semibold ${lightText} group-hover:gap-3 transition-all duration-200`}>
                    {sq(lang, "Shiko detajet e plota", "See full details")}
                    <ChevronRight className="h-4 w-4" />
                  </button>
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
              <>Provoni të 16 modulet<br />falas për 14 ditë</>,
              <>Try all 16 modules<br />free for 14 days</>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-indigo-200 text-lg mb-10">
            {sq(lang, "Pa kartë kredie. Pa angazhim. Qasje e plotë.", "No credit card. No commitment. Full access.")}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button onClick={() => go("/trial")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-indigo-700 font-semibold rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/subscribe"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Blej Tani", "Buy Now")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
