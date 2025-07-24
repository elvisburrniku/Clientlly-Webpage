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
  MapPin
} from "lucide-react";
import logoPath from "@assets/3d_1753268267691.png";

export default function About() {
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

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "150+", label: "Countries Served", icon: Globe },
    { number: "24/7", label: "Customer Support", icon: Heart }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge business solutions that stay ahead of industry trends."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our mission. We're dedicated to helping businesses of all sizes achieve their goals."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Bank-level security and complete data protection ensure your business information is always safe."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every feature we build is designed to deliver measurable results and improve your bottom line."
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden">
                <img 
                  src={logoPath} 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-110"
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
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                About BusinessFlow Pro
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              We're on a mission to empower businesses worldwide with intelligent automation, 
              seamless workflows, and data-driven insights that drive real growth.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <Card key={index} className={`p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 hover:shadow-2xl transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                  <stat.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 scroll-animate-letters">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="scroll-animate">
                  BusinessFlow Pro was born from a simple observation: small and medium businesses 
                  were drowning in manual processes, disconnected tools, and endless paperwork. 
                  Our founders, having experienced these challenges firsthand, knew there had to be a better way.
                </p>
                <p className="scroll-animate" style={{animationDelay: '200ms'}}>
                  Starting in 2019 with a small team of passionate entrepreneurs and engineers, 
                  we set out to build the business management platform we wished existed. Today, 
                  we're proud to serve over 50,000 businesses across 150+ countries, helping them 
                  automate workflows, gain insights, and focus on what matters most - growing their business.
                </p>
                <p className="scroll-animate" style={{animationDelay: '400ms'}}>
                  Every feature we build, every decision we make, is guided by one principle: 
                  making business operations so simple and powerful that success becomes inevitable.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Founded 2019
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </Badge>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-2 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-500 group">
                <div className="aspect-video rounded-xl overflow-hidden shadow-inner relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                    alt="Software development team in modern office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">Growing Every Day</h3>
                  <p className="text-muted-foreground">
                    From a startup dream to a global platform trusted by thousands
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-animate-letters">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 hover:shadow-2xl transition-all duration-500 group hover:scale-105 scroll-animate" style={{animationDelay: `${index * 200}ms`}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
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

      {/* Customer Collaboration Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-green-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-text-reveal">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Growing Together Through Collaboration
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
              Your business needs drive our development. With your ideas and feedback, we continuously improve our platform <span className="font-semibold text-green-600">free of charge</span> – because we believe the best growth happens when we grow together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {collaborationFeatures.map((feature, index) => (
              <Card key={index} className={`p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02] scroll-animate ${
                index === 0 ? 'border-green-200 dark:border-green-700 hover:border-green-400' :
                index === 1 ? 'border-blue-200 dark:border-blue-700 hover:border-blue-400' :
                index === 2 ? 'border-purple-200 dark:border-purple-700 hover:border-purple-400' :
                'border-orange-200 dark:border-orange-700 hover:border-orange-400'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-orange-500 to-orange-600'
                }`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  index === 0 ? 'text-foreground group-hover:text-green-600' :
                  index === 1 ? 'text-foreground group-hover:text-blue-600' :
                  index === 2 ? 'text-foreground group-hover:text-purple-600' :
                  'text-foreground group-hover:text-orange-600'
                }`}>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${
                        index === 0 ? 'text-green-500' :
                        index === 1 ? 'text-blue-500' :
                        index === 2 ? 'text-purple-500' :
                        'text-orange-500'
                      }`} />
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* How It Works Process */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-gradient-to-br from-green-200 to-blue-200 dark:from-green-700 dark:to-blue-700 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                How Our Collaboration Process Works
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From idea to implementation, here's how we work together to enhance your business operations
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Submit Your Ideas",
                  description: "Share your business needs, workflow challenges, or feature requests through your subscriber dashboard.",
                  icon: Lightbulb,
                  color: "green"
                },
                {
                  step: "02", 
                  title: "Expert Review",
                  description: "Our development team analyzes your suggestions and provides technical feasibility assessments within 48 hours.",
                  icon: Users,
                  color: "blue"
                },
                {
                  step: "03",
                  title: "Collaborative Design",
                  description: "Work directly with our engineers to refine specifications and create prototypes that match your exact needs.",
                  icon: Target,
                  color: "purple"
                },
                {
                  step: "04",
                  title: "Free Development",
                  description: "Approved features are developed and deployed to all users at no additional cost, enhancing everyone's experience.",
                  icon: Zap,
                  color: "orange"
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    process.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    process.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    process.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    'bg-gradient-to-br from-orange-500 to-orange-600'
                  }`}>
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className={`text-sm font-bold mb-2 ${
                    process.color === 'green' ? 'text-green-600' :
                    process.color === 'blue' ? 'text-blue-600' :
                    process.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    STEP {process.step}
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Heart className="h-8 w-8 text-red-500" />
                  <Star className="h-8 w-8 text-yellow-500" />
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Your Success Drives Our Innovation
                </h4>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  Every feature we develop based on customer feedback benefits the entire BusinessFlow Pro community. When you succeed, we all succeed – creating a powerful ecosystem of continuous improvement and shared growth.
                </p>
                <Button 
                  onClick={() => window.location.href = '/subscribe'}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Collaborating Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
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

          {/* Office Photos Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Software development team working together"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                  Collaborative Development
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Software engineers collaborating on cutting-edge business solutions
                </p>
              </div>
            </Card>

            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Developer coding on multiple monitors"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                  Code Excellence
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Advanced development workflows with modern tools and frameworks
                </p>
              </div>
            </Card>

            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Professional software design meeting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                  Strategic Design
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Product strategy sessions focused on user experience and innovation
                </p>
              </div>
            </Card>

            {/* Additional Office Photos */}
            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-orange-200 dark:border-orange-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Software engineer working on laptop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-orange-600 transition-colors duration-300">
                  Remote Development
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Distributed teams building world-class software solutions
                </p>
              </div>
            </Card>

            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-indigo-200 dark:border-indigo-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Clean coding workspace with laptop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-indigo-600 transition-colors duration-300">
                  Clean Code Environment
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Minimalist workspaces optimized for focused development
                </p>
              </div>
            </Card>

            <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-teal-200 dark:border-teal-700 hover:shadow-xl transition-all duration-500 group scroll-animate">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Data analysis and business intelligence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-foreground group-hover:text-teal-600 transition-colors duration-300">
                  Data-Driven Insights
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Analytics and business intelligence powering smart decisions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of businesses worldwide who trust BusinessFlow Pro to streamline 
            their operations and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Link href="/" className="text-blue-100 hover:text-white underline font-medium transition-colors duration-300">
              Learn more about our features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logoPath} alt="BusinessFlow Pro" className="w-10 h-8 object-contain" />
              <span className="text-xl font-bold">BusinessFlow Pro</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 BusinessFlow Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}