import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle, ExternalLink, Zap, Shield,
  Globe, Smartphone, CreditCard, Database, Mail,
  MessageSquare, Calendar, FileText, BarChart3, Users,
  Building2, Menu, X, Code, Layers, Package,
  RefreshCw, Lock, Headphones,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const integrations = [
  {
    name: "Stripe",
    description: "Pranoni pagesa online, menaxhoni abonimet dhe automatizoni faturimin",
    descriptionEn: "Accept online payments, manage subscriptions, and automate billing",
    descriptionEs: "Acepte pagos en línea, gestione suscripciones y automatice la facturación",
    descriptionDe: "Akzeptieren Sie Online-Zahlungen, verwalten Sie Abonnements und automatisieren Sie die Rechnungsstellung",
    descriptionMk: "Примајте онлајн плаќања, управувајте со претплати и автоматизирајте го фактурирањето",
    category: "Pagesa",
    categoryEn: "Payments",
    categoryEs: "Pagos",
    categoryDe: "Zahlungen",
    categoryMk: "Плаќања",
    icon: CreditCard,
    badge: "Native",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    features: ["Pagesa të sigurta", "Menaxhim abonimesh", "Faturim automatik", "Multi-valutor"],
    featuresEn: ["Secure payments", "Subscription management", "Automated invoicing", "Multi-currency"],
    featuresEs: ["Pagos seguros", "Gestión de suscripciones", "Facturación automática", "Multi-moneda"],
    featuresDe: ["Sichere Zahlungen", "Abonnementverwaltung", "Automatische Rechnungsstellung", "Multi-Währung"],
    featuresMk: ["Безбедни плаќања", "Управување со претплати", "Автоматско фактурирање", "Повеќе валути"],
    iconBg: "bg-violet-600",
  },
  {
    name: "PayPal",
    description: "Pranoni pagesa PayPal nga klientët në mbarë botën me lehtësi",
    descriptionEn: "Accept PayPal payments from clients worldwide with ease",
    descriptionEs: "Acepte pagos de PayPal de clientes en todo el mundo con facilidad",
    descriptionDe: "Akzeptieren Sie PayPal-Zahlungen von Kunden weltweit mit Leichtigkeit",
    descriptionMk: "Примајте PayPal плаќања од клиенти ширум светот со лесност",
    category: "Pagesa",
    categoryEn: "Payments",
    categoryEs: "Pagos",
    categoryDe: "Zahlungen",
    categoryMk: "Плаќања",
    icon: Globe,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Pagesa ndërkombëtare", "Mbrojtje blerësi", "Shpejtësi transferi", "Raporte detajuese"],
    featuresEn: ["International payments", "Buyer protection", "Fast transfers", "Detailed reports"],
    featuresEs: ["Pagos internacionales", "Protección del comprador", "Transferencias rápidas", "Informes detallados"],
    featuresDe: ["Internationale Zahlungen", "Käuferschutz", "Schnelle Überweisungen", "Detaillierte Berichte"],
    featuresMk: ["Меѓународни плаќања", "Заштита на купувач", "Брзи трансфери", "Детални извештаи"],
    iconBg: "bg-sky-600",
  },
  {
    name: "Google Workspace",
    description: "Sinkronizoni Gmail, Google Calendar dhe Google Drive me platformën",
    descriptionEn: "Sync Gmail, Google Calendar and Google Drive with the platform",
    descriptionEs: "Sincronice Gmail, Google Calendar y Google Drive con la plataforma",
    descriptionDe: "Synchronisieren Sie Gmail, Google Calendar und Google Drive mit der Plattform",
    descriptionMk: "Синхронизирајте Gmail, Google Calendar и Google Drive со платформата",
    category: "Produktivitet",
    categoryEn: "Productivity",
    categoryEs: "Productividad",
    categoryDe: "Produktivität",
    categoryMk: "Продуктивност",
    icon: Mail,
    badge: "Native",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    features: ["Integrim email", "Sync kalendarit", "Ndarje dokumentesh", "Bashkëpunim ekipi"],
    featuresEn: ["Email integration", "Calendar sync", "Document sharing", "Team collaboration"],
    featuresEs: ["Integración de email", "Sincronización de calendario", "Compartir documentos", "Colaboración en equipo"],
    featuresDe: ["E-Mail-Integration", "Kalender-Sync", "Dokumentenfreigabe", "Team-Zusammenarbeit"],
    featuresMk: ["Интеграција на е-пошта", "Синхронизација на календар", "Споделување документи", "Тимска соработка"],
    iconBg: "bg-red-500",
  },
  {
    name: "Microsoft 365",
    description: "Lidheni me Outlook, Teams dhe OneDrive për produktivitet maksimal",
    descriptionEn: "Connect with Outlook, Teams and OneDrive for maximum productivity",
    descriptionEs: "Conéctese con Outlook, Teams y OneDrive para máxima productividad",
    descriptionDe: "Verbinden Sie sich mit Outlook, Teams und OneDrive für maximale Produktivität",
    descriptionMk: "Поврзете се со Outlook, Teams и OneDrive за максимална продуктивност",
    category: "Produktivitet",
    categoryEn: "Productivity",
    categoryEs: "Productividad",
    categoryDe: "Produktivität",
    categoryMk: "Продуктивност",
    icon: Building2,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Sync Outlook", "Njoftime Teams", "Ruajtje OneDrive", "Dokumente Office"],
    featuresEn: ["Outlook sync", "Teams notifications", "OneDrive storage", "Office documents"],
    featuresEs: ["Sincronización Outlook", "Notificaciones Teams", "Almacenamiento OneDrive", "Documentos Office"],
    featuresDe: ["Outlook-Sync", "Teams-Benachrichtigungen", "OneDrive-Speicher", "Office-Dokumente"],
    featuresMk: ["Синхронизација Outlook", "Известувања Teams", "Складирање OneDrive", "Office документи"],
    iconBg: "bg-blue-600",
  },
  {
    name: "WhatsApp Business",
    description: "Dërgoni njoftime, fatura dhe kujtesa drejtpërsëdrejti tek klientët",
    descriptionEn: "Send notifications, invoices and reminders directly to clients",
    descriptionEs: "Envíe notificaciones, facturas y recordatorios directamente a los clientes",
    descriptionDe: "Senden Sie Benachrichtigungen, Rechnungen und Erinnerungen direkt an Kunden",
    descriptionMk: "Испраќајте известувања, фактури и потсетници директно до клиентите",
    category: "Komunikim",
    categoryEn: "Communication",
    categoryEs: "Comunicación",
    categoryDe: "Kommunikation",
    categoryMk: "Комуникација",
    icon: MessageSquare,
    badge: "Webhook",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    features: ["Njoftime automatike", "Dërgim faturash", "Kujtesa pagesash", "Chat i drejtpërdrejtë"],
    featuresEn: ["Automated notifications", "Invoice sending", "Payment reminders", "Direct chat"],
    featuresEs: ["Notificaciones automáticas", "Envío de facturas", "Recordatorios de pago", "Chat directo"],
    featuresDe: ["Automatische Benachrichtigungen", "Rechnungsversand", "Zahlungserinnerungen", "Direkter Chat"],
    featuresMk: ["Автоматски известувања", "Испраќање фактури", "Потсетници за плаќање", "Директен чат"],
    iconBg: "bg-emerald-600",
  },
  {
    name: "Slack",
    description: "Merrni njoftime dhe menaxhoni detyra direkt nga workspace i Slack",
    descriptionEn: "Get notifications and manage tasks directly from your Slack workspace",
    descriptionEs: "Reciba notificaciones y gestione tareas directamente desde su espacio de Slack",
    descriptionDe: "Erhalten Sie Benachrichtigungen und verwalten Sie Aufgaben direkt aus Ihrem Slack-Workspace",
    descriptionMk: "Добијте известувања и управувајте со задачи директно од вашиот Slack работен простор",
    category: "Komunikim",
    categoryEn: "Communication",
    categoryEs: "Comunicación",
    categoryDe: "Kommunikation",
    categoryMk: "Комуникација",
    icon: Zap,
    badge: "Webhook",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    features: ["Njoftime në kohë reale", "Menaxhim detyrash", "Alarme faturash", "Azhurnime ekipi"],
    featuresEn: ["Real-time notifications", "Task management", "Invoice alerts", "Team updates"],
    featuresEs: ["Notificaciones en tiempo real", "Gestión de tareas", "Alertas de facturas", "Actualizaciones del equipo"],
    featuresDe: ["Echtzeit-Benachrichtigungen", "Aufgabenverwaltung", "Rechnungsalarme", "Team-Updates"],
    featuresMk: ["Известувања во реално време", "Управување со задачи", "Аларми за фактури", "Ажурирања на тимот"],
    iconBg: "bg-purple-600",
  },
  {
    name: "QuickBooks",
    description: "Sinkronizoni të dhënat e kontabilitetit me QuickBooks Online pa ndërprerje",
    descriptionEn: "Seamlessly sync your accounting data with QuickBooks Online",
    descriptionEs: "Sincronice sus datos contables con QuickBooks Online sin interrupciones",
    descriptionDe: "Synchronisieren Sie Ihre Buchhaltungsdaten nahtlos mit QuickBooks Online",
    descriptionMk: "Беспрекорно синхронизирајте ги вашите сметководствени податоци со QuickBooks Online",
    category: "Kontabilitet",
    categoryEn: "Accounting",
    categoryEs: "Contabilidad",
    categoryDe: "Buchhaltung",
    categoryMk: "Сметководство",
    icon: BarChart3,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Sync në kohë reale", "Mapim llogarish", "Import transaksionesh", "Raporte taksash"],
    featuresEn: ["Real-time sync", "Account mapping", "Transaction import", "Tax reporting"],
    featuresEs: ["Sincronización en tiempo real", "Mapeo de cuentas", "Importación de transacciones", "Informes fiscales"],
    featuresDe: ["Echtzeit-Synchronisierung", "Kontozuordnung", "Transaktionsimport", "Steuerberichte"],
    featuresMk: ["Синхронизација во реално време", "Мапирање на сметки", "Увоз на трансакции", "Даночни извештаи"],
    iconBg: "bg-green-600",
  },
  {
    name: "Xero",
    description: "Sinkronizim dy-drejtimësh me softuerin e kontabilitetit Xero",
    descriptionEn: "Two-way sync with Xero accounting software for seamless bookkeeping",
    descriptionEs: "Sincronización bidireccional con el software de contabilidad Xero para una contabilidad fluida",
    descriptionDe: "Zwei-Wege-Synchronisierung mit der Xero-Buchhaltungssoftware für nahtlose Buchführung",
    descriptionMk: "Двонасочна синхронизација со сметководствениот софтвер Xero за беспрекорно книговодство",
    category: "Kontabilitet",
    categoryEn: "Accounting",
    categoryEs: "Contabilidad",
    categoryDe: "Buchhaltung",
    categoryMk: "Сметководство",
    icon: FileText,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Sync faturash", "Gjurmim shpenzimesh", "Barazim bankar", "Raporte financiare"],
    featuresEn: ["Invoice sync", "Expense tracking", "Bank reconciliation", "Financial reporting"],
    featuresEs: ["Sincronización de facturas", "Seguimiento de gastos", "Conciliación bancaria", "Informes financieros"],
    featuresDe: ["Rechnungs-Sync", "Ausgabenverfolgung", "Bankabstimmung", "Finanzberichte"],
    featuresMk: ["Синхронизација на фактури", "Следење на трошоци", "Банкарско порамнување", "Финансиски извештаи"],
    iconBg: "bg-teal-600",
  },
  {
    name: "Zapier",
    description: "Lidhuni me 5000+ aplikacione dhe automatizoni çdo rrjedhë pune",
    descriptionEn: "Connect with 5000+ apps and automate any workflow imaginable",
    descriptionEs: "Conéctese con más de 5000 aplicaciones y automatice cualquier flujo de trabajo",
    descriptionDe: "Verbinden Sie sich mit über 5000 Apps und automatisieren Sie jeden erdenklichen Workflow",
    descriptionMk: "Поврзете се со 5000+ апликации и автоматизирајте секој работен тек",
    category: "Automatizim",
    categoryEn: "Automation",
    categoryEs: "Automatización",
    categoryDe: "Automatisierung",
    categoryMk: "Автоматизација",
    icon: RefreshCw,
    badge: "Native",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    features: ["Rrjedhë pune të personalizuara", "Lidhje me shumë app", "Aktivizues automatikë", "Mapim të dhënash"],
    featuresEn: ["Custom workflows", "Multi-app connections", "Automatic triggers", "Data mapping"],
    featuresEs: ["Flujos de trabajo personalizados", "Conexiones con múltiples apps", "Disparadores automáticos", "Mapeo de datos"],
    featuresDe: ["Benutzerdefinierte Workflows", "Multi-App-Verbindungen", "Automatische Auslöser", "Datenzuordnung"],
    featuresMk: ["Прилагодени работни текови", "Повеќе поврзувања со апликации", "Автоматски активатори", "Мапирање на податоци"],
    iconBg: "bg-orange-500",
  },
  {
    name: "Brevo (SendGrid)",
    description: "Dërgoni email marketingu, fatura dhe njoftime me cilësi të lartë",
    descriptionEn: "Send marketing emails, invoices and notifications at high deliverability",
    descriptionEs: "Envíe correos de marketing, facturas y notificaciones con alta capacidad de entrega",
    descriptionDe: "Senden Sie Marketing-E-Mails, Rechnungen und Benachrichtigungen mit hoher Zustellbarkeit",
    descriptionMk: "Испраќајте маркетинг е-пошта, фактури и известувања со висока доставност",
    category: "Email",
    categoryEn: "Email",
    categoryEs: "Email",
    categoryDe: "E-Mail",
    categoryMk: "Е-пошта",
    icon: Mail,
    badge: "Native",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    features: ["Email marketingu", "Template të gatshme", "Analitikë dërgimesh", "Automatizim"],
    featuresEn: ["Marketing emails", "Ready-made templates", "Send analytics", "Automation"],
    featuresEs: ["Correos de marketing", "Plantillas prediseñadas", "Análisis de envíos", "Automatización"],
    featuresDe: ["Marketing-E-Mails", "Fertige Vorlagen", "Versandanalysen", "Automatisierung"],
    featuresMk: ["Маркетинг е-пошта", "Готови шаблони", "Аналитика на испраќање", "Автоматизација"],
    iconBg: "bg-indigo-600",
  },
  {
    name: "REST API",
    description: "Ndërtoni integrime të personalizuara me API-n tonë të plotë RESTful",
    descriptionEn: "Build custom integrations using our full-featured RESTful API",
    descriptionEs: "Construya integraciones personalizadas usando nuestra API RESTful completa",
    descriptionDe: "Erstellen Sie benutzerdefinierte Integrationen mit unserer voll ausgestatteten RESTful-API",
    descriptionMk: "Изградете прилагодени интеграции користејќи го нашиот целосен RESTful API",
    category: "Zhvillues",
    categoryEn: "Developer",
    categoryEs: "Desarrollador",
    categoryDe: "Entwickler",
    categoryMk: "Програмер",
    icon: Code,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Dokumentacion i plotë", "Webhooks", "OAuth 2.0", "Kuota të larta"],
    featuresEn: ["Full documentation", "Webhooks", "OAuth 2.0", "High rate limits"],
    featuresEs: ["Documentación completa", "Webhooks", "OAuth 2.0", "Límites altos"],
    featuresDe: ["Vollständige Dokumentation", "Webhooks", "OAuth 2.0", "Hohe Rate-Limits"],
    featuresMk: ["Целосна документација", "Webhooks", "OAuth 2.0", "Високи лимити"],
    iconBg: "bg-gray-800",
  },
  {
    name: "Twilio",
    description: "SMS dhe alarme zanore për ngjarje kritike të biznesit tuaj",
    descriptionEn: "SMS and voice alerts for critical business events in real time",
    descriptionEs: "Alertas SMS y de voz para eventos críticos del negocio en tiempo real",
    descriptionDe: "SMS- und Sprachalarme für kritische Geschäftsereignisse in Echtzeit",
    descriptionMk: "СМС и гласовни аларми за критични деловни настани во реално време",
    category: "Komunikim",
    categoryEn: "Communication",
    categoryEs: "Comunicación",
    categoryDe: "Kommunikation",
    categoryMk: "Комуникација",
    icon: Smartphone,
    badge: "API",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    features: ["Alarme SMS", "Njoftime zanore", "Autentifikim 2FA", "Komunikim me klientë"],
    featuresEn: ["SMS alerts", "Voice notifications", "2FA authentication", "Client communications"],
    featuresEs: ["Alertas SMS", "Notificaciones de voz", "Autenticación 2FA", "Comunicaciones con clientes"],
    featuresDe: ["SMS-Alarme", "Sprachbenachrichtigungen", "2FA-Authentifizierung", "Kundenkommunikation"],
    featuresMk: ["СМС аларми", "Гласовни известувања", "2FA автентикација", "Комуникација со клиенти"],
    iconBg: "bg-rose-600",
  },
];

const CATEGORY_ALL = "Të gjitha";
const CATEGORY_ALL_EN = "All";

export default function Integrations() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ALL);

  const categories = [
    { sq: CATEGORY_ALL, en: CATEGORY_ALL_EN },
    { sq: "Pagesa", en: "Payments" },
    { sq: "Produktivitet", en: "Productivity" },
    { sq: "Komunikim", en: "Communication" },
    { sq: "Kontabilitet", en: "Accounting" },
    { sq: "Automatizim", en: "Automation" },
    { sq: "Email", en: "Email" },
    { sq: "Zhvillues", en: "Developer" },
  ];

  const filtered = activeCategory === CATEGORY_ALL
    ? integrations
    : integrations.filter(i => i.category === activeCategory || i.categoryEn === activeCategory);

  const getDescription = (item: typeof integrations[0]) => {
    switch(lang) {
      case 'sq': return item.description;
      case 'es': return item.descriptionEs;
      case 'de': return item.descriptionDe;
      case 'mk': return item.descriptionMk;
      default: return item.descriptionEn;
    }
  };

  const getCategory = (item: typeof integrations[0]) => {
    switch(lang) {
      case 'sq': return item.category;
      case 'es': return item.categoryEs;
      case 'de': return item.categoryDe;
      case 'mk': return item.categoryMk;
      default: return item.categoryEn;
    }
  };

  const getFeatures = (item: typeof integrations[0]) => {
    switch(lang) {
      case 'sq': return item.features;
      case 'es': return item.featuresEs;
      case 'de': return item.featuresDe;
      case 'mk': return item.featuresMk;
      default: return item.featuresEn;
    }
  };

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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About", "Acerca de", "Über Uns", "За Нас")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
              <Link href="/integrations" className="text-sm font-semibold text-indigo-600">{sq(lang, "Integrime", "Integrations", "Integraciones", "Integrationen", "Интеграции")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <Link href="/subscribe" className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}
              </Link>
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2 ml-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About", "Acerca de", "Über Uns", "За Нас")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
            <Link href="/integrations" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Integrime", "Integrations", "Integraciones", "Integrationen", "Интеграции")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/subscribe" className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-14 bg-gradient-to-b from-indigo-50/80 via-white to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              {sq(lang, "12 integrime aktive · Të gjitha planet", "12 active integrations · All plans", "12 integraciones activas · Todos los planes", "12 aktive Integrationen · Alle Pläne", "12 активни интеграции · Сите планови")}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              {sq(lang,
                <>Lidheni me <span className="text-indigo-600">çdo mjet</span> që përdorni</>,
                <>Connect with <span className="text-indigo-600">every tool</span> you use</>,
                <>Conéctese con <span className="text-indigo-600">cada herramienta</span> que usa</>,
                <>Verbinden Sie sich mit <span className="text-indigo-600">jedem Tool</span> das Sie nutzen</>,
                <>Поврзете се со <span className="text-indigo-600">секоја алатка</span> што ја користите</>
              )}
            </h1>
            <p className="text-lg text-gray-500">
              {sq(lang,
                "Integrime të gatshme me platformat kryesore të biznesit. Çdo integrim është i përfshirë në çdo plan — pa kosto shtesë.",
                "Ready-made integrations with leading business platforms. Every integration is included in every plan — at no extra cost.",
                "Integraciones listas con las principales plataformas empresariales. Cada integración está incluida en cada plan — sin costo adicional.",
                "Fertige Integrationen mit führenden Geschäftsplattformen. Jede Integration ist in jedem Plan enthalten — ohne zusätzliche Kosten.",
                "Готови интеграции со водечки деловни платформи. Секоја интеграција е вклучена во секој план — без дополнителни трошоци."
              )}
            </p>
          </div>

          {/* 3 highlights */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Package, value: "12+", label: sq(lang, "Integrime", "Integrations", "Integraciones", "Integrationen", "Интеграции") },
              { icon: Zap, value: sq(lang, "Pa kosto", "No extra cost", "Sin costo", "Kostenlos", "Без трошок"), label: sq(lang, "çdo plan", "any plan", "cualquier plan", "jeder Plan", "секој план") },
              { icon: RefreshCw, value: sq(lang, "Sync", "Sync", "Sync", "Sync", "Синхр."), label: sq(lang, "në kohë reale", "in real time", "en tiempo real", "in Echtzeit", "во реално време") },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-[11px] text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="py-8 px-6 border-b border-gray-100 sticky top-16 bg-white z-40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(({ sq: albLabel, en: engLabel }) => {
              const label = lang === "sq" ? albLabel : engLabel;
              const isActive = activeCategory === albLabel || activeCategory === engLabel;
              return (
                <button
                  key={albLabel}
                  onClick={() => setActiveCategory(albLabel)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS GRID ── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => {
              const { name, icon: Icon, badge, badgeColor, iconBg } = item;
              return (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight">{name}</h3>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {getCategory(item)}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                    {badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {getDescription(item)}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {getFeatures(item).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-indigo-600 border border-indigo-100 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200">
                  {sq(lang, "Shiko dokumentacionin", "View documentation", "Ver documentación", "Dokumentation ansehen", "Погледни документација")}
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
              );
            })}
          </div>

          {/* Request integration */}
          <div className="mt-8 border border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50/50 hover:border-indigo-200 transition-colors">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Layers className="h-5 w-5 text-gray-400" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">
              {sq(lang, "Nuk e gjeni integrimin?", "Can't find the integration you need?", "¿No encuentra la integración que necesita?", "Finden Sie die Integration nicht?", "Не ја наоѓате интеграцијата што ви треба?")}
            </p>
            <p className="text-sm text-gray-400 mb-3">
              {sq(lang,
                "Kërkojeni dhe ekipi ynë do ta ndërtojë — plotësisht falas.",
                "Request it and our team will build it — completely free of charge.",
                "Solicítela y nuestro equipo la construirá — completamente gratis.",
                "Fordern Sie sie an und unser Team wird sie erstellen — völlig kostenlos.",
                "Побарајте ја и нашиот тим ќе ја изгради — целосно бесплатно."
              )}
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              {sq(lang, "Kërkoni integrim të ri", "Request a new integration", "Solicitar una nueva integración", "Neue Integration anfordern", "Побарајте нова интеграција")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              {sq(lang, "Si funksionon integrimi?", "How does integration work?", "¿Cómo funciona la integración?", "Wie funktioniert die Integration?", "Како функционира интеграцијата?")}
            </h2>
            <p className="text-sm text-gray-500">
              {sq(lang, "Tre hapa të thjeshtë — pa kod, pa ekspertizë teknike", "Three simple steps — no code, no technical expertise needed", "Tres pasos simples — sin código, sin experiencia técnica necesaria", "Drei einfache Schritte — kein Code, keine technische Expertise erforderlich", "Три едноставни чекори — без код, без технички познавања")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Zap,
                color: "bg-indigo-600",
                title: sq(lang, "Zgjidhni integrimin", "Choose integration", "Elija la integración", "Integration wählen", "Изберете интеграција"),
                desc: sq(lang,
                  "Zgjidhni integrimin nga lista jonë dhe klikoni 'Lidhu'. Nuk keni nevojë për njohuri teknike.",
                  "Select the integration from our list and click 'Connect'. No technical knowledge required.",
                  "Seleccione la integración de nuestra lista y haga clic en 'Conectar'. No se requieren conocimientos técnicos.",
                  "Wählen Sie die Integration aus unserer Liste und klicken Sie auf 'Verbinden'. Keine technischen Kenntnisse erforderlich.",
                  "Изберете ја интеграцијата од нашата листа и кликнете 'Поврзи'. Не се потребни технички познавања."
                ),
              },
              {
                step: "02",
                icon: Lock,
                color: "bg-emerald-600",
                title: sq(lang, "Autorizoni lidhjen", "Authorize the connection", "Autorice la conexión", "Verbindung autorisieren", "Авторизирајте ја врската"),
                desc: sq(lang,
                  "Identifikohuni në llogarinë e shërbimit dhe autorizoni Clientlly të aksesojë të dhënat e nevojshme.",
                  "Sign into your service account and authorize Clientlly to access the necessary data.",
                  "Inicie sesión en su cuenta de servicio y autorice a Clientlly a acceder a los datos necesarios.",
                  "Melden Sie sich bei Ihrem Dienstkonto an und autorisieren Sie Clientlly, auf die erforderlichen Daten zuzugreifen.",
                  "Најавете се во вашата сметка и авторизирајте го Clientlly да пристапи до потребните податоци."
                ),
              },
              {
                step: "03",
                icon: RefreshCw,
                color: "bg-violet-600",
                title: sq(lang, "Sinkronizimi fillon", "Sync begins", "La sincronización comienza", "Synchronisierung beginnt", "Синхронизацијата започнува"),
                desc: sq(lang,
                  "Integrimi aktivizohet automatikisht. Të dhënat sinkronizohen në kohë reale pa ndërhyrje manuale.",
                  "The integration activates automatically. Data syncs in real time without manual intervention.",
                  "La integración se activa automáticamente. Los datos se sincronizan en tiempo real sin intervención manual.",
                  "Die Integration wird automatisch aktiviert. Daten werden in Echtzeit ohne manuellen Eingriff synchronisiert.",
                  "Интеграцијата се активира автоматски. Податоците се синхронизираат во реално време без рачна интервенција."
                ),
              },
            ].map(({ step, icon: Icon, color, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-3xl font-extrabold text-gray-100 select-none">{step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            {sq(lang,
              <>Gati të lidheni me <span className="text-indigo-400">mjetet tuaja</span>?</>,
              <>Ready to connect your <span className="text-indigo-400">favorite tools</span>?</>,
              <>¿Listo para conectar sus <span className="text-indigo-400">herramientas favoritas</span>?</>,
              <>Bereit, Ihre <span className="text-indigo-400">Lieblingstools</span> zu verbinden?</>,
              <>Подготвени да ги поврзете <span className="text-indigo-400">вашите алатки</span>?</>
            )}
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {sq(lang,
              "Të gjitha integrimet janë të përfshira në çdo plan — Starter, Professional dhe Enterprise. Filloni sot pa asnjë kosto shtesë.",
              "All integrations are included in every plan — Starter, Professional and Enterprise. Start today with no additional cost.",
              "Todas las integraciones están incluidas en cada plan — Starter, Professional y Enterprise. Comience hoy sin costo adicional.",
              "Alle Integrationen sind in jedem Plan enthalten — Starter, Professional und Enterprise. Starten Sie noch heute ohne zusätzliche Kosten.",
              "Сите интеграции се вклучени во секој план — Starter, Professional и Enterprise. Започнете денес без дополнителни трошоци."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/trial"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free", "14 días gratis", "14 Tage kostenlos", "14 дена бесплатно")}</span>
                <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба")}</span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {[
              { icon: Shield, text: sq(lang, "SSL & GDPR", "SSL & GDPR", "SSL & GDPR", "SSL & DSGVO", "SSL & GDPR") },
              { icon: Headphones, text: sq(lang, "Mbështetje 24/7", "24/7 Support", "Soporte 24/7", "24/7 Unterstützung", "Поддршка 24/7") },
              { icon: CheckCircle, text: sq(lang, "Pa kartë kredie", "No credit card", "Sin tarjeta de crédito", "Keine Kreditkarte", "Без кредитна картичка") },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                <Icon className="h-3.5 w-3.5" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
