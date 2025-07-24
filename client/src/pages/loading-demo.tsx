import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandLoader, InlineSpinner, SkeletonLoader, FeatureLoader, CardLoader, SuccessAnimation } from "@/components/LoadingStates";
import { ArrowLeft, Play, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';

export default function LoadingDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const demos = [
    {
      id: 'brand-loader',
      title: 'Brand Loader',
      description: 'Main brand loading spinner with floating business icons',
      component: <BrandLoader size="lg" message="Loading BusinessFlow Pro..." />
    },
    {
      id: 'feature-loader',
      title: 'Feature Loader',
      description: 'Step-by-step loading with progress indicators',
      component: <FeatureLoader feature="Invoicing System" steps={["Connecting to database", "Loading invoice templates", "Setting up calculations", "Ready to create invoices"]} />
    },
    {
      id: 'card-loader',
      title: 'Card Skeleton',
      description: 'Placeholder cards for content loading',
      component: <CardLoader count={3} />
    },
    {
      id: 'skeleton-loader',
      title: 'Skeleton Loader',
      description: 'Text content placeholder',
      component: (
        <div className="space-y-6 max-w-md">
          <SkeletonLoader lines={3} />
          <SkeletonLoader lines={2} />
          <SkeletonLoader lines={4} />
        </div>
      )
    },
    {
      id: 'inline-spinner',
      title: 'Inline Spinners',
      description: 'Small spinners for buttons and inline use',
      component: (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Button disabled className="flex items-center space-x-2">
              <InlineSpinner size="sm" />
              <span>Saving...</span>
            </Button>
            <Button disabled className="flex items-center space-x-2">
              <InlineSpinner size="xs" />
              <span>Loading</span>
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <InlineSpinner size="md" />
            <span>Processing payment...</span>
          </div>
        </div>
      )
    },
    {
      id: 'success-animation',
      title: 'Success Animation',
      description: 'Celebration animation for completed actions',
      component: <SuccessAnimation message="Payment successful!" />
    }
  ];

  const runSuccessDemo = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
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
            <h1 className="text-xl font-bold text-foreground">Loading States Demo</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Loading States with <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand Personality</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Intuitive and playful loading experiences that reflect BusinessFlow Pro's professional yet approachable brand.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {demos.map((demo) => (
            <Card key={demo.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{demo.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{demo.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={activeDemo === demo.id ? "secondary" : "outline"}
                    onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
                    className="flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>{activeDemo === demo.id ? 'Hide' : 'Demo'}</span>
                  </Button>
                </div>
              </CardHeader>
              {activeDemo === demo.id && (
                <CardContent className="pt-0">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                    {demo.component}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Interactive Demo</CardTitle>
            <p className="text-muted-foreground">Try out different loading scenarios</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                onClick={() => setActiveDemo('brand-loader')}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>App Loading</span>
              </Button>
              
              <Button
                onClick={() => setActiveDemo('feature-loader')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Feature Loading</span>
              </Button>
              
              <Button
                onClick={() => setActiveDemo('card-loader')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Content Loading</span>
              </Button>
              
              <Button
                onClick={runSuccessDemo}
                variant="outline"
                className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
              >
                <Play className="h-4 w-4" />
                <span>Success Animation</span>
              </Button>
            </div>

            {/* Demo Display Area */}
            <div className="bg-white dark:bg-gray-900 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
              {showSuccess ? (
                <SuccessAnimation message="Demo completed successfully!" />
              ) : activeDemo ? (
                demos.find(demo => demo.id === activeDemo)?.component
              ) : (
                <div className="text-center text-muted-foreground">
                  <RefreshCw className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Select a demo above to see it in action</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Design Principles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Design Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold">Brand Consistency</h3>
                <p className="text-sm text-muted-foreground">All loading states reflect BusinessFlow Pro's visual identity with consistent colors and typography.</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">Performance Focused</h3>
                <p className="text-sm text-muted-foreground">Lightweight animations that don't impact performance while providing engaging feedback.</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">Playful Personality</h3>
                <p className="text-sm text-muted-foreground">Professional yet approachable animations that make waiting enjoyable rather than frustrating.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}