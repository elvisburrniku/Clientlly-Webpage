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

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$29",
      users: "Up to 3 users",
      invoices: "100 invoices/month",
      description: "Perfect for small teams and freelancers",
      popular: false,
      features: [
        "All core features included",
        "3 team members",
        "100 invoices per month",
        "Basic reporting",
        "Email support"
      ]
    },
    {
      id: "professional", 
      name: "Professional",
      price: "$79",
      users: "Up to 10 users",
      invoices: "500 invoices/month",
      description: "Best for growing businesses",
      popular: true,
      features: [
        "All core features included",
        "10 team members",
        "500 invoices per month",
        "Advanced reporting & analytics",
        "Priority support",
        "Custom branding"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise", 
      price: "$159",
      users: "Unlimited users",
      invoices: "Unlimited invoices",
      description: "For large organizations",
      popular: false,
      features: [
        "All core features included",
        "Unlimited team members",
        "Unlimited invoices",
        "Premium reporting suite",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

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
            <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-green-50/50 to-blue-50/50 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight">
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
              </CardContent>
            </Card>
          </div>

          {/* Plans Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Plan Header */}
                <CardHeader className="text-center p-8 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black text-foreground mb-2 tracking-tight">{plan.name}</CardTitle>
                    <div className="text-5xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {plan.price}<span className="text-2xl font-normal text-muted-foreground">/month</span>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">{plan.description}</p>
                    
                    {/* Usage Limits */}
                    <div className="space-y-3 bg-white/30 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-center space-x-3">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-foreground">{plan.users}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <FileText className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-foreground">{plan.invoices}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {/* Plan Features */}
                <CardContent className="p-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => {
                      // Parse markdown bold text **text** and render as bold
                      const parts = feature.split(/(\*\*.*?\*\*)/g);
                      return (
                        <div key={idx} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/20 transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground font-medium leading-relaxed">
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
                        </div>
                      );
                    })}
                  </div>

                  <Button 
                    className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    onClick={() => window.location.href = '/subscribe'}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Features Overview */}
          <div className="mb-20">
            <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
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
                    <Card key={index} className="group glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional explanation */}
          <div className="mt-16">
            <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-orange-50/50 to-yellow-50/50 max-w-4xl mx-auto">
              <CardContent className="p-10 text-center">
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
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="glass-effect border-0 shadow-2xl bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
              <CardContent className="p-16 relative z-10">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}