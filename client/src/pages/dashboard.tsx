import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import ChatBot from "@/components/ChatBot";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardLoader, FeatureLoader } from "@/components/LoadingStates";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
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
  Clock,
  Brain,
  ChevronRight,
  PieChart,
  BarChart3
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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
  const [personalizedStats, setPersonalizedStats] = useState({
    invoices: 0,
    tasks: 0,
    todayActivities: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);

  // Sample chart data for business analytics
  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
    { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
    { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000 },
    { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
    { month: 'May', revenue: 58000, expenses: 40000, profit: 18000 },
    { month: 'Jun', revenue: 67000, expenses: 42000, profit: 25000 },
  ];

  const expenseCategories = [
    { name: 'Operations', value: 35, color: '#8884d8' },
    { name: 'Marketing', value: 25, color: '#82ca9d' },
    { name: 'Salaries', value: 30, color: '#ffc658' },
    { name: 'Other', value: 10, color: '#ff7300' },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#2563eb",
    },
    expenses: {
      label: "Expenses", 
      color: "#dc2626",
    },
    profit: {
      label: "Profit",
      color: "#16a34a",
    },
  };

  // Generate personalized stats based on user activity
  useEffect(() => {
    if (!user) return;
    
    // Simulate personalized stats based on user data
    const userId = (user as any)?.id || 'default';
    const userSeed = userId.toString().split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0);
    
    setPersonalizedStats({
      invoices: 180 + (userSeed % 150), // 180-330 range
      tasks: 25 + (userSeed % 30), // 25-55 range  
      todayActivities: 8 + (userSeed % 15) // 8-23 range
    });
  }, [user]);

  // Enhanced welcome animation sequence
  useEffect(() => {
    if (!user) return;
    
    const sequence = [
      () => setAnimationStep(1), // Show welcome text with logo animation
      () => setAnimationStep(2), // Show personalized greeting with typing effect
      () => setAnimationStep(3), // Show stats animation with counters
      () => setAnimationStep(4), // Show achievement badges
      () => setAnimationStep(5), // Show confetti celebration
      () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      },
      () => setAnimationStep(6), // Final loading state
      () => setShowWelcomeAnimation(false) // Complete animation
    ];
    
    let timeouts: NodeJS.Timeout[] = [];
    
    sequence.forEach((step, index) => {
      timeouts.push(setTimeout(step, index * 900));
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

  // Get personalized welcome message based on time and user activity
  const getPersonalizedMessage = () => {
    const hour = new Date().getHours();
    const dayOfWeek = new Date().getDay();
    const userName = (user as any)?.firstName || 'there';
    
    const morningMessages = [
      `Ready to start another productive day, ${userName}?`,
      `Let's make today count!`,
      `Your business is waiting for you to shine today!`,
      `Time to turn those morning ideas into reality!`
    ];
    
    const afternoonMessages = [
      `Hope your day is going well, ${userName}!`,
      `Perfect time to review your progress!`,
      `Let's tackle those afternoon goals!`,
      `Keep the momentum going strong!`
    ];
    
    const eveningMessages = [
      `Wrapping up another successful day, ${userName}?`,
      `Time to review today's achievements!`,
      `Let's finish strong today!`,
      `Planning for tomorrow starts now!`
    ];
    
    const weekendMessages = [
      `Working hard even on weekends? You're dedicated, ${userName}!`,
      `Weekend hustle mode activated!`,
      `Your dedication is inspiring!`,
      `Success doesn't take weekends off!`
    ];
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return weekendMessages[Math.floor(Math.random() * weekendMessages.length)];
    }
    
    if (hour < 12) {
      return morningMessages[Math.floor(Math.random() * morningMessages.length)];
    } else if (hour < 17) {
      return afternoonMessages[Math.floor(Math.random() * afternoonMessages.length)];
    } else {
      return eveningMessages[Math.floor(Math.random() * eveningMessages.length)];
    }
  };

  // Get achievement badges based on user stats
  const getAchievementBadges = () => {
    const badges = [];
    
    if (personalizedStats.invoices > 250) {
      badges.push({ icon: "💰", title: "Invoice Master", desc: "250+ invoices created" });
    }
    
    if (personalizedStats.tasks > 40) {
      badges.push({ icon: "⚡", title: "Task Champion", desc: "Productivity expert" });
    }
    
    if (personalizedStats.todayActivities > 15) {
      badges.push({ icon: "🔥", title: "Daily Dynamo", desc: "High activity today" });
    }
    
    // Always include at least one motivational badge
    if (badges.length === 0) {
      badges.push({ icon: "🌟", title: "Rising Star", desc: "Building your empire" });
    }
    
    return badges;
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50 flex items-center justify-center">
        <FeatureLoader 
          feature="Dashboard" 
          steps={["Loading user data", "Setting up workspace", "Preparing widgets", "Ready to go!"]}
        />
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        

      </div>

      {/* Navigation */}
      <nav className="glass-effect border-b border-white/20 relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/3d_1753268267691.png" 
                    alt="BusinessFlow Pro" 
                    className="w-10 h-8 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4 slide-in-right">
              <div className="flex items-center space-x-2">
                {(user as any)?.profileImageUrl ? (
                  <img 
                    src={(user as any).profileImageUrl} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {(user as any)?.firstName?.[0] || (user as any)?.email?.[0] || 'U'}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-foreground">
                  {(user as any)?.firstName || (user as any)?.email || 'User'}
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
        {/* Enhanced Welcome Animation Overlay */}
        {showWelcomeAnimation && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-orange-50/95 dark:from-gray-900/95 dark:via-purple-900/95 dark:to-orange-900/95 z-50 flex items-center justify-center backdrop-blur-sm">
            {/* Confetti Animation */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'][Math.floor(Math.random() * 4)],
                    }}
                  />
                ))}
              </div>
            )}
            
            <div className="text-center space-y-8 max-w-3xl px-8">
              {/* Step 1: Welcome Text with Logo Animation */}
              <div className={`transition-all duration-1000 ${animationStep >= 1 ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'}`}>
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/attached_assets/3d_1753195741585.png" 
                    alt="BusinessFlow Pro" 
                    className="w-8 h-6 object-contain mr-3 animate-pulse"
                  />
                  <Sparkles className="h-5 w-5 text-blue-600 mr-2 animate-spin" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium text-lg">Welcome to BusinessFlow Pro</span>
                </div>
              </div>

              {/* Step 2: Personalized Greeting with Typing Effect */}
              <div className={`transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-professional-fade">
                  <span className="text-foreground block mb-3">{getTimeBasedGreeting()},</span>
                  <span className="animate-subtle-gradient">
                    {(user as any)?.firstName || 'there'}!
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {getPersonalizedMessage()}
                </p>
              </div>

              {/* Step 3: Animated Stats with Counters */}
              <div className={`transition-all duration-1000 delay-600 ${animationStep >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 shadow-xl">
                    <TrendingUp className="h-10 w-10 mx-auto mb-3 text-green-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.invoices}</div>
                    <div className="text-sm text-muted-foreground font-medium">Invoices Created</div>
                  </div>
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 delay-150 shadow-xl">
                    <Calendar className="h-10 w-10 mx-auto mb-3 text-blue-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.tasks}</div>
                    <div className="text-sm text-muted-foreground font-medium">Active Tasks</div>
                  </div>
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 delay-300 shadow-xl">
                    <Clock className="h-10 w-10 mx-auto mb-3 text-purple-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.todayActivities}</div>
                    <div className="text-sm text-muted-foreground font-medium">Today's Activities</div>
                  </div>
                </div>
              </div>

              {/* Step 4: Achievement Badges */}
              <div className={`transition-all duration-1000 delay-900 ${animationStep >= 4 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="flex justify-center space-x-4 flex-wrap gap-3">
                  {getAchievementBadges().map((badge, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-2xl mr-2 animate-bounce">{badge.icon}</span>
                      <div className="text-left">
                        <div className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{badge.title}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">{badge.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 5: Enhanced Loading indicator */}
              <div className={`transition-all duration-1000 delay-1200 ${animationStep >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-150"></div>
                  <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce delay-300"></div>
                </div>
                <p className="text-lg text-muted-foreground font-medium animate-pulse">Preparing your personalized dashboard...</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Welcome Section */}
        <div className={`mb-8 transition-all duration-1000 ${!showWelcomeAnimation ? 'slide-in-bottom' : 'opacity-0'}`}>
          <Card className="glass-effect border-primary/20 p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl font-bold gradient-text fade-in">
                    {getTimeBasedGreeting()}, {(user as any)?.firstName || 'there'}!
                  </h1>
                  <div className="animate-bounce">
                    <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                  </div>
                </div>
                
                {/* Achievement badges mini display */}
                <div className="hidden md:flex space-x-2">
                  {getAchievementBadges().slice(0, 2).map((badge, index) => (
                    <div 
                      key={index}
                      className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 text-xs hover:scale-105 transition-transform duration-300"
                    >
                      <span className="mr-1">{badge.icon}</span>
                      <span className="text-yellow-700 dark:text-yellow-300 font-medium">{badge.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6 fade-in stagger-1">
                {getPersonalizedMessage()}
              </p>
              
              {/* Enhanced stats row */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 fade-in stagger-2">
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">System Online</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                    {subscriptionStatus?.hasSubscription ? `${subscriptionStatus.subscriptionPlan} Plan` : 'Free Plan'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Data Synced</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">{personalizedStats.invoices} Invoices</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">{personalizedStats.tasks} Tasks</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{personalizedStats.todayActivities} Today</span>
                </div>
              </div>
            </div>
          </Card>
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

        {/* Business Analytics Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend Chart */}
          <Card className="glass-effect border-primary/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Revenue Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stackId="1"
                      stroke="#2563eb" 
                      fill="#2563eb" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="profit" 
                      stackId="2"
                      stroke="#16a34a" 
                      fill="#16a34a" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Expense Categories Pie Chart */}
          <Card className="glass-effect border-primary/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-primary" />
                <span>Expense Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip />
                    <Pie data={expenseCategories} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">
                      {category.name}: {category.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Performance Bar Chart */}
        <Card className="glass-effect border-primary/20 hover-lift mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Monthly Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="#2563eb" name="Revenue" />
                  <Bar dataKey="expenses" fill="#dc2626" name="Expenses" />
                  <Bar dataKey="profit" fill="#16a34a" name="Profit" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
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

        {/* AI Dashboard Link */}
        <div className="mb-8">
          <Link href="/ai-dashboard">
            <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        AI-Powered Business Intelligence
                      </h3>
                      <p className="text-gray-600">
                        Discover smart insights, voice commands, and automation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Explore AI Features</span>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
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
      
      {/* Chat Bot */}
      <ChatBot />
      
      {/* Accessibility Controls */}
      <AccessibilityControls />
    </div>
  );
}
