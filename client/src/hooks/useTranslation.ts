import { useLanguage, translate } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (key: string, fallback?: string): string => {
    return translate(key, translations, currentLanguage, 'en') || fallback || key;
  };

  return { t, currentLanguage };
}