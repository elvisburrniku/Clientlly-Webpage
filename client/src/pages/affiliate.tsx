import { useState } from "react";
import { Link } from "wouter";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/logo-clientlly_1775347060628.png";
import { useLanguage } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight, Menu, X, Gift, TrendingUp, Users, DollarSign,
  Share2, BarChart3, CheckCircle, Zap, Globe, Heart,
  Rocket, Shield, Clock, Mail, Copy, Star,
} from "lucide-react";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch (lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

const BENEFITS = [
  {
    icon: DollarSign, color: "bg-emerald-100 text-emerald-600",
    sq: "10% Komision Përjetshëm", en: "10% Lifetime Commission",
    es: "10% Comisión de por Vida", de: "10% Lebenslange Provision", mk: "10% Доживотна Провизија",
    dsq: "Fitoni 10% komision për çdo pagesë që bën klienti juaj, përgjithmonë. Sa më shumë klientë, aq më shumë fitoni.",
    den: "Earn 10% commission on every payment your referral makes, forever. The more clients, the more you earn.",
    des: "Gane 10% de comisión por cada pago que haga su referido, para siempre. Más clientes, más ganancias.",
    dde: "Verdienen Sie 10% Provision für jede Zahlung Ihres Empfehlungen, für immer. Mehr Kunden, mehr Verdienst.",
    dmk: "Заработете 10% провизија за секое плаќање на вашата препорака, засекогаш. Повеќе клиенти, повеќе заработувате.",
  },
  {
    icon: Clock, color: "bg-blue-100 text-blue-600",
    sq: "Pagesa Mujore Automatike", en: "Automatic Monthly Payouts",
    es: "Pagos Mensuales Automáticos", de: "Automatische Monatliche Auszahlungen", mk: "Автоматски Месечни Исплати",
    dsq: "Pagesa juaj transferohet automatikisht çdo muaj, pa nevojë për kërkesë. Minimum €50 për tërheqje.",
    den: "Your earnings are automatically transferred every month, no request needed. Minimum €50 for withdrawal.",
    des: "Sus ganancias se transfieren automáticamente cada mes, sin necesidad de solicitud. Mínimo €50 para retiro.",
    dde: "Ihre Einnahmen werden automatisch jeden Monat überwiesen, keine Anfrage nötig. Mindestens €50 für Auszahlung.",
    dmk: "Вашите заработки автоматски се префрлаат секој месец, без потреба од барање. Минимум €50 за повлекување.",
  },
  {
    icon: BarChart3, color: "bg-purple-100 text-purple-600",
    sq: "Panel Kontrolli i Detajuar", en: "Detailed Dashboard",
    es: "Panel de Control Detallado", de: "Detailliertes Dashboard", mk: "Детален Контролен Панел",
    dsq: "Gjurmoni klikime, regjistrimet, fitimet dhe performancën tuaj në kohë reale me panelin e afilimit.",
    den: "Track clicks, sign-ups, earnings and your performance in real-time with the affiliate dashboard.",
    des: "Rastree clics, registros, ganancias y su rendimiento en tiempo real con el panel de afiliados.",
    dde: "Verfolgen Sie Klicks, Anmeldungen, Einnahmen und Ihre Leistung in Echtzeit mit dem Affiliate-Dashboard.",
    dmk: "Следете кликови, регистрации, заработки и ваша перформанса во реално време со панелот за афилијати.",
  },
  {
    icon: Share2, color: "bg-orange-100 text-orange-600",
    sq: "Materiale Marketing Falas", en: "Free Marketing Materials",
    es: "Materiales de Marketing Gratis", de: "Kostenlose Marketing-Materialien", mk: "Бесплатни Маркетинг Материјали",
    dsq: "Bannerë, tekste email-i, postime për media sociale dhe landing page gati për përdorim.",
    den: "Banners, email templates, social media posts and landing pages ready to use.",
    des: "Banners, plantillas de correo, publicaciones para redes sociales y páginas de destino listas para usar.",
    dde: "Banner, E-Mail-Vorlagen, Social-Media-Posts und Landing Pages sofort einsatzbereit.",
    dmk: "Банери, е-пошта шаблони, објави за социјални медиуми и целни страници подготвени за употреба.",
  },
  {
    icon: Globe, color: "bg-cyan-100 text-cyan-600",
    sq: "Pa Limit Referimesh", en: "Unlimited Referrals",
    es: "Referidos Ilimitados", de: "Unbegrenzte Empfehlungen", mk: "Неограничени Препораки",
    dsq: "Nuk ka kufij — referoni sa më shumë biznese dhe fitoni pa limit. Çdo referim ka vlerë.",
    den: "No limits — refer as many businesses as you want and earn without limits. Every referral counts.",
    des: "Sin límites — refiera tantos negocios como quiera y gane sin límites. Cada referido cuenta.",
    dde: "Keine Grenzen — empfehlen Sie so viele Unternehmen wie Sie möchten und verdienen Sie unbegrenzt. Jede Empfehlung zählt.",
    dmk: "Без ограничувања — препорачајте колку сакате бизниси и заработувајте без лимит. Секоја препорака вреди.",
  },
  {
    icon: Shield, color: "bg-rose-100 text-rose-600",
    sq: "Cookie 90 Ditë", en: "90-Day Cookie",
    es: "Cookie de 90 Días", de: "90-Tage-Cookie", mk: "90-Дневен Колаче",
    dsq: "Nëse dikush klikon linkun tuaj, keni 90 ditë kohë që ai të regjistrohet dhe ju merrni komisionin.",
    den: "If someone clicks your link, you have 90 days for them to sign up and you still get the commission.",
    des: "Si alguien hace clic en su enlace, tiene 90 días para que se registre y usted aún obtiene la comisión.",
    dde: "Wenn jemand auf Ihren Link klickt, haben Sie 90 Tage Zeit, bis sie sich anmelden und Sie erhalten die Provision.",
    dmk: "Ако некој кликне на вашиот линк, имате 90 дена за тој да се регистрира и вие сепак ја добивате провизијата.",
  },
];

const STEPS = [
  {
    num: "01", icon: Users, color: "from-indigo-500 to-blue-500",
    sq: "Regjistrohuni", en: "Sign Up",
    es: "Regístrese", de: "Registrieren", mk: "Регистрирајте се",
    dsq: "Plotësoni formularin e thjeshtë dhe merrni linkun tuaj unik të afilimit brenda minutash.",
    den: "Fill out the simple form and get your unique affiliate link within minutes.",
    des: "Complete el formulario simple y obtenga su enlace de afiliado único en minutos.",
    dde: "Füllen Sie das einfache Formular aus und erhalten Sie Ihren einzigartigen Affiliate-Link in Minuten.",
    dmk: "Пополнете го едноставниот формулар и добијте го вашиот уникатен афилијатски линк за минути.",
  },
  {
    num: "02", icon: Share2, color: "from-purple-500 to-pink-500",
    sq: "Ndani Linkun", en: "Share Your Link",
    es: "Comparta su Enlace", de: "Teilen Sie Ihren Link", mk: "Споделете го Линкот",
    dsq: "Ndani linkun tuaj me kolegë, klientë, ose në rrjetet sociale. Kemi materiale gati për ju.",
    den: "Share your link with colleagues, clients, or on social media. We have ready-made materials for you.",
    des: "Comparta su enlace con colegas, clientes o en redes sociales. Tenemos materiales listos para usted.",
    dde: "Teilen Sie Ihren Link mit Kollegen, Kunden oder in sozialen Medien. Wir haben fertige Materialien für Sie.",
    dmk: "Споделете го вашиот линк со колеги, клиенти или на социјални медиуми. Имаме готови материјали за вас.",
  },
  {
    num: "03", icon: DollarSign, color: "from-emerald-500 to-green-500",
    sq: "Fitoni 10%", en: "Earn 10%",
    es: "Gane 10%", de: "Verdienen Sie 10%", mk: "Заработете 10%",
    dsq: "Çdo herë që klienti juaj paguan, ju fitoni 10% komision. Përgjithmonë, pa limit.",
    den: "Every time your referral pays, you earn 10% commission. Forever, no limits.",
    des: "Cada vez que su referido paga, usted gana 10% de comisión. Para siempre, sin límites.",
    dde: "Jedes Mal, wenn Ihr Empfohlener zahlt, verdienen Sie 10% Provision. Für immer, ohne Grenzen.",
    dmk: "Секогаш кога вашата препорака плаќа, вие заработувате 10% провизија. Засекогаш, без ограничувања.",
  },
];

const EARNINGS = [
  { refs: 5, monthly: "€12.50 – €25", yearly: "€150 – €300" },
  { refs: 20, monthly: "€50 – €100", yearly: "€600 – €1,200" },
  { refs: 50, monthly: "€125 – €250", yearly: "€1,500 – €3,000" },
  { refs: 100, monthly: "€250 – €500", yearly: "€3,000 – €6,000" },
];

export default function Affiliate() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentLanguage: lang } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleApply = () => {
    navigator.clipboard.writeText('info@clientlly.com').then(() => {
      setCopied(true);
      toast({
        title: sq(lang, "Email u kopjua!", "Email copied!", "Email copiado!", "E-Mail kopiert!", "Е-пошта копирана!") as string,
        description: sq(lang,
          "Dërgoni email në info@clientlly.com me subjektin: Aplikim për Programin e Afilimit",
          "Send email to info@clientlly.com with subject: Affiliate Program Application",
          "Envíe un email a info@clientlly.com con asunto: Solicitud de Programa de Afiliados",
          "Senden Sie eine E-Mail an info@clientlly.com mit Betreff: Partnerprogramm Bewerbung",
          "Испратете е-пошта на info@clientlly.com со наслов: Апликација за Партнерска Програма"
        ) as string,
      });
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
            <span className="font-bold text-lg text-gray-900">Clientlly</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="/#features" className="hover:text-indigo-600 transition-colors">{sq(lang, "Modulet", "Modules", "Módulos", "Module", "Модули")}</a>
            <a href="/subscribe" className="hover:text-indigo-600 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</a>
            <a href="/about" className="hover:text-indigo-600 transition-colors">{sq(lang, "Rreth nesh", "About", "Nosotros", "Über uns", "За нас")}</a>
            <a href="/contact" className="hover:text-indigo-600 transition-colors">{sq(lang, "Kontakti", "Contact", "Contacto", "Kontakt", "Контакт")}</a>
            <LanguageSelector />
          </div>
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <LanguageSelector />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-600">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <a href="/#features" className="block text-gray-700 font-medium">{sq(lang, "Modulet", "Modules", "Módulos", "Module", "Модули")}</a>
            <a href="/subscribe" className="block text-gray-700 font-medium">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}</a>
            <a href="/about" className="block text-gray-700 font-medium">{sq(lang, "Rreth nesh", "About", "Nosotros", "Über uns", "За нас")}</a>
            <a href="/contact" className="block text-gray-700 font-medium">{sq(lang, "Kontakti", "Contact", "Contacto", "Kontakt", "Контакт")}</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full animate-bounce opacity-20"
              style={{ width: 6 + i * 3, height: 6 + i * 3, top: `${10 + i * 10}%`, left: `${5 + i * 12}%`, animationDelay: `${i * 0.4}s`, animationDuration: `${2 + i * 0.5}s` }} />
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 mb-6">
            <Gift className="h-4 w-4" />
            {sq(lang, "Programi i Afilimit", "Affiliate Program", "Programa de Afiliados", "Partnerprogramm", "Партнерска Програма")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {sq(lang,
              <>Fitoni <span className="text-indigo-700">10%</span> komision<br />për çdo klient që referoni</>,
              <>Earn <span className="text-indigo-700">10%</span> commission<br />for every client you refer</>,
              <>Gane <span className="text-indigo-700">10%</span> comisión<br />por cada cliente que refiera</>,
              <>Verdienen Sie <span className="text-indigo-700">10%</span> Provision<br />für jeden empfohlenen Kunden</>,
              <>Заработете <span className="text-indigo-700">10%</span> провизија<br />за секој препорачан клиент</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8 leading-relaxed">
            {sq(lang,
              "Bashkohuni me programin tonë të afilimit dhe filloni të fitoni para duke rekomanduar Clientlly tek bizneset që njihni. Komisioni 10% paguhet përgjithmonë, sa kohë që klienti mbetet aktiv.",
              "Join our affiliate program and start earning money by recommending Clientlly to businesses you know. The 10% commission is paid forever, as long as the client stays active.",
              "Únase a nuestro programa de afiliados y comience a ganar dinero recomendando Clientlly a negocios que conoce. La comisión del 10% se paga para siempre, mientras el cliente permanezca activo.",
              "Treten Sie unserem Partnerprogramm bei und verdienen Sie Geld, indem Sie Clientlly Unternehmen empfehlen. Die 10% Provision wird für immer gezahlt, solange der Kunde aktiv bleibt.",
              "Приклучете се на нашата партнерска програма и започнете да заработувате пари препорачувајќи го Clientlly на бизниси. Провизијата од 10% се плаќа засекогаш, додека клиентот е активен."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handleApply}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
              {copied ? <CheckCircle className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              {copied ? sq(lang, "Email u kopjua!", "Email copied!", "Email copiado!", "E-Mail kopiert!", "Копирано!") : sq(lang, "Apliko Tani", "Apply Now", "Aplicar Ahora", "Jetzt Bewerben", "Аплицирај Сега")}
              {!copied && <ArrowRight className="h-5 w-5" />}
            </button>
            <button onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 text-gray-900 font-bold rounded-xl hover:bg-white transition-all">
              {sq(lang, "Si funksionon?", "How it works?", "Como funciona?", "Wie funktioniert es?", "Како функционира?")}
            </button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-800">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-700" /> {sq(lang, "Regjistrim falas", "Free to join", "Registro gratis", "Kostenlose Anmeldung", "Бесплатна регистрација")}</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-700" /> {sq(lang, "Pa limit referimesh", "Unlimited referrals", "Referidos ilimitados", "Unbegrenzte Empfehlungen", "Неограничени препораки")}</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-700" /> {sq(lang, "Komision përjetshëm", "Lifetime commission", "Comisión de por vida", "Lebenslange Provision", "Доживотна провизија")}</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">{sq(lang, "Si funksionon", "How it works", "Cómo funciona", "So funktioniert es", "Како функционира")}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "3 hapa të thjeshtë për të filluar", "3 simple steps to get started", "3 pasos simples para comenzar", "3 einfache Schritte zum Starten", "3 едноставни чекори за почеток")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5`}>
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-xs font-bold text-gray-400 mb-2">{sq(lang, `Hapi ${s.num}`, `Step ${s.num}`, `Paso ${s.num}`, `Schritt ${s.num}`, `Чекор ${s.num}`)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sq(lang, s.sq, s.en, s.es, s.de, s.mk)}</h3>
                <p className="text-gray-500 leading-relaxed">{sq(lang, s.dsq, s.den, s.des, s.dde, s.dmk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">{sq(lang, "Përfitime", "Benefits", "Beneficios", "Vorteile", "Придобивки")}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Pse të bashkoheni me programin tonë?", "Why join our program?", "Por qué unirse a nuestro programa?", "Warum unserem Programm beitreten?", "Зошто да се приклучите на нашата програма?")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mb-4`}>
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sq(lang, b.sq, b.en, b.es, b.de, b.mk)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sq(lang, b.dsq, b.den, b.des, b.dde, b.dmk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARNINGS CALCULATOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">{sq(lang, "Kalkulatori i Fitimeve", "Earnings Calculator", "Calculadora de Ganancias", "Verdienstrechner", "Калкулатор на Заработка")}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Sa mund të fitoni?", "How much can you earn?", "Cuanto puede ganar?", "Wie viel können Sie verdienen?", "Колку можете да заработите?")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {sq(lang,
                "Planet e Clientlly fillojnë nga €25/muaj. Ju fitoni 10% për çdo pagesë të klientëve tuaj.",
                "Clientlly plans start from €25/month. You earn 10% on every payment from your referrals.",
                "Los planes de Clientlly comienzan desde €25/mes. Usted gana 10% de cada pago de sus referidos.",
                "Clientlly-Pläne starten ab €25/Monat. Sie verdienen 10% bei jeder Zahlung Ihrer Empfehlungen.",
                "Плановите на Clientlly започнуваат од €25/месец. Вие заработувате 10% на секое плаќање од вашите препораки."
              )}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-indigo-600 text-white text-sm font-bold p-4">
              <span>{sq(lang, "Referime", "Referrals", "Referidos", "Empfehlungen", "Препораки")}</span>
              <span className="text-center">{sq(lang, "Fitim mujor", "Monthly earnings", "Ganancias mensuales", "Monatliche Einnahmen", "Месечна заработка")}</span>
              <span className="text-right">{sq(lang, "Fitim vjetor", "Yearly earnings", "Ganancias anuales", "Jährliche Einnahmen", "Годишна заработка")}</span>
            </div>
            {EARNINGS.map((e, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${i === EARNINGS.length - 1 ? 'font-bold text-indigo-700' : 'text-gray-700'}`}>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  {e.refs} {sq(lang, "klientë", "clients", "clientes", "Kunden", "клиенти")}
                </span>
                <span className="text-center font-semibold">{e.monthly}</span>
                <span className="text-right font-semibold">{e.yearly}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            {sq(lang,
              "* Bazuar në planet Starter (€25) deri Enterprise (€50). Fitimet reale varen nga planet që zgjedhin klientët tuaj.",
              "* Based on Starter (€25) to Enterprise (€50) plans. Actual earnings depend on the plans your clients choose.",
              "* Basado en planes Starter (€25) a Enterprise (€50). Las ganancias reales dependen de los planes elegidos.",
              "* Basierend auf Starter (€25) bis Enterprise (€50) Plänen. Tatsächliche Einnahmen hängen von den gewählten Plänen ab.",
              "* Базирано на Starter (€25) до Enterprise (€50) планови. Реалните заработки зависат од плановите што ги избираат вашите клиенти."
            )}
          </p>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Kush mund të bëhet afiliat?", "Who can become an affiliate?", "Quien puede ser afiliado?", "Wer kann Affiliate werden?", "Кој може да стане афилијат?")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, sq: "Kontabilistë", en: "Accountants", es: "Contadores", de: "Buchhalter", mk: "Сметководители",
                dsq: "Rekomandoni Clientlly klientëve tuaj dhe fitoni ekstra.", den: "Recommend Clientlly to your clients and earn extra." },
              { icon: TrendingUp, sq: "Konsulentë Biznesi", en: "Business Consultants", es: "Consultores", de: "Unternehmensberater", mk: "Бизнис Консултанти",
                dsq: "Ofroni një zgjidhje konkrete klientëve tuaj.", den: "Offer a concrete solution to your clients." },
              { icon: Rocket, sq: "Agjenci Marketingu", en: "Marketing Agencies", es: "Agencias de Marketing", de: "Marketing-Agenturen", mk: "Маркетинг Агенции",
                dsq: "Integroni Clientlly në shërbimet tuaja.", den: "Integrate Clientlly into your services." },
              { icon: Heart, sq: "Blogerë & Influencerë", en: "Bloggers & Influencers", es: "Bloggers e Influencers", de: "Blogger & Influencer", mk: "Блогери и Инфлуенсери",
                dsq: "Ndani me audiencën tuaj dhe fitoni.", den: "Share with your audience and earn." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{sq(lang, item.sq, item.en, item.es, item.de, item.mk)}</h3>
                <p className="text-sm text-gray-500">{sq(lang, item.dsq, item.den)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 py-20">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full animate-bounce opacity-20"
              style={{ width: 8 + i * 3, height: 8 + i * 3, top: `${15 + i * 12}%`, left: `${8 + i * 15}%`, animationDelay: `${i * 0.5}s`, animationDuration: `${2.5 + i * 0.4}s` }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            {sq(lang,
              "Gati të filloni të fitoni?",
              "Ready to start earning?",
              "Listo para comenzar a ganar?",
              "Bereit zu verdienen?",
              "Подготвени да почнете да заработувате?"
            )}
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto">
            {sq(lang,
              "Aplikoni sot dhe filloni të fitoni 10% komision për çdo klient që referoni. Pa kosto, pa rrezik.",
              "Apply today and start earning 10% commission for every client you refer. No cost, no risk.",
              "Aplique hoy y comience a ganar 10% de comisión por cada cliente que refiera. Sin costo, sin riesgo.",
              "Bewerben Sie sich heute und verdienen Sie 10% Provision für jeden empfohlenen Kunden. Keine Kosten, kein Risiko.",
              "Аплицирајте денес и започнете да заработувате 10% провизија за секој препорачан клиент. Без трошоци, без ризик."
            )}
          </p>
          <button onClick={handleApply}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {copied ? <CheckCircle className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
            {copied ? sq(lang, "Email u kopjua!", "Email copied!", "Email copiado!", "E-Mail kopiert!", "Копирано!") : sq(lang, "Apliko për Programin e Afilimit", "Apply for the Affiliate Program", "Aplicar al Programa de Afiliados", "Für das Partnerprogramm bewerben", "Аплицирајте за Партнерската Програма")}
          </button>
          <p className="text-sm text-gray-700 mt-4">{sq(lang, "info@clientlly.com", "info@clientlly.com", "info@clientlly.com", "info@clientlly.com", "info@clientlly.com")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}