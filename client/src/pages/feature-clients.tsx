import { ArrowLeft, FileText, MessageSquare, TrendingUp, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeatureClients() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a 
                href="/#features"
                className="inline-flex items-center px-2 sm:px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                <span>Back to Features</span>
              </a>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => window.location.href = "/"}
                className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="Clientlly" 
                  className="h-8 w-10 object-contain"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clientlly</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Yellow Background */}
      <section className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 py-28 overflow-hidden">
        {/* Enhanced Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-bounce opacity-80"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '3.5s'
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
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-black font-bold text-lg tracking-wide">Professional CRM Suite</span>
              <div className="w-1 h-6 bg-black/20 mx-2"></div>
              <span className="text-black/80 font-medium text-sm">Enterprise Ready</span>
            </div>

            {/* Main Title with Better Typography */}
            <div className="space-y-4">
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black tracking-tight">
                <div className="animate-professional-fade pb-2">Client</div>
                <div className="bg-gradient-to-r from-orange-700 via-red-600 to-purple-700 bg-clip-text text-transparent animate-subtle-gradient pb-4">
                  Management
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-2xl lg:text-3xl text-black font-semibold leading-relaxed">
                  Transform client relationships with 
                  <span className="text-orange-800 font-black"> intelligent CRM tools</span>
                </p>
                <p className="text-lg text-black/80 font-medium leading-relaxed">
                  Advanced analytics • Automated workflows • Revenue optimization
                </p>
              </div>
            </div>

            {/* Quick Feature Tags */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                "360° Client Profiles",
                "Smart Analytics Dashboard", 
                "Automated Follow-ups",
                "Revenue Tracking",
                "Pipeline Management"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-black font-semibold text-sm shadow-sm hover:bg-white/30 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Professional Business Photo */}
        <section>
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team collaboration and client relationship management"
                className="w-full h-48 sm:h-64 lg:h-96 object-cover"
              />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg max-w-xs sm:max-w-sm">
                <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Client Success Rate</h4>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-indigo-600">94%</div>
                    <div className="text-xs text-gray-600">Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-green-600">847</div>
                    <div className="text-xs text-gray-600">Active Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">4.9</div>
                    <div className="text-xs text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sample Client Reports */}
        <section>
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Top Clients Report</h3>
                <Badge className="bg-indigo-100 text-indigo-700 animate-pulse">March 2024</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">TC</div>
                    <div>
                      <div className="font-medium text-sm">TechCorp Solutions</div>
                      <div className="text-xs text-muted-foreground">Enterprise Client</div>
                    </div>
                  </div>
                  <span className="font-bold text-indigo-600">€48,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">DS</div>
                    <div>
                      <div className="font-medium text-sm">Digital Startup Inc</div>
                      <div className="text-xs text-muted-foreground">Growth Client</div>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">€32,100</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MI</div>
                    <div>
                      <div className="font-medium text-sm">Marketing Innovations</div>
                      <div className="text-xs text-muted-foreground">Premium Client</div>
                    </div>
                  </div>
                  <span className="font-bold text-purple-600">€27,800</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Client Growth</span>
                    <span className="text-sm font-bold text-green-600">+18.3%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Communication Activity</h3>
                <Badge className="bg-blue-100 text-blue-700 animate-pulse">This Week</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Emails Sent</span>
                  </div>
                  <span className="font-bold text-blue-600">127</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Calls Made</span>
                  </div>
                  <span className="font-bold text-green-600">43</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">Meetings Scheduled</span>
                  </div>
                  <span className="font-bold text-purple-600">18</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Response Rate</span>
                    <span className="text-sm font-bold text-green-600">89.2%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div className="space-y-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-2 border-indigo-200/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Profiles</h3>
                <p className="text-gray-600">
                  Store comprehensive client information including contact details, preferences, project history, and important notes all in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-2 border-purple-200/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Tracking</h3>
                <p className="text-gray-600">
                  Keep track of all communications with automatic logging of emails, calls, meetings, and notes for complete conversation history.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-2 border-green-200/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project History</h3>
                <p className="text-gray-600">
                  View complete project timelines, milestones, deliverables, and outcomes to understand client relationships better.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section with Yellow Background */}
      </div>

      <section className="relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 py-20 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 right-[15%] w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-[20%] w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-10 right-[30%] w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-10 right-[10%] w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight animate-professional-fade tracking-tight mb-8">
            Ready to strengthen your <span className="animate-subtle-gradient">client relationships</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = "/trial"}
            >
              Start Your Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-white/20 backdrop-blur-sm"
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