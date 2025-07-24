import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  ArrowLeft,
  Zap,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function Trial() {
  const { toast } = useToast();
  const [trialForm, setTrialForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: ""
  });

  // Trial signup mutation
  const trialMutation = useMutation({
    mutationFn: async (data: typeof trialForm) => {
      // Redirect to subscription page with trial parameters
      window.location.href = `/subscribe?plan=basic&billing=monthly&trial=true&email=${encodeURIComponent(data.email)}&name=${encodeURIComponent(data.firstName + ' ' + data.lastName)}&company=${encodeURIComponent(data.company)}`;
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to start trial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trialMutation.mutate(trialForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/attached_assets/3d_1753268267691.png" 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain logo-playful"
                style={{ filter: 'drop-shadow(0 0 0 transparent)', background: 'transparent' }}
              />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Contact and Login */}
            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  Contact Us
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/50 rounded-full text-sm font-medium text-green-700 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              14-Day Free Trial
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 fade-in">
              Start your <span className="gradient-text bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">free trial</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in stagger-1 mb-8">
              Experience the full power of BusinessFlow Pro with our risk-free 14-day trial. No credit card required, cancel anytime.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-base text-muted-foreground fade-in stagger-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">Full feature access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-medium">100% secure</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Trial Form */}
            <Card className="glass-effect border-0 shadow-2xl fade-in stagger-3">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Get Started in Minutes</h2>
                  <p className="text-muted-foreground">Tell us a bit about yourself and we'll set up your free trial instantly.</p>
                </div>

                <form onSubmit={handleTrialSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={trialForm.firstName}
                        onChange={(e) => setTrialForm({ ...trialForm, firstName: e.target.value })}
                        required
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={trialForm.lastName}
                        onChange={(e) => setTrialForm({ ...trialForm, lastName: e.target.value })}
                        required
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={trialForm.email}
                      onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                      required
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={trialForm.company}
                      onChange={(e) => setTrialForm({ ...trialForm, company: e.target.value })}
                      required
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={trialForm.phone}
                      onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    disabled={trialMutation.isPending}
                  >
                    {trialMutation.isPending ? (
                      "Setting up your trial..."
                    ) : (
                      <>
                        <Zap className="h-5 w-5 mr-2" />
                        Start My Free Trial
                      </>
                    )}
                  </Button>

                  {/* Legal Text */}
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By starting your trial, you agree to our Terms of Service and Privacy Policy. 
                    Your trial will automatically convert to a paid plan after 14 days unless cancelled.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Right Side - What's Included */}
            <div className="space-y-8">
              {/* Trial Overview */}
              <Card className="glass-effect border-0 shadow-lg bg-gradient-to-r from-green-50/50 to-blue-50/50 fade-in stagger-4">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">14-Day Free Trial</h3>
                    <p className="text-muted-foreground mb-4">
                      Full access to all BusinessFlow Pro features with no limitations or restrictions.
                    </p>
                    <div className="flex justify-center">
                      <Badge className="bg-green-100 text-green-700 px-4 py-2">
                        Worth $29/month - Yours free for 14 days
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4 fade-in stagger-5">What's included in your trial:</h3>
                
                <div className="space-y-3">
                  <Card className="glass-effect border-0 shadow-sm hover:shadow-md transition-all duration-300 fade-in stagger-6">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Professional Invoicing</h4>
                          <p className="text-sm text-muted-foreground">Create unlimited professional invoices</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-0 shadow-sm hover:shadow-md transition-all duration-300 fade-in stagger-7">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Expense Tracking</h4>
                          <p className="text-sm text-muted-foreground">Track and categorize all business expenses</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-0 shadow-sm hover:shadow-md transition-all duration-300 fade-in stagger-8">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Client Management</h4>
                          <p className="text-sm text-muted-foreground">Organize and manage all your clients</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-0 shadow-sm hover:shadow-md transition-all duration-300 fade-in stagger-9">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Analytics & Reports</h4>
                          <p className="text-sm text-muted-foreground">Detailed business insights and reporting</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-0 shadow-sm hover:shadow-md transition-all duration-300 fade-in stagger-10">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Smart Calendar</h4>
                          <p className="text-sm text-muted-foreground">AI-powered scheduling and planning</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Support Promise */}
              <Card className="glass-effect border-0 shadow-lg fade-in stagger-11">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Dedicated Support Team</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get personal onboarding assistance and 24/7 support throughout your trial period.
                    </p>
                    <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Live Chat</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Email Support</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Phone Support</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}