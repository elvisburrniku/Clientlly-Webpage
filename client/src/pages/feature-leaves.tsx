import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureLeaves() {
  return <FeatureDetail data={{
    category: { sq: "HR & Ekipi", en: "HR & Team" },
    categoryColor: "bg-purple-500",
    title: { sq: "Pushimet & Mungesat", en: "Leave & Absence" },
    tagline: { sq: "Çdo pushim i organizuar — nga kërkesa deri te aprovimi", en: "Every leave organised — from request to approval" },
    stat: { sq: "0 kërkesa pushimi të humbura", en: "0 leave requests lost" },
    description: {
      sq: "Menaxhoni të gjitha llojet e pushimeve, kërkesat dhe bilancin e ditëve të mbetura. Punonjësit bëjnë kërkesë nga telefoni, menaxheri aprovon, dhe sistemi llogarit ditët automatikisht.",
      en: "Manage all types of leave, requests and remaining days balance. Employees request from phone, manager approves, and the system calculates days automatically.",
    },
    benefits: [
      { sq: "Të gjitha llojet: vjetore, sëmundje, lindje, pa pagesë", en: "All types: annual, sick, maternity, unpaid" },
      { sq: "Kërkesë pushimi nga telefoni — aprovim direkt", en: "Leave request from phone — direct approval" },
      { sq: "Ditët e mbetura dhe bilanci i pushimeve", en: "Remaining days and leave balance" },
      { sq: "Kalendar ekipi me pushimet e të gjithëve", en: "Team calendar with everyone's leave" },
      { sq: "Raporte mungese dhe trende", en: "Absence reports and trends" },
      { sq: "Historiku i plotë i pushimeve për çdo punonjës", en: "Complete leave history for each employee" },
    ],
    workflow: [
      { step: "1", sq: "Punonjësi zgjedh llojin e pushimit dhe datat nga telefoni", en: "Employee selects leave type and dates from phone" },
      { step: "2", sq: "Menaxheri merr njoftimin dhe aprovon ose refuzon me komentar", en: "Manager receives notification and approves or rejects with comment" },
      { step: "3", sq: "Sistemi llogarit automatikisht ditët e mbetura dhe bilancin", en: "System automatically calculates remaining days and balance" },
      { step: "4", sq: "Kalendari i ekipit përditësohet — të gjithë shohin kush mungon", en: "Team calendar updates — everyone sees who is absent" },
    ],
    capabilities: [
      { icon: "🏖️", title: { sq: "Pushime Vjetore", en: "Annual Leave" }, desc: { sq: "Ditë pushimi vjetor me llogaritje automatike të bilancit", en: "Annual leave days with automatic balance calculation" } },
      { icon: "🤒", title: { sq: "Pushim Sëmundje", en: "Sick Leave" }, desc: { sq: "Regjistroni ditë sëmundje me mundësi ngarkimi certifikate", en: "Record sick days with option to upload certificate" } },
      { icon: "👶", title: { sq: "Pushim Lindje", en: "Maternity Leave" }, desc: { sq: "Menaxhoni pushimet e lindjes sipas legjislacionit", en: "Manage maternity leave according to legislation" } },
      { icon: "📅", title: { sq: "Kalendar Ekipi", en: "Team Calendar" }, desc: { sq: "Shikoni kush mungon, kush ka pushim, kush është në zyrë", en: "See who's absent, who's on leave, who's in office" } },
      { icon: "📊", title: { sq: "Raporte Mungese", en: "Absence Reports" }, desc: { sq: "Analiza e trendeve: kush mungon më shumë, cilat ditë, arsyet", en: "Trend analysis: who is absent most, which days, reasons" } },
      { icon: "📱", title: { sq: "Kërkesë nga Telefoni", en: "Mobile Request" }, desc: { sq: "Punonjësi bën kërkesë në çast nga telefoni — aprovim i menjëhershëm", en: "Employee makes instant request from phone — immediate approval" } },
    ],
  }} />;
}
