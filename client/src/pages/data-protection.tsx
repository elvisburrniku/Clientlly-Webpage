import { ArrowLeft, Shield, Lock, Server, Globe, Award, KeyRound, FileCheck, Database, Users, Clock, AlertTriangle, CheckCircle, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element): string | JSX.Element {
  return lang === "sq" ? alb : eng;
}

export default function DataProtection() {
  const { currentLanguage: lang } = useLanguage();

  const certifications = [
    { icon: Shield, label: "GDPR Compliant", desc: sq(lang,"Plotësisht në përputhje me rregulloren europiane","Fully compliant with European regulation") },
    { icon: Lock, label: "ISO 27001", desc: sq(lang,"Serverë të certifikuar ndërkombëtarisht","Internationally certified servers") },
    { icon: Award, label: "PCI DSS Level 1", desc: sq(lang,"Standardi më i lartë i sigurisë së pagesave","Highest payment security standard") },
    { icon: Server, label: "SOC 2 Type II", desc: sq(lang,"Auditim i pavarur i kontrollit të sigurisë","Independent security control audit") },
  ];

  const measures = [
    {
      icon: KeyRound,
      title: sq(lang,"Enkriptim nga fundi në fund","End-to-end encryption"),
      content: sq(lang,
        "Të gjitha të dhënat tuaja enkriptohen me AES-256 gjatë ruajtjes dhe me TLS 1.3 gjatë transferimit. Asnjë punonjës i Clientlly nuk mund të lexojë të dhënat tuaja të biznesit — çelësat e enkriptimit janë unike për çdo llogari.",
        "All your data is encrypted with AES-256 at rest and TLS 1.3 in transit. No Clientlly employee can read your business data — encryption keys are unique to each account."
      ),
    },
    {
      icon: Server,
      title: sq(lang,"Infrastrukturë e sigurt në BE","Secure EU infrastructure"),
      content: sq(lang,
        "Serverët tanë ndodhen ekskluzivisht në Gjermani (Hetzner Cloud — Frankfurt), brenda juridiksionit të Bashkimit Europian. Nuk transferojmë asnjë të dhënë jashtë BE. Serverët kanë certifikare ISO 27001 dhe janë fizikisht të siguruar.",
        "Our servers are located exclusively in Germany (Hetzner Cloud — Frankfurt), within EU jurisdiction. We do not transfer any data outside the EU. Servers are ISO 27001 certified and physically secured."
      ),
    },
    {
      icon: FileCheck,
      title: sq(lang,"Backup automatik ditor","Automatic daily backups"),
      content: sq(lang,
        "Të dhënat tuaja kopjohen automatikisht çdo 24 orë dhe ruhen të enkriptuara në 3 lokacione të ndryshme. Mund të restaurohet çdo pikë ruajtjeje nga 30 ditët e fundit. Backup-et janë të testuar javore.",
        "Your data is automatically backed up every 24 hours and stored encrypted in 3 different locations. Any save point from the last 30 days can be restored. Backups are weekly tested."
      ),
    },
    {
      icon: Users,
      title: sq(lang,"Kontrolli i aksesit me role","Role-based access control"),
      content: sq(lang,
        "Ju kontrolloni plotësisht kush ka akses dhe çfarë mund të bëjë. Sistemin e roleve (admin, kontabilist, menaxher, operator) ju lejon të caktoni leje specifike për çdo anëtar të ekipit.",
        "You have full control over who has access and what they can do. The role system (admin, accountant, manager, operator) lets you assign specific permissions to each team member."
      ),
    },
    {
      icon: AlertTriangle,
      title: sq(lang,"Monitorim dhe detektim 24/7","24/7 monitoring and detection"),
      content: sq(lang,
        "Sistemet tona monitorojnë aktivitetin e llogarive 24/7 dhe lajmërojnë automatikisht për sjellje të dyshimta: hyrje nga vendndodhje të reja, shumë tentativa të dështuara, ose eksporte të mëdha të të dhënave.",
        "Our systems monitor account activity 24/7 and automatically alert for suspicious behaviour: logins from new locations, many failed attempts, or large data exports."
      ),
    },
    {
      icon: Globe,
      title: sq(lang,"Përputhshmëri GDPR","GDPR compliance"),
      content: sq(lang,
        "Si operatorë të të dhënave sipas GDPR, plotësojmë të gjitha detyrimet: regjistri i aktiviteteve të përpunimit (ROPA), vlerësimet e ndikimit (DPIA) për funksione të reja, kontrata me nënprocesuesit, dhe raportimi i shkeljeve brenda 72 orësh.",
        "As data controllers under GDPR, we fulfil all obligations: records of processing activities (ROPA), impact assessments (DPIA) for new features, contracts with sub-processors, and breach reporting within 72 hours."
      ),
    },
  ];

  const rights = [
    { icon: CheckCircle, title: sq(lang,"Akses i plotë","Full access"), desc: sq(lang,"Kërkoni eksport të të gjitha të dhënave tuaja","Request export of all your data") },
    { icon: FileCheck,   title: sq(lang,"Korrigjim i menjëhershëm","Immediate correction"), desc: sq(lang,"Ndreqni çdo të dhënë të pasaktë","Correct any inaccurate data") },
    { icon: AlertTriangle,title: sq(lang,"Fshirje e garantuar","Guaranteed erasure"), desc: sq(lang,"Fshini llogarinë dhe të dhënat brenda 90 ditësh","Delete account and data within 90 days") },
    { icon: Database,    title: sq(lang,"Portabilitet i plotë","Full portability"), desc: sq(lang,"Merrni të dhënat në CSV, Excel ose JSON","Get data in CSV, Excel or JSON") },
    { icon: Lock,        title: sq(lang,"Kufizim i përpunimit","Processing restriction"), desc: sq(lang,"Ngrini objeksione për çdo lloj përpunimi","Raise objections to any type of processing") },
    { icon: Clock,       title: sq(lang,"Përgjigje 72-orëshe","72-hour response"), desc: sq(lang,"Çdo kërkesë ligjore trajtohet brenda 72 orësh","Every legal request handled within 72 hours") },
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
            <Shield className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Mbrojtja e të Dhënave","Data Protection")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,
              <>Të dhënat tuaja janë<br /><span className="text-indigo-600">gjithmonë të sigurta</span></>,
              <>Your data is<br /><span className="text-indigo-600">always secure</span></>
            )}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-8">
            {sq(lang,
              "Clientlly zbaton masat më të larta të sigurisë për të mbrojtur të dhënat tuaja të biznesit. GDPR i plotë, serverë në BE, enkriptim i nivelit bankar.",
              "Clientlly implements the highest security measures to protect your business data. Full GDPR, EU servers, bank-level encryption."
            )}
          </p>

          {/* Certifications */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c,i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-4 rounded-xl border border-gray-200 flex flex-col items-start gap-2">
                  <Icon className="h-5 w-5 text-indigo-600" />
                  <p className="text-sm font-bold text-gray-900">{c.label}</p>
                  <p className="text-xs text-gray-400 leading-snug">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security measures */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Masat teknike të sigurisë","Technical security measures")}
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            {sq(lang,"Si mbrojmë të dhënat tuaja çdo sekondë të çdo dite","How we protect your data every second of every day")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {measures.map((m,i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{m.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your rights */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Të drejtat tuaja sipas GDPR","Your rights under GDPR")}
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            {sq(lang,"Si qytetar i BE, keni të drejta të plota mbi të dhënat tuaja","As an EU citizen, you have full rights over your data")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r,i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-0.5">{r.title}</p>
                    <p className="text-xs text-gray-400 leading-snug">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incident response */}
      <section className="py-14 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Plani i reagimit ndaj incidenteve","Incident response plan")}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {sq(lang,"Çfarë ndodh nëse zbulohet një shkelje e sigurisë","What happens if a security breach is detected")}
          </p>
          <div className="flex flex-col gap-0">
            {[
              { time: sq(lang,"0–1 orë","0–1 hour"),  label: sq(lang,"Detektim dhe izolim","Detection and isolation"), desc: sq(lang,"Sistemi automatik bllokoi aksesin dhe lajmëron ekipin e sigurisë","Automatic system blocks access and alerts security team") },
              { time: sq(lang,"1–24 orë","1–24 hours"),label: sq(lang,"Analizë dhe vlerësim","Analysis and assessment"), desc: sq(lang,"Ekipi teknik vlerëson shtrirjen dhe natyrën e incidentit","Technical team assesses the scope and nature of the incident") },
              { time: sq(lang,"24–72 orë","24–72 hours"),label: sq(lang,"Njoftim i autoriteteve","Notification of authorities"), desc: sq(lang,"Raportohet te autoriteti mbikëqyrës (ADISA/DPA) si kërkon GDPR","Reported to supervisory authority (ADISA/DPA) as GDPR requires") },
              { time: sq(lang,"72 orë+","72 hours+"),   label: sq(lang,"Njoftim i përdoruesve","User notification"), desc: sq(lang,"Ju njoftoheni drejtpërdrejt nëse të dhënat tuaja janë prekur","You are directly notified if your data was affected") },
            ].map((step,i,arr) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i+1}</div>
                  {i < arr.length-1 && <div className="w-px flex-1 bg-indigo-100 my-1" />}
                </div>
                <div className="pb-8 pt-1">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{step.time}</span>
                  <p className="text-base font-bold text-gray-900 mt-2 mb-1">{step.label}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border border-indigo-100 bg-indigo-50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-2">
                  {sq(lang,"Kontaktoni DPO-n tonë","Contact our DPO")}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {sq(lang,
                    "Zyrtari ynë i Mbrojtjes së të Dhënave (DPO) trajton çdo pyetje ose ankesë lidhur me mbrojtjen e të dhënave tuaja. Keni të drejtë të paraqisni ankesë edhe te AIP (Agjencia për Informim dhe Privatësi e Kosovës) ose te autoriteti i vendit tuaj.",
                    "Our Data Protection Officer (DPO) handles any questions or complaints regarding the protection of your data. You also have the right to lodge a complaint with the Kosovo Agency for Information and Privacy (AIP) or your country's authority."
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">dpo@clientlly.com</span>
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/contact"
                  className="block w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-sm text-center">
                  {sq(lang,"Kontakto DPO","Contact DPO")}
                </Link>
                <Link href="/privacy-policy"
                  className="block w-full py-3 px-5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all text-sm text-center">
                  {sq(lang,"Lexo Politikën e Privatësisë","Read Privacy Policy")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
