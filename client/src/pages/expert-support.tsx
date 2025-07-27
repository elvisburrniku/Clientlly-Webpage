import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Headphones, MessageCircle, Phone, Video, Clock, Zap, Star, Menu, X, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';

const ExpertSupportPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Get instant help from our expert support team through live chat - available 24/7.",
      features: ["Instant responses", "Screen sharing", "File transfers"],
      availability: "24/7"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our certified experts for complex issues and detailed guidance.",
      features: ["Dedicated support line", "Expert consultations", "Priority callback"],
      availability: "24/7"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Support",
      description: "One-on-one video sessions for personalized training and problem-solving.",
      features: ["Screen sharing", "Personal training", "Setup assistance"],
      availability: "Business hours"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Base",
      description: "Comprehensive documentation, tutorials, and guides for self-service support.",
      features: ["Step-by-step guides", "Video tutorials", "FAQ section"],
      availability: "Always available"
    }
  ];

  const supportTeam = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Experts",
      description: "Our support team consists of certified business software experts with years of experience.",
      stats: "50+ certified professionals"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Response Times",
      description: "Average response time of under 2 minutes for urgent issues.",
      stats: "< 2 min response time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Account Managers",
      description: "Enterprise customers get dedicated account managers for personalized support.",
      stats: "1:1 personal attention"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950">
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
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400">
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
              <Headphones className="w-4 h-4 mr-2 text-gray-700" />
              24/7 Expert Support
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight">
              <span className="text-gray-900 drop-shadow-lg">
                Expert Support
              </span>
              <br />
              <span className="text-gray-900 drop-shadow-lg">When You Need It</span>
            </h1>
            
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
              Get help from certified business software experts 24/7. Our support team is dedicated to 
              ensuring your success with comprehensive assistance and personalized guidance.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">24/7 availability</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Award className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">Certified experts</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg">
                <Zap className="h-5 w-5 text-gray-700" />
                <span className="font-bold text-gray-800">Instant response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Multiple <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Support Channels</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support method that works best for you. We're here to help through every channel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white">
                      {channel.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                        {channel.availability}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4">{channel.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{channel.description}</p>
                  
                  <ul className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
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

      {/* Support Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Our <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the certified professionals who are dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTeam.map((member, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-6 text-white mx-auto">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-3">{member.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  <div className="text-sm font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full inline-block">
                    {member.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-1 rounded-3xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Experience <span className="animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">World-Class Support</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses who rely on our expert support team for their success. 
                Get the help you need, when you need it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "/contact"}
                  className="border-2 border-gray-300 hover:border-purple-500 px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  Contact Support Team
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

export default ExpertSupportPage;