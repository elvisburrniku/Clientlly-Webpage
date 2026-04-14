import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Check, Minus, Menu, X, ArrowRight, Zap, Users, FileText, Shield,
  Star, ChevronDown, ChevronUp, Info, CreditCard,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element, fr?: string | JSX.Element, pt?: string | JSX.Element, it?: string | JSX.Element): string | JSX.Element {
  switch (lang) {
    case 'sq': return alb;
    case 'es': return es ?? eng;
    case 'de': return de ?? eng;
    case 'mk': return mk ?? eng;
    case 'fr': return fr ?? eng;
    case 'pt': return pt ?? eng;
    case 'it': return it ?? eng;
    default:   return eng;
  }
}


type T5 = { sq: string; en: string; es?: string; de?: string; mk?: string; fr?: string; pt?: string; it?: string };
const pk = (lang: string, t: T5) => { switch(lang) { case 'sq': return t.sq; case 'es': return t.es ?? t.en; case 'de': return t.de ?? t.en; case 'mk': return t.mk ?? t.en; case 'fr': return t.fr ?? t.en; case 'pt': return t.pt ?? t.en; case 'it': return t.it ?? t.en; default: return t.en; } };

const PLANS = [
  {
    id: "starter",
    name: { sq: "Starter", en: "Starter", es: "Inicial", de: "Starter", mk: "Стартер", fr: "Débutant", pt: "Iniciante", it: "Base" },
    price: 25,
    yearlyPrice: 21.25,
    users: { sq: "1 përdorues", en: "1 user", es: "1 usuario", de: "1 Benutzer", mk: "1 корисник", fr: "1 utilisateur", pt: "1 utilizador", it: "1 utente" },
    invoices: { sq: "200 fatura / muaj", en: "200 invoices / month", es: "200 facturas / mes", de: "200 Rechnungen / Monat", mk: "200 фактури / месец", fr: "200 factures / mois", pt: "200 faturas / mês", it: "200 fatture / mese" },
    color: "border-gray-200",
    badge: null as T5 | null,
    btnClass: "bg-gray-900 hover:bg-gray-700 text-white",
    highlight: false,
  },
  {
    id: "professional",
    name: { sq: "Professional", en: "Professional", es: "Profesional", de: "Professionell", mk: "Професионален", fr: "Professionnel", pt: "Profissional", it: "Professionale" },
    price: 35,
    yearlyPrice: 29.75,
    users: { sq: "deri 5 përdorues", en: "up to 5 users", es: "hasta 5 usuarios", de: "bis 5 Benutzer", mk: "до 5 корисници", fr: "jusqu'à 5 utilisateurs", pt: "até 5 utilizadores", it: "fino a 5 utenti" },
    invoices: { sq: "500 fatura / muaj", en: "500 invoices / month", es: "500 facturas / mes", de: "500 Rechnungen / Monat", mk: "500 фактури / месец", fr: "500 factures / mois", pt: "500 faturas / mês", it: "500 fatture / mese" },
    color: "border-indigo-500 ring-2 ring-indigo-500/20",
    badge: { sq: "Më i Popullarizuari", en: "Most Popular", es: "Más Popular", de: "Am Beliebtesten", mk: "Најпопуларен", fr: "Le plus populaire", pt: "Mais popular", it: "Il più popolare" } as T5 | null,
    btnClass: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-lg",
    highlight: true,
  },
  {
    id: "enterprise",
    name: { sq: "Enterprise", en: "Enterprise", es: "Empresarial", de: "Unternehmen", mk: "Претпријатие", fr: "Entreprise", pt: "Empresarial", it: "Enterprise" },
    price: 50,
    yearlyPrice: 42.50,
    users: { sq: "deri 20 përdorues (+€2/shtesë)", en: "up to 20 users (+€2/extra)", es: "hasta 20 usuarios (+€2/extra)", de: "bis 20 Benutzer (+€2/extra)", mk: "до 20 корисници (+€2/дополнителен)", fr: "jusqu'à 20 utilisateurs (+€2/sup.)", pt: "até 20 utilizadores (+€2/extra)", it: "fino a 20 utenti (+€2/extra)" },
    invoices: { sq: "Pa limit fatura", en: "Unlimited invoices", es: "Facturas ilimitadas", de: "Unbegrenzte Rechnungen", mk: "Неограничени фактури", fr: "Factures illimitées", pt: "Faturas ilimitadas", it: "Fatture illimitate" },
    color: "border-gray-200",
    badge: null as T5 | null,
    btnClass: "bg-gray-900 hover:bg-gray-700 text-white",
    highlight: false,
  },
];

type CellVal = boolean | string;

const FEATURE_GROUPS: {
  group: T5;
  rows: { label: T5; tip?: T5; starter: CellVal; professional: CellVal; enterprise: CellVal }[];
}[] = [
  {
    group: { sq: "Limitet e Planit", en: "Plan Limits", es: "Límites del Plan", de: "Plan-Limits", mk: "Ограничувања на планот", fr: "Limites du plan", pt: "Limites do plano", it: "Limiti del piano" },
    rows: [
      { label: { sq: "Përdorues", en: "Users", es: "Usuarios", de: "Benutzer", mk: "Корисници", fr: "Utilisateurs", pt: "Utilizadores", it: "Utenti" }, starter: "1", professional: "5", enterprise: "20 (+€2)" },
      { label: { sq: "Fatura / muaj", en: "Invoices / month", es: "Facturas / mes", de: "Rechnungen / Monat", mk: "Фактури / месец", fr: "Factures / mois", pt: "Faturas / mês", it: "Fatture / mese" }, starter: "200", professional: "500", enterprise: "∞" },
      { label: { sq: "Hapësirë ruajtjeje", en: "Storage", es: "Almacenamiento", de: "Speicher", mk: "Складирање", fr: "Stockage", pt: "Armazenamento", it: "Spazio" }, starter: "5 GB", professional: "20 GB", enterprise: "100 GB" },
      { label: { sq: "Mbështetje", en: "Support", es: "Soporte", de: "Support", mk: "Поддршка", fr: "Assistance", pt: "Suporte", it: "Supporto" }, starter: "Email", professional: "Chat & Email", enterprise: "24/7" },
    ],
  },
  {
    group: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии", fr: "Finance", pt: "Finanças", it: "Finanza" },
    rows: [
      { label: { sq: "Faturim Elektronik", en: "Electronic Invoicing", es: "Facturación Electrónica", de: "Elektronische Rechnungsstellung", mk: "Електронско Фактурирање", fr: "Facturation électronique", pt: "Faturação eletrónica", it: "Fatturazione elettronica" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Oferta & Kuota Dixhitale", en: "Digital Quotes & Offers", es: "Cotizaciones y Ofertas Digitales", de: "Digitale Angebote & Kostenvoranschläge", mk: "Дигитални Понуди и Офери", fr: "Devis et offres numériques", pt: "Orçamentos e ofertas digitais", it: "Preventivi e offerte digitali" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking", es: "Seguimiento de Gastos", de: "Ausgabenverfolgung", mk: "Следење на Трошоци", fr: "Suivi des dépenses", pt: "Controlo de despesas", it: "Monitoraggio spese" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de Deudas", de: "Schuldenmanagement", mk: "Управување со Долгови", fr: "Gestion des dettes", pt: "Gestão de dívidas", it: "Gestione dei debiti" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Nënshkrim Dixhital (Klient + Kompani)", en: "Digital Signature (Client + Company)", es: "Firma Digital (Cliente + Empresa)", de: "Digitale Unterschrift (Kunde + Unternehmen)", mk: "Дигитален Потпис (Клиент + Компанија)", fr: "Signature numérique (Client + Société)", pt: "Assinatura digital (Cliente + Empresa)", it: "Firma digitale (Cliente + Azienda)" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Gjurmim: hapur → lexuar → nënshkruar", en: "Tracking: opened → read → signed", es: "Seguimiento: abierto → leído → firmado", de: "Verfolgung: geöffnet → gelesen → unterschrieben", mk: "Следење: отворено → прочитано → потпишано", fr: "Suivi: ouvert → lu → signé", pt: "Rastreamento: aberto → lido → assinado", it: "Tracciamento: aperto → letto → firmato" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Rikujtime automatike pagese", en: "Auto payment reminders", es: "Recordatorios de pago automáticos", de: "Automatische Zahlungserinnerungen", mk: "Автоматски потсетници за плаќање", fr: "Rappels de paiement automatiques", pt: "Lembretes de pagamento automáticos", it: "Promemoria di pagamento automatici" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Raporte & Analitikë", en: "Reports & Analytics", es: "Informes y Análisis", de: "Berichte & Analysen", mk: "Извештаи и Аналитика", fr: "Rapports et analyses", pt: "Relatórios e análises", it: "Report e analisi" },
    rows: [
      { label: { sq: "Raporte financiare", en: "Financial reports", es: "Informes financieros", de: "Finanzberichte", mk: "Финансиски извештаи", fr: "Rapports financiers", pt: "Relatórios financeiros", it: "Report finanziari" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Pasqyrë e të ardhurave & shpenzimeve", en: "Revenue & expense overview", es: "Resumen de ingresos y gastos", de: "Einnahmen- & Ausgabenübersicht", mk: "Преглед на приходи и трошоци", fr: "Aperçu des revenus et dépenses", pt: "Visão geral de receitas e despesas", it: "Panoramica entrate e spese" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Eksport PDF / Excel", en: "PDF / Excel export", es: "Exportar PDF / Excel", de: "PDF / Excel Export", mk: "PDF / Excel извоз", fr: "Exportation PDF / Excel", pt: "Exportação PDF / Excel", it: "Esportazione PDF / Excel" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Analitikë e avancuar", en: "Advanced analytics", es: "Análisis avanzado", de: "Erweiterte Analysen", mk: "Напредна аналитика", fr: "Analyse avancée", pt: "Análise avançada", it: "Analisi avanzata" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "Raporte me porosi (custom)", en: "Custom reports", es: "Informes personalizados", de: "Benutzerdefinierte Berichte", mk: "Прилагодени извештаи", fr: "Rapports personnalisés", pt: "Relatórios personalizados", it: "Report personalizzati" }, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    group: { sq: "Klientë & Furnitorë", en: "Clients & Vendors", es: "Clientes y Proveedores", de: "Kunden & Lieferanten", mk: "Клиенти и Добавувачи", fr: "Clients et fournisseurs", pt: "Clientes e fornecedores", it: "Clienti e fornitori" },
    rows: [
      { label: { sq: "CRM — Menaxhim Klientësh", en: "CRM — Client Management", es: "CRM — Gestión de Clientes", de: "CRM — Kundenverwaltung", mk: "CRM — Управување со Клиенти", fr: "CRM — Gestion des clients", pt: "CRM — Gestão de clientes", it: "CRM — Gestione clienti" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Historik komunikimi", en: "Communication history", es: "Historial de comunicación", de: "Kommunikationsverlauf", mk: "Историја на комуникација", fr: "Historique des communications", pt: "Histórico de comunicação", it: "Cronologia delle comunicazioni" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de Proveedores", de: "Lieferantenverwaltung", mk: "Управување со Добавувачи", fr: "Gestion des fournisseurs", pt: "Gestão de fornecedores", it: "Gestione fornitori" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Porosi blerje (PO)", en: "Purchase orders (PO)", es: "Órdenes de compra (PO)", de: "Bestellungen (PO)", mk: "Нарачки за купување (PO)", fr: "Bons de commande (BC)", pt: "Ordens de compra (OC)", it: "Ordini di acquisto (OA)" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции", fr: "Opérations", pt: "Operações", it: "Operazioni" },
    rows: [
      { label: { sq: "Menaxhim Inventarit", en: "Inventory Management", es: "Gestión de Inventario", de: "Bestandsverwaltung", mk: "Управување со Залихи", fr: "Gestion des stocks", pt: "Gestão de inventário", it: "Gestione magazzino" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Alarme rezerva të ulëta", en: "Low-stock alerts", es: "Alertas de stock bajo", de: "Niedrigbestand-Warnungen", mk: "Предупредувања за низок залиха", fr: "Alertes de stock bas", pt: "Alertas de stock baixo", it: "Avvisi di scorte basse" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Prezencë me GPS", en: "GPS Attendance", es: "Asistencia con GPS", de: "GPS-Anwesenheit", mk: "GPS Присуство", fr: "Présence GPS", pt: "Presença GPS", it: "Presenze GPS" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Motorpool / Menaxhim Flotë", en: "Motorpool / Fleet Management", es: "Gestión de Flota", de: "Fuhrparkverwaltung", mk: "Управување со Флота", fr: "Gestion de flotte", pt: "Gestão de frota", it: "Gestione flotta" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Kalendarë & Caktim takimesh", en: "Calendar & Meeting scheduler", es: "Calendario y Programador de reuniones", de: "Kalender & Terminplaner", mk: "Календар и Закажувач на состаноци", fr: "Calendrier et planificateur de réunions", pt: "Calendário e agendador de reuniões", it: "Calendario e pianificatore riunioni" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "HR & Personeli", en: "HR & Staff", es: "RRHH y Personal", de: "HR & Personal", mk: "HR и Персонал" },
    rows: [
      { label: { sq: "Menaxhim HR", en: "HR Management", es: "Gestión de RRHH", de: "HR-Management", mk: "HR Управување" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Listë pagese (Payroll)", en: "Payroll", es: "Nómina", de: "Gehaltsabrechnung", mk: "Платен список" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Lejeve", en: "Leave Management", es: "Gestión de Permisos", de: "Urlaubsverwaltung", mk: "Управување со Отсуства" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Trajnimesh", en: "Training Management", es: "Gestión de Capacitación", de: "Schulungsverwaltung", mk: "Управување со Обуки" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "Raporte performancë", en: "Performance reports", es: "Informes de rendimiento", de: "Leistungsberichte", mk: "Извештаи за перформанси" }, starter: false, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Siguria & Integrimi", en: "Security & Integration", es: "Seguridad e Integración", de: "Sicherheit & Integration", mk: "Безбедност и Интеграција" },
    rows: [
      { label: { sq: "Kriptim TLS 256-bit", en: "TLS 256-bit encryption", es: "Cifrado TLS 256-bit", de: "TLS 256-Bit Verschlüsselung", mk: "TLS 256-бит Енкрипција" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Qasje API", en: "API access", es: "Acceso API", de: "API-Zugang", mk: "API пристап", fr: "Accès API", pt: "Acesso à API", it: "Accesso API" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Webhooks", en: "Webhooks", es: "Webhooks", de: "Webhooks", mk: "Webhooks", fr: "Webhooks", pt: "Webhooks", it: "Webhook" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "SSO / Active Directory", en: "SSO / Active Directory", es: "SSO / Active Directory", de: "SSO / Active Directory", mk: "SSO / Active Directory" }, starter: false, professional: false, enterprise: true },
      { label: { sq: "Log auditimi", en: "Audit log", es: "Registro de auditoría", de: "Audit-Protokoll", mk: "Ревизорски дневник" }, starter: false, professional: true, enterprise: true },
    ],
  },
];

export default function CompareFeatures() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>(
    Object.fromEntries(FEATURE_GROUPS.map((_, i) => [i, true]))
  );

  const toggleGroup = (i: number) =>
    setExpandedGroups(prev => ({ ...prev, [i]: !prev[i] }));

  const Cell = ({ val }: { val: CellVal }) => {
    if (val === true) return <Check className="h-5 w-5 text-indigo-600 mx-auto" />;
    if (val === false) return <Minus className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-sm font-semibold text-gray-700">{val}</span>;
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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Link>
              <Link href="/compare-features" className="text-sm font-semibold text-indigo-600">{sq(lang, "Krahaso Planet", "Compare Plans", "Comparar Planes", "Pläne Vergleichen", "Споредете Планови", "Comparer les plans", "Comparar planos", "Confronta piani")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakti", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <LanguageSelector />
            </div>

            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <LanguageSelector />
              <button className="p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Kontakti", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</Link>
            <div className="pt-2 flex flex-col gap-2">
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-indigo-50/60 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 pt-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5">
            <Star className="h-3.5 w-3.5" />
            {sq(lang, "Të gjitha planet, të gjitha veçoritë", "All plans, all features", "Todos los planes, todas las funciones", "Alle Pläne, alle Funktionen", "Сите планови, сите функции")}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 leading-tight">
            {sq(lang,
              <>Krahaso <span className="text-indigo-600">Planet</span></>,
              <>Compare <span className="text-indigo-600">Plans</span></>,
              <>Comparar <span className="text-indigo-600">Planes</span></>,
              <>Pläne <span className="text-indigo-600">Vergleichen</span></>,
              <>Споредете <span className="text-indigo-600">Планови</span></>
            )}
          </h1>
        </div>
      </section>

      {/* ── MOBILE PRICING CARDS (visible only on mobile) ── */}
      <section className="md:hidden py-8 px-4 bg-gray-50 border-b border-gray-100">
        <div className="mb-4 flex items-center justify-center gap-1 p-1 bg-white rounded-xl border border-gray-200 w-fit mx-auto">
          <button onClick={() => setBilling("monthly")} className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${billing === "monthly" ? "bg-indigo-600 text-white shadow-sm" : "text-gray-500"}`}>
            {sq(lang, "Mujor", "Monthly", "Mensual", "Monatlich", "Месечно", "Mensuel", "Mensal", "Mensile")}
          </button>
          <button onClick={() => setBilling("yearly")} className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${billing === "yearly" ? "bg-indigo-600 text-white shadow-sm" : "text-gray-500"}`}>
            {sq(lang, "Vjetor", "Yearly", "Anual", "Jährlich", "Годишно", "Annuel", "Anual", "Annuale")}
            <span className="text-[9px] font-bold text-emerald-500 bg-emerald-50 px-1 py-0.5 rounded">-15%</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`relative p-3 rounded-xl border-2 bg-white text-center ${plan.highlight ? "border-indigo-500 shadow-md" : "border-gray-200"}`}>
              {plan.badge && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[8px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">★ {pk(lang, plan.badge)}</span>
                </div>
              )}
              <p className={`text-[10px] font-bold uppercase tracking-wide mb-1 ${plan.highlight ? "text-indigo-600" : "text-gray-500"}`}>{pk(lang, plan.name)}</p>
              <p className={`text-2xl font-extrabold ${plan.highlight ? "text-indigo-600" : "text-gray-900"}`}>
                €{billing === "yearly" ? plan.yearlyPrice.toFixed(0) : plan.price}
              </p>
              <p className="text-[9px] text-gray-400">/{sq(lang, "muaj", "mo", "mes", "Mo.", "мес.", "mois", "mês", "mese")}</p>
              <p className="text-[9px] text-gray-500 mt-1 leading-tight">{pk(lang, plan.users)}</p>
              <button onClick={() => { window.location.href = `/subscribe?plan=${plan.id}&billing=${billing}`; }} className={`mt-2 w-full py-1.5 rounded-lg text-[10px] font-bold transition-all ${plan.highlight ? "bg-indigo-600 text-white" : "bg-gray-900 text-white"}`}>
                {sq(lang, "Zgjidhni →", "Select →", "Elegir →", "Wählen →", "Изберете →", "Choisir →", "Selecionar →", "Seleziona →")}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Table title + header merged */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-4">
            <div className="bg-indigo-600 px-6 py-5">
              <h2 className="text-xl font-extrabold text-white mb-0.5">
                {sq(lang, "Krahasim i plotë i veçorive", "Full Feature Comparison", "Comparación completa de funciones", "Vollständiger Funktionsvergleich", "Целосна споредба на функции", "Comparaison complète des fonctionnalités", "Comparação completa de funcionalidades", "Confronto completo delle funzionalità")}
              </h2>
              <p className="text-indigo-200 text-sm">
                {sq(lang, "Shihni çfarë përfshin secili plan në detaje", "See exactly what each plan includes in detail", "Vea exactamente qué incluye cada plan en detalle", "Sehen Sie genau, was jeder Plan im Detail enthält", "Видете точно што вклучува секој план во детали", "Voyez exactement ce que chaque plan inclut en détail", "Veja exatamente o que cada plano inclui em detalhe", "Vedi esattamente cosa include ogni piano nel dettaglio")}
              </p>
            </div>
            <div className="hidden md:grid grid-cols-12 items-center px-5 py-3 bg-gray-50 border-t border-gray-200">
              <div className="col-span-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {sq(lang, "Veçoria", "Feature", "Función", "Funktion", "Функција", "Fonctionnalité", "Funcionalidade", "Funzionalità")}
              </div>
              {PLANS.map(plan => (
                <div key={plan.id} className={`col-span-2 text-center text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-indigo-600" : "text-gray-500"}`}>
                  {pk(lang, plan.name)}
                </div>
              ))}
            </div>
          </div>

          {FEATURE_GROUPS.map((group, gi) => (
            <div key={gi} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Group header */}
              <button
                onClick={() => toggleGroup(gi)}
                className="w-full flex items-center justify-between px-5 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span className="text-sm font-bold text-gray-800">{pk(lang, group.group)}</span>
                {expandedGroups[gi]
                  ? <ChevronUp className="h-4 w-4 text-gray-400" />
                  : <ChevronDown className="h-4 w-4 text-gray-400" />
                }
              </button>

              {expandedGroups[gi] && (
                <div>
                  {group.rows.map((row, ri) => (
                    <div
                      key={ri}
                      className={`grid md:grid-cols-12 items-center px-5 py-3.5 border-t border-gray-100 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"} hover:bg-indigo-50/20 transition-colors`}
                    >
                      {/* Feature name (mobile: full width, desktop: 6 cols) */}
                      <div className="md:col-span-6 mb-2 md:mb-0">
                        <span className="text-sm text-gray-700 font-medium">{pk(lang, row.label)}</span>
                      </div>
                      {/* Mobile: show all 3 values in a row */}
                      <div className="flex md:hidden justify-around mt-1 mb-1">
                        {PLANS.map(plan => (
                          <div key={plan.id} className="flex flex-col items-center gap-1">
                            <span className="text-[10px] text-gray-400">{pk(lang, plan.name)}</span>
                            <Cell val={row[plan.id as keyof typeof row] as CellVal} />
                          </div>
                        ))}
                      </div>
                      {/* Desktop: 2 cols each */}
                      {PLANS.map(plan => (
                        <div key={plan.id} className="hidden md:flex md:col-span-2 justify-center">
                          <Cell val={row[plan.id as keyof typeof row] as CellVal} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mt-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-indigo-600" /> {sq(lang, "I përfshirë", "Included", "Incluido", "Enthalten", "Вклучено", "Inclus", "Incluído", "Incluso")}</span>
            <span className="flex items-center gap-1.5"><Minus className="h-3.5 w-3.5 text-gray-300" /> {sq(lang, "Nuk është i disponueshëm", "Not available", "No disponible", "Nicht verfügbar", "Не е достапно")}</span>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions", "Preguntas Frecuentes", "Häufig Gestellte Fragen", "Често Поставувани Прашања", "Questions fréquemment posées", "Perguntas frequentes", "Domande frequenti")}
          </h2>
          {[
            {
              q: { sq: "A mund të ndërroj planin më vonë?", en: "Can I switch plans later?" },
              a: { sq: "Po, mund të ndërroni planin në çdo kohë. Ndryshimi ndodh menjëherë dhe çmimi rregullohet automatikisht proporcionalisht.", en: "Yes, you can switch plans at any time. The change happens immediately and the price adjusts automatically on a prorated basis." },
              qEs: "Puedo cambiar de plan más tarde?",
              aEs: "Sí, puede cambiar de plan en cualquier momento. El cambio se realiza de inmediato y el precio se ajusta automáticamente de forma proporcional.",
              qDe: "Kann ich den Plan später wechseln?",
              aDe: "Ja, Sie können den Plan jederzeit wechseln. Die Änderung erfolgt sofort und der Preis wird automatisch anteilig angepasst.",
              qMk: "Може ли да го сменам планот подоцна?",
              aMk: "Да, можете да го смените планот во секое време. Промената се случува веднаш и цената се прилагодува автоматски пропорционално.",
            },
            {
              q: { sq: "A përfshihen të gjitha veçoritë në planin Starter?", en: "Are all features included in the Starter plan?" },
              a: { sq: "Po! Çdo plan përfshin të gjitha 16 modulet e Clientlly. Diferencat janë vetëm në numrin e përdoruesve dhe volumin e faturave.", en: "Yes! Every plan includes all 16 Clientlly modules. Differences are only in user count and invoice volume." },
              qEs: "Todas las funciones están incluidas en el plan Starter?",
              aEs: "¡Sí! Cada plan incluye los 16 módulos de Clientlly. Las diferencias son solo en el número de usuarios y el volumen de facturas.",
              qDe: "Sind alle Funktionen im Starter-Plan enthalten?",
              aDe: "Ja! Jeder Plan enthält alle 16 Clientlly-Module. Unterschiede bestehen nur in der Benutzeranzahl und dem Rechnungsvolumen.",
              qMk: "Дали сите функции се вклучени во Starter планот?",
              aMk: "Да! Секој план ги вклучува сите 16 модули на Clientlly. Разликите се само во бројот на корисници и обемот на фактури.",
            },
            {
              q: { sq: "Çfarë ndodh pas 14 ditëve të provës falas?", en: "What happens after the 14-day free trial?" },
              a: { sq: "Pasi të mbarojë prova juaj, ju do t'ju kërkohet të zgjidhni një plan. Nuk kemi të dhëna të kartës tuaj të kreditit derisa të vendosni vetë.", en: "After your trial ends, you'll be asked to choose a plan. We don't have your credit card details until you decide." },
              qEs: "Qué sucede después de la prueba gratuita de 14 días?",
              aEs: "Después de que termine su prueba, se le pedirá que elija un plan. No tenemos los datos de su tarjeta de crédito hasta que usted decida.",
              qDe: "Was passiert nach der 14-tägigen kostenlosen Testphase?",
              aDe: "Nach Ablauf Ihrer Testphase werden Sie aufgefordert, einen Plan zu wählen. Wir haben Ihre Kreditkartendaten erst, wenn Sie sich entscheiden.",
              qMk: "Што се случува по 14-дневниот бесплатен пробен период?",
              aMk: "Откако ќе заврши пробниот период, ќе ви биде побарано да изберете план. Немаме податоци за вашата кредитна картичка додека не одлучите.",
            },
            {
              q: { sq: "A mund të anuloj abonimi në çdo kohë?", en: "Can I cancel my subscription at any time?" },
              a: { sq: "Po, mund të anuloni abonimi tuaj në çdo kohë pa asnjë penalizim. Do të keni qasje deri në fund të periudhës për të cilën keni paguar.", en: "Yes, you can cancel your subscription at any time with no penalty. You'll have access until the end of the period you've paid for." },
              qEs: "Puedo cancelar mi suscripción en cualquier momento?",
              aEs: "Sí, puede cancelar su suscripción en cualquier momento sin penalización. Tendrá acceso hasta el final del período por el que ha pagado.",
              qDe: "Kann ich mein Abonnement jederzeit kündigen?",
              aDe: "Ja, Sie können Ihr Abonnement jederzeit ohne Strafe kündigen. Sie haben bis zum Ende des bezahlten Zeitraums Zugang.",
              qMk: "Може ли да ја откажам претплатата во секое време?",
              aMk: "Да, можете да ја откажете претплатата во секое време без казна. Ќе имате пристап до крајот на периодот за кој сте платиле.",
            },
          ].map(({ q, a, qEs, aEs, qDe, aDe, qMk, aMk }, i) => (
            <details key={i} className="group mb-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none">
                <span className="text-sm font-semibold text-gray-900">{sq(lang, q.sq, q.en, qEs, qDe, qMk)}</span>
                <ChevronDown className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">{sq(lang, a.sq, a.en, aEs, aDe, aMk)}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            {sq(lang,
              <>Gati të filloni? <span className="text-indigo-400">14 ditë falas</span>, pa kartë krediti.</>,
              <>Ready to start? <span className="text-indigo-400">14 days free</span>, no credit card.</>,
              <>Listo para empezar? <span className="text-indigo-400">14 días gratis</span>, sin tarjeta de crédito.</>,
              <>Bereit loszulegen? <span className="text-indigo-400">14 Tage kostenlos</span>, keine Kreditkarte.</>,
              <>Подготвени да започнете? <span className="text-indigo-400">14 дена бесплатно</span>, без кредитна картичка.</>
            )}
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            {sq(lang,
              "Filloni provën tuaj falas sot dhe zbuloni pse 200+ biznese zgjodhën Clientlly.",
              "Start your free trial today and discover why 200+ businesses chose Clientlly.",
              "Comience su prueba gratuita hoy y descubra por qué más de 200 empresas eligieron Clientlly.",
              "Starten Sie noch heute Ihre kostenlose Testversion und entdecken Sie, warum über 200 Unternehmen Clientlly gewählt haben.",
              "Започнете го вашиот бесплатен пробен период денес и откријте зошто повеќе од 200 бизниси го избраа Clientlly."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => go("/trial")}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free", "14 días gratis", "14 Tage kostenlos", "14 дена бесплатно", "14 jours gratuits", "14 dias grátis", "14 giorni gratis")}</span>
                <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion Starten", "Започни Бесплатна Проба", "Commencer l'essai gratuit", "Iniciar período de teste gratuito", "Inizia la prova gratuita")}</span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => { window.location.href = '/subscribe?plan=professional&billing=monthly'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 text-sm"
            >
              <CreditCard className="h-4 w-4" />
              {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {[
              { icon: Shield, label: sq(lang, "Pa kartë krediti", "No credit card", "Sin tarjeta de crédito", "Keine Kreditkarte", "Без кредитна картичка", "Sans carte de crédit", "Sem cartão de crédito", "Senza carta di credito") },
              { icon: Check, label: sq(lang, "Anulo kur dëshironi", "Cancel anytime", "Cancele en cualquier momento", "Jederzeit kündigen", "Откажете кога сакате", "Résiliez à tout moment", "Cancele a qualquer momento", "Annulla quando vuoi") },
              { icon: Zap, label: sq(lang, "Qasje e menjëhershme", "Instant access", "Acceso instantáneo", "Sofortiger Zugang", "Моментален пристап") },
            ].map(({ icon: Icon, label }, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon className="h-3.5 w-3.5 text-gray-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
