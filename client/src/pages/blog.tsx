import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

export default function Blog() {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const blogPosts = [
    {
      title: sq(lang, "10 Veçori Thelbësore që Çdo Biznes i Vogël ka Nevojë", "10 Essential Features Every Small Business Needs", "10 Características Esenciales que Todo Pequeño Negocio Necesita", "10 Wesentliche Funktionen, die Jedes Kleine Unternehmen Braucht", "10 Основни Карактеристики што ги Треба Секој Мал Бизнис") as string,
      excerpt: sq(lang, "Zbuloni mjetet e domosdoshme që mund të transformojnë operacionet e biznesit tuaj dhe të rrisin produktivitetin.", "Discover the must-have tools that can transform your business operations and boost productivity.", "Descubra las herramientas imprescindibles que pueden transformar las operaciones de su negocio y aumentar la productividad.", "Entdecken Sie die unverzichtbaren Tools, die Ihre Geschäftsabläufe transformieren und die Produktivität steigern können.", "Откријте ги неопходните алатки што можат да ги трансформираат вашите деловни операции и да ја зголемат продуктивноста.") as string,
      author: "Sarah Johnson",
      date: sq(lang, "28 Jan, 2025", "Jan 28, 2025", "28 Ene, 2025", "28. Jan. 2025", "28 Јан, 2025") as string,
      readTime: sq(lang, "8 min lexim", "8 min read", "8 min de lectura", "8 Min. Lesezeit", "8 мин читање") as string,
      category: sq(lang, "Këshilla Biznesi", "Business Tips", "Consejos de Negocio", "Geschäftstipps", "Деловни Совети") as string,
      image: "/attached_assets/image_1753653135199.png",
      featured: true
    },
    {
      title: sq(lang, "Menaxhimi i Faturave: Praktikat më të Mira për 2025", "Mastering Invoice Management: Best Practices for 2025", "Dominando la Gestión de Facturas: Mejores Prácticas para 2025", "Rechnungsverwaltung Meistern: Best Practices für 2025", "Совладување на Управување со Фактури: Најдобри Практики за 2025") as string,
      excerpt: sq(lang, "Mësoni strategji të provuara për të thjeshtuar procesin tuaj të faturimit dhe për të përmirësuar rrjedhën e parave.", "Learn proven strategies to streamline your invoicing process and improve cash flow.", "Aprenda estrategias probadas para agilizar su proceso de facturación y mejorar el flujo de efectivo.", "Lernen Sie bewährte Strategien, um Ihren Rechnungsprozess zu optimieren und den Cashflow zu verbessern.", "Научете докажани стратегии за да го поедноставите процесот на фактурирање и да го подобрите готовинскиот тек.") as string,
      author: "Mike Chen",
      date: sq(lang, "25 Jan, 2025", "Jan 25, 2025", "25 Ene, 2025", "25. Jan. 2025", "25 Јан, 2025") as string,
      readTime: sq(lang, "6 min lexim", "6 min read", "6 min de lectura", "6 Min. Lesezeit", "6 мин читање") as string,
      category: sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање") as string,
      image: "/attached_assets/image_1753653135199.png",
      featured: false
    },
    {
      title: sq(lang, "Përgatitja për Sezonin Tatimor: Dokumente dhe Raporte Thelbësore", "Tax Season Prep: Essential Documents and Reports", "Preparación para la Temporada Fiscal: Documentos e Informes Esenciales", "Vorbereitung auf die Steuersaison: Wesentliche Dokumente und Berichte", "Подготовка за Даночна Сезона: Основни Документи и Извештаи") as string,
      excerpt: sq(lang, "Organizohuni për sezonin tatimor me listën tonë të plotë kontrolli dhe mjetet e raportimit.", "Get organized for tax season with our comprehensive checklist and reporting tools.", "Organícese para la temporada fiscal con nuestra lista de verificación completa y herramientas de informes.", "Organisieren Sie sich für die Steuersaison mit unserer umfassenden Checkliste und Reporting-Tools.", "Организирајте се за даночната сезона со нашата сеопфатна листа за проверка и алатки за известување.") as string,
      author: "Jennifer Martinez",
      date: sq(lang, "22 Jan, 2025", "Jan 22, 2025", "22 Ene, 2025", "22. Jan. 2025", "22 Јан, 2025") as string,
      readTime: sq(lang, "10 min lexim", "10 min read", "10 min de lectura", "10 Min. Lesezeit", "10 мин читање") as string,
      category: sq(lang, "Financë", "Finance", "Finanzas", "Finanzen", "Финансии") as string,
      image: "/attached_assets/image_1753653135199.png",
      featured: false
    },
    {
      title: sq(lang, "Ndërtimi i Marrëdhënieve më të Mira me Klientët me CRM", "Building Better Customer Relationships with CRM", "Construyendo Mejores Relaciones con Clientes con CRM", "Bessere Kundenbeziehungen mit CRM Aufbauen", "Градење Подобри Односи со Клиенти со CRM") as string,
      excerpt: sq(lang, "Transformoni ndërveprimet tuaja me klientët me strategji të zgjuara CRM dhe automatizim.", "Transform your customer interactions with smart CRM strategies and automation.", "Transforme las interacciones con sus clientes con estrategias CRM inteligentes y automatización.", "Transformieren Sie Ihre Kundeninteraktionen mit intelligenten CRM-Strategien und Automatisierung.", "Трансформирајте ги вашите интеракции со клиентите со паметни CRM стратегии и автоматизација.") as string,
      author: "David Kim",
      date: sq(lang, "20 Jan, 2025", "Jan 20, 2025", "20 Ene, 2025", "20. Jan. 2025", "20 Јан, 2025") as string,
      readTime: sq(lang, "7 min lexim", "7 min read", "7 min de lectura", "7 Min. Lesezeit", "7 мін читање") as string,
      category: "CRM",
      image: "/attached_assets/image_1753653135199.png",
      featured: false
    },
    {
      title: sq(lang, "E Ardhmja e Automatizimit të Bizneseve të Vogla", "The Future of Small Business Automation", "El Futuro de la Automatización de Pequeñas Empresas", "Die Zukunft der Automatisierung Kleiner Unternehmen", "Иднината на Автоматизацијата на Мали Бизниси") as string,
      excerpt: sq(lang, "Eksploroni tendencat e reja në automatizimin e biznesit dhe si do të ndikojnë në bizneset e vogla.", "Explore emerging trends in business automation and how they'll impact small businesses.", "Explore las tendencias emergentes en automatización de negocios y cómo impactarán a las pequeñas empresas.", "Erkunden Sie aufkommende Trends in der Geschäftsautomatisierung und wie sie kleine Unternehmen beeinflussen werden.", "Истражете ги новите трендови во деловната автоматизација и како ќе влијаат на малите бизниси.") as string,
      author: "Lisa Thompson",
      date: sq(lang, "18 Jan, 2025", "Jan 18, 2025", "18 Ene, 2025", "18. Jan. 2025", "18 Јан, 2025") as string,
      readTime: sq(lang, "12 min lexim", "12 min read", "12 min de lectura", "12 Min. Lesezeit", "12 мін читање") as string,
      category: sq(lang, "Teknologji", "Technology", "Tecnología", "Technologie", "Технологија") as string,
      image: "/attached_assets/image_1753653135199.png",
      featured: false
    },
    {
      title: sq(lang, "Gjurmimi i Shpenzimeve i Thjeshtëzuar: Udhëzues i Plotë", "Expense Tracking Made Simple: A Complete Guide", "Seguimiento de Gastos Simplificado: Guía Completa", "Ausgabenverfolgung Einfach Gemacht: Ein Vollständiger Leitfaden", "Следење на Трошоци Поедноставено: Комплетен Водич") as string,
      excerpt: sq(lang, "Zotëroni menaxhimin e shpenzimeve me udhëzuesin tonë hap pas hapi për gjurmim më të mirë financiar.", "Master expense management with our step-by-step guide to better financial tracking.", "Domine la gestión de gastos con nuestra guía paso a paso para un mejor seguimiento financiero.", "Meistern Sie die Ausgabenverwaltung mit unserem Schritt-für-Schritt-Leitfaden für besseres Finanz-Tracking.", "Совладајте го управувањето со трошоци со нашиот водич чекор по чекор за подобро финансиско следење.") as string,
      author: "Robert Wilson",
      date: sq(lang, "15 Jan, 2025", "Jan 15, 2025", "15 Ene, 2025", "15. Jan. 2025", "15 Јан, 2025") as string,
      readTime: sq(lang, "9 min lexim", "9 min read", "9 min de lectura", "9 Min. Lesezeit", "9 мін читање") as string,
      category: sq(lang, "Shpenzime", "Expenses", "Gastos", "Ausgaben", "Трошоци") as string,
      image: "/attached_assets/image_1753653135199.png",
      featured: false
    }
  ];

  const categoriesMap: Record<string, string> = {
    "All": sq(lang, "Të Gjitha", "All", "Todos", "Alle", "Сите") as string,
    "Business Tips": sq(lang, "Këshilla Biznesi", "Business Tips", "Consejos de Negocio", "Geschäftstipps", "Деловни Совети") as string,
    "Invoicing": sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање") as string,
    "Finance": sq(lang, "Financë", "Finance", "Finanzas", "Finanzen", "Финансии") as string,
    "CRM": "CRM",
    "Technology": sq(lang, "Teknologji", "Technology", "Tecnología", "Technologie", "Технологија") as string,
    "Expenses": sq(lang, "Shpenzime", "Expenses", "Gastos", "Ausgaben", "Трошоци") as string,
  };

  const categories = ["All", "Business Tips", "Invoicing", "Finance", "CRM", "Technology", "Expenses"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === categoriesMap[selectedCategory]);

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
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="text-muted-foreground hover:text-primary transition-all duration-300">{sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најави се")}</Button>
              <Button onClick={() => go("/subscribe")} className="bg-blue-600 text-white hover:bg-blue-700 font-medium">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              <Button onClick={() => go("/trial")} className="bg-green-600 text-white hover:bg-green-700 font-medium">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
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
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="block py-2 text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Button>
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
              <BookOpen className="w-5 h-5 mr-2" />
              {sq(lang, "Blog Biznesi", "Business Blog", "Blog de Negocios", "Business-Blog", "Деловен Блог")}
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              {sq(lang, "Njohuri & ", "Insights & ", "Perspectivas y ", "Einblicke & ", "Увиди и ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Këshilla", "Tips", "Consejos", "Tipps", "Совети")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              {sq(lang, "Njohuri ekspertësh, praktika më të mira dhe këshilla të zbatueshme për të ndihmuar biznesin tuaj të rritet dhe të ketë sukses.", "Expert insights, best practices, and actionable tips to help your business grow and succeed.", "Perspectivas de expertos, mejores prácticas y consejos prácticos para ayudar a su negocio a crecer y tener éxito.", "Experteneinblicke, Best Practices und umsetzbare Tipps, um Ihrem Unternehmen zu Wachstum und Erfolg zu verhelfen.", "Експертски увиди, најдобри практики и применливи совети за да му помогнете на вашиот бизнис да расте и да успее.")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {categoriesMap[category]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.some(post => post.featured) && (
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.filter(post => post.featured).map((post) => (
              <Card key={post.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-500 text-black">{sq(lang, "Të Veçanta", "Featured", "Destacado", "Empfohlen", "Истакнато")}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" className="group-hover:text-primary">
                        {sq(lang, "Lexo Më Shumë", "Read More", "Leer Más", "Mehr Lesen", "Прочитај Повеќе")} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Artikujt ", "Latest ", "Últimos ", "Neueste ", "Најнови ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "e Fundit", "Articles", "Artículos", "Artikel", "Статии")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Qëndroni të përditësuar me njohuritë më të fundit të biznesit dhe përditësimet e platformës", "Stay updated with the latest business insights and platform updates", "Manténgase actualizado con las últimas perspectivas de negocio y actualizaciones de la plataforma", "Bleiben Sie mit den neuesten Geschäftseinblicken und Plattform-Updates auf dem Laufenden", "Останете ажурирани со најновите деловни увиди и ажурирања на платформата")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer overflow-hidden">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
            {sq(lang, "Gati për të Filluar?", "Ready to Get Started?", "Listo para Empezar?", "Bereit Loszulegen?", "Подготвени да Започнете?")}
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Vendosni këto njohuri në veprim me BusinessFlow Pro. Filloni provën tuaj falas sot dhe transformoni operacionet e biznesit tuaj.", "Put these insights into action with BusinessFlow Pro. Start your free trial today and transform your business operations.", "Ponga estas ideas en acción con BusinessFlow Pro. Comience su prueba gratuita hoy y transforme las operaciones de su negocio.", "Setzen Sie diese Erkenntnisse mit BusinessFlow Pro in die Tat um. Starten Sie noch heute Ihre kostenlose Testversion und transformieren Sie Ihre Geschäftsabläufe.", "Ставете ги овие увиди во акција со BusinessFlow Pro. Започнете ја вашата бесплатна проба денес и трансформирајте ги вашите деловни операции.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => go("/trial")} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
            <Button onClick={() => go("/subscribe")} variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
              {sq(lang, "Shiko Çmimet", "View Pricing", "Ver Precios", "Preise Anzeigen", "Погледни Цени")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}