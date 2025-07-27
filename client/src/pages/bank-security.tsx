import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Shield, Lock, Eye, Server, Globe, Award, Star, Menu, X, KeyRound, FileCheck, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';

const BankSecurityPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "256-Bit SSL Encryption",
      description: "All data transmitted between your browser and our servers is protected with military-grade encryption.",
      certifications: ["SOC 2 Type II", "ISO 27001", "PCI DSS Level 1"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Data Centers",
      description: "Your data is stored in enterprise-grade data centers with 24/7 monitoring and physical security.",
      certifications: ["SOC 1 Type II", "SSAE 16", "AWS Compliant"]
    },
    {
      icon: <KeyRound className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Add an extra layer of security with two-factor authentication and biometric login options.",
      certifications: ["FIDO2 Certified", "WebAuthn", "TOTP Support"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Access Monitoring",
      description: "Advanced monitoring systems track all access attempts and alert you to suspicious activity.",
      certifications: ["Real-time alerts", "Activity logs", "IP tracking"]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 certification for security, availability, and confidentiality",
      logo: "🛡️"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems",
      logo: "🏆"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      logo: "💳"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection",
      logo: "🇪🇺"
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance for privacy rights",
      logo: "🏛️"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act ready",
      logo: "🏥"
    }
  ];

  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data at rest and in transit is encrypted using AES-256 encryption",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Regular Security Audits",
      description: "Third-party security audits conducted quarterly by certified experts",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Automated Backups",
      description: "Multiple daily backups stored in geographically distributed locations",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Network Security",
      description: "Advanced firewall protection and intrusion detection systems",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Access Controls",
      description: "Role-based permissions and principle of least privilege access",
      icon: <KeyRound className="w-6 h-6" />
    },
    {
      title: "Incident Response",
      description: "24/7 security team with rapid incident response protocols",
      icon: <Zap className="w-6 h-6" />
    }
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
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400">
        <div className="absolute inset-0 -z-10">
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
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full text-sm font-bold text-gray-800 mb-8">
              <Shield className="w-4 h-4 mr-2 text-gray-700" />
              Try Risk-Free Today
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight">
              <span className="text-gray-900 drop-shadow-lg">
                Try Risk-Free
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">Today</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              Start your free trial knowing you can cancel anytime without any complications. Experience the full power of BusinessFlow Pro with complete peace of mind.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button 
                onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")}
                className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button 
                onClick={() => window.location.href = '/subscribe'}
                variant="outline"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Enterprise <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Security Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security protection that exceeds industry standards and regulatory requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 text-white">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Industry <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Compliance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We meet or exceed all major security and privacy compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{standard.logo}</div>
                  <h3 className="text-lg font-black text-foreground mb-3">{standard.name}</h3>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Security <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Measures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection at every level of our infrastructure and application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                      {measure.icon}
                    </div>
                    <h3 className="text-lg font-black text-foreground">{measure.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Secure Your <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Business Today</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses who trust BusinessFlow Pro with their most sensitive data. 
                Experience enterprise-grade security without the enterprise complexity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open("https://replit.com/@albangunga79/Clientlly-Webpage", "_blank")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Secure Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "/contact"}
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  Security Questions?
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

export default BankSecurityPage;