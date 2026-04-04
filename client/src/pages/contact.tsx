import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail, Phone, MapPin, Clock, Send,
  ArrowRight, CheckCircle, Menu, X, Headphones,
  Star, Zap, Users, BookOpen, ExternalLink,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function Contact() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const { toast } = useToast();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", subject: "", message: "",
  });

  const contactMutation = useMutation({
    mutationFn: (data: typeof form) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", company: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: sq(lang, "Gabim", "Error") as string,
        description: sq(lang, "Diçka shkoi keq. Provoni përsëri.", "Something went wrong. Please try again.") as string,
        variant: "destructive",
      });
    },
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

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
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</Link>
              <Link href="/contact" className="text-sm font-semibold text-indigo-600">{sq(lang, "Kontakt", "Contact")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <Link href="/subscribe" className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now")}
              </Link>
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
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing")}</Link>
            <Link href="/contact" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Kontakt", "Contact")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/subscribe" className="block text-center text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 bg-gradient-to-b from-indigo-50/80 via-white to-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              {sq(lang, "Ekipi ynë është online", "Our team is online")}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              {sq(lang,
                <><span className="text-indigo-600">Na kontaktoni</span> — jemi këtu<br />për çdo pyetje</>,
                <><span className="text-indigo-600">Contact us</span> — we're here<br />for every question</>
              )}
            </h1>
            <p className="text-lg text-gray-500">
              {sq(lang,
                "Dërgoni një mesazh ose na telefononi drejtpërdrejt. Do t'ju kthejmë brenda 24 orëve.",
                "Send a message or call us directly. We'll get back to you within 24 hours."
              )}
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: sq(lang, "Kohë Përgjigje", "Response Time"), value: "< 24h", sub: sq(lang, "mesatare", "average"), color: "text-indigo-600", bg: "bg-indigo-50" },
              { label: sq(lang, "Kënaqësi", "Satisfaction"), value: "98%", sub: sq(lang, "nga klientët", "from clients"), color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: sq(lang, "Disponueshëm", "Available"), value: "24/7", sub: sq(lang, "për abonimi", "for subscribers"), color: "text-violet-600", bg: "bg-violet-50" },
            ].map(({ label, value, sub, color, bg }, i) => (
              <div key={i} className={`${bg} rounded-2xl p-5 text-center`}>
                <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
                <p className="text-xs font-semibold text-gray-700 mt-0.5">{label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">

          {/* ── FORM (3/5) ── */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-br from-indigo-50 to-white px-8 py-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900">
                      {sq(lang, "Dërgoni një mesazh", "Send us a message")}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {sq(lang, "Plotësoni formularin — do t'ju kthejmë shpejt", "Fill the form — we'll reply quickly")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-7">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {sq(lang, "Mesazhi u dërgua!", "Message sent!")}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
                        {sq(lang,
                          "Faleminderit! Ekipi ynë do t'ju kontaktojë brenda 24 orëve.",
                          "Thank you! Our team will contact you within 24 hours."
                        )}
                      </p>
                    </div>
                    <button onClick={() => setSubmitted(false)}
                      className="mt-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 transition-colors">
                      {sq(lang, "Dërgoni mesazh tjetër", "Send another message")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                          {sq(lang, "Emri", "First name")} *
                        </label>
                        <input name="firstName" value={form.firstName} onChange={handle} required
                          placeholder={sq(lang, "Emri juaj", "Your first name") as string}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                          {sq(lang, "Mbiemri", "Last name")} *
                        </label>
                        <input name="lastName" value={form.lastName} onChange={handle} required
                          placeholder={sq(lang, "Mbiemri juaj", "Your last name") as string}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors placeholder:text-gray-400" />
                      </div>
                    </div>

                    {/* Email + Company */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                          Email *
                        </label>
                        <input name="email" type="email" value={form.email} onChange={handle} required
                          placeholder="emri@kompania.com"
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                          {sq(lang, "Kompania", "Company")}
                        </label>
                        <input name="company" value={form.company} onChange={handle}
                          placeholder={sq(lang, "Emri i kompanisë", "Company name") as string}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors placeholder:text-gray-400" />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                        {sq(lang, "Tema", "Subject")} *
                      </label>
                      <select name="subject" value={form.subject} onChange={handle} required
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors text-gray-700">
                        <option value="">{sq(lang, "Zgjidhni temën", "Choose a subject")}</option>
                        <option value="demo">{sq(lang, "Kërkoj demo falas", "Request a free demo")}</option>
                        <option value="pricing">{sq(lang, "Informacion mbi çmimet", "Pricing information")}</option>
                        <option value="support">{sq(lang, "Mbështetje teknike", "Technical support")}</option>
                        <option value="billing">{sq(lang, "Faturim dhe pagesa", "Billing & payments")}</option>
                        <option value="partnership">{sq(lang, "Partneritet biznesi", "Business partnership")}</option>
                        <option value="migration">{sq(lang, "Migrim të dhënash", "Data migration")}</option>
                        <option value="other">{sq(lang, "Tjetër", "Other")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                        {sq(lang, "Mesazhi", "Message")} *
                      </label>
                      <textarea name="message" value={form.message} onChange={handle} required rows={5}
                        placeholder={sq(lang, "Shkruani mesazhin tuaj këtu... Sa më shumë detaje, aq më mirë mund t'ju ndihmojmë.", "Write your message here... The more details, the better we can help you.") as string}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-colors resize-none placeholder:text-gray-400" />
                    </div>

                    {/* GDPR note */}
                    <p className="text-[11px] text-gray-400">
                      {sq(lang,
                        "Të dhënat tuaja janë të sigurta. Nuk do t'i ndajmë me palë të treta. Shikoni ",
                        "Your data is safe. We won't share it with third parties. See our "
                      )}
                      <Link href="/privacy-policy" className="text-indigo-500 hover:text-indigo-700 underline underline-offset-2">
                        {sq(lang, "politikën e privatësisë", "privacy policy")}
                      </Link>.
                    </p>

                    {/* Submit */}
                    <button type="submit" disabled={contactMutation.isPending}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                      {contactMutation.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                          {sq(lang, "Duke dërguar...", "Sending...")}
                        </span>
                      ) : (
                        <>
                          {sq(lang, "Dërgo Mesazhin", "Send Message")}
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (2/5) ── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Contact channels */}
            <div className="bg-indigo-600 text-white rounded-2xl p-6">
              <h3 className="font-extrabold text-base mb-4">
                {sq(lang, "Mënyra të kontaktimit", "Ways to reach us")}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@clientlly.com", sub: sq(lang, "Përgjigje brenda 24h", "Reply within 24h") },
                  { icon: Phone, label: sq(lang, "Telefon", "Phone"), value: "+38348808010 · +38348808020", sub: sq(lang, "E hënë–Premte, 8–17h", "Mon–Fri, 8am–5pm") },
                  { icon: MapPin, label: sq(lang, "Zyra", "Office"), value: sq(lang, "Prishtinë, Kosovë", "Pristina, Kosovo"), sub: "Linda Premium Residence nr 9, Prishtina e re" },
                ].map(({ icon: Icon, label, value, sub }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-indigo-100" />
                    </div>
                    <div>
                      <p className="text-[11px] text-indigo-300 uppercase tracking-widest font-semibold">{label}</p>
                      <p className="text-sm font-semibold text-white">{value}</p>
                      <p className="text-[11px] text-indigo-300">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why contact us */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-extrabold text-sm text-gray-900 mb-3">
                {sq(lang, "Mund t'ju ndihmojmë me:", "We can help you with:")}
              </h3>
              <ul className="space-y-2">
                {[
                  sq(lang, "Demo falas i platformës", "Free platform demo"),
                  sq(lang, "Konfigurimi fillestar i sistemit", "Initial system configuration"),
                  sq(lang, "Çmime dhe plane të personalizuara", "Custom pricing & plans"),
                  sq(lang, "Integrim me sisteme ekzistuese", "Integration with existing systems"),
                  sq(lang, "Trajnim për ekipin tuaj", "Training for your team"),
                  sq(lang, "Migrim i të dhënave tuaja", "Migration of your data"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                {sq(lang, "Burime të shpejta", "Quick resources")}
              </p>
              <div className="space-y-1">
                {[
                  { icon: BookOpen, label: sq(lang, "Dokumentacioni", "Documentation"), href: "/api" },
                  { icon: Zap, label: sq(lang, "Pyetje të shpeshta", "FAQ"), href: "/features" },
                  { icon: Users, label: sq(lang, "Rreth ekipit tonë", "About our team"), href: "/about" },
                  { icon: Star, label: sq(lang, "Histori suksesi", "Success stories"), href: "/success-stories" },
                ].map(({ icon: Icon, label, href }, i) => (
                  <Link key={i} href={href}
                    className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
                    </div>
                    <ExternalLink className="h-3 w-3 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
