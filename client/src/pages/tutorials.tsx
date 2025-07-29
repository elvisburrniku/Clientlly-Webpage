import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play,
  Clock,
  Users,
  BookOpen,
  Video,
  FileText,
  Lightbulb,
  CheckCircle,
  Star,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function Tutorials() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const videoTutorials = [
    {
      title: "Getting Started with BusinessFlow Pro",
      description: "Complete walkthrough of setting up your account and creating your first invoice",
      duration: "12:30",
      level: "Beginner",
      views: "25.2k",
      rating: 4.9,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Getting Started"
    },
    {
      title: "Advanced Invoicing Features",
      description: "Learn recurring invoices, custom templates, and payment automation",
      duration: "18:45",
      level: "Intermediate",
      views: "18.7k",
      rating: 4.8,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Invoicing"
    },
    {
      title: "Expense Tracking Mastery",
      description: "Master receipt scanning, categorization, and tax-ready reporting",
      duration: "15:20",
      level: "Intermediate",
      views: "16.3k",
      rating: 4.7,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Expenses"
    },
    {
      title: "Financial Reports Deep Dive",
      description: "Generate powerful insights with profit & loss, cash flow, and custom reports",
      duration: "22:15",
      level: "Advanced",
      views: "12.8k",
      rating: 4.9,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Reports"
    },
    {
      title: "API Integration Workshop",
      description: "Build custom integrations using our REST API and webhooks",
      duration: "35:40",
      level: "Advanced",
      views: "8.5k",
      rating: 4.6,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Integrations"
    },
    {
      title: "Mobile App Tutorial",
      description: "Get the most out of our mobile app for on-the-go business management",
      duration: "9:50",
      level: "Beginner",
      views: "14.2k",
      rating: 4.8,
      thumbnail: "/attached_assets/image_1753653135199.png",
      category: "Mobile"
    }
  ];

  const quickGuides = [
    {
      title: "5-Minute Setup Guide",
      description: "Get up and running quickly",
      duration: "5 min read",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Invoice Templates",
      description: "Customize your branding",
      duration: "8 min read",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Payment Setup",
      description: "Start accepting payments",
      duration: "12 min read",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Team Collaboration",
      description: "Add and manage team members",
      duration: "6 min read",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const learningPaths = [
    {
      title: "Small Business Owner",
      description: "Perfect for solo entrepreneurs and small teams",
      modules: ["Getting Started", "Basic Invoicing", "Expense Tracking", "Simple Reports"],
      duration: "2 hours",
      level: "Beginner"
    },
    {
      title: "Accounting Professional",
      description: "Advanced features for accounting firms and bookkeepers",
      modules: ["Multi-client Management", "Advanced Reports", "Tax Features", "Client Collaboration"],
      duration: "4 hours",
      level: "Advanced"
    },
    {
      title: "Developer Integration",
      description: "Build custom solutions and integrations",
      modules: ["API Basics", "Webhook Setup", "Custom Integrations", "Advanced Automation"],
      duration: "6 hours",
      level: "Expert"
    }
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
                  src="/attached_assets/3d_1753268267691.png" 
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
          <div className="text-center">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <Video className="w-5 h-5 mr-2" />
              Video Tutorials
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Learn with <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Videos</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Master BusinessFlow Pro with step-by-step video tutorials, guides, and learning paths designed for every skill level.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Featured <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Tutorials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start with these comprehensive guides to master the platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videoTutorials.map((video, index) => (
              <Card key={video.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-4">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                    <Badge variant={video.level === 'Beginner' ? 'default' : video.level === 'Intermediate' ? 'secondary' : 'destructive'} className="text-xs">
                      {video.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{video.rating}</span>
                    </div>
                    <span>{video.views} views</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Quick <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Guides</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast solutions for common tasks and features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickGuides.map((guide, index) => (
              <Card key={guide.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${guide.color} w-fit mx-auto mb-4`}>
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{guide.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Learning <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Paths</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured courses designed for your role and experience level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={path.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={path.level === 'Beginner' ? 'default' : path.level === 'Advanced' ? 'secondary' : 'destructive'}>
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{path.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm">Course Modules:</h4>
                    {path.modules.map((module, moduleIndex) => (
                      <div key={module} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Start Learning Path
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Start your learning journey today and become a BusinessFlow Pro expert in no time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Start Your Trial
            </Button>
            <Button 
              onClick={() => window.location.href = "/help-center"}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}