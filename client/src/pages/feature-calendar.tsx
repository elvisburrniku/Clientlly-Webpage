import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureCalendar() {
  return <FeatureDetail data={{
    category: { sq: "Operacione", en: "Operations" },
    categoryColor: "bg-sky-500",
    title: { sq: "Kalendar & Planifikim", en: "Calendar & Planning" },
    tagline: { sq: "Të gjitha takimet dhe shërbimet në një vend", en: "All meetings and services in one place" },
    stat: { sq: "0 takime të humbura", en: "0 missed meetings" },
    description: {
      sq: "Planifikoni takime me klientë, shërbime dhe detyra ekipore. Kalendari sinkronizohet direkt me Google Calendar dhe kalendarin e telefonit — asnjë takim nuk harrohet.",
      en: "Plan meetings with clients, services and team tasks. The calendar synchronizes directly with Google Calendar and phone calendar — no meeting is forgotten.",
    },
    benefits: [
      { sq: "Caktim takimesh dhe shërbimesh me klientë", en: "Scheduling meetings and services with clients" },
      { sq: "Sinkronizim me Google Calendar & iPhone", en: "Sync with Google Calendar & iPhone" },
      { sq: "Njoftim automatik para çdo takimi", en: "Automatic notification before every meeting" },
      { sq: "Planifikim i detyrave ekipore", en: "Team task planning" },
      { sq: "Lidhje me modulin e prezencës dhe shoferëve", en: "Link with attendance and drivers module" },
      { sq: "Pamje javore, mujore dhe ditore", en: "Weekly, monthly and daily view" },
    ],
  }} />;
}
