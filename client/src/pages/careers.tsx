import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";
import {
  ArrowRight, Menu, X, Briefcase, Mail, User, Phone,
  MapPin, FileText, Globe, Upload, Send, Check,
  Users, Heart, TrendingUp, Coffee, Rocket, Calendar,
} from "lucide-react";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

const POSITIONS = [
  { sq: "Zhvillues Full-Stack Senior", en: "Senior Full-Stack Developer" },
  { sq: "Dizajner Produkti", en: "Product Designer" },
  { sq: "Menaxher i Suksesit të Klientit", en: "Customer Success Manager" },
  { sq: "Inxhinier DevOps", en: "DevOps Engineer" },
  { sq: "Përfaqësuesi i Shitjeve", en: "Sales Representative" },
  { sq: "Menaxher Marketingu", en: "Marketing Manager" },
  { sq: "Tjetër", en: "Other" },
];

const VALUES = [
  { icon: Globe,      sq: "Ekip i Distribuuar",    en: "Distributed Team",     dsq: "Punoni nga kudo — fleksibilitet i plotë.",          den: "Work from anywhere — full flexibility." },
  { icon: Heart,      sq: "Shëndet & Mirëqenie",   en: "Health & Wellbeing",   dsq: "Mbulim shëndetësor dhe mbështetje e plotë.",         den: "Health coverage and full support." },
  { icon: TrendingUp, sq: "Rritje & Trajnim",       en: "Growth & Training",    dsq: "Buxhet mësimi, mentorim dhe zhvillim karriere.",     den: "Learning budget, mentoring and career growth." },
  { icon: Coffee,     sq: "Ekuilibër Jetë-Punë",   en: "Work-Life Balance",    dsq: "PTO e pakufizuar dhe politika miqësore ndaj familjes.", den: "Unlimited PTO and family-friendly policies." },
  { icon: Users,      sq: "Ekip i Ndryshëm",        en: "Diverse Team",         dsq: "Bashkëpunim me njerëz nga e gjithë bota.",          den: "Collaborate with people from around the world." },
  { icon: Rocket,     sq: "Kapital & Rritje",       en: "Equity & Growth",      dsq: "Pagë konkurruese dhe mundësi aksionesh.",           den: "Competitive salary and equity options." },
];

export default function Careers() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<"apply" | "resume" | "about">("apply");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    position: "", location: "", experience: "", coverLetter: "",
    portfolio: "", availability: "", resume: null as File | null,
  });

  const set = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleApply = () => {
    const subject = `Aplikim për Punë — ${form.position || "Aplikim i Përgjithshëm"}`;
    const body = `Përshëndetje ekipit të Clientlly,\n\nEmri: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nTelefon: ${form.phone}\nVendndodhja: ${form.location}\nPozita: ${form.position}\nExperiencë: ${form.experience} vite\nPortfolio/LinkedIn: ${form.portfolio}\n\nLetter motivuese:\n${form.coverLetter}\n\nMe respekt,\n${form.firstName} ${form.lastName}`;
    window.location.href = `mailto:info@clientlly.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleResume = () => {
    const subject = `CV — ${form.firstName} ${form.lastName}`;
    const body = `Përshëndetje,\n\nDëshiroj të paraqes CV-në time për mundësi pune të ardhshme.\n\nEmri: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nDisponueshmëria: ${form.availability}\n${form.resume ? `CV: ${form.resume.name}` : ""}\n\nMe respekt,\n${form.firstName} ${form.lastName}`;
    window.location.href = `mailto:info@clientlly.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const TABS = [
    { id: "apply",  sq: "Apliko Tani",   en: "Apply Now" },
    { id: "resume", sq: "Dërgo CV",       en: "Send Resume" },
    { id: "about",  sq: "Rreth Nesh",     en: "About Us" },
  ] as const;

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
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Rreth Nesh", "About")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakti", "Contact")}</Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              <button onClick={() => window.location.href = "/api/login"} className="text-sm font-medium text-gray-600 hover:text-gray-900">{sq(lang, "Hyr", "Login")}</button>
              <Link href="/trial"
                className="group inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-200 text-sm">
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free")}</span>
                  <span className="text-xs">{sq(lang, "Fillo Provën", "Start Trial")}</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
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
            <Link href="/" className="block text-sm font-medium text-gray-700 py-1">{sq(lang, "Ballina", "Home")}</Link>
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-1">{sq(lang, "Veçoritë", "Features")}</Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700 py-1">{sq(lang, "Rreth Nesh", "About")}</Link>
            <div className="pt-2 flex gap-2">
              <Link href="/trial" className="flex-1 text-sm font-bold py-2.5 bg-indigo-600 text-white rounded-lg text-center">{sq(lang, "Fillo Provën", "Start Trial")}</Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-16 bg-gradient-to-b from-indigo-50/60 via-white to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-6">
            <Briefcase className="h-3.5 w-3.5" />
            {sq(lang, "Bashkohuni me ekipin tonë", "Join our team")}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            {sq(lang,
              <>Ndërtoni diçka që ka<br /><span className="text-indigo-600">rëndësi reale</span></>,
              <>Build something that<br /><span className="text-indigo-600">truly matters</span></>
            )}
          </h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            {sq(lang,
              "Jemi një ekip i vogël, ambicioz, që ndërton software për bizneset e vogla dhe të mesme. Çdo linjë kodi që shkruani ndikon drejtpërdrejt në jetën e mbi 200 bizneseve.",
              "We're a small, ambitious team building software for small and medium businesses. Every line of code you write directly impacts the lives of 200+ businesses."
            )}
          </p>
        </div>
      </section>

      {/* ── TABS ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSubmitted(false); }}
                className={`px-6 py-3.5 text-sm font-semibold border-b-2 transition-all duration-150 ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {sq(lang, tab.sq, tab.en)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── APPLY NOW ── */}
      {activeTab === "apply" && (
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-2">{sq(lang, "Aplikimi u dërgua!", "Application sent!")}</h2>
                <p className="text-sm text-gray-500 mb-6">{sq(lang, "Do t'ju kontaktojmë brenda 3-5 ditëve.", "We'll get back to you within 3-5 business days.")}</p>
                <button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2">
                  {sq(lang, "Dërgoni aplikim tjetër", "Submit another application")}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{sq(lang, "Apliko për një pozitë", "Apply for a position")}</h2>
                  <p className="text-sm text-gray-500">{sq(lang, "Na tregoni për veten dhe rolin që ju intereson.", "Tell us about yourself and the role you're interested in.")}</p>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Emri *", "First name *")}</label>
                      <input type="text" value={form.firstName} onChange={e => set("firstName", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Mbiemri *", "Last name *")}</label>
                      <input type="text" value={form.lastName} onChange={e => set("lastName", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Email *", "Email *")}</label>
                      <input type="email" value={form.email} onChange={e => set("email", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Telefon", "Phone")}</label>
                      <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  {/* Position + Location */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Pozita e Interesit *", "Position of Interest *")}</label>
                      <select value={form.position} onChange={e => set("position", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                        <option value="">{sq(lang, "Zgjidhni pozitën", "Select a position")}</option>
                        {POSITIONS.map((p, i) => (
                          <option key={i} value={lang === "sq" ? p.sq : p.en}>{lang === "sq" ? p.sq : p.en}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Vendndodhja", "Location")}</label>
                      <input type="text" placeholder={lang === "sq" ? "Tiranë, Shqipëri" : "City, Country"} value={form.location} onChange={e => set("location", e.target.value)}
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Vite Eksperience *", "Years of Experience *")}</label>
                    <select value={form.experience} onChange={e => set("experience", e.target.value)} required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                      <option value="">{sq(lang, "Zgjidhni nivelin", "Select level")}</option>
                      <option value="0-1">{sq(lang, "0-1 vite (Junior)", "0-1 years (Junior)")}</option>
                      <option value="2-3">{sq(lang, "2-3 vite (Mid-level)", "2-3 years (Mid-level)")}</option>
                      <option value="4-5">{sq(lang, "4-5 vite (Senior)", "4-5 years (Senior)")}</option>
                      <option value="6+">{sq(lang, "6+ vite (Expert)", "6+ years (Expert)")}</option>
                    </select>
                  </div>

                  {/* Cover letter */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Letër Motivuese *", "Cover Letter *")}</label>
                    <textarea value={form.coverLetter} onChange={e => set("coverLetter", e.target.value)} required rows={5}
                      placeholder={lang === "sq" ? "Na tregoni pse jeni i interesuar dhe çfarë sjellni..." : "Tell us why you're interested and what you bring..."}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                  </div>

                  {/* Portfolio */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Portfolio / LinkedIn (opsional)", "Portfolio / LinkedIn (optional)")}</label>
                    <input type="url" placeholder="https://..." value={form.portfolio} onChange={e => set("portfolio", e.target.value)}
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                  </div>

                  {/* Submit */}
                  <button onClick={handleApply}
                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md mt-2">
                    <Send className="h-4 w-4" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "Dërguar te info@clientlly.com", "Sent to info@clientlly.com")}</span>
                      <span className="text-sm">{sq(lang, "Dërgo Aplikimin", "Submit Application")}</span>
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ── SEND RESUME ── */}
      {activeTab === "resume" && (
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-2">{sq(lang, "CV u dërgua!", "Resume sent!")}</h2>
                <p className="text-sm text-gray-500 mb-6">{sq(lang, "Do ta ruajmë dhe do t'ju kontaktojmë kur kemi hapësira.", "We'll keep it on file and reach out when we have openings.")}</p>
                <button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2">
                  {sq(lang, "Dërgo CV tjetër", "Send another resume")}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{sq(lang, "Dërgoni CV-në tuaj", "Send your resume")}</h2>
                  <p className="text-sm text-gray-500">{sq(lang, "S'ka pozitë aktive? Lëreni CV-në dhe do t'ju kontaktojmë kur kemi hapësira.", "No open position? Leave your resume and we'll reach out when we have openings.")}</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Emri *", "First name *")}</label>
                      <input type="text" value={form.firstName} onChange={e => set("firstName", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Mbiemri *", "Last name *")}</label>
                      <input type="text" value={form.lastName} onChange={e => set("lastName", e.target.value)} required
                        className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Email *", "Email *")}</label>
                    <input type="email" value={form.email} onChange={e => set("email", e.target.value)} required
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Disponueshmëria", "Availability")}</label>
                    <select value={form.availability} onChange={e => set("availability", e.target.value)}
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                      <option value="">{sq(lang, "Kur mund të filloni?", "When can you start?")}</option>
                      <option value="immediately">{sq(lang, "Menjëherë", "Immediately")}</option>
                      <option value="2weeks">{sq(lang, "2 javë njoftim", "2 weeks notice")}</option>
                      <option value="1month">{sq(lang, "1 muaj njoftim", "1 month notice")}</option>
                      <option value="3months">{sq(lang, "3 muaj njoftim", "3 months notice")}</option>
                    </select>
                  </div>

                  {/* File upload */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{sq(lang, "Ngarkoni CV (opsional — PDF/DOC)", "Upload Resume (optional — PDF/DOC)")}</label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-indigo-400 transition-colors bg-gray-50/50">
                      <Upload className="h-6 w-6 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">
                        {form.resume ? form.resume.name : sq(lang, "Klikoni për të ngarkuar", "Click to upload")}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5">PDF, DOC, DOCX — max 5MB</span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={e => setForm(prev => ({ ...prev, resume: e.target.files?.[0] || null }))} className="hidden" />
                    </label>
                  </div>

                  <button onClick={handleResume}
                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md mt-2">
                    <Send className="h-4 w-4" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "Dërguar te info@clientlly.com", "Sent to info@clientlly.com")}</span>
                      <span className="text-sm">{sq(lang, "Dërgo CV-në", "Send Resume")}</span>
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ── ABOUT US ── */}
      {activeTab === "about" && (
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">

            {/* Mission */}
            <div className="max-w-2xl mb-14">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{sq(lang, "Kush jemi ne?", "Who are we?")}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {sq(lang,
                  "Clientlly është një startup shqiptar që ndërton software të menaxhimit të biznesit për ndërmarrjet e vogla dhe të mesme. Filluat në 2021 me një ide të thjeshtë: bizneset e vogla meritojnë mjete profesionale, pa çmime të çmendura.",
                  "Clientlly is an Albanian startup building business management software for small and medium enterprises. Started in 2021 with a simple idea: small businesses deserve professional tools, without crazy prices."
                )}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {sq(lang,
                  "Sot shërbejmë 200+ biznese në 5 vende. Ekipi ynë është i vogël, i angazhuar dhe i orientuar drejt produktit. Nëse doni të ndikoni me punën tuaj — ky është vendi i duhur.",
                  "Today we serve 200+ businesses in 5 countries. Our team is small, committed and product-driven. If you want your work to have a real impact — this is the right place."
                )}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { num: "200+", sq: "Biznese Aktive",    en: "Active Businesses" },
                { num: "5",    sq: "Vende",             en: "Countries" },
                { num: "14",   sq: "Module Software",   en: "Software Modules" },
                { num: "2021", sq: "Vit Themelimi",     en: "Founded" },
              ].map(({ num, sq: sq_, en }, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                  <div className="text-2xl font-extrabold text-indigo-600 mb-1">{num}</div>
                  <div className="text-xs text-gray-500 font-medium">{sq(lang, sq_, en)}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-12">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6">{sq(lang, "Si punojmë", "How we work")}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {VALUES.map(({ icon: Icon, sq: sq_, en, dsq, den }, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="h-4.5 w-4.5 text-indigo-600 h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{sq(lang, sq_, en)}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{sq(lang, dsq, den)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{sq(lang, "Gati të bashkoheni?", "Ready to join?")}</h3>
              <p className="text-sm text-gray-500 mb-5">
                {sq(lang,
                  "Mos prisni hapësirë perfekte — nëse besoni në atë që ndërtojmë, dërgoni aplikim.",
                  "Don't wait for the perfect opening — if you believe in what we're building, send an application."
                )}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={() => setActiveTab("apply")}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md">
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "Hapni aplikimin", "Open application")}</span>
                    <span className="text-sm">{sq(lang, "Apliko Tani", "Apply Now")}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button onClick={() => setActiveTab("resume")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all text-sm shadow-sm">
                  {sq(lang, "Dërgo CV", "Send Resume")}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
