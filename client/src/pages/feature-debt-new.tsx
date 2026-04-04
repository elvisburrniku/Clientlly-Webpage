import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
  categoryColor: "bg-red-500",
  title: { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de Deudas", de: "Schuldenverwaltung", mk: "Управување со Долгови" },
  tagline: { sq: "Kontrolloni borxhet pa stres", en: "Control your debts stress-free", es: "Controle sus deudas sin estrés", de: "Kontrollieren Sie Ihre Schulden stressfrei", mk: "Контролирајте ги долговите без стрес" },
  stat: { sq: "95% më pak gabime", en: "95% fewer errors", es: "95% menos errores", de: "95% weniger Fehler", mk: "95% помалку грешки" },
  description: {
    sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes.",
    en: "Track all debts and loans in one place. Plan repayments, receive deadline alerts and view repayment progress.",
    es: "Rastree todas las deudas y préstamos en un solo lugar. Planifique pagos, reciba alertas de vencimiento y vea el progreso de los pagos.",
    de: "Verfolgen Sie alle Schulden und Darlehen an einem Ort. Planen Sie Rückzahlungen, erhalten Sie Fristwarnungen und sehen Sie den Rückzahlungsfortschritt.",
    mk: "Следете ги сите долгови и заеми на едно место. Планирајте отплати, добивајте аларми за рокови и прегледајте го напредокот на отплатата.",
  },
  benefits: [
    { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Registration of debts and lenders", es: "Registro de deudas y prestamistas", de: "Erfassung von Schulden und Kreditgebern", mk: "Евиденција на долгови и заемодавачи" },
    { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan", es: "Plan de pago automático", de: "Automatischer Rückzahlungsplan", mk: "Автоматски план за отплата" },
    { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts", es: "Alertas de vencimiento y pago", de: "Fristen- und Zahlungswarnungen", mk: "Аларми за рокови и плаќања" },
    { sq: "Historiku i plotë i transaksioneve", en: "Complete transaction history", es: "Historial completo de transacciones", de: "Vollständiger Transaktionsverlauf", mk: "Целосна историја на трансакции" },
    { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart", es: "Gráfico de progreso de pagos", de: "Rückzahlungsfortschrittsdiagramm", mk: "Графикон на напредок на отплата" },
  ],
};

export default function FeatureDebtNew() {
  return <FeatureDetail data={data} />;
}
