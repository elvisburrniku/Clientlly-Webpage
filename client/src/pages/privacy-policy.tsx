import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

export default function PrivacyPolicy() {
  const { currentLanguage: lang } = useLanguage();

  const sections = [
    {
      icon: Database,
      title: sq(lang, "Të dhënat që mbledhim", "Data we collect", "Datos que recopilamos", "Daten, die wir erheben", "Податоци што ги собираме"),
      content: sq(lang,
        `Ne mbledhim vetëm të dhënat e nevojshme për të ofruar shërbimin Clientlly:

• Të dhëna llogarie: emri, adresa email, fjalëkalimi i enkriptuar, emri i kompanisë
• Të dhëna biznesi: fatura, klientë, shpenzime, inventar — të cilat i vendosni ju
• Të dhëna teknike: adresa IP, lloji i shfletuesit, koha e hyrjes (vetëm për siguri)
• Të dhëna pagese: procesohen nga Stripe — ne nuk ruajmë numrin e kartës

Ne NUK mbledhim: të dhëna sensibile personale, të dhëna të fëmijëve nën 16 vjeç, ose të dhëna biometrike.`,
        `We collect only the data necessary to provide the Clientlly service:

• Account data: name, email address, encrypted password, company name
• Business data: invoices, clients, expenses, inventory — entered by you
• Technical data: IP address, browser type, login time (for security only)
• Payment data: processed by Stripe — we do not store card numbers

We do NOT collect: sensitive personal data, data of children under 16, or biometric data.`,
        `Recopilamos solo los datos necesarios para proporcionar el servicio Clientlly:

• Datos de cuenta: nombre, dirección de email, contraseña encriptada, nombre de empresa
• Datos comerciales: facturas, clientes, gastos, inventario — ingresados por usted
• Datos técnicos: dirección IP, tipo de navegador, hora de inicio de sesión (solo por seguridad)
• Datos de pago: procesados por Stripe — no almacenamos números de tarjeta

NO recopilamos: datos personales sensibles, datos de menores de 16 años, ni datos biométricos.`,
        `Wir erheben nur die Daten, die zur Bereitstellung des Clientlly-Dienstes erforderlich sind:

• Kontodaten: Name, E-Mail-Adresse, verschlüsseltes Passwort, Firmenname
• Geschäftsdaten: Rechnungen, Kunden, Ausgaben, Inventar — von Ihnen eingegeben
• Technische Daten: IP-Adresse, Browsertyp, Anmeldezeit (nur für Sicherheitszwecke)
• Zahlungsdaten: von Stripe verarbeitet — wir speichern keine Kartennummern

Wir erheben NICHT: sensible personenbezogene Daten, Daten von Kindern unter 16 Jahren oder biometrische Daten.`,
        `Собираме само податоци потребни за обезбедување на услугата Clientlly:

• Податоци за сметка: име, email адреса, шифрирана лозинка, име на компанија
• Деловни податоци: фактури, клиенти, трошоци, инвентар — внесени од вас
• Технички податоци: IP адреса, тип на прелистувач, време на најава (само за безбедност)
• Податоци за плаќање: обработени од Stripe — не чуваме броеви на картички

НЕ собираме: чувствителни лични податоци, податоци за деца под 16 години, ниту биометриски податоци.`
      ),
    },
    {
      icon: Eye,
      title: sq(lang, "Si i përdorim të dhënat", "How we use your data", "Cómo usamos sus datos", "Wie wir Ihre Daten verwenden", "Како ги користиме вашите податоци"),
      content: sq(lang,
        `Të dhënat tuaja përdoren ekskluzivisht për:

• Ofrimin dhe funksionimin e platformës Clientlly
• Dërgimin e faturave, njoftimeve dhe raporteve që ju konfiguroni
• Mbështetjen teknike kur na kontaktoni
• Sigurinë e llogarisë dhe parandalimin e mashtrimit
• Komunikime lidhur me shërbimin (jo marketing pa lejen tuaj)

Ne NUK i shesim, ndajmë ose japim me qira të dhënat tuaja palëve të treta për qëllime tregtare.`,
        `Your data is used exclusively for:

• Providing and operating the Clientlly platform
• Sending invoices, notifications and reports you configure
• Technical support when you contact us
• Account security and fraud prevention
• Service-related communications (no marketing without your consent)

We do NOT sell, share or rent your data to third parties for commercial purposes.`,
        `Sus datos se utilizan exclusivamente para:

• Proporcionar y operar la plataforma Clientlly
• Enviar facturas, notificaciones e informes que usted configure
• Soporte técnico cuando nos contacte
• Seguridad de la cuenta y prevención de fraudes
• Comunicaciones relacionadas con el servicio (sin marketing sin su consentimiento)

NO vendemos, compartimos ni alquilamos sus datos a terceros con fines comerciales.`,
        `Ihre Daten werden ausschließlich verwendet für:

• Bereitstellung und Betrieb der Clientlly-Plattform
• Versand von Rechnungen, Benachrichtigungen und Berichten, die Sie konfigurieren
• Technischen Support bei Kontaktaufnahme
• Kontosicherheit und Betrugsprävention
• Servicebezogene Kommunikation (kein Marketing ohne Ihre Zustimmung)

Wir verkaufen, teilen oder vermieten Ihre Daten NICHT an Dritte zu kommerziellen Zwecken.`,
        `Вашите податоци се користат исклучиво за:

• Обезбедување и работа на платформата Clientlly
• Испраќање фактури, известувања и извештаи што ги конфигурирате
• Техничка поддршка кога ќе не контактирате
• Безбедност на сметката и спречување измами
• Комуникации поврзани со услугата (без маркетинг без ваша согласност)

НЕ ги продаваме, споделуваме или издаваме под наем вашите податоци на трети страни за комерцијални цели.`
      ),
    },
    {
      icon: Users,
      title: sq(lang, "Ndarja me palë të treta", "Sharing with third parties", "Compartir con terceros", "Weitergabe an Dritte", "Споделување со трети страни"),
      content: sq(lang,
        `Punojmë vetëm me partnere të besuara dhe të certifikuara:

• Stripe — procesim pagesash (PCI DSS Level 1)
• SendGrid/Brevo — dërgim emailesh transaksionale
• Hetzner Cloud — hosting i të dhënave (serverë në Gjermani, BE)
• Sentry — monitorim gabimesh teknik (pa të dhëna personale)

Çdo partner është i detyruar kontraktualisht të mbrojë të dhënat tuaja dhe nuk lejohet t'i përdorë ato jashtë qëllimit të specifikuar.`,
        `We work only with trusted and certified partners:

• Stripe — payment processing (PCI DSS Level 1)
• SendGrid/Brevo — transactional email delivery
• Hetzner Cloud — data hosting (servers in Germany, EU)
• Sentry — technical error monitoring (no personal data)

Each partner is contractually obligated to protect your data and may not use it outside the specified purpose.`,
        `Trabajamos solo con socios de confianza y certificados:

• Stripe — procesamiento de pagos (PCI DSS Level 1)
• SendGrid/Brevo — entrega de emails transaccionales
• Hetzner Cloud — alojamiento de datos (servidores en Alemania, UE)
• Sentry — monitoreo de errores técnicos (sin datos personales)

Cada socio está obligado contractualmente a proteger sus datos y no puede utilizarlos fuera del propósito especificado.`,
        `Wir arbeiten nur mit vertrauenswürdigen und zertifizierten Partnern:

• Stripe — Zahlungsabwicklung (PCI DSS Level 1)
• SendGrid/Brevo — Transaktions-E-Mail-Versand
• Hetzner Cloud — Datenhosting (Server in Deutschland, EU)
• Sentry — Technische Fehlerüberwachung (keine personenbezogenen Daten)

Jeder Partner ist vertraglich verpflichtet, Ihre Daten zu schützen, und darf sie nicht außerhalb des festgelegten Zwecks verwenden.`,
        `Работиме само со доверливи и сертифицирани партнери:

• Stripe — обработка на плаќања (PCI DSS Level 1)
• SendGrid/Brevo — испраќање трансакциски email-ови
• Hetzner Cloud — хостинг на податоци (сервери во Германија, ЕУ)
• Sentry — мониторинг на технички грешки (без лични податоци)

Секој партнер е договорно обврзан да ги заштити вашите податоци и не смее да ги користи надвор од наведената цел.`
      ),
    },
    {
      icon: Lock,
      title: sq(lang, "Siguria e të dhënave", "Data security", "Seguridad de datos", "Datensicherheit", "Безбедност на податоци"),
      content: sq(lang,
        `Zbatojmë masa teknike dhe organizative të nivelit enterprise:

• Enkriptim AES-256 për të dhënat në ruajtje (at rest)
• Enkriptim TLS 1.3 për të dhënat në tranzit (in transit)
• Fjalëkalimet hashohen me bcrypt (kurrë nuk ruhen si tekst)
• Autentifikim me dy faktorë (2FA) i disponueshëm për të gjitha llogaritë
• Backup automatike ditore me enkriptim të plotë
• Serverët vendosen në BE (Gjermani) dhe janë të certifikuar ISO 27001`,
        `We implement enterprise-level technical and organisational measures:

• AES-256 encryption for data at rest
• TLS 1.3 encryption for data in transit
• Passwords hashed with bcrypt (never stored as plain text)
• Two-factor authentication (2FA) available for all accounts
• Automated daily backups with full encryption
• Servers located in the EU (Germany), ISO 27001 certified`,
        `Implementamos medidas técnicas y organizativas de nivel empresarial:

• Cifrado AES-256 para datos en reposo
• Cifrado TLS 1.3 para datos en tránsito
• Contraseñas hasheadas con bcrypt (nunca almacenadas como texto plano)
• Autenticación de dos factores (2FA) disponible para todas las cuentas
• Copias de seguridad diarias automatizadas con cifrado completo
• Servidores ubicados en la UE (Alemania), certificados ISO 27001`,
        `Wir setzen technische und organisatorische Maßnahmen auf Enterprise-Niveau um:

• AES-256-Verschlüsselung für ruhende Daten
• TLS 1.3-Verschlüsselung für Daten während der Übertragung
• Passwörter mit bcrypt gehasht (niemals als Klartext gespeichert)
• Zwei-Faktor-Authentifizierung (2FA) für alle Konten verfügbar
• Automatisierte tägliche Backups mit vollständiger Verschlüsselung
• Server in der EU (Deutschland), ISO 27001 zertifiziert`,
        `Имплементираме технички и организациски мерки на ниво на претпријатие:

• AES-256 шифрирање за податоци во мирување
• TLS 1.3 шифрирање за податоци во транзит
• Лозинките се хеширани со bcrypt (никогаш не се чуваат како обичен текст)
• Двофакторска автентикација (2FA) достапна за сите сметки
• Автоматски дневни бекапи со целосно шифрирање
• Серверите се лоцирани во ЕУ (Германија), ISO 27001 сертифицирани`
      ),
    },
    {
      icon: Globe,
      title: sq(lang, "Të drejtat tuaja (GDPR)", "Your rights (GDPR)", "Sus derechos (RGPD)", "Ihre Rechte (DSGVO)", "Вашите права (GDPR)"),
      content: sq(lang,
        `Si rezident i Bashkimit Europian, keni të drejtat e mëposhtme:

• E drejta e aksesit — mund të kërkoni kopje të të dhënave tuaja
• E drejta e korrigjimit — mund të ndreqni të dhëna të pasakta
• E drejta e fshirjes ("e drejta të harrohesh") — fshini llogarinë dhe të dhënat
• E drejta e kufizimit të përpunimit — kufizoni si i përdorim të dhënat tuaja
• E drejta e portabilitetit — merrni të dhënat në format CSV/JSON
• E drejta e kundërshtimit — kundërshtoni përpunimin për marketing

Për të ushtruar çdo të drejtë, na kontaktoni te: info@clientlly.com`,
        `As an EU resident, you have the following rights:

• Right of access — request a copy of your data
• Right of rectification — correct inaccurate data
• Right to erasure ("right to be forgotten") — delete your account and data
• Right to restriction of processing — limit how we use your data
• Right to portability — receive your data in CSV/JSON format
• Right to object — object to processing for marketing

To exercise any right, contact us at: info@clientlly.com`,
        `Como residente de la UE, tiene los siguientes derechos:

• Derecho de acceso — solicitar una copia de sus datos
• Derecho de rectificación — corregir datos inexactos
• Derecho de supresión ("derecho al olvido") — eliminar su cuenta y datos
• Derecho a la limitación del tratamiento — limitar cómo usamos sus datos
• Derecho a la portabilidad — recibir sus datos en formato CSV/JSON
• Derecho de oposición — oponerse al tratamiento para marketing

Para ejercer cualquier derecho, contáctenos en: info@clientlly.com`,
        `Als EU-Bürger haben Sie folgende Rechte:

• Recht auf Auskunft — eine Kopie Ihrer Daten anfordern
• Recht auf Berichtigung — ungenaue Daten korrigieren
• Recht auf Löschung ("Recht auf Vergessenwerden") — Ihr Konto und Ihre Daten löschen
• Recht auf Einschränkung der Verarbeitung — einschränken, wie wir Ihre Daten verwenden
• Recht auf Datenübertragbarkeit — Ihre Daten im CSV/JSON-Format erhalten
• Widerspruchsrecht — der Verarbeitung zu Marketingzwecken widersprechen

Um ein Recht auszuüben, kontaktieren Sie uns unter: info@clientlly.com`,
        `Како жител на ЕУ, ги имате следните права:

• Право на пристап — побарајте копија од вашите податоци
• Право на исправка — поправете неточни податоци
• Право на бришење ("право да бидете заборавени") — избришете ја сметката и податоците
• Право на ограничување на обработка — ограничете како ги користиме вашите податоци
• Право на преносливост — добијте ги податоците во CSV/JSON формат
• Право на приговор — приговорете на обработка за маркетинг

За да остварите било кое право, контактирајте нè на: info@clientlly.com`
      ),
    },
    {
      icon: FileText,
      title: sq(lang, "Ruajtja e të dhënave", "Data retention", "Retención de datos", "Datenspeicherung", "Задржување на податоци"),
      content: sq(lang,
        `Ruajmë të dhënat tuaja sipas politikës së mëposhtme:

• Të dhënat e llogarisë aktive: gjatë gjithë kohëzgjatjes së abonimit
• Pas mbylljes së llogarisë: fshihen brenda 90 ditëve
• Të dhënat e faturave dhe kontabilitetit: 7 vjet (kërkesë ligjore EU)
• Logjet e aksesit: 30 ditë për qëllime sigurie
• Backup-et: fshihen automatikisht pas 365 ditësh

Mund të kërkoni fshirje të menjëhershme duke na kontaktuar drejtpërdrejt.`,
        `We retain your data according to the following policy:

• Active account data: throughout the subscription period
• After account closure: deleted within 90 days
• Invoice and accounting data: 7 years (EU legal requirement)
• Access logs: 30 days for security purposes
• Backups: automatically deleted after 365 days

You may request immediate deletion by contacting us directly.`,
        `Retenemos sus datos según la siguiente política:

• Datos de cuenta activa: durante todo el período de suscripción
• Después del cierre de cuenta: eliminados dentro de 90 días
• Datos de facturas y contabilidad: 7 años (requisito legal de la UE)
• Registros de acceso: 30 días con fines de seguridad
• Copias de seguridad: eliminadas automáticamente después de 365 días

Puede solicitar la eliminación inmediata contactándonos directamente.`,
        `Wir speichern Ihre Daten gemäß der folgenden Richtlinie:

• Aktive Kontodaten: während des gesamten Abonnementzeitraums
• Nach Kontoschließung: innerhalb von 90 Tagen gelöscht
• Rechnungs- und Buchhaltungsdaten: 7 Jahre (EU-Rechtsvorschrift)
• Zugriffsprotokolle: 30 Tage für Sicherheitszwecke
• Backups: automatisch nach 365 Tagen gelöscht

Sie können eine sofortige Löschung beantragen, indem Sie uns direkt kontaktieren.`,
        `Ги задржуваме вашите податоци според следната политика:

• Податоци за активна сметка: за целото времетраење на претплатата
• По затворање на сметката: избришани во рок од 90 дена
• Податоци за фактури и сметководство: 7 години (правна обврска на ЕУ)
• Логови за пристап: 30 дена за безбедносни цели
• Бекапи: автоматски избришани по 365 дена

Можете да побарате моментално бришење со директно контактирање.`
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />{sq(lang,"Kthehu","Back","Atrás","Zurück","Назад")}
            </button>
          </div>
        </div>
      </nav>

      <section className="py-14 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
            <Shield className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Politika e Privatësisë","Privacy Policy","Política de Privacidad","Datenschutzrichtlinie","Политика за Приватност")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,"Privatësia juaj është prioriteti ynë","Your privacy is our priority","Su privacidad es nuestra prioridad","Ihre Privatsphäre ist unsere Priorität","Вашата приватност е наш приоритет")}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-4">
            {sq(lang,
              "Kjo politikë shpjegon se si Clientlly mbledh, përdor dhe mbron të dhënat tuaja personale dhe të biznesit. Jemi plotësisht në përputhje me GDPR dhe ligjet e mbrojtjes së të dhënave të BE.",
              "This policy explains how Clientlly collects, uses and protects your personal and business data. We are fully compliant with GDPR and EU data protection laws.",
              "Esta política explica cómo Clientlly recopila, usa y protege sus datos personales y comerciales. Cumplimos totalmente con el RGPD y las leyes de protección de datos de la UE.",
              "Diese Richtlinie erklärt, wie Clientlly Ihre persönlichen und geschäftlichen Daten erhebt, verwendet und schützt. Wir sind vollständig DSGVO-konform und halten die EU-Datenschutzgesetze ein.",
              "Оваа политика објаснува како Clientlly ги собира, користи и заштитува вашите лични и деловни податоци. Целосно сме во согласност со GDPR и законите за заштита на податоци на ЕУ."
            )}
          </p>
          <p className="text-xs text-gray-400">{sq(lang,"Përditësuar më:","Last updated:","Última actualización:","Letzte Aktualisierung:","Последно ажурирано:")} 1 {sq(lang,"Janar","January","Enero","Januar","Јануари")} 2025</p>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[240px_1fr] gap-10">

            <nav className="hidden md:block">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Përmbajtja","Contents","Contenido","Inhalt","Содржина")}</p>
              <ul className="space-y-2">
                {sections.map((s,i) => (
                  <li key={i}>
                    <a href={`#section-${i}`}
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors block py-0.5">
                      {i+1}. {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12">
              {sections.map((s,i) => {
                const Icon = s.icon;
                return (
                  <div key={i} id={`section-${i}`} className="scroll-mt-20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line pl-12">
                      {s.content}
                    </div>
                  </div>
                );
              })}

              <div className="p-6 rounded-2xl border border-indigo-100 bg-indigo-50">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{sq(lang,"Na kontaktoni","Contact us","Contáctenos","Kontaktieren Sie uns","Контактирајте нè")}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {sq(lang,
                        "Për çdo pyetje lidhur me privatësinë dhe mbrojtjen e të dhënave:",
                        "For any questions regarding privacy and data protection:",
                        "Para cualquier pregunta sobre privacidad y protección de datos:",
                        "Für Fragen zum Datenschutz und zur Datensicherheit:",
                        "За прашања за приватноста и заштитата на податоци:"
                      )}
                    </p>
                    <p className="text-sm font-semibold text-indigo-700">info@clientlly.com</p>
                    <p className="text-xs text-gray-400 mt-1">{sq(lang,"Përgjigje brenda 72 orësh","Response within 72 hours","Respuesta en 72 horas","Antwort innerhalb von 72 Stunden","Одговор во рок од 72 часа")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
