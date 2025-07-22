import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Globe, DollarSign, TrendingUp, RefreshCw, Clock, Calculator, CheckCircle, Zap, BarChart3, Shield } from "lucide-react";

export default function FeatureMultiCurrency() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/attached_assets/3d_1753195741585.png" 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain"
              />
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/#features">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Features
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Globe className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Multi-Currency <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Operate globally with confidence. Handle multiple currencies, automatic conversions, and international transactions seamlessly in one platform.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/image_1752926087190.png" 
              alt="Multi-Currency Dashboard" 
              className="rounded-3xl shadow-2xl max-w-4xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white">
              10+ Currencies Supported
            </Badge>
          </div>
        </div>

        {/* Currency Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Exchange Rates</h3>
              <p className="text-muted-foreground">Automatic currency conversion using live exchange rates updated every minute for accurate pricing.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automatic Detection</h3>
              <p className="text-muted-foreground">Automatically detects customer location and displays prices in their local currency for better user experience.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Currency Invoicing</h3>
              <p className="text-muted-foreground">Create invoices in any supported currency with automatic tax calculations and payment processing.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Consolidated Reporting</h3>
              <p className="text-muted-foreground">View all transactions in your base currency with detailed breakdowns by individual currencies.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Historical Rates</h3>
              <p className="text-muted-foreground">Access historical exchange rates for accurate record-keeping and financial reporting across time periods.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exchange Rate Alerts</h3>
              <p className="text-muted-foreground">Set up notifications for favorable exchange rates and track currency performance over time.</p>
            </CardContent>
          </Card>
        </div>

        {/* Supported Currencies */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Currencies</h2>
            <p className="text-xl text-muted-foreground">Handle transactions in major global currencies with automatic conversion</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">$</div>
              <div className="text-sm font-medium">USD</div>
              <div className="text-xs text-muted-foreground">US Dollar</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600">€</div>
              <div className="text-sm font-medium">EUR</div>
              <div className="text-xs text-muted-foreground">Euro</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600">£</div>
              <div className="text-sm font-medium">GBP</div>
              <div className="text-xs text-muted-foreground">British Pound</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-orange-600">¥</div>
              <div className="text-sm font-medium">JPY</div>
              <div className="text-xs text-muted-foreground">Japanese Yen</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-red-600">C$</div>
              <div className="text-sm font-medium">CAD</div>
              <div className="text-xs text-muted-foreground">Canadian Dollar</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Automatic Location Detection</h3>
                  <p className="text-muted-foreground">Prices automatically display in visitor's local currency based on their location.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Manual Currency Selection</h3>
                  <p className="text-muted-foreground">Users can manually switch between any supported currency at any time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Banking Integration</h3>
                  <p className="text-muted-foreground">Connect with international banks for seamless multi-currency account management.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Tax Compliance</h3>
                  <p className="text-muted-foreground">Automatic tax calculations for different countries and jurisdictions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Payment Processing</h3>
                  <p className="text-muted-foreground">Accept payments in multiple currencies with automatic settlement options.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Fraud Protection</h3>
                  <p className="text-muted-foreground">Advanced security measures for international transactions and currency exchanges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Go Global Today</h2>
          <p className="text-xl mb-8 text-green-100">Expand your business internationally with seamless multi-currency support and automatic location-based pricing.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Globe className="h-5 w-5 mr-2" />
              Try Multi-Currency
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4">
              <Calculator className="h-5 w-5 mr-2" />
              Currency Calculator
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-green-100">
            <div className="flex items-center space-x-2">
              <RefreshCw className="h-5 w-5" />
              <span>Live Exchange Rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Instant Conversion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}