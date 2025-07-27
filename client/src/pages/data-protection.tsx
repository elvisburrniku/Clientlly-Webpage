import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Shield, Lock, Eye, Server, Globe, Award, Star, Menu, X, KeyRound, FileCheck, Database, Users, FileText, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';

const DataProtectionPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dataProtectionPrinciples = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Ownership",
      description: "Your data belongs to you. We never sell, rent, or share your personal or business information with third parties.",
      details: ["Complete data ownership rights", "No data monetization", "Clear data usage policies"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "We're completely transparent about what data we collect, how we use it, and who has access to it.",
      details: ["Clear data collection notices", "Regular privacy policy updates", "Open communication channels"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Control",
      description: "You have full control over your data with easy-to-use privacy settings and data management tools.",
      details: ["Granular privacy controls", "Easy data export", "Simple deletion process"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Compliance",
      description: "We comply with all major privacy regulations including GDPR, CCPA, and other regional privacy laws.",
      details: ["GDPR Article 25 compliance", "Privacy by design", "Regular compliance audits"]
    }
  ];

  const privacyRights = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Right to Access",
      description: "Request a copy of all personal data we hold about you in a portable format."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Right to Rectification",
      description: "Correct any inaccurate or incomplete personal data we process about you."
    },
    {
      icon: <X className="w-6 h-6" />,
      title: "Right to Erasure",
      description: "Request deletion of your personal data when it's no longer needed for business purposes."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Right to Portability",
      description: "Transfer your data to another service provider in a machine-readable format."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Right to Object",
      description: "Object to the processing of your personal data for specific purposes."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Right to Restrict",
      description: "Request restriction of processing your personal data in certain circumstances."
    }
  ];

  const dataCategories = [
    {
      category: "Account Information",
      description: "Basic account details needed for service provision",
      examples: ["Name, email address", "Company information", "Billing address", "Payment methods"],
      retention: "Retained for the duration of your account plus 7 years for legal compliance"
    },
    {
      category: "Business Data",
      description: "Information you create and store in our platform",
      examples: ["Invoices and receipts", "Client information", "Financial records", "Business reports"],
      retention: "Retained as long as you maintain your account, with backup retention for 90 days after deletion"
    },
    {
      category: "Usage Analytics",
      description: "Anonymous data about how you use our platform",
      examples: ["Feature usage statistics", "Performance metrics", "Error logs", "Session data"],
      retention: "Aggregated data retained for up to 24 months for service improvement"
    },
    {
      category: "Support Communications",
      description: "Records of your interactions with our support team",
      examples: ["Support tickets", "Chat logs", "Email correspondence", "Phone call records"],
      retention: "Retained for 3 years to maintain support history and improve service quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img src="/logo-transparent.svg" alt="BusinessFlow Pro" className="w-12 h-9" />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-foreground text-lg font-bold transition-colors">About Us</Link>
                <Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-foreground text-lg font-bold transition-colors">Features</Link>
                <Link href="/subscribe" className="text-gray-600 dark:text-gray-300 hover:text-foreground text-lg font-bold transition-colors">Pricing</Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-foreground text-lg font-bold transition-colors">Contact Us</Link>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <Link href="/login">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium">Login</Button>
              </Link>
              <Link href="/subscribe">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 font-medium">Buy Now</Button>
              </Link>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
            </div>

            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">About Us</Link>
              <Link href="/#features" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Features</Link>
              <Link href="/subscribe" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Pricing</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Contact Us</Link>
              <div className="px-3 py-2 space-y-2">
                <Button 
                  onClick={() => {
                    window.location.href = "/subscribe";
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

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-green-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl mb-8 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Data Protection & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Privacy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your trust is our foundation. Learn how we protect your business data with enterprise-grade security, transparent policies, and complete user control.
            </p>
          </div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
              Our Privacy <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on transparency, user control, and legal compliance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {dataProtectionPrinciples.map((principle, index) => (
              <Card key={index} className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <h3 className="text-2xl font-black text-foreground">{principle.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{principle.description}</p>
                  
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Privacy Rights */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/20 dark:from-gray-900/50 dark:via-blue-950/20 dark:to-green-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
              Your Privacy <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Rights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Under GDPR and other privacy regulations, you have comprehensive rights over your personal data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyRights.map((right, index) => (
              <Card key={index} className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-green-400/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white shadow-md">
                      {right.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{right.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white p-1 rounded-2xl shadow-xl">
              <CardContent className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Exercise Your Rights</h3>
                <p className="text-white/90 mb-4">Contact our Data Protection Officer to exercise any of these rights</p>
                <Button 
                  onClick={() => window.location.href = "/contact"}
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Encryption & Security */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
              How Your Data is <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Protected</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Military-grade encryption and enterprise security measures protecting your business data
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-red-400/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <KeyRound className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">End-to-End Encryption</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">Your data is encrypted with AES-256 encryption at rest and TLS 1.3 in transit, ensuring complete protection from unauthorized access.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>AES-256 encryption</strong> for all stored data</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>TLS 1.3 encryption</strong> for all data transfers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Zero-knowledge architecture</strong> - we can't see your data</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Hardware Security Modules (HSM)</strong> for key management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">Secure Infrastructure</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">Your data is stored in SOC 2 Type II certified data centers with enterprise-grade physical and network security.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>SOC 2 Type II</strong> certified data centers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>24/7 physical security</strong> and monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Redundant backups</strong> across multiple geographic regions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Network intrusion detection</strong> and prevention systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-1 rounded-2xl shadow-xl">
            <CardContent className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Certifications</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">We maintain the highest security standards with regular third-party audits and compliance certifications.</p>
                
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-2">ISO 27001</h4>
                    <p className="text-sm text-white/80">Information Security Management</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-2">SOC 2 Type II</h4>
                    <p className="text-sm text-white/80">Security & Availability</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-2">GDPR</h4>
                    <p className="text-sm text-white/80">Privacy Compliance</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-2">PCI DSS</h4>
                    <p className="text-sm text-white/80">Payment Security</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 dark:from-gray-900/50 dark:via-purple-950/20 dark:to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
              What Data We <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Collect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete transparency about the information we collect and how long we keep it
            </p>
          </div>

          <div className="space-y-8">
            {dataCategories.map((category, index) => (
              <Card key={index} className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-black text-foreground mb-3">{category.category}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-bold text-foreground mb-3">Examples Include:</h4>
                      <ul className="space-y-2">
                        {category.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-bold text-foreground mb-3">Data Retention:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.retention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
            Ready to Trust Your Business Data with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience enterprise-grade data protection with complete transparency and user control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/trial"}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-3"
            >
              Start Free Trial
            </Button>
            <Button 
              onClick={() => window.location.href = "/contact"}
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3"
            >
              Have Questions?
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtectionPage;