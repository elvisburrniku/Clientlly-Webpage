import { useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, CreditCard, AlertTriangle, TrendingDown, Calendar, Target, BarChart3, CheckCircle, Shield, Star, DollarSign, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeatureDebt() {
  const [activeTab, setActiveTab] = useState('overview');
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Debt Tracking",
      description: "Track all business debts including loans, credit cards, and vendor payments with automatic updates"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Payment Scheduling",
      description: "Smart payment scheduling with automated reminders and optimal payment timing recommendations"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Debt Reduction Plans",
      description: "Strategic debt reduction planning with snowball and avalanche methods for faster payoff"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Interest Optimization",
      description: "Minimize interest payments with intelligent payment allocation and refinancing opportunities"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Financial Analytics",
      description: "Comprehensive debt analysis with cash flow impact and financial health scoring"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Credit Monitoring",
      description: "Monitor business credit scores and receive alerts for opportunities to improve financial standing"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Manufacturing Co",
      rating: 5,
      text: "BusinessFlow Pro helped us reduce our debt by 40% in just 18 months. The strategic payment planning saved us thousands in interest payments."
    },
    {
      name: "Lisa Garcia",
      company: "Retail Solutions",
      rating: 5,
      text: "The debt tracking and automated reminders keep us on top of all payments. We've improved our credit score and cash flow significantly."
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
                href="/#business-overview"
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
              <CreditCard className="h-5 w-5 mr-2 animate-pulse text-red-600" />
              Strategic Debt Management
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-professional-fade text-black tracking-tight leading-tight pb-2">
              Debt <span className="animate-subtle-gradient">Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Take control of your business finances with comprehensive debt tracking, payment scheduling, and strategic reduction planning
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Debt Tracking
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Payment Scheduling
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Reduction Plans
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Credit Monitoring
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Analytics
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
              Complete Debt Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage, optimize, and eliminate business debt effectively
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
              Debt Management Features
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'tracking', label: 'Debt Tracking', icon: CreditCard },
                  { id: 'planning', label: 'Reduction Plans', icon: Target },
                  { id: 'payments', label: 'Payment Schedule', icon: Calendar }
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
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-red-600 mb-2">€87,500</div>
                      <div className="text-gray-600 dark:text-gray-300">Total Debt</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-blue-600 mb-2">€2,340</div>
                      <div className="text-gray-600 dark:text-gray-300">Monthly Payments</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <div className="text-3xl font-black text-green-600 mb-2">24 mo</div>
                      <div className="text-gray-600 dark:text-gray-300">Projected Payoff</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tracking' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Active Debts</h3>
                  <div className="grid gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Business Credit Card</div>
                          <div className="text-sm text-gray-600">15.99% APR • Min Payment: €450</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">€12,500</div>
                          <div className="text-sm text-red-600">High Priority</div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Equipment Loan</div>
                          <div className="text-sm text-gray-600">8.5% APR • Min Payment: €890</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">€45,000</div>
                          <div className="text-sm text-blue-600">On Track</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'planning' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Debt Reduction Strategy</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Avalanche Method</h4>
                        <p className="text-sm text-blue-600">Pay minimums on all debts, extra on highest interest rate</p>
                        <div className="mt-2 text-blue-800 font-semibold">Interest Saved: €4,567</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Snowball Method</h4>
                        <p className="text-sm text-green-600">Pay minimums on all debts, extra on smallest balance</p>
                        <div className="mt-2 text-green-800 font-semibold">Faster Motivation</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Payments</h3>
                  <div className="grid gap-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <div className="font-semibold text-yellow-800">Business Credit Card - Due Tomorrow</div>
                          <div className="text-sm text-yellow-600">€450 minimum payment required</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-blue-800">Equipment Loan - Due March 28</div>
                          <div className="text-sm text-blue-600">€890 monthly payment scheduled</div>
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
            Ready to <span className="animate-subtle-gradient">Take Control of Your Debt?</span>
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Join thousands of businesses using BusinessFlow Pro to strategically manage debt, reduce interest payments, and improve financial health.
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
        </div>
      </section>
    </div>
  );
}