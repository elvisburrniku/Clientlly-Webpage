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
    workflow: [
      { step: "1", sq: "Regjistroni furnitorin: emrin, kontaktin, produktet dhe kushtet", en: "Register the vendor: name, contact, products and terms" },
      { step: "2", sq: "Krijoni porosi blerje (PO) me artikujt, sasitë dhe çmimet", en: "Create a purchase order (PO) with items, quantities and prices" },
      { step: "3", sq: "Krahasoni çmimet mes furnitorëve para porosisë", en: "Compare prices between vendors before ordering" },
      { step: "4", sq: "Gjurmoni dërgesën, aprovoni pranimin dhe regjistroni pagesën", en: "Track delivery, approve receipt and record payment" },
    ],
    capabilities: [
      { icon: "📒", title: { sq: "Katalog Furnitorësh", en: "Vendor Catalog" }, desc: { sq: "Listë e organizuar e furnitorëve me rating, kontakte dhe kushte", en: "Organized vendor list with rating, contacts and terms" } },
      { icon: "📦", title: { sq: "Porosi Blerje (PO)", en: "Purchase Orders (PO)" }, desc: { sq: "Krijoni dhe gjurmoni porosite e blerjes me status real-time", en: "Create and track purchase orders with real-time status" } },
      { icon: "⚖️", title: { sq: "Krahasim Çmimesh", en: "Price Comparison" }, desc: { sq: "Krahasoni çmimet e furnitorëve për të njëjtin produkt", en: "Compare vendor prices for the same product" } },
      { icon: "⭐", title: { sq: "Rating Furnitori", en: "Vendor Rating" }, desc: { sq: "Vlerësoni furnitorët sipas cilësisë, afatit dhe çmimit", en: "Evaluate vendors by quality, deadline and price" } },
      { icon: "📋", title: { sq: "Historik Blerjesh", en: "Purchase History" }, desc: { sq: "Historiku i plotë i çdo blerje, pagese dhe dërgese", en: "Complete history of every purchase, payment and delivery" } },
      { icon: "🔔", title: { sq: "Alarme Kontratash", en: "Contract Alerts" }, desc: { sq: "Merrni njoftimet para skadimit të kontratave me furnitorë", en: "Receive notifications before vendor contracts expire" } },
    ],
  }} />;
}
