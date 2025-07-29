import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  BookOpen,
  Users,
  MessageSquare,
  Video,
  FileText,
  Lightbulb,
  ArrowRight,
  Clock,
  Star,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function HelpCenter() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      icon: Lightbulb,
      description: "Set up your account and learn the basics",
      articles: [
        { title: "Creating your first invoice", time: "5 min read" },
        { title: "Setting up your company profile", time: "3 min read" },
        { title: "Adding team members", time: "4 min read" },
        { title: "Connecting your bank account", time: "6 min read" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Invoicing",
      icon: FileText,
      description: "Master our invoicing features",
      articles: [
        { title: "Creating recurring invoices", time: "4 min read" },
        { title: "Setting up payment terms", time: "3 min read" },
        { title: "Customizing invoice templates", time: "7 min read" },
        { title: "Managing overdue invoices", time: "5 min read" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Payments",
      icon: MessageSquare,
      description: "Accept and track payments efficiently",
      articles: [
        { title: "Setting up Stripe payments", time: "8 min read" },
        { title: "Recording manual payments", time: "3 min read" },
        { title: "Understanding payment fees", time: "4 min read" },
        { title: "Handling refunds", time: "5 min read" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Expenses",
      icon: BookOpen,
      description: "Track and categorize business expenses",
      articles: [
        { title: "Uploading receipt photos", time: "3 min read" },
        { title: "Setting expense categories", time: "4 min read" },
        { title: "Creating expense reports", time: "6 min read" },
        { title: "Tax-ready documentation", time: "5 min read" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Reports",
      icon: Video,
      description: "Generate insights and financial reports",
      articles: [
        { title: "Understanding profit & loss", time: "7 min read" },
        { title: "Cash flow reporting", time: "5 min read" },
        { title: "Tax reporting features", time: "8 min read" },
        { title: "Custom report creation", time: "6 min read" }
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Integrations",
      icon: Users,
      description: "Connect with other business tools",
      articles: [
        { title: "QuickBooks synchronization", time: "10 min read" },
        { title: "Zapier automation setup", time: "8 min read" },
        { title: "Google Workspace integration", time: "6 min read" },
        { title: "API documentation", time: "15 min read" }
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const popularArticles = [
    { title: "How to create your first invoice", category: "Getting Started", views: "12.5k", rating: 4.9 },
    { title: "Setting up automatic payment reminders", category: "Invoicing", views: "8.2k", rating: 4.8 },
    { title: "Connecting Stripe for online payments", category: "Payments", views: "6.8k", rating: 4.7 },
    { title: "Understanding tax categories", category: "Expenses", views: "5.4k", rating: 4.6 },
    { title: "Creating monthly financial reports", category: "Reports", views: "4.9k", rating: 4.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
                  style={{ 
                    filter: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                Pricing
              </Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Contact Us</Link>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                Login
              </Button>
              
              <Button 
                onClick={() => window.location.href = "/subscribe"}
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Buy Now
              </Button>
              
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="bg-green-600 text-white hover:bg-green-700 font-medium"
              >
                Start Your Trial
              </Button>
              
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Button>
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <BookOpen className="w-5 h-5 mr-2" />
              Help Center
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              How can we <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">help?</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers, learn features, and get the most out of BusinessFlow Pro
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 border-black/20 rounded-xl focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Popular <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most helpful guides chosen by our community
            </p>
          </div>

          <div className="grid gap-6 mb-16">
            {popularArticles.map((article, index) => (
              <Card key={article.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{article.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{article.views} views</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Browse by <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore guides organized by feature and use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={category.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    {category.articles.map((article) => (
                      <div key={article.title} className="flex items-center justify-between py-1 text-sm">
                        <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          {article.title}
                        </span>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{article.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
            Still Need Help?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Our support team is here to help. Get in touch for personalized assistance with your account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/contact"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Contact Support
            </Button>
            <Button 
              onClick={() => window.location.href = "/community"}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}