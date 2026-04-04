import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Klientë", en: "Clients", es: "Clientes", de: "Kunden", mk: "Клиенти" },
  categoryColor: "bg-indigo-500",
  title: { sq: "Menaxhim Klientësh (CRM)", en: "Client Management (CRM)", es: "Gestión de Clientes (CRM)", de: "Kundenverwaltung (CRM)", mk: "Управување со Клиенти (CRM)" },
  tagline: { sq: "Ndërtoni marrëdhënie të forta me çdo klient", en: "Build strong relationships with every client", es: "Construya relaciones sólidas con cada cliente", de: "Bauen Sie starke Beziehungen zu jedem Kunden auf", mk: "Изградете силни односи со секој клиент" },
  stat: { sq: "+30% mbajtje klientësh", en: "+30% client retention", es: "+30% retención de clientes", de: "+30% Kundenbindung", mk: "+30% задржување на клиенти" },
  description: {
    sq: "Mbani historikun e plotë të çdo klienti — porositë, pagesat, ofertat, korespondencën dhe shënimet. Asnjë detaj nuk humb.",
    en: "Keep the complete history of every client — orders, payments, quotes, correspondence and notes. No detail is lost.",
    es: "Mantenga el historial completo de cada cliente — pedidos, pagos, cotizaciones, correspondencia y notas. Ningún detalle se pierde.",
    de: "Behalten Sie die vollständige Historie jedes Kunden — Bestellungen, Zahlungen, Angebote, Korrespondenz und Notizen. Kein Detail geht verloren.",
    mk: "Чувајте ја целосната историја на секој клиент — нарачки, плаќања, понуди, кореспонденција и белешки. Ниеден детал не се губи.",
  },
  benefits: [
    { sq: "Profil i plotë 360° i çdo klienti", en: "Complete 360° profile of every client", es: "Perfil completo 360° de cada cliente", de: "Vollständiges 360°-Profil jedes Kunden", mk: "Целосен 360° профил на секој клиент" },
    { sq: "Historiku i porosive, ofertave dhe pagesave", en: "History of orders, quotes and payments", es: "Historial de pedidos, cotizaciones y pagos", de: "Historie von Bestellungen, Angeboten und Zahlungen", mk: "Историја на нарачки, понуди и плаќања" },
    { sq: "Rikujtime automatike follow-up", en: "Automatic follow-up reminders", es: "Recordatorios automáticos de seguimiento", de: "Automatische Follow-up-Erinnerungen", mk: "Автоматски потсетници за следење" },
    { sq: "Segmentim klientësh sipas vlerës", en: "Client segmentation by value", es: "Segmentación de clientes por valor", de: "Kundensegmentierung nach Wert", mk: "Сегментација на клиенти по вредност" },
    { sq: "Lidhje direkte me kalendarin e takimeve", en: "Direct link with meeting calendar", es: "Enlace directo con el calendario de reuniones", de: "Direkte Verbindung mit dem Terminkalender", mk: "Директна врска со календарот за состаноци" },
  ],
};

export default function FeatureClientsNew() {
  return <FeatureDetail data={data} />;
}
