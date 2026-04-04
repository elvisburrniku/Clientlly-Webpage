import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Lightbulb, Code, Rocket, CheckCircle, Users,
  MessageSquare, Zap, TrendingUp, Globe, Menu, X, Star,
  Clock, Shield, Gift
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

const CollaborationPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage;

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      color: "text-blue-600 bg-blue-50",
      ring: "ring-blue-100",
      title: sq(lang, "Dërgoni Idenë Tuaj", "Submit Your Idea"),
      desc: sq(lang, "Nga paneli juaj, dërgoni çfarëdo ideje — një veçori e re, përmirësim të rrjedhës së punës, raport i personalizuar, apo çdo gjë tjetër që do ta bënte biznesin tuaj më efiçent.", "From your dashboard, submit any idea — a new feature, workflow improvement, custom report, or anything that would make your business more efficient."),
      details: [
        sq(lang, "Formular i thjeshtë për dërgim", "Simple submission form"),
        sq(lang, "Shtoni pamje ekrani ose video", "Attach screenshots or videos"),
        sq(lang, "Konfirmim menjëherë", "Instant confirmation"),
      ],
    },
    {
      number: "02",
      icon: MessageSquare,
      color: "text-violet-600 bg-violet-50",
      ring: "ring-violet-100",
      title: sq(lang, "Ekipi Ynë Vlerëson", "Our Team Reviews"),
      desc: sq(lang, "Ekipi ynë i zhvillimit rishikon çdo propozim brenda 48 orësh. Bashkëpunojmë me ju për të kuptuar saktësisht çfarë keni nevojë dhe si ta ndërtojmë mirë.", "Our development team reviews every proposal within 48 hours. We collaborate with you to understand exactly what you need and how to build it well."),
      details: [
        sq(lang, "Përgjigje brenda 48 orësh", "Response within 48 hours"),
        sq(lang, "Diskutim i drejtpërdrejtë me zhvilluesit", "Direct discussion with developers"),
        sq(lang, "Specifikimet e qarta të veçorisë", "Clear feature specifications"),
      ],
    },
    {
      number: "03",
      icon: Code,
      color: "text-emerald-600 bg-emerald-50",
      ring: "ring-emerald-100",
      title: sq(lang, "Ndërtim Profesional", "Professional Build"),
      desc: sq(lang, "Zhvilluesi ynë ndërton veçorinë me standarde profesionale — me kod cilësor, teste dhe dokumentacion. I gjithë procesi është falas për ju.", "Our developer builds the feature to professional standards — with quality code, tests and documentation. The entire process is completely free for you."),
      details: [
        sq(lang, "Kod cilësor dhe i testuar", "Quality, tested code"),
        sq(lang, "Azhurnim i rregullt i progresit", "Regular progress updates"),
        sq(lang, "Kosto zero për ju", "Zero cost for you"),
      ],
    },
    {
      number: "04",
      icon: Rocket,
      color: "text-orange-600 bg-orange-50",
      ring: "ring-orange-100",
      title: sq(lang, "Lançim & Trajnim", "Launch & Training"),
      desc: sq(lang, "Veçoria lansohet drejtpërdrejt në llogarinë tuaj. Merrni trajnim të plotë dhe dokumentacion si ta përdorni menjëherë. Gjithë komuniteti përfiton.", "The feature launches directly in your account. You get full training and documentation on how to use it immediately. The whole community benefits."),
      details: [
        sq(lang, "Implementim direkt në llogarinë tuaj", "Direct deployment to your account"),
        sq(lang, "Dokumentacion dhe trajnim falas", "Free documentation and training"),
        sq(lang, "I disponueshëm për gjithë komunitetin", "Available to the whole community"),
      ],
    },
  ];

  const benefits = [
    {
      icon: Gift,
      color: "text-indigo-600 bg-indigo-50",
      title: sq(lang, "100% Falas", "100% Free"),
      desc: sq(lang, "Asnjë pagesë shtesë për zhvillim të personalizuar. Çdo gjë është e përfshirë në abonimin tuaj.", "No extra charge for custom development. Everything is included in your subscription."),
    },
    {
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50",
      title: sq(lang, "Zbatim i Shpejtë", "Fast Turnaround"),
      desc: sq(lang, "Veçoritë e zakonshme ndërtohen brenda 1-3 javësh. Veçoritë komplekse brenda 4-8 javësh.", "Standard features built in 1–3 weeks. Complex features within 4–8 weeks."),
    },
    {
      icon: Shield,
      color: "text-blue-600 bg-blue-50",
      title: sq(lang, "Cilësi e Garantuar", "Quality Guaranteed"),
      desc: sq(lang, "Çdo veçori kalon nëpër rishikim të kodit, testim dhe siguri cilësi para se të lansohet.", "Every feature goes through code review, testing and QA before it launches."),
    },
    {
      icon: Users,
      color: "text-violet-600 bg-violet-50",
      title: sq(lang, "Kreditë Tuaj", "Your Credit"),
      desc: sq(lang, "Bizneset që kontribuojnë me ide njihen publikisht si partnerë dhe bashkëpunëtorë.", "Businesses that contribute ideas are publicly recognised as partners and collaborators."),
    },
    {
      icon: Globe,
      color: "text-amber-600 bg-amber-50",
      title: sq(lang, "Ndikon Gjithë Komunitetin", "Impacts the Whole Community"),
      desc: sq(lang, "Idetë tuaja bëhen veçori për të gjithë klientët tanë — trashëgimia juaj në platformë.", "Your ideas become features for all our clients — your legacy on the platform."),
    },
    {
      icon: TrendingUp,
      color: "text-rose-600 bg-rose-50",
      title: sq(lang, "Rritje e Përbashkët", "Shared Growth"),
      desc: sq(lang, "Ne investojmë në suksesin tuaj sepse suksesi juaj është suksesi ynë — partneriteti real.", "We invest in your success because your success is our success — a real partnership."),
    },
  ];

  const testimonials = [
    {
      name: "Artan Hoxha",
      role: sq(lang, "Pronar, Hoxha & Partners", "Owner, Hoxha & Partners"),
      text: sq(lang, "Propozova një raport të personalizuar të rrjedhës monetare dhe e lanëm të gatshëm brenda 2 javësh. Nuk mund ta besoja — ishte saktësisht çfarë kishim nevojë.", "I suggested a custom cash flow report and they had it ready within 2 weeks. I couldn't believe it — it was exactly what we needed."),
      stat: sq(lang, "Kurseu 8 orë/javë", "Saves 8 hrs/week"),
    },
    {
      name: "Blerta Krasniqi",
      role: sq(lang, "CEO, TechStart Kosovo", "CEO, TechStart Kosovo"),
      text: sq(lang, "Bashkëpunimi me ekipin e Clientlly ndihet si të kesh departamentin tuaj të teknologjisë — pa kostot e tij. Tre idetë tona janë zbatuar tashmë.", "Collaborating with the Clientlly team feels like having your own tech department — without the costs. Three of our ideas have already been implemented."),
      stat: sq(lang, "3 veçori të realizuara", "3 features shipped"),
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
                {sq(lang, "Ballina", "Home")}
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Rreth Nesh", "About")}
              </Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Veçoritë", "Features")}
              </Link>
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Çmimet", "Pricing")}
              </button>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {sq(lang, "Kontakt", "Contact")}
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <button onClick={() => window.location.href = '/subscribe'} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now")}
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
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features")}</Link>
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

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">

          <div className="anim-fade inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "Disponueshëm për të gjithë klientët", "Available to all subscribers")}
          </div>

          <h1 className="anim-rise anim-d1 text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {sq(lang,
              <>Idetë tuaja bëhen<br /><span className="text-indigo-600">realitet — falas</span></>,
              <>Your ideas become<br /><span className="text-indigo-600">reality — for free</span></>
            )}
          </h1>

          <p className="anim-rise anim-d2 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
            {sq(lang,
              "Kur abonoheni tek Clientlly, bëheni partneri ynë i zhvillimit. Dërgoni idetë tuaja dhe ekipi ynë i zhvillimit i ndërton — pa asnjë kosto shtesë, me standarde profesionale.",
              "When you subscribe to Clientlly, you become our development partner. Submit your ideas and our dev team builds them — at no extra cost, to professional standards."
            )}
          </p>
          <p className="anim-rise anim-d3 text-base text-gray-400 max-w-xl mx-auto mb-10">
            {sq(lang,
              "Jo vetëm software. Kjo është partneritet i vërtetë i biznesit.",
              "Not just software. This is real business partnership."
            )}
          </p>

          <div className="anim-rise anim-d4 flex flex-wrap justify-center gap-3 mb-14">
            <a href="#process"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all duration-200 shadow-sm"
            >
              {sq(lang, "Si Funksionon", "How It Works")}
            </a>
            <button
              onClick={() => window.location.href = "/contact"}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">
                  {sq(lang, "Pa kosto · Për të gjithë abonentët", "Free · For all subscribers")}
                </span>
                <span className="text-sm">
                  {sq(lang, "Dërgoni Idenë Tuaj", "Submit Your Idea")}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Quick stats */}
          <div className="anim-fade anim-d5 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              { value: "48h", label: sq(lang, "Përgjigje", "Response") },
              { value: "€0", label: sq(lang, "Kosto Shtesë", "Extra Cost") },
              { value: "100%", label: sq(lang, "Cilësi Prof.", "Pro Quality") },
            ].map(({ value, label }) => (
              <div key={String(label)} className="text-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="text-xl font-extrabold text-indigo-600">{value}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Procesi", "The Process")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Si funksionon bashkëpunimi", "How the collaboration works")}
            </h2>
            <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-2xl mx-auto">
              {sq(lang, "4 hapa të thjeshtë nga ideja juaj deri te veçoria e gatshme në llogarinë tuaj.", "4 simple steps from your idea to a ready feature in your account.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-indigo-100 z-0"></div>

            {steps.map(({ number, icon: Icon, color, ring, title, desc, details }, i) => (
              <div key={number} className={`anim-scale anim-d${i + 1} relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                {/* Step number */}
                <div className={`relative z-10 w-12 h-12 rounded-full ${color} ring-4 ${ring} flex items-center justify-center mb-5 mx-auto`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="absolute top-3 right-4 text-3xl font-extrabold text-gray-100">{number}</div>

                <h3 className="font-bold text-gray-900 mb-2 text-center">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 text-center">{desc}</p>
                <ul className="space-y-1.5">
                  {(details as string[]).map((d, di) => (
                    <li key={di} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Përfitimet", "Benefits")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Çfarë fitoni nga ky partneritet", "What you gain from this partnership")}
            </h2>
            <p className="anim-rise anim-d2 text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang, "Nuk është vetëm zhvillim falas — është mënyra si ne ndërtojmë një produkt të mirë bashkë.", "It's not just free development — it's how we build a great product together.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, color, title, desc }, i) => (
              <div key={String(title)} className={`anim-scale anim-d${i + 1} p-7 border border-gray-100 rounded-2xl hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-300`}>
                <div className={`inline-flex p-3 rounded-xl ${color} mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="anim-fade text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Histori Suksesi", "Success Stories")}
            </p>
            <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Bizneset që kanë bashkëpunuar", "Businesses that have collaborated")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(({ name, role, text, stat }, i) => (
              <div key={name} className={`anim-scale anim-d${i + 1} p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-indigo-100 transition-all duration-300`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{role}</div>
                  </div>
                  <div className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">
                    {stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT'S DIFFERENT ── */}
      <section className="py-24 px-6 lg:px-8 bg-indigo-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-12 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-12 w-48 h-48 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="anim-fade text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-4">
                {sq(lang, "Ndryshimi Ynë", "Our Difference")}
              </p>
              <h2 className="anim-rise anim-d1 text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {sq(lang,
                  <>Jo thjesht<br /><span className="text-indigo-200">software-as-a-service</span></>,
                  <>Not just<br /><span className="text-indigo-200">software-as-a-service</span></>
                )}
              </h2>
              <p className="anim-rise anim-d2 text-indigo-200 text-lg leading-relaxed mb-8">
                {sq(lang,
                  "Shumica e kompanive software ju shesin produktin e tyre dhe ndalojnë. Ne ndërtojmë platformën tonë bashkë me ju. Çdo ide e mirë e klientit tonë bëhet veçori — pa pagesë, pa vonesë, pa burokraci.",
                  "Most software companies sell you their product and stop. We build our platform together with you. Every good client idea becomes a feature — no charge, no delay, no bureaucracy."
                )}
              </p>
              <div className="space-y-3">
                {[
                  sq(lang, "Abonentët kanë zë të drejtpërdrejtë në zhvillim", "Subscribers have direct voice in development"),
                  sq(lang, "Asnjë kërkesë nuk injorohet — të gjitha vlerësohen", "No request is ignored — all are evaluated"),
                  sq(lang, "Idetë tuaja bëhen trashëgimi e platformës", "Your ideas become the platform's legacy"),
                ].map((item, i) => (
                  <div key={i} className={`anim-rise anim-d${i + 2} flex items-center gap-3`}>
                    <CheckCircle className="h-5 w-5 text-indigo-300 flex-shrink-0" />
                    <span className="text-indigo-100 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Zap, label: sq(lang, "Veçori standarde", "Standard features"), time: "1–3 weeks", color: "text-blue-300" },
                { icon: Code, label: sq(lang, "Veçori të komplekse", "Complex features"), time: "4–8 weeks", color: "text-violet-300" },
                { icon: TrendingUp, label: sq(lang, "Integrime me palë të treta", "Third-party integrations"), time: "2–5 weeks", color: "text-emerald-300" },
              ].map(({ icon: Icon, label, time, color }, i) => (
                <div key={String(label)} className={`anim-scale anim-d${i + 1} flex items-center gap-5 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors`}>
                  <Icon className={`h-8 w-8 ${color} flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-indigo-200 text-xs mt-0.5">
                      {sq(lang, "Koha mesatare:", "Average time:")} <span className="font-bold text-white">{time}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="anim-scale anim-d4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">€0</div>
                <div className="text-indigo-200 text-sm">
                  {sq(lang, "Kosto shtesë zhvillimi", "Extra development cost")}
                </div>
                <div className="mt-2 text-xs text-indigo-300">
                  {sq(lang, "I përfshirë në abonim", "Included in your subscription")}
                </div>
              </div>
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
              <>Suksesi juaj<br /><span className="text-indigo-400">e shtyn inovacionin tonë</span></>,
              <>Your success<br /><span className="text-indigo-400">drives our innovation</span></>
            )}
          </h2>
          <p className="anim-rise anim-d1 text-gray-400 text-lg mb-10 leading-relaxed">
            {sq(lang,
              "Bashkohuni me bizneset aktive që tashmë po formëzojnë të ardhmen e Clientlly. Filloni provën falas dhe dërgoni idenë tuaj të parë sot.",
              "Join active businesses already shaping the future of Clientlly. Start your free trial and submit your first idea today."
            )}
          </p>
          <div className="anim-rise anim-d2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.href = "/trial"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => window.location.href = "/contact"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200"
            >
              {sq(lang, "Fol Me Ekipin", "Talk to the Team")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaborationPage;
