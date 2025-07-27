import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Shield, Clock, Users, FileText, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Terms of <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Last updated: July 27, 2025
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Agreement Section */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Agreement to Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  By accessing and using BusinessFlow Pro ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our website located at BusinessFlow Pro (the "Service") operated by BusinessFlow Pro ("us", "we", or "our").
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="h-6 w-6 text-green-600" />
                  <span>Service Description</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  BusinessFlow Pro is a comprehensive business management platform that provides:
                </p>
                <ul>
                  <li>Professional invoicing and billing management</li>
                  <li>Expense tracking and financial reporting</li>
                  <li>Client and vendor management systems</li>
                  <li>Inventory management and tracking</li>
                  <li>Calendar and scheduling tools</li>
                  <li>Team collaboration features</li>
                  <li>Business analytics and insights</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>User Accounts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the Service and for all activities that occur under your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <span>Acceptable Use Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>You agree not to use the Service:</p>
                <ul>
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            {/* Subscription and Billing */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  <span>Subscription and Billing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Some parts of the Service are offered on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p>
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or BusinessFlow Pro cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting BusinessFlow Pro customer support team.
                </p>
                <p>
                  A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide BusinessFlow Pro with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information.
                </p>
              </CardContent>
            </Card>

            {/* Cancellation and Refunds */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <ArrowLeft className="h-6 w-6 text-red-600" />
                  <span>Cancellation and Refunds</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  You can cancel your subscription at any time through your account settings or by contacting our support team. Cancellation will take effect at the end of your current billing period.
                </p>
                <p>
                  We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied with our service within the first 14 days, contact us for a full refund.
                </p>
                <p>
                  Refunds beyond the 14-day period are not available, but you can cancel at any time to avoid future charges.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Shield className="h-6 w-6 text-gray-600" />
                  <span>Limitation of Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  In no event shall BusinessFlow Pro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-effect border border-white/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="h-6 w-6 text-teal-600" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul>
                  <li>By email: support@businessflowpro.com</li>
                  <li>Through our contact page: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                  <li>By phone: +1 (555) 123-4567</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-effect border border-white/20 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of businesses already using BusinessFlow Pro to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/trial">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                    Start Your Trial
                  </Button>
                </Link>
                <Link href="/subscribe">
                  <Button variant="outline">
                    Buy Now
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