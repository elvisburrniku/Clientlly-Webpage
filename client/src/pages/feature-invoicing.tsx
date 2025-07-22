import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Send, 
  CreditCard, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  ArrowLeft,
  Zap,
  Globe,
  Smartphone,
  Mail,
  Download
} from "lucide-react";

export default function FeatureInvoicing() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Header */}
      <div className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Professional Invoicing</span>
            </div>
            <Button 
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 fade-in">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Professional Invoicing Suite
                </Badge>
                <h1 className="text-5xl font-bold text-foreground">
                  Create stunning invoices that <span className="gradient-text">get paid faster</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Professional invoice creation, automated payment reminders, and seamless payment tracking. 
                  Get paid 40% faster with our intelligent invoicing system.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 fade-in stagger-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Custom branding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Auto payment reminders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Multi-currency support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <Card className="relative glass-effect border-white/20 p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Invoice #INV-001</h3>
                    <Badge className="bg-green-100 text-green-700">Paid</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/50 rounded-lg">
                      <span className="font-medium">Web Development Services</span>
                      <span className="font-bold text-blue-600">$2,500.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/50 rounded-lg">
                      <span className="font-medium">Design Consultation</span>
                      <span className="font-bold text-blue-600">$750.00</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-blue-600">$3,250.00</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete invoicing solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, send, and track professional invoices
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "overview", label: "Overview", icon: FileText },
              { id: "automation", label: "Automation", icon: Zap },
              { id: "payments", label: "Payments", icon: CreditCard },
              { id: "tracking", label: "Tracking", icon: Calendar }
            ].map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === tab.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Professional invoice design</h3>
                  <p className="text-lg text-muted-foreground">
                    Create beautiful, professional invoices that reflect your brand. 
                    Choose from dozens of templates or customize your own with your logo, colors, and fonts.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Custom branding and logo placement",
                      "Professional templates for every industry",
                      "Automatic tax calculations",
                      "Multi-language support",
                      "PDF generation and email delivery"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                    <div className="bg-white rounded-2xl p-6 shadow-2xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-24 h-8 bg-blue-600 rounded"></div>
                        <div className="text-right">
                          <div className="w-20 h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="w-16 h-3 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                        <div className="border-t pt-4 mt-8">
                          <div className="flex justify-between items-center">
                            <div className="w-16 h-6 bg-blue-600 rounded"></div>
                            <div className="w-20 h-8 bg-blue-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "automation" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Smart automation features</h3>
                  <p className="text-lg text-muted-foreground">
                    Save hours every week with intelligent automation. From recurring invoices to payment reminders, 
                    let our system handle the routine tasks so you can focus on growing your business.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Recurring invoice automation",
                      "Smart payment reminder sequences",
                      "Late fee calculations",
                      "Auto-follow-up emails",
                      "Payment confirmation notifications"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Day 0", action: "Invoice sent", status: "completed" },
                    { title: "Day 3", action: "Payment reminder", status: "completed" },
                    { title: "Day 7", action: "Second reminder", status: "completed" },
                    { title: "Day 14", action: "Final notice", status: "active" },
                    { title: "Day 21", action: "Late fee applied", status: "pending" }
                  ].map((step, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border ${
                      step.status === 'completed' ? 'bg-green-50 border-green-200' :
                      step.status === 'active' ? 'bg-blue-50 border-blue-200' :
                      'bg-gray-50 border-gray-200'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'active' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{step.title}</div>
                        <div className="text-sm text-muted-foreground">{step.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Accept payments anywhere</h3>
                  <p className="text-lg text-muted-foreground">
                    Make it easy for clients to pay with multiple payment options. 
                    Accept credit cards, bank transfers, PayPal, and more with secure, PCI-compliant processing.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Credit card and debit card payments",
                      "Bank transfers and ACH payments",
                      "PayPal and digital wallet integration",
                      "Cryptocurrency payments (Bitcoin, Ethereum)",
                      "Buy now, pay later options"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CreditCard className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Credit Cards", icon: CreditCard, color: "bg-blue-500" },
                    { name: "Bank Transfer", icon: DollarSign, color: "bg-green-500" },
                    { name: "PayPal", icon: Globe, color: "bg-purple-500" },
                    { name: "Mobile Pay", icon: Smartphone, color: "bg-orange-500" }
                  ].map((payment, index) => (
                    <div key={index} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className={`w-12 h-12 ${payment.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                        <payment.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground">{payment.name}</h4>
                      <div className="mt-2 text-sm text-green-600 font-medium">✓ Available</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tracking" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Real-time tracking & analytics</h3>
                  <p className="text-lg text-muted-foreground">
                    Get complete visibility into your invoicing process. Track when invoices are viewed, 
                    monitor payment trends, and get insights to improve your cash flow.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time invoice status tracking",
                      "Payment history and trends",
                      "Client payment behavior analytics",
                      "Cash flow forecasting",
                      "Overdue invoice alerts"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Invoice Performance</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sent this month</span>
                        <span className="font-bold text-2xl">47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Paid on time</span>
                        <span className="font-bold text-2xl text-green-600">89%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Average payment time</span>
                        <span className="font-bold text-2xl text-blue-600">6 days</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Outstanding Invoices</h4>
                    <div className="space-y-3">
                      {[
                        { client: "Acme Corp", amount: "$2,400", days: "3 days overdue", status: "overdue" },
                        { client: "Tech Solutions", amount: "$1,800", days: "Due tomorrow", status: "due" },
                        { client: "Design Studio", amount: "$950", days: "Due in 5 days", status: "upcoming" }
                      ].map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div>
                            <div className="font-medium">{invoice.client}</div>
                            <div className={`text-sm ${
                              invoice.status === 'overdue' ? 'text-red-600' :
                              invoice.status === 'due' ? 'text-orange-600' :
                              'text-gray-600'
                            }`}>{invoice.days}</div>
                          </div>
                          <div className="font-bold text-right">{invoice.amount}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 fade-in">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to get paid faster?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using our invoicing solution to improve their cash flow
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}