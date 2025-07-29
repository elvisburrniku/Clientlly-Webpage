import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Zap,
  Shield,
  Globe,
  Smartphone,
  CreditCard,
  Database,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  BarChart3,
  Users,
  Building2,
  CloudRain,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function Integrations() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const integrations = [
    {
      name: "Stripe",
      description: "Accept payments, manage subscriptions, and handle billing automatically",
      category: "Payment Processing",
      icon: CreditCard,
      status: "Native",
      features: ["Secure payment processing", "Subscription management", "Invoice automation", "Multi-currency support"],
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "QuickBooks",
      description: "Sync your accounting data seamlessly with QuickBooks Online",
      category: "Accounting",
      icon: FileText,
      status: "API",
      features: ["Real-time sync", "Chart of accounts mapping", "Transaction import", "Tax reporting"],
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Google Workspace",
      description: "Connect with Gmail, Google Calendar, and Google Drive",
      category: "Productivity",
      icon: Mail,
      status: "Native",
      features: ["Email integration", "Calendar sync", "Document sharing", "Team collaboration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Slack",
      description: "Get notifications and manage tasks directly from Slack",
      category: "Communication",
      icon: MessageSquare,
      status: "Webhook",
      features: ["Real-time notifications", "Task management", "Invoice alerts", "Team updates"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Salesforce",
      description: "Sync customer data and sales pipeline with Salesforce CRM",
      category: "CRM",
      icon: Users,
      status: "API",
      features: ["Contact synchronization", "Lead management", "Sales tracking", "Custom fields"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Zapier",
      description: "Connect with 5000+ apps through Zapier automation",
      category: "Automation",
      icon: Zap,
      status: "Native",
      features: ["Custom workflows", "Multi-app connections", "Trigger automation", "Data mapping"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Microsoft 365",
      description: "Integrate with Outlook, Teams, and OneDrive",
      category: "Productivity",
      icon: Building2,
      status: "API",
      features: ["Outlook sync", "Teams notifications", "OneDrive storage", "Office documents"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Xero",
      description: "Two-way sync with Xero accounting software",
      category: "Accounting",
      icon: BarChart3,
      status: "API",
      features: ["Invoice sync", "Expense tracking", "Bank reconciliation", "Financial reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Twilio",
      description: "SMS notifications and voice alerts for important events",
      category: "Communication",
      icon: Smartphone,
      status: "API",
      features: ["SMS alerts", "Voice notifications", "Two-factor auth", "Customer communications"],
      color: "from-red-500 to-pink-500"
    }
  ];

  const categories = Array.from(new Set(integrations.map(integration => integration.category)));

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
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button 
                  variant="ghost"
                  onClick={() => window.location.href = "/api/login"}
                  className="w-full justify-start text-muted-foreground hover:text-primary"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => window.location.href = "/subscribe"}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => window.location.href = "/trial"}
                  className="w-full bg-green-600 text-white hover:bg-green-700 font-medium"
                >
                  Start Your Trial
                </Button>
              </div>
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
              <Globe className="w-5 h-5 mr-2" />
              Seamless Integrations
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Connect with <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Everything</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Integrate BusinessFlow Pro with your favorite tools and services. Build powerful workflows that save time and eliminate manual work.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Popular <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with the tools you already use and love
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={integration.name} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${integration.color}`}>
                      <integration.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={integration.status === 'Native' ? 'default' : 'secondary'} className="text-xs">
                      {integration.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{integration.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{integration.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {integration.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect
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
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Start building powerful workflows today. All integrations are included in every plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Start Your Trial
            </Button>
            <Button 
              onClick={() => window.location.href = "/subscribe"}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}