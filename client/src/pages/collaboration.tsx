import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  ArrowLeft,
  Users,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
  Heart,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Code,
  Headphones,
  Rocket,
  Brain,
  Target,
  Award,
  Globe,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/3d_1753268267691.png";

const CollaborationPage = () => {
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
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-letters, .animate-fade-in-up');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const collaborationFeatures = [
    {
      icon: Lightbulb,
      title: "Share Your Ideas",
      description: "As a subscriber, you have direct access to submit feature requests, workflow improvements, and business automation ideas through your dashboard. Your real-world challenges become our development priorities.",
      benefits: ["Priority review process", "Direct developer feedback", "Implementation timeline updates"],
      color: "from-amber-500 to-yellow-500",
      gradientBg: "from-amber-500/20 via-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description: "Work closely with our development team to design custom features that match your exact business needs. Your input shapes the final product to ensure it solves real problems effectively.",
      benefits: ["One-on-one consultations", "Custom prototyping", "Real-time progress tracking"],
      color: "from-blue-500 to-cyan-500",
      gradientBg: "from-blue-500/20 via-cyan-500/20 to-indigo-500/20"
    },
    {
      icon: Zap,
      title: "Free Implementation",
      description: "All approved customer suggestions are developed and deployed at no additional cost. Your ideas become features that enhance everyone's experience, creating a win-win ecosystem for all users.",
      benefits: ["Zero development fees", "Automatic updates", "Lifetime feature access"],
      color: "from-purple-500 to-pink-500",
      gradientBg: "from-purple-500/20 via-pink-500/20 to-rose-500/20"
    },
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      description: "As your business grows and evolves, so does our platform. This collaborative approach creates scalable solutions that adapt to industry changes and emerging business needs over time.",
      benefits: ["Scalable solutions", "Industry-specific tools", "Community-driven features"],
      color: "from-green-500 to-emerald-500",
      gradientBg: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
    }
  ];

  const teamSupport = [
    { 
      icon: Code, 
      title: "Dedicated Developers", 
      description: "Assigned team members who learn your business",
      color: "from-blue-500 to-purple-600"
    },
    { 
      icon: Headphones, 
      title: "24/7 Expert Support", 
      description: "Direct access to our development experts",
      color: "from-purple-500 to-pink-600"
    },
    { 
      icon: Rocket, 
      title: "Rapid Deployment", 
      description: "Ideas become features in record time",
      color: "from-green-500 to-blue-600"
    },
    { 
      icon: Brain, 
      title: "Strategic Consultation", 
      description: "Business optimization and workflow advice",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-20">
            {/* Left Side - Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Login
              </Button>
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
              <LanguageSelector />
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About Us</Link>
              <Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Pricing
              </Button>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact Us</Link>
            </div>

            {/* Right Side - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-white rounded-lg opacity-0 dark:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={logoPath} 
                    alt="BusinessFlow Pro" 
                    className="w-12 h-9 object-contain logo-simple"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2"
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
              <Link href="/about" className="block text-primary transition-colors">About Us</Link>
              <Link href="/#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => {
                  window.location.href = '/subscribe';
                  setShowMobileMenu(false);
                }}
                className="w-full text-left justify-start text-muted-foreground hover:text-primary"
              >
                Pricing
              </Button>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              
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

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
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
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Growing Together Through Collaboration
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12 tracking-tight">
              We're on a mission to empower businesses worldwide with intelligent automation, 
              seamless workflows, and data-driven insights that drive real growth.
            </p>

            {/* Highlighted Support Section */}
            <div className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 rounded-2xl border-2 border-blue-200 dark:border-blue-700 max-w-6xl mx-auto scroll-animate">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-foreground mb-6">
                Our Dedicated Team Provides Complete Support - Absolutely Free
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Once you're a subscriber, our experienced development team becomes your extended tech department. 
                We don't just build what you request - we collaborate with you to understand your workflow, analyze your 
                business processes, and design solutions that streamline your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {collaborationFeatures.map((feature, index) => (
              <Card key={index} className={`p-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 hover:shadow-3xl transition-all duration-700 group hover:scale-105 hover:-translate-y-2 hover:rotate-1 rounded-3xl animate-fade-in-up ${
                index === 0 ? 'border-amber-200 dark:border-amber-700 hover:border-amber-400' :
                index === 1 ? 'border-blue-200 dark:border-blue-700 hover:border-blue-400' :
                index === 2 ? 'border-purple-200 dark:border-purple-700 hover:border-purple-400' :
                'border-green-200 dark:border-green-700 hover:border-green-400'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl ${
                  feature.gradientBg
                }`}></div>
                
                {/* Floating Animation Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-bounce bg-gradient-to-r ${feature.color}`}></div>
                  <div className={`absolute bottom-6 left-4 w-2 h-2 rounded-full animate-ping bg-gradient-to-r ${feature.color}`}></div>
                  <div className={`absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full animate-pulse bg-gradient-to-r ${feature.color}`}></div>
                </div>
                
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <div className="relative mb-8">
                    <div className={`w-32 h-32 mx-auto rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <feature.icon className="w-16 h-16 text-white relative z-10 group-hover:animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Animated Title */}
                  <h3 className="text-3xl font-black text-foreground mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 group-hover:scale-105 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg group-hover:text-foreground transition-all duration-500 text-center">
                    {feature.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-4 group/item">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300 bg-gradient-to-r ${feature.color}`}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-foreground group-hover:scale-105 transition-transform duration-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_30px_rgba(59,130,246,0.3)]`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Support Section - Yellow Background */}
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
            <div className="text-center mb-16">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-tight mb-8 tracking-tight">
                <span className="inline-block animate-elegant-rise animation-delay-0">Expert</span>{' '}
                <span className="inline-block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-extrabold animate-elegant-rise animation-delay-200 hover:animate-gentle-bounce">Team</span>{' '}
                <span className="inline-block animate-elegant-rise animation-delay-400">Support</span>
              </h2>
              
              <p className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 leading-relaxed max-w-4xl mx-auto">
                Our dedicated development team becomes your extended tech department at no additional cost
              </p>
            </div>

            {/* Team Support Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamSupport.map((support, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white/95 dark:bg-gray-50/95 backdrop-blur-xl border-2 border-white/40 hover:border-white/60 hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-8 hover:rotate-1 rounded-3xl">
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl ${support.color}/20`}></div>
                  
                  {/* Floating Animation Elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="p-8 text-center relative z-10">
                    {/* Animated Icon Avatar */}
                    <div className="relative mb-8">
                      <div className={`w-32 h-32 mx-auto rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 flex items-center justify-center bg-gradient-to-br ${support.color}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        <support.icon className="w-16 h-16 text-white relative z-10 group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Animated Title */}
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 group-hover:scale-105">
                      {support.title}
                    </h3>
                    
                    {/* Animated Description */}
                    <p className="text-gray-700 dark:text-gray-800 leading-relaxed group-hover:text-gray-900 transition-all duration-500 group-hover:scale-105">
                      {support.description}
                    </p>
                  </div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-32 bg-white/50 dark:bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-animate">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Success Drives Our Innovation
              </span>
            </h2>
          </div>

          <Card className="p-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-200 dark:border-green-700 max-w-4xl mx-auto scroll-animate">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <Heart className="h-12 w-12 text-red-500" />
              <Star className="h-12 w-12 text-yellow-500" />
              <TrendingUp className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-3xl font-black text-foreground mb-6 text-center">
              Your Success Drives Our Innovation
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Every feature we develop based on customer feedback benefits the entire BusinessFlow Pro community. 
              When you succeed, we all succeed – creating a powerful ecosystem of continuous improvement and shared growth.
            </p>
            
            <div className="text-center space-y-6">
              <Button 
                onClick={() => window.location.href = '/subscribe'}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <span className="flex items-center">
                  Start Collaborating Today
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <p className="text-sm text-muted-foreground">
                Join 50,000+ businesses already growing with us
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default CollaborationPage;