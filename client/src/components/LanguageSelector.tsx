import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = supportedLanguages.find(l => l.code === currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-300 bg-white hover:bg-indigo-50 transition-all duration-150 focus:outline-none shadow-sm">
          <span className="text-lg leading-none">{currentLang?.flag}</span>
          <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={6} className="w-40 p-1 rounded-xl shadow-lg border border-gray-100 bg-white">
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
              {active && <Check className="h-3.5 w-3.5 text-indigo-500" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
