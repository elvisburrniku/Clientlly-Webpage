import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureReports() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance" },
    categoryColor: "bg-purple-500",
    title: { sq: "Raporte & Analitikë", en: "Reports & Analytics" },
    tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make right decisions based on real data" },
    stat: { sq: "2× vendime më të mira", en: "2× better decisions" },
    description: {
      sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale.",
      en: "The analytics dashboard gives you a complete view — sales, expenses, cash flow, team attendance and fleet service — all in real time.",
    },
    benefits: [
      { sq: "Panel analitike interaktive me grafikë", en: "Interactive analytics dashboard with charts" },
      { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports" },
      { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)" },
      { sq: "Parashikime financiare me AI", en: "Financial forecasts with AI" },
      { sq: "Raporte prezence, flote dhe shitjesh", en: "Attendance, fleet and sales reports" },
      { sq: "Eksport PDF/Excel me klikim", en: "PDF/Excel export with one click" },
    ],
    workflow: [
      { step: "1", sq: "Zgjidhni llojin e raportit: financiar, prezencë, flotë ose shitje", en: "Choose the report type: financial, attendance, fleet or sales" },
      { step: "2", sq: "Filtroni sipas periudhës, departamentit ose punonjësit", en: "Filter by period, department or employee" },
      { step: "3", sq: "Shikoni grafikët interaktive me trendet dhe krahasimet", en: "View interactive charts with trends and comparisons" },
      { step: "4", sq: "Eksportoni në PDF ose Excel me një klikim", en: "Export to PDF or Excel with one click" },
    ],
    capabilities: [
      { icon: "📊", title: { sq: "Panel Interaktiv", en: "Interactive Dashboard" }, desc: { sq: "Grafikë live me të dhëna në kohë reale që përditësohen automatikisht", en: "Live charts with real-time data that update automatically" } },
      { icon: "💰", title: { sq: "Fluksi Monetar", en: "Cash Flow" }, desc: { sq: "Shikoni hyrjet dhe daljet e parasë me krahasime mujore", en: "View money inflows and outflows with monthly comparisons" } },
      { icon: "📈", title: { sq: "Trende & Parashikime", en: "Trends & Forecasts" }, desc: { sq: "AI analizon trendet dhe parashikon të ardhmen financiare", en: "AI analyzes trends and forecasts the financial future" } },
      { icon: "🔍", title: { sq: "Filtra të Avancuara", en: "Advanced Filters" }, desc: { sq: "Filtroni raportet sipas periudhës, kategorisë, punonjësit ose departamentit", en: "Filter reports by period, category, employee or department" } },
      { icon: "📄", title: { sq: "Eksport PDF/Excel", en: "PDF/Excel Export" }, desc: { sq: "Eksportoni çdo raport në format profesional PDF ose Excel", en: "Export any report in professional PDF or Excel format" } },
      { icon: "🔄", title: { sq: "Krahasim Periudhash", en: "Period Comparison" }, desc: { sq: "Krahasoni muajin me muajin ose vitin me vitin për trende", en: "Compare month to month or year to year for trends" } },
    ],
  }} />;
}
