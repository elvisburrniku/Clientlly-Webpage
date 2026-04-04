import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Download, Upload, Database, FileText, Users, Clock, Shield, Zap, Star, Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const SetupMigrationPage = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const migrationSteps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: sq(lang, "Importi i të Dhënave", "Data Import", "Importación de Datos", "Datenimport", "Увоз на Податоци"),
      description: sq(lang, "Ngarkoni të dhënat tuaja ekzistuese të biznesit nga çdo platformë - QuickBooks, Excel, Xero, ose çdo sistem tjetër.", "Upload your existing business data from any platform - QuickBooks, Excel, Xero, or any other system.", "Cargue los datos de su negocio existente desde cualquier plataforma - QuickBooks, Excel, Xero o cualquier otro sistema.", "Laden Sie Ihre vorhandenen Geschäftsdaten von jeder Plattform hoch - QuickBooks, Excel, Xero oder jedem anderen System.", "Прикачете ги вашите постоечки деловни податоци од секоја платформа - QuickBooks, Excel, Xero или кој било друг систем."),
      features: [
        sq(lang, "Mapim automatik i të dhënave", "Automated data mapping", "Mapeo automático de datos", "Automatisierte Datenzuordnung", "Автоматско мапирање на податоци") as string,
        sq(lang, "Zbulim & korrigjim gabimesh", "Error detection & correction", "Detección y corrección de errores", "Fehlererkennung & -korrektur", "Откривање и корекција на грешки") as string,
        sq(lang, "Validim & pastrim i të dhënave", "Data validation & cleanup", "Validación y limpieza de datos", "Datenvalidierung & -bereinigung", "Валидација и чистење на податоци") as string
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: sq(lang, "Konfigurim i Sistemit", "System Setup", "Configuración del Sistema", "Systemeinrichtung", "Поставување на Систем"),
      description: sq(lang, "Ekspertët tanë konfigurojnë llogarinë tuaj BusinessFlow Pro me kërkesat tuaja specifike biznesi.", "Our experts configure your BusinessFlow Pro account with your specific business requirements.", "Nuestros expertos configuran su cuenta BusinessFlow Pro con sus requisitos comerciales específicos.", "Unsere Experten konfigurieren Ihr BusinessFlow Pro-Konto mit Ihren spezifischen Geschäftsanforderungen.", "Нашите експерти ја конфигурираат вашата BusinessFlow Pro сметка со вашите специфични деловни барања."),
      features: [
        sq(lang, "Plan kontabël i personalizuar", "Custom chart of accounts", "Plan de cuentas personalizado", "Individueller Kontenplan", "Прилагоден сметковен план") as string,
        sq(lang, "Konfigurim i cilësimeve tatimore", "Tax settings configuration", "Configuración de impuestos", "Steuereinstellungen-Konfiguration", "Конфигурација на даночни поставки") as string,
        sq(lang, "Konfigurim i lejeve të përdoruesve", "User permissions setup", "Configuración de permisos de usuario", "Einrichtung der Benutzerberechtigungen", "Поставување дозволи за корисници") as string
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: sq(lang, "Trajnim i Ekipit", "Team Training", "Capacitación del Equipo", "Team-Schulung", "Обука на Тим"),
      description: sq(lang, "Prezantim gjithëpërfshirës për ekipin tuaj për të siguruar që të gjithë dinë si ta përdorin platformën efektivisht.", "Comprehensive onboarding for your team to ensure everyone knows how to use the platform effectively.", "Incorporación integral para su equipo para asegurar que todos sepan cómo usar la plataforma de manera efectiva.", "Umfassendes Onboarding für Ihr Team, um sicherzustellen, dass jeder die Plattform effektiv nutzen kann.", "Сеопфатно воведување за вашиот тим за да се осигурате дека секој знае како ефективно да ја користи платформата."),
      features: [
        sq(lang, "Sesione trajnimi live", "Live training sessions", "Sesiones de capacitación en vivo", "Live-Schulungssitzungen", "Живи сесии за обука") as string,
        sq(lang, "Video tutoriale", "Video tutorials", "Tutoriales en video", "Video-Tutorials", "Видео упатства") as string,
        sq(lang, "Dokumentacion & udhëzues", "Documentation & guides", "Documentación y guías", "Dokumentation & Anleitungen", "Документација и водичи") as string
      ]
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: sq(lang, "Nisja Live", "Go Live", "Puesta en Marcha", "Live-Schaltung", "Стартување"),
      description: sq(lang, "Nisni sistemin tuaj të ri me besim, duke ditur se gjithçka është konfiguruar dhe testuar siç duhet.", "Launch your new system with confidence, knowing everything is properly configured and tested.", "Lance su nuevo sistema con confianza, sabiendo que todo está correctamente configurado y probado.", "Starten Sie Ihr neues System mit Zuversicht, im Wissen, dass alles ordnungsgemäß konfiguriert und getestet ist.", "Стартувајте го вашиот нов систем со доверба, знаејќи дека сè е правилно конфигурирано и тестирано."),
      features: [
        sq(lang, "Testim përfundimtar i sistemit", "Final system testing", "Prueba final del sistema", "Abschließende Systemtests", "Финално тестирање на систем") as string,
        sq(lang, "Verifikim i të dhënave", "Data verification", "Verificación de datos", "Datenüberprüfung", "Верификација на податоци") as string,
        sq(lang, "Mbështetje e vazhdueshme", "Ongoing support", "Soporte continuo", "Laufende Unterstützung", "Континуирана поддршка") as string
      ]
    }
  ];

  const supportedPlatforms = [
    { name: "QuickBooks", icon: "💼", region: "Global" },
    { name: "Xero", icon: "📊", region: "Global" },
    { name: "Excel/CSV", icon: "📋", region: "Global" },
    { name: "Sage", icon: "🏢", region: "Global" },
    { name: "FreshBooks", icon: "📘", region: "Global" },
    { name: "Wave", icon: "🌊", region: "Global" },
    { name: "Zoho Books", icon: "📚", region: "Global" },
    { name: "NetSuite", icon: "🌐", region: "Global" },
    { name: "Financa 5", icon: "https://isdwebassets.s3.eu-central-1.amazonaws.com/images/1.+Products+Logos/F5_Logo_Circular_128x128.png", region: "Kosovo", description: "InfoSoft - Leading regional ERP" },
    { name: "Alpha Business", icon: "https://imb.al/wp-content/uploads/2023/12/l-1.png", region: "Kosovo", description: "IMB - Complete financial system" },
    { name: "ECOVIS", icon: "https://www.ecovis.com/global/wp-content/uploads/2019/05/ecovis-logo.png", region: "North Macedonia", description: "International audit & tax services" },
    { name: "Accace", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEMxMC41IDEyLjU0IDE2LjU0IDYuNSAyNCA2LjVTMzcuNSAxMi41NCAzNy41IDIwUzMxLjQ2IDMzLjUgMjQgMzMuNVMxMC41IDI3LjQ2IDEwLjUgMjBaIiBmaWxsPSIjMDA3M0M4Ii8+CjwvZz4KPC9zdmc+", region: "North Macedonia", description: "Global cloud accounting technology" },
    { name: "Logo Software", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEMxMC41IDEyLjU0IDE2LjU0IDYuNSAyNCA2LjVTMzcuNSAxMi41NCAzNy41IDIwUzMxLjQ2IDMzLjUgMjQgMzMuNVMxMC41IDI3LjQ2IDEwLjUgMjBaIiBmaWxsPSIjRkY0QjAwIi8+CjwvZz4KPC9zdmc+", region: "Kosovo", description: "Regional ERP solutions" },
    { name: "Kontabiliteti Alpha", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEwxNS41IDEwSDI0TDMwLjUgMjBMMjQgMzBIMTUuNUwxMC41IDIwWiIgZmlsbD0iIzMzN0FDNyIvPgo8L2c+Cjwvc3ZnPg==", region: "Kosovo", description: "Complete accounting suite" },
    { name: "InfoSoft Group", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaTTIwIDIwTDI1IDE1VjI1TDIwIDIwWiIgZmlsbD0iIzAwOEI4QiIvPgo8L2c+Cjwvc3ZnPg==", region: "Kosovo", description: "Regional technology leader" },
    { name: "RSM Kosovo", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaTTE1IDE1SDI1VjI1SDE1VjE1WiIgZmlsbD0iI0M4MTAyRSIvPgo8L2c+Cjwvc3ZnPg==", region: "Kosovo", description: "Global audit network member" },

    { name: sq(lang, "Sisteme të Personalizuara", "Custom Systems", "Sistemas Personalizados", "Benutzerdefinierte Systeme", "Прилагодени Системи") as string, icon: "⚙️", region: "Global" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
              <img 
                src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                alt="Clientlly" 
                className="h-8 w-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clientlly
              </span>
            </Link>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
              <Button variant="ghost" onClick={() => go("/about")} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}
              </Button>
              <Button variant="ghost" onClick={() => { setLocation("/"); setTimeout(() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100); }} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции")}
              </Button>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Button variant="ghost" onClick={() => go("/contact")} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Button>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава")}
              </Button>
              <Button 
                variant="outline"
                onClick={() => go("/subscribe")}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              <Button 
                onClick={() => go("/trial")}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <Button variant="ghost" onClick={() => go("/about")} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}
              </Button>
              <Button variant="ghost" onClick={() => { setLocation("/"); setTimeout(() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100); }} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции")}
              </Button>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Button variant="ghost" onClick={() => go("/contact")} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава")}
              </Button>
              <Button onClick={() => go("/subscribe")} className="w-full bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              <Button onClick={() => go("/trial")} className="w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating sparkles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/80 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-900"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full text-sm font-bold mb-8">
              <Download className="w-4 h-4 mr-2 text-gray-700" />
              <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Konfigurim & Migrim 100% Falas", "100% Free Setup & Migration", "Configuración y Migración 100% Gratis", "100% Kostenlose Einrichtung & Migration", "100% Бесплатно Поставување и Миграција")}</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight animate-professional-fade">
              <span className="text-gray-900 drop-shadow-lg">
                {sq(lang, "Konfigurim", "Free", "Configuración", "Kostenlose", "Бесплатно")} <span className="animate-subtle-gradient">{sq(lang, "Falas", "Setup", "Gratis", "Einrichtung", "Поставување")}</span> {sq(lang, "&", "&", "y", "&", "и")}
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">{sq(lang, "Shërbim Migrimi", "Migration Service", "Servicio de Migración", "Migrationsdienst", "Услуга за Миграција")}</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              {sq(lang, "Ekipi ynë ekspert do të migrojë të gjitha të dhënat tuaja biznesi dhe do të konfigurojë sistemin tuaj plotësisht falas. Nuk nevojitet njohuri teknike - ne trajtojmë gjithçka për ju.", "Our expert team will migrate all your business data and set up your system completely free. No technical knowledge required - we handle everything for you.", "Nuestro equipo de expertos migrará todos los datos de su negocio y configurará su sistema completamente gratis. No se requiere conocimiento técnico - nos encargamos de todo por usted.", "Unser Experten-Team migriert alle Ihre Geschäftsdaten und richtet Ihr System komplett kostenlos ein. Keine technischen Kenntnisse erforderlich - wir kümmern uns um alles für Sie.", "Нашиот експертски тим ќе ги мигрира сите ваши деловни податоци и ќе го постави вашиот систем целосно бесплатно. Не е потребно техничко знаење - ние се грижиме за сè за вас.")}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "Konfigurim në 24-48 orë", "Setup in 24-48 hours", "Configuración en 24-48 horas", "Einrichtung in 24-48 Stunden", "Поставување за 24-48 часа")}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Shield className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "100% Siguri e të dhënave", "100% Data security", "100% Seguridad de datos", "100% Datensicherheit", "100% Безбедност на податоци")}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Zap className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "Zero ndërprerje", "Zero downtime", "Cero tiempo de inactividad", "Keine Ausfallzeiten", "Нула прекини")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Procesi Ynë i", "Our", "Nuestro", "Unser", "Нашиот")} <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Migrimit", "Migration Process", "Proceso de Migración", "Migrationsprozess", "Процес на Миграција")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Nga eksporti i të dhënave te nisja live, ne trajtojmë çdo hap të migrimit tuaj me kujdes ekspert dhe vëmendje ndaj detajeve.", "From data export to go-live, we handle every step of your migration with expert care and attention to detail.", "Desde la exportación de datos hasta la puesta en marcha, manejamos cada paso de su migración con cuidado experto y atención al detalle.", "Vom Datenexport bis zum Go-Live kümmern wir uns um jeden Schritt Ihrer Migration mit fachkundiger Sorgfalt und Liebe zum Detail.", "Од извоз на податоци до стартување, ние се грижиме за секој чекор од вашата миграција со експертска грижа и внимание кон деталите.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 animate-gradient-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 text-white">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900/50 dark:via-blue-950/20 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Migroni Nga", "Migrate From", "Migre Desde", "Migrieren Von", "Мигрирајте Од")} <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Çdo Platformë", "Any Platform", "Cualquier Plataforma", "Jeder Plattform", "Секоја Платформа")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {sq(lang, "Ne mbështesim migrimin e të dhënave nga të gjitha platformat kryesore të kontabilitetit dhe menaxhimit të biznesit.", "We support data migration from all major accounting and business management platforms.", "Apoyamos la migración de datos desde todas las principales plataformas de contabilidad y gestión empresarial.", "Wir unterstützen die Datenmigration von allen großen Buchhaltungs- und Geschäftsverwaltungsplattformen.", "Ние поддржуваме миграција на податоци од сите главни платформи за сметководство и управување со бизнис.")}
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-green-700 dark:text-green-300 font-semibold">{sq(lang, "100% Garanci e Integritetit të të Dhënave", "100% Data Integrity Guaranteed", "100% Integridad de Datos Garantizada", "100% Datenintegrität Garantiert", "100% Гарантиран Интегритет на Податоци")}</span>
            </div>
          </div>

          {/* Global Platforms */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
                <span className="animate-text-wave">{sq(lang, "Platforma Globale", "Global Platforms", "Plataformas Globales", "Globale Plattformen", "Глобални Платформи")}</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {sq(lang, "Migrim pa probleme nga zgjidhjet e kontabilitetit në mbarë botën", "Seamless migration from worldwide accounting software solutions", "Migración sin problemas desde soluciones de software de contabilidad mundiales", "Nahtlose Migration von weltweiten Buchhaltungssoftwarelösungen", "Беспрекорна миграција од светски решенија за сметководствен софтвер")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
              {supportedPlatforms.filter(platform => platform.region === "Global" && platform.name !== "Custom Systems" && platform.name !== sq(lang, "Sisteme të Personalizuara", "Custom Systems", "Sistemas Personalizados", "Benutzerdefinierte Systeme", "Прилагодени Системи")).map((platform, index) => (
                <Card key={index} className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="relative p-6 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{platform.name}</h3>
                    <span className="text-xs text-muted-foreground bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{sq(lang, "Migrim i Plotë", "Full Migration", "Migración Completa", "Vollständige Migration", "Целосна Миграција")}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regional Platforms */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🌎</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
                <span className="animate-text-wave">{sq(lang, "Platforma Rajonale", "Regional Platforms", "Plataformas Regionales", "Regionale Plattformen", "Регионални Платформи")}</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {sq(lang, "Mbështetje e specializuar për softuerin e kontabilitetit ballkanik dhe rajonal", "Specialized support for Balkan and regional accounting software", "Soporte especializado para software de contabilidad balcánico y regional", "Spezialisierte Unterstützung für Balkan- und regionale Buchhaltungssoftware", "Специјализирана поддршка за балканскиот и регионалниот сметководствен софтвер")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
              {supportedPlatforms.filter(platform => platform.region !== "Global" && platform.name !== "Custom Systems" && platform.name !== sq(lang, "Sisteme të Personalizuara", "Custom Systems", "Sistemas Personalizados", "Benutzerdefinierte Systeme", "Прилагодени Системи")).map((platform, index) => (
                <Card key={index} className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="relative p-6 text-center">
                    {/* Country Flag */}
                    <div className="absolute top-2 right-2 text-xl opacity-70">
                      {platform.region === "Kosovo" && "🇽🇰"}
                      {platform.region === "North Macedonia" && "🇲🇰"}
                    </div>
                    
                    <div className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      {typeof platform.icon === 'string' && (platform.icon.startsWith('http') || platform.icon.startsWith('data:')) ? (
                        <img 
                          src={platform.icon} 
                          alt={platform.name}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'block';
                            }
                          }}
                        />
                      ) : (
                        <div className="text-3xl">{platform.icon}</div>
                      )}
                      <div className="text-3xl hidden">🏢</div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{platform.name}</h3>
                    <span className="text-xs text-muted-foreground bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">{sq(lang, "Migrim Rajonal", "Regional Migration", "Migración Regional", "Regionale Migration", "Регионална Миграција")}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">{sq(lang, "Pse të Zgjidhni BusinessFlow Pro?", "Why Choose BusinessFlow Pro?", "Por Qué Elegir BusinessFlow Pro?", "Warum BusinessFlow Pro Wählen?", "Зошто да Изберете BusinessFlow Pro?")}</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-base text-muted-foreground">
            <button 
              onClick={() => go("/data-protection")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Shield className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">{sq(lang, "Mbrojtje dhe privatësi e të dhënave", "Data protection & privacy", "Protección de datos y privacidad", "Datenschutz & Privatsphäre", "Заштита на податоци и приватност")}</span>
            </button>
            <button 
              onClick={() => go("/setup-migration")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">{sq(lang, "Konfigurim & migrim falas", "Free setup & migration", "Configuración y migración gratis", "Kostenlose Einrichtung & Migration", "Бесплатно поставување и миграција")}</span>
            </button>
            <button 
              onClick={() => go("/cancel-anytime")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">{sq(lang, "Anuloni në çdo kohë", "Cancel anytime", "Cancele en cualquier momento", "Jederzeit kündigen", "Откажете во секое време")}</span>
            </button>
            <button 
              onClick={() => go("/expert-support")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">{sq(lang, "Mbështetje ekspertësh 24/7", "24/7 expert support", "Soporte experto 24/7", "24/7 Experten-Support", "24/7 експертска поддршка")}</span>
            </button>

            <button 
              onClick={() => go("/bank-security")}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Shield className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">{sq(lang, "Siguri e nivelit bankar", "Bank-level security", "Seguridad de nivel bancario", "Sicherheit auf Bankniveau", "Безбедност на ниво на банка")}</span>
            </button>

          </div>
        </div>
      </section>

      {/* Custom Systems - Full Width Yellow Section */}
      <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 py-20 px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-12 w-3 h-3 animate-ping delay-0">
            <Sparkles className="w-3 h-3 text-amber-600/30" />
          </div>
          <div className="absolute bottom-12 right-16 w-4 h-4 animate-ping delay-1000">
            <Sparkles className="w-4 h-4 text-orange-600/40" />
          </div>
          <div className="absolute top-16 right-24 w-2 h-2 animate-ping delay-2000">
            <Sparkles className="w-2 h-2 text-yellow-600/30" />
          </div>
          <div className="absolute bottom-20 left-24 w-3 h-3 animate-ping delay-1500">
            <Sparkles className="w-3 h-3 text-amber-600/40" />
          </div>
          <div className="absolute top-32 left-1/3 w-2 h-2 animate-ping delay-3000">
            <Sparkles className="w-2 h-2 text-yellow-600/40" />
          </div>
          <div className="absolute bottom-8 right-1/3 w-3 h-3 animate-ping delay-500">
            <Sparkles className="w-3 h-3 text-amber-600/35" />
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <div className="text-6xl mb-8">⚙️</div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">{sq(lang, "Sisteme të Personalizuara", "Custom Systems", "Sistemas Personalizados", "Benutzerdefinierte Systeme", "Прилагодени Системи")}</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            {sq(lang, "Keni një platformë unike? Ekspertët tanë të migrimit mund të trajtojnë çdo sistem ose format baze të dhënash.", "Have a unique platform? Our migration experts can handle any custom system or database format.", "Tiene una plataforma única? Nuestros expertos en migración pueden manejar cualquier sistema personalizado o formato de base de datos.", "Haben Sie eine einzigartige Plattform? Unsere Migrationsexperten können jedes benutzerdefinierte System oder Datenbankformat handhaben.", "Имате уникатна платформа? Нашите експерти за миграција можат да се справат со кој било прилагоден систем или формат на база на податоци.")}
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <Zap className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-gray-900 dark:text-white font-bold text-lg">{sq(lang, "Konsultim Ekspert", "Expert Consultation", "Consulta de Expertos", "Expertenberatung", "Експертска Консултација")}</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900/50 dark:via-blue-950/20 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">

          {/* Migration Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">{sq(lang, "Zero Humbje të Dhënash", "Zero Data Loss", "Cero Pérdida de Datos", "Null Datenverlust", "Нула Губење на Податоци")}</h4>
              <p className="text-muted-foreground text-sm">{sq(lang, "Validimi i avancuar siguron 100% integritet të të dhënave gjatë migrimit", "Advanced validation ensures 100% data integrity during migration", "La validación avanzada garantiza 100% de integridad de datos durante la migración", "Erweiterte Validierung gewährleistet 100% Datenintegrität bei der Migration", "Напредната валидација обезбедува 100% интегритет на податоците за време на миграцијата")}</p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">{sq(lang, "24-48 Orë", "24-48 Hours", "24-48 Horas", "24-48 Stunden", "24-48 Часа")}</h4>
              <p className="text-muted-foreground text-sm">{sq(lang, "Shumica e migrimeve përfundojnë brenda 1-2 ditëve pune", "Most migrations completed within 1-2 business days", "La mayoría de migraciones completadas en 1-2 días hábiles", "Die meisten Migrationen werden innerhalb von 1-2 Werktagen abgeschlossen", "Повеќето миграции се завршуваат за 1-2 работни дена")}</p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">{sq(lang, "Mbështetje Ekspertësh", "Expert Support", "Soporte Experto", "Experten-Support", "Експертска Поддршка")}</h4>
              <p className="text-muted-foreground text-sm">{sq(lang, "Specialistë të dedikuar migrimi ju udhëzojnë përgjatë procesit", "Dedicated migration specialists guide you through the process", "Especialistas de migración dedicados lo guían a través del proceso", "Dedizierte Migrationsspezialisten begleiten Sie durch den Prozess", "Посветени специјалисти за миграција ве водат низ процесот")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Floating sparkles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/80 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-900"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 drop-shadow-lg">
            <span className="animate-text-wave">{sq(lang, "Gati për të Filluar?", "Ready to Get Started?", "Listo para Comenzar?", "Bereit Loszulegen?", "Подготвени да Започнете?")}</span>
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed drop-shadow-sm">
            {sq(lang, "Bashkohuni me mijëra biznese që kanë migruar me sukses në BusinessFlow Pro. Ekipi ynë ekspert është gati t'ju ndihmojë të bëni kalimin pa probleme.", "Join thousands of businesses who have successfully migrated to BusinessFlow Pro. Our expert team is ready to help you make the switch seamlessly.", "Únase a miles de empresas que han migrado exitosamente a BusinessFlow Pro. Nuestro equipo de expertos está listo para ayudarlo a hacer el cambio sin problemas.", "Schließen Sie sich Tausenden von Unternehmen an, die erfolgreich zu BusinessFlow Pro migriert haben. Unser Experten-Team steht bereit, um Ihnen den nahtlosen Umstieg zu ermöglichen.", "Придружете се на илјадници бизниси кои успешно мигрираа на BusinessFlow Pro. Нашиот експертски тим е подготвен да ви помогне да го направите преминот беспрекорно.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => go("/migration-request")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5 mr-2" />
              {sq(lang, "Fillo Migrimin Falas", "Start Free Migration", "Iniciar Migración Gratis", "Kostenlose Migration Starten", "Започни Бесплатна Миграција")}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/migration-request")}
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              {sq(lang, "Kontaktoni Ekipin e Migrimit", "Contact Migration Team", "Contactar Equipo de Migración", "Migrationsteam Kontaktieren", "Контактирајте го Тимот за Миграција")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupMigrationPage;