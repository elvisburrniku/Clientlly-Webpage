import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { ChevronDown, HelpCircle, CreditCard, Shield, Users, Zap, Globe, ArrowRight, Headphones } from "lucide-react";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
    switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
  }

interface FAQItem { q: string; a: string; }

const Accordion = ({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) => (
  <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors">
    <button onClick={toggle} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50/50 transition-colors">
      <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
      <ChevronDown className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && (
      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-50">
        {item.a}
      </div>
    )}
  </div>
);

export default function FAQ() {
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: sq(lang, "Të gjitha", "All", "Todos", "Alle", "Сите"), icon: HelpCircle },
    { id: "general", label: sq(lang, "Të përgjithshme", "General", "General", "Allgemein", "Општо"), icon: Globe },
    { id: "pricing", label: sq(lang, "Çmimet & Planet", "Pricing & Plans", "Precios y Planes", "Preise & Pläne", "Цени и Планови"), icon: CreditCard },
    { id: "features", label: sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции"), icon: Zap },
    { id: "security", label: sq(lang, "Siguria", "Security", "Seguridad", "Sicherheit", "Безбедност"), icon: Shield },
    { id: "support", label: sq(lang, "Mbështetja", "Support", "Soporte", "Unterstützung", "Поддршка"), icon: Headphones },
    { id: "account", label: sq(lang, "Llogaria", "Account", "Cuenta", "Konto", "Сметка"), icon: Users },
  ];

  const faqs: { category: string; items: FAQItem[] }[] = [
    {
      category: "general",
      items: [
        {
          q: sq(lang, "Çfarë është Clientlly?", "What is Clientlly?", "¿Qué es Clientlly?", "Was ist Clientlly?", "Што е Clientlly?") as string,
          a: sq(lang,
            "Clientlly është platformë e plotë për menaxhimin e biznesit me 16 module të integruara — faturim, shpenzime, inventar, burimet njerëzore, flotë makinash dhe shumë më tepër. E gjitha në një platformë të vetme, pa nevojë për aplikacione të ndryshme.",
            "Clientlly is a complete business management platform with 16 integrated modules — invoicing, expenses, inventory, HR, fleet management and much more. Everything in a single platform, no need for separate applications.",
            "Clientlly es una plataforma completa de gestión empresarial con 16 módulos integrados — facturación, gastos, inventario, recursos humanos, gestión de flotas y mucho más. Todo en una sola plataforma, sin necesidad de aplicaciones separadas.",
            "Clientlly ist eine umfassende Unternehmensverwaltungsplattform mit 16 integrierten Modulen — Rechnungsstellung, Ausgaben, Inventar, Personalwesen, Fuhrparkverwaltung und vieles mehr. Alles auf einer einzigen Plattform, keine separaten Anwendungen nötig.",
            "Clientlly е комплетна платформа за управување со бизнис со 16 интегрирани модули — фактурирање, трошоци, инвентар, човечки ресурси, управување со флота и многу повеќе. Сè на една платформа, без потреба од одделни апликации."
          ) as string,
        },
        {
          q: sq(lang, "Për kë është Clientlly?", "Who is Clientlly for?", "¿Para quién es Clientlly?", "Für wen ist Clientlly?", "За кого е Clientlly?") as string,
          a: sq(lang,
            "Clientlly është dizajnuar për biznese të vogla dhe të mesme që duan të menaxhojnë gjithçka në një vend. Pavarësisht nëse keni 1 ose 50 punonjës, platforma përshtatet me nevojat tuaja.",
            "Clientlly is designed for small and medium businesses that want to manage everything in one place. Whether you have 1 or 50 employees, the platform adapts to your needs.",
            "Clientlly está diseñado para pequeñas y medianas empresas que desean gestionar todo en un solo lugar. Ya sea que tenga 1 o 50 empleados, la plataforma se adapta a sus necesidades.",
            "Clientlly ist für kleine und mittlere Unternehmen konzipiert, die alles an einem Ort verwalten möchten. Ob Sie 1 oder 50 Mitarbeiter haben, die Plattform passt sich Ihren Bedürfnissen an.",
            "Clientlly е дизајниран за мали и средни бизниси кои сакаат да управуваат со сè на едно место. Без разлика дали имате 1 или 50 вработени, платформата се прилагодува на вашите потреби."
          ) as string,
        },
        {
          q: sq(lang, "A duhet të instaloj diçka?", "Do I need to install anything?", "¿Necesito instalar algo?", "Muss ich etwas installieren?", "Дали треба да инсталирам нешто?") as string,
          a: sq(lang,
            "Jo! Clientlly funksionon 100% në cloud. Mjafton një shfletues interneti — qasuni nga kompjuteri, tableti, ose telefoni juaj. Nuk ka instalim, nuk ka përditësime manuale.",
            "No! Clientlly works 100% in the cloud. You just need a web browser — access from your computer, tablet, or phone. No installation, no manual updates.",
            "¡No! Clientlly funciona 100% en la nube. Solo necesita un navegador web — acceda desde su computadora, tableta o teléfono. Sin instalación, sin actualizaciones manuales.",
            "Nein! Clientlly funktioniert 100% in der Cloud. Sie brauchen nur einen Webbrowser — Zugriff von Ihrem Computer, Tablet oder Telefon. Keine Installation, keine manuellen Updates.",
            "Не! Clientlly функционира 100% во облак. Потребен ви е само веб-прелистувач — пристапете од вашиот компјутер, таблет или телефон. Без инсталација, без рачни ажурирања."
          ) as string,
        },
        {
          q: sq(lang, "Në cilat gjuhë ofrohet Clientlly?", "What languages is Clientlly available in?", "¿En qué idiomas está disponible Clientlly?", "In welchen Sprachen ist Clientlly verfügbar?", "На кои јазици е достапен Clientlly?") as string,
          a: sq(lang,
            "Clientlly ofrohet në Shqip, Anglisht, Maqedonisht, Spanjisht dhe Gjermanisht. Ndërfaqja, faturat, dhe raportet mund të gjenerohen në secilën gjuhë.",
            "Clientlly is available in Albanian, English, Macedonian, Spanish and German. The interface, invoices, and reports can be generated in each language.",
            "Clientlly está disponible en albanés, inglés, macedonio, español y alemán. La interfaz, las facturas y los informes se pueden generar en cada idioma.",
            "Clientlly ist auf Albanisch, Englisch, Mazedonisch, Spanisch und Deutsch verfügbar. Die Benutzeroberfläche, Rechnungen und Berichte können in jeder Sprache erstellt werden.",
            "Clientlly е достапен на албански, англиски, македонски, шпански и германски. Интерфејсот, фактурите и извештаите може да се генерираат на секој јазик."
          ) as string,
        },
      ],
    },
    {
      category: "pricing",
      items: [
        {
          q: sq(lang, "Cilat janë planet e çmimeve?", "What are the pricing plans?", "¿Cuáles son los planes de precios?", "Welche Preispläne gibt es?", "Кои се плановите за цени?") as string,
          a: sq(lang,
            "Ofrojmë 3 plane:\n\n• Starter — €25/muaj (3 përdorues, 200 fatura)\n• Professional — €35/muaj (10 përdorues, 500 fatura)\n• Enterprise — €50/muaj (50 përdorues, fatura pa limit)\n\nTë gjitha planet përfshijnë të 16 modulet e njëjta. Dallimi kryesor është në numrin e përdoruesve dhe në programin \"Le të rritemi bashkë\" — zhvillim i personalizuar sipas nevojave tuaja. Me pagesë vjetore kurseni 15%.",
            "We offer 3 plans:\n\n• Starter — €25/mo (3 users, 200 invoices)\n• Professional — €35/mo (10 users, 500 invoices)\n• Enterprise — €50/mo (50 users, unlimited invoices)\n\nAll plans include the same 16 modules. The key difference is in the number of users and the \"Let's Grow Together\" program — custom development based on your needs. Save 15% with annual billing.",
            "Ofrecemos 3 planes:\n\n• Starter — €25/mes (3 usuarios, 200 facturas)\n• Professional — €35/mes (10 usuarios, 500 facturas)\n• Enterprise — €50/mes (50 usuarios, facturas ilimitadas)\n\nTodos los planes incluyen los mismos 16 módulos. La diferencia clave está en el número de usuarios y el programa \"Crezcamos Juntos\" — desarrollo personalizado según sus necesidades. Ahorre 15% con facturación anual.",
            "Wir bieten 3 Pläne:\n\n• Starter — €25/Monat (3 Benutzer, 200 Rechnungen)\n• Professional — €35/Monat (10 Benutzer, 500 Rechnungen)\n• Enterprise — €50/Monat (50 Benutzer, unbegrenzte Rechnungen)\n\nAlle Pläne enthalten die gleichen 16 Module. Der Hauptunterschied liegt in der Benutzeranzahl und dem Programm \"Gemeinsam Wachsen\" — individuelle Entwicklung nach Ihren Bedürfnissen. Sparen Sie 15% bei jährlicher Abrechnung.",
            "Нудиме 3 планови:\n\n• Starter — €25/месец (3 корисници, 200 фактури)\n• Professional — €35/месец (10 корисници, 500 фактури)\n• Enterprise — €50/месец (50 корисници, неограничени фактури)\n\nСите планови ги вклучуваат истите 16 модули. Главната разлика е во бројот на корисници и програмата \"Да растеме заедно\" — прилагоден развој според вашите потреби. Заштедете 15% со годишна наплата."
          ) as string,
        },
        {
          q: sq(lang, "Cili është dallimi mes planeve?", "What's the difference between plans?", "¿Cuál es la diferencia entre los planes?", "Was ist der Unterschied zwischen den Plänen?", "Која е разликата помеѓу плановите?") as string,
          a: sq(lang,
            "Të 16 modulet janë të njëjta në çdo plan. Dallimi kryesor është në programin \"Le të rritemi bashkë\":\n\n🤝 Starter — mbështetje standarde\n🚀 Professional — zhvillim i personalizuar FALAS: na tregoni çfarë ju nevojitet dhe ne e ndërtojmë për ju!\n⭐ Enterprise — zhvillim PRIORITAR me ekip të dedikuar dhe implementim të shpejtë\n\nKy program na dallon nga konkurrentët — platforma rritet bashkë me biznesin tuaj.",
            "All 16 modules are the same in every plan. The key difference is in the \"Let's Grow Together\" program:\n\n🤝 Starter — standard support\n🚀 Professional — FREE custom development: tell us what you need and we build it for you!\n⭐ Enterprise — PRIORITY development with a dedicated team and fast implementation\n\nThis program sets us apart from competitors — the platform grows together with your business.",
            "Los 16 módulos son iguales en cada plan. La diferencia clave está en el programa \"Crezcamos Juntos\":\n\n🤝 Starter — soporte estándar\n🚀 Professional — desarrollo personalizado GRATIS: ¡díganos qué necesita y lo construimos para usted!\n⭐ Enterprise — desarrollo PRIORITARIO con equipo dedicado e implementación rápida\n\nEste programa nos distingue de la competencia — la plataforma crece junto con su negocio.",
            "Alle 16 Module sind in jedem Plan gleich. Der Hauptunterschied liegt im Programm \"Gemeinsam Wachsen\":\n\n🤝 Starter — Standardunterstützung\n🚀 Professional — KOSTENLOSE individuelle Entwicklung: Sagen Sie uns, was Sie brauchen, und wir bauen es für Sie!\n⭐ Enterprise — PRIORITÄRE Entwicklung mit dediziertem Team und schneller Implementierung\n\nDieses Programm unterscheidet uns von Wettbewerbern — die Plattform wächst mit Ihrem Unternehmen.",
            "Сите 16 модули се исти во секој план. Главната разлика е во програмата \"Да растеме заедно\":\n\n🤝 Starter — стандардна поддршка\n🚀 Professional — БЕСПЛАТЕН прилагоден развој: кажете ни што ви треба и ние го градиме за вас!\n⭐ Enterprise — ПРИОРИТЕТЕН развој со посветен тим и брза имплементација\n\nОваа програма нè разликува од конкуренцијата — платформата расте заедно со вашиот бизнис."
          ) as string,
        },
        {
          q: sq(lang, "Çfarë është programi 'Le të rritemi bashkë'?", "What is the 'Let's Grow Together' program?", "¿Qué es el programa 'Crezcamos Juntos'?", "Was ist das Programm 'Gemeinsam Wachsen'?", "Што е програмата 'Да растеме заедно'?") as string,
          a: sq(lang,
            "Ky program është avantazhi ynë unik! Biznesi juaj ka nevoja specifike — ne i zhvillojmë FALAS si pjesë e planit tuaj.\n\nSi funksionon:\n1. Na tregoni çfarë funksioni ju nevojitet\n2. Ekipi ynë e analizon dhe planifikon\n3. Ne e ndërtojmë dhe integrojmë në platformë\n4. Ju përfitoni pa kosto shtesë!\n\nMe planin Professional merrni zhvillim falas, ndërsa me Enterprise merrni zhvillim prioritar me ekip të dedikuar.",
            "This program is our unique advantage! Your business has specific needs — we develop them FREE as part of your plan.\n\nHow it works:\n1. Tell us what feature you need\n2. Our team analyzes and plans it\n3. We build and integrate it into the platform\n4. You benefit at no extra cost!\n\nWith Professional you get free development, while Enterprise gets priority development with a dedicated team.",
            "¡Este programa es nuestra ventaja única! Su negocio tiene necesidades específicas — las desarrollamos GRATIS como parte de su plan.\n\nCómo funciona:\n1. Díganos qué función necesita\n2. Nuestro equipo lo analiza y planifica\n3. Lo construimos e integramos en la plataforma\n4. ¡Usted se beneficia sin costo adicional!\n\nCon Professional obtiene desarrollo gratuito, mientras que Enterprise obtiene desarrollo prioritario con un equipo dedicado.",
            "Dieses Programm ist unser einzigartiger Vorteil! Ihr Unternehmen hat spezifische Bedürfnisse — wir entwickeln sie KOSTENLOS als Teil Ihres Plans.\n\nSo funktioniert es:\n1. Sagen Sie uns, welche Funktion Sie benötigen\n2. Unser Team analysiert und plant sie\n3. Wir bauen sie und integrieren sie in die Plattform\n4. Sie profitieren ohne zusätzliche Kosten!\n\nMit Professional erhalten Sie kostenlose Entwicklung, während Enterprise prioritäre Entwicklung mit einem dedizierten Team erhält.",
            "Оваа програма е нашата уникална предност! Вашиот бизнис има специфични потреби — ние ги развиваме БЕСПЛАТНО како дел од вашиот план.\n\nКако функционира:\n1. Кажете ни каква функција ви треба\n2. Нашиот тим ја анализира и планира\n3. Ние ја градиме и интегрираме во платформата\n4. Вие имате корист без дополнителни трошоци!\n\nСо Professional добивате бесплатен развој, додека Enterprise добива приоритетен развој со посветен тим."
          ) as string,
        },
        {
          q: sq(lang, "Sa kursej me pagesë vjetore?", "How much do I save with annual billing?", "¿Cuánto ahorro con la facturación anual?", "Wie viel spare ich bei jährlicher Abrechnung?", "Колку заштедувам со годишна наплата?") as string,
          a: sq(lang,
            "Me pagesë vjetore kurseni 15%:\n\n• Starter: €300/vit pa zbritje → €255/vit (kurseni €45)\n• Professional: €420/vit pa zbritje → €357/vit (kurseni €63)\n• Enterprise: €600/vit pa zbritje → €510/vit (kurseni €90)",
            "With annual billing you save 15%:\n\n• Starter: €300/yr regular → €255/yr (save €45)\n• Professional: €420/yr regular → €357/yr (save €63)\n• Enterprise: €600/yr regular → €510/yr (save €90)",
            "Con la facturación anual ahorra 15%:\n\n• Starter: €300/año regular → €255/año (ahorra €45)\n• Professional: €420/año regular → €357/año (ahorra €63)\n• Enterprise: €600/año regular → €510/año (ahorra €90)",
            "Bei jährlicher Abrechnung sparen Sie 15%:\n\n• Starter: €300/Jahr regulär → €255/Jahr (sparen €45)\n• Professional: €420/Jahr regulär → €357/Jahr (sparen €63)\n• Enterprise: €600/Jahr regulär → €510/Jahr (sparen €90)",
            "Со годишна наплата заштедувате 15%:\n\n• Starter: €300/год редовно → €255/год (заштеда €45)\n• Professional: €420/год редовно → €357/год (заштеда €63)\n• Enterprise: €600/год редовно → €510/год (заштеда €90)"
          ) as string,
        },
        {
          q: sq(lang, "A ka provë falas?", "Is there a free trial?", "¿Hay una prueba gratuita?", "Gibt es eine kostenlose Testversion?", "Дали има бесплатен пробен период?") as string,
          a: sq(lang,
            "Po! Ofrojmë provë falas 14-ditore me qasje të plotë në të 16 modulet. Nuk kërkohet kartë kredie. Pas provës, zgjidhni planin që ju përshtatet — ose thjesht mos vazhdoni, pa asnjë detyrim.",
            "Yes! We offer a 14-day free trial with full access to all 16 modules. No credit card required. After the trial, choose the plan that fits you — or simply don't continue, no obligation.",
            "¡Sí! Ofrecemos una prueba gratuita de 14 días con acceso completo a los 16 módulos. No se requiere tarjeta de crédito. Después de la prueba, elija el plan que le convenga — o simplemente no continúe, sin compromiso.",
            "Ja! Wir bieten eine 14-tägige kostenlose Testversion mit vollem Zugang zu allen 16 Modulen. Keine Kreditkarte erforderlich. Nach der Testphase wählen Sie den passenden Plan — oder machen einfach nicht weiter, ohne Verpflichtung.",
            "Да! Нудиме бесплатен пробен период од 14 дена со целосен пристап до сите 16 модули. Не е потребна кредитна картичка. По пробниот период, изберете план кој ви одговара — или едноставно не продолжувајте, без обврска."
          ) as string,
        },
      ],
    },
    {
      category: "features",
      items: [
        {
          q: sq(lang, "Cilat module përfshin Clientlly?", "What modules does Clientlly include?", "¿Qué módulos incluye Clientlly?", "Welche Module enthält Clientlly?", "Кои модули ги вклучува Clientlly?") as string,
          a: sq(lang,
            "Clientlly ka 16 module të integruara:\n\n💰 Financë: Faturim Profesional, Shpenzime, Menaxhim Borxhi, Raporte & Analiza, Oferta, Pagat\n📋 Operacione: Menaxhim Klientësh (CRM), Furnitorë, Inventar\n🚗 Flotë Makinash: Menaxhim Automjetesh, Mirëmbajtje Flote\n👥 Burimet Njerëzore: Punonjësit, Prezenca, Trajnim & Kuize, Menaxhim Dokumentesh, Kalendar",
            "Clientlly has 16 integrated modules:\n\n💰 Finance: Invoicing, Expenses, Debt Management, Reports & Analytics, Quotes, Payroll\n📋 Operations: CRM, Vendors, Inventory\n🚗 Fleet: Vehicle Management, Fleet Maintenance\n👥 HR: Employees, Attendance, Training & Quizzes, Document Management, Calendar",
            "Clientlly tiene 16 módulos integrados:\n\n💰 Finanzas: Facturación, Gastos, Gestión de Deudas, Informes y Análisis, Cotizaciones, Nómina\n📋 Operaciones: CRM, Proveedores, Inventario\n🚗 Flota: Gestión de Vehículos, Mantenimiento de Flota\n👥 RRHH: Empleados, Asistencia, Capacitación y Cuestionarios, Gestión Documental, Calendario",
            "Clientlly hat 16 integrierte Module:\n\n💰 Finanzen: Rechnungsstellung, Ausgaben, Schuldenverwaltung, Berichte & Analysen, Angebote, Gehaltsabrechnung\n📋 Betrieb: CRM, Lieferanten, Inventar\n🚗 Fuhrpark: Fahrzeugverwaltung, Fuhrparkwartung\n👥 Personal: Mitarbeiter, Anwesenheit, Schulung & Quiz, Dokumentenverwaltung, Kalender",
            "Clientlly има 16 интегрирани модули:\n\n💰 Финансии: Фактурирање, Трошоци, Управување со долгови, Извештаи и аналитика, Понуди, Плати\n📋 Операции: CRM, Добавувачи, Инвентар\n🚗 Флота: Управување со возила, Одржување на флота\n👥 ЧР: Вработени, Присуство, Обука и квизови, Управување со документи, Календар"
          ) as string,
        },
        {
          q: sq(lang, "A mund të krijoj fatura në shumë gjuhë?", "Can I create invoices in multiple languages?", "¿Puedo crear facturas en varios idiomas?", "Kann ich Rechnungen in mehreren Sprachen erstellen?", "Дали можам да креирам фактури на повеќе јазици?") as string,
          a: sq(lang,
            "Po! Faturat mund të krijohen në Shqip, Anglisht, Maqedonisht, Spanjisht ose Gjermanisht. Mund të vendosni gjuhë të ndryshme për klientë të ndryshëm — ideale për biznese që punojnë me klientë ndërkombëtarë.",
            "Yes! Invoices can be created in Albanian, English, Macedonian, Spanish or German. You can set different languages for different clients — ideal for businesses working with international clients.",
            "¡Sí! Las facturas se pueden crear en albanés, inglés, macedonio, español o alemán. Puede configurar diferentes idiomas para diferentes clientes — ideal para empresas que trabajan con clientes internacionales.",
            "Ja! Rechnungen können auf Albanisch, Englisch, Mazedonisch, Spanisch oder Deutsch erstellt werden. Sie können verschiedene Sprachen für verschiedene Kunden einstellen — ideal für Unternehmen mit internationalen Kunden.",
            "Да! Фактурите може да се креираат на албански, англиски, македонски, шпански или германски. Можете да поставите различни јазици за различни клиенти — идеално за бизниси кои работат со меѓународни клиенти."
          ) as string,
        },
        {
          q: sq(lang, "A ka aplikacion mobil?", "Is there a mobile app?", "¿Hay una aplicación móvil?", "Gibt es eine mobile App?", "Дали има мобилна апликација?") as string,
          a: sq(lang,
            "Clientlly funksionon plotësisht në shfletuesin e telefonit tuaj me dizajn responsive. Gjithashtu ofrojmë aplikacion mobil për iOS dhe Android me të gjitha funksionet kryesore.",
            "Clientlly works fully in your phone's browser with a responsive design. We also offer a mobile app for iOS and Android with all key features.",
            "Clientlly funciona completamente en el navegador de su teléfono con un diseño responsivo. También ofrecemos una aplicación móvil para iOS y Android con todas las funciones principales.",
            "Clientlly funktioniert vollständig im Browser Ihres Telefons mit einem responsiven Design. Wir bieten auch eine mobile App für iOS und Android mit allen wichtigen Funktionen.",
            "Clientlly функционира целосно во прелистувачот на вашиот телефон со респонзивен дизајн. Исто така нудиме мобилна апликација за iOS и Android со сите клучни функции."
          ) as string,
        },
        {
          q: sq(lang, "Si funksionon menaxhimi i flotës së makinave?", "How does fleet management work?", "¿Cómo funciona la gestión de flotas?", "Wie funktioniert die Fuhrparkverwaltung?", "Како функционира управувањето со флота?") as string,
          a: sq(lang,
            "Moduli i flotës ju lejon të menaxhoni të gjitha automjetet e biznesit: regjistrimi, sigurimi, mirëmbajtja, karburanti, dhe shpenzimet. Merrni njoftime automatike për skadimet dhe planifikoni serviset.",
            "The fleet module lets you manage all business vehicles: registration, insurance, maintenance, fuel, and expenses. Get automatic notifications for expirations and schedule services.",
            "El módulo de flota le permite gestionar todos los vehículos de la empresa: registro, seguro, mantenimiento, combustible y gastos. Reciba notificaciones automáticas de vencimientos y programe servicios.",
            "Das Fuhrparkmodul ermöglicht die Verwaltung aller Geschäftsfahrzeuge: Registrierung, Versicherung, Wartung, Kraftstoff und Ausgaben. Erhalten Sie automatische Benachrichtigungen über Ablaufdaten und planen Sie Wartungen.",
            "Модулот за флота ви овозможува да управувате со сите деловни возила: регистрација, осигурување, одржување, гориво и трошоци. Добијте автоматски известувања за истекувања и закажете сервиси."
          ) as string,
        },
      ],
    },
    {
      category: "security",
      items: [
        {
          q: sq(lang, "A janë të sigurta të dhënat e mia?", "Is my data secure?", "¿Están seguros mis datos?", "Sind meine Daten sicher?", "Дали моите податоци се безбедни?") as string,
          a: sq(lang,
            "Absolutisht! Përdorim enkriptim SSL 256-bit për të gjitha komunikimet. Të dhënat tuaja ruhen në servera të sigurt me backup të rregullt. Jemi plotësisht në përputhje me GDPR.",
            "Absolutely! We use 256-bit SSL encryption for all communications. Your data is stored on secure servers with regular backups. We are fully GDPR compliant.",
            "¡Absolutamente! Utilizamos cifrado SSL de 256 bits para todas las comunicaciones. Sus datos se almacenan en servidores seguros con copias de seguridad regulares. Cumplimos plenamente con el GDPR.",
            "Absolut! Wir verwenden 256-Bit-SSL-Verschlüsselung für alle Kommunikationen. Ihre Daten werden auf sicheren Servern mit regelmäßigen Backups gespeichert. Wir sind vollständig DSGVO-konform.",
            "Апсолутно! Користиме 256-битна SSL енкрипција за сите комуникации. Вашите податоци се чуваат на безбедни сервери со редовни резервни копии. Целосно сме усогласени со GDPR."
          ) as string,
        },
        {
          q: sq(lang, "A bëni backup të të dhënave?", "Do you backup data?", "¿Hacen copias de seguridad de los datos?", "Führen Sie Datensicherungen durch?", "Дали правите резервни копии на податоците?") as string,
          a: sq(lang,
            "Po! Backup automatik bëhet çdo ditë. Në rast emergjence, mund të rikthejmë të dhënat tuaja brenda 24 orëve. Asnjë e dhënë nuk humbet.",
            "Yes! Automatic backups are made daily. In case of emergency, we can restore your data within 24 hours. No data is ever lost.",
            "¡Sí! Las copias de seguridad automáticas se realizan diariamente. En caso de emergencia, podemos restaurar sus datos en 24 horas. Ningún dato se pierde.",
            "Ja! Automatische Backups werden täglich erstellt. Im Notfall können wir Ihre Daten innerhalb von 24 Stunden wiederherstellen. Keine Daten gehen jemals verloren.",
            "Да! Автоматски резервни копии се прават секојдневно. Во случај на итност, можеме да ги вратиме вашите податоци во рок од 24 часа. Ниту еден податок никогаш не се губи."
          ) as string,
        },
        {
          q: sq(lang, "A mund t'i eksportoj të dhënat e mia?", "Can I export my data?", "¿Puedo exportar mis datos?", "Kann ich meine Daten exportieren?", "Дали можам да ги извезам моите податоци?") as string,
          a: sq(lang,
            "Po! Mund të eksportoni të gjitha të dhënat tuaja në format Excel ose PDF në çdo moment. Faturat, raportet, listat e klientëve — gjithçka mund të shkarkohet.",
            "Yes! You can export all your data in Excel or PDF format at any time. Invoices, reports, client lists — everything can be downloaded.",
            "¡Sí! Puede exportar todos sus datos en formato Excel o PDF en cualquier momento. Facturas, informes, listas de clientes — todo se puede descargar.",
            "Ja! Sie können alle Ihre Daten jederzeit im Excel- oder PDF-Format exportieren. Rechnungen, Berichte, Kundenlisten — alles kann heruntergeladen werden.",
            "Да! Можете да ги извезете сите ваши податоци во Excel или PDF формат во секое време. Фактури, извештаи, листи на клиенти — сè може да се преземе."
          ) as string,
        },
      ],
    },
    {
      category: "support",
      items: [
        {
          q: sq(lang, "Si mund të kontaktoj mbështetjen?", "How can I contact support?", "¿Cómo puedo contactar al soporte?", "Wie kann ich den Support kontaktieren?", "Како можам да контактирам со поддршката?") as string,
          a: sq(lang,
            "Na kontaktoni përmes:\n\n📧 Email: info@clientlly.com\n💬 Chat-i live në platformë (24/7)\n\nEkipi ynë i mbështetjes përgjigjet brenda 2 orëve gjatë ditëve të punës.",
            "Contact us through:\n\n📧 Email: info@clientlly.com\n💬 Live chat on the platform (24/7)\n\nOur support team responds within 2 hours during business days.",
            "Contáctenos a través de:\n\n📧 Email: info@clientlly.com\n💬 Chat en vivo en la plataforma (24/7)\n\nNuestro equipo de soporte responde en 2 horas durante días laborables.",
            "Kontaktieren Sie uns über:\n\n📧 Email: info@clientlly.com\n💬 Live-Chat auf der Plattform (24/7)\n\nUnser Support-Team antwortet innerhalb von 2 Stunden an Werktagen.",
            "Контактирајте нè преку:\n\n📧 Email: info@clientlly.com\n💬 Чат во живо на платформата (24/7)\n\nНашиот тим за поддршка одговара во рок од 2 часа за време на работни денови."
          ) as string,
        },
        {
          q: sq(lang, "A ofroni trajnim për përdorimin e platformës?", "Do you offer platform training?", "¿Ofrecen capacitación para la plataforma?", "Bieten Sie Plattformschulungen an?", "Дали нудите обука за платформата?") as string,
          a: sq(lang,
            "Po! Ofrojmë:\n\n• Video-udhëzues hap pas hapi për çdo modul\n• Dokumentacion të plotë në shqip\n• Sesione trajnimi live me ekipin tonë (për planet Professional dhe Enterprise)\n• Chat bot i integruar për ndihmë të menjëhershme",
            "Yes! We offer:\n\n• Step-by-step video tutorials for each module\n• Complete documentation in Albanian\n• Live training sessions with our team (for Professional and Enterprise plans)\n• Integrated chatbot for immediate help",
            "¡Sí! Ofrecemos:\n\n• Tutoriales en video paso a paso para cada módulo\n• Documentación completa en albanés\n• Sesiones de capacitación en vivo con nuestro equipo (para planes Professional y Enterprise)\n• Chatbot integrado para ayuda inmediata",
            "Ja! Wir bieten:\n\n• Schritt-für-Schritt-Video-Tutorials für jedes Modul\n• Vollständige Dokumentation auf Albanisch\n• Live-Schulungen mit unserem Team (für Professional- und Enterprise-Pläne)\n• Integrierter Chatbot für sofortige Hilfe",
            "Да! Нудиме:\n\n• Видео упатства чекор по чекор за секој модул\n• Комплетна документација на албански\n• Обуки во живо со нашиот тим (за Professional и Enterprise планови)\n• Интегриран чатбот за моментална помош"
          ) as string,
        },
        {
          q: sq(lang, "A është migrimi i të dhënave falas?", "Is data migration free?", "¿Es gratuita la migración de datos?", "Ist die Datenmigration kostenlos?", "Дали миграцијата на податоци е бесплатна?") as string,
          a: sq(lang,
            "Po! Migrimi nga platforma juaj aktuale te Clientlly është plotësisht FALAS. Ekipi ynë ju ndihmon të transferoni të gjitha të dhënat — klientë, fatura, produkte — pa humbur asgjë.",
            "Yes! Migration from your current platform to Clientlly is completely FREE. Our team helps you transfer all data — clients, invoices, products — without losing anything.",
            "¡Sí! La migración desde su plataforma actual a Clientlly es completamente GRATIS. Nuestro equipo le ayuda a transferir todos los datos — clientes, facturas, productos — sin perder nada.",
            "Ja! Die Migration von Ihrer aktuellen Plattform zu Clientlly ist völlig KOSTENLOS. Unser Team hilft Ihnen, alle Daten zu übertragen — Kunden, Rechnungen, Produkte — ohne etwas zu verlieren.",
            "Да! Миграцијата од вашата моментална платформа до Clientlly е целосно БЕСПЛАТНА. Нашиот тим ви помага да ги пренесете сите податоци — клиенти, фактури, производи — без да изгубите ништо."
          ) as string,
        },
      ],
    },
    {
      category: "account",
      items: [
        {
          q: sq(lang, "A mund ta anuloj abonimin në çdo kohë?", "Can I cancel my subscription anytime?", "¿Puedo cancelar mi suscripción en cualquier momento?", "Kann ich mein Abonnement jederzeit kündigen?", "Може ли да ја откажам претплатата во секое време?") as string,
          a: sq(lang,
            "Po! Mund ta anuloni abonimin në çdo moment pa penalitete dhe pa pyetje. Të dhënat tuaja ruhen për 30 ditë pas anulimit në rast se ndërroni mendje.",
            "Yes! You can cancel your subscription at any time without penalties and no questions asked. Your data is kept for 30 days after cancellation in case you change your mind.",
            "¡Sí! Puede cancelar su suscripción en cualquier momento sin penalizaciones y sin preguntas. Sus datos se conservan durante 30 días después de la cancelación en caso de que cambie de opinión.",
            "Ja! Sie können Ihr Abonnement jederzeit ohne Strafen und ohne Fragen kündigen. Ihre Daten werden 30 Tage nach der Kündigung aufbewahrt, falls Sie Ihre Meinung ändern.",
            "Да! Можете да ја откажете претплатата во секое време без казни и без прашања. Вашите податоци се чуваат 30 дена по откажувањето во случај да се предомислите."
          ) as string,
        },
        {
          q: sq(lang, "A mund të ndryshoj planin gjatë abonimit?", "Can I change plans during my subscription?", "¿Puedo cambiar de plan durante mi suscripción?", "Kann ich den Plan während meines Abonnements ändern?", "Може ли да го сменам планот за време на претплатата?") as string,
          a: sq(lang,
            "Po! Mund të rrisni ose ulni planin në çdo moment. Ndryshimi aplikohet menjëherë dhe pagesa rregullohet automatikisht. Nuk humbni asnjë të dhënë gjatë ndryshimit.",
            "Yes! You can upgrade or downgrade your plan at any time. The change applies immediately and billing adjusts automatically. You don't lose any data during the switch.",
            "¡Sí! Puede actualizar o reducir su plan en cualquier momento. El cambio se aplica de inmediato y la facturación se ajusta automáticamente. No pierde ningún dato durante el cambio.",
            "Ja! Sie können Ihren Plan jederzeit upgraden oder downgraden. Die Änderung gilt sofort und die Abrechnung wird automatisch angepasst. Sie verlieren keine Daten beim Wechsel.",
            "Да! Можете да го надградите или намалите планот во секое време. Промената се применува веднаш и наплатата се прилагодува автоматски. Не губите податоци при промената."
          ) as string,
        },
        {
          q: sq(lang, "Sa përdorues mund të shtoj?", "How many users can I add?", "¿Cuántos usuarios puedo agregar?", "Wie viele Benutzer kann ich hinzufügen?", "Колку корисници можам да додадам?") as string,
          a: sq(lang,
            "Varet nga plani juaj:\n\n• Starter: deri në 3 përdorues\n• Professional: deri në 10 përdorues\n• Enterprise: deri në 50 përdorues (€2 për përdorues shtesë)\n\nÇdo përdorues ka qasje në të gjitha modulet. Mund të vendosni role dhe leje specifike për secilin.",
            "Depends on your plan:\n\n• Starter: up to 3 users\n• Professional: up to 10 users\n• Enterprise: up to 50 users (€2 per additional user)\n\nEvery user has access to all modules. You can set specific roles and permissions for each.",
            "Depende de su plan:\n\n• Starter: hasta 3 usuarios\n• Professional: hasta 10 usuarios\n• Enterprise: hasta 50 usuarios (€2 por usuario adicional)\n\nCada usuario tiene acceso a todos los módulos. Puede establecer roles y permisos específicos para cada uno.",
            "Abhängig von Ihrem Plan:\n\n• Starter: bis zu 3 Benutzer\n• Professional: bis zu 10 Benutzer\n• Enterprise: bis zu 50 Benutzer (€2 pro zusätzlichem Benutzer)\n\nJeder Benutzer hat Zugang zu allen Modulen. Sie können spezifische Rollen und Berechtigungen für jeden festlegen.",
            "Зависи од вашиот план:\n\n• Starter: до 3 корисници\n• Professional: до 10 корисници\n• Enterprise: до 50 корисници (€2 по дополнителен корисник)\n\nСекој корисник има пристап до сите модули. Можете да поставите специфични улоги и дозволи за секој."
          ) as string,
        },
      ],
    },
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqs.flatMap(g => g.items)
    : faqs.find(g => g.category === activeCategory)?.items ?? [];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => go("/")} className="flex items-center gap-2">
            <img src={clientllyLogo} alt="Clientlly" className="h-7 w-auto" />
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">Clientlly</span>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => go("/")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</button>
            <button onClick={() => go("/features")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}</button>
            <button onClick={() => go("/contact")} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</button>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => go("/subscribe")} className="px-4 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</button>
            <button onClick={() => go("/trial")} className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</button>
          </div>
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden p-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            <button onClick={() => go("/")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Ballina", "Home", "Inicio", "Startseite", "Почетна")}</button>
            <button onClick={() => go("/features")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Veçoritë", "Features", "Características", "Funktionen", "Функции")}</button>
            <button onClick={() => go("/contact")} className="block text-sm font-medium text-gray-700 py-2 w-full text-left">{sq(lang, "Kontakt", "Contact", "Contacto", "Kontakt", "Контакт")}</button>
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => go("/subscribe")} className="w-full py-2.5 text-sm font-semibold border border-indigo-600 text-indigo-600 rounded-lg">{sq(lang, "Blej Tani", "Buy Now", "Comprar Ahora", "Jetzt Kaufen", "Купи Сега")}</button>
              <button onClick={() => go("/trial")} className="w-full py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-lg">{sq(lang, "Fillo Provën", "Start Trial", "Iniciar Prueba", "Testversion Starten", "Започни Проба")}</button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full mb-6">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-600">{sq(lang, "Qendër Ndihme", "Help Center", "Centro de Ayuda", "Hilfezentrum", "Центар за помош")}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {sq(lang, "Pyetje të Shpeshta", "Frequently Asked Questions", "Preguntas Frecuentes", "Häufig Gestellte Fragen", "Често Поставувани Прашања")}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            {sq(lang,
              "Gjeni përgjigjet për pyetjet më të zakonshme rreth Clientlly. Nuk gjeni çfarë kërkoni? Na kontaktoni drejtpërdrejt.",
              "Find answers to the most common questions about Clientlly. Can't find what you're looking for? Contact us directly.",
              "Encuentre respuestas a las preguntas más comunes sobre Clientlly. ¿No encuentra lo que busca? Contáctenos directamente.",
              "Finden Sie Antworten auf die häufigsten Fragen zu Clientlly. Sie finden nicht, was Sie suchen? Kontaktieren Sie uns direkt.",
              "Најдете одговори на најчестите прашања за Clientlly. Не наоѓате тоа што го барате? Контактирајте нè директно."
            )}
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-1.5 mb-8 justify-center overflow-x-auto scrollbar-hide">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenIndex(0); }}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-2.5">
            {filteredFaqs.map((item, i) => (
              <Accordion
                key={i}
                item={item}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            {sq(lang, "Nuk gjeni përgjigjen?", "Can't find your answer?", "¿No encuentra su respuesta?", "Können Sie Ihre Antwort nicht finden?", "Не го наоѓате одговорот?")}
          </h2>
          <p className="text-gray-500 mb-6">
            {sq(lang,
              "Ekipi ynë është gjithmonë i gatshëm t'ju ndihmojë. Na shkruani ose filloni provën falas tani.",
              "Our team is always ready to help. Write to us or start your free trial now.",
              "Nuestro equipo siempre está listo para ayudar. Escríbanos o comience su prueba gratuita ahora.",
              "Unser Team ist immer bereit zu helfen. Schreiben Sie uns oder starten Sie jetzt Ihre kostenlose Testversion.",
              "Нашиот тим е секогаш подготвен да помогне. Пишете ни или започнете го вашиот бесплатен пробен период сега."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => go("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
              {sq(lang, "Na Kontaktoni", "Contact Us", "Contáctenos", "Kontaktieren Sie Uns", "Контактирајте Нè")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => go("/trial")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              {sq(lang, "Fillo Provën Falas", "Start Free Trial", "Iniciar Prueba Gratis", "Kostenlose Testversion", "Бесплатна Проба")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
