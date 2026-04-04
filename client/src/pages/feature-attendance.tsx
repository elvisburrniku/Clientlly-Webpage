import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureAttendance() {
  return <FeatureDetail data={{
    category: { sq: "HR & Ekipi", en: "HR & Team" },
    categoryColor: "bg-emerald-500",
    title: { sq: "Prezencë & Check‑In Mobile", en: "Attendance & Mobile Check‑In" },
    tagline: { sq: "Pa pajisje në zyrë — vetëm telefon dhe GPS", en: "No office equipment — just phone and GPS" },
    stat: { sq: "100% saktësi lokacioni", en: "100% location accuracy" },
    description: {
      sq: "Punonjësit bëjnë check-in dhe check-out direkt nga telefoni me lokacion GPS të saktë — pa karta, pa pajisje të instaluara. Orari i punës, turnet dhe overtime llogariten automatikisht.",
      en: "Employees check in and out directly from their phone with accurate GPS location — no cards, no installed devices. Work hours, shifts and overtime are calculated automatically.",
    },
    benefits: [
      { sq: "Check-in/out nga telefoni me GPS + foto", en: "Check-in/out from phone with GPS + photo" },
      { sq: "Pa pajisje në zyrë — zero instalim harduer", en: "No office devices — zero hardware installation" },
      { sq: "Llogaritje automatike orësh dhe overtime", en: "Automatic calculation of hours and overtime" },
      { sq: "Caktim orarit dhe turneve të punës", en: "Work schedule and shift assignment" },
      { sq: "Raporte të avancuara prezence (ditore/mujore)", en: "Advanced attendance reports (daily/monthly)" },
      { sq: "Eksport automatik për llogaritje page", en: "Automatic export for payroll calculation" },
    ],
  }} />;
}
