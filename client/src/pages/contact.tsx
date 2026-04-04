import { useState } from "react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail, Phone, MapPin, Clock, Send, MessageSquare,
  ArrowRight, CheckCircle, Menu, X, Headphones, Globe,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string, eng: string) {
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
        title: sq(lang, "Gabim", "Error"),
        description: sq(lang, "Diçka shkoi keq. Provoni përsëri.", "Something went wrong. Please try again."),
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

  const infoCards = [
    {
      icon: Mail,
      color: "bg-indigo-50 text-indigo-600",
      title: sq(lang, "Email", "Email"),
      lines: ["info@clientlly.com", "support@clientlly.com"],
    },
    {
      icon: Phone,
      color: "bg-emerald-50 text-emerald-600",
      title: sq(lang, "Telefon", "Phone"),
      lines: ["+383 44 000 000", sq(lang, "E hënë – E premte, 8:00–17:00", "Mon – Fri, 8:00–17:00")],
    },
    {
      icon: MapPin,
      color: "bg-rose-50 text-rose-600",
      title: sq(lang, "Adresa", "Address"),
      lines: [sq(lang, "Prishtinë, Kosovë", "Pristina, Kosovo"), "Rruga UCK, Nr. 12"],
    },
    {
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
      title: sq(lang, "Orari", "Hours"),
      lines: [sq(lang, "E hënë – E premte", "Mon – Fri"), "08:00 – 17:00"],
    },
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
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</Link>
              <button onClick={() => window.location.href = "/subscribe"} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</button>
              <Link href="/contact" className="text-sm font-semibold text-indigo-600">{sq(lang, "Kontakt", "Contact")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <button onClick={() => window.location.href = "/subscribe"} className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now")}
              </button>
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
            <button onClick={() => window.location.href = "/subscribe"} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <Link href="/contact" className="block text-sm font-semibold text-indigo-600 py-2">{sq(lang, "Kontakt", "Contact")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => window.location.href = "/subscribe"} className="text-sm font-semibold px-4 py-2.5 bg-gray-900 text-white rounded-lg">{sq(lang, "Blej Tani", "Buy Now")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            {sq(lang, "Jemi këtu për ju", "We're here for you")}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-[1.15]">
            {sq(lang, <>Na kontaktoni —<br /><span className="text-indigo-600">është e thjeshtë</span></>, <>Get in touch —<br /><span className="text-indigo-600">it's simple</span></>)}
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {sq(lang,
              "Ekipi ynë është gati t'ju ndihmojë. Dërgoni mesazh dhe do t'ju kthejmë brenda 24 orëve.",
              "Our team is ready to help you. Send a message and we'll get back to you within 24 hours."
            )}
          </p>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map(({ icon: Icon, color, title, lines }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
              <div className={`inline-flex p-2.5 rounded-xl ${color} mb-3`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
              {lines.map((l, i) => (
                <p key={i} className={`text-sm ${i === 0 ? "font-semibold text-gray-900" : "text-gray-500"}`}>{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT: Form + Support ── */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">

          {/* Form (3/5) */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {sq(lang, "Mesazhi u dërgua!", "Message sent!")}
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    {sq(lang, "Faleminderit! Do t'ju kontaktojmë brenda 24 orëve.", "Thank you! We'll contact you within 24 hours.")}
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                    {sq(lang, "Dërgoni mesazh tjetër", "Send another message")}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {sq(lang, "Dërgoni një mesazh", "Send a message")}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    {sq(lang, "Plotësoni formularin dhe do t'ju kthejmë sa më shpejt.", "Fill the form and we'll get back to you as soon as possible.")}
                  </p>
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          {sq(lang, "Emri", "First Name")} *
                        </label>
                        <input name="firstName" value={form.firstName} onChange={handle} required
                          placeholder={sq(lang, "Emri juaj", "Your first name")}
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          {sq(lang, "Mbiemri", "Last Name")} *
                        </label>
                        <input name="lastName" value={form.lastName} onChange={handle} required
                          placeholder={sq(lang, "Mbiemri juaj", "Your last name")}
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          {sq(lang, "Email", "Email")} *
                        </label>
                        <input name="email" type="email" value={form.email} onChange={handle} required
                          placeholder="emri@kompania.com"
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          {sq(lang, "Kompania", "Company")}
                        </label>
                        <input name="company" value={form.company} onChange={handle}
                          placeholder={sq(lang, "Emri i kompanisë", "Company name")}
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        {sq(lang, "Tema", "Subject")} *
                      </label>
                      <select name="subject" value={form.subject} onChange={handle} required
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">
                        <option value="">{sq(lang, "Zgjidhni temën", "Choose subject")}</option>
                        <option value="demo">{sq(lang, "Kërko demo", "Request a demo")}</option>
                        <option value="pricing">{sq(lang, "Informacion mbi çmimet", "Pricing information")}</option>
                        <option value="support">{sq(lang, "Mbështetje teknike", "Technical support")}</option>
                        <option value="billing">{sq(lang, "Faturim dhe pagesa", "Billing & payments")}</option>
                        <option value="partnership">{sq(lang, "Partneritet", "Partnership")}</option>
                        <option value="other">{sq(lang, "Tjetër", "Other")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        {sq(lang, "Mesazhi", "Message")} *
                      </label>
                      <textarea name="message" value={form.message} onChange={handle} required rows={5}
                        placeholder={sq(lang, "Shkruani mesazhin tuaj këtu...", "Write your message here...")}
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors resize-none" />
                    </div>
                    <button type="submit" disabled={contactMutation.isPending}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60">
                      {contactMutation.isPending ? (
                        <>{sq(lang, "Duke dërguar...", "Sending...")}</>
                      ) : (
                        <>{sq(lang, "Dërgo Mesazhin", "Send Message")}<Send className="h-4 w-4" /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right sidebar (2/5) */}
          <div className="lg:col-span-2 space-y-4">

            {/* Why contact us */}
            <div className="bg-indigo-600 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">
                {sq(lang, "Pse të na kontaktoni?", "Why contact us?")}
              </h3>
              <ul className="space-y-2.5 text-sm text-indigo-100">
                {[
                  sq(lang, "Demo falas i platformës", "Free platform demo"),
                  sq(lang, "Ndihmë me konfigurimin fillestar", "Help with initial setup"),
                  sq(lang, "Çmime dhe plane të personalizuara", "Custom pricing & plans"),
                  sq(lang, "Integrime me sisteme ekzistuese", "Integration with existing systems"),
                  sq(lang, "Trajnim për ekipin tuaj", "Training for your team"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live chat */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-emerald-50 rounded-xl">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {sq(lang, "Chat i drejtpërdrejtë", "Live Chat")}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {sq(lang, "Bisedoni me ekipin tonë në kohë reale gjatë orarit të punës.", "Chat with our team in real time during business hours.")}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    {sq(lang, "Online tani", "Online now")}
                  </span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-indigo-50 rounded-xl">
                  <Headphones className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {sq(lang, "Mbështetje 24/7", "24/7 Support")}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {sq(lang, "Klientët tanë të abonuar kanë qasje në mbështetje çdo orë.", "Our subscribed clients have access to support around the clock.")}
                  </p>
                  <button onClick={() => window.location.href = "/expert-support"}
                    className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 transition-colors">
                    {sq(lang, "Mëso më shumë", "Learn more")} <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <p className="text-2xl font-extrabold text-gray-900">&lt; 24h</p>
              <p className="text-sm text-gray-500 mt-0.5">{sq(lang, "Koha mesatare e përgjigjes", "Average response time")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
