import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Lock, Eye, Key, FileCheck, UserCheck, Zap, CheckCircle, AlertTriangle, Globe, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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

export default function FeatureSecurity() {
  const [, setLocation] = useLocation();
  const { currentLanguage: lang } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  alt="BusinessFlow Pro" 
                  className="h-10 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                window.location.href = "/";
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="px-2 sm:px-3"
            >
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">{sq(lang, "Kthehu", "Back", "Volver", "Zurück", "Назад", "Retour", "Voltar", "Indietro")}</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight animate-professional-fade">
            {sq(lang, "Siguria", "Enterprise", "Seguridad", "Unternehmens-", "Претприемничка", "Entreprise", "Empresarial", "Enterprise")} <span className="animate-subtle-gradient">{sq(lang, "e Ndërmarrjes", "Security", "Empresarial", "Sicherheit", "Безбедност", "Sécurité", "Segurança", "Sicurezza")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sq(lang,
              "Mbroni të dhënat e biznesit tuaj me siguri të nivelit bankar, enkriptim të avancuar dhe veçori gjithëpërfshirëse të pajtueshmërisë të besuara nga ndërmarrjet në mbarë botën.",
              "Protect your business data with bank-level security, advanced encryption, and comprehensive compliance features trusted by enterprises worldwide.",
              "Proteja los datos de su empresa con seguridad de nivel bancario, cifrado avanzado y funciones de cumplimiento integrales en las que confían empresas de todo el mundo.",
              "Schützen Sie Ihre Geschäftsdaten mit Sicherheit auf Bankniveau, fortschrittlicher Verschlüsselung und umfassenden Compliance-Funktionen, denen Unternehmen weltweit vertrauen.",
              "Заштитете ги податоците на вашиот бизнис со безбедност на банкарско ниво, напреден шифрирање и сеопфатни функции за усогласеност на кои им веруваат претпријатија ширум светот."
            )}
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/3d_1753189580286.png" 
              alt="Security Dashboard" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white">
              {sq(lang, "Nivel Ndërmarrje", "Enterprise Grade", "Nivel Empresarial", "Enterprise-Klasse", "Претприемничко ниво")}
            </Badge>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Enkriptim nga Fundi në Fund", "End-to-End Encryption", "Cifrado de Extremo a Extremo", "Ende-zu-Ende-Verschlüsselung", "Шифрирање од крај до крај")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Të gjitha të dhënat të enkriptuara duke përdorur standarde AES-256 me TLS 1.3 për të dhënat në tranzit.", "All data encrypted using AES-256 encryption standards with TLS 1.3 for data in transit.", "Todos los datos cifrados utilizando estándares de cifrado AES-256 con TLS 1.3 para datos en tránsito.", "Alle Daten mit AES-256-Verschlüsselungsstandards verschlüsselt mit TLS 1.3 für Daten während der Übertragung.", "Сите податоци шифрирани со стандарди AES-256 со TLS 1.3 за податоци во транзит.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Autentifikim me Shumë Faktorë", "Multi-Factor Authentication", "Autenticación Multifactor", "Multi-Faktor-Authentifizierung", "Повеќефакторска автентикација")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Akses i sigurt me SMS, email dhe autentifikim me dy faktorë bazuar në aplikacion.", "Secure access with SMS, email, and authenticator app-based two-factor authentication.", "Acceso seguro con autenticación de dos factores basada en SMS, correo electrónico y aplicación autenticadora.", "Sicherer Zugang mit SMS, E-Mail und Authenticator-App-basierter Zwei-Faktor-Authentifizierung.", "Безбеден пристап со SMS, е-пошта и автентикација со два фактори базирана на апликација.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Monitorim i Aktivitetit", "Activity Monitoring", "Monitoreo de Actividad", "Aktivitätsüberwachung", "Мониторинг на активности")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Monitorim në kohë reale dhe regjistrime të detajuara auditimi për të gjitha aktivitetet e përdoruesve dhe ndryshimet e sistemit.", "Real-time monitoring and detailed audit logs for all user activities and system changes.", "Monitoreo en tiempo real y registros de auditoría detallados para todas las actividades de usuarios y cambios del sistema.", "Echtzeit-Überwachung und detaillierte Audit-Protokolle für alle Benutzeraktivitäten und Systemänderungen.", "Мониторинг во реално време и детални ревизорски записи за сите корисничка активности и системски промени.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Key className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Kontroll Aksesi Bazuar në Role", "Role-Based Access Control", "Control de Acceso Basado en Roles", "Rollenbasierte Zugriffskontrolle", "Контрола на пристап базирана на улоги")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Sistem i detajuar lejesh që siguron që përdoruesit aksesojnë vetëm të dhënat relevante për rolin e tyre.", "Granular permissions system ensuring users only access data relevant to their role.", "Sistema de permisos granulares que garantiza que los usuarios solo acceden a datos relevantes para su rol.", "Granulares Berechtigungssystem, das sicherstellt, dass Benutzer nur auf rollenrelevante Daten zugreifen.", "Грануларен систем на дозволи кој обезбедува корисниците да пристапуваат само до податоци релевантни за нивната улога.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Gati për Pajtueshmëri", "Compliance Ready", "Listo para Cumplimiento", "Compliance-Bereit", "Подготвено за усогласеност")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Në pajtueshmëri me GDPR, SOC 2 dhe HIPAA me raportim dhe dokumentacion të automatizuar.", "GDPR, SOC 2, and HIPAA compliant with automated compliance reporting and documentation.", "Cumple con GDPR, SOC 2 y HIPAA con informes y documentación de cumplimiento automatizados.", "GDPR-, SOC 2- und HIPAA-konform mit automatisierter Compliance-Berichterstattung und Dokumentation.", "Усогласено со GDPR, SOC 2 и HIPAA со автоматизирано известување и документација за усогласеност.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Kopje Sigurie Automatike", "Automated Backups", "Copias de Seguridad Automatizadas", "Automatisierte Backups", "Автоматизирани резервни копии")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Kopje sigurie ditore të enkriptuara me rikuperim në pikë kohore dhe garanci funksionimi 99.9%.", "Daily encrypted backups with point-in-time recovery and 99.9% uptime guarantee.", "Copias de seguridad diarias cifradas con recuperación en un punto en el tiempo y garantía de disponibilidad del 99.9%.", "Tägliche verschlüsselte Backups mit Point-in-Time-Recovery und 99,9% Verfügbarkeitsgarantie.", "Дневни шифрирани резервни копии со обнова во одредено време и гаранција за 99.9% работоспособност.")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Certifications */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{sq(lang, "Certifikatat e Sigurisë", "Security Certifications", "Certificaciones de Seguridad", "Sicherheitszertifizierungen", "Безбедносни сертификати")}</h2>
            <p className="text-xl text-muted-foreground">{sq(lang, "Besuar nga ndërmarrjet me standarde sigurie lider në industri", "Trusted by enterprises with industry-leading security standards", "Confiado por empresas con estándares de seguridad líderes en la industria", "Vertraut von Unternehmen mit branchenführenden Sicherheitsstandards", "Доверено од претпријатија со индустриски водечки безбедносни стандарди")}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-blue-600 mb-2">SOC 2</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Certifikuar Tipi II", "Type II Certified", "Certificado Tipo II", "Typ II Zertifiziert", "Сертифициран Тип II")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-green-600 mb-2">GDPR</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Plotësisht në Pajtueshmëri", "Fully Compliant", "Totalmente Conforme", "Vollständig Konform", "Целосно усогласено")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-purple-600 mb-2">HIPAA</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Gati për Shëndetësi", "Healthcare Ready", "Listo para Salud", "Gesundheitswesen-Bereit", "Подготвено за здравство")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-orange-600 mb-2">ISO 27001</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Siguria e Informacionit", "Information Security", "Seguridad de la Información", "Informationssicherheit", "Безбедност на информации")}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Kontrolli i Vendndodhjes së të Dhënave", "Data Residency Control", "Control de Residencia de Datos", "Datenspeicherort-Kontrolle", "Контрола на локација на податоци")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Zgjidhni ku ruhen të dhënat tuaja me qendra të dhënash rajonale në mbarë botën.", "Choose where your data is stored with regional data centers worldwide.", "Elija dónde se almacenan sus datos con centros de datos regionales en todo el mundo.", "Wählen Sie, wo Ihre Daten gespeichert werden, mit regionalen Rechenzentren weltweit.", "Изберете каде се чуваат вашите податоци со регионални центри за податоци ширум светот.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Testim Penetrimi", "Penetration Testing", "Pruebas de Penetración", "Penetrationstests", "Тестирање на пенетрација")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Auditime sigurie të rregullta nga ekspertë të palës së tretë për identifikimin dhe rregullimin e dobësive.", "Regular security audits by third-party experts to identify and fix vulnerabilities.", "Auditorías de seguridad regulares por expertos externos para identificar y corregir vulnerabilidades.", "Regelmäßige Sicherheitsaudits durch Drittexperten zur Identifizierung und Behebung von Schwachstellen.", "Редовни безбедносни ревизии од надворешни експерти за идентификување и поправање на ранливости.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Arkitektura Zero-Besim", "Zero-Trust Architecture", "Arquitectura de Confianza Cero", "Zero-Trust-Architektur", "Архитектура на нулта доверба")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Qasja mos beso kurrë, verifiko gjithmonë me autentifikim dhe autorizim të vazhdueshëm.", "Never trust, always verify approach with continuous authentication and authorization.", "Enfoque de nunca confiar, siempre verificar con autenticación y autorización continuas.", "Niemals vertrauen, immer verifizieren - mit kontinuierlicher Authentifizierung und Autorisierung.", "Никогаш не верувај, секогаш верификувај пристап со континуирана автентикација и авторизација.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Përgjigje ndaj Incidenteve", "Incident Response", "Respuesta a Incidentes", "Vorfallreaktion", "Одговор на инциденти")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Monitorim sigurie 24/7 me përgjigje të shpejtë ndaj incidenteve dhe protokolle njoftimi.", "24/7 security monitoring with rapid incident response and notification protocols.", "Monitoreo de seguridad 24/7 con respuesta rápida a incidentes y protocolos de notificación.", "24/7-Sicherheitsüberwachung mit schneller Vorfallreaktion und Benachrichtigungsprotokollen.", "24/7 безбедносен мониторинг со брз одговор на инциденти и протоколи за известување.")}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Mbrojtje e Avancuar nga Kërcënimet", "Advanced Threat Protection", "Protección Avanzada contra Amenazas", "Erweiterter Bedrohungsschutz", "Напредна заштита од закани")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Zbulim dhe parandalim kërcënimesh me fuqi AI kundër kërcënimeve të vazhdueshme të avancuara.", "AI-powered threat detection and prevention against advanced persistent threats.", "Detección y prevención de amenazas impulsada por IA contra amenazas persistentes avanzadas.", "KI-gestützte Bedrohungserkennung und -prävention gegen fortgeschrittene dauerhafte Bedrohungen.", "Детекција и превенција на закани со вештачка интелигенција против напредни постојани закани.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Akses i Sigurt API", "Secure API Access", "Acceso API Seguro", "Sicherer API-Zugang", "Безбеден API пристап")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Menaxhim OAuth 2.0 dhe çelësash API me kufizim shpejtësie dhe kontrolle aksesi.", "OAuth 2.0 and API key management with rate limiting and access controls.", "Gestión de OAuth 2.0 y claves API con limitación de velocidad y controles de acceso.", "OAuth 2.0 und API-Schlüsselverwaltung mit Ratenbegrenzung und Zugriffskontrollen.", "OAuth 2.0 и управување со API клучеви со ограничување на стапка и контроли на пристап.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Parandalim i Humbjes së të Dhënave", "Data Loss Prevention", "Prevención de Pérdida de Datos", "Datenverlustprävention", "Превенција од загуба на податоци")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Skanim dhe mbrojtje automatike kundër rrjedhjeve aksidentale të të dhënave dhe shkeljeve.", "Automated scanning and protection against accidental data leaks and breaches.", "Escaneo y protección automatizados contra fugas y violaciones accidentales de datos.", "Automatisches Scannen und Schutz vor versehentlichen Datenlecks und -verletzungen.", "Автоматско скенирање и заштита од случајни протекувања и прекршувања на податоци.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Ndarje e Sigurt Skedarësh", "Secure File Sharing", "Intercambio Seguro de Archivos", "Sichere Dateifreigabe", "Безбедно споделување датотеки")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Ndarje skedarësh e enkriptuar me data skadimi, mbrojtje me fjalëkalim dhe gjurmim aksesi.", "Encrypted file sharing with expiration dates, password protection, and access tracking.", "Intercambio de archivos cifrados con fechas de vencimiento, protección con contraseña y seguimiento de acceso.", "Verschlüsselte Dateifreigabe mit Ablaufdaten, Passwortschutz und Zugriffsverfolgung.", "Шифрирано споделување датотеки со датуми на истекување, заштита со лозинка и следење на пристап.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{sq(lang, "Siguri e Nivelit të Ndërmarrjes", "Enterprise-Grade Security", "Seguridad de Nivel Empresarial", "Sicherheit auf Unternehmensebene", "Безбедност на претприемничко ниво")}</h2>
          <p className="text-xl mb-8 text-red-100">{sq(lang, "Mbroni biznesin tuaj me standardet më të larta të sigurisë dhe flini qetë duke ditur që të dhënat tuaja janë të sigurta.", "Protect your business with the highest security standards and sleep peacefully knowing your data is safe.", "Proteja su negocio con los más altos estándares de seguridad y duerma tranquilo sabiendo que sus datos están seguros.", "Schützen Sie Ihr Unternehmen mit den höchsten Sicherheitsstandards und schlafen Sie ruhig, da Ihre Daten sicher sind.", "Заштитете го вашиот бизнис со највисоките безбедносни стандарди и спијте мирно знаејќи дека вашите податоци се безбедни.")}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Shield className="h-5 w-5 mr-2" />
              {sq(lang, "Përmbledhje Sigurie", "Security Overview", "Resumen de Seguridad", "Sicherheitsübersicht", "Преглед на безбедност")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4">
              <FileCheck className="h-5 w-5 mr-2" />
              {sq(lang, "Dokumente Pajtueshmërie", "Compliance Docs", "Documentos de Cumplimiento", "Compliance-Dokumente", "Документи за усогласеност")}
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-red-100">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>{sq(lang, "Siguri e Nivelit Bankar", "Bank-Level Security", "Seguridad de Nivel Bancario", "Sicherheit auf Bankniveau", "Безбедност на банкарско ниво", "Sécurité de niveau bancaire", "Segurança de nível bancário", "Sicurezza a livello bancario")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>{sq(lang, "Pajtueshmëri Globale", "Global Compliance", "Cumplimiento Global", "Globale Compliance", "Глобална усогласеност")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>{sq(lang, "Monitorim 24/7", "24/7 Monitoring", "Monitoreo 24/7", "24/7-Überwachung", "24/7 мониторинг")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}