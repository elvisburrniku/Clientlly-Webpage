import { useEffect } from "react";
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
  AlertCircle
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
        {/* Welcome Section */}
        <div className="mb-8 slide-in-bottom">
          <h1 className="text-4xl font-bold gradient-text mb-2 fade-in">
            Welcome back, {user.firstName || 'there'}!
          </h1>
          <p className="text-xl text-muted-foreground fade-in stagger-1">
            Here's an overview of your business operations
          </p>
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
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: Receipt, 
              title: "Expenses", 
              description: "Track business expenses",
              count: "89",
              color: "from-green-500 to-green-600"
            },
            { 
              icon: Users, 
              title: "Clients", 
              description: "Customer relationship management",
              count: "156",
              color: "from-purple-500 to-purple-600"
            },
            { 
              icon: Bus, 
              title: "HR", 
              description: "Human resources management",
              count: "23",
              color: "from-orange-500 to-orange-600"
            },
            { 
              icon: File, 
              title: "Contracts", 
              description: "Business contract management",
              count: "34",
              color: "from-red-500 to-red-600"
            },
            { 
              icon: Handshake, 
              title: "Offers", 
              description: "Create and send proposals",
              count: "12",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((module, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass-effect border-border/50 scale-in stagger-${index + 1} group cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center pulse-glow group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{module.count}</div>
                    <div className="text-xs text-muted-foreground">total</div>
                  </div>
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
