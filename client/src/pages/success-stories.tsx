import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  Menu, 
  X, 
  Star, 
  TrendingUp, 
  Users, 
  Building2, 
  Award, 
  Zap,
  BarChart3,
  Clock,
  Euro,
  ArrowRight,
  Quote
} from "lucide-react";


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const SuccessStories = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stories = [
    {
      company: "TechFlow Solutions",
      industry: sq(lang, "Konsulencë Teknologjike", "Technology Consulting", "Consultoría Tecnológica", "Technologieberatung", "Технолошко Консултирање"),
      size: sq(lang, "45 punonjës", "45 employees", "45 empleados", "45 Mitarbeiter", "45 вработени"),
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop",
      challenge: sq(lang, "Përpunimi manual i faturave po merrte 40+ orë në muaj, duke shkaktuar vonesa në rrjedhën e parave dhe zhgënjim te klientët.", "Manual invoice processing was taking 40+ hours per month, causing cash flow delays and client frustration.", "El procesamiento manual de facturas tomaba más de 40 horas al mes, causando retrasos en el flujo de caja y frustración del cliente.", "Die manuelle Rechnungsbearbeitung dauerte über 40 Stunden pro Monat und verursachte Cashflow-Verzögerungen und Kundenfrust.", "Рачната обработка на фактури одземаше 40+ часа месечно, предизвикувајќи доцнења во готовинскиот тек и фрустрација кај клиентите."),
      solution: sq(lang, "Zbatoi faturim të automatizuar, gjurmim shpenzimesh dhe sistem menaxhimi klientësh me kujtesa pagesash.", "Implemented automated invoicing, expense tracking, and client management system with payment reminders.", "Implementó facturación automatizada, seguimiento de gastos y sistema de gestión de clientes con recordatorios de pago.", "Implementierte automatisierte Rechnungsstellung, Ausgabenverfolgung und Kundenmanagementsystem mit Zahlungserinnerungen.", "Имплементираше автоматизирано фактурирање, следење на трошоци и систем за управување со клиенти со потсетници за плаќање."),
      results: [
        { metric: sq(lang, "Koha e Përpunimit të Faturave", "Invoice Processing Time", "Tiempo de Procesamiento de Facturas", "Rechnungsbearbeitungszeit", "Време на Обработка на Фактури"), before: sq(lang, "40 orë/muaj", "40 hours/month", "40 horas/mes", "40 Stunden/Monat", "40 часа/месец"), after: sq(lang, "4 orë/muaj", "4 hours/month", "4 horas/mes", "4 Stunden/Monat", "4 часа/месец"), improvement: sq(lang, "90% reduktim", "90% reduction", "90% reducción", "90% Reduzierung", "90% намалување") },
        { metric: sq(lang, "Arkëtimi i Pagesave", "Payment Collection", "Cobro de Pagos", "Zahlungseinzug", "Наплата на Плаќања"), before: sq(lang, "45 ditë mesatare", "45 days average", "45 días promedio", "45 Tage Durchschnitt", "45 дена просек"), after: sq(lang, "18 ditë mesatare", "18 days average", "18 días promedio", "18 Tage Durchschnitt", "18 дена просек"), improvement: sq(lang, "60% më shpejt", "60% faster", "60% más rápido", "60% schneller", "60% побрзо") },
        { metric: sq(lang, "Kënaqësia e Klientëve", "Client Satisfaction", "Satisfacción del Cliente", "Kundenzufriedenheit", "Задоволство на Клиенти"), before: "3.2/5", after: "4.8/5", improvement: sq(lang, "50% rritje", "50% increase", "50% aumento", "50% Steigerung", "50% зголемување") }
      ],
      testimonial: sq(lang, "Clientlly transformoi të gjithë procesin tonë të faturimit. Kemi rikuperuar 27 orë në muaj që tani i investojmë në dorëzimin e klientëve dhe rritjen e biznesit.", "Clientlly transformed our entire billing process. We've recovered 27 hours per month that we now invest in client delivery and business growth.", "Clientlly transformó todo nuestro proceso de facturación. Hemos recuperado 27 horas al mes que ahora invertimos en entrega al cliente y crecimiento empresarial.", "Clientlly hat unseren gesamten Abrechnungsprozess transformiert. Wir haben 27 Stunden pro Monat zurückgewonnen, die wir jetzt in Kundenlieferung und Geschäftswachstum investieren.", "Clientlly го трансформираше целиот наш процес на фактурирање. Вративме 27 часа месечно кои сега ги инвестираме во испорака до клиенти и деловен раст."),
      person: "Sarah Chen",
      position: sq(lang, "CEO & Themeluese", "CEO & Founder", "CEO y Fundadora", "CEO & Gründerin", "CEO и Основач"),
      timeframe: sq(lang, "6 muaj", "6 months", "6 meses", "6 Monate", "6 месеци")
    },
    {
      company: "Green Valley Manufacturing",
      industry: sq(lang, "Prodhim i Qëndrueshëm", "Sustainable Manufacturing", "Manufactura Sostenible", "Nachhaltige Fertigung", "Одржливо Производство"),
      size: sq(lang, "120 punonjës", "120 employees", "120 empleados", "120 Mitarbeiter", "120 вработени"),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop",
      challenge: sq(lang, "Kaos në menaxhimin e inventarit duke çuar në €85,000 humbje vjetore nga mungesa e stokut dhe vonesa në pagesat e furnitorëve.", "Inventory management chaos leading to €85,000 in annual stockout losses and supplier payment delays.", "Caos en la gestión de inventario que generaba €85,000 en pérdidas anuales por desabastecimiento y retrasos en pagos a proveedores.", "Chaos in der Bestandsverwaltung, das zu €85.000 jährlichen Verlusten durch Fehlbestände und Verzögerungen bei Lieferantenzahlungen führte.", "Хаос во управувањето со инвентар што доведе до €85.000 годишни загуби од недостиг на залихи и доцнења во плаќања на добавувачи."),
      solution: sq(lang, "Vendosi gjurmim gjithëpërfshirës të inventarit, menaxhim furnitorësh dhe rrjedha pune automatike blerjesh.", "Deployed comprehensive inventory tracking, vendor management, and automated purchasing workflows.", "Implementó seguimiento integral de inventario, gestión de proveedores y flujos de trabajo de compras automatizados.", "Umfassendes Bestandstracking, Lieferantenmanagement und automatisierte Einkaufsworkflows eingeführt.", "Имплементираше сеопфатно следење на инвентар, управување со добавувачи и автоматизирани работни текови за набавка."),
      results: [
        { metric: sq(lang, "Incidentet e Mungesës së Stokut", "Stockout Incidents", "Incidentes de Desabastecimiento", "Fehlbestandsvorfälle", "Инциденти со Недостиг"), before: sq(lang, "24 në muaj", "24 per month", "24 por mes", "24 pro Monat", "24 месечно"), after: sq(lang, "2 në muaj", "2 per month", "2 por mes", "2 pro Monat", "2 месечно"), improvement: sq(lang, "92% reduktim", "92% reduction", "92% reducción", "92% Reduzierung", "92% намалување") },
        { metric: sq(lang, "Kostot e Mbajtjes së Inventarit", "Inventory Carrying Costs", "Costos de Inventario", "Bestandshaltungskosten", "Трошоци за Инвентар"), before: "€180,000", after: "€120,000", improvement: sq(lang, "33% kursim", "33% savings", "33% ahorro", "33% Einsparung", "33% заштеда") },
        { metric: sq(lang, "Saktësia e Pagesave të Furnitorëve", "Supplier Payment Accuracy", "Precisión de Pagos a Proveedores", "Genauigkeit der Lieferantenzahlungen", "Точност на Плаќања на Добавувачи"), before: sq(lang, "78% në kohë", "78% on-time", "78% a tiempo", "78% pünktlich", "78% навреме"), after: sq(lang, "99% në kohë", "99% on-time", "99% a tiempo", "99% pünktlich", "99% навреме"), improvement: sq(lang, "27% përmirësim", "27% improvement", "27% mejora", "27% Verbesserung", "27% подобрување") }
      ],
      testimonial: sq(lang, "Kthimi i investimit ishte i menjëhershëm. Kursuam €85,000 vetëm në vitin e parë dhe marrëdhëniet tona me furnitorët nuk kanë qenë kurrë më të forta.", "The ROI was immediate. We saved €85,000 in the first year alone and our supplier relationships have never been stronger.", "El ROI fue inmediato. Ahorramos €85,000 solo en el primer año y nuestras relaciones con proveedores nunca han sido más fuertes.", "Der ROI war sofort spürbar. Wir haben allein im ersten Jahr €85.000 gespart und unsere Lieferantenbeziehungen waren noch nie so stark.", "ROI беше моментален. Заштедивме €85.000 само во првата година, а нашите односи со добавувачите никогаш не биле посилни."),
      person: "Marcus Weber",
      position: sq(lang, "Drejtor i Operacioneve", "Operations Director", "Director de Operaciones", "Betriebsleiter", "Директор на Операции"),
      timeframe: sq(lang, "12 muaj", "12 months", "12 meses", "12 Monate", "12 месеци")
    },
    {
      company: "Creative Studios Europe",
      industry: sq(lang, "Agjenci Marketingu Digjital", "Digital Marketing Agency", "Agencia de Marketing Digital", "Digitale Marketingagentur", "Дигитална Маркетинг Агенција"),
      size: sq(lang, "28 punonjës", "28 employees", "28 empleados", "28 Mitarbeiter", "28 вработени"),
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop",
      challenge: sq(lang, "Përfitueshmëria e projekteve ishte e paqartë, duke çuar në kontrata me çmime të ulëta dhe marzhe fitimi 15%.", "Project profitability was unclear, leading to underpriced contracts and 15% profit margins.", "La rentabilidad de los proyectos era poco clara, lo que llevaba a contratos subvalorados y márgenes de ganancia del 15%.", "Die Projektrentabilität war unklar, was zu unterbewerteten Verträgen und 15% Gewinnmargen führte.", "Профитабилноста на проектите беше нејасна, што доведе до потценети договори и профитни маржи од 15%."),
      solution: sq(lang, "Zbatoi gjurmimin e kohës, llogaritjen e kostove të projekteve dhe analizën e përfitueshmërisë së klientëve me raportim të automatizuar.", "Implemented time tracking, project costing, and client profitability analysis with automated reporting.", "Implementó seguimiento de tiempo, costeo de proyectos y análisis de rentabilidad de clientes con informes automatizados.", "Implementierte Zeiterfassung, Projektkostenrechnung und Kundenrentabilitätsanalyse mit automatisierten Berichten.", "Имплементираше следење на време, пресметка на проектни трошоци и анализа на профитабилност на клиенти со автоматизирано известување."),
      results: [
        { metric: sq(lang, "Marzhet e Fitimit", "Profit Margins", "Márgenes de Ganancia", "Gewinnmargen", "Профитни Маржи"), before: sq(lang, "15% mesatare", "15% average", "15% promedio", "15% Durchschnitt", "15% просек"), after: sq(lang, "32% mesatare", "32% average", "32% promedio", "32% Durchschnitt", "32% просек"), improvement: sq(lang, "113% rritje", "113% increase", "113% aumento", "113% Steigerung", "113% зголемување") },
        { metric: sq(lang, "Koha e Dorëzimit të Projektit", "Project Delivery Time", "Tiempo de Entrega del Proyecto", "Projektlieferzeit", "Време на Испорака на Проект"), before: sq(lang, "20% me vonesë", "20% over deadline", "20% fuera de plazo", "20% über Frist", "20% по рок"), after: sq(lang, "95% në kohë", "95% on-time", "95% a tiempo", "95% pünktlich", "95% навреме"), improvement: sq(lang, "400% përmirësim", "400% improvement", "400% mejora", "400% Verbesserung", "400% подобрување") },
        { metric: sq(lang, "Mbajtja e Klientëve", "Client Retention", "Retención de Clientes", "Kundenbindung", "Задржување на Клиенти"), before: "68%", after: "89%", improvement: sq(lang, "31% rritje", "31% increase", "31% aumento", "31% Steigerung", "31% зголемување") }
      ],
      testimonial: sq(lang, "Më në fund e kuptojmë se cilët klientë dhe projekte janë realisht fitimprurëse. Biznesi ynë është dyfishuar në madhësi me marzhe më të mira.", "We finally understand which clients and projects are actually profitable. Our business has doubled in size with better margins.", "Finalmente entendemos qué clientes y proyectos son realmente rentables. Nuestro negocio se ha duplicado en tamaño con mejores márgenes.", "Wir verstehen endlich, welche Kunden und Projekte tatsächlich profitabel sind. Unser Geschäft hat sich mit besseren Margen verdoppelt.", "Конечно разбираме кои клиенти и проекти се всушност профитабилни. Нашиот бизнис се удвои во големина со подобри маржи."),
      person: "Elena Rodriguez",
      position: sq(lang, "Drejtoreshë Kreative", "Creative Director", "Directora Creativa", "Kreativdirektorin", "Креативен Директор"),
      timeframe: sq(lang, "8 muaj", "8 months", "8 meses", "8 Monate", "8 месеци")
    },
    {
      company: "Alpine Logistics Group",
      industry: sq(lang, "Transport dhe Logjistikë", "Transportation & Logistics", "Transporte y Logística", "Transport & Logistik", "Транспорт и Логистика"),
      size: sq(lang, "180 punonjës", "180 employees", "180 empleados", "180 Mitarbeiter", "180 вработени"),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop",
      challenge: sq(lang, "Raportimi manual i shpenzimeve po kushtonte 60 orë në javë dhe po krijonte probleme përputhshmërie me autoritetet tatimore.", "Manual expense reporting was costing 60 hours per week and creating compliance issues with tax authorities.", "Los informes manuales de gastos costaban 60 horas semanales y creaban problemas de cumplimiento con las autoridades fiscales.", "Die manuelle Spesenabrechnung kostete 60 Stunden pro Woche und verursachte Compliance-Probleme mit den Steuerbehörden.", "Рачното известување за трошоци чинеше 60 часа неделно и создаваше проблеми со усогласеност со даночните органи."),
      solution: sq(lang, "Vendosi gjurmim mobil të shpenzimeve, skanim automatik faturash dhe rrjedha pune miratimi shpenzimesh në kohë reale.", "Rolled out mobile expense tracking, automated receipt scanning, and real-time expense approval workflows.", "Implementó seguimiento móvil de gastos, escaneo automático de recibos y flujos de trabajo de aprobación de gastos en tiempo real.", "Führte mobile Spesenerfassung, automatisiertes Belegscannen und Echtzeit-Spesengenehmigungsworkflows ein.", "Имплементираше мобилно следење на трошоци, автоматско скенирање на сметки и работни текови за одобрување на трошоци во реално време."),
      results: [
        { metric: sq(lang, "Koha e Përpunimit të Shpenzimeve", "Expense Processing Time", "Tiempo de Procesamiento de Gastos", "Spesenbearbeitungszeit", "Време за Обработка на Трошоци"), before: sq(lang, "60 orë/javë", "60 hours/week", "60 horas/semana", "60 Stunden/Woche", "60 часа/недела"), after: sq(lang, "8 orë/javë", "8 hours/week", "8 horas/semana", "8 Stunden/Woche", "8 часа/недела"), improvement: sq(lang, "87% reduktim", "87% reduction", "87% reducción", "87% Reduzierung", "87% намалување") },
        { metric: sq(lang, "Saktësia e Përputhshmërisë", "Compliance Accuracy", "Precisión de Cumplimiento", "Compliance-Genauigkeit", "Точност на Усогласеност"), before: "73%", after: "98%", improvement: sq(lang, "34% përmirësim", "34% improvement", "34% mejora", "34% Verbesserung", "34% подобрување") },
        { metric: sq(lang, "Kënaqësia e Punonjësve", "Employee Satisfaction", "Satisfacción de Empleados", "Mitarbeiterzufriedenheit", "Задоволство на Вработени"), before: "2.8/5", after: "4.6/5", improvement: sq(lang, "64% rritje", "64% increase", "64% aumento", "64% Steigerung", "64% зголемување") }
      ],
      testimonial: sq(lang, "Drejtuesit tanë e duan aplikacionin mobil, dhe ekipi ynë i kontabilitetit më në fund ka kohë të fokusohet në planifikim financiar strategjik në vend të futjes së të dhënave.", "Our drivers love the mobile app, and our accounting team finally has time to focus on strategic financial planning instead of data entry.", "Nuestros conductores adoran la aplicación móvil, y nuestro equipo de contabilidad finalmente tiene tiempo para enfocarse en la planificación financiera estratégica en lugar de la entrada de datos.", "Unsere Fahrer lieben die mobile App, und unser Buchhaltungsteam hat endlich Zeit, sich auf die strategische Finanzplanung statt auf die Dateneingabe zu konzentrieren.", "Нашите возачи ја сакаат мобилната апликација, а нашиот тим за сметководство конечно има време да се фокусира на стратешко финансиско планирање наместо на внесување податоци."),
      person: "Hans Mueller",
      position: "CFO",
      timeframe: sq(lang, "4 muaj", "4 months", "4 meses", "4 Monate", "4 месеци")
    }
  ];

  const handleNavigation = (path: string) => {
    setTimeout(() => {
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                alt="Clientlly" 
                className="h-8 w-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clientlly
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}
              </Link>
              <button onClick={() => handleNavigation('/#features')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                {sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}
              </button>
              <Link href="/subscribe" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Link>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => go("/trial")}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
                >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
                <Button 
                  size="sm"
                  onClick={() => go("/subscribe")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link href="/about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}
                </Link>
                <button onClick={() => handleNavigation('/#features')} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-left w-full">
                  {sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}
                </button>
                <Link href="/subscribe" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
                </Link>
                <Link href="/contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
                </Link>
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
                    onClick={() => go("/trial")}
                  >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => go("/subscribe")}
                  >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-black border-white/30 text-lg px-6 py-2">
            <Award className="w-5 h-5 mr-2" />
            {sq(lang, "Rezultate Reale", "Real Results", "Resultados Reales", "Echte Ergebnisse", "Реални Резултати")}
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            {sq(lang, "Historitë e", "Customer ", "Historias de ", "Kunden", "Приказни за ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Suksesit të Klientëve", "Success Stories", "Éxito de Clientes", "Erfolgsgeschichten", "Успех на Клиенти")}</span>
          </h1>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Zbuloni se si bizneset në mbarë Evropën po transformojnë operacionet e tyre, rritin përfitueshmërinë dhe arrijnë rritje të qëndrueshme me platformën tonë gjithëpërfshirëse të menaxhimit.", "Discover how businesses across Europe are transforming their operations, increasing profitability, and achieving sustainable growth with our comprehensive management platform.", "Descubra cómo las empresas en toda Europa están transformando sus operaciones, aumentando la rentabilidad y logrando un crecimiento sostenible con nuestra plataforma integral de gestión.", "Entdecken Sie, wie Unternehmen in ganz Europa ihre Abläufe transformieren, die Rentabilität steigern und nachhaltiges Wachstum mit unserer umfassenden Management-Plattform erzielen.", "Откријте како бизнисите низ Европа ги трансформираат своите операции, ја зголемуваат профитабилноста и постигнуваат одржлив раст со нашата сеопфатна платформа за управување.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => go("/trial")}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {sq(lang, "Fillo Historinë Tënde të Suksesit", "Start Your Success Story", "Comienza Tu Historia de Éxito", "Starten Sie Ihre Erfolgsgeschichte", "Започнете Ја Вашата Приказна за Успех")}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/subscribe")}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              {sq(lang, "Shiko Çmimet", "See Pricing", "Ver Precios", "Preise Ansehen", "Видете Цени")}
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
              {sq(lang, "Transformimi i", "Transforming ", "Transformando ", "Transformation von ", "Трансформација на ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Bizneseve në Mbarë Evropën", "Businesses Across Europe", "Negocios en Toda Europa", "Unternehmen in Ganz Europa", "Бизниси низ Европа")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {sq(lang, "Nga startup-et te ndërmarrjet e konsoliduara, shikoni si platforma jonë jep rezultate të matshme dhe nxit rritje të qëndrueshme të biznesit.", "From startups to established enterprises, see how our platform delivers measurable results and drives sustainable business growth.", "Desde startups hasta empresas establecidas, vea cómo nuestra plataforma ofrece resultados medibles e impulsa el crecimiento empresarial sostenible.", "Von Startups bis zu etablierten Unternehmen – sehen Sie, wie unsere Plattform messbare Ergebnisse liefert und nachhaltiges Geschäftswachstum fördert.", "Од стартапи до воспоставени претпријатија, видете како нашата платформа дава мерливи резултати и поттикнува одржлив деловен раст.")}
            </p>
          </div>

          <div className="space-y-20">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={story.image} 
                      alt={story.company}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <img 
                        src={story.logo} 
                        alt={`${story.company} logo`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{story.company}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {story.timeframe}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <span className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {story.industry}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {story.size}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{sq(lang, "Sfida", "Challenge", "Desafío", "Herausforderung", "Предизвик")}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{sq(lang, "Zgjidhja", "Solution", "Solución", "Lösung", "Решение")}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {story.results.map((result, resultIndex) => (
                      <Card key={resultIndex} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-700/50">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{result.metric}</h5>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{sq(lang, "Para", "Before", "Antes", "Vorher", "Пред")}: {result.before}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{sq(lang, "Pas", "After", "Después", "Nachher", "После")}: {result.after}</p>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                            {result.improvement}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-lg leading-relaxed">
                        "{story.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center space-x-1 mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{story.person}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{story.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 animate-professional-fade">
            {sq(lang, "Gati të Shkruani Historinë Tuaj të", "Ready to Write Your ", "Listo para Escribir Su Historia de ", "Bereit, Ihre ", "Подготвени да ја Напишете Вашата ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Suksesit?", "Success Story?", "Éxito?", "Erfolgsgeschichte zu Schreiben?", "Приказна за Успех?")}</span>
          </h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Bashkohuni me mijëra biznese që kanë transformuar operacionet e tyre dhe kanë përshpejtuar rritjen. Filloni provën tuaj falas 14-ditore sot dhe përjetoni ndryshimin.", "Join thousands of businesses that have transformed their operations and accelerated growth. Start your 14-day free trial today and experience the difference.", "Únase a miles de empresas que han transformado sus operaciones y acelerado su crecimiento. Comience su prueba gratuita de 14 días hoy y experimente la diferencia.", "Schließen Sie sich Tausenden von Unternehmen an, die ihre Abläufe transformiert und das Wachstum beschleunigt haben. Starten Sie noch heute Ihre 14-tägige kostenlose Testversion und erleben Sie den Unterschied.", "Придружете се на илјадници бизниси кои ги трансформирале своите операции и го забрзале растот. Започнете ја вашата 14-дневна бесплатна проба денес и доживејте ја разликата.")}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{sq(lang, "Provë Falas 14-Ditore", "14-Day Free Trial", "Prueba Gratis de 14 Días", "14-Tage Kostenlose Testversion", "14-Дневна Бесплатна Проба")}</h3>
              <p className="text-black/70 text-sm">{sq(lang, "Akses i plotë në të gjitha veçoritë pa kartë krediti", "Full access to all features with no credit card required", "Acceso completo a todas las funciones sin tarjeta de crédito", "Vollzugriff auf alle Funktionen ohne Kreditkarte", "Целосен пристап до сите функции без кредитна картичка")}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{sq(lang, "Hyrje me Ekspert", "Expert Onboarding", "Incorporación Experta", "Experten-Onboarding", "Стручно Вклучување")}</h3>
              <p className="text-black/70 text-sm">{sq(lang, "Asistencë personale për vendosjen dhe udhëzime për praktikat më të mira", "Personal setup assistance and best practice guidance", "Asistencia personal de configuración y orientación de mejores prácticas", "Persönliche Einrichtungshilfe und Best-Practice-Anleitung", "Лична помош за поставување и водство за најдобри практики")}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{sq(lang, "Rezultate të Menjëhershme", "Instant Results", "Resultados Instantáneos", "Sofortige Ergebnisse", "Моментални Резултати")}</h3>
              <p className="text-black/70 text-sm">{sq(lang, "Shikoni përmirësime në efikasitet brenda javës së parë", "See improvements in efficiency within the first week", "Vea mejoras en la eficiencia dentro de la primera semana", "Sehen Sie Effizienzverbesserungen innerhalb der ersten Woche", "Видете подобрувања во ефикасноста во првата недела")}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => go("/trial")}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >{sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба")}<ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/contact")}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              {sq(lang, "Planifiko një Demo", "Schedule a Demo", "Programar una Demo", "Demo Vereinbaren", "Закажете Демо")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuccessStories;