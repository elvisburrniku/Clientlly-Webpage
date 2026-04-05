import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Headphones, MessageCircle, Phone, Video, Clock, Zap, Star, Menu, X, Users, BookOpen, Award } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const ExpertSupportPage = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: sq(lang, "Mbështetje me Chat të Drejtpërdrejtë", "Live Chat Support", "Soporte por Chat en Vivo", "Live-Chat-Support", "Поддршка преку Жив Чат"),
      description: sq(lang, "Merrni ndihmë të menjëhershme nga ekipi ynë ekspert i mbështetjes përmes chat-it të drejtpërdrejtë - i disponueshëm 24/7.", "Get instant help from our expert support team through live chat - available 24/7.", "Obtenga ayuda instantánea de nuestro equipo de soporte experto a través del chat en vivo - disponible 24/7.", "Erhalten Sie sofortige Hilfe von unserem Experten-Support-Team über den Live-Chat - rund um die Uhr verfügbar.", "Добијте моментална помош од нашиот експертски тим за поддршка преку жив чат - достапен 24/7."),
      features: [
        sq(lang, "Përgjigje të menjëhershme", "Instant responses", "Respuestas instantáneas", "Sofortige Antworten", "Моментални одговори") as string,
        sq(lang, "Ndarje ekrani", "Screen sharing", "Compartir pantalla", "Bildschirmfreigabe", "Споделување екран") as string,
        sq(lang, "Transferim skedarësh", "File transfers", "Transferencia de archivos", "Dateiübertragungen", "Пренос на датотеки") as string
      ],
      availability: "24/7"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: sq(lang, "Mbështetje Telefonike", "Phone Support", "Soporte Telefónico", "Telefon-Support", "Телефонска Поддршка"),
      description: sq(lang, "Flisni drejtpërdrejt me ekspertët tanë të certifikuar për çështje komplekse dhe udhëzime të detajuara.", "Speak directly with our certified experts for complex issues and detailed guidance.", "Hable directamente con nuestros expertos certificados para problemas complejos y orientación detallada.", "Sprechen Sie direkt mit unseren zertifizierten Experten bei komplexen Problemen und detaillierter Anleitung.", "Разговарајте директно со нашите сертифицирани експерти за сложени прашања и детално водство."),
      features: [
        sq(lang, "Linjë e dedikuar mbështetjeje", "Dedicated support line", "Línea de soporte dedicada", "Dedizierte Support-Leitung", "Посветена линија за поддршка") as string,
        sq(lang, "Konsultime ekspertësh", "Expert consultations", "Consultas de expertos", "Expertenberatungen", "Експертски консултации") as string,
        sq(lang, "Kthim thirrjeje me prioritet", "Priority callback", "Devolución de llamada prioritaria", "Prioritäts-Rückruf", "Приоритетно повратно јавување") as string
      ],
      availability: "24/7"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: sq(lang, "Mbështetje me Video", "Video Support", "Soporte por Video", "Video-Support", "Видео Поддршка"),
      description: sq(lang, "Sesione video një-për-një për trajnim të personalizuar dhe zgjidhje problemesh.", "One-on-one video sessions for personalized training and problem-solving.", "Sesiones de video uno a uno para capacitación personalizada y resolución de problemas.", "Eins-zu-eins-Videositzungen für personalisiertes Training und Problemlösung.", "Индивидуални видео сесии за персонализирана обука и решавање проблеми."),
      features: [
        sq(lang, "Ndarje ekrani", "Screen sharing", "Compartir pantalla", "Bildschirmfreigabe", "Споделување екран") as string,
        sq(lang, "Trajnim personal", "Personal training", "Entrenamiento personal", "Persönliches Training", "Лична обука") as string,
        sq(lang, "Ndihmë për konfigurim", "Setup assistance", "Asistencia de configuración", "Einrichtungsassistenz", "Помош при поставување") as string
      ],
      availability: sq(lang, "Orë pune", "Business hours", "Horario laboral", "Geschäftszeiten", "Работно време") as string
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: sq(lang, "Baza e Njohurive", "Knowledge Base", "Base de Conocimientos", "Wissensdatenbank", "База на Знаење"),
      description: sq(lang, "Dokumentacion gjithëpërfshirës, tutoriale dhe udhëzues për mbështetje vetë-shërbim.", "Comprehensive documentation, tutorials, and guides for self-service support.", "Documentación completa, tutoriales y guías para soporte de autoservicio.", "Umfassende Dokumentation, Tutorials und Anleitungen für Self-Service-Support.", "Сеопфатна документација, упатства и водичи за самопослужна поддршка."),
      features: [
        sq(lang, "Udhëzues hap-pas-hapi", "Step-by-step guides", "Guías paso a paso", "Schritt-für-Schritt-Anleitungen", "Водичи чекор по чекор") as string,
        sq(lang, "Video tutoriale", "Video tutorials", "Tutoriales en video", "Video-Tutorials", "Видео упатства") as string,
        sq(lang, "Seksion FAQ", "FAQ section", "Sección de preguntas frecuentes", "FAQ-Bereich", "Секција за ЧПП") as string
      ],
      availability: sq(lang, "Gjithmonë e disponueshme", "Always available", "Siempre disponible", "Immer verfügbar", "Секогаш достапно") as string
    }
  ];

  const supportTeam = [
    {
      icon: <Award className="w-8 h-8" />,
      title: sq(lang, "Ekspertë të Certifikuar", "Certified Experts", "Expertos Certificados", "Zertifizierte Experten", "Сертифицирани Експерти"),
      description: sq(lang, "Ekipi ynë i mbështetjes përbëhet nga ekspertë të certifikuar të softuerit biznesor me vite përvojë.", "Our support team consists of certified business software experts with years of experience.", "Nuestro equipo de soporte está compuesto por expertos certificados en software empresarial con años de experiencia.", "Unser Support-Team besteht aus zertifizierten Business-Software-Experten mit jahrelanger Erfahrung.", "Нашиот тим за поддршка се состои од сертифицирани експерти за бизнис софтвер со години искуство."),
      stats: sq(lang, "50+ profesionistë të certifikuar", "50+ certified professionals", "50+ profesionales certificados", "50+ zertifizierte Fachleute", "50+ сертифицирани професионалци") as string
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: sq(lang, "Kohë të Shpejta Përgjigje", "Quick Response Times", "Tiempos de Respuesta Rápidos", "Schnelle Antwortzeiten", "Брзи Времиња на Одговор"),
      description: sq(lang, "Koha mesatare e përgjigjes nën 2 minuta për çështje urgjente.", "Average response time of under 2 minutes for urgent issues.", "Tiempo promedio de respuesta de menos de 2 minutos para problemas urgentes.", "Durchschnittliche Antwortzeit von unter 2 Minuten bei dringenden Problemen.", "Просечно време на одговор под 2 минути за итни прашања."),
      stats: sq(lang, "< 2 min kohë përgjigje", "< 2 min response time", "< 2 min tiempo de respuesta", "< 2 Min Antwortzeit", "< 2 мин време на одговор") as string
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: sq(lang, "Menaxherë të Dedikuar Llogarish", "Dedicated Account Managers", "Gerentes de Cuenta Dedicados", "Dedizierte Account Manager", "Посветени Менаџери на Сметки"),
      description: sq(lang, "Klientët enterprise marrin menaxherë të dedikuar llogarish për mbështetje të personalizuar.", "Enterprise customers get dedicated account managers for personalized support.", "Los clientes empresariales obtienen gerentes de cuenta dedicados para soporte personalizado.", "Unternehmenskunden erhalten dedizierte Account Manager für personalisierten Support.", "Претпријатијата добиваат посветени менаџери на сметки за персонализирана поддршка."),
      stats: sq(lang, "1:1 vëmendje personale", "1:1 personal attention", "1:1 atención personal", "1:1 persönliche Betreuung", "1:1 лично внимание") as string
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950">
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
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400">
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
              <Headphones className="w-4 h-4 mr-2 text-gray-700" />
              {sq(lang, "Mbështetje Ekspertësh 24/7", "24/7 Expert Support", "Soporte Experto 24/7", "24/7 Experten-Support", "24/7 Експертска Поддршка")}
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight animate-professional-fade">
              <span className="text-gray-900 drop-shadow-lg">
                {sq(lang, "Mbështetje", "Expert", "Soporte", "Experten-", "Експертска")} <span className="animate-subtle-gradient">{sq(lang, "Ekspertësh", "Support", "Experto", "Support", "Поддршка")}</span>
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">{sq(lang, "Kur Ju Nevojitet", "When You Need It", "Cuando Lo Necesite", "Wenn Sie Es Brauchen", "Кога Ви Треба")}</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              {sq(lang, "Merrni ndihmë nga ekspertë të certifikuar të softuerit biznesor 24/7. Ekipi ynë i mbështetjes është i përkushtuar për të siguruar suksesin tuaj me ndihmë gjithëpërfshirëse dhe udhëzime të personalizuara.", "Get help from certified business software experts 24/7. Our support team is dedicated to ensuring your success with comprehensive assistance and personalized guidance.", "Obtenga ayuda de expertos certificados en software empresarial 24/7. Nuestro equipo de soporte está dedicado a garantizar su éxito con asistencia integral y orientación personalizada.", "Erhalten Sie Hilfe von zertifizierten Business-Software-Experten rund um die Uhr. Unser Support-Team ist bestrebt, Ihren Erfolg mit umfassender Unterstützung und personalisierter Anleitung sicherzustellen.", "Добијте помош од сертифицирани експерти за бизнис софтвер 24/7. Нашиот тим за поддршка е посветен на обезбедување на вашиот успех со сеопфатна помош и персонализирано водство.")}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "Disponueshmëri 24/7", "24/7 availability", "Disponibilidad 24/7", "24/7 Verfügbarkeit", "24/7 достапност")}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Award className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "Ekspertë të certifikuar", "Certified experts", "Expertos certificados", "Zertifizierte Experten", "Сертифицирани експерти")}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Zap className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">{sq(lang, "Përgjigje e menjëhershme", "Instant response", "Respuesta instantánea", "Sofortige Antwort", "Моментален одговор")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Kanale të Shumta", "Multiple", "Múltiples", "Mehrere", "Повеќе")} <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">{sq(lang, "Mbështetjeje", "Support Channels", "Canales de Soporte", "Support-Kanäle", "Канали за Поддршка")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Zgjidhni metodën e mbështetjes që funksionon më mirë për ju. Jemi këtu për të ndihmuar përmes çdo kanali.", "Choose the support method that works best for you. We're here to help through every channel.", "Elija el método de soporte que mejor funcione para usted. Estamos aquí para ayudar a través de cada canal.", "Wählen Sie die Support-Methode, die am besten zu Ihnen passt. Wir helfen Ihnen über jeden Kanal.", "Изберете го методот на поддршка кој најдобро функционира за вас. Ние сме тука да помогнеме преку секој канал.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white">
                      {channel.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                        {channel.availability}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{channel.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{channel.description}</p>
                  
                  <ul className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
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

      {/* Support Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              {sq(lang, "Ekipi Ynë", "Our", "Nuestro", "Unser", "Нашиот")} <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">{sq(lang, "Ekspert", "Expert Team", "Equipo Experto", "Experten-Team", "Експертски Тим")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Njihuni me profesionistët e certifikuar që janë të përkushtuar për suksesin tuaj.", "Meet the certified professionals who are dedicated to your success.", "Conozca a los profesionales certificados que están dedicados a su éxito.", "Lernen Sie die zertifizierten Fachleute kennen, die sich Ihrem Erfolg widmen.", "Запознајте ги сертифицираните професионалци кои се посветени на вашиот успех.")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTeam.map((member, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-6 text-white mx-auto">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-3">{member.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  <div className="text-sm font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full inline-block">
                    {member.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                {sq(lang, "Përjetoni Mbështetje", "Experience", "Experimente", "Erleben Sie", "Искусете")} <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">{sq(lang, "të Klasit Botëror", "World-Class Support", "Soporte de Clase Mundial", "Erstklassigen Support", "Поддршка од Светска Класа")}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {sq(lang, "Bashkohuni me mijëra biznese që mbështeten në ekipin tonë ekspert të mbështetjes për suksesin e tyre. Merrni ndihmën që ju nevojitet, kur ju nevojitet.", "Join thousands of businesses who rely on our expert support team for their success. Get the help you need, when you need it.", "Únase a miles de empresas que confían en nuestro equipo de soporte experto para su éxito. Obtenga la ayuda que necesita, cuando la necesita.", "Schließen Sie sich Tausenden von Unternehmen an, die auf unser Experten-Support-Team für ihren Erfolg vertrauen. Erhalten Sie die Hilfe, die Sie brauchen, wenn Sie sie brauchen.", "Придружете се на илјадници бизниси кои се потпираат на нашиот експертски тим за поддршка за нивниот успех. Добијте ја помошта што ви треба, кога ви треба.")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => go("/trial")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion Starten", "Започни Бесплатна Проба")}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => go("/contact")}
                  className="border-2 border-gray-300 hover:border-purple-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  {sq(lang, "Kontaktoni Ekipin e Mbështetjes", "Contact Support Team", "Contactar Equipo de Soporte", "Support-Team Kontaktieren", "Контактирајте го Тимот за Поддршка")}
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

export default ExpertSupportPage;