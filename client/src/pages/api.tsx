import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Code,
  Key,
  Zap,
  Shield,
  Globe,
  Database,
  ExternalLink,
  Copy,
  CheckCircle,
  Webhook,
  Terminal,
  Book,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function API() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/invoices",
      description: "Retrieve all invoices",
      params: ["limit", "offset", "status", "date_from", "date_to"]
    },
    {
      method: "POST",
      path: "/api/invoices",
      description: "Create a new invoice",
      params: ["customer_id", "line_items", "due_date", "currency"]
    },
    {
      method: "GET",
      path: "/api/customers",
      description: "Get customer list",
      params: ["search", "limit", "offset"]
    },
    {
      method: "POST",
      path: "/api/webhooks",
      description: "Register webhook endpoint",
      params: ["url", "events", "secret"]
    }
  ];

  const codeExamples = [
    {
      title: "Authentication",
      language: "bash",
      code: `curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.businessflowpro.com/v1/invoices`
    },
    {
      title: "Create Invoice",
      language: "javascript",
      code: `const response = await fetch('https://api.businessflowpro.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'cust_123',
    line_items: [
      {
        description: 'Web Development',
        quantity: 1,
        unit_price: 1500.00
      }
    ],
    due_date: '2025-08-15',
    currency: 'EUR'
  })
});

const invoice = await response.json();`
    },
    {
      title: "Webhook Handler",
      language: "node",
      code: `app.post('/webhook', (req, res) => {
  const signature = req.headers['x-bf-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
    
  if (signature === expectedSignature) {
    // Process webhook event
    console.log('Event:', req.body.type);
    res.status(200).send('OK');
  } else {
    res.status(401).send('Unauthorized');
  }
});`
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
              <Terminal className="w-5 h-5 mr-2" />
              Developer API
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Build with <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Our API</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Powerful RESTful API with webhooks, real-time data, and comprehensive documentation. Build custom integrations and automate your business workflows.
            </p>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Developer <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to integrate with BusinessFlow Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 w-fit mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">RESTful API</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clean, intuitive REST endpoints with JSON responses. Full CRUD operations for all business entities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 w-fit mb-4">
                  <Webhook className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Real-time Webhooks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant notifications when data changes. Support for all business events and custom filtering.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 w-fit mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Secure Authentication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  API keys with scoped permissions. Rate limiting, request signing, and enterprise security features.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 w-fit mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Comprehensive Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access invoices, customers, payments, expenses, inventory, and all business data through unified API.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 w-fit mb-4">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Interactive Docs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete documentation with code examples, test console, and SDK downloads for popular languages.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 w-fit mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">High Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  99.9% uptime SLA. Global CDN, response caching, and optimized queries for lightning-fast responses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              API <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Endpoints</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core endpoints to manage your business data
            </p>
          </div>

          <div className="grid gap-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge className={`${
                        endpoint.method === 'GET' ? 'bg-green-500' : 
                        endpoint.method === 'POST' ? 'bg-blue-500' : 
                        'bg-orange-500'
                      } text-white`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-lg font-mono text-foreground">{endpoint.path}</code>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try it
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.params.map((param) => (
                      <Badge key={param} variant="secondary" className="text-xs">
                        {param}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
              Code <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Examples</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started quickly with these code snippets
            </p>
          </div>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(example.code, example.title)}
                      className="flex items-center space-x-2"
                    >
                      {copiedCode === example.title ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span>{copiedCode === example.title ? 'Copied!' : 'Copy'}</span>
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-100 text-sm">
                      <code>{example.code}</code>
                    </pre>
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
            Ready to Start Building?
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Get your API key and start integrating with BusinessFlow Pro today. Full documentation and support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/trial"}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Get API Key
            </Button>
            <Button 
              onClick={() => window.location.href = "#"}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}