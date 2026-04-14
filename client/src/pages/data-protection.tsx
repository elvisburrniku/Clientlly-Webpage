import { ArrowLeft, Shield, Lock, Server, Globe, Award, KeyRound, FileCheck, Database, Users, Clock, AlertTriangle, CheckCircle, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element, fr?: string | JSX.Element, pt?: string | JSX.Element, it?: string | JSX.Element): string | JSX.Element {
  switch (lang) {
    case 'sq': return alb;
    case 'es': return es ?? eng;
    case 'de': return de ?? eng;
    case 'mk': return mk ?? eng;
    case 'fr': return fr ?? eng;
    case 'pt': return pt ?? eng;
    case 'it': return it ?? eng;
    default:   return eng;
  }
}


export default function DataProtection() {
  const { currentLanguage: lang } = useLanguage();

  const certifications = [
    { icon: Shield, label: sq(lang, "GDPR Compliant", "GDPR Compliant", "Compatible con RGPD", "DSGVO-konform", "Во согласност со GDPR", "Conforme RGPD", "Conforme ao RGPD", "Conforme GDPR"), desc: sq(lang,"Plotësisht në përputhje me rregulloren europiane","Fully compliant with European regulation","Totalmente compatible con la regulación europea","Vollständig konform mit der europäischen Verordnung","Целосно во согласност со европската регулатива", "Entièrement conforme à la réglementation européenne", "Totalmente conforme com a regulamentação europeia", "Pienamente conforme alla normativa europea") },
    { icon: Lock, label: "ISO 27001", desc: sq(lang,"Serverë të certifikuar ndërkombëtarisht","Internationally certified servers","Servidores certificados internacionalmente","International zertifizierte Server","Меѓународно сертифицирани сервери", "Serveurs certifiés internationalement", "Servidores certificados internacionalmente", "Server certificati internazionalmente") },
    { icon: Award, label: "PCI DSS Level 1", desc: sq(lang,"Standardi më i lartë i sigurisë së pagesave","Highest payment security standard","El más alto estándar de seguridad de pagos","Höchster Zahlungssicherheitsstandard","Највисок стандард за безбедност на плаќања", "La plus haute norme de sécurité des paiements", "A mais alta norma de segurança de pagamentos", "Il più alto standard di sicurezza dei pagamenti") },
    { icon: Server, label: "SOC 2 Type II", desc: sq(lang,"Auditim i pavarur i kontrollit të sigurisë","Independent security control audit","Auditoría independiente de control de seguridad","Unabhängige Sicherheitskontrollprüfung","Независна ревизија на безбедносна контрола", "Audit de contrôle de sécurité indépendant", "Auditoria de controlo de segurança independente", "Audit di controllo della sicurezza indipendente") },
  ];

  const measures = [
    {
      icon: KeyRound,
      title: sq(lang,"Enkriptim nga fundi në fund","End-to-end encryption","Cifrado de extremo a extremo","Ende-zu-Ende-Verschlüsselung","Енкрипција од крај до крај", "Chiffrement de bout en bout", "Encriptação de ponta a ponta", "Crittografia end-to-end"),
      content: sq(lang,
        "Të gjitha të dhënat tuaja enkriptohen me AES-256 gjatë ruajtjes dhe me TLS 1.3 gjatë transferimit. Asnjë punonjës i Clientlly nuk mund të lexojë të dhënat tuaja të biznesit — çelësat e enkriptimit janë unike për çdo llogari.",
        "All your data is encrypted with AES-256 at rest and TLS 1.3 in transit. No Clientlly employee can read your business data — encryption keys are unique to each account.",
        "Todos sus datos están cifrados con AES-256 en reposo y TLS 1.3 en tránsito. Ningún empleado de Clientlly puede leer sus datos comerciales — las claves de cifrado son únicas para cada cuenta.",
        "Alle Ihre Daten werden mit AES-256 im Ruhezustand und TLS 1.3 bei der Übertragung verschlüsselt. Kein Clientlly-Mitarbeiter kann Ihre Geschäftsdaten lesen — die Verschlüsselungsschlüssel sind für jedes Konto einzigartig.",
        "Сите ваши податоци се шифрирани со AES-256 при мирување и TLS 1.3 при пренос. Ниеден вработен на Clientlly не може да ги чита вашите деловни податоци — клучевите за шифрирање се уникатни за секоја сметка."
      , "Toutes vos données sont chiffrées avec AES-256 au repos et TLS 1.3 en transit.", "Todos os seus dados são encriptados com AES-256 em repouso e TLS 1.3 em trânsito.", "Tutti i tuoi dati sono crittografati con AES-256 a riposo e TLS 1.3 in transito."),
    },
    {
      icon: Server,
      title: sq(lang,"Infrastrukturë e sigurt në BE","Secure EU infrastructure","Infraestructura segura en la UE","Sichere EU-Infrastruktur","Безбедна ЕУ инфраструктура", "Infrastructure UE sécurisée", "Infraestrutura UE segura", "Infrastruttura UE sicura"),
      content: sq(lang,
        "Serverët tanë ndodhen ekskluzivisht në Gjermani (Hetzner Cloud — Frankfurt), brenda juridiksionit të Bashkimit Europian. Nuk transferojmë asnjë të dhënë jashtë BE. Serverët kanë certifikare ISO 27001 dhe janë fizikisht të siguruar.",
        "Our servers are located exclusively in Germany (Hetzner Cloud — Frankfurt), within EU jurisdiction. We do not transfer any data outside the EU. Servers are ISO 27001 certified and physically secured.",
        "Nuestros servidores están ubicados exclusivamente en Alemania (Hetzner Cloud — Frankfurt), dentro de la jurisdicción de la UE. No transferimos ningún dato fuera de la UE. Los servidores tienen certificación ISO 27001 y están físicamente asegurados.",
        "Unsere Server befinden sich ausschließlich in Deutschland (Hetzner Cloud — Frankfurt), innerhalb der EU-Gerichtsbarkeit. Wir übertragen keine Daten außerhalb der EU. Die Server sind ISO 27001 zertifiziert und physisch gesichert.",
        "Нашите сервери се лоцирани исклучиво во Германија (Hetzner Cloud — Франкфурт), во рамките на јурисдикцијата на ЕУ. Не пренесуваме никакви податоци надвор од ЕУ. Серверите се ISO 27001 сертифицирани и физички обезбедени."
      ),
    },
    {
      icon: FileCheck,
      title: sq(lang,"Backup automatik ditor","Automatic daily backups","Copias de seguridad diarias automáticas","Automatische tägliche Backups","Автоматски дневни резервни копии", "Sauvegardes quotidiennes automatiques", "Cópias de segurança diárias automáticas", "Backup giornalieri automatici"),
      content: sq(lang,
        "Të dhënat tuaja kopjohen automatikisht çdo 24 orë dhe ruhen të enkriptuara në 3 lokacione të ndryshme. Mund të restaurohet çdo pikë ruajtjeje nga 30 ditët e fundit. Backup-et janë të testuar javore.",
        "Your data is automatically backed up every 24 hours and stored encrypted in 3 different locations. Any save point from the last 30 days can be restored. Backups are weekly tested.",
        "Sus datos se respaldan automáticamente cada 24 horas y se almacenan cifrados en 3 ubicaciones diferentes. Se puede restaurar cualquier punto de guardado de los últimos 30 días. Las copias de seguridad se prueban semanalmente.",
        "Ihre Daten werden alle 24 Stunden automatisch gesichert und verschlüsselt an 3 verschiedenen Standorten gespeichert. Jeder Speicherpunkt der letzten 30 Tage kann wiederhergestellt werden. Backups werden wöchentlich getestet.",
        "Вашите податоци автоматски се копираат на секои 24 часа и се чуваат шифрирани на 3 различни локации. Секоја точка на зачувување од последните 30 дена може да се обнови. Резервните копии се тестираат неделно."
      , "Vos données sont automatiquement sauvegardées toutes les 24 heures et stockées chiffrées dans 3 emplacements différents.", "Os seus dados são automaticamente copiados a cada 24 horas e armazenados encriptados em 3 localizações diferentes.", "I tuoi dati vengono automaticamente salvati ogni 24 ore e archiviati crittografati in 3 posizioni diverse."),
    },
    {
      icon: Users,
      title: sq(lang,"Kontrolli i aksesit me role","Role-based access control","Control de acceso basado en roles","Rollenbasierte Zugriffskontrolle","Контрола на пристап базирана на улоги", "Contrôle d'accès basé sur les rôles", "Controlo de acesso baseado em funções", "Controllo degli accessi basato sui ruoli"),
      content: sq(lang,
        "Ju kontrolloni plotësisht kush ka akses dhe çfarë mund të bëjë. Sistemin e roleve (admin, kontabilist, menaxher, operator) ju lejon të caktoni leje specifike për çdo anëtar të ekipit.",
        "You have full control over who has access and what they can do. The role system (admin, accountant, manager, operator) lets you assign specific permissions to each team member.",
        "Tiene control total sobre quién tiene acceso y qué puede hacer. El sistema de roles (admin, contador, gerente, operador) le permite asignar permisos específicos a cada miembro del equipo.",
        "Sie haben die volle Kontrolle darüber, wer Zugriff hat und was er tun kann. Das Rollensystem (Admin, Buchhalter, Manager, Operator) ermöglicht es Ihnen, jedem Teammitglied spezifische Berechtigungen zuzuweisen.",
        "Имате целосна контрола над тоа кој има пристап и што може да прави. Системот на улоги (админ, сметководител, менаџер, оператор) ви овозможува да доделите специфични дозволи на секој член на тимот."
      ),
    },
    {
      icon: AlertTriangle,
      title: sq(lang,"Monitorim dhe detektim 24/7","24/7 monitoring and detection","Monitoreo y detección 24/7","24/7 Überwachung und Erkennung","24/7 мониторинг и детекција", "Surveillance et détection 24h/7j", "Monitorização e deteção 24h/7d", "Monitoraggio e rilevamento 24h/7g"),
      content: sq(lang,
        "Sistemet tona monitorojnë aktivitetin e llogarive 24/7 dhe lajmërojnë automatikisht për sjellje të dyshimta: hyrje nga vendndodhje të reja, shumë tentativa të dështuara, ose eksporte të mëdha të të dhënave.",
        "Our systems monitor account activity 24/7 and automatically alert for suspicious behaviour: logins from new locations, many failed attempts, or large data exports.",
        "Nuestros sistemas monitorean la actividad de las cuentas 24/7 y alertan automáticamente sobre comportamientos sospechosos: inicios de sesión desde nuevas ubicaciones, muchos intentos fallidos o exportaciones grandes de datos.",
        "Unsere Systeme überwachen die Kontoaktivität rund um die Uhr und warnen automatisch bei verdächtigem Verhalten: Anmeldungen von neuen Standorten, viele fehlgeschlagene Versuche oder große Datenexporte.",
        "Нашите системи ја следат активноста на сметките 24/7 и автоматски предупредуваат за сомнително однесување: најавувања од нови локации, многу неуспешни обиди или големи извози на податоци."
      ),
    },
    {
      icon: Globe,
      title: sq(lang,"Përputhshmëri GDPR","GDPR compliance","Cumplimiento del RGPD","DSGVO-Konformität","Усогласеност со GDPR", "Conformité RGPD", "Conformidade com o RGPD", "Conformità GDPR"),
      content: sq(lang,
        "Si operatorë të të dhënave sipas GDPR, plotësojmë të gjitha detyrimet: regjistri i aktiviteteve të përpunimit (ROPA), vlerësimet e ndikimit (DPIA) për funksione të reja, kontrata me nënprocesuesit, dhe raportimi i shkeljeve brenda 72 orësh.",
        "As data controllers under GDPR, we fulfil all obligations: records of processing activities (ROPA), impact assessments (DPIA) for new features, contracts with sub-processors, and breach reporting within 72 hours.",
        "Como responsables del tratamiento de datos según el RGPD, cumplimos todas las obligaciones: registros de actividades de procesamiento (ROPA), evaluaciones de impacto (DPIA) para nuevas funciones, contratos con subprocesadores e informes de brechas dentro de las 72 horas.",
        "Als Verantwortliche gemäß DSGVO erfüllen wir alle Pflichten: Verzeichnisse der Verarbeitungstätigkeiten (ROPA), Folgenabschätzungen (DPIA) für neue Funktionen, Verträge mit Auftragsverarbeitern und Meldung von Verstößen innerhalb von 72 Stunden.",
        "Како контролори на податоци според GDPR, ги исполнуваме сите обврски: евиденција на активности за обработка (ROPA), проценки на влијание (DPIA) за нови функции, договори со подобработувачи и пријавување на прекршувања во рок од 72 часа."
      ),
    },
  ];

  const rights = [
    { icon: CheckCircle, title: sq(lang,"Akses i plotë","Full access","Acceso completo","Vollständiger Zugang","Целосен пристап", "Accès complet", "Acesso total", "Accesso completo"), desc: sq(lang,"Kërkoni eksport të të gjitha të dhënave tuaja","Request export of all your data","Solicite la exportación de todos sus datos","Fordern Sie den Export all Ihrer Daten an","Побарајте извоз на сите ваши податоци", "Demander l'exportation de toutes vos données", "Solicitar exportação de todos os seus dados", "Richiedere l'esportazione di tutti i dati") },
    { icon: FileCheck,   title: sq(lang,"Korrigjim i menjëhershëm","Immediate correction","Corrección inmediata","Sofortige Korrektur","Итна корекција", "Correction immédiate", "Correção imediata", "Correzione immediata"), desc: sq(lang,"Ndreqni çdo të dhënë të pasaktë","Correct any inaccurate data","Corrija cualquier dato inexacto","Korrigieren Sie ungenaue Daten","Поправете неточни податоци", "Corriger toute donnée inexacte", "Corrigir qualquer dado inexato", "Correggere eventuali dati inaccurati") },
    { icon: AlertTriangle,title: sq(lang,"Fshirje e garantuar","Guaranteed erasure","Eliminación garantizada","Garantierte Löschung","Гарантирано бришење", "Effacement garanti", "Eliminação garantida", "Cancellazione garantita"), desc: sq(lang,"Fshini llogarinë dhe të dhënat brenda 90 ditësh","Delete account and data within 90 days","Elimine la cuenta y los datos en 90 días","Konto und Daten innerhalb von 90 Tagen löschen","Избришете ја сметката и податоците во рок од 90 дена", "Supprimer compte et données dans les 90 jours", "Eliminar conta e dados em 90 dias", "Eliminare account e dati entro 90 giorni") },
    { icon: Database,    title: sq(lang,"Portabilitet i plotë","Full portability","Portabilidad completa","Vollständige Portabilität","Целосна преносливост", "Portabilité complète", "Portabilidade total", "Piena portabilità"), desc: sq(lang,"Merrni të dhënat në CSV, Excel ose JSON","Get data in CSV, Excel or JSON","Obtenga datos en CSV, Excel o JSON","Daten in CSV, Excel oder JSON erhalten","Добијте податоци во CSV, Excel или JSON") },
    { icon: Lock,        title: sq(lang,"Kufizim i përpunimit","Processing restriction","Restricción de procesamiento","Verarbeitungseinschränkung","Ограничување на обработка", "Restriction de traitement", "Restrição de processamento", "Restrizione del trattamento"), desc: sq(lang,"Ngrini objeksione për çdo lloj përpunimi","Raise objections to any type of processing","Presente objeciones a cualquier tipo de procesamiento","Erheben Sie Einwände gegen jede Art der Verarbeitung","Поднесете приговори за секој вид обработка", "Soulever des objections à tout type de traitement", "Levantar objeções a qualquer tipo de processamento", "Sollevare obiezioni a qualsiasi tipo di elaborazione") },
    { icon: Clock,       title: sq(lang,"Përgjigje 72-orëshe","72-hour response","Respuesta en 72 horas","72-Stunden-Antwort","Одговор во 72 часа", "Réponse en 72 heures", "Resposta em 72 horas", "Risposta in 72 ore"), desc: sq(lang,"Çdo kërkesë ligjore trajtohet brenda 72 orësh","Every legal request handled within 72 hours","Cada solicitud legal se gestiona en 72 horas","Jede rechtliche Anfrage wird innerhalb von 72 Stunden bearbeitet","Секое правно барање се обработува во рок од 72 часа", "Chaque demande juridique traitée dans les 72 heures", "Cada pedido legal tratado em 72 horas", "Ogni richiesta legale gestita entro 72 ore") },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />{sq(lang, "Kthehu", "Back", "Volver", "Zurück", "Назад", "Retour", "Voltar", "Indietro")}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
            <Shield className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Mbrojtja e të Dhënave","Data Protection","Protección de datos","Datenschutz","Заштита на податоци", "Protection des données", "Proteção de dados", "Protezione dei dati")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,
              <>Të dhënat tuaja janë<br /><span className="text-indigo-600">gjithmonë të sigurta</span></>,
              <>Your data is<br /><span className="text-indigo-600">always secure</span></>,
              <>Sus datos están<br /><span className="text-indigo-600">siempre seguros</span></>,
              <>Ihre Daten sind<br /><span className="text-indigo-600">immer sicher</span></>,
              <>Вашите податоци се<br /><span className="text-indigo-600">секогаш безбедни</span></>
            )}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-8">
            {sq(lang,
              "Clientlly zbaton masat më të larta të sigurisë për të mbrojtur të dhënat tuaja të biznesit. GDPR i plotë, serverë në BE, enkriptim i nivelit bankar.",
              "Clientlly implements the highest security measures to protect your business data. Full GDPR, EU servers, bank-level encryption.",
              "Clientlly implementa las más altas medidas de seguridad para proteger sus datos comerciales. RGPD completo, servidores en la UE, cifrado de nivel bancario.",
              "Clientlly implementiert die höchsten Sicherheitsmaßnahmen zum Schutz Ihrer Geschäftsdaten. Vollständige DSGVO, EU-Server, Verschlüsselung auf Bankniveau.",
              "Clientlly ги применува највисоките безбедносни мерки за заштита на вашите деловни податоци. Целосен GDPR, ЕУ сервери, шифрирање на банкарско ниво."
            )}
          </p>

          {/* Certifications */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c,i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-4 rounded-xl border border-gray-200 flex flex-col items-start gap-2">
                  <Icon className="h-5 w-5 text-indigo-600" />
                  <p className="text-sm font-bold text-gray-900">{c.label}</p>
                  <p className="text-xs text-gray-400 leading-snug">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security measures */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Masat teknike të sigurisë","Technical security measures","Medidas técnicas de seguridad","Technische Sicherheitsmaßnahmen","Технички безбедносни мерки", "Mesures de sécurité techniques", "Medidas de segurança técnicas", "Misure di sicurezza tecniche")}
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            {sq(lang,"Si mbrojmë të dhënat tuaja çdo sekondë të çdo dite","How we protect your data every second of every day","Cómo protegemos sus datos cada segundo de cada día","Wie wir Ihre Daten jede Sekunde jeden Tages schützen","Како ги штитиме вашите податоци секоја секунда од секој ден", "Comment nous protégeons vos données chaque seconde", "Como protegemos os seus dados a cada segundo", "Come proteggiamo i tuoi dati ogni secondo")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {measures.map((m,i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{m.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your rights */}
      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Të drejtat tuaja sipas GDPR","Your rights under GDPR","Sus derechos bajo el RGPD","Ihre Rechte unter der DSGVO","Вашите права според GDPR", "Vos droits sous le RGPD", "Os seus direitos ao abrigo do RGPD", "I tuoi diritti ai sensi del GDPR")}
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            {sq(lang,"Si qytetar i BE, keni të drejta të plota mbi të dhënat tuaja","As an EU citizen, you have full rights over your data","Como ciudadano de la UE, tiene plenos derechos sobre sus datos","Als EU-Bürger haben Sie volle Rechte über Ihre Daten","Како граѓанин на ЕУ, имате целосни права над вашите податоци")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r,i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-0.5">{r.title}</p>
                    <p className="text-xs text-gray-400 leading-snug">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incident response */}
      <section className="py-14 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {sq(lang,"Plani i reagimit ndaj incidenteve","Incident response plan","Plan de respuesta a incidentes","Vorfallreaktionsplan","План за одговор на инциденти", "Plan de réponse aux incidents", "Plano de resposta a incidentes", "Piano di risposta agli incidenti")}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {sq(lang,"Çfarë ndodh nëse zbulohet një shkelje e sigurisë","What happens if a security breach is detected","Qué sucede si se detecta una brecha de seguridad","Was passiert, wenn ein Sicherheitsverstoß erkannt wird","Што се случува ако се открие безбедносен прекршок", "Que se passe-t-il si une violation de sécurité est détectée", "O que acontece se for detetada uma violação de segurança", "Cosa succede se viene rilevata una violazione della sicurezza")}
          </p>
          <div className="flex flex-col gap-0">
            {[
              { time: sq(lang,"0–1 orë","0–1 hour","0–1 hora","0–1 Stunde","0–1 час", "0–1 heure", "0–1 hora", "0–1 ora"),  label: sq(lang,"Detektim dhe izolim","Detection and isolation","Detección y aislamiento","Erkennung und Isolierung","Детекција и изолација"), desc: sq(lang,"Sistemi automatik bllokoi aksesin dhe lajmëron ekipin e sigurisë","Automatic system blocks access and alerts security team","El sistema automático bloquea el acceso y alerta al equipo de seguridad","Das automatische System sperrt den Zugriff und alarmiert das Sicherheitsteam","Автоматскиот систем го блокира пристапот и го предупредува безбедносниот тим") },
              { time: sq(lang,"1–24 orë","1–24 hours","1–24 horas","1–24 Stunden","1–24 часа", "1–24 heures", "1–24 horas", "1–24 ore"),label: sq(lang,"Analizë dhe vlerësim","Analysis and assessment","Análisis y evaluación","Analyse und Bewertung","Анализа и проценка"), desc: sq(lang,"Ekipi teknik vlerëson shtrirjen dhe natyrën e incidentit","Technical team assesses the scope and nature of the incident","El equipo técnico evalúa el alcance y la naturaleza del incidente","Das technische Team bewertet den Umfang und die Art des Vorfalls","Техничкиот тим го проценува обемот и природата на инцидентот") },
              { time: sq(lang,"24–72 orë","24–72 hours","24–72 horas","24–72 Stunden","24–72 часа", "24–72 heures", "24–72 horas", "24–72 ore"),label: sq(lang,"Njoftim i autoriteteve","Notification of authorities","Notificación a las autoridades","Benachrichtigung der Behörden","Известување на властите"), desc: sq(lang,"Raportohet te autoriteti mbikëqyrës (ADISA/DPA) si kërkon GDPR","Reported to supervisory authority (ADISA/DPA) as GDPR requires","Se informa a la autoridad supervisora (ADISA/DPA) según lo requiere el RGPD","Meldung an die Aufsichtsbehörde (ADISA/DPA) gemäß DSGVO","Се пријавува до надзорниот орган (ADISA/DPA) како што бара GDPR") },
              { time: sq(lang,"72 orë+","72 hours+","72 horas+","72 Stunden+","72 часа+"),   label: sq(lang,"Njoftim i përdoruesve","User notification","Notificación a usuarios","Benutzerbenachrichtigung","Известување на корисниците"), desc: sq(lang,"Ju njoftoheni drejtpërdrejt nëse të dhënat tuaja janë prekur","You are directly notified if your data was affected","Se le notifica directamente si sus datos fueron afectados","Sie werden direkt benachrichtigt, wenn Ihre Daten betroffen waren","Директно ве известуваме доколку вашите податоци биле засегнати") },
            ].map((step,i,arr) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i+1}</div>
                  {i < arr.length-1 && <div className="w-px flex-1 bg-indigo-100 my-1" />}
                </div>
                <div className="pb-8 pt-1">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{step.time}</span>
                  <p className="text-base font-bold text-gray-900 mt-2 mb-1">{step.label}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border border-indigo-100 bg-indigo-50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-2">
                  {sq(lang,"Kontaktoni DPO-n tonë","Contact our DPO","Contacte a nuestro DPO","Kontaktieren Sie unseren DSB","Контактирајте го нашиот DPO")}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {sq(lang,
                    "Zyrtari ynë i Mbrojtjes së të Dhënave (DPO) trajton çdo pyetje ose ankesë lidhur me mbrojtjen e të dhënave tuaja. Keni të drejtë të paraqisni ankesë edhe te AIP (Agjencia për Informim dhe Privatësi e Kosovës) ose te autoriteti i vendit tuaj.",
                    "Our Data Protection Officer (DPO) handles any questions or complaints regarding the protection of your data. You also have the right to lodge a complaint with the Kosovo Agency for Information and Privacy (AIP) or your country's authority.",
                    "Nuestro Delegado de Protección de Datos (DPO) gestiona cualquier pregunta o queja relacionada con la protección de sus datos. También tiene derecho a presentar una queja ante la Agencia de Información y Privacidad de Kosovo (AIP) o la autoridad de su país.",
                    "Unser Datenschutzbeauftragter (DSB) bearbeitet alle Fragen oder Beschwerden zum Schutz Ihrer Daten. Sie haben auch das Recht, eine Beschwerde bei der kosovarischen Agentur für Information und Privatsphäre (AIP) oder der Behörde Ihres Landes einzureichen.",
                    "Нашиот службеник за заштита на податоци (DPO) обработува сите прашања или жалби во врска со заштитата на вашите податоци. Исто така имате право да поднесете жалба до Агенцијата за информации и приватност на Косово (AIP) или до органот на вашата земја."
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">dpo@clientlly.com</span>
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/contact"
                  className="block w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-sm text-center">
                  {sq(lang,"Kontakto DPO","Contact DPO","Contactar DPO","DSB kontaktieren","Контактирајте DPO")}
                </Link>
                <Link href="/privacy-policy"
                  className="block w-full py-3 px-5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all text-sm text-center">
                  {sq(lang,"Lexo Politikën e Privatësisë","Read Privacy Policy","Leer la Política de Privacidad","Datenschutzrichtlinie lesen","Прочитајте ја Политиката за приватност")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
