import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureDebt() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance" },
    categoryColor: "bg-red-500",
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Control debts without stress" },
    stat: { sq: "95% më pak gabime", en: "95% fewer errors" },
    description: {
      sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes. Asnjë borxh nuk harrohet.",
      en: "Track all debts and loans in one place. Plan repayments, receive deadline alerts and see repayment progress. No debt is forgotten.",
    },
    benefits: [
      { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Registration of debts and lenders" },
      { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan" },
      { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts" },
      { sq: "Historiku i plotë i transaksioneve", en: "Complete transaction history" },
      { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart" },
    ],
    workflow: [
      { step: "1", sq: "Regjistroni borxhin: shumën, huadhënësin, interesin dhe afatin", en: "Register the debt: amount, lender, interest and deadline" },
      { step: "2", sq: "Sistemi krijon planin e shlyerjes me këste mujore", en: "System creates repayment plan with monthly installments" },
      { step: "3", sq: "Merrni alarme para çdo afati pagese", en: "Receive alerts before every payment deadline" },
      { step: "4", sq: "Shikoni progresin: sa keni paguar, sa mbetet, dhe afatin e fundit", en: "View progress: how much paid, how much remains, and final deadline" },
    ],
    capabilities: [
      { icon: "📝", title: { sq: "Regjistrim Borxhi", en: "Debt Registration" }, desc: { sq: "Regjistroni çdo borxh me shumën, interesin dhe kushtet", en: "Register every debt with amount, interest and terms" } },
      { icon: "📅", title: { sq: "Plan Shlyerje", en: "Repayment Plan" }, desc: { sq: "Këste automatike mujore me data dhe shuma të sakta", en: "Automatic monthly installments with exact dates and amounts" } },
      { icon: "🔔", title: { sq: "Alarme Afati", en: "Deadline Alerts" }, desc: { sq: "Njoftimet vijnë para çdo afati pagese borxhi", en: "Notifications come before every debt payment deadline" } },
      { icon: "📊", title: { sq: "Grafik Progresi", en: "Progress Chart" }, desc: { sq: "Vizualizoni sa keni paguar dhe sa mbetet nga borxhi", en: "Visualize how much paid and how much debt remains" } },
      { icon: "🏦", title: { sq: "Huadhënës", en: "Lenders" }, desc: { sq: "Katalog i të gjithë huadhënësve me kushtet respektive", en: "Catalog of all lenders with respective terms" } },
      { icon: "📋", title: { sq: "Historik Pagesash", en: "Payment History" }, desc: { sq: "Historiku i plotë i çdo pagese me data, shuma dhe bilanca", en: "Complete history of every payment with dates, amounts and balance" } },
    ],
  }} />;
}
