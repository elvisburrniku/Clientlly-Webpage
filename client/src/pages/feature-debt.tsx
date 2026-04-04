import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureDebt() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance" },
    categoryColor: "bg-red-500",
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Control debts without stress" },
    stat: { sq: "95% më pak gabime", en: "95% fewer errors" },
    description: {
      sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.",
      en: "Track all debts and loans in one place. Plan repayments, receive deadline alerts and see repayment progress.",
    },
    benefits: [
      { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Registration of debts and lenders" },
      { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan" },
      { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts" },
      { sq: "Historiku i plotë i transaksioneve", en: "Complete transaction history" },
      { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart" },
    ],
  }} />;
}
