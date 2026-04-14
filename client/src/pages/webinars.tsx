import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  Star,
  Download,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

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

export default function Webinars() {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const upcomingWebinars = [
    {
      title: sq(lang, "Masterklasë për Automatizimin e Biznesit", "Business Automation Masterclass", "Masterclass de Automatización de Negocios", "Business-Automatisierung Masterclass", "Мастерклас за Деловна Автоматизација") as string,
      description: sq(lang, "Mësoni si të automatizoni të gjithë rrjedhën e punës së biznesit tuaj duke përdorur veçoritë e avancuara të BusinessFlow Pro", "Learn how to automate your entire business workflow using BusinessFlow Pro's advanced features", "Aprenda cómo automatizar todo el flujo de trabajo de su negocio usando las funciones avanzadas de BusinessFlow Pro", "Erfahren Sie, wie Sie Ihren gesamten Geschäftsworkflow mit den erweiterten Funktionen von BusinessFlow Pro automatisieren", "Научете како да го автоматизирате целиот работен тек на вашиот бизнис користејќи ги напредните функции на BusinessFlow Pro") as string,
      date: sq(lang, "15 Shkurt, 2025", "Feb 15, 2025", "15 Feb, 2025", "15. Feb. 2025", "15 Фев, 2025") as string,
      time: "2:00 PM EST",
      duration: sq(lang, "60 minuta", "60 minutes", "60 minutos", "60 Minuten", "60 минути") as string,
      presenter: sq(lang, "Sarah Johnson, Eksperte e Automatizimit të Biznesit", "Sarah Johnson, Business Automation Expert", "Sarah Johnson, Experta en Automatización de Negocios", "Sarah Johnson, Expertin für Geschäftsautomatisierung", "Sarah Johnson, Експерт за Деловна Автоматизација") as string,
      registrations: 342,
      spots: 158,
      level: sq(lang, "Mesatar", "Intermediate", "Intermedio", "Mittelstufe", "Средно", "Intermédiaire", "Intermédio", "Intermedio") as string
    },
    {
      title: sq(lang, "Punëtori për Përgatitjen e Sezonit Tatimor", "Tax Season Preparation Workshop", "Taller de Preparación para la Temporada Fiscal", "Workshop zur Vorbereitung auf die Steuersaison", "Работилница за Подготовка за Даночна Сезона") as string,
      description: sq(lang, "Përgatitni biznesin tuaj për sezonin tatimor me dokumentacion dhe strategji të duhura raportimi", "Get your business ready for tax season with proper documentation and reporting strategies", "Prepare su negocio para la temporada fiscal con documentación adecuada y estrategias de informes", "Bereiten Sie Ihr Unternehmen mit der richtigen Dokumentation und Berichtsstrategien auf die Steuersaison vor", "Подгответе го вашиот бизнис за даночната сезона со правилна документација и стратегии за известување") as string,
      date: sq(lang, "22 Shkurt, 2025", "Feb 22, 2025", "22 Feb, 2025", "22. Feb. 2025", "22 Фев, 2025") as string,
      time: "1:00 PM EST",
      duration: sq(lang, "45 minuta", "45 minutes", "45 minutos", "45 Minuten", "45 минути") as string,
      presenter: "Mike Chen, CPA",
      registrations: 567,
      spots: 233,
      level: sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник", "Débutant", "Iniciante", "Principiante") as string
    },
    {
      title: sq(lang, "Zhytje e Thellë në Integrimin e Avancuar API", "Advanced API Integration Deep Dive", "Inmersión Profunda en Integración API Avanzada", "Fortgeschrittene API-Integration Vertiefung", "Длабоко Навлегување во Напредна API Интеграција") as string,
      description: sq(lang, "Ndërtoni integrime të fuqishme dhe rrjedha pune të personalizuara duke përdorur API-në tonë gjithëpërfshirëse", "Build powerful integrations and custom workflows using our comprehensive API", "Construya integraciones potentes y flujos de trabajo personalizados usando nuestra API completa", "Erstellen Sie leistungsstarke Integrationen und benutzerdefinierte Workflows mit unserer umfassenden API", "Градете моќни интеграции и прилагодени работни текови користејќи го нашиот сеопфатен API") as string,
      date: sq(lang, "1 Mars, 2025", "Mar 1, 2025", "1 Mar, 2025", "1. März 2025", "1 Мар, 2025") as string,
      time: "3:00 PM EST",
      duration: sq(lang, "90 minuta", "90 minutes", "90 minutos", "90 Minuten", "90 минути") as string,
      presenter: sq(lang, "David Kim, Zhvillues Kryesor", "David Kim, Lead Developer", "David Kim, Desarrollador Principal", "David Kim, Leitender Entwickler", "David Kim, Главен Програмер") as string,
      registrations: 189,
      spots: 311,
      level: sq(lang, "I Avancuar", "Advanced", "Avanzado", "Fortgeschritten", "Напреден", "Avancé", "Avançado", "Avanzato") as string
    }
  ];

  const pastWebinars = [
    {
      title: sq(lang, "Fillimi me BusinessFlow Pro", "Getting Started with BusinessFlow Pro", "Empezando con BusinessFlow Pro", "Erste Schritte mit BusinessFlow Pro", "Започнување со BusinessFlow Pro") as string,
      description: sq(lang, "Udhëzim i plotë për përdoruesit e rinj", "Complete walkthrough for new users", "Tutorial completo para nuevos usuarios", "Vollständige Anleitung für neue Benutzer", "Комплетен водич за нови корисници") as string,
      date: sq(lang, "25 Jan, 2025", "Jan 25, 2025", "25 Ene, 2025", "25. Jan. 2025", "25 Јан, 2025") as string,
      duration: sq(lang, "45 minuta", "45 minutes", "45 minutos", "45 Minuten", "45 минути") as string,
      presenter: "Lisa Thompson",
      views: 2847,
      rating: 4.9,
      downloadAvailable: true
    },
    {
      title: sq(lang, "Praktikat më të Mira për Automatizimin e Faturave", "Invoice Automation Best Practices", "Mejores Prácticas de Automatización de Facturas", "Best Practices für Rechnungsautomatisierung", "Најдобри Практики за Автоматизација на Фактури") as string,
      description: sq(lang, "Thjeshtoni procesin tuaj të faturimit", "Streamline your invoicing process", "Agilice su proceso de facturación", "Optimieren Sie Ihren Rechnungsprozess", "Поедноставете го вашиот процес на фактурирање") as string,
      date: sq(lang, "18 Jan, 2025", "Jan 18, 2025", "18 Ene, 2025", "18. Jan. 2025", "18 Јан, 2025") as string,
      duration: sq(lang, "50 minuta", "50 minutes", "50 minutos", "50 Minuten", "50 минути") as string,
      presenter: "Robert Wilson",
      views: 1924,
      rating: 4.8,
      downloadAvailable: true
    },
    {
      title: sq(lang, "Raportimi Financiar për Biznese të Vogla", "Financial Reporting for Small Business", "Informes Financieros para Pequeñas Empresas", "Finanzberichte für Kleine Unternehmen", "Финансиско Известување за Мали Бизниси") as string,
      description: sq(lang, "Gjeneroni njohuri të fuqishme nga të dhënat tuaja", "Generate powerful insights from your data", "Genere perspectivas poderosas de sus datos", "Generieren Sie leistungsstarke Einblicke aus Ihren Daten", "Генерирајте моќни увиди од вашите податоци") as string,
      date: sq(lang, "11 Jan, 2025", "Jan 11, 2025", "11 Ene, 2025", "11. Jan. 2025", "11 Јан, 2025") as string,
      duration: sq(lang, "60 minuta", "60 minutes", "60 minutos", "60 Minuten", "60 минути") as string,
      presenter: "Jennifer Martinez",
      views: 3156,
      rating: 4.9,
      downloadAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
                  style={{ filter: 'none', background: 'transparent' }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас", "À propos de nous", "Sobre nós", "Chi siamo")}</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè", "Contactez-nous", "Contacte-nos", "Contattaci")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="text-muted-foreground hover:text-primary transition-all duration-300">{sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најави се", "Connexion", "Iniciar sessão", "Accedi")}</Button>
              <Button onClick={() => go("/subscribe")} className="bg-blue-600 text-white hover:bg-blue-700 font-medium">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}</Button>
              <Button onClick={() => go("/trial")} className="bg-green-600 text-white hover:bg-green-700 font-medium">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба", "Commencer l'essai", "Iniciar período de teste", "Inizia la prova")}</Button>
              <div className="pt-2"><LanguageSelector /></div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <LanguageSelector />
              <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300">
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас", "À propos de nous", "Sobre nós", "Chi siamo")}</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Button>
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè", "Contactez-nous", "Contacte-nos", "Contattaci")}</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <Video className="w-5 h-5 mr-2" />
              {sq(lang, "Trajnim Live", "Live Training", "Capacitación en Vivo", "Live-Training", "Обука во Живо")}
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              {sq(lang, "Webinare ", "Expert ", "Webinars de ", "Experten-", "Експертски ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Ekspertësh", "Webinars", "Expertos", "Webinare", "Вебинари")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              {sq(lang, "Bashkohuni në sesionet e trajnimit live me ekspertë të industrisë. Mësoni teknika të avancuara, praktika më të mira dhe merrni përgjigje për pyetjet tuaja në kohë reale.", "Join live training sessions with industry experts. Learn advanced techniques, best practices, and get your questions answered in real-time.", "Únase a sesiones de capacitación en vivo con expertos de la industria. Aprenda técnicas avanzadas, mejores prácticas y obtenga respuestas a sus preguntas en tiempo real.", "Nehmen Sie an Live-Trainings mit Branchenexperten teil. Lernen Sie fortgeschrittene Techniken, Best Practices und erhalten Sie Antworten auf Ihre Fragen in Echtzeit.", "Придружете се на сесии за обука во живо со индустриски експерти. Научете напредни техники, најдобри практики и добијте одговори на вашите прашања во реално време.")}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Sesionet e ", "Upcoming ", "Próximas ", "Kommende ", "Претстојни ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Ardhshme", "Sessions", "Sesiones", "Sitzungen", "Сесии")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Regjistrohuni për këto sesione trajnimi live të ardhshme", "Register for these upcoming live training sessions", "Regístrese para estas próximas sesiones de capacitación en vivo", "Registrieren Sie sich für diese kommenden Live-Trainings", "Регистрирајте се за овие претстојни сесии за обука во живо")}
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={webinar.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="default" className="bg-green-500 text-white">{sq(lang, "Së Shpejti", "Upcoming", "Próximamente", "Demnächst", "Наскоро")}</Badge>
                        <Badge variant="secondary">
                          {webinar.level}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {webinar.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {webinar.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Video className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{webinar.registrations} {sq(lang, "të regjistruar", "registered", "registrados", "registriert", "регистрирани")}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <strong>{sq(lang, "Prezantues:", "Presenter:", "Presentador:", "Referent:", "Презентер:")}</strong> {webinar.presenter}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">{sq(lang, "Vende të Lira", "Available Spots", "Plazas Disponibles", "Verfügbare Plätze", "Достапни Места")}</div>
                        <div className="text-2xl font-bold text-green-500">{webinar.spots}</div>
                      </div>
                      <Button className="w-full">
                        {sq(lang, "Regjistrohu Tani", "Register Now", "Regístrese Ahora", "Jetzt Registrieren", "Регистрирај се Сега")}
                      </Button>
                      <div className="text-xs text-muted-foreground text-center">
                        {sq(lang, "Falas për të gjithë abonentët", "Free for all subscribers", "Gratis para todos los suscriptores", "Kostenlos für alle Abonnenten", "Бесплатно за сите претплатници")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Webinaret e ", "Past ", "Webinars ", "Vergangene ", "Минати ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Kaluara", "Webinars", "Anteriores", "Webinare", "Вебинари")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Shikoni regjistrimet e sesioneve tona të mëparshme të trajnimit", "Watch recordings of our previous training sessions", "Vea grabaciones de nuestras sesiones de capacitación anteriores", "Sehen Sie sich Aufzeichnungen unserer früheren Trainings an", "Гледајте снимки од нашите претходни сесии за обука")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <Card key={webinar.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {webinar.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{webinar.date}</span>
                    <span>{webinar.views} {sq(lang, "shikime", "views", "vistas", "Aufrufe", "прегледи")}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{webinar.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{sq(lang, "nga", "by", "por", "von", "од")} {webinar.presenter}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      {sq(lang, "Shiko", "Watch", "Ver", "Ansehen", "Гледај")}
                    </Button>
                    {webinar.downloadAvailable && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 fade-in">
            {sq(lang, "Gati të Mësoni Më Shumë?", "Ready to Learn More?", "Listo para Aprender Más?", "Bereit Mehr zu Erfahren?", "Подготвени да Научите Повеќе?")}
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Bashkohuni në webinarin tonë të ardhshëm dhe zbuloni si të maksimizoni potencialin e biznesit tuaj me udhëzim ekspert dhe pyetje-përgjigje live.", "Join our next webinar and discover how to maximize your business potential with expert guidance and live Q&A.", "Únase a nuestro próximo webinar y descubra cómo maximizar el potencial de su negocio con orientación experta y preguntas y respuestas en vivo.", "Nehmen Sie an unserem nächsten Webinar teil und entdecken Sie, wie Sie Ihr Geschäftspotenzial mit Expertenberatung und Live-Q&A maximieren können.", "Придружете се на нашиот следен вебинар и откријте како да го максимизирате потенцијалот на вашиот бизнис со експертско водство и Q&A во живо.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => go("/trial")} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              {sq(lang, "Regjistrohu për Sesionin e Ardhshëm", "Register for Next Session", "Registrarse para la Próxima Sesión", "Für die Nächste Sitzung Registrieren", "Регистрирај се за Следната Сесија")}
            </Button>
            <Button onClick={() => go("/trial")} variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба", "Commencer l'essai", "Iniciar período de teste", "Inizia la prova")}</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}