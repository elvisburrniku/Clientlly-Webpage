import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureMaintenance() {
  return <FeatureDetail data={{
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
    workflow: [
      { step: "1", sq: "Krijoni planin e servisimit: ndërrim vaji çdo 10,000 km, goma çdo 40,000 km", en: "Create the service plan: oil change every 10,000 km, tyres every 40,000 km" },
      { step: "2", sq: "Sistemi gjurmon km-të dhe dërgon alarme kur afrohet servisi", en: "System tracks km and sends alerts when service approaches" },
      { step: "3", sq: "Regjistroni riparimin: lloji, kosto, servisi, data, çfarë u bë", en: "Record the repair: type, cost, service provider, date, what was done" },
      { step: "4", sq: "Shpenzimet e mirëmbajtjes lidhen automatikisht me shpenzimet e kompanisë", en: "Maintenance expenses link automatically with company expenses" },
    ],
    capabilities: [
      { icon: "🔧", title: { sq: "Plan Servisimi", en: "Service Plan" }, desc: { sq: "Caktoni intervale sipas km ose muajve për çdo lloj shërbimi", en: "Set intervals by km or months for every type of service" } },
      { icon: "🔔", title: { sq: "Alarme Automatike", en: "Auto Alerts" }, desc: { sq: "Njoftimet vijnë kur afrohet koha e servisimit bazuar në km ose datë", en: "Notifications come when service time approaches based on km or date" } },
      { icon: "🛞", title: { sq: "Ndërrim Gomash", en: "Tyre Changes" }, desc: { sq: "Gjurmoni sezonen, km e gomave dhe kur duhet ndërruar", en: "Track season, tyre km and when replacement is needed" } },
      { icon: "📋", title: { sq: "Kontroll Teknik", en: "Technical Inspection" }, desc: { sq: "Regjistroni datat e inspektimit dhe alarme para skadencës", en: "Record inspection dates and alerts before expiry" } },
      { icon: "💶", title: { sq: "Kosto Mirëmbajtje", en: "Maintenance Costs" }, desc: { sq: "Çdo kosto regjistrohet dhe lidhet me shpenzimet totale të flotës", en: "Every cost recorded and linked with total fleet expenses" } },
      { icon: "📊", title: { sq: "Historik Servisimi", en: "Service History" }, desc: { sq: "Historiku i plotë i çdo riparimi, ndërrimi dhe kontrolli", en: "Complete history of every repair, replacement and inspection" } },
    ],
  }} />;
}
