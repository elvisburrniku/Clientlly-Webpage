import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Target
} from 'lucide-react';

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
  const [teamSize, setTeamSize] = useState([5]);
  const [invoicesPerMonth, setInvoicesPerMonth] = useState([100]);
  const [businessType, setBusinessType] = useState('startup');
  const [currentPlan, setCurrentPlan] = useState('none');
  const [recommendedPlan, setRecommendedPlan] = useState<Plan | null>(null);
  const [savings, setSavings] = useState(0);

  // Calculate recommended plan based on user inputs
  useEffect(() => {
    const users = teamSize[0];
    const invoices = invoicesPerMonth[0];
    
    let recommended = plans[0]; // Start with basic
    
    if (users > 10 || invoices > 500) {
      recommended = plans[2]; // Business Plus
    } else if (users > 3 || invoices > 50) {
      recommended = plans[1]; // Professional
    }
    
    setRecommendedPlan(recommended);
    
    // Calculate potential savings
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
  }, [teamSize, invoicesPerMonth, billingPeriod, currentPlan]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>
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
            {/* Recommendation Card */}
            {recommendedPlan && (
              <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center text-2xl">
                        <Target className="h-6 w-6 mr-2 text-primary" />
                        Recommended for You
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Based on your team size of {teamSize[0]} users and {invoicesPerMonth[0]} monthly invoices
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                      Best Match
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{recommendedPlan.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold">
                          ${formatPrice(billingPeriod === 'monthly' ? recommendedPlan.monthlyPrice : recommendedPlan.yearlyPrice / 12)}
                        </span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                          <div className="flex items-center text-green-700 dark:text-green-400">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            <span className="font-semibold">
                              Save ${formatPrice(getYearlySavings(recommendedPlan))} annually ({getSavingsPercentage(recommendedPlan)}% off)
                            </span>
                          </div>
                        </div>
                      )}
                      <Link href="/subscribe" className="w-full">
                        <Button size="lg" className="w-full">
                          Get Started with {recommendedPlan.name}
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {recommendedPlan.features.users} Users
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 text-primary" />
                          {recommendedPlan.features.invoicesPerMonth} Invoices/mo
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-primary" />
                          {recommendedPlan.features.storageGB}GB Storage
                        </div>
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-primary" />
                          {recommendedPlan.features.integrations} Integrations
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className="text-sm font-medium">Support: </span>
                        <span className="text-sm text-muted-foreground">{recommendedPlan.features.support}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Savings Projection */}
            {savings > 0 && (
              <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Potential Savings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      ${formatPrice(savings)}
                    </div>
                    <p className="text-green-700 dark:text-green-300">
                      You could save this much annually by switching to our recommended plan
                    </p>
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
                        ${formatPrice(billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12)}
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-green-600 dark:text-green-400">
                          Save ${formatPrice(getYearlySavings(plan))} annually
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
                      
                      <Button 
                        className="w-full mt-4" 
                        variant={plan.id === recommendedPlan?.id ? "default" : "outline"}
                        onClick={() => navigate("/subscribe")}
                      >
                        Choose {plan.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}