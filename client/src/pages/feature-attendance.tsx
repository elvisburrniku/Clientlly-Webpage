import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, CheckCircle, Calendar, BarChart3, Smartphone, Wifi, WifiOff, Bell, Target } from "lucide-react";

export default function FeatureAttendance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/attached_assets/3d_1753268267691.png" 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/15 group-hover:to-emerald-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
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
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Clock className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Smart <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Attendance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern time tracking and attendance management with GPS location, offline support, and comprehensive reporting for remote and office teams.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/3d_1753189705091.png" 
              alt="Attendance Tracking Dashboard" 
              className="rounded-3xl shadow-2xl max-w-4xl w-full h-auto border border-border/20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl"></div>
          </div>
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