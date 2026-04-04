import { Link } from "wouter";
import { useLanguage, t } from "@/lib/i18n";
import { C } from "@/lib/translations";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";

const AppleSVG = () => (
  <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GooglePlaySVG = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M3.609 1.814L13.792 12 3.61 22.186A1.5 1.5 0 013 21V3c0-.525.282-1.008.609-1.186z" fill="#EA4335"/>
    <path d="M13.792 12L3.61 1.814 17.03 9.287 13.792 12z" fill="#FBBC04"/>
    <path d="M13.792 12l3.238 2.713L3.61 22.186 13.792 12z" fill="#34A853"/>
    <path d="M17.03 9.287L13.792 12l3.238 2.713 2.45-1.432A1.5 1.5 0 0021 12a1.5 1.5 0 00-.52-1.28l-3.45-1.433z" fill="#4285F4"/>
  </svg>
);

const FacebookSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const go = (path: string) => { window.location.href = path; window.scrollTo({ top: 0 }); };

  const cols = [
    {
      heading: t(lang, C.footer_product),
      links: [
        { label: t(lang, C.nav_features),       href: "/features" },
        { label: t(lang, C.nav_pricing),         href: "/subscribe" },
        { label: t(lang, C.footer_integration),  href: "/integrations" },
        { label: t(lang, C.footer_collab),        href: "/collaboration" },
        { label: "API",                            href: "/api" },
      ],
    },
    {
      heading: t(lang, C.footer_company),
      links: [
        { label: t(lang, C.footer_about),    href: "/about" },
        { label: t(lang, C.footer_careers),  href: "/careers" },
        { label: t(lang, C.footer_contact),  href: "/contact" },
        { label: t(lang, C.footer_cases),    href: "/case-studies" },
      ],
    },
    {
      heading: t(lang, C.footer_legal),
      links: [
        { label: t(lang, C.footer_privacy), href: "/privacy-policy" },
        { label: t(lang, C.footer_terms),   href: "/terms-of-service" },
        { label: t(lang, C.footer_data),    href: "/data-protection" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950">

      {/* ── Main grid: brand + nav columns ── */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-white">Clientlly</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[210px]">
              {t(lang, C.footer_tagline)}
            </p>
          </div>

          {/* Nav columns */}
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
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150 text-left"
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

      {/* ── App badges + socials row ── */}
      <div className="max-w-5xl mx-auto px-6 py-5 border-t border-gray-800/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* App store badges side by side */}
          <div className="flex items-center gap-2.5">
            <a href="/mobile-app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-200 group">
              <AppleSVG />
              <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest leading-none">Download on the</div>
                <div className="text-[13px] font-semibold text-white leading-snug">App Store</div>
              </div>
            </a>
            <a href="/mobile-app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 transition-all duration-200 group">
              <GooglePlaySVG />
              <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest leading-none">Get it on</div>
                <div className="text-[13px] font-semibold text-white leading-snug">Google Play</div>
              </div>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a href="https://facebook.com/clientlly" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-900 hover:bg-[#1877F2] border border-gray-800 hover:border-[#1877F2] text-gray-400 hover:text-white transition-all duration-200">
              <FacebookSVG />
            </a>
            <a href="https://instagram.com/clientlly" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500 text-gray-400 hover:text-white transition-all duration-200"
              onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #833AB4, #C13584, #FD1D1D)")}
              onMouseLeave={e => (e.currentTarget.style.background = "")}>
              <InstagramSVG />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Clientlly. {t(lang, C.footer_rights)}
            {" — "}{t(lang, C.footer_kosova)}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {t(lang, C.footer_privacy)}
            </Link>
            <Link href="/terms-of-service" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {t(lang, C.footer_terms)}
            </Link>
            <Link href="/help-center" onClick={() => window.scrollTo({ top: 0 })} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              {t(lang, { sq: "Ndihmë", en: "Help", es: "Ayuda", de: "Hilfe", mk: "Помош" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
