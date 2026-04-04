import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";
import {
  ArrowRight, Menu, X, Check, Shield, Zap, Star,
  Users, FileText, BarChart3, Clock, Car, Package,
  Lock, ChevronRight,
} from "lucide-react";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

export default function Trial() {
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const { toast } = useToast();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", phone: "" });

  const trialMutation = useMutation({
    mutationFn: async (data: typeof form) => {
      setLocation(`/subscribe?plan=basic&billing=monthly&trial=true&email=${encodeURIComponent(data.email)}&name=${encodeURIComponent(data.firstName + " " + data.lastName)}&company=${encodeURIComponent(data.company)}`);
      window.scrollTo({ top: 0 });
    },
    onError: () => {
      toast({ title: "Gabim", description: "Ju lutem provoni sërish.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trialMutation.mutate(form);
  };

  const MODULES = [
    { icon: FileText, label: sq(lang, "Faturim & Oferta Elektronike", "Invoicing & Digital Quotes") },
    { icon: BarChart3, label: sq(lang, "Raporte & Analitikë", "Reports & Analytics") },
    { icon: Users,    label: sq(lang, "CRM & Menaxhim Klientësh", "CRM & Client Management") },
    { icon: Clock,    label: sq(lang, "Prezencë GPS & HR", "GPS Attendance & HR") },
    { icon: Car,      label: sq(lang, "Motorpool / Menaxhim Flotë", "Motorpool / Fleet Management") },
    { icon: Package,  label: sq(lang, "Inventar & Furnitorë", "Inventory & Vendors") },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</Link>
              <button onClick={() => go("/subscribe")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</button>
              <Link href="/compare-features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Krahaso Planet", "Compare Plans")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakti", "Contact")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              <LanguageSelector />
            </div>

            <button className="lg:hidden p-2 ml-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Veçoritë", "Features")}</Link>
            <button onClick={() => go("/subscribe")} className="block text-sm font-medium text-gray-700 py-1.5 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <div className="pt-2 flex gap-2">
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO + FORM ── */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-indigo-50/80 via-white to-white">
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">

          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-semibold text-indigo-700">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              {sq(lang, "14 Ditë Falas · Pa Kartë Krediti · Qasje e Plotë", "14 Days Free · No Credit Card · Full Access")}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: Value prop ── */}
            <div className="lg:pt-2">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                {sq(lang,
                  <>Provoni <span className="text-indigo-600">Clientlly</span><br />14 ditë pa asnjë kosto</>,
                  <>Try <span className="text-indigo-600">Clientlly</span><br />14 days at no cost</>,
                  <>Pruebe <span className="text-indigo-600">Clientlly</span><br />14 días sin ningún costo</>,
                  <>Testen Sie <span className="text-indigo-600">Clientlly</span><br />14 Tage ohne Kosten</>,
                  <>Пробајте <span className="text-indigo-600">Clientlly</span><br />14 дена без никакви трошоци</>
                )}
              </h1>
              <p className="text-base text-gray-500 leading-relaxed mb-7">
                {sq(lang,
                  "Qasje e plotë në të gjitha 16 modulet — pa kartë krediti, pa angazhim. Nëse nuk e doni, anuloni me 1 klikim.",
                  "Full access to all 16 modules — no credit card, no commitment. If you don't love it, cancel with 1 click.",
                  "Acceso completo a los 16 módulos — sin tarjeta de crédito, sin compromiso. Si no le gusta, cancele con 1 clic.",
                  "Vollständiger Zugang zu allen 16 Modulen — keine Kreditkarte, kein Engagement. Wenn Sie es nicht mögen, kündigen Sie mit 1 Klick.",
                  "Целосен пристап до сите 16 модули — без кредитна картичка, без обврска. Ако не го сакате, откажете со 1 клик."
                )}
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, label: sq(lang, "Pa kartë krediti", "No credit card"), sub: sq(lang, "Asnjë ngarkesë e befasishme", "No surprise charges") },
                  { icon: Zap,    label: sq(lang, "Aktivizim i menjëhershëm", "Instant activation"), sub: sq(lang, "Gati brenda 60 sekondave", "Ready in 60 seconds") },
                  { icon: Check,  label: sq(lang, "Anulo kur dëshironi", "Cancel anytime"), sub: sq(lang, "Pa penalizim, asnjëherë", "No penalty, ever") },
                  { icon: Star,   label: sq(lang, "Qasje e plotë", "Full access"), sub: sq(lang, "Të gjitha 16 modulet", "All 16 modules") },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{label}</p>
                      <p className="text-[11px] text-gray-400">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modules list */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {sq(lang, "Çfarë përfshihet", "What's included")}
                </p>
                <div className="space-y-2">
                  {MODULES.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-indigo-600" />
                      </div>
                      {label}
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-sm text-indigo-600 font-medium mt-1">
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/features">{sq(lang, "Shiko të gjitha 16 modulet →", "See all 16 modules →")}</Link>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex -space-x-2">
                  {["AB", "EK", "LS", "DK"].map((ini, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                      {ini}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-xs text-gray-500">
                    {sq(lang, "200+ biznese tashmë e përdorin Clientlly", "200+ businesses already use Clientlly")}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form card ── */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Card header */}
              <div className="bg-indigo-600 px-7 py-6">
                <p className="text-[10px] font-semibold text-indigo-200 uppercase tracking-widest mb-1">
                  {sq(lang, "14 ditë falas", "14 days free")}
                </p>
                <h2 className="text-xl font-extrabold text-white leading-tight">
                  {sq(lang, "Fillo Provën Tani", "Start Your Free Trial")}
                </h2>
                <p className="text-sm text-indigo-200 mt-1">
                  {sq(lang, "Pa kartë krediti · Pa angazhim", "No credit card · No commitment")}
                </p>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {sq(lang, "Emri *", "First name *")}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "sq" ? "Alban" : "John"}
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {sq(lang, "Mbiemri *", "Last name *")}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "sq" ? "Gunga" : "Doe"}
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Email i biznesit *", "Business email *")}
                  </label>
                  <input
                    type="email"
                    placeholder={lang === "sq" ? "alban@kompania.al" : "john@company.com"}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Emri i kompanisë *", "Company name *")}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === "sq" ? "Kompania Juaj Sh.p.k." : "Your Company Ltd."}
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    required
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Numri i telefonit (opsional)", "Phone number (optional)")}
                  </label>
                  <input
                    type="tel"
                    placeholder={lang === "sq" ? "+355 69 xxx xxxx" : "+1 (555) 123-4567"}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={trialMutation.isPending}
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md mt-1"
                >
                  {trialMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {sq(lang, "Po konfigurohet...", "Setting up...")}
                    </>
                  ) : (
                    <>
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">
                          {sq(lang, "14 ditë falas · pa kartë krediti", "14 days free · no credit card")}
                        </span>
                        <span className="text-sm font-bold">{sq(lang, "Fillo Provën Tani", "Start Free Trial Now")}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    </>
                  )}
                </button>

                {/* Legal note */}
                <p className="text-[11px] text-gray-400 text-center leading-relaxed pt-1">
                  <Lock className="h-3 w-3 inline mr-1" />
                  {sq(lang,
                    <>Duke filluar provën, pranoni <a href="/terms-of-service" className="underline hover:text-gray-600">Kushtet e Shërbimit</a> dhe <a href="/privacy-policy" className="underline hover:text-gray-600">Politikën e Privatësisë</a>. Prova konvertohet automatikisht pas 14 ditësh nëse nuk anulohet.</>,
                    <>By starting your trial, you agree to our <a href="/terms-of-service" className="underline hover:text-gray-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>. Trial converts automatically after 14 days unless cancelled.</>
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="py-14 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {sq(lang, "Çfarë ndodh pas regjistrimit?", "What happens after sign up?")}
            </h2>
            <p className="text-sm text-gray-500">
              {sq(lang, "Tre hapa të thjeshtë — gati brenda 60 sekondave", "Three simple steps — ready in 60 seconds")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: sq(lang, "Plotësoni formularin", "Fill in the form"),
                desc: sq(lang, "Emri, email dhe emri i kompanisë — vetëm 30 sekonda.", "Name, email and company name — only 30 seconds."),
                color: "bg-indigo-600",
              },
              {
                step: "02",
                title: sq(lang, "Konfirmoni emailin", "Confirm your email"),
                desc: sq(lang, "Merrni email konfirmimi dhe klikoni lidhjen brenda 2 minutash.", "Receive confirmation email and click the link within 2 minutes."),
                color: "bg-emerald-600",
              },
              {
                step: "03",
                title: sq(lang, "Filloni të punoni", "Start working"),
                desc: sq(lang, "Dashbordi juaj është gati. Krijoni faturën e parë menjëherë.", "Your dashboard is ready. Create your first invoice immediately."),
                color: "bg-violet-600",
              },
            ].map(({ step, title, desc, color }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${color} text-white text-xs font-extrabold mb-4 shadow-sm`}>
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions")}
          </h2>
          {[
            {
              q: { sq: "A duhet kartelë krediti për të filluar provën?", en: "Do I need a credit card to start the trial?" },
              a: { sq: "Jo aspak. Nuk kërkojmë asnjë të dhënë pagese derisa të vendosni vetë të kaloni në plan të paguar.", en: "Not at all. We don't ask for any payment details until you choose to upgrade to a paid plan." },
            },
            {
              q: { sq: "Çfarë ndodh pas 14 ditëve?", en: "What happens after 14 days?" },
              a: { sq: "Do t'ju njoftojmë me email 3 ditë para fundit të provës. Nëse nuk zgjidhni plan, llogaria freezes — nuk humbet asgjë.", en: "We'll notify you by email 3 days before the trial ends. If you don't choose a plan, the account freezes — nothing is lost." },
            },
            {
              q: { sq: "A mund të anuloj në çdo kohë?", en: "Can I cancel at any time?" },
              a: { sq: "Po, me një klikim. Pa telefonate, pa email-e, pa penalizim. Thjeshta.", en: "Yes, with one click. No phone calls, no emails, no penalty. Simple." },
            },
            {
              q: { sq: "A janë të gjitha veçoritë të disponueshme gjatë provës?", en: "Are all features available during the trial?" },
              a: { sq: "Po, qasje e plotë në të gjitha 16 modulet — Faturim, HR, GPS Prezencë, Motorpool, CRM, dhe shumë të tjera.", en: "Yes, full access to all 16 modules — Invoicing, HR, GPS Attendance, Motorpool, CRM, and much more." },
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="group mb-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none">
                <span className="text-sm font-semibold text-gray-900">{sq(lang, q.sq, q.en)}</span>
                <span className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3 text-lg leading-none">⌄</span>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">{sq(lang, a.sq, a.en)}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── DARK CTA ── */}
      <section className="py-14 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">
            {sq(lang,
              <>Gati për t'u nisur?<br /><span className="text-indigo-400">14 ditë falas</span>, pa asnjë rrezik.</>,
              <>Ready to get started?<br /><span className="text-indigo-400">14 days free</span>, zero risk.</>
            )}
          </h2>
          <p className="text-gray-400 text-sm mb-7">
            {sq(lang,
              "Plotësoni formularin lartë ose filloni drejtpërdrejt me planin tuaj.",
              "Fill in the form above or go directly to choose your plan."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free")}</span>
                <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial")}</span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button onClick={() => go("/subscribe")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm">
              {sq(lang, "Shiko Çmimet", "View Pricing")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
