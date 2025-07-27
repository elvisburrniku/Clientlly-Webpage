import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, FileText } from "lucide-react";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/attached_assets/3d_1753268267691.png" 
                alt="BusinessFlow Pro" 
                className="w-10 h-8 object-contain"
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white">BusinessFlow Pro</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight animate-professional-fade">
              Privacy <span className="animate-subtle-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Last updated: July 27, 2025
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Our Commitment to Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  At BusinessFlow Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business management platform.
                </p>
                <p>
                  We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy or our practices with regard to your personal information, please contact us.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Database className="h-6 w-6 text-green-600" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <h4>Personal Information You Provide:</h4>
                <ul>
                  <li>Account registration information (name, email address, password)</li>
                  <li>Company information (business name, industry, company size)</li>
                  <li>Contact information (phone number, address)</li>
                  <li>Billing and payment information</li>
                  <li>Profile information and preferences</li>
                </ul>
                
                <h4>Business Data You Upload:</h4>
                <ul>
                  <li>Customer and client information</li>
                  <li>Invoice and billing data</li>
                  <li>Expense records and receipts</li>
                  <li>Inventory and product information</li>
                  <li>Calendar and scheduling data</li>
                </ul>

                <h4>Automatically Collected Information:</h4>
                <ul>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Log files and system activity</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Eye className="h-6 w-6 text-purple-600" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain the BusinessFlow Pro service</li>
                  <li>Process your transactions and manage your subscription</li>
                  <li>Send you account-related communications and updates</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Improve our services and develop new features</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="h-6 w-6 text-orange-600" />
                  <span>How We Share Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>We may share your information in the following situations:</p>
                <ul>
                  <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                  <li><strong>Service providers:</strong> With trusted third-party vendors who help us operate our service</li>
                  <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Team members:</strong> With other users in your organization (as configured by you)</li>
                </ul>
                <p>
                  <strong>We never sell your personal information to third parties.</strong>
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Lock className="h-6 w-6 text-red-600" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>We implement appropriate technical and organizational security measures to protect your information:</p>
                <ul>
                  <li>End-to-end encryption for data transmission</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Access controls and monitoring systems</li>
                  <li>Staff training on data protection practices</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <span>Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdrawal:</strong> Withdraw previously given consent</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Database className="h-6 w-6 text-teal-600" />
                  <span>Data Retention</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>We retain your information for as long as necessary to:</p>
                <ul>
                  <li>Provide you with our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services</li>
                </ul>
                <p>
                  When you cancel your account, we will delete your personal information within 90 days, unless we are required to retain it for legal purposes. Business data may be retained for longer periods as required by law or for legitimate business purposes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="h-6 w-6 text-gray-600" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> privacy@businessflowpro.com</li>
                  <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                  <li><strong>Address:</strong> BusinessFlow Pro Privacy Team, 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  <li><strong>Contact Form:</strong> <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-effect border border-white/20 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">Your Privacy is Our Priority</h3>
              <p className="text-muted-foreground mb-6">
                We're committed to keeping your business data secure and private. Experience peace of mind with BusinessFlow Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/trial">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700">
                    Start Your Trial
                  </Button>
                </Link>
                <Link href="/data-protection">
                  <Button variant="outline">
                    Learn More About Data Protection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}