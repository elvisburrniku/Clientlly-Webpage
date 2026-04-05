import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play,
  Clock,
  Users,
  BookOpen,
  Video,
  FileText,
  Lightbulb,
  CheckCircle,
  Star,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

export default function Tutorials() {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const videoTutorials = [
    {
      title: sq(lang, "Fillimi me BusinessFlow Pro", "Getting Started with BusinessFlow Pro", "Primeros Pasos con BusinessFlow Pro", "Erste Schritte mit BusinessFlow Pro", "Почеток со BusinessFlow Pro"),
      description: sq(lang, "Udhëzim i plotë për vendosjen e llogarisë tuaj dhe krijimin e faturës së parë", "Complete walkthrough of setting up your account and creating your first invoice", "Guía completa para configurar su cuenta y crear su primera factura", "Komplette Anleitung zur Einrichtung Ihres Kontos und Erstellung Ihrer ersten Rechnung", "Целосен водич за поставување на сметката и креирање на вашата прва фактура"),
      duration: "12:30",
      level: sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник"),
      views: "25.2k",
      rating: 4.9,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Fillimi", "Getting Started", "Primeros Pasos", "Erste Schritte", "Почеток")
    },
    {
      title: sq(lang, "Veçoritë e Avancuara të Faturimit", "Advanced Invoicing Features", "Funciones Avanzadas de Facturación", "Erweiterte Rechnungsfunktionen", "Напредни Функции за Фактурирање"),
      description: sq(lang, "Mësoni fatura periodike, shabllone të personalizuara dhe automatizimin e pagesave", "Learn recurring invoices, custom templates, and payment automation", "Aprenda facturas recurrentes, plantillas personalizadas y automatización de pagos", "Lernen Sie wiederkehrende Rechnungen, benutzerdefinierte Vorlagen und Zahlungsautomatisierung", "Научете повторувачки фактури, прилагодени шаблони и автоматизација на плаќања"),
      duration: "18:45",
      level: sq(lang, "Mesatar", "Intermediate", "Intermedio", "Fortgeschritten", "Средно"),
      views: "18.7k",
      rating: 4.8,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање")
    },
    {
      title: sq(lang, "Zotërimi i Gjurmimit të Shpenzimeve", "Expense Tracking Mastery", "Dominio del Seguimiento de Gastos", "Meisterung der Ausgabenverfolgung", "Совладување на Следење Трошоци"),
      description: sq(lang, "Zotëroni skanimin e faturave, kategorizimin dhe raportimin e gatshëm për taksa", "Master receipt scanning, categorization, and tax-ready reporting", "Domine el escaneo de recibos, categorización e informes listos para impuestos", "Meistern Sie Belegscannen, Kategorisierung und steuerfertige Berichte", "Совладајте скенирање сметки, категоризација и извештаи готови за даноци"),
      duration: "15:20",
      level: sq(lang, "Mesatar", "Intermediate", "Intermedio", "Fortgeschritten", "Средно"),
      views: "16.3k",
      rating: 4.7,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци")
    },
    {
      title: sq(lang, "Thellim në Raportet Financiare", "Financial Reports Deep Dive", "Profundización en Informes Financieros", "Vertiefung in Finanzberichte", "Длабинска Анализа на Финансиски Извештаи"),
      description: sq(lang, "Gjeneroni njohuri të fuqishme me raporte fitimi dhe humbjeje, rrjedhës së parave dhe raporte të personalizuara", "Generate powerful insights with profit & loss, cash flow, and custom reports", "Genere información poderosa con informes de ganancias y pérdidas, flujo de caja e informes personalizados", "Generieren Sie leistungsstarke Einblicke mit Gewinn- & Verlustberichten, Cashflow- und benutzerdefinierten Berichten", "Генерирајте моќни увиди со извештаи за добивка и загуба, готовински тек и прилагодени извештаи"),
      duration: "22:15",
      level: sq(lang, "I Avancuar", "Advanced", "Avanzado", "Fortgeschritten", "Напреден"),
      views: "12.8k",
      rating: 4.9,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Raportet", "Reports", "Informes", "Berichte", "Извештаи")
    },
    {
      title: sq(lang, "Punëtori Integrimi API", "API Integration Workshop", "Taller de Integración API", "API-Integrations-Workshop", "Работилница за API Интеграција"),
      description: sq(lang, "Ndërtoni integrime të personalizuara duke përdorur API-në tonë REST dhe webhooks", "Build custom integrations using our REST API and webhooks", "Construya integraciones personalizadas usando nuestra API REST y webhooks", "Erstellen Sie benutzerdefinierte Integrationen mit unserer REST-API und Webhooks", "Изградете прилагодени интеграции користејќи го нашиот REST API и webhooks"),
      duration: "35:40",
      level: sq(lang, "I Avancuar", "Advanced", "Avanzado", "Fortgeschritten", "Напреден"),
      views: "8.5k",
      rating: 4.6,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Integrimet", "Integrations", "Integraciones", "Integrationen", "Интеграции")
    },
    {
      title: sq(lang, "Tutorial i Aplikacionit Mobil", "Mobile App Tutorial", "Tutorial de la App Móvil", "Mobile App Tutorial", "Упатство за Мобилна Апликација"),
      description: sq(lang, "Përfitoni maksimumin nga aplikacioni ynë mobil për menaxhim biznesi në lëvizje", "Get the most out of our mobile app for on-the-go business management", "Aproveche al máximo nuestra app móvil para gestión empresarial en movimiento", "Holen Sie das Beste aus unserer mobilen App für die Geschäftsverwaltung unterwegs heraus", "Извлечете го максимумот од нашата мобилна апликација за управување со бизнис во движење"),
      duration: "9:50",
      level: sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник"),
      views: "14.2k",
      rating: 4.8,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: sq(lang, "Mobil", "Mobile", "Móvil", "Mobil", "Мобилен")
    }
  ];

  const quickGuides = [
    {
      title: sq(lang, "Udhëzues Vendosjeje 5-Minutësh", "5-Minute Setup Guide", "Guía de Configuración de 5 Minutos", "5-Minuten-Einrichtungsanleitung", "Водич за Поставување од 5 Минути"),
      description: sq(lang, "Filloni shpejt dhe lehtë", "Get up and running quickly", "Comience rápidamente", "Schnell starten", "Започнете брзо"),
      duration: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мин читање"),
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: sq(lang, "Shabllone Faturash", "Invoice Templates", "Plantillas de Facturas", "Rechnungsvorlagen", "Шаблони за Фактури"),
      description: sq(lang, "Personalizoni markën tuaj", "Customize your branding", "Personalice su marca", "Passen Sie Ihr Branding an", "Прилагодете го вашиот бренд"),
      duration: sq(lang, "8 min lexim", "8 min read", "8 min lectura", "8 Min. Lesezeit", "8 мін читање"),
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: sq(lang, "Vendosja e Pagesave", "Payment Setup", "Configuración de Pagos", "Zahlungseinrichtung", "Поставување на Плаќања"),
      description: sq(lang, "Filloni të pranoni pagesa", "Start accepting payments", "Comience a aceptar pagos", "Beginnen Sie Zahlungen zu akzeptieren", "Започнете да примате плаќања"),
      duration: sq(lang, "12 min lexim", "12 min read", "12 min lectura", "12 Min. Lesezeit", "12 мін читање"),
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: sq(lang, "Bashkëpunimi i Ekipit", "Team Collaboration", "Colaboración en Equipo", "Teamzusammenarbeit", "Тимска Соработка"),
      description: sq(lang, "Shtoni dhe menaxhoni anëtarë ekipi", "Add and manage team members", "Agregue y gestione miembros del equipo", "Teammitglieder hinzufügen und verwalten", "Додајте и управувајте членови на тимот"),
      duration: sq(lang, "6 min lexim", "6 min read", "6 min lectura", "6 Min. Lesezeit", "6 мін читање"),
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const learningPaths = [
    {
      title: sq(lang, "Pronar i Biznesit të Vogël", "Small Business Owner", "Propietario de Pequeña Empresa", "Kleinunternehmer", "Сопственик на Мал Бизнис"),
      description: sq(lang, "Perfekt për sipërmarrës individual dhe ekipe të vogla", "Perfect for solo entrepreneurs and small teams", "Perfecto para emprendedores individuales y equipos pequeños", "Perfekt für Einzelunternehmer und kleine Teams", "Совршено за поединечни претприемачи и мали тимови"),
      modules: [
        sq(lang, "Fillimi", "Getting Started", "Primeros Pasos", "Erste Schritte", "Почеток"),
        sq(lang, "Faturimi Bazik", "Basic Invoicing", "Facturación Básica", "Grundlegende Rechnungsstellung", "Основно Фактурирање"),
        sq(lang, "Gjurmimi i Shpenzimeve", "Expense Tracking", "Seguimiento de Gastos", "Ausgabenverfolgung", "Следење на Трошоци"),
        sq(lang, "Raporte të Thjeshta", "Simple Reports", "Informes Simples", "Einfache Berichte", "Едноставни Извештаи")
      ],
      duration: sq(lang, "2 orë", "2 hours", "2 horas", "2 Stunden", "2 часа"),
      level: sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник")
    },
    {
      title: sq(lang, "Profesionist Kontabiliteti", "Accounting Professional", "Profesional de Contabilidad", "Buchhaltungsexperte", "Професионалец за Сметководство"),
      description: sq(lang, "Veçori të avancuara për firmat e kontabilitetit dhe kontabilistët", "Advanced features for accounting firms and bookkeepers", "Funciones avanzadas para firmas contables y contadores", "Erweiterte Funktionen für Buchhaltungsfirmen und Buchhalter", "Напредни функции за сметководствени фирми и книговодители"),
      modules: [
        sq(lang, "Menaxhimi Multi-Klient", "Multi-client Management", "Gestión Multi-cliente", "Multi-Client-Management", "Управување со Повеќе Клиенти"),
        sq(lang, "Raporte të Avancuara", "Advanced Reports", "Informes Avanzados", "Erweiterte Berichte", "Напредни Извештаи"),
        sq(lang, "Veçoritë Tatimore", "Tax Features", "Funciones Fiscales", "Steuerfunktionen", "Даночни Функции"),
        sq(lang, "Bashkëpunimi me Klientë", "Client Collaboration", "Colaboración con Clientes", "Kundenkollaboration", "Соработка со Клиенти")
      ],
      duration: sq(lang, "4 orë", "4 hours", "4 horas", "4 Stunden", "4 часа"),
      level: sq(lang, "I Avancuar", "Advanced", "Avanzado", "Fortgeschritten", "Напреден")
    },
    {
      title: sq(lang, "Integrim Zhvilluesi", "Developer Integration", "Integración para Desarrolladores", "Entwickler-Integration", "Интеграција за Програмери"),
      description: sq(lang, "Ndërtoni zgjidhje dhe integrime të personalizuara", "Build custom solutions and integrations", "Construya soluciones e integraciones personalizadas", "Erstellen Sie benutzerdefinierte Lösungen und Integrationen", "Изградете прилагодени решенија и интеграции"),
      modules: [
        sq(lang, "Bazat e API", "API Basics", "Conceptos Básicos de API", "API-Grundlagen", "Основи на API"),
        sq(lang, "Vendosja e Webhook", "Webhook Setup", "Configuración de Webhooks", "Webhook-Einrichtung", "Поставување Webhook"),
        sq(lang, "Integrime të Personalizuara", "Custom Integrations", "Integraciones Personalizadas", "Benutzerdefinierte Integrationen", "Прилагодени Интеграции"),
        sq(lang, "Automatizim i Avancuar", "Advanced Automation", "Automatización Avanzada", "Erweiterte Automatisierung", "Напредна Автоматизација")
      ],
      duration: sq(lang, "6 orë", "6 hours", "6 horas", "6 Stunden", "6 часа"),
      level: sq(lang, "Ekspert", "Expert", "Experto", "Experte", "Експерт")
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
                  style={{ 
                    filter: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button 
                variant="ghost"
                onClick={() => go("/subscribe")}
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најави Се")}
              </Button>
              
              <Button 
                onClick={() => go("/subscribe")}
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              
              <Button 
                onClick={() => go("/trial")}
                className="bg-green-600 text-white hover:bg-green-700 font-medium"
              >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
              
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <LanguageSelector />
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300"
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button 
                variant="ghost"
                onClick={() => go("/subscribe")}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}</Link>
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
              {sq(lang, "Video Tutoriale", "Video Tutorials", "Tutoriales en Video", "Video-Tutorials", "Видео Упатства")}
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              {sq(lang, "Mëso me", "Learn with ", "Aprende con ", "Lernen mit ", "Учи со ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Video", "Videos", "Videos", "Videos", "Видеа")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              {sq(lang, "Zotëroni BusinessFlow Pro me tutoriale video hap-pas-hapi, udhëzues dhe rrugë mësimi të dizajnuara për çdo nivel aftësish.", "Master BusinessFlow Pro with step-by-step video tutorials, guides, and learning paths designed for every skill level.", "Domine BusinessFlow Pro con tutoriales en video paso a paso, guías y rutas de aprendizaje diseñadas para cada nivel de habilidad.", "Meistern Sie BusinessFlow Pro mit Schritt-für-Schritt-Video-Tutorials, Anleitungen und Lernpfaden für jedes Kenntnislevel.", "Совладајте го BusinessFlow Pro со чекор-по-чекор видео упатства, водичи и патеки за учење дизајнирани за секое ниво на вештини.")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Tutoriale", "Featured ", "Tutoriales ", "Empfohlene ", "Препорачани ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "të Veçanta", "Tutorials", "Destacados", "Tutorials", "Упатства")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Filloni me këto udhëzues gjithëpërfshirëse për të zotëruar platformën", "Start with these comprehensive guides to master the platform", "Comience con estas guías completas para dominar la plataforma", "Beginnen Sie mit diesen umfassenden Anleitungen, um die Plattform zu meistern", "Започнете со овие сеопфатни водичи за да ја совладате платформата")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videoTutorials.map((video, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title as string}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-4">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                    <Badge variant={video.level === sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник") ? 'default' : video.level === sq(lang, "Mesatar", "Intermediate", "Intermedio", "Fortgeschritten", "Средно") ? 'secondary' : 'destructive'} className="text-xs">
                      {video.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{video.rating}</span>
                    </div>
                    <span>{video.views} {sq(lang, "shikime", "views", "vistas", "Aufrufe", "прегледи")}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Udhëzues", "Quick ", "Guías ", "Schnelle ", "Брзи ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "të Shpejta", "Guides", "Rápidas", "Anleitungen", "Водичи")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Zgjidhje të shpejta për detyra dhe veçori të zakonshme", "Fast solutions for common tasks and features", "Soluciones rápidas para tareas y funciones comunes", "Schnelle Lösungen für häufige Aufgaben und Funktionen", "Брзи решенија за вообичаени задачи и функции")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickGuides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${guide.color} w-fit mx-auto mb-4`}>
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{guide.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Rrugë", "Learning ", "Rutas de ", "Lern", "Патеки за ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Mësimi", "Paths", "Aprendizaje", "pfade", "Учење")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Kurse të strukturuara të dizajnuara për rolin dhe nivelin tuaj të përvojës", "Structured courses designed for your role and experience level", "Cursos estructurados diseñados para su rol y nivel de experiencia", "Strukturierte Kurse für Ihre Rolle und Ihr Erfahrungsniveau", "Структурирани курсеви дизајнирани за вашата улога и ниво на искуство")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={path.level === sq(lang, "Fillestar", "Beginner", "Principiante", "Anfänger", "Почетник") ? 'default' : path.level === sq(lang, "I Avancuar", "Advanced", "Avanzado", "Fortgeschritten", "Напреден") ? 'secondary' : 'destructive'}>
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{path.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm">{sq(lang, "Modulet e Kursit:", "Course Modules:", "Módulos del Curso:", "Kursmodule:", "Модули на Курсот:")}</h4>
                    {path.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {sq(lang, "Fillo Rrugën e Mësimit", "Start Learning Path", "Iniciar Ruta de Aprendizaje", "Lernpfad Starten", "Започнете Патека за Учење")}
                  </Button>
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
            {sq(lang, "Gati për të Filluar?", "Ready to Get Started?", "Listo para Comenzar?", "Bereit Anzufangen?", "Подготвени да Започнете?")}
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Filloni udhëtimin tuaj të mësimit sot dhe bëhuni ekspert i BusinessFlow Pro në asnjë kohë.", "Start your learning journey today and become a BusinessFlow Pro expert in no time.", "Comience su viaje de aprendizaje hoy y conviértase en un experto de BusinessFlow Pro en poco tiempo.", "Starten Sie noch heute Ihre Lernreise und werden Sie im Handumdrehen ein BusinessFlow Pro-Experte.", "Започнете го вашето патување за учење денес и станете експерт за BusinessFlow Pro за кратко време.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => go("/trial")}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
            <Button 
              onClick={() => go("/help-center")}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              {sq(lang, "Shfleto Qendrën e Ndihmës", "Browse Help Center", "Explorar Centro de Ayuda", "Hilfezentrum Durchsuchen", "Прегледај Центар за Помош")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}