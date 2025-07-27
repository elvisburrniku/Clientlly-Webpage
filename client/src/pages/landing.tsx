import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import ChatBot from "@/components/ChatBot";

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
  Sparkles,
  ArrowRight,
  Gift,
  Code
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "@/components/LanguageSelector";
import { formatCurrency, convertPrice } from "@/components/currency-selector";
import { useLocationDetection } from "@/hooks/useLocationDetection";

import { SocialLinks } from "@/components/ui/animated-icons";
import Footer from "@/components/Footer";


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
        

      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
                  style={{ 
                    filter: 'none',
                    background: 'transparent'
                  }}
                  onError={(e) => {
                    console.error('Logo failed to load:', e);
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => console.log('Logo loaded successfully')}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <a href="#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</a>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                Pricing
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 font-bold"
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
                onClick={() => window.location.href = '/subscribe'}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>

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
              <Link href="/about" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">About Us</Link>
              <a href="#features" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">Features</a>
              <Button 
                variant="ghost"
                onClick={() => {
                  window.location.href = '/subscribe';
                  setShowMobileMenu(false);
                }}
                className="w-full text-left justify-start text-lg text-muted-foreground hover:text-primary font-bold"
              >
                Pricing
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => {
                  setShowDemoModal(true);
                  setShowMobileMenu(false);
                }} 
                className="w-full text-left justify-start text-lg text-muted-foreground hover:text-primary font-bold"
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
                  variant="outline"
                  onClick={() => {
                    window.location.href = '/subscribe';
                    setShowMobileMenu(false);
                  }}
                  className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium"
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

            
            {/* Main Heading */}
            <div className="space-y-12">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight fade-in tracking-tight text-foreground">
                Everything you need <span className="animate-black-fade">to run your business</span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-2xl lg:text-3xl text-muted-foreground leading-tight fade-in stagger-1 tracking-tight">
                  <div className="space-y-1 max-w-4xl mx-auto">
                    <p className="text-center">
                      Empower your <span className="font-black gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">small business</span> to compete with enterprise-level efficiency. Our comprehensive <span className="font-black gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">accounting software</span> streamlines operations, boosts productivity, and accelerates growth
                    </p>
                    <p className="text-center">
                      while simplifying your financial management.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6 fade-in stagger-3">

                  <button 
                    onClick={() => window.location.href = "/trial"}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold text-sm transition-colors duration-200 cursor-pointer"
                  >
                    <Clock className="h-4 w-4" />
                    <span>14-day free trial</span>
                  </button>

                  <button 
                    onClick={() => window.location.href = "/cancel-anytime"}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-bold text-sm transition-colors duration-200 cursor-pointer"
                  >
                    <Check className="h-4 w-4" />
                    <span>Cancel anytime</span>
                  </button>
                </div>
              </div>
            </div>



            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-base text-muted-foreground fade-in stagger-5 pt-8">
              <button 
                onClick={() => window.location.href = "/data-protection"}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 hover:border-green-400/50 hover:bg-green-50/20 dark:hover:bg-green-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <Shield className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
                <span className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400">Data protection & privacy</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button 
                onClick={() => window.location.href = "/setup-migration"}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 hover:border-blue-400/50 hover:bg-blue-50/20 dark:hover:bg-blue-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <Check className="h-5 w-5 text-blue-500 group-hover:animate-pulse" />
                <span className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">Free setup & migration</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button 
                onClick={() => window.location.href = "/expert-support"}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 hover:border-purple-400/50 hover:bg-purple-50/20 dark:hover:bg-purple-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <Check className="h-5 w-5 text-purple-500 group-hover:animate-pulse" />
                <span className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400">24/7 expert support</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button 
                onClick={() => window.location.href = "/bank-security"}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 hover:border-orange-400/50 hover:bg-orange-50/20 dark:hover:bg-orange-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <Shield className="h-5 w-5 text-orange-500 group-hover:animate-pulse" />
                <span className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400">Bank-level security</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 relative -mt-12 features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 fade-in tracking-tight leading-tight">
              <span className="text-foreground">The features you need.</span> <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">All in one place</span>
            </h2>
            <p className="text-2xl font-black text-muted-foreground mb-8 fade-in stagger-1">
              No more juggling multiple tools.
            </p>
            <p className="text-xl font-black text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in stagger-2 tracking-tight">
              Everything your business needs in one powerful platform.
            </p>
          </div>

          {/* Compact Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 features-grid">
            
            {/* 1. Professional Invoicing */}
            <div className="group relative fade-in stagger-1">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Professional Invoicing</h3>
                    <p className="text-sm font-black text-muted-foreground">Custom invoices & payment tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/invoicing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 2. Smart Expense Tracking */}
            <div className="group relative fade-in stagger-2">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Receipt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Smart Expense Tracking</h3>
                    <p className="text-sm font-black text-muted-foreground">Organized expenses for tax time</p>
                  </div>
                </div>
                <a 
                  href="/features/expenses"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 3. Debt Management */}
            <div className="group relative fade-in stagger-3">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Debt Management</h3>
                    <p className="text-sm font-black text-muted-foreground">Track debts & payment scheduling</p>
                  </div>
                </div>
                <a 
                  href="/features/debt"
                  className="inline-flex items-center text-red-600 hover:text-red-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 4. Insights & Reports */}
            <div className="group relative fade-in stagger-4">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Insights & Reports</h3>
                    <p className="text-sm font-black text-muted-foreground">Business analytics & cash flow planning</p>
                  </div>
                </div>
                <a 
                  href="/features/reports"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 5. Client Management */}
            <div className="group relative fade-in stagger-5">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Client Management</h3>
                    <p className="text-sm font-black text-muted-foreground">Profiles, projects & communication tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/clients"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 6. Vendor Management */}
            <div className="group relative fade-in stagger-6">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Vendor Management</h3>
                    <p className="text-sm font-black text-muted-foreground">Supplier tracking & purchase orders</p>
                  </div>
                </div>
                <a 
                  href="/features/vendors"
                  className="inline-flex items-center text-amber-600 hover:text-amber-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 7. Inventory Management */}
            <div className="group relative fade-in stagger-7">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Inventory Management</h3>
                    <p className="text-sm font-black text-muted-foreground">Real-time inventory & order tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/inventory"
                  className="inline-flex items-center text-violet-600 hover:text-violet-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* 8. Attendance */}
            <div className="group relative fade-in stagger-8">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Smart Attendance</h3>
                    <p className="text-sm font-black text-muted-foreground">GPS tracking & workforce management</p>
                  </div>
                </div>
                <a 
                  href="/features/attendance"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>



            {/* 10. Easy Migration */}
            <div className="group relative fade-in stagger-10">
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">Easy Migration</h3>
                    <p className="text-sm font-black text-muted-foreground">Automated data transfer & expert support</p>
                  </div>
                </div>
                <a 
                  href="/features/migration"
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 font-black text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Compare Features Section */}
          <div className="text-center mt-16 fade-in stagger-11">
            <button 
              onClick={() => window.location.href = '/compare-features'}
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
              onMouseDown={(e) => {
                // Create expanding circle effect on click
                const button = e.currentTarget;
                const rect = button.getBoundingClientRect();
                const circle = document.createElement('div');
                const size = Math.max(rect.width, rect.height) * 2;
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                circle.className = 'absolute rounded-full bg-white/30 pointer-events-none';
                circle.style.cssText = `
                  width: ${size}px;
                  height: ${size}px;
                  left: ${x}px;
                  top: ${y}px;
                  transform: scale(0);
                  transition: transform 0.5s ease-out;
                `;
                
                button.appendChild(circle);
                
                // Trigger animation
                requestAnimationFrame(() => {
                  circle.style.transform = 'scale(1)';
                  circle.style.opacity = '0';
                });
                
                // Remove circle after animation
                setTimeout(() => {
                  circle.remove();
                }, 500);
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex items-center text-white">
                <span className="mr-2 text-white font-black">Compare plan features</span>
                <ChevronDown className="h-5 w-5 text-white group-active:rotate-180 transition-transform duration-300 ease-out" />
              </div>
              
              {/* Animated background on click */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-active:opacity-100 transition-opacity duration-200 rounded-xl"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Success Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 fade-in tracking-tight leading-tight">
              Trusted by <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">businesses worldwide</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in stagger-1 tracking-tight">
              Join thousands of companies that have streamlined their operations and accelerated their growth with BusinessFlow Pro.
            </p>
          </div>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Active Users */}
            <div className="text-center group fade-in stagger-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50,000+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>

            {/* Invoices Processed */}
            <div className="text-center group fade-in stagger-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">2M+</div>
              <p className="text-muted-foreground">Invoices Processed</p>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center group fade-in stagger-3">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>

            {/* Countries */}
            <div className="text-center group fade-in stagger-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">120+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Save Time */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">Save 15+ Hours Weekly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automate repetitive tasks and streamline your workflow. Our users report saving an average of 15 hours per week on administrative work.
              </p>
            </div>

            {/* Increase Revenue */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">Boost Revenue by 30%</h3>
              <p className="text-muted-foreground leading-relaxed">
                Better client management and faster invoicing lead to improved cash flow. See measurable growth in your business performance.
              </p>
            </div>

            {/* Reduce Errors */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">Eliminate 95% of Errors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated calculations and built-in validation ensure accuracy across all your business operations and financial records.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Growing Together Section - HoneyBook Style */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating sparkle elements */}
          <div className="absolute top-20 left-16 w-4 h-4 animate-ping delay-0">
            <Sparkles className="w-4 h-4 text-amber-600/30" />
          </div>
          <div className="absolute bottom-32 right-20 w-6 h-6 animate-ping delay-1000">
            <Sparkles className="w-6 h-6 text-orange-600/40" />
          </div>
          <div className="absolute top-40 right-32 w-3 h-3 animate-ping delay-2000">
            <Sparkles className="w-3 h-3 text-yellow-600/30" />
          </div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8 lg:space-y-12">
                {/* Main Heading */}
                <div className="space-y-6">
                  <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-tight mb-4 tracking-tight">
                    <span className="inline-block animate-elegant-rise animation-delay-0">Let's</span>{' '}
                    <span className="inline-block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-extrabold animate-elegant-rise animation-delay-200 hover:animate-gentle-bounce">grow</span>{' '}
                    <span className="inline-block animate-elegant-rise animation-delay-400">together</span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed">
                      Every feature we develop based on customer feedback benefits the entire BusinessFlow Pro community.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                      When you succeed, we all succeed – creating a powerful ecosystem of continuous improvement and shared growth.
                    </p>
                  </div>
                </div>
                
                {/* Feature Highlights */}
                <div className="space-y-6">
                  {/* Your Ideas */}
                  <div className="group">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Ideas</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-200">Share your vision and we'll make it reality</p>
                  </div>
                  
                  {/* Fast Development */}
                  <div className="group">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fast Development</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-200">Ideas become features in record time</p>
                  </div>
                  
                  {/* Mutual Growth */}
                  <div className="group">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mutual Growth</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-200">We succeed when you succeed</p>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <Button 
                    onClick={() => window.location.href = '/collaboration'}
                    className="group px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 border-0 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>

                </div>
              </div>
              
              {/* Right Side - Premium Community Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group perspective-1000">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-50/95 dark:via-gray-50/90 dark:to-gray-50/85 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/40 max-w-lg transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-3xl hover:shadow-amber-500/20">
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative space-y-8">
                      {/* Header with Animated Icon */}
                      <div className="text-center">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                            <Users className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Floating particles around icon */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"></div>
                          <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce delay-300"></div>
                        </div>
                        
                        <h3 className="text-3xl font-black text-gray-900 dark:text-gray-800 mb-3 transform transition-all duration-500 hover:scale-105 hover:text-orange-600">
                          Community First
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-800 leading-relaxed font-medium">
                          Your success drives our development. Every feature we build strengthens our entire community.
                        </p>
                      </div>
                      
                      {/* Enhanced Benefits Grid */}
                      <div className="space-y-5">
                        <div className="group/item flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-50/50 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <Code className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-gray-800 mb-1">Free Custom Development</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-700">Dedicated team builds your ideas at no extra cost</p>
                          </div>
                        </div>
                        
                        <div className="group/item flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-50/50 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <Headphones className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-gray-800 mb-1">Expert Team Support</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-700">Direct access to our development experts</p>
                          </div>
                        </div>
                        
                        <div className="group/item flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-50/50 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-gray-800 mb-1">Shared Growth</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-700">Community-driven feature roadmap</p>
                          </div>
                        </div>
                      </div>
                      

                    </div>
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl backdrop-blur-sm floating-element shadow-xl opacity-80">
                    <div className="w-full h-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl backdrop-blur-sm floating-delayed shadow-lg opacity-80">
                    <div className="w-full h-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute top-1/3 -left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full backdrop-blur-sm floating-slow shadow-lg opacity-70"></div>
                  <div className="absolute top-1/4 -right-10 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full backdrop-blur-sm floating-element shadow-lg opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 px-4 bg-muted/30 pricing-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 fade-in stagger-1 leading-tight tracking-tight animate-slide-up">
              Choose the <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">perfect plan</span> for your business
            </h2>
            

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
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight">{plan.name}</h3>
                    
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
                    {plan.features.map((feature, featureIndex) => {
                      // Parse markdown bold text **text** and render as bold
                      const parts = feature.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={featureIndex} className="flex items-center space-x-3 fade-in" style={{animationDelay: `${(featureIndex + 1) * 0.1}s`}}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {parts.map((part, partIndex) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                const content = part.slice(2, -2);
                                const isUsageLimit = content.includes('users') || content.includes('invoices') || content.includes('€');
                                return (
                                  <strong 
                                    key={partIndex} 
                                    className={`font-bold ${
                                      isUsageLimit 
                                        ? 'text-blue-600 dark:text-blue-400 animate-pulse bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 px-2 py-1 rounded-lg border border-blue-200 dark:border-blue-700/30' 
                                        : 'text-orange-600 dark:text-orange-400'
                                    }`}
                                  >
                                    {content}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-2"
                      onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                    >
                      Buy Now
                    </Button>
                    {plan.id === 'basic' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                        onClick={() => window.location.href = `/trial?plan=${plan.id}&billing=${billingPeriod}`}
                      >
                        Start Your Trial
                      </Button>
                    )}
                    {plan.id !== 'basic' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                        onClick={() => window.location.href = "/trial"}
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



      {/* Footer */}
      <Footer />

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
      

      
      {/* Chat Bot */}
      <ChatBot />
      

    </div>
  );
}
