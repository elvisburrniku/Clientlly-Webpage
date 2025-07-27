import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  LogIn,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  Building2,
  Globe,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import Footer from "../components/Footer";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain logo-simple cursor-pointer"
                  style={{ 
                    filter: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 font-bold"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/subscribe'}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-muted-foreground"
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${showMobileMenu ? 'block' : 'hidden'} backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-t border-white/20 dark:border-gray-700/20`}>
          <div className="px-4 py-4 space-y-3">
            <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="/subscribe" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            <div className="pt-2 border-t border-white/20">
              <Button variant="ghost" className="w-full justify-start text-sm mb-2" onClick={handleLogin}>Login</Button>
              <Button className="w-full text-sm mb-2" onClick={() => window.location.href = '/subscribe'}>Buy Now</Button>
              <Button onClick={() => window.location.href = '/trial'} className="w-full text-sm">Start Your Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <div className="relative z-10 pt-32 pb-16 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-28 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-36 left-3/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <LogIn className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight animate-professional-fade">
            Welcome Back to <span className="animate-subtle-gradient">BusinessFlow Pro</span>
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8">
            Continue managing your business operations with our comprehensive platform trusted by thousands of businesses worldwide.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Login Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight animate-professional-fade">
                  Sign In to Your <span className="animate-subtle-gradient">Dashboard</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Access your business command center with secure authentication powered by Replit.
                </p>
              </div>

              {/* Login Card */}
              <Card className="max-w-md mx-auto lg:mx-0 glass-effect border border-white/20 backdrop-blur-xl shadow-2xl rounded-3xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Secure Login</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {/* Login Button */}
                  <Button 
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Signing you in...</span>
                      </div>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5 mr-2" />
                        Sign In with Replit
                      </>
                    )}
                  </Button>

                  {/* Security Notice */}
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Bank-Level Security</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Your login is protected with enterprise-grade encryption and secure OAuth 2.0 authentication.
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <div className="mt-8 space-y-3 text-center">
                    <div className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/trial" className="text-primary hover:underline font-medium">
                        Start Your Free Trial
                      </Link>
                    </div>
                    <div className="text-sm">
                      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Your Business <span className="gradient-text bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Command Center</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Continue managing your operations with powerful tools designed for business growth.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Lightning Fast Dashboard</h4>
                        <p className="text-sm text-muted-foreground">
                          Instant access to real-time business metrics, reports, and analytics with zero loading time.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Team Collaboration Hub</h4>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly collaborate with team members, share projects, and track progress in real-time.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Business Intelligence</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced analytics and AI-powered insights to drive informed business decisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-white/20 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Time-Saving Automation</h4>
                        <p className="text-sm text-muted-foreground">
                          Automated workflows, smart scheduling, and intelligent task management to boost productivity.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">50,000+ Active Users</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300">
                  <Star className="h-4 w-4" />
                  <span className="font-medium">4.9/5 Rating</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">ISO 27001 Certified</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-16 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-gray-800 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            New to BusinessFlow Pro?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses that have transformed their operations with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Your 14-Day Trial
              </Button>
            </Link>
            <Link href="/subscribe">
              <Button variant="outline" className="px-8 py-3 text-lg font-semibold rounded-2xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}