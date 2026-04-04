import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { ArrowRight, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
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

          {/* ── Left: brand + CTA ── */}
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

            {/* Mini trial CTA */}
            <button
              onClick={() => go("/trial")}
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-200 text-sm mb-8"
            >
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[9px] text-indigo-200 uppercase tracking-widest">
                  {sq(lang, "Pa kartë krediti", "No credit card")}
                </span>
                <span className="text-xs">{sq(lang, "Fillo Provën — Falas", "Start Free Trial")}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* App store badges */}
            <div className="mb-5">
              <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-2.5">
                {sq(lang, "Shkarkoni Aplikacionin", "Get the App")}
              </p>
              <div className="flex flex-col gap-2">
                <AppStoreIcon />
                <GooglePlayIcon />
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter,   href: "https://twitter.com/clientlly",   label: "Twitter" },
                { icon: Linkedin,  href: "https://linkedin.com/company/clientlly", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/clientlly", label: "Instagram" },
                { icon: Youtube,   href: "https://youtube.com/@clientlly",  label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all duration-200">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
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
