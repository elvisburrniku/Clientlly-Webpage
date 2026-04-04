import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureClients() {
  return <FeatureDetail data={{
    category: { sq: "Klientë", en: "Clients" },
    categoryColor: "bg-indigo-500",
    title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)" },
    tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client" },
    stat: { sq: "+30% mbajtje klientësh", en: "+30% client retention" },
    description: {
      sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, ofertat, korespondencën dhe shënimet. Asnjë detaj nuk humb. CRM i plotë që ju ndihmon të ndërtoni marrëdhënie afatgjata.",
      en: "Keep the complete history of every client — orders, payments, offers, correspondence and notes. No detail is lost. A full CRM that helps you build long-term relationships.",
    },
    benefits: [
      { sq: "Profil i plotë 360° i çdo klienti", en: "Complete 360° profile of every client" },
      { sq: "Historiku i porosive, ofertave dhe pagesave", en: "History of orders, offers and payments" },
      { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders" },
      { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value" },
      { sq: "Lidhje direkte me kalendarin e takimeve", en: "Direct link with meeting calendar" },
    ],
    workflow: [
      { step: "1", sq: "Shtoni klientin e ri me të dhënat e kontaktit dhe llojin e biznesit", en: "Add the new client with contact details and business type" },
      { step: "2", sq: "Çdo ofertë, faturë dhe pagesë regjistrohet automatikisht te profili i klientit", en: "Every quote, invoice and payment is auto-recorded on the client profile" },
      { step: "3", sq: "Caktoni rikujtime follow-up dhe takime drejtpërdrejt nga profili", en: "Set follow-up reminders and meetings directly from the profile" },
      { step: "4", sq: "Segmentoni klientët sipas vlerës, aktivitetit dhe potencialit të rritjes", en: "Segment clients by value, activity and growth potential" },
    ],
    capabilities: [
      { icon: "👤", title: { sq: "Profil 360°", en: "360° Profile" }, desc: { sq: "Të gjitha të dhënat e klientit në një faqe: kontakte, porosi, pagesa, shënime", en: "All client data on one page: contacts, orders, payments, notes" } },
      { icon: "📜", title: { sq: "Historik i Plotë", en: "Full History" }, desc: { sq: "Çdo ndërveprim, ofertë dhe faturë ruhet dhe aksesohet lehtësisht", en: "Every interaction, quote and invoice stored and easily accessed" } },
      { icon: "🔔", title: { sq: "Follow-up Automatik", en: "Auto Follow-up" }, desc: { sq: "Rikujtime inteligjente për të ndjekur klientët në kohën e duhur", en: "Smart reminders to follow up with clients at the right time" } },
      { icon: "📊", title: { sq: "Segmentim", en: "Segmentation" }, desc: { sq: "Gruponi klientët sipas vlerës, frekuencës ose potencialit", en: "Group clients by value, frequency or potential" } },
      { icon: "📅", title: { sq: "Kalendar i Integruar", en: "Integrated Calendar" }, desc: { sq: "Caktoni takime direkt nga profili i klientit", en: "Schedule meetings directly from the client profile" } },
      { icon: "📈", title: { sq: "Analitikë Klienti", en: "Client Analytics" }, desc: { sq: "Raporte për klientët më profitabilë, trendet dhe mundësitë", en: "Reports on most profitable clients, trends and opportunities" } },
    ],
  }} />;
}
