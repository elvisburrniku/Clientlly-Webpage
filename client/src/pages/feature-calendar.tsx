import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Bell, Users, Video, CheckCircle, TrendingUp, Zap, Target, Globe, Smartphone } from "lucide-react";

export default function FeatureCalendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
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
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 sm:px-3"
              >
                <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    alt="BusinessFlow Pro" 
                    className="w-10 h-8 sm:w-12 sm:h-9 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/15 group-hover:to-purple-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-10 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl mb-6 sm:mb-8 shadow-xl">
              <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight animate-professional-fade">
              <span className="animate-subtle-gradient">
                Smart Calendar
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Intelligent scheduling and time management with AI-powered features that help you stay organized and never miss important deadlines.
            </p>
          </div>

          {/* Professional Calendar Photo */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80"
                  alt="Professional calendar and scheduling interface on desktop and mobile devices"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Smart Scheduling Stats</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-violet-600">2,847</div>
                      <div className="text-xs text-gray-600">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">94%</div>
                      <div className="text-xs text-gray-600">On-time Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">127</div>
                      <div className="text-xs text-gray-600">Team Members</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Calendar Reports */}
          <div className="mb-20 grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Weekly Schedule Overview</h3>
                <Badge className="bg-violet-100 text-violet-700">March 18-24, 2024</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-violet-600" />
                    <span className="font-medium">Total Meetings</span>
                  </div>
                  <span className="font-bold text-violet-600">47</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Video Calls</span>
                  </div>
                  <span className="font-bold text-blue-600">23</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Team Meetings</span>
                  </div>
                  <span className="font-bold text-green-600">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-orange-600" />
                    <span className="font-medium">Deadlines</span>
                  </div>
                  <span className="font-bold text-orange-600">8</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Meeting Efficiency</span>
                    <span className="text-sm font-bold text-green-600">87.3%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Time Distribution</h3>
                <Badge className="bg-blue-100 text-blue-700">Weekly Average</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="font-medium text-sm">Client Meetings</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-indigo-200 rounded-full">
                      <div className="w-3/4 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <span className="font-bold text-indigo-600 text-sm">18h</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-sm">Project Work</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-4/5 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="font-bold text-green-600 text-sm">22h</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-sm">Admin Tasks</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-purple-200 rounded-full">
                      <div className="w-1/3 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="font-bold text-purple-600 text-sm">8h</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-sm">Planning</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-orange-200 rounded-full">
                      <div className="w-1/4 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="font-bold text-orange-600 text-sm">6h</span>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Productivity Score</span>
                    <span className="text-sm font-bold text-green-600">92.1%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-violet-200/50 dark:border-violet-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-powered scheduling that finds optimal meeting times, avoids conflicts, and respects your preferences and time zones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Notifications</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Customizable reminders and notifications that adapt to your workflow, with smart timing based on meeting importance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Team Coordination</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Coordinate team schedules with shared calendars, resource booking, and availability tracking for seamless collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Meeting Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Seamless integration with video conferencing tools, automatic meeting links, and pre-meeting preparation reminders.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-orange-200/50 dark:border-orange-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deadline Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intelligent deadline management with automatic milestone tracking, progress monitoring, and escalation alerts.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-700/50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile Sync</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect synchronization across all devices with offline access, ensuring you stay organized wherever you go.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to master your schedule?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = "/api/login"}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 text-lg font-semibold"
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