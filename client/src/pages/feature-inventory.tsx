import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureInventory() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations" },
    categoryColor: "bg-teal-500",
    title: { sq: "Menaxhim Inventari", en: "Inventory Management" },
    tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control stock, eliminate losses" },
    stat: { sq: "35% ulje humbje stoku", en: "35% stock loss reduction" },
    description: {
      sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
      en: "Track stock in real time, receive alerts when products are running out and analyze inventory movements with detailed reports.",
    },
    benefits: [
      { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking" },
      { sq: "Alarme stoku minimal", en: "Minimum stock alerts" },
      { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for entries/exits" },
      { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports" },
      { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing" },
    ],
    workflow: [
      { step: "1", sq: "Regjistroni produktet me emër, kodin e barcodit, kategorinë dhe stokun fillestar", en: "Register products with name, barcode, category and initial stock" },
      { step: "2", sq: "Skanoni barcodin me telefon për hyrje (pranime) ose dalje (shitje)", en: "Scan barcode with phone for entries (receipts) or exits (sales)" },
      { step: "3", sq: "Sistemi dërgon alarme kur stoku bie nën minimumin e caktuar", en: "System sends alerts when stock falls below the set minimum" },
      { step: "4", sq: "Shikoni raportet e lëvizjeve: hyrje, dalje, bilanci dhe trendet", en: "View movement reports: entries, exits, balance and trends" },
    ],
    capabilities: [
      { icon: "📦", title: { sq: "Katalog Produktesh", en: "Product Catalog" }, desc: { sq: "Listë e organizuar me emra, barcoda, kategori dhe foto", en: "Organized list with names, barcodes, categories and photos" } },
      { icon: "📱", title: { sq: "Skaner Barcodi", en: "Barcode Scanner" }, desc: { sq: "Skanoni barcodin me kamerën e telefonit për hyrje/dalje të shpejtë", en: "Scan barcode with phone camera for quick entry/exit" } },
      { icon: "🔔", title: { sq: "Alarme Stoku", en: "Stock Alerts" }, desc: { sq: "Njoftimet vijnë kur produkti po mbaron — porositni përpara", en: "Notifications come when product is running out — order ahead" } },
      { icon: "📊", title: { sq: "Raporte Lëvizjesh", en: "Movement Reports" }, desc: { sq: "Shikoni hyrjet, daljet dhe bilancin e çdo produkti", en: "View entries, exits and balance of every product" } },
      { icon: "🔗", title: { sq: "Integrim Faturash", en: "Invoice Integration" }, desc: { sq: "Fatura lidhet direkt me stokun — kur shisni, stoku ulet vetë", en: "Invoice links directly with stock — when you sell, stock decreases automatically" } },
      { icon: "📈", title: { sq: "Trende Stoku", en: "Stock Trends" }, desc: { sq: "Analizoni cilat produkte lëvizin më shumë dhe planifikoni blerjet", en: "Analyze which products move most and plan purchases" } },
    ],
  }} />;
}
