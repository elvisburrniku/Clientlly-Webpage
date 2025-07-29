import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  Menu, 
  X, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Clock, 
  Lightbulb,
  FileText,
  BarChart3,
  Zap,
  Shield,
  Download,
  ArrowRight
} from "lucide-react";

const BestPractices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const practices = [
    {
      category: "Financial Management",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      items: [
        {
          title: "Automate Invoice Tracking",
          description: "Set up automatic invoice numbering and payment reminders to reduce manual errors and improve cash flow.",
          impact: "30% faster payment collection",
          difficulty: "Easy"
        },
        {
          title: "Monthly Financial Reviews",
          description: "Schedule regular financial health checks to identify trends and opportunities early.",
          impact: "25% better budget accuracy",
          difficulty: "Medium"
        },
        {
          title: "Expense Categorization",
          description: "Use consistent expense categories and tags for better reporting and tax preparation.",
          impact: "40% time savings during tax season",
          difficulty: "Easy"
        }
      ]
    },
    {
      category: "Team Management",
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      items: [
        {
          title: "Digital Time Tracking",
          description: "Implement digital attendance systems with mobile access for accurate payroll processing.",
          impact: "95% attendance accuracy",
          difficulty: "Easy"
        },
        {
          title: "Performance Metrics",
          description: "Set clear KPIs and track employee performance with regular feedback sessions.",
          impact: "20% productivity increase",
          difficulty: "Medium"
        },
        {
          title: "Remote Work Guidelines",
          description: "Establish clear communication protocols and project management workflows for remote teams.",
          impact: "35% better collaboration",
          difficulty: "Medium"
        }
      ]
    },
    {
      category: "Operations",
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      items: [
        {
          title: "Inventory Automation",
          description: "Set up automatic reorder points and stock level alerts to prevent stockouts.",
          impact: "50% reduction in stockouts",
          difficulty: "Medium"
        },
        {
          title: "Vendor Relationship Management",
          description: "Maintain detailed vendor profiles with performance metrics and payment terms.",
          impact: "15% cost savings on purchases",
          difficulty: "Easy"
        },
        {
          title: "Process Documentation",
          description: "Document all business processes to ensure consistency and enable easy onboarding.",
          impact: "60% faster employee onboarding",
          difficulty: "Hard"
        }
      ]
    },
    {
      category: "Customer Relations",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      items: [
        {
          title: "Customer Data Management",
          description: "Centralize customer information with interaction history and preferences tracking.",
          impact: "45% improvement in customer satisfaction",
          difficulty: "Easy"
        },
        {
          title: "Follow-up Automation",
          description: "Set up automated follow-up sequences for quotes, proposals, and post-purchase care.",
          impact: "25% increase in conversion rates",
          difficulty: "Medium"
        },
        {
          title: "Feedback Collection",
          description: "Implement systematic feedback collection and response processes.",
          impact: "30% better customer retention",
          difficulty: "Easy"
        }
      ]
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
            <Lightbulb className="w-5 h-5 mr-2" />
            Expert Guidance
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            Business <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Best Practices</span>
          </h1>
          <p className="text-xl text-black/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Proven strategies and expert recommendations to optimize your business operations, 
            improve efficiency, and drive sustainable growth with our comprehensive management platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Implementing Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/subscribe"}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Get Full Access
            </Button>
          </div>
        </div>
      </section>

      {/* Best Practices Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
              Proven <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Strategies</span> for Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from successful businesses and implement these battle-tested strategies to 
              streamline your operations and accelerate growth.
            </p>
          </div>

          <div className="space-y-16">
            {practices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((practice, index) => (
                    <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {practice.title}
                          </CardTitle>
                          <Badge 
                            variant={practice.difficulty === 'Easy' ? 'default' : practice.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                            className="text-xs"
                          >
                            {practice.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {practice.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-green-600 dark:text-green-400">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span className="font-semibold text-sm">{practice.impact}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-professional-fade">
            Ready to <span className="animate-subtle-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Start implementing these best practices today with our comprehensive business management platform. 
            Get expert guidance, automated workflows, and proven templates.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Templates & Guides</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Ready-to-use templates and step-by-step implementation guides</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Automation Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Automated workflows to implement best practices effortlessly</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Expert Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">24/7 access to business optimization experts and consultants</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/trial"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/subscribe"}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BestPractices;