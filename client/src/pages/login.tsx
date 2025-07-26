import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  X
} from "lucide-react";
import Footer from "../components/Footer";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    window.location.href = "/api/login";
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
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
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
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-bold"
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

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="scale-in"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Login Form */}
            <div className="order-2 lg:order-1">
              <Card className="glass-effect border-0 shadow-2xl max-w-md mx-auto fade-in">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full text-sm font-medium text-indigo-700 mb-6">
                      <LogIn className="w-4 h-4 mr-2" />
                      Secure Login
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-3 tracking-tight leading-tight">
                      Welcome <span className="gradient-text bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">back</span>
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      Sign in to access your BusinessFlow Pro dashboard and manage your business operations.
                    </p>
                  </div>

                  {/* Login Button */}
                  <Button 
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      "Signing you in..."
                    ) : (
                      <>
                        <LogIn className="h-5 w-5 mr-2" />
                        Sign In with Replit
                      </>
                    )}
                  </Button>

                  {/* Security Notice */}
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Secure Authentication</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Your login is protected with bank-level encryption and secure OAuth authentication.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-black">SSL Encrypted</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-black">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-black">SOC2 Certified</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Benefits */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Header */}
              <div className="text-center lg:text-left fade-in stagger-1">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Access your business
                  <span className="block gradient-text bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    command center
                  </span>
                </h2>
                <p className="text-xl font-black text-muted-foreground leading-relaxed">
                  Everything you need to run and grow your business, all in one powerful platform.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-6">
                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] fade-in stagger-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Instant Access</h3>
                        <p className="text-muted-foreground font-black text-sm">
                          Jump straight into your dashboard with all your business data, reports, and tools ready to use.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] fade-in stagger-3">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Team Collaboration</h3>
                        <p className="text-muted-foreground text-sm">
                          Manage your team, assign tasks, and collaborate on projects with powerful team management tools.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] fade-in stagger-4">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Business Intelligence</h3>
                        <p className="text-muted-foreground text-sm">
                          Get insights and analytics that help you make smarter business decisions and grow faster.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] fade-in stagger-5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Multi-Location Support</h3>
                        <p className="text-muted-foreground text-sm">
                          Manage multiple business locations, currencies, and time zones from a single platform.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Proof */}
              <Card className="glass-effect border-0 shadow-lg bg-gradient-to-r from-indigo-50/50 to-purple-50/50 fade-in stagger-6">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Trusted by 10,000+ Businesses</h3>
                    <p className="text-muted-foreground text-sm">
                      "BusinessFlow Pro transformed how we manage our operations. The dashboard is intuitive and powerful."
                    </p>
                    <div className="mt-3">
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                        Sarah Johnson, CEO at TechStart
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}