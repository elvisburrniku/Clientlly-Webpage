import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Check, Minus, Menu, X, ArrowRight, Zap, Users, FileText, Shield,
  Star, ChevronDown, ChevronUp, Info, CreditCard,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

const PLANS = [
  {
    id: "starter",
    name: { sq: "Starter", en: "Starter" },
    price: 25,
    yearlyPrice: 21.25,
    users: { sq: "1 përdorues", en: "1 user" },
    invoices: { sq: "200 fatura / muaj", en: "200 invoices / month" },
    color: "border-gray-200",
    badge: null,
    btnClass: "bg-gray-900 hover:bg-gray-700 text-white",
    highlight: false,
  },
  {
    id: "professional",
    name: { sq: "Professional", en: "Professional" },
    price: 35,
    yearlyPrice: 29.75,
    users: { sq: "deri 5 përdorues", en: "up to 5 users" },
    invoices: { sq: "500 fatura / muaj", en: "500 invoices / month" },
    color: "border-indigo-500 ring-2 ring-indigo-500/20",
    badge: { sq: "Më i Popullarizuari", en: "Most Popular" },
    btnClass: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-lg",
    highlight: true,
  },
  {
    id: "enterprise",
    name: { sq: "Enterprise", en: "Enterprise" },
    price: 50,
    yearlyPrice: 42.50,
    users: { sq: "deri 20 përdorues (+€2/shtesë)", en: "up to 20 users (+€2/extra)" },
    invoices: { sq: "Pa limit fatura", en: "Unlimited invoices" },
    color: "border-gray-200",
    badge: null,
    btnClass: "bg-gray-900 hover:bg-gray-700 text-white",
    highlight: false,
  },
];

type CellVal = boolean | string;

const FEATURE_GROUPS: {
  group: { sq: string; en: string };
  rows: { label: { sq: string; en: string }; tip?: { sq: string; en: string }; starter: CellVal; professional: CellVal; enterprise: CellVal }[];
}[] = [
  {
    group: { sq: "Limitet e Planit", en: "Plan Limits" },
    rows: [
      { label: { sq: "Përdorues", en: "Users" }, starter: "1", professional: "5", enterprise: "20 (+€2/shtesë)" },
      { label: { sq: "Fatura / muaj", en: "Invoices / month" }, starter: "200", professional: "500", enterprise: "∞" },
      { label: { sq: "Hapësirë ruajtjeje", en: "Storage" }, starter: "5 GB", professional: "20 GB", enterprise: "100 GB" },
      { label: { sq: "Mbështetje", en: "Support" }, starter: "Email", professional: "Chat & Email", enterprise: "Prioritare 24/7" },
    ],
  },
  {
    group: { sq: "Financë", en: "Finance" },
    rows: [
      { label: { sq: "Faturim Elektronik", en: "Electronic Invoicing" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Oferta & Kuota Dixhitale", en: "Digital Quotes & Offers" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Borxhesh", en: "Debt Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Nënshkrim Dixhital (Klient + Kompani)", en: "Digital Signature (Client + Company)" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Gjurmim: hapur → lexuar → nënshkruar", en: "Tracking: opened → read → signed" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Rikujtime automatike pagese", en: "Auto payment reminders" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Raporte & Analitikë", en: "Reports & Analytics" },
    rows: [
      { label: { sq: "Raporte financiare", en: "Financial reports" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Pasqyrë e të ardhurave & shpenzimeve", en: "Revenue & expense overview" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Eksport PDF / Excel", en: "PDF / Excel export" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Analitikë e avancuar", en: "Advanced analytics" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "Raporte me porosi (custom)", en: "Custom reports" }, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    group: { sq: "Klientë & Furnitorë", en: "Clients & Vendors" },
    rows: [
      { label: { sq: "CRM — Menaxhim Klientësh", en: "CRM — Client Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Historik komunikimi", en: "Communication history" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Furnitorësh", en: "Vendor Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Porosi blerje (PO)", en: "Purchase orders (PO)" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Operacione", en: "Operations" },
    rows: [
      { label: { sq: "Menaxhim Inventarit", en: "Inventory Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Alarme rezerva të ulëta", en: "Low-stock alerts" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Prezencë me GPS", en: "GPS Attendance" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Motorpool / Menaxhim Flotë", en: "Motorpool / Fleet Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Kalendarë & Caktim takimesh", en: "Calendar & Meeting scheduler" }, starter: true, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "HR & Personeli", en: "HR & Staff" },
    rows: [
      { label: { sq: "Menaxhim HR", en: "HR Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Listë pagese (Payroll)", en: "Payroll" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Lejeve", en: "Leave Management" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Menaxhim Trajnimesh", en: "Training Management" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "Raporte performancë", en: "Performance reports" }, starter: false, professional: true, enterprise: true },
    ],
  },
  {
    group: { sq: "Siguria & Integrimi", en: "Security & Integration" },
    rows: [
      { label: { sq: "Kriptim TLS 256-bit", en: "TLS 256-bit encryption" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Qasje API", en: "API access" }, starter: true, professional: true, enterprise: true },
      { label: { sq: "Webhooks", en: "Webhooks" }, starter: false, professional: true, enterprise: true },
      { label: { sq: "SSO / Active Directory", en: "SSO / Active Directory" }, starter: false, professional: false, enterprise: true },
      { label: { sq: "Log auditimi", en: "Audit log" }, starter: false, professional: true, enterprise: true },
    ],
  },
];

export default function CompareFeatures() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>(
    Object.fromEntries(FEATURE_GROUPS.map((_, i) => [i, true]))
  );

  const toggleGroup = (i: number) =>
    setExpandedGroups(prev => ({ ...prev, [i]: !prev[i] }));

  const Cell = ({ val }: { val: CellVal }) => {
    if (val === true) return <Check className="h-5 w-5 text-indigo-600 mx-auto" />;
    if (val === false) return <Minus className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-sm font-semibold text-gray-700">{val}</span>;
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
              <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</Link>
              <Link href="/compare-features" className="text-sm font-semibold text-indigo-600">{sq(lang, "Krahaso Planet", "Compare Plans")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakti", "Contact")}</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
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
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Çmimet", "Pricing")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-1.5">{sq(lang, "Kontakti", "Contact")}</Link>
            <div className="pt-2 flex flex-col gap-2">
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-indigo-50/60 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 pt-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 mb-5">
            <Star className="h-3.5 w-3.5" />
            {sq(lang, "Të gjitha planet, të gjitha veçoritë", "All plans, all features")}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 leading-tight">
            {sq(lang,
              <>Krahaso <span className="text-indigo-600">Planet</span></>,
              <>Compare <span className="text-indigo-600">Plans</span></>
            )}
          </h1>
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Table title + header merged */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-4">
            <div className="bg-indigo-600 px-6 py-5">
              <h2 className="text-xl font-extrabold text-white mb-0.5">
                {sq(lang, "Krahasim i plotë i veçorive", "Full Feature Comparison")}
              </h2>
              <p className="text-indigo-200 text-sm">
                {sq(lang, "Shihni çfarë përfshin secili plan në detaje", "See exactly what each plan includes in detail")}
              </p>
            </div>
            <div className="hidden md:grid grid-cols-12 items-center px-5 py-3 bg-gray-50 border-t border-gray-200">
              <div className="col-span-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {sq(lang, "Veçoria", "Feature")}
              </div>
              {PLANS.map(plan => (
                <div key={plan.id} className={`col-span-2 text-center text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-indigo-600" : "text-gray-500"}`}>
                  {sq(lang, plan.name.sq, plan.name.en)}
                </div>
              ))}
            </div>
          </div>

          {FEATURE_GROUPS.map((group, gi) => (
            <div key={gi} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Group header */}
              <button
                onClick={() => toggleGroup(gi)}
                className="w-full flex items-center justify-between px-5 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span className="text-sm font-bold text-gray-800">{sq(lang, group.group.sq, group.group.en)}</span>
                {expandedGroups[gi]
                  ? <ChevronUp className="h-4 w-4 text-gray-400" />
                  : <ChevronDown className="h-4 w-4 text-gray-400" />
                }
              </button>

              {expandedGroups[gi] && (
                <div>
                  {group.rows.map((row, ri) => (
                    <div
                      key={ri}
                      className={`grid md:grid-cols-12 items-center px-5 py-3.5 border-t border-gray-100 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"} hover:bg-indigo-50/20 transition-colors`}
                    >
                      {/* Feature name (mobile: full width, desktop: 6 cols) */}
                      <div className="md:col-span-6 mb-2 md:mb-0">
                        <span className="text-sm text-gray-700 font-medium">{sq(lang, row.label.sq, row.label.en)}</span>
                      </div>
                      {/* Mobile: show all 3 values in a row */}
                      <div className="flex md:hidden justify-around mt-1 mb-1">
                        {PLANS.map(plan => (
                          <div key={plan.id} className="flex flex-col items-center gap-1">
                            <span className="text-[10px] text-gray-400">{sq(lang, plan.name.sq, plan.name.en)}</span>
                            <Cell val={row[plan.id as keyof typeof row] as CellVal} />
                          </div>
                        ))}
                      </div>
                      {/* Desktop: 2 cols each */}
                      {PLANS.map(plan => (
                        <div key={plan.id} className="hidden md:flex md:col-span-2 justify-center">
                          <Cell val={row[plan.id as keyof typeof row] as CellVal} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mt-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-indigo-600" /> {sq(lang, "I përfshirë", "Included")}</span>
            <span className="flex items-center gap-1.5"><Minus className="h-3.5 w-3.5 text-gray-300" /> {sq(lang, "Nuk është i disponueshëm", "Not available")}</span>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions")}
          </h2>
          {[
            {
              q: { sq: "A mund të ndërroj planin më vonë?", en: "Can I switch plans later?" },
              a: { sq: "Po, mund të ndërroni planin në çdo kohë. Ndryshimi ndodh menjëherë dhe çmimi rregullohet automatikisht proporcionalisht.", en: "Yes, you can switch plans at any time. The change happens immediately and the price adjusts automatically on a prorated basis." },
            },
            {
              q: { sq: "A përfshihen të gjitha veçoritë në planin Starter?", en: "Are all features included in the Starter plan?" },
              a: { sq: "Po! Çdo plan përfshin të gjitha 16 modulet e Clientlly. Diferencat janë vetëm në numrin e përdoruesve dhe volumin e faturave.", en: "Yes! Every plan includes all 16 Clientlly modules. Differences are only in user count and invoice volume." },
            },
            {
              q: { sq: "Çfarë ndodh pas 14 ditëve të provës falas?", en: "What happens after the 14-day free trial?" },
              a: { sq: "Pasi të mbarojë prova juaj, ju do t'ju kërkohet të zgjidhni një plan. Nuk kemi të dhëna të kartës tuaj të kreditit derisa të vendosni vetë.", en: "After your trial ends, you'll be asked to choose a plan. We don't have your credit card details until you decide." },
            },
            {
              q: { sq: "A mund të anuloj abonimi në çdo kohë?", en: "Can I cancel my subscription at any time?" },
              a: { sq: "Po, mund të anuloni abonimi tuaj në çdo kohë pa asnjë penalizim. Do të keni qasje deri në fund të periudhës për të cilën keni paguar.", en: "Yes, you can cancel your subscription at any time with no penalty. You'll have access until the end of the period you've paid for." },
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="group mb-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none">
                <span className="text-sm font-semibold text-gray-900">{sq(lang, q.sq, q.en)}</span>
                <ChevronDown className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">{sq(lang, a.sq, a.en)}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            {sq(lang,
              <>Gati të filloni? <span className="text-indigo-400">14 ditë falas</span>, pa kartë krediti.</>,
              <>Ready to start? <span className="text-indigo-400">14 days free</span>, no credit card.</>
            )}
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            {sq(lang,
              "Filloni provën tuaj falas sot dhe zbuloni pse 200+ biznese zgjodhën Clientlly.",
              "Start your free trial today and discover why 200+ businesses chose Clientlly."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => go("/trial")}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">{sq(lang, "14 ditë falas", "14 days free")}</span>
                <span className="text-sm">{sq(lang, "Fillo Provën Tani", "Start Free Trial")}</span>
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => { window.location.href = '/subscribe?plan=professional&billing=monthly'; }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 text-sm"
            >
              <CreditCard className="h-4 w-4" />
              {sq(lang, "Blej Tani", "Buy Now")}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {[
              { icon: Shield, label: sq(lang, "Pa kartë krediti", "No credit card") },
              { icon: Check, label: sq(lang, "Anulo kur dëshironi", "Cancel anytime") },
              { icon: Zap, label: sq(lang, "Qasje e menjëhershme", "Instant access") },
            ].map(({ icon: Icon, label }, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon className="h-3.5 w-3.5 text-gray-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
