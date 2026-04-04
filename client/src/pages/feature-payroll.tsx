import FeatureDetail from "@/components/FeatureDetail";

export default function FeaturePayroll() {
  return <FeatureDetail data={{
    category: { sq: "HR & Ekipi", en: "HR & Team" },
    categoryColor: "bg-blue-500",
    title: { sq: "Paga & Kompensimi", en: "Payroll & Compensation" },
    tagline: { sq: "Çdo mënyrë pagese — e automatizuar plotësisht", en: "Every payment method — fully automated" },
    stat: { sq: "100% saktësi llogaritje page", en: "100% payroll accuracy" },
    description: {
      sq: "Konfiguroni pagën për çdo punonjës sipas mënyrës që i përshtatet rolit të tij — pagë fikse, komision, kombinim, ose bonus performancë. Llogaritja bëhet automatikisht bazuar në orët e prezencës.",
      en: "Configure pay for each employee according to their role — fixed salary, commission, combination, or performance bonus. The calculation is done automatically based on attendance hours.",
    },
    benefits: [
      { sq: "Pagë fikse mujore ose javore", en: "Fixed monthly or weekly salary" },
      { sq: "Komision me përqindje të shitjeve", en: "Commission with sales percentage" },
      { sq: "Pagë fikse + përqindje (hibride)", en: "Fixed salary + percentage (hybrid)" },
      { sq: "Bonus performancë dhe stimuj të personalizuar", en: "Performance bonuses and personalised incentives" },
      { sq: "Llogaritje automatike bazuar në orë prezence", en: "Automatic calculation based on attendance hours" },
      { sq: "Raporte pagash dhe eksport payroll", en: "Payroll reports and payroll export" },
    ],
    workflow: [
      { step: "1", sq: "Konfiguroni llojin e pagës: fikse, komision, hibride ose bonus", en: "Configure the pay type: fixed, commission, hybrid or bonus" },
      { step: "2", sq: "Sistemi lexon orët e prezencës automatikisht nga moduli i prezencës", en: "System reads attendance hours automatically from the attendance module" },
      { step: "3", sq: "Llogaritja e pagës bëhet automatikisht: bazë + orë shtesë + bonus", en: "Payroll calculation done automatically: base + overtime + bonus" },
      { step: "4", sq: "Aprovoni pagat dhe eksportoni raportin për bankën ose kontabilistin", en: "Approve payroll and export the report for bank or accountant" },
    ],
    capabilities: [
      { icon: "💵", title: { sq: "Pagë Fikse", en: "Fixed Salary" }, desc: { sq: "Pagë standarde mujore ose javore e konfiguruar për çdo punonjës", en: "Standard monthly or weekly salary configured for each employee" } },
      { icon: "📈", title: { sq: "Komision Shitjesh", en: "Sales Commission" }, desc: { sq: "Përqindje automatike bazuar në shitjet e çdo punonjësi", en: "Automatic percentage based on each employee's sales" } },
      { icon: "🔀", title: { sq: "Pagë Hibride", en: "Hybrid Pay" }, desc: { sq: "Kombinoni pagë fikse me përqindje shitjesh për fleksibilitet", en: "Combine fixed salary with sales percentage for flexibility" } },
      { icon: "🏆", title: { sq: "Bonus Performancë", en: "Performance Bonus" }, desc: { sq: "Stimuj bazuar në objektivat dhe performancën e ekipit", en: "Incentives based on objectives and team performance" } },
      { icon: "⏱️", title: { sq: "Orë Shtesë", en: "Overtime" }, desc: { sq: "Llogaritje automatike e orëve shtesë me tarifa të konfiguruara", en: "Automatic overtime calculation with configured rates" } },
      { icon: "📊", title: { sq: "Raporte Pagash", en: "Payroll Reports" }, desc: { sq: "Eksportoni raporte detale për bankë, kontabilist ose menaxher", en: "Export detailed reports for bank, accountant or manager" } },
    ],
  }} />;
}
