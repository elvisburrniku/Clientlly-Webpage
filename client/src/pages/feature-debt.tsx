import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureDebt() {
  return <FeatureDetail data={{
    category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
    categoryColor: "bg-red-500",
    title: { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de Deudas", de: "Schuldenverwaltung", mk: "Управување со Долгови" },
    tagline: { sq: "Kontrolloni borxhet pa stres", en: "Control debts without stress", es: "Controle deudas sin estrés", de: "Schulden stressfrei kontrollieren", mk: "Контролирајте долгови без стрес" },
    stat: { sq: "95% më pak gabime", en: "95% fewer errors", es: "95% menos errores", de: "95% weniger Fehler", mk: "95% помалку грешки" },
    description: {
      sq: "Gjurmoni të gjitha borxhet dhe huatë në një vend. Planifikoni shlyerjet, merrni alarme afatesh dhe shikoni progresin e shlyrjes. Asnjë borxh nuk harrohet.",
      en: "Track all debts and loans in one place. Plan repayments, receive deadline alerts and see repayment progress. No debt is forgotten.",
      es: "Rastree todas las deudas y préstamos en un solo lugar. Planifique pagos, reciba alertas de vencimiento y vea el progreso de los pagos. Ninguna deuda se olvida.",
      de: "Verfolgen Sie alle Schulden und Darlehen an einem Ort. Planen Sie Rückzahlungen, erhalten Sie Fristwarnungen und sehen Sie den Rückzahlungsfortschritt. Keine Schuld wird vergessen.",
      mk: "Следете ги сите долгови и заеми на едно место. Планирајте отплати, добивајте аларми за рокови и гледајте го напредокот на отплатата. Ниеден долг не се заборава.",
    },
    benefits: [
      { sq: "Regjistrim i borxheve dhe huadhënësve", en: "Registration of debts and lenders", es: "Registro de deudas y prestamistas", de: "Erfassung von Schulden und Kreditgebern", mk: "Евиденција на долгови и заемодавачи" },
      { sq: "Plani i shlyerjes automatike", en: "Automatic repayment plan", es: "Plan de pago automático", de: "Automatischer Rückzahlungsplan", mk: "Автоматски план за отплата" },
      { sq: "Alarme afatesh dhe pagesash", en: "Deadline and payment alerts", es: "Alertas de vencimiento y pago", de: "Fristen- und Zahlungswarnungen", mk: "Аларми за рокови и плаќања" },
      { sq: "Historiku i plotë i transaksioneve", en: "Complete transaction history", es: "Historial completo de transacciones", de: "Vollständiger Transaktionsverlauf", mk: "Целосна историја на трансакции" },
      { sq: "Grafik progresit të shlyrjes", en: "Repayment progress chart", es: "Gráfico de progreso de pagos", de: "Rückzahlungsfortschrittsdiagramm", mk: "Графикон на напредок на отплата" },
    ],
    workflow: [
      { step: "1", sq: "Regjistroni borxhin: shumën, huadhënësin, interesin dhe afatin", en: "Register the debt: amount, lender, interest and deadline", es: "Registre la deuda: monto, prestamista, interés y plazo", de: "Erfassen Sie die Schuld: Betrag, Kreditgeber, Zinsen und Frist", mk: "Евидентирајте го долгот: износ, заемодавач, камата и рок" },
      { step: "2", sq: "Sistemi krijon planin e shlyerjes me këste mujore", en: "System creates repayment plan with monthly installments", es: "El sistema crea un plan de pago con cuotas mensuales", de: "System erstellt Rückzahlungsplan mit monatlichen Raten", mk: "Системот креира план за отплата со месечни рати" },
      { step: "3", sq: "Merrni alarme para çdo afati pagese", en: "Receive alerts before every payment deadline", es: "Reciba alertas antes de cada vencimiento de pago", de: "Erhalten Sie Warnungen vor jeder Zahlungsfrist", mk: "Добивајте аларми пред секој рок за плаќање" },
      { step: "4", sq: "Shikoni progresin: sa keni paguar, sa mbetet, dhe afatin e fundit", en: "View progress: how much paid, how much remains, and final deadline", es: "Vea el progreso: cuánto ha pagado, cuánto queda y el plazo final", de: "Sehen Sie den Fortschritt: wie viel bezahlt, wie viel verbleibt und die letzte Frist", mk: "Прегледајте го напредокот: колку е платено, колку останува и краен рок" },
    ],
    capabilities: [
      { icon: "📝", title: { sq: "Regjistrim Borxhi", en: "Debt Registration", es: "Registro de Deuda", de: "Schuldenerfassung", mk: "Евиденција на Долг" }, desc: { sq: "Regjistroni çdo borxh me shumën, interesin dhe kushtet", en: "Register every debt with amount, interest and terms", es: "Registre cada deuda con monto, interés y condiciones", de: "Erfassen Sie jede Schuld mit Betrag, Zinsen und Konditionen", mk: "Евидентирајте секој долг со износ, камата и услови" } },
      { icon: "📅", title: { sq: "Plan Shlyerje", en: "Repayment Plan", es: "Plan de Pago", de: "Rückzahlungsplan", mk: "План за Отплата" }, desc: { sq: "Këste automatike mujore me data dhe shuma të sakta", en: "Automatic monthly installments with exact dates and amounts", es: "Cuotas mensuales automáticas con fechas y montos exactos", de: "Automatische monatliche Raten mit genauen Daten und Beträgen", mk: "Автоматски месечни рати со точни датуми и износи" } },
      { icon: "🔔", title: { sq: "Alarme Afati", en: "Deadline Alerts", es: "Alertas de Vencimiento", de: "Fristwarnungen", mk: "Аларми за Рокови" }, desc: { sq: "Njoftimet vijnë para çdo afati pagese borxhi", en: "Notifications come before every debt payment deadline", es: "Las notificaciones llegan antes de cada vencimiento de pago", de: "Benachrichtigungen kommen vor jeder Schuldzahlungsfrist", mk: "Известувањата доаѓаат пред секој рок за плаќање на долг" } },
      { icon: "📊", title: { sq: "Grafik Progresi", en: "Progress Chart", es: "Gráfico de Progreso", de: "Fortschrittsdiagramm", mk: "Графикон на Напредок" }, desc: { sq: "Vizualizoni sa keni paguar dhe sa mbetet nga borxhi", en: "Visualize how much paid and how much debt remains", es: "Visualice cuánto ha pagado y cuánta deuda queda", de: "Visualisieren Sie, wie viel bezahlt wurde und wie viel Schulden verbleiben", mk: "Визуализирајте колку е платено и колку долг останува" } },
      { icon: "🏦", title: { sq: "Huadhënës", en: "Lenders", es: "Prestamistas", de: "Kreditgeber", mk: "Заемодавачи" }, desc: { sq: "Katalog i të gjithë huadhënësve me kushtet respektive", en: "Catalog of all lenders with respective terms", es: "Catálogo de todos los prestamistas con sus condiciones", de: "Katalog aller Kreditgeber mit jeweiligen Konditionen", mk: "Каталог на сите заемодавачи со соодветни услови" } },
      { icon: "📋", title: { sq: "Historik Pagesash", en: "Payment History", es: "Historial de Pagos", de: "Zahlungshistorie", mk: "Историја на Плаќања" }, desc: { sq: "Historiku i plotë i çdo pagese me data, shuma dhe bilanca", en: "Complete history of every payment with dates, amounts and balance", es: "Historial completo de cada pago con fechas, montos y saldo", de: "Vollständige Historie jeder Zahlung mit Daten, Beträgen und Saldo", mk: "Целосна историја на секое плаќање со датуми, износи и салдо" } },
    ],
  }} />;
}
