import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowRight, 
  Upload, 
  Database, 
  Users, 
  Check, 
  Sparkles, 
  Building2, 
  Mail, 
  Phone, 
  Calendar,
  Menu,
  X,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { Link } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useToast } from '@/hooks/use-toast';

const MigrationRequestPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contactType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    currentPlatform: '',
    dataSize: '',
    urgency: '',
    specificRequirements: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const getSuccessMessage = () => {
        switch (formData.contactType) {
          case 'Request Full Migration':
            return {
              title: "Migration Request Submitted!",
              description: "Our migration team will contact you within 24 hours to discuss your free migration."
            };
          case 'Consultation First':
            return {
              title: "Consultation Request Submitted!",
              description: "Our team will contact you within 24 hours to schedule your consultation call."
            };
          case 'Technical Questions Only':
            return {
              title: "Questions Submitted!",
              description: "Our technical team will contact you within 24 hours to answer your questions."
            };
          default:
            return {
              title: "Request Submitted!",
              description: "Our team will contact you within 24 hours."
            };
        }
      };

      const successMessage = getSuccessMessage();
      toast({
        title: successMessage.title,
        description: successMessage.description,
      });

      // Reset form
      setFormData({
        contactType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        currentPlatform: '',
        dataSize: '',
        urgency: '',
        specificRequirements: '',
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactTypes = [
    'Request Full Migration', 
    'Consultation First', 
    'Technical Questions Only'
  ];

  const currentPlatforms = [
    'QuickBooks Desktop',
    'QuickBooks Online',
    'Xero',
    'Excel/CSV Files',
    'Sage 50',
    'FreshBooks',
    'Wave Accounting',
    'Zoho Books',
    'Peachtree',
    'Simply Accounting',
    'Other'
  ];

  const dataSizes = [
    'Small (Under 1,000 transactions)',
    'Medium (1,000 - 10,000 transactions)',
    'Large (10,000 - 50,000 transactions)',
    'Enterprise (50,000+ transactions)'
  ];

  const urgencyOptions = [
    'ASAP (Within 1 week)',
    'Soon (Within 2-4 weeks)',
    'Flexible (Within 1-2 months)',
    'Planning ahead (2+ months)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 transition-all duration-300">
              <img 
                src="/attached_assets/3d_1753268267691.png" 
                alt="BusinessFlow Pro" 
                className="w-10 h-8 object-contain"
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = '/subscribe'}
                className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/contact'} 
                className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/subscribe'}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 font-medium"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => window.location.href = "/trial"}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Your Trial
              </Button>
              <div className="flex items-center">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link href="/about" className="block text-lg text-gray-600 hover:text-gray-800 font-bold">About Us</Link>
              <Link href="/#features" className="block text-lg text-gray-600 hover:text-gray-800 font-bold">Features</Link>
              <Button 
                variant="ghost"
                onClick={() => {
                  window.location.href = '/subscribe';
                  setShowMobileMenu(false);
                }}
                className="w-full text-left justify-start text-lg text-gray-600 hover:text-gray-800 font-bold"
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  window.location.href = '/contact';
                  setShowMobileMenu(false);
                }} 
                className="w-full text-left justify-start text-lg text-gray-600 hover:text-gray-800 font-bold"
              >
                Contact Us
              </Button>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    window.location.href = "/api/login";
                    setShowMobileMenu(false);
                  }} 
                  className="w-full text-left justify-start text-gray-600 hover:text-gray-800"
                >
                  Login
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    window.location.href = '/subscribe';
                    setShowMobileMenu(false);
                  }}
                  className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = "/trial";
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium"
                >
                  Start Your Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Yellow Background */}
      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            {/* Yellow Background Hero Section */}
            <div className="relative w-screen -ml-[50vw] left-1/2 px-4 py-16 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 overflow-hidden mb-12">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-8 left-16 w-4 h-4 animate-ping delay-0">
                  <Sparkles className="w-4 h-4 text-amber-600/30" />
                </div>
                <div className="absolute bottom-8 right-20 w-6 h-6 animate-ping delay-1000">
                  <Sparkles className="w-6 h-6 text-orange-600/40" />
                </div>
                <div className="absolute top-12 right-32 w-3 h-3 animate-ping delay-2000">
                  <Sparkles className="w-3 h-3 text-yellow-600/30" />
                </div>
                <div className="absolute bottom-20 left-32 w-5 h-5 animate-ping delay-3000">
                  <Sparkles className="w-5 h-5 text-amber-500/40" />
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <RefreshCw className="h-10 w-10 text-white" />
                </div>
                
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                  Start Your{' '}
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                    Free Migration
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                  Switch to BusinessFlow Pro with <span className="font-bold text-gray-900 dark:text-white">zero hassle</span>.
                  <br className="hidden lg:block" />
                  Our experts handle everything - data transfer, setup, and training. Completely free.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">100% Free</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">No Hidden Costs</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">24-48 Hours</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">Quick Setup</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">Expert Support</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">Dedicated Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Request Form */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <Card className="relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl">
          {/* Form Header with Yellow Background */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 p-8 rounded-t-3xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-2 left-4 w-3 h-3 animate-ping delay-0">
                <Sparkles className="w-3 h-3 text-amber-600/30" />
              </div>
              <div className="absolute bottom-2 right-6 w-4 h-4 animate-ping delay-1000">
                <Sparkles className="w-4 h-4 text-orange-600/40" />
              </div>
              <div className="absolute top-4 right-8 w-2 h-2 animate-ping delay-2000">
                <Sparkles className="w-2 h-2 text-yellow-600/30" />
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                {formData.contactType === 'Request Full Migration' 
                  ? 'Request Your Free Migration'
                  : formData.contactType === 'Consultation First'
                  ? 'Schedule Your Consultation'
                  : formData.contactType === 'Technical Questions Only'
                  ? 'Submit Your Questions'
                  : 'Contact Our Migration Team'
                }
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {formData.contactType === 'Request Full Migration' 
                  ? 'Fill out this form and our migration experts will contact you within 24 hours'
                  : formData.contactType === 'Consultation First'
                  ? 'Fill out this form and our team will schedule a consultation call within 24 hours'
                  : formData.contactType === 'Technical Questions Only'
                  ? 'Fill out this form and our technical team will answer your questions within 24 hours'
                  : 'Fill out this form and our team will contact you within 24 hours'
                }
              </p>
            </div>
          </div>

          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type */}
              <div className="space-y-3">
                <Label htmlFor="contactType" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-indigo-500" />
                  What can we help you with?
                </Label>
                <Select value={formData.contactType} onValueChange={(value) => handleInputChange('contactType', value)}>
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400">
                    <SelectValue placeholder="Choose the type of assistance you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-500" />
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-500" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@company.com"
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-orange-500" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="companyName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-green-500" />
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Your Company Inc."
                  required
                  className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-400"
                />
              </div>

              {/* Migration Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="currentPlatform" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Database className="h-5 w-5 mr-2 text-blue-500" />
                    Current Platform
                  </Label>
                  <Select value={formData.currentPlatform} onValueChange={(value) => handleInputChange('currentPlatform', value)}>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400">
                      <SelectValue placeholder="Select your current platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentPlatforms.map((platform) => (
                        <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="dataSize" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-purple-500" />
                    Data Size
                  </Label>
                  <Select value={formData.dataSize} onValueChange={(value) => handleInputChange('dataSize', value)}>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400">
                      <SelectValue placeholder="Estimate your data size" />
                    </SelectTrigger>
                    <SelectContent>
                      {dataSizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="urgency" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                  Migration Timeline
                </Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400">
                    <SelectValue placeholder="When do you need the migration completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="specificRequirements" className="text-lg font-bold text-gray-900 dark:text-white">
                  Specific Requirements (Optional)
                </Label>
                <Textarea
                  id="specificRequirements"
                  value={formData.specificRequirements}
                  onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                  placeholder={
                    formData.contactType === 'Request Full Migration' 
                      ? 'Tell us about any specific requirements, custom fields, or concerns you have about the migration...'
                      : formData.contactType === 'Consultation First'
                      ? 'Tell us about your current situation and what you\'d like to discuss in the consultation...'
                      : formData.contactType === 'Technical Questions Only'
                      ? 'What specific technical questions do you have about our platform or migration process?'
                      : 'Tell us how we can help you...'
                  }
                  className="min-h-32 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  {formData.contactType === 'Request Full Migration' 
                    ? 'I agree to be contacted by BusinessFlow Pro\'s migration team regarding my free migration request'
                    : formData.contactType === 'Consultation First'
                    ? 'I agree to be contacted by BusinessFlow Pro\'s team for a consultation call'
                    : 'I agree to be contacted by BusinessFlow Pro\'s technical team regarding my questions'
                  }
                </Label>
              </div>

              <Button 
                type="submit" 
                disabled={!formData.agreeToTerms || !formData.contactType || isSubmitting}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Submitting Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Upload className="w-6 h-6" />
                    <span>
                      {formData.contactType === 'Request Full Migration' 
                        ? 'Request Free Migration'
                        : formData.contactType === 'Consultation First'
                        ? 'Schedule Consultation'
                        : formData.contactType === 'Technical Questions Only'
                        ? 'Submit Questions'
                        : 'Submit Request'
                      }
                    </span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MigrationRequestPage;