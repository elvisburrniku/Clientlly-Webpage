import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  ArrowDown,
  ChevronDown,
  Users,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import logoPath from "@assets/3d_1753268267691.png";

const CollaborationPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
            <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
              <Button variant="ghost" onClick={() => window.location.href = "/about"} className="text-gray-600 dark:text-gray-300 hover:text-foreground font-medium">
                About Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/#features"} className="text-gray-600 dark:text-gray-300 hover:text-foreground font-medium">
                Features
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/subscribe"} className="text-gray-600 dark:text-gray-300 hover:text-foreground font-medium">
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/contact"} className="text-gray-600 dark:text-gray-300 hover:text-foreground font-medium">
                Contact Us
              </Button>
            </div>

            {/* Right Side - Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img 
                src={logoPath} 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 transition-all duration-500 hover:scale-110"
              />
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <Button variant="ghost" onClick={() => window.location.href = "/about"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                About Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/#features"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                Features
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/subscribe"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/contact"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                Contact Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                Login
              </Button>
              <Button onClick={() => window.location.href = '/subscribe'} className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Buy Now
              </Button>
              <Button onClick={() => window.location.href = "/trial"} className="w-full bg-green-600 text-white hover:bg-green-700">
                Start Your Trial
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Growing Together Through Collaboration
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your business needs drive our development. When you subscribe, you get a dedicated team 
            committed to building features that solve your challenges.
          </p>
          
          {/* Animated Arrow Down */}
          <div className="mt-12">
            <div className="flex justify-center">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="animate-bounce hover:animate-pulse transition-all duration-300 cursor-pointer"
              >
                <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4 leading-tight tracking-tight">
              How We Collaborate
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process, powerful results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground">Share Your Ideas</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Submit feature requests and workflow improvements through your dashboard. 
                Your real-world challenges become our development priorities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-muted-foreground">Priority review process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-muted-foreground">Direct developer feedback</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground">Free Implementation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                All approved suggestions are developed and deployed at no additional cost. 
                Your ideas become features for everyone.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-muted-foreground">Zero development fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-muted-foreground">Professional quality</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Animated Arrow Navigation */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => scrollToSection('expert-support')}
              className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="animate-pulse hover:animate-bounce">
                <ArrowDown className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm text-muted-foreground hover:text-blue-600">Continue to Expert Support</span>
              <div className="animate-pulse hover:animate-bounce">
                <ArrowDown className="w-6 h-6 text-purple-500" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Team Support Section - Yellow Background */}
      <section id="expert-support" className="relative w-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-4 tracking-tight">
                <span>Expert</span>{' '}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-extrabold">Team</span>{' '}
                <span>Support</span>
              </h2>
              
              <p className="text-lg text-gray-800 dark:text-gray-100 max-w-3xl mx-auto">
                Our dedicated development team becomes your extended tech department at no additional cost
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/95 dark:bg-gray-50/95 backdrop-blur-xl border-0 shadow-lg rounded-2xl">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl shadow-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-gray-800 mb-2">
                    Dedicated Developers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-800 leading-relaxed text-sm">
                    Assigned team members who learn your business and provide ongoing technical support
                  </p>
                </div>
              </Card>

              <Card className="bg-white/95 dark:bg-gray-50/95 backdrop-blur-xl border-0 shadow-lg rounded-2xl">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl shadow-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-gray-800 mb-2">
                    Rapid Implementation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-800 leading-relaxed text-sm">
                    Fast development and deployment of your custom features with professional quality
                  </p>
                </div>
              </Card>
            </div>
            
            {/* Animated Flow Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => scrollToSection('final-cta')}
                className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="animate-bounce delay-0 hover:animate-pulse">
                  <ArrowRight className="w-5 h-5 text-amber-600" />
                </div>
                <div className="animate-bounce delay-200 hover:animate-pulse">
                  <ArrowRight className="w-5 h-5 text-orange-600" />
                </div>
                <div className="animate-bounce delay-400 hover:animate-pulse">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-sm text-gray-800 dark:text-gray-100 font-medium hover:text-gray-900 dark:hover:text-white">Ready to Start?</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-0 shadow-lg">
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4 leading-tight tracking-tight">
              Your Success Drives Our Innovation
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every feature we develop based on customer feedback benefits the entire BusinessFlow Pro community. 
              When you succeed, we all succeed.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CollaborationPage;