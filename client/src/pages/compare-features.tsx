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
  TrendingUp
} from 'lucide-react';
import logoPath from "@assets/3d_1753268267691.png";

export default function CompareFeatures() {
  const [isVisible, setIsVisible] = useState(false);

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
      description: "Track and categorize business expenses with receipt scanning and automatic categorization"
    },
    {
      icon: CreditCard,
      title: "Debt Management",
      description: "Monitor outstanding debts, payment schedules, and automated follow-up systems"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Comprehensive reporting and insights to track business performance and growth"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Complete CRM system to manage client relationships, contacts, and communication history"
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src={logoPath} 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain logo-simple"
                style={{ filter: 'drop-shadow(0 0 0 transparent)', background: 'transparent' }}
              />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Contact and Login */}
            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  Contact Us
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Award className="w-4 h-4 mr-2" />
              One Platform • Multiple Plans
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Choose your <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">perfect fit</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              All plans include the complete BusinessFlow Pro feature suite. Only pricing differs based on team size and invoice volume to match your business needs.
            </p>

            {/* Why One Plan Philosophy */}
            <div className="max-w-5xl mx-auto mb-16">
              <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-green-50/50 to-blue-50/50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why One Plan Fits All?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">No Feature Restrictions</h3>
                          <p className="text-muted-foreground">Every business deserves access to professional tools. We believe limiting features based on price creates unnecessary barriers to growth.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Fair & Transparent</h3>
                          <p className="text-muted-foreground">Pay based on your actual usage - team size and invoice volume - not artificial feature limitations that don't reflect real value.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Scale Without Limits</h3>
                          <p className="text-muted-foreground">As your business grows, you won't hit feature walls. Your capabilities remain the same - only your capacity changes.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Customer-First Approach</h3>
                          <p className="text-muted-foreground">We built this platform to help businesses succeed, not to maximize revenue through feature restrictions. Your success is our success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 shadow-lg animate-bounce-gentle">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Plan Header */}
                <CardHeader className="text-center p-8 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 animate-gradient-shift"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                    <div className="text-5xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {plan.price}<span className="text-2xl font-normal text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">{plan.description}</p>
                    
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
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/20 transition-colors">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white animate-pulse-glow' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-purple-50 text-foreground border border-gray-300'
                    }`}
                    onClick={() => window.location.href = '/subscribe'}
                  >
                    {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Features Section */}
          <div className="text-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Complete Feature Set Included in <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Plan</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
                Every subscription tier includes our complete business management suite. No features are locked behind higher pricing tiers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-float-vertical opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional explanation */}
            <div className="mt-16">
              <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-orange-50/50 to-yellow-50/50 max-w-4xl mx-auto">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Full Access, Fair Pricing
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unlike other platforms that restrict features to force expensive upgrades, we believe every business should have access to professional tools. Our pricing scales with your usage, not your capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="glass-effect border-0 shadow-2xl bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 animate-gradient-shift"></div>
              <CardContent className="p-16 relative z-10">
                {/* Floating background elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-float"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full animate-float-vertical" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full animate-pulse-slow"></div>

                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce-gentle">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Transform Your <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business?</span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                  Join thousands of businesses already streamlining their operations with BusinessFlow Pro. Experience the full feature set with any plan you choose.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link href="/trial">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 animate-pulse-glow"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Start Free Trial
                    </Button>
                  </Link>
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
    </div>
  );
}