import { useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Users, Package, FileText, Euro, TrendingUp, Calendar, CheckCircle, Truck, BarChart3, Star, Building, Phone, Mail, Shield, Award, Download, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeatureVendors() {
  const [activeTab, setActiveTab] = useState('overview');
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Supplier Database",
      description: "Comprehensive vendor profiles with contact information, payment terms, and performance history tracking"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Purchase Orders",
      description: "Create, send, and track purchase orders with automated approval workflows and delivery tracking"
    },
    {
      icon: <Euro className="h-6 w-6" />,
      title: "Payment Management",
      description: "Track vendor payments, manage payment terms, and maintain Euro-based financial records"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Monitor vendor performance with delivery times, quality metrics, and cost analysis reports"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Delivery Tracking",
      description: "Real-time tracking of orders from placement to delivery with automated status updates"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Cost Analysis",
      description: "Detailed spending analysis by vendor, category, and time period with Euro currency support"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Global Manufacturing",
      rating: 5,
      text: "The vendor management system has transformed our supplier relationships. We've reduced procurement costs by 25% and improved delivery times significantly."
    },
    {
      name: "James Wilson",
      company: "Tech Solutions Ltd",
      rating: 5,
      text: "Outstanding purchase order management. The automated workflows have eliminated manual errors and streamlined our entire procurement process."
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
              <Building className="h-5 w-5 mr-2 animate-pulse text-green-600" />
              Professional Vendor Management
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-professional-fade text-black tracking-tight leading-tight pb-2">
              <span className="animate-subtle-gradient">Vendor</span> Management
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline supplier relationships with comprehensive vendor tracking, purchase order management, and performance analytics
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Supplier Database
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Purchase Orders
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Performance Analytics
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Cost Management
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Delivery Tracking
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
              Complete Vendor Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage suppliers, track purchases, and optimize vendor relationships
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
              Vendor Management Features
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'orders', label: 'Purchase Orders', icon: FileText },
                  { id: 'performance', label: 'Performance', icon: TrendingUp },
                  { id: 'analytics', label: 'Analytics', icon: BarChart3 }
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
                      <div className="text-3xl font-black text-blue-600 mb-2">247</div>
                      <div className="text-gray-600 dark:text-gray-300">Active Vendors</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-green-600 mb-2">€48,750</div>
                      <div className="text-gray-600 dark:text-gray-300">Monthly Spend</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-purple-600 mb-2">96%</div>
                      <div className="text-gray-600 dark:text-gray-300">On-Time Delivery</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Purchase Order Management</h3>
                  <div className="grid gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">PO-2024-001</div>
                          <div className="text-sm text-gray-600">Office Supplies Ltd</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">€2,450.00</div>
                          <div className="text-sm text-green-600">Delivered</div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">PO-2024-002</div>
                          <div className="text-sm text-gray-600">Tech Equipment Inc</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">€8,750.00</div>
                          <div className="text-sm text-orange-600">In Transit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vendor Performance Metrics</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Quality Rating</span>
                        <span className="font-semibold">4.8/5.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Performance</span>
                        <span className="font-semibold">96%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Efficiency</span>
                        <span className="font-semibold">92%</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Response Time</span>
                        <span className="font-semibold">2.3 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Terms</span>
                        <span className="font-semibold">Net 30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contract Compliance</span>
                        <span className="font-semibold">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Spending Analytics</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-4">Top Vendors by Spend</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Office Supplies Ltd</span>
                          <span>€12,450</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tech Equipment Inc</span>
                          <span>€8,750</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Manufacturing Co</span>
                          <span>€6,320</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-4">Expense Categories</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Office Supplies</span>
                          <span>€15,200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Equipment</span>
                          <span>€8,750</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Services</span>
                          <span>€4,500</span>
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
            Ready to <span className="animate-subtle-gradient">Streamline Your Vendors?</span>
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Join thousands of businesses using BusinessFlow Pro to optimize their vendor relationships and reduce procurement costs.
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