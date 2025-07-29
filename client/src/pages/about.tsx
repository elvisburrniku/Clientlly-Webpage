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
  FileText,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SocialLinks } from "@/components/ui/animated-icons";
import Footer from "@/components/Footer";
import logoPath from "@assets/3d_1753268267691.png";

const AboutPage = () => {
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
      {/* Background Grid Pattern - Fading grid from hero through stats section */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -z-10" style={{ height: '200vh' }}>
        <div className="absolute inset-0 opacity-100"
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(128,128,128,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.15) 1px, transparent 1px)',
               backgroundSize: '24px 24px',
               maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)'
             }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
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
              <Link href="/about" className="text-lg text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                Pricing
              </Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 font-bold">Contact Us</Link>
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
                onClick={() => window.location.href = '/subscribe'}
                className="px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600 font-medium focus:outline-none focus:ring-0 focus:border-none active:outline-none"
                style={{outline: 'none', boxShadow: 'none'}}
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 font-medium focus:outline-none focus:ring-0 focus:border-none active:outline-none"
                style={{outline: 'none', boxShadow: 'none'}}
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
              <Link href="/about" className="block text-lg text-primary transition-colors font-bold">About Us</Link>
              <Link href="/#features" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">Features</Link>
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
              <Link href="/contact" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">Contact Us</Link>
              
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
                    window.location.href = '/subscribe';
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-medium focus:outline-none focus:ring-0 focus:border-none active:outline-none"
                  style={{outline: 'none', boxShadow: 'none'}}
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-purple-600 text-white hover:bg-purple-700 font-medium focus:outline-none focus:ring-0 focus:border-none active:outline-none"
                  style={{outline: 'none', boxShadow: 'none'}}
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

      {/* Hero Section with Yellow Background */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400">
        {/* Floating Sparkle Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-12 left-[8%] w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-20 right-[12%] w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-16 left-[15%] w-2.5 h-2.5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-12 right-[20%] w-1 h-1 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-16 left-[75%] w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-20 right-[8%] w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-32 left-[45%] w-1 h-1 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute bottom-32 right-[40%] w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '2.1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-8 tracking-tight leading-tight animate-professional-fade">
              About <span className="animate-subtle-gradient">BusinessFlow Pro</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-black max-w-5xl mx-auto leading-relaxed mb-12 tracking-tight">
              We're on a mission to empower businesses worldwide with intelligent automation, 
              seamless workflows, and data-driven insights that drive real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <Card key={index} className={`p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
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
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-6 animate-professional-fade tracking-tight leading-tight">
              Our <span className="animate-subtle-gradient">Journey</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate">
              From a simple idea to empowering businesses worldwide
            </p>
          </div>
          
          {/* Compact Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-white/20 hover:shadow-3xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 overflow-hidden relative">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${
                  index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                  index % 3 === 1 ? 'from-purple-500 to-pink-600' :
                  'from-pink-500 to-blue-600'
                }`}></div>
                
                <div className="relative z-10">
                  {/* Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`px-4 py-2 font-black text-xl ${
                      index % 3 === 0 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      index % 3 === 1 ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                    }`}>
                      {item.year}
                    </Badge>
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                      index % 3 === 1 ? 'from-purple-500 to-pink-600' :
                      'from-pink-500 to-blue-600'
                    } rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400/30 rounded-full animate-ping group-hover:animate-bounce"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse group-hover:animate-spin"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
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
              <Card key={index} className="p-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 hover:shadow-3xl transition-all duration-700 group hover:scale-110 hover:-translate-y-4 scroll-animate overflow-hidden relative" style={{animationDelay: `${index * 200}ms`}}>
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${value.color}"></div>
                
                <div className="text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                    <value.icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/30 rounded-full animate-ping group-hover:animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse group-hover:animate-spin"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Together Section - HoneyBook Style */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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
                  <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 tracking-tight animate-professional-fade">
                    Let's <span className="animate-subtle-gradient">grow</span> together
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

      {/* Meet Our Team Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">

        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-6 animate-text-reveal tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              The passionate innovators driving BusinessFlow Pro's success story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-white/20 hover:border-white/60 hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-8 hover:rotate-1 rounded-3xl">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl ${
                  index === 0 ? 'from-blue-500/20 via-purple-500/20 to-blue-600/20' :
                  index === 1 ? 'from-purple-500/20 via-pink-500/20 to-purple-600/20' :
                  index === 2 ? 'from-green-500/20 via-blue-500/20 to-green-600/20' :
                  'from-orange-500/20 via-red-500/20 to-orange-600/20'
                }`}></div>
                
                {/* Floating Animation Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-bounce ${
                    index === 0 ? 'bg-blue-400' :
                    index === 1 ? 'bg-purple-400' :
                    index === 2 ? 'bg-green-400' :
                    'bg-orange-400'
                  }`}></div>
                  <div className={`absolute bottom-6 left-4 w-2 h-2 rounded-full animate-ping ${
                    index === 0 ? 'bg-purple-400' :
                    index === 1 ? 'bg-pink-400' :
                    index === 2 ? 'bg-blue-400' :
                    'bg-red-400'
                  }`}></div>
                  <div className={`absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full animate-pulse ${
                    index === 0 ? 'bg-blue-300' :
                    index === 1 ? 'bg-purple-300' :
                    index === 2 ? 'bg-green-300' :
                    'bg-orange-300'
                  }`}></div>
                </div>
                
                <div className="p-8 text-center relative z-10">
                  {/* Animated Icon Avatar */}
                  <div className="relative mb-8">
                    <div className={`w-32 h-32 mx-auto rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 flex items-center justify-center bg-gradient-to-br ${
                      index === 0 ? 'from-blue-500 to-purple-600' :
                      index === 1 ? 'from-purple-500 to-pink-600' :
                      index === 2 ? 'from-green-500 to-blue-600' :
                      'from-orange-500 to-red-600'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <div className="relative text-4xl font-black text-white group-hover:animate-pulse">
                        {member.name.split(' ').map(name => name[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Animated Role Badge */}
                    <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-2xl text-sm font-black text-white shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 bg-gradient-to-r ${
                      index === 0 ? 'from-blue-600 to-purple-700' :
                      index === 1 ? 'from-purple-600 to-pink-700' :
                      index === 2 ? 'from-green-600 to-blue-700' :
                      'from-orange-600 to-red-700'
                    }`}>
                      {member.role.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Animated Name */}
                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 group-hover:scale-105">
                    {member.name}
                  </h3>
                  
                  {/* Animated Role */}
                  <div className={`text-lg font-bold mb-4 transition-all duration-500 group-hover:scale-105 ${
                    index === 0 ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700' :
                    index === 1 ? 'text-purple-600 dark:text-purple-400 group-hover:text-purple-700' :
                    index === 2 ? 'text-green-600 dark:text-green-400 group-hover:text-green-700' :
                    'text-orange-600 dark:text-orange-400 group-hover:text-orange-700'
                  }`}>
                    {member.role}
                  </div>
                  
                  {/* Animated Bio */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-all duration-500 group-hover:scale-105">
                    {member.bio}
                  </p>
                </div>
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  index === 0 ? 'shadow-[0_0_30px_rgba(59,130,246,0.5)]' :
                  index === 1 ? 'shadow-[0_0_30px_rgba(147,51,234,0.5)]' :
                  index === 2 ? 'shadow-[0_0_30px_rgba(34,197,94,0.5)]' :
                  'shadow-[0_0_30px_rgba(249,115,22,0.5)]'
                }`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Trust Your Business CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Floating sparkles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/80 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-900"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 drop-shadow-lg animate-professional-fade">
            Ready to Trust Your Business with Us?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
            Join thousands of businesses who have streamlined their operations with BusinessFlow Pro.
            Experience enterprise-grade security, expert support, and seamless migration - all backed by our success guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/subscribe"}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default AboutPage;
