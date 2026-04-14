import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Calendar, CreditCard, Shield, Users, Clock, Zap, Star, Menu, X, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';


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

const CancelAnytimePage = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cancelFeatures = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: sq(lang, "Pa Kontrata Afatgjata", "No Long-Term Contracts", "Sin Contratos a Largo Plazo", "Keine Langzeitverträge", "Без Долгорочни Договори"),
      description: sq(lang, "Faturimi mujor do të thotë se nuk jeni kurrë të bllokuar në një angazhim të gjatë.", "Month-to-month billing means you're never locked into a lengthy commitment.", "La facturación mensual significa que nunca está atado a un compromiso largo.", "Monatliche Abrechnung bedeutet, dass Sie nie an eine langfristige Verpflichtung gebunden sind.", "Месечно фактурирање значи дека никогаш не сте заклучени во долгорочна обврска."),
      benefits: [
        sq(lang, "Anuloni në çdo kohë", "Cancel at any time", "Cancele en cualquier momento", "Jederzeit kündigen", "Откажете во секое време") as string,
        sq(lang, "Pa tarifa ndërprerje të hershme", "No early termination fees", "Sin tarifas por terminación anticipada", "Keine vorzeitigen Kündigungsgebühren", "Без такси за рано прекинување") as string,
        sq(lang, "Cikle faturimi fleksibël", "Flexible billing cycles", "Ciclos de facturación flexibles", "Flexible Abrechnungszyklen", "Флексибилни циклуси на фактурирање") as string
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: sq(lang, "Proces i Thjeshtë Anulimi", "Simple Cancellation Process", "Proceso de Cancelación Simple", "Einfacher Kündigungsprozess", "Едноставен Процес на Откажување"),
      description: sq(lang, "Anuloni abonimin tuaj me vetëm disa klikime - pa nevoja për thirrje telefonike ose procedura komplekse.", "Cancel your subscription with just a few clicks - no phone calls or complex procedures required.", "Cancele su suscripción con solo unos clics - sin llamadas telefónicas ni procedimientos complejos.", "Kündigen Sie Ihr Abonnement mit nur wenigen Klicks - keine Telefonanrufe oder komplexe Verfahren erforderlich.", "Откажете ја вашата претплата со само неколку кликови - без телефонски повици или сложени процедури."),
      benefits: [
        sq(lang, "Anulim vetë-shërbim", "Self-service cancellation", "Cancelación de autoservicio", "Selbstbedienungskündigung", "Самопослужно откажување") as string,
        sq(lang, "Përpunim i menjëhershëm", "Instant processing", "Procesamiento instantáneo", "Sofortige Verarbeitung", "Моментална обработка") as string,
        sq(lang, "Pa kërkesa të fshehura", "No hidden requirements", "Sin requisitos ocultos", "Keine versteckten Anforderungen", "Без скриени барања") as string
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: sq(lang, "Eksport & Kopje Rezervë të Dhënash", "Data Export & Backup", "Exportación y Respaldo de Datos", "Datenexport & Backup", "Извоз и Резервна Копија на Податоци"),
      description: sq(lang, "Shkarkoni të gjitha të dhënat e biznesit tuaj para se të anuloni për të siguruar që nuk humbisni informacion të rëndësishëm.", "Download all your business data before canceling to ensure you never lose important information.", "Descargue todos los datos de su negocio antes de cancelar para asegurarse de nunca perder información importante.", "Laden Sie alle Ihre Geschäftsdaten vor der Kündigung herunter, um sicherzustellen, dass Sie keine wichtigen Informationen verlieren.", "Преземете ги сите ваши деловни податоци пред откажување за да се осигурате дека никогаш нема да изгубите важни информации."),
      benefits: [
        sq(lang, "Eksport i plotë i të dhënave", "Complete data export", "Exportación completa de datos", "Vollständiger Datenexport", "Целосен извоз на податоци") as string,
        sq(lang, "Formate të shumta skedarësh", "Multiple file formats", "Múltiples formatos de archivo", "Mehrere Dateiformate", "Повеќе формати на датотеки") as string,
        sq(lang, "Periudhë pritjeje 30-ditore", "30-day grace period", "Período de gracia de 30 días", "30-Tage-Gnadenfrist", "30-дневен грејс период", "Période de grâce de 30 jours", "Período de carência de 30 dias", "Periodo di grazia di 30 giorni") as string
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: sq(lang, "Riaktivizim në Çdo Kohë", "Reactivation Anytime", "Reactivación en Cualquier Momento", "Reaktivierung Jederzeit", "Реактивирање во Секое Време"),
      description: sq(lang, "Ndërruat mendje? Riaktivizoni llogarinë tuaj dhe riktheni të gjitha të dhënat tuaja menjëherë.", "Changed your mind? Reactivate your account and restore all your data instantly.", "Cambió de opinión? Reactive su cuenta y restaure todos sus datos al instante.", "Meinung geändert? Reaktivieren Sie Ihr Konto und stellen Sie alle Ihre Daten sofort wieder her.", "Ги променивте мислите? Реактивирајте ја вашата сметка и вратете ги сите ваши податоци веднаш."),
      benefits: [
        sq(lang, "Riaktivizim me një klikim", "One-click reactivation", "Reactivación con un clic", "Ein-Klick-Reaktivierung", "Реактивирање со еден клик") as string,
        sq(lang, "Rikthim i të dhënave", "Data restoration", "Restauración de datos", "Datenwiederherstellung", "Враќање на податоци") as string,
        sq(lang, "Të njëjtat cilësime llogarie", "Same account settings", "Misma configuración de cuenta", "Gleiche Kontoeinstellungen", "Исти поставки на сметка") as string
      ]
    }
  ];

  const steps = [
    {
      step: "1",
      title: sq(lang, "Aksesoni Cilësimet e Llogarisë", "Access Account Settings", "Acceder a Configuración de Cuenta", "Kontoeinstellungen Aufrufen", "Пристапете до Поставки на Сметка"),
      description: sq(lang, "Hyni në panelin tuaj dhe navigoni te Cilësimet e Llogarisë > Faturimi.", "Log into your dashboard and navigate to Account Settings > Billing.", "Inicie sesión en su panel y navegue a Configuración de Cuenta > Facturación.", "Melden Sie sich in Ihrem Dashboard an und navigieren Sie zu Kontoeinstellungen > Abrechnung.", "Најавете се во вашата контролна табла и одете до Поставки на Сметка > Фактурирање.")
    },
    {
      step: "2", 
      title: sq(lang, "Klikoni Anulo Abonimin", "Click Cancel Subscription", "Hacer Clic en Cancelar Suscripción", "Klicken Sie auf Abonnement Kündigen", "Кликнете Откажи Претплата"),
      description: sq(lang, "Gjeni butonin 'Anulo Abonimin' dhe klikoni për të filluar procesin.", "Find the 'Cancel Subscription' button and click it to start the process.", "Encuentre el botón 'Cancelar Suscripción' y haga clic para iniciar el proceso.", "Finden Sie die Schaltfläche 'Abonnement kündigen' und klicken Sie darauf, um den Vorgang zu starten.", "Најдете го копчето 'Откажи Претплата' и кликнете за да го започнете процесот.")
    },
    {
      step: "3",
      title: sq(lang, "Eksportoni të Dhënat Tuaja", "Export Your Data", "Exporte Sus Datos", "Exportieren Sie Ihre Daten", "Извезете ги Вашите Податоци"),
      description: sq(lang, "Shkarkoni të gjitha të dhënat e biznesit tuaj në formatin e preferuar para se të konfirmoni.", "Download all your business data in your preferred format before confirming.", "Descargue todos los datos de su negocio en su formato preferido antes de confirmar.", "Laden Sie alle Ihre Geschäftsdaten in Ihrem bevorzugten Format herunter, bevor Sie bestätigen.", "Преземете ги сите ваши деловни податоци во вашиот претпочитан формат пред потврдување.")
    },
    {
      step: "4",
      title: sq(lang, "Konfirmoni Anulimin", "Confirm Cancellation", "Confirmar Cancelación", "Kündigung Bestätigen", "Потврдете Откажување"),
      description: sq(lang, "Rishikoni detajet e anulimit dhe konfirmoni për të përfunduar procesin.", "Review the cancellation details and confirm to complete the process.", "Revise los detalles de cancelación y confirme para completar el proceso.", "Überprüfen Sie die Kündigungsdetails und bestätigen Sie, um den Vorgang abzuschließen.", "Прегледајте ги деталите за откажување и потврдете за да го завршите процесот.")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950">
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
                {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас", "À propos de nous", "Sobre nós", "Chi siamo")}
              </Button>
              <Button variant="ghost" onClick={() => { setLocation("/"); setTimeout(() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100); }} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}
              </Button>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}
              </Button>
              <Button variant="ghost" onClick={() => go("/contact")} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè", "Contactez-nous", "Contacte-nos", "Contattaci")}
              </Button>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава", "Connexion", "Iniciar sessão", "Accedi")}
              </Button>
              <Button 
                variant="outline"
                onClick={() => go("/subscribe")}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}</Button>
              <Button 
                onClick={() => go("/trial")}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба", "Commencer l'essai", "Iniciar período de teste", "Inizia la prova")}</Button>
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
                {sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас", "À propos de nous", "Sobre nós", "Chi siamo")}
              </Button>
              <Button variant="ghost" onClick={() => { setLocation("/"); setTimeout(() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100); }} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}
              </Button>
              <Button variant="ghost" onClick={() => go("/subscribe")} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}
              </Button>
              <Button variant="ghost" onClick={() => go("/contact")} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè", "Contactez-nous", "Contacte-nos", "Contattaci")}
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најава", "Connexion", "Iniciar sessão", "Accedi")}
              </Button>
              <Button onClick={() => go("/subscribe")} className="w-full bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}</Button>
              <Button onClick={() => go("/trial")} className="w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба", "Commencer l'essai", "Iniciar período de teste", "Inizia la prova")}</Button>
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
              <AlertCircle className="w-4 h-4 mr-2 text-gray-700" />
              {sq(lang, "Provoni Pa Rrezik Sot", "Try Risk-Free Today", "Pruebe Sin Riesgo Hoy", "Heute Risikofrei Testen", "Пробајте Без Ризик Денес", "Essayer sans risque aujourd'hui", "Experimentar sem risco hoje", "Prova senza rischi oggi")}
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight animate-professional-fade">
              <span className="text-gray-900 drop-shadow-lg">
                {sq(lang, "Provoni", "Try", "Pruebe", "Testen Sie", "Пробајте")} <span className="animate-subtle-gradient">{sq(lang, "Pa Rrezik", "Risk-Free", "Sin Riesgo", "Risikofrei", "Без Ризик")}</span>
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">{sq(lang, "Sot", "Today", "Hoy", "Heute", "Денес", "Aujourd'hui", "Hoje", "Oggi")}</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              {sq(lang, "Filloni provën tuaj falas duke ditur se mund ta anuloni në çdo kohë pa asnjë komplikim. Përjetoni fuqinë e plotë të BusinessFlow Pro me qetësi të plotë mendore.", "Start your free trial knowing you can cancel anytime without any complications. Experience the full power of BusinessFlow Pro with complete peace of mind.", "Comience su prueba gratuita sabiendo que puede cancelar en cualquier momento sin complicaciones. Experimente todo el poder de BusinessFlow Pro con total tranquilidad.", "Starten Sie Ihre kostenlose Testversion in dem Wissen, dass Sie jederzeit ohne Komplikationen kündigen können. Erleben Sie die volle Leistung von BusinessFlow Pro mit völliger Gelassenheit.", "Започнете ја вашата бесплатна проба знаејќи дека можете да откажете во секое време без компликации. Искусете ја целосната моќ на BusinessFlow Pro со целосен мир.", "Commencez votre essai gratuit en sachant que vous pouvez annuler à tout moment sans complication.", "Inicie o seu teste gratuito sabendo que pode cancelar a qualquer momento sem complicações.", "Inizia la tua prova gratuita sapendo che puoi annullare in qualsiasi momento senza complicazioni.")}
            </p>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight animate-professional-fade">
              {sq(lang, "Fleksibilitet i", "True", "Verdadera", "Echte", "Вистинска")} <span className="animate-subtle-gradient">{sq(lang, "Vërtetë", "Flexibility", "Flexibilidad", "Flexibilität", "Флексибилност")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Politika jonë e anulimit është dizajnuar me nevojat e biznesit tuaj në mendje. Pa surpriza, pa komplikime.", "Our cancellation policy is designed with your business needs in mind. No surprises, no complications.", "Nuestra política de cancelación está diseñada pensando en las necesidades de su negocio. Sin sorpresas, sin complicaciones.", "Unsere Kündigungsrichtlinie ist auf Ihre Geschäftsanforderungen zugeschnitten. Keine Überraschungen, keine Komplikationen.", "Нашата политика за откажување е дизајнирана со потребите на вашиот бизнис на ум. Без изненадувања, без компликации.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cancelFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-6 text-white">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Cancel */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Si të", "How to", "Cómo", "Wie man", "Како да")} <span className="animate-gradient-x bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Anuloni", "Cancel", "Cancelar", "Kündigen", "Откажете", "Annuler", "Cancelar", "Annulla")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Anulimi i abonimit tuaj është i thjeshtë dhe i drejtpërdrejtë. Ndiqni këto hapa të lehtë.", "Canceling your subscription is simple and straightforward. Follow these easy steps.", "Cancelar su suscripción es simple y directo. Siga estos sencillos pasos.", "Die Kündigung Ihres Abonnements ist einfach und unkompliziert. Befolgen Sie diese einfachen Schritte.", "Откажувањето на вашата претплата е едноставно и директно. Следете ги овие лесни чекори.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500">
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
            {sq(lang, "Provoni Pa Rrezik", "Try Risk-Free", "Pruebe Sin Riesgo", "Risikofrei Testen", "Пробајте Без Ризик")} <span className="text-gray-900 drop-shadow-lg">{sq(lang, "Sot", "Today", "Hoy", "Heute", "Денес", "Aujourd'hui", "Hoje", "Oggi")}</span>
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed drop-shadow-sm">
            {sq(lang, "Filloni provën tuaj falas duke ditur se mund ta anuloni në çdo kohë pa asnjë komplikim. Përjetoni fuqinë e plotë të BusinessFlow Pro me qetësi të plotë mendore.", "Start your free trial knowing you can cancel anytime without any complications. Experience the full power of BusinessFlow Pro with complete peace of mind.", "Comience su prueba gratuita sabiendo que puede cancelar en cualquier momento sin complicaciones. Experimente todo el poder de BusinessFlow Pro con total tranquilidad.", "Starten Sie Ihre kostenlose Testversion in dem Wissen, dass Sie jederzeit ohne Komplikationen kündigen können. Erleben Sie die volle Leistung von BusinessFlow Pro mit völliger Gelassenheit.", "Започнете ја вашата бесплатна проба знаејќи дека можете да откажете во секое време без компликации. Искусете ја целосната моќ на BusinessFlow Pro со целосен мир.", "Commencez votre essai gratuit en sachant que vous pouvez annuler à tout moment sans complication.", "Inicie o seu teste gratuito sabendo que pode cancelar a qualquer momento sem complicações.", "Inizia la tua prova gratuita sapendo che puoi annullare in qualsiasi momento senza complicazioni.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => go("/trial")}
              className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5 mr-2" />
              {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion Starten", "Започни Бесплатна Проба", "Commencer l'essai gratuit", "Iniciar período de teste gratuito", "Inizia la prova gratuita")}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => go("/subscribe")}
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              {sq(lang, "Shiko Planet e Çmimeve", "View Pricing Plans", "Ver Planes de Precios", "Preispläne Ansehen", "Погледни Ценовни Планови", "Voir les plans tarifaires", "Ver planos de preços", "Vedi i piani tariffari")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancelAnytimePage;