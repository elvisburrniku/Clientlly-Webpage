import { useState, useEffect } from 'react';
import { useLanguage } from "@/lib/i18n";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowRight, 
  Upload, 
  Database, 
  Users, 
  Check, 
  Sparkles, 
  Building2, 
  Mail, 
  Phone, 
  Calendar,
  Menu,
  X,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useToast } from '@/hooks/use-toast';


function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

const MigrationRequestPage = () => {
  const { currentLanguage: lang } = useLanguage();
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contactType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    currentPlatform: '',
    dataSize: '',
    urgency: '',
    specificRequirements: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const getSuccessMessage = () => {
        switch (formData.contactType) {
          case 'Request Full Migration':
            return {
              title: sq(lang, "Kërkesa për Migrim u Dërgua!", "Migration Request Submitted!", "¡Solicitud de Migración Enviada!", "Migrationsanfrage Eingereicht!", "Барањето за Миграција е Поднесено!") as string,
              description: sq(lang, "Ekipi ynë i migrimit do t'ju kontaktojë brenda 24 orëve për të diskutuar migrimin tuaj falas.", "Our migration team will contact you within 24 hours to discuss your free migration.", "Nuestro equipo de migración le contactará en 24 horas para discutir su migración gratuita.", "Unser Migrationsteam wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre kostenlose Migration zu besprechen.", "Нашиот тим за миграција ќе ве контактира во рок од 24 часа за да ја дискутира вашата бесплатна миграција.") as string
            };
          case 'Consultation First':
            return {
              title: sq(lang, "Kërkesa për Konsultim u Dërgua!", "Consultation Request Submitted!", "¡Solicitud de Consulta Enviada!", "Beratungsanfrage Eingereicht!", "Барањето за Консултација е Поднесено!") as string,
              description: sq(lang, "Ekipi ynë do t'ju kontaktojë brenda 24 orëve për të planifikuar telefonatën tuaj të konsultimit.", "Our team will contact you within 24 hours to schedule your consultation call.", "Nuestro equipo le contactará en 24 horas para programar su llamada de consulta.", "Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihr Beratungsgespräch zu vereinbaren.", "Нашиот тим ќе ве контактира во рок од 24 часа за да го закаже вашиот консултативен повик.") as string
            };
          case 'Technical Questions Only':
            return {
              title: sq(lang, "Pyetjet u Dërguan!", "Questions Submitted!", "¡Preguntas Enviadas!", "Fragen Eingereicht!", "Прашањата се Поднесени!") as string,
              description: sq(lang, "Ekipi ynë teknik do t'ju kontaktojë brenda 24 orëve për t'iu përgjigjur pyetjeve tuaja.", "Our technical team will contact you within 24 hours to answer your questions.", "Nuestro equipo técnico le contactará en 24 horas para responder sus preguntas.", "Unser technisches Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre Fragen zu beantworten.", "Нашиот технички тим ќе ве контактира во рок од 24 часа за да одговори на вашите прашања.") as string
            };
          default:
            return {
              title: sq(lang, "Kërkesa u Dërgua!", "Request Submitted!", "¡Solicitud Enviada!", "Anfrage Eingereicht!", "Барањето е Поднесено!") as string,
              description: sq(lang, "Ekipi ynë do t'ju kontaktojë brenda 24 orëve.", "Our team will contact you within 24 hours.", "Nuestro equipo le contactará en 24 horas.", "Unser Team wird Sie innerhalb von 24 Stunden kontaktieren.", "Нашиот тим ќе ве контактира во рок од 24 часа.") as string
            };
        }
      };

      const successMessage = getSuccessMessage();
      toast({
        title: successMessage.title,
        description: successMessage.description,
      });

      // Reset form
      setFormData({
        contactType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        currentPlatform: '',
        dataSize: '',
        urgency: '',
        specificRequirements: '',
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: sq(lang, "Gabim", "Error", "Error", "Fehler", "Грешка") as string,
        description: sq(lang, "Pati një gabim gjatë dërgimit të kërkesës suaj. Ju lutemi provoni përsëri.", "There was an error submitting your request. Please try again.", "Hubo un error al enviar su solicitud. Por favor, inténtelo de nuevo.", "Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", "Имаше грешка при поднесувањето на вашето барање. Ве молиме обидете се повторно.") as string,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactTypes = [
    'Request Full Migration', 
    'Consultation First', 
    'Technical Questions Only'
  ];

  const contactTypeLabels: Record<string, string | JSX.Element> = {
    'Request Full Migration': sq(lang, "Kërkoni Migrim të Plotë", "Request Full Migration", "Solicitar Migración Completa", "Vollständige Migration Anfordern", "Побарајте Целосна Миграција"),
    'Consultation First': sq(lang, "Konsultim Fillimisht", "Consultation First", "Consulta Primero", "Zuerst Beratung", "Прво Консултација"),
    'Technical Questions Only': sq(lang, "Vetëm Pyetje Teknike", "Technical Questions Only", "Solo Preguntas Técnicas", "Nur Technische Fragen", "Само Технички Прашања"),
  };

  const currentPlatforms = [
    'QuickBooks Desktop',
    'QuickBooks Online',
    'Xero',
    'Excel/CSV Files',
    'Sage 50',
    'FreshBooks',
    'Wave Accounting',
    'Zoho Books',
    'Peachtree',
    'Simply Accounting',
    'InfoSoft (Kosovo)',
    'FlexAccounts (North Macedonia)',
    'AlbaBooks (Kosovo)',
    'Other'
  ];

  const platformLabels: Record<string, string | JSX.Element> = {
    'Excel/CSV Files': sq(lang, "Skedarë Excel/CSV", "Excel/CSV Files", "Archivos Excel/CSV", "Excel/CSV-Dateien", "Excel/CSV Датотеки"),
    'Other': sq(lang, "Tjetër", "Other", "Otro", "Andere", "Друго"),
  };

  const dataSizes = [
    'Small (Under 1,000 transactions)',
    'Medium (1,000 - 10,000 transactions)',
    'Large (10,000 - 50,000 transactions)',
    'Enterprise (50,000+ transactions)'
  ];

  const dataSizeLabels: Record<string, string | JSX.Element> = {
    'Small (Under 1,000 transactions)': sq(lang, "E vogël (Nën 1,000 transaksione)", "Small (Under 1,000 transactions)", "Pequeño (Menos de 1,000 transacciones)", "Klein (Unter 1.000 Transaktionen)", "Мало (Под 1.000 трансакции)"),
    'Medium (1,000 - 10,000 transactions)': sq(lang, "Mesatare (1,000 - 10,000 transaksione)", "Medium (1,000 - 10,000 transactions)", "Mediano (1,000 - 10,000 transacciones)", "Mittel (1.000 - 10.000 Transaktionen)", "Средно (1.000 - 10.000 трансакции)"),
    'Large (10,000 - 50,000 transactions)': sq(lang, "E madhe (10,000 - 50,000 transaksione)", "Large (10,000 - 50,000 transactions)", "Grande (10,000 - 50,000 transacciones)", "Groß (10.000 - 50.000 Transaktionen)", "Големо (10.000 - 50.000 трансакции)"),
    'Enterprise (50,000+ transactions)': sq(lang, "Ndërmarrje (50,000+ transaksione)", "Enterprise (50,000+ transactions)", "Empresa (50,000+ transacciones)", "Unternehmen (50.000+ Transaktionen)", "Претпријатие (50.000+ трансакции)"),
  };

  const urgencyOptions = [
    'ASAP (Within 1 week)',
    'Soon (Within 2-4 weeks)',
    'Flexible (Within 1-2 months)',
    'Planning ahead (2+ months)'
  ];

  const urgencyLabels: Record<string, string | JSX.Element> = {
    'ASAP (Within 1 week)': sq(lang, "Sa më shpejt (Brenda 1 jave)", "ASAP (Within 1 week)", "Lo antes posible (Dentro de 1 semana)", "So schnell wie möglich (Innerhalb 1 Woche)", "Итно (Во рок од 1 недела)"),
    'Soon (Within 2-4 weeks)': sq(lang, "Së shpejti (Brenda 2-4 javëve)", "Soon (Within 2-4 weeks)", "Pronto (Dentro de 2-4 semanas)", "Bald (Innerhalb von 2-4 Wochen)", "Наскоро (Во рок од 2-4 недели)"),
    'Flexible (Within 1-2 months)': sq(lang, "Fleksibël (Brenda 1-2 muajve)", "Flexible (Within 1-2 months)", "Flexible (Dentro de 1-2 meses)", "Flexibel (Innerhalb von 1-2 Monaten)", "Флексибилно (Во рок од 1-2 месеци)"),
    'Planning ahead (2+ months)': sq(lang, "Planifikim paraprak (2+ muaj)", "Planning ahead (2+ months)", "Planificación anticipada (2+ meses)", "Vorausplanung (2+ Monate)", "Планирање однапред (2+ месеци)"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 dark:via-gray-900/30 dark:to-gray-900/50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 transition-all duration-300">
              <img 
                src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                alt="BusinessFlow Pro" 
                className="w-10 h-8 object-contain"
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white">BusinessFlow Pro</span>
            </Link>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button 
                variant="ghost"
                onClick={() => go("/subscribe")}
                className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold"
              >
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => go("/contact")} 
                className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-bold"
              >
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Button>
            </div>

            {/* Right Section - Login, Buy Now, Start Your Trial, Language */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/login"}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најави Се")}
              </Button>
              <Button 
                variant="outline"
                onClick={() => go("/subscribe")}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 font-medium"
              >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
              <Button 
                onClick={() => go("/trial")}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
              <div className="flex items-center">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link href="/about" className="block text-lg text-gray-600 hover:text-gray-800 font-bold">{sq(lang, "Rreth Nesh", "About Us", "Sobre Nosotros", "Über Uns", "За Нас")}</Link>
              <Link href="/#features" className="block text-lg text-gray-600 hover:text-gray-800 font-bold">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Карактеристики")}</Link>
              <Button 
                variant="ghost"
                onClick={() => {
                  go("/subscribe");
                  setShowMobileMenu(false);
                }}
                className="w-full text-left justify-start text-lg text-gray-600 hover:text-gray-800 font-bold"
              >
                {sq(lang, "Çmimet", "Pricing", "Precios", "Preise", "Цени")}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  go("/contact");
                  setShowMobileMenu(false);
                }} 
                className="w-full text-left justify-start text-lg text-gray-600 hover:text-gray-800 font-bold"
              >
                {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              </Button>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    window.location.href = "/api/login";
                    setShowMobileMenu(false);
                  }} 
                  className="w-full text-left justify-start text-gray-600 hover:text-gray-800"
                >
                  {sq(lang, "Hyr", "Login", "Iniciar Sesión", "Anmelden", "Најави Се")}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    go("/subscribe");
                    setShowMobileMenu(false);
                  }}
                  className="w-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium"
                >{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</Button>
                <Button 
                  onClick={() => {
                    go("/trial");
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium"
                >{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Yellow Background */}
      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            {/* Yellow Background Hero Section */}
            <div className="relative w-screen -ml-[50vw] left-1/2 px-4 py-16 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 overflow-hidden mb-12">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-8 left-16 w-4 h-4 animate-ping delay-0">
                  <Sparkles className="w-4 h-4 text-amber-600/30" />
                </div>
                <div className="absolute bottom-8 right-20 w-6 h-6 animate-ping delay-1000">
                  <Sparkles className="w-6 h-6 text-orange-600/40" />
                </div>
                <div className="absolute top-12 right-32 w-3 h-3 animate-ping delay-2000">
                  <Sparkles className="w-3 h-3 text-yellow-600/30" />
                </div>
                <div className="absolute bottom-20 left-32 w-5 h-5 animate-ping delay-3000">
                  <Sparkles className="w-5 h-5 text-amber-500/40" />
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <RefreshCw className="h-10 w-10 text-white" />
                </div>
                
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight animate-professional-fade">
                  {sq(lang, "Filloni", "Start Your", "Inicie Su", "Starten Sie Ihre", "Започнете Ја Вашата")}{' '}
                  <span className="animate-subtle-gradient">
                    {sq(lang, "Migrimin Falas", "Free Migration", "Migración Gratuita", "Kostenlose Migration", "Бесплатна Миграција")}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                  {sq(lang, "Kaloni në BusinessFlow Pro me", "Switch to BusinessFlow Pro with", "Cambie a BusinessFlow Pro con", "Wechseln Sie zu BusinessFlow Pro mit", "Префрлете се на BusinessFlow Pro со")} <span className="font-bold text-gray-900 dark:text-white">{sq(lang, "zero probleme", "zero hassle", "cero complicaciones", "null Aufwand", "нула проблеми")}</span>.
                  <br className="hidden lg:block" />
                  {sq(lang, "Ekspertët tanë menaxhojnë gjithçka - transferimin e të dhënave, vendosjen dhe trajnimin. Plotësisht falas.", "Our experts handle everything - data transfer, setup, and training. Completely free.", "Nuestros expertos se encargan de todo: transferencia de datos, configuración y capacitación. Completamente gratis.", "Unsere Experten kümmern sich um alles – Datentransfer, Einrichtung und Schulung. Komplett kostenlos.", "Нашите експерти се грижат за сè – пренос на податоци, поставување и обука. Целосно бесплатно.")}
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">{sq(lang, "100% Falas", "100% Free", "100% Gratis", "100% Kostenlos", "100% Бесплатно")}</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">{sq(lang, "Pa Kosto të Fshehura", "No Hidden Costs", "Sin Costos Ocultos", "Keine Versteckten Kosten", "Без Скриени Трошоци")}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">{sq(lang, "24-48 Orë", "24-48 Hours", "24-48 Horas", "24-48 Stunden", "24-48 Часа")}</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">{sq(lang, "Vendosje e Shpejtë", "Quick Setup", "Configuración Rápida", "Schnelle Einrichtung", "Брзо Поставување")}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-6 py-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">{sq(lang, "Mbështetje Eksperte", "Expert Support", "Soporte Experto", "Experten-Support", "Експертска Поддршка")}</div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">{sq(lang, "Ekip i Dedikuar", "Dedicated Team", "Equipo Dedicado", "Engagiertes Team", "Посветен Тим")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Request Form */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <Card className="relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl">
          {/* Form Header with Yellow Background */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-600 dark:via-yellow-600 dark:to-orange-600 p-8 rounded-t-3xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-2 left-4 w-3 h-3 animate-ping delay-0">
                <Sparkles className="w-3 h-3 text-amber-600/30" />
              </div>
              <div className="absolute bottom-2 right-6 w-4 h-4 animate-ping delay-1000">
                <Sparkles className="w-4 h-4 text-orange-600/40" />
              </div>
              <div className="absolute top-4 right-8 w-2 h-2 animate-ping delay-2000">
                <Sparkles className="w-2 h-2 text-yellow-600/30" />
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                {formData.contactType === 'Request Full Migration' 
                  ? sq(lang, "Kërkoni Migrimin Tuaj Falas", "Request Your Free Migration", "Solicite Su Migración Gratuita", "Fordern Sie Ihre Kostenlose Migration An", "Побарајте Ја Вашата Бесплатна Миграција")
                  : formData.contactType === 'Consultation First'
                  ? sq(lang, "Planifikoni Konsultimin Tuaj", "Schedule Your Consultation", "Programe Su Consulta", "Planen Sie Ihre Beratung", "Закажете Ја Вашата Консултација")
                  : formData.contactType === 'Technical Questions Only'
                  ? sq(lang, "Dërgoni Pyetjet Tuaja", "Submit Your Questions", "Envíe Sus Preguntas", "Stellen Sie Ihre Fragen", "Поднесете Ги Вашите Прашања")
                  : sq(lang, "Kontaktoni Ekipin e Migrimit", "Contact Our Migration Team", "Contacte a Nuestro Equipo de Migración", "Kontaktieren Sie Unser Migrationsteam", "Контактирајте Го Нашиот Тим за Миграција")
                }
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {formData.contactType === 'Request Full Migration' 
                  ? sq(lang, "Plotësoni këtë formular dhe ekspertët tanë të migrimit do t'ju kontaktojnë brenda 24 orëve", "Fill out this form and our migration experts will contact you within 24 hours", "Complete este formulario y nuestros expertos en migración le contactarán en 24 horas", "Füllen Sie dieses Formular aus und unsere Migrationsexperten werden Sie innerhalb von 24 Stunden kontaktieren", "Пополнете го овој формулар и нашите експерти за миграција ќе ве контактираат во рок од 24 часа")
                  : formData.contactType === 'Consultation First'
                  ? sq(lang, "Plotësoni këtë formular dhe ekipi ynë do të planifikojë një telefonatë konsultimi brenda 24 orëve", "Fill out this form and our team will schedule a consultation call within 24 hours", "Complete este formulario y nuestro equipo programará una llamada de consulta en 24 horas", "Füllen Sie dieses Formular aus und unser Team wird innerhalb von 24 Stunden ein Beratungsgespräch vereinbaren", "Пополнете го овој формулар и нашиот тим ќе закаже консултативен повик во рок од 24 часа")
                  : formData.contactType === 'Technical Questions Only'
                  ? sq(lang, "Plotësoni këtë formular dhe ekipi ynë teknik do t'u përgjigjet pyetjeve tuaja brenda 24 orëve", "Fill out this form and our technical team will answer your questions within 24 hours", "Complete este formulario y nuestro equipo técnico responderá sus preguntas en 24 horas", "Füllen Sie dieses Formular aus und unser technisches Team wird Ihre Fragen innerhalb von 24 Stunden beantworten", "Пополнете го овој формулар и нашиот технички тим ќе одговори на вашите прашања во рок од 24 часа")
                  : sq(lang, "Plotësoni këtë formular dhe ekipi ynë do t'ju kontaktojë brenda 24 orëve", "Fill out this form and our team will contact you within 24 hours", "Complete este formulario y nuestro equipo le contactará en 24 horas", "Füllen Sie dieses Formular aus und unser Team wird Sie innerhalb von 24 Stunden kontaktieren", "Пополнете го овој формулар и нашиот тим ќе ве контактира во рок од 24 часа")
                }
              </p>
            </div>
          </div>

          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type */}
              <div className="space-y-3">
                <Label htmlFor="contactType" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-indigo-500" />
                  {sq(lang, "Si mund t'ju ndihmojmë?", "What can we help you with?", "En qué podemos ayudarle?", "Wie können wir Ihnen helfen?", "Како можеме да ви помогнеме?")}
                </Label>
                <Select value={formData.contactType} onValueChange={(value) => handleInputChange('contactType', value)}>
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400">
                    <SelectValue placeholder={sq(lang, "Zgjidhni llojin e ndihmës që ju nevojitet", "Choose the type of assistance you need", "Elija el tipo de asistencia que necesita", "Wählen Sie die Art der Unterstützung, die Sie benötigen", "Изберете го типот на помош што ви е потребна") as string} />
                  </SelectTrigger>
                  <SelectContent>
                    {contactTypes.map((type) => (
                      <SelectItem key={type} value={type}>{contactTypeLabels[type] || type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-500" />
                    {sq(lang, "Emri", "First Name", "Nombre", "Vorname", "Име")}
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder={sq(lang, "Filan", "John", "Juan", "Johann", "Иван") as string}
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    {sq(lang, "Mbiemri", "Last Name", "Apellido", "Nachname", "Презиме")}
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder={sq(lang, "Fisteku", "Doe", "García", "Müller", "Петров") as string}
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-500" />
                    {sq(lang, "Adresa Email", "Email Address", "Correo Electrónico", "E-Mail-Adresse", "Е-пошта")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={sq(lang, "filan@kompania.com", "john@company.com", "juan@empresa.com", "johann@firma.com", "иван@компанија.com") as string}
                    required
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-orange-500" />
                    {sq(lang, "Numri i Telefonit", "Phone Number", "Número de Teléfono", "Telefonnummer", "Телефонски Број")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="companyName" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-green-500" />
                  {sq(lang, "Emri i Kompanisë", "Company Name", "Nombre de la Empresa", "Firmenname", "Име на Компанијата")}
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder={sq(lang, "Kompania Juaj SH.P.K.", "Your Company Inc.", "Su Empresa S.A.", "Ihre Firma GmbH", "Вашата Компанија ДОО") as string}
                  required
                  className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-400"
                />
              </div>

              {/* Migration Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="currentPlatform" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Database className="h-5 w-5 mr-2 text-blue-500" />
                    {sq(lang, "Platforma Aktuale", "Current Platform", "Plataforma Actual", "Aktuelle Plattform", "Тековна Платформа")}
                  </Label>
                  <Select value={formData.currentPlatform} onValueChange={(value) => handleInputChange('currentPlatform', value)}>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400">
                      <SelectValue placeholder={sq(lang, "Zgjidhni platformën tuaj aktuale", "Select your current platform", "Seleccione su plataforma actual", "Wählen Sie Ihre aktuelle Plattform", "Изберете ја вашата тековна платформа") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      {currentPlatforms.map((platform) => (
                        <SelectItem key={platform} value={platform}>{platformLabels[platform] || platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="dataSize" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-purple-500" />
                    {sq(lang, "Madhësia e të Dhënave", "Data Size", "Tamaño de Datos", "Datengröße", "Големина на Податоци")}
                  </Label>
                  <Select value={formData.dataSize} onValueChange={(value) => handleInputChange('dataSize', value)}>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400">
                      <SelectValue placeholder={sq(lang, "Vlerësoni madhësinë e të dhënave tuaja", "Estimate your data size", "Estime el tamaño de sus datos", "Schätzen Sie Ihre Datengröße", "Проценете ја големината на вашите податоци") as string} />
                    </SelectTrigger>
                    <SelectContent>
                      {dataSizes.map((size) => (
                        <SelectItem key={size} value={size}>{dataSizeLabels[size] || size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="urgency" className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                  {sq(lang, "Afati i Migrimit", "Migration Timeline", "Plazo de Migración", "Migrationszeitplan", "Временска Рамка за Миграција")}
                </Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-orange-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400">
                    <SelectValue placeholder={sq(lang, "Kur ju nevojitet të përfundojë migrimi?", "When do you need the migration completed?", "Cuándo necesita que se complete la migración?", "Wann muss die Migration abgeschlossen sein?", "Кога треба да се заврши миграцијата?") as string} />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyOptions.map((option) => (
                      <SelectItem key={option} value={option}>{urgencyLabels[option] || option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="specificRequirements" className="text-lg font-bold text-gray-900 dark:text-white">
                  {sq(lang, "Kërkesa Specifike (Opsionale)", "Specific Requirements (Optional)", "Requisitos Específicos (Opcional)", "Spezifische Anforderungen (Optional)", "Специфични Барања (Опционално)")}
                </Label>
                <Textarea
                  id="specificRequirements"
                  value={formData.specificRequirements}
                  onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                  placeholder={
                    formData.contactType === 'Request Full Migration' 
                      ? sq(lang, "Na tregoni për çdo kërkesë specifike, fusha të personalizuara, ose shqetësime që keni për migrimin...", "Tell us about any specific requirements, custom fields, or concerns you have about the migration...", "Cuéntenos sobre cualquier requisito específico, campos personalizados o preocupaciones que tenga sobre la migración...", "Erzählen Sie uns von spezifischen Anforderungen, benutzerdefinierten Feldern oder Bedenken bezüglich der Migration...", "Кажете ни за сите специфични барања, прилагодени полиња или загриженост за миграцијата...") as string
                      : formData.contactType === 'Consultation First'
                      ? sq(lang, "Na tregoni për situatën tuaj aktuale dhe çfarë dëshironi të diskutoni në konsultim...", "Tell us about your current situation and what you'd like to discuss in the consultation...", "Cuéntenos sobre su situación actual y qué le gustaría discutir en la consulta...", "Erzählen Sie uns von Ihrer aktuellen Situation und was Sie in der Beratung besprechen möchten...", "Кажете ни за вашата тековна ситуација и што сакате да дискутирате на консултацијата...") as string
                      : formData.contactType === 'Technical Questions Only'
                      ? sq(lang, "Çfarë pyetjesh teknike specifike keni për platformën tonë ose procesin e migrimit?", "What specific technical questions do you have about our platform or migration process?", "Qué preguntas técnicas específicas tiene sobre nuestra plataforma o proceso de migración?", "Welche spezifischen technischen Fragen haben Sie zu unserer Plattform oder dem Migrationsprozess?", "Какви специфични технички прашања имате за нашата платформа или процесот на миграција?") as string
                      : sq(lang, "Na tregoni si mund t'ju ndihmojmë...", "Tell us how we can help you...", "Cuéntenos cómo podemos ayudarle...", "Erzählen Sie uns, wie wir Ihnen helfen können...", "Кажете ни како можеме да ви помогнеме...") as string
                  }
                  className="min-h-32 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  {formData.contactType === 'Request Full Migration' 
                    ? sq(lang, "Pranoj të kontaktohem nga ekipi i migrimit të BusinessFlow Pro në lidhje me kërkesën time për migrim falas", "I agree to be contacted by BusinessFlow Pro's migration team regarding my free migration request", "Acepto ser contactado por el equipo de migración de BusinessFlow Pro con respecto a mi solicitud de migración gratuita", "Ich stimme zu, vom Migrationsteam von BusinessFlow Pro bezüglich meiner kostenlosen Migrationsanfrage kontaktiert zu werden", "Се согласувам да бидам контактиран од тимот за миграција на BusinessFlow Pro во врска со мојата бесплатна барање за миграција")
                    : formData.contactType === 'Consultation First'
                    ? sq(lang, "Pranoj të kontaktohem nga ekipi i BusinessFlow Pro për një telefonatë konsultimi", "I agree to be contacted by BusinessFlow Pro's team for a consultation call", "Acepto ser contactado por el equipo de BusinessFlow Pro para una llamada de consulta", "Ich stimme zu, vom Team von BusinessFlow Pro für ein Beratungsgespräch kontaktiert zu werden", "Се согласувам да бидам контактиран од тимот на BusinessFlow Pro за консултативен повик")
                    : sq(lang, "Pranoj të kontaktohem nga ekipi teknik i BusinessFlow Pro në lidhje me pyetjet e mia", "I agree to be contacted by BusinessFlow Pro's technical team regarding my questions", "Acepto ser contactado por el equipo técnico de BusinessFlow Pro con respecto a mis preguntas", "Ich stimme zu, vom technischen Team von BusinessFlow Pro bezüglich meiner Fragen kontaktiert zu werden", "Се согласувам да бидам контактиран од техничкиот тим на BusinessFlow Pro во врска со моите прашања")
                  }
                </Label>
              </div>

              <Button 
                type="submit" 
                disabled={!formData.agreeToTerms || !formData.contactType || isSubmitting}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>{sq(lang, "Duke dërguar kërkesën...", "Submitting Request...", "Enviando Solicitud...", "Anfrage wird gesendet...", "Испраќање на барањето...")}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Upload className="w-6 h-6" />
                    <span>
                      {formData.contactType === 'Request Full Migration' 
                        ? sq(lang, "Kërkoni Migrim Falas", "Request Free Migration", "Solicitar Migración Gratuita", "Kostenlose Migration Anfordern", "Побарајте Бесплатна Миграција")
                        : formData.contactType === 'Consultation First'
                        ? sq(lang, "Planifikoni Konsultimin", "Schedule Consultation", "Programar Consulta", "Beratung Vereinbaren", "Закажете Консултација")
                        : formData.contactType === 'Technical Questions Only'
                        ? sq(lang, "Dërgoni Pyetjet", "Submit Questions", "Enviar Preguntas", "Fragen Einreichen", "Поднесете Прашања")
                        : sq(lang, "Dërgoni Kërkesën", "Submit Request", "Enviar Solicitud", "Anfrage Senden", "Поднесете Барање")
                      }
                    </span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MigrationRequestPage;