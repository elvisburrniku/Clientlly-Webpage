import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccessibilityTheme = 'default' | 'high-contrast-light' | 'high-contrast-dark' | 'high-contrast-blue';

interface AccessibilitySettings {
  theme: AccessibilityTheme;
  fontSize: 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
  focusIndicators: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateTheme: (theme: AccessibilityTheme) => void;
  updateFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  toggleReducedMotion: () => void;
  toggleFocusIndicators: () => void;
  resetToDefault: () => void;
}

const defaultSettings: AccessibilitySettings = {
  theme: 'default',
  fontSize: 'normal',
  reducedMotion: false,
  focusIndicators: true,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage and apply to document
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply theme class to document
    const root = document.documentElement;
    root.classList.remove('accessibility-high-contrast-light', 'accessibility-high-contrast-dark', 'accessibility-high-contrast-blue');
    
    if (settings.theme !== 'default') {
      root.classList.add(`accessibility-${settings.theme.replace('_', '-')}`);
    }

    // Apply font size
    root.classList.remove('accessibility-font-large', 'accessibility-font-extra-large');
    if (settings.fontSize !== 'normal') {
      root.classList.add(`accessibility-font-${settings.fontSize.replace('_', '-')}`);
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('accessibility-reduced-motion');
    } else {
      root.classList.remove('accessibility-reduced-motion');
    }

    // Apply focus indicators
    if (settings.focusIndicators) {
      root.classList.add('accessibility-enhanced-focus');
    } else {
      root.classList.remove('accessibility-enhanced-focus');
    }
  }, [settings]);

  const updateTheme = (theme: AccessibilityTheme) => {
    setSettings(prev => ({ ...prev, theme }));
  };

  const updateFontSize = (fontSize: 'normal' | 'large' | 'extra-large') => {
    setSettings(prev => ({ ...prev, fontSize }));
  };

  const toggleReducedMotion = () => {
    setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const toggleFocusIndicators = () => {
    setSettings(prev => ({ ...prev, focusIndicators: !prev.focusIndicators }));
  };

  const resetToDefault = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider value={{
      settings,
      updateTheme,
      updateFontSize,
      toggleReducedMotion,
      toggleFocusIndicators,
      resetToDefault,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}