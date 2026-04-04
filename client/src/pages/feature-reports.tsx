import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureReports() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    categoryColor: "bg-purple-500",
    title: { sq: "Raporte & Analitikë", en: "Reports & Analytics", es: "Informes y Analítica", de: "Berichte & Analytik", mk: "Извештаи и Аналитика" },
    tagline: { sq: "Merrni vendime të drejta bazuar në të dhëna reale", en: "Make right decisions based on real data", es: "Tome decisiones correctas basadas en datos reales", de: "Treffen Sie richtige Entscheidungen auf Basis realer Daten", mk: "Донесете правилни одлуки базирани на реални податоци" },
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
      { sq: "Parashikime financiare me AI", en: "Financial forecasts with AI", es: "Pronósticos financieros con IA", de: "Finanzprognosen mit KI", mk: "Финансиски прогнози со ВИ" },
      { sq: "Raporte prezence, flote dhe shitjesh", en: "Attendance, fleet and sales reports", es: "Informes de asistencia, flota y ventas", de: "Anwesenheits-, Flotten- und Verkaufsberichte", mk: "Извештаи за присуство, флота и продажби" },
      { sq: "Eksport PDF/Excel me klikim", en: "PDF/Excel export with one click", es: "Exportación PDF/Excel con un clic", de: "PDF/Excel-Export mit einem Klick", mk: "Извоз PDF/Excel со еден клик" },
    ],
    workflow: [
      { step: "1", sq: "Zgjidhni llojin e raportit: financiar, prezencë, flotë ose shitje", en: "Choose the report type: financial, attendance, fleet or sales", es: "Elija el tipo de informe: financiero, asistencia, flota o ventas", de: "Wählen Sie den Berichtstyp: Finanzen, Anwesenheit, Flotte oder Verkauf", mk: "Изберете тип на извештај: финансиски, присуство, флота или продажби" },
      { step: "2", sq: "Filtroni sipas periudhës, departamentit ose punonjësit", en: "Filter by period, department or employee", es: "Filtre por período, departamento o empleado", de: "Filtern nach Zeitraum, Abteilung oder Mitarbeiter", mk: "Филтрирајте по период, оддел или вработен" },
      { step: "3", sq: "Shikoni grafikët interaktive me trendet dhe krahasimet", en: "View interactive charts with trends and comparisons", es: "Vea gráficos interactivos con tendencias y comparaciones", de: "Sehen Sie interaktive Diagramme mit Trends und Vergleichen", mk: "Прегледајте интерактивни графикони со трендови и споредби" },
      { step: "4", sq: "Eksportoni në PDF ose Excel me një klikim", en: "Export to PDF or Excel with one click", es: "Exporte a PDF o Excel con un clic", de: "Exportieren Sie in PDF oder Excel mit einem Klick", mk: "Извезете во PDF или Excel со еден клик" },
    ],
    capabilities: [
      { icon: "📊", title: { sq: "Panel Interaktiv", en: "Interactive Dashboard", es: "Panel Interactivo", de: "Interaktives Dashboard", mk: "Интерактивен Панел" }, desc: { sq: "Grafikë live me të dhëna në kohë reale që përditësohen automatikisht", en: "Live charts with real-time data that update automatically", es: "Gráficos en vivo con datos en tiempo real que se actualizan automáticamente", de: "Live-Diagramme mit Echtzeitdaten, die automatisch aktualisiert werden", mk: "Графикони во живо со податоци во реално време што се ажурираат автоматски" } },
      { icon: "💰", title: { sq: "Fluksi Monetar", en: "Cash Flow", es: "Flujo de Caja", de: "Cashflow", mk: "Паричен Тек" }, desc: { sq: "Shikoni hyrjet dhe daljet e parasë me krahasime mujore", en: "View money inflows and outflows with monthly comparisons", es: "Vea entradas y salidas de dinero con comparaciones mensuales", de: "Sehen Sie Geldein- und -ausgänge mit monatlichen Vergleichen", mk: "Прегледајте приливи и одливи на пари со месечни споредби" } },
      { icon: "📈", title: { sq: "Trende & Parashikime", en: "Trends & Forecasts", es: "Tendencias y Pronósticos", de: "Trends & Prognosen", mk: "Трендови и Прогнози" }, desc: { sq: "AI analizon trendet dhe parashikon të ardhmen financiare", en: "AI analyzes trends and forecasts the financial future", es: "La IA analiza tendencias y pronostica el futuro financiero", de: "KI analysiert Trends und prognostiziert die finanzielle Zukunft", mk: "ВИ ги анализира трендовите и ја прогнозира финансиската иднина" } },
      { icon: "🔍", title: { sq: "Filtra të Avancuara", en: "Advanced Filters", es: "Filtros Avanzados", de: "Erweiterte Filter", mk: "Напредни Филтри" }, desc: { sq: "Filtroni raportet sipas periudhës, kategorisë, punonjësit ose departamentit", en: "Filter reports by period, category, employee or department", es: "Filtre informes por período, categoría, empleado o departamento", de: "Filtern Sie Berichte nach Zeitraum, Kategorie, Mitarbeiter oder Abteilung", mk: "Филтрирајте извештаи по период, категорија, вработен или оддел" } },
      { icon: "📄", title: { sq: "Eksport PDF/Excel", en: "PDF/Excel Export", es: "Exportación PDF/Excel", de: "PDF/Excel-Export", mk: "Извоз PDF/Excel" }, desc: { sq: "Eksportoni çdo raport në format profesional PDF ose Excel", en: "Export any report in professional PDF or Excel format", es: "Exporte cualquier informe en formato profesional PDF o Excel", de: "Exportieren Sie jeden Bericht im professionellen PDF- oder Excel-Format", mk: "Извезете секој извештај во професионален PDF или Excel формат" } },
      { icon: "🔄", title: { sq: "Krahasim Periudhash", en: "Period Comparison", es: "Comparación de Períodos", de: "Periodenvergleich", mk: "Споредба на Периоди" }, desc: { sq: "Krahasoni muajin me muajin ose vitin me vitin për trende", en: "Compare month to month or year to year for trends", es: "Compare mes a mes o año a año para tendencias", de: "Vergleichen Sie Monat für Monat oder Jahr für Jahr für Trends", mk: "Споредете месец со месец или година со година за трендови" } },
    ],
  }} />;
}
