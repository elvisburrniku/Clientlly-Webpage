import FeatureDetail from "@/components/FeatureDetail";

export default function FeatureLeaves() {
  return <FeatureDetail data={{
    category: { sq: "HR & Ekipi", en: "HR & Team", es: "RRHH & Equipo", de: "HR & Team", mk: "HR & Тим" },
    categoryColor: "bg-purple-500",
    title: { sq: "Pushimet & Mungesat", en: "Leave & Absence", es: "Permisos & Ausencias", de: "Urlaub & Abwesenheit", mk: "Отсуства & Отсутност" },
    tagline: { sq: "Çdo pushim i organizuar — nga kërkesa deri te aprovimi", en: "Every leave organised — from request to approval", es: "Cada permiso organizado — desde la solicitud hasta la aprobación", de: "Jeder Urlaub organisiert — vom Antrag bis zur Genehmigung", mk: "Секое отсуство организирано — од барање до одобрување" },
    stat: { sq: "0 kërkesa pushimi të humbura", en: "0 leave requests lost", es: "0 solicitudes de permiso perdidas", de: "0 verlorene Urlaubsanträge", mk: "0 изгубени барања за отсуство" },
    description: {
      sq: "Menaxhoni të gjitha llojet e pushimeve, kërkesat dhe bilancin e ditëve të mbetura. Punonjësit bëjnë kërkesë nga telefoni, menaxheri aprovon, dhe sistemi llogarit ditët automatikisht.",
      en: "Manage all types of leave, requests and remaining days balance. Employees request from phone, manager approves, and the system calculates days automatically.",
      es: "Gestione todos los tipos de permisos, solicitudes y el saldo de días restantes. Los empleados solicitan desde el teléfono, el gerente aprueba y el sistema calcula los días automáticamente.",
      de: "Verwalten Sie alle Arten von Urlaub, Anträge und den Resttagessaldo. Mitarbeiter beantragen vom Telefon, der Manager genehmigt und das System berechnet die Tage automatisch.",
      mk: "Управувајте со сите видови отсуства, барања и салдо на преостанати денови. Вработените бараат од телефонот, менаџерот одобрува, а системот ги пресметува деновите автоматски.",
    },
    benefits: [
      { sq: "Të gjitha llojet: vjetore, sëmundje, lindje, pa pagesë", en: "All types: annual, sick, maternity, unpaid", es: "Todos los tipos: anual, enfermedad, maternidad, sin pago", de: "Alle Arten: Jahres-, Kranken-, Mutterschutz-, unbezahlter Urlaub", mk: "Сите видови: годишен, боледување, породилен, неплатен" },
      { sq: "Kërkesë pushimi nga telefoni — aprovim direkt", en: "Leave request from phone — direct approval", es: "Solicitud de permiso desde el teléfono — aprobación directa", de: "Urlaubsantrag vom Telefon — direkte Genehmigung", mk: "Барање за отсуство од телефон — директно одобрување" },
      { sq: "Ditët e mbetura dhe bilanci i pushimeve", en: "Remaining days and leave balance", es: "Días restantes y saldo de permisos", de: "Verbleibende Tage und Urlaubssaldo", mk: "Преостанати денови и салдо на отсуства" },
      { sq: "Kalendar ekipi me pushimet e të gjithëve", en: "Team calendar with everyone's leave", es: "Calendario de equipo con los permisos de todos", de: "Teamkalender mit dem Urlaub aller", mk: "Тимски календар со отсуствата на сите" },
      { sq: "Raporte mungese dhe trende", en: "Absence reports and trends", es: "Informes de ausencias y tendencias", de: "Abwesenheitsberichte und Trends", mk: "Извештаи за отсуства и трендови" },
      { sq: "Historiku i plotë i pushimeve për çdo punonjës", en: "Complete leave history for each employee", es: "Historial completo de permisos para cada empleado", de: "Vollständige Urlaubshistorie für jeden Mitarbeiter", mk: "Целосна историја на отсуства за секој вработен" },
    ],
    workflow: [
      { step: "1", sq: "Punonjësi zgjedh llojin e pushimit dhe datat nga telefoni", en: "Employee selects leave type and dates from phone", es: "El empleado selecciona el tipo de permiso y las fechas desde el teléfono", de: "Mitarbeiter wählt Urlaubsart und Daten vom Telefon", mk: "Вработениот избира вид на отсуство и датуми од телефонот" },
      { step: "2", sq: "Menaxheri merr njoftimin dhe aprovon ose refuzon me komentar", en: "Manager receives notification and approves or rejects with comment", es: "El gerente recibe la notificación y aprueba o rechaza con comentario", de: "Manager erhält Benachrichtigung und genehmigt oder lehnt mit Kommentar ab", mk: "Менаџерот добива известување и одобрува или одбива со коментар" },
      { step: "3", sq: "Sistemi llogarit automatikisht ditët e mbetura dhe bilancin", en: "System automatically calculates remaining days and balance", es: "El sistema calcula automáticamente los días restantes y el saldo", de: "System berechnet automatisch verbleibende Tage und Saldo", mk: "Системот автоматски ги пресметува преостанатите денови и салдото" },
      { step: "4", sq: "Kalendari i ekipit përditësohet — të gjithë shohin kush mungon", en: "Team calendar updates — everyone sees who is absent", es: "El calendario del equipo se actualiza — todos ven quién está ausente", de: "Teamkalender wird aktualisiert — alle sehen, wer abwesend ist", mk: "Тимскиот календар се ажурира — сите гледаат кој отсуствува" },
    ],
    capabilities: [
      { icon: "🏖️", title: { sq: "Pushime Vjetore", en: "Annual Leave", es: "Permiso Anual", de: "Jahresurlaub", mk: "Годишен Одмор" }, desc: { sq: "Ditë pushimi vjetor me llogaritje automatike të bilancit", en: "Annual leave days with automatic balance calculation", es: "Días de permiso anual con cálculo automático de saldo", de: "Jahresurlaubstage mit automatischer Saldoberechnung", mk: "Денови годишен одмор со автоматска пресметка на салдо" } },
      { icon: "🤒", title: { sq: "Pushim Sëmundje", en: "Sick Leave", es: "Licencia por Enfermedad", de: "Krankheitsurlaub", mk: "Боледување" }, desc: { sq: "Regjistroni ditë sëmundje me mundësi ngarkimi certifikate", en: "Record sick days with option to upload certificate", es: "Registre días de enfermedad con opción de cargar certificado", de: "Krankheitstage erfassen mit Option zum Hochladen eines Zertifikats", mk: "Евидентирајте денови на боледување со можност за прикачување на лекарско уверение" } },
      { icon: "👶", title: { sq: "Pushim Lindje", en: "Maternity Leave", es: "Licencia de Maternidad", de: "Mutterschutz", mk: "Породилно Отсуство" }, desc: { sq: "Menaxhoni pushimet e lindjes sipas legjislacionit", en: "Manage maternity leave according to legislation", es: "Gestione la licencia de maternidad según la legislación", de: "Mutterschutz gemäß Gesetzgebung verwalten", mk: "Управувајте со породилното отсуство според законодавството" } },
      { icon: "📅", title: { sq: "Kalendar Ekipi", en: "Team Calendar", es: "Calendario de Equipo", de: "Teamkalender", mk: "Тимски Календар" }, desc: { sq: "Shikoni kush mungon, kush ka pushim, kush është në zyrë", en: "See who's absent, who's on leave, who's in office", es: "Vea quién está ausente, quién tiene permiso, quién está en la oficina", de: "Sehen Sie, wer abwesend ist, wer Urlaub hat, wer im Büro ist", mk: "Видете кој отсуствува, кој е на одмор, кој е во канцеларија" } },
      { icon: "📊", title: { sq: "Raporte Mungese", en: "Absence Reports", es: "Informes de Ausencia", de: "Abwesenheitsberichte", mk: "Извештаи за Отсуства" }, desc: { sq: "Analiza e trendeve: kush mungon më shumë, cilat ditë, arsyet", en: "Trend analysis: who is absent most, which days, reasons", es: "Análisis de tendencias: quién falta más, qué días, razones", de: "Trendanalyse: wer am meisten fehlt, welche Tage, Gründe", mk: "Анализа на трендови: кој отсуствува најмногу, кои денови, причини" } },
      { icon: "📱", title: { sq: "Kërkesë nga Telefoni", en: "Mobile Request", es: "Solicitud Móvil", de: "Mobile Anfrage", mk: "Мобилно Барање" }, desc: { sq: "Punonjësi bën kërkesë në çast nga telefoni — aprovim i menjëhershëm", en: "Employee makes instant request from phone — immediate approval", es: "El empleado hace solicitud instantánea desde el teléfono — aprobación inmediata", de: "Mitarbeiter stellt sofortige Anfrage vom Telefon — sofortige Genehmigung", mk: "Вработениот поднесува моментално барање од телефонот — моментално одобрување" } },
    ],
  }} />;
}
