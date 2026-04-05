import { useState } from "react";
import { Link, useLocation } from "wouter";
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
import { t as tr } from "@/lib/i18n";
import { PLAN_F } from "@/lib/translations";
import Footer from "@/components/Footer";
import clientllyLogo from '@assets/CLIENTLLY_ICON_1753793353861.png';

interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

function sq(lang: string, albanian: string | JSX.Element, english: string | JSX.Element, spanish?: string | JSX.Element, german?: string | JSX.Element, macedonian?: string | JSX.Element): string | JSX.Element {
  switch (lang) {
    case 'sq': return albanian;
    case 'es': return spanish ?? english;
    case 'de': return german ?? english;
    case 'mk': return macedonian ?? english;
    default:   return english;
  }
}

const moduleCategories = (lang: string) => [
  {
    label: sq(lang, "Financa", "Finance", "Finanzas", "Finanzen", "Финансии"),
    color: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-500",
    items: [
      { icon: FileCheck, title: sq(lang, "Kuotime Elektronike", "Electronic Quotes", "Cotizaciones Electrónicas", "Elektronische Angebote", "Електронски Понуди"), desc: sq(lang, "Krijo & dërgo kuotim profesional brenda sekondave", "Create & send professional quotes in seconds", "Cree y envíe cotizaciones profesionales en segundos", "Erstellen und senden Sie professionelle Angebote in Sekunden", "Создавајте и испраќајте професионални понуди за секунди") },
      { icon: FileText, title: sq(lang, "Faturim Profesional", "Professional Invoicing", "Facturación Profesional", "Professionelle Rechnungsstellung", "Професионално Фактурирање"), desc: sq(lang, "Fatura automatike, reminders & gjurmim pagesash", "Auto invoices, reminders & payment tracking", "Facturas automáticas, recordatorios y seguimiento de pagos", "Automatische Rechnungen, Erinnerungen & Zahlungsverfolgung", "Автоматски фактури, потсетници и следење на плаќања") },
      { icon: Receipt, title: sq(lang, "Gjurmim Shpenzimesh", "Expense Tracking", "Seguimiento de Gastos", "Ausgabenverfolgung", "Следење Трошоци"), desc: sq(lang, "Kategorizim automatik & raport tatimor", "Automatic categorization & tax reports", "Categorización automática e informes fiscales", "Automatische Kategorisierung & Steuerberichte", "Автоматска категоризација и даночни извештаи") },
      { icon: CreditCard, title: sq(lang, "Menaxhim Borxhesh", "Debt Management", "Gestión de Deudas", "Schuldenmanagement", "Управување со Долгови"), desc: sq(lang, "Planifikoni shlyerjet, qëndroni pa borxhe", "Plan repayments, stay debt-free", "Planifique los reembolsos, manténgase libre de deudas", "Rückzahlungen planen, schuldenfrei bleiben", "Планирајте отплати, останете без долгови") },
      { icon: BarChart3, title: sq(lang, "Raporte & Analitikë", "Insights & Reports", "Informes y Análisis", "Berichte & Analysen", "Извештаи & Аналитика"), desc: sq(lang, "Dashboard i plotë me KPI dhe parashikime", "Full dashboard with KPIs and forecasts", "Panel completo con KPIs y pronósticos", "Vollständiges Dashboard mit KPIs und Prognosen", "Целосен панел со KPI и прогнози") },
      { icon: Wallet, title: sq(lang, "Kartelat e Blerësit", "Buyer Cards", "Tarjetas de Comprador", "Käuferkarten", "Картички на Купувачи"), desc: sq(lang, "Menaxhoni kartelat dhe historikun e blerësve", "Manage buyer cards and purchase history", "Gestione tarjetas de compradores e historial de compras", "Käuferkarten und Kaufhistorie verwalten", "Управувајте со картички и историја на купувачи") },
    ],
  },
  {
    label: sq(lang, "Operacione", "Operations", "Operaciones", "Betrieb", "Операции"),
    color: "bg-violet-50 text-violet-700 border-violet-100",
    dot: "bg-violet-500",
    items: [
      { icon: Users, title: sq(lang, "Menaxhim Klientësh", "Client Management", "Gestión de Clientes", "Kundenverwaltung", "Управување со Клиенти"), desc: sq(lang, "CRM i plotë — historik, projekte & komunikim", "Full CRM — history, projects & communication", "CRM completo — historial, proyectos y comunicación", "Vollständiges CRM — Geschichte, Projekte & Kommunikation", "Целосен CRM — историја, проекти и комуникација") },
      { icon: Building2, title: sq(lang, "Menaxhim Furnitorësh", "Vendor Management", "Gestión de Proveedores", "Lieferantenverwaltung", "Управување со Добавувачи"), desc: sq(lang, "Porosi, kontrata dhe vlerësim furnitorësh", "Orders, contracts and vendor evaluation", "Pedidos, contratos y evaluación de proveedores", "Bestellungen, Verträge und Lieferantenbewertung", "Нарачки, договори и евалуација на добавувачи") },
      { icon: Package, title: sq(lang, "Menaxhim Inventari", "Inventory Management", "Gestión de Inventario", "Bestandsverwaltung", "Управување со Залихи"), desc: sq(lang, "Stok i saktë, alarme automatike & barkode", "Accurate stock, auto alerts & barcodes", "Stock preciso, alertas automáticas y códigos de barras", "Genauer Bestand, automatische Warnungen & Barcodes", "Точен залих, автоматски предупредувања и баркодови") },
      { icon: CalendarCheck, title: sq(lang, "Kalendarit & Takime", "Calendar & Meetings", "Calendario y Reuniones", "Kalender & Meetings", "Календар и Состаноци"), desc: sq(lang, "Caktime inteligjente dhe njoftime automatike", "Smart scheduling and automatic reminders", "Programación inteligente y recordatorios automáticos", "Intelligente Terminplanung und automatische Erinnerungen", "Паметно закажување и автоматски потсетници") },
    ],
  },
  {
    label: sq(lang, "Flotë", "Fleet", "Flota", "Flotte", "Флота"),
    color: "bg-amber-50 text-amber-700 border-amber-100",
    dot: "bg-amber-500",
    items: [
      { icon: Car, title: sq(lang, "Menaxhim Floteje", "Fleet Management", "Gestión de Flotas", "Flottenmanagement", "Управување со Флота"), desc: sq(lang, "Gjurmoni automjetet, shpenzimet & mirëmbajtjen", "Track vehicles, costs & maintenance", "Rastrear vehículos, costos y mantenimiento", "Fahrzeuge, Kosten & Wartung verfolgen", "Следете возила, трошоци и одржување") },
      { icon: Zap, title: sq(lang, "Mirëmbajtje & Servisim", "Maintenance & Service", "Mantenimiento y Servicio", "Wartung & Service", "Одржување & Сервис"), desc: sq(lang, "Planifikoni servisimet, reduktoni kohën e ndërprerjes", "Schedule service, reduce downtime", "Programe el mantenimiento, reduzca el tiempo de inactividad", "Wartung planen, Ausfallzeit reduzieren", "Закажете сервис, намалете застои") },
    ],
  },
  {
    label: sq(lang, "Burime Njerëzore", "Human Resources", "Recursos Humanos", "Personalwesen", "Човечки Ресурси"),
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
    items: [
      { icon: Clock, title: sq(lang, "Prezencë (GPS)", "Attendance (GPS)", "Asistencia (GPS)", "Anwesenheit (GPS)", "Присуство (GPS)"), desc: sq(lang, "Check-in me GPS nga celulari, raporte automatike", "GPS mobile check-in, automatic reports", "Check-in GPS desde el móvil, informes automáticos", "GPS-Mobil-Check-in, automatische Berichte", "GPS мобилен Check-in, автоматски извештаи") },
      { icon: DollarSign, title: sq(lang, "Pagat e Punonjësve", "Payroll", "Nómina", "Gehaltsabrechnung", "Плати"), desc: sq(lang, "Llogaritje automatike me zbritje dhe raporte", "Auto calculation with deductions & reports", "Cálculo automático con deducciones e informes", "Automatische Berechnung mit Abzügen & Berichten", "Автоматска пресметка со одбитоци и извештаи") },
      { icon: Briefcase, title: sq(lang, "Menaxhim Lejesh", "Leave Management", "Gestión de Permisos", "Urlaubsverwaltung", "Управување со Отсуства"), desc: sq(lang, "Kërkesa, aprovim dhe bilanci i lejeve", "Requests, approval and leave balance", "Solicitudes, aprobación y saldo de permisos", "Anfragen, Genehmigung und Urlaubssaldo", "Барања, одобрување и салдо на отсуства") },
      { icon: GraduationCap, title: sq(lang, "Trajnim & Kuize", "Training & Quizzes", "Formación y Cuestionarios", "Training & Quiz", "Обука и Тестови"), desc: sq(lang, "Trajnoni ekipin tuaj drejtpërdrejt në platformë", "Train your team directly in the platform", "Forme a su equipo directamente en la plataforma", "Trainieren Sie Ihr Team direkt auf der Plattform", "Тренирајте го вашиот тим директно на платформата") },
    ],
  },
];

export default function Landing() {
  const { currentLanguage: lang } = useTranslation();
  const [, setLocation] = useLocation();
  const go = (path: string) => { window.location.href = path; };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedCat, setExpandedCat] = useState<number | null>(null);

  const { data: plans = [] } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  const featureMap: Record<string, typeof PLAN_F[keyof typeof PLAN_F]> = {};
  Object.values(PLAN_F).forEach(t5 => { featureMap[t5.sq] = t5; });

  const tf = (feature: string): string => {
    const clean = feature.replace(/\*\*/g, '');
    const boldFeature = feature.startsWith("**") && feature.endsWith("**");
    const match = featureMap[clean] ?? featureMap[feature];
    if (!match) return feature;
    const translated = tr(lang, match);
    return boldFeature && !translated.startsWith("**") ? `**${translated}**` : translated;
  };

  const planName = (name: string) => {
    const names: Record<string, Record<string, string>> = {
      "Starter": { sq: "Starter", en: "Starter", es: "Inicial", de: "Starter", mk: "Стартер" },
      "Professional": { sq: "Profesional", en: "Professional", es: "Profesional", de: "Professionell", mk: "Професионален" },
      "Enterprise": { sq: "Enterprise", en: "Enterprise", es: "Empresarial", de: "Enterprise", mk: "Ентерпрајз" },
    };
    return names[name]?.[lang] ?? name;
  };

  const stats = [
    { value: "200+", label: sq(lang, "Biznese", "Businesses", "Empresas", "Unternehmen", "Бизниси") },
    { value: "16", label: sq(lang, "Module", "Modules", "Módulos", "Module", "Модули") },
    { value: "5", label: sq(lang, "Vende", "Countries", "Países", "Länder", "Земји") },
    { value: "99.9%", label: sq(lang, "Uptime", "Uptime", "Tiempo Activo", "Betriebszeit", "Работно Време") },
  ];

  const testimonials = [
    {
      name: "Artan Shala",
      role: "Truly Nolen",
      avatar: "AS",
      color: "from-blue-500 to-indigo-600",
      text: sq(lang,
        "Clientlly na kurseu mbi 12 orë në javë. Faturimi dhe gjurmimi i shpenzimeve janë bërë shumë të thjeshta.",
        "Clientlly saved us over 12 hours a week. Invoicing and expense tracking became so simple.",
        "Clientlly nos ahorró más de 12 horas a la semana. La facturación y el seguimiento de gastos se volvieron muy simples.",
        "Clientlly sparte uns über 12 Stunden pro Woche. Rechnungsstellung und Ausgabenverfolgung wurden so einfach.",
        "Clientlly ни заштеди над 12 часа неделно. Фактурирањето и следењето на трошоци станаа многу едноставни."
      ),
    },
    {
      name: "Blerta Krasniqi",
      role: "CEO, TechStart",
      avatar: "BK",
      color: "from-violet-500 to-purple-600",
      text: sq(lang,
        "Platforma më e mirë për biznese të vogla. Çdo gjë që nevojitet — në një vend, me mbështetje të jashtëzakonshme.",
        "The best platform for small businesses. Everything needed — in one place, with outstanding support.",
        "La mejor plataforma para pequeñas empresas. Todo lo necesario — en un solo lugar, con soporte excepcional.",
        "Die beste Plattform für kleine Unternehmen. Alles Nötige — an einem Ort, mit hervorragendem Support.",
        "Најдобрата платформа за мали бизниси. Сé потребно — на едно место, со извонредна поддршка."
      ),
    },
    {
      name: "Mikel Doda",
      role: sq(lang, "Drejtor Financiar, Scentlinqpro", "Finance Director, Scentlinqpro", "Director Financiero, Scentlinqpro", "Finanzdirektor, Scentlinqpro", "Финансиски Директор, Scentlinqpro"),
      avatar: "MD",
      color: "from-emerald-500 to-teal-600",
      text: sq(lang,
        "Raportet janë fantastike. Tani e di saktësisht si po shkon biznesi çdo ditë — pa asnjë spreadsheet.",
        "The reports are fantastic. Now I know exactly how the business is doing every day — no spreadsheets.",
        "Los informes son fantásticos. Ahora sé exactamente cómo va el negocio cada día, sin hojas de cálculo.",
        "Die Berichte sind fantastisch. Jetzt weiß ich genau, wie das Geschäft jeden Tag läuft — ohne Tabellen.",
        "Извештаите се фантастични. Сега точно знам како оди бизнисот секој ден — без табели."
      ),
    },
  ];

  const steps = [
    {
      n: "01",
      icon: CheckCircle,
      title: sq(lang, "Regjistrohuni Falas", "Sign Up Free", "Regístrese Gratis", "Kostenlos Registrieren", "Регистрирајте се Бесплатно"),
      desc: sq(lang,
        "Krijoni llogarinë në 2 minuta. Pa kartë kredie, pa detyrime. 14 ditë provë e plotë.",
        "Create your account in 2 minutes. No credit card, no obligations. 14-day full trial.",
        "Cree su cuenta en 2 minutos. Sin tarjeta de crédito, sin compromisos. 14 días de prueba completa.",
        "Erstellen Sie Ihr Konto in 2 Minuten. Keine Kreditkarte, keine Verpflichtungen. 14 Tage volle Testversion.",
        "Создадете сметка за 2 минути. Без кредитна картичка, без обврски. 14 дена целосна проба."
      ),
    },
    {
      n: "02",
      icon: Package,
      title: sq(lang, "Të Gjitha Modulet të Përfshira", "All Modules Included", "Todos los Módulos Incluidos", "Alle Module Enthalten", "Сите Модули Вклучени"),
      desc: sq(lang,
        "Të gjitha 16 modulet aktivizohen automatikisht me planin tuaj. Shtoni ekipin dhe nisni menjëherë.",
        "All 16 modules are automatically activated with your plan. Add your team and get started right away.",
        "Los 16 módulos se activan automáticamente con su plan. Agregue su equipo y comience de inmediato.",
        "Alle 16 Module werden automatisch mit Ihrem Plan aktiviert. Team hinzufügen und sofort loslegen.",
        "Сите 16 модули се активираат автоматски со вашиот план. Додајте тим и започнете веднаш."
      ),
    },
    {
      n: "03",
      icon: TrendingUp,
      title: sq(lang, "Rrituni me Clientlly", "Grow with Clientlly", "Crezca con Clientlly", "Wachsen Sie mit Clientlly", "Растете со Clientlly"),
      desc: sq(lang,
        "Shpenzoni kohën tuaj në rritje, jo në administratë. Raportet tregojnë gjithçka automatikisht.",
        "Spend your time on growth, not admin. Reports show everything automatically.",
        "Dedique su tiempo al crecimiento, no a la administración. Los informes muestran todo automáticamente.",
        "Verbringen Sie Ihre Zeit mit Wachstum, nicht mit Verwaltung. Berichte zeigen alles automatisch.",
        "Посветете го времето на раст, а не на администрација. Извештаите покажуваат сé автоматски."
      ),
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

            <div className="hidden md:flex items-center space-x-7 flex-1 justify-center">
              <Link href="/" className="text-sm font-semibold text-indigo-600">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <a href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</a>
              <a href="#pricing-section" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</a>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            </div>

            <div className="hidden md:flex items-center space-x-5 flex-shrink-0 relative z-[60]">
              <LanguageSelector />
            </div>

            <button className="md:hidden p-2 ml-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-semibold text-indigo-600 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Rreth Nesh", "About", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
            <a href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</a>
            <a href="#pricing-section" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</a>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => { window.location.href = '/trial'; }} className="block text-center text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg w-full">{sq(lang, "Provo Falas", "Free Trial", "Prueba Gratis", "Kostenlos Testen", "Бесплатна Проба")}</button>
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
                {sq(lang, "14 ditë provë falas · Pa kartë kredie", "14-day free trial · No credit card", "14 días de prueba gratuita · Sin tarjeta de crédito", "14-tägige kostenlose Testversion · Keine Kreditkarte", "14-дневна бесплатна проба · Без кредитна картичка")}
              </div>

              <h1 className="anim-rise text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                {sq(lang,
                  <>Menaxho biznesin<br /><span className="text-indigo-600">gjithçka në një vend</span></>,
                  <>Run your entire<br /><span className="text-indigo-600">business in one place</span></>,
                  <>Gestione su negocio<br /><span className="text-indigo-600">todo en un solo lugar</span></>,
                  <>Verwalten Sie Ihr<br /><span className="text-indigo-600">Unternehmen an einem Ort</span></>,
                  <>Управувајте со бизнисот<br /><span className="text-indigo-600">сé на едно место</span></>
                )}
              </h1>

              <p className="anim-rise anim-d1 text-lg text-gray-500 leading-relaxed max-w-md">
                {sq(lang,
                  "16 module të integruara — faturim, shpenzime, inventar, burimet njerëzore, flotë dhe shumë më tepër. E gjitha në një platformë të vetme.",
                  "16 integrated modules — invoicing, expenses, inventory, HR, fleet and more. All in a single platform.",
                  "16 módulos integrados — facturación, gastos, inventario, RRHH, flota y más. Todo en una sola plataforma.",
                  "16 integrierte Module — Rechnungsstellung, Ausgaben, Inventar, HR, Flotte und mehr. Alles auf einer Plattform.",
                  "16 интегрирани модули — фактурирање, трошоци, залихи, HR, флота и повеќе. Сé на една платформа."
                )}
              </p>

              <div className="anim-rise anim-d2 flex flex-wrap gap-3">
                <button
                  onClick={() => { window.location.href = '/trial'; }}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free", "14 días gratis", "14 Tage kostenlos", "14 дена бесплатно")}</span>
                    <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial", "Iniciar Prueba Gratis", "Testversion Starten", "Започни Бесплатна Проба")}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => { window.location.href = '/subscribe?plan=professional&billing=monthly'; }}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl border border-gray-700 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  <CreditCard className="h-4 w-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}
                </button>
              </div>

              <div className="anim-fade anim-d3 flex flex-wrap gap-4 text-xs text-gray-400">
                {[
                  { icon: Shield, label: sq(lang, "Mbrojtje e të dhënave", "Data protection", "Protección de datos", "Datenschutz", "Заштита на податоци"), href: "/data-protection" },
                  { icon: Check, label: sq(lang, "Konfigurim falas", "Free setup", "Configuración gratuita", "Kostenlose Einrichtung", "Бесплатна поставка"), href: "/setup-migration" },
                  { icon: Headphones, label: sq(lang, "Mbështetje 24/7", "24/7 support", "Soporte 24/7", "24/7-Support", "Поддршка 24/7"), href: "/expert-support" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link key={String(label)} href={href}
                    className="flex items-center gap-1 hover:text-indigo-600 transition-colors font-medium">
                    <Icon className="h-3 w-3 text-gray-300" />
                    {label}
                  </Link>
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
                      { label: sq(lang, "Të ardhura", "Revenue", "Ingresos", "Einnahmen", "Приходи"), value: "€24,850", change: "+12%", color: "text-emerald-600 bg-emerald-50" },
                      { label: sq(lang, "Shpenzime", "Expenses", "Gastos", "Ausgaben", "Трошоци"), value: "€8,540", change: "-4%", color: "text-blue-600 bg-blue-50" },
                      { label: sq(lang, "Klientë", "Clients", "Clientes", "Kunden", "Клиенти"), value: "32", change: "+3", color: "text-violet-600 bg-violet-50" },
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
                    <p className="text-[10px] text-gray-400 mb-2 font-semibold uppercase tracking-wide">{sq(lang, "Të ardhura mujore", "Monthly Revenue", "Ingresos Mensuales", "Monatliche Einnahmen", "Месечни Приходи")}</p>
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
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{sq(lang, "Faturat e fundit", "Recent Invoices", "Facturas Recientes", "Letzte Rechnungen", "Последни Фактури")}</p>
                    {[
                      { client: "TechStart", amount: "€2,400", status: sq(lang, "Paguar", "Paid", "Pagado", "Bezahlt", "Платено"), dot: "bg-emerald-500" },
                      { client: "Truly Nolen", amount: "€1,850", status: sq(lang, "Pritur", "Pending", "Pendiente", "Ausstehend", "Во Тек"), dot: "bg-amber-500" },
                      { client: "Scentlinqpro", amount: "€3,200", status: sq(lang, "Paguar", "Paid", "Pagado", "Bezahlt", "Платено"), dot: "bg-emerald-500" },
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
                  <p className="text-[10px] text-gray-400 font-medium">{sq(lang, "Rritje mujore", "Monthly growth", "Crecimiento mensual", "Monatliches Wachstum", "Месечен раст")}</p>
                  <p className="text-sm font-bold text-gray-900 text-emerald-600">+18.4%</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-[11px] font-semibold text-gray-700">{sq(lang, "16 module aktive", "16 active modules", "16 módulos activos", "16 aktive Module", "16 активни модули")}</span>
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
              {sq(lang, "Si funksionon", "How it works", "Cómo funciona", "So funktioniert es", "Како функционира")}
            </p>
            <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang,
                <>Filloni në <span className="text-indigo-600">3 hapa</span></>,
                <>Get started in <span className="text-indigo-600">3 steps</span></>,
                <>Comience en <span className="text-indigo-600">3 pasos</span></>,
                <>Starten Sie in <span className="text-indigo-600">3 Schritten</span></>,
                <>Започнете во <span className="text-indigo-600">3 чекори</span></>
              )}
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
              {sq(lang, "Platforma", "Platform", "Plataforma", "Plattform", "Платформа")}
            </p>
            <h2 id="features-title" className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang,
                <>16 module — <span className="text-indigo-600">gjithçka e integruar</span></>,
                <>16 modules — <span className="text-indigo-600">everything integrated</span></>,
                <>16 módulos — <span className="text-indigo-600">todo integrado</span></>,
                <>16 Module — <span className="text-indigo-600">alles integriert</span></>,
                <>16 модули — <span className="text-indigo-600">сé интегрирано</span></>
              )}
            </h2>
            <p className="anim-rise anim-d1 text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang,
                "Ndaloni së paguri për 5 aplikacione të ndryshme. Me Clientlly, 16 module komunikon me njëra-tjetrën.",
                "Stop paying for 5 different apps. With Clientlly, everything talks to each other.",
                "Deje de pagar por 5 aplicaciones diferentes. Con Clientlly, todo se comunica entre sí.",
                "Hören Sie auf, für 5 verschiedene Apps zu zahlen. Mit Clientlly kommuniziert alles miteinander.",
                "Престанете да плаќате за 5 различни апликации. Со Clientlly, сé комуницира меѓу себе."
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
                      <span className="text-sm text-gray-500 font-medium">{cat.items.length} {sq(lang, "module", "modules", "módulos", "Module", "модули")}</span>
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
              {sq(lang, "Shiko të gjitha veçoritë e detajuara", "View all detailed features", "Ver todas las características detalladas", "Alle detaillierten Funktionen anzeigen", "Погледни ги сите детални карактеристики")}
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
                {sq(lang, "Pse Clientlly", "Why Clientlly", "Por qué Clientlly", "Warum Clientlly", "Зошто Clientlly")}
              </p>
              <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                {sq(lang,
                  <>Kurseni kohë.<br /><span className="text-indigo-600">Rritni fitimet.</span></>,
                  <>Save time.<br /><span className="text-indigo-600">Grow profits.</span></>,
                  <>Ahorre tiempo.<br /><span className="text-indigo-600">Aumente ganancias.</span></>,
                  <>Sparen Sie Zeit.<br /><span className="text-indigo-600">Steigern Sie Gewinne.</span></>,
                  <>Заштедете време.<br /><span className="text-indigo-600">Зголемете профит.</span></>
                )}
              </h2>
              <p className="anim-rise anim-d1 text-gray-500 leading-relaxed mb-10">
                {sq(lang,
                  "Shumica e bizneseve humbasin orë të çmuara çdo javë duke menaxhuar spreadsheets dhe aplikacione të ndryshme. Clientlly i zëvendëson të gjitha.",
                  "Most businesses waste precious hours every week managing spreadsheets and different apps. Clientlly replaces them all.",
                  "La mayoría de las empresas pierden horas preciosas cada semana gestionando hojas de cálculo y diferentes aplicaciones. Clientlly las reemplaza todas.",
                  "Die meisten Unternehmen verschwenden wertvolle Stunden mit Tabellen und verschiedenen Apps. Clientlly ersetzt sie alle.",
                  "Повеќето бизниси губат драгоцени часови секоја недела управувајќи со табели и различни апликации. Clientlly ги заменува сите."
                )}
              </p>

              <div className="space-y-5">
                {[
                  { icon: TrendingUp, color: "bg-indigo-50 text-indigo-600", stat: sq(lang, "15+ orë të kursyera/javë", "15+ hours saved per week", "15+ horas ahorradas/semana", "15+ Stunden gespart/Woche", "15+ часа заштедени/неделно"), desc: sq(lang, "Automatizim i plotë i detyrave të përsëritura", "Full automation of repetitive tasks", "Automatización completa de tareas repetitivas", "Vollautomatisierung wiederkehrender Aufgaben", "Целосна автоматизација на повторливи задачи") },
                  { icon: Zap, color: "bg-emerald-50 text-emerald-600", stat: sq(lang, "+30% të ardhura mesatare", "+30% average revenue", "+30% ingresos promedio", "+30% durchschnittlicher Umsatz", "+30% просечни приходи"), desc: sq(lang, "Bizneset tona raportojnë rritje reale", "Our businesses report real growth", "Nuestras empresas reportan crecimiento real", "Unsere Unternehmen berichten von echtem Wachstum", "Нашите бизниси пријавуваат реален раст") },
                  { icon: Shield, color: "bg-violet-50 text-violet-600", stat: sq(lang, "95% më pak gabime", "95% fewer errors", "95% menos errores", "95% weniger Fehler", "95% помалку грешки"), desc: sq(lang, "Llogaritjet automatike eliminojnë gabimet njerëzore", "Automatic calculations eliminate human errors", "Los cálculos automáticos eliminan los errores humanos", "Automatische Berechnungen eliminieren menschliche Fehler", "Автоматските пресметки ги елиминираат човечките грешки") },
                  { icon: Headphones, color: "bg-rose-50 text-rose-600", stat: sq(lang, "Mbështetje 24/7", "24/7 Support", "Soporte 24/7", "24/7-Support", "Поддршка 24/7"), desc: sq(lang, "Ekip real, jo vetëm bots — gjithmonë i gatshëm", "Real team, not just bots — always ready", "Equipo real, no solo bots — siempre disponible", "Echtes Team, nicht nur Bots — immer bereit", "Реален тим, не само ботови — секогаш подготвен") },
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
                {sq(lang, "Çfarë thonë klientët tanë", "What our clients say", "Lo que dicen nuestros clientes", "Was unsere Kunden sagen", "Што велат нашите клиенти")}
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
      <section className="py-24 px-6 lg:px-8 bg-gray-50 overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="anim-fade text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">
                {sq(lang, "Bashkëpunim", "Collaboration", "Colaboración", "Zusammenarbeit", "Соработка")}
              </p>
              <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {sq(lang, "Le të rritemi bashkë", "Let's grow together", "Crezcamos juntos", "Wachsen wir gemeinsam", "Да растеме заедно")}
              </h2>
              <p className="anim-rise anim-d1 text-gray-500 leading-relaxed mb-8">
                {sq(lang,
                  "Platforma jonë ndërtohet bashkë me ju. Sugjerojini idetë tuaja dhe ekipi ynë i zhvillimit do t'i realizojë — falas. Suksesi juaj është prioriteti ynë.",
                  "Our platform is built together with you. Share your ideas and our development team will implement them — at no extra cost. Your success is our priority.",
                  "Nuestra plataforma se construye junto con usted. Comparta sus ideas y nuestro equipo de desarrollo las implementará, sin costo adicional. Su éxito es nuestra prioridad.",
                  "Unsere Plattform wird zusammen mit Ihnen aufgebaut. Teilen Sie Ihre Ideen und unser Entwicklungsteam setzt sie um — kostenlos. Ihr Erfolg ist unsere Priorität.",
                  "Нашата платформа се гради заедно со вас. Споделете ги вашите идеи и нашиот тим за развој ќе ги имплементира — бесплатно. Вашиот успех е наш приоритет."
                )}
              </p>
              <button
                onClick={() => { window.location.href = '/collaboration'; }}
                className="anim-rise anim-d2 inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
              >
                {sq(lang, "Mëso Bashkëpunimin", "Explore Collaboration", "Explorar Colaboración", "Zusammenarbeit Erkunden", "Истражи Соработка")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: sq(lang, "Zhvillim i Shpejtë", "Rapid Development", "Desarrollo Rápido", "Schnelle Entwicklung", "Брз Развој"), desc: sq(lang, "Idetë tuaja bëhen realitet brenda javësh", "Your ideas become reality within weeks", "Sus ideas se hacen realidad en semanas", "Ihre Ideen werden innerhalb von Wochen Realität", "Вашите идеи стануваат реалност за недели") },
                { icon: Users, title: sq(lang, "Komuniteti i Parë", "Community First", "La Comunidad Primero", "Gemeinschaft Zuerst", "Заедницата Прва"), desc: sq(lang, "Platforma e ndërtuar mbi komentet tuaja", "Platform built on your feedback", "Plataforma construida sobre sus comentarios", "Plattform basierend auf Ihrem Feedback", "Платформа изградена врз основа на вашите коментари") },
                { icon: Globe, title: sq(lang, "Mbështetje Ekspertësh", "Expert Support", "Soporte de Expertos", "Expertenunterstützung", "Поддршка од Експерти"), desc: sq(lang, "Qasje direkte te ekipi ynë", "Direct access to our expert team", "Acceso directo a nuestro equipo experto", "Direkter Zugang zu unserem Expertenteam", "Директен пристап до нашиот тим на експерти") },
                { icon: TrendingUp, title: sq(lang, "Rritje e Përbashkët", "Shared Growth", "Crecimiento Compartido", "Gemeinsames Wachstum", "Заеднички Раст"), desc: sq(lang, "Ne rritemi kur rriteni edhe ju", "We grow when you grow", "Crecemos cuando usted crece", "Wir wachsen, wenn Sie wachsen", "Ние растеме кога растете и вие") },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={String(title)} className={`anim-scale anim-d${i + 1} p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                  <Icon className="h-5 w-5 text-indigo-500 mb-3" />
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
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
              {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
            </p>
            <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Çmime të qarta, pa surpriza", "Clear pricing, no surprises", "Precios claros, sin sorpresas", "Klare Preise, keine Überraschungen", "Јасни цени, без изненадувања")}
            </h2>
            <p className="anim-rise anim-d1 text-gray-500 max-w-xl mx-auto mb-8">
              {sq(lang, "Zgjidhni planin që i përshtatet biznesit tuaj. Të gjithë modulet — në çdo plan.", "Choose the plan that fits your business. All modules — in every plan.", "Elija el plan que se adapte a su negocio. Todos los módulos — en cada plan.", "Wählen Sie den Plan, der zu Ihrem Unternehmen passt. Alle Module — in jedem Plan.", "Изберете го планот кој одговара на вашиот бизнис. Сите модули — во секој план.")}
            </p>
            <div className="anim-scale anim-d2 inline-flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
              <button onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {sq(lang, "Mujor", "Monthly", "Mensual", "Monatlich", "Месечно")}
              </button>
              <button onClick={() => setBillingPeriod('yearly')}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {sq(lang, "Vjetor", "Yearly", "Anual", "Jährlich", "Годишно")}
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
                        ★ {sq(lang, "Më i Popullarizuari", "Most Popular", "El Más Popular", "Am Beliebtesten", "Најпопуларен")}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{planName(plan.name)}</h3>
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
                      <span className={`text-sm ${isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/{sq(lang, "muaj", "mo", "mes", "Mo.", "мес.")}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className={`text-xs mt-1 space-y-0.5`}>
                        <p className={isPopular ? 'text-indigo-200' : 'text-gray-400'}>
                          {sq(lang,
                            `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/vit → €${(plan.yearlyPrice / 100).toFixed(0)}/vit`,
                            `€${(plan.monthlyPrice * 12 / 100).toFixed(0)}/yr → €${(plan.yearlyPrice / 100).toFixed(0)}/yr`
                          )}
                        </p>
                        <p className="text-emerald-500 font-semibold">
                          {sq(lang,
                            `Kurseni €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/vit`,
                            `Save €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/yr`,
                            `Ahorre €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/año`,
                            `Sparen Sie €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/Jahr`,
                            `Заштедете €${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toFixed(0)}/год.`
                          )}
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
                          <li key={fi} className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg border cursor-pointer ${isPopular ? 'bg-amber-400/20 border-amber-300/40 hover:bg-amber-400/30' : 'bg-amber-50 border-amber-200 hover:bg-amber-100'} transition-colors`} onClick={() => { window.location.href = '/collaboration'; }}>
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
                  <div className="space-y-2">
                    <button
                      onClick={() => { window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`; }}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-center transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md ${isPopular ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'}`}>
                      <CreditCard className="h-3.5 w-3.5" />
                      {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}
                    </button>
                    <button
                      onClick={() => { window.location.href = '/trial'; }}
                      className={`block w-full py-2.5 rounded-xl font-medium text-sm text-center transition-all border ${isPopular ? 'border-indigo-400 text-indigo-100 hover:bg-white/10' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      {sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "14 Tage Testen", "Започни Проба")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              {sq(lang,
                "Të gjithë planet përfshijnë 16 modulet dhe mbështetjen 24/7. Ndryshoni planin kur të dëshironi.",
                "All plans include all 16 modules and 24/7 support. Change plans whenever you want.",
                "Todos los planes incluyen los 16 módulos y soporte 24/7. Cambie de plan cuando quiera.",
                "Alle Pläne umfassen alle 16 Module und 24/7-Support. Wechseln Sie Pläne, wann Sie wollen.",
                "Сите планови ги вклучуваат сите 16 модули и поддршка 24/7. Менувајте планови кога сакате."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(lang,
              <>Gati të besoni biznesin tuaj<br /><span className="text-indigo-400">tek ne?</span></>,
              <>Ready to trust your business<br /><span className="text-indigo-400">with us?</span></>,
              <>Listo para confiar su negocio<br /><span className="text-indigo-400">con nosotros?</span></>,
              <>Bereit, Ihr Unternehmen<br /><span className="text-indigo-400">uns anzuvertrauen?</span></>,
              <>Готови да ни го довери вашиот<br /><span className="text-indigo-400">бизнис?</span></>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg leading-relaxed">
            {sq(lang,
              "Bashkohuni me 200+ biznese që tashmë po kursejnë kohë dhe rrisin të ardhurat me Clientlly. 14-ditë provë falas, pa kartë kredie.",
              "Join 200+ businesses already saving time and growing revenue with Clientlly. 14-day free trial, no credit card required.",
              "Únase a más de 200 empresas que ya ahorran tiempo y aumentan sus ingresos con Clientlly. Prueba gratuita de 14 días, sin tarjeta de crédito.",
              "Schließen Sie sich 200+ Unternehmen an, die mit Clientlly bereits Zeit sparen und Umsatz steigern. 14-tägige kostenlose Testversion, keine Kreditkarte.",
              "Придружете се на 200+ бизниси кои веќе штедат време и растат со Clientlly. 14-дневна бесплатна проба, без кредитна картичка."
            )}
          </p>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
