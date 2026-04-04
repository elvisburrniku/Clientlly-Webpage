import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-red-500",
  title: { sq: "Menaxhim Borxhesh", en: "Debt Management" },
  tagline: { sq: "Kontrolloni borxhet pa stres", en: "Control your debts stress-free" },
  stat: { sq: "95% më pak gabime", en: "95% fewer errors" },
  description: {
    sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.",
    en: "Track all debts and loans in one place. Plan repayments, receive deadline alerts and view repayment progress.",
  },
  benefits: [
    { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Registration of debts and lenders" },
    { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan" },
    { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts" },
    { sq: "Historiku i plotë i transaksioneve", en: "Complete transaction history" },
    { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart" },
  ],
};

export default function FeatureDebtNew() {
  return <FeatureDetail data={data} />;
}
