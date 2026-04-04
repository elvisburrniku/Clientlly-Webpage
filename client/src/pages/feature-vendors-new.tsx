import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
  categoryColor: "bg-orange-500",
  title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de Proveedores", de: "Lieferantenverwaltung", mk: "Управување со Добавувачи" },
  tagline: { sq: "Organizoni furnitorët dhe blerjet pa kaos", en: "Organise vendors and purchases without chaos", es: "Organice proveedores y compras sin caos", de: "Organisieren Sie Lieferanten und Einkäufe ohne Chaos", mk: "Организирајте добавувачи и набавки без хаос" },
  stat: { sq: "20% ulje kostosh", en: "20% cost reduction", es: "20% reducción de costos", de: "20% Kostenreduzierung", mk: "20% намалување на трошоци" },
  description: {
    sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.",
    en: "Track vendors, purchase orders and their performance. Negotiate with real data and choose the best suppliers.",
    es: "Rastree proveedores, órdenes de compra y su rendimiento. Negocie con datos reales y elija los mejores proveedores.",
    de: "Verfolgen Sie Lieferanten, Bestellungen und deren Leistung. Verhandeln Sie mit realen Daten und wählen Sie die besten Lieferanten.",
    mk: "Следете добавувачи, нарачки за набавка и нивните перформанси. Преговарајте со реални податоци и изберете ги најдобрите добавувачи.",
  },
  benefits: [
    { sq: "Katalog furnitorësh me rating dhe vlerësim", en: "Vendor catalogue with rating and evaluation", es: "Catálogo de proveedores con calificación y evaluación", de: "Lieferantenkatalog mit Bewertung und Evaluation", mk: "Каталог на добавувачи со оценка и евалуација" },
    { sq: "Menaxhim porosish blerje (PO)", en: "Purchase order management (PO)", es: "Gestión de órdenes de compra (PO)", de: "Bestellungsverwaltung (PO)", mk: "Управување со нарачки за набавка (PO)" },
    { sq: "Krahasim çmimesh mes furnitorëve", en: "Price comparison between vendors", es: "Comparación de precios entre proveedores", de: "Preisvergleich zwischen Lieferanten", mk: "Споредба на цени меѓу добавувачи" },
    { sq: "Historiku i blerjieve dhe pagesave", en: "Purchase and payment history", es: "Historial de compras y pagos", de: "Einkaufs- und Zahlungshistorie", mk: "Историја на набавки и плаќања" },
    { sq: "Alarme kontratash dhe afatesh", en: "Contract and deadline alerts", es: "Alertas de contratos y plazos", de: "Vertrags- und Fristwarnungen", mk: "Аларми за договори и рокови" },
  ],
};

export default function FeatureVendorsNew() {
  return <FeatureDetail data={data} />;
}
