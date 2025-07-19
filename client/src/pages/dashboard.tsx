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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BusinessFlow Pro</span>
            </div>
            
            <div className="flex items-center space-x-4">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.firstName || 'there'}!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your business operations
          </p>
        </div>

        {/* Subscription Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
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
                <Button variant="outline">Manage Subscription</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">No active subscription</p>
                  <p className="text-sm text-muted-foreground">Subscribe to unlock all features</p>
                </div>
                <Button onClick={() => window.location.href = "/subscribe"}>
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
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center`}>
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{module.count}</div>
                    <div className="text-xs text-muted-foreground">total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">$24,750</div>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">1,234</div>
              <p className="text-sm text-muted-foreground">Total Invoices</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">98.5%</div>
              <p className="text-sm text-muted-foreground">Collection Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">156</div>
              <p className="text-sm text-muted-foreground">Active Clients</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
