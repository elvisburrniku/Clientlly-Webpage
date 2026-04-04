import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureFleet() {
  return <FeatureDetail data={{
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
    workflow: [
      { step: "1", sq: "Regjistroni automjetin: targë, markë, model, viti, pronësia", en: "Register the vehicle: plate, make, model, year, ownership" },
      { step: "2", sq: "Caktoni shoferin dhe konfiguroni skadencat (sigurim, kasko, regjistrimi)", en: "Assign the driver and configure deadlines (insurance, casco, registration)" },
      { step: "3", sq: "Shoferi raporton km-të dhe karburantin direkt nga telefoni", en: "Driver reports km and fuel directly from phone" },
      { step: "4", sq: "Sistemi dërgon alarme automatike kur afrohet skadenca e sigurimeve", en: "System sends automatic alerts when insurance deadlines approach" },
      { step: "5", sq: "Shikoni raporte: kosto/makinë, km/muaj, karburant/100km", en: "View reports: cost/vehicle, km/month, fuel/100km" },
    ],
    capabilities: [
      { icon: "🚗", title: { sq: "Regjistrim Flotë", en: "Fleet Registration" }, desc: { sq: "Regjistroni çdo automjet me targë, model, vit dhe dokumentacion", en: "Register every vehicle with plate, model, year and documentation" } },
      { icon: "👨‍✈️", title: { sq: "Dispatch Shoferësh", en: "Driver Dispatch" }, desc: { sq: "Caktoni shoferë për udhëtime me orar, destinacion dhe status", en: "Assign drivers for trips with schedule, destination and status" } },
      { icon: "⏰", title: { sq: "Alarme Skadence", en: "Deadline Alerts" }, desc: { sq: "Asnjë sigurim, regjistrimi apo kasko nuk skadon pa alarme", en: "No insurance, registration or casco expires without alerts" } },
      { icon: "⛽", title: { sq: "Gjurmim Karburanti", en: "Fuel Tracking" }, desc: { sq: "Monitoroni konsumin e karburantit për çdo automjet", en: "Monitor fuel consumption for every vehicle" } },
      { icon: "💶", title: { sq: "Kosto per Makinë", en: "Cost per Vehicle" }, desc: { sq: "Shpenzimet totale: karburant, mirëmbajtje, sigurim, goba", en: "Total expenses: fuel, maintenance, insurance, fines" } },
      { icon: "📊", title: { sq: "Raporte Flotë", en: "Fleet Reports" }, desc: { sq: "Analiza me grafiqe: km, kosto, efikasiteti, shoferi më i mirë", en: "Chart analytics: km, cost, efficiency, best driver" } },
    ],
  }} />;
}
