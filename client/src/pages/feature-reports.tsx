import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, TrendingUp, PieChart, FileText, Calendar, Filter, Download, Share, Eye, Target, Zap, CheckCircle, LineChart, Activity, DollarSign, Users, ArrowUpRight, ArrowDownRight, Clock, Bell, Settings, Layers, Globe, Shield } from "lucide-react";

export default function FeatureReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-16">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                window.location.href = "/";
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="px-2 sm:px-3"
            >
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Back to Features</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 overflow-hidden">
        {/* Floating sparkle elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-16 w-4 h-4 animate-ping delay-0">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute bottom-32 right-20 w-6 h-6 animate-ping delay-1000">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute top-1/2 left-32 w-3 h-3 animate-ping delay-500">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute top-40 right-1/3 w-5 h-5 animate-ping delay-1500">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 animate-ping delay-2000">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Activity className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-6 tracking-tight leading-none">
              Advanced Business 
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Analytics & Reports
              </span>
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform raw data into actionable insights with our comprehensive analytics suite. 
              Make data-driven decisions that propel your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4">
                <Eye className="h-5 w-5 mr-2" />
                View Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Download Sample Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Key Metrics Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real-Time Business Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor your business performance with live dashboards and automated reporting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">€47,325</h3>
              <p className="text-sm text-gray-600 mb-2">Monthly Revenue</p>
              <div className="flex items-center justify-center text-green-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12.4% vs last month
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1,247</h3>
              <p className="text-sm text-gray-600 mb-2">Active Customers</p>
              <div className="flex items-center justify-center text-blue-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +8.2% growth
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3,891</h3>
              <p className="text-sm text-gray-600 mb-2">Invoices Processed</p>
              <div className="flex items-center justify-center text-purple-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +15.7% efficiency
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">94.2%</h3>
              <p className="text-sm text-gray-600 mb-2">Goal Achievement</p>
              <div className="flex items-center justify-center text-orange-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Above target
              </div>
            </Card>
          </div>
        </section>

        {/* Report Categories */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Report Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access over 50+ pre-built report templates covering every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LineChart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Financial Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive P&L statements, balance sheets, cash flow analysis, and financial health indicators.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monthly/Quarterly/Annual Reports
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Budget vs Actual Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Profit Margin Tracking
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Sales & Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Track sales performance, revenue trends, customer analytics, and growth opportunities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sales Pipeline Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer Lifetime Value
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Revenue Forecasting
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Operational Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Monitor operational efficiency, resource utilization, and process optimization opportunities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Productivity Metrics
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Efficiency Benchmarks
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Time & Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive workforce analytics including attendance patterns and productivity insights.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Attendance Tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Overtime Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Schedule Optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Filter className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Custom Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Build personalized reports with our drag-and-drop interface and advanced filtering system.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Drag & Drop Builder
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Filtering
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scheduled Delivery
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Interactive Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time visual dashboards with interactive charts, KPI tracking, and collaborative features.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time Updates
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Interactive Charts
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile Responsive
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Highlight */}
        <section>
          <Card className="overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 border-0">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Powerful Features for Data-Driven Decisions
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Layers className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Multi-dimensional Analysis</h4>
                        <p className="text-gray-600 text-sm">
                          Analyze data across multiple dimensions with advanced filtering and grouping capabilities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Global Currency Support</h4>
                        <p className="text-gray-600 text-sm">
                          Analyze financial data in multiple currencies with automatic conversion and regional insights.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bell className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Smart Alerts & Notifications</h4>
                        <p className="text-gray-600 text-sm">
                          Get notified when key metrics change or anomalies are detected in your business data.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                        <p className="text-gray-600 text-sm">
                          Role-based access control ensures sensitive financial data is only accessible to authorized users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-gray-900">Q1 2024 Performance</h4>
                      <Badge className="bg-green-100 text-green-700">+18.4%</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Revenue</span>
                        <span className="font-semibold">€142,750</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Expenses</span>
                        <span className="font-semibold">€89,420</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Profit Margin</span>
                        <span className="font-semibold text-green-600">37.4%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* CTA Section with Yellow Background - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 overflow-hidden">
        {/* Floating sparkle elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-16 w-4 h-4 animate-ping delay-0">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute bottom-32 right-20 w-6 h-6 animate-ping delay-1000">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute top-1/2 left-32 w-3 h-3 animate-ping delay-500">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute top-40 right-1/3 w-5 h-5 animate-ping delay-1500">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 animate-ping delay-2000">
            <div className="w-full h-full bg-white rounded-full opacity-75"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight">
            Ready to Transform Your 
            <span className="block">Business Intelligence?</span>
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already making smarter decisions with our advanced analytics platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4"
              onClick={() => window.location.href = '/trial'}
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Your Free Trial
            </Button>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4"
              onClick={() => window.location.href = '/subscribe'}
            >
              <Target className="h-5 w-5 mr-2" />
              Get Started Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-black" />
              </div>
              <h4 className="font-semibold mb-2">50+ Report Templates</h4>
              <p className="text-sm opacity-80">Pre-built reports for every business need</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <Activity className="h-6 w-6 text-black" />
              </div>
              <h4 className="font-semibold mb-2">Real-time Analytics</h4>
              <p className="text-sm opacity-80">Live data updates as they happen</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <Share className="h-6 w-6 text-black" />
              </div>
              <h4 className="font-semibold mb-2">Easy Collaboration</h4>
              <p className="text-sm opacity-80">Share insights with your team instantly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}