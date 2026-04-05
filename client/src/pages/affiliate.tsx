import { useState } from "react";
import { Link } from "wouter";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/logo-clientlly_1775347060628.png";
import { useLanguage } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight, Menu, X, Gift, TrendingUp, Users, Wallet,
  Share2, BarChart3, CheckCircle, Zap, Globe, Heart,
  Rocket, Shield, Clock, Mail, Copy, Star,
} from "lucide-react";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch (lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

const BENEFITS = [
  {
    icon: Wallet, color: "bg-emerald-100 text-emerald-600",
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
    num: "03", icon: Wallet, color: "from-emerald-500 to-green-500",
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
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', method: '' });

  const scrollToForm = () => {
    document.getElementById('affiliate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.method) return;
    setSending(true);
    try {
      const res = await fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', method: '' });
        toast({
          title: sq(lang, "Aplikimi u dërgua!", "Application sent!", "Solicitud enviada!", "Bewerbung gesendet!", "Апликацијата е испратена!") as string,
          description: sq(lang,
            "Faleminderit! Do t'ju kontaktojmë brenda 24-48 orësh.",
            "Thank you! We'll contact you within 24-48 hours.",
            "Gracias! Le contactaremos en 24-48 horas.",
            "Danke! Wir melden uns innerhalb von 24-48 Stunden.",
            "Благодариме! Ќе ве контактираме во рок од 24-48 часа."
          ) as string,
        });
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast({
        title: sq(lang, "Gabim!", "Error!", "Error!", "Fehler!", "Грешка!") as string,
        description: sq(lang, "Provoni përsëri ose shkruani direkt tek info@clientlly.com", "Please try again or email info@clientlly.com directly", "Intente de nuevo o envíe un email a info@clientlly.com", "Versuchen Sie es erneut oder senden Sie eine E-Mail an info@clientlly.com", "Обидете се повторно или испратете е-пошта на info@clientlly.com") as string,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
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
            <button onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
              <Gift className="h-5 w-5" />
              {sq(lang, "Apliko Tani", "Apply Now", "Aplicar Ahora", "Jetzt Bewerben", "Аплицирај Сега")}
              <ArrowRight className="h-5 w-5" />
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

      {/* PAYMENT & TAX DETAILS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">
              {sq(lang, "Pyetjet e shpeshta", "Frequently Asked Questions", "Preguntas Frecuentes", "Häufige Fragen", "Често Поставувани Прашања")}
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {sq(lang, "Gjithçka që duhet të dini", "Everything you need to know", "Todo lo que necesita saber", "Alles was Sie wissen müssen", "Сè што треба да знаете")}
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">

            {/* Pagesa */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {sq(lang, "Si paguhem?", "How do I get paid?", "Como me pagan?", "Wie werde ich bezahlt?", "Kako се плаќам?")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sq(lang,
                      "Pagesat bëhen çdo muaj me transfertë bankare direkt në llogarinë tuaj. Pas aprovimit të aplikimit tuaj, na dërgoni numrin IBAN të llogarisë suaj dhe ne do të transferojmë automatikisht komisionin tuaj deri më datën 10 të çdo muaji. Shuma minimale për transfertë është €50 — nëse nuk e arrini këtë shumë, akumulohet për muajin tjetër.",
                      "Payments are made monthly via direct bank transfer to your account. After your application is approved, send us your IBAN and we will automatically transfer your commission by the 10th of each month. Minimum transfer amount is €50 — if not reached, it accumulates for the next month.",
                      "Los pagos se realizan mensualmente mediante transferencia bancaria directa a su cuenta. Tras la aprobación, envíenos su IBAN y transferiremos automáticamente su comisión antes del día 10 de cada mes. El importe mínimo es €50.",
                      "Zahlungen erfolgen monatlich per Banküberweisung auf Ihr Konto. Nach der Genehmigung senden Sie uns Ihre IBAN und wir überweisen Ihre Provision automatisch bis zum 10. jedes Monats. Mindestbetrag €50.",
                      "Плаќањата се вршат месечно преку директен банкарски трансфер на вашата сметка. По одобрувањето, испратете ни го вашиот IBAN и ние автоматски ќе ја префрлиме вашата провизија до 10-ти на секој месец. Минимален износ €50."
                    )}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {sq(lang, "Transfertë bankare", "Bank transfer", "Transferencia bancaria", "Banküberweisung", "Банкарски трансфер")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {sq(lang, "Deri më 10 të muajit", "By 10th of month", "Antes del día 10", "Bis zum 10. des Monats", "До 10-ти на месецот")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {sq(lang, "Minimum €50", "Minimum €50", "Mínimo €50", "Mindestens €50", "Минимум €50")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tatimet */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {sq(lang, "Si funksionojnë tatimet?", "How do taxes work?", "Como funcionan los impuestos?", "Wie funktionieren Steuern?", "Kako функционираат даноците?")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sq(lang,
                      "Çdo afiliat është përgjegjës për deklarimin dhe pagimin e tatimeve në vendin e tij sipas legjislacionit vendor. Ne dërgojmë çdo muaj një pasqyrë të detajuar të komisioneve të fituara — ky dokument mund të përdoret si dëshmi financiare për autoritetet tatimore. Nëse jeni person fizik në Kosovë, komisioni konsiderohet të ardhur i rastësishëm dhe i nënshtrohet tatimit sipas ligjit. Rekomandojmë konsultim me kontabilistin tuaj.",
                      "Each affiliate is responsible for declaring and paying taxes in their country according to local legislation. We send a detailed monthly statement of earned commissions — this document can be used as financial proof for tax authorities. We recommend consulting your accountant.",
                      "Cada afiliado es responsable de declarar y pagar impuestos en su país. Enviamos un estado de cuenta mensual detallado de las comisiones ganadas. Recomendamos consultar con su contador.",
                      "Jeder Affiliate ist verantwortlich für die Erklärung und Zahlung von Steuern in seinem Land. Wir senden monatlich eine detaillierte Abrechnung der verdienten Provisionen. Wir empfehlen, Ihren Buchhalter zu konsultieren.",
                      "Секој афилијат е одговорен за пријавување и плаќање даноци во својата земја. Испраќаме детален месечен извод на заработените провизии. Препорачуваме консултација со вашиот сметководител."
                    )}
                  </p>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="text-amber-800 text-sm font-medium">
                      ⚠️ {sq(lang,
                        "Ne lëshojmë pasqyrë mujore të komisioneve. Tatimin e menaxhoni vetë sipas ligjit të vendit tuaj.",
                        "We issue monthly commission statements. You manage taxes yourself according to your country's law.",
                        "Emitimos estados de comisiones mensuales. Usted gestiona los impuestos según la ley de su país.",
                        "Wir stellen monatliche Provisionsabrechnungen aus. Sie verwalten Steuern selbst gemäß dem Recht Ihres Landes.",
                        "Издаваме месечни извештаи за провизии. Вие управувате со даноците сами според законот на вашата земја."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gjurmimi i klientëve */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {sq(lang, "Si e di unë nëse klientët janë ende aktiv?", "How do I know if clients are still active?", "Como sé si los clientes siguen activos?", "Wie weiß ich, ob Kunden noch aktiv sind?", "Kako знам дали клиентите се уште активни?")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sq(lang,
                      "Çdo muaj, deri më datën 5, do të merrni një email me raport të detajuar nga ekipi ynë. Raporti përmban: listën e klientëve aktiv që keni referuar, pagesat e tyre të muajit të kaluar, komisionin tuaj të saktë dhe shumën totale që do të transferohet. Nëse keni pyetje rreth ndonjë klienti, mund të na kontaktoni direkt në info@clientlly.com dhe i verifikojmë brenda 24 orësh.",
                      "Every month, by the 5th, you will receive a detailed report email from our team. The report includes: the list of active clients you have referred, their previous month's payments, your exact commission and the total amount to be transferred. If you have questions about any client, contact us directly at info@clientlly.com and we'll verify within 24 hours.",
                      "Cada mes, antes del día 5, recibirá un correo electrónico con un informe detallado de nuestro equipo. El informe incluye: lista de clientes activos referidos, pagos del mes anterior, su comisión exacta y el importe total a transferir. Para preguntas, contáctenos en info@clientlly.com.",
                      "Jeden Monat bis zum 5. erhalten Sie eine detaillierte Bericht-E-Mail von unserem Team. Der Bericht enthält: Liste der aktiven vermittelten Kunden, Zahlungen des Vormonats, Ihre genaue Provision und den zu überweisenden Gesamtbetrag. Bei Fragen: info@clientlly.com.",
                      "Секој месец, до 5-ти, ќе добивате детален извештај по е-пошта од нашиот тим. Извештајот содржи: листа на активни клиенти кои сте ги упатиле, нивните плаќања од претходниот месец, вашата точна провизија и вкупниот износ за префрлање. За прашања: info@clientlly.com."
                    )}
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: Users, sq: "Lista e klientëve aktiv", en: "Active clients list", es: "Lista de clientes activos", de: "Liste aktiver Kunden", mk: "Листа на активни клиенти", color: "bg-indigo-50 text-indigo-700" },
                      { icon: TrendingUp, sq: "Komisioni i saktë", en: "Exact commission", es: "Comisión exacta", de: "Genaue Provision", mk: "Точна провизија", color: "bg-emerald-50 text-emerald-700" },
                      { icon: Zap, sq: "Raport deri më 5 të muajit", en: "Report by 5th of month", es: "Informe antes del día 5", de: "Bericht bis zum 5.", mk: "Извештај до 5-ти", color: "bg-amber-50 text-amber-700" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold ${item.color}`}>
                        <item.icon className="h-4 w-4" />
                        {sq(lang, item.sq, item.en, item.es, item.de, item.mk)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="affiliate-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">{sq(lang, "Formulari i Aplikimit", "Application Form", "Formulario de Solicitud", "Bewerbungsformular", "Формулар за Апликација")}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {sq(lang, "Gati të filloni të fitoni?", "Ready to start earning?", "Listo para comenzar a ganar?", "Bereit zu verdienen?", "Подготвени да почнете да заработувате?")}
            </h2>
            <p className="text-gray-500">
              {sq(lang, "Plotësoni formularin dhe do t'ju kontaktojmë brenda 24-48 orësh me linkun tuaj unik.", "Fill out the form and we'll contact you within 24-48 hours with your unique link.", "Complete el formulario y le contactaremos en 24-48 horas con su enlace único.", "Füllen Sie das Formular aus und wir melden uns innerhalb von 24-48 Stunden mit Ihrem eindeutigen Link.", "Пополнете го формуларот и ќе ве контактираме во рок од 24-48 часа со вашиот уникатен линк.")}
            </p>
          </div>

          {sent ? (
            <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {sq(lang, "Aplikimi u dërgua!", "Application sent!", "Solicitud enviada!", "Bewerbung gesendet!", "Апликацијата е испратена!")}
              </h3>
              <p className="text-gray-500 mb-6">
                {sq(lang, "Faleminderit! Do t'ju kontaktojmë brenda 24-48 orësh me linkun tuaj unik të afilimit.", "Thank you! We'll contact you within 24-48 hours with your unique affiliate link.", "Gracias! Le contactaremos en 24-48 horas con su enlace único de afiliado.", "Danke! Wir melden uns innerhalb von 24-48 Stunden mit Ihrem einzigartigen Affiliate-Link.", "Благодариме! Ќе ве контактираме во рок од 24-48 часа со вашиот уникатен афилијатски линк.")}
              </p>
              <button onClick={() => setSent(false)} className="text-indigo-600 font-semibold hover:underline">
                {sq(lang, "Dërgo aplikim tjetër", "Submit another application", "Enviar otra solicitud", "Weitere Bewerbung senden", "Испрати друга апликација")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
              {/* Emri */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sq(lang, "Emri i plotë", "Full name", "Nombre completo", "Vollständiger Name", "Целосно ime")} <span className="text-red-500">*</span>
                </label>
                <input type="text" required value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder={sq(lang, "p.sh. Alban Gunga", "e.g. John Smith", "ej. Juan García", "z.B. Max Müller", "пр. Марко Марковски") as string}
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sq(lang, "Adresa email", "Email address", "Dirección de email", "E-Mail-Adresse", "Е-пошта адреса")} <span className="text-red-500">*</span>
                </label>
                <input type="email" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="email@shembull.com"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
              </div>

              {/* Telefoni */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sq(lang, "Numri i telefonit", "Phone number", "Número de teléfono", "Telefonnummer", "Телефонски број")} <span className="text-gray-400 font-normal text-xs ml-1">({sq(lang, "opsional", "optional", "opcional", "optional", "опционално")})</span>
                </label>
                <input type="tel" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  placeholder="+383 44 000 000"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
              </div>

              {/* Metoda e referimit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sq(lang, "Si planifikoni t'i referoni klientët?", "How do you plan to refer clients?", "Como planea referir clientes?", "Wie planen Sie Kunden zu empfehlen?", "Kako планирате да упатувате клиенти?")} <span className="text-red-500">*</span>
                </label>
                <textarea required value={form.method}
                  onChange={e => setForm(f => ({ ...f, method: e.target.value }))}
                  rows={4}
                  placeholder={sq(lang,
                    "p.sh. Jam kontabilist dhe kam klientë biznesi, Instagram me 5,000 ndjekës, blog për biznes...",
                    "e.g. I'm an accountant with business clients, Instagram with 5,000 followers, business blog...",
                    "ej. Soy contable con clientes empresariales, Instagram con 5,000 seguidores, blog de negocios...",
                    "z.B. Ich bin Buchhalter mit Geschäftskunden, Instagram mit 5.000 Followern, Business-Blog...",
                    "пр. Сум сметководител со деловни клиенти, Instagram со 5.000 следбеници, деловен блог..."
                  ) as string}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
              </div>

              <button type="submit" disabled={sending}
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-200 hover:shadow-xl flex items-center justify-center gap-2">
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {sq(lang, "Duke dërguar...", "Sending...", "Enviando...", "Senden...", "Испраќање...")}
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    {sq(lang, "Dërgoni Aplikimin", "Submit Application", "Enviar Solicitud", "Bewerbung Absenden", "Испрати Апликација")}
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400">
                {sq(lang,
                  "Duke dërguar formularin, pranoni Kushtet e Shërbimit dhe Politikën e Privatësisë të Clientlly.",
                  "By submitting, you agree to Clientlly's Terms of Service and Privacy Policy.",
                  "Al enviar, acepta los Términos de Servicio y la Política de Privacidad de Clientlly.",
                  "Durch die Einreichung stimmen Sie den Nutzungsbedingungen und der Datenschutzrichtlinie von Clientlly zu.",
                  "Со поднесувањето се согласувате со Условите за употреба и Политиката за приватност на Clientlly."
                )}
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}