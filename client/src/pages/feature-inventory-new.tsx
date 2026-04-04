import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
  categoryColor: "bg-teal-500",
  title: { sq: "Menaxhim Inventari", en: "Inventory Management", es: "Gestión de Inventario", de: "Bestandsverwaltung", mk: "Управување со Инвентар" },
  tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control stock, eliminate losses", es: "Controle el stock, elimine pérdidas", de: "Bestand kontrollieren, Verluste eliminieren", mk: "Контролирајте залиха, елиминирајте загуби" },
  stat: { sq: "35% ulje humbje stoku", en: "35% less stock loss", es: "35% menos pérdida de stock", de: "35% weniger Bestandsverlust", mk: "35% помалку загуба на залихи" },
  description: {
    sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
    en: "Track stock in real time, receive alerts when products are running out and analyse inventory movements with detailed reports.",
    es: "Rastree el stock en tiempo real, reciba alertas cuando los productos se estén agotando y analice los movimientos de inventario con informes detallados.",
    de: "Verfolgen Sie den Bestand in Echtzeit, erhalten Sie Warnungen, wenn Produkte zur Neige gehen, und analysieren Sie Bestandsbewegungen mit detaillierten Berichten.",
    mk: "Следете ги залихите во реално време, добивајте аларми кога производите се при крај и анализирајте ги движењата на инвентарот со детални извештаи.",
  },
  benefits: [
    { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking", es: "Seguimiento de stock en tiempo real", de: "Echtzeit-Bestandsverfolgung", mk: "Следење на залихи во реално време" },
    { sq: "Alarme stoku minimal", en: "Minimum stock alerts", es: "Alertas de stock mínimo", de: "Mindestbestandswarnungen", mk: "Аларми за минимални залихи" },
    { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for in/out", es: "Escáner de código de barras para entrada/salida", de: "Barcode-Scanner für Ein-/Ausgang", mk: "Скенер за баркод за влез/излез" },
    { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports", es: "Informes de movimientos de inventario", de: "Bestandsbewegungsberichte", mk: "Извештаи за движење на инвентар" },
    { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing", es: "Integración con facturación automática", de: "Integration mit automatischer Rechnungsstellung", mk: "Интеграција со автоматско фактурирање" },
  ],
};

export default function FeatureInventoryNew() {
  return <FeatureDetail data={data} />;
}
