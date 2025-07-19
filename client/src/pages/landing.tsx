import { useState } from "react";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Receipt, 
  Users, 
  Bus, 
  File, 
  Handshake,
  Check,
  ChartLine,
  Star,
  Shield,
  Globe,
  Headphones,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

export default function Landing() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("invoices");
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [demoForm, setDemoForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
    message: ""
  });

  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  // Fetch subscription plans
  const { data: plans = [] } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  // Demo request mutation
  const demoRequestMutation = useMutation({
    mutationFn: async (data: typeof demoForm) => {
      await apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your demo.",
      });
      setShowDemoModal(false);
      setDemoForm({ fullName: "", email: "", companyName: "", companySize: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoRequestMutation.mutate(demoForm);
  };

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: typeof contactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you within 24 hours.",
      });
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  const features = {
    invoices: {
      title: "Professional Invoice Management",
      description: "Create, send, and track professional invoices with automated reminders and payment tracking.",
      benefits: [
        "Automated email tracking and delivery confirmations",
        "Electronic signatures on any device", 
        "Company branding and custom templates",
        "Multi-currency support and tax calculations"
      ]
    },
    expenses: {
      title: "Smart Expense Control",
      description: "Track, categorize, and manage all business expenses with intelligent automation and reporting.",
      benefits: [
        "Receipt scanning and automatic categorization",
        "Multi-location expense tracking",
        "Real-time budget monitoring and alerts", 
        "Tax-ready expense reports"
      ]
    },
    crm: {
      title: "Powerful Customer Relationships",
      description: "Build stronger customer relationships with comprehensive contact management and interaction tracking.",
      benefits: [
        "360-degree customer profiles and history",
        "Sales pipeline management and forecasting",
        "Automated follow-up reminders",
        "Integration with email and calendar"
      ]
    },
    hr: {
      title: "Complete HR Management",
      description: "Streamline your human resources processes with employee management and leave tracking.",
      benefits: [
        "Employee profile management",
        "Leave request and approval system",
        "Performance tracking and reviews",
        "Payroll integration support"
      ]
    },
    contracts: {
      title: "Contract Management",
      description: "Create, manage, and track business contracts with automated reminders and e-signatures.",
      benefits: [
        "Contract template library",
        "Automated renewal reminders",
        "Electronic signature workflow",
        "Document version control"
      ]
    },
    offers: {
      title: "Professional Proposals",
      description: "Create compelling business proposals and track their progress through the sales cycle.",
      benefits: [
        "Professional proposal templates",
        "Real-time proposal tracking",
        "Integrated pricing calculators",
        "Client feedback collection"
      ]
    }
  };

  const featureIcons = {
    invoices: FileText,
    expenses: Receipt,
    crm: Users,
    hr: Bus,
    contracts: File,
    offers: Handshake
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 slide-in-left">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">BusinessFlow Pro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 slide-in-right">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Pricing</a>
              <Link href="/calculator" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">Calculator</Link>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">About</a>
              <Button 
                variant="ghost" 
                onClick={() => setShowDemoModal(true)} 
                className="text-secondary hover:text-secondary/80 glow-border transition-all duration-300"
              >
                Request Demo
              </Button>
              <Button 
                onClick={() => window.location.href = "/api/login"}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden scale-in"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden glass-effect border-b border-white/20 slide-in-bottom">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <Link href="/calculator" className="block text-muted-foreground hover:text-primary transition-colors">Calculator</Link>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button variant="ghost" onClick={() => setShowDemoModal(true)} className="w-full justify-start text-secondary glow-border">
                Request Demo
              </Button>
              <Button onClick={() => window.location.href = "/api/login"} className="w-full bg-gradient-to-r from-primary to-secondary">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground fade-in stagger-1">Transform Your</span>
                  <span className="gradient-text block fade-in stagger-2">
                    Business Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed fade-in stagger-3">
                  The complete business management platform that streamlines invoicing, expenses, CRM, HR, and contracts in one powerful solution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 pulse-glow"
                  onClick={() => window.location.href = "/api/login"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white glow-border transition-all duration-300"
                  onClick={() => setShowDemoModal(true)}
                >
                  Request Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground fade-in stagger-5">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6 opacity-20 floating-element"></div>
              <div className="relative glass-effect rounded-2xl shadow-2xl p-8 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                      <ChartLine className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Real-time insights</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg scale-in stagger-1">
                      <div className="text-2xl font-bold text-green-600">$247K</div>
                      <div className="text-sm text-green-600">Revenue</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg scale-in stagger-2">
                      <div className="text-2xl font-bold text-blue-600">1,234</div>
                      <div className="text-sm text-blue-600">Invoices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by over 10,000+ businesses worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="text-center">
                <div className="h-8 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 fade-in">
              Everything you need to <span className="gradient-text">run your business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in stagger-1">
              Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(features).map(([key, feature], index) => {
              const Icon = featureIcons[key as keyof typeof featureIcons];
              return (
                <Button
                  key={key}
                  variant={activeTab === key ? "default" : "outline"}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 hover-lift transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === key ? 'bg-gradient-to-r from-primary to-secondary pulse-glow' : 'glow-border'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{feature.title.split(' ')[0]}</span>
                </Button>
              );
            })}
          </div>

          {/* Active Feature Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">{features[activeTab as keyof typeof features].title}</h3>
              <p className="text-lg text-muted-foreground">
                {features[activeTab as keyof typeof features].description}
              </p>
              <ul className="space-y-4">
                {features[activeTab as keyof typeof features].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const Icon = featureIcons[activeTab as keyof typeof featureIcons];
                      return <Icon className="h-8 w-8 text-primary" />;
                    })()}
                    <h4 className="text-xl font-semibold">{features[activeTab as keyof typeof features].title}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose the perfect plan for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">your business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start free and scale as you grow. All plans include our core features with increasing limits and capabilities.
            </p>
            
            {/* Billing Period Toggle */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                {/* Monthly Button */}
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
                
                {/* Yearly Button */}
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
                
                {/* Animated Background */}
                <div
                  className={`absolute top-2 bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                    billingPeriod === 'monthly'
                      ? 'left-2 w-[calc(50%-4px)]'
                      : 'right-2 w-[calc(50%-4px)]'
                  }`}
                />
              </div>
              
              {/* Save Badge */}
              <div className={`mt-3 transition-all duration-300 ${
                billingPeriod === 'yearly' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
              }`}>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  🎉 Save 17% with yearly billing
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative hover-lift transition-all duration-500 scale-in stagger-${index + 1} ${
                  index === 1 ? 'border-2 border-primary shadow-2xl glass-effect' : 'border border-border/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 pulse-glow">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold gradient-text mb-1">
                      ${Math.floor((billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100)}
                      <span className="text-lg text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="text-sm text-muted-foreground mb-2">
                        Billed ${Math.floor(plan.yearlyPrice / 100)} yearly
                      </div>
                    )}
                    <p className="text-muted-foreground">
                      {plan.id === 'basic' && "Perfect for freelancers and small teams"}
                      {plan.id === 'professional' && "Ideal for growing businesses"}
                      {plan.id === 'business' && "For large teams and enterprises"}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 fade-in" style={{animationDelay: `${(featureIndex + 1) * 0.1}s`}}>
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      index === 1 
                        ? 'bg-gradient-to-r from-primary to-secondary pulse-glow' 
                        : 'glow-border'
                    }`}
                    variant={index === 1 ? "default" : "outline"}
                    onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Not sure which plan is right for you?
              </h3>
              <p className="text-muted-foreground mb-6">
                Use our interactive pricing calculator to get personalized recommendations based on your business needs.
              </p>
              <Link href="/calculator">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Try Our Pricing Calculator
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = "/compare"}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                Compare All Features →
              </Button>
              <Button variant="link" onClick={() => setShowDemoModal(true)} className="text-primary hover:text-primary/80">
                Contact Sales Team
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Need a custom solution? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 fade-in">
              Loved by businesses <span className="gradient-text">worldwide</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in stagger-1">
              See what our customers have to say about transforming their business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "BusinessFlow Pro has completely transformed how we manage our operations. The invoicing system alone has saved us 10+ hours per week.",
              },
              {
                name: "Maria Rodriguez", 
                role: "Sales Director, GrowthCorp",
                content: "The CRM features are outstanding. We've improved our customer relationships and increased sales by 35% since implementing BusinessFlow Pro.",
              },
              {
                name: "David Chen",
                role: "Operations Manager, BuildCo", 
                content: "Finally, a business management platform that actually works! The expense tracking and HR features have streamlined our entire workflow.",
              }
            ].map((testimonial, index) => (
              <Card key={index} className={`hover-lift glass-effect border-border/50 scale-in stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center pulse-glow">
                      <span className="text-white font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 fade-in">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in stagger-1">
              Have questions? Need a custom solution? Our team is here to help you transform your business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8 slide-in-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 scale-in stagger-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">Get in touch via email for detailed inquiries</p>
                    <a href="mailto:hello@businessflowpro.com" className="text-primary hover:text-primary/80 font-medium">
                      hello@businessflowpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 scale-in stagger-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">Speak directly with our team</p>
                    <a href="tel:+1-555-123-4567" className="text-primary hover:text-primary/80 font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 scale-in stagger-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">Our headquarters</p>
                    <p className="text-primary font-medium">
                      123 Business Ave<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 scale-in stagger-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Weekend: 10:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-effect border-primary/20 slide-in-right">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="fade-in stagger-1">
                      <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                        placeholder="John"
                        className="glow-border transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="fade-in stagger-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                        placeholder="Doe"
                        className="glow-border transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="fade-in stagger-3">
                    <Label htmlFor="contactEmail" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="john@company.com"
                      className="glow-border transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="fade-in stagger-4">
                    <Label htmlFor="contactCompany" className="text-sm font-medium">Company Name</Label>
                    <Input
                      id="contactCompany"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      placeholder="Your Company Inc."
                      className="glow-border transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="fade-in stagger-5">
                    <Label htmlFor="contactSubject" className="text-sm font-medium">Subject</Label>
                    <Select 
                      value={contactForm.subject} 
                      onValueChange={(value) => setContactForm({...contactForm, subject: value})}
                    >
                      <SelectTrigger className="glow-border transition-all duration-300">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales Questions</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="fade-in stagger-6">
                    <Label htmlFor="contactMessage" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="contactMessage"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us about your needs and how we can help..."
                      className="glow-border transition-all duration-300 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 pulse-glow fade-in stagger-7"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center fade-in stagger-8">
                    We'll get back to you within 24 hours. For urgent matters, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their operations with BusinessFlow Pro. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg"
              onClick={() => window.location.href = "/api/login"}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg"
              onClick={() => setShowDemoModal(true)}
            >
              Request Demo
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-4 w-4" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <ChartLine className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">BusinessFlow Pro</span>
              </div>
              <p className="text-gray-400">
                The complete business management platform for modern companies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 BusinessFlow Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="max-w-md glass-effect border-primary/20 scale-in">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl gradient-text">Request a Demo</DialogTitle>
            <p className="text-muted-foreground">Get a personalized walkthrough of BusinessFlow Pro</p>
          </DialogHeader>
          
          <form onSubmit={handleDemoSubmit} className="space-y-6">
            <div className="fade-in stagger-1">
              <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
              <Input
                id="fullName"
                value={demoForm.fullName}
                onChange={(e) => setDemoForm({...demoForm, fullName: e.target.value})}
                placeholder="Enter your full name"
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-2">
              <Label htmlFor="email" className="text-sm font-medium">Work Email</Label>
              <Input
                id="email"
                type="email"
                value={demoForm.email}
                onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                placeholder="Enter your work email"
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-3">
              <Label htmlFor="companyName" className="text-sm font-medium">Company Name</Label>
              <Input
                id="companyName"
                value={demoForm.companyName}
                onChange={(e) => setDemoForm({...demoForm, companyName: e.target.value})}
                placeholder="Enter your company name"
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-4">
              <Label htmlFor="companySize" className="text-sm font-medium">Company Size</Label>
              <Select value={demoForm.companySize} onValueChange={(value) => setDemoForm({...demoForm, companySize: value})}>
                <SelectTrigger className="glow-border transition-all duration-300">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201+">201+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="fade-in stagger-5">
              <Label htmlFor="message" className="text-sm font-medium">Message (Optional)</Label>
              <Textarea
                id="message"
                value={demoForm.message}
                onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                placeholder="Tell us about your specific needs..."
                className="glow-border transition-all duration-300"
                rows={3}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 pulse-glow fade-in stagger-6"
              disabled={demoRequestMutation.isPending}
            >
              {demoRequestMutation.isPending ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Schedule Demo"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
