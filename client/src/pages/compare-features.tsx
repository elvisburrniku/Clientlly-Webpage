import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowLeft, FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package, Clock, Calendar, RefreshCw } from 'lucide-react';

export default function CompareFeatures() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$29",
      description: "Perfect for freelancers and small businesses",
      popular: false
    },
    {
      id: "professional", 
      name: "Professional",
      price: "$79",
      description: "Best for growing businesses",
      popular: true
    },
    {
      id: "business",
      name: "Business", 
      price: "$159",
      description: "For established businesses",
      popular: false
    }
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Professional Invoicing", icon: FileText, basic: true, professional: true, business: true },
        { name: "Smart Expense Tracking", icon: Receipt, basic: true, professional: true, business: true },
        { name: "Debt Management", icon: CreditCard, basic: false, professional: true, business: true },
        { name: "Insights & Reports", icon: BarChart3, basic: "Basic", professional: "Advanced", business: "Premium" },
        { name: "Client Management", icon: Users, basic: "5 clients", professional: "50 clients", business: "Unlimited" },
      ]
    },
    {
      category: "Advanced Features", 
      items: [
        { name: "Vendor Management", icon: Building2, basic: false, professional: true, business: true },
        { name: "Inventory Management", icon: Package, basic: false, professional: true, business: true },
        { name: "Smart Attendance", icon: Clock, basic: false, professional: false, business: true },
        { name: "Smart Calendar", icon: Calendar, basic: false, professional: true, business: true },
        { name: "Easy Migration", icon: RefreshCw, basic: false, professional: true, business: true },
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600" />
      ) : (
        <X className="h-5 w-5 text-gray-400" />
      );
    }
    return (
      <span className="text-sm font-medium text-foreground">{value}</span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50">
      {/* Header */}
      <header className="border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Compare Plan Features</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose the <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">perfect plan</span> for your business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare all features across our plans to find the right fit for your business needs.
          </p>
        </div>

        {/* Plans Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600">{plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => window.location.href = '/subscribe'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Detailed Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b">{category.category}</h3>
                  
                  <div className="space-y-4">
                    {category.items.map((feature, featureIndex) => (
                      <div key={featureIndex} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center py-4 border-b border-gray-100 dark:border-gray-800">
                        
                        {/* Feature Name */}
                        <div className="flex items-center space-x-3">
                          <feature.icon className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-foreground">{feature.name}</span>
                        </div>
                        
                        {/* Basic Plan */}
                        <div className="text-center">
                          {renderFeatureValue(feature.basic)}
                        </div>
                        
                        {/* Professional Plan */}
                        <div className="text-center">
                          {renderFeatureValue(feature.professional)}
                        </div>
                        
                        {/* Business Plan */}
                        <div className="text-center">
                          {renderFeatureValue(feature.business)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="mb-6 text-blue-100">
              Choose your plan and start transforming your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/trial'}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}