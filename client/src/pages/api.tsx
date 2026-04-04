import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Code, Key, BookOpen, Copy, Check, Zap, Shield,
  Globe, Menu, X, ArrowRight, Terminal, Webhook,
  Lock, RefreshCw, ChevronRight, ExternalLink,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const BASE = "https://api.clientlly.com/v1";

const endpoints = [
  { method: "GET",    path: "/customers",         desc: "Merr listën e të gjithë klientëve",       descEn: "Retrieve all customers" },
  { method: "POST",   path: "/customers",         desc: "Krijo klient të ri",                       descEn: "Create a new customer" },
  { method: "GET",    path: "/customers/:id",     desc: "Merr detajet e klientit",                  descEn: "Get customer details" },
  { method: "PATCH",  path: "/customers/:id",     desc: "Përditëso të dhënat e klientit",           descEn: "Update customer data" },
  { method: "GET",    path: "/invoices",          desc: "Merr listën e faturave",                   descEn: "Retrieve all invoices" },
  { method: "POST",   path: "/invoices",          desc: "Krijo faturë të re",                       descEn: "Create a new invoice" },
  { method: "GET",    path: "/invoices/:id",      desc: "Merr detajet e faturës",                   descEn: "Get invoice details" },
  { method: "POST",   path: "/invoices/:id/send", desc: "Dërgo faturën tek klienti",                descEn: "Send invoice to client" },
  { method: "GET",    path: "/expenses",          desc: "Merr listën e shpenzimeve",                descEn: "Retrieve all expenses" },
  { method: "POST",   path: "/expenses",          desc: "Regjistro shpenzim të ri",                 descEn: "Create a new expense" },
  { method: "GET",    path: "/employees",         desc: "Merr listën e punonjësve",                 descEn: "Retrieve all employees" },
  { method: "GET",    path: "/reports/financial", desc: "Gjenero raportin financiar",               descEn: "Generate financial report" },
  { method: "GET",    path: "/analytics",         desc: "Statistika dhe analitikë e biznesit",      descEn: "Business analytics & stats" },
  { method: "POST",   path: "/webhooks",          desc: "Regjistro webhook URL",                    descEn: "Register a webhook URL" },
];

const METHOD_STYLE: Record<string, string> = {
  GET:   "bg-emerald-50 text-emerald-700 border-emerald-100",
  POST:  "bg-indigo-50 text-indigo-700 border-indigo-100",
  PATCH: "bg-amber-50 text-amber-700 border-amber-100",
  DELETE:"bg-rose-50 text-rose-700 border-rose-100",
};

const JS_AUTH = `const CLIENTLLY_API_KEY = 'sk_live_xxxxxxxxxxxxxxxx';
const BASE_URL = '${BASE}';

const headers = {
  'Authorization': \`Bearer \${CLIENTLLY_API_KEY}\`,
  'Content-Type': 'application/json',
};`;

const JS_INVOICE = `// Krijo faturë të re
const createInvoice = async () => {
  const res = await fetch(\`\${BASE_URL}/invoices\`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      client_id: 'clt_abc123',
      currency: 'EUR',
      due_date: '2026-05-01',
      items: [
        {
          description: 'Shërbime zhvillimi web',
          quantity: 1,
          unit_price: 1200.00,
        }
      ]
    }),
  });

  const invoice = await res.json();
  console.log('Fatura u krijua:', invoice.id);
};`;

const JS_WEBHOOK = `// Dëgjo webhooks (Node.js / Express)
app.post('/webhook/clientlly', (req, res) => {
  const event = req.body;

  switch (event.type) {
    case 'invoice.paid':
      console.log('Fatura u pagua:', event.data.invoice_id);
      break;
    case 'customer.created':
      console.log('Klient i ri:', event.data.name);
      break;
  }

  res.status(200).json({ received: true });
});`;

const PY_AUTH = `import requests

API_KEY = 'sk_live_xxxxxxxxxxxxxxxx'
BASE_URL = '${BASE}'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
}`;

const PY_INVOICE = `# Krijo faturë të re
def create_invoice():
    url = f'{BASE_URL}/invoices'
    data = {
        'client_id': 'clt_abc123',
        'currency': 'EUR',
        'due_date': '2026-05-01',
        'items': [
            {
                'description': 'Shërbime zhvillimi web',
                'quantity': 1,
                'unit_price': 1200.00,
            }
        ],
    }
    response = requests.post(url, headers=headers, json=data)
    invoice = response.json()
    print(f"Fatura u krijua: {invoice['id']}")
    return invoice`;

const CURL_INVOICE = `curl -X POST ${BASE}/invoices \\
  -H "Authorization: Bearer sk_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "clt_abc123",
    "currency": "EUR",
    "due_date": "2026-05-01",
    "items": [
      {
        "description": "Shërbime zhvillimi web",
        "quantity": 1,
        "unit_price": 1200.00
      }
    ]
  }'`;

type Lang = "javascript" | "python" | "curl";
type Snippet = "auth" | "invoice" | "webhook";

const SNIPPETS: Record<Lang, Partial<Record<Snippet, string>>> = {
  javascript: { auth: JS_AUTH,  invoice: JS_INVOICE, webhook: JS_WEBHOOK },
  python:     { auth: PY_AUTH,  invoice: PY_INVOICE },
  curl:       { invoice: CURL_INVOICE },
};

export default function APIPage() {
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [codeLang, setCodeLang] = useState<Lang>("javascript");
  const [codeSnippet, setCodeSnippet] = useState<Snippet>("auth");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeCode = SNIPPETS[codeLang][codeSnippet] ?? SNIPPETS["javascript"][codeSnippet] ?? "";

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
              <Link href="/integrations" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Integrime", "Integrations")}</Link>
              <button onClick={() => go("/subscribe")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing")}</button>
              <Link href="/api" className="text-sm font-semibold text-indigo-600">API</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <button onClick={() => go("/trial")}
                className="text-sm font-semibold px-4 py-2 text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
                {sq(lang, "Merr API Key", "Get API Key")}
              </button>
              <button onClick={() => go("/subscribe")}
                className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}
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
            <Link href="/features" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Veçoritë", "Features")}</Link>
            <Link href="/integrations" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Integrime", "Integrations")}</Link>
            <button onClick={() => go("/subscribe")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Çmimet", "Pricing")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => go("/trial")} className="text-sm font-semibold px-4 py-2.5 bg-indigo-600 text-white rounded-lg">{sq(lang, "Merr API Key", "Get API Key")}</button>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-indigo-300 mb-5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                {sq(lang, "REST API v1 · Stabil", "REST API v1 · Stable")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                {sq(lang,
                  <>API Dokumentacioni<br /><span className="text-indigo-400">Developer Portal</span></>,
                  <>API Documentation<br /><span className="text-indigo-400">Developer Portal</span></>
                )}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                {sq(lang,
                  "Integroni Clientlly me aplikacionet tuaja duke përdorur API-n tonë RESTful. I dokumentuar plotësisht, i sigurt dhe i gatshëm për prodhim.",
                  "Integrate Clientlly with your applications using our RESTful API. Fully documented, secure and production-ready."
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Primary CTA — API Key */}
                <button
                  onClick={() => go("/trial")}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Key className="h-4 w-4" />
                  </div>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">
                      {sq(lang, "Pa kartë krediti · 14 ditë falas", "No credit card · 14 days free")}
                    </span>
                    <span className="text-sm font-bold">
                      {sq(lang, "Merr API Key Falas", "Get Free API Key")}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </button>

                {/* Secondary CTA — Docs */}
                <button
                  onClick={() => document.getElementById("endpoints")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/8 hover:bg-white/12 text-white font-semibold rounded-xl border border-white/15 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                      {sq(lang, "14 endpoints · JSON REST", "14 endpoints · JSON REST")}
                    </span>
                    <span className="text-sm font-bold">
                      {sq(lang, "Shiko Dokumentacionin", "View Documentation")}
                    </span>
                  </span>
                  <Terminal className="h-4 w-4 text-gray-400 group-hover:text-gray-300 transition-colors flex-shrink-0" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-5 mt-8 pt-7 border-t border-white/10">
                {[
                  { value: "99.9%", label: sq(lang, "Disponueshmëri", "Uptime") },
                  { value: "< 100ms", label: sq(lang, "Latencë", "Latency") },
                  { value: "REST", label: "API Style" },
                ].map(({ value, label }, i) => (
                  <div key={i}>
                    <p className="text-white font-extrabold text-lg">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - code preview */}
            <div className="hidden lg:block">
              <div className="bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-gray-800/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></div>
                  <span className="ml-2 text-[11px] text-gray-500 font-mono">quickstart.js</span>
                </div>
                <pre
                  className="p-5 text-xs font-mono leading-relaxed overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html:
`<span style="color:#6b7280">// Clientlly API – Quick Start</span>
<span style="color:#818cf8">const</span> <span style="color:#34d399">clientlly</span> = <span style="color:#818cf8">new</span> <span style="color:#fbbf24">ClientllyAPI</span>({
  apiKey: <span style="color:#4ade80">'sk_live_xxxxxxxxxxxx'</span>,
});

<span style="color:#6b7280">// Krijo faturë me një linjë</span>
<span style="color:#818cf8">const</span> <span style="color:#e2e8f0">invoice</span> = <span style="color:#818cf8">await</span> <span style="color:#34d399">clientlly</span>
  .invoices
  .<span style="color:#fbbf24">create</span>({
    client_id: <span style="color:#4ade80">'clt_abc123'</span>,
    amount:    <span style="color:#fb923c">1200</span>,
    currency:  <span style="color:#4ade80">'EUR'</span>,
  });

console.<span style="color:#fbbf24">log</span>(invoice.id);  <span style="color:#6b7280">// inv_xyz789</span>`
                  }}
                />
              </div>
              {/* Response preview */}
              <div className="mt-3 bg-gray-900 rounded-xl border border-white/10 px-4 py-3 font-mono text-xs text-gray-400">
                <span className="text-emerald-400">✓</span> <span className="text-gray-500">200 OK</span>
                {"  "}
                <span className="text-indigo-400">{'"id"'}</span>: <span className="text-green-400">"inv_xyz789"</span>,
                {"  "}
                <span className="text-indigo-400">{'"status"'}</span>: <span className="text-green-400">"created"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK START 3 STEPS ── */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {sq(lang, "Fillo brenda 5 minutave", "Up and running in 5 minutes")}
            </h2>
            <p className="text-sm text-gray-500">
              {sq(lang, "Tre hapa të thjeshtë deri tek integrimi i parë", "Three simple steps to your first integration")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01", icon: Key, color: "bg-indigo-600",
                title: sq(lang, "Merr API Key", "Get Your API Key"),
                desc: sq(lang,
                  "Hapni llogarinë tuaj Clientlly, shkoni te Cilësimet → Qasja API, dhe gjeneroni çelësin tuaj unik.",
                  "Open your Clientlly account, go to Settings → API Access, and generate your unique key."
                ),
              },
              {
                step: "02", icon: Terminal, color: "bg-emerald-600",
                title: sq(lang, "Bëni thirrjen e parë", "Make Your First Call"),
                desc: sq(lang,
                  "Kopjoni shembullin e kodit nga seksioni më poshtë dhe ekzekutojeni. Duhet të merrni përgjigje brenda milisekondave.",
                  "Copy the code example from the section below and run it. You should get a response within milliseconds."
                ),
              },
              {
                step: "03", icon: Webhook, color: "bg-violet-600",
                title: sq(lang, "Konfiguroni Webhooks", "Configure Webhooks"),
                desc: sq(lang,
                  "Regjistroni URL-in tuaj të webhook për të marrë njoftime në kohë reale kur ndodhin ngjarje në platformë.",
                  "Register your webhook URL to receive real-time notifications when events occur on the platform."
                ),
              },
            ].map(({ step, icon: Icon, color, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-4xl font-extrabold text-gray-100 select-none leading-none">{step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CODE EXPLORER ── */}
      <section className="py-16 px-6 bg-gray-950" id="code-examples">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-white mb-1">
              {sq(lang, "Shembuj kodi", "Code Examples")}
            </h2>
            <p className="text-sm text-gray-500">
              {sq(lang, "Zgjidhni gjuhën dhe shembullin që dëshironi", "Choose your language and example")}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {/* Left panel - selectors */}
            <div className="space-y-4">
              {/* Language */}
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  {sq(lang, "Gjuha", "Language")}
                </p>
                {(["javascript", "python", "curl"] as Lang[]).map(l => (
                  <button key={l} onClick={() => { setCodeLang(l); if (l === "curl" && codeSnippet !== "invoice") setCodeSnippet("invoice"); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-all ${
                      codeLang === l ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}>
                    <ChevronRight className={`h-3.5 w-3.5 ${codeLang === l ? "opacity-100" : "opacity-0"}`} />
                    {l === "javascript" ? "JavaScript" : l === "python" ? "Python" : "cURL"}
                  </button>
                ))}
              </div>
              {/* Snippet */}
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  {sq(lang, "Shembull", "Example")}
                </p>
                {(["auth", "invoice", "webhook"] as Snippet[]).map(s => {
                  const disabled = codeLang === "curl" && s !== "invoice";
                  return (
                    <button key={s} onClick={() => !disabled && setCodeSnippet(s)}
                      disabled={disabled}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-all ${
                        disabled ? "opacity-30 cursor-not-allowed" :
                        codeSnippet === s ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}>
                      <ChevronRight className={`h-3.5 w-3.5 ${codeSnippet === s && !disabled ? "opacity-100" : "opacity-0"}`} />
                      {s === "auth" ? sq(lang, "Autentifikim", "Authentication") :
                       s === "invoice" ? sq(lang, "Krijo Faturë", "Create Invoice") :
                       "Webhooks"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right panel - code block */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-xl h-full">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
                    </div>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {codeLang === "javascript" ? "example.js" : codeLang === "python" ? "example.py" : "curl"}
                    </span>
                  </div>
                  <button onClick={() => copy(activeCode, "main")}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5">
                    {copiedId === "main" ? <><Check className="h-3.5 w-3.5 text-emerald-400" /> {sq(lang, "Kopjuar!", "Copied!")}</> : <><Copy className="h-3.5 w-3.5" /> {sq(lang, "Kopjo", "Copy")}</>}
                  </button>
                </div>
                <pre className="p-5 text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto min-h-[280px]">
                  <code>{activeCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENDPOINTS TABLE ── */}
      <section className="py-16 px-6" id="endpoints">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                {sq(lang, "Endpoints e disponueshme", "Available Endpoints")}
              </h2>
              <p className="text-sm text-gray-500">
                {sq(lang, "Base URL: ", "Base URL: ")}<code className="text-indigo-600 text-xs bg-indigo-50 px-2 py-0.5 rounded">{BASE}</code>
              </p>
            </div>
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
              {endpoints.length} endpoints
            </span>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-5 py-2.5">
              <div className="col-span-2 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{sq(lang, "Metoda", "Method")}</div>
              <div className="col-span-4 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{sq(lang, "Rruga", "Path")}</div>
              <div className="col-span-5 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{sq(lang, "Përshkrimi", "Description")}</div>
              <div className="col-span-1 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Auth</div>
            </div>
            {endpoints.map(({ method, path, desc, descEn }, i) => (
              <div key={i} className={`grid grid-cols-12 items-center px-5 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
                <div className="col-span-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${METHOD_STYLE[method] ?? METHOD_STYLE["GET"]}`}>
                    {method}
                  </span>
                </div>
                <div className="col-span-4">
                  <code className="text-xs text-gray-700 font-mono">{path}</code>
                </div>
                <div className="col-span-5 text-xs text-gray-500">{lang === "sq" ? desc : descEn}</div>
                <div className="col-span-1">
                  <Lock className="h-3.5 w-3.5 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-3 text-center">
            {sq(lang, "Të gjithë endpoints kërkojnë autentifikim me API Key.", "All endpoints require API Key authentication.")}
          </p>
        </div>
      </section>

      {/* ── FEATURES 3 COLS ── */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {sq(lang, "Ndërtuara për zhvillues", "Built for developers")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Zap, color: "bg-indigo-600",
                title: sq(lang, "Sync në Kohë Reale", "Real-time Sync"),
                desc: sq(lang,
                  "Të gjitha të dhënat sinkronizohen menjëherë. Nuk ka nevojë për polling — përdorni webhooks.",
                  "All data syncs instantly. No need for polling — use webhooks for real-time events."
                ),
              },
              {
                icon: Shield, color: "bg-emerald-600",
                title: sq(lang, "Siguri e Nivelit Enterprise", "Enterprise-grade Security"),
                desc: sq(lang,
                  "OAuth 2.0, kriptim TLS 1.3, kuotë kërkesash dhe audit log i plotë.",
                  "OAuth 2.0, TLS 1.3 encryption, rate limiting and full audit logging included."
                ),
              },
              {
                icon: Globe, color: "bg-violet-600",
                title: sq(lang, "Infrastrukturë Globale", "Global Infrastructure"),
                desc: sq(lang,
                  "99.9% disponueshmëri e garantuar. API e disponueshme nga çdo vend me latencë ultra-të ulët.",
                  "99.9% guaranteed uptime. API available from anywhere with ultra-low latency."
                ),
              },
              {
                icon: RefreshCw, color: "bg-amber-600",
                title: sq(lang, "Versionim i Qëndrueshëm", "Stable Versioning"),
                desc: sq(lang,
                  "API v1 është e qëndrueshme dhe nuk do të ndryshojë pa njoftim paraprak me 6 muaj.",
                  "API v1 is stable and won't change without 6 months advance notice."
                ),
              },
              {
                icon: Webhook, color: "bg-rose-600",
                title: "Webhooks",
                desc: sq(lang,
                  "Merrni njoftime instantanee kur ndodhin ngjarje: pagesa, fatura të reja, klientë të rinj.",
                  "Receive instant notifications when events occur: payments, new invoices, new clients."
                ),
              },
              {
                icon: Code, color: "bg-teal-600",
                title: sq(lang, "SDK i Gatshëm", "Ready-made SDK"),
                desc: sq(lang,
                  "SDK-të zyrtare për JavaScript dhe Python. Komunitet aktiv dhe dokumentacion i plotë.",
                  "Official SDKs for JavaScript and Python. Active community and full documentation."
                ),
              },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-3 shadow-sm`}>
                  <Icon className="h-4.5 w-4.5 text-white h-[18px] w-[18px]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBHOOK EVENTS ── */}
      <section className="py-14 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-full text-xs font-semibold text-violet-700 mb-4">
                <Webhook className="h-3.5 w-3.5" />
                Webhooks
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                {sq(lang, "Ngjarje në kohë reale", "Real-time event notifications")}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {sq(lang,
                  "Regjistroni URL-in tuaj dhe Clientlly do t'ju dërgojë njoftime automatike kur ndodhin ngjarje të rëndësishme.",
                  "Register your URL and Clientlly will automatically send notifications when important events occur."
                )}
              </p>
              <div className="space-y-2">
                {[
                  "invoice.created", "invoice.paid", "invoice.overdue",
                  "customer.created", "expense.created", "payment.received",
                ].map(event => (
                  <div key={event} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></div>
                    <code className="text-xs text-gray-700 font-mono">{event}</code>
                  </div>
                ))}
              </div>
            </div>
            {/* Webhook payload preview */}
            <div className="bg-gray-950 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-gray-900/50">
                <Webhook className="h-3.5 w-3.5 text-violet-400" />
                <span className="text-[11px] text-gray-500 font-mono">POST /webhook/clientlly</span>
                <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">200 OK</span>
              </div>
              <pre className="p-5 text-xs font-mono text-gray-300 leading-relaxed">{`{
  "type": "invoice.paid",
  "created_at": "2026-04-04T14:32:00Z",
  "data": {
    "invoice_id": "inv_xyz789",
    "client_id": "clt_abc123",
    "amount": 1200.00,
    "currency": "EUR",
    "paid_at": "2026-04-04T14:31:55Z"
  }
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            {sq(lang,
              <>Gati të ndërtoni me <span className="text-indigo-400">API-n tonë</span>?</>,
              <>Ready to build with <span className="text-indigo-400">our API</span>?</>
            )}
          </h2>
          <p className="text-gray-400 mb-8">
            {sq(lang,
              "Çelësi API është i përfshirë në çdo plan — Starter, Professional dhe Enterprise. Filloni provën falas sot.",
              "The API key is included in every plan — Starter, Professional and Enterprise. Start your free trial today."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => go("/trial")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <Key className="h-4 w-4" />
              {sq(lang, "Merr API Key Falas", "Get Free API Key")}
            </button>
            <button onClick={() => go("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200">
              {sq(lang, "Na Kontaktoni", "Contact Us")}
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-5">
            {sq(lang, "Pa kartë kredie · 14 ditë provë falas · Anulo kur dëshironi", "No credit card · 14-day free trial · Cancel anytime")}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
