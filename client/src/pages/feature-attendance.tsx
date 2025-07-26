import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, CheckCircle, Calendar, BarChart3, Smartphone, Wifi, WifiOff, Bell, Target } from "lucide-react";

export default function FeatureAttendance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-12 h-9 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/15 group-hover:to-emerald-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
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
              className="px-2 sm:px-3"
            >
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Back</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Clock className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight">
            Smart <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Attendance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern time tracking and attendance management with GPS location, offline support, and comprehensive reporting for remote and office teams.
          </p>
        </div>

        {/* Professional Business Photo */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
              alt="Modern workplace with team attendance tracking on mobile devices"
              className="rounded-3xl shadow-2xl max-w-4xl w-full h-auto border border-border/20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">98.7%</div>
                  <div className="text-xs text-gray-600">Attendance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">247</div>
                  <div className="text-xs text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">12</div>
                  <div className="text-xs text-gray-600">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Attendance Report */}
        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Weekly Attendance Summary</h3>
              <Badge className="bg-green-100 text-green-700">March 18-24, 2024</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Present Days</span>
                <span className="font-bold text-green-600">1,247</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span>Absent Days</span>
                <span className="font-semibold text-red-600">23</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span>Late Arrivals</span>
                <span className="font-semibold text-yellow-600">45</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Overtime Hours</span>
                <span className="font-semibold text-blue-600">127.5</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Efficiency Score</span>
                  <span className="text-sm font-bold text-green-600">94.2%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Top Performers</h3>
              <Badge className="bg-purple-100 text-purple-700">This Month</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SJ</div>
                  <div>
                    <div className="font-medium text-sm">Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground">Perfect Attendance</div>
                  </div>
                </div>
                <span className="font-bold text-indigo-600">100%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MR</div>
                  <div>
                    <div className="font-medium text-sm">Mike Rodriguez</div>
                    <div className="text-xs text-muted-foreground">Always On Time</div>
                  </div>
                </div>
                <span className="font-bold text-green-600">98.9%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">AL</div>
                  <div>
                    <div className="font-medium text-sm">Anna Lee</div>
                    <div className="text-xs text-muted-foreground">Consistent Performance</div>
                  </div>
                </div>
                <span className="font-bold text-purple-600">97.8%</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Team Average</span>
                  <span className="text-sm font-bold text-green-600">95.4%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GPS Time Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accurate location-based check-ins and check-outs with GPS verification, geofencing, and automatic location detection for field teams.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-emerald-200/50 dark:border-emerald-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <WifiOff className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Offline Mode</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continue tracking time even without internet connection. Data syncs automatically when connection is restored.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-teal-200/50 dark:border-teal-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive attendance reports, overtime tracking, productivity insights, and team performance analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile App</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Native mobile apps for iOS and Android with biometric authentication, quick check-in/out, and real-time notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Team Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manage multiple teams, shifts, and departments with custom attendance policies, approval workflows, and role-based access.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-orange-200/50 dark:border-orange-700/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automated reminders for check-in/out, break time alerts, overtime notifications, and schedule change updates.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Transform Your <span className="text-green-600">Workforce Management</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accurate Time Tracking</h3>
                  <p className="text-gray-600 dark:text-gray-300">Eliminate time theft and buddy punching with GPS verification and biometric authentication.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compliance Ready</h3>
                  <p className="text-gray-600 dark:text-gray-300">Meet labor law requirements with detailed records, overtime calculations, and audit trails.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Payroll Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300">Seamlessly export time data to popular payroll systems with accurate hours and overtime calculations.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/attached_assets/3d_1753189580286.png" 
                alt="Team Attendance Dashboard" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Start Managing Attendance Smarter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our smart attendance system to improve productivity and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3"
              onClick={() => window.location.href = "/subscribe?plan=professional&billing=yearly"}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-3"
              onClick={() => window.location.href = "/demo"}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}