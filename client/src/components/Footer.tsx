import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { AppStoreIcon, GooglePlayIcon } from "@/components/ui/animated-icons";

function sq(lang: string, alb: string, eng: string): string {
  return lang === "sq" ? alb : eng;
}

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();

  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };

  const cols = [
    {
      heading: sq(lang, "Produkti", "Product"),
      links: [
        { label: sq(lang, "Veçoritë",    "Features"),      href: "/features" },
        { label: sq(lang, "Çmimet",       "Pricing"),       href: "/subscribe" },
        { label: sq(lang, "Integrimi",    "Integrations"),  href: "/integrations" },
        { label: sq(lang, "Bashkëpunim", "Collaboration"), href: "/collaboration" },
        { label: "API",                                      href: "/api" },
      ],
    },
    {
      heading: sq(lang, "Kompania", "Company"),
      links: [
        { label: sq(lang, "Rreth Nesh", "About Us"),     href: "/about" },
        { label: sq(lang, "Karriera",   "Careers"),      href: "/careers" },
        { label: sq(lang, "Kontakti",   "Contact"),      href: "/contact" },
        { label: sq(lang, "Studimet",   "Case Studies"), href: "/case-studies" },
      ],
    },
    {
      heading: sq(lang, "Ligjore", "Legal"),
      links: [
        { label: sq(lang, "Privatësia",           "Privacy Policy"),   href: "/privacy-policy" },
        { label: sq(lang, "Kushtet e Shërbimit",  "Terms of Service"), href: "/terms-of-service" },
        { label: sq(lang, "Mbrojtja e të Dhënave","Data Protection"),  href: "/data-protection" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950">
      {/* ── Main body ── */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* ── Left: brand + apps + socials ── */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-white">Clientlly</span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-[220px]">
              {sq(lang,
                "Software i menaxhimit të biznesit për NVM-të. 16 module, një çmim.",
                "Business management software for SMEs. 16 modules, one price."
              )}
            </p>

            {/* App store badges — side by side */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-3">
                {sq(lang, "Shkarkoni Aplikacionin", "Get the App")}
              </p>
              <div className="flex flex-row gap-2">
                <AppStoreIcon compact />
                <GooglePlayIcon compact />
              </div>
            </div>

            {/* Social icons — only Instagram & Facebook */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a href="https://facebook.com/clientlly" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-[#1877F2] text-gray-400 hover:text-white transition-all duration-200">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/clientlly" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-[#405DE6] hover:via-[#C13584] hover:to-[#FD1D1D] text-gray-400 hover:text-white transition-all duration-200">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Link columns ── */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150 text-left w-full block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Clientlly.{" "}
            {sq(lang, "Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {sq(lang, "Privatësia", "Privacy")}
            </Link>
            <Link href="/terms-of-service" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {sq(lang, "Kushtet", "Terms")}
            </Link>
            <Link href="/help-center" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {sq(lang, "Ndihmë", "Help")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
