import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  Menu, 
  X, 
  Star, 
  TrendingUp, 
  Users, 
  Building2, 
  Award, 
  Zap,
  BarChart3,
  Clock,
  Euro,
  ArrowRight,
  Quote
} from "lucide-react";

const SuccessStories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stories = [
    {
      company: "TechFlow Solutions",
      industry: "Technology Consulting",
      size: "45 employees",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop",
      challenge: "Manual invoice processing was taking 40+ hours per month, causing cash flow delays and client frustration.",
      solution: "Implemented automated invoicing, expense tracking, and client management system with payment reminders.",
      results: [
        { metric: "Invoice Processing Time", before: "40 hours/month", after: "4 hours/month", improvement: "90% reduction" },
        { metric: "Payment Collection", before: "45 days average", after: "18 days average", improvement: "60% faster" },
        { metric: "Client Satisfaction", before: "3.2/5 stars", after: "4.8/5 stars", improvement: "50% increase" }
      ],
      testimonial: "Clientlly transformed our entire billing process. We've recovered 27 hours per month that we now invest in client delivery and business growth.",
      person: "Sarah Chen",
      position: "CEO & Founder",
      timeframe: "6 months"
    },
    {
      company: "Green Valley Manufacturing",
      industry: "Sustainable Manufacturing",
      size: "120 employees",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop",
      challenge: "Inventory management chaos leading to €85,000 in annual stockout losses and supplier payment delays.",
      solution: "Deployed comprehensive inventory tracking, vendor management, and automated purchasing workflows.",
      results: [
        { metric: "Stockout Incidents", before: "24 per month", after: "2 per month", improvement: "92% reduction" },
        { metric: "Inventory Carrying Costs", before: "€180,000/year", after: "€120,000/year", improvement: "33% savings" },
        { metric: "Supplier Payment Accuracy", before: "78% on-time", after: "99% on-time", improvement: "27% improvement" }
      ],
      testimonial: "The ROI was immediate. We saved €85,000 in the first year alone and our supplier relationships have never been stronger.",
      person: "Marcus Weber",
      position: "Operations Director",
      timeframe: "12 months"
    },
    {
      company: "Creative Studios Europe",
      industry: "Digital Marketing Agency",
      size: "28 employees",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop",
      challenge: "Project profitability was unclear, leading to underpriced contracts and 15% profit margins.",
      solution: "Implemented time tracking, project costing, and client profitability analysis with automated reporting.",
      results: [
        { metric: "Profit Margins", before: "15% average", after: "32% average", improvement: "113% increase" },
        { metric: "Project Delivery Time", before: "20% over deadline", after: "95% on-time", improvement: "400% improvement" },
        { metric: "Client Retention", before: "68%", after: "89%", improvement: "31% increase" }
      ],
      testimonial: "We finally understand which clients and projects are actually profitable. Our business has doubled in size with better margins.",
      person: "Elena Rodriguez",
      position: "Creative Director",
      timeframe: "8 months"
    },
    {
      company: "Alpine Logistics Group",
      industry: "Transportation & Logistics",
      size: "180 employees",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop",
      challenge: "Manual expense reporting was costing 60 hours per week and creating compliance issues with tax authorities.",
      solution: "Rolled out mobile expense tracking, automated receipt scanning, and real-time expense approval workflows.",
      results: [
        { metric: "Expense Processing Time", before: "60 hours/week", after: "8 hours/week", improvement: "87% reduction" },
        { metric: "Compliance Accuracy", before: "73%", after: "98%", improvement: "34% improvement" },
        { metric: "Employee Satisfaction", before: "2.8/5", after: "4.6/5", improvement: "64% increase" }
      ],
      testimonial: "Our drivers love the mobile app, and our accounting team finally has time to focus on strategic financial planning instead of data entry.",
      person: "Hans Mueller",
      position: "CFO",
      timeframe: "4 months"
    }
  ];

  const handleNavigation = (path: string) => {
    setTimeout(() => {
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                alt="Clientlly" 
                className="h-8 w-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clientlly
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                About Us
              </Link>
              <button onClick={() => handleNavigation('/#features')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Features
              </button>
              <Link href="/subscribe" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Contact Us
              </Link>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = "/trial"}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
                >
                  Start Your Trial
                </Button>
                <Button 
                  size="sm"
                  onClick={() => window.location.href = "/subscribe"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link href="/about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  About Us
                </Link>
                <button onClick={() => handleNavigation('/#features')} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-left w-full">
                  Features
                </button>
                <Link href="/subscribe" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Contact Us
                </Link>
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
                    onClick={() => window.location.href = "/trial"}
                  >
                    Start Your Trial
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => window.location.href = "/subscribe"}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Floating sparkles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-black border-white/30 text-lg px-6 py-2">
            <Award className="w-5 h-5 mr-2" />
            Real Results
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            Customer <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover how businesses across Europe are transforming their operations, 
            increasing profitability, and achieving sustainable growth with our comprehensive management platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Success Story
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/subscribe"}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              See Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
              Transforming <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Businesses</span> Across Europe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From startups to established enterprises, see how our platform delivers measurable results 
              and drives sustainable business growth.
            </p>
          </div>

          <div className="space-y-20">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={story.image} 
                      alt={story.company}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <img 
                        src={story.logo} 
                        alt={`${story.company} logo`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{story.company}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {story.timeframe}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <span className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {story.industry}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {story.size}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {story.results.map((result, resultIndex) => (
                      <Card key={resultIndex} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-700/50">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{result.metric}</h5>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Before: {result.before}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">After: {result.after}</p>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                            {result.improvement}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-lg leading-relaxed">
                        "{story.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center space-x-1 mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{story.person}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{story.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Floating sparkles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 animate-professional-fade">
            Ready to Write Your <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations and accelerated growth. 
            Start your 14-day free trial today and experience the difference.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">14-Day Free Trial</h3>
              <p className="text-black/70 text-sm">Full access to all features with no credit card required</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Expert Onboarding</h3>
              <p className="text-black/70 text-sm">Personal setup assistance and best practice guidance</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Instant Results</h3>
              <p className="text-black/70 text-sm">See improvements in efficiency within the first week</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/contact"}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuccessStories;