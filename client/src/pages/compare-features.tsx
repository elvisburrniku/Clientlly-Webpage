import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ArrowLeft, 
  FileText, 
  Receipt, 
  CreditCard, 
  BarChart3, 
  Users, 
  Building2,
  Package, 
  Clock, 
  Calendar, 
  RefreshCw,
  Star,
  CheckCircle,
  Zap,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';
import Footer from "@/components/Footer";
import { LanguageSelector } from "@/components/LanguageSelector";
import logoPath from "@assets/3d_1753268267691.png";

export default function CompareFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);



  const coreFeatures = [
    {
      icon: FileText,
      title: "Professional Invoicing",
      description: "Create unlimited professional invoices with custom branding and automated payment reminders"
    },
    {
      icon: Receipt,
      title: "Smart Expense Tracking",
      description: "Track business expenses with automated categorization and receipt scanning"
    },
    {
      icon: CreditCard,
      title: "Debt Management",
      description: "Monitor and manage business debts with payment scheduling and automated alerts"
    },
    {
      icon: BarChart3,
      title: "Insights & Reports",
      description: "Generate comprehensive business reports with advanced analytics and forecasting"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Comprehensive CRM with client profiles, communication history, and project tracking"
    },
    {
      icon: Building2,
      title: "Vendor Management",
      description: "Track suppliers, purchase orders, and vendor performance analytics"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with low-stock alerts and automated reordering"
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description: "GPS-enabled time tracking with team scheduling and productivity analytics"
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "AI-powered scheduling with team coordination and automated meeting planning"
    },
    {
      icon: RefreshCw,
      title: "Easy Migration",
      description: "Seamless data import from popular business platforms with guided setup process"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src={logoPath}
                alt="BusinessFlow Pro Logo" 
                className="w-12 h-9 object-contain hover:scale-110 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <div className="relative group">
                <button className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center">
                  Features
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link href="/subscribe" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <Link href="/login">
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">
                  Login
                </Button>
              </Link>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/subscribe'}
                className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
                <Link 
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  About Us
                </Link>
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-md">
                  Features
                </button>
                <Link 
                  href="/subscribe"
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Contact Us
                </Link>
                <div className="px-3 py-2">
                  <LanguageSelector />
                </div>
              </div>
              <div className="px-2 py-3 border-t border-border bg-gray-50 space-y-2">
                <Button 
                  variant="ghost"
                  onClick={() => {
                    window.location.href = '/login';
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-foreground hover:text-primary hover:bg-white font-medium"
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Full-width Yellow background section */}
      <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden py-16 mt-16">
        {/* Yellow background sparkles */}
        <div className="absolute top-8 right-12 w-4 h-4 animate-ping delay-0">
          <div className="w-4 h-4 text-amber-600/40">✨</div>
        </div>
        <div className="absolute bottom-8 left-16 w-6 h-6 animate-ping delay-1000">
          <div className="w-6 h-6 text-orange-600/50">✨</div>
        </div>
        <div className="absolute top-8 right-24 w-3 h-3 animate-ping delay-2000">
          <div className="w-3 h-3 text-yellow-600/40">✨</div>
        </div>
        <div className="absolute bottom-8 left-20 w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse delay-1500"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full text-sm font-medium text-gray-800 mb-6">
            <Award className="w-4 h-4 mr-2 text-gray-700" />
            One Platform • Multiple Plans
          </div>
          
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight mb-8 tracking-tight drop-shadow-lg">
            Choose your perfect fit
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-800 max-w-5xl mx-auto leading-relaxed drop-shadow-sm mb-0">
            All plans include the complete BusinessFlow Pro feature suite. Only pricing differs based on team size and invoice volume to match your business needs.
          </p>
        </div>
      </div>

      <div className="px-4 pt-8">
        <div className="max-w-7xl mx-auto">
          {/* Why One Plan Philosophy */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="p-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight text-center">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why One Plan Fits All?
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3">No Feature Restrictions</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">Every business deserves access to professional tools. We believe limiting features based on price creates unnecessary barriers to growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3">Fair & Transparent</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">Pay based on your actual usage - team size and invoice volume - not artificial feature limitations that don't reflect real value.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3">Scale Without Limits</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">As your business grows, you won't hit feature walls. Your capabilities remain the same - only your capacity changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3">Customer-First Approach</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">We built this platform to help businesses succeed, not to maximize revenue through feature restrictions. Your success is our success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Core Features Overview */}
          <div className="mb-20">
            <div className="p-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight text-center">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  Complete Business Suite Included
                </span>
              </h2>
              <p className="text-2xl text-muted-foreground text-center mb-10 leading-relaxed max-w-4xl mx-auto">
                Every plan includes our complete feature set. No restrictions, no limitations - just the tools your business needs to succeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreFeatures.map((feature, index) => (
                  <div key={index} className="group p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional explanation */}
          <div className="mt-16">
            <div className="p-10 text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-black text-foreground mb-4 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
                  Full Access, Fair Pricing
                </span>
              </h3>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Unlike other platforms that restrict features to force expensive upgrades, we believe every business should have access to professional tools. Our pricing scales with your usage, not your capabilities.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="p-16">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Zap className="h-12 w-12 text-white" />
              </div>
              
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              
              <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
                Join thousands of businesses already streamlining their operations with BusinessFlow Pro. Experience the full feature set with any plan you choose.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Button 
                    size="lg" 
                    onClick={() => window.location.href = "/trial"}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 animate-pulse-glow"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Button>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-purple-600 hover:text-purple-600 px-10 py-5 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Full feature access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}