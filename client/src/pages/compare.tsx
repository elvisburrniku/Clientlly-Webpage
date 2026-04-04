import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowLeft, ChartLine } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface PlanFeatures {
  [category: string]: {
    [feature: string]: string;
  };
}

interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  detailedFeatures: PlanFeatures;
}

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element { switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; } }

export default function Compare() {
  const [location, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("invoicing");
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const { currentLanguage: lang } = useLanguage();

  const featureCategories: Record<string, string | JSX.Element> = {
    invoicing: sq(lang, "Faturimi & Faturimi", "Invoicing & Billing", "Facturación y Cobros", "Rechnungen & Abrechnung", "Фактурирање и наплата"),
    expenses: sq(lang, "Menaxhimi i Shpenzimeve", "Expense Management", "Gestión de Gastos", "Ausgabenverwaltung", "Управување со трошоци"),
    crm: sq(lang, "CRM & Shitjet", "CRM & Sales", "CRM y Ventas", "CRM & Vertrieb", "CRM и продажби"),
    hr: sq(lang, "Menaxhimi i BNJ", "HR Management", "Gestión de RRHH", "Personalverwaltung", "Управување со ЧР"),
    contracts: sq(lang, "Menaxhimi i Kontratave", "Contract Management", "Gestión de Contratos", "Vertragsverwaltung", "Управување со договори"),
    analytics: sq(lang, "Analitika & Raportimi", "Analytics & Reporting", "Análisis e Informes", "Analysen & Berichte", "Аналитика и извештаи"),
    support: sq(lang, "Mbështetja & Shërbimi", "Support & Service", "Soporte y Servicio", "Support & Service", "Поддршка и сервис")
  };

  const { data: plans = [], isLoading } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const getFeatureValue = (plan: SubscriptionPlan, category: string, feature: string) => {
    return plan.detailedFeatures?.[category]?.[feature] || "❌";
  };

  const isFeatureAvailable = (value: string) => {
    return value !== "❌" && value !== "❌";
  };

  const getAllFeaturesForCategory = (category: string) => {
    const allFeatures = new Set<string>();
    plans.forEach(plan => {
      if (plan.detailedFeatures?.[category]) {
        Object.keys(plan.detailedFeatures[category]).forEach(feature => {
          allFeatures.add(feature);
        });
      }
    });
    return Array.from(allFeatures);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white border-b border-border">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {sq(lang, "Kthehu në Ballë", "Back to Home", "Volver al Inicio", "Zurück zur Startseite", "Назад на почетна")}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {sq(lang, "Krahaso ", "Compare ", "Comparar ", "Vergleiche ", "Спореди ")}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {sq(lang, "Planet & Veçoritë", "Plans & Features", "Planes y Funciones", "Pläne & Funktionen", "Планови и функции")}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {sq(lang,
              "Krahasim i detajuar i veçorive për t'ju ndihmuar të zgjidhni planin perfekt për biznesin tuaj.",
              "Detailed feature comparison to help you choose the perfect plan for your business needs.",
              "Comparación detallada de funciones para ayudarte a elegir el plan perfecto para tu negocio.",
              "Detaillierter Funktionsvergleich, um Ihnen bei der Auswahl des perfekten Plans zu helfen.",
              "Детално споредување на функции за да ви помогне да го изберете совршениот план."
            )}
          </p>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {sq(lang, "Mujore", "Monthly", "Mensual", "Monatlich", "Месечно")}
              </button>
              
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'yearly'
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {sq(lang, "Vjetore", "Yearly", "Anual", "Jährlich", "Годишно")}
              </button>
              
              <div
                className={`absolute top-2 bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                  billingPeriod === 'monthly'
                    ? 'left-2 w-[calc(50%-4px)]'
                    : 'right-2 w-[calc(50%-4px)]'
                }`}
              />
            </div>
            
            <div className={`mt-3 transition-all duration-300 ${
              billingPeriod === 'yearly' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
            }`}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                {sq(lang, "🎉 Kurseni 17% me faturimin vjetor", "🎉 Save 17% with yearly billing", "🎉 Ahorra 17% con facturación anual", "🎉 Sparen Sie 17% mit jährlicher Abrechnung", "🎉 Заштедете 17% со годишно плаќање")}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                index === 1 
                  ? 'border-2 border-primary shadow-xl bg-gradient-to-b from-primary/5 to-secondary/5' 
                  : 'border border-border hover:border-primary/30'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm shadow-lg">
                    {sq(lang, "⭐ Më Popullorja", "⭐ Most Popular", "⭐ Más Popular", "⭐ Am Beliebtesten", "⭐ Најпопуларно")}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  ${Math.floor((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100)}
                  <span className="text-lg text-muted-foreground font-normal">/{sq(lang, "muaj", "month", "mes", "Monat", "месец") as string}</span>
                </div>
                {billingPeriod === 'yearly' && (
                  <div className="text-sm text-muted-foreground mt-2">
                    {sq(lang,
                      `Faturohet $${Math.floor(plan.yearlyPrice / 100)} vjetore`,
                      `Billed $${Math.floor(plan.yearlyPrice / 100)} yearly`,
                      `Facturado $${Math.floor(plan.yearlyPrice / 100)} anualmente`,
                      `$${Math.floor(plan.yearlyPrice / 100)} jährlich abgerechnet`,
                      `Наплата $${Math.floor(plan.yearlyPrice / 100)} годишно`
                    )}
                  </div>
                )}
                <p className="text-muted-foreground mt-3 px-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0 pb-8">
                <div className="space-y-3 mb-6">
                  {plan.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 3 && (
                    <div className="text-sm text-primary font-medium">
                      +{plan.features.length - 3} {sq(lang, "veçori të tjera", "more features", "más funciones", "weitere Funktionen", "повеќе функции")}
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg' 
                      : 'hover:bg-primary hover:text-white'
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                  onClick={() => navigate(`/subscribe?plan=${plan.id}&billing=${billingPeriod}`)}
                >
                  {sq(lang, `Zgjidh ${plan.name}`, `Choose ${plan.name}`, `Elegir ${plan.name}`, `${plan.name} wählen`, `Избери ${plan.name}`)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <div className="bg-muted/50 p-2 rounded-xl">
            <div className="flex flex-wrap gap-1 justify-center">
              {Object.entries(featureCategories).map(([key, label]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(key)}
                  className={`transition-all duration-200 ${
                    selectedCategory === key 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                      : 'hover:bg-white dark:hover:bg-slate-800 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Card className="overflow-hidden shadow-lg border-2 border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
            <CardTitle className="text-2xl text-center">
              {featureCategories[selectedCategory]}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700">
                    <th className="text-left p-6 font-bold text-lg min-w-[300px] border-r border-border/30">
                      {sq(lang, "Veçoria", "Feature", "Función", "Funktion", "Функција")}
                    </th>
                    {plans.map((plan, index) => (
                      <th key={plan.id} className={`text-center p-6 font-bold min-w-[180px] border-r border-border/30 ${
                        index === 1 ? 'bg-gradient-to-b from-primary/20 to-primary/10 text-primary' : ''
                      }`}>
                        <div className="text-lg">{plan.name}</div>
                        <div className="text-2xl font-bold mt-1">
                          ${Math.floor((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100)}
                        </div>
                        <div className="text-sm font-normal text-muted-foreground">
                          {sq(lang, "në muaj", "per month", "por mes", "pro Monat", "месечно")}
                        </div>
                        {index === 1 && (
                          <Badge className="mt-2 bg-gradient-to-r from-primary to-secondary text-white text-xs">
                            {sq(lang, "Më Popullorja", "Most Popular", "Más Popular", "Am Beliebtesten", "Најпопуларно")}
                          </Badge>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getAllFeaturesForCategory(selectedCategory).map((feature, featureIndex) => (
                    <tr key={feature} className={`border-b border-border/30 hover:bg-muted/30 transition-colors ${
                      featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                    }`}>
                      <td className="p-4 font-medium text-foreground border-r border-border/30 pl-6">
                        {feature}
                      </td>
                      {plans.map((plan, planIndex) => {
                        const value = getFeatureValue(plan, selectedCategory, feature);
                        const isAvailable = isFeatureAvailable(value);
                        
                        return (
                          <td key={plan.id} className={`p-4 text-center border-r border-border/30 ${
                            planIndex === 1 ? 'bg-primary/5' : ''
                          }`}>
                            {value === "✓" ? (
                              <div className="flex justify-center">
                                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                              </div>
                            ) : value === "❌" ? (
                              <div className="flex justify-center">
                                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                                  <X className="h-5 w-5 text-red-500 dark:text-red-400" />
                                </div>
                              </div>
                            ) : (
                              <span className={`font-medium px-3 py-1 rounded-full ${
                                isAvailable 
                                  ? 'text-foreground bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                                  : 'text-muted-foreground bg-gray-100 dark:bg-gray-800'
                              }`}>
                                {value}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {sq(lang, "Gati për të filluar?", "Ready to get started?", "¿Listo para comenzar?", "Bereit loszulegen?", "Подготвени да започнете?")}
          </h3>
          <p className="text-muted-foreground mb-6">
            {sq(lang,
              "Zgjidhni planin që i përshtatet biznesit tuaj dhe filloni të optimizoni operacionet tuaja sot.",
              "Choose the plan that fits your business and start streamlining your operations today.",
              "Elige el plan que se adapte a tu negocio y optimiza tus operaciones hoy.",
              "Wählen Sie den Plan, der zu Ihrem Unternehmen passt, und optimieren Sie Ihre Abläufe noch heute.",
              "Изберете го планот што одговара на вашиот бизнис и започнете да ги оптимизирате операциите денес."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/subscribe?plan=professional")}
              className="bg-gradient-to-r from-primary to-secondary"
            >
              {sq(lang, "Fillo me Professional", "Start with Professional", "Comenzar con Professional", "Mit Professional starten", "Започни со Professional")}
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/#contact")}
            >
              {sq(lang, "Kontakto Shitjet", "Contact Sales", "Contactar Ventas", "Vertrieb kontaktieren", "Контактирај продажби")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}