import { useState, useEffect } from 'react';

// Language detection and management
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
];

// Translation interfaces
export interface Translations {
  [key: string]: string | Translations;
}

// Get user's preferred language from browser
export function detectUserLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  
  // Check localStorage first
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage && SUPPORTED_LANGUAGES.find(lang => lang.code === savedLanguage)) {
    return savedLanguage;
  }

  // Detect from browser
  const browserLanguage = navigator.language.split('-')[0];
  const supportedCodes = SUPPORTED_LANGUAGES.map(lang => lang.code);
  
  if (supportedCodes.includes(browserLanguage)) {
    return browserLanguage;
  }

  return 'en'; // Default fallback
}

// Get user's location for currency and region-specific content
export async function detectUserLocation(): Promise<{
  country: string;
  currency: string;
  timezone: string;
  currencySymbol: string;
}> {
  try {
    // Try to get location from browser's Intl API
    const locale = Intl.DateTimeFormat().resolvedOptions();
    const timezone = locale.timeZone;
    
    // Detect country from timezone more accurately
    const timezoneParts = timezone.split('/');
    let detectedCountry = 'DE';
    let detectedCurrency = 'EUR';
    let currencySymbol = '€';
    
    // Enhanced timezone to region mapping
    if (timezone.includes('Europe/')) {
      detectedCountry = 'EU';
      detectedCurrency = 'EUR';
      currencySymbol = '€';
    } else if (timezone.includes('America/')) {
      detectedCountry = 'US';
      detectedCurrency = 'USD';
      currencySymbol = '$';
    } else if (timezone.includes('Asia/Tokyo') || timezone.includes('Asia/Osaka')) {
      detectedCountry = 'JP';
      detectedCurrency = 'JPY';
      currencySymbol = '¥';
    } else if (timezone.includes('Asia/Shanghai') || timezone.includes('Asia/Hong_Kong')) {
      detectedCountry = 'CN';
      detectedCurrency = 'CNY';
      currencySymbol = '¥';
    } else if (timezone.includes('Australia/')) {
      detectedCountry = 'AU';
      detectedCurrency = 'AUD';
      currencySymbol = 'A$';
    } else if (timezone.includes('Asia/Seoul')) {
      detectedCountry = 'KR';
      detectedCurrency = 'KRW';
      currencySymbol = '₩';
    }

    return {
      country: detectedCountry,
      currency: detectedCurrency,
      timezone,
      currencySymbol,
    };
  } catch (error) {
    return {
      country: 'DE',
      currency: 'EUR',
      timezone: 'Europe/Berlin',
      currencySymbol: '€',
    };
  }
}

// Simple language state management
let globalLanguage = 'en';
let globalLocationInfo: any = null;
let subscribers: Array<() => void> = [];

// Initialize language on module load
const initLanguage = () => {
  const saved = localStorage.getItem('preferred-language');
  if (saved && SUPPORTED_LANGUAGES.find(lang => lang.code === saved)) {
    globalLanguage = saved;
  } else {
    globalLanguage = detectUserLanguage();
  }
  
  // Initialize location
  detectUserLocation().then(location => {
    globalLocationInfo = location;
    notifySubscribers();
  });
};

const notifySubscribers = () => {
  subscribers.forEach(callback => callback());
};

// Hook for managing language state
export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>(globalLanguage);
  const [isLoading, setIsLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState<{
    country: string;
    currency: string;
    timezone: string;
    currencySymbol: string;
  } | null>(globalLocationInfo);

  useEffect(() => {
    // Subscribe to global state changes
    const updateState = () => {
      setCurrentLanguage(globalLanguage);
      setLocationInfo(globalLocationInfo);
      setIsLoading(false);
    };

    subscribers.push(updateState);
    
    // Initialize if needed
    if (!globalLocationInfo) {
      initLanguage();
    } else {
      setIsLoading(false);
    }

    // Cleanup subscription
    return () => {
      subscribers = subscribers.filter(sub => sub !== updateState);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    if (SUPPORTED_LANGUAGES.find(lang => lang.code === langCode)) {
      console.log('Changing language from', globalLanguage, 'to', langCode);
      globalLanguage = langCode;
      localStorage.setItem('preferred-language', langCode);
      notifySubscribers();
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    isLoading,
    supportedLanguages: SUPPORTED_LANGUAGES,
    locationInfo,
  };
}

// Translation function
export function translate(
  key: string, 
  translations: { [lang: string]: Translations },
  language: string = 'en',
  fallbackLanguage: string = 'en'
): string {
  const getNestedValue = (obj: Translations, path: string): string => {
    return path.split('.').reduce((current: any, key: string) => {
      return current && typeof current === 'object' ? current[key] : current;
    }, obj as any) as string;
  };

  // Try current language
  const currentLangTranslations = translations[language];
  if (currentLangTranslations) {
    const value = getNestedValue(currentLangTranslations, key);
    if (value && typeof value === 'string') {
      return value;
    }
  }

  // Fallback to fallback language
  const fallbackTranslations = translations[fallbackLanguage];
  if (fallbackTranslations) {
    const value = getNestedValue(fallbackTranslations, key);
    if (value && typeof value === 'string') {
      return value;
    }
  }

  // Return key if no translation found
  return key;
}