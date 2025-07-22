import { useState, useEffect } from 'react';
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
    name: 'Basic',
    monthlyPrice: 2900,
    yearlyPrice: 29000,
    color: 'blue',
    features: {
      users: 3,
      invoicesPerMonth: 50,
      storageGB: 5,
      integrations: 2,
      support: 'Email Support',
      advancedFeatures: ['Basic Reports', 'Invoice Templates']
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 7900,
    yearlyPrice: 79000,
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
    name: 'Business Plus',
    monthlyPrice: 15900,
    yearlyPrice: 159000,
    color: 'orange',
    features: {
      users: 50,
      invoicesPerMonth: 2000,
      storageGB: 200,
      integrations: 50,
      support: '24/7 Phone Support',
      advancedFeatures: ['White Label', 'Advanced Analytics', 'Custom Workflows', 'Dedicated Manager']
    }
  }
];

export default function Calculator() {
  const [, navigate] = useLocation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const { locationData, isLoading: locationLoading } = useLocationDetection();
  
  // Auto-set currency based on detected location
  useEffect(() => {
    if (locationData && !locationLoading) {
      setSelectedCurrency(locationData.currency);
    }
  }, [locationData, locationLoading]);
  const [teamSize, setTeamSize] = useState([5]);
  const [invoicesPerMonth, setInvoicesPerMonth] = useState([100]);
  const [businessType, setBusinessType] = useState('startup');
  const [currentPlan, setCurrentPlan] = useState('none');
  const [recommendedPlan, setRecommendedPlan] = useState<Plan | null>(null);
  const [savings, setSavings] = useState(0);
  
  // Enhanced calculator states
  const [estimatedRevenue, setEstimatedRevenue] = useState([50000]);
  const [growthRate, setGrowthRate] = useState([20]);
  const [currentCosts, setCurrentCosts] = useState([500]);
  const [industryType, setIndustryType] = useState('technology');
  const [complianceNeeds, setComplianceNeeds] = useState('basic');
  const [integrationNeeds, setIntegrationNeeds] = useState([5]);
  const [projectionPeriod, setProjectionPeriod] = useState(12);

  // Enhanced calculation logic with real-time cost estimation
  useEffect(() => {
    const users = teamSize[0];
    const invoices = invoicesPerMonth[0];
    const revenue = estimatedRevenue[0];
    const growth = growthRate[0];
    const integrations = integrationNeeds[0];
    
    let recommended = plans[0]; // Start with basic
    let score = 0;
    
    // Advanced scoring algorithm
    if (users > 25 || invoices > 1000 || revenue > 500000) {
      score += 3;
    } else if (users > 10 || invoices > 500 || revenue > 100000) {
      score += 2;
    } else if (users > 3 || invoices > 50 || revenue > 25000) {
      score += 1;
    }
    
    // Industry and compliance factors
    if (industryType === 'healthcare' || industryType === 'finance') score += 1;
    if (complianceNeeds === 'advanced') score += 1;
    if (businessType === 'enterprise') score += 2;
    if (growth > 30) score += 1;
    if (integrations > 10) score += 1;
    
    // Select plan based on score
    if (score >= 5) {
      recommended = plans[2]; // Business Plus
    } else if (score >= 2) {
      recommended = plans[1]; // Professional
    }
    
    setRecommendedPlan(recommended);
    
    // Enhanced savings calculation
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
    
    // Calculate savings from current costs
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

  // New helper functions for enhanced calculator
  const calculateROI = (plan: Plan) => {
    const annualCost = billingPeriod === 'monthly' ? plan.monthlyPrice * 12 : plan.yearlyPrice;
    const timeSaved = teamSize[0] * 5; // 5 hours per user per month
    const hourlyCost = 50; // Average hourly cost
    const timeSavings = timeSaved * 12 * hourlyCost;
    const efficiency = invoicesPerMonth[0] * 0.1; // 10 cents per invoice in efficiency
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
    return Math.min(100, score + 25); // Base compliance score
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-slow"></div>
      </div>

      {/* Background Elements - Main Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
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
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/attached_assets/3d_1753195741585.png" 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain"
              />
            </Link>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
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
              Pricing <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Calculator</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your perfect plan with our interactive calculator. Get personalized recommendations and see potential savings in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Calculate Your Needs
                </CardTitle>
                <CardDescription>
                  Adjust the settings below to get personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency Selector */}
                {(locationData || locationLoading) && (
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Currency
                    </label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                      {locationLoading ? (
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          Detecting location and currency...
                        </span>
                      ) : (
                        <span className="text-sm text-foreground">
                          Auto-detected: {locationData?.country} • {selectedCurrency}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Billing Period Toggle */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Billing Period</label>
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
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingPeriod('yearly')}
                        className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                          billingPeriod === 'yearly'
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        Yearly
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
                          🎉 Save up to 17% with yearly billing
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Team Size: <span className="font-bold text-primary">{teamSize[0]} users</span>
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
                    Monthly Invoices: <span className="font-bold text-primary">{invoicesPerMonth[0]}</span>
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
                  <label className="text-sm font-medium mb-3 block">Business Type</label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="small-business">Small Business</SelectItem>
                      <SelectItem value="medium-business">Medium Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Estimated Revenue */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Annual Revenue: <span className="font-bold text-primary">${estimatedRevenue[0].toLocaleString()}</span>
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
                    <span>$10K</span>
                    <span>$2M+</span>
                  </div>
                </div>

                {/* Growth Rate */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Expected Growth: <span className="font-bold text-primary">{growthRate[0]}% annually</span>
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
                  <label className="text-sm font-medium mb-3 block">Industry</label>
                  <Select value={industryType} onValueChange={setIndustryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="nonprofit">Non-profit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Integration Needs */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Required Integrations: <span className="font-bold text-primary">{integrationNeeds[0]}</span>
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
                  <label className="text-sm font-medium mb-3 block">Compliance Requirements</label>
                  <Select value={complianceNeeds} onValueChange={setComplianceNeeds}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select compliance level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (GDPR)</SelectItem>
                      <SelectItem value="standard">Standard (SOX, PCI)</SelectItem>
                      <SelectItem value="advanced">Advanced (HIPAA, SOC2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Current Costs */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Current Monthly Costs: <span className="font-bold text-primary">${currentCosts[0]}</span>
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
                    <span>$0</span>
                    <span>$5000+</span>
                  </div>
                </div>

                {/* Current Plan */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Current Solution</label>
                  <Select value={currentPlan} onValueChange={setCurrentPlan}>
                    <SelectTrigger>
                      <SelectValue placeholder="What are you using now?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No current solution</SelectItem>
                      <SelectItem value="basic">BusinessFlow Basic</SelectItem>
                      <SelectItem value="professional">BusinessFlow Professional</SelectItem>
                      <SelectItem value="business">BusinessFlow Business Plus</SelectItem>
                      <SelectItem value="competitor">Competitor Solution</SelectItem>
                      <SelectItem value="manual">Manual/Spreadsheets</SelectItem>
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
                      Recommended Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-primary mb-2">{recommendedPlan.name}</h3>
                      <div className="text-3xl font-bold mb-2">
                        ${formatPrice(billingPeriod === 'monthly' ? recommendedPlan.monthlyPrice : recommendedPlan.yearlyPrice / 12)}
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <Link href="/subscribe">
                      <Button size="lg" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      ROI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Expected ROI:</span>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {calculateROI(recommendedPlan)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Compliance Score:</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={getComplianceScore()} className="w-20" />
                          <span className="text-sm font-semibold">{getComplianceScore()}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">12-month cost:</span>
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
                    Feature Suitability Analysis
                  </CardTitle>
                  <CardDescription>
                    Based on your requirements: {teamSize[0]} users, {invoicesPerMonth[0]} invoices/month, {industryType} industry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">User Capacity</span>
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
                          <span className="text-sm">Invoice Volume</span>
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
                          <span className="text-sm">Integration Needs</span>
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
                          <span className="text-sm">Security & Compliance</span>
                        </div>
                        <Badge variant={getComplianceScore() > 70 ? "default" : "secondary"}>
                          {getComplianceScore() > 70 ? "Excellent" : "Good"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">Growth Scalability</span>
                        </div>
                        <Badge variant={growthRate[0] > 30 ? "default" : "secondary"}>
                          {growthRate[0] > 30 ? "High Growth" : "Stable"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">Enterprise Ready</span>
                        </div>
                        <Badge variant={recommendedPlan.id === 'business' ? "default" : "secondary"}>
                          {recommendedPlan.id === 'business' ? "Yes" : "Partial"}
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
                    Cost Projection Timeline
                  </CardTitle>
                  <CardDescription>
                    Your estimated costs over the next 24 months with {growthRate[0]}% annual growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[6, 12, 18, 24].map(months => (
                      <div key={months} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">{months} months</div>
                        <div className="text-xl font-bold text-primary">
                          ${getProjectedGrowthCost(recommendedPlan, months)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ~{Math.round(teamSize[0] * Math.pow(1 + (growthRate[0]/100/12), months))} users
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
                    Potential Annual Savings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        ${Math.round(savings)}
                      </div>
                      <p className="text-green-700 dark:text-green-300">
                        Annual cost savings
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Time savings (hours):</span>
                        <span className="font-semibold">{teamSize[0] * 5 * 12}h/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Process efficiency:</span>
                        <span className="font-semibold">${Math.round(invoicesPerMonth[0] * 0.1 * 12 * 100)}/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Reduced errors:</span>
                        <span className="font-semibold">${Math.round(estimatedRevenue[0] * 0.002)}/year</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* All Plans Comparison */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Compare All Plans</h3>
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
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    {plan.id === recommendedPlan?.id && (
                      <div className="absolute -top-3 right-4">
                        <Badge className="bg-green-500 text-white">
                          Recommended
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
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-green-600 dark:text-green-400">
                          Save {formatCurrency(
                            convertPrice(
                              formatPrice(getYearlySavings(plan)),
                              'USD',
                              selectedCurrency
                            ),
                            selectedCurrency
                          )} annually
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Users:</span>
                          <span className="font-semibold">{plan.features.users}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Invoices/month:</span>
                          <span className="font-semibold">{plan.features.invoicesPerMonth}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage:</span>
                          <span className="font-semibold">{plan.features.storageGB}GB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Integrations:</span>
                          <span className="font-semibold">{plan.features.integrations}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <Button 
                          className="w-full" 
                          variant={plan.id === recommendedPlan?.id ? "default" : "outline"}
                          onClick={() => navigate(`/subscribe?plan=${plan.id}&billing=${billingPeriod}`)}
                        >
                          {plan.id === 'basic' ? 'Try It Free' : 'Buy Now'}
                        </Button>
                        {plan.id !== 'basic' && (
                          <Button 
                            className="w-full" 
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/subscribe?plan=basic&billing=monthly')}
                          >
                            Try for Free First
                          </Button>
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