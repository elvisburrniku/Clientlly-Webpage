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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-6 scroll-animate">
              <Award className="w-4 h-4 mr-2" />
              One Platform • Multiple Plans
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 scroll-animate">
              Choose your <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">perfect fit</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed scroll-animate mb-8">
              All plans include the complete BusinessFlow Pro feature suite. Only pricing differs based on team size and invoice volume to match your business needs.
            </p>
          </div>

          {/* Plans Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {plan.price}<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{plan.users}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">{plan.invoices}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => window.location.href = '/subscribe'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Features Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 scroll-animate">
              Complete Feature Set Included in <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 scroll-animate">
              All plans include the complete BusinessFlow Pro suite. Choose based on your team size and invoice volume, not feature limitations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center scroll-animate">
            <Card className="glass-effect border-0 shadow-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join thousands of businesses already streamlining their operations with BusinessFlow Pro. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/trial">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}