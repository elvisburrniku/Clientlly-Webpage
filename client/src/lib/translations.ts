import type { T5 } from './i18n';

// Backward-compatible stub for useTranslation.ts hook
export const translations: Record<string, Record<string, string>> = {};

// ─── COMMON ──────────────────────────────────────────────────────────────────
export const C = {
  // Navigation
  nav_home:           { sq: "Ballina",          en: "Home",           es: "Inicio",           de: "Startseite",         mk: "Дома" } as T5,
  nav_features:       { sq: "Veçoritë",         en: "Features",       es: "Características",  de: "Funktionen",         mk: "Функции" } as T5,
  nav_pricing:        { sq: "Çmimet",           en: "Pricing",        es: "Precios",          de: "Preise",             mk: "Цени" } as T5,
  nav_contact:        { sq: "Kontakt",          en: "Contact",        es: "Contacto",         de: "Kontakt",            mk: "Контакт" } as T5,
  nav_about:          { sq: "Rreth Nesh",       en: "About Us",       es: "Sobre Nosotros",   de: "Über Uns",           mk: "За Нас" } as T5,
  nav_login:          { sq: "Hyr",              en: "Login",          es: "Iniciar Sesión",   de: "Anmelden",           mk: "Најави Се" } as T5,
  nav_collab:         { sq: "Bashkëpunim",      en: "Collaboration",  es: "Colaboración",     de: "Zusammenarbeit",     mk: "Соработка" } as T5,
  // Buttons
  btn_buy:            { sq: "Blej Tani",        en: "Buy Now",        es: "Comprar Ahora",    de: "Jetzt Kaufen",       mk: "Купи Сега" } as T5,
  btn_trial:          { sq: "Fillo Provën",     en: "Start Trial",    es: "Iniciar Prueba",   de: "Testversion Starten",mk: "Започни Проба" } as T5,
  btn_compare:        { sq: "Krahaso Planet",   en: "Compare Plans",  es: "Comparar Planes",  de: "Pläne Vergleichen",  mk: "Спореди Планови" } as T5,
  btn_learn:          { sq: "Mëso Më Shumë",   en: "Learn More",     es: "Saber Más",        de: "Mehr Erfahren",      mk: "Дознај Повеќе" } as T5,
  btn_back_features:  { sq: "Kthehu te Veçoritë", en: "Back to Features", es: "Volver a Características", de: "Zurück zu Funktionen", mk: "Назад кон Функции" } as T5,
  btn_contact:        { sq: "Na Kontaktoni",    en: "Contact Us",     es: "Contáctenos",      de: "Kontaktieren Sie Uns", mk: "Контактирајте Нè" } as T5,
  btn_view_plans:     { sq: "Shiko Planet",     en: "View Plans",     es: "Ver Planes",       de: "Pläne Ansehen",      mk: "Види Планови" } as T5,
  btn_get_started:    { sq: "Fillo Tani",       en: "Get Started",    es: "Comenzar",         de: "Loslegen",           mk: "Започни" } as T5,
  btn_send:           { sq: "Dërgo",            en: "Send",           es: "Enviar",           de: "Senden",             mk: "Испрати" } as T5,
  btn_subscribe:      { sq: "Abonohu",          en: "Subscribe",      es: "Suscribirse",      de: "Abonnieren",         mk: "Претплати Се" } as T5,
  // Trust indicators
  trust_trial:        { sq: "14 ditë provë falas", en: "14-day free trial", es: "Prueba gratuita de 14 días", de: "14 Tage kostenlose Testversion", mk: "14 дена бесплатна проба" } as T5,
  trust_cancel:       { sq: "Anulo në çdo kohë", en: "Cancel anytime",    es: "Cancela cuando quieras",    de: "Jederzeit kündbar",             mk: "Откажи кога сакаш" } as T5,
  trust_no_card:      { sq: "Nuk kërkohet kartë", en: "No credit card",   es: "Sin tarjeta de crédito",    de: "Keine Kreditkarte erforderlich", mk: "Без кредитна картичка" } as T5,
  trust_setup:        { sq: "Konfigurimi & Migrimi Falas", en: "Free Setup & Migration", es: "Configuración y migración gratis", de: "Kostenlose Einrichtung & Migration", mk: "Бесплатна Поставка & Миграција" } as T5,
  trust_support:      { sq: "Mbështetje Ekspertësh 24/7", en: "24/7 Expert Support",     es: "Soporte experto 24/7",             de: "24/7 Expertenunterstützung",         mk: "Поддршка на Експерти 24/7" } as T5,
  trust_security:     { sq: "Siguri Bankare",   en: "Bank-Level Security",  es: "Seguridad Bancaria",      de: "Bankensicherheit",           mk: "Банкарска Безбедност" } as T5,
  trust_data:         { sq: "Mbrojtja e të Dhënave", en: "Data Protection", es: "Protección de Datos",     de: "Datenschutz",                mk: "Заштита на Податоци" } as T5,
  // Labels
  lbl_monthly:        { sq: "Mujor",            en: "Monthly",        es: "Mensual",          de: "Monatlich",          mk: "Месечно" } as T5,
  lbl_yearly:         { sq: "Vjetor",           en: "Yearly",         es: "Anual",            de: "Jährlich",           mk: "Годишно" } as T5,
  lbl_save:           { sq: "Kurseni",          en: "Save",           es: "Ahorra",           de: "Sparen Sie",         mk: "Заштеди" } as T5,
  lbl_popular:        { sq: "Më i Popullarizuari", en: "Most Popular", es: "Más Popular",     de: "Beliebteste",        mk: "Најпопуларен" } as T5,
  lbl_per_month:      { sq: "/muaj",            en: "/month",         es: "/mes",             de: "/Monat",             mk: "/месец" } as T5,
  lbl_per_year:       { sq: "/vit",             en: "/year",          es: "/año",             de: "/Jahr",              mk: "/година" } as T5,
  lbl_loading:        { sq: "Duke ngarkuar...", en: "Loading...",      es: "Cargando...",      de: "Wird geladen...",    mk: "Се вчитува..." } as T5,
  lbl_success:        { sq: "Sukses!",          en: "Success!",       es: "¡Éxito!",          de: "Erfolg!",            mk: "Успех!" } as T5,
  lbl_error:          { sq: "Gabim",            en: "Error",          es: "Error",            de: "Fehler",             mk: "Грешка" } as T5,
  lbl_email:          { sq: "Email",            en: "Email",          es: "Correo electrónico", de: "E-Mail",           mk: "Е-пошта" } as T5,
  lbl_phone:          { sq: "Telefon",          en: "Phone",          es: "Teléfono",         de: "Telefon",            mk: "Телефон" } as T5,
  lbl_name:           { sq: "Emri",             en: "Name",           es: "Nombre",           de: "Name",               mk: "Име" } as T5,
  lbl_company:        { sq: "Kompania",         en: "Company",        es: "Empresa",          de: "Unternehmen",        mk: "Компанија" } as T5,
  lbl_message:        { sq: "Mesazhi",          en: "Message",        es: "Mensaje",          de: "Nachricht",          mk: "Порака" } as T5,
  // Footer
  footer_product:     { sq: "Produkti",         en: "Product",        es: "Producto",         de: "Produkt",            mk: "Производ" } as T5,
  footer_company:     { sq: "Kompania",         en: "Company",        es: "Empresa",          de: "Unternehmen",        mk: "Компанија" } as T5,
  footer_legal:       { sq: "Ligjore",          en: "Legal",          es: "Legal",            de: "Rechtliches",        mk: "Правно" } as T5,
  footer_integration: { sq: "Integrimi",        en: "Integrations",   es: "Integraciones",    de: "Integrationen",      mk: "Интеграции" } as T5,
  footer_collab:      { sq: "Bashkëpunim",      en: "Collaboration",  es: "Colaboración",     de: "Zusammenarbeit",     mk: "Соработка" } as T5,
  footer_about:       { sq: "Rreth Nesh",       en: "About Us",       es: "Sobre Nosotros",   de: "Über Uns",           mk: "За Нас" } as T5,
  footer_careers:     { sq: "Karriera",         en: "Careers",        es: "Carreras",         de: "Karriere",           mk: "Кариера" } as T5,
  footer_contact:     { sq: "Kontakti",         en: "Contact",        es: "Contacto",         de: "Kontakt",            mk: "Контакт" } as T5,
  footer_cases:       { sq: "Studimet",         en: "Case Studies",   es: "Casos de Estudio", de: "Fallstudien",        mk: "Студии на Случај" } as T5,
  footer_privacy:     { sq: "Privatësia",       en: "Privacy Policy", es: "Política de Privacidad", de: "Datenschutz",  mk: "Политика на Приватност" } as T5,
  footer_terms:       { sq: "Kushtet e Shërbimit", en: "Terms of Service", es: "Términos de Servicio", de: "Nutzungsbedingungen", mk: "Услови на Употреба" } as T5,
  footer_data:        { sq: "Mbrojtja e të Dhënave", en: "Data Protection", es: "Protección de Datos", de: "Datenschutz", mk: "Заштита на Податоци" } as T5,
  footer_tagline:     { sq: "Software i menaxhimit të biznesit për NVM-të. 16 module, një çmim.", en: "Business management software for SMEs. 16 modules, one price.", es: "Software de gestión empresarial para pymes. 16 módulos, un precio.", de: "Unternehmensverwaltungssoftware für KMU. 16 Module, ein Preis.", mk: "Деловен софтвер за МСП. 16 модули, една цена." } as T5,
  footer_rights:      { sq: "Të gjitha të drejtat e rezervuara.", en: "All rights reserved.", es: "Todos los derechos reservados.", de: "Alle Rechte vorbehalten.", mk: "Сите права задржани." } as T5,
  footer_kosova:      { sq: "Regjistruar në Kosovë", en: "Registered in Kosovo", es: "Registrado en Kosovo", de: "Eingetragen in Kosovo", mk: "Регистриран во Косово" } as T5,
};

// ─── LANDING ─────────────────────────────────────────────────────────────────
export const LANDING = {
  hero_badge:      { sq: "Software i Biznesit Nr.1 në Rajon", en: "The #1 Business Software in the Region", es: "El Software Empresarial N.° 1 de la Región", de: "Die Nr. 1 Unternehmenssoftware in der Region", mk: "Деловен Софтвер Бр.1 во Регионот" } as T5,
  hero_title:      { sq: "Gjithçka që ju nevojitet për të drejtuar biznesin tuaj", en: "Everything you need to run your business", es: "Todo lo que necesitas para gestionar tu negocio", de: "Alles was Sie für Ihr Unternehmen brauchen", mk: "Сè што ви треба за да водите бизнис" } as T5,
  hero_sub:        { sq: "Platforma jonë gjithëpërfshirëse menaxhon çdo aspekt të operacioneve tuaja të biznesit për efikasitet maksimal dhe rritje.", en: "Our comprehensive platform manages every aspect of your business operations for maximum efficiency and growth.", es: "Nuestra plataforma integral gestiona cada aspecto de sus operaciones para la máxima eficiencia y crecimiento.", de: "Unsere umfassende Plattform verwaltet jeden Aspekt Ihrer Geschäftsabläufe für maximale Effizienz und Wachstum.", mk: "Нашата платформа управува со секој аспект од вашите бизнис операции за максимална ефикасност и раст." } as T5,
  trusted:         { sq: "I besuar nga biznese në mbarë botën", en: "Trusted by businesses worldwide", es: "Confiado por empresas en todo el mundo", de: "Von Unternehmen weltweit vertraut", mk: "Доверен од бизниси ширум светот" } as T5,
  stats_clients:   { sq: "Klientë na Besojnë", en: "Clients Trust Us", es: "Clientes que Confían en Nosotros", de: "Kunden vertrauen uns", mk: "Клиенти Нè Доверуваат" } as T5,
  stats_invoices:  { sq: "Fatura të Përpunuara", en: "Invoices Processed", es: "Facturas Procesadas", de: "Verarbeitete Rechnungen", mk: "Обработени Фактури" } as T5,
  stats_countries: { sq: "Vende në Mbarë Botën", en: "Countries Worldwide", es: "Países en Todo el Mundo", de: "Länder weltweit", mk: "Земји Ширум Светот" } as T5,
  stats_uptime:    { sq: "Besueshmëria e Kohës së Punës", en: "Uptime Reliability", es: "Fiabilidad del Tiempo de Actividad", de: "Betriebszeitverlässlichkeit", mk: "Доверливост на Работното Време" } as T5,
  features_title:  { sq: "Veçoritë që ju nevojiten. Të gjitha në një vend.", en: "The features you need. All in one place.", es: "Las características que necesitas. Todo en un lugar.", de: "Die Funktionen die Sie brauchen. Alles an einem Ort.", mk: "Функциите кои ви се потребни. Сè на едно место." } as T5,
  features_sub:    { sq: "Nga oferta, faturimi dhe shpenzimet, tek mirëmbajtja, menaxhimi i flotës dhe burimet njerëzore — Clientlly zëvendëson çdo aplikacion tjetër.", en: "From quotes, invoicing and expenses, to maintenance, fleet management and HR — Clientlly replaces every other app.", es: "Desde presupuestos, facturación y gastos, hasta mantenimiento, gestión de flotas y RRHH — Clientlly reemplaza todas las demás aplicaciones.", de: "Von Angeboten, Rechnungen und Ausgaben bis hin zu Wartung, Flottenmanagement und HR — Clientlly ersetzt alle anderen Apps.", mk: "Од понуди, фактурирање и трошоци, до одржување, управување со флота и ЧР — Clientlly ги заменува сите други апликации." } as T5,
  compare_btn:     { sq: "Krahasoni veçoritë e planeve", en: "Compare plan features", es: "Comparar características del plan", de: "Planfunktionen vergleichen", mk: "Споредете ги карактеристиките на планот" } as T5,
  grow_title:      { sq: "Le të rritemi së bashku", en: "Let's grow together", es: "Crezcamos juntos", de: "Lasst uns gemeinsam wachsen", mk: "Да растеме заедно" } as T5,
  grow_sub:        { sq: "Platforma jonë është ndërtuar bashkë me ju. Ndani idetë tuaja dhe ekipi ynë i zhvillimit do t'i zbatojë — pa kosto shtesë.", en: "Our platform is built together with you. Share your ideas and our development team will implement them — at no extra cost.", es: "Nuestra plataforma se construye junto a usted. Comparta sus ideas y nuestro equipo de desarrollo las implementará — sin costo adicional.", de: "Unsere Plattform wird gemeinsam mit Ihnen entwickelt. Teilen Sie Ihre Ideen und unser Entwicklungsteam setzt sie um — ohne zusätzliche Kosten.", mk: "Нашата платформа е изградена заедно со вас. Споделете ги вашите идеи и нашиот тим за развој ќе ги имплементира — без дополнителни трошоци." } as T5,
  grow_rapid:      { sq: "Zhvillim i Shpejtë", en: "Rapid Development", es: "Desarrollo Rápido", de: "Schnelle Entwicklung", mk: "Брз Развој" } as T5,
  grow_rapid_sub:  { sq: "Idetë tuaja bëhen realitet brenda javësh", en: "Your ideas become reality within weeks", es: "Sus ideas se hacen realidad en semanas", de: "Ihre Ideen werden innerhalb von Wochen Realität", mk: "Вашите идеи стануваат реалност за неколку недели" } as T5,
  grow_community:  { sq: "Komuniteti i Parë", en: "Community First", es: "La Comunidad Primero", de: "Community an erster Stelle", mk: "Заедницата Прва" } as T5,
  grow_com_sub:    { sq: "Platforma e ndërtuar mbi komentet tuaja", en: "Platform built on your feedback", es: "Plataforma construida sobre sus comentarios", de: "Plattform basierend auf Ihrem Feedback", mk: "Платформа изградена на вашите повратни информации" } as T5,
  grow_explore:    { sq: "Mëso Bashkëpunimin", en: "Explore Collaboration", es: "Explorar Colaboración", de: "Zusammenarbeit Erkunden", mk: "Истражи Соработка" } as T5,
  grow_your_ideas: { sq: "Idetë Tuaja", en: "Your Ideas", es: "Sus Ideas", de: "Ihre Ideen", mk: "Вашите Идеи" } as T5,
  grow_free_dev:   { sq: "Zhvillim i Personalizuar Falas", en: "Free Custom Development", es: "Desarrollo personalizado gratuito", de: "Kostenlose benutzerdefinierte Entwicklung", mk: "Бесплатен Прилагоден Развој" } as T5,
  grow_shared:     { sq: "Rritje e Përbashkët", en: "Shared Growth", es: "Crecimiento Compartido", de: "Gemeinsames Wachstum", mk: "Заеднички Раст" } as T5,
  cta_title:       { sq: "Gati të Besoni Biznesin Tuaj tek Ne?", en: "Ready to Trust Your Business With Us?", es: "Listo para confiar su negocio con nosotros?", de: "Bereit, Ihr Unternehmen uns anzuvertrauen?", mk: "Готови да го доверите вашиот бизнис на нас?" } as T5,
  cta_sub:         { sq: "Bashkohuni me bizneset që kanë transformuar operacionet e tyre me Clientlly.", en: "Join businesses that have transformed their operations with Clientlly.", es: "Únase a las empresas que han transformado sus operaciones con Clientlly.", de: "Schließen Sie sich Unternehmen an, die ihre Abläufe mit Clientlly transformiert haben.", mk: "Придружете им се на бизнисите кои ги трансформираа своите операции со Clientlly." } as T5,
  ben_time:        { sq: "Kurseni 15+ Orë në Javë", en: "Save 15+ Hours Per Week", es: "Ahorre más de 15 horas por semana", de: "Sparen Sie 15+ Stunden pro Woche", mk: "Заштедете 15+ Часа неделно" } as T5,
  ben_revenue:     { sq: "Rritni të Ardhurat me 30%", en: "Grow Revenue by 30%", es: "Aumente los ingresos un 30%", de: "Steigern Sie den Umsatz um 30%", mk: "Зголемете Приходи за 30%" } as T5,
  ben_errors:      { sq: "Eliminoni 95% të Gabimeve", en: "Eliminate 95% of Errors", es: "Elimine el 95% de los errores", de: "Eliminieren Sie 95% der Fehler", mk: "Елиминирајте 95% Грешки" } as T5,
};

// ─── SUBSCRIBE ───────────────────────────────────────────────────────────────
export const SUBSCRIBE = {
  title:           { sq: "Zgjidhni planin e përsosur për biznesin tuaj", en: "Choose the perfect plan for your business", es: "Elija el plan perfecto para su negocio", de: "Wählen Sie den perfekten Plan für Ihr Unternehmen", mk: "Изберете го совршениот план за вашиот бизнис" } as T5,
  subtitle:        { sq: "Të gjitha planet përfshijnë të gjitha 16 modulet. Ndryshon vetëm numri i përdoruesve.", en: "All plans include all 16 modules. Only the number of users differs.", es: "Todos los planes incluyen los 16 módulos. Solo difiere el número de usuarios.", de: "Alle Pläne beinhalten alle 16 Module. Nur die Anzahl der Benutzer unterscheidet sich.", mk: "Сите планови вклучуваат сите 16 модули. Се разликува само бројот на корисници." } as T5,
  billing_yearly:  { sq: "Vjetor (Kurseni 15%)", en: "Yearly (Save 15%)", es: "Anual (Ahorre 15%)", de: "Jährlich (Sparen Sie 15%)", mk: "Годишно (Заштедете 15%)" } as T5,
  step1:           { sq: "Zgjidhni Planin", en: "Choose Plan", es: "Elegir Plan", de: "Plan Wählen", mk: "Изберете План" } as T5,
  step2:           { sq: "Krijo Llogari", en: "Create Account", es: "Crear Cuenta", de: "Konto Erstellen", mk: "Создај Сметка" } as T5,
  step3:           { sq: "Ekipi & Shtesa", en: "Team & Add-ons", es: "Equipo y Complementos", de: "Team & Erweiterungen", mk: "Тим и Додатоци" } as T5,
  step4:           { sq: "Shqyrto & Paguaj", en: "Review & Pay", es: "Revisar y Pagar", de: "Überprüfen & Zahlen", mk: "Прегледај и Плати" } as T5,
  extra_user:      { sq: "+€2/përdorues shtesë (Enterprise)", en: "+€2/extra user (Enterprise)", es: "+€2/usuario adicional (Enterprise)", de: "+€2/zusätzlicher Benutzer (Enterprise)", mk: "+€2/дополнителен корисник (Enterprise)" } as T5,
  form_firstname:  { sq: "Emri", en: "First Name", es: "Nombre", de: "Vorname", mk: "Ime" } as T5,
  form_lastname:   { sq: "Mbiemri", en: "Last Name", es: "Apellido", de: "Nachname", mk: "Prezime" } as T5,
  form_email:      { sq: "Email", en: "Email", es: "Correo Electrónico", de: "E-Mail", mk: "Е-пошта" } as T5,
  form_company:    { sq: "Emri i Kompanisë", en: "Company Name", es: "Nombre de la Empresa", de: "Unternehmensname", mk: "Ime na Kompanijata" } as T5,
  form_phone:      { sq: "Numri i Telefonit", en: "Phone Number", es: "Número de Teléfono", de: "Telefonnummer", mk: "Телефонски Број" } as T5,
  form_password:   { sq: "Fjalëkalimi", en: "Password", es: "Contraseña", de: "Passwort", mk: "Лозинка" } as T5,
  agree_terms:     { sq: "Pranoj", en: "I agree to the", es: "Acepto los", de: "Ich stimme den", mk: "Се согласувам со" } as T5,
  terms:           { sq: "Kushtet e Shërbimit", en: "Terms of Service", es: "Términos de Servicio", de: "Nutzungsbedingungen", mk: "Услови на Употреба" } as T5,
  privacy:         { sq: "Politikën e Privatësisë", en: "Privacy Policy", es: "Política de Privacidad", de: "Datenschutzrichtlinie", mk: "Политика на Приватност" } as T5,
  order_summary:   { sq: "Përmbledhja e Porosisë", en: "Order Summary", es: "Resumen del Pedido", de: "Bestellübersicht", mk: "Резиме на Нарачка" } as T5,
  total:           { sq: "Totali", en: "Total", es: "Total", de: "Gesamt", mk: "Вкупно" } as T5,
  checkout:        { sq: "Vazhdo me Pagesën", en: "Proceed to Payment", es: "Proceder al Pago", de: "Zur Zahlung Fortfahren", mk: "Продолжи кон Плаќање" } as T5,
  secure:          { sq: "Pagesë e Sigurt me Stripe", en: "Secure Payment with Stripe", es: "Pago Seguro con Stripe", de: "Sichere Zahlung mit Stripe", mk: "Безбедно Плаќање со Stripe" } as T5,
};

// ─── COMPARE ─────────────────────────────────────────────────────────────────
export const COMPARE = {
  hero_badge:      { sq: "Një Platformë • Plane të Shumta", en: "One Platform • Multiple Plans", es: "Una Plataforma • Múltiples Planes", de: "Eine Plattform • Mehrere Pläne", mk: "Една Платформа • Повеќе Планови" } as T5,
  hero_title:      { sq: "Krahasoni Planet", en: "Compare Plans", es: "Comparar Planes", de: "Pläne Vergleichen", mk: "Споредете Планови" } as T5,
  hero_sub:        { sq: "Të gjitha planet përfshijnë të gjitha 16 modulet. Ndryshon vetëm numri i përdoruesve dhe faturave.", en: "All plans include all 16 modules. Only the number of users and invoices differs.", es: "Todos los planes incluyen los 16 módulos. Solo difiere el número de usuarios y facturas.", de: "Alle Pläne beinhalten alle 16 Module. Nur die Anzahl der Benutzer und Rechnungen unterscheidet sich.", mk: "Сите планови вклучуваат сите 16 модули. Се разликува само бројот на корисници и фактури." } as T5,
  table_feature:   { sq: "Veçoria", en: "Feature", es: "Característica", de: "Funktion", mk: "Функција" } as T5,
  why_one:         { sq: "Pse të gjitha planet kanë të njëjtat veçori?", en: "Why do all plans have the same features?", es: "Por qué todos los planes tienen las mismas características?", de: "Warum haben alle Pläne dieselben Funktionen?", mk: "Зошто сите планови имаат исти функции?" } as T5,
  why_one_sub:     { sq: "Besojmë se çdo biznes, pavarësisht nga madhësia, meriton akses të plotë në të gjitha mjetet.", en: "We believe every business, regardless of size, deserves full access to all tools.", es: "Creemos que cada empresa, independientemente de su tamaño, merece acceso completo a todas las herramientas.", de: "Wir glauben, dass jedes Unternehmen, unabhängig von der Größe, vollen Zugang zu allen Tools verdient.", mk: "Веруваме дека секој бизнис, без оглед на големината, заслужува целосен пристап до сите алатки." } as T5,
  cta_title:       { sq: "Gati të filloni?", en: "Ready to get started?", es: "Listo para comenzar?", de: "Bereit loszulegen?", mk: "Готови да започнете?" } as T5,
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const ABOUT = {
  hero_title:      { sq: "Rreth Clientlly", en: "About Clientlly", es: "Acerca de Clientlly", de: "Über Clientlly", mk: "За Clientlly" } as T5,
  hero_sub:        { sq: "Ne ndërtojmë software biznesi që funksionon realisht — i thjeshtë, i fuqishëm dhe i ndërtuar bashkë me klientët tanë.", en: "We build business software that actually works — simple, powerful, and built together with our clients.", es: "Construimos software empresarial que realmente funciona — simple, potente y creado junto a nuestros clientes.", de: "Wir entwickeln Unternehmenssoftware, die wirklich funktioniert — einfach, leistungsstark und gemeinsam mit unseren Kunden entwickelt.", mk: "Градиме деловен софтвер кој навистина функционира — едноставен, моќен и изграден заедно со нашите клиенти." } as T5,
  mission_title:   { sq: "Misioni Ynë", en: "Our Mission", es: "Nuestra Misión", de: "Unsere Mission", mk: "Нашата Мисија" } as T5,
  mission_text:    { sq: "T'i japim çdo biznesi të vogël dhe të mesëm mjetet e nivelit enterprise — pa çmimin e enterprise.", en: "To give every small and medium business enterprise-level tools — without the enterprise price.", es: "Dar a cada pequeña y mediana empresa herramientas de nivel empresarial — sin el precio empresarial.", de: "Jedem kleinen und mittleren Unternehmen Tools auf Enterprise-Niveau zu geben — ohne den Enterprise-Preis.", mk: "Да им дадеме на секое мало и средно претпријатие алатки на ниво на претпријатие — без цената на претпријатие." } as T5,
  journey_title:   { sq: "Udhëtimi Ynë", en: "Our Journey", es: "Nuestro Viaje", de: "Unsere Reise", mk: "Нашето Патување" } as T5,
  team_title:      { sq: "Takoni Ekipin", en: "Meet the Team", es: "Conoce al Equipo", de: "Lernen Sie das Team kennen", mk: "Запознајте го Тимот" } as T5,
  team_sub:        { sq: "Inovatorët e pasionuar që drejtojnë suksesin e Clientlly", en: "The passionate innovators driving Clientlly's success", es: "Los innovadores apasionados que impulsan el éxito de Clientlly", de: "Die leidenschaftlichen Innovatoren, die Clientllys Erfolg vorantreiben", mk: "Страствените иноватори кои го движат успехот на Clientlly" } as T5,
  grow_title:      { sq: "Le të rritemi së bashku", en: "Let's grow together", es: "Crezcamos juntos", de: "Lasst uns gemeinsam wachsen", mk: "Да растеме заедно" } as T5,
  cta_title:       { sq: "Gati të Besoni Biznesin Tuaj tek Ne?", en: "Ready to Trust Your Business With Us?", es: "Listo para confiar su negocio con nosotros?", de: "Bereit, Ihr Unternehmen uns anzuvertrauen?", mk: "Готови да го доверите вашиот бизнис на нас?" } as T5,
  values_title:    { sq: "Vlerat Tona", en: "Our Values", es: "Nuestros Valores", de: "Unsere Werte", mk: "Нашите Вредности" } as T5,
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  hero_title:      { sq: "Na Kontaktoni", en: "Get in Touch", es: "Póngase en Contacto", de: "Kontaktieren Sie Uns", mk: "Контактирајте нè" } as T5,
  hero_sub:        { sq: "Jemi këtu për t'ju ndihmuar. Dërgoni mesazhin tuaj dhe do t'ju kthehemi brenda 24 orësh.", en: "We're here to help. Send your message and we'll get back to you within 24 hours.", es: "Estamos aquí para ayudarle. Envíe su mensaje y le responderemos en 24 horas.", de: "Wir sind hier um zu helfen. Senden Sie Ihre Nachricht und wir antworten innerhalb von 24 Stunden.", mk: "Ние сме тука да помогнеме. Испратете ја пораката и ќе ви одговориме во рок од 24 часа." } as T5,
  form_title:      { sq: "Dërgoni një Mesazh", en: "Send a Message", es: "Enviar un Mensaje", de: "Senden Sie eine Nachricht", mk: "Испратете Порака" } as T5,
  form_subject:    { sq: "Subjekti", en: "Subject", es: "Asunto", de: "Betreff", mk: "Предмет" } as T5,
  form_success:    { sq: "Mesazhi u dërgua me sukses!", en: "Message sent successfully!", es: "¡Mensaje enviado con éxito!", de: "Nachricht erfolgreich gesendet!", mk: "Пораката е успешно испратена!" } as T5,
  info_address:    { sq: "Adresa", en: "Address", es: "Dirección", de: "Adresse", mk: "Адреса" } as T5,
  info_hours:      { sq: "Orët e Punës", en: "Business Hours", es: "Horario de Atención", de: "Geschäftszeiten", mk: "Работно Време" } as T5,
  grow_title:      { sq: "Le të rritemi së bashku", en: "Let's grow together", es: "Crezcamos juntos", de: "Lasst uns gemeinsam wachsen", mk: "Да растеме заедно" } as T5,
};

// ─── COLLABORATION ───────────────────────────────────────────────────────────
export const COLLAB = {
  hero_title:      { sq: "Duke Rritur Bashkë Përmes Bashkëpunimit", en: "Growing Together Through Collaboration", es: "Creciendo Juntos a Través de la Colaboración", de: "Gemeinsam Wachsen durch Zusammenarbeit", mk: "Растење Заедно Преку Соработка" } as T5,
  hero_sub:        { sq: "Ndani idetë tuaja dhe ekipi ynë i zhvillimit do t'i kthejë në realitet — falas, si pjesë e partneritetit tonë.", en: "Share your ideas and our development team will turn them into reality — free, as part of our partnership.", es: "Comparta sus ideas y nuestro equipo de desarrollo las convertirá en realidad — gratis, como parte de nuestra asociación.", de: "Teilen Sie Ihre Ideen und unser Entwicklungsteam wird sie in die Realität umsetzen — kostenlos, als Teil unserer Partnerschaft.", mk: "Споделете ги вашите идеи и нашиот тим за развој ќе ги претвори во реалност — бесплатно, како дел од нашето партнерство." } as T5,
  how_title:       { sq: "Si Funksionon", en: "How It Works", es: "Cómo Funciona", de: "So Funktioniert Es", mk: "Како Функционира" } as T5,
  step_share:      { sq: "Ndani Idetë", en: "Share Ideas", es: "Compartir Ideas", de: "Ideen Teilen", mk: "Споделете Идеи" } as T5,
  step_share_sub:  { sq: "Dërgoni idetë tuaja për veçori të reja direkt tek ekipi ynë.", en: "Submit your ideas for new features directly to our team.", es: "Envíe sus ideas para nuevas funciones directamente a nuestro equipo.", de: "Senden Sie Ihre Ideen für neue Funktionen direkt an unser Team.", mk: "Доставете ги вашите идеи за нови функции директно до нашиот тим." } as T5,
  step_build:      { sq: "Ne Ndërtojmë", en: "We Build It", es: "Nosotros lo Construimos", de: "Wir Bauen Es", mk: "Ние го Градиме" } as T5,
  step_build_sub:  { sq: "Ekipi ynë zbaton idenë tuaj brenda javësh, pa kosto shtesë.", en: "Our team implements your idea within weeks, at no extra cost.", es: "Nuestro equipo implementa su idea en semanas, sin costo adicional.", de: "Unser Team implementiert Ihre Idee innerhalb von Wochen, ohne zusätzliche Kosten.", mk: "Нашиот тим ја имплементира вашата идеја за неколку недели, без дополнителни трошоци." } as T5,
  step_grow:       { sq: "Rritemi Bashkë", en: "We Grow Together", es: "Crecemos Juntos", de: "Wir Wachsen Gemeinsam", mk: "Растеме Заедно" } as T5,
  step_grow_sub:   { sq: "Suksesi juaj është suksesi ynë. Partneritet real.", en: "Your success is our success. A real partnership.", es: "Su éxito es nuestro éxito. Una asociación real.", de: "Ihr Erfolg ist unser Erfolg. Eine echte Partnerschaft.", mk: "Вашиот успех е наш успех. Вистинско партнерство." } as T5,
  vip_title:       { sq: "Ekipi i Mbështetjes Ekspertësh", en: "Expert Support Team", es: "Equipo de Soporte Experto", de: "Expertenunterstützungsteam", mk: "Експертски Тим за Поддршка" } as T5,
  vip_dev:         { sq: "Zhvillues të Dedikuar", en: "Dedicated Developers", es: "Desarrolladores Dedicados", de: "Dedizierte Entwickler", mk: "Посветени Програмери" } as T5,
  vip_impl:        { sq: "Implementim i Shpejtë", en: "Rapid Implementation", es: "Implementación Rápida", de: "Schnelle Implementierung", mk: "Брза Имплементација" } as T5,
  success_title:   { sq: "Histori Suksesi", en: "Success Stories", es: "Historias de Éxito", de: "Erfolgsgeschichten", mk: "Успешни Приказни" } as T5,
  success_sub:     { sq: "Bizneset flasin", en: "Businesses speak", es: "Las empresas hablan", de: "Unternehmen sprechen", mk: "Бизнисите зборуваат" } as T5,
  avail_pro:       { sq: "I disponueshëm në Pro & Enterprise", en: "Available in Pro & Enterprise", es: "Disponible en Pro y Enterprise", de: "Verfügbar in Pro & Enterprise", mk: "Достапно во Pro & Enterprise" } as T5,
  cta_title:       { sq: "Gati të ndërtojmë bashkë?", en: "Ready to build together?", es: "Listos para construir juntos?", de: "Bereit gemeinsam zu bauen?", mk: "Готови да градиме заедно?" } as T5,
  cta_sub:         { sq: "Zgjidhni planin Professional ose Enterprise dhe filloni të dërgoni idetë tuaja sot.", en: "Choose the Professional or Enterprise plan and start submitting your ideas today.", es: "Elija el plan Professional o Enterprise y comience a enviar sus ideas hoy.", de: "Wählen Sie den Professional- oder Enterprise-Plan und beginnen Sie noch heute, Ihre Ideen einzureichen.", mk: "Изберете Professional или Enterprise план и започнете да ги испраќате вашите идеи денес." } as T5,
};

// ─── TRIAL ───────────────────────────────────────────────────────────────────
export const TRIAL = {
  hero_badge:      { sq: "14 Ditë Falas • Akses i Plotë", en: "14 Days Free • Full Access", es: "14 Días Gratis • Acceso Completo", de: "14 Tage kostenlos • Voller Zugang", mk: "14 Дена Бесплатно • Целосен Пристап" } as T5,
  hero_title:      { sq: "Filloni Provën Tuaj Falas", en: "Start Your Free Trial", es: "Comience su Prueba Gratuita", de: "Starten Sie Ihre kostenlose Testversion", mk: "Започнете ја Вашата Бесплатна Проба" } as T5,
  form_title:      { sq: "Gati të Filloni?", en: "Ready to Launch?", es: "Listo para Comenzar?", de: "Bereit zum Starten?", mk: "Готови да Започнете?" } as T5,
  form_sub:        { sq: "Konfiguroni llogarinë tuaj provë falas sot", en: "Set up your free trial account today", es: "Configure su cuenta de prueba gratuita hoy", de: "Richten Sie noch heute Ihr kostenloses Testkonto ein", mk: "Поставете ја вашата бесплатна пробна сметка денес" } as T5,
  start_btn:       { sq: "Filloni Provën Time Falas Tani", en: "Start My Free Trial Now", es: "Comenzar Mi Prueba Gratuita Ahora", de: "Meine kostenlose Testversion Jetzt Starten", mk: "Започни ја Мојата Бесплатна Проба Сега" } as T5,
  vip_title:       { sq: "Përvojë VIP e Mbështetjes", en: "VIP Support Experience", es: "Experiencia de Soporte VIP", de: "VIP-Support-Erfahrung", mk: "VIP Искуство за Поддршка" } as T5,
  guarantee:       { sq: "Garanci Suksesi", en: "Success Guarantee", es: "Garantía de Éxito", de: "Erfolgsgarantie", mk: "Гаранција за Успех" } as T5,
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────
export const LOGIN = {
  hero_title:      { sq: "Mirë se Vini Përsëri", en: "Welcome Back", es: "Bienvenido de Nuevo", de: "Willkommen Zurück", mk: "Добредојде Повторно" } as T5,
  hero_sub:        { sq: "Identifikohuni për të aksesuar faqen tuaj të biznesit", en: "Sign in to access your business dashboard", es: "Inicie sesión para acceder al panel de su negocio", de: "Melden Sie sich an, um auf Ihr Unternehmens-Dashboard zuzugreifen", mk: "Пријавете се за да го достапите вашиот деловен панел" } as T5,
  sign_in:         { sq: "Hyr", en: "Sign In", es: "Iniciar Sesión", de: "Anmelden", mk: "Најави Се" } as T5,
  no_account:      { sq: "Nuk keni llogari?", en: "Don't have an account?", es: "No tiene una cuenta?", de: "Kein Konto?", mk: "Немате сметка?" } as T5,
  forgot:          { sq: "Keni harruar fjalëkalimin?", en: "Forgot password?", es: "Olvidó su contraseña?", de: "Passwort vergessen?", mk: "Сте ја заборавиле лозинката?" } as T5,
  new_to:          { sq: "I ri në Clientlly?", en: "New to Clientlly?", es: "Nuevo en Clientlly?", de: "Neu bei Clientlly?", mk: "Нов во Clientlly?" } as T5,
};

// ─── FEATURES PAGE ───────────────────────────────────────────────────────────
export const FEATURES_PAGE = {
  hero_title:      { sq: "Të gjitha veçoritë që biznesi juaj ka nevojë", en: "All the features your business needs", es: "Todas las características que su negocio necesita", de: "Alle Funktionen die Ihr Unternehmen braucht", mk: "Сите функции кои вашиот бизнис ги потребува" } as T5,
  hero_sub:        { sq: "Nga oferta, faturimi dhe shpenzimet, tek mirëmbajtja, menaxhimi i flotës dhe burimet njerëzore — Clientlly zëvendëson çdo aplikacion tjetër.", en: "From quotes, invoicing and expenses, to maintenance, fleet management and HR — Clientlly replaces every other app.", es: "Desde presupuestos, facturación y gastos, hasta mantenimiento, gestión de flotas y RRHH — Clientlly reemplaza todas las demás aplicaciones.", de: "Von Angeboten, Rechnungen und Ausgaben bis hin zu Wartung, Flottenmanagement und HR — Clientlly ersetzt alle anderen Apps.", mk: "Од понуди, фактурирање и трошоци, до одржување, управување со флота и ЧР — Clientlly ги заменува сите други апликации." } as T5,
  modules_title:   { sq: "16 Module të Integruara", en: "16 Integrated Modules", es: "16 Módulos Integrados", de: "16 Integrierte Module", mk: "16 Интегрирани Модули" } as T5,
  explore:         { sq: "Eksploro", en: "Explore", es: "Explorar", de: "Erkunden", mk: "Истражи" } as T5,
  contact_cta:     { sq: "Keni pyetje? Na kontaktoni.", en: "Have questions? Contact us.", es: "Tiene preguntas? Contáctenos.", de: "Haben Sie Fragen? Kontaktieren Sie uns.", mk: "Имате прашања? Контактирајте нè." } as T5,
};

// ─── SHARED FEATURE DETAIL PAGES ─────────────────────────────────────────────
export const FEAT = {
  back:            { sq: "Kthehu te Veçoritë", en: "Back to Features", es: "Volver a Características", de: "Zurück zu Funktionen", mk: "Назад кон Функции" } as T5,
  overview:        { sq: "Pasqyrë", en: "Overview", es: "Descripción General", de: "Übersicht", mk: "Преглед" } as T5,
  features_tab:    { sq: "Veçoritë", en: "Features", es: "Características", de: "Funktionen", mk: "Функции" } as T5,
  demo:            { sq: "Demo", en: "Demo", es: "Demo", de: "Demo", mk: "Демо" } as T5,
  what_say:        { sq: "Çfarë thonë klientët tanë", en: "What our clients say", es: "Lo que dicen nuestros clientes", de: "Was unsere Kunden sagen", mk: "Што велат нашите клиенти" } as T5,
  ready:           { sq: "Gati të filloni?", en: "Ready to get started?", es: "Listo para comenzar?", de: "Bereit loszulegen?", mk: "Готови да започнете?" } as T5,
  trust_title:     { sq: "Pse bizneset na besojnë", en: "Why businesses trust us", es: "Por qué las empresas confían en nosotros", de: "Warum Unternehmen uns vertrauen", mk: "Зошто бизнисите нè доверуваат" } as T5,
  // Feature names
  invoicing:       { sq: "Faturim Profesional", en: "Professional Invoicing", es: "Facturación Profesional", de: "Professionelle Rechnungsstellung", mk: "Професионално Фактурирање" } as T5,
  expenses:        { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking", es: "Seguimiento de Gastos", de: "Ausgabenverfolgung", mk: "Следење Трошоци" } as T5,
  debt:            { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de Deudas", de: "Schuldenmanagement", mk: "Управување со Долгови" } as T5,
  reports:         { sq: "Raporte & Analitikë", en: "Reports & Analytics", es: "Informes y Análisis", de: "Berichte & Analysen", mk: "Извештаи & Аналитика" } as T5,
  clients:         { sq: "Menaxhim Klientësh", en: "Client Management", es: "Gestión de Clientes", de: "Kundenverwaltung", mk: "Управување со Клиенти" } as T5,
  vendors:         { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de Proveedores", de: "Lieferantenverwaltung", mk: "Управување со Добавувачи" } as T5,
  inventory:       { sq: "Menaxhim Inventari", en: "Inventory Management", es: "Gestión de Inventario", de: "Bestandsverwaltung", mk: "Управување со Залихи" } as T5,
  attendance:      { sq: "Prezencë e Zgjuar", en: "Smart Attendance", es: "Asistencia Inteligente", de: "Intelligente Anwesenheit", mk: "Паметно Присуство" } as T5,
  hr:              { sq: "Burimet Njerëzore", en: "HR Management", es: "Gestión de RRHH", de: "Personalverwaltung", mk: "Управување со ЧР" } as T5,
  calendar:        { sq: "Kalendar i Zgjuar", en: "Smart Calendar", es: "Calendario Inteligente", de: "Intelligenter Kalender", mk: "Паметен Календар" } as T5,
  fleet:           { sq: "Menaxhim Flote", en: "Fleet Management", es: "Gestión de Flotas", de: "Flottenmanagement", mk: "Управување со Флота" } as T5,
  maintenance:     { sq: "Mirëmbajtje & Servisim", en: "Maintenance & Service", es: "Mantenimiento y Servicio", de: "Wartung & Service", mk: "Одржување & Сервис" } as T5,
  quotes:          { sq: "Oferta & Kuota", en: "Quotes & Offers", es: "Presupuestos y Ofertas", de: "Angebote & Quotes", mk: "Понуди & Кватации" } as T5,
  payroll:         { sq: "Pagat & Paga", en: "Payroll", es: "Nómina", de: "Gehaltsabrechnung", mk: "Плати" } as T5,
  leaves:          { sq: "Menaxhim Lejesh", en: "Leave Management", es: "Gestión de Permisos", de: "Urlaubsverwaltung", mk: "Управување со Отсуства" } as T5,
  buyer_cards:     { sq: "Kartelat e Blerësit", en: "Buyer Cards", es: "Tarjetas de Comprador", de: "Käuferkarten", mk: "Картички на Купувачи" } as T5,
  training:        { sq: "Trajnim & Zhvillim", en: "Training & Development", es: "Formación y Desarrollo", de: "Training & Entwicklung", mk: "Обука & Развој" } as T5,
};

// ─── CHATBOT ─────────────────────────────────────────────────────────────────
export const CHAT = {
  title:           { sq: "Mbështetja Clientlly", en: "Clientlly Support", es: "Soporte Clientlly", de: "Clientlly Support", mk: "Clientlly Поддршка" } as T5,
  subtitle:        { sq: "Bot AI • Online", en: "AI Bot • Online", es: "Bot IA • En Línea", de: "KI-Bot • Online", mk: "AI Бот • Онлајн" } as T5,
  placeholder:     { sq: "Shkruani pyetjen tuaj...", en: "Type your question...", es: "Escriba su pregunta...", de: "Schreiben Sie Ihre Frage...", mk: "Напишете го вашето прашање..." } as T5,
  greeting:        { sq: "Mirë se vini! Jam asistenti i Clientlly. Si mund t'ju ndihmoj sot?", en: "Welcome! I'm the Clientlly assistant. How can I help you today?", es: "¡Bienvenido! Soy el asistente de Clientlly. En qué puedo ayudarle hoy?", de: "Willkommen! Ich bin der Clientlly-Assistent. Wie kann ich Ihnen heute helfen?", mk: "Добредојдовте! Јас сум Clientlly асистентот. Како можам да ви помогнам денес?" } as T5,
  quick_pricing:   { sq: "Çmimet", en: "Pricing", es: "Precios", de: "Preise", mk: "Цени" } as T5,
  quick_features:  { sq: "Veçoritë", en: "Features", es: "Características", de: "Funktionen", mk: "Функции" } as T5,
  quick_trial:     { sq: "Prova Falas", en: "Free Trial", es: "Prueba Gratuita", de: "Kostenlose Testversion", mk: "Бесплатна Проба" } as T5,
  quick_support:   { sq: "Mbështetje", en: "Support", es: "Soporte", de: "Support", mk: "Поддршка" } as T5,
  typing:          { sq: "Duke shkruar...", en: "Typing...", es: "Escribiendo...", de: "Tippt...", mk: "Пишува..." } as T5,
  resp_pricing:    { sq: "Planet tona: Starter €25/muaj (1 përdorues), Professional €35/muaj (deri 5), Enterprise €50/muaj (deri 20, +€2 shtesë). Të gjitha planet përfshijnë 16 module.", en: "Our plans: Starter €25/month (1 user), Professional €35/month (up to 5), Enterprise €50/month (up to 20, +€2 extra). All plans include 16 modules.", es: "Nuestros planes: Starter €25/mes (1 usuario), Professional €35/mes (hasta 5), Enterprise €50/mes (hasta 20, +€2 extra). Todos incluyen 16 módulos.", de: "Unsere Pläne: Starter €25/Monat (1 Benutzer), Professional €35/Monat (bis zu 5), Enterprise €50/Monat (bis zu 20, +€2 extra). Alle Pläne beinhalten 16 Module.", mk: "Нашите планови: Starter €25/месец (1 корисник), Professional €35/месец (до 5), Enterprise €50/месец (до 20, +€2 дополнително). Сите планови вклучуваат 16 модули." } as T5,
  resp_features:   { sq: "Clientlly përfshin 16 module: Faturim, Shpenzime, Borxhe, Raporte, Klientë, Furnitorë, Inventar, Prezencë GPS, HR, Kalendar, Flotë, Mirëmbajtje, Oferta, Pagat, Leje dhe Trajnim.", en: "Clientlly includes 16 modules: Invoicing, Expenses, Debt, Reports, Clients, Vendors, Inventory, GPS Attendance, HR, Calendar, Fleet, Maintenance, Quotes, Payroll, Leaves and Training.", es: "Clientlly incluye 16 módulos: Facturación, Gastos, Deudas, Informes, Clientes, Proveedores, Inventario, Asistencia GPS, RRHH, Calendario, Flotas, Mantenimiento, Presupuestos, Nómina, Permisos y Formación.", de: "Clientlly umfasst 16 Module: Rechnungen, Ausgaben, Schulden, Berichte, Kunden, Lieferanten, Inventar, GPS-Anwesenheit, HR, Kalender, Flotte, Wartung, Angebote, Gehaltsabrechnung, Urlaub und Training.", mk: "Clientlly вклучува 16 модули: Фактурирање, Трошоци, Долгови, Извештаи, Клиенти, Добавувачи, Залихи, GPS Присуство, ЧР, Календар, Флота, Одржување, Понуди, Плати, Отсуства и Обука." } as T5,
  resp_trial:      { sq: "Filloni provën 14-ditore falas! Asnjë kartë krediti nuk kërkohet. Vizitoni faqen e provës tonë.", en: "Start your 14-day free trial! No credit card required. Visit our trial page.", es: "¡Comience su prueba gratuita de 14 días! Sin tarjeta de crédito. Visite nuestra página de prueba.", de: "Starten Sie Ihre 14-tägige kostenlose Testversion! Keine Kreditkarte erforderlich. Besuchen Sie unsere Testseite.", mk: "Започнете ја вашата 14-дневна бесплатна проба! Не е потребна кредитна картичка. Посетете ја нашата страница за проба." } as T5,
  resp_support:    { sq: "Ekipi ynë i mbështetjes është i disponueshëm 24/7. Na kontaktoni në info@clientlly.com ose vizitoni faqen e kontaktit.", en: "Our support team is available 24/7. Contact us at info@clientlly.com or visit our contact page.", es: "Nuestro equipo de soporte está disponible 24/7. Contáctenos en info@clientlly.com o visite nuestra página de contacto.", de: "Unser Support-Team ist 24/7 verfügbar. Kontaktieren Sie uns unter info@clientlly.com oder besuchen Sie unsere Kontaktseite.", mk: "Нашиот тим за поддршка е достапен 24/7. Контактирајте нè на info@clientlly.com или посетете ја нашата страница за контакт." } as T5,
  resp_default:    { sq: "Faleminderit për mesazhin tuaj! Ekipi ynë do t'ju ndihmojë shpejt. A keni pyetje specifike rreth çmimeve, veçorive ose mbështetjes?", en: "Thank you for your message! Our team will help you shortly. Do you have a specific question about pricing, features or support?", es: "¡Gracias por su mensaje! Nuestro equipo le ayudará pronto. Tiene alguna pregunta específica sobre precios, funciones o soporte?", de: "Danke für Ihre Nachricht! Unser Team hilft Ihnen in Kürze. Haben Sie eine spezifische Frage zu Preisen, Funktionen oder Support?", mk: "Ви благодариме за вашата порака! Нашиот тим ќе ви помогне наскоро. Дали имате конкретно прашање за цените, функциите или поддршката?" } as T5,
};

// ─── PLAN FEATURES (client-side translations of server plan strings) ──────────
export const PLAN_F = {
  starter_users:   { sq: "**1 përdorues**", en: "**1 user**", es: "**1 usuario**", de: "**1 Benutzer**", mk: "**1 корисник**" } as T5,
  pro_users:       { sq: "**Deri në 5 përdorues**", en: "**Up to 5 users**", es: "**Hasta 5 usuarios**", de: "**Bis zu 5 Benutzern**", mk: "**До 5 корисници**" } as T5,
  ent_users:       { sq: "**Deri në 20 përdorues** (€2/përdorues shtesë)", en: "**Up to 20 users** (€2/extra user)", es: "**Hasta 20 usuarios** (€2/usuario extra)", de: "**Bis zu 20 Benutzer** (€2/zusätzlicher Benutzer)", mk: "**До 20 корисници** (€2/дополнителен корисник)" } as T5,
  invoices_unl:    { sq: "Fatura të Pakufizuara", en: "Unlimited Invoices", es: "Facturas Ilimitadas", de: "Unbegrenzte Rechnungen", mk: "Неограничени Фактури" } as T5,
  quotes_f:        { sq: "Ofertat", en: "Quotes", es: "Presupuestos", de: "Angebote", mk: "Понуди" } as T5,
  expenses_f:      { sq: "Gjurmim Shpenzimesh", en: "Expense Tracking", es: "Seguimiento de Gastos", de: "Ausgabenverfolgung", mk: "Следење Трошоци" } as T5,
  debt_f:          { sq: "Menaxhim Borxhesh", en: "Debt Management", es: "Gestión de Deudas", de: "Schuldenmanagement", mk: "Управување со Долгови" } as T5,
  reports_f:       { sq: "Raporte & Analitikë", en: "Reports & Analytics", es: "Informes y Análisis", de: "Berichte & Analysen", mk: "Извештаи & Аналитика" } as T5,
  buyer_cards_f:   { sq: "Kartelat e Blerësit", en: "Buyer Cards", es: "Tarjetas de Comprador", de: "Käuferkarten", mk: "Картички на Купувачи" } as T5,
  clients_f:       { sq: "Menaxhim Klientësh", en: "Client Management", es: "Gestión de Clientes", de: "Kundenverwaltung", mk: "Управување со Клиенти" } as T5,
  vendors_f:       { sq: "Menaxhim Furnitorësh", en: "Vendor Management", es: "Gestión de Proveedores", de: "Lieferantenverwaltung", mk: "Управување со Добавувачи" } as T5,
  inventory_f:     { sq: "Menaxhim Inventari", en: "Inventory Management", es: "Gestión de Inventario", de: "Bestandsverwaltung", mk: "Управување со Залихи" } as T5,
  maintenance_f:   { sq: "Mirëmbajtje & Servisim i Automjeteve", en: "Vehicle Maintenance & Service", es: "Mantenimiento y Servicio de Vehículos", de: "Fahrzeugwartung & Service", mk: "Одржување и Сервисирање на Возила" } as T5,
  attendance_f:    { sq: "Prezencë (GPS)", en: "Attendance (GPS)", es: "Asistencia (GPS)", de: "Anwesenheit (GPS)", mk: "Присуство (GPS)" } as T5,
  hr_f:            { sq: "Burimet Njerëzore", en: "Human Resources", es: "Recursos Humanos", de: "Personalwesen", mk: "Човечки Ресурси" } as T5,
  calendar_f:      { sq: "Kalendari", en: "Calendar", es: "Calendario", de: "Kalender", mk: "Календар" } as T5,
  mobile_f:        { sq: "Akses aplikacioni mobil", en: "Mobile App Access", es: "Acceso a la Aplicación Móvil", de: "Mobiler App-Zugang", mk: "Пристап до Мобилна Апликација" } as T5,
  api_f:           { sq: "Integrime API", en: "API Integrations", es: "Integraciones de API", de: "API-Integrationen", mk: "API Интеграции" } as T5,
  security_f:      { sq: "Siguri bankare & mbrojtje e të dhënave", en: "Bank-level security & data protection", es: "Seguridad bancaria y protección de datos", de: "Bankensicherheit & Datenschutz", mk: "Банкарска безбедност & заштита на податоци" } as T5,
  support_f:       { sq: "Mbështetje 24/7", en: "24/7 Support", es: "Soporte 24/7", de: "24/7 Support", mk: "Поддршка 24/7" } as T5,
  grow_pro_f:      { sq: "**Le të Rritemi Bashkë** — Zhvillim falas i veçorive", en: "**Let's Grow Together** — Free feature development", es: "**Crezcamos Juntos** — Desarrollo de funciones gratuito", de: "**Lass uns gemeinsam wachsen** — Kostenlose Funktionsentwicklung", mk: "**Да Растеме Заедно** — Бесплатен развој на функции" } as T5,
  grow_ent_f:      { sq: "**Le të Rritemi Bashkë** — Zhvillim prioritar i personalizuar", en: "**Let's Grow Together** — Priority custom development", es: "**Crezcamos Juntos** — Desarrollo personalizado prioritario", de: "**Lass uns gemeinsam wachsen** — Prioritäre individuelle Entwicklung", mk: "**Да Растеме Заедно** — Приоритетен прилагоден развој" } as T5,
};
