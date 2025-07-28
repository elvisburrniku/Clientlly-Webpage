import { ArrowLeft, Smartphone, Shield, Zap, Globe, Download, Star, CheckCircle, Camera, Users, BarChart3, Calendar, FileText, CreditCard, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function MobileApp() {
  const screenshots = [
    {
      title: "Dashboard",
      description: "Complete business overview at your fingertips",
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      title: "Invoicing",
      description: "Create and send professional invoices instantly",
      bgColor: "from-green-500 to-emerald-600"
    },
    {
      title: "Expenses",
      description: "Track expenses with AI-powered receipt scanning",
      bgColor: "from-orange-500 to-red-600"
    },
    {
      title: "Analytics",
      description: "Real-time insights and business reports",
      bgColor: "from-purple-500 to-pink-600"
    },
    {
      title: "Clients",
      description: "Manage client relationships and communications",
      bgColor: "from-teal-500 to-cyan-600"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Johnson Consulting",
      rating: 5,
      text: "This app has completely transformed how I manage my business. The mobile interface is incredibly intuitive and I can handle everything on the go.",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      company: "Rodriguez Marketing",
      rating: 5,
      text: "Best business management app I've ever used. The offline mode is a game-changer when I'm traveling. Highly recommend!",
      avatar: "MR"
    },
    {
      name: "Emily Chen",
      company: "Chen Design Studio",
      rating: 5,
      text: "The receipt scanning feature alone has saved me hours each week. The app is fast, reliable, and beautifully designed.",
      avatar: "EC"
    },
    {
      name: "David Miller",
      company: "Miller & Associates",
      rating: 5,
      text: "Seamless integration between mobile and desktop. I can start work on my phone and finish on my computer without missing a beat.",
      avatar: "DM"
    }
  ];

  const appInfo = {
    name: "BusinessFlow Pro",
    developer: "BusinessFlow Technologies",
    category: "Business",
    size: "89.2 MB",
    version: "3.2.1",
    updated: "January 2025",
    compatibility: "iOS 14.0+ / Android 8.0+",
    languages: "English, Spanish, French, German, Italian",
    rating: 4.9,
    totalRatings: "12.4K",
    downloads: "50K+"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* App Store Style Header */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black relative overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = "/"}
              className="text-black hover:bg-black/20 px-2 sm:px-3"
            >
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Back</span>
            </Button>
            <span className="text-sm opacity-80">Apps / Business</span>
          </div>
          
          {/* App Header Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* App Icon */}
            <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* App Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-black mb-2">{appInfo.name}</h1>
              <p className="text-xl text-black mb-4">Complete Business Management Suite</p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-600 text-yellow-600" />
                    ))}
                  </div>
                  <span className="font-bold">{appInfo.rating}</span>
                  <span className="text-black opacity-70">({appInfo.totalRatings} ratings)</span>
                </div>
                <div className="text-black opacity-70">
                  {appInfo.downloads} downloads • {appInfo.category}
                </div>
              </div>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-xl shadow-lg"
                  onClick={() => {
                    // For demo purposes, show download started message
                    alert('Download started! BusinessFlow Pro will be installed shortly.');
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Install App
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-3 px-8 rounded-xl"
                  onClick={() => {
                    alert('Added to wishlist! You\'ll be notified of updates.');
                  }}
                >
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Screenshots</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              View All
            </Button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="relative mx-auto w-40 h-[280px] bg-gray-800 rounded-[2rem] p-1 shadow-xl">
                  <div className={`w-full h-full bg-gradient-to-br ${screenshot.bgColor} rounded-[1.75rem] overflow-hidden relative`}>
                    {/* Phone Screen Content */}
                    <div className="h-full p-4 flex flex-col text-white">
                      <div className="text-center mb-4">
                        <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          {index === 0 && <BarChart3 className="w-5 h-5" />}
                          {index === 1 && <FileText className="w-5 h-5" />}
                          {index === 2 && <Camera className="w-5 h-5" />}
                          {index === 3 && <BarChart3 className="w-5 h-5" />}
                          {index === 4 && <Users className="w-5 h-5" />}
                        </div>
                        <h3 className="font-bold text-sm">{screenshot.title}</h3>
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <div className="bg-white/20 rounded-lg p-2">
                          <div className="h-2 bg-white/40 rounded mb-1"></div>
                          <div className="h-2 bg-white/40 rounded w-3/4"></div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-2">
                          <div className="h-2 bg-white/40 rounded mb-1"></div>
                          <div className="h-2 bg-white/40 rounded w-1/2"></div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-2">
                          <div className="h-2 bg-white/40 rounded mb-1"></div>
                          <div className="h-2 bg-white/40 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone Details */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black/20 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-semibold text-gray-800 text-sm">{screenshot.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Description */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-black mb-4">About this app</h2>
              <div className="max-w-none">
                <p className="mb-4 text-black">
                  <strong>BusinessFlow Pro</strong> is the complete business management solution designed for modern entrepreneurs and small business owners. Transform your smartphone into a powerful business command center with our comprehensive mobile app.
                </p>
                <p className="mb-4 text-black">
                  Whether you're tracking expenses on the go, creating invoices for clients, or analyzing your business performance, BusinessFlow Pro puts everything you need right at your fingertips. With advanced features like AI-powered receipt scanning, real-time analytics, and seamless team collaboration, managing your business has never been easier.
                </p>
                <p className="mb-6 text-black">
                  Join thousands of successful business owners who trust BusinessFlow Pro to streamline their operations and accelerate their growth.
                </p>
                
                <h3 className="text-lg font-bold text-black mb-3">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Complete dashboard with real-time business metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Professional invoice creation and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">AI-powered expense tracking with receipt scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Advanced client relationship management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Comprehensive financial reports and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Team collaboration and communication tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Offline mode with automatic sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-black">Bank-level security with biometric authentication</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* App Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-4">
                <h3 className="text-lg font-bold text-black mb-4">Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-black">Developer</span>
                    <span className="font-medium text-black">{appInfo.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Category</span>
                    <span className="font-medium text-black">{appInfo.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Size</span>
                    <span className="font-medium text-black">{appInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Version</span>
                    <span className="font-medium text-black">{appInfo.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Updated</span>
                    <span className="font-medium text-black">{appInfo.updated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Compatibility</span>
                    <span className="font-medium text-right text-black">{appInfo.compatibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Languages</span>
                    <span className="font-medium text-right text-black">{appInfo.languages}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-black mb-2">Developer</h4>
                  <p className="text-sm text-black mb-3">{appInfo.developer}</p>
                  <Button variant="outline" className="w-full">
                    View More Apps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Ratings and Reviews</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              See All Reviews
            </Button>
          </div>
          
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="text-center">
                <div className="text-6xl font-black text-gray-800 mb-2">{appInfo.rating}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600">{appInfo.totalRatings} ratings</div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: rating === 5 ? '85%' : rating === 4 ? '12%' : '3%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {rating === 5 ? '10.5K' : rating === 4 ? '1.5K' : '400'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Individual Reviews */}
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-800">{review.name}</h4>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{review.company}</span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Download CTA Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black relative overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-black mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Join thousands of successful entrepreneurs using BusinessFlow Pro to streamline operations and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 text-lg rounded-xl shadow-lg"
              onClick={() => window.location.href = "/trial"}
            >
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-4 px-8 text-lg rounded-xl"
              onClick={() => window.location.href = "/subscribe"}
            >
              View Pricing
            </Button>
          </div>
          
          <div className="mt-8 text-black opacity-70 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
}