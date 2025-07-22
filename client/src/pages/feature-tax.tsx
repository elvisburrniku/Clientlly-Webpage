import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  FileText, 
  PieChart, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Calendar,
  Receipt,
  Target,
  AlertCircle,
  Download
} from "lucide-react";

export default function FeatureTax() {
  const [activeTab, setActiveTab] = useState("categories");

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
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/attached_assets/3d_1753189705091.png" 
                alt="BusinessFlow Pro" 
                className="w-16 h-12 object-contain"
              />
            </Link>
            <Button 
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              className="bg-orange-600 hover:bg-orange-700 text-white"
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
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                  Tax Compliance & Planning
                </Badge>
                <h1 className="text-5xl font-bold text-foreground">
                  Stay organized and <span className="gradient-text">tax-ready</span> year-round
                </h1>
                <p className="text-xl text-muted-foreground">
                  Automatically categorize expenses by tax code, track deductibles, and calculate sales tax. 
                  Know exactly where you stand and how much you owe with real-time tax insights.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 fade-in stagger-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Automatic tax categorization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Real-time tax calculations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Deduction tracking</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Tax Calculator
                </Button>
              </div>
            </div>

            <div className="relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative space-y-6">
                <Card className="glass-effect border-white/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Tax Summary - Q4 2024</h3>
                    <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">$12,450</div>
                      <div className="text-sm text-muted-foreground">Total Deductions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$3,280</div>
                      <div className="text-sm text-muted-foreground">Tax Savings</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { category: "Business Meals", amount: "$2,450", rate: "50%" },
                      { category: "Office Supplies", amount: "$1,890", rate: "100%" },
                      { category: "Travel", amount: "$3,120", rate: "100%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-white/50 rounded">
                        <span className="text-sm">{item.category}</span>
                        <div className="text-right">
                          <div className="text-sm font-medium">{item.amount}</div>
                          <div className="text-xs text-green-600">{item.rate} deductible</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-xl font-bold text-orange-600">94%</div>
                    <div className="text-sm text-muted-foreground">Auto-categorized</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-xl font-bold text-blue-600">$0</div>
                    <div className="text-sm text-muted-foreground">Penalties avoided</div>
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
              Complete tax management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From expense categorization to tax planning, stay compliant and maximize deductions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "categories", label: "Tax Categories", icon: PieChart },
              { id: "calculations", label: "Calculations", icon: Calculator },
              { id: "deductions", label: "Deductions", icon: Target },
              { id: "compliance", label: "Compliance", icon: FileText }
            ].map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === tab.id ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : ''
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
            {activeTab === "categories" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Smart tax categorization</h3>
                  <p className="text-lg text-muted-foreground">
                    Our AI automatically assigns tax codes to your expenses based on IRS guidelines. 
                    Custom rules ensure accurate categorization for your specific business type.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "IRS-compliant automatic categorization",
                      "Industry-specific tax code mapping",
                      "Custom categorization rules",
                      "Mixed expense splitting (business vs personal)",
                      "Real-time deductibility calculations"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <PieChart className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold mb-4">Popular Tax Categories</h4>
                  <div className="grid gap-3">
                    {[
                      { name: "Business Meals", code: "Meals & Entertainment", deductible: "50%", color: "bg-red-500" },
                      { name: "Office Supplies", code: "Office Expenses", deductible: "100%", color: "bg-blue-500" },
                      { name: "Travel", code: "Travel Expenses", deductible: "100%", color: "bg-green-500" },
                      { name: "Professional Services", code: "Professional Fees", deductible: "100%", color: "bg-purple-500" },
                      { name: "Software", code: "Computer & Internet", deductible: "100%", color: "bg-orange-500" },
                      { name: "Vehicle", code: "Vehicle Expenses", deductible: "Varies", color: "bg-teal-500" }
                    ].map((category, index) => (
                      <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-sm text-muted-foreground">{category.code}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">{category.deductible}</div>
                            <div className="text-xs text-muted-foreground">Deductible</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "calculations" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Real-time tax calculations</h3>
                  <p className="text-lg text-muted-foreground">
                    Track your tax liability throughout the year with real-time calculations. 
                    Get estimated quarterly payments and year-end projections to avoid surprises.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Quarterly estimated tax calculations",
                      "Year-end tax liability projections",
                      "Sales tax tracking and reporting",
                      "Self-employment tax calculations",
                      "Tax bracket optimization suggestions"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Calculator className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">2024 Tax Projection</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Gross Income</span>
                        <span className="font-bold text-2xl">$156,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Deductions</span>
                        <span className="font-bold text-green-600">-$28,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Taxable Income</span>
                        <span className="font-bold">$127,550</span>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">Estimated Tax Owed</span>
                        <span className="text-2xl font-bold text-orange-600">$22,560</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Quarterly Payments</h4>
                    <div className="space-y-3">
                      {[
                        { quarter: "Q1 2024", amount: "$5,640", status: "paid", date: "Apr 15" },
                        { quarter: "Q2 2024", amount: "$5,640", status: "paid", date: "Jun 15" },
                        { quarter: "Q3 2024", amount: "$5,640", status: "paid", date: "Sep 15" },
                        { quarter: "Q4 2024", amount: "$5,640", status: "upcoming", date: "Jan 15" }
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {payment.status === 'paid' ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-orange-500" />
                            )}
                            <div>
                              <div className="font-medium">{payment.quarter}</div>
                              <div className="text-sm text-muted-foreground">Due {payment.date}</div>
                            </div>
                          </div>
                          <div className="font-bold">{payment.amount}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "deductions" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Maximize your deductions</h3>
                  <p className="text-lg text-muted-foreground">
                    Never miss a deduction again. Our system tracks all eligible business expenses 
                    and suggests additional deductions you might have overlooked.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic deduction discovery and tracking",
                      "Home office deduction calculator",
                      "Vehicle expense tracking (actual vs standard)",
                      "Depreciation schedules for business assets",
                      "Deduction optimization recommendations"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Deduction Tracker</h4>
                    <div className="space-y-4">
                      {[
                        { category: "Home Office", current: "$4,200", potential: "$5,400", status: "opportunity" },
                        { category: "Business Meals", current: "$2,450", potential: "$2,450", status: "maximized" },
                        { category: "Vehicle", current: "$3,200", potential: "$4,100", status: "opportunity" },
                        { category: "Education", current: "$800", potential: "$1,200", status: "opportunity" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{item.category}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-bold">${item.current}</span>
                              {item.status === 'opportunity' && (
                                <Badge className="bg-orange-100 text-orange-700 text-xs">+${parseInt(item.potential.replace('$', '').replace(',', '')) - parseInt(item.current.replace('$', '').replace(',', ''))}</Badge>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                item.status === 'maximized' ? 'bg-green-500' : 'bg-orange-500'
                              }`}
                              style={{ 
                                width: `${(parseInt(item.current.replace('$', '').replace(',', '')) / parseInt(item.potential.replace('$', '').replace(',', ''))) * 100}%` 
                              }}
                            ></div>
                          </div>
                          {item.status === 'opportunity' && (
                            <div className="text-xs text-orange-600">
                              Potential additional deduction: ${parseInt(item.potential.replace('$', '').replace(',', '')) - parseInt(item.current.replace('$', '').replace(',', ''))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Stay tax compliant</h3>
                  <p className="text-lg text-muted-foreground">
                    Built-in compliance checks ensure your records meet IRS requirements. 
                    Generate audit-ready reports and maintain proper documentation.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "IRS compliance validation and alerts",
                      "Audit-ready documentation and reports",
                      "Record retention policy management",
                      "Tax law updates and notifications",
                      "Professional accountant collaboration tools"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Compliance Status</h4>
                      <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                    </div>
                    <div className="space-y-4">
                      {[
                        { check: "Record Documentation", status: "complete", description: "All receipts properly stored" },
                        { check: "Expense Classification", status: "complete", description: "IRS codes correctly applied" },
                        { check: "Quarterly Filings", status: "complete", description: "All deadlines met" },
                        { check: "Deduction Limits", status: "warning", description: "Review meal expense limits" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                          {item.status === 'complete' ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-orange-500 mt-1" />
                          )}
                          <div className="flex-1">
                            <div className="font-medium">{item.check}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Available Reports</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Tax Summary Report", description: "Annual deduction summary", format: "PDF" },
                        { name: "Schedule C Preview", description: "Business income/expense", format: "PDF" },
                        { name: "Mileage Log", description: "Vehicle expense details", format: "Excel" },
                        { name: "Receipt Archive", description: "All supporting documents", format: "ZIP" }
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer">
                          <div>
                            <div className="font-medium">{report.name}</div>
                            <div className="text-sm text-muted-foreground">{report.description}</div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            {report.format}
                          </Button>
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
              Ready to simplify your taxes?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using our tax management to stay compliant and maximize deductions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Tax Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}