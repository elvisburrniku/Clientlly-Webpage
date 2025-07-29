import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Lock, Eye, Key, FileCheck, UserCheck, Zap, CheckCircle, AlertTriangle, Globe, Clock } from "lucide-react";

export default function FeatureSecurity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  alt="BusinessFlow Pro" 
                  className="h-10 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
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
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight animate-professional-fade">
            Enterprise <span className="animate-subtle-gradient">Security</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protect your business data with bank-level security, advanced encryption, and comprehensive compliance features trusted by enterprises worldwide.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <img 
              src="/attached_assets/3d_1753189580286.png" 
              alt="Security Dashboard" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white">
              Enterprise Grade
            </Badge>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">End-to-End Encryption</h3>
              <p className="text-muted-foreground">All data encrypted using AES-256 encryption standards with TLS 1.3 for data in transit.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Factor Authentication</h3>
              <p className="text-muted-foreground">Secure access with SMS, email, and authenticator app-based two-factor authentication.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Activity Monitoring</h3>
              <p className="text-muted-foreground">Real-time monitoring and detailed audit logs for all user activities and system changes.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Key className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Role-Based Access Control</h3>
              <p className="text-muted-foreground">Granular permissions system ensuring users only access data relevant to their role.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance Ready</h3>
              <p className="text-muted-foreground">GDPR, SOC 2, and HIPAA compliant with automated compliance reporting and documentation.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Backups</h3>
              <p className="text-muted-foreground">Daily encrypted backups with point-in-time recovery and 99.9% uptime guarantee.</p>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Certifications */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Certifications</h2>
            <p className="text-xl text-muted-foreground">Trusted by enterprises with industry-leading security standards</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-blue-600 mb-2">SOC 2</div>
              <div className="text-xs text-muted-foreground">Type II Certified</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-green-600 mb-2">GDPR</div>
              <div className="text-xs text-muted-foreground">Fully Compliant</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-purple-600 mb-2">HIPAA</div>
              <div className="text-xs text-muted-foreground">Healthcare Ready</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-lg font-bold text-orange-600 mb-2">ISO 27001</div>
              <div className="text-xs text-muted-foreground">Information Security</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Data Residency Control</h3>
                  <p className="text-muted-foreground">Choose where your data is stored with regional data centers worldwide.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Penetration Testing</h3>
                  <p className="text-muted-foreground">Regular security audits by third-party experts to identify and fix vulnerabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Zero-Trust Architecture</h3>
                  <p className="text-muted-foreground">Never trust, always verify approach with continuous authentication and authorization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Incident Response</h3>
                  <p className="text-muted-foreground">24/7 security monitoring with rapid incident response and notification protocols.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Advanced Threat Protection</h3>
                  <p className="text-muted-foreground">AI-powered threat detection and prevention against advanced persistent threats.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Secure API Access</h3>
                  <p className="text-muted-foreground">OAuth 2.0 and API key management with rate limiting and access controls.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Data Loss Prevention</h3>
                  <p className="text-muted-foreground">Automated scanning and protection against accidental data leaks and breaches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Secure File Sharing</h3>
                  <p className="text-muted-foreground">Encrypted file sharing with expiration dates, password protection, and access tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl mb-8 text-red-100">Protect your business with the highest security standards and sleep peacefully knowing your data is safe.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Shield className="h-5 w-5 mr-2" />
              Security Overview
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4">
              <FileCheck className="h-5 w-5 mr-2" />
              Compliance Docs
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-red-100">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Global Compliance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}