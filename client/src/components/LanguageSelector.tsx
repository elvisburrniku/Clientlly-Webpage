import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';

const CODE_LABELS: Record<string, string> = {
  sq: 'SQ',
  en: 'EN',
  de: 'DE',
  es: 'ES',
  mk: 'MK',
};

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-300 bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 transition-all duration-150 focus:outline-none shadow-sm text-sm font-medium"
        >
          <span className="text-base leading-none">{currentLang?.flag}</span>
          <span className="text-[11px] font-bold tracking-wide">
            {CODE_LABELS[currentLanguage] ?? currentLanguage.toUpperCase()}
          </span>
          <ChevronDown
            className={`h-3 w-3 opacity-50 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="w-44 p-1.5 rounded-xl shadow-lg border border-gray-100 bg-white"
      >
        {supportedLanguages.map((language) => {
          const isActive = currentLanguage === language.code;
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => { changeLanguage(language.code); setIsOpen(false); }}
              className={`flex items-center gap-2.5 cursor-pointer rounded-lg px-2.5 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 font-medium'
              }`}
            >
              <span className="text-base leading-none">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-indigo-400' : 'text-gray-300'}`}>
                {CODE_LABELS[language.code]}
              </span>
              {isActive && <Check className="h-3 w-3 text-indigo-500 ml-0.5" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
