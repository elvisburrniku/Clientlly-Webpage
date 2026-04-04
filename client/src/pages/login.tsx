import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  LogIn,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  Building2,
  Globe,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentLanguage: lang } = useLanguage();

  const handleLogin = () => {
    setIsLoading(true);
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain logo-simple cursor-pointer"
                  style={{ 
                    filter: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции")}</Link>
              <Link href="/subscribe" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Link>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 font-bold">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Link>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава")}
              </Button>
              <Link href="/subscribe"
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium rounded-md text-sm inline-block"
              >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Link>
              <Link href="/trial"
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md text-sm inline-block"
              >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-muted-foreground"
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${showMobileMenu ? 'block' : 'hidden'} backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-t border-white/20 dark:border-gray-700/20`}>
          <div className="px-4 py-4 space-y-3">
            <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
            <Link href="/#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции")}</Link>
            <Link href="/subscribe" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}</Link>
            <div className="pt-2 border-t border-white/20">
              <Button variant="ghost" className="w-full justify-start text-sm mb-2" onClick={handleLogin}>{sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава")}</Button>
              <Link href="/subscribe" className="w-full text-sm mb-2 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Link>
              <Link href="/trial" className="w-full text-sm inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <div className="relative z-10 pt-32 pb-16 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-28 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-36 left-3/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <LogIn className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            {sq(lang,
              <>Mirë se Keni Ardhur te <span className="text-indigo-700">Clientlly</span></>,
              <>Welcome Back to <span className="text-indigo-700">Clientlly</span></>,
              <>Bienvenido de Nuevo a <span className="text-indigo-700">Clientlly</span></>,
              <>Willkommen zurück bei <span className="text-indigo-700">Clientlly</span></>,
              <>Добредојдовте назад во <span className="text-indigo-700">Clientlly</span></>
            )}
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8">
            {sq(lang,
              "Vazhdoni menaxhimin e biznesit tuaj me platformën tonë të plotë.",
              "Continue managing your business operations with our comprehensive platform.",
              "Continúe gestionando sus operaciones comerciales con nuestra plataforma completa.",
              "Verwalten Sie Ihre Geschäftsabläufe weiter mit unserer umfassenden Plattform.",
              "Продолжете со управувањето со вашите деловни операции со нашата сеопфатна платформа."
            )}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Login Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight animate-professional-fade">
                  {sq(lang, "Hyni në", "Sign In to Your", "Inicie Sesión en Su", "Melden Sie Sich bei Ihrem", "Најавете се во Вашиот")} <span className="animate-subtle-gradient">{sq(lang, "Panelin Tuaj", "Dashboard", "Panel", "Dashboard", "Панел")}</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  {sq(lang, "Qasuni qendrës komanduese të biznesit tuaj me autentikim të sigurt nga Replit.", "Access your business command center with secure authentication powered by Replit.", "Acceda a su centro de comando empresarial con autenticación segura de Replit.", "Greifen Sie auf Ihr Geschäfts-Kommandozentrum mit sicherer Replit-Authentifizierung zu.", "Пристапете до вашиот деловен команден центар со безбедна автентикација од Replit.")}
                </p>
              </div>

              {/* Login Card */}
              <Card className="max-w-md mx-auto lg:mx-0 glass-effect border border-white/20 backdrop-blur-xl shadow-2xl rounded-3xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{sq(lang, "Hyrje e Sigurt", "Secure Login", "Inicio de Sesión Seguro", "Sichere Anmeldung", "Безбедна Најава")}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {/* Login Button */}
                  <Button 
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{sq(lang, "Duke ju kyçur...", "Signing you in...", "Iniciando sesión...", "Anmeldung läuft...", "Ве најавуваме...")}</span>
                      </div>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5 mr-2" />
                        {sq(lang, "Hyni me Replit", "Sign In with Replit", "Iniciar Sesión con Replit", "Anmelden mit Replit", "Најавете се со Replit")}
                      </>
                    )}
                  </Button>

                  {/* Security Notice */}
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">{sq(lang, "Siguri e Nivelit Bankar", "Bank-Level Security", "Seguridad de Nivel Bancario", "Sicherheit auf Bankniveau", "Безбедност на Ниво на Банка")}</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      {sq(lang, "Hyrja juaj mbrohet me enkriptim të nivelit enterprise dhe autentikim të sigurt OAuth 2.0.", "Your login is protected with enterprise-grade encryption and secure OAuth 2.0 authentication.", "Su inicio de sesión está protegido con cifrado de nivel empresarial y autenticación segura OAuth 2.0.", "Ihre Anmeldung ist mit Enterprise-Grade-Verschlüsselung und sicherer OAuth 2.0-Authentifizierung geschützt.", "Вашата најава е заштитена со енкрипција на ниво на претпријатие и безбедна OAuth 2.0 автентикација.")}
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <div className="mt-8 space-y-3 text-center">
                    <div className="text-sm text-muted-foreground">
                      {sq(lang, "Nuk keni llogari?", "Don't have an account?", "No tiene una cuenta?", "Haben Sie kein Konto?", "Немате сметка?")}{" "}
                      <Link href="/trial" className="text-primary hover:underline font-medium">{sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба")}</Link>
                    </div>
                    <div className="text-sm">
                      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        {sq(lang, "Kthehu në Faqen Kryesore", "Back to Home", "Volver al Inicio", "Zurück zur Startseite", "Назад кон Почетна")}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {sq(lang, "Qendra Komanduese e", "Your Business", "Su Centro de", "Ihr Geschäfts-", "Вашиот Деловен")} <span className="gradient-text bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">{sq(lang, "Biznesit Tuaj", "Command Center", "Comando Empresarial", "Kommandozentrum", "Команден Центар")}</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  {sq(lang, "Vazhdoni menaxhimin e operacioneve tuaja me mjete të fuqishme të dizajnuara për rritjen e biznesit.", "Continue managing your operations with powerful tools designed for business growth.", "Continúe gestionando sus operaciones con herramientas poderosas diseñadas para el crecimiento empresarial.", "Verwalten Sie Ihre Abläufe weiter mit leistungsstarken Tools für Geschäftswachstum.", "Продолжете со управувањето на вашите операции со моќни алатки дизајнирани за деловен раст.")}
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{sq(lang, "Panel i Shpejtë si Vetëtima", "Lightning Fast Dashboard", "Panel Ultrarrápido", "Blitzschnelles Dashboard", "Молњевито Брз Панел")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sq(lang, "Qasje e menjëhershme në metrikat e biznesit në kohë reale, raporte dhe analiza pa kohë ngarkimi.", "Instant access to real-time business metrics, reports, and analytics with zero loading time.", "Acceso instantáneo a métricas empresariales en tiempo real, informes y análisis sin tiempo de carga.", "Sofortiger Zugriff auf Echtzeit-Geschäftsmetriken, Berichte und Analysen ohne Ladezeit.", "Моментален пристап до деловни метрики во реално време, извештаи и аналитика без време на вчитување.")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{sq(lang, "Qendër Bashkëpunimi Ekipor", "Team Collaboration Hub", "Centro de Colaboración en Equipo", "Team-Zusammenarbeitszentrum", "Центар за Тимска Соработка")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sq(lang, "Bashkëpunoni pa probleme me anëtarët e ekipit, ndani projekte dhe gjurmoni progresin në kohë reale.", "Seamlessly collaborate with team members, share projects, and track progress in real-time.", "Colabore sin problemas con los miembros del equipo, comparta proyectos y realice un seguimiento del progreso en tiempo real.", "Arbeiten Sie nahtlos mit Teammitgliedern zusammen, teilen Sie Projekte und verfolgen Sie den Fortschritt in Echtzeit.", "Соработувајте беспрекорно со членовите на тимот, споделувајте проекти и следете го напредокот во реално време.")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{sq(lang, "Inteligjencë Biznesi", "Business Intelligence", "Inteligencia de Negocios", "Business Intelligence", "Деловна Интелигенција")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sq(lang, "Analiza të avancuara dhe njohuri të fuqizuara nga AI për vendime biznesi të informuara.", "Advanced analytics and AI-powered insights to drive informed business decisions.", "Análisis avanzados e información impulsada por IA para tomar decisiones empresariales informadas.", "Erweiterte Analysen und KI-gestützte Erkenntnisse für fundierte Geschäftsentscheidungen.", "Напредна аналитика и увиди поддржани од AI за информирани деловни одлуки.")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{sq(lang, "Automatizim që Kursen Kohë", "Time-Saving Automation", "Automatización que Ahorra Tiempo", "Zeitsparende Automatisierung", "Автоматизација што Штеди Време")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sq(lang, "Procese pune të automatizuara, planifikim inteligjent dhe menaxhim i detyrave për rritjen e produktivitetit.", "Automated workflows, smart scheduling, and intelligent task management to boost productivity.", "Flujos de trabajo automatizados, programación inteligente y gestión inteligente de tareas para impulsar la productividad.", "Automatisierte Workflows, intelligente Planung und intelligentes Aufgabenmanagement zur Steigerung der Produktivität.", "Автоматизирани работни текови, паметно закажување и интелигентно управување со задачи за зголемување на продуктивноста.")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">{sq(lang, "50,000+ Përdorues Aktivë", "50,000+ Active Users", "50,000+ Usuarios Activos", "50.000+ Aktive Benutzer", "50.000+ Активни Корисници")}</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300">
                  <Star className="h-4 w-4" />
                  <span className="font-medium">{sq(lang, "4.9/5 Vlerësim", "4.9/5 Rating", "4.9/5 Calificación", "4.9/5 Bewertung", "4.9/5 Оценка")}</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">{sq(lang, "ISO 27001 i Certifikuar", "ISO 27001 Certified", "ISO 27001 Certificado", "ISO 27001 Zertifiziert", "ISO 27001 Сертифициран")}</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-16 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-2 h-2 bg-white/50 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-12 left-16 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-white/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/45 rounded-full animate-bounce delay-600"></div>

        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
          <h3 className="text-3xl font-bold text-black mb-6">
            {sq(lang, "I ri në BusinessFlow Pro?", "New to BusinessFlow Pro?", "Nuevo en BusinessFlow Pro?", "Neu bei BusinessFlow Pro?", "Нов во BusinessFlow Pro?")}
          </h3>
          <p className="text-lg text-black mb-8">
            {sq(lang, "Bashkohuni me mijëra biznese që kanë transformuar operacionet e tyre me platformën tonë gjithëpërfshirëse.", "Join thousands of businesses that have transformed their operations with our comprehensive platform.", "Únase a miles de empresas que han transformado sus operaciones con nuestra plataforma integral.", "Schließen Sie sich Tausenden von Unternehmen an, die ihre Abläufe mit unserer umfassenden Plattform transformiert haben.", "Придружете се на илјадници бизниси кои ги трансформираа своите операции со нашата сеопфатна платформа.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="h-5 w-5 mr-2" />
                {sq(lang, "Filloni Provën Tuaj 14-Ditore", "Start Your 14-Day Trial", "Inicie Su Prueba de 14 Días", "Starten Sie Ihre 14-Tage-Testversion", "Започнете ја Вашата 14-Дневна Проба")}
              </Button>
            </Link>
            <Link href="/subscribe">
              <Button variant="outline" className="px-8 py-3 text-lg font-semibold rounded-2xl border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                {sq(lang, "Shikoni Planet e Çmimeve", "View Pricing Plans", "Ver Planes de Precios", "Preispläne Ansehen", "Погледнете Ценовни Планови")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}