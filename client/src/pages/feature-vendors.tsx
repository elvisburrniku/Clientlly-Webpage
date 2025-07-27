import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, FileText, DollarSign, BarChart3, Truck, Shield, Clock, CheckCircle, TrendingUp, Package, Calculator } from "lucide-react";

export default function FeatureVendors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
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
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 sm:px-3"
              >
                <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-10 h-8 sm:w-12 sm:h-9 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-10 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-xl">
              <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight animate-professional-fade">
              <span className="animate-subtle-gradient">
                Vendor Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your supply chain and vendor relationships with powerful tools for procurement, tracking, and performance management.
            </p>
          </div>

          {/* Professional Vendor Management Photo */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="Professional vendor management and supply chain coordination meeting"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Vendor Performance</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">127</div>
                      <div className="text-xs text-gray-600">Active Vendors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">96.2%</div>
                      <div className="text-xs text-gray-600">On-time Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">$2.4M</div>
                      <div className="text-xs text-gray-600">Annual Spend</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Vendor Reports */}
          <div className="mb-20 grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Top Vendors by Spend</h3>
                <Badge className="bg-amber-100 text-amber-700">Q1 2024</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-bold">TS</div>
                    <div>
                      <div className="font-medium text-sm">TechSource Solutions</div>
                      <div className="text-xs text-muted-foreground">IT Equipment</div>
                    </div>
                  </div>
                  <span className="font-bold text-amber-600">$287,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">OS</div>
                    <div>
                      <div className="font-medium text-sm">Office Solutions Inc</div>
                      <div className="text-xs text-muted-foreground">Office Supplies</div>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">$156,200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MS</div>
                    <div>
                      <div className="font-medium text-sm">Marketing Services Co</div>
                      <div className="text-xs text-muted-foreground">Professional Services</div>
                    </div>
                  </div>
                  <span className="font-bold text-blue-600">$134,800</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cost Savings vs Budget</span>
                    <span className="text-sm font-bold text-green-600">-8.7%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Purchase Order Status</h3>
                <Badge className="bg-blue-100 text-blue-700">This Month</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Delivered</span>
                  </div>
                  <span className="font-bold text-green-600">89</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">In Transit</span>
                  </div>
                  <span className="font-bold text-blue-600">23</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium">Pending</span>
                  </div>
                  <span className="font-bold text-yellow-600">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-orange-600" />
                    <span className="font-medium">Processing</span>
                  </div>
                  <span className="font-bold text-orange-600">7</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Lead Time</span>
                    <span className="text-sm font-bold text-green-600">7.2 days</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-amber-200/50 dark:border-amber-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Supplier Profiles</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive vendor database with contact information, certifications, contracts, payment terms, and performance history.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-orange-200/50 dark:border-orange-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Purchase Orders</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create, track, and manage purchase orders with automated approval workflows and real-time delivery tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payment Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Streamline vendor payments with automated scheduling, multi-currency support, and comprehensive payment tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor vendor performance with detailed analytics on delivery times, quality metrics, and cost effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Compliance Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensure vendor compliance with certifications, insurance requirements, and regulatory standards tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analyze spending patterns, negotiate better terms, and identify cost-saving opportunities across your vendor network.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to optimize your vendor relationships?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/api/login"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = "/#contact"}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}