import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
  categoryColor: "bg-emerald-500",
  title: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking", es: "Seguimiento de Gastos", de: "Ausgabenverfolgung", mk: "Следење на Трошоци" },
  tagline: { sq: "Organizoni shpenzimet, kurseni kohë dhe para", en: "Organise expenses, save time and money", es: "Organice gastos, ahorre tiempo y dinero", de: "Ausgaben organisieren, Zeit und Geld sparen", mk: "Организирајте трошоци, заштедете време и пари" },
  stat: { sq: "0 hyrje manuale mes bizneseve Clientlly", en: "0 manual entries between Clientlly businesses", es: "0 entradas manuales entre negocios Clientlly", de: "0 manuelle Eingaben zwischen Clientlly-Unternehmen", mk: "0 рачни внесувања меѓу Clientlly бизниси" },
  description: {
    sq: "Nëse shitësi përdor Clientlly, fatura e tij regjistrohet direkt si shpenzim për ju — pa asnjë hyrje manuale. Thjesht aprovoni dhe sistemi e bën vetë. Për blerjet e tjera, skanoni faturën me kamerë.",
    en: "If the seller uses Clientlly, their invoice is recorded directly as an expense for you — without any manual entry. Simply approve and the system does it itself. For other purchases, scan the receipt with camera.",
    es: "Si el vendedor usa Clientlly, su factura se registra directamente como gasto para usted — sin ninguna entrada manual. Simplemente apruebe y el sistema lo hace solo. Para otras compras, escanee el recibo con la cámara.",
    de: "Wenn der Verkäufer Clientlly verwendet, wird seine Rechnung direkt als Ausgabe für Sie erfasst — ohne manuelle Eingabe. Einfach genehmigen und das System erledigt es selbst. Für andere Einkäufe scannen Sie den Beleg mit der Kamera.",
    mk: "Ако продавачот користи Clientlly, неговата фактура се евидентира директно како трошок за вас — без рачно внесување. Едноставно одобрете и системот го прави сам. За други набавки, скенирајте ја сметката со камера.",
  },
  benefits: [
    { sq: "Fatura e shitësit Clientlly → shpenzim automatik për ju", en: "Clientlly seller invoice → automatic expense for you", es: "Factura del vendedor Clientlly → gasto automático para usted", de: "Clientlly-Verkäuferrechnung → automatische Ausgabe für Sie", mk: "Фактура од Clientlly продавач → автоматски трошок за вас" },
    { sq: "Pa hyrje manuale — thjesht aprovoni me 1 klikim", en: "No manual entry — just approve with 1 click", es: "Sin entrada manual — solo apruebe con 1 clic", de: "Keine manuelle Eingabe — einfach mit 1 Klick genehmigen", mk: "Без рачно внесување — само одобрете со 1 клик" },
    { sq: "Skanim automatik i faturave me kamerë (të tjerët)", en: "Automatic receipt scanning with camera (others)", es: "Escaneo automático de recibos con cámara (otros)", de: "Automatisches Belege-Scannen mit Kamera (andere)", mk: "Автоматско скенирање на сметки со камера (други)" },
    { sq: "Kategorizim inteligjent i shpenzimeve", en: "Intelligent expense categorisation", es: "Categorización inteligente de gastos", de: "Intelligente Ausgabenkategorisierung", mk: "Интелигентна категоризација на трошоци" },
    { sq: "Raporte të gatshme për taksën", en: "Ready-made reports for tax", es: "Informes preparados para impuestos", de: "Fertige Berichte für Steuern", mk: "Готови извештаи за данок" },
    { sq: "Buxhet, alarme tejkalimi dhe lidhje me flotën", en: "Budget, overspend alerts and fleet connection", es: "Presupuesto, alertas de exceso y conexión de flota", de: "Budget, Überschreitungswarnungen und Flottenverbindung", mk: "Буџет, аларми за прекорачување и поврзување со флота" },
  ],
};

export default function FeatureExpensesNew() {
  return <FeatureDetail data={data} />;
}
