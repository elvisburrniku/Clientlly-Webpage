import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Download, Upload, Database, FileText, Users, Clock, Shield, Zap, Star, Menu, X, Sparkles } from 'lucide-react';
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
    { name: "QuickBooks", icon: "💼", region: "Global" },
    { name: "Xero", icon: "📊", region: "Global" },
    { name: "Excel/CSV", icon: "📋", region: "Global" },
    { name: "Sage", icon: "🏢", region: "Global" },
    { name: "FreshBooks", icon: "📘", region: "Global" },
    { name: "Wave", icon: "🌊", region: "Global" },
    { name: "Zoho Books", icon: "📚", region: "Global" },
    { name: "NetSuite", icon: "🌐", region: "Global" },
    { name: "Financa 5", icon: "https://isdwebassets.s3.eu-central-1.amazonaws.com/images/1.+Products+Logos/F5_Logo_Circular_128x128.png", region: "Albania", description: "InfoSoft - Leading Albanian ERP" },
    { name: "Alpha Business", icon: "https://imb.al/wp-content/uploads/2023/12/l-1.png", region: "Albania", description: "IMB - Complete financial system" },
    { name: "ECOVIS", icon: "https://www.ecovis.com/global/wp-content/uploads/2019/05/ecovis-logo.png", region: "North Macedonia", description: "International audit & tax services" },
    { name: "Accace", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEMxMC41IDEyLjU0IDE2LjU0IDYuNSAyNCA2LjVTMzcuNSAxMi41NCAzNy41IDIwUzMxLjQ2IDMzLjUgMjQgMzMuNVMxMC41IDI3LjQ2IDEwLjUgMjBaIiBmaWxsPSIjMDA3M0M4Ii8+CjwvZz4KPC9zdmc+", region: "North Macedonia", description: "Global cloud accounting technology" },
    { name: "Logo Software", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEMxMC41IDEyLjU0IDE2LjU0IDYuNSAyNCA2LjVTMzcuNSAxMi41NCAzNy41IDIwUzMxLjQ2IDMzLjUgMjQgMzMuNVMxMC41IDI3LjQ2IDEwLjUgMjBaIiBmaWxsPSIjRkY0QjAwIi8+CjwvZz4KPC9zdmc+", region: "Kosovo", description: "Regional ERP solutions" },
    { name: "Kontabiliteti Alpha", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNSAyMEwxNS41IDEwSDI0TDMwLjUgMjBMMjQgMzBIMTUuNUwxMC41IDIwWiIgZmlsbD0iIzMzN0FDNyIvPgo8L2c+Cjwvc3ZnPg==", region: "Albania", description: "Complete accounting suite" },
    { name: "InfoSoft Group", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaTTIwIDIwTDI1IDE1VjI1TDIwIDIwWiIgZmlsbD0iIzAwOEI4QiIvPgo8L2c+Cjwvc3ZnPg==", region: "Kosovo", description: "Regional technology leader" },
    { name: "RSM Albania", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaTTE1IDE1SDI1VjI1SDE1VjE1WiIgZmlsbD0iI0M4MTAyRSIvPgo8L2c+Cjwvc3ZnPg==", region: "Albania", description: "Global audit network member" },

    { name: "Custom Systems", icon: "⚙️", region: "Global" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
              <img 
                src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                alt="Clientlly" 
                className="h-8 w-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clientlly
              </span>
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
                onClick={() => window.location.href = "/trial"}
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
              <Button onClick={() => window.location.href = '/subscribe'} className="w-full bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>
                Buy Now
              </Button>
              <Button onClick={() => window.location.href = "/trial"} className="w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-0 focus:border-none active:outline-none" style={{outline: 'none', boxShadow: 'none'}}>
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
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full text-sm font-bold mb-8">
              <Download className="w-4 h-4 mr-2 text-gray-700" />
              <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">100% Free Setup & Migration</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight animate-professional-fade">
              <span className="text-gray-900 drop-shadow-lg">
                Free <span className="animate-subtle-gradient">Setup</span> &
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">Migration Service</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              Our expert team will migrate all your business data and set up your system completely free. 
              No technical knowledge required - we handle everything for you.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">Setup in 24-48 hours</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Shield className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">100% Data security</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Zap className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">Zero downtime</span>
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
              <Card key={index} className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 animate-gradient-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900/50 dark:via-blue-950/20 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Migrate From <span className="animate-gradient-x bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Any Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              We support data migration from all major accounting and business management platforms.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-green-700 dark:text-green-300 font-semibold">100% Data Integrity Guaranteed</span>
            </div>
          </div>

          {/* Global Platforms */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
                <span className="animate-text-wave">Global Platforms</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seamless migration from worldwide accounting software solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
              {supportedPlatforms.filter(platform => platform.region === "Global" && platform.name !== "Custom Systems").map((platform, index) => (
                <Card key={index} className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="relative p-6 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{platform.name}</h3>
                    <span className="text-xs text-muted-foreground bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">Full Migration</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regional Platforms */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🌎</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
                <span className="animate-text-wave">Regional Platforms</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized support for Balkan and regional accounting software
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
              {supportedPlatforms.filter(platform => platform.region !== "Global" && platform.name !== "Custom Systems").map((platform, index) => (
                <Card key={index} className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="relative p-6 text-center">
                    {/* Country Flag */}
                    <div className="absolute top-2 right-2 text-xl opacity-70">
                      {platform.region === "Albania" && "🇦🇱"}
                      {platform.region === "Kosovo" && "🇽🇰"}
                      {platform.region === "North Macedonia" && "🇲🇰"}
                    </div>
                    
                    <div className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      {platform.icon.startsWith('http') || platform.icon.startsWith('data:') ? (
                        <img 
                          src={platform.icon} 
                          alt={platform.name}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'block';
                            }
                          }}
                        />
                      ) : (
                        <div className="text-3xl">{platform.icon}</div>
                      )}
                      <div className="text-3xl hidden">🏢</div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{platform.name}</h3>
                    <span className="text-xs text-muted-foreground bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">Regional Migration</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">Why Choose BusinessFlow Pro?</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-base text-muted-foreground">
            <button 
              onClick={() => window.location.href = "/data-protection"}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Shield className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">Data protection & privacy</span>
            </button>
            <button 
              onClick={() => window.location.href = "/setup-migration"}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">Free setup & migration</span>
            </button>
            <button 
              onClick={() => window.location.href = "/cancel-anytime"}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">Cancel anytime</span>
            </button>
            <button 
              onClick={() => window.location.href = "/expert-support"}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Check className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">24/7 expert support</span>
            </button>

            <button 
              onClick={() => window.location.href = "/bank-security"}
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <Shield className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
              <span className="font-bold text-sm">Bank-level security</span>
            </button>

          </div>
        </div>
      </section>

      {/* Custom Systems - Full Width Yellow Section */}
      <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 py-20 px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-12 w-3 h-3 animate-ping delay-0">
            <Sparkles className="w-3 h-3 text-amber-600/30" />
          </div>
          <div className="absolute bottom-12 right-16 w-4 h-4 animate-ping delay-1000">
            <Sparkles className="w-4 h-4 text-orange-600/40" />
          </div>
          <div className="absolute top-16 right-24 w-2 h-2 animate-ping delay-2000">
            <Sparkles className="w-2 h-2 text-yellow-600/30" />
          </div>
          <div className="absolute bottom-20 left-24 w-3 h-3 animate-ping delay-1500">
            <Sparkles className="w-3 h-3 text-amber-600/40" />
          </div>
          <div className="absolute top-32 left-1/3 w-2 h-2 animate-ping delay-3000">
            <Sparkles className="w-2 h-2 text-yellow-600/40" />
          </div>
          <div className="absolute bottom-8 right-1/3 w-3 h-3 animate-ping delay-500">
            <Sparkles className="w-3 h-3 text-amber-600/35" />
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <div className="text-6xl mb-8">⚙️</div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Custom Systems</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            Have a unique platform? Our migration experts can handle any custom system or database format.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <Zap className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-gray-900 dark:text-white font-bold text-lg">Expert Consultation</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900/50 dark:via-blue-950/20 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">

          {/* Migration Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Zero Data Loss</h4>
              <p className="text-muted-foreground text-sm">Advanced validation ensures 100% data integrity during migration</p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">24-48 Hours</h4>
              <p className="text-muted-foreground text-sm">Most migrations completed within 1-2 business days</p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Expert Support</h4>
              <p className="text-muted-foreground text-sm">Dedicated migration specialists guide you through the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 drop-shadow-lg">
            <span className="animate-text-wave">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed drop-shadow-sm">
            Join thousands of businesses who have successfully migrated to BusinessFlow Pro. 
            Our expert team is ready to help you make the switch seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/migration-request"}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5 mr-2" />
              Start Free Migration
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/migration-request"}
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Contact Migration Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupMigrationPage;