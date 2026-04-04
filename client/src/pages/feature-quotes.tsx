import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-cyan-500",
  title: { sq: "Oferta & Kuota Elektronike", en: "Electronic Quotes & Offers" },
  tagline: { sq: "Dërgoni, gjurmoni dhe nënshkruani — pa letër", en: "Send, track and sign — paperless" },
  stat: { sq: "3× oferta të aprovuara", en: "3× faster quote approval" },
  description: {
    sq: "Krijoni oferta profesionale me shabllone të ndryshme dhe dërgojini direkt me email. Klienti e hap, e lexon dhe e nënshkruan direkt nga telefoni ose kompjuteri i tij. Ju shikoni çdo hap në kohë reale.",
    en: "Create professional quotes with different templates and send them directly by email. The client opens, reads and signs directly from their phone or computer. You see every step in real time.",
  },
  benefits: [
    { sq: "Dërgim elektronik me email — pa printer, pa letër", en: "Electronic delivery by email — no printer, no paper" },
    { sq: "Klienti nënshkruan direkt nga telefoni ose PC", en: "Client signs directly from phone or PC" },
    { sq: "Ju nënshkruani gjithashtu nga aplikacioni", en: "You also sign from the app" },
    { sq: "Gjurmim: dërguar → hapur → lexuar → nënshkruar", en: "Tracking: sent → opened → read → signed" },
    { sq: "Njoftim i menjëhershëm kur klienti e hap ofertën", en: "Instant alert when client opens the quote" },
    { sq: "Konvertim automatik Ofertë → Faturë pas aprovimit", en: "Auto conversion Quote → Invoice after approval" },
  ],
};

export default function FeatureQuotes() {
  return <FeatureDetail data={data} />;
}
