import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code,
  Key,
  BookOpen,
  Copy,
  Check,
  Settings,
  Zap,
  Shield,
  Globe,
  Menu,
  X,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function APIPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    javascript: {
      auth: `// Initialize BusinessFlow Pro API
const BFPRO_API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.businessflowpro.com/v1';

// Set up headers
const headers = {
  'Authorization': \`Bearer \${BFPRO_API_KEY}\`,
  'Content-Type': 'application/json'
};`,
      
      invoices: `// Create a new invoice
const createInvoice = async (invoiceData) => {
  const response = await fetch(\`\${BASE_URL}/invoices\`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      client_id: 'client_123',
      amount: 1299.99,
      currency: 'EUR',
      due_date: '2025-08-15',
      items: [
        {
          description: 'Web Development Services',
          quantity: 1,
          unit_price: 1299.99
        }
      ]
    })
  });
  
  return response.json();
};`,

      customers: `// Get customer list
const getCustomers = async () => {
  const response = await fetch(\`\${BASE_URL}/customers\`, {
    headers
  });
  
  return response.json();
};

// Create new customer
const createCustomer = async (customerData) => {
  const response = await fetch(\`\${BASE_URL}/customers\`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      address: {
        street: '123 Main St',
        city: 'Berlin',
        country: 'Germany'
      }
    })
  });
  
  return response.json();
};`
    },

    python: {
      auth: `import requests
import json

# Initialize BusinessFlow Pro API
BFPRO_API_KEY = 'your_api_key_here'
BASE_URL = 'https://api.businessflowpro.com/v1'

# Set up headers
headers = {
    'Authorization': f'Bearer {BFPRO_API_KEY}',
    'Content-Type': 'application/json'
}`,

      invoices: `# Create a new invoice
def create_invoice(invoice_data):
    url = f'{BASE_URL}/invoices'
    data = {
        'client_id': 'client_123',
        'amount': 1299.99,
        'currency': 'EUR',
        'due_date': '2025-08-15',
        'items': [
            {
                'description': 'Web Development Services',
                'quantity': 1,
                'unit_price': 1299.99
            }
        ]
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()`,

      customers: `# Get customer list
def get_customers():
    url = f'{BASE_URL}/customers'
    response = requests.get(url, headers=headers)
    return response.json()

# Create new customer
def create_customer():
    url = f'{BASE_URL}/customers'
    data = {
        'name': 'John Doe',
        'email': 'john@example.com',
        'company': 'Acme Corp',
        'address': {
            'street': '123 Main St',
            'city': 'Berlin',
            'country': 'Germany'
        }
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()`
    }
  };

  const endpoints = [
    {
      method: "GET",
      path: "/customers",
      description: "Retrieve all customers",
      auth: true
    },
    {
      method: "POST", 
      path: "/customers",
      description: "Create a new customer",
      auth: true
    },
    {
      method: "GET",
      path: "/invoices",
      description: "Retrieve all invoices",
      auth: true
    },
    {
      method: "POST",
      path: "/invoices",
      description: "Create a new invoice",
      auth: true
    },
    {
      method: "GET",
      path: "/expenses",
      description: "Retrieve all expenses",
      auth: true
    },
    {
      method: "POST",
      path: "/expenses",
      description: "Create a new expense",
      auth: true
    },
    {
      method: "GET",
      path: "/reports/financial",
      description: "Get financial reports",
      auth: true
    },
    {
      method: "GET",
      path: "/analytics/dashboard",
      description: "Get dashboard analytics",
      auth: true
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
                  src="/attached_assets/3d_1753268267691.png" 
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
              <Code className="w-5 h-5 mr-2" />
              Developer Portal
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              API <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Integrate BusinessFlow Pro with your applications using our powerful REST API
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => window.location.href = '/trial'}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Key
              </Button>
              <Button 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('documentation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-4" id="documentation">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              Quick <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Start Guide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up and running with the BusinessFlow Pro API in minutes
            </p>
          </div>

          {/* API Key Setup */}
          <Card className="mb-8 glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="w-6 h-6 text-blue-500" />
                <span>1. Get Your API Key</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>API keys are included with all paid plans.</strong> Start your free trial to get instant access to your API credentials.
                </p>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Sign up for a BusinessFlow Pro account</li>
                <li>Navigate to Settings → API Access in your dashboard</li>
                <li>Click "Generate New API Key"</li>
                <li>Copy your API key and keep it secure</li>
              </ol>
              <Button 
                onClick={() => window.location.href = '/trial'}
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-green-500" />
                <span>2. Make Your First API Call</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                
                <TabsContent value="javascript" className="space-y-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <h4 className="font-medium mb-2">Authentication Setup</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{codeExamples.javascript.auth}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(codeExamples.javascript.auth, 'js-auth')}
                      >
                        {copiedCode === 'js-auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <h4 className="font-medium mb-2">Create Invoice</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{codeExamples.javascript.invoices}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(codeExamples.javascript.invoices, 'js-invoice')}
                      >
                        {copiedCode === 'js-invoice' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="python" className="space-y-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <h4 className="font-medium mb-2">Authentication Setup</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{codeExamples.python.auth}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(codeExamples.python.auth, 'py-auth')}
                      >
                        {copiedCode === 'py-auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <h4 className="font-medium mb-2">Create Invoice</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{codeExamples.python.invoices}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(codeExamples.python.invoices, 'py-invoice')}
                      >
                        {copiedCode === 'py-invoice' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              API <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Endpoints</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete reference for all available API endpoints
            </p>
          </div>

          <div className="grid gap-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge 
                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                        className={`font-mono ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                      <span className="text-muted-foreground">{endpoint.description}</span>
                    </div>
                    {endpoint.auth && (
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        <Shield className="w-3 h-3 mr-1" />
                        Auth Required
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.href = '/trial'}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Key className="w-4 h-4 mr-2" />
              Get API Access
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              Powerful <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Sync</h3>
                <p className="text-muted-foreground">
                  All data syncs in real-time across your applications and the BusinessFlow Pro platform
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 w-fit mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-level encryption, OAuth 2.0, and rate limiting ensure your data stays secure
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 w-fit mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Infrastructure</h3>
                <p className="text-muted-foreground">
                  99.9% uptime with global CDN and redundant servers across multiple regions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Ready to Build with Our <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">API?</span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Start your free trial and get instant access to your API credentials. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/trial'}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}