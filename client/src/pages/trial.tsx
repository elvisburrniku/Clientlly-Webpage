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

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element, fr?: string | JSX.Element, pt?: string | JSX.Element, it?: string | JSX.Element): string | JSX.Element {
  switch (lang) {
    case 'sq': return alb;
    case 'es': return es ?? eng;
    case 'de': return de ?? eng;
    case 'mk': return mk ?? eng;
    case 'fr': return fr ?? eng;
    case 'pt': return pt ?? eng;
    case 'it': return it ?? eng;
    default:   return eng;
  }
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
    { icon: FileText, label: sq(lang, "Faturim & Oferta Elektronike", "Invoicing & Digital Quotes", "Facturación y cotizaciones digitales", "Rechnungsstellung & digitale Angebote", "Фактурирање и дигитални понуди") },
    { icon: BarChart3, label: sq(lang, "Raporte & Analitikë", "Reports & Analytics", "Informes y análisis", "Berichte & Analytik", "Извештаи и аналитика") },
    { icon: Users,    label: sq(lang, "CRM & Menaxhim Klientësh", "CRM & Client Management", "CRM y gestión de clientes", "CRM & Kundenverwaltung", "CRM и управување со клиенти") },
    { icon: Clock,    label: sq(lang, "Prezencë GPS & HR", "GPS Attendance & HR", "Asistencia GPS y RRHH", "GPS-Anwesenheit & HR", "GPS присуство и HR") },
    { icon: Car,      label: sq(lang, "Motorpool / Menaxhim Flotë", "Motorpool / Fleet Management", "Motorpool / Gestión de flota", "Motorpool / Fuhrparkverwaltung", "Моторпул / Управување со флота") },
    { icon: Package,  label: sq(lang, "Inventar & Furnitorë", "Inventory & Vendors", "Inventario y proveedores", "Inventar & Lieferanten", "Инвентар и добавувачи") },
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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <button onClick={() => go("/subscribe")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</button>
              <Link href="/compare-features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Krahaso Planet", "Compare Plans", "Comparar planes", "Pläne vergleichen", "Споредете планови", "Comparer les plans", "Comparar planos", "Confronta piani")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakti", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              <LanguageSelector />
            </div>

            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <LanguageSelector />
              <button className="p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
            <button onClick={() => go("/subscribe")} className="block text-sm font-medium text-gray-700 py-1.5 w-full text-left">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</button>
            <div className="pt-2 flex gap-2">
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
              {sq(lang, "14 Ditë Falas · Pa Kartë Krediti · Qasje e Plotë", "14 Days Free · No Credit Card · Full Access", "14 días gratis · Sin tarjeta de crédito · Acceso completo", "14 Tage kostenlos · Keine Kreditkarte · Voller Zugang", "14 дена бесплатно · Без кредитна картичка · Целосен пристап", "14 jours gratuits · Sans carte · Accès complet", "14 dias grátis · Sem cartão · Acesso total", "14 giorni gratis · Senza carta · Accesso completo")}
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
                  { icon: Shield, label: sq(lang, "Pa kartë krediti", "No credit card", "Sin tarjeta de crédito", "Keine Kreditkarte", "Без кредитна картичка", "Sans carte de crédit", "Sem cartão de crédito", "Senza carta di credito"), sub: sq(lang, "Asnjë ngarkesë e befasishme", "No surprise charges", "Sin cargos sorpresa", "Keine überraschenden Gebühren", "Без изненадувачки трошоци") },
                  { icon: Zap,    label: sq(lang, "Aktivizim i menjëhershëm", "Instant activation", "Activación instantánea", "Sofortige Aktivierung", "Моментална активација"), sub: sq(lang, "Gati brenda 60 sekondave", "Ready in 60 seconds", "Listo en 60 segundos", "Bereit in 60 Sekunden", "Подготвено за 60 секунди") },
                  { icon: Check,  label: sq(lang, "Anulo kur dëshironi", "Cancel anytime", "Cancele en cualquier momento", "Jederzeit kündigen", "Откажете кога сакате", "Résiliez à tout moment", "Cancele a qualquer momento", "Annulla quando vuoi"), sub: sq(lang, "Pa penalizim, asnjëherë", "No penalty, ever", "Sin penalización, nunca", "Keine Strafe, niemals", "Без казна, никогаш") },
                  { icon: Star,   label: sq(lang, "Qasje e plotë", "Full access", "Acceso completo", "Voller Zugang", "Целосен пристап", "Accès complet", "Acesso total", "Accesso completo"), sub: sq(lang, "Të gjitha 16 modulet", "All 16 modules", "Los 16 módulos", "Alle 16 Module", "Сите 16 модули") },
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
                  {sq(lang, "Çfarë përfshihet", "What's included", "Qué está incluido", "Was enthalten ist", "Што е вклучено")}
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
                    <Link href="/features">{sq(lang, "Shiko të gjitha 16 modulet →", "See all 16 modules →", "Ver los 16 módulos →", "Alle 16 Module ansehen →", "Погледнете ги сите 16 модули →")}</Link>
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
                    {sq(lang, "200+ biznese tashmë e përdorin Clientlly", "200+ businesses already use Clientlly", "Más de 200 empresas ya usan Clientlly", "Über 200 Unternehmen nutzen bereits Clientlly", "200+ бизниси веќе го користат Clientlly", "Plus de 200 entreprises utilisent déjà Clientlly", "Mais de 200 empresas já usam o Clientlly", "Oltre 200 aziende usano già Clientlly")}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form card ── */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Card header */}
              <div className="bg-indigo-600 px-7 py-6">
                <p className="text-[10px] font-semibold text-indigo-200 uppercase tracking-widest mb-1">
                  {sq(lang, "14 ditë falas", "14 days free", "14 días gratis", "14 Tage kostenlos", "14 дена бесплатно", "14 jours gratuits", "14 dias grátis", "14 giorni gratis")}
                </p>
                <h2 className="text-xl font-extrabold text-white leading-tight">
                  {sq(lang, "Fillo Provën Tani", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба", "Commencer l'essai gratuit", "Iniciar período de teste gratuito", "Inizia la prova gratuita")}
                </h2>
                <p className="text-sm text-indigo-200 mt-1">
                  {sq(lang, "Pa kartë krediti · Pa angazhim", "No credit card · No commitment", "Sin tarjeta de crédito · Sin compromiso", "Keine Kreditkarte · Keine Verpflichtung", "Без кредитна картичка · Без обврска")}
                </p>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {sq(lang, "Emri *", "First name *", "Nombre *", "Vorname *", "Име *", "Prénom *", "Primeiro nome *", "Nome *")}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "sq" ? "Alban" : lang === "es" ? "Juan" : lang === "de" ? "Hans" : lang === "mk" ? "Марко" : "John"}
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {sq(lang, "Mbiemri *", "Last name *", "Apellido *", "Nachname *", "Презиме *", "Nom *", "Apelido *", "Cognome *")}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "sq" ? "Gunga" : lang === "es" ? "García" : lang === "de" ? "Müller" : lang === "mk" ? "Петров" : "Doe"}
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Email i biznesit *", "Business email *", "Correo electrónico empresarial *", "Geschäftliche E-Mail *", "Деловна е-пошта *")}
                  </label>
                  <input
                    type="email"
                    placeholder={lang === "sq" ? "alban@kompania.al" : lang === "es" ? "juan@empresa.com" : lang === "de" ? "hans@firma.de" : lang === "mk" ? "марко@компанија.мк" : "john@company.com"}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Emri i kompanisë *", "Company name *", "Nombre de la empresa *", "Firmenname *", "Име на компанија *")}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === "sq" ? "Kompania Juaj Sh.p.k." : lang === "es" ? "Su Empresa S.L." : lang === "de" ? "Ihre Firma GmbH" : lang === "mk" ? "Вашата Компанија ДООЕЛ" : "Your Company Ltd."}
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    required
                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {sq(lang, "Numri i telefonit (opsional)", "Phone number (optional)", "Número de teléfono (opcional)", "Telefonnummer (optional)", "Телефонски број (опционално)")}
                  </label>
                  <input
                    type="tel"
                    placeholder={lang === "sq" ? "+355 69 xxx xxxx" : lang === "es" ? "+34 612 345 678" : lang === "de" ? "+49 170 1234567" : lang === "mk" ? "+389 70 123 456" : "+1 (555) 123-4567"}
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
                      {sq(lang, "Po konfigurohet...", "Setting up...", "Configurando...", "Wird eingerichtet...", "Се поставува...")}
                    </>
                  ) : (
                    <>
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">
                          {sq(lang, "14 ditë falas · pa kartë krediti", "14 days free · no credit card", "14 días gratis · sin tarjeta de crédito", "14 Tage kostenlos · keine Kreditkarte", "14 дена бесплатно · без кредитна картичка", "14 jours gratuits · sans carte", "14 dias grátis · sem cartão", "14 giorni gratis · senza carta")}
                        </span>
                        <span className="text-sm font-bold">{sq(lang, "Fillo Provën Tani", "Start Free Trial Now", "Iniciar prueba gratuita ahora", "Kostenlose Testversion starten", "Започнете бесплатна проба сега")}</span>
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
                    <>By starting your trial, you agree to our <a href="/terms-of-service" className="underline hover:text-gray-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>. Trial converts automatically after 14 days unless cancelled.</>,
                    <>Al iniciar su prueba, acepta nuestros <a href="/terms-of-service" className="underline hover:text-gray-600">Términos de servicio</a> y <a href="/privacy-policy" className="underline hover:text-gray-600">Política de privacidad</a>. La prueba se convierte automáticamente después de 14 días si no se cancela.</>,
                    <>Mit dem Start Ihrer Testversion stimmen Sie unseren <a href="/terms-of-service" className="underline hover:text-gray-600">Nutzungsbedingungen</a> und der <a href="/privacy-policy" className="underline hover:text-gray-600">Datenschutzrichtlinie</a> zu. Die Testversion wird nach 14 Tagen automatisch umgewandelt, wenn sie nicht gekündigt wird.</>,
                    <>Со започнување на пробата, се согласувате со нашите <a href="/terms-of-service" className="underline hover:text-gray-600">Услови за користење</a> и <a href="/privacy-policy" className="underline hover:text-gray-600">Политика за приватност</a>. Пробата автоматски се конвертира по 14 дена доколку не се откаже.</>
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
              {sq(lang, "Çfarë ndodh pas regjistrimit?", "What happens after sign up?", "Qué sucede después de registrarse?", "Was passiert nach der Anmeldung?", "Што се случува по регистрацијата?")}
            </h2>
            <p className="text-sm text-gray-500">
              {sq(lang, "Tre hapa të thjeshtë — gati brenda 60 sekondave", "Three simple steps — ready in 60 seconds", "Tres pasos simples — listo en 60 segundos", "Drei einfache Schritte — bereit in 60 Sekunden", "Три едноставни чекори — подготвено за 60 секунди")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: sq(lang, "Plotësoni formularin", "Fill in the form", "Complete el formulario", "Füllen Sie das Formular aus", "Пополнете го формуларот"),
                desc: sq(lang, "Emri, email dhe emri i kompanisë — vetëm 30 sekonda.", "Name, email and company name — only 30 seconds.", "Nombre, correo electrónico y nombre de la empresa — solo 30 segundos.", "Name, E-Mail und Firmenname — nur 30 Sekunden.", "Име, е-пошта и име на компанија — само 30 секунди."),
                color: "bg-indigo-600",
              },
              {
                step: "02",
                title: sq(lang, "Konfirmoni emailin", "Confirm your email", "Confirme su correo electrónico", "Bestätigen Sie Ihre E-Mail", "Потврдете ја вашата е-пошта"),
                desc: sq(lang, "Merrni email konfirmimi dhe klikoni lidhjen brenda 2 minutash.", "Receive confirmation email and click the link within 2 minutes.", "Reciba el correo de confirmación y haga clic en el enlace en 2 minutos.", "Erhalten Sie die Bestätigungs-E-Mail und klicken Sie innerhalb von 2 Minuten auf den Link.", "Добијте потврдна е-пошта и кликнете на линкот во рок од 2 минути."),
                color: "bg-emerald-600",
              },
              {
                step: "03",
                title: sq(lang, "Filloni të punoni", "Start working", "Comience a trabajar", "Fangen Sie an zu arbeiten", "Започнете со работа"),
                desc: sq(lang, "Dashbordi juaj është gati. Krijoni faturën e parë menjëherë.", "Your dashboard is ready. Create your first invoice immediately.", "Su panel está listo. Cree su primera factura inmediatamente.", "Ihr Dashboard ist bereit. Erstellen Sie sofort Ihre erste Rechnung.", "Вашата контролна табла е подготвена. Креирајте ја вашата прва фактура веднаш."),
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
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions", "Preguntas frecuentes", "Häufig gestellte Fragen", "Често поставувани прашања", "Questions fréquemment posées", "Perguntas frequentes", "Domande frequenti")}
          </h2>
          {[
            {
              q: { sq: "A duhet kartelë krediti për të filluar provën?", en: "Do I need a credit card to start the trial?", es: "Necesito una tarjeta de crédito para iniciar la prueba?", de: "Brauche ich eine Kreditkarte, um die Testversion zu starten?", mk: "Дали ми треба кредитна картичка за да ја започнам пробата?" },
              a: { sq: "Jo aspak. Nuk kërkojmë asnjë të dhënë pagese derisa të vendosni vetë të kaloni në plan të paguar.", en: "Not at all. We don't ask for any payment details until you choose to upgrade to a paid plan.", es: "En absoluto. No solicitamos datos de pago hasta que decida cambiar a un plan de pago.", de: "Überhaupt nicht. Wir verlangen keine Zahlungsdaten, bis Sie sich für ein kostenpflichtiges Abonnement entscheiden.", mk: "Воопшто не. Не бараме никакви податоци за плаќање додека не одлучите да преминете на платен план." },
            },
            {
              q: { sq: "Çfarë ndodh pas 14 ditëve?", en: "What happens after 14 days?", es: "Qué sucede después de 14 días?", de: "Was passiert nach 14 Tagen?", mk: "Што се случува по 14 дена?" },
              a: { sq: "Do t'ju njoftojmë me email 3 ditë para fundit të provës. Nëse nuk zgjidhni plan, llogaria freezes — nuk humbet asgjë.", en: "We'll notify you by email 3 days before the trial ends. If you don't choose a plan, the account freezes — nothing is lost.", es: "Le notificaremos por correo electrónico 3 días antes de que termine la prueba. Si no elige un plan, la cuenta se congela — nada se pierde.", de: "Wir benachrichtigen Sie per E-Mail 3 Tage vor Ende der Testversion. Wenn Sie keinen Plan wählen, wird das Konto eingefroren — nichts geht verloren.", mk: "Ќе ве известиме по е-пошта 3 дена пред завршувањето на пробата. Ако не изберете план, сметката се замрзнува — ништо не се губи." },
            },
            {
              q: { sq: "A mund të anuloj në çdo kohë?", en: "Can I cancel at any time?", es: "Puedo cancelar en cualquier momento?", de: "Kann ich jederzeit kündigen?", mk: "Дали можам да откажам во секое време?" },
              a: { sq: "Po, me një klikim. Pa telefonate, pa email-e, pa penalizim. Thjeshta.", en: "Yes, with one click. No phone calls, no emails, no penalty. Simple.", es: "Sí, con un solo clic. Sin llamadas telefónicas, sin correos electrónicos, sin penalización. Simple.", de: "Ja, mit einem Klick. Keine Telefonanrufe, keine E-Mails, keine Strafe. Einfach.", mk: "Да, со еден клик. Без телефонски повици, без е-пошта, без казна. Едноставно." },
            },
            {
              q: { sq: "A janë të gjitha veçoritë të disponueshme gjatë provës?", en: "Are all features available during the trial?", es: "Están disponibles todas las características durante la prueba?", de: "Sind alle Funktionen während der Testversion verfügbar?", mk: "Дали сите карактеристики се достапни за време на пробата?" },
              a: { sq: "Po, qasje e plotë në të gjitha 16 modulet — Faturim, HR, GPS Prezencë, Motorpool, CRM, dhe shumë të tjera.", en: "Yes, full access to all 16 modules — Invoicing, HR, GPS Attendance, Motorpool, CRM, and much more.", es: "Sí, acceso completo a los 16 módulos — Facturación, RRHH, Asistencia GPS, Motorpool, CRM y mucho más.", de: "Ja, voller Zugang zu allen 16 Modulen — Rechnungsstellung, HR, GPS-Anwesenheit, Motorpool, CRM und vieles mehr.", mk: "Да, целосен пристап до сите 16 модули — Фактурирање, HR, GPS присуство, Моторпул, CRM и многу повеќе." },
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="group mb-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none">
                <span className="text-sm font-semibold text-gray-900">{sq(lang, q.sq, q.en, q.es, q.de, q.mk)}</span>
                <span className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3 text-lg leading-none">⌄</span>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">{sq(lang, a.sq, a.en, a.es, a.de, a.mk)}</p>
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
              <>Ready to get started?<br /><span className="text-indigo-400">14 days free</span>, zero risk.</>,
              <>Listo para comenzar?<br /><span className="text-indigo-400">14 días gratis</span>, sin riesgo.</>,
              <>Bereit loszulegen?<br /><span className="text-indigo-400">14 Tage kostenlos</span>, ohne Risiko.</>,
              <>Подготвени да започнете?<br /><span className="text-indigo-400">14 дена бесплатно</span>, без ризик.</>
            )}
          </h2>
          <p className="text-gray-400 text-sm mb-7">
            {sq(lang,
              "Plotësoni formularin lartë ose filloni drejtpërdrejt me planin tuaj.",
              "Fill in the form above or go directly to choose your plan.",
              "Complete el formulario de arriba o vaya directamente a elegir su plan.",
              "Füllen Sie das Formular oben aus oder wählen Sie direkt Ihren Plan.",
              "Пополнете го формуларот погоре или одете директно да го изберете вашиот план."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free", "14 días gratis", "14 Tage kostenlos", "14 дена бесплатно", "14 jours gratuits", "14 dias grátis", "14 giorni gratis")}</span>
                <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial", "Iniciar prueba gratuita", "Kostenlose Testversion starten", "Започнете бесплатна проба", "Commencer l'essai gratuit", "Iniciar período de teste gratuito", "Inizia la prova gratuita")}</span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button onClick={() => go("/subscribe")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm">
              {sq(lang, "Shiko Çmimet", "View Pricing", "Ver precios", "Preise ansehen", "Погледнете цени", "Voir les tarifs", "Ver preços", "Vedi i prezzi")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
