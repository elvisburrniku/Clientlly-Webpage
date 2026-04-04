import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
  categoryColor: "bg-violet-500",
  title: { sq: "Raporte & Analitikë", en: "Insights & Reports", es: "Información e Informes", de: "Einblicke & Berichte", mk: "Увиди и Извештаи" },
  tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make the right decisions based on real data", es: "Tome las decisiones correctas basadas en datos reales", de: "Treffen Sie die richtigen Entscheidungen auf Basis realer Daten", mk: "Донесете ги правилните одлуки базирани на реални податоци" },
  stat: { sq: "2× vendime më të mira", en: "2× better decisions", es: "2× mejores decisiones", de: "2× bessere Entscheidungen", mk: "2× подобри одлуки" },
  description: {
    sq: "Paneli i analitikës ju jep një pamje të plotë — shitjet, shpenzimet, fluksi monetar, prezenca e ekipit dhe shërbimi i flotës — të gjitha në kohë reale.",
    en: "The analytics dashboard gives you a complete view — sales, expenses, cash flow, team attendance and fleet service — all in real time.",
    es: "El panel de analítica le brinda una vista completa — ventas, gastos, flujo de caja, asistencia del equipo y servicio de flota — todo en tiempo real.",
    de: "Das Analytik-Dashboard gibt Ihnen einen vollständigen Überblick — Verkäufe, Ausgaben, Cashflow, Teamanwesenheit und Flottenservice — alles in Echtzeit.",
    mk: "Аналитичкиот панел ви дава целосен преглед — продажби, трошоци, паричен тек, присуство на тимот и сервис на флота — сè во реално време.",
  },
  benefits: [
    { sq: "Panel analitike interaktive me grafikë", en: "Interactive analytics dashboard with charts", es: "Panel analítico interactivo con gráficos", de: "Interaktives Analytik-Dashboard mit Diagrammen", mk: "Интерактивен аналитички панел со графикони" },
    { sq: "Raporte fluksi monetar mujor", en: "Monthly cash flow reports", es: "Informes mensuales de flujo de caja", de: "Monatliche Cashflow-Berichte", mk: "Месечни извештаи за паричен тек" },
    { sq: "Krahasim periudhash (muaj/vit)", en: "Period comparison (month/year)", es: "Comparación de períodos (mes/año)", de: "Periodenvergleich (Monat/Jahr)", mk: "Споредба на периоди (месец/година)" },
    { sq: "Parashikime financiare me AI", en: "AI-powered financial forecasts", es: "Pronósticos financieros con IA", de: "KI-gestützte Finanzprognosen", mk: "Финансиски прогнози со ВИ" },
    { sq: "Raporte prezence, flotë dhe shitjesh", en: "Attendance, fleet and sales reports", es: "Informes de asistencia, flota y ventas", de: "Anwesenheits-, Flotten- und Verkaufsberichte", mk: "Извештаи за присуство, флота и продажби" },
    { sq: "Eksport PDF/Excel me klikim", en: "PDF/Excel export with one click", es: "Exportación PDF/Excel con un clic", de: "PDF/Excel-Export mit einem Klick", mk: "Извоз PDF/Excel со еден клик" },
  ],
};

export default function FeatureReportsNew() {
  return <FeatureDetail data={data} />;
}
