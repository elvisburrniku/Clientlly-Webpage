import { useState, useEffect } from 'react';

interface LocationData {
  country: string;
  currency: string;
  timezone: string;
  city?: string;
}

const countryToCurrency: Record<string, string> = {
  'US': 'USD',
  'CA': 'CAD',
  'GB': 'GBP',
  'AU': 'AUD',
  'JP': 'JPY',
  'CH': 'CHF',
  'SE': 'SEK',
  'NO': 'NOK',
  'DK': 'DKK',
  'DE': 'EUR',
  'FR': 'EUR',
  'IT': 'EUR',
  'ES': 'EUR',
  'NL': 'EUR',
  'BE': 'EUR',
  'AT': 'EUR',
  'IE': 'EUR',
  'FI': 'EUR',
  'PT': 'EUR',
  'GR': 'EUR',
  'LU': 'EUR',
  'SI': 'EUR',
  'SK': 'EUR',
  'EE': 'EUR',
  'LV': 'EUR',
  'LT': 'EUR',
  'MT': 'EUR',
  'CY': 'EUR',
};

export function useLocationDetection() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function detectLocation() {
      try {
        setIsLoading(true);
        
        // Try to get location from multiple free APIs
        let data = null;
        
        // Skip external API calls in development and use browser-based detection only
        console.log('Using browser-based location detection for better reliability');

        // Use reliable browser-based location detection
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const locale = navigator.language || 'en-US';
          
          // Extract country from locale (e.g., 'en-US' -> 'US')
          const countryFromLocale = locale.split('-')[1] || 'DE';
          
          // Enhanced timezone-based country detection
          let detectedCountry = countryFromLocale;
          if (timezone.includes('America/New_York') || timezone.includes('America/Chicago') || timezone.includes('America/Denver') || timezone.includes('America/Los_Angeles')) {
            detectedCountry = 'US';
          } else if (timezone.includes('Europe/London')) {
            detectedCountry = 'GB';
          } else if (timezone.includes('Europe/Paris') || timezone.includes('Europe/Berlin') || timezone.includes('Europe/Madrid')) {
            detectedCountry = 'DE';
          } else if (timezone.includes('Asia/Tokyo')) {
            detectedCountry = 'JP';
          } else if (timezone.includes('Australia/Sydney') || timezone.includes('Australia/Melbourne')) {
            detectedCountry = 'AU';
          } else if (timezone.includes('America/Toronto') || timezone.includes('America/Vancouver')) {
            detectedCountry = 'CA';
          }
          
          data = {
            country: detectedCountry,
            currency: countryToCurrency[detectedCountry] || 'EUR',
            timezone: timezone,
            city: 'Unknown'
          };
        } catch (e) {
          console.log('Browser detection failed, using defaults');
        }

        // Final fallback: Use default EU location
        if (!data) {
          data = {
            country: 'DE',
            currency: 'EUR',
            timezone: 'Europe/Berlin',
            city: 'Unknown'
          };
        }

        setLocationData(data);
        
      } catch (err) {
        console.error('Location detection failed:', err);
        setError('Failed to detect location');
        
        // Fallback to default
        setLocationData({
          country: 'DE',
          currency: 'EUR',
          timezone: 'Europe/Berlin'
        });
      } finally {
        setIsLoading(false);
      }
    }

    detectLocation();
  }, []);

  return { locationData, isLoading, error };
}