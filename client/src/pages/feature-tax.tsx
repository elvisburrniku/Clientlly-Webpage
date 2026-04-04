import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  FileText, 
  PieChart, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Calendar,
  Receipt,
  Target,
  AlertCircle,
  Download
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element { switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; } }

export default function FeatureTax() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("categories");
  const { currentLanguage: lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

      </div>

      {/* Background Elements - Main Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        {/* Grid Pattern - Applied to entire page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Additional Grid Pattern for all sections */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
      {/* Header */}
      <div className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => {
                window.location.href = "/";
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{sq(lang, "Kthehu te veçoritë", "Back to Features", "Volver a funciones", "Zurück zu Funktionen", "Назад кон функции")}</span>
            </button>
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  alt="BusinessFlow Pro" 
                  className="w-10 h-8 sm:w-16 sm:h-12 object-contain logo-simple"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/15 group-hover:to-teal-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
              <span className="hidden sm:block text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>
            <Button 
              onClick={() => { window.location.href = "/subscribe"; window.scrollTo({ top: 0 }); }}
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base px-3 sm:px-4"
              size="sm"
            >
              <span className="hidden sm:inline">{sq(lang, "Fillo Tani", "Get Started", "Comenzar", "Loslegen", "Започни")}</span>
              <span className="sm:hidden">{sq(lang, "Fillo", "Start", "Iniciar", "Start", "Почни")}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 fade-in">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                  {sq(lang, "Pajtueshmëria & Planifikimi i Taksave", "Tax Compliance & Planning", "Cumplimiento y Planificación Fiscal", "Steuerkonformität & Planung", "Даночна усогласеност и планирање")}
                </Badge>
                <h1 className="text-5xl font-bold text-foreground animate-professional-fade">
                  {sq(lang, 
                    <>{sq(lang, "Qëndroni të organizuar dhe", "Stay organized and", "Manténgase organizado y", "Bleiben Sie organisiert und", "Останете организирани и")} <span className="animate-subtle-gradient">{sq(lang, "gati për taksa", "tax-ready", "listo para impuestos", "steuerbereit", "подготвени за данок")}</span> {sq(lang, "gjatë gjithë vitit", "year-round", "todo el año", "das ganze Jahr", "цела година")}</>,
                    <>Stay organized and <span className="animate-subtle-gradient">tax-ready</span> year-round</>,
                    <>Manténgase organizado y <span className="animate-subtle-gradient">listo para impuestos</span> todo el año</>,
                    <>Bleiben Sie organisiert und <span className="animate-subtle-gradient">steuerbereit</span> das ganze Jahr</>,
                    <>Останете организирани и <span className="animate-subtle-gradient">подготвени за данок</span> цела година</>
                  )}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {sq(lang,
                    "Kategorizoni automatikisht shpenzimet sipas kodit tatimor, gjurmoni zbritjet dhe llogaritni TVSH-në. Dijeni saktësisht ku qëndroni dhe sa detyroheni me njohuri tatimore në kohë reale.",
                    "Automatically categorize expenses by tax code, track deductibles, and calculate sales tax. Know exactly where you stand and how much you owe with real-time tax insights.",
                    "Categorice automáticamente los gastos por código fiscal, rastree deducciones y calcule impuestos sobre ventas. Sepa exactamente dónde se encuentra y cuánto debe con información fiscal en tiempo real.",
                    "Kategorisieren Sie Ausgaben automatisch nach Steuercode, verfolgen Sie Absetzbarkeiten und berechnen Sie die Umsatzsteuer. Wissen Sie genau, wo Sie stehen und wie viel Sie schulden, mit Echtzeit-Steuereinblicken.",
                    "Автоматски категоризирајте трошоци по даночен код, следете одбитоци и пресметајте данок на продажба. Знајте точно каде стоите и колку должите со увиди за данок во реално време."
                  )}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 fade-in stagger-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">{sq(lang, "Kategorizim automatik tatimor", "Automatic tax categorization", "Categorización fiscal automática", "Automatische Steuerkategorisierung", "Автоматска даночна категоризација")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">{sq(lang, "Llogaritje taksash në kohë reale", "Real-time tax calculations", "Cálculos fiscales en tiempo real", "Echtzeit-Steuerberechnungen", "Пресметки на данок во реално време")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">{sq(lang, "Gjurmim i zbritjeve", "Deduction tracking", "Seguimiento de deducciones", "Abzugsverfolgung", "Следење на одбитоци")}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0 focus:border-none active:outline-none"
                  onClick={() => { window.location.href = "/trial"; window.scrollTo({ top: 0 }); }}
                  style={{outline: 'none', boxShadow: 'none'}}
                >
                  {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratuita", "Kostenlose Testversion Starten", "Започни бесплатна проба")}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  {sq(lang, "Llogaritësi i Taksave", "Tax Calculator", "Calculadora de Impuestos", "Steuerrechner", "Калкулатор за данок")}
                </Button>
              </div>
            </div>

            <div className="relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative space-y-6">
                <Card className="glass-effect border-white/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{sq(lang, "Përmbledhje Taksash - T4 2024", "Tax Summary - Q4 2024", "Resumen Fiscal - T4 2024", "Steuerübersicht - Q4 2024", "Даночен преглед - Q4 2024")}</h3>
                    <Badge className="bg-green-100 text-green-700">{sq(lang, "Në Pajtueshmëri", "Compliant", "Conforme", "Konform", "Усогласено")}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">€12,450</div>
                      <div className="text-sm text-muted-foreground">{sq(lang, "Zbritje Totale", "Total Deductions", "Deducciones Totales", "Gesamtabzüge", "Вкупни одбитоци")}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">€3,280</div>
                      <div className="text-sm text-muted-foreground">{sq(lang, "Kursime Taksash", "Tax Savings", "Ahorros Fiscales", "Steuerersparnisse", "Даночни заштеди")}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { category: sq(lang, "Vakte Biznesi", "Business Meals", "Comidas de Negocios", "Geschäftsessen", "Деловни оброци") as string, amount: "€2,450", rate: "50%" },
                      { category: sq(lang, "Furnizime Zyre", "Office Supplies", "Suministros de Oficina", "Bürobedarf", "Канцелариски материјали") as string, amount: "€1,890", rate: "100%" },
                      { category: sq(lang, "Udhëtime", "Travel", "Viajes", "Reisen", "Патувања") as string, amount: "€3,120", rate: "100%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-white/50 rounded">
                        <span className="text-sm">{item.category}</span>
                        <div className="text-right">
                          <div className="text-sm font-medium">{item.amount}</div>
                          <div className="text-xs text-green-600">{item.rate} {sq(lang, "e zbritshme", "deductible", "deducible", "absetzbar", "одбитно")}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-xl font-bold text-orange-600">94%</div>
                    <div className="text-sm text-muted-foreground">{sq(lang, "Auto-kategorizuar", "Auto-categorized", "Auto-categorizado", "Auto-kategorisiert", "Авто-категоризирано")}</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-xl font-bold text-blue-600">€0</div>
                    <div className="text-sm text-muted-foreground">{sq(lang, "Gjoba të shmangura", "Penalties avoided", "Multas evitadas", "Strafen vermieden", "Избегнати казни")}</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {sq(lang, "Menaxhim i plotë tatimor", "Complete tax management", "Gestión fiscal completa", "Vollständige Steuerverwaltung", "Целосно даночно управување")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sq(lang, "Nga kategorizimi i shpenzimeve deri te planifikimi tatimor, qëndroni në pajtueshmëri dhe maksimizoni zbritjet", "From expense categorization to tax planning, stay compliant and maximize deductions", "Desde la categorización de gastos hasta la planificación fiscal, manténgase conforme y maximice deducciones", "Von der Ausgabenkategorisierung bis zur Steuerplanung, bleiben Sie konform und maximieren Sie Abzüge", "Од категоризација на трошоци до даночно планирање, останете усогласени и максимизирајте одбитоци")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "categories", label: sq(lang, "Kategoritë Tatimore", "Tax Categories", "Categorías Fiscales", "Steuerkategorien", "Даночни категории") as string, icon: PieChart },
              { id: "calculations", label: sq(lang, "Llogaritjet", "Calculations", "Cálculos", "Berechnungen", "Пресметки") as string, icon: Calculator },
              { id: "deductions", label: sq(lang, "Zbritjet", "Deductions", "Deducciones", "Abzüge", "Одбитоци") as string, icon: Target },
              { id: "compliance", label: sq(lang, "Pajtueshmëria", "Compliance", "Cumplimiento", "Compliance", "Усогласеност") as string, icon: FileText }
            ].map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === tab.id ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === "categories" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">{sq(lang, "Kategorizim i zgjuar tatimor", "Smart tax categorization", "Categorización fiscal inteligente", "Intelligente Steuerkategorisierung", "Паметна даночна категоризација")}</h3>
                  <p className="text-lg text-muted-foreground">
                    {sq(lang,
                      "AI-ja jonë cakton automatikisht kodet tatimore shpenzimeve tuaja bazuar në udhëzimet e ATK-së. Rregullat e personalizuara sigurojnë kategorizim të saktë për llojin tuaj specifik të biznesit.",
                      "Our AI automatically assigns tax codes to your expenses based on IRS guidelines. Custom rules ensure accurate categorization for your specific business type.",
                      "Nuestra IA asigna automáticamente códigos fiscales a sus gastos según las directrices del IRS. Las reglas personalizadas garantizan una categorización precisa para su tipo de negocio específico.",
                      "Unsere KI weist Ihren Ausgaben automatisch Steuercodes basierend auf IRS-Richtlinien zu. Benutzerdefinierte Regeln gewährleisten eine genaue Kategorisierung für Ihren spezifischen Geschäftstyp.",
                      "Нашата вештачка интелигенција автоматски доделува даночни кодови на вашите трошоци базирано на упатствата на UJP. Прилагодени правила обезбедуваат точна категоризација за вашиот специфичен тип на бизнис."
                    )}
                  </p>
                  <ul className="space-y-4">
                    {[
                      sq(lang, "Kategorizim automatik në pajtueshmëri me ATK-në", "IRS-compliant automatic categorization", "Categorización automática conforme al IRS", "IRS-konforme automatische Kategorisierung", "Автоматска категоризација усогласена со UJP") as string,
                      sq(lang, "Hartëzim i kodeve tatimore specifike për industrinë", "Industry-specific tax code mapping", "Mapeo de códigos fiscales específicos de la industria", "Branchenspezifische Steuercode-Zuordnung", "Мапирање на даночни кодови специфични за индустријата") as string,
                      sq(lang, "Rregulla kategorizimi të personalizuara", "Custom categorization rules", "Reglas de categorización personalizadas", "Benutzerdefinierte Kategorisierungsregeln", "Прилагодени правила за категоризација") as string,
                      sq(lang, "Ndarje e shpenzimeve të përziera (biznes vs personale)", "Mixed expense splitting (business vs personal)", "División de gastos mixtos (negocio vs personal)", "Aufteilung gemischter Ausgaben (geschäftlich vs. privat)", "Поделба на мешани трошоци (деловни наспроти лични)") as string,
                      sq(lang, "Llogaritje zbritjesh në kohë reale", "Real-time deductibility calculations", "Cálculos de deducibilidad en tiempo real", "Echtzeit-Abzugsfähigkeitsberechnungen", "Пресметки на одбитност во реално време") as string
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <PieChart className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold mb-4">{sq(lang, "Kategoritë Tatimore Popullore", "Popular Tax Categories", "Categorías Fiscales Populares", "Beliebte Steuerkategorien", "Популарни даночни категории")}</h4>
                  <div className="grid gap-3">
                    {[
                      { name: sq(lang, "Vakte Biznesi", "Business Meals", "Comidas de Negocios", "Geschäftsessen", "Деловни оброци") as string, code: sq(lang, "Vakte & Argëtime", "Meals & Entertainment", "Comidas y Entretenimiento", "Mahlzeiten & Unterhaltung", "Оброци и забава") as string, deductible: "50%", color: "bg-red-500" },
                      { name: sq(lang, "Furnizime Zyre", "Office Supplies", "Suministros de Oficina", "Bürobedarf", "Канцелариски материјали") as string, code: sq(lang, "Shpenzime Zyre", "Office Expenses", "Gastos de Oficina", "Bürokosten", "Канцелариски трошоци") as string, deductible: "100%", color: "bg-blue-500" },
                      { name: sq(lang, "Udhëtime", "Travel", "Viajes", "Reisen", "Патувања") as string, code: sq(lang, "Shpenzime Udhëtimi", "Travel Expenses", "Gastos de Viaje", "Reisekosten", "Трошоци за патување") as string, deductible: "100%", color: "bg-green-500" },
                      { name: sq(lang, "Shërbime Profesionale", "Professional Services", "Servicios Profesionales", "Professionelle Dienstleistungen", "Професионални услуги") as string, code: sq(lang, "Tarifa Profesionale", "Professional Fees", "Honorarios Profesionales", "Professionelle Gebühren", "Професионални такси") as string, deductible: "100%", color: "bg-purple-500" },
                      { name: sq(lang, "Softuer", "Software", "Software", "Software", "Софтвер") as string, code: sq(lang, "Kompjuter & Internet", "Computer & Internet", "Computadora e Internet", "Computer & Internet", "Компјутер и интернет") as string, deductible: "100%", color: "bg-orange-500" },
                      { name: sq(lang, "Automjet", "Vehicle", "Vehículo", "Fahrzeug", "Возило") as string, code: sq(lang, "Shpenzime Automjeti", "Vehicle Expenses", "Gastos de Vehículo", "Fahrzeugkosten", "Трошоци за возило") as string, deductible: sq(lang, "Ndryshon", "Varies", "Varía", "Variiert", "Варира") as string, color: "bg-teal-500" }
                    ].map((category, index) => (
                      <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-sm text-muted-foreground">{category.code}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">{category.deductible}</div>
                            <div className="text-xs text-muted-foreground">{sq(lang, "E zbritshme", "Deductible", "Deducible", "Absetzbar", "Одбитно")}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "calculations" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">{sq(lang, "Llogaritje taksash në kohë reale", "Real-time tax calculations", "Cálculos fiscales en tiempo real", "Echtzeit-Steuerberechnungen", "Пресметки на данок во реално време")}</h3>
                  <p className="text-lg text-muted-foreground">
                    {sq(lang,
                      "Gjurmoni detyrimin tuaj tatimor gjatë gjithë vitit me llogaritje në kohë reale. Merrni pagesa tremujore të vlerësuara dhe projeksione të fundit të vitit për të shmangur surprizat.",
                      "Track your tax liability throughout the year with real-time calculations. Get estimated quarterly payments and year-end projections to avoid surprises.",
                      "Rastree su responsabilidad fiscal durante todo el año con cálculos en tiempo real. Obtenga pagos trimestrales estimados y proyecciones de fin de año para evitar sorpresas.",
                      "Verfolgen Sie Ihre Steuerpflicht das ganze Jahr über mit Echtzeit-Berechnungen. Erhalten Sie geschätzte Quartalszahlungen und Jahresendprojektionen, um Überraschungen zu vermeiden.",
                      "Следете ја вашата даночна обврска во текот на целата година со пресметки во реално време. Добијте проценети квартални плаќања и проекции за крајот на годината за да избегнете изненадувања."
                    )}
                  </p>
                  <ul className="space-y-4">
                    {[
                      sq(lang, "Llogaritje tremujore të vlerësuara taksash", "Quarterly estimated tax calculations", "Cálculos trimestrales estimados de impuestos", "Vierteljährliche geschätzte Steuerberechnungen", "Квартални проценки за пресметки на данок") as string,
                      sq(lang, "Projeksione të detyrimit tatimor në fund të vitit", "Year-end tax liability projections", "Proyecciones de responsabilidad fiscal de fin de año", "Jahresende-Steuerpflichtprojektionen", "Проекции за даночна обврска на крајот на годината") as string,
                      sq(lang, "Gjurmim dhe raportim i TVSH-së", "Sales tax tracking and reporting", "Seguimiento y reporte de impuestos sobre ventas", "Umsatzsteuerverfolgung und -berichterstattung", "Следење и известување за данок на продажба") as string,
                      sq(lang, "Llogaritje e taksave të vetëpunësimit", "Self-employment tax calculations", "Cálculos de impuestos de trabajo autónomo", "Selbstständigen-Steuerberechnungen", "Пресметки на данок за самовработување") as string,
                      sq(lang, "Sugjerime për optimizim të pragut tatimor", "Tax bracket optimization suggestions", "Sugerencias de optimización de tramos fiscales", "Vorschläge zur Steuerklassenoptimierung", "Предлози за оптимизација на даночен праг") as string
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Calculator className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{sq(lang, "Projeksioni Tatimor 2024", "2024 Tax Projection", "Proyección Fiscal 2024", "Steuerprojektion 2024", "Даночна проекција 2024")}</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{sq(lang, "Të Ardhura Bruto", "Gross Income", "Ingresos Brutos", "Bruttoeinkommen", "Бруто приход")}</span>
                        <span className="font-bold text-2xl">€156,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{sq(lang, "Zbritje Totale", "Total Deductions", "Deducciones Totales", "Gesamtabzüge", "Вкупни одбитоци")}</span>
                        <span className="font-bold text-green-600">-€28,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{sq(lang, "Të Ardhura të Tatueshme", "Taxable Income", "Ingresos Gravables", "Zu versteuerndes Einkommen", "Оданочлив приход")}</span>
                        <span className="font-bold">€127,550</span>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">{sq(lang, "Taksa e Vlerësuar", "Estimated Tax Owed", "Impuesto Estimado Adeudado", "Geschätzte Steuerschuld", "Проценет должен данок")}</span>
                        <span className="text-2xl font-bold text-orange-600">€22,560</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{sq(lang, "Pagesat Tremujore", "Quarterly Payments", "Pagos Trimestrales", "Quartalszahlungen", "Квартални плаќања")}</h4>
                    <div className="space-y-3">
                      {[
                        { quarter: sq(lang, "T1 2024", "Q1 2024", "T1 2024", "Q1 2024", "Q1 2024") as string, amount: "€5,640", status: "paid", date: sq(lang, "15 Pri", "Apr 15", "15 Abr", "15. Apr", "15 Апр") as string },
                        { quarter: sq(lang, "T2 2024", "Q2 2024", "T2 2024", "Q2 2024", "Q2 2024") as string, amount: "€5,640", status: "paid", date: sq(lang, "15 Qer", "Jun 15", "15 Jun", "15. Jun", "15 Јун") as string },
                        { quarter: sq(lang, "T3 2024", "Q3 2024", "T3 2024", "Q3 2024", "Q3 2024") as string, amount: "€5,640", status: "paid", date: sq(lang, "15 Shta", "Sep 15", "15 Sep", "15. Sep", "15 Сеп") as string },
                        { quarter: sq(lang, "T4 2024", "Q4 2024", "T4 2024", "Q4 2024", "Q4 2024") as string, amount: "€5,640", status: "upcoming", date: sq(lang, "15 Jan", "Jan 15", "15 Ene", "15. Jan", "15 Јан") as string }
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {payment.status === 'paid' ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-orange-500" />
                            )}
                            <div>
                              <div className="font-medium">{payment.quarter}</div>
                              <div className="text-sm text-muted-foreground">{sq(lang, "Afati", "Due", "Vence", "Fällig", "Рок")} {payment.date}</div>
                            </div>
                          </div>
                          <div className="font-bold">{payment.amount}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "deductions" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">{sq(lang, "Maksimizoni zbritjet tuaja", "Maximize your deductions", "Maximice sus deducciones", "Maximieren Sie Ihre Abzüge", "Максимизирајте ги вашите одбитоци")}</h3>
                  <p className="text-lg text-muted-foreground">
                    {sq(lang,
                      "Mos humbni kurrë më një zbritje. Sistemi ynë gjurmon të gjitha shpenzimet e pranueshme të biznesit dhe sugjeron zbritje shtesë që mund t'i keni lënë pa vërejtur.",
                      "Never miss a deduction again. Our system tracks all eligible business expenses and suggests additional deductions you might have overlooked.",
                      "Nunca más pierda una deducción. Nuestro sistema rastrea todos los gastos comerciales elegibles y sugiere deducciones adicionales que podría haber pasado por alto.",
                      "Verpassen Sie nie wieder einen Abzug. Unser System verfolgt alle berechtigten Geschäftsausgaben und schlägt zusätzliche Abzüge vor, die Sie möglicherweise übersehen haben.",
                      "Никогаш повеќе не пропуштајте одбиток. Нашиот систем ги следи сите подобни деловни трошоци и предлага дополнителни одбитоци кои можеби сте ги превиделе."
                    )}
                  </p>
                  <ul className="space-y-4">
                    {[
                      sq(lang, "Zbulim dhe gjurmim automatik i zbritjeve", "Automatic deduction discovery and tracking", "Descubrimiento y seguimiento automático de deducciones", "Automatische Abzugserkennung und -verfolgung", "Автоматско откривање и следење на одбитоци") as string,
                      sq(lang, "Llogaritës zbritjesh për zyrë shtëpie", "Home office deduction calculator", "Calculadora de deducción por oficina en casa", "Homeoffice-Abzugsrechner", "Калкулатор за одбиток на домашна канцеларија") as string,
                      sq(lang, "Gjurmim shpenzimesh automjeti (aktual vs standard)", "Vehicle expense tracking (actual vs standard)", "Seguimiento de gastos de vehículo (real vs estándar)", "Fahrzeugkostenverfolgung (tatsächlich vs. Standard)", "Следење на трошоци за возило (реални наспроти стандардни)") as string,
                      sq(lang, "Orare amortizimi për asete biznesi", "Depreciation schedules for business assets", "Calendarios de depreciación para activos comerciales", "Abschreibungspläne für Geschäftsvermögen", "Распоред на амортизација за деловни средства") as string,
                      sq(lang, "Rekomandime për optimizim zbritjesh", "Deduction optimization recommendations", "Recomendaciones de optimización de deducciones", "Empfehlungen zur Abzugsoptimierung", "Препораки за оптимизација на одбитоци") as string
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{sq(lang, "Gjurmuesi i Zbritjeve", "Deduction Tracker", "Rastreador de Deducciones", "Abzugsverfolgung", "Следач на одбитоци")}</h4>
                    <div className="space-y-4">
                      {[
                        { category: sq(lang, "Zyra e Shtëpisë", "Home Office", "Oficina en Casa", "Homeoffice", "Домашна канцеларија") as string, current: "€4,200", potential: "€5,400", status: "opportunity" },
                        { category: sq(lang, "Vakte Biznesi", "Business Meals", "Comidas de Negocios", "Geschäftsessen", "Деловни оброци") as string, current: "€2,450", potential: "€2,450", status: "maximized" },
                        { category: sq(lang, "Automjet", "Vehicle", "Vehículo", "Fahrzeug", "Возило") as string, current: "€3,200", potential: "€4,100", status: "opportunity" },
                        { category: sq(lang, "Edukim", "Education", "Educación", "Bildung", "Образование") as string, current: "€800", potential: "€1,200", status: "opportunity" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{item.category}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-bold">${item.current}</span>
                              {item.status === 'opportunity' && (
                                <Badge className="bg-orange-100 text-orange-700 text-xs">+${parseInt(item.potential.replace('$', '').replace(',', '')) - parseInt(item.current.replace('$', '').replace(',', ''))}</Badge>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                item.status === 'maximized' ? 'bg-green-500' : 'bg-orange-500'
                              }`}
                              style={{ 
                                width: `${(parseInt(item.current.replace('$', '').replace(',', '')) / parseInt(item.potential.replace('$', '').replace(',', ''))) * 100}%` 
                              }}
                            ></div>
                          </div>
                          {item.status === 'opportunity' && (
                            <div className="text-xs text-orange-600">
                              {sq(lang, "Zbritje shtesë e mundshme", "Potential additional deduction", "Deducción adicional potencial", "Möglicher zusätzlicher Abzug", "Потенцијален дополнителен одбиток")}: ${parseInt(item.potential.replace('$', '').replace(',', '')) - parseInt(item.current.replace('$', '').replace(',', ''))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">{sq(lang, "Qëndroni në pajtueshmëri tatimore", "Stay tax compliant", "Manténgase conforme fiscalmente", "Bleiben Sie steuerkonform", "Останете даночно усогласени")}</h3>
                  <p className="text-lg text-muted-foreground">
                    {sq(lang,
                      "Kontrolle të integruara të pajtueshmërisë sigurojnë që regjistrimet tuaja plotësojnë kërkesat e ATK-së. Gjeneroni raporte gati për auditim dhe ruani dokumentacionin e duhur.",
                      "Built-in compliance checks ensure your records meet IRS requirements. Generate audit-ready reports and maintain proper documentation.",
                      "Las verificaciones de cumplimiento integradas aseguran que sus registros cumplan con los requisitos del IRS. Genere informes listos para auditoría y mantenga la documentación adecuada.",
                      "Integrierte Compliance-Prüfungen stellen sicher, dass Ihre Aufzeichnungen den IRS-Anforderungen entsprechen. Erstellen Sie prüfungsfertige Berichte und pflegen Sie ordnungsgemäße Dokumentation.",
                      "Вградените проверки за усогласеност обезбедуваат дека вашите записи ги исполнуваат барањата на UJP. Генерирајте извештаи подготвени за ревизија и одржувајте соодветна документација."
                    )}
                  </p>
                  <ul className="space-y-4">
                    {[
                      sq(lang, "Validim i pajtueshmërisë me ATK-në dhe alarme", "IRS compliance validation and alerts", "Validación de cumplimiento del IRS y alertas", "IRS-Konformitätsvalidierung und Warnungen", "Валидација на усогласеност со UJP и аларми") as string,
                      sq(lang, "Dokumentacion dhe raporte gati për auditim", "Audit-ready documentation and reports", "Documentación e informes listos para auditoría", "Prüfungsfertige Dokumentation und Berichte", "Документација и извештаи подготвени за ревизија") as string,
                      sq(lang, "Menaxhim i politikës së ruajtjes së regjistrimeve", "Record retention policy management", "Gestión de políticas de retención de registros", "Verwaltung der Aufbewahrungsrichtlinien", "Управување со политика за задржување на записи") as string,
                      sq(lang, "Përditësime dhe njoftime për ligjin tatimor", "Tax law updates and notifications", "Actualizaciones y notificaciones de leyes fiscales", "Steuergesetzaktualisierungen und Benachrichtigungen", "Ажурирања и известувања за даночно право") as string,
                      sq(lang, "Mjete bashkëpunimi me kontabilist profesional", "Professional accountant collaboration tools", "Herramientas de colaboración con contadores profesionales", "Professionelle Zusammenarbeitstools für Buchhalter", "Алатки за соработка со професионален сметководител") as string
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{sq(lang, "Statusi i Pajtueshmërisë", "Compliance Status", "Estado de Cumplimiento", "Compliance-Status", "Статус на усогласеност")}</h4>
                      <Badge className="bg-green-100 text-green-700">{sq(lang, "Në Pajtueshmëri", "Compliant", "Conforme", "Konform", "Усогласено")}</Badge>
                    </div>
                    <div className="space-y-4">
                      {[
                        { check: sq(lang, "Dokumentimi i Regjistrimeve", "Record Documentation", "Documentación de Registros", "Aufzeichnungsdokumentation", "Документирање на записи") as string, status: "complete", description: sq(lang, "Të gjitha faturat e ruajtura siç duhet", "All receipts properly stored", "Todos los recibos almacenados correctamente", "Alle Belege ordnungsgemäß gespeichert", "Сите сметки правилно зачувани") as string },
                        { check: sq(lang, "Klasifikimi i Shpenzimeve", "Expense Classification", "Clasificación de Gastos", "Ausgabenklassifizierung", "Класификација на трошоци") as string, status: "complete", description: sq(lang, "Kodet ATK të aplikuara saktë", "IRS codes correctly applied", "Códigos del IRS aplicados correctamente", "IRS-Codes korrekt angewendet", "Кодовите на UJP правилно применети") as string },
                        { check: sq(lang, "Deklarimet Tremujore", "Quarterly Filings", "Declaraciones Trimestrales", "Vierteljährliche Einreichungen", "Квартални поднесоци") as string, status: "complete", description: sq(lang, "Të gjitha afatet e përmbushura", "All deadlines met", "Todos los plazos cumplidos", "Alle Fristen eingehalten", "Сите рокови исполнети") as string },
                        { check: sq(lang, "Kufijtë e Zbritjeve", "Deduction Limits", "Límites de Deducciones", "Abzugsgrenzen", "Граници на одбитоци") as string, status: "warning", description: sq(lang, "Shqyrtoni kufijtë e shpenzimeve për vakte", "Review meal expense limits", "Revise los límites de gastos de comidas", "Überprüfen Sie die Ausgabenlimits für Mahlzeiten", "Прегледајте ги границите на трошоци за оброци") as string }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                          {item.status === 'complete' ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-orange-500 mt-1" />
                          )}
                          <div className="flex-1">
                            <div className="font-medium">{item.check}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{sq(lang, "Raportet e Disponueshme", "Available Reports", "Informes Disponibles", "Verfügbare Berichte", "Достапни извештаи")}</h4>
                    <div className="space-y-3">
                      {[
                        { name: sq(lang, "Raporti Përmbledhës Tatimor", "Tax Summary Report", "Informe Resumen Fiscal", "Steuerübersichtsbericht", "Извештај за даночен преглед") as string, description: sq(lang, "Përmbledhje vjetore e zbritjeve", "Annual deduction summary", "Resumen anual de deducciones", "Jährliche Abzugsübersicht", "Годишен преглед на одбитоци") as string, format: "PDF" },
                        { name: sq(lang, "Paraparje e Deklaratës", "Schedule C Preview", "Vista Previa del Anexo C", "Anlage C Vorschau", "Преглед на Прилог Ц") as string, description: sq(lang, "Të ardhura/shpenzime biznesi", "Business income/expense", "Ingresos/gastos del negocio", "Geschäftseinnahmen/-ausgaben", "Деловни приходи/расходи") as string, format: "PDF" },
                        { name: sq(lang, "Regjistri i Kilometrazhit", "Mileage Log", "Registro de Kilometraje", "Kilometerprotokoll", "Дневник за километража") as string, description: sq(lang, "Detaje shpenzimesh automjeti", "Vehicle expense details", "Detalles de gastos de vehículo", "Fahrzeugkostendetails", "Детали за трошоци за возило") as string, format: "Excel" },
                        { name: sq(lang, "Arkiva e Faturave", "Receipt Archive", "Archivo de Recibos", "Belegarchiv", "Архива на сметки") as string, description: sq(lang, "Të gjitha dokumentet mbështetëse", "All supporting documents", "Todos los documentos de apoyo", "Alle unterstützenden Dokumente", "Сите придружни документи") as string, format: "ZIP" }
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer">
                          <div>
                            <div className="font-medium">{report.name}</div>
                            <div className="text-sm text-muted-foreground">{report.description}</div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            {report.format}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 fade-in">
            <h2 className="text-4xl font-bold text-foreground">
              {sq(lang, "Gati për të thjeshtuar taksat tuaja?", "Ready to simplify your taxes?", "Listo para simplificar sus impuestos?", "Bereit, Ihre Steuern zu vereinfachen?", "Подготвени да ги поедноставите вашите даноци?")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {sq(lang, "Bashkohuni me mijëra biznese që përdorin menaxhimin tonë tatimor për të qëndruar në pajtueshmëri dhe maksimizuar zbritjet", "Join thousands of businesses using our tax management to stay compliant and maximize deductions", "Únase a miles de empresas que usan nuestra gestión fiscal para mantenerse conformes y maximizar deducciones", "Schließen Sie sich Tausenden von Unternehmen an, die unsere Steuerverwaltung nutzen, um konform zu bleiben und Abzüge zu maximieren", "Придружете се на илјадници бизниси кои го користат нашето даночно управување за да останат усогласени и да ги максимизираат одбитоците")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => { window.location.href = "/subscribe"; window.scrollTo({ top: 0 }); }}
              >
                {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratuita", "Kostenlose Testversion Starten", "Започни бесплатна проба")}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300"
              >
                <Calculator className="h-5 w-5 mr-2" />
                {sq(lang, "Llogaritësi i Taksave", "Tax Calculator", "Calculadora de Impuestos", "Steuerrechner", "Калкулатор за данок")}
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}