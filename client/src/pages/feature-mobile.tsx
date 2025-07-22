import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Download, Wifi, Bell, Shield, RefreshCw, Camera, FileText, Users, CheckCircle, Star, Zap } from "lucide-react";

export default function FeatureMobile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/attached_assets/3d_1753195741585.png" 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain"
              />
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
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Mobile <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">App</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take your business management anywhere with our powerful mobile app. Access all features, manage finances, and stay connected with your team on the go.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/Screenshot 2025-07-22 144850_1753189340305.jpg" 
              alt="Mobile App Interface" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Available Now
            </Badge>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Offline Mode</h3>
              <p className="text-muted-foreground">Work seamlessly even without internet connection. All data syncs automatically when you're back online.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Push Notifications</h3>
              <p className="text-muted-foreground">Stay updated with real-time notifications for payments, due dates, and important business events.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Receipt Scanner</h3>
              <p className="text-muted-foreground">Instantly capture and categorize receipts using AI-powered scanning technology.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Sync</h3>
              <p className="text-muted-foreground">Changes sync instantly across all devices. Your team always has the latest information.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Invoice Creation</h3>
              <p className="text-muted-foreground">Create and send professional invoices in seconds, right from your mobile device.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-muted-foreground">Share projects, assign tasks, and communicate with your team from anywhere.</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Mobile App?</h2>
            <p className="text-xl text-muted-foreground">Experience the freedom of managing your business from anywhere</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Native iOS & Android Apps</h3>
                  <p className="text-muted-foreground">Optimized for performance on both platforms with native features and integrations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Touch-Optimized Interface</h3>
                  <p className="text-muted-foreground">Designed specifically for mobile use with intuitive gestures and navigation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Biometric Security</h3>
                  <p className="text-muted-foreground">Secure access using fingerprint or face recognition technology.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <p className="text-muted-foreground">Common tasks accessible with just a few taps from the home screen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">GPS Integration</h3>
                  <p className="text-muted-foreground">Automatic mileage tracking and location-based expense categorization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Voice Commands</h3>
                  <p className="text-muted-foreground">Create entries and navigate using voice commands for hands-free operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Download Today</h2>
          <p className="text-xl mb-8 text-blue-100">Get started with BusinessFlow Pro mobile app and take control of your business on the go.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-blue-100">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>50K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Regular Updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}