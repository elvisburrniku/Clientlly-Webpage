import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Link, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator as CalculatorIcon, 
  TrendingUp, 
  Users, 
  Building, 
  ChartLine, 
  ArrowLeft,
  DollarSign,
  Zap,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Calendar,
  FileText,
  Shield,
  Globe
} from 'lucide-react';
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";

interface PlanFeatures {
  users: number;
  invoicesPerMonth: number;
  storageGB: number;
  integrations: number;
  support: string;
  advancedFeatures: string[];
}

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeatures;
  color: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Starter',
    monthlyPrice: 2000,
    yearlyPrice: 19200,
    color: 'blue',
    features: {
      users: 3,
      invoicesPerMonth: 200,
      storageGB: 5,
      integrations: 2,
      support: 'Email Support',
      advancedFeatures: ['Basic Reports', 'Invoice Templates']
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 3500,
    yearlyPrice: 33600,
    color: 'purple',
    popular: true,
    features: {
      users: 10,
      invoicesPerMonth: 500,
      storageGB: 50,
      integrations: 10,
      support: 'Priority Support',
      advancedFeatures: ['Advanced Reports', 'Custom Branding', 'API Access', 'Multi-Currency']
    }
  },
  {
    id: 'business',
    name: 'Enterprise',
    monthlyPrice: 5000,
    yearlyPrice: 48000,
    color: 'orange',
    features: {
      users: 50,
      invoicesPerMonth: 999999,
      storageGB: 999999,
      integrations: 999999,
      support: '24/7 Phone Support',
      advancedFeatures: ['€2 per additional user after 50', 'White Label', 'Advanced Analytics', 'Custom Workflows', 'Dedicated Manager']
    }
  }
];

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

export default function Calculator() {
  const { currentLanguage: lang } = useLanguage();
  const [, navigate] = useLocation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const { locationData, isLoading: locationLoading } = useLocationDetection();
  
  useEffect(() => {
    setSelectedCurrency('EUR');
  }, []);
  const [teamSize, setTeamSize] = useState([5]);
  const [invoicesPerMonth, setInvoicesPerMonth] = useState([100]);
  const [businessType, setBusinessType] = useState('startup');
  const [currentPlan, setCurrentPlan] = useState('none');
  const [recommendedPlan, setRecommendedPlan] = useState<Plan | null>(null);
  const [savings, setSavings] = useState(0);
  
  const [estimatedRevenue, setEstimatedRevenue] = useState([50000]);
  const [growthRate, setGrowthRate] = useState([20]);
  const [currentCosts, setCurrentCosts] = useState([500]);
  const [industryType, setIndustryType] = useState('technology');
  const [complianceNeeds, setComplianceNeeds] = useState('basic');
  const [integrationNeeds, setIntegrationNeeds] = useState([5]);
  const [projectionPeriod, setProjectionPeriod] = useState(12);

  useEffect(() => {
    const users = teamSize[0];
    const invoices = invoicesPerMonth[0];
    const revenue = estimatedRevenue[0];
    const growth = growthRate[0];
    const integrations = integrationNeeds[0];
    
    let recommended = plans[0];
    let score = 0;
    
    if (users > 25 || invoices > 1000 || revenue > 500000) {
      score += 3;
    } else if (users > 10 || invoices > 500 || revenue > 100000) {
      score += 2;
    } else if (users > 3 || invoices > 50 || revenue > 25000) {
      score += 1;
    }
    
    if (industryType === 'healthcare' || industryType === 'finance') score += 1;
    if (complianceNeeds === 'advanced') score += 1;
    if (businessType === 'enterprise') score += 2;
    if (growth > 30) score += 1;
    if (integrations > 10) score += 1;
    
    if (score >= 5) {
      recommended = plans[2];
    } else if (score >= 2) {
      recommended = plans[1];
    }
    
    setRecommendedPlan(recommended);
    
    if (currentPlan !== 'none') {
      const currentPlanData = plans.find(p => p.id === currentPlan);
      if (currentPlanData) {
        const currentCost = billingPeriod === 'monthly' 
          ? currentPlanData.monthlyPrice * 12 
          : currentPlanData.yearlyPrice;
        const recommendedCost = billingPeriod === 'monthly'
          ? recommended.monthlyPrice * 12
          : recommended.yearlyPrice;
        setSavings(Math.max(0, currentCost - recommendedCost));
      }
    }
    
    if (currentCosts[0] > 0) {
      const annualCurrentCosts = currentCosts[0] * 12;
      const recommendedCost = billingPeriod === 'monthly'
        ? recommended.monthlyPrice * 12
        : recommended.yearlyPrice;
      const costDifference = annualCurrentCosts - (recommendedCost / 100);
      if (costDifference > 0) {
        setSavings(costDifference);
      }
    }
  }, [teamSize, invoicesPerMonth, billingPeriod, currentPlan, estimatedRevenue, growthRate, currentCosts, industryType, complianceNeeds, integrationNeeds, businessType]);

  const formatPrice = (price: number) => {
    return Math.floor(price / 100);
  };

  const getYearlySavings = (plan: Plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  const getSavingsPercentage = (plan: Plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = getYearlySavings(plan);
    return Math.round((savings / monthlyCost) * 100);
  };

  const calculateROI = (plan: Plan) => {
    const annualCost = billingPeriod === 'monthly' ? plan.monthlyPrice * 12 : plan.yearlyPrice;
    const timeSaved = teamSize[0] * 5;
    const hourlyCost = 50;
    const timeSavings = timeSaved * 12 * hourlyCost;
    const efficiency = invoicesPerMonth[0] * 0.1;
    const efficiencySavings = efficiency * 12 * 100;
    const totalSavings = timeSavings + efficiencySavings;
    const roi = ((totalSavings - (annualCost / 100)) / (annualCost / 100)) * 100;
    return Math.max(0, Math.round(roi));
  };

  const getProjectedGrowthCost = (plan: Plan, months: number) => {
    const monthlyGrowth = growthRate[0] / 100 / 12;
    const currentMonthlyUsers = teamSize[0];
    const projectedUsers = currentMonthlyUsers * Math.pow(1 + monthlyGrowth, months);
    const baseCost = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12;
    return Math.round((baseCost / 100) * months + (projectedUsers - currentMonthlyUsers) * 10);
  };

  const getComplianceScore = () => {
    let score = 0;
    if (complianceNeeds === 'advanced') score += 30;
    if (industryType === 'healthcare' || industryType === 'finance') score += 20;
    if (recommendedPlan?.id === 'business') score += 25;
    if (recommendedPlan?.id === 'professional') score += 15;
    return Math.min(100, score + 25);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        

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
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain transition-all duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12 group-hover:brightness-125"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-green-500/0 group-hover:from-blue-500/20 group-hover:to-green-500/20 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {sq(lang, "Kthehu në Fillim", "Back to Home", "Volver al Inicio", "Zurück zur Startseite", "Назад на Почетна")}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CalculatorIcon className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              {sq(lang, "Kalkulatori i ", "Pricing ", "Calculadora de ", "Preis", "Калкулатор за ")}<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{sq(lang, "Çmimeve", "Calculator", "Precios", "rechner", "Цени")}</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sq(lang, "Gjeni planin tuaj perfekt me kalkulatorin tonë interaktiv. Merrni rekomandime të personalizuara dhe shikoni kursimet e mundshme në kohë reale.", "Find your perfect plan with our interactive calculator. Get personalized recommendations and see potential savings in real-time.", "Encuentre su plan perfecto con nuestra calculadora interactiva. Obtenga recomendaciones personalizadas y vea ahorros potenciales en tiempo real.", "Finden Sie Ihren perfekten Plan mit unserem interaktiven Rechner. Erhalten Sie personalisierte Empfehlungen und sehen Sie potenzielle Einsparungen in Echtzeit.", "Најдете го вашиот совршен план со нашиот интерактивен калкулатор. Добијте персонализирани препораки и видете потенцијални заштеди во реално време.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  {sq(lang, "Llogaritni Nevojat Tuaja", "Calculate Your Needs", "Calcule sus Necesidades", "Berechnen Sie Ihren Bedarf", "Пресметајте ги Вашите Потреби")}
                </CardTitle>
                <CardDescription>
                  {sq(lang, "Rregulloni cilësimet më poshtë për të marrë rekomandime të personalizuara", "Adjust the settings below to get personalized recommendations", "Ajuste la configuración a continuación para obtener recomendaciones personalizadas", "Passen Sie die Einstellungen unten an, um personalisierte Empfehlungen zu erhalten", "Прилагодете ги поставките подолу за да добиете персонализирани препораки")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency Selector */}
                {(locationData || locationLoading) && (
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      {sq(lang, "Monedha", "Currency", "Moneda", "Währung", "Валута")}
                    </label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                      {locationLoading ? (
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          {sq(lang, "Duke zbuluar vendndodhjen dhe monedhën...", "Detecting location and currency...", "Detectando ubicación y moneda...", "Standort und Währung werden erkannt...", "Детектирање на локација и валута...")}
                        </span>
                      ) : (
                        <span className="text-sm text-foreground">
                          {sq(lang, "Zbuluar automatikisht:", "Auto-detected:", "Detectado automáticamente:", "Automatisch erkannt:", "Автоматски детектирано:")} {locationData?.country} • {selectedCurrency}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Billing Period Toggle */}
                <div>
                  <label className="text-sm font-medium mb-3 block">{sq(lang, "Periudha e Faturimit", "Billing Period", "Período de Facturación", "Abrechnungszeitraum", "Период на Фактурирање")}</label>
                  <div className="flex flex-col items-center">
                    <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setBillingPeriod('monthly')}
                        className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                          billingPeriod === 'monthly'
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        {sq(lang, "Mujor", "Monthly", "Mensual", "Monatlich", "Месечно")}
                      </button>
                      <button
                        onClick={() => setBillingPeriod('yearly')}
                        className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                          billingPeriod === 'yearly'
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        {sq(lang, "Vjetor", "Yearly", "Anual", "Jährlich", "Годишно")}
                      </button>
                      <div
                        className={`absolute top-2 bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                          billingPeriod === 'monthly'
                            ? 'left-2 w-[calc(50%-4px)]'
                            : 'right-2 w-[calc(50%-4px)]'
                        }`}
                      />
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="mt-3 opacity-100 transform scale-100">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                          🎉 {sq(lang, "Kurseni deri në 17% me faturimin vjetor", "Save up to 17% with yearly billing", "Ahorre hasta un 17% con facturación anual", "Sparen Sie bis zu 17% bei jährlicher Abrechnung", "Заштедете до 17% со годишно фактурирање")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Madhësia e Ekipit:", "Team Size:", "Tamaño del Equipo:", "Teamgröße:", "Големина на Тимот:")} <span className="font-bold text-primary">{teamSize[0]} {sq(lang, "përdorues", "users", "usuarios", "Benutzer", "корисници")}</span>
                  </label>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span>
                    <span>100+</span>
                  </div>
                </div>

                {/* Invoices per Month */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Fatura Mujore:", "Monthly Invoices:", "Facturas Mensuales:", "Monatliche Rechnungen:", "Месечни Фактури:")} <span className="font-bold text-primary">{invoicesPerMonth[0]}</span>
                  </label>
                  <Slider
                    value={invoicesPerMonth}
                    onValueChange={setInvoicesPerMonth}
                    max={5000}
                    min={1}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span>
                    <span>5000+</span>
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label className="text-sm font-medium mb-3 block">{sq(lang, "Lloji i Biznesit", "Business Type", "Tipo de Negocio", "Unternehmenstyp", "Тип на Бизнис")}</label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger>
                      <SelectValue placeholder={sq(lang, "Zgjidhni llojin e biznesit", "Select business type", "Seleccione tipo de negocio", "Unternehmenstyp auswählen", "Изберете тип на бизнис") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">{sq(lang, "Startup", "Startup", "Startup", "Startup", "Стартап")}</SelectItem>
                      <SelectItem value="small-business">{sq(lang, "Biznes i Vogël", "Small Business", "Pequeña Empresa", "Kleines Unternehmen", "Мал Бизнис")}</SelectItem>
                      <SelectItem value="medium-business">{sq(lang, "Biznes i Mesëm", "Medium Business", "Mediana Empresa", "Mittleres Unternehmen", "Среден Бизнис")}</SelectItem>
                      <SelectItem value="enterprise">{sq(lang, "Ndërmarrje", "Enterprise", "Empresa Grande", "Großunternehmen", "Претпријатие")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Estimated Revenue */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Të Ardhurat Vjetore:", "Annual Revenue:", "Ingresos Anuales:", "Jahresumsatz:", "Годишен Приход:")} <span className="font-bold text-primary">${estimatedRevenue[0].toLocaleString()}</span>
                  </label>
                  <Slider
                    value={estimatedRevenue}
                    onValueChange={setEstimatedRevenue}
                    max={2000000}
                    min={10000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>€10K</span>
                    <span>€2M+</span>
                  </div>
                </div>

                {/* Growth Rate */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Rritja e Pritur:", "Expected Growth:", "Crecimiento Esperado:", "Erwartetes Wachstum:", "Очекуван Раст:")} <span className="font-bold text-primary">{growthRate[0]}% {sq(lang, "vjetor", "annually", "anual", "jährlich", "годишно")}</span>
                  </label>
                  <Slider
                    value={growthRate}
                    onValueChange={setGrowthRate}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>100%+</span>
                  </div>
                </div>

                {/* Industry Type */}
                <div>
                  <label className="text-sm font-medium mb-3 block">{sq(lang, "Industria", "Industry", "Industria", "Branche", "Индустрија")}</label>
                  <Select value={industryType} onValueChange={setIndustryType}>
                    <SelectTrigger>
                      <SelectValue placeholder={sq(lang, "Zgjidhni industrinë tuaj", "Select your industry", "Seleccione su industria", "Wählen Sie Ihre Branche", "Изберете ја вашата индустрија") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">{sq(lang, "Teknologji", "Technology", "Tecnología", "Technologie", "Технологија")}</SelectItem>
                      <SelectItem value="healthcare">{sq(lang, "Shëndetësi", "Healthcare", "Salud", "Gesundheitswesen", "Здравство")}</SelectItem>
                      <SelectItem value="finance">{sq(lang, "Financë", "Finance", "Finanzas", "Finanzen", "Финансии")}</SelectItem>
                      <SelectItem value="retail">{sq(lang, "Shitje me Pakicë", "Retail", "Comercio Minorista", "Einzelhandel", "Малопродажба")}</SelectItem>
                      <SelectItem value="manufacturing">{sq(lang, "Prodhim", "Manufacturing", "Manufactura", "Fertigung", "Производство")}</SelectItem>
                      <SelectItem value="consulting">{sq(lang, "Konsulencë", "Consulting", "Consultoría", "Beratung", "Консалтинг")}</SelectItem>
                      <SelectItem value="education">{sq(lang, "Arsim", "Education", "Educación", "Bildung", "Образование")}</SelectItem>
                      <SelectItem value="nonprofit">{sq(lang, "Jofitimprurëse", "Non-profit", "Sin Fines de Lucro", "Gemeinnützig", "Непрофитна")}</SelectItem>
                      <SelectItem value="other">{sq(lang, "Tjetër", "Other", "Otro", "Andere", "Друго")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Integration Needs */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Integrime të Nevojshme:", "Required Integrations:", "Integraciones Requeridas:", "Benötigte Integrationen:", "Потребни Интеграции:")} <span className="font-bold text-primary">{integrationNeeds[0]}</span>
                  </label>
                  <Slider
                    value={integrationNeeds}
                    onValueChange={setIntegrationNeeds}
                    max={25}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0</span>
                    <span>25+</span>
                  </div>
                </div>

                {/* Compliance Needs */}
                <div>
                  <label className="text-sm font-medium mb-3 block">{sq(lang, "Kërkesat e Përputhshmërisë", "Compliance Requirements", "Requisitos de Cumplimiento", "Compliance-Anforderungen", "Барања за Усогласеност")}</label>
                  <Select value={complianceNeeds} onValueChange={setComplianceNeeds}>
                    <SelectTrigger>
                      <SelectValue placeholder={sq(lang, "Zgjidhni nivelin e përputhshmërisë", "Select compliance level", "Seleccione nivel de cumplimiento", "Compliance-Level auswählen", "Изберете ниво на усогласеност") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">{sq(lang, "Bazë (GDPR)", "Basic (GDPR)", "Básico (GDPR)", "Basis (DSGVO)", "Основно (GDPR)")}</SelectItem>
                      <SelectItem value="standard">{sq(lang, "Standard (SOX, PCI)", "Standard (SOX, PCI)", "Estándar (SOX, PCI)", "Standard (SOX, PCI)", "Стандардно (SOX, PCI)")}</SelectItem>
                      <SelectItem value="advanced">{sq(lang, "I Avancuar (HIPAA, SOC2)", "Advanced (HIPAA, SOC2)", "Avanzado (HIPAA, SOC2)", "Erweitert (HIPAA, SOC2)", "Напредно (HIPAA, SOC2)")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Current Costs */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {sq(lang, "Kostot Aktuale Mujore:", "Current Monthly Costs:", "Costos Mensuales Actuales:", "Aktuelle Monatliche Kosten:", "Тековни Месечни Трошоци:")} <span className="font-bold text-primary">${currentCosts[0]}</span>
                  </label>
                  <Slider
                    value={currentCosts}
                    onValueChange={setCurrentCosts}
                    max={5000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>€0</span>
                    <span>€5000+</span>
                  </div>
                </div>

                {/* Current Plan */}
                <div>
                  <label className="text-sm font-medium mb-3 block">{sq(lang, "Zgjidhja Aktuale", "Current Solution", "Solución Actual", "Aktuelle Lösung", "Тековно Решение")}</label>
                  <Select value={currentPlan} onValueChange={setCurrentPlan}>
                    <SelectTrigger>
                      <SelectValue placeholder={sq(lang, "Çfarë po përdorni tani?", "What are you using now?", "Qué está usando ahora?", "Was verwenden Sie gerade?", "Што користите сега?") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">{sq(lang, "Asnjë zgjidhje aktuale", "No current solution", "Sin solución actual", "Keine aktuelle Lösung", "Нема тековно решение")}</SelectItem>
                      <SelectItem value="basic">BusinessFlow Basic</SelectItem>
                      <SelectItem value="professional">BusinessFlow Professional</SelectItem>
                      <SelectItem value="business">BusinessFlow Business Plus</SelectItem>
                      <SelectItem value="competitor">{sq(lang, "Zgjidhje Konkurrente", "Competitor Solution", "Solución de la Competencia", "Wettbewerberlösung", "Конкурентско Решение")}</SelectItem>
                      <SelectItem value="manual">{sq(lang, "Manual/Spreadsheets", "Manual/Spreadsheets", "Manual/Hojas de Cálculo", "Manuell/Tabellenkalkulationen", "Рачно/Табеларни Пресметки")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Real-time Cost Analysis */}
            {recommendedPlan && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      {sq(lang, "Plani i Rekomanduar", "Recommended Plan", "Plan Recomendado", "Empfohlener Plan", "Препорачан План")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-primary mb-2">{recommendedPlan.name}</h3>
                      <div className="text-3xl font-bold mb-2">
                        ${formatPrice(billingPeriod === 'monthly' ? recommendedPlan.monthlyPrice : recommendedPlan.yearlyPrice / 12)}
                        <span className="text-sm text-muted-foreground">/{sq(lang, "muaj", "month", "mes", "Monat", "месец")}</span>
                      </div>
                    </div>
                    <Link href="/subscribe">
                      <Button size="lg" className="w-full">
                        {sq(lang, "Fillo Tani", "Get Started", "Comenzar", "Jetzt Starten", "Започни Сега")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      {sq(lang, "Analiza e ROI", "ROI Analysis", "Análisis de ROI", "ROI-Analyse", "Анализа на ROI")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{sq(lang, "ROI e Pritur:", "Expected ROI:", "ROI Esperado:", "Erwarteter ROI:", "Очекуван ROI:")}</span>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {calculateROI(recommendedPlan)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{sq(lang, "Rezultati i Përputhshmërisë:", "Compliance Score:", "Puntuación de Cumplimiento:", "Compliance-Score:", "Оценка за Усогласеност:")}</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={getComplianceScore()} className="w-20" />
                          <span className="text-sm font-semibold">{getComplianceScore()}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{sq(lang, "Kosto 12-mujore:", "12-month cost:", "Costo de 12 meses:", "12-Monats-Kosten:", "12-месечен трошок:")}</span>
                        <span className="font-semibold">${getProjectedGrowthCost(recommendedPlan, 12)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Feature Analysis */}
            {recommendedPlan && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    {sq(lang, "Analiza e Përshtatshmerisë së Veçorive", "Feature Suitability Analysis", "Análisis de Idoneidad de Características", "Funktionseignungsanalyse", "Анализа на Соодветност на Карактеристики")}
                  </CardTitle>
                  <CardDescription>
                    {sq(lang, `Bazuar në kërkesat tuaja: ${teamSize[0]} përdorues, ${invoicesPerMonth[0]} fatura/muaj, industria ${industryType}`, `Based on your requirements: ${teamSize[0]} users, ${invoicesPerMonth[0]} invoices/month, ${industryType} industry`, `Basado en sus requisitos: ${teamSize[0]} usuarios, ${invoicesPerMonth[0]} facturas/mes, industria ${industryType}`, `Basierend auf Ihren Anforderungen: ${teamSize[0]} Benutzer, ${invoicesPerMonth[0]} Rechnungen/Monat, ${industryType} Branche`, `Врз основа на вашите барања: ${teamSize[0]} корисници, ${invoicesPerMonth[0]} фактури/месец, ${industryType} индустрија`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Kapaciteti i Përdoruesve", "User Capacity", "Capacidad de Usuarios", "Benutzerkapazität", "Капацитет на Корисници")}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={(teamSize[0] / recommendedPlan.features.users) * 100} 
                            className="w-24" 
                          />
                          <span className="text-xs">{teamSize[0]}/{recommendedPlan.features.users}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Vëllimi i Faturave", "Invoice Volume", "Volumen de Facturas", "Rechnungsvolumen", "Обем на Фактури")}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={(invoicesPerMonth[0] / recommendedPlan.features.invoicesPerMonth) * 100} 
                            className="w-24" 
                          />
                          <span className="text-xs">{invoicesPerMonth[0]}/{recommendedPlan.features.invoicesPerMonth}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Nevojat për Integrim", "Integration Needs", "Necesidades de Integración", "Integrationsbedarf", "Потреби за Интеграција")}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={(integrationNeeds[0] / recommendedPlan.features.integrations) * 100} 
                            className="w-24" 
                          />
                          <span className="text-xs">{integrationNeeds[0]}/{recommendedPlan.features.integrations}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Siguria & Përputhshmëria", "Security & Compliance", "Seguridad y Cumplimiento", "Sicherheit & Compliance", "Безбедност и Усогласеност")}</span>
                        </div>
                        <Badge variant={getComplianceScore() > 70 ? "default" : "secondary"}>
                          {getComplianceScore() > 70 ? sq(lang, "Shkëlqyeshëm", "Excellent", "Excelente", "Ausgezeichnet", "Одлично") : sq(lang, "Mirë", "Good", "Bueno", "Gut", "Добро")}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Shkallëzimi i Rritjes", "Growth Scalability", "Escalabilidad de Crecimiento", "Wachstumsskalierbarkeit", "Скалабилност на Раст")}</span>
                        </div>
                        <Badge variant={growthRate[0] > 30 ? "default" : "secondary"}>
                          {growthRate[0] > 30 ? sq(lang, "Rritje e Lartë", "High Growth", "Alto Crecimiento", "Hohes Wachstum", "Висок Раст") : sq(lang, "Stabil", "Stable", "Estable", "Stabil", "Стабилен")}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{sq(lang, "Gati për Ndërmarrje", "Enterprise Ready", "Listo para Empresa", "Enterprise-fähig", "Подготвено за Претпријатие")}</span>
                        </div>
                        <Badge variant={recommendedPlan.id === 'business' ? "default" : "secondary"}>
                          {recommendedPlan.id === 'business' ? sq(lang, "Po", "Yes", "Sí", "Ja", "Да") : sq(lang, "Pjesërisht", "Partial", "Parcial", "Teilweise", "Делумно")}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cost Projection Timeline */}
            {recommendedPlan && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    {sq(lang, "Parashikimi i Kostove në Kohë", "Cost Projection Timeline", "Línea de Tiempo de Proyección de Costos", "Kostenprognose-Zeitachse", "Временска Линија за Проекција на Трошоци")}
                  </CardTitle>
                  <CardDescription>
                    {sq(lang, `Kostot tuaja të vlerësuara gjatë 24 muajve të ardhshëm me ${growthRate[0]}% rritje vjetore`, `Your estimated costs over the next 24 months with ${growthRate[0]}% annual growth`, `Sus costos estimados durante los próximos 24 meses con ${growthRate[0]}% de crecimiento anual`, `Ihre geschätzten Kosten über die nächsten 24 Monate mit ${growthRate[0]}% jährlichem Wachstum`, `Вашите проценети трошоци во следните 24 месеци со ${growthRate[0]}% годишен раст`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[6, 12, 18, 24].map(months => (
                      <div key={months} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">{months} {sq(lang, "muaj", "months", "meses", "Monate", "месеци")}</div>
                        <div className="text-xl font-bold text-primary">
                          ${getProjectedGrowthCost(recommendedPlan, months)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ~{Math.round(teamSize[0] * Math.pow(1 + (growthRate[0]/100/12), months))} {sq(lang, "përdorues", "users", "usuarios", "Benutzer", "корисници")}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Savings Projection */}
            {savings > 0 && (
              <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    {sq(lang, "Kursimet e Mundshme Vjetore", "Potential Annual Savings", "Ahorros Anuales Potenciales", "Potenzielle Jährliche Einsparungen", "Потенцијални Годишни Заштеди")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        ${Math.round(savings)}
                      </div>
                      <p className="text-green-700 dark:text-green-300">
                        {sq(lang, "Kursime vjetore në kosto", "Annual cost savings", "Ahorro anual de costos", "Jährliche Kosteneinsparungen", "Годишни заштеди на трошоци")}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{sq(lang, "Kursime kohe (orë):", "Time savings (hours):", "Ahorro de tiempo (horas):", "Zeitersparnis (Stunden):", "Заштеда на време (часови):")}</span>
                        <span className="font-semibold">{teamSize[0] * 5 * 12}h/{sq(lang, "vit", "year", "año", "Jahr", "год")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{sq(lang, "Efikasiteti i procesit:", "Process efficiency:", "Eficiencia del proceso:", "Prozesseffizienz:", "Ефикасност на процес:")}</span>
                        <span className="font-semibold">${Math.round(invoicesPerMonth[0] * 0.1 * 12 * 100)}/{sq(lang, "vit", "year", "año", "Jahr", "год")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{sq(lang, "Gabime të reduktuara:", "Reduced errors:", "Errores reducidos:", "Reduzierte Fehler:", "Намалени грешки:")}</span>
                        <span className="font-semibold">${Math.round(estimatedRevenue[0] * 0.002)}/{sq(lang, "vit", "year", "año", "Jahr", "год")}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* All Plans Comparison */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{sq(lang, "Krahasoni të Gjitha Planet", "Compare All Plans", "Comparar Todos los Planes", "Alle Pläne Vergleichen", "Споредете ги Сите Планови")}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`relative transition-all duration-300 hover:shadow-lg ${
                      plan.id === recommendedPlan?.id
                        ? 'ring-2 ring-primary shadow-xl'
                        : 'hover:shadow-md'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          {sq(lang, "Më Popullorja", "Most Popular", "Más Popular", "Beliebteste", "Најпопуларен")}
                        </Badge>
                      </div>
                    )}
                    {plan.id === recommendedPlan?.id && (
                      <div className="absolute -top-3 right-4">
                        <Badge className="bg-green-500 text-white">
                          {sq(lang, "I Rekomanduar", "Recommended", "Recomendado", "Empfohlen", "Препорачано")}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(
                          convertPrice(
                            formatPrice(billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12),
                            'USD',
                            selectedCurrency
                          ),
                          selectedCurrency
                        )}
                        <span className="text-sm text-muted-foreground font-normal">/{sq(lang, "muaj", "month", "mes", "Monat", "месец")}</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {sq(lang, "Kurseni", "Save", "Ahorre", "Sparen Sie", "Заштедете")} {formatCurrency(
                            convertPrice(
                              formatPrice(getYearlySavings(plan)),
                              'USD',
                              selectedCurrency
                            ),
                            selectedCurrency
                          )} {sq(lang, "vjetore", "annually", "anualmente", "jährlich", "годишно")}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{sq(lang, "Përdorues:", "Users:", "Usuarios:", "Benutzer:", "Корисници:")}</span>
                          <span className="font-semibold">{plan.features.users}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{sq(lang, "Fatura/muaj:", "Invoices/month:", "Facturas/mes:", "Rechnungen/Monat:", "Фактури/месец:")}</span>
                          <span className="font-semibold">{plan.features.invoicesPerMonth}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{sq(lang, "Hapësirë:", "Storage:", "Almacenamiento:", "Speicher:", "Складирање:")}</span>
                          <span className="font-semibold">{plan.features.storageGB}GB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{sq(lang, "Integrime:", "Integrations:", "Integraciones:", "Integrationen:", "Интеграции:")}</span>
                          <span className="font-semibold">{plan.features.integrations}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <Button 
                          className="w-full" 
                          variant={plan.id === recommendedPlan?.id ? "default" : "outline"}
                          onClick={() => navigate(`/subscribe?plan=${plan.id}&billing=${billingPeriod}`)}
                        >
                          {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}
                        </Button>
                        {plan.id === 'basic' && (
                          <Button 
                            className="w-full" 
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/subscribe?plan=${plan.id}&billing=${billingPeriod}`)}
                          >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
                        )}
                        {plan.id !== 'basic' && (
                          <Button 
                            className="w-full" 
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/subscribe?plan=basic&billing=monthly')}
                          >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}