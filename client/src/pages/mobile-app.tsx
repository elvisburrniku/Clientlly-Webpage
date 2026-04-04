import { ArrowLeft, Star, CheckCircle, Smartphone, Wifi, Bell, Shield, BarChart3, FileText, Users, Zap, Camera, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { AppStoreIcon, GooglePlayIcon } from "@/components/ui/animated-icons";
import Footer from "@/components/Footer";
import screenInvoices from "@assets/IMG_6934_1775317016363.jpeg";
import screenExpenses from "@assets/IMG_6935_1775317016363.jpeg";
import screenReports  from "@assets/IMG_6936_1775317016363.jpeg";
import screenDetail   from "@assets/IMG_6937_1775317016363.jpeg";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function MobileApp() {
  const { currentLanguage: lang } = useLanguage();

  const features = [
    {
      icon: FileText,
      color: "bg-indigo-100 text-indigo-600",
      title: sq(lang, "Fatura Profesionale", "Professional Invoicing"),
      desc:  sq(lang, "Krijo dhe dërgo fatura direkt nga telefoni. Klienti paguan me një klik.", "Create and send invoices from your phone. Clients pay with one click."),
    },
    {
      icon: Camera,
      color: "bg-violet-100 text-violet-600",
      title: sq(lang, "Skanim Faturash", "Receipt Scanner"),
      desc:  sq(lang, "Fotografo faturën dhe shpenzimet regjistrohen automatikisht.", "Photograph a receipt and expenses are recorded automatically."),
    },
    {
      icon: BarChart3,
      color: "bg-blue-100 text-blue-600",
      title: sq(lang, "Raporte në Kohë Reale", "Real-Time Reports"),
      desc:  sq(lang, "Shih performancën e biznesit tënd kudo dhe kurdo.", "See your business performance anywhere, anytime."),
    },
    {
      icon: Users,
      color: "bg-emerald-100 text-emerald-600",
      title: sq(lang, "Menaxhim Klientësh", "Client Management"),
      desc:  sq(lang, "360° profil për çdo klient, historiku i plotë i komunikimit.", "360° profile for each client, full communication history."),
    },
    {
      icon: Wifi,
      color: "bg-amber-100 text-amber-600",
      title: sq(lang, "Punon Offline", "Works Offline"),
      desc:  sq(lang, "Nuk ka internet? Nuk ka problem. Të dhënat sinkronizohen kur lidhesh.", "No internet? No problem. Data syncs when you reconnect."),
    },
    {
      icon: Bell,
      color: "bg-rose-100 text-rose-600",
      title: sq(lang, "Njoftimet e Zgjuara", "Smart Notifications"),
      desc:  sq(lang, "Merr njoftime për pagesat e vonuara, takimet dhe detyrat e rëndësishme.", "Get notified for overdue payments, meetings and important tasks."),
    },
    {
      icon: Shield,
      color: "bg-slate-100 text-slate-600",
      title: sq(lang, "Siguri Bankare", "Bank-Level Security"),
      desc:  sq(lang, "Enkriptim 256-bit SSL. Të dhënat tuaja janë gjithmonë të sigurta.", "256-bit SSL encryption. Your data is always safe."),
    },
    {
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600",
      title: sq(lang, "Shpejtë dhe i Lehtë", "Fast & Lightweight"),
      desc:  sq(lang, "Aplikacion nën 80MB, i shpejtë edhe me lidhje 3G.", "App under 80MB, fast even on 3G connections."),
    },
  ];

  const reviews = [
    {
      name: "Artan Hoxha",
      company: "Hoxha Consulting",
      avatar: "AH",
      text: sq(lang,
        "Menaxhoj të gjithë biznesin tim nga telefoni. Faturat, klientët, raportet — gjithçka në një vend.",
        "I manage my entire business from my phone. Invoices, clients, reports — everything in one place."
      ),
    },
    {
      name: "Mirela Krasniqi",
      company: "MK Design Studio",
      avatar: "MK",
      text: sq(lang,
        "Funksioni i skanimit të faturave më kursen 3+ orë në javë. Aplikacioni është i shpejtë dhe elegant.",
        "The receipt scanning feature saves me 3+ hours per week. The app is fast and elegant."
      ),
    },
    {
      name: "Besnik Rama",
      company: "Rama Architects",
      avatar: "BR",
      text: sq(lang,
        "Sinkronizimi midis telefonit dhe kompjuterit është perfekt. Filloj punën në terren dhe mbaroj në zyrë.",
        "Sync between phone and computer is perfect. I start work in the field and finish at the office."
      ),
    },
  ];

  const screens = [
    { label: sq(lang, "Paneli Kryesor", "Dashboard"),       color: "from-indigo-500 to-indigo-700",  icon: BarChart3 },
    { label: sq(lang, "Fatura",         "Invoices"),         color: "from-violet-500 to-violet-700",  icon: FileText },
    { label: sq(lang, "Shpenzime",      "Expenses"),         color: "from-emerald-500 to-emerald-700",icon: Camera },
    { label: sq(lang, "Klientët",       "Clients"),          color: "from-blue-500 to-blue-700",      icon: Users },
    { label: sq(lang, "Raportet",       "Reports"),          color: "from-rose-500 to-rose-600",      icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <button onClick={() => window.location.href = "/"}
              className="flex items-center gap-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </button>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {sq(lang, "Kthehu", "Back")}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                <Smartphone className="h-3.5 w-3.5 text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-700">
                  {sq(lang, "Aplikacioni Mobil", "Mobile App")}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                {sq(lang,
                  <>Biznesi juaj në<br /><span className="text-indigo-600">çdo xhep</span></>,
                  <>Your business in<br /><span className="text-indigo-600">every pocket</span></>
                )}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {sq(lang,
                  "Aplikacioni Clientlly për iOS dhe Android ju lejon të menaxhoni fatura, shpenzime, klientë dhe raporte — kudo dhe kurdo.",
                  "The Clientlly app for iOS and Android lets you manage invoices, expenses, clients and reports — anywhere, anytime."
                )}
              </p>

              {/* Rating row */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9</span>
                <span className="text-sm text-gray-400">
                  {sq(lang, "nga 12,000+ vlerësime", "from 12,000+ ratings")}
                </span>
              </div>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <AppStoreIcon />
                <GooglePlayIcon />
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  sq(lang, "Falas të shkarkosh", "Free to download"),
                  sq(lang, "iOS 14+ / Android 8+", "iOS 14+ / Android 8+"),
                  sq(lang, "Pa reklamat", "Ad-free"),
                ].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3 text-emerald-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — real app screenshots */}
            <div className="relative flex justify-center items-end gap-3">
              {/* Side phone (smaller, slightly behind) */}
              <div className="hidden sm:block w-36 rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl mb-4 self-end"
                style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)" }}>
                <img src={screenExpenses} alt="Expenses screen" className="w-full h-auto block" />
              </div>
              {/* Centre phone (tallest, front) */}
              <div className="w-44 rounded-[2.2rem] overflow-hidden border-4 border-gray-800 shadow-2xl z-10"
                style={{ boxShadow: "0 30px 70px rgba(99,102,241,0.25)" }}>
                <img src={screenInvoices} alt="Invoices screen" className="w-full h-auto block" />
              </div>
              {/* Side phone (smaller, slightly behind) */}
              <div className="hidden sm:block w-36 rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl mb-4 self-end"
                style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)" }}>
                <img src={screenReports} alt="Reports screen" className="w-full h-auto block" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── App Info bar ── */}
      <section className="border-y border-gray-100 bg-gray-50 py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: sq(lang, "Versioni", "Version"),       value: "3.2.1" },
            { label: sq(lang, "Madhësia", "Size"),          value: "78 MB" },
            { label: sq(lang, "Përditësuar", "Updated"),    value: sq(lang, "Janar 2025", "Jan 2025") },
            { label: sq(lang, "Kategoria", "Category"),     value: sq(lang, "Biznes", "Business") },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              {sq(lang, "Çfarë mund të bëni me aplikacionin", "What you can do with the app")}
            </h2>
            <p className="text-gray-400 text-base">
              {sq(lang, "8 module kyçe — gjithçka e nevojshme në një aplikacion.", "8 key modules — everything you need in one app.")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-200 group">
                  <div className={`w-10 h-10 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Screenshots strip ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
            {sq(lang, "Shikim i Brendshëm", "A Glimpse Inside")}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-10">
            {sq(lang, "Ekrane reale nga aplikacioni Clientlly", "Real screens from the Clientlly app")}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { src: screenInvoices, label: sq(lang, "Faturat", "Invoices"),  caption: sq(lang, "Menaxhim i plotë i faturave me statusin e pagesës", "Complete invoice management with payment status") },
              { src: screenExpenses, label: sq(lang, "Shpenzimet", "Expenses"), caption: sq(lang, "Ndjekja e shpenzimeve mujore me krahasim", "Monthly expense tracking with comparison") },
              { src: screenReports,  label: sq(lang, "Raportet", "Reports"),   caption: sq(lang, "Raporte të ardhurash me grafikë interaktiv", "Revenue reports with interactive charts") },
              { src: screenDetail,   label: sq(lang, "Detajet", "Details"),    caption: sq(lang, "Detajet e faturës me opsione pagese", "Invoice details with payment options") },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* phone frame */}
                <div className="w-full max-w-[160px] rounded-[1.8rem] overflow-hidden border-[3px] border-gray-800 shadow-xl mx-auto"
                  style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.18)" }}>
                  <img src={s.src as string} alt={s.label as string} className="w-full h-auto block" />
                </div>
                <p className="mt-3 text-xs font-bold text-gray-900 text-center">{s.label}</p>
                <p className="mt-1 text-[11px] text-gray-400 text-center leading-snug px-1">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">4.9 / 5</h2>
            <p className="text-gray-400 text-sm">
              {sq(lang, "Vlerësuar nga 12,000+ përdorues", "Rated by 12,000+ users")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <Smartphone className="h-10 w-10 text-indigo-400 mx-auto mb-5" />
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            {sq(lang,
              <>Shkarkoni Clientlly<br /><span className="text-indigo-400">sot falas</span></>,
              <>Download Clientlly<br /><span className="text-indigo-400">free today</span></>
            )}
          </h2>
          <p className="text-gray-400 mb-8">
            {sq(lang,
              "iOS dhe Android. Pa pagesë fillestare. Sinkronizohet me llogarinë tuaj Clientlly.",
              "iOS and Android. No upfront cost. Syncs with your Clientlly account."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppStoreIcon />
            <GooglePlayIcon />
          </div>
          <p className="text-xs text-gray-600 mt-5">
            {sq(lang,
              "Ju nevojitet llogari Clientlly. Provë 14-ditore falas e disponueshme.",
              "Requires a Clientlly account. 14-day free trial available."
            )}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
