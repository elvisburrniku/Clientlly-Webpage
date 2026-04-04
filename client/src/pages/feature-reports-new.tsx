import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-violet-500",
  title: { sq: "Raporte & Analitikë", en: "Insights & Reports" },
  tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make the right decisions based on real data" },
  stat: { sq: "2× vendime më të mira", en: "2× better decisions" },
  description: {
    sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale.",
    en: "The analytics dashboard gives you a complete view — sales, expenses, cash flow, team attendance and fleet service — all in real time.",
  },
  benefits: [
    { sq: "Panel analitike interaktive me grafikë", en: "Interactive analytics dashboard with charts" },
    { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports" },
    { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)" },
    { sq: "Parashikime financiare me AI", en: "AI-powered financial forecasts" },
    { sq: "Raporte prezence, flotë dhe shitjesh", en: "Attendance, fleet and sales reports" },
    { sq: "Eksport PDF/Excel me klikim", en: "PDF/Excel export with one click" },
  ],
};

export default function FeatureReportsNew() {
  return <FeatureDetail data={data} />;
}
