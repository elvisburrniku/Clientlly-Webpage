import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Download, Wifi, Bell, Shield, RefreshCw, Camera, FileText, Users, CheckCircle, Star, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element { switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; } }

export default function FeatureMobile() {
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
                    className="w-12 h-9 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500 rounded-lg"></div>
              </div>
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
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight animate-professional-fade">
            {sq(lang, "Aplikacioni", "Mobile", "Aplicación", "Mobile", "Мобилна")} <span className="animate-subtle-gradient">{sq(lang, "Celular", "App", "Móvil", "App", "Апликација")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sq(lang,
              "Merrni menaxhimin e biznesit tuaj kudo me aplikacionin tonë të fuqishëm celular. Aksesoni të gjitha veçoritë, menaxhoni financat dhe qëndroni të lidhur me ekipin tuaj në lëvizje.",
              "Take your business management anywhere with our powerful mobile app. Access all features, manage finances, and stay connected with your team on the go.",
              "Lleve la gestión de su negocio a cualquier lugar con nuestra potente aplicación móvil. Acceda a todas las funciones, gestione finanzas y manténgase conectado con su equipo en movimiento.",
              "Nehmen Sie Ihr Geschäftsmanagement überallhin mit unserer leistungsstarken mobilen App. Greifen Sie auf alle Funktionen zu, verwalten Sie Finanzen und bleiben Sie unterwegs mit Ihrem Team verbunden.",
              "Земете го управувањето со вашиот бизнис секаде со нашата моќна мобилна апликација. Пристапете до сите функции, управувајте со финансии и останете поврзани со вашиот тим во движење."
            )}
          </p>
        </div>

        {/* Professional Mobile App Photo */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional using business mobile app on smartphone and tablet" 
              className="rounded-3xl shadow-2xl max-w-2xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              iOS & Android
            </Badge>
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">4.8★</div>
                  <div className="text-xs text-gray-600">App Store</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">500K+</div>
                  <div className="text-xs text-gray-600">{sq(lang, "Shkarkime", "Downloads", "Descargas", "Downloads", "Преземања")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Mobile Reports */}
        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{sq(lang, "Analitika e Përdorimit Celular", "Mobile Usage Analytics", "Analítica de Uso Móvil", "Mobile Nutzungsanalysen", "Аналитика на мобилна употреба")}</h3>
              <Badge className="bg-blue-100 text-blue-700">{sq(lang, "Këtë Muaj", "This Month", "Este Mes", "Diesen Monat", "Овој месец")}</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">{sq(lang, "Përdorues Aktivë Ditore", "Daily Active Users", "Usuarios Activos Diarios", "Tägliche Aktive Nutzer", "Дневно активни корисници")}</span>
                </div>
                <span className="font-bold text-blue-600">12,847</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{sq(lang, "Sesione të Aplikacionit", "App Sessions", "Sesiones de App", "App-Sitzungen", "Сесии на апликација")}</span>
                </div>
                <span className="font-bold text-green-600">89,234</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">{sq(lang, "Faturat e Skanuara", "Receipts Scanned", "Recibos Escaneados", "Gescannte Belege", "Скенирани сметки")}</span>
                </div>
                <span className="font-bold text-purple-600">4,567</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{sq(lang, "Kënaqësia e Përdoruesve", "User Satisfaction", "Satisfacción del Usuario", "Benutzerzufriedenheit", "Задоволство на корисници")}</span>
                  <span className="text-sm font-bold text-green-600">96.8%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{sq(lang, "Përdorimi i Veçorive", "Feature Usage", "Uso de Funciones", "Funktionsnutzung", "Употреба на функции")}</h3>
              <Badge className="bg-green-100 text-green-700">{sq(lang, "Më Populloret", "Most Popular", "Más Populares", "Am Beliebtesten", "Најпопуларни")}</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-indigo-600" />
                  <span className="font-medium text-sm">{sq(lang, "Krijimi i Faturave", "Invoice Creation", "Creación de Facturas", "Rechnungserstellung", "Креирање фактури")}</span>
                </div>
                <span className="font-bold text-indigo-600">89%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-sm">{sq(lang, "Skanues Faturash", "Receipt Scanner", "Escáner de Recibos", "Beleg-Scanner", "Скенер за сметки")}</span>
                </div>
                <span className="font-bold text-green-600">76%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-sm">{sq(lang, "Biseda e Ekipit", "Team Chat", "Chat de Equipo", "Team-Chat", "Тимски чат")}</span>
                </div>
                <span className="font-bold text-blue-600">68%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-orange-600" />
                  <span className="font-medium text-sm">{sq(lang, "Njoftimet Push", "Push Notifications", "Notificaciones Push", "Push-Benachrichtigungen", "Push известувања")}</span>
                </div>
                <span className="font-bold text-orange-600">92%</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{sq(lang, "Sesioni Mesatar", "Average Session", "Sesión Promedio", "Durchschnittliche Sitzung", "Просечна сесија")}</span>
                  <span className="text-sm font-bold text-green-600">{sq(lang, "8.4 min", "8.4 min", "8.4 min", "8,4 Min", "8.4 мин")}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Modaliteti Offline", "Offline Mode", "Modo Sin Conexión", "Offline-Modus", "Офлајн режим")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Punoni pa probleme edhe pa lidhje interneti. Të gjitha të dhënat sinkronizohen automatikisht kur të ktheheni online.", "Work seamlessly even without internet connection. All data syncs automatically when you're back online.", "Trabaje sin problemas incluso sin conexión a internet. Todos los datos se sincronizan automáticamente cuando vuelve a estar en línea.", "Arbeiten Sie nahtlos auch ohne Internetverbindung. Alle Daten werden automatisch synchronisiert, wenn Sie wieder online sind.", "Работете беспрекорно дури и без интернет конекција. Сите податоци се синхронизираат автоматски кога ќе бидете повторно онлајн.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Njoftimet Push", "Push Notifications", "Notificaciones Push", "Push-Benachrichtigungen", "Push известувања")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Qëndroni të përditësuar me njoftime në kohë reale për pagesa, afate dhe ngjarje të rëndësishme biznesi.", "Stay updated with real-time notifications for payments, due dates, and important business events.", "Manténgase actualizado con notificaciones en tiempo real para pagos, fechas de vencimiento y eventos comerciales importantes.", "Bleiben Sie mit Echtzeit-Benachrichtigungen für Zahlungen, Fälligkeitstermine und wichtige Geschäftsereignisse auf dem Laufenden.", "Останете ажурирани со известувања во реално време за плаќања, рокови и важни деловни настани.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Skanues Faturash", "Receipt Scanner", "Escáner de Recibos", "Beleg-Scanner", "Скенер за сметки")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Kapni dhe kategorizoni menjëherë faturat duke përdorur teknologjinë e skanimit me fuqi AI.", "Instantly capture and categorize receipts using AI-powered scanning technology.", "Capture y categorice recibos instantáneamente utilizando tecnología de escaneo impulsada por IA.", "Erfassen und kategorisieren Sie Belege sofort mit KI-gestützter Scantechnologie.", "Моментално фатете и категоризирајте сметки користејќи технологија за скенирање со вештачка интелигенција.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Sinkronizim në Kohë Reale", "Real-time Sync", "Sincronización en Tiempo Real", "Echtzeit-Synchronisation", "Синхронизација во реално време")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Ndryshimet sinkronizohen menjëherë në të gjitha pajisjet. Ekipi juaj ka gjithmonë informacionin më të fundit.", "Changes sync instantly across all devices. Your team always has the latest information.", "Los cambios se sincronizan instantáneamente en todos los dispositivos. Su equipo siempre tiene la información más reciente.", "Änderungen werden sofort über alle Geräte synchronisiert. Ihr Team hat immer die neuesten Informationen.", "Промените се синхронизираат моментално на сите уреди. Вашиот тим секогаш ги има најновите информации.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Krijim i Shpejtë Faturash", "Quick Invoice Creation", "Creación Rápida de Facturas", "Schnelle Rechnungserstellung", "Брзо креирање фактури")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Krijoni dhe dërgoni fatura profesionale brenda sekondash, direkt nga pajisja juaj celulare.", "Create and send professional invoices in seconds, right from your mobile device.", "Cree y envíe facturas profesionales en segundos, directamente desde su dispositivo móvil.", "Erstellen und senden Sie professionelle Rechnungen in Sekunden, direkt von Ihrem Mobilgerät.", "Креирајте и испратете професионални фактури за секунди, директно од вашиот мобилен уред.")}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sq(lang, "Bashkëpunim Ekipor", "Team Collaboration", "Colaboración en Equipo", "Teamzusammenarbeit", "Тимска соработка")}</h3>
              <p className="text-muted-foreground">{sq(lang, "Ndani projekte, caktoni detyra dhe komunikoni me ekipin tuaj nga kudo.", "Share projects, assign tasks, and communicate with your team from anywhere.", "Comparta proyectos, asigne tareas y comuníquese con su equipo desde cualquier lugar.", "Teilen Sie Projekte, weisen Sie Aufgaben zu und kommunizieren Sie mit Ihrem Team von überall.", "Споделувајте проекти, доделувајте задачи и комуницирајте со вашиот тим од секаде.")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{sq(lang, "Pse të Zgjidhni Aplikacionin Tonë Celular?", "Why Choose Our Mobile App?", "¿Por Qué Elegir Nuestra Aplicación Móvil?", "Warum Unsere Mobile App Wählen?", "Зошто да ја изберете нашата мобилна апликација?")}</h2>
            <p className="text-xl text-muted-foreground">{sq(lang, "Përjetoni lirinë e menaxhimit të biznesit tuaj nga kudo", "Experience the freedom of managing your business from anywhere", "Experimente la libertad de gestionar su negocio desde cualquier lugar", "Erleben Sie die Freiheit, Ihr Unternehmen von überall zu verwalten", "Доживејте ја слободата на управување со вашиот бизнис од секаде")}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Aplikacione Native iOS & Android", "Native iOS & Android Apps", "Apps Nativas iOS y Android", "Native iOS- & Android-Apps", "Нативни iOS и Android апликации")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Optimizuar për performancë në të dyja platformat me veçori dhe integrime native.", "Optimized for performance on both platforms with native features and integrations.", "Optimizado para rendimiento en ambas plataformas con funciones e integraciones nativas.", "Optimiert für Leistung auf beiden Plattformen mit nativen Funktionen und Integrationen.", "Оптимизирано за перформанси на двете платформи со нативни функции и интеграции.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Ndërfaqe e Optimizuar për Prekje", "Touch-Optimized Interface", "Interfaz Optimizada para Tacto", "Touch-Optimierte Oberfläche", "Интерфејс оптимизиран за допир")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Projektuar posaçërisht për përdorim celular me gjeste dhe navigim intuitiv.", "Designed specifically for mobile use with intuitive gestures and navigation.", "Diseñada específicamente para uso móvil con gestos y navegación intuitivos.", "Speziell für die mobile Nutzung mit intuitiven Gesten und Navigation konzipiert.", "Дизајнирано специјално за мобилна употреба со интуитивни гестови и навигација.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Siguri Biometrike", "Biometric Security", "Seguridad Biométrica", "Biometrische Sicherheit", "Биометриска безбедност")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Akses i sigurt duke përdorur teknologjinë e njohjes së gjurmës së gishtit ose fytyrës.", "Secure access using fingerprint or face recognition technology.", "Acceso seguro utilizando tecnología de reconocimiento de huella dactilar o facial.", "Sicherer Zugang mittels Fingerabdruck- oder Gesichtserkennung.", "Безбеден пристап со технологија за препознавање на отпечаток или лице.")}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Veprime të Shpejta", "Quick Actions", "Acciones Rápidas", "Schnellaktionen", "Брзи акции")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Detyrat e zakonshme të aksesushme me vetëm disa prekje nga ekrani kryesor.", "Common tasks accessible with just a few taps from the home screen.", "Tareas comunes accesibles con solo unos toques desde la pantalla de inicio.", "Häufige Aufgaben mit nur wenigen Tipps vom Startbildschirm aus zugänglich.", "Вообичаени задачи достапни со само неколку допири од почетниот екран.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Integrim GPS", "GPS Integration", "Integración GPS", "GPS-Integration", "GPS интеграција")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Gjurmim automatik i kilometrazhit dhe kategorizim shpenzimesh bazuar në vendndodhje.", "Automatic mileage tracking and location-based expense categorization.", "Seguimiento automático de kilometraje y categorización de gastos basada en ubicación.", "Automatische Kilometerverfolgung und standortbasierte Ausgabenkategorisierung.", "Автоматско следење на километража и категоризација на трошоци базирана на локација.")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{sq(lang, "Komanda me Zë", "Voice Commands", "Comandos de Voz", "Sprachbefehle", "Гласовни команди")}</h3>
                  <p className="text-muted-foreground">{sq(lang, "Krijoni regjistrime dhe navigoni duke përdorur komandat me zë për operim pa duar.", "Create entries and navigate using voice commands for hands-free operation.", "Cree entradas y navegue usando comandos de voz para operación manos libres.", "Erstellen Sie Einträge und navigieren Sie mit Sprachbefehlen für freihändige Bedienung.", "Креирајте записи и навигирајте користејќи гласовни команди за работа без раце.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{sq(lang, "Shkarkoni Sot", "Download Today", "Descargue Hoy", "Heute Herunterladen", "Преземете денес")}</h2>
          <p className="text-xl mb-8 text-blue-100">{sq(lang, "Filloni me aplikacionin celular BusinessFlow Pro dhe merrni kontrollin e biznesit tuaj në lëvizje.", "Get started with BusinessFlow Pro mobile app and take control of your business on the go.", "Comience con la aplicación móvil BusinessFlow Pro y tome el control de su negocio en movimiento.", "Starten Sie mit der BusinessFlow Pro Mobile App und übernehmen Sie die Kontrolle über Ihr Unternehmen unterwegs.", "Започнете со мобилната апликација BusinessFlow Pro и преземете контрола над вашиот бизнис во движење.")}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              onClick={() => { window.location.href = "/mobile-app"; window.scrollTo({ top: 0 }); }}
            >
              <Download className="h-5 w-5 mr-2" />
              {sq(lang, "Shkarko për iOS", "Download for iOS", "Descargar para iOS", "Für iOS Herunterladen", "Преземи за iOS")}
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              onClick={() => { window.location.href = "/mobile-app"; window.scrollTo({ top: 0 }); }}
            >
              <Download className="h-5 w-5 mr-2" />
              {sq(lang, "Shkarko për Android", "Download for Android", "Descargar para Android", "Für Android Herunterladen", "Преземи за Android")}
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-blue-100">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <span>{sq(lang, "4.8/5 Vlerësim", "4.8/5 Rating", "4.8/5 Calificación", "4.8/5 Bewertung", "4.8/5 Оценка")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>{sq(lang, "50K+ Shkarkime", "50K+ Downloads", "50K+ Descargas", "50K+ Downloads", "50K+ Преземања")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>{sq(lang, "Përditësime të Rregullta", "Regular Updates", "Actualizaciones Regulares", "Regelmäßige Updates", "Редовни ажурирања")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}