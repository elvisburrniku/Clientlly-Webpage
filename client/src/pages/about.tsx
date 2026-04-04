import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, Users, Globe, Shield, Building2, FileText,
  Rocket, Crown, Code, TrendingUp, Zap, Lightbulb,
  Heart, Menu, X, Star
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

function sq(lang: string, albanian: string | JSX.Element, english: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return albanian; case 'es': return es ?? english; case 'de': return de ?? english; case 'mk': return mk ?? english; default: return english; }
}

const AboutPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;

  const stats = [
    { value: "200+", label: sq(lang, "Biznese na Besojnë", "Businesses Trust Us", "Empresas confían en nosotros", "Unternehmen vertrauen uns", "Бизниси ни веруваат"), icon: Building2 },
    { value: "12K+", label: sq(lang, "Fatura Mujore", "Monthly Invoices", "Facturas mensuales", "Monatliche Rechnungen", "Месечни фактури"), icon: FileText },
    { value: "5", label: sq(lang, "Vende", "Countries", "Países", "Länder", "Земји"), icon: Globe },
    { value: "99.9%", label: sq(lang, "Kohë Pune", "Uptime", "Tiempo activo", "Betriebszeit", "Време на работа"), icon: Shield },
  ];

  const principles = [
    {
      icon: Rocket,
      color: "text-blue-600 bg-blue-50",
      title: sq(lang, "Inovacion Vazhdimtar", "Continuous Innovation", "Innovación continua", "Kontinuierliche Innovation", "Континуирана иновација"),
      desc: sq(lang, "Çdo muaj lansojmë veçori të reja bazuar direkt në komentet e klientëve tanë. Asnjëherë nuk ndajmë zhvillimin.", "Every month we launch new features based directly on our clients' feedback. We never stop developing.", "Cada mes lanzamos nuevas funciones basadas directamente en los comentarios de nuestros clientes. Nunca dejamos de desarrollar.", "Jeden Monat bringen wir neue Funktionen heraus, die direkt auf dem Feedback unserer Kunden basieren. Wir hören nie auf zu entwickeln.", "Секој месец лансираме нови функции базирани директно на повратните информации од нашите клиенти. Никогаш не престануваме да развиваме."),
    },
    {
      icon: Users,
      color: "text-violet-600 bg-violet-50",
      title: sq(lang, "Komuniteti Vendos", "Community Decides", "La comunidad decide", "Die Community entscheidet", "Заедницата одлучува"),
      desc: sq(lang, "Platforma jonë drejtohet nga komuniteti. Votoni veçoritë që dëshironi, dhe ne i ndërtojmë — pa pagesë shtesë.", "Our platform is community-driven. Vote for the features you want, and we build them — at no extra cost.", "Nuestra plataforma es impulsada por la comunidad. Vote por las funciones que desea y las construimos, sin costo adicional.", "Unsere Plattform wird von der Community gesteuert. Stimmen Sie für die gewünschten Funktionen ab, und wir bauen sie — ohne zusätzliche Kosten.", "Нашата платформа е водена од заедницата. Гласајте за функциите што ги сакате, и ние ги градиме — без дополнителен трошок."),
    },
    {
      icon: Crown,
      color: "text-amber-600 bg-amber-50",
      title: sq(lang, "Cilësi pa Kompromis", "Quality Without Compromise", "Calidad sin compromiso", "Qualität ohne Kompromisse", "Квалитет без компромис"),
      desc: sq(lang, "Nga kodi deri te mbështetja e klientit, mbajmë standardet më të larta në çdo aspekt të biznesit tonë.", "From code to customer support, we maintain the highest standards in every aspect of our business.", "Desde el código hasta el soporte al cliente, mantenemos los más altos estándares en cada aspecto de nuestro negocio.", "Vom Code bis zum Kundensupport halten wir die höchsten Standards in jedem Aspekt unseres Geschäfts.", "Од кодот до поддршката на клиентите, одржуваме највисоки стандарди во секој аспект на нашиот бизнис."),
    },
    {
      icon: Heart,
      color: "text-rose-600 bg-rose-50",
      title: sq(lang, "Suksesi Juaj = Suksesi Ynë", "Your Success = Our Success", "Tu éxito = Nuestro éxito", "Ihr Erfolg = Unser Erfolg", "Вашиот успех = Нашиот успех"),
      desc: sq(lang, "Ne nuk jemi vetëm ofrues software — jemi partneri juaj i biznesit. Rritem bashkë ose jo fare.", "We're not just a software provider — we're your business partner. We grow together or not at all.", "No somos solo un proveedor de software, somos su socio comercial. Crecemos juntos o no crecemos.", "Wir sind nicht nur ein Softwareanbieter — wir sind Ihr Geschäftspartner. Wir wachsen zusammen oder gar nicht.", "Не сме само провајдер на софтвер — ние сме вашиот деловен партнер. Растеме заедно или воопшто не."),
    },
  ];

  const team = [
    {
      name: "Alban Gunga",
      role: sq(lang, "CEO & Themelues", "CEO & Founder", "CEO y Fundador", "CEO & Gründer", "CEO и Основач"),
      desc: sq(lang, "Lider vizionar me pasion për fuqizimin e bizneseve të vogla dhe të mesme. Themeluesi i vizionit të Clientlly.", "Visionary leader passionate about empowering small and medium businesses. The founder of Clientlly's vision.", "Líder visionario apasionado por empoderar a las pequeñas y medianas empresas. El fundador de la visión de Clientlly.", "Visionärer Leiter mit Leidenschaft für die Stärkung kleiner und mittlerer Unternehmen. Der Gründer von Clientllys Vision.", "Визионерски лидер со страст за зајакнување на малите и средните бизниси. Основачот на визијата на Clientlly."),
      icon: Crown,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Elvis Burrniku",
      role: sq(lang, "Drejtori i Teknologjisë (CTO)", "Chief Technology Officer", "Director de Tecnología", "Technischer Leiter (CTO)", "Главен технолошки директор"),
      desc: sq(lang, "Arkitekt i sistemeve shkallëzuese me ekspertizë në cloud dhe automatizim. Siguron që platforma funksionojë gjithmonë.", "Architect of scalable systems with expertise in cloud and automation. Ensures the platform always performs.", "Arquitecto de sistemas escalables con experiencia en la nube y automatización. Asegura que la plataforma siempre funcione.", "Architekt skalierbarer Systeme mit Expertise in Cloud und Automatisierung. Stellt sicher, dass die Plattform immer funktioniert.", "Архитект на скалабилни системи со експертиза во облак и автоматизација. Обезбедува платформата секогаш да работи."),
      icon: Code,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "David Kim",
      role: sq(lang, "Menaxher Produkti", "Head of Product", "Jefe de Producto", "Produktleiter", "Раководител на производ"),
      desc: sq(lang, "Ekspert i strategjisë së produktit me njohuri të thella mbi nevojat e bizneseve të vogla dhe të mesme në treg.", "Product strategy expert with deep knowledge of the needs of small and medium businesses in the market.", "Experto en estrategia de producto con profundo conocimiento de las necesidades de las pequeñas y medianas empresas en el mercado.", "Experte für Produktstrategie mit tiefem Wissen über die Bedürfnisse kleiner und mittlerer Unternehmen auf dem Markt.", "Експерт за стратегија на производи со длабоко познавање на потребите на малите и средните бизниси на пазарот."),
      icon: TrendingUp,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: sq(lang, "Fillimi", "The Beginning", "El comienzo", "Der Anfang", "Почетокот"),
      desc: sq(lang, "U themelua nga Alban Gunga me vizionin për të bërë menaxhimin e biznesit të thjeshtë dhe të arritshëm për të gjithë.", "Founded by Alban Gunga with a vision to make business management simple and accessible to everyone.", "Fundada por Alban Gunga con la visión de hacer la gestión empresarial simple y accesible para todos.", "Gegründet von Alban Gunga mit der Vision, Unternehmensführung einfach und für alle zugänglich zu machen.", "Основана од Албан Гунга со визија да го направи управувањето со бизнисот едноставно и достапно за сите."),
    },
    {
      year: "2022",
      title: sq(lang, "Milestoni i Parë", "First Milestone", "Primer hito", "Erster Meilenstein", "Прв пресврт"),
      desc: sq(lang, "Arritëm 40 klientë besnikë në 4 vende dhe lansuan faturimin profesional me gjurmimin e pagesave.", "Reached 40 loyal clients in 4 countries and launched professional invoicing with payment tracking.", "Alcanzamos 40 clientes leales en 4 países y lanzamos facturación profesional con seguimiento de pagos.", "40 treue Kunden in 4 Ländern erreicht und professionelle Rechnungsstellung mit Zahlungsverfolgung eingeführt.", "Достигнавме 40 лојални клиенти во 4 земји и лансиравме професионално фактурирање со следење на плаќања."),
    },
    {
      year: "2023",
      title: sq(lang, "Rritja e Shpejtë", "Rapid Growth", "Crecimiento rápido", "Schnelles Wachstum", "Брз раст"),
      desc: sq(lang, "Trefishuam bazën e klientëve, lansuan menaxhimin e shpenzimeve dhe CRM. Ekipi u rrit me zhvillues të rinj.", "Tripled client base, launched expense management and CRM. The team grew with new developers.", "Triplicamos la base de clientes, lanzamos gestión de gastos y CRM. El equipo creció con nuevos desarrolladores.", "Kundenbasis verdreifacht, Ausgabenverwaltung und CRM eingeführt. Das Team wuchs mit neuen Entwicklern.", "Ја утроивме базата на клиенти, лансиравме управување со трошоци и CRM. Тимот порасна со нови програмери."),
    },
    {
      year: "2024",
      title: sq(lang, "Inteligjenca Artificiale", "Artificial Intelligence", "Inteligencia artificial", "Künstliche Intelligenz", "Вештачка интелигенција"),
      desc: sq(lang, "Integuam AI për raporte të avancuara, parashikime financiare dhe automatizim të proceseve biznesore.", "Integrated AI for advanced reports, financial forecasting and business process automation.", "Integramos IA para informes avanzados, pronósticos financieros y automatización de procesos empresariales.", "KI für fortgeschrittene Berichte, Finanzprognosen und Geschäftsprozessautomatisierung integriert.", "Интегриравме AI за напредни извештаи, финансиски прогнози и автоматизација на деловните процеси."),
    },
    {
      year: "2025",
      title: sq(lang, "Sot", "Today", "Hoy", "Heute", "Денес"),
      desc: sq(lang, "Mbi 200 biznese aktive, 5 vende dhe ekspansion i vazhdueshëm. Misioni mbetet i njëjtë: bizneset tuaja të rriten.", "Over 200 active businesses, 5 countries and continuous expansion. The mission stays the same: your businesses grow.", "Más de 200 empresas activas, 5 países y expansión continua. La misión sigue siendo la misma: que sus negocios crezcan.", "Über 200 aktive Unternehmen, 5 Länder und kontinuierliche Expansion. Die Mission bleibt dieselbe: Ihre Unternehmen wachsen.", "Над 200 активни бизниси, 5 земји и континуирана експанзија. Мисијата останува иста: вашите бизниси да растат."),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={logoPath} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}
              </Link>
              <Link href="/about" className="text-sm font-semibold text-indigo-600">
                {sq(lang, "Rreth Nesh", "About", "Sobre nosotros", "Über uns", "За нас")}
              </Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}
              </Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</Link>
            <Link href="/about" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Rreth Nesh", "About", "Sobre nosotros", "Über uns", "За нас")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/trial" className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial", "Prueba gratis", "Kostenlose Testversion", "Бесплатен пробен период")}</Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-fade inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "Themeluar 2021 · 5 vende · 200+ biznese", "Founded 2021 · 5 Countries · 200+ businesses", "Fundada en 2021 · 5 países · 200+ empresas", "Gegründet 2021 · 5 Länder · 200+ Unternehmen", "Основана 2021 · 5 земји · 200+ бизниси")}
          </div>

          <h1 className="anim-rise anim-d1 text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            {sq(lang,
              <>Njerëzit pas<br /><span className="text-indigo-600">Clientlly</span></>,
              <>The people behind<br /><span className="text-indigo-600">Clientlly</span></>,
              <>Las personas detrás de<br /><span className="text-indigo-600">Clientlly</span></>,
              <>Die Menschen hinter<br /><span className="text-indigo-600">Clientlly</span></>,
              <>Луѓето зад<br /><span className="text-indigo-600">Clientlly</span></>
            )}
          </h1>
          <p className="anim-rise anim-d2 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {sq(lang,
              "Jemi një ekip i vogël me ambicie të mëdha. Misionimi ynë është i thjeshtë: t'i bëjmë bizneset tuaja të funksionojnë pa stres, me teknologji të thjeshtë dhe mbështetje njerëzore.",
              "We're a small team with big ambitions. Our mission is simple: to make your businesses run stress-free, with simple technology and human support.",
              "Somos un equipo pequeño con grandes ambiciones. Nuestra misión es simple: hacer que sus negocios funcionen sin estrés, con tecnología simple y soporte humano.",
              "Wir sind ein kleines Team mit großen Ambitionen. Unsere Mission ist einfach: Ihre Unternehmen stressfrei laufen zu lassen, mit einfacher Technologie und menschlichem Support.",
              "Сме мал тим со големи амбиции. Нашата мисија е едноставна: да ги направиме вашите бизниси да работат без стрес, со едноставна технологија и човечка поддршка."
            )}
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-6 lg:px-8 border-y border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={String(label)} className={`anim-rise anim-d${i + 1} text-center`}>
                <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 mb-3">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Vlerat Tona", "Our Values", "Nuestros valores", "Unsere Werte", "Нашите вредности")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Çfarë na bën ndryshe", "What makes us different", "Lo que nos hace diferentes", "Was uns unterscheidet", "Што нè прави различни")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map(({ icon: Icon, color, title, desc }, i) => (
              <div key={String(title)} className={`anim-scale anim-d${i + 1} p-7 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                <div className={`inline-flex p-3 rounded-xl ${color} mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Ekipi", "Team", "Equipo", "Team", "Тим")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Njerëzit që ndërtojnë Clientlly", "The people building Clientlly", "Las personas que construyen Clientlly", "Die Menschen, die Clientlly aufbauen", "Луѓето кои го градат Clientlly")}
            </h2>
            <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang, "Ekip i vogël, i dedikuar dhe me pasion — i fokusuar 100% në suksesin tuaj.", "Small, dedicated and passionate team — 100% focused on your success.", "Equipo pequeño, dedicado y apasionado — 100% enfocado en tu éxito.", "Kleines, engagiertes und leidenschaftliches Team — 100% auf Ihren Erfolg fokussiert.", "Мал, посветен и страствен тим — 100% фокусиран на вашиот успех.")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(({ name, role, desc, icon: Icon, color }, i) => (
              <div key={name} className={`anim-scale anim-d${i + 1} p-8 bg-gray-50 border border-gray-100 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-5 shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm font-semibold text-indigo-600 mb-3">{role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Historia Jonë", "Our Story", "Nuestra historia", "Unsere Geschichte", "Нашата приказна")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Nga ideja deri sot", "From idea to today", "De la idea hasta hoy", "Von der Idee bis heute", "Од идејата до денес")}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-indigo-100"></div>
            <div className="space-y-8">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className={`anim-rise anim-d${i + 1} relative flex gap-8`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                    {year.slice(2)}
                  </div>
                  <div className="pt-2 pb-4">
                    <div className="text-xs font-semibold text-indigo-600 mb-1">{year}</div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION ── */}
      <section className="py-24 px-6 lg:px-8 bg-indigo-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-12 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-12 w-48 h-48 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="anim-fade text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-4">
                {sq(lang, "Bashkëpunimi", "Collaboration", "Colaboración", "Zusammenarbeit", "Соработка")}
              </p>
              <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(lang, "Le të rritemi bashkë", "Let's grow together", "Crezcamos juntos", "Lasst uns gemeinsam wachsen", "Да растеме заедно")}
              </h2>
              <p className="anim-rise anim-d2 text-indigo-200 text-lg leading-relaxed mb-8">
                {sq(lang,
                  "Nuk jemi vetëm furnizues softuerësh. Jemi ekipi juaj i teknologjisë. Dërgoni idetë tuaja dhe ne i ndërtojmë — plotësisht falas, sepse besojmë se kur ju rrini, rrini edhe ne.",
                  "We're not just a software vendor. We're your tech team. Send us your ideas and we build them — completely free, because we believe when you grow, we grow.",
                  "No somos solo un proveedor de software. Somos su equipo tecnológico. Envíenos sus ideas y las construimos — completamente gratis, porque creemos que cuando usted crece, nosotros crecemos.",
                  "Wir sind nicht nur ein Softwareanbieter. Wir sind Ihr Tech-Team. Senden Sie uns Ihre Ideen und wir setzen sie um — völlig kostenlos, denn wir glauben: Wenn Sie wachsen, wachsen wir.",
                  "Не сме само продавач на софтвер. Ние сме вашиот технолошки тим. Испратете ни ги вашите идеи и ние ги градиме — целосно бесплатно, бидејќи веруваме дека кога вие растете, растеме и ние."
                )}
              </p>
              <Link href="/collaboration" className="anim-rise anim-d3 inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-sm">
                {sq(lang, "Mëso Si Funksionon", "Learn How It Works", "Aprende cómo funciona", "Erfahre wie es funktioniert", "Дознај како работи")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: sq(lang, "Idetë Tuaja", "Your Ideas", "Tus ideas", "Ihre Ideen", "Вашите идеи"), desc: sq(lang, "Dërgoni kërkesa veçorish direkt nga paneli", "Submit feature requests directly from the dashboard", "Envía solicitudes de funciones directamente desde el panel", "Senden Sie Funktionsanfragen direkt vom Dashboard", "Поднесете барања за функции директно од контролната табла") },
                { icon: Users, title: sq(lang, "Zhvillim Bashkëpunues", "Collaborative Build", "Desarrollo colaborativo", "Gemeinsame Entwicklung", "Колаборативен развој"), desc: sq(lang, "Punoni ngushtë me ekipin tonë", "Work closely with our development team", "Trabaje estrechamente con nuestro equipo de desarrollo", "Arbeiten Sie eng mit unserem Entwicklungsteam zusammen", "Работете тесно со нашиот развоен тим") },
                { icon: Zap, title: sq(lang, "Kosto Zero", "Zero Cost", "Costo cero", "Keine Kosten", "Нула трошоци"), desc: sq(lang, "Implementim falas i ideve të aprovuara", "Free implementation of approved ideas", "Implementación gratuita de ideas aprobadas", "Kostenlose Umsetzung genehmigter Ideen", "Бесплатна имплементација на одобрени идеи") },
                { icon: TrendingUp, title: sq(lang, "Rritje Reale", "Real Growth", "Crecimiento real", "Echtes Wachstum", "Реален раст"), desc: sq(lang, "Platforma rritet me nevojat tuaja", "Platform grows with your needs", "La plataforma crece con sus necesidades", "Die Plattform wächst mit Ihren Bedürfnissen", "Платформата расте со вашите потреби") },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={String(title)} className={`anim-scale anim-d${i + 1} p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors`}>
                  <Icon className="h-5 w-5 text-indigo-200 mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-indigo-200 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="anim-rise text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(lang,
              <>Gati të <span className="text-indigo-400">filloni</span>?</>,
              <>Ready to <span className="text-indigo-400">get started</span>?</>,
              <>Listo para <span className="text-indigo-400">comenzar</span>?</>,
              <>Bereit <span className="text-indigo-400">loszulegen</span>?</>,
              <>Подготвени да <span className="text-indigo-400">започнете</span>?</>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(lang,
              "Bashkohuni me 200+ biznese aktive. Proven falas 14 ditore, pa kartë kredie, pa angazhim.",
              "Join 200+ active businesses. Free 14-day trial, no credit card, no commitment.",
              "Únase a más de 200 empresas activas. Prueba gratuita de 14 días, sin tarjeta de crédito, sin compromiso.",
              "Schließen Sie sich über 200 aktiven Unternehmen an. 14-tägige kostenlose Testversion, keine Kreditkarte, keine Verpflichtung.",
              "Придружете се на 200+ активни бизниси. Бесплатен пробен период од 14 дена, без кредитна картичка, без обврска."
            )}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <Link href="/subscribe" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Shiko Çmimet", "View Pricing", "Ver precios", "Preise ansehen", "Погледни цени")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
