import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-blue-500",
  title: { sq: "Faturim Profesional Elektronik", en: "Professional Electronic Invoicing" },
  tagline: { sq: "Dërgoni me email, gjurmoni hapjen, nënshkruani dixhitalisht", en: "Send by email, track the opening, sign digitally" },
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
};

export default function FeatureInvoicingNew() {
  return <FeatureDetail data={data} />;
}
