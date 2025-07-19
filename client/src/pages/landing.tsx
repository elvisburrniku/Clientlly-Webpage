import { useState } from "react";
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
  X
} from "lucide-react";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export default function Landing() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("invoices");
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [demoForm, setDemoForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button variant="ghost" onClick={() => setShowDemoModal(true)} className="text-secondary hover:text-secondary/80">
                Request Demo
              </Button>
              <Button onClick={() => window.location.href = "/api/login"}>
                Start Free Trial
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button variant="ghost" onClick={() => setShowDemoModal(true)} className="w-full justify-start text-secondary">
                Request Demo
              </Button>
              <Button onClick={() => window.location.href = "/api/login"} className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Transform Your</span>
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent block">
                    Business Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The complete business management platform that streamlines invoicing, expenses, CRM, HR, and contracts in one powerful solution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all"
                  onClick={() => window.location.href = "/api/login"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => setShowDemoModal(true)}
                >
                  Request Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
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

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <ChartLine className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Real-time insights</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$247K</div>
                      <div className="text-sm text-green-600">Revenue</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
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
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">run your business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(features).map(([key, feature]) => {
              const Icon = featureIcons[key as keyof typeof featureIcons];
              return (
                <Button
                  key={key}
                  variant={activeTab === key ? "default" : "outline"}
                  onClick={() => setActiveTab(key)}
                  className="flex items-center space-x-2"
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. All plans include our core features with increasing limits and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.id} className={`relative hover:shadow-lg transition-shadow ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-foreground mb-1">
                      ${Math.floor(plan.price / 100)}<span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">
                      {plan.id === 'basic' && "Perfect for freelancers and small teams"}
                      {plan.id === 'professional' && "Ideal for growing businesses"}
                      {plan.id === 'business' && "For large teams and enterprises"}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={index === 1 ? "default" : "outline"}
                    onClick={() => window.location.href = `/subscribe?plan=${plan.id}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Button variant="link" onClick={() => setShowDemoModal(true)} className="text-primary hover:text-primary/80">
              Contact our sales team →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Loved by businesses <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">worldwide</span>
            </h2>
            <p className="text-xl text-muted-foreground">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
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
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Request a Demo</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={demoForm.fullName}
                onChange={(e) => setDemoForm({...demoForm, fullName: e.target.value})}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                value={demoForm.email}
                onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                placeholder="Enter your work email"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={demoForm.companyName}
                onChange={(e) => setDemoForm({...demoForm, companyName: e.target.value})}
                placeholder="Enter your company name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="companySize">Company Size</Label>
              <Select value={demoForm.companySize} onValueChange={(value) => setDemoForm({...demoForm, companySize: value})}>
                <SelectTrigger>
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

            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                value={demoForm.message}
                onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                placeholder="Tell us about your needs..."
                rows={3}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-secondary"
              disabled={demoRequestMutation.isPending}
            >
              {demoRequestMutation.isPending ? "Submitting..." : "Schedule Demo"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
