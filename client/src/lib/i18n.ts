import { useState, useEffect } from 'react';

// Language detection and management
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
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
    let detectedCountry = 'US';
    let detectedCurrency = 'USD';
    let currencySymbol = '$';
    
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
      country: 'US',
      currency: 'USD',
      timezone: 'America/New_York',
      currencySymbol: '$',
    };
  }
}

// Hook for managing language state
export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState<{
    country: string;
    currency: string;
    timezone: string;
    currencySymbol: string;
  } | null>(null);

  useEffect(() => {
    const initializeLanguageAndLocation = async () => {
      try {
        // Detect language
        const detected = detectUserLanguage();
        setCurrentLanguage(detected);

        // Detect location
        const location = await detectUserLocation();
        setLocationInfo(location);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing language/location:', error);
        setIsLoading(false);
      }
    };

    initializeLanguageAndLocation();
  }, []);

  const changeLanguage = (langCode: string) => {
    if (SUPPORTED_LANGUAGES.find(lang => lang.code === langCode)) {
      setCurrentLanguage(langCode);
      localStorage.setItem('preferred-language', langCode);
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
    return path.split('.').reduce((current, key) => {
      return current && typeof current === 'object' ? current[key] as any : current;
    }, obj) as string;
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