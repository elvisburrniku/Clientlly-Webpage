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
        
        // Method 1: Try ipapi.co (free tier) with timeout and better error handling
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
          
          const response = await fetch('https://ipapi.co/json/', {
            signal: controller.signal,
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'BusinessFlow Pro'
            }
          });
          
          clearTimeout(timeoutId);
          
          if (response.ok) {
            const result = await response.json();
            if (result.country_code && result.country_code !== 'undefined') {
              data = {
                country: result.country_code,
                currency: countryToCurrency[result.country_code] || 'USD',
                timezone: result.timezone || 'UTC',
                city: result.city
              };
            }
          }
        } catch (e) {
          console.log('ipapi.co failed, trying next method');
        }

        // Method 2: Try a more reliable fallback using browser APIs
        if (!data) {
          try {
            // Use browser timezone and locale information as a more reliable fallback
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const locale = navigator.language || 'en-US';
            
            // Extract country from locale (e.g., 'en-US' -> 'US')
            const countryFromLocale = locale.split('-')[1] || 'US';
            
            data = {
              country: countryFromLocale,
              currency: countryToCurrency[countryFromLocale] || 'USD',
              timezone: timezone,
              city: 'Unknown'
            };
          } catch (e) {
            console.log('Browser API fallback failed, using defaults');
          }
        }

        // Final fallback: Use default US location
        if (!data) {
          data = {
            country: 'US',
            currency: 'USD',
            timezone: 'America/New_York',
            city: 'Unknown'
          };
        }

        setLocationData(data);
        
      } catch (err) {
        console.error('Location detection failed:', err);
        setError('Failed to detect location');
        
        // Fallback to default
        setLocationData({
          country: 'US',
          currency: 'USD',
          timezone: 'UTC'
        });
      } finally {
        setIsLoading(false);
      }
    }

    detectLocation();
  }, []);

  return { locationData, isLoading, error };
}