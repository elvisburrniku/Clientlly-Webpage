import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, FileText, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function PrivacyPolicy() {
  const { currentLanguage: lang } = useLanguage();

  const sections = [
    {
      icon: Database,
      title: sq(lang, "Të dhënat që mbledhim", "Data we collect"),
      content: sq(lang,
        `Ne mbledhim vetëm të dhënat e nevojshme për të ofruar shërbimin Clientlly:

• Të dhëna llogarie: emri, adresa email, fjalëkalimi i enkriptuar, emri i kompanisë
• Të dhëna biznesi: fatura, klientë, shpenzime, inventar — të cilat i vendosni ju
• Të dhëna teknike: adresa IP, lloji i shfletuesit, koha e hyrjes (vetëm për siguri)
• Të dhëna pagese: procesohen nga Stripe — ne nuk ruajmë numrin e kartës

Ne NUK mbledhim: të dhëna sensibile personale, të dhëna të fëmijëve nën 16 vjeç, ose të dhëna biometrike.`,
        `We collect only the data necessary to provide the Clientlly service:

• Account data: name, email address, encrypted password, company name
• Business data: invoices, clients, expenses, inventory — entered by you
• Technical data: IP address, browser type, login time (for security only)
• Payment data: processed by Stripe — we do not store card numbers

We do NOT collect: sensitive personal data, data of children under 16, or biometric data.`
      ),
    },
    {
      icon: Eye,
      title: sq(lang, "Si i përdorim të dhënat", "How we use your data"),
      content: sq(lang,
        `Të dhënat tuaja përdoren ekskluzivisht për:

• Ofrimin dhe funksionimin e platformës Clientlly
• Dërgimin e faturave, njoftimeve dhe raporteve që ju konfiguroni
• Mbështetjen teknike kur na kontaktoni
• Sigurinë e llogarisë dhe parandalimin e mashtrimit
• Komunikime lidhur me shërbimin (jo marketing pa lejen tuaj)

Ne NUK i shesim, ndajmë ose japim me qira të dhënat tuaja palëve të treta për qëllime tregtare.`,
        `Your data is used exclusively for:

• Providing and operating the Clientlly platform
• Sending invoices, notifications and reports you configure
• Technical support when you contact us
• Account security and fraud prevention
• Service-related communications (no marketing without your consent)

We do NOT sell, share or rent your data to third parties for commercial purposes.`
      ),
    },
    {
      icon: Users,
      title: sq(lang, "Ndarja me palë të treta", "Sharing with third parties"),
      content: sq(lang,
        `Punojmë vetëm me partnere të besuara dhe të certifikuara:

• Stripe — procesim pagesash (PCI DSS Level 1)
• SendGrid/Brevo — dërgim emailesh transaksionale
• Hetzner Cloud — hosting i të dhënave (serverë në Gjermani, BE)
• Sentry — monitorim gabimesh teknik (pa të dhëna personale)

Çdo partner është i detyruar kontraktualisht të mbrojë të dhënat tuaja dhe nuk lejohet t'i përdorë ato jashtë qëllimit të specifikuar.`,
        `We work only with trusted and certified partners:

• Stripe — payment processing (PCI DSS Level 1)
• SendGrid/Brevo — transactional email delivery
• Hetzner Cloud — data hosting (servers in Germany, EU)
• Sentry — technical error monitoring (no personal data)

Each partner is contractually obligated to protect your data and may not use it outside the specified purpose.`
      ),
    },
    {
      icon: Lock,
      title: sq(lang, "Siguria e të dhënave", "Data security"),
      content: sq(lang,
        `Zbatojmë masa teknike dhe organizative të nivelit enterprise:

• Enkriptim AES-256 për të dhënat në ruajtje (at rest)
• Enkriptim TLS 1.3 për të dhënat në tranzit (in transit)
• Fjalëkalimet hashohen me bcrypt (kurrë nuk ruhen si tekst)
• Autentifikim me dy faktorë (2FA) i disponueshëm për të gjitha llogaritë
• Backup automatike ditore me enkriptim të plotë
• Serverët vendosen në BE (Gjermani) dhe janë të certifikuar ISO 27001`,
        `We implement enterprise-level technical and organisational measures:

• AES-256 encryption for data at rest
• TLS 1.3 encryption for data in transit
• Passwords hashed with bcrypt (never stored as plain text)
• Two-factor authentication (2FA) available for all accounts
• Automated daily backups with full encryption
• Servers located in the EU (Germany), ISO 27001 certified`
      ),
    },
    {
      icon: Globe,
      title: sq(lang, "Të drejtat tuaja (GDPR)", "Your rights (GDPR)"),
      content: sq(lang,
        `Si rezident i Bashkimit Europian, keni të drejtat e mëposhtme:

• E drejta e aksesit — mund të kërkoni kopje të të dhënave tuaja
• E drejta e korrigjimit — mund të ndreqni të dhëna të pasakta
• E drejta e fshirjes ("e drejta të harrohesh") — fshini llogarinë dhe të dhënat
• E drejta e kufizimit të përpunimit — kufizoni si i përdorim të dhënat tuaja
• E drejta e portabilitetit — merrni të dhënat në format CSV/JSON
• E drejta e kundërshtimit — kundërshtoni përpunimin për marketing

Për të ushtruar çdo të drejtë, na kontaktoni te: privacy@clientlly.com`,
        `As an EU resident, you have the following rights:

• Right of access — request a copy of your data
• Right of rectification — correct inaccurate data
• Right to erasure ("right to be forgotten") — delete your account and data
• Right to restriction of processing — limit how we use your data
• Right to portability — receive your data in CSV/JSON format
• Right to object — object to processing for marketing

To exercise any right, contact us at: privacy@clientlly.com`
      ),
    },
    {
      icon: FileText,
      title: sq(lang, "Ruajtja e të dhënave", "Data retention"),
      content: sq(lang,
        `Ruajmë të dhënat tuaja sipas politikës së mëposhtme:

• Të dhënat e llogarisë aktive: gjatë gjithë kohëzgjatjes së abonimit
• Pas mbylljes së llogarisë: fshihen brenda 90 ditëve
• Të dhënat e faturave dhe kontabilitetit: 7 vjet (kërkesë ligjore EU)
• Logjet e aksesit: 30 ditë për qëllime sigurie
• Backup-et: fshihen automatikisht pas 365 ditësh

Mund të kërkoni fshirje të menjëhershme duke na kontaktuar drejtpërdrejt.`,
        `We retain your data according to the following policy:

• Active account data: throughout the subscription period
• After account closure: deleted within 90 days
• Invoice and accounting data: 7 years (EU legal requirement)
• Access logs: 30 days for security purposes
• Backups: automatically deleted after 365 days

You may request immediate deletion by contacting us directly.`
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <button onClick={() => window.location.href="/"} className="flex items-center gap-2">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </button>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />{sq(lang,"Kthehu","Back")}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
            <Shield className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Politika e Privatësisë","Privacy Policy")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,"Privatësia juaj është prioriteti ynë","Your privacy is our priority")}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-4">
            {sq(lang,
              "Kjo politikë shpjegon se si Clientlly mbledh, përdor dhe mbron të dhënat tuaja personale dhe të biznesit. Jemi plotësisht në përputhje me GDPR dhe ligjet e mbrojtjes së të dhënave të BE.",
              "This policy explains how Clientlly collects, uses and protects your personal and business data. We are fully compliant with GDPR and EU data protection laws."
            )}
          </p>
          <p className="text-xs text-gray-400">{sq(lang,"Përditësuar më:","Last updated:")} 1 Janar 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[240px_1fr] gap-10">

            {/* Sidebar TOC */}
            <nav className="hidden md:block">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Përmbajtja","Contents")}</p>
              <ul className="space-y-2">
                {sections.map((s,i) => (
                  <li key={i}>
                    <a href={`#section-${i}`}
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors block py-0.5">
                      {i+1}. {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((s,i) => {
                const Icon = s.icon;
                return (
                  <div key={i} id={`section-${i}`} className="scroll-mt-20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4.5 w-4.5 text-indigo-600 h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-12">
                      {s.content}
                    </div>
                  </div>
                );
              })}

              {/* Contact */}
              <div className="p-6 rounded-2xl border border-indigo-100 bg-indigo-50">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{sq(lang,"Na kontaktoni","Contact us")}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {sq(lang,
                        "Për çdo pyetje lidhur me privatësinë dhe mbrojtjen e të dhënave:",
                        "For any questions regarding privacy and data protection:"
                      )}
                    </p>
                    <p className="text-sm font-semibold text-indigo-700">privacy@clientlly.com</p>
                    <p className="text-xs text-gray-400 mt-1">{sq(lang,"Përgjigje brenda 72 orësh","Response within 72 hours")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
