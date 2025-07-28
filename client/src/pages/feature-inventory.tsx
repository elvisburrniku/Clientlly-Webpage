import { useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Package, Truck, BarChart3, Euro, TrendingUp, AlertTriangle, CheckCircle, Scan, MapPin, Calendar, Star, ShoppingCart, Warehouse, Clock, Download, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeatureInventory() {
  const [activeTab, setActiveTab] = useState('overview');
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Real-Time Tracking",
      description: "Monitor inventory levels in real-time with automatic updates and low-stock alerts across all locations"
    },
    {
      icon: <Scan className="h-6 w-6" />,
      title: "Barcode Scanning",
      description: "Streamline inventory management with barcode scanning for quick item identification and updates"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Demand Forecasting",
      description: "AI-powered demand forecasting to optimize stock levels and prevent stockouts or overstock"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Multi-Location",
      description: "Manage inventory across multiple warehouses and locations with centralized control"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Order Management",
      description: "Automated purchase orders and supplier management with delivery tracking and Euro pricing"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive inventory analytics with turnover rates, profit margins, and performance metrics"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Retail Solutions Inc",
      rating: 5,
      text: "The inventory management system has revolutionized our operations. We've reduced stockouts by 85% and improved inventory turnover by 40%."
    },
    {
      name: "Michael Torres",
      company: "Warehouse Dynamics",
      rating: 5,
      text: "Real-time tracking and automated reordering have saved us countless hours. The multi-location support is exactly what we needed."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a 
                href="/#features"
                className="inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Features</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        {/* Floating sparkle animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-black font-medium mb-6">
              <Warehouse className="h-5 w-5 mr-2 animate-pulse text-green-600" />
              Smart Inventory Control
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-professional-fade text-black tracking-tight leading-tight pb-2">
              <span className="animate-subtle-gradient">Inventory</span> Management
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time inventory tracking with AI-powered demand forecasting, automated reordering, and multi-location management
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Real-Time Tracking
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Barcode Scanning
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                AI Forecasting
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Multi-Location
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Order Automation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Inventory Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage inventory, track orders, and optimize stock levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Interface */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Inventory Management Features
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'tracking', label: 'Real-Time Tracking', icon: Package },
                  { id: 'forecasting', label: 'AI Forecasting', icon: TrendingUp },
                  { id: 'alerts', label: 'Alerts & Notifications', icon: AlertTriangle }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <tab.icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-blue-600 mb-2">1,247</div>
                      <div className="text-gray-600 dark:text-gray-300">Items in Stock</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-green-600 mb-2">€184,500</div>
                      <div className="text-gray-600 dark:text-gray-300">Total Inventory Value</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-orange-600 mb-2">18</div>
                      <div className="text-gray-600 dark:text-gray-300">Low Stock Alerts</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tracking' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Current Inventory Status</h3>
                  <div className="grid gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Office Supplies</div>
                          <div className="text-sm text-gray-600">SKU: OS-001</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">247 units</div>
                          <div className="text-sm text-green-600">In Stock</div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Tech Equipment</div>
                          <div className="text-sm text-gray-600">SKU: TE-002</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">15 units</div>
                          <div className="text-sm text-orange-600">Low Stock</div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Manufacturing Tools</div>
                          <div className="text-sm text-gray-600">SKU: MT-003</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">0 units</div>
                          <div className="text-sm text-red-600">Out of Stock</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'forecasting' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Demand Forecasting</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Next Week Demand</span>
                        <span className="font-semibold">+12% increase</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Seasonal Trend</span>
                        <span className="font-semibold">Peak season</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reorder Recommendation</span>
                        <span className="font-semibold">5 items</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Stock Turnover Rate</span>
                        <span className="font-semibold">3.2x monthly</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Optimal Stock Level</span>
                        <span className="font-semibold">1,450 units</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Savings</span>
                        <span className="font-semibold">€8,750/month</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'alerts' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alert Management</h3>
                  <div className="grid gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                        <div>
                          <div className="font-semibold text-red-800">Critical Stock Alert</div>
                          <div className="text-sm text-red-600">Manufacturing Tools (MT-003) is out of stock</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-600 mr-3" />
                        <div>
                          <div className="font-semibold text-orange-800">Low Stock Warning</div>
                          <div className="text-sm text-orange-600">Tech Equipment (TE-002) below minimum threshold</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Truck className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-blue-800">Delivery Update</div>
                          <div className="text-sm text-blue-600">Purchase order PO-2024-003 arriving tomorrow</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-600 text-orange-600" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Yellow Background */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        {/* Floating sparkle animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-professional-fade text-black tracking-tight leading-tight">
            Ready to <span className="animate-subtle-gradient">Optimize Your Inventory?</span>
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Join thousands of businesses using BusinessFlow Pro to reduce stockouts, optimize inventory levels, and increase profitability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 text-lg rounded-xl shadow-lg"
              onClick={() => window.location.href = "/trial"}
            >
              Start Your Trial
            </Button>
            
            <Button 
              className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 text-lg rounded-xl shadow-lg"
              onClick={() => window.location.href = "/subscribe"}
            >
              Buy Now
            </Button>
          </div>
          
          <div className="mt-8 text-black opacity-70 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </div>
          
          {/* Arrow indicator for trust indicators */}
          <div 
            className="mt-12 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => document.querySelector('#trust-indicators')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="text-black text-lg font-bold mb-4">Trust & Security Details</div>
            <div className="animate-bounce hover:animate-pulse">
              <svg className="w-12 h-12 text-black animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="text-black text-sm opacity-60 mt-2">Click to view details</div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Footer */}
      <section id="trust-indicators" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/trial"}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">14-day free trial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Full access to all features with no commitment</p>
            </div>
            
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/cancel-anytime"}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cancel anytime</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">No long-term contracts or cancellation fees</p>
            </div>
            
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/data-protection"}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Data protection & privacy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">GDPR compliant with enterprise-grade security</p>
            </div>
            
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/setup-migration"}
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free setup & migration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Expert assistance to migrate your existing data</p>
            </div>
            
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/expert-support"}
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">24/7 expert support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock assistance from our support team</p>
            </div>
            
            <div 
              className="text-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => window.location.href = "/bank-security"}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Bank-level security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">256-bit SSL encryption and SOC 2 compliance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}