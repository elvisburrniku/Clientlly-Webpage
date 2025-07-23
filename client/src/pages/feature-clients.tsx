import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, FileText, MessageSquare, Calendar, Phone, Mail, MapPin, Building, Star, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function FeatureClients() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = "/#features"}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Features
              </Button>
            </div>
            <div className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-12 h-9 object-contain logo-glow cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/15 group-hover:to-purple-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl mb-8 shadow-xl">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Client Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build stronger relationships and grow your business with comprehensive client management tools designed for modern businesses.
            </p>
          </div>

          {/* Professional Business Photo */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional team collaboration and client relationship management"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Client Success Rate</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">94%</div>
                      <div className="text-xs text-gray-600">Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">847</div>
                      <div className="text-xs text-gray-600">Active Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">4.9</div>
                      <div className="text-xs text-gray-600">Avg Rating</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Client Report */}
          <div className="mb-20 grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Top Clients Report</h3>
                <Badge className="bg-indigo-100 text-indigo-700">March 2024</Badge>
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
                  <span className="font-bold text-indigo-600">$48,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">DS</div>
                    <div>
                      <div className="font-medium text-sm">Digital Startup Inc</div>
                      <div className="text-xs text-muted-foreground">Growth Client</div>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">$32,100</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MI</div>
                    <div>
                      <div className="font-medium text-sm">Marketing Innovations</div>
                      <div className="text-xs text-muted-foreground">Premium Client</div>
                    </div>
                  </div>
                  <span className="font-bold text-purple-600">$27,800</span>
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
                <Badge className="bg-blue-100 text-blue-700">This Week</Badge>
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Detailed Profiles</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Store comprehensive client information including contact details, preferences, project history, and important notes all in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Communication Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Keep track of all communications with automatic logging of emails, calls, meetings, and notes for complete conversation history.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project History</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View complete project timelines, milestones, deliverables, and outcomes to understand client relationships better.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Integrated calendar system for scheduling meetings, follow-ups, and important client touchpoints with automated reminders.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-orange-200/50 dark:border-orange-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Relationship Scoring</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-powered relationship health scoring based on communication frequency, project success, and client satisfaction metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-violet-200/50 dark:border-violet-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Task Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create and track client-specific tasks, deliverables, and action items with automated progress tracking and notifications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to strengthen your client relationships?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/api/login"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = "/#contact"}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}