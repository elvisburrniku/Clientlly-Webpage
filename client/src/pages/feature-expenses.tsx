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
    workflow: [
      { step: "1", sq: "Shitësi Clientlly ju dërgon faturën — ajo shfaqet automatikisht te shpenzimet tuaja", en: "Clientlly vendor sends you an invoice — it appears automatically in your expenses" },
      { step: "2", sq: "Aprovoni shpenzimin me një klikim — sistemi e kategorizon vetë", en: "Approve the expense with one click — the system categorizes it automatically" },
      { step: "3", sq: "Për blerje jashtë Clientlly, skanoni faturën me kamerë ose ngarkoni PDF", en: "For purchases outside Clientlly, scan the invoice with camera or upload PDF" },
      { step: "4", sq: "Shikoni raportet mujore me kategorit, buxhetin dhe alarmet", en: "View monthly reports with categories, budget and alerts" },
    ],
    capabilities: [
      { icon: "🔄", title: { sq: "Integrim Automatik", en: "Auto Integration" }, desc: { sq: "Faturat nga biznese Clientlly regjistrohen automatikisht si shpenzime", en: "Invoices from Clientlly businesses auto-recorded as expenses" } },
      { icon: "📸", title: { sq: "Skanim me Kamerë", en: "Camera Scanning" }, desc: { sq: "Fotografoni faturën dhe sistemi e lexon e kategorizon automatikisht", en: "Photo the invoice and the system reads and categorizes automatically" } },
      { icon: "📁", title: { sq: "Kategorizim i Zgjuar", en: "Smart Categorization" }, desc: { sq: "Shpenzimet grupohen sipas kategorisë: zyrë, udhëtim, material, etj.", en: "Expenses grouped by category: office, travel, materials, etc." } },
      { icon: "💰", title: { sq: "Buxhet & Alarme", en: "Budget & Alerts" }, desc: { sq: "Caktoni buxhete mujore dhe merrni alarme kur afrohet tejkalimi", en: "Set monthly budgets and get alerts when approaching overspend" } },
      { icon: "📋", title: { sq: "Raporte Taksore", en: "Tax Reports" }, desc: { sq: "Raporte të gatshme për kontabilistin me zbritje dhe TVSH", en: "Reports ready for accountant with deductions and VAT" } },
      { icon: "🚗", title: { sq: "Lidhje me Flotën", en: "Fleet Integration" }, desc: { sq: "Shpenzimet e flotës (karburant, mirëmbajtje) lidhen automatikisht", en: "Fleet expenses (fuel, maintenance) linked automatically" } },
    ],
  }} />;
}
