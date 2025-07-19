import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowLeft, ChartLine } from "lucide-react";

interface PlanFeatures {
  [category: string]: {
    [feature: string]: string;
  };
}

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  detailedFeatures: PlanFeatures;
}

const featureCategories = {
  invoicing: "Invoicing & Billing",
  expenses: "Expense Management", 
  crm: "CRM & Sales",
  hr: "HR Management",
  contracts: "Contract Management",
  analytics: "Analytics & Reporting",
  support: "Support & Service"
};

export default function Compare() {
  const [location, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("invoicing");

  const { data: plans = [], isLoading } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/subscription-plans"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const getFeatureValue = (plan: SubscriptionPlan, category: string, feature: string) => {
    return plan.detailedFeatures?.[category]?.[feature] || "❌";
  };

  const isFeatureAvailable = (value: string) => {
    return value !== "❌" && value !== "❌";
  };

  // Get all features for the selected category across all plans
  const getAllFeaturesForCategory = (category: string) => {
    const allFeatures = new Set<string>();
    plans.forEach(plan => {
      if (plan.detailedFeatures?.[category]) {
        Object.keys(plan.detailedFeatures[category]).forEach(feature => {
          allFeatures.add(feature);
        });
      }
    });
    return Array.from(allFeatures);
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
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Compare <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Plans & Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed feature comparison to help you choose the perfect plan for your business needs.
          </p>
        </div>

        {/* Plan Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative transition-all duration-300 hover:shadow-lg ${
                index === 1 ? 'border-2 border-primary shadow-lg' : 'border border-border'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  ${Math.floor(plan.price / 100)}<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className={`w-full ${
                    index === 1 ? 'bg-gradient-to-r from-primary to-secondary' : ''
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                  onClick={() => navigate(`/subscribe?plan=${plan.id}`)}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(featureCategories).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key)}
                className={`${
                  selectedCategory === key 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'hover:bg-muted'
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">
              {featureCategories[selectedCategory as keyof typeof featureCategories]} Features
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold min-w-[200px]">Feature</th>
                    {plans.map((plan, index) => (
                      <th key={plan.id} className={`text-center p-4 font-semibold min-w-[150px] ${
                        index === 1 ? 'bg-primary/10' : ''
                      }`}>
                        {plan.name}
                        <div className="text-sm font-normal text-muted-foreground">
                          ${Math.floor(plan.price / 100)}/mo
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getAllFeaturesForCategory(selectedCategory).map((feature, featureIndex) => (
                    <tr key={feature} className={`border-b ${featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                      <td className="p-4 font-medium">{feature}</td>
                      {plans.map((plan, planIndex) => {
                        const value = getFeatureValue(plan, selectedCategory, feature);
                        const isAvailable = isFeatureAvailable(value);
                        
                        return (
                          <td key={plan.id} className={`p-4 text-center ${
                            planIndex === 1 ? 'bg-primary/5' : ''
                          }`}>
                            {value === "✓" ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : value === "❌" ? (
                              <X className="h-5 w-5 text-red-400 mx-auto" />
                            ) : (
                              <span className={`${
                                isAvailable ? 'text-foreground font-medium' : 'text-muted-foreground'
                              }`}>
                                {value}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">
            Choose the plan that fits your business and start streamlining your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/subscribe?plan=professional")}
              className="bg-gradient-to-r from-primary to-secondary"
            >
              Start with Professional
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/#contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}