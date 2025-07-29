import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp,
  Users,
  Clock,
  Award,
  ArrowRight,
  Building2,
  Target,
  DollarSign,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const caseStudies = [
    {
      company: "TechCraft Solutions",
      industry: "Technology Services", 
      size: "25 employees",
      challenge: "Manual invoicing process taking 8+ hours weekly",
      solution: "Automated invoice generation and payment tracking",
      results: [
        "75% reduction in invoicing time",
        "40% faster payment collection", 
        "€12,000 annual cost savings",
        "99.9% invoice accuracy"
      ],
      quote: "BusinessFlow Pro transformed our billing process. We went from spending entire days on invoicing to having it done in minutes.",
      author: "Sarah Mitchell, CEO",
      timeToValue: "2 weeks",
      featured: true
    },
    {
      company: "Green Garden Co.",
      industry: "Landscaping",
      size: "12 employees", 
      challenge: "Poor expense tracking and tax preparation difficulties",
      solution: "Digital receipt management and automated categorization",
      results: [
        "90% faster expense reporting",
        "100% tax-ready documentation",
        "€5,200 in recovered deductions",
        "50% reduction in accounting fees"
      ],
      quote: "The receipt scanning feature alone has saved us countless hours. Tax season is no longer a nightmare.",
      author: "Mike Rodriguez, Owner",
      timeToValue: "1 week",
      featured: false
    },
    {
      company: "Stellar Consulting",
      industry: "Business Consulting",
      size: "45 employees",
      challenge: "Complex multi-client project billing and time tracking",
      solution: "Advanced project management and automated time billing",
      results: [
        "60% improvement in billable hour capture",
        "35% increase in profit margins", 
        "€25,000 recovered unbilled hours",
        "98% client billing accuracy"
      ],
      quote: "We discovered we were losing significant revenue from unbilled hours. BusinessFlow Pro helped us capture every minute.",
      author: "Jennifer Park, Partner",
      timeToValue: "3 weeks",
      featured: false
    },
    {
      company: "Aurora Manufacturing",
      industry: "Manufacturing",
      size: "80 employees",
      challenge: "Inventory management and vendor payment coordination",
      solution: "Integrated inventory tracking with automated vendor payments",
      results: [
        "45% reduction in inventory costs",
        "80% faster vendor payment processing",
        "€18,000 in early payment discounts",
        "Zero stockout incidents"
      ],
      quote: "The integration between inventory and payments gives us complete visibility and control over our supply chain.",
      author: "David Chen, Operations Director", 
      timeToValue: "4 weeks",
      featured: false
    },
    {
      company: "Bright Minds Academy",
      industry: "Education",
      size: "35 employees",
      challenge: "Student billing complexity and parent communication",
      solution: "Automated student billing with parent portal integration",
      results: [
        "85% reduction in billing inquiries",
        "50% faster payment collection",
        "€8,500 reduction in administrative costs",
        "95% parent satisfaction rate"
      ],
      quote: "Parents love the transparency and ease of payment. Our admin team can focus on education instead of billing issues.",
      author: "Lisa Thompson, Administrator",
      timeToValue: "2 weeks", 
      featured: false
    },
    {
      company: "Coastal Marketing Group",
      industry: "Marketing Agency",
      size: "18 employees",
      challenge: "Client retainer management and expense allocation",
      solution: "Advanced retainer tracking with project-based expense allocation",
      results: [
        "70% improvement in retainer accuracy",
        "55% reduction in client disputes",
        "€15,000 increase in annual revenue",
        "90% client retention rate"
      ],
      quote: "Clear retainer management has eliminated billing disputes and improved our client relationships significantly.",
      author: "Robert Kim, Founder",
      timeToValue: "3 weeks",
      featured: false
    }
  ];

  const metrics = [
    { label: "Average Time Savings", value: "68%", icon: Clock },
    { label: "Cost Reduction", value: "€12,500", icon: DollarSign },
    { label: "Customer Satisfaction", value: "96%", icon: Award },
    { label: "ROI Within 3 Months", value: "340%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
                  style={{ filter: 'none', background: 'transparent' }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button variant="ghost" onClick={() => window.location.href = '/subscribe'} className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Pricing</Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Contact Us</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="text-muted-foreground hover:text-primary transition-all duration-300">Login</Button>
              <Button onClick={() => window.location.href = "/subscribe"} className="bg-blue-600 text-white hover:bg-blue-700 font-medium">Buy Now</Button>
              <Button onClick={() => window.location.href = "/trial"} className="bg-green-600 text-white hover:bg-green-700 font-medium">Start Your Trial</Button>
              <div className="pt-2"><LanguageSelector /></div>
            </div>

            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300">
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Button variant="ghost" onClick={() => window.location.href = '/subscribe'} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Pricing</Button>
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <Target className="w-5 h-5 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Real <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Results</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              See how businesses like yours have transformed their operations and achieved remarkable results with BusinessFlow Pro.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="text-center glass-effect border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(study => study.featured).map((study) => (
        <section key={study.company} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
                Featured <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Success Story</span>
              </h2>
            </div>

            <Card className="glass-effect border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <Badge className="bg-amber-500 text-black">Featured</Badge>
                      <Badge variant="secondary">{study.industry}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{study.size}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-4">{study.company}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Time to Value</h4>
                        <p className="text-muted-foreground">{study.timeToValue}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 lg:p-12 text-white">
                    <h4 className="font-semibold mb-4 text-white">Key Results</h4>
                    <div className="space-y-3 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-300" />
                          <span className="text-white">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-white/90 mb-4">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-white/80 not-italic">— {study.author}</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* All Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              More <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how businesses across different industries have achieved success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <Card key={study.company} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary" className="text-xs">{study.industry}</Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{study.size}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {study.company}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm">Key Results:</h4>
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Time to Value: {study.timeToValue}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 fade-in">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with BusinessFlow Pro. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = "/trial"} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Start Your Trial
            </Button>
            <Button onClick={() => window.location.href = "/contact"} variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}