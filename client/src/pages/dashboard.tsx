import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChartLine, 
  FileText, 
  Receipt, 
  Users, 
  Bus, 
  File, 
  Handshake,
  Settings,
  LogOut,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react";

interface SubscriptionStatus {
  hasSubscription: boolean;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionDetails?: {
    id: string;
    status: string;
    currentPeriodEnd: number;
    plan: string;
  };
}

export default function Dashboard() {
  const { toast } = useToast();
  const { user, isLoading } = useAuth();
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  // Welcome animation sequence
  useEffect(() => {
    if (!user) return;
    
    const sequence = [
      () => setAnimationStep(1), // Show welcome text
      () => setAnimationStep(2), // Show personalized greeting
      () => setAnimationStep(3), // Show stats animation
      () => setAnimationStep(4), // Show full dashboard
      () => setShowWelcomeAnimation(false) // Complete animation
    ];
    
    let timeouts: NodeJS.Timeout[] = [];
    
    sequence.forEach((step, index) => {
      timeouts.push(setTimeout(step, index * 800));
    });
    
    return () => timeouts.forEach(clearTimeout);
  }, [user]);

  // Get time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Get personalized welcome message
  const getPersonalizedMessage = () => {
    const messages = [
      "Ready to grow your business today?",
      "Let's make today productive!",
      "Your business dashboard is ready.",
      "Time to tackle your business goals!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Fetch subscription status
  const { data: subscriptionStatus, isLoading: isLoadingSubscription } = useQuery<SubscriptionStatus>({
    queryKey: ["/api/subscription/status"],
    retry: false,
  });

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [user, isLoading, toast]);

  if (isLoading || isLoadingSubscription) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Active</Badge>;
      case 'past_due':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Past Due</Badge>;
      case 'canceled':
        return <Badge variant="secondary">Canceled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatPlanName = (plan: string) => {
    return plan?.charAt(0).toUpperCase() + plan?.slice(1) + " Plan" || "No Plan";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl floating-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className="glass-effect border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 slide-in-left">
              <img 
                src="/attached_assets/3d_1753195741585.png" 
                alt="BusinessFlow Pro" 
                className="w-8 h-6 object-contain"
              />
              <span className="text-xl font-bold gradient-text">BusinessFlow Pro</span>
            </div>
            
            <div className="flex items-center space-x-4 slide-in-right">
              <div className="flex items-center space-x-2">
                {user.profileImageUrl ? (
                  <img 
                    src={user.profileImageUrl} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.firstName?.[0] || user.email?.[0] || 'U'}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-foreground">
                  {user.firstName || user.email}
                </span>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.location.href = "/api/logout"}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Animation Overlay */}
        {showWelcomeAnimation && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-orange-50/95 dark:from-gray-900/95 dark:via-purple-900/95 dark:to-orange-900/95 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center space-y-8 max-w-2xl px-8">
              {/* Step 1: Welcome Text */}
              <div className={`transition-all duration-1000 ${animationStep >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Welcome to BusinessFlow Pro</span>
                </div>
              </div>

              {/* Step 2: Personalized Greeting */}
              <div className={`transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-foreground block mb-2">{getTimeBasedGreeting()},</span>
                  <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                    {user.firstName || 'there'}!
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  {getPersonalizedMessage()}
                </p>
              </div>

              {/* Step 3: Quick Stats Animation */}
              <div className={`transition-all duration-1000 delay-600 ${animationStep >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600 animate-bounce" />
                    <div className="text-2xl font-bold text-foreground">247</div>
                    <div className="text-sm text-muted-foreground">Invoices</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 delay-150">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600 animate-bounce" />
                    <div className="text-2xl font-bold text-foreground">34</div>
                    <div className="text-sm text-muted-foreground">Tasks</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 delay-300">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-purple-600 animate-bounce" />
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-sm text-muted-foreground">Today</div>
                  </div>
                </div>
              </div>

              {/* Step 4: Loading indicator */}
              <div className={`transition-all duration-1000 delay-1000 ${animationStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-300"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Preparing your dashboard...</p>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8 slide-in-bottom">
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-4xl font-bold gradient-text fade-in">
              {getTimeBasedGreeting()}, {user.firstName || 'there'}!
            </h1>
            <div className="animate-bounce">
              <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground fade-in stagger-1">
            {getPersonalizedMessage()}
          </p>
          <div className="mt-4 flex items-center space-x-6 text-sm text-muted-foreground fade-in stagger-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Last login: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <Card className="mb-8 glass-effect border-primary/20 hover-lift scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <span>Subscription Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subscriptionStatus?.hasSubscription ? (
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{formatPlanName(subscriptionStatus.subscriptionPlan)}</span>
                    {getStatusBadge(subscriptionStatus.subscriptionStatus)}
                  </div>
                  {subscriptionStatus.subscriptionDetails && (
                    <p className="text-sm text-muted-foreground">
                      Next billing: {new Date(subscriptionStatus.subscriptionDetails.currentPeriodEnd * 1000).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Button variant="outline" className="glow-border">Manage Subscription</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">No active subscription</p>
                  <p className="text-sm text-muted-foreground">Subscribe to unlock all features</p>
                </div>
                <Button 
                  onClick={() => window.location.href = "/subscribe"}
                  className="bg-gradient-to-r from-primary to-secondary pulse-glow"
                >
                  Subscribe Now
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Business Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { 
              icon: FileText, 
              title: "Invoices", 
              description: "Manage your invoicing workflow",
              count: "247",
              color: "from-blue-500 to-blue-600",
              delay: "delay-100"
            },
            { 
              icon: Receipt, 
              title: "Expenses", 
              description: "Track business expenses",
              count: "89",
              color: "from-green-500 to-green-600",
              delay: "delay-200"
            },
            { 
              icon: Users, 
              title: "Clients", 
              description: "Customer relationship management",
              count: "156",
              color: "from-purple-500 to-purple-600",
              delay: "delay-300"
            },
            { 
              icon: Bus, 
              title: "HR", 
              description: "Human resources management",
              count: "23",
              color: "from-orange-500 to-orange-600",
              delay: "delay-400"
            },
            { 
              icon: File, 
              title: "Contracts", 
              description: "Business contract management",
              count: "34",
              color: "from-red-500 to-red-600",
              delay: "delay-500"
            },
            { 
              icon: Handshake, 
              title: "Offers", 
              description: "Create and send proposals",
              count: "12",
              color: "from-indigo-500 to-indigo-600",
              delay: "delay-600"
            }
          ].map((module, index) => (
            <Card 
              key={index} 
              className={`group glass-effect border-primary/20 hover-lift scale-in ${module.delay} cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02] animate-fade-in-up overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 pulse-glow relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <module.icon className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <Badge variant="secondary" className="font-bold text-lg px-3 py-1 bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
                    {module.count}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {module.description}
                </p>
                
                {/* Animated progress indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-muted/30 rounded-full h-1">
                    <div 
                      className={`h-1 bg-gradient-to-r ${module.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Click to explore</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass-effect border-green-200/20 hover-lift scale-in stagger-1 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">$24,750</div>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-4/5"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-blue-200/20 hover-lift scale-in stagger-2 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">1,234</div>
              <p className="text-sm text-muted-foreground">Total Invoices</p>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-purple-200/20 hover-lift scale-in stagger-3 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">98.5%</div>
              <p className="text-sm text-muted-foreground">Collection Rate</p>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-orange-200/20 hover-lift scale-in stagger-4 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">156</div>
              <p className="text-sm text-muted-foreground">Active Clients</p>
              <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full w-3/5"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
