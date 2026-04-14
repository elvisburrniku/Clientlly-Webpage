import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  MessageSquare,
  Lightbulb,
  Award,
  Calendar,
  ExternalLink,
  Heart,
  TrendingUp,
  Coffee,
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

export default function Community() {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const communityStats = [
    { label: sq(lang, "Anëtarë Aktivë", "Active Members", "Miembros Activos", "Aktive Mitglieder", "Активни Членови") as string, value: "12,500+", icon: Users },
    { label: sq(lang, "Diskutime Mujore", "Monthly Discussions", "Discusiones Mensuales", "Monatliche Diskussionen", "Месечни Дискусии") as string, value: "2,800+", icon: MessageSquare },
    { label: sq(lang, "Pyetje të Përgjigura", "Questions Answered", "Preguntas Respondidas", "Beantwortete Fragen", "Одговорени Прашања") as string, value: "45,000+", icon: Lightbulb },
    { label: sq(lang, "Histori Suksesi", "Success Stories", "Historias de Éxito", "Erfolgsgeschichten", "Успешни Приказни", "Histoires de succès", "Histórias de sucesso", "Storie di successo") as string, value: "1,200+", icon: Award }
  ];

  const recentDiscussions = [
    {
      title: sq(lang, "Praktikat më të mira për ndjekjen e faturave", "Best practices for invoice follow-ups", "Mejores prácticas para seguimiento de facturas", "Best Practices für Rechnungsverfolgung", "Најдобри практики за следење на фактури") as string,
      author: "Sarah M.",
      replies: 23,
      category: sq(lang, "Faturimi", "Invoicing", "Facturación", "Rechnungsstellung", "Фактурирање", "Facturation", "Faturação", "Fatturazione") as string,
      time: sq(lang, "2 orë më parë", "2h ago", "hace 2h", "vor 2 Std.", "пред 2ч", "il y a 2h", "há 2h", "2h fa") as string,
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: sq(lang, "Konfigurimi i kategorizimit automatik të shpenzimeve", "Setting up automated expense categorization", "Configuración de categorización automática de gastos", "Automatische Ausgabenkategorisierung einrichten", "Поставување автоматска категоризација на трошоци") as string,
      author: "Mike R.",
      replies: 18,
      category: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци", "Dépenses", "Despesas", "Spese") as string,
      time: sq(lang, "4 orë më parë", "4h ago", "hace 4h", "vor 4 Std.", "пред 4ч", "il y a 4h", "há 4h", "4h fa") as string,
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: sq(lang, "Këshilla për raportimin tatimor të Q4", "Tax reporting tips for Q4", "Consejos de informes fiscales para Q4", "Tipps zur Steuerberichterstattung für Q4", "Совети за даночно известување за Q4") as string,
      author: "Jennifer L.",
      replies: 31,
      category: sq(lang, "Raporte", "Reports", "Informes", "Berichte", "Извештаи", "Rapports", "Relatórios", "Report") as string,
      time: sq(lang, "6 orë më parë", "6h ago", "hace 6h", "vor 6 Std.", "пред 6ч") as string,
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: sq(lang, "Optimizimi i rrjedhës së punës në aplikacionin celular", "Mobile app workflow optimization", "Optimización del flujo de trabajo de la app móvil", "Optimierung des mobilen App-Workflows", "Оптимизација на работниот тек на мобилната апликација") as string,
      author: "David K.",
      replies: 15,
      category: sq(lang, "Celular", "Mobile", "Móvil", "Mobil", "Мобилен", "Mobile", "Móvel", "Mobile") as string,
      time: sq(lang, "8 orë më parë", "8h ago", "hace 8h", "vor 8 Std.", "пред 8ч") as string,
      avatar: "/attached_assets/image_1753653135199.png"
    }
  ];

  const upcomingEvents = [
    {
      title: sq(lang, "Thirrja Mujore e Komunitetit", "Monthly Community Call", "Llamada Mensual de la Comunidad", "Monatlicher Community-Anruf", "Месечен Повик на Заедницата") as string,
      date: sq(lang, "15 Shkurt, 2025", "Feb 15, 2025", "15 Feb, 2025", "15. Feb. 2025", "15 Фев, 2025") as string,
      time: "2:00 PM EST",
      type: sq(lang, "Takim Virtual", "Virtual Meetup", "Reunión Virtual", "Virtuelles Treffen", "Виртуелен Состанок") as string,
      description: sq(lang, "Bashkohuni në diskutimin tonë mujor për veçoritë e reja dhe praktikat më të mira", "Join our monthly discussion about new features and best practices", "Únase a nuestra discusión mensual sobre nuevas funciones y mejores prácticas", "Nehmen Sie an unserer monatlichen Diskussion über neue Funktionen und Best Practices teil", "Придружете се на нашата месечна дискусија за нови функции и најдобри практики") as string
    },
    {
      title: sq(lang, "Punëtori për Suksesin e Bizneseve të Vogla", "Small Business Success Workshop", "Taller de Éxito para Pequeñas Empresas", "Workshop für den Erfolg kleiner Unternehmen", "Работилница за Успех на Мали Бизниси") as string,
      date: sq(lang, "22 Shkurt, 2025", "Feb 22, 2025", "22 Feb, 2025", "22. Feb. 2025", "22 Фев, 2025") as string,
      time: "1:00 PM EST",
      type: sq(lang, "Punëtori", "Workshop", "Taller", "Workshop", "Работилница") as string,
      description: sq(lang, "Mësoni strategji rritjeje nga përdoruesit e suksesshëm të BusinessFlow Pro", "Learn growth strategies from successful BusinessFlow Pro users", "Aprenda estrategias de crecimiento de usuarios exitosos de BusinessFlow Pro", "Lernen Sie Wachstumsstrategien von erfolgreichen BusinessFlow Pro-Nutzern", "Научете стратегии за раст од успешни корисници на BusinessFlow Pro") as string
    },
    {
      title: sq(lang, "Masterklasë për Integrimin API", "API Integration Masterclass", "Masterclass de Integración API", "API-Integration Masterclass", "Мастерклас за API Интеграција") as string,
      date: sq(lang, "1 Mars, 2025", "Mar 1, 2025", "1 Mar, 2025", "1. März 2025", "1 Мар, 2025") as string,
      time: "3:00 PM EST",
      type: sq(lang, "Sesion Teknik", "Technical Session", "Sesión Técnica", "Technische Sitzung", "Техничка Сесија") as string,
      description: sq(lang, "Zhytje e thellë në integrimet API dhe rrjedhat automatike të punës", "Deep dive into API integrations and automation workflows", "Inmersión profunda en integraciones API y flujos de trabajo automatizados", "Tiefer Einblick in API-Integrationen und Automatisierungsworkflows", "Длабоко навлегување во API интеграции и автоматизирани работни текови") as string
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
              <Users className="w-5 h-5 mr-2" />
              {sq(lang, "Qendra e Komunitetit", "Community Hub", "Centro de la Comunidad", "Community-Hub", "Центар на Заедницата")}
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              {sq(lang, "Bashkohu me ", "Join Our ", "Únete a Nuestra ", "Treten Sie unserer ", "Придружи се на ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "Komunitetin", "Community", "Comunidad", "Community bei", "Заедницата", "Communauté", "Comunidade", "Comunità")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              {sq(lang, "Lidhuni me sipërmarrës të tjerë, ndani përvoja dhe rriteni biznesin tuaj së bashku me mijëra përdorues të BusinessFlow Pro.", "Connect with fellow entrepreneurs, share experiences, and grow your business together with thousands of BusinessFlow Pro users.", "Conéctese con otros emprendedores, comparta experiencias y haga crecer su negocio junto con miles de usuarios de BusinessFlow Pro.", "Verbinden Sie sich mit anderen Unternehmern, teilen Sie Erfahrungen und wachsen Sie gemeinsam mit Tausenden von BusinessFlow Pro-Nutzern.", "Поврзете се со други претприемачи, споделете искуства и растете го вашиот бизнис заедно со илјадници корисници на BusinessFlow Pro.")}
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={stat.label} className="text-center glass-effect border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Diskutimet ", "Recent ", "Discusiones ", "Aktuelle ", "Неодамнешни ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "e Fundit", "Discussions", "Recientes", "Diskussionen", "Дискусии")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Bashkohuni në bisedat aktuale dhe ndani ekspertizën tuaj", "Join ongoing conversations and share your expertise", "Únase a conversaciones en curso y comparta su experiencia", "Nehmen Sie an laufenden Gesprächen teil und teilen Sie Ihr Fachwissen", "Придружете се на тековните разговори и споделете ја вашата експертиза")}
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            {recentDiscussions.map((discussion, index) => (
              <Card key={discussion.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img src={discussion.avatar} alt={discussion.author} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary" className="text-xs">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{sq(lang, "nga", "by", "por", "von", "од")} {discussion.author}</span>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MessageSquare className="w-4 h-4" />
                          <span>{discussion.replies} {sq(lang, "përgjigje", "replies", "respuestas", "Antworten", "одговори")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="px-8 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              {sq(lang, "Shiko të Gjitha Diskutimet", "View All Discussions", "Ver Todas las Discusiones", "Alle Diskussionen Anzeigen", "Погледни ги Сите Дискусии")}
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              {sq(lang, "Ngjarjet ", "Upcoming ", "Próximos ", "Kommende ", "Претстојни ", "À venir ", "Próximo ", "Prossimo ")}<span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">{sq(lang, "e Ardhshme", "Events", "Eventos", "Veranstaltungen", "Настани")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Bashkohuni në ngjarjet tona virtuale dhe lidhuni me komunitetin", "Join our virtual events and connect with the community", "Únase a nuestros eventos virtuales y conéctese con la comunidad", "Nehmen Sie an unseren virtuellen Veranstaltungen teil und verbinden Sie sich mit der Community", "Придружете се на нашите виртуелни настани и поврзете се со заедницата")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-1 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{sq(lang, "Data:", "Date:", "Fecha:", "Datum:", "Датум:")}  </span>
                      <span className="text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{sq(lang, "Ora:", "Time:", "Hora:", "Zeit:", "Време:")}</span>
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {sq(lang, "Regjistrohu Tani", "Register Now", "Regístrese Ahora", "Jetzt Registrieren", "Регистрирај се Сега", "S'inscrire maintenant", "Registar agora", "Registrati ora")}
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
            {sq(lang, "Gati për t'u Lidhur?", "Ready to Connect?", "Listo para Conectarse?", "Bereit sich zu Verbinden?", "Подготвени да се Поврзете?")}
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            {sq(lang, "Bashkohuni me mijëra pronarë biznesi që po rriten së bashku. Filloni biseda, ndani njohuri dhe ndërtoni rrjetin tuaj.", "Join thousands of business owners who are growing together. Start conversations, share insights, and build your network.", "Únase a miles de propietarios de negocios que están creciendo juntos. Inicie conversaciones, comparta ideas y construya su red.", "Schließen Sie sich Tausenden von Geschäftsinhabern an, die gemeinsam wachsen. Beginnen Sie Gespräche, teilen Sie Erkenntnisse und bauen Sie Ihr Netzwerk auf.", "Придружете се на илјадници сопственици на бизниси кои растат заедно. Започнете разговори, споделете увиди и градете ја вашата мрежа.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => go("/trial")} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              {sq(lang, "Bashkohu me Komunitetin", "Join Community", "Únete a la Comunidad", "Community Beitreten", "Придружи се на Заедницата", "Rejoindre la communauté", "Juntar-me à comunidade", "Unisciti alla comunità")}
            </Button>
            <Button onClick={() => go("/trial")} variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба", "Commencer l'essai", "Iniciar período de teste", "Inizia la prova")}</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}