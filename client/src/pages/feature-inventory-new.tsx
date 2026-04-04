import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Operacione", en: "Operations" },
  categoryColor: "bg-teal-500",
  title: { sq: "Menaxhim Inventari", en: "Inventory Management" },
  tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control stock, eliminate losses" },
  stat: { sq: "35% ulje humbje stoku", en: "35% less stock loss" },
  description: {
    sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
    en: "Track stock in real time, receive alerts when products are running out and analyse inventory movements with detailed reports.",
  },
  benefits: [
    { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking" },
    { sq: "Alarme stoku minimal", en: "Minimum stock alerts" },
    { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for in/out" },
    { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports" },
    { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing" },
  ],
};

export default function FeatureInventoryNew() {
  return <FeatureDetail data={data} />;
}
