import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance" },
  categoryColor: "bg-amber-500",
  title: { sq: "Kartelat e Blerësit", en: "Buyer Cards" },
  tagline: { sq: "Menaxhoni kartelat dhe historikun e blerësve", en: "Manage buyer cards and purchase history" },
  stat: { sq: "100% transparencë blerësi", en: "100% buyer transparency" },
  description: {
    sq: "Krijoni kartela dixhitale për çdo blerës me historikun e plotë të blerjeve, pagesave dhe borxheve. Çdo blerës ka profilin e vet me saldo aktuale, limitet e kreditit dhe statistikat e blerjeve. Ju gjithmonë e dini saktësisht ku qëndroni me çdo klient.",
    en: "Create digital cards for each buyer with complete purchase, payment and debt history. Each buyer has their own profile with current balance, credit limits and purchase statistics. You always know exactly where you stand with each client.",
  },
  benefits: [
    { sq: "Kartela dixhitale me saldo dhe historik blerje", en: "Digital cards with balance and purchase history" },
    { sq: "Limit krediti dhe njoftim automatik", en: "Credit limit and automatic notification" },
    { sq: "Gjurmim i pagesave dhe borxheve të blerësit", en: "Tracking buyer payments and debts" },
    { sq: "Raport detajuar i çdo blerësi", en: "Detailed report for each buyer" },
    { sq: "Kategorizim sipas llojit të blerësit", en: "Categorization by buyer type" },
    { sq: "Eksport i listës së blerësve (PDF/Excel)", en: "Export buyer list (PDF/Excel)" },
  ],
  workflow: [
    { step: "1", sq: "Shtoni blerësin e ri me të dhënat bazë: emër, kontakt, lloj biznesi", en: "Add the new buyer with basic data: name, contact, business type" },
    { step: "2", sq: "Caktoni limitin e kreditit dhe kushtet e pagesës për blerësin", en: "Set the credit limit and payment terms for the buyer" },
    { step: "3", sq: "Çdo blerje dhe pagesë regjistrohet automatikisht në kartelën e blerësit", en: "Every purchase and payment is automatically recorded on the buyer's card" },
    { step: "4", sq: "Merrni alarme kur blerësi i afrohet limitit ose ka borxh të vonuar", en: "Get alerts when the buyer approaches the limit or has overdue debt" },
    { step: "5", sq: "Gjeneroni raporte për blerësit — saldo, historik blerje, profitabilitet", en: "Generate reports for buyers — balance, purchase history, profitability" },
  ],
  capabilities: [
    { icon: "💳", title: { sq: "Kartela Dixhitale", en: "Digital Cards" }, desc: { sq: "Profil i plotë për çdo blerës me të gjitha të dhënat financiare në një vend", en: "Complete profile for each buyer with all financial data in one place" } },
    { icon: "📈", title: { sq: "Saldo në Kohë Reale", en: "Real-time Balance" }, desc: { sq: "Shikoni saldot aktuale, pagesat e pritshme dhe borxhet e çdo blerësi", en: "View current balances, expected payments and debts for each buyer" } },
    { icon: "⚠️", title: { sq: "Alarme Krediti", en: "Credit Alerts" }, desc: { sq: "Njoftim automatik kur blerësi i afrohet ose e kalon limitin e kreditit", en: "Auto notification when buyer approaches or exceeds credit limit" } },
    { icon: "📋", title: { sq: "Historik i Plotë", en: "Complete History" }, desc: { sq: "Çdo blerje, pagesë dhe kthim i regjistruar me data dhe detaje", en: "Every purchase, payment and return recorded with dates and details" } },
    { icon: "🏷️", title: { sq: "Kategorizim", en: "Categorization" }, desc: { sq: "Gruponi blerësit sipas llojit, rajonit ose volumit të blerjeve", en: "Group buyers by type, region or purchase volume" } },
    { icon: "📊", title: { sq: "Raporte Blerësi", en: "Buyer Reports" }, desc: { sq: "Analiza detajuara: blerësi më profitabil, borxhet, trendet e blerjeve", en: "Detailed analysis: most profitable buyer, debts, purchase trends" } },
  ],
};

export default function FeatureBuyerCards() {
  return <FeatureDetail data={data} />;
}
