import { useState, useEffect } from 'react';

const TUTORIAL_STORAGE_KEY = 'businessflow_tutorial_completed';

export const useTutorial = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasCompletedTutorial = localStorage.getItem(TUTORIAL_STORAGE_KEY);
    const isFirstTime = !hasCompletedTutorial;
    
    setIsFirstVisit(isFirstTime);
    
    // Show tutorial for first-time users after a short delay
    if (isFirstTime) {
      const timer = setTimeout(() => {
        setShowTutorial(true);
      }, 2000); // 2 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const startTutorial = () => {
    setShowTutorial(true);
  };

  const completeTutorial = () => {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
    setShowTutorial(false);
    setIsFirstVisit(false);
  };

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  const resetTutorial = () => {
    localStorage.removeItem(TUTORIAL_STORAGE_KEY);
    setIsFirstVisit(true);
  };

  return {
    showTutorial,
    isFirstVisit,
    startTutorial,
    completeTutorial,
    closeTutorial,
    resetTutorial
  };
};