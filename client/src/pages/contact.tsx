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
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/logo-transparent.svg" 
                alt="BusinessFlow Pro" 
                className="w-10 h-8"
                onLoad={() => console.log('Logo loaded successfully')}
                onError={() => console.log('Logo failed to load')}
              />
              <span className="text-xl font-black text-foreground">BusinessFlow Pro</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/contact" className="text-foreground font-medium">Contact Us</Link>
            </div>

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

      {/* Header Section with Full Width Yellow Background */}
      <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-8 right-12 w-4 h-4 animate-ping delay-0">
          <Sparkles className="w-4 h-4 text-amber-600/40" />
        </div>
        <div className="absolute bottom-16 left-16 w-6 h-6 animate-ping delay-1000">
          <Sparkles className="w-6 h-6 text-orange-600/50" />
        </div>
        <div className="absolute top-20 right-24 w-3 h-3 animate-ping delay-2000">
          <Sparkles className="w-3 h-3 text-yellow-600/40" />
        </div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse delay-1500"></div>
        
        <div className="pt-20 pb-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Have questions? Need support? We're here to help your business succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Compact Layout - 3 columns */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="glass-effect border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-black text-foreground mb-2">Send us a Message</h2>
                    <p className="text-muted-foreground text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="text-sm">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={contactForm.firstName}
                          onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                          required
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Smith"
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                          required
                          className="h-9"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-sm">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          required
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="company" className="text-sm">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                          className="h-9"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="subject" className="text-sm">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        required
                        className="h-9"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-sm">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs..."
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                    >
                      {contactMutation.isPending ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - Takes 1 column */}
            <div className="space-y-3">
              <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-base mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-xs mb-1">Get in touch via email</p>
                      <p className="text-blue-600 font-medium text-sm">support@businessflowpro.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-base mb-1">Phone Support</h3>
                      <p className="text-muted-foreground text-xs mb-1">Speak directly with our experts</p>
                      <p className="text-purple-600 font-medium text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-base mb-1">Visit Us</h3>
                      <p className="text-muted-foreground text-xs mb-1">Come see us in person</p>
                      <p className="text-muted-foreground text-sm">123 Business Street, NY 10001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-base mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-xs mb-1">We're here when you need us</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>

      {/* Let's Grow Together Section - Full Width Yellow Background */}
      <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 relative overflow-hidden">
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
        
        <div className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Title */}
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                <span className="inline-block animate-elegant-rise animation-delay-0">Let's</span>{' '}
                <span className="inline-block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-extrabold animate-elegant-rise animation-delay-200 hover:animate-gentle-bounce">grow</span>{' '}
                <span className="inline-block animate-elegant-rise animation-delay-400">together</span>
              </h3>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                Join 10,000+ businesses that trust BusinessFlow Pro for their operations. 
                Your success drives our development.
              </p>
              
              {/* Trust Indicators Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* 99.9% Uptime */}
                <div className="group/card">
                  <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1">99.9% Uptime</h4>
                        <p className="text-gray-700 dark:text-gray-200 font-medium text-sm">Always reliable</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 24/7 Support */}
                <div className="group/card">
                  <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                        <Headphones className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1">24/7 Support</h4>
                        <p className="text-gray-700 dark:text-gray-200 font-medium text-sm">We're here for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bank-level Security */}
                <div className="group/card">
                  <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1">Bank-level Security</h4>
                        <p className="text-gray-700 dark:text-gray-200 font-medium text-sm">Enterprise grade</p>
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