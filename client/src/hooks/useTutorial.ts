import { useState, useEffect } from 'react';

interface UseTutorialReturn {
  showTutorial: boolean;
  startTutorial: () => void;
  completeTutorial: () => void;
  skipTutorial: () => void;
  isFirstVisit: boolean;
}

export function useTutorial(): UseTutorialReturn {
  const [showTutorial, setShowTutorial] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if user has completed tutorial before
    const hasCompletedTutorial = localStorage.getItem('businessflow-tutorial-completed');
    const isFirstTime = !hasCompletedTutorial;
    
    setIsFirstVisit(isFirstTime);
    
    // Auto-start tutorial for first-time users after a short delay
    if (isFirstTime) {
      const timer = setTimeout(() => {
        setShowTutorial(true);
      }, 2000); // 2 second delay to let page load
      
      return () => clearTimeout(timer);
    }
  }, []);

  const startTutorial = () => {
    setShowTutorial(true);
  };

  const completeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('businessflow-tutorial-completed', 'true');
    localStorage.setItem('businessflow-tutorial-completed-date', new Date().toISOString());
  };

  const skipTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('businessflow-tutorial-completed', 'true');
    localStorage.setItem('businessflow-tutorial-skipped', 'true');
    localStorage.setItem('businessflow-tutorial-completed-date', new Date().toISOString());
  };

  return {
    showTutorial,
    startTutorial,
    completeTutorial,
    skipTutorial,
    isFirstVisit
  };
}