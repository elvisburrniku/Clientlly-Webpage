import { ArrowLeft, ArrowRight, TrendingUp, Clock, CheckCircle, BarChart3, FileText, Briefcase, Star } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import clientllyLogo from "@assets/CLIENTLLY_ICON_1753793353861.png";
import Footer from "@/components/Footer";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element {
  switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; }
}

export default function CaseStudies() {
  const { currentLanguage: lang } = useLanguage();

  const studies = [
    {
      logo: "TN", color: "bg-indigo-600",
      company: "Truly Nolen",
      industry: sq(lang, "Shërbime Profesionale & Kontrolli i Dëmtuesve", "Professional Services & Pest Control", "Servicios profesionales y control de plagas", "Professionelle Dienstleistungen & Schädlingsbekämpfung", "Професионални услуги и контрола на штетници"),
      location: "Prishtinë, Kosovë",
      size: sq(lang, "45 punonjës", "45 employees", "45 empleados", "45 Mitarbeiter", "45 вработени"),
      metrics: [
        { v: "72%", l: sq(lang, "Kursim kohe administrative", "Administrative time saved", "Tiempo administrativo ahorrado", "Verwaltungszeit gespart", "Заштедено административно време"), icon: Clock },
        { v: "€95K", l: sq(lang, "Arkëtuar brenda 30 ditësh", "Collected within 30 days", "Cobrado en 30 días", "Innerhalb von 30 Tagen eingezogen", "Наплатено во рок од 30 дена"), icon: TrendingUp },
        { v: "4×", l: sq(lang, "Shpejtësi fakturimi", "Invoicing speed", "Velocidad de facturación", "Rechnungsgeschwindigkeit", "Брзина на фактурирање"), icon: FileText },
      ],
      modules: [sq(lang,"Faturim","Invoicing","Facturación","Rechnungsstellung","Фактурирање"), sq(lang,"Klientë","Clients","Clientes","Kunden","Клиенти"), sq(lang,"Raporte","Reports","Informes","Berichte","Извештаи"), sq(lang,"Shpenzime","Expenses","Gastos","Ausgaben","Трошоци")],
      challenge: sq(lang,
        "Truly Nolen menaxhonte qindra kontrata shërbimi dhe fatura mujore për klientë biznesi e rezidencial. Procesi manual në Excel shkaktonte gabime dhe vonesa — shumë klientë nuk merrnin faturën në kohë dhe ekipi humbisnin orë duke ndjekur pagesat.",
        "Truly Nolen managed hundreds of service contracts and monthly invoices for business and residential clients. The manual Excel process caused errors and delays — many clients didn't receive invoices on time and the team wasted hours chasing payments.",
        "Truly Nolen gestionaba cientos de contratos de servicio y facturas mensuales para clientes comerciales y residenciales. El proceso manual en Excel causaba errores y retrasos — muchos clientes no recibían las facturas a tiempo y el equipo perdía horas persiguiendo pagos.",
        "Truly Nolen verwaltete Hunderte von Serviceverträgen und monatlichen Rechnungen für Geschäfts- und Privatkunden. Der manuelle Excel-Prozess verursachte Fehler und Verzögerungen — viele Kunden erhielten die Rechnungen nicht rechtzeitig und das Team verschwendete Stunden mit der Verfolgung von Zahlungen.",
        "Truly Nolen управуваше со стотици договори за услуги и месечни фактури за деловни и резиденцијални клиенти. Рачниот процес во Excel предизвикуваше грешки и задоцнувања — многу клиенти не ги добиваа фактурите навреме и тимот губеше часови во потрага по плаќања."
      ),
      solution: sq(lang,
        "Me Clientlly, Truly Nolen automatizoi faturimin e kontratave periodike. Klientët marrin fatura automatike me PDF profesional, njoftime 5 ditë para afatit dhe link pagese online. Menaxheri financiar monitoron statusin e çdo kontrate nga dashbordi.",
        "With Clientlly, Truly Nolen automated periodic contract invoicing. Clients receive automatic invoices with professional PDF, reminders 5 days before the due date and an online payment link. The financial manager monitors every contract's status from the dashboard.",
        "Con Clientlly, Truly Nolen automatizó la facturación de contratos periódicos. Los clientes reciben facturas automáticas con PDF profesional, recordatorios 5 días antes del vencimiento y un enlace de pago en línea. El gerente financiero monitorea el estado de cada contrato desde el panel.",
        "Mit Clientlly automatisierte Truly Nolen die periodische Vertragsabrechnung. Kunden erhalten automatische Rechnungen mit professionellem PDF, Erinnerungen 5 Tage vor Fälligkeit und einen Online-Zahlungslink. Der Finanzmanager überwacht den Status jedes Vertrags über das Dashboard.",
        "Со Clientlly, Truly Nolen го автоматизираше фактурирањето на периодични договори. Клиентите добиваат автоматски фактури со професионален PDF, потсетници 5 дена пред рокот и линк за онлајн плаќање. Финансискиот менаџер го следи статусот на секој договор од контролната табла."
      ),
      quote: sq(lang,
        "Clientlly na ndihmoi të kalojmë nga Excel kaotik në sistem profesional brenda ditësh. Pagesat kanë ardhur 3 herë më shpejt.",
        "Clientlly helped us go from chaotic Excel to a professional system within days. Payments have come in 3x faster.",
        "Clientlly nos ayudó a pasar de un Excel caótico a un sistema profesional en días. Los pagos llegaron 3 veces más rápido.",
        "Clientlly hat uns geholfen, innerhalb von Tagen von chaotischem Excel zu einem professionellen System zu wechseln. Zahlungen kommen 3x schneller.",
        "Clientlly ни помогна да преминеме од хаотичен Excel кон професионален систем за неколку дена. Плаќањата пристигнуваат 3 пати побрзо."
      ),
      author: "Erjon Malaj", role: sq(lang, "Drejtor Operacionesh", "Operations Director", "Director de Operaciones", "Betriebsleiter", "Директор на операции"),
    },
    {
      logo: "SL", color: "bg-violet-600",
      company: "Scentlinqpro",
      industry: sq(lang, "Produkte & Tregti Online", "Products & E-commerce", "Productos y comercio electrónico", "Produkte & E-Commerce", "Производи и е-трговија"),
      location: "Prishtinë, Kosovë",
      size: sq(lang, "18 punonjës", "18 employees", "18 empleados", "18 Mitarbeiter", "18 вработени"),
      metrics: [
        { v: "98%", l: sq(lang, "Fatura të paguara në kohë", "Invoices paid on time", "Facturas pagadas a tiempo", "Rechnungen pünktlich bezahlt", "Фактури платени навреме"), icon: CheckCircle },
        { v: "€180K", l: sq(lang, "Xhiro vjetore e menaxhuar", "Annual revenue managed", "Ingresos anuales gestionados", "Verwalteter Jahresumsatz", "Управуван годишен приход"), icon: BarChart3 },
        { v: "55%", l: sq(lang, "Ulje e kohës së administrimit", "Reduction in admin time", "Reducción del tiempo administrativo", "Reduzierung der Verwaltungszeit", "Намалување на административното време"), icon: TrendingUp },
      ],
      modules: [sq(lang,"Faturim","Invoicing","Facturación","Rechnungsstellung","Фактурирање"), sq(lang,"Shpenzime","Expenses","Gastos","Ausgaben","Трошоци"), sq(lang,"Inventar","Inventory","Inventario","Inventar","Инвентар"), sq(lang,"Klientë","Clients","Clientes","Kunden","Клиенти")],
      challenge: sq(lang,
        "Scentlinqpro, distributor i parfumeve premium, kishte vështirësi në gjurmimin e stokut, faturimin e shpërndarësve dhe menaxhimin e shpenzimeve të importit. Tre sisteme të ndryshme krijonte konfuzion dhe të dhëna jo të sinkronizuara.",
        "Scentlinqpro, a premium fragrance distributor, struggled with tracking stock, invoicing distributors and managing import expenses. Three separate systems created confusion and unsynchronised data.",
        "Scentlinqpro, un distribuidor de fragancias premium, tenía dificultades para rastrear el inventario, facturar a los distribuidores y gestionar los gastos de importación. Tres sistemas separados creaban confusión y datos no sincronizados.",
        "Scentlinqpro, ein Premium-Parfüm-Distributor, hatte Schwierigkeiten bei der Bestandsverfolgung, der Rechnungsstellung an Distributoren und der Verwaltung von Importkosten. Drei separate Systeme verursachten Verwirrung und nicht synchronisierte Daten.",
        "Scentlinqpro, дистрибутер на премиум парфеми, имаше потешкотии со следење на залихите, фактурирање на дистрибутерите и управување со трошоците за увоз. Три одделни системи создаваа конфузија и несинхронизирани податоци."
      ),
      solution: sq(lang,
        "Clientlly bashkoi inventarin, faturimin dhe shpenzimet në një platformë. Tani Scentlinqpro gjurmon çdo shishe në stok, gjeneron fatura për shpërndarësit automatikisht dhe sheh marzhin real të çdo produkti. Eksporti i raporteve bëhet me një klik.",
        "Clientlly unified inventory, invoicing and expenses in one platform. Now Scentlinqpro tracks every bottle in stock, automatically generates invoices for distributors and sees the real margin of each product. Report export happens with one click.",
        "Clientlly unificó inventario, facturación y gastos en una plataforma. Ahora Scentlinqpro rastrea cada botella en stock, genera facturas automáticamente para distribuidores y ve el margen real de cada producto. La exportación de informes se hace con un clic.",
        "Clientlly vereinte Inventar, Rechnungsstellung und Ausgaben auf einer Plattform. Jetzt verfolgt Scentlinqpro jede Flasche im Lager, erstellt automatisch Rechnungen für Distributoren und sieht die reale Marge jedes Produkts. Der Berichtsexport erfolgt mit einem Klick.",
        "Clientlly ги обедини инвентарот, фактурирањето и трошоците на една платформа. Сега Scentlinqpro го следи секое шише на залиха, автоматски генерира фактури за дистрибутерите и го гледа реалниот маржа на секој производ. Извозот на извештаи се прави со еден клик."
      ),
      quote: sq(lang,
        "Tani e dimë saktësisht sa fitojmë nga çdo produkt. Clientlly na dha kontroll të plotë të biznesit.",
        "Now we know exactly how much we make from every product. Clientlly gave us complete business control.",
        "Ahora sabemos exactamente cuánto ganamos con cada producto. Clientlly nos dio el control total del negocio.",
        "Jetzt wissen wir genau, wie viel wir mit jedem Produkt verdienen. Clientlly gab uns die vollständige Geschäftskontrolle.",
        "Сега знаеме точно колку заработуваме од секој производ. Clientlly ни даде целосна контрола над бизнисот."
      ),
      author: "Drita Krasniqi", role: sq(lang, "Pronare & CEO", "Owner & CEO", "Propietaria y CEO", "Inhaberin & CEO", "Сопственичка и CEO"),
    },
    {
      logo: "ME", color: "bg-emerald-600",
      company: "Mediterra Import-Export",
      industry: sq(lang, "Tregti dhe Shpërndarje", "Trade & Distribution", "Comercio y distribución", "Handel & Vertrieb", "Трговија и дистрибуција"),
      location: "Shkup, Maqedoni e Veriut",
      size: sq(lang, "45 punonjës", "45 employees", "45 empleados", "45 Mitarbeiter", "45 вработени"),
      metrics: [
        { v: "€2.1M", l: sq(lang, "Fatura të menaxhuara/vit", "Invoices managed/year", "Facturas gestionadas/año", "Verwaltete Rechnungen/Jahr", "Управувани фактури/година"), icon: FileText },
        { v: "22%", l: sq(lang, "Ulje e borxheve të këqija", "Bad debt reduction", "Reducción de deudas incobrables", "Reduzierung von Forderungsausfällen", "Намалување на лоши долгови"), icon: TrendingUp },
        { v: "8 min", l: sq(lang, "Kohë mesatare fakturimi", "Average invoicing time", "Tiempo promedio de facturación", "Durchschnittliche Rechnungszeit", "Просечно време за фактурирање"), icon: Clock },
      ],
      modules: [sq(lang,"Faturim","Invoicing","Facturación","Rechnungsstellung","Фактурирање"), sq(lang,"Furnitorë","Vendors","Proveedores","Lieferanten","Добавувачи"), sq(lang,"Inventar","Inventory","Inventario","Inventar","Инвентар"), sq(lang,"Borxhe","Debt","Deudas","Schulden","Долгови")],
      challenge: sq(lang,
        "Mediterra menaxhonte mbi 200 furnitorë dhe 150 klientë në sisteme të ndryshme. Borxhet e vonuara dhe inventari ishin të pa-sinkronizuara, duke shkaktuar humbje financiare. Menaxheri duhej të kontrollonte 3 sisteme çdo ditë.",
        "Mediterra managed over 200 suppliers and 150 clients across different systems. Overdue debts and inventory were unsynchronized, causing financial losses. The manager had to check 3 systems daily.",
        "Mediterra gestionaba más de 200 proveedores y 150 clientes en diferentes sistemas. Las deudas vencidas y el inventario no estaban sincronizados, causando pérdidas financieras. El gerente tenía que revisar 3 sistemas diariamente.",
        "Mediterra verwaltete über 200 Lieferanten und 150 Kunden in verschiedenen Systemen. Überfällige Schulden und Inventar waren nicht synchronisiert, was zu finanziellen Verlusten führte. Der Manager musste täglich 3 Systeme überprüfen.",
        "Mediterra управуваше со над 200 добавувачи и 150 клиенти во различни системи. Доспеаните долгови и инвентарот не беа синхронизирани, што предизвикуваше финансиски загуби. Менаџерот мораше да проверува 3 системи секојдневно."
      ),
      solution: sq(lang,
        "Clientlly centralizoi menaxhimin e furnitorëve, klientëve dhe inventarit. Sistemi i borxheve tregon automatikisht kush ka detyrime dhe menaxheri financiar merr raport ditor automatik. Procesi i blerjes dhe shitjes tani është i lidhur plotësisht.",
        "Clientlly centralized supplier, client and inventory management. The debt system automatically shows who has obligations and the financial manager receives an automatic daily report. The buying and selling process is now fully connected.",
        "Clientlly centralizó la gestión de proveedores, clientes e inventario. El sistema de deudas muestra automáticamente quién tiene obligaciones y el gerente financiero recibe un informe diario automático. El proceso de compra y venta ahora está completamente conectado.",
        "Clientlly zentralisierte die Lieferanten-, Kunden- und Bestandsverwaltung. Das Schuldensystem zeigt automatisch, wer Verpflichtungen hat, und der Finanzmanager erhält einen automatischen täglichen Bericht. Der Kauf- und Verkaufsprozess ist jetzt vollständig verbunden.",
        "Clientlly го централизираше управувањето со добавувачи, клиенти и инвентар. Системот за долгови автоматски покажува кој има обврски и финансискиот менаџер добива автоматски дневен извештај. Процесот на купување и продавање сега е целосно поврзан."
      ),
      quote: sq(lang,
        "Kemi kursyer mbi €15,000 në vit vetëm duke eleminuar faturat e dyfishta dhe borxhet e pa-gjurmuara.",
        "We saved over €15,000 per year just by eliminating duplicate invoices and untracked debts.",
        "Ahorramos más de €15.000 al año solo eliminando facturas duplicadas y deudas no rastreadas.",
        "Wir haben über 15.000 € pro Jahr gespart, allein durch die Beseitigung doppelter Rechnungen und nicht verfolgter Schulden.",
        "Заштедивме над 15.000 € годишно само со елиминирање на дупликат фактури и неследени долгови."
      ),
      author: "Besnik Aliu", role: sq(lang, "Drejtor i Operacioneve", "Director of Operations", "Director de Operaciones", "Betriebsleiter", "Директор на операции"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex items-center h-16">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img src={clientllyLogo} alt="Clientlly" className="h-8 w-10 object-contain" />
              <span className="text-base font-bold text-gray-900">Clientlly</span>
            </Link>
            <button onClick={() => window.history.back()}
              className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />{sq(lang, "Kthehu", "Back", "Volver", "Zurück", "Назад")}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
            <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">{sq(lang, "Studimet e Rasteve", "Case Studies", "Casos de estudio", "Fallstudien", "Студии на случај")}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {sq(lang,
              <>Si bizneset reale<br /><span className="text-indigo-600">rriten me Clientlly</span></>,
              <>How real businesses<br /><span className="text-indigo-600">grow with Clientlly</span></>,
              <>Cómo los negocios reales<br /><span className="text-indigo-600">crecen con Clientlly</span></>,
              <>Wie echte Unternehmen<br /><span className="text-indigo-600">mit Clientlly wachsen</span></>,
              <>Како реалните бизниси<br /><span className="text-indigo-600">растат со Clientlly</span></>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10">
            {sq(lang,
              "Histori të vërteta nga biznese të ndryshme që kanë transformuar operacionet e tyre duke përdorur Clientlly.",
              "Real stories from businesses that have transformed their operations using Clientlly.",
              "Historias reales de negocios que han transformado sus operaciones usando Clientlly.",
              "Echte Geschichten von Unternehmen, die ihre Abläufe mit Clientlly transformiert haben.",
              "Вистински приказни од бизниси кои ги трансформирале своите операции користејќи Clientlly."
            )}
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100 max-w-sm">
            {[
              { v:"200+", l: sq(lang,"Biznese aktive","Active businesses","Negocios activos","Aktive Unternehmen","Активни бизниси") },
              { v:"98%",  l: sq(lang,"Kënaqësi klientësh","Customer satisfaction","Satisfacción del cliente","Kundenzufriedenheit","Задоволство на клиентите") },
              { v:"€12M+",l: sq(lang,"Fatura të përpunuara","Invoices processed","Facturas procesadas","Verarbeitete Rechnungen","Обработени фактури") },
            ].map((s,i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-gray-900">{s.v}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {studies.map((s, idx) => (
            <article key={idx}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center text-white font-extrabold text-base flex-shrink-0`}>
                    {s.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{s.company}</h2>
                    <p className="text-sm text-gray-400">{s.industry} · {s.location} · {s.size}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.modules.map((m,i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{m}</span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {s.metrics.map((m,i) => {
                  const Icon = m.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-500 mb-3" />
                      <p className="text-2xl font-extrabold text-gray-900">{m.v}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{m.l}</p>
                    </div>
                  );
                })}
              </div>

              {/* Challenge / Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Sfida","Challenge","Desafío","Herausforderung","Предизвик")}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">{sq(lang,"Zgjidhja","Solution","Solución","Lösung","Решение")}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.solution}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-1">
                <p className="text-base font-medium text-gray-800 italic leading-relaxed mb-3">"{s.quote}"</p>
                <footer className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {s.logo}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{s.author}</p>
                    <p className="text-xs text-gray-400">{s.role}, {s.company}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {sq(lang,
              <>Historia juaj mund të jetë <span className="text-indigo-400">tjetra</span></>,
              <>Your story could be <span className="text-indigo-400">the next one</span></>,
              <>Su historia podría ser <span className="text-indigo-400">la siguiente</span></>,
              <>Ihre Geschichte könnte <span className="text-indigo-400">die nächste sein</span></>,
              <>Вашата приказна може да биде <span className="text-indigo-400">следната</span></>
            )}
          </h2>
          <p className="text-gray-400 mb-8">
            {sq(lang,"Bashkohuni me 200+ biznese që po rriten me Clientlly. 14-ditë provë falas.","Join 200+ businesses growing with Clientlly. 14-day free trial.","Únase a más de 200 negocios que crecen con Clientlly. Prueba gratuita de 14 días.","Schließen Sie sich über 200 Unternehmen an, die mit Clientlly wachsen. 14 Tage kostenlose Testversion.","Придружете се на 200+ бизниси кои растат со Clientlly. 14-дневна бесплатна проба.")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/trial"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all">
              {sq(lang,"Fillo Provën Falas","Start Free Trial","Iniciar prueba gratuita","Kostenlose Testversion starten","Започнете бесплатна проба")}<ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
              {sq(lang,"Kontakto Sales","Contact Sales","Contactar ventas","Vertrieb kontaktieren","Контактирајте продажба")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
