import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH & Equipo", de: "HR & Team", mk: "HR & Тим" },
  categoryColor: "bg-emerald-500",
  title: { sq: "Prezencë & Check-In Mobile", en: "Attendance & Mobile Check-In", es: "Asistencia & Check-In Móvil", de: "Anwesenheit & Mobiler Check-In", mk: "Присуство & Мобилен Check-In" },
  tagline: { sq: "Pa pajisje në zyrë — vetëm telefon dhe GPS", en: "No office devices — just phone and GPS", es: "Sin dispositivos de oficina — solo teléfono y GPS", de: "Keine Bürogeräte — nur Telefon und GPS", mk: "Без канцелариски уреди — само телефон и GPS" },
  stat: { sq: "100% saktësi lokacioni", en: "100% location accuracy", es: "100% precisión de ubicación", de: "100% Standortgenauigkeit", mk: "100% точност на локација" },
  description: {
    sq: "Punonjësit bëjnë check-in dhe check-out direkt nga telefoni me lokacion GPS të saktë — pa karta, pa pajisje të instaluara. Orari i punës, turnet dhe overtime llogariten automatikisht.",
    en: "Employees check in and out directly from their phone with accurate GPS location — no cards, no installed devices. Working hours, shifts and overtime are calculated automatically.",
    es: "Los empleados registran entrada y salida directamente desde su teléfono con ubicación GPS precisa — sin tarjetas, sin dispositivos instalados. Las horas de trabajo, turnos y horas extra se calculan automáticamente.",
    de: "Mitarbeiter checken direkt vom Telefon mit genauem GPS-Standort ein und aus — keine Karten, keine installierten Geräte. Arbeitszeiten, Schichten und Überstunden werden automatisch berechnet.",
    mk: "Вработените се пријавуваат и одјавуваат директно од телефонот со точна GPS локација — без картички, без инсталирани уреди. Работните часови, смените и прекувремената работа се пресметуваат автоматски.",
  },
  benefits: [
    { sq: "Check-in/out nga telefoni me GPS + foto", en: "Check-in/out from phone with GPS + photo", es: "Check-in/out desde el teléfono con GPS + foto", de: "Check-in/out vom Telefon mit GPS + Foto", mk: "Check-in/out од телефон со GPS + фотографија" },
    { sq: "Pa pajisje në zyrë — zero instalim harduer", en: "No office devices — zero hardware installation", es: "Sin dispositivos de oficina — cero instalación de hardware", de: "Keine Bürogeräte — null Hardwareinstallation", mk: "Без канцелариски уреди — нула хардверска инсталација" },
    { sq: "Llogaritje automatike orësh dhe overtime", en: "Automatic calculation of hours and overtime", es: "Cálculo automático de horas y horas extra", de: "Automatische Berechnung von Stunden und Überstunden", mk: "Автоматско пресметување на часови и прекувремена работа" },
    { sq: "Caktim orarit dhe turneve të punës", en: "Scheduling working hours and shifts", es: "Programación de horarios y turnos de trabajo", de: "Planung von Arbeitszeiten und Schichten", mk: "Распоред на работно време и смени" },
    { sq: "Raporte të avancuara prezence (ditore/mujore)", en: "Advanced attendance reports (daily/monthly)", es: "Informes avanzados de asistencia (diarios/mensuales)", de: "Erweiterte Anwesenheitsberichte (täglich/monatlich)", mk: "Напредни извештаи за присуство (дневни/месечни)" },
    { sq: "Eksport automatik për llogaritje page", en: "Automatic export for payroll calculation", es: "Exportación automática para cálculo de nómina", de: "Automatischer Export für Gehaltsabrechnung", mk: "Автоматски извоз за пресметка на плата" },
  ],
};

export default function FeatureAttendanceNew() {
  return <FeatureDetail data={data} />;
}
