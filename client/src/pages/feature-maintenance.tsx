import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Flotë", en: "Fleet" },
  categoryColor: "bg-rose-500",
  title: { sq: "Mirëmbajtje & Servisimet", en: "Maintenance & Service" },
  tagline: { sq: "Asnjë servisim nuk harrohet, asnjë kosto nuk fshihet", en: "No service is forgotten, no cost is hidden" },
  stat: { sq: "60% ulje dështimesh", en: "60% fewer breakdowns" },
  description: {
    sq: "Planifikoni dhe gjurmoni çdo servisim, ndërrimin e gomave, kontrollin teknik dhe çdo riparim. Merrni alarme automatike bazuar në km ose datë. Të gjitha kostot regjistrohen direkt në shpenzimet e kompanisë.",
    en: "Plan and track every service, tyre change, technical inspection and any repair. Receive automatic alerts based on km or date. All costs are recorded directly in company expenses.",
  },
  benefits: [
    { sq: "Plani i servisimeve sipas km ose datës", en: "Service plan based on km or date" },
    { sq: "Alarme automatike: ndërrimi gomave, vaj, filtra", en: "Automatic alerts: tyre change, oil, filters" },
    { sq: "Regjistrim i çdo riparimi me kosto", en: "Registration of every repair with cost" },
    { sq: "Kontroll teknik dhe afate inspektimi", en: "Technical inspection and inspection deadlines" },
    { sq: "Lidhje direkte me shpenzimet e kompanisë", en: "Direct connection with company expenses" },
    { sq: "Raporte kosto mirëmbajtjeje për çdo automjet", en: "Maintenance cost reports for each vehicle" },
  ],
};

export default function FeatureMaintenance() {
  return <FeatureDetail data={data} />;
}
