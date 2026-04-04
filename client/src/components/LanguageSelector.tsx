import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';

const CODES: Record<string, string> = {
  sq: 'SQ', en: 'EN', de: 'DE', es: 'ES', mk: 'MK',
};

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = supportedLanguages.find(l => l.code === currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-300 bg-white hover:bg-indigo-50 transition-all duration-150 focus:outline-none shadow-sm">
          <span className="text-base leading-none">{currentLang?.flag}</span>
          <span className="text-[11px] font-bold text-gray-600 tracking-wide">
            {CODES[currentLanguage] ?? currentLanguage.toUpperCase()}
          </span>
          <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={6} className="w-44 p-1 rounded-xl shadow-lg border border-gray-100 bg-white">
        {supportedLanguages.map((lang) => {
          const active = currentLanguage === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => { changeLanguage(lang.code); setIsOpen(false); }}
              className={`flex items-center gap-2.5 cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors ${
                active ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span className="flex-1">{lang.name}</span>
              <span className={`text-[10px] font-bold ${active ? 'text-indigo-400' : 'text-gray-300'}`}>
                {CODES[lang.code]}
              </span>
              {active && <Check className="h-3 w-3 text-indigo-500" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
