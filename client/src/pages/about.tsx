import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, Users, Globe, Shield, Building2, FileText,
  Rocket, Crown, Code, TrendingUp, Zap, Lightbulb,
  Heart, Menu, X, CheckCircle, Calendar
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

const sq = (lang: string, albanian: string, english: string) =>
  lang === 'sq' ? albanian : english;

const AboutPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;

  const stats = [
    { value: "200+", label: sq(lang, "Klientë na Besojnë", "Clients Trust Us"), icon: Building2 },
    { value: "12K+", label: sq(lang, "Fatura të Përpunuara", "Invoices Processed"), icon: FileText },
    { value: "5", label: sq(lang, "Vende në Mbarë Botën", "Countries Worldwide"), icon: Globe },
    { value: "99.9%", label: sq(lang, "Besueshmëria e Kohës", "Uptime Reliability"), icon: Shield },
  ];

  const principles = [
    {
      icon: Rocket,
      color: "bg-blue-50 text-blue-600",
      title: sq(lang, "Inovacion në Zemër", "Innovation at Heart"),
      desc: sq(lang, "Shtyjmë vazhdimisht kufijtë e mundshmes, duke krijuar zgjidhjet e biznesit të së nesërmes sot.", "We constantly push the boundaries of what's possible, creating tomorrow's business solutions today."),
    },
    {
      icon: Users,
      color: "bg-violet-50 text-violet-600",
      title: sq(lang, "Komuniteti i Parë", "Community First"),
      desc: sq(lang, "Çdo veçori ndërtohet me komunitetin tonë në mendje, duke siguruar vlerë reale për biznese reale.", "Every feature is built with our community in mind, ensuring real value for real businesses."),
    },
    {
      icon: Crown,
      color: "bg-amber-50 text-amber-600",
      title: sq(lang, "Përsosmëri Gjithmonë", "Excellence Always"),
      desc: sq(lang, "Mbajmë standardet më të larta në gjithçka që bëjmë, nga cilësia e kodit deri te mbështetja e klientit.", "We maintain the highest standards in everything we do, from code quality to customer support."),
    },
    {
      icon: Heart,
      color: "bg-rose-50 text-rose-600",
      title: sq(lang, "Kujdes i Vërtetë", "Genuine Care"),
      desc: sq(lang, "Suksesi juaj është suksesi ynë. Ne jemi këtu t'ju mbështesim çdo hap të rrugëtimit tuaj të biznesit.", "Your success is our success. We're here to support you every step of your business journey."),
    },
  ];

  const team = [
    {
      name: "Alban Gunga",
      role: sq(lang, "CEO & Themelues", "CEO & Founder"),
      desc: sq(lang, "Lider vizionar që drejton inovacionin në zgjidhjet e menaxhimit të biznesit.", "Visionary leader driving innovation in business management solutions."),
      icon: Crown,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Elvis Burrniku",
      role: sq(lang, "Drejtori i Teknologjisë", "Chief Technology Officer"),
      desc: sq(lang, "Arkitekt teknik i zgjidhjeve shkallëzuese dhe ekselencës inxhinierike.", "Technical architect of scalable solutions and engineering excellence."),
      icon: Code,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Liridon Salihu",
      role: sq(lang, "VP i Inxhinierisë", "VP of Engineering"),
      desc: sq(lang, "Strateg inxhinierik që siguron procese të qëndrueshme zhvillimi dhe cilësi të lartë.", "Engineering strategist ensuring robust development processes and high quality."),
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "David Kim",
      role: sq(lang, "Menaxher Produkti", "Product Manager"),
      desc: sq(lang, "Ekspert i strategjisë së produktit me njohuri të thella për bizneset e vogla dhe të mesme.", "Product strategy expert with deep insights for small and medium businesses."),
      icon: TrendingUp,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: sq(lang, "Fillimi", "The Beginning"),
      desc: sq(lang, "U themelua me vizionin për të thjeshtuar operacionet e biznesit për ndërmarrjet e vogla dhe të mesme.", "Founded with a vision to simplify business operations for small and medium enterprises."),
    },
    {
      year: "2022",
      title: sq(lang, "Milestoni i Parë", "First Milestone"),
      desc: sq(lang, "Arritëm 40 klientë në 4 vende dhe lansuam platformën tonë gjithëpërfshirëse të faturimit.", "Reached 40 customers in 4 countries and launched our comprehensive invoicing platform."),
    },
    {
      year: "2023",
      title: sq(lang, "Rritja e Platformës", "Platform Growth"),
      desc: sq(lang, "Zgjeruam veçoritë tona dhe prezantuam kapacitete të avancuara raportimi dhe analitike.", "Enhanced our features and introduced advanced reporting and analytics capabilities."),
    },
    {
      year: "2024",
      title: sq(lang, "Integrimi i AI", "AI Integration"),
      desc: sq(lang, "Lansuat njohuri të drejtuara nga AI dhe veçori të automatizuara të inteligjencës biznesore.", "Launched AI-powered insights and automated business intelligence features."),
    },
    {
      year: "2025",
      title: sq(lang, "Milestoni Aktual", "Current Milestone"),
      desc: sq(lang, "Arritëm 200 klientë dhe vazhdojmë të zgjerojmë paketën tonë gjithëpërfshirëse të menaxhimit të biznesit.", "Reached 200 customers and continue expanding our comprehensive business management suite."),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2.5">
              <img src={logoPath} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-lg font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-sm font-semibold text-indigo-600 transition-colors">
                {sq(lang, "Rreth Nesh", "About Us")}
              </Link>
              <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Veçoritë", "Features")}
              </Link>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Çmimet", "Pricing")}
              </button>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Kontakt", "Contact")}
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button onClick={() => window.location.href = "/api/login"} className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors">
                {sq(lang, "Hyr", "Login")}
              </button>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now")}
              </button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {sq(lang, "Provo Falas", "Free Trial")}
              </button>
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/about" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Rreth Nesh", "About Us")}</Link>
            <Link href="/#features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features")}</Link>
            <button onClick={() => window.location.href = '/subscribe'} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => window.location.href = "/trial"} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Provo Falas", "Free Trial")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-b from-indigo-50/60 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "Themeluar në 2021 · 5 vende", "Founded 2021 · 5 Countries")}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            {sq(lang,
              <>Rreth <span className="text-indigo-600">Clientlly</span></>,
              <>About <span className="text-indigo-600">Clientlly</span></>
            )}
          </h1>
          <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {sq(lang,
              "Jemi në një mision për të fuqizuar bizneset në mbarë botën me automatizim inteligjent, rrjedha të qetë pune dhe njohuri të drejtuara nga të dhënat.",
              "We're on a mission to empower businesses worldwide with intelligent automation, seamless workflows, and data-driven insights that drive real growth."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/contact"} className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-colors">
              {sq(lang, "Na Kontaktoni", "Contact Us")}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
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

      {/* Mission / Principles */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(lang, "Vlerat Tona", "Our Values")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Çfarë na drejton", "What drives us")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="p-7 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className={`inline-flex p-3 rounded-xl ${color} bg-opacity-10 mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(lang, "Ekipi", "Team")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Njerëzit pas Clientlly", "The people behind Clientlly")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang, "Novatorët e apasionuar që drejtojnë historinë e suksesit tonë.", "The passionate innovators driving our success story.")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, desc, icon: Icon, color }) => (
              <div key={name} className="p-7 bg-white border border-gray-100 rounded-2xl text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
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

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              {sq(lang, "Historia Jonë", "Our Journey")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Si kemi arritur këtu", "How we got here")}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-10">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className="relative flex gap-8 pl-16">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-md">
                    {year.slice(2)}
                  </div>
                  <div className="pt-2 pb-2">
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

      {/* Collaboration */}
      <section className="py-24 px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-4">
                {sq(lang, "Bashkëpunimi", "Collaboration")}
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(lang, "Le të rritemi bashkë", "Let's grow together")}
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                {sq(lang,
                  "Platforma jonë ndërtohet bashkë me ju. Dërgoni idetë tuaja dhe ekipi ynë i zhvillimit do t'i kthejë në realitet, falas.",
                  "Our platform is built together with you. Send your ideas and our development team will make them reality, at no cost."
                )}
              </p>
              <button onClick={() => window.location.href = "/collaboration"} className="inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-sm">
                {sq(lang, "Mëso Bashkëpunimin", "Learn About Collaboration")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: sq(lang, "Idetë Tuaja", "Your Ideas"), desc: sq(lang, "Dërgoni kërkesa veçorish direkt nga paneli juaj", "Submit feature requests directly from your dashboard") },
                { icon: Users, title: sq(lang, "Zhvillim i Bashkëpunuar", "Collaborative Development"), desc: sq(lang, "Punoni ngushtë me ekipin tonë të zhvillimit", "Work closely with our development team") },
                { icon: Zap, title: sq(lang, "Implementim Falas", "Free Implementation"), desc: sq(lang, "Të gjitha sugjerimet e aprovuara zhvillohen falas", "All approved suggestions developed at no cost") },
                { icon: TrendingUp, title: sq(lang, "Rritje e Ndërsjellë", "Mutual Growth"), desc: sq(lang, "Platforma rritet me rritjen e biznesit tuaj", "Platform grows with your business") },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Icon className="h-5 w-5 text-indigo-200 mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-indigo-200 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {sq(lang,
              <>Gati të <span className="text-indigo-400">filloni</span>?</>,
              <>Ready to <span className="text-indigo-400">get started</span>?</>
            )}
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(lang,
              "Bashkohuni me 200+ biznese që kanë thjeshtuar operacionet e tyre me Clientlly.",
              "Join 200+ businesses who have streamlined their operations with Clientlly."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => window.location.href = "/trial"} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-sm">
              {sq(lang, "Fillo Provën Tënde", "Start Your Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.location.href = "/subscribe"} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors">
              {sq(lang, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
