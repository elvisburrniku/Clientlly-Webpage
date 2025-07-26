import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { LanguageSelector } from "@/components/LanguageSelector";
import logoPath from "@assets/3d_1753268267691.png";
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
  Sparkles,
  Menu,
  X,
  Rocket,
  Target,
  Award,
  Globe,
  Headphones,
  ArrowRight,
  Play,
  Gift,
  Database,
  Lock,
  Smartphone,
  Receipt,
  Building2,
  Mail,
  DollarSign
} from "lucide-react";

export default function Trial() {
  const { toast } = useToast();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trialForm, setTrialForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-500/60 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Side - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Login
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 font-medium">
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Center - Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src={logoPath}
                  alt="BusinessFlow Pro" 
                  className="w-16 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                BusinessFlow Pro
              </span>
            </Link>

            {/* Right Side - Language Selector */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-gray-700 dark:text-gray-200"
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden py-4 space-y-3 border-t border-gray-200 dark:border-gray-700 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80">
              <Link href="/" className="block">
                <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/login" className="block">
                <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  Login
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button variant="outline" className="w-full justify-start border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Contact Us
                </Button>
              </Link>
              <div className="px-3">
                <LanguageSelector />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20 relative">
            {/* Animated Badge */}
            <div className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-full text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-8 shadow-xl transform transition-all duration-1000 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
              <Gift className="w-6 h-6 mr-3 animate-pulse" />
              🎉 14-Day Free Trial - No Credit Card Required
              <Sparkles className="w-6 h-6 ml-3 animate-spin" />
            </div>
            
            {/* Main Title */}
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Start your{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                free trial
              </span>
              <br />
              <span className="text-5xl lg:text-6xl xl:text-7xl text-gray-700 dark:text-gray-300">
                in 60 seconds
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Experience the full power of BusinessFlow Pro completely free for 14 days. 
              <br className="hidden lg:block" />
              <span className="font-bold text-emerald-600 dark:text-emerald-400">No credit card, no commitments, no risk.</span>
            </p>

            {/* Enhanced Trust Indicators */}
            <div className={`flex flex-wrap justify-center items-center gap-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-200/50 dark:border-emerald-700/50">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">No Credit Card</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Required</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <Clock className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-bold">14 Days Free</div>
                  <div className="text-sm opacity-90">Full Access</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200/50 dark:border-purple-700/50">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">100% Secure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">& Private</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-200/50 dark:border-orange-700/50">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Instant Setup</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">60 Seconds</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side - Enhanced Trial Form */}
            <Card className={`relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Form Header with Gradient */}
              <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-1 rounded-t-3xl">
                <div className="bg-white dark:bg-gray-900 rounded-t-[calc(1.5rem-1px)] p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">Ready to Launch?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Your business transformation starts with these 5 simple fields.</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 pt-0">
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Complete your details</span>
                    <span className="font-bold">Step 1 of 2</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full w-1/2 transition-all duration-500"></div>
                  </div>
                </div>

                <form onSubmit={handleTrialSubmit} className="space-y-8">
                  {/* Enhanced Name Fields */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                        <Users className="h-5 w-5 mr-2 text-emerald-500" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={trialForm.firstName}
                        onChange={(e) => setTrialForm({ ...trialForm, firstName: e.target.value })}
                        required
                        className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                        <Users className="h-5 w-5 mr-2 text-blue-500" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={trialForm.lastName}
                        onChange={(e) => setTrialForm({ ...trialForm, lastName: e.target.value })}
                        required
                        className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
                      />
                    </div>
                  </div>

                  {/* Enhanced Email Field */}
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-purple-500" />
                      Business Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={trialForm.email}
                      onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                      required
                      className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
                    />
                  </div>

                  {/* Enhanced Company Field */}
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-orange-500" />
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Inc."
                      value={trialForm.company}
                      onChange={(e) => setTrialForm({ ...trialForm, company: e.target.value })}
                      required
                      className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                    />
                  </div>

                  {/* Enhanced Phone Field */}
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-indigo-500" />
                      Phone Number <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">(Optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={trialForm.phone}
                      onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                      className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400"
                    />
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-16 text-xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                      disabled={trialMutation.isPending}
                    >
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center justify-center">
                        {trialMutation.isPending ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                            Setting up your trial...
                          </>
                        ) : (
                          <>
                            <Rocket className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                            Start My Free Trial Now
                            <Sparkles className="h-6 w-6 ml-3 group-hover:animate-spin" />
                          </>
                        )}
                      </div>
                    </Button>

                    {/* Enhanced Legal Text */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed mt-6 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                      <Lock className="h-4 w-4 inline mr-2 text-emerald-500" />
                      By starting your trial, you agree to our <span className="font-bold text-emerald-600 dark:text-emerald-400">Terms of Service</span> and <span className="font-bold text-emerald-600 dark:text-emerald-400">Privacy Policy</span>. 
                      <br />
                      Your trial will automatically convert to a paid plan after 14 days unless cancelled. No surprises, no hidden fees.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Right Side - Enhanced Features Showcase */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {/* Enhanced Trial Overview */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-950/30 dark:via-blue-950/30 dark:to-purple-950/30 border-2 border-emerald-200/50 dark:border-emerald-700/50 shadow-2xl rounded-3xl">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10 animate-pulse"></div>
                
                <CardContent className="p-10 relative">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        <Gift className="h-12 w-12 text-white animate-bounce" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                      14-Day Premium Access
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Experience <span className="font-bold text-emerald-600 dark:text-emerald-400">every single feature</span> of BusinessFlow Pro with absolutely no limitations.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <DollarSign className="h-6 w-6" />
                        <span className="text-2xl font-black">$79 Value</span>
                      </div>
                      <p className="text-emerald-100 font-medium">Completely FREE for 14 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Features List */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                    Everything Included
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Access all premium features from day one
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {/* Feature Item 1 */}
                  <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                          <FileText className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Professional Invoicing</h4>
                          <p className="text-gray-600 dark:text-gray-300">Unlimited invoices with custom branding</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature Item 2 */}
                  <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                          <Receipt className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Smart Expense Tracking</h4>
                          <p className="text-gray-600 dark:text-gray-300">AI-powered receipt scanning & categorization</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature Item 3 */}
                  <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                          <Users className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Advanced CRM</h4>
                          <p className="text-gray-600 dark:text-gray-300">Complete client & vendor management</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature Item 4 */}
                  <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                          <BarChart3 className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Business Intelligence</h4>
                          <p className="text-gray-600 dark:text-gray-300">Real-time analytics & custom reports</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature Item 5 */}
                  <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                          <Calendar className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Calendar</h4>
                          <p className="text-gray-600 dark:text-gray-300">Smart scheduling & team coordination</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Enhanced Support Promise */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/30 dark:via-orange-950/30 dark:to-red-950/30 border-2 border-yellow-200/50 dark:border-yellow-700/50 shadow-2xl rounded-3xl">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 animate-pulse"></div>
                
                <CardContent className="p-8 relative">
                  <div className="text-center">
                    {/* 5-Star Rating */}
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                      VIP Support Experience
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Get <span className="font-bold text-orange-600 dark:text-orange-400">personal onboarding</span> and dedicated support throughout your entire trial.
                    </p>
                    
                    {/* Support Channels */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Live Chat</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Instant Help</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Email Support</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">24h Response</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                          <Headphones className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Phone Support</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Direct Line</p>
                      </div>
                    </div>

                    {/* Guarantee Badge */}
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <Award className="h-5 w-5" />
                        <span className="font-bold">Success Guarantee</span>
                      </div>
                      <p className="text-sm text-emerald-100">We'll help you succeed or your money back</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className={`bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful entrepreneurs who've already streamlined their operations with BusinessFlow Pro.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2">50,000+</div>
                  <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">2M+</div>
                  <p className="text-gray-600 dark:text-gray-400">Invoices Created</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">98%</div>
                  <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">120+</div>
                  <p className="text-gray-600 dark:text-gray-400">Countries</p>
                </div>
              </div>

              {/* Final CTA */}
              <Link href="#" onClick={() => document.getElementById('firstName')?.scrollIntoView({ behavior: 'smooth' })}>
                <Button className="h-16 px-12 text-xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
                  <ArrowRight className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Start Your Free Trial Above
                  <Rocket className="h-6 w-6 ml-3 group-hover:animate-bounce" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}