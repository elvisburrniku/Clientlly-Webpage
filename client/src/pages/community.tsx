import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  MessageSquare,
  Lightbulb,
  Award,
  Calendar,
  ExternalLink,
  Heart,
  TrendingUp,
  Coffee,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function Community() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const communityStats = [
    { label: "Active Members", value: "12,500+", icon: Users },
    { label: "Monthly Discussions", value: "2,800+", icon: MessageSquare },
    { label: "Questions Answered", value: "45,000+", icon: Lightbulb },
    { label: "Success Stories", value: "1,200+", icon: Award }
  ];

  const recentDiscussions = [
    {
      title: "Best practices for invoice follow-ups",
      author: "Sarah M.",
      replies: 23,
      category: "Invoicing",
      time: "2h ago",
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: "Setting up automated expense categorization",
      author: "Mike R.",
      replies: 18,
      category: "Expenses",
      time: "4h ago",
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: "Tax reporting tips for Q4",
      author: "Jennifer L.",
      replies: 31,
      category: "Reports",
      time: "6h ago",
      avatar: "/attached_assets/image_1753653135199.png"
    },
    {
      title: "Mobile app workflow optimization",
      author: "David K.",
      replies: 15,
      category: "Mobile",
      time: "8h ago",
      avatar: "/attached_assets/image_1753653135199.png"
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Community Call",
      date: "Feb 15, 2025",
      time: "2:00 PM EST",
      type: "Virtual Meetup",
      description: "Join our monthly discussion about new features and best practices"
    },
    {
      title: "Small Business Success Workshop",
      date: "Feb 22, 2025",
      time: "1:00 PM EST",
      type: "Workshop",
      description: "Learn growth strategies from successful BusinessFlow Pro users"
    },
    {
      title: "API Integration Masterclass",
      date: "Mar 1, 2025",
      time: "3:00 PM EST",
      type: "Technical Session",
      description: "Deep dive into API integrations and automation workflows"
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
              <Users className="w-5 h-5 mr-2" />
              Community Hub
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Join Our <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Connect with fellow entrepreneurs, share experiences, and grow your business together with thousands of BusinessFlow Pro users.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={stat.label} className="text-center glass-effect border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Recent <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Discussions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join ongoing conversations and share your expertise
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            {recentDiscussions.map((discussion, index) => (
              <Card key={discussion.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl glass-effect border-white/20 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img src={discussion.avatar} alt={discussion.author} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary" className="text-xs">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">by {discussion.author}</span>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MessageSquare className="w-4 h-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="px-8 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Upcoming <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our virtual events and connect with the community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-1 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">Date:</span>
                      <span className="text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">Time:</span>
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Register Now
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
            Ready to Connect?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of business owners who are growing together. Start conversations, share insights, and build your network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = "#"} className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Join Community
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