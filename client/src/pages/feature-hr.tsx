import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureHR() {
  return <FeatureDetail data={{
    category: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH & Equipo", de: "HR & Team", mk: "HR & Тим" },
    categoryColor: "bg-violet-500",
    title: { sq: "Paga & Kompensimi", en: "Payroll & Compensation", es: "Nómina & Compensación", de: "Gehaltsabrechnung & Vergütung", mk: "Плата & Компензација" },
    tagline: { sq: "Çdo mënyrë pagese — e automatizuar plotësisht", en: "Every payment method — fully automated", es: "Cada método de pago — totalmente automatizado", de: "Jede Zahlungsmethode — vollständig automatisiert", mk: "Секој метод на плаќање — целосно автоматизиран" },
    stat: { sq: "100% saktësi llogaritje page", en: "100% payroll calculation accuracy", es: "100% precisión en cálculo de nómina", de: "100% Genauigkeit bei der Gehaltsabrechnung", mk: "100% точност на пресметка на плата" },
    description: {
      sq: "Konfiguroni pagën për çdo punonjës sipas mënyrës që i përshtatet rolit të tij — pagë fikse, komision, kombinim, ose bonus performancë. Llogaritja bëhet automatikisht bazuar në orët e prezencës.",
      en: "Configure salary for each employee according to the method that suits their role — fixed salary, commission, combination, or performance bonus. Calculation is done automatically based on attendance hours.",
      es: "Configure el salario para cada empleado según el método que se adapte a su rol — salario fijo, comisión, combinación o bonificación por rendimiento. El cálculo se realiza automáticamente basado en las horas de asistencia.",
      de: "Konfigurieren Sie das Gehalt für jeden Mitarbeiter nach der Methode, die zu seiner Rolle passt — Festgehalt, Provision, Kombination oder Leistungsbonus. Die Berechnung erfolgt automatisch basierend auf den Anwesenheitsstunden.",
      mk: "Конфигурирајте ја платата за секој вработен според методот што одговара на неговата улога — фиксна плата, провизија, комбинација или бонус за перформанси. Пресметката се врши автоматски врз основа на часовите на присуство.",
    },
    benefits: [
      { sq: "Pagë fikse mujore ose javore", en: "Fixed monthly or weekly salary", es: "Salario fijo mensual o semanal", de: "Festes Monats- oder Wochengehalt", mk: "Фиксна месечна или неделна плата" },
      { sq: "Komision me përqindje të shitjeve", en: "Commission with sales percentage", es: "Comisión con porcentaje de ventas", de: "Provision mit Verkaufsprozentsatz", mk: "Провизија со процент од продажба" },
      { sq: "Pagë fikse + përqindje (hibride)", en: "Fixed salary + percentage (hybrid)", es: "Salario fijo + porcentaje (híbrido)", de: "Festgehalt + Prozentsatz (hybrid)", mk: "Фиксна плата + процент (хибридна)" },
      { sq: "Bonus performancë dhe stimuj të personalizuar", en: "Performance bonus and personalized incentives", es: "Bonificación por rendimiento e incentivos personalizados", de: "Leistungsbonus und personalisierte Anreize", mk: "Бонус за перформанси и персонализирани стимулации" },
      { sq: "Llogaritje automatike bazuar në orë prezence", en: "Automatic calculation based on attendance hours", es: "Cálculo automático basado en horas de asistencia", de: "Automatische Berechnung basierend auf Anwesenheitsstunden", mk: "Автоматска пресметка базирана на часови на присуство" },
      { sq: "Raporte pagash dhe eksport payroll", en: "Salary reports and payroll export", es: "Informes salariales y exportación de nómina", de: "Gehaltsberichte und Gehaltsexport", mk: "Извештаи за плати и извоз на платен список" },
    ],
  }} />;
}
