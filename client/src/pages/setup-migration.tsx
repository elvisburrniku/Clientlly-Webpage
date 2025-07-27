import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Download, Upload, Database, FileText, Users, Clock, Shield, Zap, Star, Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';

const SetupMigrationPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const migrationSteps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Data Import",
      description: "Upload your existing business data from any platform - QuickBooks, Excel, Xero, or any other system.",
      features: ["Automated data mapping", "Error detection & correction", "Data validation & cleanup"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "System Setup",
      description: "Our experts configure your BusinessFlow Pro account with your specific business requirements.",
      features: ["Custom chart of accounts", "Tax settings configuration", "User permissions setup"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Comprehensive onboarding for your team to ensure everyone knows how to use the platform effectively.",
      features: ["Live training sessions", "Video tutorials", "Documentation & guides"]
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Go Live",
      description: "Launch your new system with confidence, knowing everything is properly configured and tested.",
      features: ["Final system testing", "Data verification", "Ongoing support"]
    }
  ];

  const supportedPlatforms = [
    { name: "QuickBooks", icon: "💼" },
    { name: "Xero", icon: "📊" },
    { name: "Excel/CSV", icon: "📋" },
    { name: "Sage", icon: "🏢" },
    { name: "FreshBooks", icon: "📘" },
    { name: "Wave", icon: "🌊" },
    { name: "Zoho Books", icon: "📚" },
    { name: "Custom Systems", icon: "⚙️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
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
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating sparkles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/80 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-900"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-bold text-white mb-8">
              <Download className="w-4 h-4 mr-2" />
              100% Free Setup & Migration
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight">
              <span className="text-white drop-shadow-lg">
                Free Setup &
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Migration Service</span>
            </h1>
            
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              Our expert team will migrate all your business data and set up your system completely free. 
              No technical knowledge required - we handle everything for you.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
                <span className="font-bold text-white">Setup in 24-48 hours</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
                <span className="font-bold text-white">100% Data security</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
                <span className="font-bold text-white">Zero downtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Our <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Migration Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data export to go-live, we handle every step of your migration with expert care and attention to detail.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 text-white">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Migrate From <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Any Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We support data migration from all major accounting and business management platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportedPlatforms.map((platform, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="font-bold text-sm text-foreground">{platform.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Ready to <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Get Started?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses who have successfully migrated to BusinessFlow Pro. 
                Our expert team is ready to help you make the switch seamlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Free Migration
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "/contact"}
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  Contact Migration Team
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

export default SetupMigrationPage;