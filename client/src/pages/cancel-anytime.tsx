import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Calendar, CreditCard, Shield, Users, Clock, Zap, Star, Menu, X, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';

const CancelAnytimePage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cancelFeatures = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "No Long-Term Contracts",
      description: "Month-to-month billing means you're never locked into a lengthy commitment.",
      benefits: ["Cancel at any time", "No early termination fees", "Flexible billing cycles"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Simple Cancellation Process",
      description: "Cancel your subscription with just a few clicks - no phone calls or complex procedures required.",
      benefits: ["Self-service cancellation", "Instant processing", "No hidden requirements"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Export & Backup",
      description: "Download all your business data before canceling to ensure you never lose important information.",
      benefits: ["Complete data export", "Multiple file formats", "30-day grace period"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reactivation Anytime",
      description: "Changed your mind? Reactivate your account and restore all your data instantly.",
      benefits: ["One-click reactivation", "Data restoration", "Same account settings"]
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Access Account Settings",
      description: "Log into your dashboard and navigate to Account Settings > Billing."
    },
    {
      step: "2", 
      title: "Click Cancel Subscription",
      description: "Find the 'Cancel Subscription' button and click it to start the process."
    },
    {
      step: "3",
      title: "Export Your Data",
      description: "Download all your business data in your preferred format before confirming."
    },
    {
      step: "4",
      title: "Confirm Cancellation",
      description: "Review the cancellation details and confirm to complete the process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain logo-simple"
                />
              </div>
            </Link>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
              <Button variant="ghost" onClick={() => window.location.href = "/about"} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                About Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/#features"} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                Features
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/subscribe"} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/contact"} className="text-lg text-gray-600 dark:text-gray-300 hover:text-foreground font-bold">
                Contact Us
              </Button>
            </div>

            {/* Right Side - Action Buttons */}
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
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
              <LanguageSelector />
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
              <Button variant="ghost" onClick={() => window.location.href = "/about"} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                About Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/#features"} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                Features
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/subscribe"} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/contact"} className="w-full justify-start text-lg text-gray-600 dark:text-gray-300 font-bold">
                Contact Us
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="w-full justify-start text-gray-600 dark:text-gray-300">
                Login
              </Button>
              <Button onClick={() => window.location.href = '/subscribe'} className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Buy Now
              </Button>
              <Button onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")} className="w-full bg-green-600 text-white hover:bg-green-700">
                Start Your Trial
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 rounded-full text-sm font-bold text-orange-700 mb-8">
              <AlertCircle className="w-4 h-4 mr-2" />
              No Commitment Required
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight leading-tight">
              <span className="animate-gradient-x bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                Cancel Anytime
              </span>
              <br />
              <span className="text-foreground">No Questions Asked</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              We believe in earning your business every month. That's why you can cancel your subscription 
              at any time with just a few clicks - no phone calls, no contracts, no hassle.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-orange-800 dark:text-orange-300">Cancel instantly</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <Shield className="h-5 w-5 text-red-600" />
                <span className="font-bold text-red-800 dark:text-red-300">No cancellation fees</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Zap className="h-5 w-5 text-purple-600" />
                <span className="font-bold text-purple-800 dark:text-purple-300">Keep your data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              True <span className="animate-gradient-x bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">Flexibility</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cancellation policy is designed with your business needs in mind. No surprises, no complications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cancelFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-6 text-white">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Cancel */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              How to <span className="animate-gradient-x bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">Cancel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Canceling your subscription is simple and straightforward. Follow these easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Try Risk-Free <span className="animate-gradient-x bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">Today</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Start your free trial knowing you can cancel anytime without any complications. 
                Experience the full power of BusinessFlow Pro with complete peace of mind.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "/subscribe"}
                  className="border-2 border-gray-300 hover:border-orange-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  View Pricing Plans
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancelAnytimePage;