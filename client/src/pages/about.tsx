import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Code,
  HeadphonesIcon,
  Rocket,
  Compass,
  Crown,
  ChevronRight,
  Play,
  Brain,
  Infinity,
  FileText
} from "lucide-react";
import logoPath from "@assets/3d_1753268267691.png";

const AboutPage = () => {
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
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-letters');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const heroStats = [
    { number: "50K+", label: "Businesses Trust Us", icon: Building2, color: "from-blue-500 to-cyan-500" },
    { number: "2.5M+", label: "Invoices Processed", icon: FileText, color: "from-purple-500 to-pink-500" },
    { number: "120+", label: "Countries Worldwide", icon: Globe, color: "from-green-500 to-emerald-500" },
    { number: "99.9%", label: "Uptime Reliability", icon: Shield, color: "from-orange-500 to-red-500" }
  ];

  const principles = [
    {
      icon: Rocket,
      title: "Innovation at Heart",
      description: "We constantly push the boundaries of what's possible, creating tomorrow's business solutions today.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Every feature is built with our community in mind, ensuring real value for real businesses.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Crown,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from code quality to customer support.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "Your success is our success. We're here to support you every step of your business journey.",
      color: "from-green-500 to-teal-600"
    }
  ];

  const collaborationFeatures = [
    {
      icon: Lightbulb,
      title: "Share Your Ideas",
      description: "Submit feature requests, workflow improvements, and business automation ideas directly through your dashboard.",
      benefits: ["Priority review process", "Direct developer feedback", "Implementation timeline updates"]
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description: "Work closely with our development team to design custom features that match your exact business needs.",
      benefits: ["One-on-one consultations", "Custom prototyping", "Real-time progress tracking"]
    },
    {
      icon: Zap,
      title: "Free Implementation",
      description: "All approved customer suggestions are developed and deployed at no additional cost to enhance everyone's experience.",
      benefits: ["Zero development fees", "Automatic updates", "Lifetime feature access"]
    },
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      description: "As your business grows and evolves, so does our platform - creating a win-win ecosystem for all users.",
      benefits: ["Scalable solutions", "Industry-specific tools", "Community-driven features"]
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former McKinsey consultant with 15+ years in business automation",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer specializing in scalable business platforms",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "Product strategy expert from Salesforce with deep SMB insights",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Infrastructure architect with experience at AWS and Microsoft",
      image: "/api/placeholder/300/300"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to simplify business operations for small and medium enterprises."
    },
    {
      year: "2020",
      title: "First Milestone",
      description: "Reached 1,000 customers and launched our comprehensive invoicing platform."
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description: "Expanded to 25 countries and introduced advanced reporting and analytics."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered insights and automated business intelligence features."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reached 50,000+ customers across 150+ countries worldwide."
    },
    {
      year: "2024",
      title: "Enterprise Ready",
      description: "Introduced enterprise features and achieved SOC 2 Type II compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden">
                <img 
                  src={logoPath} 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain logo-simple"
                />
              </div>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/calculator" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                About BusinessFlow Pro
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12 tracking-tight">
              We're on a mission to empower businesses worldwide with intelligent automation, 
              seamless workflows, and data-driven insights that drive real growth.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {heroStats.map((stat, index) => (
                <Card key={index} className={`p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-4 h-4 animate-ping delay-0">
            <Sparkles className="w-4 h-4 text-blue-500/40" />
          </div>
          <div className="absolute top-48 right-24 w-6 h-6 animate-ping delay-1000">
            <Star className="w-6 h-6 text-purple-500/40" />
          </div>
          <div className="absolute bottom-40 left-32 w-3 h-3 animate-ping delay-2000">
            <Heart className="w-3 h-3 text-pink-500/40" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-8 scroll-animate-letters tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed scroll-animate">
              From a simple idea to empowering businesses worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">The Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Born from the frustration of managing business operations with disconnected tools and manual processes. We envisioned a world where technology truly serves business growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-purple-600 transition-colors duration-300">The Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, over 50,000 businesses across 120+ countries trust BusinessFlow Pro to streamline their operations, automate workflows, and accelerate growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-white/40 hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden m-6 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                    alt="Modern business team collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Growth Rate</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          +300%
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">Empowering Growth</h3>
                  <p className="text-muted-foreground">
                    From startup dreams to enterprise solutions, we've grown alongside our community
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-8 scroll-animate-letters tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Drives Us
              </span>
            </h2>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed scroll-animate">
              Four core principles that shape every decision, every feature, and every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((value, index) => (
              <Card key={index} className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 group hover:scale-105 scroll-animate" style={{animationDelay: `${index * 200}ms`}}>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
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
                            <HeadphonesIcon className="w-6 h-6 text-white" />
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
                      
                      {/* Enhanced CTA */}
                      <div className="pt-2">
                        <button 
                          onClick={() => window.location.href = '/collaboration'}
                          className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 rounded-2xl py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-500/50 cursor-pointer"
                        >
                          <span className="flex items-center justify-center">
                            Join Our Community
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 hover:translate-x-1" />
                          </span>
                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-600 text-center mt-3 font-medium">
                          Join 50,000+ growing businesses
                        </p>
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

      {/* Timeline Section */}
      <section className="py-32 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-animate-letters">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate">
              Key milestones that shaped BusinessFlow Pro into what it is today
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                    {item.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-bold">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-text-reveal">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              The passionate innovators behind BusinessFlow Pro's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1494790108755-2616814b3388' : index === 1 ? '1507003211169-0a1dd7228f2d' : index === 2 ? '1573496359142-b8c6c46a7ef4' : '1472099645785-5658abf4ff4e'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80`}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
