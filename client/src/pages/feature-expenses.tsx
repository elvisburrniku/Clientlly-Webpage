import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureExpenses() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance" },
    categoryColor: "bg-green-500",
    title: { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking" },
    tagline: { sq: "Organizoni shpenzimet, kurseni kohë dhe para", en: "Organize expenses, save time and money" },
    stat: { sq: "0 hyrje manuale mes bizneseve Clientlly", en: "0 manual entries between Clientlly businesses" },
    description: {
      sq: "Nëse shitësi përdor Clientlly, fatura e tij regjistrohet direkt si shpenzim për ju — pa asnjë hyrje manuale. Thjesht aprovoni dhe sistemi e bën vetë. Për blerjet e tjera, skanoni faturën me kamerë.",
      en: "If the vendor uses Clientlly, their invoice is recorded directly as an expense for you — without any manual entry. Just approve and the system does the rest. For other purchases, scan the invoice with camera.",
    },
    benefits: [
      { sq: "Fatura e shitësit Clientlly → shpenzim automatik për ju", en: "Clientlly vendor invoice → automatic expense for you" },
      { sq: "Pa hyrje manuale — thjesht aprovoni me 1 klikim", en: "No manual entry — just approve with 1 click" },
      { sq: "Skanim automatik i faturave me kamerë (të tjerët)", en: "Automatic invoice scanning with camera (others)" },
      { sq: "Kategorizim inteligjent i shpenzimeve", en: "Intelligent expense categorization" },
      { sq: "Raporte të gatshme për taksën", en: "Tax-ready reports" },
      { sq: "Buxhet, alarme tejkalimi dhe lidhje me flotën", en: "Budget, overage alerts and fleet integration" },
    ],
  }} />;
}
