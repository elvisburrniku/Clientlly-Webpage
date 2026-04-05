import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight, Lightbulb, Code, Rocket, CheckCircle, Users,
  Zap, TrendingUp, Globe, Menu, X, Star,
  Clock, Shield, Gift, Sparkles, ChevronRight, CreditCard
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

function sq(lang: string, albanian: string | JSX.Element, english: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return albanian; case 'es': return es ?? english; case 'de': return de ?? english; case 'mk': return mk ?? english; default: return english; }
}

export default function CollaborationPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      color: "bg-blue-600",
      light: "bg-blue-50 border-blue-100",
      title: sq(lang, "Dërgoni Idenë Tuaj", "Submit Your Idea", "Envíe su idea", "Reichen Sie Ihre Idee ein", "Поднесете ја вашата идеја"),
      desc: sq(lang, "Nga paneli juaj, dërgoni çfarëdo ideje — një veçori e re, përmirësim të rrjedhës, raport i personalizuar, apo çdo gjë tjetër që do t'ju bënte biznesin më efiçent.", "From your dashboard, submit any idea — a new feature, workflow improvement, custom report, or anything that would make your business more efficient.", "Desde su panel, envíe cualquier idea — una nueva función, mejora del flujo de trabajo, informe personalizado o cualquier cosa que haga su negocio más eficiente.", "Über Ihr Dashboard können Sie jede Idee einreichen — ein neues Feature, eine Workflow-Verbesserung, einen benutzerdefinierten Bericht oder alles, was Ihr Unternehmen effizienter machen würde.", "Од вашиот панел, поднесете било каква идеја — нова функција, подобрување на работниот тек, прилагоден извештај или било што друго што ќе го направи вашиот бизнис поефикасен."),
      details: [
        sq(lang, "Formular i thjeshtë për dërgim", "Simple submission form", "Formulario de envío simple", "Einfaches Einreichungsformular", "Едноставен формулар за поднесување"),
        sq(lang, "Shtoni pamje ekrani ose video", "Attach screenshots or videos", "Adjunte capturas de pantalla o videos", "Screenshots oder Videos anhängen", "Прикачете слики од екран или видеа"),
        sq(lang, "Konfirmim menjëherë", "Instant confirmation", "Confirmación instantánea", "Sofortige Bestätigung", "Моментална потврда"),
      ],
    },
    {
      number: "02",
      icon: Users,
      color: "bg-violet-600",
      light: "bg-violet-50 border-violet-100",
      title: sq(lang, "Ekipi Ynë Vlerëson", "Our Team Reviews", "Nuestro equipo revisa", "Unser Team prüft", "Нашиот тим разгледува"),
      desc: sq(lang, "Ekipi ynë i zhvillimit rishikon çdo propozim brenda 48 orësh. Bashkëpunojmë me ju për të kuptuar saktësisht çfarë keni nevojë dhe si ta ndërtojmë mirë.", "Our development team reviews every proposal within 48 hours. We collaborate with you to understand exactly what you need and how to build it well.", "Nuestro equipo de desarrollo revisa cada propuesta en 48 horas. Colaboramos con usted para entender exactamente lo que necesita y cómo construirlo bien.", "Unser Entwicklungsteam prüft jeden Vorschlag innerhalb von 48 Stunden. Wir arbeiten mit Ihnen zusammen, um genau zu verstehen, was Sie brauchen und wie wir es gut umsetzen.", "Нашиот развоен тим го разгледува секој предлог во рок од 48 часа. Соработуваме со вас за да разбереме точно што ви треба и како да го изградиме добро."),
      details: [
        sq(lang, "Përgjigje brenda 48 orësh", "Response within 48 hours", "Respuesta en 48 horas", "Antwort innerhalb von 48 Stunden", "Одговор во рок од 48 часа"),
        sq(lang, "Diskutim i drejtpërdrejtë me zhvilluesit", "Direct discussion with developers", "Discusión directa con desarrolladores", "Direkter Austausch mit Entwicklern", "Директна дискусија со програмери"),
        sq(lang, "Specifikimet e qarta të veçorisë", "Clear feature specifications", "Especificaciones claras de funciones", "Klare Feature-Spezifikationen", "Јасни спецификации на функции"),
      ],
    },
    {
      number: "03",
      icon: Code,
      color: "bg-emerald-600",
      light: "bg-emerald-50 border-emerald-100",
      title: sq(lang, "Ndërtim Profesional", "Professional Build", "Construcción profesional", "Professionelle Entwicklung", "Професионална изградба"),
      desc: sq(lang, "Zhvilluesi ynë ndërton veçorinë me standarde profesionale — me kod cilësor, teste dhe dokumentacion. I gjithë procesi është falas për ju.", "Our developer builds the feature to professional standards — with quality code, tests and documentation. The entire process is completely free for you.", "Nuestro desarrollador construye la función con estándares profesionales — con código de calidad, pruebas y documentación. Todo el proceso es completamente gratuito para usted.", "Unser Entwickler baut das Feature nach professionellen Standards — mit qualitativ hochwertigem Code, Tests und Dokumentation. Der gesamte Prozess ist für Sie völlig kostenlos.", "Нашиот програмер ја гради функцијата според професионални стандарди — со квалитетен код, тестови и документација. Целиот процес е целосно бесплатен за вас."),
      details: [
        sq(lang, "Kod cilësor dhe i testuar", "Quality, tested code", "Código de calidad y probado", "Qualitativ hochwertiger, getesteter Code", "Квалитетен, тестиран код"),
        sq(lang, "Azhurnim i rregullt i progresit", "Regular progress updates", "Actualizaciones regulares de progreso", "Regelmäßige Fortschrittsupdates", "Редовни извештаи за напредок"),
        sq(lang, "Kosto zero për ju", "Zero cost for you", "Costo cero para usted", "Keine Kosten für Sie", "Нула трошоци за вас"),
      ],
    },
    {
      number: "04",
      icon: Rocket,
      color: "bg-orange-600",
      light: "bg-orange-50 border-orange-100",
      title: sq(lang, "Lançim & Trajnim", "Launch & Training", "Lanzamiento y capacitación", "Start & Schulung", "Лансирање и обука"),
      desc: sq(lang, "Veçoria lansohet drejtpërdrejt në llogarinë tuaj. Merrni trajnim të plotë dhe dokumentacion si ta përdorni menjëherë. Gjithë komuniteti përfiton.", "The feature launches directly in your account. You get full training and documentation on how to use it immediately. The whole community benefits.", "La función se lanza directamente en su cuenta. Obtiene capacitación completa y documentación sobre cómo usarla de inmediato. Toda la comunidad se beneficia.", "Das Feature wird direkt in Ihrem Konto bereitgestellt. Sie erhalten eine vollständige Schulung und Dokumentation zur sofortigen Nutzung. Die gesamte Community profitiert.", "Функцијата се лансира директно во вашата сметка. Добивате целосна обука и документација за тоа како да ја користите веднаш. Целата заедница има корист."),
      details: [
        sq(lang, "Implementim direkt në llogarinë tuaj", "Direct deployment to your account", "Implementación directa en su cuenta", "Direkte Bereitstellung in Ihrem Konto", "Директна имплементација во вашата сметка"),
        sq(lang, "Dokumentacion dhe trajnim falas", "Free documentation and training", "Documentación y capacitación gratuita", "Kostenlose Dokumentation und Schulung", "Бесплатна документација и обука"),
        sq(lang, "I disponueshëm për gjithë komunitetin", "Available to the whole community", "Disponible para toda la comunidad", "Für die gesamte Community verfügbar", "Достапно за целата заедница"),
      ],
    },
  ];

  const benefits = [
    {
      icon: Gift,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: sq(lang, "100% Falas", "100% Free", "100% Gratis", "100% Kostenlos", "100% Бесплатно"),
      desc: sq(lang, "Asnjë pagesë shtesë për zhvillim të personalizuar. Çdo gjë është e përfshirë në abonimin tuaj.", "No extra charge for custom development. Everything is included in your subscription.", "Sin cargos adicionales por desarrollo personalizado. Todo está incluido en su suscripción.", "Keine zusätzlichen Kosten für individuelle Entwicklung. Alles ist in Ihrem Abonnement enthalten.", "Без дополнителни трошоци за прилагоден развој. Сè е вклучено во вашата претплата."),
    },
    {
      icon: Clock,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      title: sq(lang, "Zbatim i Shpejtë", "Fast Turnaround", "Entrega rápida", "Schnelle Umsetzung", "Брза реализација"),
      desc: sq(lang, "Veçoritë e zakonshme ndërtohen brenda 1-3 javësh. Veçoritë komplekse brenda 4-8 javësh.", "Standard features built in 1–3 weeks. Complex features within 4–8 weeks.", "Funciones estándar construidas en 1–3 semanas. Funciones complejas en 4–8 semanas.", "Standardfunktionen werden in 1–3 Wochen erstellt. Komplexe Funktionen innerhalb von 4–8 Wochen.", "Стандардни функции се градат за 1–3 недели. Комплексни функции за 4–8 недели."),
    },
    {
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: sq(lang, "Cilësi e Garantuar", "Quality Guaranteed", "Calidad garantizada", "Qualität garantiert", "Гарантиран квалитет"),
      desc: sq(lang, "Çdo veçori kalon nëpër rishikim të kodit, testim dhe siguri cilësi para se të lansohet.", "Every feature goes through code review, testing and QA before it launches.", "Cada función pasa por revisión de código, pruebas y control de calidad antes de su lanzamiento.", "Jedes Feature durchläuft Code-Review, Tests und Qualitätssicherung vor der Veröffentlichung.", "Секоја функција поминува преку преглед на код, тестирање и контрола на квалитет пред лансирање."),
    },
    {
      icon: Users,
      color: "text-violet-600",
      bg: "bg-violet-50",
      title: sq(lang, "Kreditë Tuaj", "Your Credit", "Su crédito", "Ihre Anerkennung", "Ваша заслуга"),
      desc: sq(lang, "Bizneset që kontribuojnë me ide njihen publikisht si partnerë dhe bashkëpunëtorë.", "Businesses that contribute ideas are publicly recognised as partners and collaborators.", "Las empresas que contribuyen con ideas son reconocidas públicamente como socios y colaboradores.", "Unternehmen, die Ideen beitragen, werden öffentlich als Partner und Mitarbeiter anerkannt.", "Бизнисите кои придонесуваат со идеи се јавно признаени како партнери и соработници."),
    },
    {
      icon: Globe,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: sq(lang, "Ndikon Gjithë Komunitetin", "Impacts the Community", "Impacta a la comunidad", "Wirkt auf die Community", "Влијае на заедницата"),
      desc: sq(lang, "Idetë tuaja bëhen veçori për të gjithë klientët tanë — trashëgimia juaj në platformë.", "Your ideas become features for all our clients — your legacy on the platform.", "Sus ideas se convierten en funciones para todos nuestros clientes — su legado en la plataforma.", "Ihre Ideen werden zu Funktionen für alle unsere Kunden — Ihr Vermächtnis auf der Plattform.", "Вашите идеи стануваат функции за сите наши клиенти — вашето наследство на платформата."),
    },
    {
      icon: TrendingUp,
      color: "text-rose-600",
      bg: "bg-rose-50",
      title: sq(lang, "Rritje e Përbashkët", "Shared Growth", "Crecimiento compartido", "Gemeinsames Wachstum", "Заеднички раст"),
      desc: sq(lang, "Ne investojmë në suksesin tuaj sepse suksesi juaj është suksesi ynë — partneriteti real.", "We invest in your success because your success is our success — a real partnership.", "Invertimos en su éxito porque su éxito es nuestro éxito — una verdadera asociación.", "Wir investieren in Ihren Erfolg, denn Ihr Erfolg ist unser Erfolg — eine echte Partnerschaft.", "Ние инвестираме во вашиот успех затоа што вашиот успех е наш успех — вистинско партнерство."),
    },
  ];

  const testimonials = [
    {
      name: "Artan Shala",
      role: sq(lang, "Drejtues Operacional, Truly Nolen", "Operations Manager, Truly Nolen", "Gerente de Operaciones, Truly Nolen", "Betriebsleiter, Truly Nolen", "Оперативен менаџер, Truly Nolen"),
      avatar: "AS",
      color: "from-blue-500 to-indigo-600",
      tag: sq(lang, "Kontrata Biznesore", "Business Contracts", "Contratos empresariales", "Geschäftsverträge", "Деловни договори"),
      text: sq(lang,
        "Kisha nevojë për kontrata standarde me klientët — propozova idenë dhe brenda dy javësh Clientlly kishte ndërtuar një modul të plotë. Tani çdo kontratë nënshkruhet dixhitalisht dhe arkivohet automatikisht. Nuk humbasim asnjë dokument.",
        "I needed standard client contracts — I proposed the idea and within two weeks Clientlly had built a full module. Now every contract is signed digitally and archived automatically. We never lose a document.",
        "Necesitaba contratos estándar para clientes — propuse la idea y en dos semanas Clientlly había construido un módulo completo. Ahora cada contrato se firma digitalmente y se archiva automáticamente. Nunca perdemos un documento.",
        "Ich brauchte Standard-Kundenverträge — ich schlug die Idee vor und innerhalb von zwei Wochen hatte Clientlly ein vollständiges Modul gebaut. Jetzt wird jeder Vertrag digital unterschrieben und automatisch archiviert. Wir verlieren nie ein Dokument.",
        "Ми требаа стандардни договори за клиенти — ја предложив идејата и за две недели Clientlly изгради целосен модул. Сега секој договор се потпишува дигитално и се архивира автоматски. Никогаш не губиме документ."
      ),
      stat: sq(lang, "100% kontrata të sigurta", "100% contracts secured", "100% contratos asegurados", "100% Verträge gesichert", "100% обезбедени договори"),
      statIcon: "📝",
    },
    {
      name: "Blerta Krasniqi",
      role: sq(lang, "CEO, TechStart Kosovo", "CEO, TechStart Kosovo", "CEO, TechStart Kosovo", "CEO, TechStart Kosovo", "CEO, TechStart Kosovo"),
      avatar: "BK",
      color: "from-violet-500 to-purple-600",
      tag: sq(lang, "Zhvillim i Veçorive", "Feature Development", "Desarrollo de funciones", "Feature-Entwicklung", "Развој на функции"),
      text: sq(lang,
        "Bashkëpunimi me ekipin e Clientlly ndihet si të kesh departamentin tënd të IT-së — pa pagën mujore të tij. Kemi dërguar 5 ide deri tani dhe 3 janë bërë realitet. Kjo ndodh vetëm me partnerë të vërtetë.",
        "Collaborating with the Clientlly team feels like having your own IT department — without the monthly payroll. We've submitted 5 ideas and 3 are already live. That only happens with true partners.",
        "Colaborar con el equipo de Clientlly se siente como tener tu propio departamento de TI — sin la nómina mensual. Hemos enviado 5 ideas y 3 ya están activas. Eso solo pasa con verdaderos socios.",
        "Die Zusammenarbeit mit dem Clientlly-Team fühlt sich an, als hätte man seine eigene IT-Abteilung — ohne die monatliche Gehaltsabrechnung. Wir haben 5 Ideen eingereicht und 3 sind bereits live. Das passiert nur mit echten Partnern.",
        "Соработката со тимот на Clientlly се чувствува како да имате свој ИТ оддел — без месечната плата. Поднесовме 5 идеи и 3 веќе се активни. Тоа се случува само со вистински партнери."
      ),
      stat: sq(lang, "3 nga 5 ide të realizuara", "3 of 5 ideas shipped", "3 de 5 ideas entregadas", "3 von 5 Ideen umgesetzt", "3 од 5 идеи реализирани"),
      statIcon: "🚀",
    },
    {
      name: "Mentor Gashi",
      role: sq(lang, "Pronar, AutoFleet Pro", "Owner, AutoFleet Pro", "Propietario, AutoFleet Pro", "Inhaber, AutoFleet Pro", "Сопственик, AutoFleet Pro"),
      avatar: "MG",
      color: "from-emerald-500 to-teal-600",
      tag: sq(lang, "Modul i Personalizuar", "Custom Module", "Módulo personalizado", "Benutzerdefiniertes Modul", "Прилагоден модул"),
      text: sq(lang,
        "Kemi një biznes flote automjetesh dhe menaxhimi i servisimeve ishte kaos total. Propozova një modul të thjeshtë dhe Clientlly jo vetëm e ndërtoi — por na pyeti çdo javë si po ecte. Ndihemi si pjesë e ekipit të tyre.",
        "We run a vehicle fleet business and service tracking was total chaos. I proposed a simple module and Clientlly not only built it — they checked in every week on how it was going. We feel like part of their team.",
        "Tenemos un negocio de flota de vehículos y el seguimiento de servicios era un caos total. Propuse un módulo simple y Clientlly no solo lo construyó — nos consultaban cada semana cómo iba. Nos sentimos parte de su equipo.",
        "Wir betreiben ein Fahrzeugflotten-Geschäft und die Serviceverfolgung war totales Chaos. Ich schlug ein einfaches Modul vor und Clientlly baute es nicht nur — sie fragten jede Woche nach, wie es läuft. Wir fühlen uns als Teil ihres Teams.",
        "Имаме бизнис со возна флота и следењето на сервисирање беше тотален хаос. Предложив едноставен модул и Clientlly не само што го изгради — проверуваа секоја недела како оди. Се чувствуваме како дел од нивниот тим."
      ),
      stat: sq(lang, "Reduktim 60% i gabimeve", "60% fewer errors", "60% menos errores", "60% weniger Fehler", "60% помалку грешки"),
      statIcon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={logoPath} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About", "Acerca de", "Über uns", "За нас")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-3 ml-auto">
              <LanguageSelector />
            </div>

            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <LanguageSelector />
              <button className="p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About", "Acerca de", "Über uns", "За нас")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            <div className="pt-2"></div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-16 bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-16 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-16 w-56 h-56 bg-violet-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">{sq(lang, "Ekskluzive për Abonentët", "Exclusive for Subscribers", "Exclusivo para suscriptores", "Exklusiv für Abonnenten", "Ексклузивно за претплатници")}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {sq(lang,
                <>Le të Rritemi <span className="text-amber-300">Bashkë</span></>,
                <>Let's Grow <span className="text-amber-300">Together</span></>,
                <>Crezcamos <span className="text-amber-300">Juntos</span></>,
                <>Lass uns <span className="text-amber-300">Gemeinsam</span> wachsen</>,
                <>Да Растеме <span className="text-amber-300">Заедно</span></>
              )}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              {sq(lang,
                "Ju sugjeroni — ne ndërtojmë. Çdo veçori e personalizuar zhvillohet falas nga ekipi ynë profesional, drejtpërdrejt në platformën tuaj.",
                "You suggest — we build. Every custom feature is developed free by our professional team, directly in your platform.",
                "Usted sugiere — nosotros construimos. Cada función personalizada es desarrollada gratis por nuestro equipo profesional, directamente en su plataforma.",
                "Sie schlagen vor — wir bauen. Jedes individuelle Feature wird kostenlos von unserem professionellen Team entwickelt, direkt in Ihrer Plattform.",
                "Вие предлагате — ние градиме. Секоја прилагодена функција се развива бесплатно од нашиот професионален тим, директно во вашата платформа."
              )}
            </p>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
              {[
                { value: "48h", label: sq(lang, "Kohë Përgjigje", "Response Time", "Tiempo de respuesta", "Reaktionszeit", "Време на одговор") },
                { value: "100%", label: sq(lang, "Falas", "Free", "Gratis", "Kostenlos", "Бесплатно") },
                { value: "1-3 jav", label: sq(lang, "Dërgim", "Delivery", "Entrega", "Lieferung", "Испорака") },
              ].map(({ value, label }) => (
                <div key={value} className="text-center">
                  <div className="text-2xl font-extrabold text-white">{value}</div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="si-funksionon" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Procesi", "Process", "Proceso", "Prozess", "Процес")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Si funksionon?", "How does it work?", "Cómo funciona?", "Wie funktioniert es?", "Како функционира?")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang, "Katër hapa të thjeshtë — nga ideja deri te veçoria e gatshme në platformën tuaj.", "Four simple steps — from idea to finished feature in your platform.", "Cuatro pasos simples — desde la idea hasta la función terminada en su plataforma.", "Vier einfache Schritte — von der Idee zum fertigen Feature in Ihrer Plattform.", "Четири едноставни чекори — од идеја до готова функција во вашата платформа.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gray-400 tracking-widest">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-1.5">
                      {step.details.map((d, di) => (
                        <li key={di} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-200 to-transparent z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Përfitimet", "Benefits", "Beneficios", "Vorteile", "Придобивки")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Pse bashkëpunimi funksionon?", "Why does collaboration work?", "Por qué funciona la colaboración?", "Warum funktioniert Zusammenarbeit?", "Зошто соработката функционира?")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, color, bg, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Histori Suksesi", "Success Stories", "Historias de éxito", "Erfolgsgeschichten", "Приказни за успех")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Bizneset flasin", "Businesses speak", "Los negocios hablan", "Unternehmen sprechen", "Бизнисите зборуваат")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Top: tag + stars */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed text-[0.92rem] italic flex-1 mb-6">
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{t.role}</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100 text-right leading-snug">
                      <span className="mr-1">{t.statIcon}</span>{t.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-violet-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">{sq(lang, "I disponueshëm në Pro & Enterprise", "Available in Pro & Enterprise", "Disponible en Pro y Enterprise", "Verfügbar in Pro & Enterprise", "Достапно во Pro и Enterprise")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {sq(lang, "Gati të ndërtojmë bashkë?", "Ready to build together?", "Listos para construir juntos?", "Bereit, gemeinsam zu bauen?", "Подготвени да градиме заедно?")}
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            {sq(lang,
              "Zgjidhni planin Professional ose Enterprise dhe filloni të dërgoni idetë tuaja sot. Ekipi ynë është gati.",
              "Choose the Professional or Enterprise plan and start submitting your ideas today. Our team is ready.",
              "Elija el plan Professional o Enterprise y comience a enviar sus ideas hoy. Nuestro equipo está listo.",
              "Wählen Sie den Professional- oder Enterprise-Plan und beginnen Sie noch heute, Ihre Ideen einzureichen. Unser Team ist bereit.",
              "Изберете го планот Professional или Enterprise и започнете да ги поднесувате вашите идеи денес. Нашиот тим е подготвен."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { window.location.href = '/subscribe'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/30 text-sm"
            >
              {sq(lang, "Shiko Planet", "View Plans", "Ver planes", "Pläne ansehen", "Погледни планови")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => { window.location.href = '/subscribe?plan=professional&billing=monthly'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg text-sm"
            >
              <CreditCard className="h-4 w-4" />
              {sq(lang, "Bli Plan Pro / Enterprise", "Get Pro or Enterprise", "Obtener Pro o Enterprise", "Pro oder Enterprise holen", "Земи Pro или Enterprise")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
