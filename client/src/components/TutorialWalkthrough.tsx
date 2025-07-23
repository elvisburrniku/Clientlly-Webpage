import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Lightbulb,
  Target,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Package
} from 'lucide-react';

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  targetSelector: string;
  icon: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  action?: 'click' | 'hover' | 'scroll';
  highlightColor: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to BusinessFlow Pro!',
    description: 'Let\'s take a quick tour of your powerful business management platform. This walkthrough will show you the key features to get you started.',
    targetSelector: '.logo-container',
    icon: <Play className="h-5 w-5" />,
    position: 'bottom',
    highlightColor: 'from-blue-500 to-purple-500'
  },
  {
    id: 'navigation',
    title: 'Navigation Menu',
    description: 'Access all your business tools from the main navigation. Features, pricing, and account settings are all easily accessible.',
    targetSelector: 'nav',
    icon: <Target className="h-5 w-5" />,
    position: 'bottom',
    highlightColor: 'from-green-500 to-blue-500'
  },
  {
    id: 'features',
    title: 'Core Features',
    description: 'Explore our comprehensive business management features including invoicing, expenses, client management, and more.',
    targetSelector: '.features-section',
    icon: <Package className="h-5 w-5" />,
    position: 'top',
    action: 'scroll',
    highlightColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 'pricing',
    title: 'Choose Your Plan',
    description: 'Select the perfect plan for your business needs. Start with our free trial to explore all features.',
    targetSelector: '.pricing-section',
    icon: <BarChart3 className="h-5 w-5" />,
    position: 'top',
    action: 'scroll',
    highlightColor: 'from-orange-500 to-red-500'
  },
  {
    id: 'get-started',
    title: 'Start Your Journey',
    description: 'Ready to transform your business? Click "Start Your Trial" to begin your free trial and unlock all features.',
    targetSelector: '.cta-button',
    icon: <CheckCircle className="h-5 w-5" />,
    position: 'top',
    action: 'click',
    highlightColor: 'from-green-500 to-emerald-500'
  }
];

interface TutorialWalkthroughProps {
  isVisible: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

export default function TutorialWalkthrough({ isVisible, onComplete, onSkip }: TutorialWalkthroughProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });

  const currentStepData = tutorialSteps[currentStep];

  useEffect(() => {
    if (!isVisible) return;

    const updateTargetElement = () => {
      const element = document.querySelector(currentStepData.targetSelector) as HTMLElement;
      if (element) {
        setTargetElement(element);
        
        // Calculate overlay position
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        let top = rect.top + scrollTop;
        let left = rect.left + scrollLeft;
        
        // Adjust position based on tooltip placement
        switch (currentStepData.position) {
          case 'top':
            top -= 20;
            left += rect.width / 2 - 200; // Center horizontally
            break;
          case 'bottom':
            top += rect.height + 20;
            left += rect.width / 2 - 200; // Center horizontally
            break;
          case 'left':
            top += rect.height / 2 - 100; // Center vertically
            left -= 420;
            break;
          case 'right':
            top += rect.height / 2 - 100; // Center vertically
            left += rect.width + 20;
            break;
        }
        
        setOverlayPosition({ top, left });
        
        // Scroll element into view if needed
        if (currentStepData.action === 'scroll') {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    // Initial setup
    updateTargetElement();
    
    // Update on window resize
    window.addEventListener('resize', updateTargetElement);
    window.addEventListener('scroll', updateTargetElement);
    
    return () => {
      window.removeEventListener('resize', updateTargetElement);
      window.removeEventListener('scroll', updateTargetElement);
    };
  }, [currentStep, isVisible, currentStepData]);

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const skipTutorial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onSkip();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-500" />
      
      {/* Highlight Spotlight */}
      {targetElement && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 10,
            left: targetElement.getBoundingClientRect().left + window.pageXOffset - 10,
            width: targetElement.offsetWidth + 20,
            height: targetElement.offsetHeight + 20,
          }}
        >
          <div className={`w-full h-full rounded-xl bg-gradient-to-r ${currentStepData.highlightColor} opacity-30 animate-pulse`} />
          <div className="absolute inset-2 bg-white/20 rounded-lg backdrop-blur-sm" />
        </div>
      )}
      
      {/* Tutorial Card */}
      <div
        className={`fixed z-[10000] transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        style={{
          top: overlayPosition.top,
          left: Math.max(20, Math.min(overlayPosition.left, window.innerWidth - 420)),
        }}
      >
        <Card className="w-96 shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${currentStepData.highlightColor} flex items-center justify-center text-white shadow-lg`}>
                  {currentStepData.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {currentStepData.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    Step {currentStep + 1} of {tutorialSteps.length}
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={skipTutorial}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Content */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {currentStepData.description}
            </p>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span>{Math.round(((currentStep + 1) / tutorialSteps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${currentStepData.highlightColor} transition-all duration-500`}
                  style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
                />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={skipTutorial}
                  className="text-gray-500"
                >
                  Skip Tour
                </Button>
              </div>
              
              <Button
                onClick={nextStep}
                className={`bg-gradient-to-r ${currentStepData.highlightColor} hover:opacity-90 text-white shadow-lg flex items-center space-x-1`}
              >
                <span>{currentStep === tutorialSteps.length - 1 ? 'Get Started' : 'Next'}</span>
                {currentStep === tutorialSteps.length - 1 ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            {/* Helpful Tips */}
            {currentStepData.action && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                    {currentStepData.action === 'click' && 'Try clicking the highlighted element!'}
                    {currentStepData.action === 'hover' && 'Hover over the highlighted area to explore.'}
                    {currentStepData.action === 'scroll' && 'Scroll down to see more features.'}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Tooltip Arrow */}
        <div
          className={`absolute w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 ${
            currentStepData.position === 'top' ? '-bottom-2 left-1/2 -translate-x-1/2' :
            currentStepData.position === 'bottom' ? '-top-2 left-1/2 -translate-x-1/2' :
            currentStepData.position === 'left' ? '-right-2 top-1/2 -translate-y-1/2' :
            '-left-2 top-1/2 -translate-y-1/2'
          }`}
        />
      </div>
    </>
  );
}