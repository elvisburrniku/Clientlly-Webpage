import { useLanguage, translate } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const { currentLanguage, locationInfo } = useLanguage();

  const t = (key: string, fallback?: string): string => {
    const result = translate(key, translations, currentLanguage, 'en') || fallback || key;
    return result;
  };

  return { 
    t, 
    currentLanguage, 
    locationInfo,
    formatCurrency: (amount: number) => {
      if (locationInfo) {
        return `${locationInfo.currencySymbol}${amount.toFixed(2)}`;
      }
      return `$${amount.toFixed(2)}`;
    }
  };
}