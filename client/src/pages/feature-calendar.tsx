import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureCalendar() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations", es: "Operaciones", de: "Betrieb", mk: "Операции" },
    categoryColor: "bg-sky-500",
    title: { sq: "Kalendar & Planifikim", en: "Calendar & Planning", es: "Calendario & Planificación", de: "Kalender & Planung", mk: "Календар & Планирање" },
    tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All meetings and services in one place", es: "Todas las reuniones y servicios en un solo lugar", de: "Alle Termine und Dienste an einem Ort", mk: "Сите состаноци и услуги на едно место" },
    stat: { sq: "0 takime të humbura", en: "0 missed meetings", es: "0 reuniones perdidas", de: "0 verpasste Termine", mk: "0 пропуштени состаноци" },
    description: {
      sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
      en: "Plan meetings with clients, services and team tasks. The calendar synchronizes directly with Google Calendar and phone calendar — no meeting is forgotten.",
      es: "Planifique reuniones con clientes, servicios y tareas de equipo. El calendario se sincroniza directamente con Google Calendar y el calendario del teléfono — ninguna reunión se olvida.",
      de: "Planen Sie Meetings mit Kunden, Dienstleistungen und Teamaufgaben. Der Kalender synchronisiert sich direkt mit Google Calendar und dem Telefonkalender — kein Termin wird vergessen.",
      mk: "Планирајте состаноци со клиенти, услуги и тимски задачи. Календарот се синхронизира директно со Google Calendar и календарот на телефонот — ниту еден состанок не се заборава.",
    },
    benefits: [
      { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Scheduling meetings and services with clients", es: "Programación de reuniones y servicios con clientes", de: "Terminplanung und Dienstleistungen mit Kunden", mk: "Закажување состаноци и услуги со клиенти" },
      { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone", es: "Sincronización con Google Calendar & iPhone", de: "Synchronisierung mit Google Calendar & iPhone", mk: "Синхронизација со Google Calendar & iPhone" },
      { sq: "Njoftim automatik para çdo takimi", en: "Automatic notification before every meeting", es: "Notificación automática antes de cada reunión", de: "Automatische Benachrichtigung vor jedem Termin", mk: "Автоматско известување пред секој состанок" },
      { sq: "Planifikim i detyrave ekipore", en: "Team task planning", es: "Planificación de tareas de equipo", de: "Teamaufgabenplanung", mk: "Планирање на тимски задачи" },
      { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Link with attendance and drivers module", es: "Conexión con el módulo de asistencia y conductores", de: "Verbindung mit Anwesenheits- und Fahrermodul", mk: "Поврзување со модулот за присуство и возачи" },
      { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily view", es: "Vista semanal, mensual y diaria", de: "Wochen-, Monats- und Tagesansicht", mk: "Неделен, месечен и дневен преглед" },
    ],
  }} />;
}
