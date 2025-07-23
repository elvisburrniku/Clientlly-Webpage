import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Download, Upload, CheckCircle, RefreshCw, Users, FileText, Database, Clock, Zap, Shield } from "lucide-react";

export default function FeatureMigration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="h-10 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-green-500/0 group-hover:from-teal-500/15 group-hover:to-green-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/#features">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Features
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <ArrowRight className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Easy <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Migration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Switch to BusinessFlow Pro seamlessly with our automated migration tools, expert support, and zero-downtime transition process.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/3d_1753189116510.png" 
              alt="Migration Process" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-green-500 text-white">
              100% Success Rate
            </Badge>
          </div>
        </div>

        {/* Migration Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Simple 3-Step Migration Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Connect Your Data</h3>
                <p className="text-muted-foreground">Connect to your existing business software with secure API integrations or upload CSV/Excel files.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Transfer</h3>
                <p className="text-muted-foreground">Our AI-powered system automatically maps and transfers your data while maintaining integrity and relationships.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Verify & Launch</h3>
                <p className="text-muted-foreground">Review your migrated data, test functionality, and go live with confidence. We're here to support you every step.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Migrate From Any Platform</h2>
            <p className="text-xl text-muted-foreground">We support migration from all major business management platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-blue-600 mb-2">QuickBooks</div>
              <div className="text-xs text-muted-foreground">Full Data Migration</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-green-600 mb-2">FreshBooks</div>
              <div className="text-xs text-muted-foreground">Complete Transfer</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-purple-600 mb-2">Xero</div>
              <div className="text-xs text-muted-foreground">Seamless Import</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-orange-600 mb-2">Sage</div>
              <div className="text-xs text-muted-foreground">Expert Migration</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Zero Data Loss</h3>
                  <p className="text-muted-foreground">Our migration process ensures 100% data integrity with comprehensive validation checks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Relationship Mapping</h3>
                  <p className="text-muted-foreground">Automatically maintains relationships between customers, invoices, payments, and other data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Custom Field Migration</h3>
                  <p className="text-muted-foreground">Transfer custom fields, tags, and categories to maintain your business workflows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Historical Data Preservation</h3>
                  <p className="text-muted-foreground">Migrate years of historical data while maintaining date stamps and audit trails.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Support Team</h3>
                  <p className="text-muted-foreground">Dedicated migration specialists guide you through the entire process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Timeline</h3>
                  <p className="text-muted-foreground">Migrate at your own pace with options for immediate or scheduled transitions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Parallel Testing</h3>
                  <p className="text-muted-foreground">Test your migrated data alongside your existing system before making the switch.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Training & Onboarding</h3>
                  <p className="text-muted-foreground">Comprehensive training to help your team get up to speed quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Migration</h3>
              <p className="text-muted-foreground">Most migrations complete within 24-48 hours, minimizing business disruption.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Transfer</h3>
              <p className="text-muted-foreground">All data encrypted during transfer with secure deletion from source after confirmation.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Team Onboarding</h3>
              <p className="text-muted-foreground">Comprehensive training and support to ensure your entire team is productive from day one.</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Migration Today</h2>
          <p className="text-xl mb-8 text-teal-100">Join thousands of businesses who have successfully migrated to BusinessFlow Pro with zero hassle.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <ArrowRight className="h-5 w-5 mr-2" />
              Start Migration
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              Talk to Expert
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-teal-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free Migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24-48 Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Zero Downtime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}