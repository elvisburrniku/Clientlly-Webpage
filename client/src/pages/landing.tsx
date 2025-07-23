import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ChevronDown,
  Star,
  Shield,
  Globe,
  Headphones,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  Banknote,
  Calculator,
  Package,
  Camera,
  Smartphone,
  BarChart3,
  DollarSign,
  CreditCard,
  RefreshCw,
  ExternalLink,
  Building2,
  Calendar
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";


interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

export default function Landing() {
  const { toast } = useToast();
  const { t } = useTranslation();


  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const { locationData, isLoading: locationLoading } = useLocationDetection();
  
  // Auto-set currency based on detected location
  useEffect(() => {
    if (locationData && !locationLoading) {
      setSelectedCurrency(locationData.currency);
    }
  }, [locationData, locationLoading]);
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



  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl floating-element"></div>

        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-slow"></div>
        
        {/* Subtle 3D Logo Background Elements */}
        <div className="absolute top-1/3 right-1/3 opacity-5 dark:opacity-10 floating-slow">
          <img 
            src="/attached_assets/3d_1753268267691.png" 
            alt="" 
            className="w-96 h-96 object-contain rotate-12 transform"
          />
        </div>
        <div className="absolute bottom-1/4 left-1/5 opacity-3 dark:opacity-5 floating-delayed">
          <img 
            src="/attached_assets/3d_1753268267691.png" 
            alt="" 
            className="w-80 h-80 object-contain -rotate-6 transform scale-75"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-14 h-10 object-contain logo-playful cursor-pointer"
                    onError={(e) => {
                      console.error('Logo failed to load:', e);
                      e.currentTarget.style.border = '2px solid red';
                    }}
                    onLoad={() => console.log('Logo loaded successfully')}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-orange-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-orange-500/20 group-hover:to-purple-500/20 transition-all duration-500 rounded-xl"></div>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">BusinessFlow Pro</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8 slide-in-right">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">{t('landing.nav.features', 'Features')}</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">{t('landing.nav.pricing', 'Pricing')}</a>
              <Link href="/calculator" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">{t('calculator.title', 'Calculator')}</Link>

            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost" 
                onClick={() => setShowDemoModal(true)} 
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                Contact Us
              </Button>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
                className="border-green-600 bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/subscribe?plan=basic&billing=monthly"}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
              >
                Try Free First
              </Button>
              <LanguageSelector />
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <LanguageSelector />
              <Button 
                variant="ghost" 
                onClick={() => setShowDemoModal(true)}
                size="sm"
                className="text-xs"
              >
                Contact
              </Button>
              <Button 
                onClick={() => window.location.href = "/subscribe?plan=basic&billing=monthly"}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
              >
                Try Free First
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="scale-in"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-b border-white/20 slide-in-bottom">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">{t('landing.nav.features', 'Features')}</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">{t('landing.nav.pricing', 'Pricing')}</a>
              <Link href="/calculator" className="block text-muted-foreground hover:text-primary transition-colors">{t('calculator.title', 'Calculator')}</Link>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">{t('landing.nav.about', 'About')}</a>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    window.location.href = "/api/login";
                    setShowMobileMenu(false);
                  }} 
                  className="w-full text-left justify-start text-muted-foreground hover:text-primary"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/subscribe?plan=professional&billing=yearly";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/subscribe?plan=basic&billing=monthly";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Try Free First
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 slide-in-up shadow-lg">
              <Star className="w-4 h-4 mr-2 fill-current text-yellow-500" />
              Used by thousands of businesses worldwide
            </div>
            
            {/* Main Heading */}
            <div className="space-y-10">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight fade-in">
                <span className="text-foreground block mb-2 leading-relaxed">
                  Everything you need to
                </span>
                <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-relaxed">
                  run your business
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in stagger-3">
                Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in stagger-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 min-w-[200px]"
                onClick={() => window.location.href = "/subscribe?plan=basic&billing=monthly"}
              >
                Try Free First
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 min-w-[200px]"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              >
                Buy Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 min-w-[200px]"
                onClick={() => setShowDemoModal(true)}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-base text-muted-foreground fade-in stagger-5 pt-8">
              <div className="flex items-center space-x-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-medium">Free setup & migration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-medium">24/7 expert support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="font-medium">Bank-level security</span>
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-12 px-4 relative -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 fade-in">
              The features you need. <span className="gradient-text">All in one place</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto fade-in stagger-1 leading-relaxed">
              Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.
            </p>
          </div>

          {/* Reorganized Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            
            {/* 1. Professional Invoicing */}
            <div className="group relative fade-in stagger-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Professional Invoicing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Create professional custom invoices, send payment reminders, and match payments to invoices, automatically.</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/invoicing"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 2. Smart Expense Tracking */}
            <div className="group relative fade-in stagger-2">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-green-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Receipt className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Smart Expense Tracking</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Get set for tax time with all your expenses organised in one place.</p>
                <Button 
                  variant="ghost" 
                  className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/expenses"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 3. Debt Management */}
            <div className="group relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <CreditCard className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Debt Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Track business debts, schedule payments, and optimize debt reduction strategies with smart analytics and payment planning tools.</p>
                <Button 
                  variant="ghost" 
                  className="text-red-600 hover:text-red-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/debt"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 4. Insights & Reports */}
            <div className="group relative fade-in stagger-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Insights & Reports</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">See how your business is doing, and how it could look in the next 90 days, with a range of popular reports and the cash flow planner.</p>
                <Button 
                  variant="ghost" 
                  className="text-cyan-600 hover:text-cyan-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/reports"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 5. Client Management */}
            <div className="group relative fade-in stagger-5">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Client Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Manage all your clients in one place with detailed profiles, contact information, project history, and communication tracking for better relationships.</p>
                <Button 
                  variant="ghost" 
                  className="text-indigo-600 hover:text-indigo-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/clients"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 6. Vendor Management */}
            <div className="group relative fade-in stagger-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Vendor Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Streamline your vendor relationships with comprehensive supplier profiles, purchase order tracking, payment management, and performance analytics.</p>
                <Button 
                  variant="ghost" 
                  className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/vendors"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 7. Inventory Management */}
            <div className="group relative fade-in stagger-7">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Inventory Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Stay on top of your orders and quantities while managing your inventory in real-time.</p>
                <Button 
                  variant="ghost" 
                  className="text-red-600 hover:text-red-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/inventory"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 8. Attendance */}
            <div className="group relative fade-in stagger-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-green-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Smart Attendance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">GPS-based time tracking with offline support, team management, and comprehensive attendance analytics for modern workforces.</p>
                <Button 
                  variant="ghost" 
                  className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/attendance"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* 9. Smart Calendar */}
            <div className="group relative fade-in stagger-9">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-violet-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Smart Calendar</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Integrated calendar system for scheduling meetings, tracking deadlines, managing appointments, and coordinating team activities with smart notifications.</p>
                <Button 
                  variant="ghost" 
                  className="text-violet-600 hover:text-violet-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/calendar"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Keep remaining features for completeness */}
            {/* Mobile App */}
            <div className="group relative fade-in stagger-10">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-teal-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Smartphone className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Mobile App</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Save time by running your business on-the go with your mobile device*.</p>
                <Button 
                  variant="ghost" 
                  className="text-teal-600 hover:text-teal-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/mobile"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="group relative fade-in stagger-11">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-slate-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Enterprise Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">See how we keep your information safe and compliant at all times.</p>
                <Button 
                  variant="ghost" 
                  className="text-slate-600 hover:text-slate-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/security"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Easy Migration */}
            <div className="group relative fade-in stagger-12">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-pink-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <RefreshCw className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Easy Migration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Switch from other platforms with automated data transfer and expert support.</p>
                <Button 
                  variant="ghost" 
                  className="text-pink-600 hover:text-pink-700 p-0 h-auto font-semibold text-sm"
                  onClick={() => window.location.href = "/features/migration"}
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 fade-in leading-tight">
              Choose the perfect plan for your business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 fade-in stagger-1 animate-type-in">
              Start free and scale as you grow. All plans include our core features with increasing limits and capabilities.
            </p>
            
            {/* Try for Free Button */}
            <div className="mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/subscribe?plan=basic&billing=monthly'}
              >
                Try Free First
              </Button>
            </div>
            
            {/* Currency and Billing Period Controls */}
            <div className="flex flex-col items-center justify-center mb-8 space-y-4">
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
                      {formatCurrency(
                        convertPrice(
                          (billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12) / 100,
                          'USD',
                          selectedCurrency
                        ),
                        selectedCurrency
                      )}
                      <span className="text-lg text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="text-sm text-muted-foreground mb-2">
                        Billed {formatCurrency(
                          convertPrice(plan.yearlyPrice / 100, 'USD', selectedCurrency),
                          selectedCurrency
                        )} yearly
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
                  
                  <div className="space-y-3">
                    <Button 
                      className={`w-full transition-all duration-300 hover:scale-105 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-primary to-secondary pulse-glow' 
                          : 'glow-border'
                      }`}
                      variant={index === 1 ? "default" : "outline"}
                      onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                    >
                      {plan.id === 'basic' ? 'Buy Now' : 'Buy Now'}
                    </Button>
                    {plan.id === 'basic' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full text-primary hover:text-primary/80"
                        onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                      >
                        Try Free First
                      </Button>
                    )}
                    {plan.id !== 'basic' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full text-primary hover:text-primary/80"
                        onClick={() => window.location.href = '/subscribe?plan=basic&billing=monthly'}
                      >
                        Try Free First
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 fade-in">
              {t('landing.testimonials.title', 'Loved by businesses worldwide')}
            </h2>
            <p className="text-xl text-muted-foreground fade-in stagger-1">
              {t('landing.testimonials.subtitle', 'See what our customers have to say about transforming their business operations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: t('landing.testimonials.review1', 'BusinessFlow Pro has completely transformed how we manage our operations. The invoicing system alone has saved us 10+ hours per week.'),
              },
              {
                name: "Maria Rodriguez", 
                role: "Sales Director, GrowthCorp",
                content: t('landing.testimonials.review2', 'The CRM features are outstanding. We\'ve improved our customer relationships and increased sales by 35% since implementing BusinessFlow Pro.'),
              },
              {
                name: "David Chen",
                role: "Operations Manager, BuildCo", 
                content: t('landing.testimonials.review3', 'Finally, a business management platform that actually works! The expense tracking and HR features have streamlined our entire workflow.'),
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-bottom">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                {t('landing.contact.title', 'Get in Touch')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in stagger-1 leading-relaxed">
              {t('landing.contact.subtitle', 'Have questions? Need a custom solution? Our team is here to help you transform your business operations.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8 slide-in-left">
              <div className="space-y-8">
                <div className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl scale-in stagger-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{t('landing.contact.email', 'Email Us')}</h3>
                      <p className="text-muted-foreground mb-3">{t('landing.contact.emailDesc', 'Get in touch via email for detailed inquiries')}</p>
                      <a href="mailto:hello@businessflowpro.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-lg hover:underline transition-colors">
                        hello@businessflowpro.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-green-200/50 dark:border-green-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl scale-in stagger-2">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{t('landing.contact.call', 'Call Us')}</h3>
                      <p className="text-muted-foreground mb-3">{t('landing.contact.callDesc', 'Speak directly with our team')}</p>
                      <a href="tel:+1-555-123-4567" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold text-lg hover:underline transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl scale-in stagger-3">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{t('landing.contact.visit', 'Visit Us')}</h3>
                      <p className="text-muted-foreground mb-3">{t('landing.contact.visitDesc', 'Our headquarters')}</p>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                        123 Business Ave<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl scale-in stagger-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{t('landing.contact.hours', 'Business Hours')}</h3>
                      <p className="text-muted-foreground">
                        <span className="block">{t('landing.contact.weekdays', 'Monday - Friday: 9:00 AM - 6:00 PM PST')}</span>
                        <span className="block">{t('landing.contact.weekends', 'Weekend: 10:00 AM - 4:00 PM PST')}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 slide-in-right shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    {t('landing.contact.form.title', 'Send us a Message')}
                  </span>
                </CardTitle>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('landing.contact.form.subtitle', 'Fill out the form below and we\'ll get back to you within 24 hours')}
                </p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="fade-in stagger-1">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.firstName', 'First Name')}</Label>
                      <Input
                        id="firstName"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                        placeholder="John"
                        className="h-12 border-2 border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                        required
                      />
                    </div>
                    <div className="fade-in stagger-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.lastName', 'Last Name')}</Label>
                      <Input
                        id="lastName"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                        placeholder="Doe"
                        className="h-12 border-2 border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="fade-in stagger-3">
                    <Label htmlFor="contactEmail" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.email', 'Email Address')}</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="john@company.com"
                      className="h-12 border-2 border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600"
                      required
                    />
                  </div>

                  <div className="fade-in stagger-4">
                    <Label htmlFor="contactCompany" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.company', 'Company Name')}</Label>
                    <Input
                      id="contactCompany"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      placeholder="Your Company Inc."
                      className="h-12 border-2 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400 rounded-xl transition-all duration-300 hover:border-green-300 dark:hover:border-green-600"
                      required
                    />
                  </div>

                  <div className="fade-in stagger-5">
                    <Label htmlFor="contactSubject" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.subject', 'Subject')}</Label>
                    <Select 
                      value={contactForm.subject} 
                      onValueChange={(value) => setContactForm({...contactForm, subject: value})}
                    >
                      <SelectTrigger className="h-12 border-2 border-orange-200 dark:border-orange-700 focus:border-orange-500 dark:focus:border-orange-400 rounded-xl transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600">
                        <SelectValue placeholder={t('landing.contact.form.selectTopic', 'Select a topic')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t('landing.contact.form.general', 'General Inquiry')}</SelectItem>
                        <SelectItem value="sales">{t('landing.contact.form.sales', 'Sales Questions')}</SelectItem>
                        <SelectItem value="support">{t('landing.contact.form.support', 'Technical Support')}</SelectItem>
                        <SelectItem value="partnership">{t('landing.contact.form.partnership', 'Partnership')}</SelectItem>
                        <SelectItem value="demo">Learn More</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="fade-in stagger-6">
                    <Label htmlFor="contactMessage" className="text-sm font-semibold text-foreground mb-2 block">{t('landing.contact.form.message', 'Message')}</Label>
                    <Textarea
                      id="contactMessage"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder={t('landing.contact.form.messagePlaceholder', 'Tell us about your needs and how we can help...')}
                      className="min-h-[140px] border-2 border-pink-200 dark:border-pink-700 focus:border-pink-500 dark:focus:border-pink-400 rounded-xl transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-600 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 fade-in stagger-7"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{t('landing.contact.form.sending', 'Sending...')}</span>
                      </div>
                    ) : (
                      t('landing.contact.form.send', 'Send Message')
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground fade-in stagger-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                    <span className="font-medium">
                      {t('landing.contact.form.response', 'We\'ll get back to you within 24 hours. For urgent matters, please call us directly.')}
                    </span>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 slide-in-bottom">
            <span className="inline-block animate-bounce-in bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t('landing.footer.ready', 'Ready to transform your business?')}
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto slide-in-bottom stagger-1 animate-fade-in-up leading-relaxed">
            {t('landing.footer.join', 'Join thousands of businesses that have streamlined their operations with BusinessFlow Pro. Start your free trial today.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-bottom stagger-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              onClick={() => window.location.href = "/api/login"}
            >
              {t('landing.getStarted', 'Start Free Trial')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-slate-900 text-lg px-8 py-4 font-bold backdrop-blur-sm bg-white/10 hover:bg-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setShowDemoModal(true)}
            >
              Learn More
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>{t('landing.footer.security', 'Bank-level security')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>{t('landing.footer.uptime', '99.9% uptime')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-4 w-4" />
              <span>{t('landing.footer.support24', '24/7 support')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-16">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6 fade-in">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/attached_assets/3d_1753195741585.png" 
                    alt="BusinessFlow Pro" 
                    className="w-14 h-10 object-contain"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    BusinessFlow Pro
                  </span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {t('landing.footer.description', 'The complete business management platform for modern companies.')}
                </p>
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                    onClick={() => window.location.href = "/api/login"}
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setShowDemoModal(true)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Product Links */}
              <div className="fade-in stagger-1">
                <h4 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('landing.footer.product', 'Product')}
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.nav.features', 'Features')}
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.nav.pricing', 'Pricing')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.integrations', 'Integrations')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.api', 'API')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="fade-in stagger-2">
                <h4 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {t('landing.footer.company', 'Company')}
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.about', 'About')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.careers', 'Careers')}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.contact', 'Contact')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="fade-in stagger-3">
                <h4 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('landing.footer.support', 'Support')}
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.help', 'Help Center')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.docs', 'Documentation')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                      {t('landing.footer.community', 'Community')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700/50 pt-8 fade-in stagger-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <p className="text-gray-400">
                    {t('landing.footer.copyright', '© 2024 BusinessFlow Pro. All rights reserved.')}
                  </p>
                  <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="max-w-md glass-effect border-primary/20 scale-in">
          <DialogHeader className="text-center">
            <p className="text-muted-foreground">{t('landing.demo.subtitle', 'Get a personalized walkthrough of BusinessFlow Pro')}</p>
          </DialogHeader>
          
          <form onSubmit={handleDemoSubmit} className="space-y-6">
            <div className="fade-in stagger-1">
              <Label htmlFor="fullName" className="text-sm font-medium">{t('landing.demo.fullName', 'Full Name')}</Label>
              <Input
                id="fullName"
                value={demoForm.fullName}
                onChange={(e) => setDemoForm({...demoForm, fullName: e.target.value})}
                placeholder={t('landing.demo.fullNamePlaceholder', 'Enter your full name')}
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-2">
              <Label htmlFor="email" className="text-sm font-medium">{t('landing.demo.workEmail', 'Work Email')}</Label>
              <Input
                id="email"
                type="email"
                value={demoForm.email}
                onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                placeholder={t('landing.demo.emailPlaceholder', 'Enter your work email')}
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-3">
              <Label htmlFor="companyName" className="text-sm font-medium">{t('landing.demo.companyName', 'Company Name')}</Label>
              <Input
                id="companyName"
                value={demoForm.companyName}
                onChange={(e) => setDemoForm({...demoForm, companyName: e.target.value})}
                placeholder={t('landing.demo.companyPlaceholder', 'Enter your company name')}
                className="glow-border transition-all duration-300"
                required
              />
            </div>
            
            <div className="fade-in stagger-4">
              <Label htmlFor="companySize" className="text-sm font-medium">{t('landing.demo.companySize', 'Company Size')}</Label>
              <Select value={demoForm.companySize} onValueChange={(value) => setDemoForm({...demoForm, companySize: value})}>
                <SelectTrigger className="glow-border transition-all duration-300">
                  <SelectValue placeholder={t('landing.demo.selectSize', 'Select company size')} />
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
              <Label htmlFor="message" className="text-sm font-medium">{t('landing.demo.message', 'Message (Optional)')}</Label>
              <Textarea
                id="message"
                value={demoForm.message}
                onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                placeholder={t('landing.demo.messagePlaceholder', 'Tell us about your specific needs...')}
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
                  <span>{t('landing.demo.submitting', 'Submitting...')}</span>
                </div>
              ) : (
                t('landing.demo.schedule', 'Schedule Demo')
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>


    </div>
  );
}
