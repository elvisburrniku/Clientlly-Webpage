import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Operacione", en: "Operations" },
  categoryColor: "bg-sky-500",
  title: { sq: "Kalendar & Planifikim", en: "Calendar & Planning" },
  tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All meetings and services in one place" },
  stat: { sq: "0 takime të humbura", en: "0 missed meetings" },
  description: {
    sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
    en: "Schedule client meetings, services and team tasks. The calendar syncs directly with Google Calendar and your phone calendar — no meeting is ever forgotten.",
  },
  benefits: [
    { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Scheduling meetings and services with clients" },
    { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone" },
    { sq: "Njoftime automatike para çdo takimi", en: "Automatic reminders before every meeting" },
    { sq: "Planifikim i detyrave ekipore", en: "Team task planning" },
    { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Connection with attendance and driver modules" },
    { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily views" },
  ],
};

export default function FeatureCalendarNew() {
  return <FeatureDetail data={data} />;
}
