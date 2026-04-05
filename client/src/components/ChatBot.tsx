import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle, X, Minimize2, Maximize2, Send, ArrowLeft,
  Bot, User, ChevronRight,
  FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package,
  Clock, Car, Wrench, GraduationCap, CalendarX, Wallet, ClipboardList,
  CalendarDays, Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/i18n';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: string[];
}

type L5 = { sq: string; en: string; es: string; de: string; mk: string };
const pk = (lang: string, t: L5): string => {
  switch (lang) { case 'sq': return t.sq; case 'es': return t.es; case 'de': return t.de; case 'mk': return t.mk; default: return t.en; }
};

const UI = {
  subtitle: { sq: "Asistent Virtual", en: "Virtual Assistant", es: "Asistente Virtual", de: "Virtueller Assistent", mk: "Виртуелен Асистент" },
  needHelp: { sq: "Keni nevojë për ndihmë?", en: "Need help?", es: "Necesita ayuda?", de: "Brauchen Sie Hilfe?", mk: "Ви треба помош?" },
  welcome: {
    sq: "👋 Mirësevini! Jam asistenti virtual i Clientlly. Mund t'ju ndihmoj me informacione rreth platformës sonë me 16 module të integruara. Zgjidhni një temë ose shkruani pyetjen tuaj:",
    en: "👋 Welcome! I'm Clientlly's virtual assistant. I can help you with information about our platform with 16 integrated modules. Choose a topic or type your question:",
    es: "👋 Bienvenido! Soy el asistente virtual de Clientlly. Puedo ayudarle con información sobre nuestra plataforma con 16 módulos integrados. Elija un tema o escriba su pregunta:",
    de: "👋 Willkommen! Ich bin der virtuelle Assistent von Clientlly. Ich kann Ihnen mit Informationen über unsere Plattform mit 16 integrierten Modulen helfen. Wählen Sie ein Thema oder stellen Sie Ihre Frage:",
    mk: "👋 Добредојдовте! Јас сум виртуелниот асистент на Clientlly. Можам да ви помогнам со информации за нашата платформа со 16 интегрирани модули. Изберете тема или напишете го вашето прашање:",
  },
  placeholder: { sq: "Shkruani mesazhin tuaj...", en: "Type your message...", es: "Escriba su mensaje...", de: "Ihre Nachricht...", mk: "Напишете ја вашата порака..." },
  inactivity: {
    sq: "⏳ Duket se nuk keni pyetje të tjera. Biseda do të mbyllet automatikisht. Nëse keni nevojë për ndihmë, na kontaktoni përsëri! 👋",
    en: "⏳ It seems you have no more questions. The chat will close automatically. If you need help, contact us again! 👋",
    es: "⏳ Parece que no tiene más preguntas. El chat se cerrará automáticamente. Si necesita ayuda, contáctenos de nuevo! 👋",
    de: "⏳ Es scheint, Sie haben keine weiteren Fragen. Der Chat wird automatisch geschlossen. Wenn Sie Hilfe brauchen, kontaktieren Sie uns erneut! 👋",
    mk: "⏳ Изгледа дека немате повеќе прашања. Четот ќе се затвори автоматски. Ако ви треба помош, контактирајте не повторно! 👋",
  },
  quickTopics: {
    pricing: { sq: "💰 Çmimet", en: "💰 Pricing", es: "💰 Precios", de: "💰 Preise", mk: "💰 Цени" },
    pricingMsg: { sq: "Sa kushtojnë planet?", en: "How much do the plans cost?", es: "Cuanto cuestan los planes?", de: "Was kosten die Pläne?", mk: "Колку чинат плановите?" },
    modules: { sq: "🚀 Modulet", en: "🚀 Modules", es: "🚀 Módulos", de: "🚀 Module", mk: "🚀 Модули" },
    modulesMsg: { sq: "Çfarë modulesh ofroni?", en: "What modules do you offer?", es: "Que módulos ofrecen?", de: "Welche Module bieten Sie an?", mk: "Кои модули ги нудите?" },
    trial: { sq: "🎉 Prova falas", en: "🎉 Free trial", es: "🎉 Prueba gratis", de: "🎉 Kostenlose Testversion", mk: "🎉 Бесплатна проба" },
    trialMsg: { sq: "Si të filloj provën falas?", en: "How do I start the free trial?", es: "Como inicio la prueba gratuita?", de: "Wie starte ich die kostenlose Testversion?", mk: "Како да ја започнам бесплатната проба?" },
    contact: { sq: "📧 Kontakti", en: "📧 Contact", es: "📧 Contacto", de: "📧 Kontakt", mk: "📧 Контакт" },
    contactMsg: { sq: "Si mund t'ju kontaktoj?", en: "How can I contact you?", es: "Como puedo contactarles?", de: "Wie kann ich Sie kontaktieren?", mk: "Како можам да ве контактирам?" },
  },
};

const moduleInfo: Record<string, { icon: any; reply: L5; keywords: Record<string, string[]> }> = {
  oferta: {
    icon: ClipboardList,
    reply: {
      sq: "📋 Moduli i Ofertave ju lejon të krijoni oferta profesionale për klientët tuaj, t'i konvertoni automatikisht në fatura, të gjurmoni statusin e çdo oferte (dërguar, pranuar, refuzuar), dhe të personalizoni template-t sipas brendit tuaj.",
      en: "📋 The Quotes module lets you create professional quotes for your clients, automatically convert them to invoices, track the status of each quote (sent, accepted, rejected), and customize templates to match your brand.",
      es: "📋 El módulo de Cotizaciones le permite crear cotizaciones profesionales para sus clientes, convertirlas automáticamente en facturas, rastrear el estado de cada cotización (enviada, aceptada, rechazada) y personalizar plantillas según su marca.",
      de: "📋 Das Angebots-Modul ermöglicht es Ihnen, professionelle Angebote für Ihre Kunden zu erstellen, sie automatisch in Rechnungen umzuwandeln, den Status jedes Angebots zu verfolgen (gesendet, akzeptiert, abgelehnt) und Vorlagen nach Ihrem Branding anzupassen.",
      mk: "📋 Модулот за Понуди ви овозможува да креирате професионални понуди за вашите клиенти, автоматски да ги конвертирате во фактури, да го следите статусот на секоја понуда (испратена, прифатена, одбиена) и да ги прилагодите шаблоните според вашиот бренд.",
    },
    keywords: { sq: ['ofert', 'kuotim', 'propozim'], en: ['quote', 'offer', 'proposal'], es: ['cotizaci', 'oferta', 'propuesta'], de: ['angebot', 'kostenvoranschlag'], mk: ['понуд', 'офер', 'предлог'] },
  },
  faturim: {
    icon: FileText,
    reply: {
      sq: "🧾 Moduli i Faturimit mundëson krijimin e faturave profesionale me një klik, dërgimin automatik me email, gjurmimin e pagesave, dhe raportim të detajuar. Mbështet formate të ndryshme dhe eksportim në PDF.",
      en: "🧾 The Invoicing module enables creating professional invoices with one click, automatic email sending, payment tracking, and detailed reporting. Supports various formats and PDF export.",
      es: "🧾 El módulo de Facturación permite crear facturas profesionales con un clic, envío automático por correo, seguimiento de pagos e informes detallados. Soporta varios formatos y exportación en PDF.",
      de: "🧾 Das Rechnungsmodul ermöglicht die Erstellung professioneller Rechnungen mit einem Klick, automatischen E-Mail-Versand, Zahlungsverfolgung und detaillierte Berichte. Unterstützt verschiedene Formate und PDF-Export.",
      mk: "🧾 Модулот за Фактурирање овозможува креирање професионални фактури со еден клик, автоматско испраќање по е-пошта, следење на плаќања и детални извештаи. Поддржува различни формати и PDF извоз.",
    },
    keywords: { sq: ['fatur', 'invoice', 'faturim'], en: ['invoice', 'invoicing', 'bill'], es: ['factur', 'cobro'], de: ['rechnung', 'faktur'], mk: ['фактур', 'сметк'] },
  },
  shpenzime: {
    icon: Receipt,
    reply: {
      sq: "💰 Moduli i Shpenzimeve ju ndihmon të regjistroni dhe kategorizoni të gjitha shpenzimet e biznesit, të gjurmoni buxhetin, të gjeneroni raporte për tatim, dhe të keni kontroll të plotë mbi financat.",
      en: "💰 The Expense module helps you record and categorize all business expenses, track your budget, generate tax reports, and have complete control over your finances.",
      es: "💰 El módulo de Gastos le ayuda a registrar y categorizar todos los gastos del negocio, hacer seguimiento del presupuesto, generar informes fiscales y tener control total sobre sus finanzas.",
      de: "💰 Das Ausgabenmodul hilft Ihnen, alle Geschäftsausgaben zu erfassen und zu kategorisieren, Ihr Budget zu verfolgen, Steuerberichte zu erstellen und vollständige Kontrolle über Ihre Finanzen zu haben.",
      mk: "💰 Модулот за Трошоци ви помага да ги евидентирате и категоризирате сите деловни трошоци, да го следите буџетот, да генерирате даночни извештаи и да имате целосна контрола над вашите финансии.",
    },
    keywords: { sq: ['shpenzim', 'kosto', 'buxhet'], en: ['expense', 'cost', 'budget'], es: ['gasto', 'costo', 'presupuesto'], de: ['ausgab', 'kosten', 'budget'], mk: ['трошок', 'буџет', 'расход'] },
  },
  borxhe: {
    icon: CreditCard,
    reply: {
      sq: "💳 Moduli i Borxheve ju ndihmon të gjurmoni borxhet e klientëve dhe furnitorëve, të planifikoni pagesat, të dërgoni njoftime automatike për borxhe të vonuara, dhe të keni pasqyrë të plotë të gjendjes financiare.",
      en: "💳 The Debt module helps you track client and vendor debts, plan payments, send automatic notifications for overdue debts, and have a complete overview of your financial status.",
      es: "💳 El módulo de Deudas le ayuda a rastrear las deudas de clientes y proveedores, planificar pagos, enviar notificaciones automáticas por deudas vencidas y tener una visión completa de su estado financiero.",
      de: "💳 Das Schuldenmodul hilft Ihnen, Kunden- und Lieferantenschulden zu verfolgen, Zahlungen zu planen, automatische Benachrichtigungen für überfällige Schulden zu senden und einen vollständigen Überblick über Ihren Finanzstatus zu haben.",
      mk: "💳 Модулот за Долгови ви помага да ги следите долговите на клиентите и добавувачите, да планирате плаќања, да испраќате автоматски известувања за задоцнети долгови и да имате целосен преглед на вашата финансиска состојба.",
    },
    keywords: { sq: ['borxh', 'detyrim', 'vonesë', 'pagesë e vonuar'], en: ['debt', 'overdue', 'owed'], es: ['deuda', 'pendiente', 'vencid'], de: ['schuld', 'überfällig', 'forderung'], mk: ['долг', 'задоцн', 'должи'] },
  },
  raporte: {
    icon: BarChart3,
    reply: {
      sq: "📊 Moduli i Raporteve ofron dashboard me KPI, parashikime financiare, analiza trendi, raporte të personalizuara, dhe eksportim në formate të ndryshme. Mund të gjeneroni raporte ditore, javore, ose mujore.",
      en: "📊 The Reports module offers a KPI dashboard, financial forecasts, trend analysis, custom reports, and export in various formats. You can generate daily, weekly, or monthly reports.",
      es: "📊 El módulo de Informes ofrece un panel de KPI, pronósticos financieros, análisis de tendencias, informes personalizados y exportación en varios formatos. Puede generar informes diarios, semanales o mensuales.",
      de: "📊 Das Berichtsmodul bietet ein KPI-Dashboard, Finanzprognosen, Trendanalysen, benutzerdefinierte Berichte und Export in verschiedenen Formaten. Sie können tägliche, wöchentliche oder monatliche Berichte erstellen.",
      mk: "📊 Модулот за Извештаи нуди KPI контролна табла, финансиски прогнози, анализа на трендови, прилагодени извештаи и извоз во различни формати. Можете да генерирате дневни, неделни или месечни извештаи.",
    },
    keywords: { sq: ['raport', 'analiz', 'statistik', 'dashboard', 'kpi'], en: ['report', 'analytics', 'dashboard', 'kpi', 'statistic'], es: ['informe', 'análisis', 'estadístic', 'panel'], de: ['bericht', 'analys', 'statistik', 'dashboard'], mk: ['извештај', 'аналитик', 'статистик', 'контролн'] },
  },
  kartelaBleres: {
    icon: Wallet,
    reply: {
      sq: "👤 Kartelat e Blerësit ju japin pasqyrë 360° për çdo klient — historiku i blerjeve, borxhet, pagesat, kontaktet, dhe shënimet. Gjithçka në një vend për marrëdhënie më të forta me klientët.",
      en: "👤 Buyer Cards give you a 360° overview of each client — purchase history, debts, payments, contacts, and notes. Everything in one place for stronger customer relationships.",
      es: "👤 Las Fichas de Comprador le brindan una visión 360° de cada cliente — historial de compras, deudas, pagos, contactos y notas. Todo en un solo lugar para relaciones más sólidas con los clientes.",
      de: "👤 Käuferkarten geben Ihnen einen 360°-Überblick über jeden Kunden — Kaufhistorie, Schulden, Zahlungen, Kontakte und Notizen. Alles an einem Ort für stärkere Kundenbeziehungen.",
      mk: "👤 Картичките на Купувачот ви даваат 360° преглед на секој клиент — историја на купувања, долгови, плаќања, контакти и белешки. Сè на едно место за посилни односи со клиентите.",
    },
    keywords: { sq: ['kartel', 'profil klient'], en: ['buyer card', 'client profile', 'customer card'], es: ['ficha', 'perfil cliente', 'tarjeta'], de: ['käuferkart', 'kundenprofil', 'kundenkart'], mk: ['картичк', 'профил клиент'] },
  },
  klient: {
    icon: Users,
    reply: {
      sq: "🤝 Moduli CRM ju ndihmon të menaxhoni marrëdhëniet me klientët, të gjurmoni historikun e komunikimit, të planifikoni ndjekjet, dhe të rrisni kënaqësinë e klientëve me mjete të fuqishme CRM.",
      en: "🤝 The CRM module helps you manage customer relationships, track communication history, plan follow-ups, and increase customer satisfaction with powerful CRM tools.",
      es: "🤝 El módulo CRM le ayuda a gestionar las relaciones con los clientes, rastrear el historial de comunicación, planificar seguimientos y aumentar la satisfacción del cliente con herramientas CRM potentes.",
      de: "🤝 Das CRM-Modul hilft Ihnen, Kundenbeziehungen zu verwalten, die Kommunikationshistorie zu verfolgen, Follow-ups zu planen und die Kundenzufriedenheit mit leistungsstarken CRM-Tools zu steigern.",
      mk: "🤝 CRM модулот ви помага да ги управувате односите со клиентите, да ја следите историјата на комуникација, да планирате следење и да го зголемите задоволството на клиентите со моќни CRM алатки.",
    },
    keywords: { sq: ['klient', 'crm', 'menaxhim klient'], en: ['client', 'crm', 'customer'], es: ['cliente', 'crm', 'gestión cliente'], de: ['kund', 'crm', 'kundenmanag'], mk: ['клиент', 'crm', 'управувањ'] },
  },
  furnitor: {
    icon: Building2,
    reply: {
      sq: "🏢 Moduli i Furnitorëve ju lejon të menaxhoni furnitorët, porositë e blerjes, kontratat, dhe performancën e tyre. Krahasoni çmimet dhe optimizoni zinxhirin e furnizimit.",
      en: "🏢 The Vendor module lets you manage vendors, purchase orders, contracts, and their performance. Compare prices and optimize your supply chain.",
      es: "🏢 El módulo de Proveedores le permite gestionar proveedores, órdenes de compra, contratos y su rendimiento. Compare precios y optimice su cadena de suministro.",
      de: "🏢 Das Lieferantenmodul ermöglicht es Ihnen, Lieferanten, Bestellungen, Verträge und deren Leistung zu verwalten. Vergleichen Sie Preise und optimieren Sie Ihre Lieferkette.",
      mk: "🏢 Модулот за Добавувачи ви овозможува да управувате со добавувачи, нарачки за купување, договори и нивните перформанси. Споредете цени и оптимизирајте го вашиот синџир на снабдување.",
    },
    keywords: { sq: ['furnitor', 'porosi blerje'], en: ['vendor', 'supplier', 'purchase order'], es: ['proveedor', 'orden de compra', 'suministr'], de: ['lieferant', 'bestellung', 'zulieferer'], mk: ['добавувач', 'нарачк', 'снабдувањ'] },
  },
  inventar: {
    icon: Package,
    reply: {
      sq: "📦 Moduli i Inventarit ofron gjurmim në kohë reale të stokut, njoftime automatike për riporositje, menaxhim magazinash, dhe raporte të detajuara për lëvizjet e produkteve.",
      en: "📦 The Inventory module offers real-time stock tracking, automatic reorder notifications, warehouse management, and detailed reports on product movements.",
      es: "📦 El módulo de Inventario ofrece seguimiento de stock en tiempo real, notificaciones automáticas de reabastecimiento, gestión de almacenes e informes detallados sobre movimientos de productos.",
      de: "📦 Das Bestandsmodul bietet Echtzeit-Bestandsverfolgung, automatische Nachbestellbenachrichtigungen, Lagerverwaltung und detaillierte Berichte über Produktbewegungen.",
      mk: "📦 Модулот за Залихи нуди следење на залихи во реално време, автоматски известувања за повторна нарачка, управување со магацини и детални извештаи за движење на производи.",
    },
    keywords: { sq: ['inventar', 'stok', 'magazin', 'produkt'], en: ['inventory', 'stock', 'warehouse', 'product'], es: ['inventario', 'stock', 'almacén', 'producto'], de: ['inventar', 'bestand', 'lager', 'produkt'], mk: ['залих', 'магацин', 'производ', 'инвентар'] },
  },
  flote: {
    icon: Car,
    reply: {
      sq: "🚗 Moduli i Flotës ju ndihmon të gjurmoni automjetet e kompanisë, konsumin e karburantit, itineraret, siguracionet, dhe shpenzimet e çdo automjeti. Kontroll i plotë i flotës.",
      en: "🚗 The Fleet module helps you track company vehicles, fuel consumption, routes, insurance, and expenses for each vehicle. Complete fleet control.",
      es: "🚗 El módulo de Flota le ayuda a rastrear los vehículos de la empresa, consumo de combustible, rutas, seguros y gastos de cada vehículo. Control completo de la flota.",
      de: "🚗 Das Flottenmodul hilft Ihnen, Firmenfahrzeuge, Kraftstoffverbrauch, Routen, Versicherungen und Ausgaben für jedes Fahrzeug zu verfolgen. Vollständige Flottenkontrolle.",
      mk: "🚗 Модулот за Флота ви помага да ги следите возилата на компанијата, потрошувачката на гориво, маршрути, осигурувања и трошоци за секое возило. Целосна контрола на флотата.",
    },
    keywords: { sq: ['flot', 'makina', 'automjet', 'karburant'], en: ['fleet', 'vehicle', 'car', 'fuel'], es: ['flota', 'vehículo', 'combustible', 'auto'], de: ['flott', 'fahrzeug', 'auto', 'kraftstoff'], mk: ['флот', 'возил', 'гориво', 'автомобил'] },
  },
  mirembajtje: {
    icon: Wrench,
    reply: {
      sq: "🔧 Moduli i Mirëmbajtjes planifikon dhe gjurmon mirëmbajtjen e automjeteve — servise të rregullta, riparime, kosto, dhe historik. Njoftime automatike për servise të planifikuara.",
      en: "🔧 The Maintenance module plans and tracks vehicle maintenance — regular services, repairs, costs, and history. Automatic notifications for scheduled services.",
      es: "🔧 El módulo de Mantenimiento planifica y rastrea el mantenimiento de vehículos — servicios regulares, reparaciones, costos e historial. Notificaciones automáticas para servicios programados.",
      de: "🔧 Das Wartungsmodul plant und verfolgt die Fahrzeugwartung — regelmäßige Services, Reparaturen, Kosten und Historie. Automatische Benachrichtigungen für geplante Services.",
      mk: "🔧 Модулот за Одржување планира и го следи одржувањето на возилата — редовни сервиси, поправки, трошоци и историја. Автоматски известувања за закажани сервиси.",
    },
    keywords: { sq: ['mirëmbajtj', 'servis', 'riparim'], en: ['maintenance', 'service', 'repair'], es: ['mantenimiento', 'servicio', 'reparación'], de: ['wartung', 'service', 'reparatur'], mk: ['одржувањ', 'сервис', 'поправк'] },
  },
  prezence: {
    icon: Clock,
    reply: {
      sq: "⏰ Moduli i Prezencës gjurmon orët e punës, mungesat, vonesat, dhe orët shtesë. Raporte të detajuara për çdo punonjës dhe integrim me modulin e pagave.",
      en: "⏰ The Attendance module tracks work hours, absences, delays, and overtime. Detailed reports for each employee and integration with the payroll module.",
      es: "⏰ El módulo de Asistencia registra las horas de trabajo, ausencias, retrasos y horas extra. Informes detallados para cada empleado e integración con el módulo de nómina.",
      de: "⏰ Das Anwesenheitsmodul erfasst Arbeitszeiten, Abwesenheiten, Verspätungen und Überstunden. Detaillierte Berichte für jeden Mitarbeiter und Integration mit dem Gehaltsmodul.",
      mk: "⏰ Модулот за Присуство ги следи работните часови, отсуствата, задоцнувањата и прекувремената. Детални извештаи за секој вработен и интеграција со модулот за плати.",
    },
    keywords: { sq: ['prezenc', 'orar', 'orë pune', 'munges'], en: ['attendance', 'work hours', 'absence', 'clock'], es: ['asistencia', 'horario', 'ausencia', 'reloj'], de: ['anwesenheit', 'arbeitszeit', 'abwesenheit'], mk: ['присуств', 'работн', 'отсуств'] },
  },
  paga: {
    icon: Wallet,
    reply: {
      sq: "💵 Moduli i Pagave automatizon llogaritjen e pagave bazuar në prezencë, zbritjet, bonuset, dhe taksat. Gjeneroni fletëpaga profesionale dhe raporte periodike.",
      en: "💵 The Payroll module automates salary calculation based on attendance, deductions, bonuses, and taxes. Generate professional payslips and periodic reports.",
      es: "💵 El módulo de Nómina automatiza el cálculo de salarios basado en asistencia, deducciones, bonificaciones e impuestos. Genere recibos de nómina profesionales e informes periódicos.",
      de: "💵 Das Gehaltsmodul automatisiert die Gehaltsberechnung basierend auf Anwesenheit, Abzügen, Boni und Steuern. Erstellen Sie professionelle Gehaltsabrechnungen und periodische Berichte.",
      mk: "💵 Модулот за Плати го автоматизира пресметувањето на платите врз основа на присуство, одбитоци, бонуси и даноци. Генерирајте професионални платни листи и периодични извештаи.",
    },
    keywords: { sq: ['pag', 'rrog', 'fletëpag'], en: ['payroll', 'salary', 'wage', 'pay'], es: ['nómina', 'salario', 'sueldo', 'paga'], de: ['gehalt', 'lohn', 'gehaltsabrech'], mk: ['плат', 'заработк'] },
  },
  pushime: {
    icon: CalendarX,
    reply: {
      sq: "🏖️ Moduli i Pushimeve menaxhon kërkesat e pushimeve, lejet mjekësore, ditët e lira, dhe kalendarin e disponueshmërisë. Aprovime automatike dhe gjurmim i balancës.",
      en: "🏖️ The Leave module manages leave requests, sick leave, days off, and availability calendar. Automatic approvals and balance tracking.",
      es: "🏖️ El módulo de Permisos gestiona las solicitudes de permisos, licencias médicas, días libres y calendario de disponibilidad. Aprobaciones automáticas y seguimiento de saldos.",
      de: "🏖️ Das Urlaubsmodul verwaltet Urlaubsanträge, Krankschreibungen, freie Tage und Verfügbarkeitskalender. Automatische Genehmigungen und Saldoverfolgung.",
      mk: "🏖️ Модулот за Отсуства управува со барања за одмор, боледувања, слободни денови и календар на достапност. Автоматски одобрувања и следење на салдо.",
    },
    keywords: { sq: ['pushim', 'leje', 'ditë e lirë', 'vakancë'], en: ['leave', 'vacation', 'day off', 'time off', 'sick'], es: ['permiso', 'vacacion', 'día libre', 'licencia'], de: ['urlaub', 'frei', 'krankschreib', 'abwesend'], mk: ['одмор', 'отсуств', 'слободен ден', 'боледувањ'] },
  },
  trajnim: {
    icon: GraduationCap,
    reply: {
      sq: "🎓 Moduli i Trajnimeve organizon kurse, certifikime, dhe zhvillim profesional për ekipin. Gjurmoni progresin, planifikoni sesione, dhe vlerësoni efektivitetin.",
      en: "🎓 The Training module organizes courses, certifications, and professional development for the team. Track progress, plan sessions, and evaluate effectiveness.",
      es: "🎓 El módulo de Capacitación organiza cursos, certificaciones y desarrollo profesional para el equipo. Rastree el progreso, planifique sesiones y evalúe la efectividad.",
      de: "🎓 Das Schulungsmodul organisiert Kurse, Zertifizierungen und berufliche Weiterbildung für das Team. Verfolgen Sie den Fortschritt, planen Sie Sitzungen und bewerten Sie die Wirksamkeit.",
      mk: "🎓 Модулот за Обуки организира курсеви, сертификации и професионален развој за тимот. Следете го напредокот, планирајте сесии и оценете ја ефективноста.",
    },
    keywords: { sq: ['trajnim', 'kurs', 'certifikim', 'zhvillim'], en: ['training', 'course', 'certification', 'development'], es: ['capacitación', 'curso', 'certificación', 'desarrollo'], de: ['schulung', 'kurs', 'zertifizierung', 'weiterbildung'], mk: ['обук', 'курс', 'сертификац', 'развој'] },
  },
  kalendar: {
    icon: CalendarDays,
    reply: {
      sq: "📅 Kalendari i Biznesit integron takimet, afatet, detyrat, dhe eventet e ekipit në një vend. Njoftime automatike dhe sinkronizim me kalendarë të tjerë.",
      en: "📅 The Business Calendar integrates meetings, deadlines, tasks, and team events in one place. Automatic notifications and syncing with other calendars.",
      es: "📅 El Calendario de Negocios integra reuniones, plazos, tareas y eventos del equipo en un solo lugar. Notificaciones automáticas y sincronización con otros calendarios.",
      de: "📅 Der Geschäftskalender integriert Meetings, Fristen, Aufgaben und Teamevents an einem Ort. Automatische Benachrichtigungen und Synchronisation mit anderen Kalendern.",
      mk: "📅 Деловниот Календар ги интегрира состаноците, роковите, задачите и настаните на тимот на едно место. Автоматски известувања и синхронизација со други календари.",
    },
    keywords: { sq: ['kalendar', 'takim', 'orar', 'event', 'afat'], en: ['calendar', 'meeting', 'schedule', 'event', 'deadline'], es: ['calendario', 'reunión', 'horario', 'evento', 'plazo'], de: ['kalender', 'meeting', 'termin', 'event', 'frist'], mk: ['календар', 'состанок', 'распоред', 'настан', 'рок'] },
  },
};

const generalResponses: { keywords: Record<string, string[]>; reply: L5; quickReplies?: L5[] }[] = [
  {
    keywords: {
      sq: ['çmim', 'kosto', 'plan', 'sa kushton', 'paketë', 'tarif'],
      en: ['price', 'cost', 'plan', 'how much', 'package', 'tariff', 'pricing'],
      es: ['precio', 'costo', 'plan', 'cuanto cuesta', 'paquete', 'tarifa'],
      de: ['preis', 'kosten', 'plan', 'was kostet', 'paket', 'tarif'],
      mk: ['цена', 'план', 'колку чини', 'пакет', 'тариф'],
    },
    reply: {
      sq: "💰 Planet tona janë:\n\n• Starter — €25/muaj (1 përdorues, fatura pa limit)\n• Professional — €35/muaj (deri në 5 përdorues, fatura pa limit)\n• Enterprise — €50/muaj (deri në 20 përdorues, fatura pa limit)\n\nTë gjitha planet përfshijnë të 16 modulet. Çmimet vjetore kanë 15% zbritje!",
      en: "💰 Our plans are:\n\n• Starter — €25/month (1 user, unlimited invoices)\n• Professional — €35/month (up to 5 users, unlimited invoices)\n• Enterprise — €50/month (up to 20 users, unlimited invoices)\n\nAll plans include all 16 modules. Annual pricing has a 15% discount!",
      es: "💰 Nuestros planes son:\n\n• Starter — €25/mes (1 usuario, facturas ilimitadas)\n• Professional — €35/mes (hasta 5 usuarios, facturas ilimitadas)\n• Enterprise — €50/mes (hasta 20 usuarios, facturas ilimitadas)\n\nTodos los planes incluyen los 16 módulos. Los precios anuales tienen un 15% de descuento!",
      de: "💰 Unsere Pläne sind:\n\n• Starter — €25/Monat (1 Benutzer, unbegrenzte Rechnungen)\n• Professional — €35/Monat (bis zu 5 Benutzer, unbegrenzte Rechnungen)\n• Enterprise — €50/Monat (bis zu 20 Benutzer, unbegrenzte Rechnungen)\n\nAlle Pläne enthalten alle 16 Module. Jährliche Preise haben 15% Rabatt!",
      mk: "💰 Нашите планови се:\n\n• Starter — €25/месец (1 корисник, неограничени фактури)\n• Professional — €35/месец (до 5 корисници, неограничени фактури)\n• Enterprise — €50/месец (до 20 корисници, неограничени фактури)\n\nСите планови ги вклучуваат сите 16 модули. Годишните цени имаат 15% попуст!",
    },
    quickReplies: [
      { sq: "Cili plan më përshtatet?", en: "Which plan fits me?", es: "Cual plan me conviene?", de: "Welcher Plan passt zu mir?", mk: "Кој план ми одговара?" },
      { sq: "A ka zbritje?", en: "Any discounts?", es: "Hay descuentos?", de: "Gibt es Rabatte?", mk: "Има ли попусти?" },
    ],
  },
  {
    keywords: {
      sq: ['cili plan', 'më përshtatet', 'rekomand', 'sugjer'],
      en: ['which plan', 'recommend', 'suggest', 'best plan', 'fits me'],
      es: ['cual plan', 'recomiend', 'sugier', 'mejor plan', 'me conviene'],
      de: ['welcher plan', 'empfehl', 'bester plan', 'passt zu mir'],
      mk: ['кој план', 'препорачу', 'најдобар план', 'ми одговара'],
    },
    reply: {
      sq: "🎯 Ja si të zgjidhni planin e duhur:\n\n• Starter (€25/muaj) — Ideal për biznese të vogla me 1 punonjës, fatura pa limit\n• Professional (€35/muaj) — Për biznese në rritje me deri në 5 punonjës, fatura pa limit\n• Enterprise (€50/muaj) — Për kompani më të mëdha me deri në 20 përdorues, fatura pa limit\n\nTë gjitha planet përfshijnë 16 module. Nëse nuk jeni të sigurt, filloni me provën falas 14-ditore!",
      en: "🎯 Here's how to choose the right plan:\n\n• Starter (€25/month) — Ideal for small businesses with 1 user, unlimited invoices\n• Professional (€35/month) — For growing businesses with up to 5 users, unlimited invoices\n• Enterprise (€50/month) — For larger companies with up to 20 users, unlimited invoices\n\nAll plans include 16 modules. If you're not sure, start with the 14-day free trial!",
      es: "🎯 Así puede elegir el plan correcto:\n\n• Starter (€25/mes) — Ideal para negocios pequeños con 1 usuario, facturas ilimitadas\n• Professional (€35/mes) — Para negocios en crecimiento con hasta 5 usuarios, facturas ilimitadas\n• Enterprise (€50/mes) — Para empresas más grandes con hasta 20 usuarios, facturas ilimitadas\n\nTodos los planes incluyen 16 módulos. Si no está seguro, comience con la prueba gratuita de 14 días!",
      de: "🎯 So wählen Sie den richtigen Plan:\n\n• Starter (€25/Monat) — Ideal für kleine Unternehmen mit 1 Benutzer, unbegrenzte Rechnungen\n• Professional (€35/Monat) — Für wachsende Unternehmen mit bis zu 5 Benutzern, unbegrenzte Rechnungen\n• Enterprise (€50/Monat) — Für größere Unternehmen mit bis zu 20 Benutzern, unbegrenzte Rechnungen\n\nAlle Pläne enthalten 16 Module. Wenn Sie unsicher sind, starten Sie mit der 14-tägigen kostenlosen Testversion!",
      mk: "🎯 Еве како да го изберете вистинскиот план:\n\n• Starter (€25/месец) — Идеален за мали бизниси со 1 корисник, неограничени фактури\n• Professional (€35/месец) — За растечки бизниси со до 5 корисници, неограничени фактури\n• Enterprise (€50/месец) — За поголеми компании со до 20 корисници, неограничени фактури\n\nСите планови вклучуваат 16 модули. Ако не сте сигурни, започнете со 14-дневниот бесплатен пробен период!",
    },
    quickReplies: [
      { sq: "Fillo provën falas", en: "Start free trial", es: "Iniciar prueba gratis", de: "Kostenlose Testversion starten", mk: "Започни бесплатна проба" },
      { sq: "Sa kushton vjetori?", en: "Annual pricing?", es: "Precio anual?", de: "Jahrespreis?", mk: "Годишна цена?" },
    ],
  },
  {
    keywords: {
      sq: ['zbritj', 'ulje', 'ofertë speciale', 'promocion'],
      en: ['discount', 'offer', 'promotion', 'deal', 'sale'],
      es: ['descuento', 'oferta', 'promoción', 'rebaja'],
      de: ['rabatt', 'angebot', 'aktion', 'sonderangebot'],
      mk: ['попуст', 'понуда', 'промоциј', 'намалувањ'],
    },
    reply: {
      sq: "🏷️ Po! Ofrojmë zbritje 15% për pagesa vjetore:\n\n• Starter: €300/vit → €255/vit (kurseni €45)\n• Professional: €420/vit → €357/vit (kurseni €63)\n• Enterprise: €600/vit → €510/vit (kurseni €90)\n\nMigrimi i të dhënave është plotësisht FALAS!",
      en: "🏷️ Yes! We offer a 15% discount for annual payments:\n\n• Starter: €300/year → €255/year (save €45)\n• Professional: €420/year → €357/year (save €63)\n• Enterprise: €600/year → €510/year (save €90)\n\nData migration is completely FREE!",
      es: "🏷️ Sí! Ofrecemos un 15% de descuento para pagos anuales:\n\n• Starter: €300/año → €255/año (ahorre €45)\n• Professional: €420/año → €357/año (ahorre €63)\n• Enterprise: €600/año → €510/año (ahorre €90)\n\nLa migración de datos es completamente GRATIS!",
      de: "🏷️ Ja! Wir bieten 15% Rabatt für jährliche Zahlung:\n\n• Starter: €300/Jahr → €255/Jahr (sparen Sie €45)\n• Professional: €420/Jahr → €357/Jahr (sparen Sie €63)\n• Enterprise: €600/Jahr → €510/Jahr (sparen Sie €90)\n\nDatenmigration ist komplett KOSTENLOS!",
      mk: "🏷️ Да! Нудиме 15% попуст за годишно плаќање:\n\n• Starter: €300/год → €255/год (заштедете €45)\n• Professional: €420/год → €357/год (заштедете €63)\n• Enterprise: €600/год → €510/год (заштедете €90)\n\nМиграцијата на податоци е целосно БЕСПЛАТНА!",
    },
    quickReplies: [
      { sq: "Blej tani", en: "Buy now", es: "Comprar ahora", de: "Jetzt kaufen", mk: "Купи сега" },
      { sq: "Fillo provën falas", en: "Start free trial", es: "Iniciar prueba gratis", de: "Kostenlose Testversion starten", mk: "Започни бесплатна проба" },
    ],
  },
  {
    keywords: {
      sq: ['prov', 'trial', 'falas', 'test'],
      en: ['trial', 'free', 'test', 'try'],
      es: ['prueba', 'gratis', 'probar'],
      de: ['test', 'kostenlos', 'probier', 'testen'],
      mk: ['проба', 'бесплатн', 'тест'],
    },
    reply: {
      sq: "🎉 Prova falas 14-ditore përfshin:\n\n✅ Qasje të plotë në të 16 modulet\n✅ Nuk kërkohet kartë kredie\n✅ Të dhënat ruhen pas provës\n✅ Mbështetje e plotë gjatë provës\n✅ Anulim në çdo moment\n\nThjesht regjistrohuni dhe filloni menjëherë!",
      en: "🎉 The 14-day free trial includes:\n\n✅ Full access to all 16 modules\n✅ No credit card required\n✅ Your data is saved after the trial\n✅ Full support during the trial\n✅ Cancel at any time\n\nJust sign up and start right away!",
      es: "🎉 La prueba gratuita de 14 días incluye:\n\n✅ Acceso completo a los 16 módulos\n✅ No se requiere tarjeta de crédito\n✅ Sus datos se guardan después de la prueba\n✅ Soporte completo durante la prueba\n✅ Cancele en cualquier momento\n\nSimplemente regístrese y comience de inmediato!",
      de: "🎉 Die 14-tägige kostenlose Testversion umfasst:\n\n✅ Voller Zugang zu allen 16 Modulen\n✅ Keine Kreditkarte erforderlich\n✅ Ihre Daten werden nach der Testphase gespeichert\n✅ Volle Unterstützung während der Testphase\n✅ Jederzeit kündbar\n\nEinfach registrieren und sofort loslegen!",
      mk: "🎉 14-дневниот бесплатен пробен период вклучува:\n\n✅ Целосен пристап до сите 16 модули\n✅ Не е потребна кредитна картичка\n✅ Вашите податоци се зачувуваат по пробата\n✅ Целосна поддршка за време на пробата\n✅ Откажете во секое време\n\nСамо регистрирајте се и започнете веднаш!",
    },
    quickReplies: [
      { sq: "Çfarë modulesh ka?", en: "What modules are there?", es: "Que módulos hay?", de: "Welche Module gibt es?", mk: "Кои модули ги има?" },
      { sq: "Sa kushton pas provës?", en: "How much after trial?", es: "Cuanto cuesta después?", de: "Was kostet es danach?", mk: "Колку чини по пробата?" },
    ],
  },
  {
    keywords: {
      sq: ['modul', 'veçori', 'çfarë ofroni', 'shërbim', 'funksion'],
      en: ['module', 'feature', 'what do you offer', 'service', 'function'],
      es: ['módulo', 'función', 'que ofrecen', 'servicio', 'característica'],
      de: ['modul', 'funktion', 'was bieten sie', 'service', 'eigenschaft'],
      mk: ['модул', 'функциј', 'што нудите', 'сервис', 'карактеристик'],
    },
    reply: {
      sq: "🚀 Clientlly ofron 16 module të integruara:\n\n📊 Financë: Oferta, Faturim, Shpenzime, Borxhe, Raporte, Kartela Blerësi\n⚙️ Operacione: Klientë CRM, Furnitorë, Inventar\n🚗 Flotë: Automjete, Mirëmbajtje\n👥 Burime Njerëzore: Prezencë, Paga, Pushime, Trajnime, Kalendar",
      en: "🚀 Clientlly offers 16 integrated modules:\n\n📊 Finance: Quotes, Invoicing, Expenses, Debts, Reports, Buyer Cards\n⚙️ Operations: Client CRM, Vendors, Inventory\n🚗 Fleet: Vehicles, Maintenance\n👥 Human Resources: Attendance, Payroll, Leave, Training, Calendar",
      es: "🚀 Clientlly ofrece 16 módulos integrados:\n\n📊 Finanzas: Cotizaciones, Facturación, Gastos, Deudas, Informes, Fichas de Comprador\n⚙️ Operaciones: CRM Clientes, Proveedores, Inventario\n🚗 Flota: Vehículos, Mantenimiento\n👥 Recursos Humanos: Asistencia, Nómina, Permisos, Capacitación, Calendario",
      de: "🚀 Clientlly bietet 16 integrierte Module:\n\n📊 Finanzen: Angebote, Rechnungen, Ausgaben, Schulden, Berichte, Käuferkarten\n⚙️ Betrieb: Kunden-CRM, Lieferanten, Inventar\n🚗 Flotte: Fahrzeuge, Wartung\n👥 Personalwesen: Anwesenheit, Gehalt, Urlaub, Schulung, Kalender",
      mk: "🚀 Clientlly нуди 16 интегрирани модули:\n\n📊 Финансии: Понуди, Фактурирање, Трошоци, Долгови, Извештаи, Картички на Купувач\n⚙️ Операции: CRM Клиенти, Добавувачи, Залихи\n🚗 Флота: Возила, Одржување\n👥 Човечки Ресурси: Присуство, Плати, Отсуства, Обуки, Календар",
    },
    quickReplies: [
      { sq: "Faturimi", en: "Invoicing", es: "Facturación", de: "Rechnungen", mk: "Фактурирање" },
      { sq: "CRM", en: "CRM", es: "CRM", de: "CRM", mk: "CRM" },
      { sq: "Pagat", en: "Payroll", es: "Nómina", de: "Gehalt", mk: "Плати" },
    ],
  },
  {
    keywords: {
      sq: ['kontakt', 'email', 'na shkruani', 'adres', 'ku jeni'],
      en: ['contact', 'email', 'write', 'address', 'where are you', 'reach'],
      es: ['contacto', 'correo', 'dirección', 'donde están'],
      de: ['kontakt', 'email', 'adresse', 'wo sind sie', 'erreichen'],
      mk: ['контакт', 'е-пошта', 'адреса', 'каде сте'],
    },
    reply: {
      sq: "📧 Mund të na kontaktoni:\n\n• Email: info@clientlly.com\n• Zyra: Linda Premium Residence nr 9, Prishtina e re, Kosovë\n• Chat: Jeni duke folur me ne tani! 😊\n\nOrari: E hënë – E premte, 08:00 – 17:00",
      en: "📧 You can contact us:\n\n• Email: info@clientlly.com\n• Office: Linda Premium Residence nr 9, New Pristina, Kosovo\n• Chat: You're talking to us right now! 😊\n\nHours: Monday – Friday, 08:00 – 17:00",
      es: "📧 Puede contactarnos:\n\n• Email: info@clientlly.com\n• Oficina: Linda Premium Residence nr 9, Nueva Pristina, Kosovo\n• Chat: Está hablando con nosotros ahora! 😊\n\nHorario: Lunes – Viernes, 08:00 – 17:00",
      de: "📧 Sie können uns kontaktieren:\n\n• E-Mail: info@clientlly.com\n• Büro: Linda Premium Residence Nr 9, Neues Pristina, Kosovo\n• Chat: Sie sprechen gerade mit uns! 😊\n\nÖffnungszeiten: Montag – Freitag, 08:00 – 17:00",
      mk: "📧 Можете да не контактирате:\n\n• Е-пошта: info@clientlly.com\n• Канцеларија: Linda Premium Residence бр 9, Нова Приштина, Косово\n• Чет: Зборувате со нас токму сега! 😊\n\nРаботно време: Понеделник – Петок, 08:00 – 17:00",
    },
  },
  {
    keywords: {
      sq: ['siguri', 'mbrojtj', 'gdpr', 'privatësi', 'enkript'],
      en: ['security', 'protect', 'gdpr', 'privacy', 'encrypt', 'safe'],
      es: ['seguridad', 'protección', 'gdpr', 'privacidad', 'cifrado'],
      de: ['sicherheit', 'schutz', 'gdpr', 'dsgvo', 'datenschutz', 'verschlüssel'],
      mk: ['безбедност', 'заштит', 'gdpr', 'приватност', 'енкрипциј'],
    },
    reply: {
      sq: "🔒 Siguria e të dhënave:\n\n• Enkriptim 256-bit SSL\n• Përputhshmëri me GDPR\n• Backup automatik ditor\n• Kontroll me role dhe leje\n• Server të sigurt në Europë\n• Autentikim me dy faktorë (2FA)\n• Auditim i çdo veprimi",
      en: "🔒 Data security:\n\n• 256-bit SSL encryption\n• GDPR compliant\n• Daily automatic backup\n• Role-based access control\n• Secure servers in Europe\n• Two-factor authentication (2FA)\n• Full audit logging",
      es: "🔒 Seguridad de datos:\n\n• Cifrado SSL de 256 bits\n• Cumplimiento con GDPR\n• Respaldo automático diario\n• Control de acceso por roles\n• Servidores seguros en Europa\n• Autenticación de dos factores (2FA)\n• Registro completo de auditoría",
      de: "🔒 Datensicherheit:\n\n• 256-Bit SSL-Verschlüsselung\n• DSGVO-konform\n• Tägliche automatische Sicherung\n• Rollenbasierte Zugriffskontrolle\n• Sichere Server in Europa\n• Zwei-Faktor-Authentifizierung (2FA)\n• Vollständiges Audit-Protokoll",
      mk: "🔒 Безбедност на податоци:\n\n• 256-бит SSL енкрипција\n• Усогласеност со GDPR\n• Дневен автоматски бекап\n• Контрола на пристап по улоги\n• Безбедни сервери во Европа\n• Двофакторска автентикација (2FA)\n• Целосно ревизорско логирање",
    },
  },
  {
    keywords: {
      sq: ['migrim', 'transferim', 'import', 'kalim', 'excel', 'csv'],
      en: ['migrat', 'transfer', 'import', 'switch', 'excel', 'csv', 'move data'],
      es: ['migra', 'transfer', 'importar', 'cambiar', 'excel', 'csv'],
      de: ['migrat', 'transfer', 'importier', 'umsteig', 'excel', 'csv', 'daten übertrag'],
      mk: ['миграциј', 'трансфер', 'увоз', 'префрл', 'excel', 'csv'],
    },
    reply: {
      sq: "📦 Migrimi i të dhënave është FALAS:\n\n• Transferim komplet nga sistemi juaj aktual\n• Import nga Excel, CSV, PDF\n• Procesi zgjat 1-3 ditë pune\n• Verifikim i të dhënave para se të shkoni live\n• Zero humbje të dhënash\n• Trajnim falas pas migrimit",
      en: "📦 Data migration is FREE:\n\n• Complete transfer from your current system\n• Import from Excel, CSV, PDF\n• Process takes 1-3 business days\n• Data verification before going live\n• Zero data loss\n• Free training after migration",
      es: "📦 La migración de datos es GRATIS:\n\n• Transferencia completa desde su sistema actual\n• Importación desde Excel, CSV, PDF\n• El proceso toma 1-3 días hábiles\n• Verificación de datos antes de ir en vivo\n• Cero pérdida de datos\n• Capacitación gratuita después de la migración",
      de: "📦 Datenmigration ist KOSTENLOS:\n\n• Vollständiger Transfer aus Ihrem aktuellen System\n• Import aus Excel, CSV, PDF\n• Prozess dauert 1-3 Werktage\n• Datenverifizierung vor dem Go-Live\n• Null Datenverlust\n• Kostenloses Training nach der Migration",
      mk: "📦 Миграцијата на податоци е БЕСПЛАТНА:\n\n• Целосен трансфер од вашиот тековен систем\n• Увоз од Excel, CSV, PDF\n• Процесот трае 1-3 работни дена\n• Верификација на податоци пред пуштање во живо\n• Нула загуба на податоци\n• Бесплатна обука по миграцијата",
    },
  },
  {
    keywords: {
      sq: ['përshëndetj', 'hello', 'hi', 'mirëdita', 'tungjatjeta', 'hej', 'çkemi', 'tung'],
      en: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings'],
      es: ['hola', 'buenos días', 'buenas tardes', 'saludos'],
      de: ['hallo', 'guten tag', 'guten morgen', 'grüße', 'hey'],
      mk: ['здраво', 'добро утро', 'добар ден', 'поздрав'],
    },
    reply: {
      sq: "👋 Mirësevini në Clientlly! Jam asistenti virtual dhe jam këtu t'ju ndihmoj. Pyesni për modulet, çmimet, ose provën falas. Si mund t'ju ndihmoj sot?",
      en: "👋 Welcome to Clientlly! I'm the virtual assistant and I'm here to help you. Ask about modules, pricing, or the free trial. How can I help you today?",
      es: "👋 Bienvenido a Clientlly! Soy el asistente virtual y estoy aquí para ayudarle. Pregunte sobre módulos, precios o la prueba gratuita. Como puedo ayudarle hoy?",
      de: "👋 Willkommen bei Clientlly! Ich bin der virtuelle Assistent und bin hier, um Ihnen zu helfen. Fragen Sie nach Modulen, Preisen oder der kostenlosen Testversion. Wie kann ich Ihnen heute helfen?",
      mk: "👋 Добредојдовте во Clientlly! Јас сум виртуелниот асистент и сум тука да ви помогнам. Прашајте за модулите, цените или бесплатната проба. Како можам да ви помогнам денес?",
    },
    quickReplies: [
      { sq: "Çfarë modulesh ka?", en: "What modules are there?", es: "Que módulos hay?", de: "Welche Module gibt es?", mk: "Кои модули ги има?" },
      { sq: "Sa kushton?", en: "How much?", es: "Cuanto cuesta?", de: "Was kostet es?", mk: "Колку чини?" },
      { sq: "Fillo provën falas", en: "Start free trial", es: "Iniciar prueba gratis", de: "Kostenlose Testversion starten", mk: "Започни бесплатна проба" },
    ],
  },
  {
    keywords: {
      sq: ['faleminderit', 'falemnderit', 'rrofsh', 'flm'],
      en: ['thank', 'thanks', 'appreciated'],
      es: ['gracias', 'agradec'],
      de: ['danke', 'vielen dank'],
      mk: ['благодар', 'фала'],
    },
    reply: {
      sq: "😊 Ju lutem! Jam gjithmonë këtu nëse keni pyetje të tjera. Ju urojmë sukses me biznesin tuaj! 🚀",
      en: "😊 You're welcome! I'm always here if you have more questions. Wishing you success with your business! 🚀",
      es: "😊 De nada! Siempre estoy aquí si tiene más preguntas. Le deseamos éxito con su negocio! 🚀",
      de: "😊 Gerne! Ich bin immer hier, wenn Sie weitere Fragen haben. Wir wünschen Ihnen Erfolg mit Ihrem Unternehmen! 🚀",
      mk: "😊 Нема на што! Секогаш сум тука ако имате повеќе прашања. Ви посакуваме успех со вашиот бизнис! 🚀",
    },
  },
  {
    keywords: {
      sq: ['mirupafshim', 'lamtumirë', 'bye', 'goodbye', 'mbyll', 'mjaft', 'nuk kam', 'asgjë tjetër', 'jo faleminderit', 'nuk dua', 'ishte kaq', 'kaq ishte', 'ok faleminderit'],
      en: ['bye', 'goodbye', 'close', 'enough', 'no more', 'nothing else', 'no thanks', 'that was all'],
      es: ['adiós', 'cerrar', 'suficiente', 'nada más', 'no gracias', 'eso es todo'],
      de: ['tschüss', 'auf wiedersehen', 'schließen', 'genug', 'nichts mehr', 'nein danke', 'das war alles'],
      mk: ['довидување', 'збогум', 'затвори', 'доволно', 'ништо повеќе', 'не благодарам'],
    },
    reply: {
      sq: "👋 Faleminderit që na kontaktuat! Nëse keni pyetje në të ardhmen, jam gjithmonë këtu. Ditë të mbarë!",
      en: "👋 Thank you for contacting us! If you have questions in the future, I'm always here. Have a great day!",
      es: "👋 Gracias por contactarnos! Si tiene preguntas en el futuro, siempre estoy aquí. Que tenga un gran día!",
      de: "👋 Vielen Dank für Ihre Kontaktaufnahme! Wenn Sie in Zukunft Fragen haben, bin ich immer hier. Einen schönen Tag!",
      mk: "👋 Ви благодариме што не контактиравте! Ако имате прашања во иднина, секогаш сум тука. Убав ден!",
    },
    quickReplies: [],
  },
  {
    keywords: {
      sq: ['anullo', 'ndalo', 'largo', 'fshij llogarinë'],
      en: ['cancel', 'stop', 'delete account', 'unsubscribe'],
      es: ['cancelar', 'detener', 'eliminar cuenta', 'desuscrib'],
      de: ['kündigen', 'stoppen', 'konto löschen', 'abmelden'],
      mk: ['откажи', 'запри', 'избриши сметка', 'отпиши'],
    },
    reply: {
      sq: "🔄 Anulimi është i thjeshtë dhe pa penalitete:\n\n• Anuloni në çdo moment nga llogaria juaj\n• Nuk ka kontratë afatgjate\n• Të dhënat eksportohen para anulimit\n• 30 ditë për të shkarkuar të dhënat pas anulimit\n• Nëse ndërroni mendje, rifilloni ku e latë",
      en: "🔄 Cancellation is simple and penalty-free:\n\n• Cancel at any time from your account\n• No long-term contract\n• Data is exported before cancellation\n• 30 days to download data after cancellation\n• If you change your mind, resume where you left off",
      es: "🔄 La cancelación es simple y sin penalización:\n\n• Cancele en cualquier momento desde su cuenta\n• Sin contrato a largo plazo\n• Los datos se exportan antes de la cancelación\n• 30 días para descargar datos después de cancelar\n• Si cambia de opinión, continúe donde lo dejó",
      de: "🔄 Die Kündigung ist einfach und ohne Strafe:\n\n• Kündigen Sie jederzeit über Ihr Konto\n• Kein langfristiger Vertrag\n• Daten werden vor der Kündigung exportiert\n• 30 Tage zum Herunterladen der Daten nach der Kündigung\n• Wenn Sie Ihre Meinung ändern, machen Sie dort weiter, wo Sie aufgehört haben",
      mk: "🔄 Откажувањето е едноставно и без казна:\n\n• Откажете во секое време од вашата сметка\n• Без долгорочен договор\n• Податоците се извезуваат пред откажувањето\n• 30 дена за преземање податоци по откажувањето\n• Ако се предомислите, продолжете каде што застанавте",
    },
  },
];

const defaultReplyL5: L5 = {
  sq: "Faleminderit për mesazhin tuaj! Jam asistenti virtual i Clientlly. Mund t'ju ndihmoj me informacione rreth moduleve (Faturim, CRM, Inventar, Pagat, etj.), çmimeve, ose provës falas. Çfarë dëshironi të dini?",
  en: "Thank you for your message! I'm Clientlly's virtual assistant. I can help you with information about our modules (Invoicing, CRM, Inventory, Payroll, etc.), pricing, or the free trial. What would you like to know?",
  es: "Gracias por su mensaje! Soy el asistente virtual de Clientlly. Puedo ayudarle con información sobre nuestros módulos (Facturación, CRM, Inventario, Nómina, etc.), precios o la prueba gratuita. Que le gustaría saber?",
  de: "Vielen Dank für Ihre Nachricht! Ich bin der virtuelle Assistent von Clientlly. Ich kann Ihnen mit Informationen über unsere Module (Rechnungen, CRM, Inventar, Gehalt, etc.), Preise oder die kostenlose Testversion helfen. Was möchten Sie wissen?",
  mk: "Ви благодариме за вашата порака! Јас сум виртуелниот асистент на Clientlly. Можам да ви помогнам со информации за нашите модули (Фактурирање, CRM, Залихи, Плати, итн.), цени или бесплатната проба. Што сакате да знаете?",
};

const defaultQuickRepliesL5: L5[] = [
  { sq: "Çfarë modulesh ka?", en: "What modules?", es: "Que módulos?", de: "Welche Module?", mk: "Кои модули?" },
  { sq: "Sa kushton?", en: "How much?", es: "Cuanto cuesta?", de: "Was kostet es?", mk: "Колку чини?" },
  { sq: "Fillo provën falas", en: "Start free trial", es: "Prueba gratis", de: "Kostenlose Testversion", mk: "Бесплатна проба" },
];

function findResponse(text: string, lang: string): { reply: string; quickReplies?: string[] } {
  const lower = text.toLowerCase();
  for (const [, info] of Object.entries(moduleInfo)) {
    const kws = info.keywords[lang] || info.keywords['en'];
    if (kws.some(k => lower.includes(k))) {
      return { reply: pk(lang, info.reply) };
    }
  }
  for (const resp of generalResponses) {
    const kws = resp.keywords[lang] || resp.keywords['en'];
    if (kws.some(k => lower.includes(k))) {
      return {
        reply: pk(lang, resp.reply),
        quickReplies: resp.quickReplies?.map(qr => pk(lang, qr)),
      };
    }
  }
  return {
    reply: pk(lang, defaultReplyL5),
    quickReplies: defaultQuickRepliesL5.map(qr => pk(lang, qr)),
  };
}

export default function ChatBot() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetChat = () => {
    setIsOpen(false);
    setMessages([]);
    setShowWelcome(true);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  };

  const startInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      if (messages.length > 0) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: pk(lang, UI.inactivity),
          sender: 'bot',
          timestamp: new Date(),
        }]);
        setTimeout(() => resetChat(), 4000);
      }
    }, 60000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length > 0 && !isTyping) {
      startInactivityTimer();
    }
    return () => { if (inactivityTimer.current) clearTimeout(inactivityTimer.current); };
  }, [messages, isOpen, isTyping]);

  const closeChat = () => {
    setTimeout(() => resetChat(), 3000);
  };

  const sendBot = (text: string, quickReplies?: string[], autoClose?: boolean) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies,
      }]);
      setIsTyping(false);
      if (autoClose) closeChat();
    }, 600 + Math.random() * 800);
  };

  const goodbyeKeywords = (generalResponses.find(r => r.keywords.sq.includes('mirupafshim'))?.keywords[lang] || ['bye', 'goodbye']);

  const handleSend = (text?: string) => {
    const msg = (text || inputValue).trim();
    if (!msg) return;
    setShowWelcome(false);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: msg,
      sender: 'user',
      timestamp: new Date(),
    }]);
    setInputValue('');
    const { reply, quickReplies } = findResponse(msg, lang);
    const shouldClose = goodbyeKeywords.some(k => msg.toLowerCase().includes(k));
    sendBot(reply, quickReplies, shouldClose);
  };

  const quickTopics = [
    { label: pk(lang, UI.quickTopics.pricing), msg: pk(lang, UI.quickTopics.pricingMsg) },
    { label: pk(lang, UI.quickTopics.modules), msg: pk(lang, UI.quickTopics.modulesMsg) },
    { label: pk(lang, UI.quickTopics.trial), msg: pk(lang, UI.quickTopics.trialMsg) },
    { label: pk(lang, UI.quickTopics.contact), msg: pk(lang, UI.quickTopics.contactMsg) },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          {pk(lang, UI.needHelp)}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-80 sm:w-96 shadow-2xl border-0 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[540px]'}`}>
        <CardHeader className="bg-indigo-600 text-white p-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white leading-tight">Clientlly</h2>
                <p className="text-[11px] text-indigo-200 leading-tight">{pk(lang, UI.subtitle)}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="text-white hover:bg-white/20 h-7 w-7 p-0">
                {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => { setIsOpen(false); setMessages([]); setShowWelcome(true); }} className="text-white hover:bg-white/20 h-7 w-7 p-0">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[486px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
              {showWelcome && messages.length === 0 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">Clientlly Bot</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pk(lang, UI.welcome)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickTopics.map(({ label, msg }) => (
                      <button
                        key={msg}
                        onClick={() => handleSend(msg)}
                        className="text-left px-3 py-2.5 bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl text-xs font-medium text-gray-700 transition-all duration-150"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id}>
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-end gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' ? 'bg-gray-700' : 'bg-indigo-600'
                      }`}>
                        {message.sender === 'user' ?
                          <User className="h-3.5 w-3.5 text-white" /> :
                          <Bot className="h-3.5 w-3.5 text-white" />
                        }
                      </div>
                      <div className={`rounded-2xl px-3.5 py-2.5 shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-100'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                        <span className={`text-[10px] mt-1 block ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-400'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </div>
                  {message.sender === 'bot' && message.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                      {message.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder={pk(lang, UI.placeholder)}
                  className="flex-1 bg-gray-50 border-gray-200 focus:border-indigo-400 rounded-xl text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-xl h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
