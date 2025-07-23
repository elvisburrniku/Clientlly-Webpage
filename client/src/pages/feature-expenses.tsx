import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Receipt, 
  Camera, 
  PieChart, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle,
  Upload,
  FileText,
  Calculator,
  BarChart3,
  Download,
  Smartphone
} from "lucide-react";

export default function FeatureExpenses() {
  const [activeTab, setActiveTab] = useState("capture");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-slow"></div>
      </div>

      {/* Background Elements - Main Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        {/* Grid Pattern - Applied to entire page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Additional Grid Pattern for all sections */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
      {/* Header */}
      <div className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.location.href = "https://d4cb036e-bd85-4e8e-949b-e764eb6c2acb-00-1l2tkkrpkl7fy.worf.replit.dev/#features"}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Features</span>
            </button>
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/logo-transparent.svg" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/15 group-hover:to-pink-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
            <Button 
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              className="bg-green-600 hover:bg-green-700 text-white"
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
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                  Tax-Ready Expense Management
                </Badge>
                <h1 className="text-5xl font-bold text-foreground">
                  Get set for tax time with <span className="gradient-text">organized expenses</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Capture receipts instantly with your phone, automatically categorize expenses, 
                  and generate tax-ready reports in seconds. Never lose a receipt again.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 fade-in stagger-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">AI-powered categorization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Receipt scanning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Tax-ready reports</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Try Receipt Scan
                </Button>
              </div>
            </div>

            <div className="relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative space-y-6">
                <Card className="glass-effect border-white/20 p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Receipt Captured</h3>
                      <p className="text-sm text-muted-foreground">Office supplies - $47.99</p>
                    </div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <div className="h-3 bg-green-600 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-muted-foreground">Receipts this month</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">$4,299</div>
                    <div className="text-sm text-muted-foreground">Total expenses</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete expense management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From receipt capture to tax reports, manage every aspect of your business expenses
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "capture", label: "Receipt Capture", icon: Camera },
              { id: "categorization", label: "Categorization", icon: PieChart },
              { id: "reporting", label: "Reporting", icon: BarChart3 },
              { id: "insights", label: "Insights", icon: TrendingUp }
            ].map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === tab.id ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : ''
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
            {activeTab === "capture" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Capture receipts instantly</h3>
                  <p className="text-lg text-muted-foreground">
                    Take photos of receipts with your mobile device and our AI automatically extracts all the important data. 
                    No more manual data entry or lost receipts.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "AI-powered receipt scanning with 99% accuracy",
                      "Extract vendor, amount, date, and category automatically",
                      "Support for receipts in multiple languages",
                      "Bulk upload for multiple receipts",
                      "Cloud storage with searchable archive"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Camera className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-3xl">
                    <Smartphone className="mx-auto mb-6 h-32 w-20 text-gray-400" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">Receipt processed</span>
                        </div>
                        <div className="text-sm space-y-1 text-muted-foreground">
                          <div>Vendor: Office Depot</div>
                          <div>Amount: $127.45</div>
                          <div>Category: Office Supplies</div>
                          <div>Date: Today</div>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Another Receipt
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "categorization" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Smart expense categorization</h3>
                  <p className="text-lg text-muted-foreground">
                    Our AI learns your business patterns and automatically categorizes expenses according to tax codes. 
                    Customize categories to match your specific business needs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic categorization using machine learning",
                      "Tax-compliant category suggestions",
                      "Custom category creation and rules",
                      "Bulk recategorization tools",
                      "Category-based spending limits and alerts"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <PieChart className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Office Supplies", amount: "$1,234", percent: 28, color: "bg-blue-500" },
                      { name: "Travel", amount: "$987", percent: 22, color: "bg-green-500" },
                      { name: "Software", amount: "$756", percent: 17, color: "bg-purple-500" },
                      { name: "Meals", amount: "$543", percent: 12, color: "bg-orange-500" }
                    ].map((category, index) => (
                      <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="text-sm font-medium">{category.percent}%</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">{category.name}</div>
                        <div className="text-lg font-bold">{category.amount}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${category.color}`}
                            style={{ width: `${category.percent * 3}%` }}
                          ></div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reporting" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Tax-ready reports</h3>
                  <p className="text-lg text-muted-foreground">
                    Generate comprehensive expense reports that are ready for tax filing. 
                    Export to popular accounting software or share directly with your accountant.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Tax-compliant expense reports by category",
                      "Monthly and yearly financial summaries",
                      "Mileage and travel expense reports",
                      "Export to Excel, PDF, and accounting software",
                      "Direct integration with QuickBooks and Xero"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <BarChart3 className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Monthly Expense Report</h4>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { category: "Office Supplies", amount: "$1,234.56", deductible: "100%" },
                        { category: "Business Meals", amount: "$987.43", deductible: "50%" },
                        { category: "Travel", amount: "$756.89", deductible: "100%" },
                        { category: "Software", amount: "$543.21", deductible: "100%" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div>
                            <div className="font-medium">{item.category}</div>
                            <div className="text-sm text-green-600">{item.deductible} deductible</div>
                          </div>
                          <div className="font-bold">{item.amount}</div>
                        </div>
                      ))}
                      <div className="border-t pt-3 flex items-center justify-between font-bold text-lg">
                        <span>Total Deductible</span>
                        <span className="text-green-600">$3,265.59</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "insights" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Business expense insights</h3>
                  <p className="text-lg text-muted-foreground">
                    Get actionable insights into your spending patterns. Identify cost-saving opportunities 
                    and track your progress toward financial goals.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Spending trend analysis and forecasting",
                      "Budget vs actual expense tracking",
                      "Cost-saving opportunity identification",
                      "Expense pattern recognition and alerts",
                      "Year-over-year comparison reports"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Spending Trends</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">This month</span>
                        <div className="text-right">
                          <div className="font-bold text-2xl">$4,299</div>
                          <div className="text-sm text-green-600">↓ 12% vs last month</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Average monthly</span>
                        <div className="text-right">
                          <div className="font-bold text-2xl">$4,890</div>
                          <div className="text-sm text-muted-foreground">6-month average</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Budget Performance</h4>
                    <div className="space-y-4">
                      {[
                        { category: "Office", budget: 1500, spent: 1234, color: "green" },
                        { category: "Travel", budget: 1200, spent: 987, color: "green" },
                        { category: "Software", budget: 800, spent: 756, color: "orange" },
                        { category: "Marketing", budget: 1000, spent: 1150, color: "red" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{item.category}</span>
                            <span className="text-sm text-muted-foreground">
                              ${item.spent} / ${item.budget}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                item.color === 'green' ? 'bg-green-500' :
                                item.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${Math.min((item.spent / item.budget) * 100, 100)}%` }}
                            ></div>
                          </div>
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
              Ready to organize your expenses?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using our expense tracking to save time and money at tax season
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300"
              >
                <Camera className="h-5 w-5 mr-2" />
                Try Receipt Scanner
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}