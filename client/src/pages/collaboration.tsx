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

const sq = (lang: string, albanian: string | JSX.Element, english: string | JSX.Element) =>
  lang === 'sq' ? albanian : english;

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
      title: sq(lang, "Dërgoni Idenë Tuaj", "Submit Your Idea"),
      desc: sq(lang, "Nga paneli juaj, dërgoni çfarëdo ideje — një veçori e re, përmirësim të rrjedhës, raport i personalizuar, apo çdo gjë tjetër që do t'ju bënte biznesin më efiçent.", "From your dashboard, submit any idea — a new feature, workflow improvement, custom report, or anything that would make your business more efficient."),
      details: [
        sq(lang, "Formular i thjeshtë për dërgim", "Simple submission form"),
        sq(lang, "Shtoni pamje ekrani ose video", "Attach screenshots or videos"),
        sq(lang, "Konfirmim menjëherë", "Instant confirmation"),
      ],
    },
    {
      number: "02",
      icon: Users,
      color: "bg-violet-600",
      light: "bg-violet-50 border-violet-100",
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
      color: "bg-emerald-600",
      light: "bg-emerald-50 border-emerald-100",
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
      color: "bg-orange-600",
      light: "bg-orange-50 border-orange-100",
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
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: sq(lang, "100% Falas", "100% Free"),
      desc: sq(lang, "Asnjë pagesë shtesë për zhvillim të personalizuar. Çdo gjë është e përfshirë në abonimin tuaj.", "No extra charge for custom development. Everything is included in your subscription."),
    },
    {
      icon: Clock,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      title: sq(lang, "Zbatim i Shpejtë", "Fast Turnaround"),
      desc: sq(lang, "Veçoritë e zakonshme ndërtohen brenda 1-3 javësh. Veçoritë komplekse brenda 4-8 javësh.", "Standard features built in 1–3 weeks. Complex features within 4–8 weeks."),
    },
    {
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: sq(lang, "Cilësi e Garantuar", "Quality Guaranteed"),
      desc: sq(lang, "Çdo veçori kalon nëpër rishikim të kodit, testim dhe siguri cilësi para se të lansohet.", "Every feature goes through code review, testing and QA before it launches."),
    },
    {
      icon: Users,
      color: "text-violet-600",
      bg: "bg-violet-50",
      title: sq(lang, "Kreditë Tuaj", "Your Credit"),
      desc: sq(lang, "Bizneset që kontribuojnë me ide njihen publikisht si partnerë dhe bashkëpunëtorë.", "Businesses that contribute ideas are publicly recognised as partners and collaborators."),
    },
    {
      icon: Globe,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: sq(lang, "Ndikon Gjithë Komunitetin", "Impacts the Community"),
      desc: sq(lang, "Idetë tuaja bëhen veçori për të gjithë klientët tanë — trashëgimia juaj në platformë.", "Your ideas become features for all our clients — your legacy on the platform."),
    },
    {
      icon: TrendingUp,
      color: "text-rose-600",
      bg: "bg-rose-50",
      title: sq(lang, "Rritje e Përbashkët", "Shared Growth"),
      desc: sq(lang, "Ne investojmë në suksesin tuaj sepse suksesi juaj është suksesi ynë — partneriteti real.", "We invest in your success because your success is our success — a real partnership."),
    },
  ];

  const testimonials = [
    {
      name: "Artan Shala",
      role: sq(lang, "Truly Nolen", "Truly Nolen"),
      avatar: "AS",
      color: "from-blue-500 to-indigo-600",
      text: sq(lang, "Propozova një raport të personalizuar të rrjedhës monetare dhe e lanëm të gatshëm brenda 2 javësh. Nuk mund ta besoja — ishte saktësisht çfarë kishim nevojë.", "I suggested a custom cash flow report and they had it ready within 2 weeks. I couldn't believe it — it was exactly what we needed."),
      stat: sq(lang, "Kurseu 8 orë/javë", "Saves 8 hrs/week"),
    },
    {
      name: "Blerta Krasniqi",
      role: sq(lang, "CEO, TechStart", "CEO, TechStart"),
      avatar: "BK",
      color: "from-violet-500 to-purple-600",
      text: sq(lang, "Bashkëpunimi me ekipin e Clientlly ndihet si të kesh departamentin tuaj të teknologjisë — pa kostot e tij. Tre idetë tona janë zbatuar tashmë.", "Collaborating with the Clientlly team feels like having your own tech department — without the costs. Three of our ideas have already been implemented."),
      stat: sq(lang, "3 veçori të realizuara", "3 features shipped"),
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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-3 ml-auto">
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2 ml-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Rreth Nesh", "About")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact")}</Link>
            <div className="pt-2"><LanguageSelector /></div>
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
              <span className="text-sm font-semibold text-white">{sq(lang, "Ekskluzive për Abonentët", "Exclusive for Subscribers")}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {sq(lang,
                <>Le të Rritemi <span className="text-amber-300">Bashkë</span></>,
                <>Let's Grow <span className="text-amber-300">Together</span></>
              )}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              {sq(lang,
                "Ju sugjeroni — ne ndërtojmë. Çdo veçori e personalizuar zhvillohet falas nga ekipi ynë profesional, drejtpërdrejt në platformën tuaj.",
                "You suggest — we build. Every custom feature is developed free by our professional team, directly in your platform."
              )}
            </p>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
              {[
                { value: "48h", label: sq(lang, "Kohë Përgjigje", "Response Time") },
                { value: "100%", label: sq(lang, "Falas", "Free") },
                { value: "1-3 jav", label: sq(lang, "Dërgim", "Delivery") },
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
              {sq(lang, "Procesi", "Process")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Si funksionon?", "How does it work?")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {sq(lang, "Katër hapa të thjeshtë — nga ideja deri te veçoria e gatshme në platformën tuaj.", "Four simple steps — from idea to finished feature in your platform.")}
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
              {sq(lang, "Përfitimet", "Benefits")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Pse bashkëpunimi funksionon?", "Why does collaboration work?")}
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
              {sq(lang, "Histori Suksesi", "Success Stories")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Bizneset flasin", "Businesses speak")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-base italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
                    {t.stat}
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
            <span className="text-sm font-semibold text-white">{sq(lang, "I disponueshëm në Pro & Enterprise", "Available in Pro & Enterprise")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {sq(lang, "Gati të ndërtojmë bashkë?", "Ready to build together?")}
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            {sq(lang,
              "Zgjidhni planin Professional ose Enterprise dhe filloni të dërgoni idetë tuaja sot. Ekipi ynë është gati.",
              "Choose the Professional or Enterprise plan and start submitting your ideas today. Our team is ready."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { window.location.href = '/subscribe'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/30 text-sm"
            >
              {sq(lang, "Shiko Planet", "View Plans")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => { window.location.href = '/subscribe?plan=professional&billing=monthly'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg text-sm"
            >
              <CreditCard className="h-4 w-4" />
              {sq(lang, "Bli Plan Pro / Enterprise", "Get Pro or Enterprise")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
