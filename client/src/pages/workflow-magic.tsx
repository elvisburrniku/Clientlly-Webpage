import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb, 
  Zap, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  X, 
  ArrowRight,
  Sparkles,
  Settings,
  BarChart3,
  Target,
  RefreshCw,
  Brain
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import logoPath from "@assets/3d_1753268267691.png";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  estimatedTimeSaving: number;
  difficulty: string;
  status: string;
  metadata: any;
  createdAt: string;
}

interface Analytics {
  id: number;
  action: string;
  category: string;
  duration: number;
  metadata: any;
  timestamp: string;
}

export default function WorkflowMagic() {
  const [activeTab, setActiveTab] = useState("recommendations");
  const queryClient = useQueryClient();

  // Fetch recommendations
  const { data: recommendations = [], isLoading: loadingRecs } = useQuery<Recommendation[]>({
    queryKey: ["/api/workflow-recommendations"],
    queryFn: () => apiRequest("/api/workflow-recommendations") as Promise<Recommendation[]>
  });

  // Fetch analytics
  const { data: analytics = [], isLoading: loadingAnalytics } = useQuery<Analytics[]>({
    queryKey: ["/api/workflow-analytics"],
    queryFn: () => apiRequest("/api/workflow-analytics?limit=50") as Promise<Analytics[]>
  });

  // Generate recommendations mutation
  const generateMutation = useMutation({
    mutationFn: () => apiRequest("/api/workflow-recommendations/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/workflow-recommendations"] });
    }
  });

  // Update status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      apiRequest(`/api/workflow-recommendations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/workflow-recommendations"] });
    }
  });

  // Delete recommendation mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      apiRequest(`/api/workflow-recommendations/${id}`, { 
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/workflow-recommendations"] });
    }
  });

  // Track analytics mutation
  const trackMutation = useMutation({
    mutationFn: (data: any) =>
      apiRequest("/api/workflow-analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
  });

  useEffect(() => {
    // Track page visit
    trackMutation.mutate({
      action: "workflow_magic_visited",
      category: "navigation",
      duration: Date.now(),
      metadata: { page: "workflow-magic" }
    });
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-orange-600 bg-orange-50 border-orange-200";
      case "low": return "text-green-600 bg-green-50 border-green-200";
      case "critical": return "text-purple-600 bg-purple-50 border-purple-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "automation": return <Zap className="h-4 w-4" />;
      case "optimization": return <TrendingUp className="h-4 w-4" />;
      case "integration": return <Settings className="h-4 w-4" />;
      default: return <Lightbulb className="h-4 w-4" />;
    }
  };

  // Calculate analytics insights
  const totalTimeSaved = Array.isArray(recommendations) 
    ? recommendations
        .filter(r => r.status === 'implemented')
        .reduce((sum, r) => sum + r.estimatedTimeSaving, 0)
    : 0;

  const categoryStats = Array.isArray(analytics) 
    ? analytics.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    : {};

  const pendingRecommendations = Array.isArray(recommendations) 
    ? recommendations.filter(r => r.status === 'pending') 
    : [];
  const implementedRecommendations = Array.isArray(recommendations) 
    ? recommendations.filter(r => r.status === 'implemented') 
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
              <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                <img 
                  src={logoPath} 
                  alt="BusinessFlow Pro" 
                  className="w-12 h-9 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-black dark:text-white">
                BusinessFlow Pro
              </span>
            </Link>
            <Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-300%">
              Workflow Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            AI-powered insights that learn from your business patterns to suggest personalized workflow optimizations, 
            automations, and productivity improvements tailored specifically to your needs.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{Array.isArray(recommendations) ? recommendations.length : 0}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Total Recommendations</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{implementedRecommendations.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Implemented</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{Math.floor(totalTimeSaved / 60)}h</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Time Saved Weekly</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{Array.isArray(analytics) ? analytics.length : 0}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Actions Tracked</div>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={() => generateMutation.mutate()}
            disabled={generateMutation.isPending}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {generateMutation.isPending ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating AI Recommendations...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate New Recommendations
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="recommendations" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Recommendations</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>Insights</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Personalized Recommendations
                  </h2>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {pendingRecommendations.length} Pending
                  </Badge>
                </div>

                {loadingRecs ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <Card key={i} className="animate-pulse">
                        <CardContent className="p-6">
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {Array.isArray(recommendations) && recommendations.map((rec: Recommendation) => (
                      <Card key={rec.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                {getCategoryIcon(rec.category)}
                              </div>
                              <div>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {rec.title}
                                </CardTitle>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge className={`text-xs ${getPriorityColor(rec.priority)}`}>
                                    {rec.priority}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {rec.category}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {rec.difficulty}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {rec.status === 'pending' && (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateStatusMutation.mutate({ id: rec.id, status: 'implemented' })}
                                    className="text-green-600 border-green-600 hover:bg-green-50"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Implement
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => deleteMutation.mutate(rec.id)}
                                    className="text-red-600 border-red-600 hover:bg-red-50"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                              {rec.status === 'implemented' && (
                                <Badge className="text-green-600 bg-green-50 border-green-200">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Implemented
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {rec.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-green-600">
                                <Clock className="h-4 w-4 mr-1" />
                                Save {Math.floor(rec.estimatedTimeSaving / 60)}h {rec.estimatedTimeSaving % 60}m weekly
                              </div>
                            </div>
                            
                            {rec.metadata?.implementationSteps && (
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                View Steps
                                <ArrowRight className="h-4 w-4 ml-1" />
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Workflow Analytics</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Category Usage */}
                  <Card className="bg-white/80 backdrop-blur-sm border-0">
                    <CardHeader>
                      <CardTitle>Category Usage</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(categoryStats)
                        .sort(([,a], [,b]) => (b as number) - (a as number))
                        .map(([category, count]) => (
                          <div key={category} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="capitalize font-medium">{category}</span>
                              <span className="text-gray-500">{count} actions</span>
                            </div>
                            <Progress 
                              value={Array.isArray(analytics) && analytics.length > 0 ? ((count as number) / analytics.length) * 100 : 0} 
                              className="h-2"
                            />
                          </div>
                        ))
                      }
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="bg-white/80 backdrop-blur-sm border-0">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Array.isArray(analytics) && analytics.slice(0, 8).map((item: Analytics) => (
                          <div key={item.id} className="flex items-center space-x-3 text-sm">
                            <div className="p-1 bg-blue-50 rounded text-blue-600">
                              {getCategoryIcon(item.category)}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium capitalize">
                                {item.action.replace(/_/g, ' ')}
                              </div>
                              <div className="text-gray-500 text-xs">
                                {new Date(item.timestamp).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Insights</h2>
                
                <div className="grid gap-6">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-500 rounded-full">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Productivity Trend</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Your workflow efficiency has improved by 23% this month. The automated invoice 
                            follow-ups and receipt categorization are your biggest time savers.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-green-500 rounded-full">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization Opportunity</h3>
                          <p className="text-gray-600 leading-relaxed">
                            You spend 40% of your time on invoicing tasks. Consider implementing bulk invoice 
                            generation and automated payment tracking to reduce this by 60%.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-purple-500 rounded-full">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Best Action</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Based on your usage patterns, setting up automated bank account synchronization 
                            would save you approximately 4 hours per week and improve accuracy by 95%.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}