import { ArrowLeft, Scale, Shield, Clock, Users, FileText, AlertTriangle, CheckCircle, CreditCard, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function TermsOfService() {
  const { currentLanguage: lang } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: sq(lang, "Pranimi i kushteve", "Acceptance of terms"),
      content: sq(lang,
        `Duke u regjistruar ose duke përdorur platformën Clientlly, ju pranoni të gjitha kushtet e shërbimit të listuara në këtë dokument.

Clientlly ofrohet nga Clientlly Sh.p.k., i regjistruar sipas ligjeve të Republikës së Shqipërisë. Nëse nuk pajtoheni me këto kushte, ju lutemi mos përdorni shërbimin.

Këto kushte mund të ndryshohen. Ju do të njoftoheni 30 ditë përpara çdo ndryshimi thelbësor.`,
        `By registering or using the Clientlly platform, you accept all service terms listed in this document.

Clientlly is provided by Clientlly Sh.p.k., registered under the laws of the Republic of Albania. If you disagree with these terms, please do not use the service.

These terms may change. You will be notified 30 days before any material change.`
      ),
    },
    {
      icon: Users,
      title: sq(lang, "Llogaria juaj", "Your account"),
      content: sq(lang,
        `Kur krijoni një llogari Clientlly, jeni përgjegjës për:

• Saktësinë e informacionit të dhënë gjatë regjistrimit
• Konfidencialitetin e fjalëkalimit dhe kredencialeve të hyrjes
• Të gjitha aktivitetet e kryera nën llogarinë tuaj
• Njoftimin e menjëhershëm nëse dyshoni për akses të paautorizuar

Nuk lejohet ndarja e llogarisë me persona të paautorizuar ose krijimi i llogarive të rreme. Çdo llogari duhet të korrespondojë me një person ose entitet të vetëm.`,
        `When you create a Clientlly account, you are responsible for:

• Accuracy of information provided during registration
• Confidentiality of your password and login credentials
• All activities performed under your account
• Immediate notification if you suspect unauthorized access

Sharing your account with unauthorised persons or creating fake accounts is not permitted. Each account must correspond to a single person or entity.`
      ),
    },
    {
      icon: CheckCircle,
      title: sq(lang, "Përdorimi i pranueshëm", "Acceptable use"),
      content: sq(lang,
        `Clientlly lejon përdorimin e platformës për aktivitete legjitime biznesi. Ndalohet kategorikisht:

• Faturimi i mallrave ose shërbimeve të paligjshme
• Mashtrimi financiar, pastrimi i parave ose aktivitete fraudulentoze
• Ngarkimi i skedarëve me virus ose kod keqdashës
• Tentativat e aksesit të paautorizuar në serverët tanë
• Rishitja ose licencimi i platformës pa lejen tonë me shkrim
• Scraping ose mbledhja automatike e të dhënave

Shkeljet e rënda çojnë në pezullim të menjëhershëm të llogarisë.`,
        `Clientlly allows use of the platform for legitimate business activities. Strictly prohibited:

• Invoicing for illegal goods or services
• Financial fraud, money laundering or fraudulent activities
• Uploading files with viruses or malicious code
• Attempts to gain unauthorised access to our servers
• Reselling or licensing the platform without our written permission
• Scraping or automated data collection

Serious violations lead to immediate account suspension.`
      ),
    },
    {
      icon: CreditCard,
      title: sq(lang, "Abonimi dhe pagesat", "Subscription and payments"),
      content: sq(lang,
        `Clientlly ofron plane abonimi mujore dhe vjetore:

• Starter: €20/muaj (3 përdorues, 200 fatura/muaj)
• Professional: €35/muaj (10 përdorues, 500 fatura/muaj)
• Enterprise: €50/muaj (50 përdorues, fatura të pakufizuara)

Pagesat procesohen nga Stripe dhe tarifohen automatikisht çdo periudhë. Abonimi vjetor ofron zbritje 20%.

Mund ta anuloni abonimin në çdo kohë nga Paneli i Llogarisë. Pas anulimit, aksesin e keni deri në fund të periudhës së paguar. Nuk ofrohen rimbursime proporcionale për periudhat e papërdorura.`,
        `Clientlly offers monthly and annual subscription plans:

• Starter: €20/month (3 users, 200 invoices/month)
• Professional: €35/month (10 users, 500 invoices/month)
• Enterprise: €50/month (50 users, unlimited invoices)

Payments are processed by Stripe and automatically charged each period. Annual subscription offers a 20% discount.

You may cancel your subscription at any time from the Account Panel. After cancellation, you have access until the end of the paid period. No pro-rata refunds are offered for unused periods.`
      ),
    },
    {
      icon: Shield,
      title: sq(lang, "Pronësia intelektuale", "Intellectual property"),
      content: sq(lang,
        `Të gjitha të drejtat e pronësisë intelektuale lidhur me platformën Clientlly (kodi, dizajni, logoja, dokumentacioni) i takojnë Clientlly Sh.p.k.

Ju jepet një licencë jo-ekskluzive, jo-transferueshme për të përdorur platformën gjatë kohës së abonimit tuaj aktiv.

Të dhënat e biznesit tuaj (fatura, klientë, raporte) janë dhe mbeten pronë juaj. Clientlly nuk pretendon asnjë të drejtë mbi to.`,
        `All intellectual property rights related to the Clientlly platform (code, design, logo, documentation) belong to Clientlly Sh.p.k.

You are granted a non-exclusive, non-transferable licence to use the platform during your active subscription period.

Your business data (invoices, clients, reports) is and remains your property. Clientlly claims no rights over it.`
      ),
    },
    {
      icon: AlertTriangle,
      title: sq(lang, "Kufizimi i përgjegjësisë", "Limitation of liability"),
      content: sq(lang,
        `Clientlly ofrohet "si është" dhe "si disponohet". Nuk garantojmë:

• Disponueshmëri 100% të pandërprerë (synoj 99.9% SLA)
• Mungesë të plotë të gabimeve ose ndërprerjeve teknike
• Përshtatshmëri për qëllime specifike biznesi

Clientlly nuk mban përgjegjësi për:
• Humbje të fitimeve ose humbje të biznesit nga ndërprerjet e shërbimit
• Dëme indirekte, të rastësishme ose pasojuese
• Veprimet e palëve të treta (si banka ose furnitorë pagese)

Përgjegjësia jonë maksimale nuk mund të tejkalojë vlerën e abonimit tuaj për 3 muajt e fundit.`,
        `Clientlly is provided "as is" and "as available". We do not guarantee:

• 100% uninterrupted availability (targeting 99.9% SLA)
• Complete absence of errors or technical interruptions
• Suitability for specific business purposes

Clientlly is not liable for:
• Loss of profits or business losses from service interruptions
• Indirect, incidental or consequential damages
• Actions of third parties (such as banks or payment providers)

Our maximum liability cannot exceed the value of your subscription for the last 3 months.`
      ),
    },
    {
      icon: Clock,
      title: sq(lang, "Ndryshimet dhe përfundimi", "Changes and termination"),
      content: sq(lang,
        `Ne rezervojmë të drejtën:

• Të modifikojmë ose ndërpresim çdo funksion, me njoftim paraprak 30-ditor
• Të pezullojmë ose mbyllim llogaritë që shkelin këto kushte
• Të ndryshojmë çmimet me njoftim 60-ditor për abonentët ekzistues

Ju mund të mbyllni llogarinë tuaj në çdo kohë. Kur mbyllet llogaria, keni 90 ditë për të eksportuar të gjitha të dhënat tuaja përpara fshirjes definitive.`,
        `We reserve the right to:

• Modify or discontinue any feature, with 30-day advance notice
• Suspend or close accounts that violate these terms
• Change prices with 60-day notice for existing subscribers

You may close your account at any time. When the account is closed, you have 90 days to export all your data before permanent deletion.`
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
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
            <Scale className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Kushtet e Shërbimit","Terms of Service")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,"Kushtet e Shërbimit Clientlly","Clientlly Terms of Service")}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-4">
            {sq(lang,
              "Ju lutemi lexoni me kujdes këto kushte përpara se të përdorni platformën Clientlly. Duke u regjistruar, pranoni të gjitha kushtet e mëposhtme.",
              "Please read these terms carefully before using the Clientlly platform. By registering, you accept all the following terms."
            )}
          </p>
          <p className="text-xs text-gray-400">{sq(lang,"Hyrë në fuqi:","Effective date:")} 1 Janar 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[240px_1fr] gap-10">

            {/* TOC */}
            <nav className="hidden md:block">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Seksionet","Sections")}</p>
              <ul className="space-y-2">
                {sections.map((s,i) => (
                  <li key={i}>
                    <a href={`#t-section-${i}`}
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
                  <div key={i} id={`t-section-${i}`} className="scroll-mt-20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-indigo-600" />
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
              <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{sq(lang,"Pyetje ligjore","Legal questions")}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {sq(lang,"Për çdo pyetje lidhur me kushtet e shërbimit:","For any questions about the terms of service:")}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">legal@clientlly.com</p>
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
