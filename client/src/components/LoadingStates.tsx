import { useState, useEffect } from 'react';
import { Clock, CheckCircle, Users, FileText, BarChart3, Building2 } from 'lucide-react';

// Main brand loading spinner with floating elements
export function BrandLoader({ size = "md", message = "Loading..." }: { size?: "sm" | "md" | "lg", message?: string }) {
  const [currentTip, setCurrentTip] = useState(0);
  
  const tips = [
    "Organizing your business data...",
    "Preparing your dashboard...",
    "Setting up your workspace...",
    "Almost ready to go!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      {/* Main brand spinner with floating elements */}
      <div className="relative">
        {/* Central brand spinner */}
        <div className={`${sizeClasses[size]} relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full animate-spin opacity-80"></div>
          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating business icons */}
        <div className="absolute -top-8 -left-8 w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-bounce">
          <FileText className="w-3 h-3 text-blue-600" />
        </div>
        <div className="absolute -top-8 -right-8 w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
          <BarChart3 className="w-3 h-3 text-green-600" />
        </div>
        <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
          <Users className="w-3 h-3 text-purple-600" />
        </div>
        <div className="absolute -bottom-8 -right-8 w-6 h-6 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.6s'}}>
          <Building2 className="w-3 h-3 text-orange-600" />
        </div>
      </div>

      {/* Animated message */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground animate-pulse">{message}</h3>
        <p className="text-sm text-muted-foreground transition-all duration-500 ease-in-out">
          {tips[currentTip]}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentTip % 3 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            style={{animationDelay: `${i * 0.2}s`}}
          />
        ))}
      </div>
    </div>
  );
}

// Simple inline spinner for buttons and small areas
export function InlineSpinner({ size = "sm" }: { size?: "xs" | "sm" | "md" }) {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6"
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-blue-500 border-t-transparent rounded-full animate-spin`} />
  );
}

// Skeleton loader for content
export function SkeletonLoader({ lines = 3, className = "" }: { lines?: number, className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}></div>
        </div>
      ))}
    </div>
  );
}

// Feature loading state with progress steps
export function FeatureLoader({ feature, steps }: { feature: string, steps: string[] }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(prev => prev + 1);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentStep, steps.length]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-lg"></div>
        </div>
        <h3 className="text-lg font-semibold text-foreground">Loading {feature}</h3>
      </div>

      {/* Progress steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
              completedSteps.includes(index)
                ? 'bg-green-500 text-white'
                : index === currentStep
                ? 'bg-blue-500 text-white animate-pulse'
                : 'bg-gray-200 dark:bg-gray-600 text-gray-400'
            }`}>
              {completedSteps.includes(index) ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <span className="text-xs font-bold">{index + 1}</span>
              )}
            </div>
            <span className={`text-sm transition-colors duration-500 ${
              completedSteps.includes(index) || index === currentStep
                ? 'text-foreground font-medium'
                : 'text-muted-foreground'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Card loading placeholder
export function CardLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Success animation
export function SuccessAnimation({ message = "Success!" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full animate-ping opacity-20"></div>
      </div>
      <h3 className="text-xl font-semibold text-green-600 animate-fade-in">{message}</h3>
    </div>
  );
}