import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureInvoicing() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance" },
    categoryColor: "bg-blue-500",
    title: { sq: "Faturim Profesional Elektronik", en: "Professional Electronic Invoicing" },
    tagline: { sq: "Dërgoni me email, gjurmoni hapjen, nënshkruani dixhitalisht", en: "Send by email, track opening, sign digitally" },
    stat: { sq: "40% pagesa më shpejt", en: "40% faster payments" },
    description: {
      sq: "Krijoni dhe dërgoni fatura me email me një klikim. Ju shikoni nëse klienti e ka hapur faturën ose jo, dhe klienti mund ta nënshkruajë direkt nga telefoni ose kompjuteri pa asnjë printer.",
      en: "Create and send invoices by email with one click. You can see whether the client has opened the invoice, and the client can sign it directly from their phone or computer without any printer.",
    },
    benefits: [
      { sq: "Dërgim fature me email — profesional dhe i menjëhershëm", en: "Invoice delivery by email — professional and immediate" },
      { sq: "Shiko nëse fatura është hapur nga klienti", en: "See if the invoice has been opened by the client" },
      { sq: "Nënshkrim dixhital i klientit (telefon ose PC)", en: "Client digital signature (phone or PC)" },
      { sq: "Nënshkrim nga ana e kompanisë suaj gjithashtu", en: "Signature from your company as well" },
      { sq: "Rikujtime automatike kur fatura nuk paguhet", en: "Automatic reminders when invoice is unpaid" },
      { sq: "Shabllone të ndryshme me markën tuaj", en: "Different templates with your brand" },
    ],
    workflow: [
      { step: "1", sq: "Zgjidhni shabllon fature dhe plotësoni artikujt, sasitë dhe çmimet", en: "Choose an invoice template and fill in items, quantities and prices" },
      { step: "2", sq: "Dërgoni faturën me email — klienti merr linkun për ta hapur", en: "Send the invoice by email — the client receives the link to open it" },
      { step: "3", sq: "Gjurmoni: kur hapet, sa herë lexohet, dhe statusin e pagesës", en: "Track: when it's opened, how many times read, and payment status" },
      { step: "4", sq: "Klienti nënshkruan dixhitalisht dhe ju merrni konfirmimin menjëherë", en: "Client signs digitally and you get confirmation immediately" },
      { step: "5", sq: "Rikujtime automatike dërgohen nëse fatura nuk paguhet brenda afatit", en: "Auto reminders sent if invoice is unpaid within the deadline" },
    ],
    capabilities: [
      { icon: "📧", title: { sq: "Dërgim me Email", en: "Email Delivery" }, desc: { sq: "Fatura dërgohet direkt me email — profesionale dhe e menjëhershme", en: "Invoice sent directly by email — professional and immediate" } },
      { icon: "👁️", title: { sq: "Gjurmim Hapjeje", en: "Open Tracking" }, desc: { sq: "Shikoni kur klienti e hap faturën dhe sa herë e lexon", en: "See when client opens the invoice and how many times they read it" } },
      { icon: "✍️", title: { sq: "Nënshkrim Dixhital", en: "Digital Signature" }, desc: { sq: "Nënshkrim ligjërisht i vlefshëm nga telefoni ose kompjuteri", en: "Legally valid signature from phone or computer" } },
      { icon: "🔔", title: { sq: "Rikujtime Automatike", en: "Auto Reminders" }, desc: { sq: "Sistemi dërgon rikujtime nëse fatura nuk paguhet brenda afatit", en: "System sends reminders if invoice is unpaid within deadline" } },
      { icon: "🎨", title: { sq: "Shabllone të Markës", en: "Branded Templates" }, desc: { sq: "Shabllone profesionale me logon, ngjyrat dhe stilin tuaj", en: "Professional templates with your logo, colors and style" } },
      { icon: "📊", title: { sq: "Raporte Faturash", en: "Invoice Reports" }, desc: { sq: "Statistika: paguar, në pritje, të vonuara — me grafikë dhe eksport", en: "Statistics: paid, pending, overdue — with charts and export" } },
    ],
  }} />;
}
