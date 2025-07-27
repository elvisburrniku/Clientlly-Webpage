import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Shield, Clock, Users, FileText, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>

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
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
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
          <div className="space-y-12">
            {/* Agreement Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-foreground">Agreement to Terms</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  By accessing and using BusinessFlow Pro ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our website located at BusinessFlow Pro (the "Service") operated by BusinessFlow Pro ("us", "we", or "our").
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
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
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-foreground">User Accounts</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the Service and for all activities that occur under your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-foreground">Acceptable Use Policy</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>You agree not to use the Service:</p>
                <ul>
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>
            </section>

            {/* Subscription and Billing */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-foreground">Subscription and Billing</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Some parts of the Service are offered on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p>
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or BusinessFlow Pro cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting BusinessFlow Pro customer support team.
                </p>
                <p>
                  A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide BusinessFlow Pro with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information.
                </p>
              </div>
            </section>

            {/* Cancellation and Refunds */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <ArrowLeft className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-foreground">Cancellation and Refunds</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  You can cancel your subscription at any time through your account settings or by contacting our support team. Cancellation will take effect at the end of your current billing period.
                </p>
                <p>
                  We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied with our service within the first 14 days, contact us for a full refund.
                </p>
                <p>
                  Refunds beyond the 14-day period are not available, but you can cancel at any time to avoid future charges.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-gray-600" />
                <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  In no event shall BusinessFlow Pro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul>
                  <li>By email: support@businessflowpro.com</li>
                  <li>Through our contact page: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                  <li>By phone: +1 (555) 123-4567</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Bottom CTA with Yellow Background */}
          <div className="mt-16 -mx-6 sm:-mx-8 lg:-mx-12 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden py-12 px-6 sm:px-8 lg:px-12">
            {/* Floating Sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black text-black mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-black/80 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already using BusinessFlow Pro to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = "/trial"}
                  className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-bold rounded-md transition-colors duration-300"
                >
                  Start Your Trial
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/subscribe";
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-bold rounded-md transition-colors duration-300"
                >
                  Buy Now
                </button>
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