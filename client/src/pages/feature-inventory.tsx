import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureInventory() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    categoryColor: "bg-teal-500",
    title: { sq: "Menaxhim Inventari", en: "Inventory Management", es: "Gestión de Inventario", de: "Bestandsverwaltung", mk: "Управување со Инвентар" },
    tagline: { sq: "Kontrolloni stokun, eliminoni humbjet", en: "Control stock, eliminate losses", es: "Controle el stock, elimine pérdidas", de: "Bestand kontrollieren, Verluste eliminieren", mk: "Контролирајте залиха, елиминирајте загуби" },
    stat: { sq: "35% ulje humbje stoku", en: "35% stock loss reduction", es: "35% reducción de pérdida de stock", de: "35% weniger Bestandsverlust", mk: "35% намалување на загуба на залиха" },
    description: {
      sq: "Gjurmoni stokun në kohë reale, merrni alarme kur produktet po mbarojnë dhe analizoni lëvizjet e inventarit me raporte të detajuara.",
      en: "Track stock in real time, receive alerts when products are running out and analyze inventory movements with detailed reports.",
      es: "Rastree el stock en tiempo real, reciba alertas cuando los productos se estén agotando y analice los movimientos de inventario con informes detallados.",
      de: "Verfolgen Sie den Bestand in Echtzeit, erhalten Sie Warnungen, wenn Produkte zur Neige gehen, und analysieren Sie Bestandsbewegungen mit detaillierten Berichten.",
      mk: "Следете ги залихите во реално време, добивајте аларми кога производите се при крај и анализирајте ги движењата на инвентарот со детални извештаи.",
    },
    benefits: [
      { sq: "Gjurmim stoku në kohë reale", en: "Real-time stock tracking", es: "Seguimiento de stock en tiempo real", de: "Echtzeit-Bestandsverfolgung", mk: "Следење на залихи во реално време" },
      { sq: "Alarme stoku minimal", en: "Minimum stock alerts", es: "Alertas de stock mínimo", de: "Mindestbestandswarnungen", mk: "Аларми за минимални залихи" },
      { sq: "Skaner barcodi për hyrje/dalje", en: "Barcode scanner for entries/exits", es: "Escáner de código de barras para entradas/salidas", de: "Barcode-Scanner für Ein-/Ausgänge", mk: "Скенер за баркод за влез/излез" },
      { sq: "Raporte lëvizjesh inventari", en: "Inventory movement reports", es: "Informes de movimientos de inventario", de: "Bestandsbewegungsberichte", mk: "Извештаи за движење на инвентар" },
      { sq: "Integrim me faturimin automatik", en: "Integration with automatic invoicing", es: "Integración con facturación automática", de: "Integration mit automatischer Rechnungsstellung", mk: "Интеграција со автоматско фактурирање" },
    ],
    workflow: [
      { step: "1", sq: "Regjistroni produktet me emër, kodin e barcodit, kategorinë dhe stokun fillestar", en: "Register products with name, barcode, category and initial stock", es: "Registre productos con nombre, código de barras, categoría y stock inicial", de: "Registrieren Sie Produkte mit Name, Barcode, Kategorie und Anfangsbestand", mk: "Регистрирајте производи со име, баркод, категорија и почетни залихи" },
      { step: "2", sq: "Skanoni barcodin me telefon për hyrje (pranime) ose dalje (shitje)", en: "Scan barcode with phone for entries (receipts) or exits (sales)", es: "Escanee el código de barras con el teléfono para entradas (recepciones) o salidas (ventas)", de: "Scannen Sie den Barcode mit dem Telefon für Eingänge (Empfang) oder Ausgänge (Verkauf)", mk: "Скенирајте баркод со телефон за влез (прием) или излез (продажба)" },
      { step: "3", sq: "Sistemi dërgon alarme kur stoku bie nën minimumin e caktuar", en: "System sends alerts when stock falls below the set minimum", es: "El sistema envía alertas cuando el stock cae por debajo del mínimo establecido", de: "System sendet Warnungen, wenn der Bestand unter das festgelegte Minimum fällt", mk: "Системот испраќа аларми кога залихите паѓаат под поставениот минимум" },
      { step: "4", sq: "Shikoni raportet e lëvizjeve: hyrje, dalje, bilanci dhe trendet", en: "View movement reports: entries, exits, balance and trends", es: "Vea informes de movimientos: entradas, salidas, saldo y tendencias", de: "Sehen Sie Bewegungsberichte: Eingänge, Ausgänge, Saldo und Trends", mk: "Прегледајте извештаи за движење: влезови, излези, салдо и трендови" },
    ],
    capabilities: [
      { icon: "📦", title: { sq: "Katalog Produktesh", en: "Product Catalog", es: "Catálogo de Productos", de: "Produktkatalog", mk: "Каталог на Производи" }, desc: { sq: "Listë e organizuar me emra, barcoda, kategori dhe foto", en: "Organized list with names, barcodes, categories and photos", es: "Lista organizada con nombres, códigos de barras, categorías y fotos", de: "Organisierte Liste mit Namen, Barcodes, Kategorien und Fotos", mk: "Организирана листа со имиња, баркодови, категории и фотографии" } },
      { icon: "📱", title: { sq: "Skaner Barcodi", en: "Barcode Scanner", es: "Escáner de Código de Barras", de: "Barcode-Scanner", mk: "Скенер за Баркод" }, desc: { sq: "Skanoni barcodin me kamerën e telefonit për hyrje/dalje të shpejtë", en: "Scan barcode with phone camera for quick entry/exit", es: "Escanee el código de barras con la cámara del teléfono para entrada/salida rápida", de: "Scannen Sie den Barcode mit der Telefonkamera für schnellen Ein-/Ausgang", mk: "Скенирајте баркод со камерата на телефонот за брз влез/излез" } },
      { icon: "🔔", title: { sq: "Alarme Stoku", en: "Stock Alerts", es: "Alertas de Stock", de: "Bestandswarnungen", mk: "Аларми за Залихи" }, desc: { sq: "Njoftimet vijnë kur produkti po mbaron — porositni përpara", en: "Notifications come when product is running out — order ahead", es: "Las notificaciones llegan cuando el producto se está agotando — ordene con anticipación", de: "Benachrichtigungen kommen, wenn das Produkt zur Neige geht — bestellen Sie im Voraus", mk: "Известувањата доаѓаат кога производот е при крај — нарачајте однапред" } },
      { icon: "📊", title: { sq: "Raporte Lëvizjesh", en: "Movement Reports", es: "Informes de Movimientos", de: "Bewegungsberichte", mk: "Извештаи за Движење" }, desc: { sq: "Shikoni hyrjet, daljet dhe bilancin e çdo produkti", en: "View entries, exits and balance of every product", es: "Vea entradas, salidas y saldo de cada producto", de: "Sehen Sie Eingänge, Ausgänge und Saldo jedes Produkts", mk: "Прегледајте влезови, излези и салдо на секој производ" } },
      { icon: "🔗", title: { sq: "Integrim Faturash", en: "Invoice Integration", es: "Integración de Facturas", de: "Rechnungsintegration", mk: "Интеграција со Фактури" }, desc: { sq: "Fatura lidhet direkt me stokun — kur shisni, stoku ulet vetë", en: "Invoice links directly with stock — when you sell, stock decreases automatically", es: "La factura se vincula directamente con el stock — cuando vende, el stock disminuye automáticamente", de: "Rechnung verknüpft sich direkt mit dem Bestand — wenn Sie verkaufen, sinkt der Bestand automatisch", mk: "Фактурата се поврзува директно со залихите — кога продавате, залихите се намалуваат автоматски" } },
      { icon: "📈", title: { sq: "Trende Stoku", en: "Stock Trends", es: "Tendencias de Stock", de: "Bestandstrends", mk: "Трендови на Залихи" }, desc: { sq: "Analizoni cilat produkte lëvizin më shumë dhe planifikoni blerjet", en: "Analyze which products move most and plan purchases", es: "Analice qué productos se mueven más y planifique las compras", de: "Analysieren Sie, welche Produkte sich am meisten bewegen, und planen Sie Einkäufe", mk: "Анализирајте кои производи се движат најмногу и планирајте набавки" } },
    ],
  }} />;
}
