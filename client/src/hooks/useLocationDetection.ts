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
        
        // Method 1: Try ipapi.co (free tier)
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const result = await response.json();
            if (result.country_code) {
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

        // Method 2: Try ipgeolocation.io (backup)
        if (!data) {
          try {
            const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=free');
            if (response.ok) {
              const result = await response.json();
              if (result.country_code2) {
                data = {
                  country: result.country_code2,
                  currency: countryToCurrency[result.country_code2] || 'USD',
                  timezone: result.time_zone?.name || 'UTC',
                  city: result.city
                };
              }
            }
          } catch (e) {
            console.log('ipgeolocation.io failed, trying next method');
          }
        }

        // Method 3: Use browser timezone as fallback
        if (!data) {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const locale = navigator.language;
          
          // Basic mapping from timezone/locale to currency
          let currency = 'USD';
          if (timezone.includes('Europe')) {
            currency = 'EUR';
          } else if (timezone.includes('London')) {
            currency = 'GBP';
          } else if (timezone.includes('Tokyo')) {
            currency = 'JPY';
          } else if (timezone.includes('Toronto') || timezone.includes('Vancouver')) {
            currency = 'CAD';
          } else if (timezone.includes('Sydney') || timezone.includes('Melbourne')) {
            currency = 'AUD';
          } else if (timezone.includes('Zurich')) {
            currency = 'CHF';
          } else if (timezone.includes('Stockholm')) {
            currency = 'SEK';
          } else if (timezone.includes('Oslo')) {
            currency = 'NOK';
          } else if (timezone.includes('Copenhagen')) {
            currency = 'DKK';
          }

          data = {
            country: locale.split('-')[1] || 'US',
            currency,
            timezone,
          };
        }

        if (data) {
          setLocationData(data);
        } else {
          // Ultimate fallback
          setLocationData({
            country: 'US',
            currency: 'USD',
            timezone: 'UTC'
          });
        }
        
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