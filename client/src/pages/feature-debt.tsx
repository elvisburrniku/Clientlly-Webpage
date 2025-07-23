import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, AlertTriangle, TrendingDown, Calendar, Target, BarChart3, CheckCircle, Zap, Shield, Clock } from "lucide-react";

export default function FeatureDebt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Subtle 3D Logo Background */}
      <div className="absolute top-1/3 left-1/4 opacity-4 dark:opacity-6 floating-element">
        <img 
          src="/attached_assets/3d_1753197766773.png" 
          alt="" 
          className="w-56 h-56 object-contain rotate-30 transform"
        />
      </div>
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
                  className="w-12 h-9 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
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
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <CreditCard className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Debt <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Management</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take control of your business finances with comprehensive debt tracking, payment scheduling, and strategic debt reduction planning.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/image_1752932269458.png" 
              alt="Debt Management Dashboard" 
              className="rounded-3xl shadow-2xl max-w-4xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white">
              Smart Debt Analytics
            </Badge>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-red-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Debt Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Monitor all business debts including loans, credit lines, supplier debts, and payment obligations in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-orange-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Payment Scheduling</h3>
              <p className="text-muted-foreground text-sm">
                Set up automated payment reminders and schedule recurring payments to never miss a debt payment deadline.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Reduction Strategies</h3>
              <p className="text-muted-foreground text-sm">
                Get AI-powered recommendations for debt consolidation, payment prioritization, and strategic reduction plans.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-blue-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive debt-to-income ratios, cash flow projections, and financial health scoring for better decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-purple-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Goal Setting</h3>
              <p className="text-muted-foreground text-sm">
                Set debt reduction goals, track progress with visual indicators, and celebrate milestones along the way.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-indigo-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Credit Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                Track business credit scores, monitor credit utilization, and receive alerts for credit report changes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transform Your Financial Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Reduce Financial Stress</h3>
                  <p className="text-muted-foreground text-sm">Get a clear overview of all debts and create manageable payment plans that fit your cash flow.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Improve Cash Flow</h3>
                  <p className="text-muted-foreground text-sm">Optimize payment timing and negotiate better terms to maintain healthy business operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Save Time & Money</h3>
                  <p className="text-muted-foreground text-sm">Automated tracking and strategic planning save hours of manual work and identify cost savings.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Better Credit Profile</h3>
                  <p className="text-muted-foreground text-sm">Systematic debt management helps improve business credit scores and unlock better financing options.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Strategic Growth</h3>
                  <p className="text-muted-foreground text-sm">Free up capital for business investments by optimizing debt structure and payment strategies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Financial Security</h3>
                  <p className="text-muted-foreground text-sm">Build emergency reserves and create contingency plans for unexpected financial challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Debt?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses that have improved their financial health with our debt management tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
            >
              Start Managing Debt Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = "/subscribe?plan=basic&billing=monthly"}
            >
              Start Your Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}