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
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Clock, 
  Lightbulb,
  FileText,
  BarChart3,
  Zap,
  Shield,
  Download,
  ArrowRight
} from "lucide-react";


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const BestPractices = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const practices = [
    {
      category: sq(lang, "Menaxhimi Financiar", "Financial Management", "Gestión Financiera", "Finanzmanagement", "Финансиско Управување"),
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      items: [
        {
          title: sq(lang, "Automatizo Gjurmimin e Faturave", "Automate Invoice Tracking", "Automatizar Seguimiento de Facturas", "Rechnungsverfolgung Automatisieren", "Автоматизирај Следење на Фактури"),
          description: sq(lang, "Vendos numërimin automatik të faturave dhe kujtesave të pagesave për të reduktuar gabimet manuale dhe përmirësuar rrjedhën e parave.", "Set up automatic invoice numbering and payment reminders to reduce manual errors and improve cash flow.", "Configure la numeración automática de facturas y recordatorios de pago para reducir errores manuales y mejorar el flujo de caja.", "Richten Sie automatische Rechnungsnummerierung und Zahlungserinnerungen ein, um manuelle Fehler zu reduzieren und den Cashflow zu verbessern.", "Поставете автоматско нумерирање на фактури и потсетници за плаќање за да ги намалите грешките и подобрите готовинскиот тек."),
          impact: sq(lang, "30% arkëtim më i shpejtë", "30% faster payment collection", "30% cobro más rápido", "30% schnellere Zahlungseinziehung", "30% побрзо наплаќање"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        },
        {
          title: sq(lang, "Rishikime Mujore Financiare", "Monthly Financial Reviews", "Revisiones Financieras Mensuales", "Monatliche Finanzprüfungen", "Месечни Финансиски Прегледи"),
          description: sq(lang, "Planifikoni kontrolle të rregullta të shëndetit financiar për të identifikuar tendencat dhe mundësitë herët.", "Schedule regular financial health checks to identify trends and opportunities early.", "Programe revisiones regulares de salud financiera para identificar tendencias y oportunidades temprano.", "Planen Sie regelmäßige Finanzgesundheitschecks, um Trends und Chancen frühzeitig zu erkennen.", "Закажете редовни проверки на финансиското здравје за рано идентификување на трендови и можности."),
          impact: sq(lang, "25% saktësi më e mirë e buxhetit", "25% better budget accuracy", "25% mejor precisión presupuestaria", "25% bessere Budgetgenauigkeit", "25% подобра точност на буџетот"),
          difficulty: sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно")
        },
        {
          title: sq(lang, "Kategorizimi i Shpenzimeve", "Expense Categorization", "Categorización de Gastos", "Ausgabenkategorisierung", "Категоризација на Трошоци"),
          description: sq(lang, "Përdorni kategori dhe etiketa të qëndrueshme të shpenzimeve për raportim më të mirë dhe përgatitje taksash.", "Use consistent expense categories and tags for better reporting and tax preparation.", "Use categorías y etiquetas de gastos consistentes para mejores informes y preparación de impuestos.", "Verwenden Sie konsistente Ausgabenkategorien und Tags für bessere Berichte und Steuervorbereitung.", "Користете конзистентни категории и ознаки за трошоци за подобро известување и подготовка на даноци."),
          impact: sq(lang, "40% kursim kohe gjatë sezonit të taksave", "40% time savings during tax season", "40% ahorro de tiempo en temporada de impuestos", "40% Zeitersparnis in der Steuersaison", "40% заштеда на време за време на даночната сезона"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        }
      ]
    },
    {
      category: sq(lang, "Menaxhimi i Ekipit", "Team Management", "Gestión de Equipo", "Teammanagement", "Управување со Тим"),
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      items: [
        {
          title: sq(lang, "Gjurmimi Digjital i Kohës", "Digital Time Tracking", "Seguimiento Digital de Tiempo", "Digitale Zeiterfassung", "Дигитално Следење на Време"),
          description: sq(lang, "Zbatoni sisteme digjitale të frekuentimit me akses mobil për përpunim të saktë të pagave.", "Implement digital attendance systems with mobile access for accurate payroll processing.", "Implemente sistemas de asistencia digital con acceso móvil para un procesamiento preciso de nóminas.", "Implementieren Sie digitale Anwesenheitssysteme mit mobilem Zugang für eine genaue Gehaltsabrechnung.", "Имплементирајте дигитални системи за присуство со мобилен пристап за точна обработка на плати."),
          impact: sq(lang, "95% saktësi e frekuentimit", "95% attendance accuracy", "95% precisión de asistencia", "95% Anwesenheitsgenauigkeit", "95% точност на присуство"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        },
        {
          title: sq(lang, "Metrika të Performancës", "Performance Metrics", "Métricas de Rendimiento", "Leistungskennzahlen", "Метрики за Перформанси"),
          description: sq(lang, "Vendosni KPI të qarta dhe gjurmoni performancën e punonjësve me seanca të rregullta reagimi.", "Set clear KPIs and track employee performance with regular feedback sessions.", "Establezca KPIs claros y rastree el rendimiento de los empleados con sesiones de retroalimentación regulares.", "Setzen Sie klare KPIs und verfolgen Sie die Mitarbeiterleistung mit regelmäßigen Feedback-Sitzungen.", "Поставете јасни KPI и следете ги перформансите на вработените со редовни сесии за повратна информација."),
          impact: sq(lang, "20% rritje e produktivitetit", "20% productivity increase", "20% aumento de productividad", "20% Produktivitätssteigerung", "20% зголемување на продуктивноста"),
          difficulty: sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно")
        },
        {
          title: sq(lang, "Udhëzime për Punë në Distancë", "Remote Work Guidelines", "Pautas de Trabajo Remoto", "Richtlinien für Fernarbeit", "Упатства за Далечинска Работа"),
          description: sq(lang, "Vendosni protokolle të qarta komunikimi dhe rrjedha pune të menaxhimit të projekteve për ekipet në distancë.", "Establish clear communication protocols and project management workflows for remote teams.", "Establezca protocolos de comunicación claros y flujos de trabajo de gestión de proyectos para equipos remotos.", "Erstellen Sie klare Kommunikationsprotokolle und Projektmanagement-Workflows für Remote-Teams.", "Воспоставете јасни протоколи за комуникација и работни текови за управување со проекти за далечински тимови."),
          impact: sq(lang, "35% bashkëpunim më i mirë", "35% better collaboration", "35% mejor colaboración", "35% bessere Zusammenarbeit", "35% подобра соработка"),
          difficulty: sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно")
        }
      ]
    },
    {
      category: sq(lang, "Operacionet", "Operations", "Operaciones", "Betrieb", "Операции"),
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      items: [
        {
          title: sq(lang, "Automatizimi i Inventarit", "Inventory Automation", "Automatización de Inventario", "Bestandsautomatisierung", "Автоматизација на Инвентар"),
          description: sq(lang, "Vendosni pika automatike të riporositjes dhe alarme të nivelit të stokut për të parandaluar mungesa.", "Set up automatic reorder points and stock level alerts to prevent stockouts.", "Configure puntos de reorden automáticos y alertas de nivel de stock para prevenir desabastecimientos.", "Richten Sie automatische Nachbestellpunkte und Lagerbestandswarnungen ein, um Engpässe zu vermeiden.", "Поставете автоматски точки за нарачки и аларми за ниво на залихи за спречување на недостиг."),
          impact: sq(lang, "50% reduktim i mungesave", "50% reduction in stockouts", "50% reducción de desabastecimientos", "50% Reduzierung von Engpässen", "50% намалување на недостиг"),
          difficulty: sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно")
        },
        {
          title: sq(lang, "Menaxhimi i Marrëdhënieve me Furnitorët", "Vendor Relationship Management", "Gestión de Relaciones con Proveedores", "Lieferantenbeziehungsmanagement", "Управување со Односи со Добавувачи"),
          description: sq(lang, "Mbani profile të detajuara të furnitorëve me metrika performancës dhe kushte pagese.", "Maintain detailed vendor profiles with performance metrics and payment terms.", "Mantenga perfiles detallados de proveedores con métricas de rendimiento y términos de pago.", "Pflegen Sie detaillierte Lieferantenprofile mit Leistungskennzahlen und Zahlungsbedingungen.", "Одржувајте детални профили на добавувачи со метрики за перформанси и услови за плаќање."),
          impact: sq(lang, "15% kursim në blerje", "15% cost savings on purchases", "15% ahorro en compras", "15% Kosteneinsparung bei Einkäufen", "15% заштеда на трошоци при купување"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        },
        {
          title: sq(lang, "Dokumentimi i Proceseve", "Process Documentation", "Documentación de Procesos", "Prozessdokumentation", "Документирање на Процеси"),
          description: sq(lang, "Dokumentoni të gjitha proceset e biznesit për të siguruar qëndrueshmëri dhe për të mundësuar hyrje të lehtë.", "Document all business processes to ensure consistency and enable easy onboarding.", "Documente todos los procesos empresariales para garantizar consistencia y facilitar la incorporación.", "Dokumentieren Sie alle Geschäftsprozesse, um Konsistenz zu gewährleisten und einfaches Onboarding zu ermöglichen.", "Документирајте ги сите бизнис процеси за обезбедување конзистентност и овозможување лесно вработување."),
          impact: sq(lang, "60% hyrje më e shpejtë e punonjësve", "60% faster employee onboarding", "60% incorporación más rápida", "60% schnelleres Mitarbeiter-Onboarding", "60% побрзо вработување"),
          difficulty: sq(lang, "E Vështirë", "Hard", "Difícil", "Schwer", "Тешко")
        }
      ]
    },
    {
      category: sq(lang, "Marrëdhëniet me Klientët", "Customer Relations", "Relaciones con Clientes", "Kundenbeziehungen", "Односи со Клиенти"),
      icon: <Shield className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      items: [
        {
          title: sq(lang, "Menaxhimi i të Dhënave të Klientëve", "Customer Data Management", "Gestión de Datos de Clientes", "Kundendatenmanagement", "Управување со Податоци на Клиенти"),
          description: sq(lang, "Centralizoni informacionin e klientit me historikun e ndërveprimeve dhe gjurmimin e preferencave.", "Centralize customer information with interaction history and preferences tracking.", "Centralice la información del cliente con historial de interacciones y seguimiento de preferencias.", "Zentralisieren Sie Kundeninformationen mit Interaktionsverlauf und Präferenzverfolgung.", "Централизирајте ги информациите за клиентите со историја на интеракции и следење на преференции."),
          impact: sq(lang, "45% përmirësim i kënaqësisë së klientëve", "45% improvement in customer satisfaction", "45% mejora en satisfacción del cliente", "45% Verbesserung der Kundenzufriedenheit", "45% подобрување на задоволството на клиентите"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        },
        {
          title: sq(lang, "Automatizimi i Ndjekjes", "Follow-up Automation", "Automatización de Seguimiento", "Follow-up-Automatisierung", "Автоматизација на Следење"),
          description: sq(lang, "Vendosni sekuenca automatike ndjekjeje për oferta, propozime dhe kujdes pas blerjes.", "Set up automated follow-up sequences for quotes, proposals, and post-purchase care.", "Configure secuencias de seguimiento automatizadas para cotizaciones, propuestas y atención post-compra.", "Richten Sie automatisierte Follow-up-Sequenzen für Angebote, Vorschläge und Nachkaufbetreuung ein.", "Поставете автоматизирани секвенци за следење за понуди, предлози и пост-купувачка грижа."),
          impact: sq(lang, "25% rritje e normës së konvertimit", "25% increase in conversion rates", "25% aumento en tasas de conversión", "25% Steigerung der Konversionsraten", "25% зголемување на стапките на конверзија"),
          difficulty: sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно")
        },
        {
          title: sq(lang, "Mbledhja e Reagimit", "Feedback Collection", "Recopilación de Comentarios", "Feedback-Sammlung", "Собирање Повратна Информација"),
          description: sq(lang, "Zbatoni mbledhje sistematike të reagimit dhe procese përgjigje.", "Implement systematic feedback collection and response processes.", "Implemente procesos sistemáticos de recopilación y respuesta de comentarios.", "Implementieren Sie systematische Feedback-Erfassung und Reaktionsprozesse.", "Имплементирајте систематско собирање повратна информација и процеси за одговор."),
          impact: sq(lang, "30% mbajtje më e mirë e klientëve", "30% better customer retention", "30% mejor retención de clientes", "30% bessere Kundenbindung", "30% подобро задржување на клиенти"),
          difficulty: sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно")
        }
      ]
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
            <Lightbulb className="w-5 h-5 mr-2" />
            {sq(lang, "Udhëzime Eksperte", "Expert Guidance", "Guía Experta", "Expertenberatung", "Стручно Водство")}
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            {sq(lang, "Praktikat Më të Mira të", "Business ", "Mejores Prácticas", "Geschäftliche ", "Деловни ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Biznesit", "Best Practices", " Empresariales", "Best Practices", "Најдобри Практики")}</span>
          </h1>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Strategji të provuara dhe rekomandime ekspertësh për të optimizuar operacionet e biznesit tuaj, përmirësuar efikasitetin dhe nxitur rritje të qëndrueshme me platformën tonë gjithëpërfshirëse të menaxhimit.", "Proven strategies and expert recommendations to optimize your business operations, improve efficiency, and drive sustainable growth with our comprehensive management platform.", "Estrategias probadas y recomendaciones de expertos para optimizar las operaciones de su negocio, mejorar la eficiencia e impulsar el crecimiento sostenible con nuestra plataforma integral de gestión.", "Bewährte Strategien und Expertenempfehlungen zur Optimierung Ihrer Geschäftsabläufe, Verbesserung der Effizienz und Förderung nachhaltigen Wachstums mit unserer umfassenden Management-Plattform.", "Докажани стратегии и стручни препораки за оптимизирање на вашите деловни операции, подобрување на ефикасноста и поттикнување одржлив раст со нашата сеопфатна платформа за управување.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => go("/trial")}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {sq(lang, "Fillo Zbatimin Sot", "Start Implementing Today", "Empieza a Implementar Hoy", "Heute mit der Umsetzung Beginnen", "Започнете со Имплементација Денес")}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/subscribe")}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              {sq(lang, "Merr Akses të Plotë", "Get Full Access", "Obtener Acceso Completo", "Vollzugriff Erhalten", "Добијте Целосен Пристап")}
            </Button>
          </div>
        </div>
      </section>

      {/* Best Practices Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
              {sq(lang, "Strategji të", "Proven ", "Estrategias ", "Bewährte ", "Докажани ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Provuara për Sukses", "Strategies for Success", "Probadas para el Éxito", "Strategien für den Erfolg", "Стратегии за Успех")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {sq(lang, "Mësoni nga bizneset e suksesshme dhe zbatoni këto strategji të testuara në betejë për të thjeshtuar operacionet tuaja dhe përshpejtuar rritjen.", "Learn from successful businesses and implement these battle-tested strategies to streamline your operations and accelerate growth.", "Aprenda de negocios exitosos e implemente estas estrategias probadas para optimizar sus operaciones y acelerar el crecimiento.", "Lernen Sie von erfolgreichen Unternehmen und implementieren Sie diese bewährten Strategien, um Ihre Abläufe zu optimieren und das Wachstum zu beschleunigen.", "Учете од успешни бизниси и имплементирајте ги овие битка-тестирани стратегии за да ги оптимизирате вашите операции и забрзате растот.")}
            </p>
          </div>

          <div className="space-y-16">
            {practices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((practice, index) => (
                    <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {practice.title}
                          </CardTitle>
                          <Badge 
                            variant={practice.difficulty === sq(lang, "E Lehtë", "Easy", "Fácil", "Einfach", "Лесно") ? 'default' : practice.difficulty === sq(lang, "Mesatare", "Medium", "Medio", "Mittel", "Средно") ? 'secondary' : 'destructive'}
                            className="text-xs"
                          >
                            {practice.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {practice.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-green-600 dark:text-green-400">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span className="font-semibold text-sm">{practice.impact}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                            {sq(lang, "Mëso Më Shumë", "Learn More", "Saber Más", "Mehr Erfahren", "Дознајте Повеќе")}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
            {sq(lang, "Gati për të", "Ready to ", "Listo para ", "Bereit, Ihr Geschäft zu ", "Подготвени да го ")}<span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Transformuar Biznesin Tuaj?", "Transform Your Business?", "Transformar Su Negocio?", "Transformieren?", "Трансформирате Вашиот Бизнис?")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {sq(lang, "Filloni të zbatoni këto praktika më të mira sot me platformën tonë gjithëpërfshirëse të menaxhimit të biznesit. Merrni udhëzime ekspertësh, rrjedha pune të automatizuara dhe shabllone të provuara.", "Start implementing these best practices today with our comprehensive business management platform. Get expert guidance, automated workflows, and proven templates.", "Comience a implementar estas mejores prácticas hoy con nuestra plataforma integral de gestión empresarial. Obtenga orientación experta, flujos de trabajo automatizados y plantillas probadas.", "Beginnen Sie noch heute mit der Umsetzung dieser Best Practices mit unserer umfassenden Business-Management-Plattform. Erhalten Sie Expertenberatung, automatisierte Workflows und bewährte Vorlagen.", "Започнете да ги имплементирате овие најдобри практики денес со нашата сеопфатна платформа за управување со бизнис. Добијте стручно водство, автоматизирани работни текови и докажани шаблони.")}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{sq(lang, "Shabllone dhe Udhëzues", "Templates & Guides", "Plantillas y Guías", "Vorlagen & Leitfäden", "Шаблони и Водичи")}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{sq(lang, "Shabllone të gatshme dhe udhëzues zbatimi hap pas hapi", "Ready-to-use templates and step-by-step implementation guides", "Plantillas listas para usar y guías de implementación paso a paso", "Sofort einsetzbare Vorlagen und Schritt-für-Schritt-Implementierungsleitfäden", "Готови за употреба шаблони и чекор-по-чекор водичи за имплементација")}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{sq(lang, "Mjete Automatizimi", "Automation Tools", "Herramientas de Automatización", "Automatisierungswerkzeuge", "Алатки за Автоматизација")}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{sq(lang, "Rrjedha pune të automatizuara për të zbatuar praktikat më të mira pa mundim", "Automated workflows to implement best practices effortlessly", "Flujos de trabajo automatizados para implementar mejores prácticas sin esfuerzo", "Automatisierte Workflows zur mühelosen Implementierung von Best Practices", "Автоматизирани работни текови за лесна имплементација на најдобри практики")}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{sq(lang, "Mbështetje Ekspertësh", "Expert Support", "Soporte Experto", "Experten-Support", "Стручна Поддршка")}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{sq(lang, "Akses 24/7 tek ekspertë dhe konsulentë të optimizimit të biznesit", "24/7 access to business optimization experts and consultants", "Acceso 24/7 a expertos en optimización empresarial y consultores", "24/7-Zugang zu Experten für Geschäftsoptimierung und Beratern", "24/7 пристап до експерти за оптимизација на бизнис и консултанти")}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => go("/trial")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >{sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба")}</Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/subscribe")}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              {sq(lang, "Shiko Planet e Çmimeve", "View Pricing Plans", "Ver Planes de Precios", "Preispläne Anzeigen", "Видете Ценовни Планови")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BestPractices;