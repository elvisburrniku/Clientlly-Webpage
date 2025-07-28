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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      

      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
              className="flex items-center space-x-2 px-3"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Features</span>
            </Button>

          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden full-width">
        {/* Floating sparkle animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4 fade-in">

              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl flex items-center justify-center shadow-2xl">
                  <CreditCard className="h-10 w-10 text-black" />
                </div>
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 tracking-tight leading-tight animate-professional-fade">
                Debt <span className="animate-subtle-gradient">Management</span>
              </h1>
              <p className="text-xl text-black font-medium leading-relaxed max-w-3xl mx-auto">
                Take control of your business finances with comprehensive debt tracking, payment scheduling, and strategic debt reduction planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/image_1752932269458.png" 
              alt="Debt Management Dashboard" 
              className="rounded-3xl shadow-2xl max-w-4xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
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
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-12 tracking-tight leading-tight text-center animate-professional-fade">
            Transform Your <span className="animate-subtle-gradient">Financial Health</span>
          </h2>
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

        {/* CTA Section with Yellow Background */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden full-width -mx-4">
          {/* Floating sparkle animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-70"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay: '2.5s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 animate-professional-fade">
              Ready to <span className="animate-subtle-gradient">Take Control</span> of Your Debt?
            </h2>
            <p className="text-xl text-black font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have improved their financial health with our debt management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-black/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/subscribe"}
              >
                Buy Now
              </Button>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white border-2 border-black px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-black/25 hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/trial"}
              >
                Start Your Trial
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}