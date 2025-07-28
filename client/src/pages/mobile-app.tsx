import { ArrowLeft, Smartphone, Shield, Zap, Globe, Download, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function MobileApp() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native Performance",
      description: "Lightning-fast native apps built for iOS and Android"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and biometric authentication"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Offline Mode",
      description: "Work anywhere, sync when connected"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-time Sync",
      description: "Instant updates across all your devices"
    }
  ];

  const appFeatures = [
    "Complete business dashboard",
    "Invoice creation & management",
    "Expense tracking with receipt scan",
    "Client relationship management",
    "Real-time financial reports",
    "Team collaboration tools",
    "Push notifications",
    "Biometric security"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = "/"}
              className="px-2 sm:px-3"
            >
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Button>
            <div className="text-2xl font-black text-gray-800">BusinessFlow Pro</div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <section className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 py-32 overflow-hidden">
        {/* Enhanced Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-bounce opacity-80"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="space-y-8">
            {/* Enhanced Professional Badge */}
            <div className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-md border border-white/40 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-black font-bold text-lg tracking-wide">Mobile App Suite</span>
              <div className="w-1 h-6 bg-black/20 mx-2"></div>
              <span className="text-black/80 font-medium text-sm">iOS & Android</span>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black tracking-tight">
                <div className="animate-professional-fade pb-2">Your Business</div>
                <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent animate-subtle-gradient pb-4">
                  In Your Pocket
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-2xl lg:text-3xl text-black font-semibold leading-relaxed">
                  Take control of your business 
                  <span className="text-orange-800 font-black"> anywhere, anytime</span>
                </p>
                <p className="text-lg text-black/80 font-medium leading-relaxed">
                  Native iOS & Android apps • Offline capability • Real-time sync
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              {/* App Store Button */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-black rounded-2xl px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.44 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.89C10.15 6.87 11.36 7.74 12.1 7.74C12.83 7.74 14.24 6.68 15.85 6.84C16.57 6.87 18.39 7.16 19.56 8.92C19.47 8.99 17.9 10.01 17.91 12.22C17.92 14.84 20.06 15.94 20.09 15.95C20.06 16.03 19.67 17.57 18.71 19.5Z" fill="currentColor"/>
                        <path d="M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-white text-sm font-medium">Download on the</div>
                      <div className="text-white text-2xl font-bold">App Store</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-black rounded-2xl px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-white text-sm font-medium">Get it on</div>
                      <div className="text-white text-2xl font-bold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Rating */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-black font-semibold">4.9/5</span>
                <span className="text-black/70">• 50,000+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6 animate-professional-fade">
              Everything You Need
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                On The Go
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-featured mobile apps that bring the complete BusinessFlow Pro experience to your smartphone and tablet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features List */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-8">
                Complete Business Suite
                <span className="block text-blue-600">In Your Hands</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access every feature of BusinessFlow Pro from your mobile device. Manage your business, track expenses, handle invoices, and collaborate with your team - all from anywhere.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-3"></div>
                      <h3 className="font-bold text-gray-800">BusinessFlow Pro</h3>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
                          <span className="text-lg font-bold text-green-600">€24,500</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Active Clients</span>
                          <span className="text-lg font-bold text-blue-600">847</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Pending Invoices</span>
                          <span className="text-lg font-bold text-orange-600">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Details */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Yellow Background */}
      <section className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 py-20 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-bounce opacity-70"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 animate-professional-fade">
            Ready to Go Mobile?
          </h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed">
            Download BusinessFlow Pro today and take your business management to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = "/trial"}
            >
              <Download className="w-5 h-5 mr-2" />
              Start Your Trial
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = "/subscribe"}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}