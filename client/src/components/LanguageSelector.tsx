import { useState } from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages, locationInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage);



  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="relative group flex items-center space-x-2 bg-white/90 hover:bg-white border-2 border-gray-200/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{currentLang?.flag}</span>
            <span className="hidden md:inline">{currentLang?.name}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {supportedLanguages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              changeLanguage(language.code);
              setIsOpen(false);
            }}
            className={`flex items-center space-x-3 cursor-pointer ${
              currentLanguage === language.code ? 'bg-primary/10 text-primary' : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
            {currentLanguage === language.code && (
              <span className="ml-auto text-xs text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
}