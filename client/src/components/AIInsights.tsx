import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Star,
  Eye,
  X,
  ChevronRight,
  DollarSign,
  Calendar,
  Users,
  BarChart3
} from "lucide-react";

interface BusinessInsight {
  id: string;
  insightType: 'opportunity' | 'warning' | 'trend' | 'recommendation';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  data?: any;
  actionSuggestions?: string[];
  isRead: boolean;
  isDismissed: boolean;
  createdAt: string;
}

interface AiPrediction {
  id: string;
  predictionType: 'cash_flow' | 'revenue' | 'expense_category' | 'business_health';
  data: any;
  confidence: number;
  timeframe: string;
  createdAt: string;
}

export function AIInsights() {
  const { toast } = useToast();
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  // Mock data for demonstration
  const mockInsights: BusinessInsight[] = [
    {
      id: '1',
      insightType: 'opportunity',
      title: 'Revenue Growth Opportunity',
      description: 'Client ABC Corp has increased spending by 40% this quarter. Consider proposing additional services.',
      priority: 'high',
      actionSuggestions: [
        'Schedule a meeting to discuss expanded services',
        'Prepare a custom proposal for additional features'
      ],
      isRead: false,
      isDismissed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      insightType: 'warning',
      title: 'Payment Delay Pattern',
      description: 'Three clients have delayed payments by more than 10 days this month.',
      priority: 'medium',
      actionSuggestions: [
        'Review payment terms with affected clients',
        'Consider implementing automated reminders'
      ],
      isRead: false,
      isDismissed: false,
      createdAt: new Date().toISOString()
    }
  ];

  const mockPredictions: AiPrediction[] = [
    {
      id: '1',
      predictionType: 'cash_flow',
      data: { projected: 12450, confidence: 87 },
      confidence: 87,
      timeframe: '1_month',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      predictionType: 'revenue',
      data: { expected: 28900, growth: 15 },
      confidence: 92,
      timeframe: '3_months',
      createdAt: new Date().toISOString()
    }
  ];

  const insights = mockInsights;
  const predictions = mockPredictions;
  const insightsLoading = false;
  const predictionsLoading = false;

  const markAsReadMutation = useMutation({
    mutationFn: async (insightId: string) => {
      // Mock implementation
      console.log('Marking insight as read:', insightId);
      return { success: true };
    },
    onSuccess: () => {
      toast({ title: "Insight marked as read" });
    }
  });

  const dismissInsightMutation = useMutation({
    mutationFn: async (insightId: string) => {
      // Mock implementation
      console.log('Dismissing insight:', insightId);
      return { success: true };
    },
    onSuccess: () => {
      toast({ title: "Insight dismissed", description: "This insight has been removed from your dashboard." });
    }
  });

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <Star className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'trend': return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case 'recommendation': return <Lightbulb className="h-5 w-5 text-purple-500" />;
      default: return <Brain className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPredictionIcon = (type: string) => {
    switch (type) {
      case 'cash_flow': return <DollarSign className="h-5 w-5 text-green-500" />;
      case 'revenue': return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case 'expense_category': return <BarChart3 className="h-5 w-5 text-purple-500" />;
      case 'business_health': return <Users className="h-5 w-5 text-orange-500" />;
      default: return <Brain className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatTimeframe = (timeframe: string) => {
    const map: { [key: string]: string } = {
      '1_month': '1 Month',
      '3_months': '3 Months',
      '6_months': '6 Months',
      '1_year': '1 Year'
    };
    return map[timeframe] || timeframe;
  };

  const unreadCount = insights.filter((insight: BusinessInsight) => !insight.isRead).length;

  if (insightsLoading || predictionsLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl font-semibold">AI Business Intelligence</h2>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              {unreadCount} new
            </Badge>
          )}
        </div>
      </div>

      {/* AI Predictions */}
      {predictions.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Smart Predictions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {predictions.slice(0, 4).map((prediction: AiPrediction) => (
              <Card key={prediction.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getPredictionIcon(prediction.predictionType)}
                      <span className="font-medium capitalize">
                        {prediction.predictionType.replace('_', ' ')}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {prediction.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {formatTimeframe(prediction.timeframe)} forecast
                  </p>
                  <div className="text-sm">
                    {/* Mock prediction data display */}
                    {prediction.predictionType === 'cash_flow' && (
                      <div className="space-y-1">
                        <p className="text-green-600 font-medium">Projected: +$12,450</p>
                        <p className="text-xs text-gray-500">Based on current trends</p>
                      </div>
                    )}
                    {prediction.predictionType === 'revenue' && (
                      <div className="space-y-1">
                        <p className="text-blue-600 font-medium">Expected: $28,900</p>
                        <p className="text-xs text-gray-500">15% growth anticipated</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Business Insights */}
      <div>
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          Smart Insights
        </h3>
        <div className="space-y-3">
          {insights.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No insights available yet. Check back soon!</p>
              </CardContent>
            </Card>
          ) : (
            insights.map((insight: BusinessInsight) => (
              <Card 
                key={insight.id} 
                className={`transition-all duration-200 hover:shadow-md ${
                  !insight.isRead ? 'border-l-4 border-l-purple-500 bg-purple-50/30' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getInsightIcon(insight.insightType)}
                        <h4 className="font-medium">{insight.title}</h4>
                        <Badge className={getPriorityColor(insight.priority)}>
                          {insight.priority}
                        </Badge>
                        {!insight.isRead && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {insight.description}
                      </p>
                      {insight.actionSuggestions && insight.actionSuggestions.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-gray-700">Suggested Actions:</p>
                          {insight.actionSuggestions.slice(0, 2).map((action, index) => (
                            <p key={index} className="text-xs text-gray-600 flex items-center gap-1">
                              <ChevronRight className="h-3 w-3" />
                              {action}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      {!insight.isRead && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markAsReadMutation.mutate(insight.id)}
                          className="h-8 px-3 text-xs"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Mark Read
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => dismissInsightMutation.mutate(insight.id)}
                        className="h-8 px-3 text-xs text-gray-500 hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}