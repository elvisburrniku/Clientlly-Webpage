import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, TrendingUp, PieChart, FileText, Calendar, Filter, Download, Share, Eye, Target, Zap, CheckCircle } from "lucide-react";

export default function FeatureReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      

      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-12 h-9 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
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
              <span className="text-sm sm:text-base">Back</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight">
            Insights & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Reports</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business data into actionable insights with powerful analytics, interactive dashboards, and comprehensive reporting tools.
          </p>
        </div>

        {/* Professional Business Analytics Photo */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business analytics dashboard on modern monitors"
              className="rounded-3xl shadow-2xl max-w-4xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Live Dashboard
            </Badge>
          </div>
        </div>

        {/* Sample Financial Reports */}
        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Monthly Revenue Report</h3>
              <Badge className="bg-green-100 text-green-700">March 2024</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Total Revenue</span>
                <span className="font-bold text-green-600">$47,325.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Recurring Revenue</span>
                <span className="font-semibold">$35,280.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span>One-time Sales</span>
                <span className="font-semibold">$12,045.00</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Growth vs Last Month</span>
                  <span className="text-sm font-bold text-green-600">+12.4%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Expense Breakdown</h3>
              <Badge className="bg-purple-100 text-purple-700">Q1 2024</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Total Expenses</span>
                <span className="font-bold text-red-600">$23,190.00</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Software & Tools</span>
                  <span>35% ($8,116)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Marketing</span>
                  <span>28% ($6,493)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Office & Operations</span>
                  <span>22% ($5,102)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Professional Services</span>
                  <span>15% ($3,479)</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Budget Efficiency</span>
                  <span className="text-sm font-bold text-green-600">92.3%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Report Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Financial Reports</h3>
              <p className="text-muted-foreground">Comprehensive P&L statements, balance sheets, cash flow reports, and financial performance analytics.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <PieChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Revenue Analytics</h3>
              <p className="text-muted-foreground">Track revenue trends, identify growth opportunities, and analyze customer payment patterns.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
              <p className="text-muted-foreground">Advanced analytics with predictive insights, forecasting, and performance benchmarking.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Time-based Analysis</h3>
              <p className="text-muted-foreground">Compare performance across different time periods with customizable date ranges and filters.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Filter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Reports</h3>
              <p className="text-muted-foreground">Build custom reports with drag-and-drop interface and advanced filtering options.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visual Dashboards</h3>
              <p className="text-muted-foreground">Interactive charts, graphs, and widgets that update in real-time with your business data.</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to make data-driven business decisions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Real-time Data Processing</h3>
                  <p className="text-muted-foreground">All reports update automatically as new data flows in from your business operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Interactive Visualizations</h3>
                  <p className="text-muted-foreground">Click, hover, and drill down into charts for deeper insights and detailed analysis.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Export & Sharing</h3>
                  <p className="text-muted-foreground">Share reports via email, export to PDF/Excel, or embed charts in presentations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Automated Scheduling</h3>
                  <p className="text-muted-foreground">Set up automated report delivery to stakeholders on daily, weekly, or monthly schedules.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Comparative Analysis</h3>
                  <p className="text-muted-foreground">Compare current performance with previous periods, budgets, and industry benchmarks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-muted-foreground">AI-powered forecasting helps predict future trends and identify potential issues early.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Multi-currency Support</h3>
                  <p className="text-muted-foreground">Analyze global operations with automatic currency conversion and regional insights.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Role-based Access</h3>
                  <p className="text-muted-foreground">Control who sees what data with granular permissions and user-specific dashboards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Making Data-Driven Decisions</h2>
          <p className="text-xl mb-8 text-purple-100">Transform your raw business data into powerful insights that drive growth and profitability.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Zap className="h-5 w-5 mr-2" />
              View Sample Reports
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4">
              <Download className="h-5 w-5 mr-2" />
              Download Demo Data
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-purple-100">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>50+ Report Templates</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Share className="h-5 w-5" />
              <span>Easy Sharing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}