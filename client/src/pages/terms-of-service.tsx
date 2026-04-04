import { ArrowLeft, Scale, Shield, Clock, Users, FileText, AlertTriangle, CheckCircle, CreditCard, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

export default function TermsOfService() {
  const { currentLanguage: lang } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: sq(lang, "Pranimi i kushteve", "Acceptance of terms", "Aceptación de términos", "Annahme der Bedingungen", "Прифаќање на условите"),
      content: sq(lang,
        `Duke u regjistruar ose duke përdorur platformën Clientlly, ju pranoni të gjitha kushtet e shërbimit të listuara në këtë dokument.

Clientlly ofrohet nga Clientlly Sh.p.k., i regjistruar sipas ligjeve të Republikës së Kosovës. Nëse nuk pajtoheni me këto kushte, ju lutemi mos përdorni shërbimin.

Këto kushte mund të ndryshohen. Ju do të njoftoheni 30 ditë përpara çdo ndryshimi thelbësor.`,
        `By registering or using the Clientlly platform, you accept all service terms listed in this document.

Clientlly is provided by Clientlly Sh.p.k., registered under the laws of the Republic of Kosovo. If you disagree with these terms, please do not use the service.

These terms may change. You will be notified 30 days before any material change.`,
        `Al registrarse o usar la plataforma Clientlly, acepta todos los términos de servicio enumerados en este documento.

Clientlly es proporcionado por Clientlly Sh.p.k., registrada bajo las leyes de la República de Kosovo. Si no está de acuerdo con estos términos, por favor no utilice el servicio.

Estos términos pueden cambiar. Se le notificará 30 días antes de cualquier cambio material.`,
        `Mit der Registrierung oder Nutzung der Clientlly-Plattform akzeptieren Sie alle in diesem Dokument aufgeführten Servicebedingungen.

Clientlly wird von Clientlly Sh.p.k. bereitgestellt, registriert nach den Gesetzen der Republik Kosovo. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie den Dienst bitte nicht.

Diese Bedingungen können sich ändern. Sie werden 30 Tage vor jeder wesentlichen Änderung benachrichtigt.`,
        `Со регистрирање или користење на платформата Clientlly, ги прифаќате сите услови за услуга наведени во овој документ.

Clientlly е обезбедена од Clientlly Sh.p.k., регистрирана според законите на Република Косово. Доколку не се согласувате со овие услови, ве молиме не го користете сервисот.

Овие услови може да се променат. Ќе бидете известени 30 дена пред секоја суштинска промена.`
      ),
    },
    {
      icon: Users,
      title: sq(lang, "Llogaria juaj", "Your account", "Su cuenta", "Ihr Konto", "Вашата сметка"),
      content: sq(lang,
        `Kur krijoni një llogari Clientlly, jeni përgjegjës për:

• Saktësinë e informacionit të dhënë gjatë regjistrimit
• Konfidencialitetin e fjalëkalimit dhe kredencialeve të hyrjes
• Të gjitha aktivitetet e kryera nën llogarinë tuaj
• Njoftimin e menjëhershëm nëse dyshoni për akses të paautorizuar

Nuk lejohet ndarja e llogarisë me persona të paautorizuar ose krijimi i llogarive të rreme. Çdo llogari duhet të korrespondojë me një person ose entitet të vetëm.`,
        `When you create a Clientlly account, you are responsible for:

• Accuracy of information provided during registration
• Confidentiality of your password and login credentials
• All activities performed under your account
• Immediate notification if you suspect unauthorized access

Sharing your account with unauthorised persons or creating fake accounts is not permitted. Each account must correspond to a single person or entity.`,
        `Al crear una cuenta de Clientlly, usted es responsable de:

• La exactitud de la información proporcionada durante el registro
• La confidencialidad de su contraseña y credenciales de acceso
• Todas las actividades realizadas bajo su cuenta
• La notificación inmediata si sospecha de acceso no autorizado

No se permite compartir su cuenta con personas no autorizadas ni crear cuentas falsas. Cada cuenta debe corresponder a una sola persona o entidad.`,
        `Wenn Sie ein Clientlly-Konto erstellen, sind Sie verantwortlich für:

• Die Richtigkeit der bei der Registrierung angegebenen Informationen
• Die Vertraulichkeit Ihres Passworts und Ihrer Anmeldedaten
• Alle unter Ihrem Konto durchgeführten Aktivitäten
• Die sofortige Benachrichtigung bei Verdacht auf unbefugten Zugriff

Das Teilen Ihres Kontos mit unbefugten Personen oder das Erstellen gefälschter Konten ist nicht gestattet. Jedes Konto muss einer einzelnen Person oder Organisation entsprechen.`,
        `Кога креирате сметка на Clientlly, вие сте одговорни за:

• Точноста на информациите дадени при регистрација
• Доверливоста на вашата лозинка и податоци за најава
• Сите активности извршени под вашата сметка
• Моментално известување доколку се сомневате за неовластен пристап

Не е дозволено споделување на сметка со неовластени лица или креирање лажни сметки. Секоја сметка мора да одговара на едно лице или ентитет.`
      ),
    },
    {
      icon: CheckCircle,
      title: sq(lang, "Përdorimi i pranueshëm", "Acceptable use", "Uso aceptable", "Akzeptable Nutzung", "Прифатлива употреба"),
      content: sq(lang,
        `Clientlly lejon përdorimin e platformës për aktivitete legjitime biznesi. Ndalohet kategorikisht:

• Faturimi i mallrave ose shërbimeve të paligjshme
• Mashtrimi financiar, pastrimi i parave ose aktivitete fraudulentoze
• Ngarkimi i skedarëve me virus ose kod keqdashës
• Tentativat e aksesit të paautorizuar në serverët tanë
• Rishitja ose licencimi i platformës pa lejen tonë me shkrim
• Scraping ose mbledhja automatike e të dhënave

Shkeljet e rënda çojnë në pezullim të menjëhershëm të llogarisë.`,
        `Clientlly allows use of the platform for legitimate business activities. Strictly prohibited:

• Invoicing for illegal goods or services
• Financial fraud, money laundering or fraudulent activities
• Uploading files with viruses or malicious code
• Attempts to gain unauthorised access to our servers
• Reselling or licensing the platform without our written permission
• Scraping or automated data collection

Serious violations lead to immediate account suspension.`,
        `Clientlly permite el uso de la plataforma para actividades comerciales legítimas. Está estrictamente prohibido:

• Facturar bienes o servicios ilegales
• Fraude financiero, lavado de dinero o actividades fraudulentas
• Cargar archivos con virus o código malicioso
• Intentos de acceso no autorizado a nuestros servidores
• Reventa o licenciamiento de la plataforma sin nuestro permiso escrito
• Scraping o recopilación automatizada de datos

Las violaciones graves conllevan la suspensión inmediata de la cuenta.`,
        `Clientlly erlaubt die Nutzung der Plattform für legitime Geschäftsaktivitäten. Streng verboten:

• Rechnungsstellung für illegale Waren oder Dienstleistungen
• Finanzbetrug, Geldwäsche oder betrügerische Aktivitäten
• Hochladen von Dateien mit Viren oder bösartigem Code
• Versuche unbefugten Zugriffs auf unsere Server
• Weiterverkauf oder Lizenzierung der Plattform ohne unsere schriftliche Genehmigung
• Scraping oder automatisierte Datenerfassung

Schwerwiegende Verstöße führen zur sofortigen Kontosperrung.`,
        `Clientlly дозволува користење на платформата за легитимни деловни активности. Строго забрането:

• Фактурирање за нелегални стоки или услуги
• Финансиска измама, перење пари или измамнички активности
• Прикачување датотеки со вируси или злонамерен код
• Обиди за неовластен пристап до нашите сервери
• Препродажба или лиценцирање на платформата без наша писмена дозвола
• Scraping или автоматско собирање податоци

Сериозните прекршоци водат до моментално суспендирање на сметката.`
      ),
    },
    {
      icon: CreditCard,
      title: sq(lang, "Abonimi dhe pagesat", "Subscription and payments", "Suscripción y pagos", "Abonnement und Zahlungen", "Претплата и плаќања"),
      content: sq(lang,
        `Clientlly ofron plane abonimi mujore dhe vjetore:

• Starter: €20/muaj (3 përdorues, 200 fatura/muaj)
• Professional: €35/muaj (10 përdorues, 500 fatura/muaj)
• Enterprise: €50/muaj (50 përdorues, fatura të pakufizuara)

Pagesat procesohen nga Stripe dhe tarifohen automatikisht çdo periudhë. Abonimi vjetor ofron zbritje 15%.

Mund ta anuloni abonimin në çdo kohë nga Paneli i Llogarisë. Pas anulimit, aksesin e keni deri në fund të periudhës së paguar. Nuk ofrohen rimbursime proporcionale për periudhat e papërdorura.`,
        `Clientlly offers monthly and annual subscription plans:

• Starter: €20/month (3 users, 200 invoices/month)
• Professional: €35/month (10 users, 500 invoices/month)
• Enterprise: €50/month (50 users, unlimited invoices)

Payments are processed by Stripe and automatically charged each period. Annual subscription offers a 15% discount.

You may cancel your subscription at any time from the Account Panel. After cancellation, you have access until the end of the paid period. No pro-rata refunds are offered for unused periods.`,
        `Clientlly ofrece planes de suscripción mensuales y anuales:

• Starter: €20/mes (3 usuarios, 200 facturas/mes)
• Professional: €35/mes (10 usuarios, 500 facturas/mes)
• Enterprise: €50/mes (50 usuarios, facturas ilimitadas)

Los pagos son procesados por Stripe y se cobran automáticamente cada período. La suscripción anual ofrece un 15% de descuento.

Puede cancelar su suscripción en cualquier momento desde el Panel de Cuenta. Después de la cancelación, tiene acceso hasta el final del período pagado. No se ofrecen reembolsos proporcionales por períodos no utilizados.`,
        `Clientlly bietet monatliche und jährliche Abonnementpläne:

• Starter: €20/Monat (3 Benutzer, 200 Rechnungen/Monat)
• Professional: €35/Monat (10 Benutzer, 500 Rechnungen/Monat)
• Enterprise: €50/Monat (50 Benutzer, unbegrenzte Rechnungen)

Zahlungen werden von Stripe verarbeitet und automatisch pro Zeitraum abgebucht. Das Jahresabonnement bietet 15% Rabatt.

Sie können Ihr Abonnement jederzeit über das Konto-Panel kündigen. Nach der Kündigung haben Sie Zugang bis zum Ende des bezahlten Zeitraums. Anteilige Rückerstattungen für ungenutzte Zeiträume werden nicht angeboten.`,
        `Clientlly нуди месечни и годишни планови за претплата:

• Starter: €20/месец (3 корисници, 200 фактури/месец)
• Professional: €35/месец (10 корисници, 500 фактури/месец)
• Enterprise: €50/месец (50 корисници, неограничени фактури)

Плаќањата се обработуваат од Stripe и автоматски се наплаќаат секој период. Годишната претплата нуди 15% попуст.

Можете да ја откажете претплатата во секое време преку Панелот за Сметка. По откажувањето, имате пристап до крајот на платениот период. Не се нудат пропорционални рефундирања за неискористени периоди.`
      ),
    },
    {
      icon: Shield,
      title: sq(lang, "Pronësia intelektuale", "Intellectual property", "Propiedad intelectual", "Geistiges Eigentum", "Интелектуална сопственост"),
      content: sq(lang,
        `Të gjitha të drejtat e pronësisë intelektuale lidhur me platformën Clientlly (kodi, dizajni, logoja, dokumentacioni) i takojnë Clientlly Sh.p.k.

Ju jepet një licencë jo-ekskluzive, jo-transferueshme për të përdorur platformën gjatë kohës së abonimit tuaj aktiv.

Të dhënat e biznesit tuaj (fatura, klientë, raporte) janë dhe mbeten pronë juaj. Clientlly nuk pretendon asnjë të drejtë mbi to.`,
        `All intellectual property rights related to the Clientlly platform (code, design, logo, documentation) belong to Clientlly Sh.p.k.

You are granted a non-exclusive, non-transferable licence to use the platform during your active subscription period.

Your business data (invoices, clients, reports) is and remains your property. Clientlly claims no rights over it.`,
        `Todos los derechos de propiedad intelectual relacionados con la plataforma Clientlly (código, diseño, logotipo, documentación) pertenecen a Clientlly Sh.p.k.

Se le otorga una licencia no exclusiva e intransferible para usar la plataforma durante su período de suscripción activo.

Sus datos comerciales (facturas, clientes, informes) son y siguen siendo de su propiedad. Clientlly no reclama ningún derecho sobre ellos.`,
        `Alle geistigen Eigentumsrechte im Zusammenhang mit der Clientlly-Plattform (Code, Design, Logo, Dokumentation) gehören Clientlly Sh.p.k.

Ihnen wird eine nicht-exklusive, nicht übertragbare Lizenz zur Nutzung der Plattform während Ihres aktiven Abonnementzeitraums gewährt.

Ihre Geschäftsdaten (Rechnungen, Kunden, Berichte) sind und bleiben Ihr Eigentum. Clientlly erhebt keinerlei Ansprüche darauf.`,
        `Сите права на интелектуална сопственост поврзани со платформата Clientlly (код, дизајн, лого, документација) им припаѓаат на Clientlly Sh.p.k.

Ви се доделува неексклузивна, непренослива лиценца за користење на платформата за време на вашиот активен период на претплата.

Вашите деловни податоци (фактури, клиенти, извештаи) се и остануваат ваша сопственост. Clientlly не бара никакви права врз нив.`
      ),
    },
    {
      icon: AlertTriangle,
      title: sq(lang, "Kufizimi i përgjegjësisë", "Limitation of liability", "Limitación de responsabilidad", "Haftungsbeschränkung", "Ограничување на одговорност"),
      content: sq(lang,
        `Clientlly ofrohet "si është" dhe "si disponohet". Nuk garantojmë:

• Disponueshmëri 100% të pandërprerë (synoj 99.9% SLA)
• Mungesë të plotë të gabimeve ose ndërprerjeve teknike
• Përshtatshmëri për qëllime specifike biznesi

Clientlly nuk mban përgjegjësi për:
• Humbje të fitimeve ose humbje të biznesit nga ndërprerjet e shërbimit
• Dëme indirekte, të rastësishme ose pasojuese
• Veprimet e palëve të treta (si banka ose furnitorë pagese)

Përgjegjësia jonë maksimale nuk mund të tejkalojë vlerën e abonimit tuaj për 3 muajt e fundit.`,
        `Clientlly is provided "as is" and "as available". We do not guarantee:

• 100% uninterrupted availability (targeting 99.9% SLA)
• Complete absence of errors or technical interruptions
• Suitability for specific business purposes

Clientlly is not liable for:
• Loss of profits or business losses from service interruptions
• Indirect, incidental or consequential damages
• Actions of third parties (such as banks or payment providers)

Our maximum liability cannot exceed the value of your subscription for the last 3 months.`,
        `Clientlly se proporciona "tal cual" y "según disponibilidad". No garantizamos:

• Disponibilidad 100% ininterrumpida (objetivo de 99,9% SLA)
• Ausencia completa de errores o interrupciones técnicas
• Idoneidad para fines comerciales específicos

Clientlly no es responsable de:
• Pérdida de beneficios o pérdidas comerciales por interrupciones del servicio
• Daños indirectos, incidentales o consecuentes
• Acciones de terceros (como bancos o proveedores de pago)

Nuestra responsabilidad máxima no puede exceder el valor de su suscripción de los últimos 3 meses.`,
        `Clientlly wird "wie besehen" und "wie verfügbar" bereitgestellt. Wir garantieren nicht:

• 100% unterbrechungsfreie Verfügbarkeit (Ziel: 99,9% SLA)
• Vollständige Abwesenheit von Fehlern oder technischen Unterbrechungen
• Eignung für bestimmte Geschäftszwecke

Clientlly haftet nicht für:
• Gewinnverluste oder Geschäftsverluste durch Serviceunterbrechungen
• Indirekte, beiläufige oder Folgeschäden
• Handlungen Dritter (wie Banken oder Zahlungsanbieter)

Unsere maximale Haftung darf den Wert Ihres Abonnements der letzten 3 Monate nicht überschreiten.`,
        `Clientlly се обезбедува "како што е" и "како што е достапно". Не гарантираме:

• 100% непрекината достапност (цел: 99,9% SLA)
• Целосно отсуство на грешки или технички прекини
• Соодветност за конкретни деловни цели

Clientlly не е одговорен за:
• Загуба на профит или деловни загуби од прекини на сервисот
• Индиректни, случајни или последователни штети
• Дејства на трети страни (како банки или даватели на плаќања)

Нашата максимална одговорност не може да ја надмине вредноста на вашата претплата за последните 3 месеци.`
      ),
    },
    {
      icon: Clock,
      title: sq(lang, "Ndryshimet dhe përfundimi", "Changes and termination", "Cambios y terminación", "Änderungen und Beendigung", "Промени и прекин"),
      content: sq(lang,
        `Ne rezervojmë të drejtën:

• Të modifikojmë ose ndërpresim çdo funksion, me njoftim paraprak 30-ditor
• Të pezullojmë ose mbyllim llogaritë që shkelin këto kushte
• Të ndryshojmë çmimet me njoftim 60-ditor për abonentët ekzistues

Ju mund të mbyllni llogarinë tuaj në çdo kohë. Kur mbyllet llogaria, keni 90 ditë për të eksportuar të gjitha të dhënat tuaja përpara fshirjes definitive.`,
        `We reserve the right to:

• Modify or discontinue any feature, with 30-day advance notice
• Suspend or close accounts that violate these terms
• Change prices with 60-day notice for existing subscribers

You may close your account at any time. When the account is closed, you have 90 days to export all your data before permanent deletion.`,
        `Nos reservamos el derecho de:

• Modificar o descontinuar cualquier función, con aviso previo de 30 días
• Suspender o cerrar cuentas que violen estos términos
• Cambiar precios con aviso de 60 días para suscriptores existentes

Puede cerrar su cuenta en cualquier momento. Al cerrar la cuenta, tiene 90 días para exportar todos sus datos antes de la eliminación permanente.`,
        `Wir behalten uns das Recht vor:

• Funktionen zu ändern oder einzustellen, mit 30-tägiger Vorankündigung
• Konten zu sperren oder zu schließen, die gegen diese Bedingungen verstoßen
• Preise mit 60-tägiger Vorankündigung für bestehende Abonnenten zu ändern

Sie können Ihr Konto jederzeit schließen. Nach der Kontoschließung haben Sie 90 Tage Zeit, alle Ihre Daten zu exportieren, bevor sie endgültig gelöscht werden.`,
        `Го задржуваме правото да:

• Менуваме или прекинеме било која функција, со 30-дневно претходно известување
• Суспендираме или затвориме сметки кои ги прекршуваат овие услови
• Менуваме цени со 60-дневно известување за постоечки претплатници

Можете да ја затворите вашата сметка во секое време. Кога сметката е затворена, имате 90 дена да ги извезете сите ваши податоци пред трајно бришење.`
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
            <Scale className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang,"Kushtet e Shërbimit","Terms of Service","Términos de Servicio","Nutzungsbedingungen","Услови за Користење")}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sq(lang,"Kushtet e Shërbimit Clientlly","Clientlly Terms of Service","Términos de Servicio de Clientlly","Clientlly Nutzungsbedingungen","Услови за Користење на Clientlly")}
          </h1>
          <p className="text-gray-500 max-w-2xl mb-4">
            {sq(lang,
              "Ju lutemi lexoni me kujdes këto kushte përpara se të përdorni platformën Clientlly. Duke u regjistruar, pranoni të gjitha kushtet e mëposhtme.",
              "Please read these terms carefully before using the Clientlly platform. By registering, you accept all the following terms.",
              "Lea atentamente estos términos antes de usar la plataforma Clientlly. Al registrarse, acepta todos los términos siguientes.",
              "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie die Clientlly-Plattform nutzen. Mit der Registrierung akzeptieren Sie alle folgenden Bedingungen.",
              "Ве молиме внимателно прочитајте ги овие услови пред да ја користите платформата Clientlly. Со регистрирање, ги прифаќате сите следни услови."
            )}
          </p>
          <p className="text-xs text-gray-400">{sq(lang,"Hyrë në fuqi:","Effective date:","Fecha de vigencia:","Gültig ab:","Датум на важење:")} 1 {sq(lang,"Janar","January","Enero","Januar","Јануари")} 2025</p>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[240px_1fr] gap-10">

            <nav className="hidden md:block">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Seksionet","Sections","Secciones","Abschnitte","Секции")}</p>
              <ul className="space-y-2">
                {sections.map((s,i) => (
                  <li key={i}>
                    <a href={`#t-section-${i}`}
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
                  <div key={i} id={`t-section-${i}`} className="scroll-mt-20">
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

              <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{sq(lang,"Pyetje ligjore","Legal questions","Preguntas legales","Rechtliche Fragen","Правни прашања")}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {sq(lang,"Për çdo pyetje lidhur me kushtet e shërbimit:","For any questions about the terms of service:","Para cualquier pregunta sobre los términos de servicio:","Für Fragen zu den Nutzungsbedingungen:","За прашања за условите за користење:")}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">legal@clientlly.com</p>
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
