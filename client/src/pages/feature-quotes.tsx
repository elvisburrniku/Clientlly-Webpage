import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-cyan-500",
  title: { sq: "Oferta & Kuota Elektronike", en: "Electronic Quotes & Offers" },
  tagline: { sq: "Dërgoni, gjurmoni dhe nënshkruani — pa letër", en: "Send, track and sign — paperless" },
  stat: { sq: "3× oferta të aprovuara", en: "3× faster quote approval" },
  description: {
    sq: "Krijoni oferta profesionale me shabllone të ndryshme dhe dërgojini direkt me email. Klienti e hap, e lexon dhe e nënshkruan direkt nga telefoni ose kompjuteri i tij. Ju shikoni çdo hap në kohë reale — nga momenti i dërgimit deri te nënshkrimi final.",
    en: "Create professional quotes with different templates and send them directly by email. The client opens, reads and signs directly from their phone or computer. You see every step in real time — from the moment of sending to the final signature.",
  },
  benefits: [
    { sq: "Dërgim elektronik me email — pa printer, pa letër", en: "Electronic delivery by email — no printer, no paper" },
    { sq: "Klienti nënshkruan direkt nga telefoni ose PC", en: "Client signs directly from phone or PC" },
    { sq: "Ju nënshkruani gjithashtu nga aplikacioni", en: "You also sign from the app" },
    { sq: "Gjurmim: dërguar → hapur → lexuar → nënshkruar", en: "Tracking: sent → opened → read → signed" },
    { sq: "Njoftim i menjëhershëm kur klienti e hap ofertën", en: "Instant alert when client opens the quote" },
    { sq: "Konvertim automatik Ofertë → Faturë pas aprovimit", en: "Auto conversion Quote → Invoice after approval" },
  ],
  workflow: [
    { step: "1", sq: "Zgjidhni shabllon oferte dhe plotësoni artikujt, çmimet dhe kushtet", en: "Choose a quote template and fill in items, prices and terms" },
    { step: "2", sq: "Dërgoni ofertën me email direkt nga Clientlly — klienti merr linkun", en: "Send the quote by email directly from Clientlly — the client receives the link" },
    { step: "3", sq: "Gjurmoni në kohë reale: kur hapet, sa herë lexohet, dhe kur nënshkruhet", en: "Track in real time: when it's opened, how many times it's read, and when it's signed" },
    { step: "4", sq: "Klienti nënshkruan dixhitalisht nga telefoni ose kompjuteri — pa printer", en: "Client signs digitally from phone or computer — no printer needed" },
    { step: "5", sq: "Oferta e aprovuar konvertohet automatikisht në faturë — pa rishkrim manual", en: "Approved quote automatically converts to invoice — no manual rewriting" },
  ],
  capabilities: [
    { icon: "📄", title: { sq: "Shabllone Profesionale", en: "Professional Templates" }, desc: { sq: "Shabllone të gatshme me logon dhe markën tuaj. Personalizoni ngjyrat, fontet dhe strukturën", en: "Ready templates with your logo and brand. Customize colors, fonts and structure" } },
    { icon: "✍️", title: { sq: "Nënshkrim Dixhital", en: "Digital Signature" }, desc: { sq: "Klienti dhe ju nënshkruani nga çdo pajisje — ligjërisht e vlefshme dhe e sigurt", en: "Client and you sign from any device — legally valid and secure" } },
    { icon: "👁️", title: { sq: "Gjurmim i Plotë", en: "Full Tracking" }, desc: { sq: "Shikoni kur oferta hapet, lexohet dhe nënshkruhet — me data dhe orare të sakta", en: "See when the quote is opened, read and signed — with exact dates and times" } },
    { icon: "🔔", title: { sq: "Njoftime Automatike", en: "Auto Notifications" }, desc: { sq: "Merrni njoftim menjëherë kur klienti e hap ose e nënshkruan ofertën tuaj", en: "Get notified immediately when the client opens or signs your quote" } },
    { icon: "🔄", title: { sq: "Konvertim në Faturë", en: "Invoice Conversion" }, desc: { sq: "Me një klikim, oferta e aprovuar bëhet faturë — pa rishkrim të dhënash", en: "With one click, the approved quote becomes an invoice — no data re-entry" } },
    { icon: "📊", title: { sq: "Raporte Ofertash", en: "Quote Reports" }, desc: { sq: "Statistika të ofertave: sa janë dërguar, aprovuar, refuzuar dhe në pritje", en: "Quote statistics: how many sent, approved, rejected and pending" } },
  ],
};

export default function FeatureQuotes() {
  return <FeatureDetail data={data} />;
}
