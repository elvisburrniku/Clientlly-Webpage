import { useState } from 'react';
import { ArrowLeft, Users, Clock, Calendar, TrendingUp, Award, FileText, BarChart3, UserCheck, DollarSign, Shield, Star, PlayCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HRFeaturePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Employee Management",
      description: "Complete employee profiles with documents, contact info, and role management"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Tracking",
      description: "Track work hours, overtime, breaks with GPS location and mobile app integration"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Leave Management",
      description: "Manage vacation requests, sick leave, and time-off approvals with automated workflows"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Payroll Integration",
      description: "Seamless payroll processing with tax calculations and direct deposit capabilities"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Reviews",
      description: "360-degree performance evaluations with goal tracking and development plans"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition & Rewards",
      description: "Employee recognition programs with achievements and milestone tracking"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechStart Inc",
      quote: "BusinessFlow Pro's HR module transformed our employee management. We reduced HR admin time by 60% and improved employee satisfaction significantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Manager", 
      company: "GrowthCorp",
      quote: "The automated time tracking and payroll integration saved us countless hours. Our employees love the mobile app for clocking in and requesting time off.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center space-x-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Features</span>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Start Your Trial
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>HR Management Suite</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Complete
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text"> HR Management</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your human resources with comprehensive employee management, automated payroll, performance tracking, and advanced analytics - all in one integrated platform.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 lg:p-8 hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
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

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Your HR Command Center
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get a complete overview of your workforce with our intuitive HR dashboard
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-1">
              <div className="bg-white dark:bg-gray-900 rounded-t-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">HR Dashboard</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Employee Management Overview</p>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">Total Employees</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">127</div>
                    <div className="text-xs text-emerald-600">+12 this month</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">Hours Logged</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">2,847</div>
                    <div className="text-xs text-blue-600">This week</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Leave Requests</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">23</div>
                    <div className="text-xs text-purple-600">5 pending</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-600">Performance</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">94%</div>
                    <div className="text-xs text-orange-600">Average score</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recent Employee Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <UserCheck className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Sarah Johnson checked in at 9:15 AM</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Mike Chen requested vacation leave for next week</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Award className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Emily Davis completed performance review</span>
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
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Everything You Need for HR Success
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
              { id: 'employees', label: 'Employee Management', icon: <Users className="h-4 w-4" /> },
              { id: 'time', label: 'Time Tracking', icon: <Clock className="h-4 w-4" /> },
              { id: 'payroll', label: 'Payroll', icon: <DollarSign className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white shadow-lg'
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
                    Complete HR Management Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Transform your HR operations with our comprehensive suite of tools designed for modern businesses.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">Automated employee onboarding</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">Real-time performance tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">Compliance management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">Advanced analytics & reporting</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">All-in-One Platform</h4>
                    <p className="text-gray-600 dark:text-gray-300">Manage every aspect of your HR operations from a single, intuitive dashboard.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'employees' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Employee Management</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Employee Profiles</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Complete employee information</li>
                      <li>• Document management</li>
                      <li>• Contact details & emergency contacts</li>
                      <li>• Role & department assignments</li>
                      <li>• Skills & certifications tracking</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Onboarding</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Automated onboarding workflows</li>
                      <li>• Digital forms & signatures</li>
                      <li>• Task assignments & tracking</li>
                      <li>• Welcome packages</li>
                      <li>• Training schedules</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Organization Chart</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Visual org chart</li>
                      <li>• Reporting relationships</li>
                      <li>• Department structures</li>
                      <li>• Role hierarchies</li>
                      <li>• Team management</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'time' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Time Tracking & Attendance</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">GPS-enabled clock in/out</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Break time tracking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Overtime calculations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Shift scheduling</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Time Tracking Dashboard</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Regular Hours</span>
                        <span className="font-semibold text-gray-900 dark:text-white">40:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Overtime</span>
                        <span className="font-semibold text-orange-600">8:30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Total This Week</span>
                        <span className="font-semibold text-emerald-600">48:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payroll' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payroll Management</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Automated Processing</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Automatic salary calculations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Tax deductions & compliance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Direct deposit integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">Bonus & commission tracking</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Compliance & Reporting</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>• Automated tax filing</p>
                      <p>• Year-end reporting (W-2, 1099)</p>
                      <p>• Audit trails & record keeping</p>
                      <p>• Multi-state compliance</p>
                      <p>• Benefits integration</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Trusted by HR Teams Worldwide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-emerald-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-5xl font-black mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have streamlined their HR processes with BusinessFlow Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Your Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}