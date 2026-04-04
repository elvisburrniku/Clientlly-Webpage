import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Download, Upload, CheckCircle, RefreshCw, Users, FileText, Database, Clock, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element { switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; } }

export default function FeatureMigration() {
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
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    alt="BusinessFlow Pro" 
                    className="h-10 w-auto logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-green-500/0 group-hover:from-teal-500/15 group-hover:to-green-500/15 transition-all duration-500 rounded-lg"></div>
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
              <span className="text-sm sm:text-base">{sq(lang, "Kthehu", "Back", "Volver", "Zurück", "Назад")}</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <ArrowRight className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-professional-fade">
            {sq(lang, "Migrim", "Easy", "Migración", "Einfache", "Лесна")} <span className="animate-subtle-gradient">{sq(lang, "i Lehtë", "Migration", "Fácil", "Migration", "Миграција")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sq(lang,
              "Kaloni në BusinessFlow Pro pa probleme me mjetet tona të automatizuara të migrimit, mbështetjen e ekspertëve dhe procesin e tranzicionit pa ndërprerje.",
              "Switch to BusinessFlow Pro seamlessly with our automated migration tools, expert support, and zero-downtime transition process.",
              "Cambie a BusinessFlow Pro sin problemas con nuestras herramientas de migración automatizadas, soporte experto y proceso de transición sin tiempo de inactividad.",
              "Wechseln Sie nahtlos zu BusinessFlow Pro mit unseren automatisierten Migrationstools, Expertenunterstützung und einem Übergangsprozess ohne Ausfallzeiten.",
              "Преминете на BusinessFlow Pro беспрекорно со нашите автоматизирани алатки за миграција, експертска поддршка и процес на транзиција без прекин."
            )}
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/3d_1753189116510.png" 
              alt="Migration Process" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-green-500 text-white">
              {sq(lang, "100% Shkallë Suksesi", "100% Success Rate", "100% Tasa de Éxito", "100% Erfolgsrate", "100% Стапка на Успех")}
            </Badge>
          </div>
        </div>

        {/* Migration Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{sq(lang, "Procesi i Thjeshtë i Migrimit në 3 Hapa", "Simple 3-Step Migration Process", "Proceso Simple de Migración en 3 Pasos", "Einfacher 3-Schritte-Migrationsprozess", "Едноставен процес на миграција во 3 чекори")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sq(lang, "Lidhni të Dhënat Tuaja", "Connect Your Data", "Conecte Sus Datos", "Verbinden Sie Ihre Daten", "Поврзете ги вашите податоци")}</h3>
                <p className="text-muted-foreground">{sq(lang, "Lidhuni me softuerin tuaj ekzistues të biznesit me integrime të sigurta API ose ngarkoni skedarë CSV/Excel.", "Connect to your existing business software with secure API integrations or upload CSV/Excel files.", "Conéctese a su software empresarial existente con integraciones API seguras o cargue archivos CSV/Excel.", "Verbinden Sie sich mit Ihrer bestehenden Geschäftssoftware über sichere API-Integrationen oder laden Sie CSV/Excel-Dateien hoch.", "Поврзете се со вашиот постоечки бизнис софтвер со безбедни API интеграции или прикачете CSV/Excel датотеки.")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sq(lang, "Transferim i Automatizuar", "Automated Transfer", "Transferencia Automatizada", "Automatisierter Transfer", "Автоматизиран трансфер")}</h3>
                <p className="text-muted-foreground">{sq(lang, "Sistemi ynë i fuqizuar nga AI harton dhe transferon automatikisht të dhënat tuaja duke ruajtur integritetin dhe marrëdhëniet.", "Our AI-powered system automatically maps and transfers your data while maintaining integrity and relationships.", "Nuestro sistema impulsado por IA mapea y transfiere automáticamente sus datos manteniendo la integridad y las relaciones.", "Unser KI-gestütztes System kartiert und überträgt Ihre Daten automatisch unter Beibehaltung der Integrität und Beziehungen.", "Нашиот систем со вештачка интелигенција автоматски ги мапира и пренесува вашите податоци додека го одржува интегритетот и врските.")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sq(lang, "Verifiko & Lësho", "Verify & Launch", "Verificar y Lanzar", "Überprüfen & Starten", "Верификувај и лансирај")}</h3>
                <p className="text-muted-foreground">{sq(lang, "Shqyrtoni të dhënat e migruara, testoni funksionalitetin dhe filloni me besim. Ne jemi këtu për t'ju mbështetur në çdo hap.", "Review your migrated data, test functionality, and go live with confidence. We're here to support you every step.", "Revise sus datos migrados, pruebe la funcionalidad y entre en producción con confianza. Estamos aquí para apoyarle en cada paso.", "Überprüfen Sie Ihre migrierten Daten, testen Sie die Funktionalität und gehen Sie sicher live. Wir unterstützen Sie bei jedem Schritt.", "Прегледајте ги мигрираните податоци, тестирајте ја функционалноста и започнете со доверба. Ние сме тука да ве поддржиме на секој чекор.")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{sq(lang, "Migroni nga Çdo Platformë", "Migrate From Any Platform", "Migre Desde Cualquier Plataforma", "Migrieren Sie von Jeder Plattform", "Мигрирајте од секоја платформа")}</h2>
            <p className="text-xl text-muted-foreground">{sq(lang, "Ne mbështesim migrimin nga të gjitha platformat kryesore të menaxhimit të biznesit", "We support migration from all major business management platforms", "Soportamos la migración desde todas las principales plataformas de gestión empresarial", "Wir unterstützen die Migration von allen wichtigen Business-Management-Plattformen", "Поддржуваме миграција од сите главни платформи за управување со бизнис")}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-blue-600 mb-2">QuickBooks</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Migrim i Plotë i të Dhënave", "Full Data Migration", "Migración Completa de Datos", "Vollständige Datenmigration", "Целосна миграција на податоци")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-green-600 mb-2">FreshBooks</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Transferim i Plotë", "Complete Transfer", "Transferencia Completa", "Vollständiger Transfer", "Комплетен трансфер")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-purple-600 mb-2">Xero</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Import pa Probleme", "Seamless Import", "Importación Sin Problemas", "Nahtloser Import", "Беспрекорен увоз")}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-orange-600 mb-2">Sage</div>
              <div className="text-xs text-muted-foreground">{sq(lang, "Migrim nga Ekspertët", "Expert Migration", "Migración Experta", "Expertenmigration", "Експертска миграција")}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Zero Humbje të Dhënash", "Zero Data Loss", "Cero Pérdida de Datos", "Kein Datenverlust", "Нула загуба на податоци")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Procesi ynë i migrimit siguron 100% integritet të të dhënave me kontrolle gjithëpërfshirëse validimi.", "Our migration process ensures 100% data integrity with comprehensive validation checks.", "Nuestro proceso de migración asegura 100% de integridad de datos con verificaciones de validación exhaustivas.", "Unser Migrationsprozess gewährleistet 100% Datenintegrität mit umfassenden Validierungsprüfungen.", "Нашиот процес на миграција обезбедува 100% интегритет на податоците со сеопфатни проверки за валидација.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Hartëzim i Marrëdhënieve", "Relationship Mapping", "Mapeo de Relaciones", "Beziehungszuordnung", "Мапирање на врски")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Ruan automatikisht marrëdhëniet midis klientëve, faturave, pagesave dhe të dhënave të tjera.", "Automatically maintains relationships between customers, invoices, payments, and other data.", "Mantiene automáticamente las relaciones entre clientes, facturas, pagos y otros datos.", "Pflegt automatisch die Beziehungen zwischen Kunden, Rechnungen, Zahlungen und anderen Daten.", "Автоматски ги одржува врските меѓу клиентите, фактурите, плаќањата и другите податоци.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Migrim i Fushave të Personalizuara", "Custom Field Migration", "Migración de Campos Personalizados", "Migration Benutzerdefinierter Felder", "Миграција на прилагодени полиња")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Transferoni fushat e personalizuara, etiketat dhe kategoritë për të ruajtur rrjedhat tuaja të punës.", "Transfer custom fields, tags, and categories to maintain your business workflows.", "Transfiera campos personalizados, etiquetas y categorías para mantener sus flujos de trabajo empresariales.", "Übertragen Sie benutzerdefinierte Felder, Tags und Kategorien, um Ihre Geschäftsabläufe beizubehalten.", "Префрлете прилагодени полиња, ознаки и категории за да ги одржите вашите деловни текови.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Ruajtja e të Dhënave Historike", "Historical Data Preservation", "Preservación de Datos Históricos", "Historische Datenerhaltung", "Зачувување на историски податоци")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Migroni vite të dhënash historike duke ruajtur datat dhe gjurmët e auditimit.", "Migrate years of historical data while maintaining date stamps and audit trails.", "Migre años de datos históricos manteniendo las marcas de fecha y los registros de auditoría.", "Migrieren Sie jahrelange historische Daten unter Beibehaltung von Zeitstempeln und Prüfprotokollen.", "Мигрирајте години историски податоци додека ги одржувате датумските ознаки и ревизорските записи.")}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Ekipi i Mbështetjes së Ekspertëve", "Expert Support Team", "Equipo de Soporte Experto", "Experten-Support-Team", "Тим за експертска поддршка")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Specialistë të dedikuar të migrimit ju udhëheqin gjatë gjithë procesit.", "Dedicated migration specialists guide you through the entire process.", "Especialistas dedicados en migración le guían a través de todo el proceso.", "Engagierte Migrationsspezialisten begleiten Sie durch den gesamten Prozess.", "Посветени специјалисти за миграција ве водат низ целиот процес.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Orar Fleksibël", "Flexible Timeline", "Cronograma Flexible", "Flexibler Zeitplan", "Флексибилна временска рамка")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Migroni sipas ritmit tuaj me opsione për tranzicione të menjëhershme ose të planifikuara.", "Migrate at your own pace with options for immediate or scheduled transitions.", "Migre a su propio ritmo con opciones de transiciones inmediatas o programadas.", "Migrieren Sie in Ihrem eigenen Tempo mit Optionen für sofortige oder geplante Übergänge.", "Мигрирајте со свое темпо со опции за моментални или закажани транзиции.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Testim Paralel", "Parallel Testing", "Pruebas Paralelas", "Paralleles Testen", "Паралелно тестирање")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Testoni të dhënat e migruara së bashku me sistemin tuaj ekzistues para se të bëni kalimin.", "Test your migrated data alongside your existing system before making the switch.", "Pruebe sus datos migrados junto con su sistema existente antes de hacer el cambio.", "Testen Sie Ihre migrierten Daten neben Ihrem bestehenden System, bevor Sie den Wechsel vornehmen.", "Тестирајте ги мигрираните податоци заедно со вашиот постоечки систем пред да направите промена.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Trajnim & Familjarizim", "Training & Onboarding", "Capacitación e Incorporación", "Schulung & Einarbeitung", "Обука и воведување")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Trajnim gjithëpërfshirës për të ndihmuar ekipin tuaj të fillojë shpejt.", "Comprehensive training to help your team get up to speed quickly.", "Capacitación integral para ayudar a su equipo a ponerse al día rápidamente.", "Umfassende Schulung, um Ihr Team schnell auf den neuesten Stand zu bringen.", "Сеопфатна обука за да му помогнете на вашиот тим брзо да се прилагоди.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Migrim i Shpejtë", "Fast Migration", "Migración Rápida", "Schnelle Migration", "Брза миграција")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Shumica e migrimeve përfundojnë brenda 24-48 orëve, duke minimizuar ndërprerjen e biznesit.", "Most migrations complete within 24-48 hours, minimizing business disruption.", "La mayoría de las migraciones se completan en 24-48 horas, minimizando la interrupción del negocio.", "Die meisten Migrationen werden innerhalb von 24-48 Stunden abgeschlossen und minimieren Geschäftsunterbrechungen.", "Повеќето миграции се завршуваат во рок од 24-48 часа, минимизирајќи ги прекините во бизнисот.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Transferim i Sigurt", "Secure Transfer", "Transferencia Segura", "Sicherer Transfer", "Безбеден трансфер")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Të gjitha të dhënat e enkriptuara gjatë transferimit me fshirje të sigurt nga burimi pas konfirmimit.", "All data encrypted during transfer with secure deletion from source after confirmation.", "Todos los datos encriptados durante la transferencia con eliminación segura de la fuente después de la confirmación.", "Alle Daten werden während der Übertragung verschlüsselt mit sicherer Löschung aus der Quelle nach Bestätigung.", "Сите податоци се шифрирани за време на трансферот со безбедно бришење од изворот по потврдата.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Familjarizim i Ekipit", "Team Onboarding", "Incorporación del Equipo", "Team-Einarbeitung", "Воведување на тимот")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Trajnim dhe mbështetje gjithëpërfshirëse për të siguruar që i gjithë ekipi juaj të jetë produktiv që nga dita e parë.", "Comprehensive training and support to ensure your entire team is productive from day one.", "Capacitación y soporte integral para asegurar que todo su equipo sea productivo desde el primer día.", "Umfassende Schulung und Unterstützung, um sicherzustellen, dass Ihr gesamtes Team vom ersten Tag an produktiv ist.", "Сеопфатна обука и поддршка за да се обезбеди дека целиот ваш тим е продуктивен од првиот ден.")}</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{sq(lang, "Filloni Migrimin Tuaj Sot", "Start Your Migration Today", "Comience Su Migración Hoy", "Starten Sie Ihre Migration Heute", "Започнете ја вашата миграција денес")}</h2>
          <p className="text-xl mb-8 text-teal-100">{sq(lang, "Bashkohuni me mijëra biznese që kanë migruar me sukses në BusinessFlow Pro pa asnjë problem.", "Join thousands of businesses who have successfully migrated to BusinessFlow Pro with zero hassle.", "Únase a miles de empresas que han migrado exitosamente a BusinessFlow Pro sin ningún problema.", "Schließen Sie sich Tausenden von Unternehmen an, die erfolgreich und problemlos zu BusinessFlow Pro migriert sind.", "Придружете се на илјадници бизниси кои успешно мигрирале на BusinessFlow Pro без никакви проблеми.")}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <ArrowRight className="h-5 w-5 mr-2" />
              {sq(lang, "Fillo Migrimin", "Start Migration", "Iniciar Migración", "Migration Starten", "Започни миграција")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              {sq(lang, "Fol me Ekspertin", "Talk to Expert", "Hablar con Experto", "Mit Experten Sprechen", "Разговарај со експерт")}
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-teal-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>{sq(lang, "Migrim Falas", "Free Migration", "Migración Gratuita", "Kostenlose Migration", "Бесплатна миграција")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{sq(lang, "24-48 Orë", "24-48 Hours", "24-48 Horas", "24-48 Stunden", "24-48 Часа")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>{sq(lang, "Zero Ndërprerje", "Zero Downtime", "Cero Inactividad", "Keine Ausfallzeit", "Нула прекин")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}