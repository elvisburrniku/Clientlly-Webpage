import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "HR & Ekipi", en: "HR & Team" },
  categoryColor: "bg-purple-500",
  title: { sq: "Pushimet & Trajnimi", en: "Leave & Training" },
  tagline: { sq: "Pushime, certifikata dhe testim — gjithçka i organizuar", en: "Leave, certificates and testing — all organised" },
  stat: { sq: "0 kërkesa pushimi të humbura", en: "0 leave requests lost" },
  description: {
    sq: "Menaxhoni të gjitha llojet e pushimeve, kërkesat dhe bilancin e ditëve të mbetura. Platformës i integruar sistemi i trajnimit me kuize, testime dhe certifikata dixhitale për çdo punonjës.",
    en: "Manage all types of leave, requests and remaining days balance. The platform integrates a training system with quizzes, tests and digital certificates for every employee.",
  },
  benefits: [
    { sq: "Të gjitha llojet: vjetore, sëmundje, lindje, pa pagesë", en: "All types: annual, sick, maternity, unpaid" },
    { sq: "Kërkesë pushimi nga telefoni — aprovim direkt", en: "Leave request from phone — direct approval" },
    { sq: "Ditët e mbetura, dieta e pushimit dhe afati i skadimit", en: "Remaining days, leave allowance and expiry date" },
    { sq: "Kuize dhe testime për punonjës", en: "Quizzes and tests for employees" },
    { sq: "Certifikata dixhitale pas kalimit të provimit", en: "Digital certificate after passing the exam" },
    { sq: "Historiku i plotë i pushimeve dhe trajnimeve", en: "Complete history of leave and training" },
  ],
};

export default function FeatureLeaves() {
  return <FeatureDetail data={data} />;
}
