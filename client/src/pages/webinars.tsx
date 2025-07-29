import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  Star,
  Download,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function Webinars() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const upcomingWebinars = [
    {
      title: "Business Automation Masterclass",
      description: "Learn how to automate your entire business workflow using BusinessFlow Pro's advanced features",
      date: "Feb 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Sarah Johnson, Business Automation Expert",
      registrations: 342,
      spots: 158,
      level: "Intermediate"
    },
    {
      title: "Tax Season Preparation Workshop", 
      description: "Get your business ready for tax season with proper documentation and reporting strategies",
      date: "Feb 22, 2025",
      time: "1:00 PM EST",
      duration: "45 minutes",
      presenter: "Mike Chen, CPA",
      registrations: 567,
      spots: 233,
      level: "Beginner"
    },
    {
      title: "Advanced API Integration Deep Dive",
      description: "Build powerful integrations and custom workflows using our comprehensive API",
      date: "Mar 1, 2025", 
      time: "3:00 PM EST",
      duration: "90 minutes",
      presenter: "David Kim, Lead Developer",
      registrations: 189,
      spots: 311,
      level: "Advanced"
    }
  ];

  const pastWebinars = [
    {
      title: "Getting Started with BusinessFlow Pro",
      description: "Complete walkthrough for new users",
      date: "Jan 25, 2025",
      duration: "45 minutes",
      presenter: "Lisa Thompson",
      views: 2847,
      rating: 4.9,
      downloadAvailable: true
    },
    {
      title: "Invoice Automation Best Practices",
      description: "Streamline your invoicing process",
      date: "Jan 18, 2025", 
      duration: "50 minutes",
      presenter: "Robert Wilson",
      views: 1924,
      rating: 4.8,
      downloadAvailable: true
    },
    {
      title: "Financial Reporting for Small Business",
      description: "Generate powerful insights from your data",
      date: "Jan 11, 2025",
      duration: "60 minutes", 
      presenter: "Jennifer Martinez",
      views: 3156,
      rating: 4.9,
      downloadAvailable: true
    }
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
              <Video className="w-5 h-5 mr-2" />
              Live Training
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Expert <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Webinars</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Join live training sessions with industry experts. Learn advanced techniques, best practices, and get your questions answered in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Upcoming <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Sessions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Register for these upcoming live training sessions
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={webinar.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="default" className="bg-green-500 text-white">Upcoming</Badge>
                        <Badge variant={webinar.level === 'Beginner' ? 'default' : webinar.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                          {webinar.level}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {webinar.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {webinar.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Video className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{webinar.registrations} registered</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground">
                        <strong>Presenter:</strong> {webinar.presenter}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Available Spots</div>
                        <div className="text-2xl font-bold text-green-500">{webinar.spots}</div>
                      </div>
                      <Button className="w-full">
                        Register Now
                      </Button>
                      <div className="text-xs text-muted-foreground text-center">
                        Free for all subscribers
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Past <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Webinars</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch recordings of our previous training sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <Card key={webinar.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {webinar.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{webinar.date}</span>
                    <span>{webinar.views} views</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{webinar.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">by {webinar.presenter}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                    {webinar.downloadAvailable && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
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
            Ready to Learn More?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Join our next webinar and discover how to maximize your business potential with expert guidance and live Q&A.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = "#"} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Register for Next Session
            </Button>
            <Button onClick={() => window.location.href = "/trial"} variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
              Start Your Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}