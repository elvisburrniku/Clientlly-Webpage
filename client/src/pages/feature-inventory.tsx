import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle,
  Minus,
  Plus,
  Eye,
  RefreshCw,
  ShoppingCart,
  Truck,
  Download
} from "lucide-react";

export default function FeatureInventory() {
  const [activeTab, setActiveTab] = useState("tracking");

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
              onClick={() => {
                window.location.href = "/";
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="flex items-center space-x-1 sm:space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Back</span>
            </button>
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-12 h-9 object-contain logo-playful cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
            <Button 
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              className="bg-red-600 hover:bg-red-700 text-white"
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
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                  Intelligent Inventory Management
                </Badge>
                <h1 className="text-5xl font-bold text-foreground">
                  Stay on top of orders and <span className="gradient-text">quantities</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Track inventory levels in real-time, manage orders automatically, and never run out of stock again. 
                  Smart alerts keep you informed of low stock before it affects your business.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 fade-in stagger-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Real-time stock tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Automated reorder alerts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Multi-location support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Demo
                </Button>
              </div>
            </div>

            <div className="relative fade-in stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Professional Warehouse/Inventory Photo */}
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern warehouse inventory management with digital tracking systems"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Real-time inventory sync</span>
                  </div>
                </div>
              </div>

              <div className="relative space-y-6">
                <Card className="glass-effect border-white/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Inventory Dashboard</h3>
                    <RefreshCw className="h-4 w-4 text-muted-foreground animate-spin" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-xs text-muted-foreground">Total SKUs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">91%</div>
                      <div className="text-xs text-muted-foreground">In Stock</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">23</div>
                      <div className="text-xs text-muted-foreground">Reorder Alert</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Wireless Bluetooth Headphones", sku: "WBH-001", stock: 145, status: "normal", trend: "up", location: "Warehouse A" },
                      { name: "USB-C Charging Cables", sku: "UCC-205", stock: 12, status: "low", trend: "down", location: "Warehouse B" },
                      { name: "Smartphone Screen Protectors", sku: "SSP-102", stock: 289, status: "normal", trend: "up", location: "Warehouse A" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'low' ? 'bg-red-500' : 'bg-green-500'
                          }`}></div>
                          <div>
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-muted-foreground">SKU: {item.sku} • {item.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{item.stock}</span>
                          {item.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-red-600">$247,899</div>
                    <div className="text-sm text-muted-foreground">Total Stock Value</div>
                    <div className="text-xs text-green-500 mt-1">+12.4% vs last month</div>
                  </Card>
                  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-green-600">99.2%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                    <div className="text-xs text-blue-500 mt-1">Last audit: 3 days ago</div>
                  </Card>
                </div>

                {/* Sample Inventory Report */}
                <Card className="p-6">
                  <h4 className="font-bold mb-4">Recent Stock Movements</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Plus className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Wireless Earbuds - Stock In</div>
                          <div className="text-xs text-muted-foreground">Purchase Order #PO-2024-078 • 2 hours ago</div>
                        </div>
                      </div>
                      <span className="font-bold text-sm text-green-600">+150</span>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Truck className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Phone Cases - Shipped Out</div>
                          <div className="text-xs text-muted-foreground">Order #SO-2024-512 • 4 hours ago</div>
                        </div>
                      </div>
                      <span className="font-bold text-sm text-blue-600">-45</span>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Minus className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">USB Cables - Stock Adjustment</div>
                          <div className="text-xs text-muted-foreground">Inventory Count #IC-2024-089 • 6 hours ago</div>
                        </div>
                      </div>
                      <span className="font-bold text-sm text-red-600">-8</span>
                    </div>
                  </div>
                </Card>
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
              Complete inventory solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From stock tracking to order management, control every aspect of your inventory
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "tracking", label: "Stock Tracking", icon: Package },
              { id: "orders", label: "Order Management", icon: ShoppingCart },
              { id: "alerts", label: "Smart Alerts", icon: AlertTriangle },
              { id: "analytics", label: "Analytics", icon: BarChart3 }
            ].map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 scale-in stagger-${index + 1} ${
                    activeTab === tab.id ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' : ''
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
            {activeTab === "tracking" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Real-time stock tracking</h3>
                  <p className="text-lg text-muted-foreground">
                    Monitor inventory levels across all locations in real-time. Automatic updates from sales, 
                    purchases, and transfers keep your stock counts accurate to the minute.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time quantity updates across all channels",
                      "Multi-location inventory management",
                      "Barcode scanning and SKU tracking",
                      "Batch and serial number tracking",
                      "Automated stock adjustments and reconciliation"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Package className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Live Stock Levels</h4>
                    <div className="space-y-4">
                      {[
                        { sku: "AC-001", name: "iPhone 15 Case", warehouse: 45, retail: 12, total: 57 },
                        { sku: "WC-205", name: "Wireless Charger", warehouse: 8, retail: 15, total: 23 },
                        { sku: "SP-102", name: "Screen Protector", warehouse: 134, retail: 22, total: 156 },
                        { sku: "HF-089", name: "Phone Holder", warehouse: 67, retail: 8, total: 75 }
                      ].map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">SKU: {item.sku}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">{item.total}</div>
                              <div className="text-xs text-muted-foreground">Total</div>
                            </div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Warehouse: <strong>{item.warehouse}</strong></span>
                            <span>Retail: <strong>{item.retail}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Streamlined order management</h3>
                  <p className="text-lg text-muted-foreground">
                    Create purchase orders, track deliveries, and manage supplier relationships all in one place. 
                    Automated workflows ensure you never run out of stock.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automated purchase order generation",
                      "Supplier management and tracking",
                      "Delivery scheduling and notifications",
                      "Order approval workflows",
                      "Cost tracking and budget management"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <ShoppingCart className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Recent Orders</h4>
                    <div className="space-y-4">
                      {[
                        { id: "PO-1024", supplier: "TechWare Inc", items: 25, status: "delivered", date: "2 days ago" },
                        { id: "PO-1023", supplier: "Mobile Depot", items: 18, status: "shipped", date: "5 days ago" },
                        { id: "PO-1022", supplier: "Accessory Hub", items: 42, status: "pending", date: "1 week ago" },
                        { id: "PO-1021", supplier: "Quick Supply", items: 15, status: "delivered", date: "2 weeks ago" }
                      ].map((order, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              order.status === 'delivered' ? 'bg-green-500' :
                              order.status === 'shipped' ? 'bg-blue-500' :
                              'bg-orange-500'
                            }`}></div>
                            <div>
                              <div className="font-medium text-sm">{order.id}</div>
                              <div className="text-xs text-muted-foreground">{order.supplier}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{order.items} items</div>
                            <div className="text-xs text-muted-foreground capitalize">{order.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button className="flex items-center space-x-2 h-auto py-3">
                        <Plus className="h-4 w-4" />
                        <span className="text-sm">New Order</span>
                      </Button>
                      <Button variant="outline" className="flex items-center space-x-2 h-auto py-3">
                        <Truck className="h-4 w-4" />
                        <span className="text-sm">Track Delivery</span>
                      </Button>
                      <Button variant="outline" className="flex items-center space-x-2 h-auto py-3">
                        <BarChart3 className="h-4 w-4" />
                        <span className="text-sm">Order Report</span>
                      </Button>
                      <Button variant="outline" className="flex items-center space-x-2 h-auto py-3">
                        <RefreshCw className="h-4 w-4" />
                        <span className="text-sm">Reorder</span>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Smart inventory alerts</h3>
                  <p className="text-lg text-muted-foreground">
                    Never be caught off guard by stockouts. Intelligent alerts monitor your inventory patterns 
                    and notify you before you run low, ensuring continuous operations.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Customizable low stock thresholds",
                      "Predictive stock-out warnings",
                      "Overstocking prevention alerts",
                      "Seasonal demand notifications",
                      "Multi-channel alert delivery (email, SMS, app)"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Active Alerts</h4>
                    <div className="space-y-3">
                      {[
                        { type: "Low Stock", item: "Wireless Charger", level: 8, threshold: 10, priority: "high" },
                        { type: "Reorder Point", item: "Phone Cases", level: 45, threshold: 50, priority: "medium" },
                        { type: "Overstock", item: "Cable Organizers", level: 245, threshold: 200, priority: "low" },
                        { type: "Stock Out", item: "Car Mounts", level: 0, threshold: 5, priority: "critical" }
                      ].map((alert, index) => (
                        <div key={index} className={`p-4 rounded-lg border-l-4 ${
                          alert.priority === 'critical' ? 'bg-red-50 border-red-500' :
                          alert.priority === 'high' ? 'bg-orange-50 border-orange-500' :
                          alert.priority === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                          'bg-blue-50 border-blue-500'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-medium text-sm">{alert.type}</div>
                              <div className="text-sm text-muted-foreground">{alert.item}</div>
                            </div>
                            <Badge className={`text-xs ${
                              alert.priority === 'critical' ? 'bg-red-100 text-red-700' :
                              alert.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                              alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {alert.priority}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Current: <strong>{alert.level}</strong></span>
                            <span>Threshold: <strong>{alert.threshold}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Inventory insights & analytics</h3>
                  <p className="text-lg text-muted-foreground">
                    Make data-driven decisions with comprehensive inventory analytics. Track turnover rates, 
                    identify fast and slow-moving items, and optimize your stock levels.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Inventory turnover analysis",
                      "ABC analysis for item classification",
                      "Demand forecasting and planning",
                      "Seasonal trend identification",
                      "Profitability analysis by product"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <BarChart3 className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">4.2</div>
                        <div className="text-sm text-muted-foreground">Avg Turnover</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">87 days</div>
                        <div className="text-sm text-muted-foreground">Avg Hold Time</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">23%</div>
                        <div className="text-sm text-muted-foreground">Gross Margin</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">94%</div>
                        <div className="text-sm text-muted-foreground">Fill Rate</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Top Performers</h4>
                    <div className="space-y-3">
                      {[
                        { name: "iPhone Cases", sales: 127, margin: "28%", trend: "up" },
                        { name: "Screen Protectors", sales: 89, margin: "45%", trend: "up" },
                        { name: "Wireless Chargers", sales: 76, margin: "32%", trend: "stable" },
                        { name: "Phone Holders", sales: 54, margin: "38%", trend: "down" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              item.trend === 'up' ? 'bg-green-500' :
                              item.trend === 'down' ? 'bg-red-500' :
                              'bg-gray-400'
                            }`}></div>
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">Margin: {item.margin}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{item.sales}</div>
                            <div className="text-xs text-muted-foreground">Units sold</div>
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
              Ready to optimize your inventory?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using our inventory management to reduce costs and improve efficiency
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/30 hover:bg-foreground hover:text-background px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}