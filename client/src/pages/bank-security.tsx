import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Shield, Lock, Eye, Server, Globe, Award, Star, Menu, X, KeyRound, FileCheck, Zap } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const BankSecurityPage = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: sq(lang, "Enkriptimi SSL 256-Bit", "256-Bit SSL Encryption", "Cifrado SSL de 256 bits", "256-Bit SSL-Verschlüsselung", "256-Битна SSL Енкрипција"),
      description: sq(lang, "Të gjitha të dhënat e transmetuara ndërmjet shfletuesit tuaj dhe serverëve tanë mbrohen me enkriptim të nivelit ushtarak.", "All data transmitted between your browser and our servers is protected with military-grade encryption.", "Todos los datos transmitidos entre su navegador y nuestros servidores están protegidos con cifrado de grado militar.", "Alle zwischen Ihrem Browser und unseren Servern übertragenen Daten sind mit militärischer Verschlüsselung geschützt.", "Сите податоци пренесени помеѓу вашиот прелистувач и нашите сервери се заштитени со воена енкрипција."),
      certifications: ["SOC 2 Type II", "ISO 27001", "PCI DSS Level 1"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: sq(lang, "Qendra të Sigurta të Dhënash", "Secure Data Centers", "Centros de Datos Seguros", "Sichere Rechenzentren", "Безбедни Центри за Податоци"),
      description: sq(lang, "Të dhënat tuaja ruhen në qendra të dhënash të nivelit enterprise me monitorim 24/7 dhe siguri fizike.", "Your data is stored in enterprise-grade data centers with 24/7 monitoring and physical security.", "Sus datos se almacenan en centros de datos empresariales con monitoreo 24/7 y seguridad física.", "Ihre Daten werden in Rechenzentren der Enterprise-Klasse mit 24/7-Überwachung und physischer Sicherheit gespeichert.", "Вашите податоци се чуваат во центри за податоци од претпријатие со 24/7 мониторинг и физичка безбедност."),
      certifications: ["SOC 1 Type II", "SSAE 16", "AWS Compliant"]
    },
    {
      icon: <KeyRound className="w-8 h-8" />,
      title: sq(lang, "Autentifikimi Shumëfaktorësh", "Multi-Factor Authentication", "Autenticación Multifactor", "Multi-Faktor-Authentifizierung", "Мулти-Факторска Автентикација"),
      description: sq(lang, "Shtoni një shtresë shtesë sigurie me autentifikim dyfaktorësh dhe opsione identifikimi biometrik.", "Add an extra layer of security with two-factor authentication and biometric login options.", "Agregue una capa adicional de seguridad con autenticación de dos factores y opciones de inicio de sesión biométrico.", "Fügen Sie eine zusätzliche Sicherheitsebene mit Zwei-Faktor-Authentifizierung und biometrischen Anmeldeoptionen hinzu.", "Додајте дополнителен слој безбедност со двофакторска автентикација и биометриски опции за најава."),
      certifications: ["FIDO2 Certified", "WebAuthn", "TOTP Support"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: sq(lang, "Monitorimi i Aksesit", "Access Monitoring", "Monitoreo de Acceso", "Zugriffsüberwachung", "Мониторинг на Пристап"),
      description: sq(lang, "Sistemet e avancuara të monitorimit gjurmojnë të gjitha përpjekjet e aksesit dhe ju alarmojnë për aktivitet të dyshimtë.", "Advanced monitoring systems track all access attempts and alert you to suspicious activity.", "Los sistemas avanzados de monitoreo rastrean todos los intentos de acceso y le alertan sobre actividades sospechosas.", "Fortschrittliche Überwachungssysteme verfolgen alle Zugriffsversuche und warnen Sie vor verdächtigen Aktivitäten.", "Напредните системи за мониторинг ги следат сите обиди за пристап и ве предупредуваат за сомнителна активност."),
      certifications: [
        sq(lang, "Alarme në kohë reale", "Real-time alerts", "Alertas en tiempo real", "Echtzeit-Warnungen", "Предупредувања во реално време") as string,
        sq(lang, "Regjistrime aktiviteti", "Activity logs", "Registros de actividad", "Aktivitätsprotokolle", "Дневници на активност") as string,
        sq(lang, "Gjurmim IP", "IP tracking", "Rastreo de IP", "IP-Verfolgung", "IP следење") as string
      ]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: sq(lang, "Certifikim i Kontrollit të Organizatës së Shërbimit 2 për siguri, disponueshmëri dhe konfidencialitet", "Service Organization Control 2 certification for security, availability, and confidentiality", "Certificación de Control de Organización de Servicios 2 para seguridad, disponibilidad y confidencialidad", "Service Organization Control 2 Zertifizierung für Sicherheit, Verfügbarkeit und Vertraulichkeit", "Сертификат за контрола на услужна организација 2 за безбедност, достапност и доверливост"),
      logo: "🛡️"
    },
    {
      name: "ISO 27001",
      description: sq(lang, "Standard ndërkombëtar për sistemet e menaxhimit të sigurisë së informacionit", "International standard for information security management systems", "Estándar internacional para sistemas de gestión de seguridad de la información", "Internationaler Standard für Informationssicherheits-Managementsysteme", "Меѓународен стандард за системи за управување со безбедност на информации"),
      logo: "🏆"
    },
    {
      name: "PCI DSS",
      description: sq(lang, "Pajtueshmëria me Standardin e Sigurisë së të Dhënave të Industrisë së Kartave të Pagesës", "Payment Card Industry Data Security Standard compliance", "Cumplimiento del Estándar de Seguridad de Datos de la Industria de Tarjetas de Pago", "Einhaltung des Payment Card Industry Data Security Standards", "Усогласеност со стандардот за безбедност на податоци на индустријата за платежни картички"),
      logo: "💳"
    },
    {
      name: "GDPR",
      description: sq(lang, "Pajtueshmëria me Rregulloren e Përgjithshme të Mbrojtjes së të Dhënave për mbrojtjen e të dhënave në BE", "General Data Protection Regulation compliance for EU data protection", "Cumplimiento del Reglamento General de Protección de Datos para protección de datos de la UE", "Einhaltung der Datenschutz-Grundverordnung für den EU-Datenschutz", "Усогласеност со Општата регулатива за заштита на податоци за заштита на податоци во ЕУ"),
      logo: "🇪🇺"
    },
    {
      name: "CCPA",
      description: sq(lang, "Pajtueshmëria me Aktin e Privatësisë së Konsumatorit të Kalifornisë për të drejtat e privatësisë", "California Consumer Privacy Act compliance for privacy rights", "Cumplimiento de la Ley de Privacidad del Consumidor de California para derechos de privacidad", "Einhaltung des California Consumer Privacy Act für Datenschutzrechte", "Усогласеност со Законот за приватност на потрошувачите на Калифорнија за права на приватност"),
      logo: "🏛️"
    },
    {
      name: "HIPAA",
      description: sq(lang, "Gati për Aktin e Portabilitetit dhe Përgjegjësisë së Sigurimeve Shëndetësore", "Health Insurance Portability and Accountability Act ready", "Preparado para la Ley de Portabilidad y Responsabilidad del Seguro de Salud", "Bereit für den Health Insurance Portability and Accountability Act", "Подготвено за Законот за преносливост и одговорност на здравственото осигурување"),
      logo: "🏥"
    }
  ];

  const securityMeasures = [
    {
      title: sq(lang, "Enkriptimi i të Dhënave", "Data Encryption", "Cifrado de Datos", "Datenverschlüsselung", "Енкрипција на Податоци"),
      description: sq(lang, "Të gjitha të dhënat në repozë dhe në tranzit enkriptohen duke përdorur enkriptimin AES-256", "All data at rest and in transit is encrypted using AES-256 encryption", "Todos los datos en reposo y en tránsito están cifrados usando cifrado AES-256", "Alle ruhenden und übertragenen Daten werden mit AES-256-Verschlüsselung verschlüsselt", "Сите податоци во мирување и во транзит се шифрирани со AES-256 енкрипција"),
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: sq(lang, "Auditime të Rregullta Sigurie", "Regular Security Audits", "Auditorías de Seguridad Regulares", "Regelmäßige Sicherheitsaudits", "Редовни Безбедносни Ревизии"),
      description: sq(lang, "Auditime sigurie nga palë të treta të kryera çdo tremujor nga ekspertë të certifikuar", "Third-party security audits conducted quarterly by certified experts", "Auditorías de seguridad de terceros realizadas trimestralmente por expertos certificados", "Vierteljährliche Sicherheitsaudits durch zertifizierte Drittanbieter-Experten", "Безбедносни ревизии од трети страни спроведени квартално од сертифицирани експерти"),
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: sq(lang, "Kopje Rezervë Automatike", "Automated Backups", "Copias de Seguridad Automatizadas", "Automatisierte Backups", "Автоматски Резервни Копии"),
      description: sq(lang, "Kopje rezervë të shumta ditore të ruajtura në lokacione të shpërndara gjeografikisht", "Multiple daily backups stored in geographically distributed locations", "Múltiples copias de seguridad diarias almacenadas en ubicaciones distribuidas geográficamente", "Mehrere tägliche Backups an geografisch verteilten Standorten gespeichert", "Повеќе дневни резервни копии складирани на географски дистрибуирани локации"),
      icon: <Server className="w-6 h-6" />
    },
    {
      title: sq(lang, "Siguria e Rrjetit", "Network Security", "Seguridad de Red", "Netzwerksicherheit", "Мрежна Безбедност"),
      description: sq(lang, "Mbrojtje e avancuar me firewall dhe sisteme të zbulimit të ndërhyrjeve", "Advanced firewall protection and intrusion detection systems", "Protección avanzada de firewall y sistemas de detección de intrusiones", "Fortschrittlicher Firewall-Schutz und Einbruchserkennungssysteme", "Напредна заштита со заштитен ѕид и системи за откривање на упади"),
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: sq(lang, "Kontrolle Aksesi", "Access Controls", "Controles de Acceso", "Zugriffskontrollen", "Контроли на Пристап"),
      description: sq(lang, "Leje të bazuara në role dhe parimi i aksesit me privilegj minimal", "Role-based permissions and principle of least privilege access", "Permisos basados en roles y principio de acceso con privilegios mínimos", "Rollenbasierte Berechtigungen und Prinzip des geringsten Privilegs", "Дозволи базирани на улоги и принцип на пристап со најмали привилегии"),
      icon: <KeyRound className="w-6 h-6" />
    },
    {
      title: sq(lang, "Përgjigje ndaj Incidenteve", "Incident Response", "Respuesta a Incidentes", "Vorfallreaktion", "Одговор на Инциденти"),
      description: sq(lang, "Ekip sigurie 24/7 me protokolle të shpejta të përgjigjes ndaj incidenteve", "24/7 security team with rapid incident response protocols", "Equipo de seguridad 24/7 con protocolos rápidos de respuesta a incidentes", "24/7-Sicherheitsteam mit schnellen Vorfallreaktionsprotokollen", "Безбедносен тим 24/7 со брзи протоколи за одговор на инциденти"),
      icon: <Zap className="w-6 h-6" />
    }
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

            <div className="lg:hidden flex items-center gap-2">
              <LanguageSelector />
              <Button
                variant="ghost"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
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
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500">
        <div className="absolute inset-0 -z-10">
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
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full text-sm font-bold text-gray-800 mb-8">
              <Shield className="w-4 h-4 mr-2 text-gray-700" />
              {sq(lang, "Provoni Pa Rrezik Sot", "Try Risk-Free Today", "Pruebe Sin Riesgo Hoy", "Heute Risikofrei Testen", "Пробајте Без Ризик Денес")}
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight animate-professional-fade">
              <span className="text-gray-900 drop-shadow-lg">
                {sq(lang, "Siguri e Nivelit", "Bank-Level", "Seguridad de Nivel", "Sicherheit auf", "Безбедност на Ниво")} <span className="animate-subtle-gradient">{sq(lang, "Bankar", "Security", "Bancario", "Bankniveau", "Банка")}</span>
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">{sq(lang, "Mbrojtje", "Protection", "Protección", "Schutz", "Заштита")}</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              {sq(lang, "Filloni provën tuaj falas duke ditur se mund ta anuloni në çdo kohë pa asnjë komplikim. Përjetoni fuqinë e plotë të BusinessFlow Pro me qetësi të plotë mendore.", "Start your free trial knowing you can cancel anytime without any complications. Experience the full power of BusinessFlow Pro with complete peace of mind.", "Comience su prueba gratuita sabiendo que puede cancelar en cualquier momento sin complicaciones. Experimente todo el poder de BusinessFlow Pro con total tranquilidad.", "Starten Sie Ihre kostenlose Testversion in dem Wissen, dass Sie jederzeit ohne Komplikationen kündigen können. Erleben Sie die volle Leistung von BusinessFlow Pro mit völliger Gelassenheit.", "Започнете ја вашата бесплатна проба знаејќи дека можете да откажете во секое време без компликации. Искусете ја целосната моќ на BusinessFlow Pro со целосен мир.")}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button 
                onClick={() => go("/trial")}
                className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion Starten", "Започни Бесплатна Проба")}
              </Button>
              <Button 
                onClick={() => go("/subscribe")}
                variant="outline"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                {sq(lang, "Shiko Planet e Çmimeve", "View Pricing Plans", "Ver Planes de Precios", "Preispläne Ansehen", "Погледни Ценовни Планови")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight animate-professional-fade">
              {sq(lang, "Veçori Sigurie", "Enterprise", "Funciones de Seguridad", "Sicherheitsfunktionen", "Безбедносни Функции")} <span className="animate-subtle-gradient">{sq(lang, "Enterprise", "Security Features", "Empresariales", "für Unternehmen", "за Претпријатија")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Mbrojtje sigurie me shumë shtresa që tejkalon standardet e industrisë dhe kërkesat rregullative.", "Multi-layered security protection that exceeds industry standards and regulatory requirements.", "Protección de seguridad multicapa que supera los estándares de la industria y los requisitos regulatorios.", "Mehrschichtiger Sicherheitsschutz, der Branchenstandards und regulatorische Anforderungen übertrifft.", "Повеќеслојна безбедносна заштита што ги надминува индустриските стандарди и регулаторните барања.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 text-white">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Pajtueshmëria me", "Industry", "Cumplimiento de la", "Branchenkonformität", "Индустриска")} <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Industrinë", "Compliance", "Industria", "Compliance", "Усогласеност")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Ne plotësojmë ose tejkalojmë të gjitha standardet kryesore të sigurisë dhe privatësisë.", "We meet or exceed all major security and privacy compliance standards.", "Cumplimos o superamos todos los principales estándares de seguridad y privacidad.", "Wir erfüllen oder übertreffen alle wichtigen Sicherheits- und Datenschutzstandards.", "Ги исполнуваме или надминуваме сите главни стандарди за безбедност и приватност.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{standard.logo}</div>
                  <h3 className="text-lg font-black text-foreground mb-3">{standard.name}</h3>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Masat e", "Security", "Medidas de", "Sicherheits-", "Безбедносни")} <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Sigurisë", "Measures", "Seguridad", "Maßnahmen", "Мерки")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Mbrojtje gjithëpërfshirëse në çdo nivel të infrastrukturës dhe aplikacionit tonë.", "Comprehensive protection at every level of our infrastructure and application.", "Protección integral en cada nivel de nuestra infraestructura y aplicación.", "Umfassender Schutz auf jeder Ebene unserer Infrastruktur und Anwendung.", "Сеопфатна заштита на секое ниво на нашата инфраструктура и апликација.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                      {measure.icon}
                    </div>
                    <h3 className="text-lg font-black text-foreground">{measure.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                {sq(lang, "Siguroni Biznesin Tuaj", "Secure Your", "Asegure Su", "Sichern Sie Ihr", "Обезбедете Го Вашиот")} <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Sot", "Business Today", "Negocio Hoy", "Unternehmen Heute", "Бизнис Денес")}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {sq(lang, "Bashkohuni me mijëra biznese që i besojnë BusinessFlow Pro me të dhënat e tyre më të ndjeshme. Përjetoni siguri të nivelit enterprise pa kompleksitetin e enterprise.", "Join thousands of businesses who trust BusinessFlow Pro with their most sensitive data. Experience enterprise-grade security without the enterprise complexity.", "Únase a miles de empresas que confían en BusinessFlow Pro con sus datos más sensibles. Experimente seguridad de nivel empresarial sin la complejidad empresarial.", "Schließen Sie sich Tausenden von Unternehmen an, die BusinessFlow Pro mit ihren sensibelsten Daten vertrauen. Erleben Sie Sicherheit auf Unternehmensebene ohne die Unternehmenskomplexität.", "Придружете се на илјадници бизниси кои му веруваат на BusinessFlow Pro со нивните најчувствителни податоци. Искусете безбедност на ниво на претпријатие без комплексноста на претпријатие.")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => go("/trial")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  {sq(lang, "Fillo Provën e Sigurt", "Start Secure Trial", "Iniciar Prueba Segura", "Sichere Testversion Starten", "Започни Безбедна Проба")}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => go("/contact")}
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  {sq(lang, "Pyetje për Sigurinë?", "Security Questions?", "Preguntas de Seguridad?", "Sicherheitsfragen?", "Прашања за Безбедност?")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankSecurityPage;