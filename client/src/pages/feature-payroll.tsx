import FeatureDetail from "@/components/FeatureDetail";

const data = {
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
};

export default function FeaturePayroll() {
  return <FeatureDetail data={data} />;
}
