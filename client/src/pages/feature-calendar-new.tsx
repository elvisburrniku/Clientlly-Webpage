import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
  categoryColor: "bg-sky-500",
  title: { sq: "Kalendar & Planifikim", en: "Calendar & Planning", es: "Calendario & Planificación", de: "Kalender & Planung", mk: "Календар & Планирање" },
  tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All meetings and services in one place", es: "Todas las reuniones y servicios en un solo lugar", de: "Alle Termine und Dienste an einem Ort", mk: "Сите состаноци и услуги на едно место" },
  stat: { sq: "0 takime të humbura", en: "0 missed meetings", es: "0 reuniones perdidas", de: "0 verpasste Termine", mk: "0 пропуштени состаноци" },
  description: {
    sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
    en: "Schedule client meetings, services and team tasks. The calendar syncs directly with Google Calendar and your phone calendar — no meeting is ever forgotten.",
    es: "Programe reuniones con clientes, servicios y tareas de equipo. El calendario se sincroniza directamente con Google Calendar y el calendario de su teléfono — ninguna reunión se olvida jamás.",
    de: "Planen Sie Kundentermine, Dienstleistungen und Teamaufgaben. Der Kalender synchronisiert sich direkt mit Google Calendar und Ihrem Telefonkalender — kein Termin wird jemals vergessen.",
    mk: "Закажете состаноци со клиенти, услуги и тимски задачи. Календарот се синхронизира директно со Google Calendar и календарот на вашиот телефон — ниту еден состанок никогаш не се заборава.",
  },
  benefits: [
    { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Scheduling meetings and services with clients", es: "Programación de reuniones y servicios con clientes", de: "Terminplanung und Dienstleistungen mit Kunden", mk: "Закажување состаноци и услуги со клиенти" },
    { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone", es: "Sincronización con Google Calendar & iPhone", de: "Synchronisierung mit Google Calendar & iPhone", mk: "Синхронизација со Google Calendar & iPhone" },
    { sq: "Njoftime automatike para çdo takimi", en: "Automatic reminders before every meeting", es: "Recordatorios automáticos antes de cada reunión", de: "Automatische Erinnerungen vor jedem Termin", mk: "Автоматски потсетници пред секој состанок" },
    { sq: "Planifikim i detyrave ekipore", en: "Team task planning", es: "Planificación de tareas de equipo", de: "Teamaufgabenplanung", mk: "Планирање на тимски задачи" },
    { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Connection with attendance and driver modules", es: "Conexión con los módulos de asistencia y conductores", de: "Verbindung mit Anwesenheits- und Fahrermodulen", mk: "Поврзување со модулите за присуство и возачи" },
    { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily views", es: "Vistas semanal, mensual y diaria", de: "Wochen-, Monats- und Tagesansichten", mk: "Неделен, месечен и дневен преглед" },
  ],
};

export default function FeatureCalendarNew() {
  return <FeatureDetail data={data} />;
}
