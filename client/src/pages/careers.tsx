import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Briefcase,
  Upload,
  Users,
  Heart,
  Globe,
  Coffee,
  TrendingUp,
  Rocket,
  Send,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";

export default function Careers() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("apply");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    experience: "",
    coverLetter: "",
    portfolio: "",
    resume: null as File | null,
    availability: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File | null) => {
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = () => {
    // Redirect to email application
    const subject = `Job Application - ${formData.position || 'General Application'}`;
    const body = `Dear BusinessFlow Pro Team,

I am interested in applying for a position at your company.

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Location: ${formData.location}
- Position of Interest: ${formData.position}
- Experience Level: ${formData.experience}
- Portfolio/LinkedIn: ${formData.portfolio}

Cover Letter:
${formData.coverLetter}

Best regards,
${formData.firstName} ${formData.lastName}`;

    const emailUrl = `mailto:info@clientlly.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
  };

  const handleResumeSubmit = () => {
    // Redirect to email for resume submission
    const subject = `Resume Submission - ${formData.firstName} ${formData.lastName}`;
    const body = `Dear BusinessFlow Pro Team,

I would like to submit my resume for future opportunities.

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Availability: ${formData.availability}

${formData.resume ? `I have attached my resume: ${formData.resume.name}` : 'Please find my resume attached.'}

I am interested in joining your team and would welcome the opportunity to discuss potential roles.

Best regards,
${formData.firstName} ${formData.lastName}`;

    const emailUrl = `mailto:info@clientlly.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
  };

  const positions = [
    "Senior Full-Stack Developer",
    "Product Designer", 
    "Customer Success Manager",
    "DevOps Engineer",
    "Sales Development Representative",
    "Marketing Manager",
    "Data Analyst",
    "Other"
  ];

  const companyValues = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and async collaboration tools"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness stipend, and mental health support"
    },
    {
      icon: TrendingUp,
      title: "Growth & Learning",
      description: "Learning budget, conference tickets, mentorship, and career development"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, sabbatical options, and family-friendly policies"
    },
    {
      icon: Users,
      title: "Diverse Team",
      description: "Collaborate with talented people from around the world who care about impact"
    },
    {
      icon: Rocket,
      title: "Equity & Growth",
      description: "Share in our success with competitive salary and equity compensation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300 logo-container">
              <div className="relative">
                <img 
                  src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                  alt="BusinessFlow Pro" 
                  className="w-14 h-10 object-contain logo-simple cursor-pointer"
                  style={{ filter: 'none', background: 'transparent' }}
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">BusinessFlow Pro</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">About Us</Link>
              <Link href="/#features" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Features</Link>
              <Button variant="ghost" onClick={() => window.location.href = '/subscribe'} className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Pricing</Button>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-bold">Contact Us</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 slide-in-right">
              <Button variant="ghost" onClick={() => window.location.href = "/api/login"} className="text-muted-foreground hover:text-primary transition-all duration-300">Login</Button>
              <Button onClick={() => window.location.href = "/subscribe"} className="bg-blue-600 text-white hover:bg-blue-700 font-medium">Buy Now</Button>
              <Button onClick={() => window.location.href = "/trial"} className="bg-green-600 text-white hover:bg-green-700 font-medium">Start Your Trial</Button>
              <div className="pt-2"><LanguageSelector /></div>
            </div>

            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300">
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Button variant="ghost" onClick={() => window.location.href = '/subscribe'} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Pricing</Button>
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 full-width">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-black/20 text-black border-black/30 px-6 py-2 text-lg font-bold">
              <Briefcase className="w-5 h-5 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 fade-in leading-tight tracking-tight">
              Join <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Our Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
              Apply now, send your resume, or learn more about working at BusinessFlow Pro
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("apply")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === "apply" 
                  ? "bg-white dark:bg-gray-600 text-primary shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Apply Now
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === "resume" 
                  ? "bg-white dark:bg-gray-600 text-primary shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Send Resume
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === "about" 
                  ? "bg-white dark:bg-gray-600 text-primary shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>

      {/* Apply Now Tab */}
      {activeTab === "apply" && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-foreground mb-4">
                    Apply for a <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Position</span>
                  </h2>
                  <p className="text-muted-foreground">Tell us about yourself and the role you're interested in</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="firstName" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>First Name</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>Last Name</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center space-x-2 mb-2">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="position" className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      <span>Position of Interest</span>
                    </Label>
                    <select
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      className="h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a position</option>
                      {positions.map(position => (
                        <option key={position} value={position}>{position}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>Location</span>
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="experience" className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                    <span>Years of Experience</span>
                  </Label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="mb-6">
                  <Label htmlFor="coverLetter" className="flex items-center space-x-2 mb-2">
                    <FileText className="w-4 h-4 text-teal-500" />
                    <span>Cover Letter</span>
                  </Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    className="min-h-32 rounded-xl"
                  />
                </div>

                <div className="mb-8">
                  <Label htmlFor="portfolio" className="flex items-center space-x-2 mb-2">
                    <Globe className="w-4 h-4 text-pink-500" />
                    <span>Portfolio/LinkedIn URL (Optional)</span>
                  </Label>
                  <Input
                    id="portfolio"
                    placeholder="https://..."
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                <Button onClick={handleSubmit} className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Send Resume Tab */}
      {activeTab === "resume" && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-foreground mb-4">
                    Send Your <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Resume</span>
                  </h2>
                  <p className="text-muted-foreground">Upload your resume and we'll keep you in mind for future opportunities</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="resumeFirstName" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>First Name</span>
                    </Label>
                    <Input
                      id="resumeFirstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="resumeLastName" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>Last Name</span>
                    </Label>
                    <Input
                      id="resumeLastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="resumeEmail" className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="resumeEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                <div className="mb-6">
                  <Label className="flex items-center space-x-2 mb-2">
                    <Upload className="w-4 h-4 text-green-500" />
                    <span>Upload Resume</span>
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      {formData.resume ? formData.resume.name : "Drop your resume here or click to browse"}
                    </p>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX (max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <Label htmlFor="availability" className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>Availability</span>
                  </Label>
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                    className="h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">When can you start?</option>
                    <option value="immediately">Immediately</option>
                    <option value="2weeks">2 weeks notice</option>
                    <option value="1month">1 month notice</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <Button onClick={handleResumeSubmit} className="w-full h-12 text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Upload className="w-5 h-5 mr-2" />
                  Send Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Learn About Us Tab */}
      {activeTab === "about" && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Company Overview */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 fade-in">
                About <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">BusinessFlow Pro</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We're building the future of business management software. Our mission is to empower small businesses 
                with intelligent tools that simplify operations and drive growth.
              </p>
            </div>

            {/* Company Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {companyValues.map((value, index) => (
                <Card key={value.title} className="group hover:shadow-lg transition-all duration-300 glass-effect border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="glass-effect border-white/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-black text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-black text-primary mb-2">10K+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-black text-primary mb-2">25+</h3>
                  <p className="text-muted-foreground">Countries</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-black text-primary mb-2">99.9%</h3>
                  <p className="text-muted-foreground">Uptime</p>
                </CardContent>
              </Card>
            </div>

            {/* Our Mission */}
            <Card className="glass-effect border-white/20 mb-16">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-black text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  To democratize business management tools and make enterprise-grade features accessible to small businesses worldwide. 
                  We believe every business deserves powerful tools to succeed, regardless of size or budget.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-black text-foreground mb-6">
                Ready to Join Our <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Mission?</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setActiveTab("apply")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                >
                  Apply for a Position
                </Button>
                <Button 
                  onClick={() => setActiveTab("resume")}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                >
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}