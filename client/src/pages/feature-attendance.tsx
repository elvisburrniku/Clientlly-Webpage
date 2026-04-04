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
    workflow: [
      { step: "1", sq: "Punonjësi hap aplikacionin dhe shtyp 'Check-In' — GPS dhe foto ruhen", en: "Employee opens the app and taps 'Check-In' — GPS and photo are saved" },
      { step: "2", sq: "Sistemi regjistron orën e fillimit dhe lokacionin automatikisht", en: "System records start time and location automatically" },
      { step: "3", sq: "Në fund të ditës, punonjësi bën 'Check-Out' — orët llogariten", en: "At end of day, employee does 'Check-Out' — hours are calculated" },
      { step: "4", sq: "Menaxheri shikon raportin ditor: kush erdhi, kush vonoi, orë totale", en: "Manager views daily report: who came, who was late, total hours" },
      { step: "5", sq: "Në fund të muajit, eksportoni orët direkt për llogaritjen e pagës", en: "At month end, export hours directly for payroll calculation" },
    ],
    capabilities: [
      { icon: "📍", title: { sq: "GPS Check-In", en: "GPS Check-In" }, desc: { sq: "Lokacion i saktë GPS kur punonjësi bën check-in — pa mundësi mashtrimi", en: "Accurate GPS location when employee checks in — no fraud possible" } },
      { icon: "📸", title: { sq: "Foto Verifikimi", en: "Photo Verification" }, desc: { sq: "Foto selfie automatike gjatë check-in për verifikim identiteti", en: "Automatic selfie photo during check-in for identity verification" } },
      { icon: "⏰", title: { sq: "Llogaritje Orësh", en: "Hours Calculation" }, desc: { sq: "Orë normale, overtime, vonesa — gjithçka llogaritet automatikisht", en: "Normal hours, overtime, lateness — everything calculated automatically" } },
      { icon: "📋", title: { sq: "Turne Pune", en: "Work Shifts" }, desc: { sq: "Caktoni turne: mëngjes, mbasdite, natë — me rotacion automatik", en: "Assign shifts: morning, afternoon, night — with automatic rotation" } },
      { icon: "📊", title: { sq: "Raporte Prezence", en: "Attendance Reports" }, desc: { sq: "Raporte ditore dhe mujore me grafiqe, vonesa dhe mungesa", en: "Daily and monthly reports with charts, lateness and absences" } },
      { icon: "💰", title: { sq: "Eksport Payroll", en: "Payroll Export" }, desc: { sq: "Eksportoni orët direkt për modulin e pagave — zero hyrje manuale", en: "Export hours directly to payroll module — zero manual entry" } },
    ],
  }} />;
}
