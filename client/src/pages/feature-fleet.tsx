import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Flotë", en: "Fleet" },
  categoryColor: "bg-amber-500",
  title: { sq: "Motorpool & Flotë Makinash", en: "Motorpool & Fleet Management" },
  tagline: { sq: "Menaxhoni çdo makinë, shofer dhe shërbim nga telefoni", en: "Manage every vehicle, driver and service from your phone" },
  stat: { sq: "100% afate të ndjekura", en: "100% deadlines tracked" },
  description: {
    sq: "Sistemi i flotës mbulon gjithçka — nga caktimi i shoferëve për udhëtime tek gjurmimi i mirëmbajtjeve, rinovimi i sigurimeve dhe skadencat e regjistrimit. Asnjë afat nuk kalohet pa u vënë re.",
    en: "The fleet system covers everything — from assigning drivers for trips to tracking maintenance, insurance renewals and registration deadlines. No deadline passes unnoticed.",
  },
  benefits: [
    { sq: "Regjistrim i flotës: makina, targë, pronësi", en: "Fleet registration: vehicles, plates, ownership" },
    { sq: "Caktim shoferësh për udhëtime (ride dispatch)", en: "Driver assignment for trips (ride dispatch)" },
    { sq: "Gjurmim mirëmbajtjesh dhe servisimesh", en: "Maintenance and service tracking" },
    { sq: "Alarme rinovimi: sigurim, kasko, regjistrimi", en: "Renewal alerts: insurance, casco, registration" },
    { sq: "Historiku i plotë i shpenzimeve për çdo makinë", en: "Complete expense history for every vehicle" },
    { sq: "Raporte km, karburant dhe kosto/makina", en: "km, fuel and cost/vehicle reports" },
  ],
};

export default function FeatureFleet() {
  return <FeatureDetail data={data} />;
}
