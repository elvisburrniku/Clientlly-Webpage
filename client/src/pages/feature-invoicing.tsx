import { useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, FileText, Clock, DollarSign, Euro, Users, CheckCircle, Send, CreditCard, Calendar, TrendingUp, BarChart3, Star, PlayCircle, Eye, Filter, Plus, Download, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import invoiceIndexImage from '@assets/faturat index_1753697333049.jpg';

export default function FeatureInvoicing() {
  const [activeTab, setActiveTab] = useState('overview');
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Custom Invoice Templates",
      description: "Create professional invoices with customizable templates, branding options, and electronic signature collection"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Automated Reminders",
      description: "Set up automatic payment reminders for overdue invoices with customizable schedules in Euro currency"
    },
    {
      icon: <Euro className="h-6 w-6" />,
      title: "Payment Tracking",
      description: "Track Euro payments in real-time with detailed status updates and comprehensive payment history"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Management",
      description: "Manage client information, payment terms, billing preferences, and e-signature workflows in one place"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Financial Reports",
      description: "Generate comprehensive Euro-based reports on invoice performance and revenue analytics"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Multi-Channel Delivery",
      description: "Send invoices via email, SMS, or integrate with client portals with e-signature capabilities"
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-black px-6 py-3 rounded-2xl text-sm font-bold mb-6 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span>Professional Invoicing Suite</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-black mb-6 animate-professional-fade tracking-tight leading-tight">
              Professional
              <span className="animate-subtle-gradient"> Invoicing</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
              Create stunning invoices, automate payment reminders, and track your revenue with our comprehensive invoicing platform designed for modern businesses.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invoice Dashboard Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              Your Invoice Management Hub
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Manage all your invoices from one powerful dashboard with comprehensive tracking and analytics
            </p>
          </div>

          {/* Dashboard Preview with Blurred Client Data */}
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
              <div className="bg-white dark:bg-gray-900 rounded-t-2xl">
                {/* Dashboard Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Invoice Dashboard</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your invoicing workflow</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        New Invoice
                      </Button>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">Total Invoices</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">247</div>
                      <div className="text-xs text-blue-600">+12 this month</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">Paid Invoices</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">189</div>
                      <div className="text-xs text-green-600">76% success rate</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">Pending</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">42</div>
                      <div className="text-xs text-orange-600">3 overdue</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Euro className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-600">Revenue</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">€47,320</div>
                      <div className="text-xs text-purple-600">This month</div>
                    </div>
                  </div>
                </div>

                {/* Invoice Table Preview */}
                <div className="p-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 relative overflow-hidden">
                    <img 
                      src={invoiceIndexImage} 
                      alt="Invoice Management Dashboard"
                      className="w-full h-auto rounded-lg shadow-lg"
                      style={{
                        filter: 'blur(0.8px)',
                        WebkitFilter: 'blur(0.8px)'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/3 rounded-lg"></div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Eye className="h-4 w-4 inline mr-1" />
                      Live Invoice Dashboard
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Real invoice management features:</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        <div>• Invoice numbers & tracking</div>
                        <div>• Payment status monitoring</div>
                        <div>• Client communication tools</div>
                        <div>• Automated workflow management</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              Complete Invoicing Solution
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
              { id: 'templates', label: 'Templates', icon: <FileText className="h-4 w-4" /> },
              { id: 'tracking', label: 'Payment Tracking', icon: <Euro className="h-4 w-4" /> },
              { id: 'automation', label: 'Automation', icon: <Clock className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Professional Invoicing Made Simple
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Create, send, and track professional invoices with ease. Our comprehensive invoicing solution helps you get paid faster and manage your cash flow effectively.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Customizable invoice templates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Automatic payment reminders</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Real-time payment tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Multi-currency support</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Get Paid Faster</h4>
                    <p className="text-gray-600 dark:text-gray-300">Streamline your billing process and improve cash flow with automated invoicing.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'templates' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Custom Invoice Templates</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Professional Designs</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Multiple template layouts</li>
                      <li>• Custom branding & logos</li>
                      <li>• Color scheme customization</li>
                      <li>• Font and style options</li>
                      <li>• Mobile-responsive designs</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Custom Fields</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Add custom fields</li>
                      <li>• Terms and conditions</li>
                      <li>• Payment instructions</li>
                      <li>• Tax calculations</li>
                      <li>• Discount management</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Language</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• 20+ language support</li>
                      <li>• Currency localization</li>
                      <li>• Date format options</li>
                      <li>• Regional tax settings</li>
                      <li>• Cultural preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tracking' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Advanced Payment Tracking</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Real-Time Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700 dark:text-gray-300">Invoice viewed notifications</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Euro className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Payment received alerts</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700 dark:text-gray-300">Due date reminders</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700 dark:text-gray-300">Payment analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Payment Methods</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Bank Transfer</span>
                        <span className="font-semibold text-gray-900 dark:text-white">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Credit Card</span>
                        <span className="font-semibold text-gray-900 dark:text-white">35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Cash</span>
                        <span className="font-semibold text-gray-900 dark:text-white">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'automation' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Intelligent Automation</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Automated Workflows</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Send className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700 dark:text-gray-300">Auto-send invoices on project completion</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Payment reminder sequences</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700 dark:text-gray-300">Follow-up scheduling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700 dark:text-gray-300">Auto-reconciliation</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Smart Features</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>• AI-powered payment predictions</p>
                      <p>• Automated late fee calculations</p>
                      <p>• Smart dunning management</p>
                      <p>• Predictive cash flow analysis</p>
                      <p>• Client payment behavior insights</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 animate-professional-fade tracking-tight leading-tight">
                Ready to <span className="animate-subtle-gradient">Streamline Your Invoicing?</span>
              </h2>
              <p className="text-xl text-black leading-relaxed font-medium">
                Join thousands of businesses that have improved their cash flow with BusinessFlow Pro's professional invoicing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold" onClick={() => window.location.href = '/trial'}>
                <PlayCircle className="mr-2 h-6 w-6" />
                Start Your Trial
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-bold border-2" onClick={() => window.location.href = '/subscribe'}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Footer */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">14-day free trial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Full access to all features with no commitment</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cancel anytime</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">No long-term contracts or cancellation fees</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Data protection & privacy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">GDPR compliant with enterprise-grade security</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free setup & migration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Expert assistance to migrate your existing data</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">24/7 expert support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock assistance from our support team</p>
            </div>
            
            <div className="text-center p-6">
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