import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureVendors() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    categoryColor: "bg-orange-500",
    title: { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de Proveedores", de: "Lieferantenverwaltung", mk: "Управување со Добавувачи" },
    tagline: { sq: "Organizoni furnitorët dhe blerjet pa kaos", en: "Organize vendors and purchases without chaos", es: "Organice proveedores y compras sin caos", de: "Organisieren Sie Lieferanten und Einkäufe ohne Chaos", mk: "Организирајте добавувачи и набавки без хаос" },
    stat: { sq: "20% ulje kostosh", en: "20% cost reduction", es: "20% reducción de costos", de: "20% Kostenreduzierung", mk: "20% намалување на трошоци" },
    description: {
      sq: "Gjurmoni furnitorët, porositë e blerjes dhe performancën e tyre. Negocioni me të dhëna reale dhe zgjidhni furnitorët më të mirë.",
      en: "Track vendors, purchase orders and their performance. Negotiate with real data and choose the best vendors.",
      es: "Rastree proveedores, órdenes de compra y su rendimiento. Negocie con datos reales y elija los mejores proveedores.",
      de: "Verfolgen Sie Lieferanten, Bestellungen und deren Leistung. Verhandeln Sie mit realen Daten und wählen Sie die besten Lieferanten.",
      mk: "Следете добавувачи, нарачки за набавка и нивните перформанси. Преговарајте со реални податоци и изберете ги најдобрите добавувачи.",
    },
    benefits: [
      { sq: "Katalog furnitorësh me rating dhe vlerësim", en: "Vendor catalog with rating and evaluation", es: "Catálogo de proveedores con calificación y evaluación", de: "Lieferantenkatalog mit Bewertung und Evaluation", mk: "Каталог на добавувачи со оценка и евалуација" },
      { sq: "Menaxhim porosish blerje (PO)", en: "Purchase order management (PO)", es: "Gestión de órdenes de compra (PO)", de: "Bestellungsverwaltung (PO)", mk: "Управување со нарачки за набавка (PO)" },
      { sq: "Krahasim çmimesh mes furnitorëve", en: "Price comparison between vendors", es: "Comparación de precios entre proveedores", de: "Preisvergleich zwischen Lieferanten", mk: "Споредба на цени меѓу добавувачи" },
      { sq: "Historiku i blerjieve dhe pagesave", en: "Purchase and payment history", es: "Historial de compras y pagos", de: "Einkaufs- und Zahlungshistorie", mk: "Историја на набавки и плаќања" },
      { sq: "Alarme kontratash dhe afatesh", en: "Contract and deadline alerts", es: "Alertas de contratos y plazos", de: "Vertrags- und Fristwarnungen", mk: "Аларми за договори и рокови" },
    ],
    workflow: [
      { step: "1", sq: "Regjistroni furnitorin: emrin, kontaktin, produktet dhe kushtet", en: "Register the vendor: name, contact, products and terms", es: "Registre al proveedor: nombre, contacto, productos y condiciones", de: "Registrieren Sie den Lieferanten: Name, Kontakt, Produkte und Konditionen", mk: "Регистрирајте го добавувачот: име, контакт, производи и услови" },
      { step: "2", sq: "Krijoni porosi blerje (PO) me artikujt, sasitë dhe çmimet", en: "Create a purchase order (PO) with items, quantities and prices", es: "Cree una orden de compra (PO) con artículos, cantidades y precios", de: "Erstellen Sie eine Bestellung (PO) mit Artikeln, Mengen und Preisen", mk: "Креирајте нарачка за набавка (PO) со артикли, количини и цени" },
      { step: "3", sq: "Krahasoni çmimet mes furnitorëve para porosisë", en: "Compare prices between vendors before ordering", es: "Compare precios entre proveedores antes de ordenar", de: "Vergleichen Sie Preise zwischen Lieferanten vor der Bestellung", mk: "Споредете цени меѓу добавувачи пред нарачка" },
      { step: "4", sq: "Gjurmoni dërgesën, aprovoni pranimin dhe regjistroni pagesën", en: "Track delivery, approve receipt and record payment", es: "Rastree la entrega, apruebe la recepción y registre el pago", de: "Verfolgen Sie die Lieferung, genehmigen Sie den Empfang und erfassen Sie die Zahlung", mk: "Следете ја испораката, одобрете го приемот и евидентирајте го плаќањето" },
    ],
    capabilities: [
      { icon: "📒", title: { sq: "Katalog Furnitorësh", en: "Vendor Catalog", es: "Catálogo de Proveedores", de: "Lieferantenkatalog", mk: "Каталог на Добавувачи" }, desc: { sq: "Listë e organizuar e furnitorëve me rating, kontakte dhe kushte", en: "Organized vendor list with rating, contacts and terms", es: "Lista organizada de proveedores con calificación, contactos y condiciones", de: "Organisierte Lieferantenliste mit Bewertung, Kontakten und Konditionen", mk: "Организирана листа на добавувачи со оценка, контакти и услови" } },
      { icon: "📦", title: { sq: "Porosi Blerje (PO)", en: "Purchase Orders (PO)", es: "Órdenes de Compra (PO)", de: "Bestellungen (PO)", mk: "Нарачки за Набавка (PO)" }, desc: { sq: "Krijoni dhe gjurmoni porosite e blerjes me status real-time", en: "Create and track purchase orders with real-time status", es: "Cree y rastree órdenes de compra con estado en tiempo real", de: "Erstellen und verfolgen Sie Bestellungen mit Echtzeit-Status", mk: "Креирајте и следете нарачки за набавка со статус во реално време" } },
      { icon: "⚖️", title: { sq: "Krahasim Çmimesh", en: "Price Comparison", es: "Comparación de Precios", de: "Preisvergleich", mk: "Споредба на Цени" }, desc: { sq: "Krahasoni çmimet e furnitorëve për të njëjtin produkt", en: "Compare vendor prices for the same product", es: "Compare precios de proveedores para el mismo producto", de: "Vergleichen Sie Lieferantenpreise für dasselbe Produkt", mk: "Споредете цени на добавувачи за ист производ" } },
      { icon: "⭐", title: { sq: "Rating Furnitori", en: "Vendor Rating", es: "Calificación de Proveedores", de: "Lieferantenbewertung", mk: "Оценка на Добавувачи" }, desc: { sq: "Vlerësoni furnitorët sipas cilësisë, afatit dhe çmimit", en: "Evaluate vendors by quality, deadline and price", es: "Evalúe proveedores por calidad, plazo y precio", de: "Bewerten Sie Lieferanten nach Qualität, Frist und Preis", mk: "Оценете добавувачи по квалитет, рок и цена" } },
      { icon: "📋", title: { sq: "Historik Blerjesh", en: "Purchase History", es: "Historial de Compras", de: "Einkaufshistorie", mk: "Историја на Набавки" }, desc: { sq: "Historiku i plotë i çdo blerje, pagese dhe dërgese", en: "Complete history of every purchase, payment and delivery", es: "Historial completo de cada compra, pago y entrega", de: "Vollständige Historie jedes Einkaufs, jeder Zahlung und Lieferung", mk: "Целосна историја на секоја набавка, плаќање и испорака" } },
      { icon: "🔔", title: { sq: "Alarme Kontratash", en: "Contract Alerts", es: "Alertas de Contratos", de: "Vertragswarnungen", mk: "Аларми за Договори" }, desc: { sq: "Merrni njoftimet para skadimit të kontratave me furnitorë", en: "Receive notifications before vendor contracts expire", es: "Reciba notificaciones antes de que expiren los contratos con proveedores", de: "Erhalten Sie Benachrichtigungen bevor Lieferantenverträge ablaufen", mk: "Добивајте известувања пред истекување на договорите со добавувачи" } },
    ],
  }} />;
}
