import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Klientë", en: "Clients" },
  categoryColor: "bg-indigo-500",
  title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)" },
  tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client" },
  stat: { sq: "+30% mbajtje klientësh", en: "+30% client retention" },
  description: {
    sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, ofertat, korespondencën dhe shënimet. Asnjë detaj nuk humb.",
    en: "Keep the complete history of every client — orders, payments, quotes, correspondence and notes. No detail is lost.",
  },
  benefits: [
    { sq: "Profil i plotë 360° i çdo klienti", en: "Complete 360° profile of every client" },
    { sq: "Historiku i porosive, ofertave dhe pagesave", en: "History of orders, quotes and payments" },
    { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders" },
    { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value" },
    { sq: "Lidhje direkte me kalendarin e takimeve", en: "Direct link with meeting calendar" },
  ],
};

export default function FeatureClientsNew() {
  return <FeatureDetail data={data} />;
}
