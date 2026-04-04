import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { ChevronDown, HelpCircle, CreditCard, Shield, Users, Zap, Globe, ArrowRight, Headphones } from "lucide-react";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";

function sq(lang: string, alb: string, eng: string) { return lang === "sq" ? alb : eng; }

interface FAQItem { q: string; a: string; }

const Accordion = ({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) => (
  <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors">
    <button onClick={toggle} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50/50 transition-colors">
      <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
      <ChevronDown className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && (
      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-50">
        {item.a}
      </div>
    )}
  </div>
);

export default function FAQ() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: sq(lang, "Të gjitha", "All"), icon: HelpCircle },
    { id: "general", label: sq(lang, "Të përgjithshme", "General"), icon: Globe },
    { id: "pricing", label: sq(lang, "Çmimet & Planet", "Pricing & Plans"), icon: CreditCard },
    { id: "features", label: sq(lang, "Veçoritë", "Features"), icon: Zap },
    { id: "security", label: sq(lang, "Siguria", "Security"), icon: Shield },
    { id: "support", label: sq(lang, "Mbështetja", "Support"), icon: Headphones },
    { id: "account", label: sq(lang, "Llogaria", "Account"), icon: Users },
  ];

  const faqs: { category: string; items: FAQItem[] }[] = [
    {
      category: "general",
      items: [
        {
          q: sq(lang, "Çfarë është Clientlly?", "What is Clientlly?"),
          a: sq(lang,
            "Clientlly është platformë e plotë për menaxhimin e biznesit me 16 module të integruara — faturim, shpenzime, inventar, burimet njerëzore, flotë makinash dhe shumë më tepër. E gjitha në një platformë të vetme, pa nevojë për aplikacione të ndryshme.",
            "Clientlly is a complete business management platform with 16 integrated modules — invoicing, expenses, inventory, HR, fleet management and much more. Everything in a single platform, no need for separate applications."
          ),
        },
        {
          q: sq(lang, "Për kë është Clientlly?", "Who is Clientlly for?"),
          a: sq(lang,
            "Clientlly është dizajnuar për biznese të vogla dhe të mesme që duan të menaxhojnë gjithçka në një vend. Pavarësisht nëse keni 1 ose 50 punonjës, platforma përshtatet me nevojat tuaja.",
            "Clientlly is designed for small and medium businesses that want to manage everything in one place. Whether you have 1 or 50 employees, the platform adapts to your needs."
          ),
        },
        {
          q: sq(lang, "A duhet të instaloj diçka?", "Do I need to install anything?"),
          a: sq(lang,
            "Jo! Clientlly funksionon 100% në cloud. Mjafton një shfletues interneti — qasuni nga kompjuteri, tableti, ose telefoni juaj. Nuk ka instalim, nuk ka përditësime manuale.",
            "No! Clientlly works 100% in the cloud. You just need a web browser — access from your computer, tablet, or phone. No installation, no manual updates."
          ),
        },
        {
          q: sq(lang, "Në cilat gjuhë ofrohet Clientlly?", "What languages is Clientlly available in?"),
          a: sq(lang,
            "Clientlly ofrohet në Shqip, Anglisht, Maqedonisht, Spanjisht dhe Gjermanisht. Ndërfaqja, faturat, dhe raportet mund të gjenerohen në secilën gjuhë.",
            "Clientlly is available in Albanian, English, Macedonian, Spanish and German. The interface, invoices, and reports can be generated in each language."
          ),
        },
      ],
    },
    {
      category: "pricing",
      items: [
        {
          q: sq(lang, "Cilat janë planet e çmimeve?", "What are the pricing plans?"),
          a: sq(lang,
            "Ofrojmë 3 plane:\n\n• Starter — €25/muaj (3 përdorues, 200 fatura)\n• Professional — €35/muaj (10 përdorues, 500 fatura)\n• Enterprise — €50/muaj (50 përdorues, fatura pa limit)\n\nTë gjitha planet përfshijnë të 16 modulet e njëjta. Me pagesë vjetore kurseni 15%.",
            "We offer 3 plans:\n\n• Starter — €25/mo (3 users, 200 invoices)\n• Professional — €35/mo (10 users, 500 invoices)\n• Enterprise — €50/mo (50 users, unlimited invoices)\n\nAll plans include the same 16 modules. Save 15% with annual billing."
          ),
        },
        {
          q: sq(lang, "Cili është dallimi mes planeve?", "What's the difference between plans?"),
          a: sq(lang,
            "Të 16 modulet janë të njëjta në çdo plan. Dallimet kryesore janë:\n\n• Numri i përdoruesve dhe faturave\n• Programi \"Le të rritemi bashkë\":\n  - Starter: mbështetje standarde\n  - Professional: zhvillim i personalizuar FALAS sipas nevojave tuaja\n  - Enterprise: zhvillim PRIORITAR me ekip të dedikuar",
            "All 16 modules are the same in every plan. Key differences are:\n\n• Number of users and invoices\n• The \"Let's Grow Together\" program:\n  - Starter: standard support\n  - Professional: FREE custom development based on your needs\n  - Enterprise: PRIORITY development with a dedicated team"
          ),
        },
        {
          q: sq(lang, "Çfarë është programi 'Le të rritemi bashkë'?", "What is the 'Let's Grow Together' program?"),
          a: sq(lang,
            "Ky program është avantazhi ynë unik! Biznesi juaj ka nevoja specifike — ne i zhvillojmë FALAS si pjesë e planit tuaj.\n\nSi funksionon:\n1. Na tregoni çfarë funksioni ju nevojitet\n2. Ekipi ynë e analizon dhe planifikon\n3. Ne e ndërtojmë dhe integrojmë në platformë\n4. Ju përfitoni pa kosto shtesë!\n\nMe planin Professional merrni zhvillim falas, ndërsa me Enterprise merrni zhvillim prioritar me ekip të dedikuar.",
            "This program is our unique advantage! Your business has specific needs — we develop them FREE as part of your plan.\n\nHow it works:\n1. Tell us what feature you need\n2. Our team analyzes and plans it\n3. We build and integrate it into the platform\n4. You benefit at no extra cost!\n\nWith Professional you get free development, while Enterprise gets priority development with a dedicated team."
          ),
        },
        {
          q: sq(lang, "Sa kursej me pagesë vjetore?", "How much do I save with annual billing?"),
          a: sq(lang,
            "Me pagesë vjetore kurseni 15%:\n\n• Starter: €300/vit pa zbritje → €255/vit (kurseni €45)\n• Professional: €420/vit pa zbritje → €357/vit (kurseni €63)\n• Enterprise: €600/vit pa zbritje → €510/vit (kurseni €90)",
            "With annual billing you save 15%:\n\n• Starter: €300/yr regular → €255/yr (save €45)\n• Professional: €420/yr regular → €357/yr (save €63)\n• Enterprise: €600/yr regular → €510/yr (save €90)"
          ),
        },
        {
          q: sq(lang, "A ka provë falas?", "Is there a free trial?"),
          a: sq(lang,
            "Po! Ofrojmë provë falas 14-ditore me qasje të plotë në të 16 modulet. Nuk kërkohet kartë kredie. Pas provës, zgjidhni planin që ju përshtatet — ose thjesht mos vazhdoni, pa asnjë detyrim.",
            "Yes! We offer a 14-day free trial with full access to all 16 modules. No credit card required. After the trial, choose the plan that fits you — or simply don't continue, no obligation."
          ),
        },
      ],
    },
    {
      category: "features",
      items: [
        {
          q: sq(lang, "Cilat module përfshin Clientlly?", "What modules does Clientlly include?"),
          a: sq(lang,
            "Clientlly ka 16 module të integruara:\n\n💰 Financë: Faturim Profesional, Shpenzime, Menaxhim Borxhi, Raporte & Analiza, Oferta, Pagat\n📋 Operacione: Menaxhim Klientësh (CRM), Furnitorë, Inventar\n🚗 Flotë Makinash: Menaxhim Automjetesh, Mirëmbajtje Flote\n👥 Burimet Njerëzore: Punonjësit, Prezenca, Trajnim & Kuize, Menaxhim Dokumentesh, Kalendar",
            "Clientlly has 16 integrated modules:\n\n💰 Finance: Invoicing, Expenses, Debt Management, Reports & Analytics, Quotes, Payroll\n📋 Operations: CRM, Vendors, Inventory\n🚗 Fleet: Vehicle Management, Fleet Maintenance\n👥 HR: Employees, Attendance, Training & Quizzes, Document Management, Calendar"
          ),
        },
        {
          q: sq(lang, "A mund të krijoj fatura në shumë gjuhë?", "Can I create invoices in multiple languages?"),
          a: sq(lang,
            "Po! Faturat mund të krijohen në Shqip, Anglisht, Maqedonisht, Spanjisht ose Gjermanisht. Mund të vendosni gjuhë të ndryshme për klientë të ndryshëm — ideale për biznese që punojnë me klientë ndërkombëtarë.",
            "Yes! Invoices can be created in Albanian, English, Macedonian, Spanish or German. You can set different languages for different clients — ideal for businesses working with international clients."
          ),
        },
        {
          q: sq(lang, "A ka aplikacion mobil?", "Is there a mobile app?"),
          a: sq(lang,
            "Clientlly funksionon plotësisht në shfletuesin e telefonit tuaj me dizajn responsive. Gjithashtu ofrojmë aplikacion mobil për iOS dhe Android me të gjitha funksionet kryesore.",
            "Clientlly works fully in your phone's browser with a responsive design. We also offer a mobile app for iOS and Android with all key features."
          ),
        },
        {
          q: sq(lang, "Si funksionon menaxhimi i flotës së makinave?", "How does fleet management work?"),
          a: sq(lang,
            "Moduli i flotës ju lejon të menaxhoni të gjitha automjetet e biznesit: regjistrimi, sigurimi, mirëmbajtja, karburanti, dhe shpenzimet. Merrni njoftime automatike për skadimet dhe planifikoni serviset.",
            "The fleet module lets you manage all business vehicles: registration, insurance, maintenance, fuel, and expenses. Get automatic notifications for expirations and schedule services."
          ),
        },
      ],
    },
    {
      category: "security",
      items: [
        {
          q: sq(lang, "A janë të sigurta të dhënat e mia?", "Is my data secure?"),
          a: sq(lang,
            "Absolutisht! Përdorim enkriptim SSL 256-bit për të gjitha komunikimet. Të dhënat tuaja ruhen në servera të sigurt me backup të rregullt. Jemi plotësisht në përputhje me GDPR.",
            "Absolutely! We use 256-bit SSL encryption for all communications. Your data is stored on secure servers with regular backups. We are fully GDPR compliant."
          ),
        },
        {
          q: sq(lang, "A bëni backup të të dhënave?", "Do you backup data?"),
          a: sq(lang,
            "Po! Backup automatik bëhet çdo ditë. Në rast emergjence, mund të rikthejmë të dhënat tuaja brenda 24 orëve. Asnjë e dhënë nuk humbet.",
            "Yes! Automatic backups are made daily. In case of emergency, we can restore your data within 24 hours. No data is ever lost."
          ),
        },
        {
          q: sq(lang, "A mund t'i eksportoj të dhënat e mia?", "Can I export my data?"),
          a: sq(lang,
            "Po! Mund të eksportoni të gjitha të dhënat tuaja në format Excel ose PDF në çdo moment. Faturat, raportet, listat e klientëve — gjithçka mund të shkarkohet.",
            "Yes! You can export all your data in Excel or PDF format at any time. Invoices, reports, client lists — everything can be downloaded."
          ),
        },
      ],
    },
    {
      category: "support",
      items: [
        {
          q: sq(lang, "Si mund të kontaktoj mbështetjen?", "How can I contact support?"),
          a: sq(lang,
            "Na kontaktoni përmes:\n\n📧 Email: info@clientlly.com\n💬 Chat-i live në platformë (24/7)\n\nEkipi ynë i mbështetjes përgjigjet brenda 2 orëve gjatë ditëve të punës.",
            "Contact us through:\n\n📧 Email: info@clientlly.com\n💬 Live chat on the platform (24/7)\n\nOur support team responds within 2 hours during business days."
          ),
        },
        {
          q: sq(lang, "A ofroni trajnim për përdorimin e platformës?", "Do you offer platform training?"),
          a: sq(lang,
            "Po! Ofrojmë:\n\n• Video-udhëzues hap pas hapi për çdo modul\n• Dokumentacion të plotë në shqip\n• Sesione trajnimi live me ekipin tonë (për planet Professional dhe Enterprise)\n• Chat bot i integruar për ndihmë të menjëhershme",
            "Yes! We offer:\n\n• Step-by-step video tutorials for each module\n• Complete documentation in Albanian\n• Live training sessions with our team (for Professional and Enterprise plans)\n• Integrated chatbot for immediate help"
          ),
        },
        {
          q: sq(lang, "A është migrimi i të dhënave falas?", "Is data migration free?"),
          a: sq(lang,
            "Po! Migrimi nga platforma juaj aktuale te Clientlly është plotësisht FALAS. Ekipi ynë ju ndihmon të transferoni të gjitha të dhënat — klientë, fatura, produkte — pa humbur asgjë.",
            "Yes! Migration from your current platform to Clientlly is completely FREE. Our team helps you transfer all data — clients, invoices, products — without losing anything."
          ),
        },
      ],
    },
    {
      category: "account",
      items: [
        {
          q: sq(lang, "A mund ta anuloj abonimin në çdo kohë?", "Can I cancel my subscription anytime?"),
          a: sq(lang,
            "Po! Mund ta anuloni abonimin në çdo moment pa penalitete dhe pa pyetje. Të dhënat tuaja ruhen për 30 ditë pas anulimit në rast se ndërroni mendje.",
            "Yes! You can cancel your subscription at any time without penalties and no questions asked. Your data is kept for 30 days after cancellation in case you change your mind."
          ),
        },
        {
          q: sq(lang, "A mund të ndryshoj planin gjatë abonimit?", "Can I change plans during my subscription?"),
          a: sq(lang,
            "Po! Mund të rrisni ose ulni planin në çdo moment. Ndryshimi aplikohet menjëherë dhe pagesa rregullohet automatikisht. Nuk humbni asnjë të dhënë gjatë ndryshimit.",
            "Yes! You can upgrade or downgrade your plan at any time. The change applies immediately and billing adjusts automatically. You don't lose any data during the switch."
          ),
        },
        {
          q: sq(lang, "Sa përdorues mund të shtoj?", "How many users can I add?"),
          a: sq(lang,
            "Varet nga plani juaj:\n\n• Starter: deri në 3 përdorues\n• Professional: deri në 10 përdorues\n• Enterprise: deri në 50 përdorues (€1 për përdorues shtesë)\n\nÇdo përdorues ka qasje në të gjitha modulet. Mund të vendosni role dhe leje specifike për secilin.",
            "Depends on your plan:\n\n• Starter: up to 3 users\n• Professional: up to 10 users\n• Enterprise: up to 50 users (€1 per additional user)\n\nEvery user has access to all modules. You can set specific roles and permissions for each."
          ),
        },
      ],
    },
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqs.flatMap(g => g.items)
    : faqs.find(g => g.category === activeCategory)?.items ?? [];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => go("/")} className="flex items-center gap-2">
            <img src={clientllyLogo} alt="Clientlly" className="h-7 w-auto" />
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">Clientlly</span>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => go("/")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home")}</button>
            <button onClick={() => go("/features")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</button>
            <button onClick={() => go("/contact")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact")}</button>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => go("/subscribe")} className="px-4 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">{sq(lang, "Blej Tani", "Buy Now")}</button>
            <button onClick={() => go("/trial")} className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">{sq(lang, "Fillo Provën", "Start Trial")}</button>
          </div>
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden p-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <button onClick={() => go("/")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Ballina", "Home")}</button>
            <button onClick={() => go("/features")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Veçoritë", "Features")}</button>
            <button onClick={() => go("/contact")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Kontakt", "Contact")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => go("/subscribe")} className="w-full py-2.5 text-sm font-semibold border border-indigo-600 text-indigo-600 rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <button onClick={() => go("/trial")} className="w-full py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-lg">{sq(lang, "Fillo Provën", "Start Trial")}</button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full mb-6">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-600">{sq(lang, "Qendër Ndihme", "Help Center")}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions")}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            {sq(lang,
              "Gjeni përgjigjet për pyetjet më të zakonshme rreth Clientlly. Nuk gjeni çfarë kërkoni? Na kontaktoni drejtpërdrejt.",
              "Find answers to the most common questions about Clientlly. Can't find what you're looking for? Contact us directly."
            )}
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenIndex(0); }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-2.5">
            {filteredFaqs.map((item, i) => (
              <Accordion
                key={i}
                item={item}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            {sq(lang, "Nuk gjeni përgjigjen?", "Can't find your answer?")}
          </h2>
          <p className="text-gray-500 mb-6">
            {sq(lang,
              "Ekipi ynë është gjithmonë i gatshëm t'ju ndihmojë. Na shkruani ose filloni provën falas tani.",
              "Our team is always ready to help. Write to us or start your free trial now."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => go("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
              {sq(lang, "Na Kontaktoni", "Contact Us")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => go("/trial")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}