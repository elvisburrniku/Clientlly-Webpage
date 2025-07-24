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
  MapPin
} from "lucide-react";
import logoPath from "@assets/3d_1753268267691.png";

export default function Collaboration() {
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

  const collaborationFeatures = [
    {
      icon: Lightbulb,
      title: "Share Your Ideas",
      description: "As a subscriber, you have direct access to submit feature requests, workflow improvements, and business automation ideas through your dashboard. Your real-world challenges become our development priorities. Our team doesn't just take requests - we actively research your industry, understand your pain points, and propose innovative solutions you might not have considered.",
      benefits: ["Priority review process", "Direct developer feedback", "Implementation timeline updates"],
      color: "green"
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description: "Work closely with our development team to design custom features that match your exact business needs. Your input shapes the final product to ensure it solves real problems effectively. We assign dedicated developers to your project who learn your business inside and out, providing ongoing consultation and refinement until the solution perfectly fits your workflow.",
      benefits: ["One-on-one consultations", "Custom prototyping", "Real-time progress tracking"],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Free Implementation",
      description: "All approved customer suggestions are developed and deployed at no additional cost. Your ideas become features that enhance everyone's experience, creating a win-win ecosystem for all users. We cover everything: coding, testing, deployment, documentation, and ongoing maintenance - all included in your subscription with no hidden fees or development charges.",
      benefits: ["Zero development fees", "Automatic updates", "Lifetime feature access"],
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      description: "As your business grows and evolves, so does our platform. This collaborative approach creates scalable solutions that adapt to industry changes and emerging business needs over time.",
      benefits: ["Scalable solutions", "Industry-specific tools", "Community-driven features"],
      color: "orange"
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
      <nav className="relative z-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-lg opacity-0 dark:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={logoPath} 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110 filter drop-shadow-lg"
              />
            </div>
          </Link>
          
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 animate-text-reveal">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Growing Together Through Collaboration
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delayed">
            Your business needs drive our development. When you subscribe, you become part of our innovation process – 
            helping shape features that benefit the entire community while solving your unique challenges.
          </p>

          {/* Highlighted Support Section */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 rounded-2xl border-2 border-blue-200 dark:border-blue-700 max-w-6xl mx-auto scroll-animate">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🚀 Our Dedicated Team Provides Complete Support - Absolutely Free
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Once you're a subscriber, our experienced development team becomes your extended tech department. 
              We don't just build what you request - we collaborate with you to understand your workflow, analyze your 
              business processes, and design solutions that streamline your operations. From initial consultation to 
              final implementation, every hour of development work is included in your subscription at no extra cost. 
              Your success directly contributes to making our platform better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {collaborationFeatures.map((feature, index) => (
              <Card key={index} className={`p-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02] scroll-animate ${
                feature.color === 'green' ? 'border-green-200 dark:border-green-700 hover:border-green-400' :
                feature.color === 'blue' ? 'border-blue-200 dark:border-blue-700 hover:border-blue-400' :
                feature.color === 'purple' ? 'border-purple-200 dark:border-purple-700 hover:border-purple-400' :
                'border-orange-200 dark:border-orange-700 hover:border-orange-400'
              }`}>
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                  feature.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  feature.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  feature.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-orange-500 to-orange-600'
                }`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                  feature.color === 'green' ? 'text-foreground group-hover:text-green-600' :
                  feature.color === 'blue' ? 'text-foreground group-hover:text-blue-600' :
                  feature.color === 'purple' ? 'text-foreground group-hover:text-purple-600' :
                  'text-foreground group-hover:text-orange-600'
                }`}>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {feature.description}
                </p>
                
                <div className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-4">
                      <CheckCircle className={`h-6 w-6 ${
                        feature.color === 'green' ? 'text-green-500' :
                        feature.color === 'blue' ? 'text-blue-500' :
                        feature.color === 'purple' ? 'text-purple-500' :
                        'text-orange-500'
                      }`} />
                      <span className="text-base font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
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
            <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
              Your Success Drives Our Innovation
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Every feature we develop based on customer feedback benefits the entire BusinessFlow Pro community. 
              When you succeed, we all succeed – creating a powerful ecosystem of continuous improvement and shared growth. 
              Our team's commitment goes beyond software development - we become your technology partners, invested in your 
              long-term success and growth.
            </p>
            
            <div className="text-center space-y-4">
              <Button 
                onClick={() => window.location.href = '/#pricing-section'}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Collaborating Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Join thousands of businesses already growing with us
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 dark:bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={logoPath} 
              alt="BusinessFlow Pro" 
              className="w-12 h-9 filter brightness-110"
            />
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 BusinessFlow Pro. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}