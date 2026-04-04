import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle, X, Minimize2, Maximize2, Send, ArrowLeft,
  Bot, User, ChevronRight,
  FileText, Receipt, CreditCard, BarChart3, Users, Building2, Package,
  Clock, Car, Wrench, GraduationCap, CalendarX, Wallet, ClipboardList,
  CalendarDays, Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: string[];
}

const moduleInfo: Record<string, { icon: any; reply: string; keywords: string[] }> = {
  oferta: {
    icon: ClipboardList,
    reply: "📋 Moduli i Ofertave ju lejon të krijoni oferta profesionale për klientët tuaj, t'i konvertoni automatikisht në fatura, të gjurmoni statusin e çdo oferte (dërguar, pranuar, refuzuar), dhe të personalizoni template-t sipas brendit tuaj. Dëshironi të dini më shumë?",
    keywords: ['ofert', 'kuotim', 'quote', 'propozim'],
  },
  faturim: {
    icon: FileText,
    reply: "🧾 Moduli i Faturimit mundëson krijimin e faturave profesionale me një klik, dërgimin automatik me email, gjurmimin e pagesave, dhe raportim të detajuar. Mbështet formate të ndryshme dhe eksportim në PDF. Mund t'ju ndihmoj me diçka tjetër?",
    keywords: ['fatur', 'invoice', 'faturim', 'faturë'],
  },
  shpenzime: {
    icon: Receipt,
    reply: "💰 Moduli i Shpenzimeve ju ndihmon të regjistroni dhe kategorizoni të gjitha shpenzimet e biznesit, të gjurmoni buxhetin, të gjeneroni raporte për tatim, dhe të keni kontroll të plotë mbi financat. Keni pyetje specifike?",
    keywords: ['shpenzim', 'expense', 'kosto', 'buxhet'],
  },
  borxhe: {
    icon: CreditCard,
    reply: "💳 Moduli i Borxheve ju ndihmon të gjurmoni borxhet e klientëve dhe furnitorëve, të planifikoni pagesat, të dërgoni njoftime automatike për borxhe të vonuara, dhe të keni pasqyrë të plotë të gjendjes financiare.",
    keywords: ['borxh', 'debt', 'detyrim', 'vonesë', 'pagesë e vonuar'],
  },
  raporte: {
    icon: BarChart3,
    reply: "📊 Moduli i Raporteve ofron dashboard me KPI, parashikime financiare, analiza trendi, raporte të personalizuara, dhe eksportim në formate të ndryshme. Mund të gjeneroni raporte ditore, javore, ose mujore.",
    keywords: ['raport', 'report', 'analiz', 'statistik', 'dashboard', 'kpi'],
  },
  kartelaBleres: {
    icon: Wallet,
    reply: "👤 Kartelat e Blerësit ju japin pasqyrë 360° për çdo klient — historiku i blerjeve, borxhet, pagesat, kontaktet, dhe shënimet. Gjithçka në një vend për marrëdhënie më të forta me klientët.",
    keywords: ['kartel', 'buyer card', 'profil klient', 'kartelë'],
  },
  klient: {
    icon: Users,
    reply: "🤝 Moduli CRM ju ndihmon të menaxhoni marrëdhëniet me klientët, të gjurmoni historikun e komunikimit, të planifikoni ndjekjet, dhe të rrisni kënaqësinë e klientëve me mjete të fuqishme CRM.",
    keywords: ['klient', 'crm', 'client', 'menaxhim klient'],
  },
  furnitor: {
    icon: Building2,
    reply: "🏢 Moduli i Furnitorëve ju lejon të menaxhoni furnitorët, porositë e blerjes, kontratat, dhe performancën e tyre. Krahasoni çmimet dhe optimizoni zinxhirin e furnizimit.",
    keywords: ['furnitor', 'vendor', 'supplier', 'porosi blerje'],
  },
  inventar: {
    icon: Package,
    reply: "📦 Moduli i Inventarit ofron gjurmim në kohë reale të stokut, njoftime automatike për riporositje, menaxhim magazinash, dhe raporte të detajuara për lëvizjet e produkteve.",
    keywords: ['inventar', 'stok', 'magazin', 'produkt', 'inventory'],
  },
  flote: {
    icon: Car,
    reply: "🚗 Moduli i Flotës ju ndihmon të gjurmoni automjetet e kompanisë, konsumin e karburantit, itineraret, siguracionet, dhe shpenzimet e çdo automjeti. Kontroll i plotë i flotës.",
    keywords: ['flot', 'makina', 'automjet', 'fleet', 'karburant'],
  },
  mirembajtje: {
    icon: Wrench,
    reply: "🔧 Moduli i Mirëmbajtjes planifikon dhe gjurmon mirëmbajtjen e automjeteve — servise të rregullta, riparime, kosto, dhe historik. Njoftime automatike për servise të planifikuara.",
    keywords: ['mirëmbajtj', 'servis', 'riparim', 'maintenance'],
  },
  prezence: {
    icon: Clock,
    reply: "⏰ Moduli i Prezencës gjurmon orët e punës, mungesat, vonesat, dhe orët shtesë. Raporte të detajuara për çdo punonjës dhe integrim me modulin e pagave.",
    keywords: ['prezenc', 'attendance', 'orar', 'orë pune', 'munges'],
  },
  paga: {
    icon: Wallet,
    reply: "💵 Moduli i Pagave automatizon llogaritjen e pagave bazuar në prezencë, zbritjet, bonuset, dhe taksat. Gjeneroni fletëpaga profesionale dhe raporte periodike.",
    keywords: ['pag', 'payroll', 'rrog', 'salary', 'fletëpag'],
  },
  pushime: {
    icon: CalendarX,
    reply: "🏖️ Moduli i Pushimeve menaxhon kërkesat e pushimeve, lejet mjekësore, ditët e lira, dhe kalendarin e disponueshmërisë. Aprovime automatike dhe gjurmim i balancës.",
    keywords: ['pushim', 'leje', 'leave', 'ditë e lirë', 'vakancë'],
  },
  trajnim: {
    icon: GraduationCap,
    reply: "🎓 Moduli i Trajnimeve organizon kurse, certifikime, dhe zhvillim profesional për ekipin. Gjurmoni progresin, planifikoni sesione, dhe vlerësoni efektivitetin.",
    keywords: ['trajnim', 'training', 'kurs', 'certifikim', 'zhvillim'],
  },
  kalendar: {
    icon: CalendarDays,
    reply: "📅 Kalendari i Biznesit integron takimet, afatet, detyrat, dhe eventet e ekipit në një vend. Njoftime automatike dhe sinkronizim me kalendarë të tjerë.",
    keywords: ['kalendar', 'takim', 'calendar', 'orar', 'event', 'afat'],
  },
};

const generalResponses: { keywords: string[]; reply: string; quickReplies?: string[] }[] = [
  {
    keywords: ['çmim', 'pric', 'kosto', 'plan', 'sa kushton', 'paketë', 'tarif'],
    reply: "💰 Planet tona janë:\n\n• Starter — €25/muaj (3 përdorues, 200 fatura)\n• Professional — €35/muaj (10 përdorues, 500 fatura)\n• Enterprise — €50/muaj (50 përdorues, fatura pa limit)\n\nTë gjitha planet përfshijnë të 16 modulet e njëjta. Dallimi kryesor është në numrin e përdoruesve dhe në programin \"Le të rritemi bashkë\":\n\n🤝 Starter — mbështetje standarde\n🚀 Professional — zhvillim i personalizuar falas sipas nevojave tuaja\n⭐ Enterprise — zhvillim prioritar me ekip të dedikuar\n\nÇmimet vjetore kanë 15% zbritje!",
    quickReplies: ["Çfarë është 'Le të rritemi bashkë'?", "Cili plan më përshtatet?", "A ka zbritje?"],
  },
  {
    keywords: ['cili plan', 'më përshtatet', 'rekomand', 'sugjer'],
    reply: "🎯 Ja si të zgjidhni planin e duhur:\n\n• Starter (€25/muaj) — Ideal për biznese të vogla me 1-3 punonjës. Përfshin të 16 modulet dhe mbështetje standarde.\n\n• Professional (€35/muaj) — Për biznese në rritje me 4-10 punonjës. Përfshin zhvillim të personalizuar FALAS përmes programit \"Le të rritemi bashkë\" — na tregoni çfarë ju nevojitet dhe ne e ndërtojmë për ju!\n\n• Enterprise (€50/muaj) — Për kompani më të mëdha me deri 50 përdorues. Përfshin zhvillim PRIORITAR me ekip të dedikuar dhe fatura pa limit.\n\nNëse nuk jeni të sigurt, filloni me provën falas 14-ditore!",
    quickReplies: ["Fillo provën falas", "Sa kushton vjetori?", "Çfarë është 'Le të rritemi bashkë'?"],
  },
  {
    keywords: ['rritemi bashkë', 'rritemi', 'zhvillim personal', 'zhvillim falas', 'custom', 'personalizuar', 'kërkes'],
    reply: "🤝 \"Le të rritemi bashkë\" është programi ynë unik:\n\nIdeja është e thjeshtë — biznesi juaj ka nevoja specifike, dhe ne i zhvillojmë ato FALAS si pjesë e planit tuaj!\n\n📋 Si funksionon:\n1. Ju na tregoni çfarë funksioni ju nevojitet\n2. Ekipi ynë e analizon dhe planifikon zhvillimin\n3. Ne e ndërtojmë dhe integrojmë në platformë\n4. Ju përfitoni pa kosto shtesë!\n\n⚡ Dallimet sipas planit:\n• Starter — mbështetje standarde (pa zhvillim custom)\n• Professional — zhvillim i personalizuar falas, implementim sipas radhës\n• Enterprise — zhvillim PRIORITAR me ekip të dedikuar, implementim i shpejtë\n\nKy program na dallon nga të gjithë konkurrentët — ne rritemi bashkë me ju!",
    quickReplies: ["Sa kushton Professional?", "Fillo provën falas"],
  },
  {
    keywords: ['zbritj', 'ulje', 'discount', 'ofertë speciale', 'promocion'],
    reply: "🏷️ Po! Ofrojmë zbritje 15% për pagesa vjetore:\n\n• Starter: €300/vit → €255/vit (kurseni €45)\n• Professional: €420/vit → €357/vit (kurseni €63)\n• Enterprise: €600/vit → €510/vit (kurseni €90)\n\nGjithashtu, migrimi i të dhënave është plotësisht FALAS për të gjithë klientët e rinj!",
    quickReplies: ["Blej tani", "Fillo provën falas"],
  },
  {
    keywords: ['vjetor', 'annual', 'yearly'],
    reply: "📅 Me pagesë vjetore kurseni 15%:\n\n• Starter: €300/vit pa zbritje → €255/vit me zbritje (kurseni €45)\n• Professional: €420/vit pa zbritje → €357/vit me zbritje (kurseni €63)\n• Enterprise: €600/vit pa zbritje → €510/vit me zbritje (kurseni €90)\n\nKjo i bie €21.25/muaj, €29.75/muaj, dhe €42.50/muaj respektivisht. Pagesa vjetore kyçet për 12 muaj. Mund të filloni me provë falas para se të vendosni!",
    quickReplies: ["Fillo provën falas", "Blej tani"],
  },
  {
    keywords: ['prov', 'trial', 'falas', 'test'],
    reply: "🎉 Prova falas 14-ditore përfshin:\n\n✅ Qasje të plotë në të 16 modulet\n✅ Nuk kërkohet kartë kredie\n✅ Të dhënat tuaja ruhen pas provës\n✅ Mbështetje e plotë gjatë provës\n✅ Anulim në çdo moment pa asnjë detyrim\n\nThjesht regjistrohuni dhe filloni menjëherë! Pas 14 ditëve zgjidhni planin që ju përshtatet.",
    quickReplies: ["Çfarë modulesh ka?", "Sa kushton pas provës?"],
  },
  {
    keywords: ['modul', 'veçori', 'feature', 'çfarë ofroni', 'shërbim', 'funksion'],
    reply: "🚀 Clientlly ofron 16 module të integruara:\n\n📊 Financë: Oferta, Faturim, Shpenzime, Borxhe, Raporte, Kartela Blerësi\n⚙️ Operacione: Klientë CRM, Furnitorë, Inventar\n🚗 Flotë: Automjete, Mirëmbajtje\n👥 Burime Njerëzore: Prezencë, Paga, Pushime, Trajnime, Kalendar\n\nÇdo modul integrohet me të tjerët — p.sh. prezenca llogarit automatikisht pagat, faturat gjurmojnë borxhet, etj.",
    quickReplies: ["Faturimi", "Inventari", "CRM", "Pagat", "Flota"],
  },
  {
    keywords: ['kontakt', 'email', 'na shkruani', 'adres', 'ku jeni'],
    reply: "📧 Mund të na kontaktoni:\n\n• Email: info@clientlly.com (përgjigje brenda 24h)\n• Zyra: Linda Premium Residence nr 9, Prishtina e re, Kosovë\n• Chat: Jeni duke folur me ne tani! 😊\n\nOrari i punës: E hënë – E premte, 08:00 – 17:00",
  },
  {
    keywords: ['siguri', 'security', 'mbrojtj', 'gdpr', 'privatësi', 'enkript'],
    reply: "🔒 Siguria e të dhënave tuaja:\n\n• Enkriptim 256-bit SSL në transit dhe në ruajtje\n• Përputhshmëri e plotë me GDPR\n• Backup automatik ditor i të gjitha të dhënave\n• Kontroll i plotë mbi qasjen me role dhe leje\n• Server të sigurt në Europë\n• Autentikim me dy faktorë (2FA)\n• Auditim i çdo veprimi në sistem\n\nSiguria është prioriteti ynë nr. 1!",
    quickReplies: ["Ku ruhen të dhënat?", "A jeni GDPR compliant?"],
  },
  {
    keywords: ['migrim', 'transferim', 'import', 'kalim', 'excel', 'csv'],
    reply: "📦 Migrimi i të dhënave është FALAS:\n\n• Ekipi ynë bën transferimin komplet nga sistemi juaj aktual\n• Mbështesim import nga Excel, CSV, PDF, dhe sistemet kryesore\n• Procesi zgjat zakonisht 1-3 ditë pune\n• Verifikimi i të dhënave para se të shkoni live\n• Zero humbje të dhënash — gjithçka transferohet\n• Trajnim falas pas migrimit\n\nDëshironi të kërkoni migrim?",
    quickReplies: ["Kërko migrim", "Çfarë formatesh mbështetni?"],
  },
  {
    keywords: ['format', 'eksport', 'pdf', 'raport'],
    reply: "📄 Clientlly mbështet formate të ndryshme:\n\n• Eksportim: PDF, Excel (XLSX), CSV\n• Import: Excel, CSV, JSON\n• Fatura në PDF profesionale me logon tuaj\n• Raporte të personalizuara në çdo format\n• Dërgim automatik me email në PDF\n\nÇfarë tjetër dëshironi të dini?",
    quickReplies: ["Si funksionon faturimi?", "Raporte të detajuara"],
  },
  {
    keywords: ['mbështetj', 'support', 'ndihm', 'problem', 'nuk funksionon'],
    reply: "🛟 Jemi këtu për ju! Mbështetja jonë përfshin:\n\n• Chat i drejtpërdrejtë (po flisni tani!)\n• Email: info@clientlly.com (përgjigje brenda 24h)\n• Baza e njohurive me udhëzues video\n• Trajnim falas për ekipin tuaj\n• Asistencë në konfigurim fillestar\n\nSi mund t'ju ndihmoj?",
  },
  {
    keywords: ['përshëndetj', 'hello', 'hi', 'mirëdita', 'tungjatjeta', 'hej', 'çkemi', 'tung'],
    reply: "👋 Mirësevini në Clientlly! Jam asistenti virtual dhe jam këtu t'ju ndihmoj. Mund të pyesni për:\n\n• 16 modulet tona të integruara\n• Çmimet dhe planet\n• Provën falas 14-ditore\n• Migrimin e të dhënave\n• Sigurinë dhe privatësinë\n\nSi mund t'ju ndihmoj sot?",
    quickReplies: ["Çfarë modulesh ka?", "Sa kushton?", "Fillo provën falas"],
  },
  {
    keywords: ['faleminderit', 'falemnderit', 'thanks', 'rrofsh', 'flm'],
    reply: "😊 Ju lutem! Jam gjithmonë këtu nëse keni pyetje të tjera. Ju urojmë sukses me biznesin tuaj! 🚀",
  },
  {
    keywords: ['mirupafshim', 'lamtumirë', 'bye', 'goodbye', 'mbyll', 'mjaft', 'nuk kam', 'asgjë tjetër', 'jo faleminderit', 'ska', 'nuk dua', 'ishte kaq', 'kaq ishte', 'ok faleminderit'],
    reply: "👋 Faleminderit që na kontaktuat! Nëse keni pyetje në të ardhmen, jam gjithmonë këtu. Ju urojmë ditë të mbarë! Biseda do të mbyllet automatikisht...",
    quickReplies: [],
  },
  {
    keywords: ['anullo', 'cancel', 'ndalo', 'largo', 'fshij llogarinë'],
    reply: "🔄 Anulimi është i thjeshtë dhe pa penalitete:\n\n• Mund të anuloni në çdo moment nga llogaria juaj\n• Nuk ka kontratë afatgjate — paguani vetëm sa përdorni\n• Të dhënat tuaja eksportohen para anulimit\n• Pas anulimit, keni 30 ditë për të shkarkuar të dhënat\n• Nëse ndërroni mendje, rifilloni ku e latë\n\nA keni ndonjë shqetësim që mund ta zgjidhim?",
    quickReplies: ["Fol me ekipin", "Ndrysho planin"],
  },
  {
    keywords: ['ndrysho plan', 'upgrade', 'downgrade', 'rit plan', 'ul plan'],
    reply: "🔄 Ndryshimi i planit është i lehtë:\n\n• Mund të rrisni ose ulni planin në çdo moment\n• Ndryshimi aplikohet menjëherë\n• Pagesa rregullohet automatikisht pro-rata\n• Nuk humbni asnjë të dhënë gjatë ndryshimit\n• Të 16 modulet mbeten të njëjta — ndryshon vetëm numri i përdoruesve/faturave",
    quickReplies: ["Shiko planet", "Sa kushton?"],
  },
  {
    keywords: ['sa përdorues', 'shtoj përdorues', 'limit', 'përdorues shtesë'],
    reply: "👥 Limitet e përdoruesve sipas planit:\n\n• Starter: Deri në 3 përdorues\n• Professional: Deri në 10 përdorues\n• Enterprise: Deri në 50 përdorues (€1 për përdorues shtesë)\n\nÇdo përdorues ka qasje në të gjitha 16 modulet. Mund të vendosni role dhe leje specifike për secilin.\n\nPërveç përdoruesve, plani Professional dhe Enterprise përfshijnë edhe programin \"Le të rritemi bashkë\" — zhvillim të personalizuar sipas nevojave tuaja!",
    quickReplies: ["Çfarë është 'Le të rritemi bashkë'?", "Ndrysho planin"],
  },
  {
    keywords: ['gjuhë', 'language', 'shqip', 'anglisht', 'maqedonisht'],
    reply: "🌍 Clientlly mbështet shumë gjuhë:\n\n• Shqip (gjuha kryesore)\n• Anglisht\n• Maqedonisht\n\nNdërfaqja, faturat, dhe raportet mund të gjenerohen në secilën gjuhë. Mund ta ndryshoni gjuhën në çdo moment nga cilësimet.",
    quickReplies: ["Si ta ndrysho gjuhën?", "Çfarë modulesh ka?"],
  },
  {
    keywords: ['celular', 'mobile', 'telefon', 'app', 'aplikacion'],
    reply: "📱 Clientlly funksionon nga çdo pajisje:\n\n• Dizajn plotësisht responsive — punon në kompjuter, tablet, dhe celular\n• Qasje përmes shfletuesit — nuk kërkohet instalim\n• Të gjitha 16 modulet funksionojnë në celular\n• Krijoni fatura, regjistroni shpenzime, dhe menaxhoni ekipin nga kudo!",
  },
  {
    keywords: ['integrim', 'lidhj', 'api', 'connect', 'software tjetër'],
    reply: "🔗 Clientlly integrohet lehtë:\n\n• API e hapur për zhvillues\n• Eksportim/import nga Excel dhe CSV\n• Dërgim automatik i faturave me email\n• Integrim me sisteme bankare për pagesa\n• Webhook-e për automatizime\n\nDëshironi dokumentacionin teknik?",
    quickReplies: ["Dokumentacioni API", "Si funksionon eksportimi?"],
  },
  {
    keywords: ['demo', 'demonstrim', 'prezantim', 'shfaq'],
    reply: "🖥️ Me kënaqësi organizojmë një demo të personalizuar:\n\n• Prezantim online 30-45 minuta\n• Shfaqim të moduleve që ju interesojnë\n• Përgjigje për pyetjet tuaja specifike\n• Pa asnjë detyrim blerje\n\nDërgoni email në info@clientlly.com me orarin tuaj të preferuar, ose filloni provën falas 14-ditore menjëherë!",
    quickReplies: ["Fillo provën falas", "Dërgo email"],
  },
  {
    keywords: ['kush jeni', 'rreth', 'kompani', 'clientlly', 'histori'],
    reply: "🏢 Clientlly është platformë e menaxhimit të biznesit e ndërtuar nga ekipi ynë në Prishtinë, Kosovë.\n\n• Themeluar për të ndihmuar bizneset e rajonit\n• 16 module të integruara në një platformë\n• Mbështetje në shqip, anglisht, dhe maqedonisht\n• Ekip i dedikuar zhvillimi dhe mbështetjeje\n• Fokus në thjeshtësi dhe efikasitet\n\nMisioni ynë: Ta bëjmë menaxhimin e biznesit të thjeshtë për të gjithë!",
    quickReplies: ["Çfarë modulesh ka?", "Ku ndodhet zyra?"],
  },
  {
    keywords: ['backup', 'kopj', 'ruajtj', 'humbj të dhëna'],
    reply: "💾 Të dhënat tuaja janë të sigurta:\n\n• Backup automatik çdo ditë\n• Ruajtja në server të sigurt në Europë\n• Rikuperim i shpejtë në rast nevoje\n• Eksportim i plotë i të dhënave në çdo moment\n• 30 ditë ruajtje pas anulimit të llogarisë\n\nNuk do të humbni asnjë të dhënë kurrë!",
  },
  {
    keywords: ['trajnim ekip', 'si ta përdor', 'udhëzues', 'tutorial', 'mësoj'],
    reply: "🎓 Ofrojmë trajnim të plotë:\n\n• Konfigurim fillestar falas nga ekipi ynë\n• Udhëzues video për çdo modul\n• Dokumentacion i detajuar në shqip\n• Sesione trajnimi online për ekipin tuaj\n• Mbështetje e vazhdueshme pas trajnimit\n\nEkipi juaj do të jetë gati për përdorim brenda 1-2 ditëve!",
    quickReplies: ["Fillo provën falas", "Kërko trajnim"],
  },
  {
    keywords: ['përdorues shtesë', 'shtoj njerëz', 'rrit ekipin'],
    reply: "➕ Shtimi i përdoruesve është i lehtë:\n\n• Starter: deri 3 përdorues\n• Professional: deri 10 përdorues\n• Enterprise: deri 50 përdorues + €1/përdorues shtesë\n\nÇdo përdorues i ri shtohet menjëherë. Mund të vendosni role të ndryshme: admin, menaxher, punonjës, vetëm-lexim.",
  },
  {
    keywords: ['valut', 'moned', 'euro', 'dollar', 'lek'],
    reply: "💶 Clientlly mbështet shumë valuta:\n\n• Euro (€) — valuta kryesore\n• Gjithashtu mbështet USD, GBP, CHF, ALL, MKD\n• Konvertim automatik i çmimeve\n• Faturat mund të krijohen në çdo valutë\n• Raportet shfaqen në valutën tuaj të preferuar",
  },
  {
    keywords: ['tatim', 'taks', 'tvsh', 'tax', 'fiskale'],
    reply: "🧾 Menaxhimi i tatimeve:\n\n• Llogaritje automatike e TVSH-së në fatura\n• Kategorizim i shpenzimeve sipas zbritjeve tatimore\n• Raporte të gatshme për deklarata fiskale\n• Eksportim i të dhënave për kontabilistin tuaj\n• Mbështetje për norma tatimore të ndryshme vendore",
    quickReplies: ["Si funksionon faturimi?", "Raporte financiare"],
  },
];

const defaultReply = "Faleminderit për mesazhin tuaj! Jam asistenti virtual i Clientlly. Mund t'ju ndihmoj me informacione rreth moduleve tona (Faturim, CRM, Inventar, Pagat, etj.), çmimeve, ose provës falas. Çfarë dëshironi të dini?";
const defaultQuickReplies = ["Çfarë modulesh ka?", "Sa kushton?", "Fillo provën falas"];

function findResponse(text: string): { reply: string; quickReplies?: string[] } {
  const lower = text.toLowerCase();
  for (const [, info] of Object.entries(moduleInfo)) {
    if (info.keywords.some(k => lower.includes(k))) {
      return { reply: info.reply };
    }
  }
  for (const resp of generalResponses) {
    if (resp.keywords.some(k => lower.includes(k))) {
      return { reply: resp.reply, quickReplies: resp.quickReplies };
    }
  }
  return { reply: defaultReply, quickReplies: defaultQuickReplies };
}

const quickTopics = [
  { label: "💰 Çmimet", msg: "Sa kushtojnë planet?" },
  { label: "🚀 Modulet", msg: "Çfarë modulesh ofroni?" },
  { label: "🎉 Prova falas", msg: "Si të filloj provën falas?" },
  { label: "📧 Kontakti", msg: "Si mund t'ju kontaktoj?" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetChat = () => {
    setIsOpen(false);
    setMessages([]);
    setShowWelcome(true);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  };

  const startInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      if (messages.length > 0) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "⏳ Duket se nuk keni pyetje të tjera. Biseda do të mbyllet automatikisht. Nëse keni nevojë për ndihmë, na kontaktoni përsëri! 👋",
          sender: 'bot',
          timestamp: new Date(),
        }]);
        setTimeout(() => resetChat(), 4000);
      }
    }, 60000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length > 0 && !isTyping) {
      startInactivityTimer();
    }
    return () => { if (inactivityTimer.current) clearTimeout(inactivityTimer.current); };
  }, [messages, isOpen, isTyping]);

  const closeChat = () => {
    setTimeout(() => resetChat(), 3000);
  };

  const sendBot = (text: string, quickReplies?: string[], autoClose?: boolean) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies,
      }]);
      setIsTyping(false);
      if (autoClose) closeChat();
    }, 600 + Math.random() * 800);
  };

  const goodbyeKeywords = ['mirupafshim', 'lamtumirë', 'bye', 'goodbye', 'mbyll', 'mjaft', 'nuk kam', 'asgjë tjetër', 'jo faleminderit', 'nuk dua', 'ishte kaq', 'kaq ishte', 'ok faleminderit'];

  const handleSend = (text?: string) => {
    const msg = (text || inputValue).trim();
    if (!msg) return;
    setShowWelcome(false);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: msg,
      sender: 'user',
      timestamp: new Date(),
    }]);
    setInputValue('');
    const { reply, quickReplies } = findResponse(msg);
    const shouldClose = goodbyeKeywords.some(k => msg.toLowerCase().includes(k));
    sendBot(reply, quickReplies, shouldClose);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Keni nevojë për ndihmë?
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-80 sm:w-96 shadow-2xl border-0 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[540px]'}`}>
        <CardHeader className="bg-indigo-600 text-white p-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white leading-tight">Clientlly</h2>
                <p className="text-[11px] text-indigo-200 leading-tight">Asistent Virtual</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="text-white hover:bg-white/20 h-7 w-7 p-0">
                {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => { setIsOpen(false); setMessages([]); setShowWelcome(true); }} className="text-white hover:bg-white/20 h-7 w-7 p-0">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[486px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
              {showWelcome && messages.length === 0 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">Clientlly Bot</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      👋 Mirësevini! Jam asistenti virtual i Clientlly. Mund t'ju ndihmoj me informacione rreth platformës sonë me 16 module të integruara. Zgjidhni një temë ose shkruani pyetjen tuaj:
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickTopics.map(({ label, msg }) => (
                      <button
                        key={msg}
                        onClick={() => handleSend(msg)}
                        className="text-left px-3 py-2.5 bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl text-xs font-medium text-gray-700 transition-all duration-150"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id}>
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-end gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' ? 'bg-gray-700' : 'bg-indigo-600'
                      }`}>
                        {message.sender === 'user' ?
                          <User className="h-3.5 w-3.5 text-white" /> :
                          <Bot className="h-3.5 w-3.5 text-white" />
                        }
                      </div>
                      <div className={`rounded-2xl px-3.5 py-2.5 shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-100'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                        <span className={`text-[10px] mt-1 block ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-400'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </div>
                  {message.sender === 'bot' && message.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                      {message.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder="Shkruani mesazhin tuaj..."
                  className="flex-1 bg-gray-50 border-gray-200 focus:border-indigo-400 rounded-xl text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-xl h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
