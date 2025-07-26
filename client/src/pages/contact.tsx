import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Globe,
  ArrowLeft,
  CheckCircle,
  Star,
  Sparkles,
  Shield
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: typeof contactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you within 24 hours.",
      });
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/attached_assets/3d_1753268267691.png" 
                alt="BusinessFlow Pro" 
                className="w-12 h-9 object-contain logo-simple"
                style={{ filter: 'drop-shadow(0 0 0 transparent)', background: 'transparent' }}
              />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline"
                onClick={() => window.location.href = "/api/login"}
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => window.location.href = "/subscribe?plan=basic&billing=monthly"}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Your Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with Yellow Background - Matching "Let's Grow Together" */}
          <div className="text-center mb-16 relative">
            <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 rounded-3xl shadow-2xl overflow-hidden relative group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Sparkles */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce"></div>
              
              <div className="p-12 relative z-10">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                  Get in Touch
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 max-w-4xl mx-auto leading-relaxed">
                  Have questions? Need support? We're here to help your business succeed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <Card className="glass-effect border-0 shadow-2xl fade-in stagger-2">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-foreground mb-2 tracking-tight">Send us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business needs and how we can help..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={5}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6 fade-in stagger-3">
                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-foreground mb-1">Email Support</h3>
                        <p className="text-muted-foreground text-sm mb-2">Get help from our support team</p>
                        <p className="text-blue-600 font-medium">support@businessflowpro.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Headphones className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-foreground mb-1">Live Chat</h3>
                        <p className="text-muted-foreground text-sm mb-2">Chat with our team in real-time</p>
                        <Badge className="bg-green-100 text-green-700">Available 24/7</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-foreground mb-1">Phone Support</h3>
                        <p className="text-muted-foreground text-sm mb-2">Speak directly with our experts</p>
                        <p className="text-purple-600 font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-muted-foreground text-sm">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Let's Grow Together Section - Enhanced Design with Yellow Background */}
              <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 rounded-3xl shadow-2xl overflow-hidden relative group hover:shadow-3xl transition-all duration-500">
                {/* Decorative Sparkles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-8 left-12 w-4 h-4 animate-ping delay-0">
                    <Sparkles className="w-4 h-4 text-amber-600/40" />
                  </div>
                  <div className="absolute bottom-16 right-16 w-6 h-6 animate-ping delay-1000">
                    <Sparkles className="w-6 h-6 text-orange-600/50" />
                  </div>
                  <div className="absolute top-20 right-24 w-3 h-3 animate-ping delay-2000">
                    <Sparkles className="w-3 h-3 text-yellow-600/40" />
                  </div>
                  <div className="absolute bottom-32 left-20 w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse delay-1500"></div>
                </div>
                
                <div className="p-12 relative z-10">
                  <div className="text-center">
                    {/* Title */}
                    <h3 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                      <span className="inline-block animate-elegant-rise animation-delay-0">Let's</span>{' '}
                      <span className="inline-block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-extrabold animate-elegant-rise animation-delay-200 hover:animate-gentle-bounce">grow</span>{' '}
                      <span className="inline-block animate-elegant-rise animation-delay-400">together</span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed mb-12 max-w-4xl mx-auto">
                      Join 10,000+ businesses that trust BusinessFlow Pro for their operations. 
                      Your success drives our development.
                    </p>
                    
                    {/* Trust Indicators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {/* 99.9% Uptime */}
                      <div className="group/card">
                        <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                              <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">99.9% Uptime</h4>
                              <p className="text-gray-700 dark:text-gray-200 font-medium">Always reliable</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 24/7 Support */}
                      <div className="group/card">
                        <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                              <Headphones className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                              <p className="text-gray-700 dark:text-gray-200 font-medium">We're here for you</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bank-level Security */}
                      <div className="group/card">
                        <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                              <Shield className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Bank-level Security</h4>
                              <p className="text-gray-700 dark:text-gray-200 font-medium">Enterprise grade</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}