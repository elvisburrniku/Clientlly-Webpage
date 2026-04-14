import { ArrowLeft, CheckCircle, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LanguageSelector } from "@/components/LanguageSelector";
import Footer from "@/components/Footer";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import { useTranslation } from "@/hooks/useTranslation";

type T5 = { sq: string; en: string; es?: string; de?: string; mk?: string; fr?: string; pt?: string; it?: string };

export interface FeatureDetailData {
  category: T5;
  categoryColor: string;
  title: T5;
  tagline: T5;
  stat: T5;
  description: T5;
  benefits: Array<T5>;
  relatedHref?: string;
  workflow?: Array<{ step: string } & T5>;
  capabilities?: Array<{ icon: string; title: T5; desc: T5 }>;
}

function pick(lang: string, t: T5): string {
  switch (lang) {
    case 'sq': return t.sq;
    case 'es': return t.es ?? t.en;
    case 'de': return t.de ?? t.en;
    case 'mk': return t.mk ?? t.en;
    case 'fr': return t.fr ?? t.en;
    case 'pt': return t.pt ?? t.en;
    case 'it': return t.it ?? t.en;
    default: return t.en;
  }
}

function sq(lang: string, alb: string, eng: string, es?: string, de?: string, mk?: string, fr?: string, pt?: string, it?: string): string {
  switch (lang) {
    case 'sq': return alb;
    case 'es': return es ?? eng;
    case 'de': return de ?? eng;
    case 'mk': return mk ?? eng;
    case 'fr': return fr ?? eng;
    case 'pt': return pt ?? eng;
    case 'it': return it ?? eng;
    default:   return eng;
  }
}

export default function FeatureDetail({ data }: { data: FeatureDetailData }) {
  const { currentLanguage: lang } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [, setLocation] = useLocation();

  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
              <Link href="/features" className="text-sm font-medium text-indigo-600 font-semibold">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</Link>
            </div>
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {sq(lang, "Të gjitha veçoritë", "All features", "Todas las funciones", "Alle Funktionen", "Сите функции", "Toutes les fonctionnalités", "Todas as funcionalidades", "Tutte le funzionalità")}
              </Link>
              <Link href="/subscribe" className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}
              </Link>
              <LanguageSelector />
            </div>
            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <LanguageSelector />
              <button className="p-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна", "Accueil", "Início", "Home")}</Link>
            <Link href="/features" className="block text-sm font-medium text-indigo-600 py-2">{sq(lang, "Veçoritë", "Features", "Funciones", "Funktionen", "Функции", "Fonctionnalités", "Funcionalidades", "Funzionalità")}</Link>
            <Link href="/subscribe" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени", "Tarifs", "Preços", "Prezzi")}</Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт", "Contact", "Contacto", "Contatti")}</Link>
            <Link href="/subscribe" className="block w-full text-center text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg mt-2">
              {sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега", "Acheter maintenant", "Comprar agora", "Acquista ora")}
            </Link>
          </div>
        )}
      </nav>

      <section className="pt-16 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-16 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-16 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-8 right-14 w-3 h-3 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 left-28 w-2 h-2 bg-white rounded-full animate-bounce opacity-40" style={{animationDelay:"0.4s"}}></div>
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-white rounded-full animate-bounce opacity-50" style={{animationDelay:"0.7s"}}></div>

        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <div className="mb-6">
            <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 hover:text-black transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              {sq(lang, "Kthehu te veçoritë", "Back to features", "Volver a funciones", "Zurück zu Funktionen", "Назад кон функции")}
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-4 py-1.5 mb-5">
            <span className={`w-2 h-2 rounded-full ${data.categoryColor}`}></span>
            <span className="text-sm font-semibold text-black">{pick(lang, data.category)}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black mb-3 leading-tight tracking-tight">
            {pick(lang, data.title)}
          </h1>
          <p className="text-xl text-black/75 mb-8">
            {pick(lang, data.tagline)}
          </p>
          <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5">
            <TrendingUp className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-bold">{pick(lang, data.stat)}</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                {sq(lang, "Si funksionon?", "How does it work?", "Cómo funciona?", "Wie funktioniert es?", "Како функционира?", "Comment ça marche?", "Como funciona?", "Come funziona?")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {pick(lang, data.description)}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {sq(lang, "Çfarë përfshihet", "What's included", "Qué incluye", "Was ist enthalten", "Што е вклучено")}
              </h3>
              <ul className="space-y-3">
                {data.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{pick(lang, b)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    {sq(lang, "Provoni sot — falas", "Try today — free", "Pruebe hoy — gratis", "Heute testen — kostenlos", "Пробајте денес — бесплатно")}
                  </h3>
                  <p className="text-indigo-200 text-sm mb-5">
                    {sq(lang, "Të gjitha modulet të aktivizuara menjëherë. Pa kartë kredie.", "All modules activated instantly. No credit card.", "Todos los módulos activados al instante. Sin tarjeta de crédito.", "Alle Module sofort aktiviert. Keine Kreditkarte nötig.", "Сите модули активирани веднаш. Без кредитна картичка.")}
                  </p>
                  <button
                    onClick={() => { window.location.href = '/subscribe'; }}
                    className="w-full py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm"
                  >
                    {sq(lang, "Shiko Planet", "View Plans", "Ver Planes", "Pläne ansehen", "Погледни Планови", "Voir les plans", "Ver planos", "Vedi i piani")}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {data.workflow && data.workflow.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-center">
              {sq(lang, "Procesi hap pas hapi", "Step-by-step process", "Proceso paso a paso", "Schritt-für-Schritt-Prozess", "Процес чекор по чекор")}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {sq(lang, "Shikoni si funksionon nga fillimi deri në fund", "See how it works from start to finish", "Vea cómo funciona de principio a fin", "Sehen Sie, wie es von Anfang bis Ende funktioniert", "Видете како функционира од почеток до крај")}
            </p>
            <div className="relative">
              <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-px bg-indigo-200"></div>
              <div className="space-y-6">
                {data.workflow.map((w, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-lg font-extrabold shadow-lg relative z-10">
                      {w.step}
                    </div>
                    <div className="pt-3">
                      <p className="text-base text-gray-700 leading-relaxed font-medium">
                        {pick(lang, w)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.capabilities && data.capabilities.length > 0 && (
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-center">
              {sq(lang, "Aftësi kryesore", "Key capabilities", "Capacidades clave", "Kernfunktionen", "Клучни способности")}
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              {sq(lang, "Funksionet që e bëjnë këtë modul të domosdoshëm", "Features that make this module essential", "Las funciones que hacen este módulo esencial", "Funktionen, die dieses Modul unverzichtbar machen", "Функциите што го прават овој модул неопходен")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.capabilities.map((c, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-indigo-100 transition-all group">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {pick(lang, c.title)}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {pick(lang, c.desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute top-6 right-12 w-3 h-3 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-40" style={{animationDelay:"0.5s"}}></div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4 tracking-tight">
            {sq(lang, "Gati të filloni?", "Ready to get started?", "Listo para comenzar?", "Bereit loszulegen?", "Подготвени да започнете?", "Prêt à commencer?", "Pronto para começar?", "Pronto per iniziare?")}
          </h2>
          <p className="text-black/75 mb-8">
            {sq(lang, "Të 16 modulet të aktivizuara automatikisht me abonimin tuaj. Shtoni ekipin dhe nisni menjëherë.", "All 16 modules activated automatically with your subscription. Add your team and start right away.", "Los 16 módulos se activan automáticamente con su suscripción. Agregue su equipo y comience de inmediato.", "Alle 16 Module werden automatisch mit Ihrem Abonnement aktiviert. Fügen Sie Ihr Team hinzu und starten Sie sofort.", "Сите 16 модули се активираат автоматски со вашата претплата. Додајте го тимот и започнете веднаш.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { window.location.href = '/subscribe'; }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
            >
              {sq(lang, "Shiko Planet", "View Plans", "Ver Planes", "Pläne ansehen", "Погледни Планови", "Voir les plans", "Ver planos", "Vedi i piani")}
            </button>
            <Link href="/features" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/30 backdrop-blur-sm text-black font-semibold rounded-xl hover:bg-white/50 transition-all border border-black/10">
              {sq(lang, "Të gjitha veçoritë", "All features", "Todas las funciones", "Alle Funktionen", "Сите функции", "Toutes les fonctionnalités", "Todas as funcionalidades", "Tutte le funzionalità")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
