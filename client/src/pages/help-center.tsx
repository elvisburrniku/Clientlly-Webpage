import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  BookOpen,
  Users,
  MessageSquare,
  Video,
  FileText,
  Lightbulb,
  ArrowRight,
  Clock,
  Star,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

export default function HelpCenter() {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: sq(lang, "Fillimi", "Getting Started", "Primeros Pasos", "Erste Schritte", "Почеток"),
      icon: Lightbulb,
      description: sq(lang, "Konfiguroni llogarinë tuaj dhe mësoni bazat", "Set up your account and learn the basics", "Configure su cuenta y aprenda lo básico", "Richten Sie Ihr Konto ein und lernen Sie die Grundlagen", "Поставете ја вашата сметка и научете ги основите"),
      articles: [
        { title: sq(lang, "Krijimi i faturës së parë", "Creating your first invoice", "Creando su primera factura", "Ihre erste Rechnung erstellen", "Креирање на вашата прва фактура"), time: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мин читање") },
        { title: sq(lang, "Vendosja e profilit të kompanisë", "Setting up your company profile", "Configurando el perfil de su empresa", "Ihr Unternehmensprofil einrichten", "Поставување на профилот на компанијата"), time: sq(lang, "3 min lexim", "3 min read", "3 min lectura", "3 Min. Lesezeit", "3 мин читање") },
        { title: sq(lang, "Shtimi i anëtarëve të ekipit", "Adding team members", "Agregando miembros del equipo", "Teammitglieder hinzufügen", "Додавање членови на тимот"), time: sq(lang, "4 min lexim", "4 min read", "4 min lectura", "4 Min. Lesezeit", "4 мин читање") },
        { title: sq(lang, "Lidhja e llogarisë bankare", "Connecting your bank account", "Conectando su cuenta bancaria", "Ihr Bankkonto verbinden", "Поврзување на вашата банкарска сметка"), time: sq(lang, "6 min lexim", "6 min read", "6 min lectura", "6 Min. Lesezeit", "6 мин читање") }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање"),
      icon: FileText,
      description: sq(lang, "Zotëroni veçoritë tona të faturimit", "Master our invoicing features", "Domine nuestras funciones de facturación", "Beherrschen Sie unsere Rechnungsfunktionen", "Совладајте ги нашите функции за фактурирање"),
      articles: [
        { title: sq(lang, "Krijimi i faturave periodike", "Creating recurring invoices", "Creando facturas recurrentes", "Wiederkehrende Rechnungen erstellen", "Креирање повторувачки фактури"), time: sq(lang, "4 min lexim", "4 min read", "4 min lectura", "4 Min. Lesezeit", "4 мін читање") },
        { title: sq(lang, "Vendosja e kushteve të pagesës", "Setting up payment terms", "Configurando términos de pago", "Zahlungsbedingungen einrichten", "Поставување услови за плаќање"), time: sq(lang, "3 min lexim", "3 min read", "3 min lectura", "3 Min. Lesezeit", "3 мін читање") },
        { title: sq(lang, "Personalizimi i shablloneve të faturave", "Customizing invoice templates", "Personalizando plantillas de facturas", "Rechnungsvorlagen anpassen", "Прилагодување на шаблони за фактури"), time: sq(lang, "7 min lexim", "7 min read", "7 min lectura", "7 Min. Lesezeit", "7 мін читање") },
        { title: sq(lang, "Menaxhimi i faturave të vonuara", "Managing overdue invoices", "Gestionando facturas vencidas", "Überfällige Rechnungen verwalten", "Управување со задоцнети фактури"), time: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мін читање") }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: sq(lang, "Pagesat", "Payments", "Pagos", "Zahlungen", "Плаќања"),
      icon: MessageSquare,
      description: sq(lang, "Pranoni dhe gjurmoni pagesat në mënyrë efikase", "Accept and track payments efficiently", "Acepte y rastree pagos eficientemente", "Zahlungen effizient akzeptieren und verfolgen", "Прифаќајте и следете плаќања ефикасно"),
      articles: [
        { title: sq(lang, "Vendosja e pagesave Stripe", "Setting up Stripe payments", "Configurando pagos con Stripe", "Stripe-Zahlungen einrichten", "Поставување Stripe плаќања"), time: sq(lang, "8 min lexim", "8 min read", "8 min lectura", "8 Min. Lesezeit", "8 мін читање") },
        { title: sq(lang, "Regjistrimi i pagesave manuale", "Recording manual payments", "Registrando pagos manuales", "Manuelle Zahlungen erfassen", "Запишување рачни плаќања"), time: sq(lang, "3 min lexim", "3 min read", "3 min lectura", "3 Min. Lesezeit", "3 мін читање") },
        { title: sq(lang, "Kuptimi i tarifave të pagesave", "Understanding payment fees", "Entendiendo las comisiones de pago", "Zahlungsgebühren verstehen", "Разбирање на провизии за плаќање"), time: sq(lang, "4 min lexim", "4 min read", "4 min lectura", "4 Min. Lesezeit", "4 мін читање") },
        { title: sq(lang, "Trajtimi i rimbursimeve", "Handling refunds", "Procesando reembolsos", "Rückerstattungen bearbeiten", "Обработка на рефундирања"), time: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мін читање") }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци"),
      icon: BookOpen,
      description: sq(lang, "Gjurmoni dhe kategorizoni shpenzimet e biznesit", "Track and categorize business expenses", "Rastree y categorice los gastos empresariales", "Geschäftsausgaben verfolgen und kategorisieren", "Следете и категоризирајте деловни трошоци"),
      articles: [
        { title: sq(lang, "Ngarkimi i fotove të faturave", "Uploading receipt photos", "Subiendo fotos de recibos", "Belegfotos hochladen", "Поставување фотографии од сметки"), time: sq(lang, "3 min lexim", "3 min read", "3 min lectura", "3 Min. Lesezeit", "3 мін читање") },
        { title: sq(lang, "Vendosja e kategorive të shpenzimeve", "Setting expense categories", "Configurando categorías de gastos", "Ausgabenkategorien festlegen", "Поставување категории на трошоци"), time: sq(lang, "4 min lexim", "4 min read", "4 min lectura", "4 Min. Lesezeit", "4 мін читање") },
        { title: sq(lang, "Krijimi i raporteve të shpenzimeve", "Creating expense reports", "Creando informes de gastos", "Spesenberichte erstellen", "Креирање извештаи за трошоци"), time: sq(lang, "6 min lexim", "6 min read", "6 min lectura", "6 Min. Lesezeit", "6 мін читање") },
        { title: sq(lang, "Dokumentim i gatshëm për taksa", "Tax-ready documentation", "Documentación lista para impuestos", "Steuerfertige Dokumentation", "Документација готова за даноци"), time: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мін читање") }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: sq(lang, "Raportet", "Reports", "Informes", "Berichte", "Извештаи"),
      icon: Video,
      description: sq(lang, "Gjeneroni njohuri dhe raporte financiare", "Generate insights and financial reports", "Genere información y reportes financieros", "Erkenntnisse und Finanzberichte generieren", "Генерирајте увид и финансиски извештаи"),
      articles: [
        { title: sq(lang, "Kuptimi i fitimit dhe humbjes", "Understanding profit & loss", "Entendiendo ganancias y pérdidas", "Gewinn & Verlust verstehen", "Разбирање на добивка и загуба"), time: sq(lang, "7 min lexim", "7 min read", "7 min lectura", "7 Min. Lesezeit", "7 мін читање") },
        { title: sq(lang, "Raportimi i rrjedhës së parave", "Cash flow reporting", "Reportes de flujo de caja", "Cashflow-Berichte", "Извештаи за готовински тек"), time: sq(lang, "5 min lexim", "5 min read", "5 min lectura", "5 Min. Lesezeit", "5 мін читање") },
        { title: sq(lang, "Veçoritë e raportimit tatimor", "Tax reporting features", "Funciones de reportes fiscales", "Steuerberichtsfunktionen", "Функции за даночно известување"), time: sq(lang, "8 min lexim", "8 min read", "8 min lectura", "8 Min. Lesezeit", "8 мін читање") },
        { title: sq(lang, "Krijimi i raporteve të personalizuara", "Custom report creation", "Creación de informes personalizados", "Benutzerdefinierte Berichte erstellen", "Креирање прилагодени извештаи"), time: sq(lang, "6 min lexim", "6 min read", "6 min lectura", "6 Min. Lesezeit", "6 мін читање") }
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: sq(lang, "Integrimet", "Integrations", "Integraciones", "Integrationen", "Интеграции"),
      icon: Users,
      description: sq(lang, "Lidhuni me mjete të tjera biznesi", "Connect with other business tools", "Conéctese con otras herramientas empresariales", "Mit anderen Geschäftstools verbinden", "Поврзете се со други деловни алатки"),
      articles: [
        { title: sq(lang, "Sinkronizimi me QuickBooks", "QuickBooks synchronization", "Sincronización con QuickBooks", "QuickBooks-Synchronisierung", "Синхронизација со QuickBooks"), time: sq(lang, "10 min lexim", "10 min read", "10 min lectura", "10 Min. Lesezeit", "10 мін читање") },
        { title: sq(lang, "Vendosja e automatizimit Zapier", "Zapier automation setup", "Configuración de automatización Zapier", "Zapier-Automatisierung einrichten", "Поставување автоматизација со Zapier"), time: sq(lang, "8 min lexim", "8 min read", "8 min lectura", "8 Min. Lesezeit", "8 мін читање") },
        { title: sq(lang, "Integrimi me Google Workspace", "Google Workspace integration", "Integración con Google Workspace", "Google Workspace-Integration", "Интеграција со Google Workspace"), time: sq(lang, "6 min lexim", "6 min read", "6 min lectura", "6 Min. Lesezeit", "6 мін читање") },
        { title: sq(lang, "Dokumentimi i API", "API documentation", "Documentación de API", "API-Dokumentation", "API документација"), time: sq(lang, "15 min lexim", "15 min read", "15 min lectura", "15 Min. Lesezeit", "15 мін читање") }
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const popularArticles = [
    { title: sq(lang, "Si të krijoni faturën tuaj të parë", "How to create your first invoice", "Cómo crear su primera factura", "So erstellen Sie Ihre erste Rechnung", "Како да ја креирате вашата прва фактура"), category: sq(lang, "Fillimi", "Getting Started", "Primeros Pasos", "Erste Schritte", "Почеток"), views: "12.5k", rating: 4.9 },
    { title: sq(lang, "Vendosja e kujtesave automatike të pagesave", "Setting up automatic payment reminders", "Configuración de recordatorios automáticos de pago", "Automatische Zahlungserinnerungen einrichten", "Поставување автоматски потсетници за плаќање"), category: sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање"), views: "8.2k", rating: 4.8 },
    { title: sq(lang, "Lidhja e Stripe për pagesa online", "Connecting Stripe for online payments", "Conectando Stripe para pagos en línea", "Stripe für Online-Zahlungen verbinden", "Поврзување на Stripe за онлајн плаќања"), category: sq(lang, "Pagesat", "Payments", "Pagos", "Zahlungen", "Плаќања"), views: "6.8k", rating: 4.7 },
    { title: sq(lang, "Kuptimi i kategorive tatimore", "Understanding tax categories", "Entendiendo categorías fiscales", "Steuerkategorien verstehen", "Разбирање на даночни категории"), category: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци"), views: "5.4k", rating: 4.6 },
    { title: sq(lang, "Krijimi i raporteve financiare mujore", "Creating monthly financial reports", "Creando informes financieros mensuales", "Monatliche Finanzberichte erstellen", "Креирање месечни финансиски извештаи"), category: sq(lang, "Raportet", "Reports", "Informes", "Berichte", "Извештаи"), views: "4.9k", rating: 4.8 }
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
          <div className="text-center mb-8">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <BookOpen className="w-5 h-5 mr-2" />
              {sq(lang, "Qendra e Ndihmës", "Help Center", "Centro de Ayuda", "Hilfezentrum", "Центар за Помош")}
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              {sq(lang, "Si mund t'ju", "How can we ", "Cómo podemos ", "Wie können wir Ihnen ", "Како можеме да ви ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "ndihmojmë?", "help?", "ayudar?", "helfen?", "помогнеме?")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed mb-8">
              {sq(lang, "Gjeni përgjigje, mësoni veçoritë dhe përfitoni maksimumin nga BusinessFlow Pro", "Find answers, learn features, and get the most out of BusinessFlow Pro", "Encuentre respuestas, aprenda funciones y aproveche al máximo BusinessFlow Pro", "Finden Sie Antworten, lernen Sie Funktionen kennen und holen Sie das Beste aus BusinessFlow Pro heraus", "Најдете одговори, научете ги функциите и извлечете го максимумот од BusinessFlow Pro")}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                type="text"
                placeholder={sq(lang, "Kërkoni artikuj ndihme, udhëzues dhe tutoriale...", "Search help articles, guides, and tutorials...", "Buscar artículos de ayuda, guías y tutoriales...", "Hilfeartikel, Anleitungen und Tutorials durchsuchen...", "Пребарувајте статии за помош, водичи и упатства...") as string}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 border-black/20 rounded-xl focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Artikujt", "Popular ", "Artículos ", "Beliebte ", "Популарни ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Popullorë", "Articles", "Populares", "Artikel", "Статии")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Udhëzuesit më të dobishëm të zgjedhur nga komuniteti ynë", "Most helpful guides chosen by our community", "Las guías más útiles elegidas por nuestra comunidad", "Die hilfreichsten Anleitungen, ausgewählt von unserer Community", "Најкорисни водичи избрани од нашата заедница")}
            </p>
          </div>

          <div className="grid gap-6 mb-16">
            {popularArticles.map((article, index) => (
              <Card key={index} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{article.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{article.views} {sq(lang, "shikime", "views", "vistas", "Aufrufe", "прегледи")}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Shfleto sipas", "Browse by ", "Explorar por ", "Durchsuchen nach ", "Прегледај по ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Kategorisë", "Category", "Categoría", "Kategorie", "Категорија")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Eksploroni udhëzuesit e organizuara sipas veçorive dhe rasteve të përdorimit", "Explore guides organized by feature and use case", "Explore guías organizadas por función y caso de uso", "Erkunden Sie Anleitungen nach Funktion und Anwendungsfall", "Истражете водичи организирани по функција и случај на употреба")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    {category.articles.map((article, artIndex) => (
                      <div key={artIndex} className="flex items-center justify-between py-1 text-sm">
                        <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          {article.title}
                        </span>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{article.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {sq(lang, "Shiko Të Gjitha Artikujt", "View All Articles", "Ver Todos los Artículos", "Alle Artikel Anzeigen", "Видете Ги Сите Статии")}
                    <ArrowRight className="w-4 h-4 ml-2" />
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
            {sq(lang, "Ende Keni Nevojë për Ndihmë?", "Still Need Help?", "Aún Necesita Ayuda?", "Brauchen Sie Noch Hilfe?", "Сè Уште Ви Треба Помош?")}
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Ekipi ynë i mbështetjes është këtu për t'ju ndihmuar. Na kontaktoni për asistencë të personalizuar me llogarinë tuaj.", "Our support team is here to help. Get in touch for personalized assistance with your account.", "Nuestro equipo de soporte está aquí para ayudar. Póngase en contacto para asistencia personalizada con su cuenta.", "Unser Support-Team ist hier, um zu helfen. Kontaktieren Sie uns für persönliche Unterstützung bei Ihrem Konto.", "Нашиот тим за поддршка е тука да ви помогне. Контактирајте нè за персонализирана помош со вашата сметка.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => go("/contact")}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              {sq(lang, "Kontakto Mbështetjen", "Contact Support", "Contactar Soporte", "Support Kontaktieren", "Контактирај Поддршка")}
            </Button>
            <Button 
              onClick={() => go("/community")}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              {sq(lang, "Bashkohu me Komunitetin", "Join Community", "Unirse a la Comunidad", "Community Beitreten", "Придружи се на Заедницата")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}