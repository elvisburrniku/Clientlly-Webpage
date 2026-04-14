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


const CATEGORIES = ["all", "finance", "operations", "fleet", "hr"] as const;
type Category = typeof CATEGORIES[number];

type ML = { sq: string; en: string; es: string; de: string; mk: string };

const features = [
  {
    id: "quotes",
    icon: ClipboardList,
    gradient: "from-cyan-500 to-blue-500",
    lightText: "text-cyan-600",
    border: "border-cyan-100",
    dotColor: "bg-cyan-400",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Oferta & Kuota Elektronike", en: "Electronic Quotes & Offers", es: "Cotizaciones y ofertas electrónicas", de: "Elektronische Angebote & Offerten", mk: "Електронски понуди и офери" },
    tagline: { sq: "Dërgoni, gjurmoni dhe nënshkruani — pa letër", en: "Send, track and sign — paperless", es: "Envíe, rastree y firme — sin papel", de: "Senden, verfolgen und unterschreiben — papierlos", mk: "Испратете, следете и потпишете — без хартија" },
    desc: {
      sq: "Krijoni oferta profesionale me shabllone të ndryshme dhe dërgojini direkt me email. Klienti e hap, e lexon dhe e nënshkruan direkt nga telefoni ose kompjuteri i tij. Ju shikoni çdo hap në kohë reale.",
      en: "Create professional quotes with different templates and send them directly by email. The client opens, reads and signs directly from their phone or computer. You see every step in real time.",
      es: "Cree cotizaciones profesionales con diferentes plantillas y envíelas directamente por correo electrónico. El cliente abre, lee y firma directamente desde su teléfono u ordenador. Usted ve cada paso en tiempo real.",
      de: "Erstellen Sie professionelle Angebote mit verschiedenen Vorlagen und senden Sie diese direkt per E-Mail. Der Kunde öffnet, liest und unterschreibt direkt von seinem Telefon oder Computer. Sie sehen jeden Schritt in Echtzeit.",
      mk: "Креирајте професионални понуди со различни шаблони и испратете ги директно по е-пошта. Клиентот отвора, чита и потпишува директно од телефон или компјутер. Вие го гледате секој чекор во реално време."
    },
    benefits: [
      { sq: "Dërgim elektronik me email — pa printer, pa letër", en: "Electronic delivery by email — no printer, no paper", es: "Envío electrónico por correo — sin impresora, sin papel", de: "Elektronischer Versand per E-Mail — kein Drucker, kein Papier", mk: "Електронска достава по е-пошта — без печатач, без хартија" },
      { sq: "Klienti nënshkruan direkt nga telefoni ose PC", en: "Client signs directly from phone or PC", es: "El cliente firma directamente desde el teléfono o PC", de: "Kunde unterschreibt direkt vom Telefon oder PC", mk: "Клиентот потпишува директно од телефон или PC" },
      { sq: "Ju nënshkruani gjithashtu nga aplikacioni", en: "You also sign from the app", es: "Usted también firma desde la aplicación", de: "Sie unterschreiben ebenfalls aus der App", mk: "Вие исто така потпишувате од апликацијата" },
      { sq: "Gjurmim: dërguar → hapur → lexuar → nënshkruar", en: "Tracking: sent → opened → read → signed", es: "Seguimiento: enviado → abierto → leído → firmado", de: "Verfolgung: gesendet → geöffnet → gelesen → unterschrieben", mk: "Следење: испратено → отворено → прочитано → потпишано" },
      { sq: "Njoftim i menjëhershëm kur klienti e hap ofertën", en: "Instant alert when client opens the quote", es: "Alerta instantánea cuando el cliente abre la cotización", de: "Sofortige Benachrichtigung wenn der Kunde das Angebot öffnet", mk: "Моментално известување кога клиентот ја отвора понудата" },
      { sq: "Konvertim automatik Ofertë → Faturë pas aprovimit", en: "Auto conversion Quote → Invoice after approval", es: "Conversión automática Cotización → Factura tras aprobación", de: "Automatische Umwandlung Angebot → Rechnung nach Genehmigung", mk: "Автоматска конверзија Понуда → Фактура по одобрување" },
    ],
    href: "/features/quotes",
    stat: { value: "3×", label: { sq: "oferta të aprovuara", en: "faster quote approval", es: "aprobación más rápida", de: "schnellere Angebotsgenehmigung", mk: "побрзо одобрување" } },
  },
  {
    id: "invoicing",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600",
    lightText: "text-blue-600",
    border: "border-blue-100",
    dotColor: "bg-blue-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Faturim Profesional Elektronik", en: "Professional Electronic Invoicing", es: "Facturación profesional electrónica", de: "Professionelle elektronische Rechnungsstellung", mk: "Професионално електронско фактурирање" },
    tagline: { sq: "Dërgoni me email, gjurmoni hapjen, nënshkruani dixhitalisht", en: "Send by email, track the opening, sign digitally", es: "Envíe por correo, rastree la apertura, firme digitalmente", de: "Per E-Mail senden, Öffnung verfolgen, digital unterschreiben", mk: "Испратете по е-пошта, следете го отворањето, потпишете дигитално" },
    desc: {
      sq: "Krijoni dhe dërgoni fatura me email me një klikim. Ju shikoni nëse klienti e ka hapur faturën ose jo, dhe klienti mund ta nënshkruajë direkt nga telefoni ose kompjuteri pa asnjë printer.",
      en: "Create and send invoices by email in one click. You can see whether the client has opened the invoice or not, and the client can sign it directly from phone or computer without any printer.",
      es: "Cree y envíe facturas por correo electrónico en un clic. Puede ver si el cliente ha abierto la factura o no, y el cliente puede firmarla directamente desde el teléfono u ordenador sin ninguna impresora.",
      de: "Erstellen und senden Sie Rechnungen per E-Mail mit einem Klick. Sie können sehen, ob der Kunde die Rechnung geöffnet hat oder nicht, und der Kunde kann sie direkt vom Telefon oder Computer ohne Drucker unterschreiben.",
      mk: "Креирајте и испраќајте фактури по е-пошта со еден клик. Можете да видите дали клиентот ја отворил фактурата или не, а клиентот може да ја потпише директно од телефон или компјутер без печатач."
    },
    benefits: [
      { sq: "Dërgim fature me email — profesional dhe i menjëhershëm", en: "Invoice delivery by email — professional and instant", es: "Envío de factura por correo — profesional e instantáneo", de: "Rechnungsversand per E-Mail — professionell und sofort", mk: "Достава на фактура по е-пошта — професионална и моментална" },
      { sq: "Shiko nëse fatura është hapur nga klienti", en: "See if the invoice was opened by the client", es: "Vea si la factura fue abierta por el cliente", de: "Sehen Sie ob die Rechnung vom Kunden geöffnet wurde", mk: "Видете дали фактурата е отворена од клиентот" },
      { sq: "Nënshkrim dixhital i klientit (telefon ose PC)", en: "Client digital signature (phone or PC)", es: "Firma digital del cliente (teléfono o PC)", de: "Digitale Unterschrift des Kunden (Telefon oder PC)", mk: "Дигитален потпис на клиентот (телефон или PC)" },
      { sq: "Nënshkrim nga ana e kompanisë suaj gjithashtu", en: "Signature from your company side too", es: "Firma desde su empresa también", de: "Unterschrift auch von Ihrer Firmenseite", mk: "Потпис и од страна на вашата компанија" },
      { sq: "Rikujtime automatike kur fatura nuk paguhet", en: "Auto reminders when invoice is unpaid", es: "Recordatorios automáticos cuando la factura no se paga", de: "Automatische Erinnerungen wenn die Rechnung unbezahlt ist", mk: "Автоматски потсетници кога фактурата не е платена" },
      { sq: "Shabllone të ndryshme me markën tuaj", en: "Multiple templates with your branding", es: "Múltiples plantillas con su marca", de: "Mehrere Vorlagen mit Ihrem Branding", mk: "Повеќе шаблони со вашиот бренд" },
    ],
    href: "/features/invoicing",
    stat: { value: "40%", label: { sq: "pagesa më shpejt", en: "faster payments", es: "pagos más rápidos", de: "schnellere Zahlungen", mk: "побрзи плаќања" } },
  },
  {
    id: "expenses",
    icon: Receipt,
    gradient: "from-emerald-500 to-emerald-600",
    lightText: "text-emerald-600",
    border: "border-emerald-100",
    dotColor: "bg-emerald-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking", es: "Seguimiento de gastos", de: "Ausgabenverfolgung", mk: "Следење на трошоци" },
    tagline: { sq: "Organizoni shpenzimet, kurseni kohë dhe para", en: "Organise expenses, save time and money", es: "Organice gastos, ahorre tiempo y dinero", de: "Ausgaben organisieren, Zeit und Geld sparen", mk: "Организирајте трошоци, заштедете време и пари" },
    desc: {
      sq: "Nëse shitësi përdor Clientlly, fatura e tij regjistrohet direkt si shpenzim për ju — pa asnjë hyrje manuale. Thjesht aprovoni dhe sistemi e bën vetë. Për blerjet e tjera, skanoni faturën me kamerë.",
      en: "If the seller uses Clientlly, their invoice registers directly as an expense for you — no manual entry. Just approve and the system does it. For other purchases, scan the receipt with your camera.",
      es: "Si el vendedor usa Clientlly, su factura se registra directamente como gasto para usted — sin entrada manual. Solo apruebe y el sistema lo hace. Para otras compras, escanee el recibo con su cámara.",
      de: "Wenn der Verkäufer Clientlly nutzt, wird seine Rechnung direkt als Ausgabe für Sie registriert — keine manuelle Eingabe. Einfach genehmigen und das System erledigt es. Für andere Einkäufe scannen Sie den Beleg mit Ihrer Kamera.",
      mk: "Ако продавачот користи Clientlly, неговата фактура се регистрира директно како трошок за вас — без рачно внесување. Само одобрете и системот го прави сам. За други купувања, скенирајте ја сметката со камера."
    },
    benefits: [
      { sq: "Fatura e shitësit Clientlly → shpenzim automatik për ju", en: "Clientlly seller invoice → automatic expense for you", es: "Factura del vendedor Clientlly → gasto automático para usted", de: "Clientlly-Verkäuferrechnung → automatische Ausgabe für Sie", mk: "Фактура од Clientlly продавач → автоматски трошок за вас" },
      { sq: "Pa hyrje manuale — thjesht aprovoni me 1 klikim", en: "No manual entry — just approve in 1 click", es: "Sin entrada manual — solo apruebe en 1 clic", de: "Keine manuelle Eingabe — einfach mit 1 Klick genehmigen", mk: "Без рачно внесување — само одобрете со 1 клик" },
      { sq: "Skanim automatik i faturave me kamerë (të tjerët)", en: "Auto receipt scanning with camera (others)", es: "Escaneo automático de recibos con cámara (otros)", de: "Automatisches Belegscannen mit Kamera (andere)", mk: "Автоматско скенирање на сметки со камера (други)" },
      { sq: "Kategorizim inteligjent i shpenzimeve", en: "Smart expense categorisation", es: "Categorización inteligente de gastos", de: "Intelligente Ausgabenkategorisierung", mk: "Интелигентна категоризација на трошоци" },
      { sq: "Raporte të gatshme për taksën", en: "Tax-ready expense reports", es: "Informes de gastos listos para impuestos", de: "Steuerfertige Ausgabenberichte", mk: "Извештаи за трошоци подготвени за данок" },
      { sq: "Buxhet, alarme tejkalimi dhe lidhje me flotën", en: "Budget, overspend alerts and fleet link", es: "Presupuesto, alertas de exceso y enlace con flota", de: "Budget, Überausgaben-Warnungen und Flottenverknüpfung", mk: "Буџет, аларми за прекумерно трошење и врска со флотата" },
    ],
    href: "/features/expenses",
    stat: { value: "0", label: { sq: "hyrje manuale mes bizneseve Clientlly", en: "manual entries between Clientlly businesses", es: "entradas manuales entre negocios Clientlly", de: "manuelle Einträge zwischen Clientlly-Unternehmen", mk: "рачни внесувања меѓу Clientlly бизниси" } },
  },
  {
    id: "debt",
    icon: CreditCard,
    gradient: "from-rose-500 to-rose-600",
    lightText: "text-rose-600",
    border: "border-rose-100",
    dotColor: "bg-rose-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de deudas", de: "Schuldenmanagement", mk: "Управување со долгови" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Keep debts under control without stress", es: "Controle las deudas sin estrés", de: "Schulden stressfrei im Griff behalten", mk: "Контролирајте ги долговите без стрес" },
    desc: {
      sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.",
      en: "Track all debts and loans in one place. Plan repayments, get deadline alerts and see your repayment progress.",
      es: "Rastree todas las deudas y préstamos en un solo lugar. Planifique los pagos, reciba alertas de vencimiento y vea su progreso de pago.",
      de: "Verfolgen Sie alle Schulden und Darlehen an einem Ort. Planen Sie Rückzahlungen, erhalten Sie Fristenwarnungen und sehen Sie Ihren Rückzahlungsfortschritt.",
      mk: "Следете ги сите долгови и заеми на едно место. Планирајте отплати, добивајте аларми за рокови и гледајте го напредокот на отплаќање."
    },
    benefits: [
      { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Debt and creditor registration", es: "Registro de deudas y acreedores", de: "Schulden- und Gläubigerregistrierung", mk: "Регистрација на долгови и кредитори" },
      { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan", es: "Plan de pago automático", de: "Automatischer Rückzahlungsplan", mk: "Автоматски план за отплата" },
      { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts", es: "Alertas de vencimiento y pago", de: "Fristen- und Zahlungswarnungen", mk: "Аларми за рокови и плаќања" },
      { sq: "Historiku i plotë i transaksioneve", en: "Full transaction history", es: "Historial completo de transacciones", de: "Vollständiger Transaktionsverlauf", mk: "Целосна историја на трансакции" },
      { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart", es: "Gráfico de progreso de pago", de: "Rückzahlungsfortschrittsdiagramm", mk: "Графикон на напредок на отплата" },
    ],
    href: "/features/debt",
    stat: { value: "95%", label: { sq: "më pak gabime", en: "fewer errors", es: "menos errores", de: "weniger Fehler", mk: "помалку грешки" } },
  },
  {
    id: "reports",
    icon: BarChart3,
    gradient: "from-violet-500 to-violet-600",
    lightText: "text-violet-600",
    border: "border-violet-100",
    dotColor: "bg-violet-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Raporte & Analitikë", en: "Insights & Reports", es: "Informes y analítica", de: "Berichte & Analytik", mk: "Извештаи и аналитика" },
    tagline: { sq: "Dashboard i plotë me KPI dhe parashikime", en: "Full dashboard with KPIs and forecasts", es: "Panel completo con KPI y pronósticos", de: "Vollständiges Dashboard mit KPIs und Prognosen", mk: "Целосен панел со KPI и прогнози" },
    desc: {
      sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale me KPI dhe parashikime financiare.",
      en: "The analytics dashboard gives a complete picture — sales, expenses, cash flow, team attendance and fleet service — all in real time with KPIs and financial forecasts.",
      es: "El panel de analítica ofrece una imagen completa — ventas, gastos, flujo de caja, asistencia del equipo y servicio de flota — todo en tiempo real con KPI y pronósticos financieros.",
      de: "Das Analyse-Dashboard gibt ein vollständiges Bild — Verkäufe, Ausgaben, Cashflow, Teamanwesenheit und Flottenservice — alles in Echtzeit mit KPIs und Finanzprognosen.",
      mk: "Аналитичкиот панел дава целосна слика — продажби, трошоци, готовински тек, присуство на тимот и сервис на флотата — сè во реално време со KPI и финансиски прогнози."
    },
    benefits: [
      { sq: "Panel analitike interaktive me grafikë", en: "Interactive analytics dashboard with charts", es: "Panel analítico interactivo con gráficos", de: "Interaktives Analyse-Dashboard mit Diagrammen", mk: "Интерактивен аналитички панел со графикони" },
      { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports", es: "Informes mensuales de flujo de caja", de: "Monatliche Cashflow-Berichte", mk: "Месечни извештаи за готовински тек" },
      { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)", es: "Comparación de períodos (mes/año)", de: "Periodenvergleich (Monat/Jahr)", mk: "Споредба на периоди (месец/година)" },
      { sq: "Parashikime financiare me AI", en: "AI financial forecasting", es: "Pronósticos financieros con IA", de: "KI-Finanzprognosen", mk: "AI финансиски прогнози" },
      { sq: "Raporte prezence, flote dhe shitjesh", en: "Attendance, fleet and sales reports", es: "Informes de asistencia, flota y ventas", de: "Anwesenheits-, Flotten- und Verkaufsberichte", mk: "Извештаи за присуство, флота и продажби" },
      { sq: "Eksport PDF/Excel me klikim", en: "One-click PDF/Excel export", es: "Exportación PDF/Excel en un clic", de: "PDF/Excel-Export mit einem Klick", mk: "PDF/Excel извоз со еден клик" },
    ],
    href: "/features/reports",
    stat: { value: "2×", label: { sq: "vendime më të mira", en: "better decisions", es: "mejores decisiones", de: "bessere Entscheidungen", mk: "подобри одлуки" } },
  },

  {
    id: "buyer-cards",
    icon: Wallet,
    gradient: "from-amber-500 to-amber-600",
    lightText: "text-amber-600",
    border: "border-amber-100",
    dotColor: "bg-amber-500",
    category: "finance" as Category,
    tag: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    title: { sq: "Kartelat e Blerësit", en: "Buyer Cards", es: "Tarjetas de comprador", de: "Käuferkarten", mk: "Картички на купувач" },
    tagline: { sq: "Menaxhoni kartelat dhe historikun e blerësve", en: "Manage buyer cards and purchase history", es: "Gestione tarjetas de comprador e historial de compras", de: "Käuferkarten und Kaufhistorie verwalten", mk: "Управувајте со картичките и историјата на купувачите" },
    desc: {
      sq: "Krijoni kartela dixhitale për çdo blerës me historikun e plotë të blerjeve, pagesave dhe borxheve. Çdo blerës ka profilin e vet me saldo aktuale, limitet e kreditit dhe statistikat e blerjeve.",
      en: "Create digital cards for each buyer with complete purchase, payment and debt history. Each buyer has their own profile with current balance, credit limits and purchase statistics.",
      es: "Cree tarjetas digitales para cada comprador con historial completo de compras, pagos y deudas. Cada comprador tiene su propio perfil con saldo actual, límites de crédito y estadísticas de compras.",
      de: "Erstellen Sie digitale Karten für jeden Käufer mit vollständiger Kauf-, Zahlungs- und Schuldenhistorie. Jeder Käufer hat sein eigenes Profil mit aktuellem Saldo, Kreditlimits und Kaufstatistiken.",
      mk: "Креирајте дигитални картички за секој купувач со целосна историја на купувања, плаќања и долгови. Секој купувач има свој профил со тековно салдо, кредитни лимити и статистики за купување."
    },
    benefits: [
      { sq: "Kartela dixhitale me saldo dhe historik blerje", en: "Digital cards with balance and purchase history", es: "Tarjetas digitales con saldo e historial de compras", de: "Digitale Karten mit Saldo und Kaufhistorie", mk: "Дигитални картички со салдо и историја на купување" },
      { sq: "Limit krediti dhe njoftim automatik", en: "Credit limit and automatic notification", es: "Límite de crédito y notificación automática", de: "Kreditlimit und automatische Benachrichtigung", mk: "Кредитен лимит и автоматско известување" },
      { sq: "Gjurmim i pagesave dhe borxheve të blerësit", en: "Tracking buyer payments and debts", es: "Seguimiento de pagos y deudas del comprador", de: "Verfolgung von Käuferzahlungen und Schulden", mk: "Следење на плаќања и долгови на купувачот" },
      { sq: "Raport detajuar i çdo blerësi", en: "Detailed report for each buyer", es: "Informe detallado de cada comprador", de: "Detaillierter Bericht für jeden Käufer", mk: "Детален извештај за секој купувач" },
      { sq: "Kategorizim sipas llojit të blerësit", en: "Categorization by buyer type", es: "Categorización por tipo de comprador", de: "Kategorisierung nach Käufertyp", mk: "Категоризација по тип на купувач" },
      { sq: "Eksport i listës së blerësve (PDF/Excel)", en: "Export buyer list (PDF/Excel)", es: "Exportar lista de compradores (PDF/Excel)", de: "Käuferliste exportieren (PDF/Excel)", mk: "Извоз на листа на купувачи (PDF/Excel)" },
    ],
    href: "/features/buyer-cards",
    stat: { value: "100%", label: { sq: "transparencë blerësi", en: "buyer transparency", es: "transparencia del comprador", de: "Käufertransparenz", mk: "транспарентност на купувач" } },
  },

  {
    id: "clients",
    icon: Users,
    gradient: "from-indigo-500 to-indigo-600",
    lightText: "text-indigo-600",
    border: "border-indigo-100",
    dotColor: "bg-indigo-500",
    category: "operations" as Category,
    tag: { sq: "Klientë", en: "Clients", es: "Clientes", de: "Kunden", mk: "Клиенти" },
    title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)", es: "Gestión de clientes (CRM)", de: "Kundenmanagement (CRM)", mk: "Управување со клиенти (CRM)" },
    tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client", es: "Construya relaciones sólidas con cada cliente", de: "Bauen Sie starke Beziehungen zu jedem Kunden auf", mk: "Изградете силни односи со секој клиент" },
    desc: {
      sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, ofertat, korespondencën dhe shënimet. Asnjë detaj nuk humb.",
      en: "Keep the full history of every client — orders, payments, quotes, correspondence and notes. No detail gets lost.",
      es: "Mantenga el historial completo de cada cliente — pedidos, pagos, cotizaciones, correspondencia y notas. Ningún detalle se pierde.",
      de: "Behalten Sie die vollständige Historie jedes Kunden — Bestellungen, Zahlungen, Angebote, Korrespondenz und Notizen. Kein Detail geht verloren.",
      mk: "Чувајте ја целосната историја на секој клиент — нарачки, плаќања, понуди, кореспонденција и белешки. Ниту еден детал не се губи."
    },
    benefits: [
      { sq: "Profil i plotë 360° i çdo klienti", en: "Full 360° profile for every client", es: "Perfil completo 360° de cada cliente", de: "Vollständiges 360°-Profil für jeden Kunden", mk: "Целосен 360° профил за секој клиент" },
      { sq: "Historiku i porosive, ofertave dhe pagesave", en: "History of orders, quotes and payments", es: "Historial de pedidos, cotizaciones y pagos", de: "Historie von Bestellungen, Angeboten und Zahlungen", mk: "Историја на нарачки, понуди и плаќања" },
      { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders", es: "Recordatorios automáticos de seguimiento", de: "Automatische Follow-up-Erinnerungen", mk: "Автоматски потсетници за следење" },
      { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value", es: "Segmentación de clientes por valor", de: "Kundensegmentierung nach Wert", mk: "Сегментација на клиенти по вредност" },
      { sq: "Lidhje direkte me kalendarin e takimeve", en: "Direct link to appointments calendar", es: "Enlace directo al calendario de citas", de: "Direkter Link zum Terminkalender", mk: "Директна врска со календарот за состаноци" },
    ],
    href: "/features/clients",
    stat: { value: "+30%", label: { sq: "mbajtje klientësh", en: "client retention", es: "retención de clientes", de: "Kundenbindung", mk: "задржување клиенти" } },
  },

  {
    id: "vendors",
    icon: Building2,
    gradient: "from-amber-500 to-amber-600",
    lightText: "text-amber-600",
    border: "border-amber-100",
    dotColor: "bg-amber-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de proveedores", de: "Lieferantenmanagement", mk: "Управување со добавувачи" },
    tagline: { sq: "Organizoni furnitorët dhe blerjet pa kaos", en: "Organise suppliers and purchases without chaos", es: "Organice proveedores y compras sin caos", de: "Lieferanten und Einkäufe ohne Chaos organisieren", mk: "Организирајте добавувачи и набавки без хаос" },
    desc: {
      sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.",
      en: "Track suppliers, purchase orders and their performance. Negotiate with real data and choose the best vendors.",
      es: "Rastree proveedores, órdenes de compra y su rendimiento. Negocie con datos reales y elija los mejores proveedores.",
      de: "Verfolgen Sie Lieferanten, Bestellungen und deren Leistung. Verhandeln Sie mit echten Daten und wählen Sie die besten Anbieter.",
      mk: "Следете добавувачи, нарачки за набавка и нивните перформанси. Преговарајте со реални податоци и изберете ги најдобрите добавувачи."
    },
    benefits: [
      { sq: "Katalog furnitorësh me rating dhe vlerësim", en: "Supplier catalogue with ratings", es: "Catálogo de proveedores con calificaciones", de: "Lieferantenkatalog mit Bewertungen", mk: "Каталог на добавувачи со оценки" },
      { sq: "Menaxhim porosish blerje (PO)", en: "Purchase order management (PO)", es: "Gestión de órdenes de compra (PO)", de: "Bestellungsmanagement (PO)", mk: "Управување со нарачки за набавка (PO)" },
      { sq: "Krahasim çmimesh mes furnitorëve", en: "Price comparison between suppliers", es: "Comparación de precios entre proveedores", de: "Preisvergleich zwischen Lieferanten", mk: "Споредба на цени меѓу добавувачи" },
      { sq: "Historiku i blerjieve dhe pagesave", en: "Purchase and payment history", es: "Historial de compras y pagos", de: "Kauf- und Zahlungshistorie", mk: "Историја на набавки и плаќања" },
      { sq: "Alarme kontratash dhe afatesh", en: "Contract and deadline alerts", es: "Alertas de contratos y vencimientos", de: "Vertrags- und Fristenwarnungen", mk: "Аларми за договори и рокови" },
    ],
    href: "/features/vendors",
    stat: { value: "20%", label: { sq: "ulje kostosh", en: "cost reduction", es: "reducción de costos", de: "Kostensenkung", mk: "намалување на трошоци" } },
  },
  {
    id: "inventory",
    icon: Package,
    gradient: "from-teal-500 to-teal-600",
    lightText: "text-teal-600",
    border: "border-teal-100",
    dotColor: "bg-teal-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    title: { sq: "Menaxhim Inventari", en: "Inventory Management", es: "Gestión de inventario", de: "Bestandsmanagement", mk: "Управување со инвентар" },
    tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control your stock, eliminate losses", es: "Controle su stock, elimine pérdidas", de: "Kontrollieren Sie Ihren Bestand, eliminieren Sie Verluste", mk: "Контролирајте го залихот, елиминирајте загуби" },
    desc: {
      sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
      en: "Track stock in real time, get low-stock alerts and analyse inventory movements with detailed reports.",
      es: "Rastree el stock en tiempo real, reciba alertas de stock bajo y analice los movimientos de inventario con informes detallados.",
      de: "Verfolgen Sie den Bestand in Echtzeit, erhalten Sie Warnungen bei niedrigem Bestand und analysieren Sie Bestandsbewegungen mit detaillierten Berichten.",
      mk: "Следете го залихот во реално време, добивајте аларми за низок залих и анализирајте ги движењата на инвентарот со детални извештаи."
    },
    benefits: [
      { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking", es: "Seguimiento de stock en tiempo real", de: "Echtzeit-Bestandsverfolgung", mk: "Следење на залих во реално време" },
      { sq: "Alarme stoku minimal", en: "Low-stock alerts", es: "Alertas de stock bajo", de: "Warnungen bei niedrigem Bestand", mk: "Аларми за низок залих" },
      { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for in/out", es: "Escáner de código de barras para entrada/salida", de: "Barcode-Scanner für Ein-/Ausgang", mk: "Баркод скенер за влез/излез" },
      { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports", es: "Informes de movimiento de inventario", de: "Bestandsbewegungsberichte", mk: "Извештаи за движење на инвентар" },
      { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing", es: "Integración con facturación automática", de: "Integration mit automatischer Rechnungsstellung", mk: "Интеграција со автоматско фактурирање" },
    ],
    href: "/features/inventory",
    stat: { value: "35%", label: { sq: "ulje humbje stoku", en: "stock loss reduction", es: "reducción de pérdida de stock", de: "Bestandsverlustreduzierung", mk: "намалување на загуба на залих" } },
  },
  {
    id: "calendar",
    icon: CalendarDays,
    gradient: "from-sky-500 to-indigo-500",
    lightText: "text-sky-600",
    border: "border-sky-100",
    dotColor: "bg-sky-500",
    category: "operations" as Category,
    tag: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    title: { sq: "Kalendar & Planifikim", en: "Calendar & Scheduling", es: "Calendario y programación", de: "Kalender & Planung", mk: "Календар и планирање" },
    tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All appointments and services in one place", es: "Todas las citas y servicios en un solo lugar", de: "Alle Termine und Dienste an einem Ort", mk: "Сите состаноци и услуги на едно место" },
    desc: {
      sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
      en: "Plan client appointments, services and team tasks. The calendar syncs directly with Google Calendar and your phone calendar — no appointment forgotten.",
      es: "Planifique citas con clientes, servicios y tareas de equipo. El calendario se sincroniza directamente con Google Calendar y el calendario de su teléfono — ninguna cita olvidada.",
      de: "Planen Sie Kundentermine, Dienste und Teamaufgaben. Der Kalender synchronisiert sich direkt mit Google Calendar und Ihrem Telefonkalender — kein Termin vergessen.",
      mk: "Планирајте состаноци со клиенти, услуги и тимски задачи. Календарот се синхронизира директно со Google Calendar и календарот на телефонот — ниту еден состанок не се заборава."
    },
    benefits: [
      { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Client appointment and service scheduling", es: "Programación de citas y servicios con clientes", de: "Kunden-Termin- und Serviceplanung", mk: "Закажување состаноци и услуги со клиенти" },
      { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone", es: "Sincronización con Google Calendar y iPhone", de: "Synchronisierung mit Google Calendar & iPhone", mk: "Синхронизација со Google Calendar и iPhone" },
      { sq: "NjofTime automatike para çdo takimi", en: "Automatic reminders before each appointment", es: "Recordatorios automáticos antes de cada cita", de: "Automatische Erinnerungen vor jedem Termin", mk: "Автоматски потсетници пред секој состанок" },
      { sq: "Planifikim i detyrave ekipore", en: "Team task scheduling", es: "Programación de tareas de equipo", de: "Teamaufgabenplanung", mk: "Планирање на тимски задачи" },
      { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Link with attendance and driver modules", es: "Enlace con módulos de asistencia y conductores", de: "Verknüpfung mit Anwesenheits- und Fahrermodulen", mk: "Врска со модулите за присуство и возачи" },
      { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily views", es: "Vistas semanal, mensual y diaria", de: "Wochen-, Monats- und Tagesansichten", mk: "Неделен, месечен и дневен преглед" },
    ],
    href: "/features/calendar",
    stat: { value: "0", label: { sq: "takime të humbura", en: "missed appointments", es: "citas perdidas", de: "verpasste Termine", mk: "пропуштени состаноци" } },
  },

  {
    id: "motorpool",
    icon: Car,
    gradient: "from-slate-600 to-slate-800",
    lightText: "text-slate-700",
    border: "border-slate-200",
    dotColor: "bg-slate-500",
    category: "fleet" as Category,
    tag: { sq: "Flotë", en: "Fleet", es: "Flota", de: "Flotte", mk: "Флота" },
    title: { sq: "Motorpool & Flotë Makinash", en: "Motorpool & Fleet Management", es: "Motorpool y gestión de flota", de: "Fuhrpark & Flottenmanagement", mk: "Моторпул и управување со флота" },
    tagline: { sq: "Menaxhoni çdo makinë, shofer dhe shërbim nga telefoni", en: "Manage every vehicle, driver and service from your phone", es: "Gestione cada vehículo, conductor y servicio desde su teléfono", de: "Verwalten Sie jedes Fahrzeug, jeden Fahrer und Service von Ihrem Telefon", mk: "Управувајте со секое возило, возач и сервис од телефонот" },
    desc: {
      sq: "Sistemi i flotës mbulon gjithçka — nga caktimi i shoferëve për udhëtime tek gjurmimi i mirëmbajtjeve, rinovimi i sigurimeve dhe skadencat e regjistrimit. Asnjë afat nuk kalohet pa u vënë re.",
      en: "The fleet system covers everything — from driver assignment for trips to maintenance tracking, insurance renewal and registration deadlines. No deadline passes unnoticed.",
      es: "El sistema de flota cubre todo — desde la asignación de conductores para viajes hasta el seguimiento de mantenimiento, renovación de seguros y plazos de registro. Ningún plazo pasa desapercibido.",
      de: "Das Flottensystem deckt alles ab — von der Fahrerzuordnung für Fahrten bis zur Wartungsverfolgung, Versicherungserneuerung und Registrierungsfristen. Keine Frist vergeht unbemerkt.",
      mk: "Системот за флота покрива сè — од доделување возачи за патувања до следење на одржување, обновување на осигурувања и рокови за регистрација. Ниту еден рок не поминува незабележан."
    },
    benefits: [
      { sq: "Regjistrim i flotës: makina, targë, pronësi", en: "Fleet registration: vehicle, plate, ownership", es: "Registro de flota: vehículo, matrícula, propiedad", de: "Flottenregistrierung: Fahrzeug, Kennzeichen, Eigentum", mk: "Регистрација на флота: возило, таблица, сопственост" },
      { sq: "Caktim shoferësh për udhëtime (ride dispatch)", en: "Driver assignment for trips (ride dispatch)", es: "Asignación de conductores para viajes (despacho)", de: "Fahrerzuordnung für Fahrten (Fahrtenvergabe)", mk: "Доделување возачи за патувања (диспечирање)" },
      { sq: "Gjurmim mirëmbajtjesh dhe servisimesh", en: "Maintenance and servicing tracking", es: "Seguimiento de mantenimiento y servicio", de: "Wartungs- und Serviceverfolgung", mk: "Следење на одржување и сервисирање" },
      { sq: "Alarme rinovimi: sigurim, kasko, regjistrimi", en: "Renewal alerts: insurance, kasko, registration", es: "Alertas de renovación: seguro, kasko, registro", de: "Erneuerungswarnungen: Versicherung, Kasko, Registrierung", mk: "Аларми за обновување: осигурување, каско, регистрација" },
      { sq: "Historiku i plotë i shpenzimeve për çdo makinë", en: "Full expense history per vehicle", es: "Historial completo de gastos por vehículo", de: "Vollständige Ausgabenhistorie pro Fahrzeug", mk: "Целосна историја на трошоци по возило" },
      { sq: "Raporte km, karburant dhe kosto/makina", en: "Km, fuel and cost/vehicle reports", es: "Informes de km, combustible y costo/vehículo", de: "Km-, Kraftstoff- und Kosten/Fahrzeug-Berichte", mk: "Извештаи за km, гориво и трошок/возило" },
    ],
    href: "/features/fleet",
    stat: { value: "100%", label: { sq: "afate të ndjekura", en: "deadlines tracked", es: "plazos rastreados", de: "verfolgte Fristen", mk: "следени рокови" } },
  },
  {
    id: "maintenance",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    lightText: "text-orange-600",
    border: "border-orange-100",
    dotColor: "bg-orange-500",
    category: "fleet" as Category,
    tag: { sq: "Flotë", en: "Fleet", es: "Flota", de: "Flotte", mk: "Флота" },
    title: { sq: "Mirëmbajtje & Servisimet", en: "Maintenance & Servicing", es: "Mantenimiento y servicio", de: "Wartung & Service", mk: "Одржување и сервисирање" },
    tagline: { sq: "Asnjë servisim nuk harrohet, asnjë kosto nuk fshihet", en: "No service forgotten, no cost hidden", es: "Ningún servicio olvidado, ningún costo oculto", de: "Kein Service vergessen, keine Kosten versteckt", mk: "Ниту еден сервис не се заборава, ниту еден трошок не се крие" },
    desc: {
      sq: "Planifikoni dhe gjurmoni çdo servisim, ndërrimin e gomave, kontrollin teknik dhe çdo riparim. Merrni alarme automatike bazuar në km ose datë. Të gjitha kostot regjistrohen direkt në shpenzimet e kompanisë.",
      en: "Plan and track every service, tyre change, technical inspection and repair. Get automatic alerts based on km or date. All costs register directly in company expenses.",
      es: "Planifique y rastree cada servicio, cambio de neumáticos, inspección técnica y reparación. Reciba alertas automáticas basadas en km o fecha. Todos los costos se registran directamente en gastos de la empresa.",
      de: "Planen und verfolgen Sie jeden Service, Reifenwechsel, technische Inspektion und Reparatur. Erhalten Sie automatische Warnungen basierend auf km oder Datum. Alle Kosten werden direkt in den Firmenausgaben registriert.",
      mk: "Планирајте и следете секој сервис, промена на гуми, технички преглед и поправка. Добивајте автоматски аларми базирани на km или датум. Сите трошоци се регистрираат директно во трошоците на компанијата."
    },
    benefits: [
      { sq: "Plani i servisimeve sipas km ose datës", en: "Service plan based on km or date", es: "Plan de servicio basado en km o fecha", de: "Serviceplan basierend auf km oder Datum", mk: "План за сервис базиран на km или датум" },
      { sq: "Alarme automatike: ndërrimi gomave, vaj, filtra", en: "Auto alerts: tyre change, oil, filters", es: "Alertas automáticas: cambio de neumáticos, aceite, filtros", de: "Automatische Warnungen: Reifenwechsel, Öl, Filter", mk: "Автоматски аларми: промена на гуми, масло, филтри" },
      { sq: "Regjistrim i çdo riparimi me kosto", en: "All repairs logged with cost", es: "Todas las reparaciones registradas con costo", de: "Alle Reparaturen mit Kosten protokolliert", mk: "Сите поправки евидентирани со трошок" },
      { sq: "Kontroll teknik dhe afate inspektimi", en: "Technical inspection and inspection deadlines", es: "Inspección técnica y plazos de inspección", de: "Technische Inspektion und Inspektionsfristen", mk: "Технички преглед и рокови за инспекција" },
      { sq: "Lidhje direkte me shpenzimet e kompanisë", en: "Direct link to company expenses", es: "Enlace directo a gastos de la empresa", de: "Direkte Verknüpfung mit Firmenausgaben", mk: "Директна врска со трошоците на компанијата" },
      { sq: "Raporte kosto mirëmbajtjeje për çdo automjet", en: "Maintenance cost reports per vehicle", es: "Informes de costos de mantenimiento por vehículo", de: "Wartungskostenberichte pro Fahrzeug", mk: "Извештаи за трошоци за одржување по возило" },
    ],
    href: "/features/maintenance",
    stat: { value: "60%", label: { sq: "ulje dështimesh", en: "fewer breakdowns", es: "menos averías", de: "weniger Ausfälle", mk: "помалку дефекти" } },
  },

  {
    id: "attendance",
    icon: MapPin,
    gradient: "from-green-500 to-emerald-600",
    lightText: "text-green-600",
    border: "border-green-100",
    dotColor: "bg-green-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH y equipo", de: "HR & Team", mk: "ЧР и тим" },
    title: { sq: "Prezencë & Check‑In Mobile", en: "Attendance & Mobile Check‑In", es: "Asistencia y check-in móvil", de: "Anwesenheit & Mobiler Check-In", mk: "Присуство и мобилен чек-ин" },
    tagline: { sq: "Pa pajisje në zyrë — vetëm telefon dhe GPS", en: "No office device needed — just phone and GPS", es: "Sin dispositivo de oficina — solo teléfono y GPS", de: "Kein Bürogerät nötig — nur Telefon und GPS", mk: "Без уред во канцеларија — само телефон и GPS" },
    desc: {
      sq: "Punonjësit bëjnë check-in dhe check-out direkt nga telefoni me lokacion GPS të saktë — pa karta, pa pajisje të instaluara. Orari i punës, turnet dhe overtime llogariten automatikisht.",
      en: "Employees check in and out directly from their phone with precise GPS location — no cards, no installed devices. Work hours, shifts and overtime are calculated automatically.",
      es: "Los empleados registran entrada y salida directamente desde su teléfono con ubicación GPS precisa — sin tarjetas, sin dispositivos instalados. Las horas de trabajo, turnos y horas extras se calculan automáticamente.",
      de: "Mitarbeiter checken direkt vom Telefon mit präzisem GPS-Standort ein und aus — keine Karten, keine installierten Geräte. Arbeitszeiten, Schichten und Überstunden werden automatisch berechnet.",
      mk: "Вработените се пријавуваат и одјавуваат директно од телефонот со прецизна GPS локација — без картички, без инсталирани уреди. Работните часови, смените и прекувремената работа се пресметуваат автоматски."
    },
    benefits: [
      { sq: "Check-in/out nga telefoni me GPS + foto", en: "Phone check-in/out with GPS + photo", es: "Check-in/out desde teléfono con GPS + foto", de: "Telefon-Check-in/out mit GPS + Foto", mk: "Чек-ин/аут од телефон со GPS + фото" },
      { sq: "Pa pajisje në zyrë — zero instalim harduer", en: "No office device — zero hardware install", es: "Sin dispositivo de oficina — cero instalación de hardware", de: "Kein Bürogerät — keine Hardware-Installation", mk: "Без уред во канцеларија — нула хардверска инсталација" },
      { sq: "Llogaritje automatike orësh dhe overtime", en: "Automatic hours and overtime calculation", es: "Cálculo automático de horas y horas extras", de: "Automatische Stunden- und Überstundenberechnung", mk: "Автоматско пресметување на часови и прекувремена работа" },
      { sq: "Caktim orarit dhe turneve të punës", en: "Work schedule and shift assignment", es: "Asignación de horario y turno de trabajo", de: "Arbeitszeitplan und Schichtzuweisung", mk: "Доделување на работен распоред и смени" },
      { sq: "Raporte të avancuara prezence (ditore/mujore)", en: "Advanced attendance reports (daily/monthly)", es: "Informes avanzados de asistencia (diario/mensual)", de: "Erweiterte Anwesenheitsberichte (täglich/monatlich)", mk: "Напредни извештаи за присуство (дневни/месечни)" },
      { sq: "Eksport automatik për llogaritje page", en: "Automatic export for payroll", es: "Exportación automática para nómina", de: "Automatischer Export für Gehaltsabrechnung", mk: "Автоматски извоз за пресметка на плата" },
    ],
    href: "/features/attendance",
    stat: { value: "100%", label: { sq: "saktësi lokacioni", en: "location accuracy", es: "precisión de ubicación", de: "Standortgenauigkeit", mk: "точност на локација" } },
  },
  {
    id: "payroll",
    icon: Wallet,
    gradient: "from-violet-600 to-purple-700",
    lightText: "text-violet-600",
    border: "border-violet-100",
    dotColor: "bg-violet-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH y equipo", de: "HR & Team", mk: "ЧР и тим" },
    title: { sq: "Paga & Kompensimi", en: "Payroll & Compensation", es: "Nómina y compensación", de: "Gehaltsabrechnung & Vergütung", mk: "Плата и компензација" },
    tagline: { sq: "Çdo mënyrë pagese — e automatizuar plotësisht", en: "Every pay method — fully automated", es: "Cada método de pago — totalmente automatizado", de: "Jede Zahlungsmethode — vollständig automatisiert", mk: "Секој метод на плаќање — целосно автоматизиран" },
    desc: {
      sq: "Konfiguroni pagën për çdo punonjës sipas mënyrës që i përshtatet rolit të tij — pagë fikse, komision, kombinim, ose bonus performancë. Llogaritja bëhet automatikisht bazuar në orët e prezencës.",
      en: "Configure pay for each employee according to their role — fixed salary, commission, combination, or performance bonus. Calculation is done automatically based on attendance hours.",
      es: "Configure el pago de cada empleado según su rol — salario fijo, comisión, combinación o bonificación por rendimiento. El cálculo se realiza automáticamente según las horas de asistencia.",
      de: "Konfigurieren Sie die Bezahlung für jeden Mitarbeiter entsprechend seiner Rolle — Festgehalt, Provision, Kombination oder Leistungsbonus. Die Berechnung erfolgt automatisch basierend auf den Anwesenheitsstunden.",
      mk: "Конфигурирајте ја платата за секој вработен според неговата улога — фиксна плата, провизија, комбинација или бонус за перформанс. Пресметката се прави автоматски врз основа на часовите на присуство."
    },
    benefits: [
      { sq: "Pagë fikse mujore ose javore", en: "Fixed monthly or weekly salary", es: "Salario fijo mensual o semanal", de: "Festes Monats- oder Wochengehalt", mk: "Фиксна месечна или неделна плата" },
      { sq: "Komision me përqindje të shitjeve", en: "Commission as a percentage of sales", es: "Comisión como porcentaje de ventas", de: "Provision als Prozentsatz des Umsatzes", mk: "Провизија како процент од продажбите" },
      { sq: "Pagë fikse + përqindje (hibride)", en: "Fixed salary + percentage (hybrid)", es: "Salario fijo + porcentaje (híbrido)", de: "Festgehalt + Prozentsatz (Hybrid)", mk: "Фиксна плата + процент (хибрид)" },
      { sq: "Bonus performancë dhe stimuj të personalizuar", en: "Performance bonuses and custom incentives", es: "Bonificaciones de rendimiento e incentivos personalizados", de: "Leistungsboni und individuelle Anreize", mk: "Бонуси за перформанс и прилагодени стимулации" },
      { sq: "Llogaritje automatike bazuar në orë prezence", en: "Auto calculation based on attendance hours", es: "Cálculo automático basado en horas de asistencia", de: "Automatische Berechnung basierend auf Anwesenheitsstunden", mk: "Автоматска пресметка базирана на часови на присуство" },
      { sq: "Raporte pagash dhe eksport payroll", en: "Payroll reports and payroll export", es: "Informes de nómina y exportación de nómina", de: "Gehaltsabrechnungsberichte und Gehaltsexport", mk: "Извештаи за плати и извоз на плати" },
    ],
    href: "/features/payroll",
    stat: { value: "100%", label: { sq: "saktësi llogaritje page", en: "payroll accuracy", es: "precisión de nómina", de: "Gehaltsabrechnungsgenauigkeit", mk: "точност на пресметка на плати" } },
  },
  {
    id: "leaves",
    icon: CalendarX,
    gradient: "from-pink-500 to-rose-600",
    lightText: "text-pink-600",
    border: "border-pink-100",
    dotColor: "bg-pink-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH y equipo", de: "HR & Team", mk: "ЧР и тим" },
    title: { sq: "Menaxhim Lejesh", en: "Leave Management", es: "Gestión de permisos", de: "Urlaubsmanagement", mk: "Управување со отсуства" },
    tagline: { sq: "Pushime të organizuara, aprovim i shpejtë", en: "Organised leave, fast approval", es: "Permisos organizados, aprobación rápida", de: "Organisierter Urlaub, schnelle Genehmigung", mk: "Организирани отсуства, брзо одобрување" },
    desc: {
      sq: "Menaxhoni të gjitha llojet e pushimeve, kërkesat dhe balancin e ditëve të mbetura. Punonjësit kërkojnë pushim nga telefoni, menaxherët e aprovojnë me një klikim.",
      en: "Manage all types of leave, requests and remaining day balances. Employees request leave from their phone, managers approve with one click.",
      es: "Gestione todos los tipos de permisos, solicitudes y saldos de días restantes. Los empleados solicitan permisos desde su teléfono, los gerentes aprueban con un clic.",
      de: "Verwalten Sie alle Arten von Urlaub, Anträge und verbleibende Tagesbilanzen. Mitarbeiter beantragen Urlaub vom Telefon, Manager genehmigen mit einem Klick.",
      mk: "Управувајте со сите видови отсуства, барања и салда на преостанати денови. Вработените бараат отсуство од телефонот, менаџерите одобруваат со еден клик."
    },
    benefits: [
      { sq: "Të gjitha llojet: vjetore, sëmundje, lindje, pa pagesë", en: "All types: annual, sick, maternity, unpaid", es: "Todos los tipos: anual, enfermedad, maternidad, sin pago", de: "Alle Arten: Jahresurlaub, Krankheit, Mutterschaft, unbezahlt", mk: "Сите видови: годишен, боледување, породилно, неплатено" },
      { sq: "Kërkesë pushimi nga telefoni — aprovim direkt", en: "Leave request from phone — direct approval", es: "Solicitud de permiso desde teléfono — aprobación directa", de: "Urlaubsantrag vom Telefon — direkte Genehmigung", mk: "Барање за отсуство од телефон — директно одобрување" },
      { sq: "Ditët e mbetura, dieta e pushimit dhe afati i skadimit", en: "Remaining days, leave allowance and expiry date", es: "Días restantes, asignación de permisos y fecha de vencimiento", de: "Verbleibende Tage, Urlaubsanspruch und Ablaufdatum", mk: "Преостанати денови, дозволен одмор и рок на истекување" },
      { sq: "Kalendar vizual i pushimeve të ekipit", en: "Visual calendar of team leave", es: "Calendario visual de permisos del equipo", de: "Visueller Kalender des Teamurlaubs", mk: "Визуелен календар на тимски отсуства" },
      { sq: "Raporte dhe eksport të pushimeve mujore", en: "Monthly leave reports and export", es: "Informes mensuales de permisos y exportación", de: "Monatliche Urlaubsberichte und Export", mk: "Месечни извештаи за отсуства и извоз" },
      { sq: "Historiku i plotë i pushimeve", en: "Full leave history", es: "Historial completo de permisos", de: "Vollständige Urlaubshistorie", mk: "Целосна историја на отсуства" },
    ],
    href: "/features/leaves",
    stat: { value: "0", label: { sq: "kërkesa pushimi të humbura", en: "lost leave requests", es: "solicitudes de permiso perdidas", de: "verlorene Urlaubsanträge", mk: "изгубени барања за отсуство" } },
  },
  {
    id: "training",
    icon: GraduationCap,
    gradient: "from-teal-500 to-emerald-600",
    lightText: "text-teal-600",
    border: "border-teal-100",
    dotColor: "bg-teal-500",
    category: "hr" as Category,
    tag: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH y equipo", de: "HR & Team", mk: "ЧР и тим" },
    title: { sq: "Trajnim & Kuize", en: "Training & Quizzes", es: "Capacitación y cuestionarios", de: "Schulung & Quiz", mk: "Обука и квизови" },
    tagline: { sq: "Trajnoni ekipin tuaj drejtpërdrejt në platformë", en: "Train your team directly in the platform", es: "Capacite a su equipo directamente en la plataforma", de: "Schulen Sie Ihr Team direkt auf der Plattform", mk: "Обучете го вашиот тим директно на платформата" },
    desc: {
      sq: "Krijoni programe trajnimi me kuize, testime dhe certifikata dixhitale për çdo punonjës. Gjurmoni progresin e trajnimit dhe siguroni që ekipi juaj është gjithmonë i përgatitur.",
      en: "Create training programs with quizzes, tests and digital certificates for each employee. Track training progress and ensure your team is always prepared.",
      es: "Cree programas de capacitación con cuestionarios, pruebas y certificados digitales para cada empleado. Rastree el progreso de la capacitación y asegúrese de que su equipo esté siempre preparado.",
      de: "Erstellen Sie Schulungsprogramme mit Quiz, Tests und digitalen Zertifikaten für jeden Mitarbeiter. Verfolgen Sie den Schulungsfortschritt und stellen Sie sicher, dass Ihr Team immer vorbereitet ist.",
      mk: "Креирајте програми за обука со квизови, тестови и дигитални сертификати за секој вработен. Следете го напредокот на обуката и обезбедете дека вашиот тим е секогаш подготвен."
    },
    benefits: [
      { sq: "Kuize dhe testime interaktive", en: "Interactive quizzes and tests", es: "Cuestionarios y pruebas interactivas", de: "Interaktive Quiz und Tests", mk: "Интерактивни квизови и тестови" },
      { sq: "Certifikata dixhitale pas kalimit të provimit", en: "Digital certificates after passing the test", es: "Certificados digitales tras aprobar el examen", de: "Digitale Zertifikate nach Bestehen des Tests", mk: "Дигитални сертификати по положување на тестот" },
      { sq: "Programe trajnimi me module të ndryshme", en: "Training programs with different modules", es: "Programas de capacitación con diferentes módulos", de: "Schulungsprogramme mit verschiedenen Modulen", mk: "Програми за обука со различни модули" },
      { sq: "Gjurmim i progresit të çdo punonjësi", en: "Progress tracking for each employee", es: "Seguimiento del progreso de cada empleado", de: "Fortschrittsverfolgung für jeden Mitarbeiter", mk: "Следење на напредокот на секој вработен" },
      { sq: "Material trajnimi: video, PDF, artikuj", en: "Training materials: video, PDF, articles", es: "Materiales de capacitación: video, PDF, artículos", de: "Schulungsmaterialien: Video, PDF, Artikel", mk: "Материјали за обука: видео, PDF, статии" },
      { sq: "Raporte detajuara të trajnimit të ekipit", en: "Detailed team training reports", es: "Informes detallados de capacitación del equipo", de: "Detaillierte Team-Schulungsberichte", mk: "Детални извештаи за обука на тимот" },
    ],
    href: "/features/training",
    stat: { value: "100%", label: { sq: "ekip i trajnuar", en: "trained team", es: "equipo capacitado", de: "geschultes Team", mk: "обучен тим" } },
  },
];

const categoryLabels: Record<Category, ML> = {
  all:        { sq: "Të gjitha",  en: "All", es: "Todos", de: "Alle", mk: "Сите" },
  finance:    { sq: "Financë",    en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
  operations: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
  fleet:      { sq: "Flotë Makinash", en: "Fleet", es: "Flota", de: "Flotte", mk: "Флота" },
  hr:         { sq: "Burimet Njerëzore", en: "Human Resources", es: "Recursos humanos", de: "Personalwesen", mk: "Човечки ресурси" },
};

const categoryIcons: Record<Category, JSX.Element> = {
  all:        <span>✦</span>,
  finance:    <span>€</span>,
  operations: <Package className="h-3.5 w-3.5" />,
  fleet:      <Car className="h-3.5 w-3.5" />,
  hr:         <GraduationCap className="h-3.5 w-3.5" />,
};

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

function pick(lang: string, obj: { sq: string; en: string; es: string; de: string; mk: string }): string {
  switch(lang) { case 'sq': return obj.sq; case 'es': return obj.es; case 'de': return obj.de; case 'mk': return obj.mk; default: return obj.en; }
}

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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About", "Sobre nosotros", "Über uns", "За нас", "À propos", "Sobre", "Chi siamo")}</Link>
              <Link href="/features" className="text-sm font-semibold text-indigo-600">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <button onClick={() => go("/subscribe")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</button>
              <button onClick={() => go("/contact")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</button>
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
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setShowMobileMenu(false)}>{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About", "Sobre nosotros", "Über uns", "За нас", "À propos", "Sobre", "Chi siamo")}</Link>
            <Link href="/features" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
            <button onClick={() => { setShowMobileMenu(false); go("/subscribe"); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</button>
            <button onClick={() => { setShowMobileMenu(false); go("/contact"); }} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => { setShowMobileMenu(false); go("/trial"); }} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial", "Prueba Gratis", "Kostenlose Testversion", "Бесплатна проба", "Essai gratuit", "Período de teste gratuito", "Prova gratuita")}</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-fade inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "16 module të integruara plotësisht", "16 fully integrated modules", "16 módulos totalmente integrados", "16 vollständig integrierte Module", "16 целосно интегрирани модули", "16 modules entièrement intégrés", "16 módulos totalmente integrados", "16 moduli completamente integrati")}
          </div>
          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 leading-[1.1]">
            {sq(lang,
              <>Të gjitha veçoritë<br /><span className="text-indigo-600">në një vend</span></>,
              <>Every feature<br /><span className="text-indigo-600">in one place</span></>,
              <>Todas las funciones<br /><span className="text-indigo-600">en un solo lugar</span></>,
              <>Alle Funktionen<br /><span className="text-indigo-600">an einem Ort</span></>,
              <>Сите функции<br /><span className="text-indigo-600">на едно место</span></>
            )}
          </h1>
          <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {sq(lang,
              "Nga oferta, faturimi dhe shpenzimet, tek mirëmbajtja, menaxhimi i flotës dhe burimet njerëzore — Clientlly zëvendëson çdo aplikacion tjetër që biznesi juaj po përdor sot.",
              "From quotes, invoicing and expenses, to maintenance, fleet management and human resources — Clientlly replaces every other app your business uses today.",
              "Desde cotizaciones, facturación y gastos, hasta mantenimiento, gestión de flota y recursos humanos — Clientlly reemplaza cada otra aplicación que su empresa usa hoy.",
              "Von Angeboten, Rechnungsstellung und Ausgaben bis hin zu Wartung, Flottenmanagement und Personalwesen — Clientlly ersetzt jede andere App, die Ihr Unternehmen heute nutzt.",
              "Од понуди, фактурирање и трошоци, до одржување, управување со флота и човечки ресурси — Clientlly ја заменува секоја друга апликација што вашиот бизнис ја користи денес."
            )}
          </p>

          {/* Quick stats */}
          <div className="anim-rise anim-d3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-10">
            {[
              { v: "16", l: sq(lang, "Module", "Modules", "Módulos", "Module", "Модули", "Modules", "Módulos", "Moduli") },
              { v: "€0", l: sq(lang, "Setup", "Setup", "Configuración", "Einrichtung", "Поставување") },
              { v: "14", l: sq(lang, "Ditë Falas", "Days Free", "Días Gratis", "Tage Gratis", "Бесплатни дена") },
              { v: "200+", l: sq(lang, "Biznese", "Businesses", "Negocios", "Unternehmen", "Бизниси") },
            ].map(({ v, l }) => (
              <div key={String(l)} className="text-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="text-xl font-extrabold text-indigo-600">{v}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>

          <div className="anim-rise anim-d4 flex flex-wrap justify-center gap-3 mt-2">
            <button
              onClick={() => { window.location.href = "/compare-features"; }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">📊</span>
                {sq(lang, "Krahaso të gjitha Planet", "Compare all Plans", "Comparar todos los planes", "Alle Pläne vergleichen", "Споредете ги сите планови")}
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                <h3 className="font-bold text-gray-900">{sq(lang, "Pa Clientlly", "Without Clientlly", "Sin Clientlly", "Ohne Clientlly", "Без Clientlly")}</h3>
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
                ] : lang === 'es' ? [
                  "10+ aplicaciones diferentes, ninguna conectada",
                  "Horas perdidas con Excel y hojas de cálculo",
                  "Facturas olvidadas = dinero perdido",
                  "Vehículos sin servicio — vencimiento de seguro desconocido",
                  "Check-in con tarjeta o registro en papel",
                  "Cotizaciones por correo — nadie las rastrea",
                  "Sin visión clara de finanzas o flota",
                ] : lang === 'de' ? [
                  "10+ verschiedene Apps, keine verbunden",
                  "Stunden mit Excel und Tabellen verschwendet",
                  "Vergessene Rechnungen = verlorenes Geld",
                  "Fahrzeuge ohne Service — Versicherungsablauf unbekannt",
                  "Check-in mit Karte oder Papierregister",
                  "Angebote per E-Mail — niemand verfolgt sie",
                  "Kein klares Bild von Finanzen oder Flotte",
                ] : lang === 'mk' ? [
                  "10+ различни апликации, ниту една поврзана",
                  "Часови потрошени на Excel и табели",
                  "Заборавени фактури = изгубени пари",
                  "Возила без сервис — непознато истекување на осигурување",
                  "Чек-ин со картичка или хартиен регистар",
                  "Понуди по е-пошта — никој не ги следи",
                  "Нема јасна слика за финансиите или флотата",
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
                <h3 className="font-bold text-gray-900">{sq(lang, "Me Clientlly", "With Clientlly", "Con Clientlly", "Mit Clientlly", "Со Clientlly")}</h3>
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
                ] : lang === 'es' ? [
                  "1 plataforma — 12 módulos, todos conectados",
                  "15+ horas ahorradas cada semana",
                  "Facturación automática — nada se olvida",
                  "Alertas automáticas: servicio, seguro, kasko, matrículas",
                  "Check-in GPS desde teléfono — nada en la oficina",
                  "Cotización → Factura en 1 clic, todo rastreado",
                  "Panel completo: finanzas, flota, equipo, clientes",
                ] : lang === 'de' ? [
                  "1 Plattform — 12 Module, alle verbunden",
                  "15+ Stunden pro Woche gespart",
                  "Automatische Rechnungsstellung — nichts vergessen",
                  "Auto-Warnungen: Service, Versicherung, Kasko, Kennzeichen",
                  "GPS-Check-in vom Telefon — nichts im Büro",
                  "Angebot → Rechnung in 1 Klick, alles verfolgt",
                  "Vollständiges Dashboard: Finanzen, Flotte, Team, Kunden",
                ] : lang === 'mk' ? [
                  "1 платформа — 12 модули, сите поврзани",
                  "15+ заштедени часови секоја недела",
                  "Автоматско фактурирање — ништо не се заборава",
                  "Автоматски аларми: сервис, осигурување, каско, таблици",
                  "GPS чек-ин од телефон — ништо во канцеларија",
                  "Понуда → Фактура со 1 клик, сè се следи",
                  "Целосен панел: финансии, флота, тим, клиенти",
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
                  "Expense registers itself — if the seller uses Clientlly",
                  "El gasto se registra solo — si el vendedor usa Clientlly",
                  "Die Ausgabe registriert sich selbst — wenn der Verkäufer Clientlly nutzt",
                  "Трошокот се регистрира сам — ако продавачот користи Clientlly"
                )}
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                {sq(lang,
                  "Kur shitësi ju dërgon faturën përmes Clientlly, ajo shfaqet direkt në listën tuaj të shpenzimeve. Pa kopjim, pa hyrje manuale — thjesht klikoni Aprovo dhe shpenzimi regjistrohet menjëherë.",
                  "When a seller sends you an invoice through Clientlly, it appears directly in your expense list. No copying, no manual entry — just click Approve and the expense is registered instantly.",
                  "Cuando un vendedor le envía una factura a través de Clientlly, aparece directamente en su lista de gastos. Sin copiar, sin entrada manual — solo haga clic en Aprobar y el gasto se registra al instante.",
                  "Wenn ein Verkäufer Ihnen eine Rechnung über Clientlly sendet, erscheint sie direkt in Ihrer Ausgabenliste. Kein Kopieren, keine manuelle Eingabe — klicken Sie einfach auf Genehmigen und die Ausgabe wird sofort registriert.",
                  "Кога продавачот ви испраќа фактура преку Clientlly, таа се појавува директно во вашата листа на трошоци. Без копирање, без рачно внесување — само кликнете Одобри и трошокот се регистрира моментално."
                )}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3 text-sm font-semibold">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><FileText className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Faturë (shitësi)", "Invoice (seller)", "Factura (vendedor)", "Rechnung (Verkäufer)", "Фактура (продавач)")}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-300" />
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><CheckCircle className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Aprovo", "Approve", "Aprobar", "Genehmigen", "Одобри")}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-300" />
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-emerald-500/80 rounded-xl flex items-center justify-center"><Receipt className="h-5 w-5 text-white" /></div>
                <span className="text-indigo-100 text-xs">{sq(lang, "Shpenzim (blersit)", "Expense (buyer)", "Gasto (comprador)", "Ausgabe (Käufer)", "Трошок (купувач)")}</span>
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
              {sq(lang, "Nënshkrimi Dixhital & Gjurmimi i Dokumenteve", "Digital Signature & Document Tracking", "Firma digital y seguimiento de documentos", "Digitale Unterschrift & Dokumentenverfolgung", "Дигитален потпис и следење на документи")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {sq(lang,
                <>Dërgoni, gjurmoni dhe nënshkruani<br /><span className="text-indigo-600">pa asnjë printer</span></>,
                <>Send, track and sign<br /><span className="text-indigo-600">without a single printer</span></>,
                <>Envíe, rastree y firme<br /><span className="text-indigo-600">sin ninguna impresora</span></>,
                <>Senden, verfolgen und unterschreiben<br /><span className="text-indigo-600">ohne einen einzigen Drucker</span></>,
                <>Испратете, следете и потпишете<br /><span className="text-indigo-600">без ниту еден печатач</span></>
              )}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              {sq(lang,
                "Çdo faturë dhe ofertë dërgohet elektronikisht. Ju shikoni çdo hap — kur u dërgua, kur u hap, dhe kur u nënshkrua.",
                "Every invoice and quote is sent electronically. You see every step — when it was sent, when it was opened, and when it was signed.",
                "Cada factura y cotización se envía electrónicamente. Usted ve cada paso — cuándo se envió, cuándo se abrió y cuándo se firmó.",
                "Jede Rechnung und jedes Angebot wird elektronisch gesendet. Sie sehen jeden Schritt — wann es gesendet, geöffnet und unterschrieben wurde.",
                "Секоја фактура и понуда се испраќа електронски. Вие го гледате секој чекор — кога е испратено, кога е отворено и кога е потпишано."
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
                title: { sq: "Krijoni & Dërgoni", en: "Create & Send", es: "Crear y enviar", de: "Erstellen & Senden", mk: "Креирајте и испратете" },
                desc: { sq: "Zgjidhni shabllonin, plotësoni detajet dhe dërgoni me email me 1 klikim.", en: "Choose a template, fill in the details and send by email in 1 click.", es: "Elija una plantilla, complete los detalles y envíe por correo en 1 clic.", de: "Wählen Sie eine Vorlage, füllen Sie die Details aus und senden Sie per E-Mail in 1 Klick.", mk: "Изберете шаблон, пополнете ги деталите и испратете по е-пошта со 1 клик." },
              },
              {
                icon: Eye,
                color: "bg-amber-100 text-amber-600",
                step: "2",
                title: { sq: "Gjurmoni Hapjen", en: "Track the Opening", es: "Rastree la apertura", de: "Öffnung verfolgen", mk: "Следете го отворањето" },
                desc: { sq: "Merrni njoftim të menjëhershëm kur klienti e hap emailin dhe faturën/ofertën.", en: "Get an instant notification when the client opens the email and document.", es: "Reciba una notificación instantánea cuando el cliente abra el correo y documento.", de: "Erhalten Sie eine sofortige Benachrichtigung wenn der Kunde die E-Mail und das Dokument öffnet.", mk: "Добијте моментално известување кога клиентот ги отвора е-поштата и документот." },
              },
              {
                icon: PenLine,
                color: "bg-emerald-100 text-emerald-600",
                step: "3",
                title: { sq: "Nënshkrim Dixhital", en: "Digital Signature", es: "Firma digital", de: "Digitale Unterschrift", mk: "Дигитален потпис" },
                desc: { sq: "Klienti nënshkruan direkt nga telefoni ose kompjuteri. Ju nënshkruani gjithashtu.", en: "Client signs directly from phone or computer. You sign too.", es: "El cliente firma directamente desde teléfono u ordenador. Usted también firma.", de: "Kunde unterschreibt direkt vom Telefon oder Computer. Sie unterschreiben auch.", mk: "Клиентот потпишува директно од телефон или компјутер. Вие исто така потпишувате." },
              },
              {
                icon: CheckCircle,
                color: "bg-green-100 text-green-600",
                step: "4",
                title: { sq: "Finalizuar & Arkivuar", en: "Finalised & Archived", es: "Finalizado y archivado", de: "Abgeschlossen & Archiviert", mk: "Финализирано и архивирано" },
                desc: { sq: "Dokumenti i plotë ruhet automatikisht. Oferta bëhet faturë me 1 klikim.", en: "Complete document saved automatically. Quote becomes invoice in 1 click.", es: "Documento completo guardado automáticamente. La cotización se convierte en factura en 1 clic.", de: "Vollständiges Dokument automatisch gespeichert. Angebot wird Rechnung in 1 Klick.", mk: "Целосниот документ се зачувува автоматски. Понудата станува фактура со 1 клик." },
              },
            ].map(({ icon: Icon, color, step, title, desc }, i) => (
              <div key={i} className="relative p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-indigo-100 hover:bg-white transition-all duration-300 group">
                <div className="absolute -top-2.5 -left-2.5 w-6 h-6 bg-gray-900 text-white text-xs font-extrabold rounded-full flex items-center justify-center">
                  {step}
                </div>
                <div className={`inline-flex p-2.5 rounded-xl ${color} mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1.5">{pick(lang, title)}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{pick(lang, desc)}</p>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-7">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  {sq(lang, "Çfarë shihni JU (kompania)", "What YOU see (company side)", "Lo que VE USTED (lado empresa)", "Was SIE sehen (Firmenseite)", "Што гледате ВИЕ (страна на компанијата)")}
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'sq' ? [
                    "✓ Dërguar — 14 Prill 2025, 10:32",
                    "✓ Hapur — 14 Prill 2025, 11:15 (3 herë)",
                    "✓ Nënshkruar nga klienti — 14 Prill 2025, 11:22",
                    "✓ Nënshkruar nga kompania — 14 Prill 2025, 11:30",
                    "✓ Fatura e gjeneruar automatikisht",
                  ] : lang === 'es' ? [
                    "✓ Enviado — 14 Abril 2025, 10:32",
                    "✓ Abierto — 14 Abril 2025, 11:15 (3 veces)",
                    "✓ Firmado por el cliente — 14 Abril 2025, 11:22",
                    "✓ Firmado por la empresa — 14 Abril 2025, 11:30",
                    "✓ Factura generada automáticamente",
                  ] : lang === 'de' ? [
                    "✓ Gesendet — 14. April 2025, 10:32",
                    "✓ Geöffnet — 14. April 2025, 11:15 (3 Mal)",
                    "✓ Vom Kunden unterschrieben — 14. April 2025, 11:22",
                    "✓ Von der Firma unterschrieben — 14. April 2025, 11:30",
                    "✓ Rechnung automatisch generiert",
                  ] : lang === 'mk' ? [
                    "✓ Испратено — 14 Април 2025, 10:32",
                    "✓ Отворено — 14 Април 2025, 11:15 (3 пати)",
                    "✓ Потпишано од клиентот — 14 Април 2025, 11:22",
                    "✓ Потпишано од компанијата — 14 Април 2025, 11:30",
                    "✓ Фактура генерирана автоматски",
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
                  {sq(lang, "Çfarë sheh KLIENTI (nga email-i)", "What the CLIENT sees (from email)", "Lo que ve el CLIENTE (desde el correo)", "Was der KUNDE sieht (aus der E-Mail)", "Што гледа КЛИЕНТОТ (од е-пошта)")}
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'sq' ? [
                    "📧 Merr email me PDF të ofertës/faturës",
                    "🔗 Klikon linkun — hapet direkt në browser",
                    "📱 Lexon dokumentin nga telefoni ose PC",
                    "✍️ Nënshkruan me gisht ose mouse",
                    "✅ Merr konfirmimin dhe kopjen finale",
                  ] : lang === 'es' ? [
                    "📧 Recibe correo con PDF de cotización/factura",
                    "🔗 Hace clic en el enlace — se abre directamente en el navegador",
                    "📱 Lee el documento desde teléfono o PC",
                    "✍️ Firma con el dedo o el ratón",
                    "✅ Recibe confirmación y copia final",
                  ] : lang === 'de' ? [
                    "📧 Erhält E-Mail mit PDF des Angebots/der Rechnung",
                    "🔗 Klickt auf den Link — öffnet sich direkt im Browser",
                    "📱 Liest das Dokument vom Telefon oder PC",
                    "✍️ Unterschreibt mit Finger oder Maus",
                    "✅ Erhält Bestätigung und finale Kopie",
                  ] : lang === 'mk' ? [
                    "📧 Добива е-пошта со PDF на понудата/фактурата",
                    "🔗 Кликнува на линкот — се отвора директно во прелистувач",
                    "📱 Го чита документот од телефон или PC",
                    "✍️ Потпишува со прст или глувче",
                    "✅ Добива потврда и финална копија",
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
              {sq(lang, "Modulet", "Modules", "Módulos", "Module", "Модули", "Modules", "Módulos", "Moduli")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Eksploroni çdo modul", "Explore every module", "Explore cada módulo", "Erkunden Sie jedes Modul", "Истражете го секој модул")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              {sq(lang,
                "Klikoni një kategori për të parë modulet sipas fushës tuaj të interesit.",
                "Click a category to filter modules by your area of interest.",
                "Haga clic en una categoría para filtrar módulos por su área de interés.",
                "Klicken Sie auf eine Kategorie, um Module nach Ihrem Interessengebiet zu filtern.",
                "Кликнете на категорија за да ги филтрирате модулите по вашата област на интерес."
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
                  {pick(lang, categoryLabels[cat])}
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
                        {pick(lang, tag)}
                      </span>
                      <h3 className="text-xl font-extrabold text-white mb-1">
                        {pick(lang, title)}
                      </h3>
                      <p className="text-white/80 text-sm">{pick(lang, tagline)}</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-white" />
                    <span className="text-white text-xs font-bold">{stat.value} {pick(lang, stat.label)}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{pick(lang, desc)}</p>
                  <ul className="space-y-2 mb-6">
                    {benefits.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor}`}></span>
                        <span className="text-xs text-gray-600">{pick(lang, b)}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => go(href)} className={`inline-flex items-center gap-2 text-sm font-semibold ${lightText} group-hover:gap-3 transition-all duration-200`}>
                    {sq(lang, "Shiko detajet e plota", "See full details", "Ver detalles completos", "Alle Details ansehen", "Видете целосни детали")}
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
              {sq(lang, "Gjithçka e lidhur — automatikisht", "Everything connected — automatically", "Todo conectado — automáticamente", "Alles verbunden — automatisch", "Сè поврзано — автоматски")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              {sq(lang,
                "Modulet komunikojnë mes tyre. Kur shoferi bën check-in, prezenca regjistrohet. Kur oferta aprovohet, bëhet faturë. Kur makina ka servisim, shpenzimet shtohen automatikisht.",
                "Modules talk to each other. When a driver checks in, attendance is logged. When a quote is approved, it becomes an invoice. When a vehicle is serviced, costs are added automatically.",
                "Los módulos se comunican entre sí. Cuando un conductor hace check-in, se registra la asistencia. Cuando una cotización se aprueba, se convierte en factura. Cuando un vehículo se repara, los costos se agregan automáticamente.",
                "Module kommunizieren miteinander. Wenn ein Fahrer eincheckt, wird die Anwesenheit protokolliert. Wenn ein Angebot genehmigt wird, wird es zur Rechnung. Wenn ein Fahrzeug gewartet wird, werden Kosten automatisch hinzugefügt.",
                "Модулите комуницираат меѓу себе. Кога возачот се пријавува, присуството се бележи. Кога понудата е одобрена, станува фактура. Кога возилото се сервисира, трошоците се додаваат автоматски."
              )}
            </p>
          </div>

          {/* Flow diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: ClipboardList, label: sq(lang, "Ofertë", "Quote", "Cotización", "Angebot", "Понуда"), color: "bg-cyan-500" },
              { icon: FileText, label: sq(lang, "Faturë", "Invoice", "Factura", "Rechnung", "Фактура", "Facture", "Fatura", "Fattura"), color: "bg-blue-500", arrow: true },
              { icon: MapPin, label: sq(lang, "Prezencë GPS", "GPS Attendance", "Asistencia GPS", "GPS-Anwesenheit", "GPS присуство"), color: "bg-green-500" },
              { icon: Car, label: sq(lang, "Flotë + Servisim", "Fleet + Service", "Flota + Servicio", "Flotte + Service", "Флота + Сервис"), color: "bg-slate-500" },
              { icon: CalendarDays, label: sq(lang, "Kalendar", "Calendar", "Calendario", "Kalender", "Календар", "Calendrier", "Calendário", "Calendario"), color: "bg-sky-500" },
              { icon: BarChart3, label: sq(lang, "Raport Final", "Final Report", "Informe final", "Abschlussbericht", "Финален извештај"), color: "bg-violet-500" },
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
              { icon: Zap, title: sq(lang, "Sinkronizim i menjëhershëm", "Instant sync", "Sincronización instantánea", "Sofortige Synchronisierung", "Моментална синхронизација") },
              { icon: Shield, title: sq(lang, "Kriptim i plotë", "Full encryption", "Cifrado completo", "Vollständige Verschlüsselung", "Целосна енкрипција") },
              { icon: Globe, title: sq(lang, "Qasje nga çdo pajisje", "Any device access", "Acceso desde cualquier dispositivo", "Zugriff von jedem Gerät", "Пристап од секој уред") },
              { icon: Headphones, title: sq(lang, "Mbështetje 24/7", "Support 24/7", "Soporte 24/7", "Support 24/7", "Поддршка 24/7") },
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
              "Clientlly replaced 8 apps. Now our driver checks in with GPS, client quotes become invoices in 1 click, and we know every cost for every vehicle. We saved over 20 hours a week.",
              "Clientlly reemplazó 8 aplicaciones. Ahora nuestro conductor hace check-in con GPS, las cotizaciones de clientes se convierten en facturas en 1 clic, y conocemos cada costo de cada vehículo. Ahorramos más de 20 horas semanales.",
              "Clientlly hat 8 Apps ersetzt. Jetzt checkt unser Fahrer mit GPS ein, Kundenangebote werden mit 1 Klick zu Rechnungen, und wir kennen jede Kosten für jedes Fahrzeug. Wir sparen über 20 Stunden pro Woche.",
              "Clientlly замени 8 апликации. Сега нашиот возач се пријавува со GPS, понудите на клиентите стануваат фактури со 1 клик, и ние го знаеме секој трошок за секое возило. Заштедивме над 20 часа неделно."
            )}"
          </blockquote>
          <div className="font-bold text-gray-900">Arben Krasniqi</div>
          <div className="text-gray-500 text-sm">{sq(lang, "Drejtor, Transport Krasniqi SH.P.K", "Director, Transport Krasniqi LLC", "Director, Transport Krasniqi S.L.", "Geschäftsführer, Transport Krasniqi GmbH", "Директор, Транспорт Краснички ДОО")}</div>
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
              <>Try all 16 modules<br />free for 14 days</>,
              <>Pruebe los 16 módulos<br />gratis por 14 días</>,
              <>Testen Sie alle 16 Module<br />14 Tage kostenlos</>,
              <>Пробајте ги сите 16 модули<br />бесплатно 14 дена</>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-indigo-200 text-lg mb-10">
            {sq(lang, "Pa kartë kredie. Pa angazhim. Qasje e plotë.", "No credit card. No commitment. Full access.", "Sin tarjeta de crédito. Sin compromiso. Acceso completo.", "Keine Kreditkarte. Keine Verpflichtung. Voller Zugang.", "Без кредитна картичка. Без обврска. Целосен пристап.")}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button onClick={() => go("/trial")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-indigo-700 font-semibold rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба", "Commencer l'essai gratuit", "Iniciar período de teste gratuito", "Inizia la prova gratuita")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/subscribe"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}