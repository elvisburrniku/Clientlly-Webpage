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
    keywords: ['çmim', 'pric', 'kosto', 'plan', 'sa kushton', 'paketë'],
    reply: "💰 Planet tona janë:\n\n• Starter — €25/muaj (3 përdorues, 200 fatura)\n• Professional — €35/muaj (10 përdorues, 500 fatura)\n• Enterprise — €50/muaj (50 përdorues, fatura pa limit)\n\nTë gjitha planet përfshijnë të 16 modulet. Dallimi është vetëm në numrin e përdoruesve dhe faturave.",
    quickReplies: ["Fillo provën falas", "Cili plan më përshtatet?"],
  },
  {
    keywords: ['prov', 'trial', 'falas', 'test'],
    reply: "🎉 Po! Ofrojmë provë falas 14-ditore me qasje të plotë në të gjitha 16 modulet. Nuk kërkohet kartë kredie. Thjesht regjistrohuni dhe filloni menjëherë!",
    quickReplies: ["Çfarë modulesh ka?", "Sa kushton pas provës?"],
  },
  {
    keywords: ['modul', 'veçori', 'feature', 'çfarë ofroni', 'shërbim'],
    reply: "🚀 Clientlly ofron 16 module të integruara:\n\n📊 Financë: Oferta, Faturim, Shpenzime, Borxhe, Raporte, Kartela Blerësi\n⚙️ Operacione: Klientë CRM, Furnitorë, Inventar\n🚗 Flotë: Automjete, Mirëmbajtje\n👥 Burime Njerëzore: Prezencë, Paga, Pushime, Trajnime, Kalendar\n\nCilin modul dëshironi ta eksploroni?",
    quickReplies: ["Faturimi", "Inventari", "CRM", "Pagat"],
  },
  {
    keywords: ['kontakt', 'email', 'na shkruani', 'adres'],
    reply: "📧 Mund të na kontaktoni:\n\n• Email: info@clientlly.com (përgjigje brenda 24h)\n• Zyra: Linda Premium Residence nr 9, Prishtina e re, Kosovë\n• Chat: Jeni duke folur me ne tani! 😊",
  },
  {
    keywords: ['siguri', 'security', 'mbrojtj', 'gdpr', 'privatësi'],
    reply: "🔒 Të dhënat tuaja janë të mbrojtura me enkriptim të nivelit bankar (256-bit SSL), pëlqim me GDPR, backup automatik ditor, dhe kontroll të plotë mbi qasjen. Siguria është prioriteti ynë nr. 1.",
  },
  {
    keywords: ['migrim', 'transferim', 'import', 'kalim'],
    reply: "📦 Ekipi ynë bën migrimin e të dhënave FALAS nga platforma juaj aktuale. Mbështesim import nga Excel, CSV, dhe sistemet kryesore. Procesi zgjat zakonisht 1-3 ditë pune.",
    quickReplies: ["Kërko migrim", "Sa kushton?"],
  },
  {
    keywords: ['mbështetj', 'support', 'ndihm', 'problem'],
    reply: "🛟 Ekipi ynë i mbështetjes është i gatshëm t'ju ndihmojë! Mund të na kontaktoni përmes:\n\n• Këtij chat-i (përgjigje e menjëhershme)\n• Email: info@clientlly.com\n\nSi mund t'ju ndihmoj?",
  },
  {
    keywords: ['përshëndetj', 'hello', 'hi', 'mirëdita', 'tungjatjeta', 'hej', 'çkemi'],
    reply: "👋 Mirësevini në Clientlly! Jam asistenti virtual dhe jam këtu t'ju ndihmoj. Mund të pyes për modulet tona, çmimet, ose çdo gjë tjetër. Si mund t'ju ndihmoj sot?",
    quickReplies: ["Çfarë modulesh ka?", "Sa kushton?", "Fillo provën falas"],
  },
  {
    keywords: ['faleminderit', 'falemnderit', 'thanks', 'rrofsh'],
    reply: "😊 Ju lutem! Jam gjithmonë këtu nëse keni pyetje të tjera. Ju urojmë sukses me biznesin tuaj!",
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendBot = (text: string, quickReplies?: string[]) => {
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
    }, 600 + Math.random() * 800);
  };

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
    sendBot(reply, quickReplies);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 relative"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">1</span>
          </span>
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
