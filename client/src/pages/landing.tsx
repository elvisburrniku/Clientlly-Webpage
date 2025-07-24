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
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                onMouseDown={(e) => {
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
                  requestAnimationFrame(() => {
                    circle.style.transform = 'scale(1)';
                    circle.style.opacity = '0';
                  });
                  setTimeout(() => circle.remove(), 500);
                }}
              >
                <span className="text-white">Buy Now</span>
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden cta-button"
                onMouseDown={(e) => {
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
                  requestAnimationFrame(() => {
                    circle.style.transform = 'scale(1)';
                    circle.style.opacity = '0';
                  });
                  setTimeout(() => circle.remove(), 500);
                }}
              >
                <span className="text-white">Start Your Trial</span>
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
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                  onMouseDown={(e) => {
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
                    requestAnimationFrame(() => {
                      circle.style.transform = 'scale(1)';
                      circle.style.opacity = '0';
                    });
                    setTimeout(() => circle.remove(), 500);
                  }}
                >
                  <span className="text-white">Buy Now</span>
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                  onMouseDown={(e) => {
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
                    requestAnimationFrame(() => {
                      circle.style.transform = 'scale(1)';
                      circle.style.opacity = '0';
                    });
                    setTimeout(() => circle.remove(), 500);
                  }}
                >
                  <span className="text-white">Start Your Trial</span>
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
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight fade-in">
                <span className="text-foreground leading-tight">
                  Everything you need to
                </span>
                <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
                  {" "}run your business
                </span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-8">
                <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed fade-in stagger-1">
                  Empower your small business to compete with enterprise-level efficiency. Streamline operations, boost productivity, and accelerate growth with our comprehensive solution.
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6 fade-in stagger-3">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-foreground">No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">14-day free trial</span>
                  </div>
                </div>
              </div>
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
      <section id="features" className="py-16 px-4 relative -mt-12 features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 fade-in">
              <span className="text-foreground">The features you need.</span> <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">All in one place</span>
            </h2>
            <p className="text-xl font-semibold text-muted-foreground mb-6 fade-in stagger-1">
              No more juggling multiple tools.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in stagger-2">
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
                    <h3 className="text-lg font-bold text-foreground">Professional Invoicing</h3>
                    <p className="text-sm text-muted-foreground">Custom invoices & payment tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/invoicing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Smart Expense Tracking</h3>
                    <p className="text-sm text-muted-foreground">Organized expenses for tax time</p>
                  </div>
                </div>
                <a 
                  href="/features/expenses"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Debt Management</h3>
                    <p className="text-sm text-muted-foreground">Track debts & payment scheduling</p>
                  </div>
                </div>
                <a 
                  href="/features/debt"
                  className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Insights & Reports</h3>
                    <p className="text-sm text-muted-foreground">Business analytics & cash flow planning</p>
                  </div>
                </div>
                <a 
                  href="/features/reports"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Client Management</h3>
                    <p className="text-sm text-muted-foreground">Profiles, projects & communication tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/clients"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Vendor Management</h3>
                    <p className="text-sm text-muted-foreground">Supplier tracking & purchase orders</p>
                  </div>
                </div>
                <a 
                  href="/features/vendors"
                  className="inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Inventory Management</h3>
                    <p className="text-sm text-muted-foreground">Real-time inventory & order tracking</p>
                  </div>
                </div>
                <a 
                  href="/features/inventory"
                  className="inline-flex items-center text-violet-600 hover:text-violet-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Smart Attendance</h3>
                    <p className="text-sm text-muted-foreground">GPS tracking & workforce management</p>
                  </div>
                </div>
                <a 
                  href="/features/attendance"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-foreground">Easy Migration</h3>
                    <p className="text-sm text-muted-foreground">Automated data transfer & expert support</p>
                  </div>
                </div>
                <a 
                  href="/features/migration"
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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
                <span className="mr-2 text-white">Compare plan features</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 fade-in">
              Trusted by <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">businesses worldwide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in stagger-1">
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
              <h3 className="text-xl font-bold text-foreground mb-4">Save 15+ Hours Weekly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automate repetitive tasks and streamline your workflow. Our users report saving an average of 15 hours per week on administrative work.
              </p>
            </div>

            {/* Increase Revenue */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Boost Revenue by 30%</h3>
              <p className="text-muted-foreground leading-relaxed">
                Better client management and faster invoicing lead to improved cash flow. See measurable growth in your business performance.
              </p>
            </div>

            {/* Reduce Errors */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Eliminate 95% of Errors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated calculations and built-in validation ensure accuracy across all your business operations and financial records.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Growing Together Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
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
                      className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95"
                      onMouseDown={(e) => {
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
                        requestAnimationFrame(() => {
                          circle.style.transform = 'scale(1)';
                          circle.style.opacity = '0';
                        });
                        setTimeout(() => circle.remove(), 500);
                      }}
                    >
                      <span className="flex items-center text-white">
                        <span className="text-white">Learn more</span>
                        <ArrowRight className="h-4 w-4 ml-2 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
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

            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in stagger-1 leading-tight animate-slide-up">
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
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                      onClick={() => window.location.href = `/subscribe?plan=${plan.id}&billing=${billingPeriod}`}
                      onMouseDown={(e) => {
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
                        requestAnimationFrame(() => {
                          circle.style.transform = 'scale(1)';
                          circle.style.opacity = '0';
                        });
                        setTimeout(() => circle.remove(), 500);
                      }}
                    >
                      <span className="text-white">Buy Now</span>
                    </Button>
                    {plan.id === 'basic' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                        onClick={() => window.location.href = `/trial?plan=${plan.id}&billing=${billingPeriod}`}
                        onMouseDown={(e) => {
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
                          requestAnimationFrame(() => {
                            circle.style.transform = 'scale(1)';
                            circle.style.opacity = '0';
                          });
                          setTimeout(() => circle.remove(), 500);
                        }}
                      >
                        <span className="text-white">Start Your Trial</span>
                      </Button>
                    )}
                    {plan.id !== 'basic' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                        onClick={() => window.location.href = '/trial'}
                        onMouseDown={(e) => {
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
                          requestAnimationFrame(() => {
                            circle.style.transform = 'scale(1)';
                            circle.style.opacity = '0';
                          });
                          setTimeout(() => circle.remove(), 500);
                        }}
                      >
                        <span className="text-white">Start Your Trial</span>
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
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
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
                    <a href="#features" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Features</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Pricing</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Integrations</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">API</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
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
                    <a href="/about" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">About</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Careers</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Contact</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
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
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Help Center</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Tutorials</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Community</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
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
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Blog</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Webinars</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block relative group">
                      <span className="relative z-10">Case Studies</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-1 -my-1"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="border-t border-gray-800 pt-12 pb-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-8">
                  Get Our App & Follow Us
                </h4>
                <div className="flex justify-center mb-12">
                  <SocialLinks className="animate-fade-in-up stagger-1" />
                </div>
                
                {/* Copyright Section integrated into footer */}
                <div className="border-t border-gray-700 pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-white/80 text-sm">
                      © 2025 BusinessFlow Pro. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                      <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                        <span className="relative z-10">Privacy Policy</span>
                        <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                      </a>
                      <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                        <span className="relative z-10">Terms of Service</span>
                        <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                      </a>
                      <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                        <span className="relative z-10">Cookie Policy</span>
                        <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

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
      
      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
}
