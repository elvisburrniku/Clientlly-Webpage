import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { SocialLinks } from "./ui/animated-icons";

function sq(lang: string, alb: string, eng: string): string {
  return lang === "sq" ? alb : eng;
}

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;

  const cols = [
    {
      heading: sq(lang, "Produkti", "Product"),
      links: [
        { label: sq(lang, "Veçoritë",    "Features"),       href: "/#features" },
        { label: sq(lang, "Çmimet",       "Pricing"),        href: "/subscribe" },
        { label: sq(lang, "Integrimi",    "Integrations"),   href: "/integrations" },
        { label: sq(lang, "Bashkëpunim", "Collaboration"),  href: "/collaboration" },
        { label: "API",                                       href: "/api" },
      ],
    },
    {
      heading: sq(lang, "Kompania", "Company"),
      links: [
        { label: sq(lang, "Rreth Nesh",  "About Us"),    href: "/about" },
        { label: sq(lang, "Karriera",    "Careers"),     href: "/careers" },
        { label: sq(lang, "Kontakti",    "Contact"),     href: "/contact" },
        { label: sq(lang, "Studimet",    "Case Studies"),href: "/case-studies" },
      ],
    },
    {
      heading: sq(lang, "Mbështetja", "Support"),
      links: [
        { label: sq(lang, "Qendra e Ndihmës", "Help Center"),        href: "/help-center" },
        { label: sq(lang, "Mbështetje 24/7",   "Expert Support"),     href: "/expert-support" },
        { label: sq(lang, "Udhëzimet",         "Best Practices"),     href: "/best-practices" },
        { label: sq(lang, "Tutorials",         "Tutorials"),          href: "/tutorials" },
      ],
    },
    {
      heading: sq(lang, "Ligjore & Siguria", "Legal & Trust"),
      links: [
        { label: sq(lang, "Mbrojtja e të Dhënave", "Data Protection"), href: "/data-protection" },
        { label: sq(lang, "Politika e Privatësisë", "Privacy Policy"),  href: "/privacy-policy" },
        { label: sq(lang, "Kushtet e Shërbimit",    "Terms of Service"),href: "/terms-of-service" },
        { label: sq(lang, "Siguri Bankare",          "Bank Security"),   href: "/bank-security" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Top row — logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-12">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-white">Clientlly</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              {sq(lang,
                "Software i menaxhimit të biznesit për ndërmarrjet e vogla dhe të mesme.",
                "Business management software for small and medium enterprises."
              )}
            </p>
            <div className="mt-4">
              <SocialLinks className="opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 sm:pl-8">
            {cols.map(col => (
              <div key={col.heading}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link.href}>
                      <button
                        onClick={() => { window.location.href = link.href; window.scrollTo({ top: 0 }); }}
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

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Clientlly. {sq(lang, "Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => window.location.href = "/privacy-policy"} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {sq(lang, "Privatësia", "Privacy")}
            </button>
            <button onClick={() => window.location.href = "/terms-of-service"} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {sq(lang, "Kushtet", "Terms")}
            </button>
            <button onClick={() => window.location.href = "/data-protection"} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {sq(lang, "Mbrojtja e të Dhënave", "Data Protection")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
