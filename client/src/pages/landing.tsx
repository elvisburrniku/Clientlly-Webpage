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
  Calendar,
  CheckCircle,
  Database,
  Lock,
  HeadphonesIcon,
  Play,
  Lightbulb,
  Zap,
  TrendingUp,
  Heart,
  ArrowRight,
  Gift
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";
import TutorialWalkthrough from "@/components/TutorialWalkthrough";
import { useTutorial } from "@/hooks/useTutorial";
import { SocialLinks } from "@/components/ui/animated-icons";


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
  const tutorial = useTutorial();


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
        

      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-playful cursor-pointer"
                  style={{ 
                    filter: 'drop-shadow(0 0 0 transparent)',
                    background: 'transparent'
                  }}
                  onError={(e) => {
                    console.error('Logo failed to load:', e);
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => console.log('Logo loaded successfully')}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">About Us</Link>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Features</a>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium bg-transparent border-none cursor-pointer"
              >
                Pricing
              </button>

              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-green-600 bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 cta-button"
              >
                Start Your Trial
              </Button>
              {tutorial.isFirstVisit && (
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={tutorial.startTutorial}
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 flex items-center space-x-1"
                >
                  <Play className="h-4 w-4" />
                  <span>Take Tour</span>
                </Button>
              )}
              <LanguageSelector />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
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
              {/* Navigation Links */}
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <button 
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  setShowMobileMenu(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>

              <Button 
                variant="ghost" 
                onClick={() => {
                  setShowDemoModal(true);
                  setShowMobileMenu(false);
                }} 
                className="w-full text-left justify-start text-muted-foreground hover:text-primary"
              >
                Contact Us
              </Button>
              
              {/* Action Buttons */}
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
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Start Your Trial
                </Button>
                <div className="pt-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative pt-20 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
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
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight fade-in">
                <span className="text-foreground block mb-1 leading-tight">
                  Everything you need to
                </span>
                <span className="gradient-text block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
                  run your business
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in stagger-3 mt-6">
                Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.
              </p>
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
      <section id="features" className="py-12 px-4 relative -mt-12 features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 fade-in">
              The features you need. <span className="gradient-text">All in one place</span>
            </h2>
          </div>

          {/* Reorganized Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 features-grid">
            
            {/* 1. Professional Invoicing */}
            <div className="group relative fade-in stagger-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Professional Invoicing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm min-h-[3rem]">Create professional custom invoices, send payment reminders, and match payments to invoices, automatically.</p>
                <a 
                  href="/features/invoicing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/expenses"
                  className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/debt"
                  className="inline-flex items-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/reports"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/clients"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/vendors"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/inventory"
                  className="inline-flex items-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/attendance"
                  className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/calendar"
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/mobile"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/security"
                  className="inline-flex items-center text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
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
                <a 
                  href="/features/migration"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 px-4 bg-muted/30 pricing-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in stagger-1 leading-tight animate-slide-up">
              Choose the <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">perfect plan</span> for your business and let's <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">grow together</span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-16">
              {/* Professional Collaboration Section */}
              <div className="bg-white/95 dark:bg-gray-900/95 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                
                <div className="text-center space-y-6">
                  
                  {/* Section Header */}
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      Growing Together
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      With your ideas and feedback, we continuously improve our platform{' '}
                      <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent font-semibold">free of charge</span>
                      {' '}because we believe the best growth happens when we grow together.
                    </p>
                    
                    {/* Call to Action */}
                    <div className="pt-4">
                      <Button 
                        variant="outline"
                        onClick={() => window.location.href = '/collaboration'}
                        className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 text-base font-semibold shadow-sm hover:shadow-md"
                      >
                        <span className="flex items-center">
                          <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white">Learn more</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            

            

          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pricing-grid">
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
                    <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                    
                    {/* Individual Plan Billing Toggle */}
                    <div className="mb-6">
                      <div className="relative flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1 w-full max-w-xs mx-auto">
                        <button
                          onClick={() => setBillingPeriod('monthly')}
                          className={`relative z-10 flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300 ${
                            billingPeriod === 'monthly'
                              ? 'text-white'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingPeriod('yearly')}
                          className={`relative z-10 flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300 ${
                            billingPeriod === 'yearly'
                              ? 'text-white'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                          }`}
                        >
                          Yearly
                        </button>
                        <div
                          className={`absolute top-1 bottom-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md shadow-sm transition-all duration-300 ${
                            billingPeriod === 'monthly'
                              ? 'left-1 w-[calc(50%-4px)]'
                              : 'right-1 w-[calc(50%-4px)]'
                          }`}
                        />
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="mt-2">
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Save 17%</span>
                        </div>
                      )}
                    </div>
                    
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
                        onClick={() => window.location.href = `/trial?plan=${plan.id}&billing=${billingPeriod}`}
                      >
                        Start Your Trial
                      </Button>
                    )}
                    {plan.id !== 'basic' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full text-primary hover:text-primary/80"
                        onClick={() => window.location.href = '/trial'}
                      >
                        Start Your Trial
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-bottom stagger-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              onClick={() => window.location.href = "/api/login"}
            >
              {t('landing.getStarted', 'Start Your Trial')}
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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">

              {/* Product Links */}
              <div className="fade-in stagger-1">
                <h4 className="text-lg font-bold text-white mb-6">
                  Product
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#features" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      API
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="fade-in stagger-2">
                <h4 className="text-lg font-bold text-white mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="/about" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="fade-in stagger-3">
                <h4 className="text-lg font-bold text-white mb-6">
                  Support
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="fade-in stagger-4">
                <h4 className="text-lg font-bold text-white mb-6">
                  Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Webinars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block">
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="border-t border-gray-800 pt-8 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-6">
                  Get Our App & Follow Us
                </h4>
                <div className="flex justify-center">
                  <SocialLinks className="animate-fade-in-up stagger-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Copyright Section - White Background */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-black text-sm">
              © 2025 BusinessFlow Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-black hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-black hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-black hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Dialog open={showDemoModal} onOpenChange={() => setShowDemoModal(false)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Request a Demo
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <p className="text-muted-foreground mb-6">
              See BusinessFlow Pro in action. Schedule a personalized demo with our team.
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
              onClick={() => setShowDemoModal(false)}
            >
              Contact Sales Team
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Tutorial Walkthrough */}
      {tutorial.showTutorial && (
        <TutorialWalkthrough
          isVisible={tutorial.showTutorial}
          onComplete={tutorial.completeTutorial}
          onSkip={tutorial.skipTutorial}
        />
      )}
    </div>
  );
}
