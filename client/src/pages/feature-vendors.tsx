import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureVendors() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations" },
    categoryColor: "bg-orange-500",
    title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management" },
    tagline: { sq: "Organizoni furnitorët dhe blerjet pa kaos", en: "Organize vendors and purchases without chaos" },
    stat: { sq: "20% ulje kostosh", en: "20% cost reduction" },
    description: {
      sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.",
      en: "Track vendors, purchase orders and their performance. Negotiate with real data and choose the best vendors.",
    },
    benefits: [
      { sq: "Katalog furnitorësh me rating dhe vlerësim", en: "Vendor catalog with rating and evaluation" },
      { sq: "Menaxhim porosish blerje (PO)", en: "Purchase order management (PO)" },
      { sq: "Krahasim çmimesh mes furnitorëve", en: "Price comparison between vendors" },
      { sq: "Historiku i blerjieve dhe pagesave", en: "Purchase and payment history" },
      { sq: "Alarme kontratash dhe afatesh", en: "Contract and deadline alerts" },
    ],
  }} />;
}
