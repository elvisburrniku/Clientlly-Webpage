import { ArrowLeft, ArrowRight, TrendingUp, Clock, CheckCircle, BarChart3, FileText, Briefcase, Star } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function CaseStudies() {
  const { currentLanguage: lang } = useLanguage();

  const studies = [
    {
      logo: "TN", color: "bg-indigo-600",
      company: "Truly Nolen",
      industry: sq(lang, "Shërbime Profesionale & Kontrolli i Dëmtuesve", "Professional Services & Pest Control"),
      location: "Tiranë, Shqipëri",
      size: sq(lang, "45 punonjës", "45 employees"),
      metrics: [
        { v: "72%", l: sq(lang, "Kursim kohe administrative", "Administrative time saved"), icon: Clock },
        { v: "€95K", l: sq(lang, "Arkëtuar brenda 30 ditësh", "Collected within 30 days"), icon: TrendingUp },
        { v: "4×", l: sq(lang, "Shpejtësi fakturimi", "Invoicing speed"), icon: FileText },
      ],
      modules: [sq(lang,"Faturim","Invoicing"), sq(lang,"Klientë","Clients"), sq(lang,"Raporte","Reports"), sq(lang,"Shpenzime","Expenses")],
      challenge: sq(lang,
        "Truly Nolen menaxhonte qindra kontrata shërbimi dhe fatura mujore për klientë biznesi e rezidencial. Procesi manual në Excel shkaktonte gabime dhe vonesa — shumë klientë nuk merrnin faturën në kohë dhe ekipi humbisnin orë duke ndjekur pagesat.",
        "Truly Nolen managed hundreds of service contracts and monthly invoices for business and residential clients. The manual Excel process caused errors and delays — many clients didn't receive invoices on time and the team wasted hours chasing payments."
      ),
      solution: sq(lang,
        "Me Clientlly, Truly Nolen automatizoi faturimin e kontratave periodike. Klientët marrin fatura automatike me PDF profesional, njoftime 5 ditë para afatit dhe link pagese online. Menaxheri financiar monitoron statusin e çdo kontrate nga dashbordi.",
        "With Clientlly, Truly Nolen automated periodic contract invoicing. Clients receive automatic invoices with professional PDF, reminders 5 days before the due date and an online payment link. The financial manager monitors every contract's status from the dashboard."
      ),
      quote: sq(lang,
        "Clientlly na ndihmoi të kalojmë nga Excel kaotik në sistem profesional brenda ditësh. Pagesat kanë ardhur 3 herë më shpejt.",
        "Clientlly helped us go from chaotic Excel to a professional system within days. Payments have come in 3x faster."
      ),
      author: "Erjon Malaj", role: sq(lang, "Drejtor Operacionesh", "Operations Director"),
    },
    {
      logo: "SL", color: "bg-violet-600",
      company: "Scentlinqpro",
      industry: sq(lang, "Produkte & Tregti Online", "Products & E-commerce"),
      location: "Prishtinë, Kosovë",
      size: sq(lang, "18 punonjës", "18 employees"),
      metrics: [
        { v: "98%", l: sq(lang, "Fatura të paguara në kohë", "Invoices paid on time"), icon: CheckCircle },
        { v: "€180K", l: sq(lang, "Xhiro vjetore e menaxhuar", "Annual revenue managed"), icon: BarChart3 },
        { v: "55%", l: sq(lang, "Ulje e kohës së administrimit", "Reduction in admin time"), icon: TrendingUp },
      ],
      modules: [sq(lang,"Faturim","Invoicing"), sq(lang,"Shpenzime","Expenses"), sq(lang,"Inventar","Inventory"), sq(lang,"Klientë","Clients")],
      challenge: sq(lang,
        "Scentlinqpro, distributor i parfumeve premium, kishte vështirësi në gjurmimin e stokut, faturimin e shpërndarësve dhe menaxhimin e shpenzimeve të importit. Tre sisteme të ndryshme krijonte konfuzion dhe të dhëna jo të sinkronizuara.",
        "Scentlinqpro, a premium fragrance distributor, struggled with tracking stock, invoicing distributors and managing import expenses. Three separate systems created confusion and unsynchronised data."
      ),
      solution: sq(lang,
        "Clientlly bashkoi inventarin, faturimin dhe shpenzimet në një platformë. Tani Scentlinqpro gjurmon çdo shishe në stok, gjeneron fatura për shpërndarësit automatikisht dhe sheh marzhin real të çdo produkti. Eksporti i raporteve bëhet me një klik.",
        "Clientlly unified inventory, invoicing and expenses in one platform. Now Scentlinqpro tracks every bottle in stock, automatically generates invoices for distributors and sees the real margin of each product. Report export happens with one click."
      ),
      quote: sq(lang,
        "Tani e dimë saktësisht sa fitojmë nga çdo produkt. Clientlly na dha kontroll të plotë të biznesit.",
        "Now we know exactly how much we make from every product. Clientlly gave us complete business control."
      ),
      author: "Drita Krasniqi", role: sq(lang, "Pronare & CEO", "Owner & CEO"),
    },
    {
      logo: "ME", color: "bg-emerald-600",
      company: "Mediterra Import-Export",
      industry: sq(lang, "Tregti dhe Shpërndarje", "Trade & Distribution"),
      location: "Shkup, Maqedoni e Veriut",
      size: sq(lang, "45 punonjës", "45 employees"),
      metrics: [
        { v: "€2.1M", l: sq(lang, "Fatura të menaxhuara/vit", "Invoices managed/year"), icon: FileText },
        { v: "22%", l: sq(lang, "Ulje e borxheve të këqija", "Bad debt reduction"), icon: TrendingUp },
        { v: "8 min", l: sq(lang, "Kohë mesatare fakturimi", "Average invoicing time"), icon: Clock },
      ],
      modules: [sq(lang,"Faturim","Invoicing"), sq(lang,"Furnitorë","Vendors"), sq(lang,"Inventar","Inventory"), sq(lang,"Borxhe","Debt")],
      challenge: sq(lang,
        "Mediterra menaxhonte mbi 200 furnitorë dhe 150 klientë në sisteme të ndryshme. Borxhet e vonuara dhe inventari ishin të pa-sinkronizuara, duke shkaktuar humbje financiare. Menaxheri duhej të kontrollonte 3 sisteme çdo ditë.",
        "Mediterra managed over 200 suppliers and 150 clients across different systems. Overdue debts and inventory were unsynchronized, causing financial losses. The manager had to check 3 systems daily."
      ),
      solution: sq(lang,
        "Clientlly centralizoi menaxhimin e furnitorëve, klientëve dhe inventarit. Sistemi i borxheve tregon automatikisht kush ka detyrime dhe menaxheri financiar merr raport ditor automatik. Procesi i blerjes dhe shitjes tani është i lidhur plotësisht.",
        "Clientlly centralized supplier, client and inventory management. The debt system automatically shows who has obligations and the financial manager receives an automatic daily report. The buying and selling process is now fully connected."
      ),
      quote: sq(lang,
        "Kemi kursyer mbi €15,000 në vit vetëm duke eleminuar faturat e dyfishta dhe borxhet e pa-gjurmuara.",
        "We saved over €15,000 per year just by eliminating duplicate invoices and untracked debts."
      ),
      author: "Besnik Aliu", role: sq(lang, "Drejtor i Operacioneve", "Director of Operations"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />{sq(lang, "Kthehu", "Back")}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
            <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang, "Studimet e Rasteve", "Case Studies")}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {sq(lang,
              <>Si bizneset reale<br /><span className="text-indigo-600">rriten me Clientlly</span></>,
              <>How real businesses<br /><span className="text-indigo-600">grow with Clientlly</span></>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10">
            {sq(lang,
              "Histori të vërteta nga biznese të ndryshme që kanë transformuar operacionet e tyre duke përdorur Clientlly.",
              "Real stories from businesses that have transformed their operations using Clientlly."
            )}
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100 max-w-sm">
            {[
              { v:"200+", l: sq(lang,"Biznese aktive","Active businesses") },
              { v:"98%",  l: sq(lang,"Kënaqësi klientësh","Customer satisfaction") },
              { v:"€12M+",l: sq(lang,"Fatura të përpunuara","Invoices processed") },
            ].map((s,i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-gray-900">{s.v}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {studies.map((s, idx) => (
            <article key={idx}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center text-white font-extrabold text-base flex-shrink-0`}>
                    {s.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{s.company}</h2>
                    <p className="text-sm text-gray-400">{s.industry} · {s.location} · {s.size}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.modules.map((m,i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{m}</span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {s.metrics.map((m,i) => {
                  const Icon = m.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-500 mb-3" />
                      <p className="text-2xl font-extrabold text-gray-900">{m.v}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{m.l}</p>
                    </div>
                  );
                })}
              </div>

              {/* Challenge / Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Sfida","Challenge")}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Zgjidhja","Solution")}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.solution}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-1">
                <p className="text-base font-medium text-gray-800 italic leading-relaxed mb-3">"{s.quote}"</p>
                <footer className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {s.logo}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{s.author}</p>
                    <p className="text-xs text-gray-400">{s.role}, {s.company}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {sq(lang,<>Historia juaj mund të jetë <span className="text-indigo-400">tjetra</span></>,<>Your story could be <span className="text-indigo-400">the next one</span></>)}
          </h2>
          <p className="text-gray-400 mb-8">
            {sq(lang,"Bashkohuni me 200+ biznese që po rriten me Clientlly. 14-ditë provë falas.","Join 200+ businesses growing with Clientlly. 14-day free trial.")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/trial"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all">
              {sq(lang,"Fillo Provën Falas","Start Free Trial")}<ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
              {sq(lang,"Kontakto Sales","Contact Sales")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
