import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import ChatBot from "@/components/ChatBot";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardLoader, FeatureLoader } from "@/components/LoadingStates";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { 
  ChartLine, 
  FileText, 
  Receipt, 
  Users, 
  Bus, 
  File, 
  Handshake,
  Settings,
  LogOut,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Calendar,
  Clock,
  Brain,
  ChevronRight,
  PieChart,
  BarChart3
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element, fr?: string | JSX.Element, pt?: string | JSX.Element, it?: string | JSX.Element): string | JSX.Element {
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

interface SubscriptionStatus {
  hasSubscription: boolean;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionDetails?: {
    id: string;
    status: string;
    currentPeriodEnd: number;
    plan: string;
  };
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const go = (path: string) => { setLocation(path); window.scrollTo({ top: 0 }); };
  const { toast } = useToast();
  const { user, isLoading } = useAuth();
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  const [personalizedStats, setPersonalizedStats] = useState({
    invoices: 0,
    tasks: 0,
    todayActivities: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const { currentLanguage: lang } = useLanguage();

  const revenueData = [
    { month: sq(lang, 'Jan', 'Jan', 'Ene', 'Jan', 'Јан') as string, revenue: 45000, expenses: 32000, profit: 13000 },
    { month: sq(lang, 'Shk', 'Feb', 'Feb', 'Feb', 'Фев') as string, revenue: 52000, expenses: 35000, profit: 17000 },
    { month: sq(lang, 'Mar', 'Mar', 'Mar', 'Mär', 'Мар') as string, revenue: 48000, expenses: 33000, profit: 15000 },
    { month: sq(lang, 'Pri', 'Apr', 'Abr', 'Apr', 'Апр') as string, revenue: 61000, expenses: 38000, profit: 23000 },
    { month: sq(lang, 'Maj', 'May', 'May', 'Mai', 'Мај', "Mai", "Maio", "Maggio") as string, revenue: 58000, expenses: 40000, profit: 18000 },
    { month: sq(lang, 'Qer', 'Jun', 'Jun', 'Jun', 'Јун') as string, revenue: 67000, expenses: 42000, profit: 25000 },
  ];

  const expenseCategories = [
    { name: sq(lang, 'Operacione', 'Operations', 'Operaciones', 'Betrieb', 'Операции') as string, value: 35, color: '#8884d8' },
    { name: sq(lang, 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Маркетинг') as string, value: 25, color: '#82ca9d' },
    { name: sq(lang, 'Paga', 'Salaries', 'Salarios', 'Gehälter', 'Плати') as string, value: 30, color: '#ffc658' },
    { name: sq(lang, 'Të tjera', 'Other', 'Otros', 'Sonstiges', 'Останато') as string, value: 10, color: '#ff7300' },
  ];

  const chartConfig = {
    revenue: {
      label: sq(lang, "Të ardhurat", "Revenue", "Ingresos", "Einnahmen", "Приходи", "Revenus", "Receitas", "Entrate") as string,
      color: "#2563eb",
    },
    expenses: {
      label: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци", "Dépenses", "Despesas", "Spese") as string,
      color: "#dc2626",
    },
    profit: {
      label: sq(lang, "Fitimi", "Profit", "Ganancia", "Gewinn", "Профит", "Profit", "Lucro", "Profitto") as string,
      color: "#16a34a",
    },
  };

  useEffect(() => {
    if (!user) return;
    
    const userId = (user as any)?.id || 'default';
    const userSeed = userId.toString().split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0);
    
    setPersonalizedStats({
      invoices: 180 + (userSeed % 150),
      tasks: 25 + (userSeed % 30),
      todayActivities: 8 + (userSeed % 15)
    });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    
    const sequence = [
      () => setAnimationStep(1),
      () => setAnimationStep(2),
      () => setAnimationStep(3),
      () => setAnimationStep(4),
      () => setAnimationStep(5),
      () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      },
      () => setAnimationStep(6),
      () => setShowWelcomeAnimation(false)
    ];
    
    let timeouts: NodeJS.Timeout[] = [];
    
    sequence.forEach((step, index) => {
      timeouts.push(setTimeout(step, index * 900));
    });
    
    return () => timeouts.forEach(clearTimeout);
  }, [user]);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return sq(lang, "Mirëmëngjes", "Good morning", "Buenos días", "Guten Morgen", "Добро утро", "Bonjour", "Bom dia", "Buongiorno") as string;
    if (hour < 17) return sq(lang, "Mirëdita", "Good afternoon", "Buenas tardes", "Guten Tag", "Добар ден", "Bon après-midi", "Boa tarde", "Buon pomeriggio") as string;
    return sq(lang, "Mirëmbrëmje", "Good evening", "Buenas noches", "Guten Abend", "Добра вечер", "Bonsoir", "Boa noite", "Buonasera") as string;
  };

  const getPersonalizedMessage = () => {
    const hour = new Date().getHours();
    const dayOfWeek = new Date().getDay();
    const userName = (user as any)?.firstName || sq(lang, 'atje', 'there', 'ahí', 'da', 'таму') as string;
    
    const morningMessages = [
      sq(lang, `Gati për të filluar një ditë tjetër produktive, ${userName}?`, `Ready to start another productive day, ${userName}?`, `Listo para comenzar otro día productivo, ${userName}?`, `Bereit für einen weiteren produktiven Tag, ${userName}?`, `Подготвени за уште еден продуктивен ден, ${userName}?`) as string,
      sq(lang, "Le ta bëjmë këtë ditë të rëndësishme!", "Let's make today count!", "¡Hagamos que hoy cuente!", "Machen wir heute den Unterschied!", "Ајде денеска да направиме разлика!") as string,
      sq(lang, "Biznesi juaj po pret që ju të shkëlqeni sot!", "Your business is waiting for you to shine today!", "¡Tu negocio espera que brilles hoy!", "Ihr Unternehmen wartet darauf, dass Sie heute glänzen!", "Вашиот бизнис чека да блеснете денес!") as string,
      sq(lang, "Koha për t'i kthyer idetë e mëngjesit në realitet!", "Time to turn those morning ideas into reality!", "¡Hora de convertir esas ideas matutinas en realidad!", "Zeit, Ihre Morgenideen in die Realität umzusetzen!", "Време е утринските идеи да ги претворите во реалност!") as string
    ];
    
    const afternoonMessages = [
      sq(lang, `Shpresoj që dita juaj po shkon mirë, ${userName}!`, `Hope your day is going well, ${userName}!`, `¡Espero que tu día vaya bien, ${userName}!`, `Hoffentlich läuft Ihr Tag gut, ${userName}!`, `Се надевам дека денот ви оди добро, ${userName}!`) as string,
      sq(lang, "Koha perfekte për të rishikuar progresin tuaj!", "Perfect time to review your progress!", "¡Momento perfecto para revisar tu progreso!", "Der perfekte Zeitpunkt, um Ihren Fortschritt zu überprüfen!", "Совршено време да го прегледате напредокот!") as string,
      sq(lang, "Le t'i trajtojmë qëllimet e pasdites!", "Let's tackle those afternoon goals!", "¡Vamos a abordar esos objetivos de la tarde!", "Packen wir die Nachmittagsziele an!", "Ајде да ги решиме попладневните цели!") as string,
      sq(lang, "Vazhdoni impulsin fort!", "Keep the momentum going strong!", "¡Mantén el impulso fuerte!", "Halten Sie den Schwung aufrecht!", "Продолжете со силен замав!") as string
    ];
    
    const eveningMessages = [
      sq(lang, `Duke përfunduar një ditë tjetër të suksesshme, ${userName}?`, `Wrapping up another successful day, ${userName}?`, `Terminando otro día exitoso, ${userName}?`, `Einen weiteren erfolgreichen Tag abrunden, ${userName}?`, `Завршувате уште еден успешен ден, ${userName}?`) as string,
      sq(lang, "Koha për të rishikuar arritjet e sotme!", "Time to review today's achievements!", "¡Hora de revisar los logros de hoy!", "Zeit, die heutigen Errungenschaften zu überprüfen!", "Време е да ги прегледате денешните достигнувања!") as string,
      sq(lang, "Le ta përfundojmë fort sot!", "Let's finish strong today!", "¡Terminemos fuerte hoy!", "Lassen Sie uns heute stark abschließen!", "Ајде да завршиме силно денес!") as string,
      sq(lang, "Planifikimi për nesër fillon tani!", "Planning for tomorrow starts now!", "¡La planificación para mañana comienza ahora!", "Die Planung für morgen beginnt jetzt!", "Планирањето за утре почнува сега!") as string
    ];
    
    const weekendMessages = [
      sq(lang, `Duke punuar fort edhe në fundjavë? Je i përkushtuar, ${userName}!`, `Working hard even on weekends? You're dedicated, ${userName}!`, `Trabajando duro incluso los fines de semana? Eres dedicado, ${userName}!`, `Arbeiten Sie auch am Wochenende hart? Sie sind engagiert, ${userName}!`, `Работите напорно и за викенд? Посветени сте, ${userName}!`) as string,
      sq(lang, "Mënyra e punës së fundjavës e aktivizuar!", "Weekend hustle mode activated!", "¡Modo trabajo de fin de semana activado!", "Wochenend-Arbeitsmodus aktiviert!", "Режим на викенд работа активиран!") as string,
      sq(lang, "Përkushtimi juaj është frymëzues!", "Your dedication is inspiring!", "¡Tu dedicación es inspiradora!", "Ihr Engagement ist inspirierend!", "Вашата посветеност е инспиративна!") as string,
      sq(lang, "Suksesi nuk merr pushime fundjavë!", "Success doesn't take weekends off!", "¡El éxito no descansa los fines de semana!", "Erfolg macht kein Wochenende!", "Успехот не зема викенд!") as string
    ];
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return weekendMessages[Math.floor(Math.random() * weekendMessages.length)];
    }
    
    if (hour < 12) {
      return morningMessages[Math.floor(Math.random() * morningMessages.length)];
    } else if (hour < 17) {
      return afternoonMessages[Math.floor(Math.random() * afternoonMessages.length)];
    } else {
      return eveningMessages[Math.floor(Math.random() * eveningMessages.length)];
    }
  };

  const getAchievementBadges = () => {
    const badges = [];
    
    if (personalizedStats.invoices > 250) {
      badges.push({ icon: "💰", title: sq(lang, "Master Faturash", "Invoice Master", "Maestro de Facturas", "Rechnungsmeister", "Мајстор на фактури") as string, desc: sq(lang, "250+ fatura të krijuara", "250+ invoices created", "250+ facturas creadas", "250+ Rechnungen erstellt", "250+ креирани фактури", "Plus de 250 factures créées", "Mais de 250 faturas criadas", "Oltre 250 fatture create") as string });
    }
    
    if (personalizedStats.tasks > 40) {
      badges.push({ icon: "⚡", title: sq(lang, "Kampion Detyrash", "Task Champion", "Campeón de Tareas", "Aufgaben-Champion", "Шампион на задачи") as string, desc: sq(lang, "Ekspert produktiviteti", "Productivity expert", "Experto en productividad", "Produktivitätsexperte", "Експерт за продуктивност") as string });
    }
    
    if (personalizedStats.todayActivities > 15) {
      badges.push({ icon: "🔥", title: sq(lang, "Dinamik Ditor", "Daily Dynamo", "Dinamo Diario", "Tages-Dynamo", "Дневно динамо") as string, desc: sq(lang, "Aktivitet i lartë sot", "High activity today", "Alta actividad hoy", "Hohe Aktivität heute", "Висока активност денес") as string });
    }
    
    if (badges.length === 0) {
      badges.push({ icon: "🌟", title: sq(lang, "Yll në Ngritje", "Rising Star", "Estrella en Ascenso", "Aufsteigender Stern", "Ѕвезда во подем") as string, desc: sq(lang, "Duke ndërtuar perandorinë tuaj", "Building your empire", "Construyendo tu imperio", "Bauen Sie Ihr Imperium auf", "Градете го вашето царство") as string });
    }
    
    return badges;
  };

  const { data: subscriptionStatus, isLoading: isLoadingSubscription } = useQuery<SubscriptionStatus>({
    queryKey: ["/api/subscription/status"],
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: sq(lang, "I paautorizuar", "Unauthorized", "No autorizado", "Nicht autorisiert", "Неовластено") as string,
        description: sq(lang, "Jeni çkyçur. Duke u kyçur përsëri...", "You are logged out. Logging in again...", "Has cerrado sesión. Iniciando sesión de nuevo...", "Sie sind abgemeldet. Erneute Anmeldung...", "Одјавени сте. Повторно најавување...") as string,
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [user, isLoading, toast]);

  if (isLoading || isLoadingSubscription) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50 flex items-center justify-center">
        <FeatureLoader 
          feature={sq(lang, "Paneli", "Dashboard", "Panel", "Dashboard", "Табла", "Tableau de bord", "Painel", "Pannello") as string}
          steps={[
            sq(lang, "Duke ngarkuar të dhënat e përdoruesit", "Loading user data", "Cargando datos del usuario", "Benutzerdaten laden", "Вчитување кориснички податоци") as string,
            sq(lang, "Duke vendosur hapësirën e punës", "Setting up workspace", "Configurando espacio de trabajo", "Arbeitsbereich einrichten", "Поставување работен простор") as string,
            sq(lang, "Duke përgatitur widgets", "Preparing widgets", "Preparando widgets", "Widgets vorbereiten", "Подготвување виџети") as string,
            sq(lang, "Gati!", "Ready to go!", "¡Listo!", "Bereit!", "Подготвено!") as string
          ]}
        />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />{sq(lang, "Aktiv", "Active", "Activo", "Aktiv", "Активно", "Actif", "Ativo", "Attivo")}</Badge>;
      case 'past_due':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />{sq(lang, "Me vonesë", "Past Due", "Vencido", "Überfällig", "Задоцнето")}</Badge>;
      case 'canceled':
        return <Badge variant="secondary">{sq(lang, "Anuluar", "Canceled", "Cancelado", "Storniert", "Откажано")}</Badge>;
      default:
        return <Badge variant="outline">{sq(lang, "I panjohur", "Unknown", "Desconocido", "Unbekannt", "Непознато")}</Badge>;
    }
  };

  const formatPlanName = (plan: string) => {
    return plan?.charAt(0).toUpperCase() + plan?.slice(1) + ` ${sq(lang, "Plani", "Plan", "Plan", "Plan", "План", "Plan", "Plano", "Piano")}` || sq(lang, "Pa Plan", "No Plan", "Sin Plan", "Kein Plan", "Без план") as string;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        

      </div>

      <nav className="glass-effect border-b border-white/20 relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 slide-in-left group transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-white dark:bg-transparent p-1 rounded-lg">
                  <img 
                    src="/attached_assets/CLIENTLLY_ICON_1753793353861.png" 
                    alt="BusinessFlow Pro" 
                    className="w-10 h-8 object-contain logo-simple cursor-pointer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/15 group-hover:to-orange-500/15 transition-all duration-500 rounded-lg"></div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4 slide-in-right">
              <div className="flex items-center space-x-2">
                {(user as any)?.profileImageUrl ? (
                  <img 
                    src={(user as any).profileImageUrl} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {(user as any)?.firstName?.[0] || (user as any)?.email?.[0] || 'U'}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-foreground">
                  {(user as any)?.firstName || (user as any)?.email || sq(lang, 'Përdorues', 'User', 'Usuario', 'Benutzer', 'Корисник')}
                </span>
              </div>
              <Button variant="ghost" size="icon" title={sq(lang, "Cilësimet", "Settings", "Configuración", "Einstellungen", "Поставки", "Paramètres", "Definições", "Impostazioni") as string}>
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.location.href = "/api/logout"}
                title={sq(lang, "Dil", "Logout", "Cerrar sesión", "Abmelden", "Одјави се", "Déconnexion", "Terminar sessão", "Esci") as string}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {showWelcomeAnimation && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-orange-50/95 dark:from-gray-900/95 dark:via-purple-900/95 dark:to-orange-900/95 z-50 flex items-center justify-center backdrop-blur-sm">
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'][Math.floor(Math.random() * 4)],
                    }}
                  />
                ))}
              </div>
            )}
            
            <div className="text-center space-y-8 max-w-3xl px-8">
              <div className={`transition-all duration-1000 ${animationStep >= 1 ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'}`}>
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/attached_assets/3d_1753195741585.png" 
                    alt="BusinessFlow Pro" 
                    className="w-8 h-6 object-contain mr-3 animate-pulse"
                  />
                  <Sparkles className="h-5 w-5 text-blue-600 mr-2 animate-spin" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium text-lg">{sq(lang, "Mirë se vini në BusinessFlow Pro", "Welcome to BusinessFlow Pro", "Bienvenido a BusinessFlow Pro", "Willkommen bei BusinessFlow Pro", "Добредојде во BusinessFlow Pro")}</span>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-professional-fade">
                  <span className="text-foreground block mb-3">{getTimeBasedGreeting()},</span>
                  <span className="animate-subtle-gradient">
                    {(user as any)?.firstName || sq(lang, 'atje', 'there', 'ahí', 'da', 'таму')}!
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {getPersonalizedMessage()}
                </p>
              </div>

              <div className={`transition-all duration-1000 delay-600 ${animationStep >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 shadow-xl">
                    <TrendingUp className="h-10 w-10 mx-auto mb-3 text-green-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.invoices}</div>
                    <div className="text-sm text-muted-foreground font-medium">{sq(lang, "Fatura të Krijuara", "Invoices Created", "Facturas Creadas", "Rechnungen Erstellt", "Креирани фактури")}</div>
                  </div>
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 delay-150 shadow-xl">
                    <Calendar className="h-10 w-10 mx-auto mb-3 text-blue-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.tasks}</div>
                    <div className="text-sm text-muted-foreground font-medium">{sq(lang, "Detyra Aktive", "Active Tasks", "Tareas Activas", "Aktive Aufgaben", "Активни задачи")}</div>
                  </div>
                  <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-500 delay-300 shadow-xl">
                    <Clock className="h-10 w-10 mx-auto mb-3 text-purple-600 animate-bounce" />
                    <div className="text-3xl font-bold text-foreground animate-pulse">{personalizedStats.todayActivities}</div>
                    <div className="text-sm text-muted-foreground font-medium">{sq(lang, "Aktivitetet e Sotme", "Today's Activities", "Actividades de Hoy", "Heutige Aktivitäten", "Денешни активности", "Aujourd'hui", "Hoje", "Oggi")}</div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-900 ${animationStep >= 4 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className="flex justify-center space-x-4 flex-wrap gap-3">
                  {getAchievementBadges().map((badge, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-2xl mr-2 animate-bounce">{badge.icon}</span>
                      <div className="text-left">
                        <div className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{badge.title}</div>
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">{badge.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-1200 ${animationStep >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-150"></div>
                  <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce delay-300"></div>
                </div>
                <p className="text-lg text-muted-foreground font-medium animate-pulse">{sq(lang, "Duke përgatitur panelin tuaj të personalizuar...", "Preparing your personalized dashboard...", "Preparando tu panel personalizado...", "Ihr personalisiertes Dashboard wird vorbereitet...", "Подготвување на вашата персонализирана табла...")}</p>
              </div>
            </div>
          </div>
        )}

        <div className={`mb-8 transition-all duration-1000 ${!showWelcomeAnimation ? 'slide-in-bottom' : 'opacity-0'}`}>
          <Card className="glass-effect border-primary/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl font-bold gradient-text fade-in">
                    {getTimeBasedGreeting()}, {(user as any)?.firstName || sq(lang, 'atje', 'there', 'ahí', 'da', 'таму')}!
                  </h1>
                  <div className="animate-bounce">
                    <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                  </div>
                </div>
                
                <div className="hidden md:flex space-x-2">
                  {getAchievementBadges().slice(0, 2).map((badge, index) => (
                    <div 
                      key={index}
                      className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 text-xs hover:scale-105 transition-transform duration-300"
                    >
                      <span className="mr-1">{badge.icon}</span>
                      <span className="text-yellow-700 dark:text-yellow-300 font-medium">{badge.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6 fade-in stagger-1">
                {getPersonalizedMessage()}
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 fade-in stagger-2">
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">{sq(lang, "Sistemi Online", "System Online", "Sistema en Línea", "System Online", "Систем онлајн")}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                    {subscriptionStatus?.hasSubscription ? `${subscriptionStatus.subscriptionPlan} ${sq(lang, "Plani", "Plan", "Plan", "Plan", "План", "Plan", "Plano", "Piano")}` : sq(lang, "Plani Falas", "Free Plan", "Plan Gratis", "Kostenloser Plan", "Бесплатен план")}
                  </span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{sq(lang, "Të dhënat e sinkronizuara", "Data Synced", "Datos Sincronizados", "Daten synchronisiert", "Податоци синхронизирани")}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">{personalizedStats.invoices} {sq(lang, "Fatura", "Invoices", "Facturas", "Rechnungen", "Фактури", "Factures", "Faturas", "Fatture")}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">{personalizedStats.tasks} {sq(lang, "Detyra", "Tasks", "Tareas", "Aufgaben", "Задачи", "Tâches", "Tarefas", "Attività")}</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{personalizedStats.todayActivities} {sq(lang, "Sot", "Today", "Hoy", "Heute", "Денес", "Aujourd'hui", "Hoje", "Oggi")}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-8 glass-effect border-primary/20 hover-lift scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <span>{sq(lang, "Statusi i Abonimit", "Subscription Status", "Estado de Suscripción", "Abonnementstatus", "Статус на претплата")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subscriptionStatus?.hasSubscription ? (
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{formatPlanName(subscriptionStatus.subscriptionPlan)}</span>
                    {getStatusBadge(subscriptionStatus.subscriptionStatus)}
                  </div>
                  {subscriptionStatus.subscriptionDetails && (
                    <p className="text-sm text-muted-foreground">
                      {sq(lang, "Faturimi i ardhshëm:", "Next billing:", "Próxima facturación:", "Nächste Abrechnung:", "Следна наплата:")} {new Date(subscriptionStatus.subscriptionDetails.currentPeriodEnd * 1000).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Button variant="outline" className="glow-border">{sq(lang, "Menaxho Abonimin", "Manage Subscription", "Gestionar Suscripción", "Abonnement verwalten", "Управувај претплата")}</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{sq(lang, "Nuk ka abonim aktiv", "No active subscription", "Sin suscripción activa", "Kein aktives Abonnement", "Нема активна претплата")}</p>
                  <p className="text-sm text-muted-foreground">{sq(lang, "Abonohuni për të zhbllokuar të gjitha veçoritë", "Subscribe to unlock all features", "Suscríbete para desbloquear todas las funciones", "Abonnieren Sie, um alle Funktionen freizuschalten", "Претплатете се за да ги отклучите сите функции")}</p>
                </div>
                <Button 
                  onClick={() => go("/subscribe")}
                  className="bg-gradient-to-r from-primary to-secondary pulse-glow"
                >
                  {sq(lang, "Abonohu Tani", "Subscribe Now", "Suscríbete Ahora", "Jetzt Abonnieren", "Претплати се сега")}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glass-effect border-primary/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>{sq(lang, "Analitika e të Ardhurave", "Revenue Analytics", "Análisis de Ingresos", "Einnahmenanalyse", "Аналитика на приходи")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stackId="1"
                      stroke="#2563eb" 
                      fill="#2563eb" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="profit" 
                      stackId="2"
                      stroke="#16a34a" 
                      fill="#16a34a" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-primary" />
                <span>{sq(lang, "Zbërthimi i Shpenzimeve", "Expense Breakdown", "Desglose de Gastos", "Aufschlüsselung der Ausgaben", "Распределба на трошоци")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip />
                    <Pie data={expenseCategories} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">
                      {category.name}: {category.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-effect border-primary/20 hover-lift mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>{sq(lang, "Performanca Mujore", "Monthly Performance", "Rendimiento Mensual", "Monatliche Leistung", "Месечна перформанса")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="#2563eb" name={sq(lang, "Të ardhurat", "Revenue", "Ingresos", "Einnahmen", "Приходи", "Revenus", "Receitas", "Entrate") as string} />
                  <Bar dataKey="expenses" fill="#dc2626" name={sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци", "Dépenses", "Despesas", "Spese") as string} />
                  <Bar dataKey="profit" fill="#16a34a" name={sq(lang, "Fitimi", "Profit", "Ganancia", "Gewinn", "Профит", "Profit", "Lucro", "Profitto") as string} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { 
              icon: FileText, 
              title: sq(lang, "Faturat", "Invoices", "Facturas", "Rechnungen", "Фактури", "Factures", "Faturas", "Fatture") as string,
              description: sq(lang, "Menaxhoni rrjedhën tuaj të faturimit", "Manage your invoicing workflow", "Gestiona tu flujo de facturación", "Verwalten Sie Ihren Rechnungsworkflow", "Управувајте со вашиот тек на фактурирање") as string,
              count: "247",
              color: "from-blue-500 to-blue-600",
              delay: "delay-100"
            },
            { 
              icon: Receipt, 
              title: sq(lang, "Shpenzimet", "Expenses", "Gastos", "Ausgaben", "Трошоци", "Dépenses", "Despesas", "Spese") as string,
              description: sq(lang, "Gjurmoni shpenzimet e biznesit", "Track business expenses", "Registra gastos del negocio", "Geschäftsausgaben verfolgen", "Следете деловни трошоци") as string,
              count: "89",
              color: "from-green-500 to-green-600",
              delay: "delay-200"
            },
            { 
              icon: Users, 
              title: sq(lang, "Klientët", "Clients", "Clientes", "Kunden", "Клиенти", "Clients", "Clientes", "Clienti") as string,
              description: sq(lang, "Menaxhimi i marrëdhënieve me klientët", "Customer relationship management", "Gestión de relaciones con clientes", "Kundenbeziehungsmanagement", "Управување со односи со клиенти") as string,
              count: "156",
              color: "from-purple-500 to-purple-600",
              delay: "delay-300"
            },
            { 
              icon: Bus, 
              title: sq(lang, "BNJ", "HR", "RRHH", "Personal", "ЧР", "RH", "RH", "HR") as string,
              description: sq(lang, "Menaxhimi i burimeve njerëzore", "Human resources management", "Gestión de recursos humanos", "Personalverwaltung", "Управување со човечки ресурси") as string,
              count: "23",
              color: "from-orange-500 to-orange-600",
              delay: "delay-400"
            },
            { 
              icon: File, 
              title: sq(lang, "Kontratat", "Contracts", "Contratos", "Verträge", "Договори") as string,
              description: sq(lang, "Menaxhimi i kontratave të biznesit", "Business contract management", "Gestión de contratos empresariales", "Geschäftsvertragsverwaltung", "Управување со деловни договори") as string,
              count: "34",
              color: "from-red-500 to-red-600",
              delay: "delay-500"
            },
            { 
              icon: Handshake, 
              title: sq(lang, "Ofertat", "Offers", "Ofertas", "Angebote", "Понуди") as string,
              description: sq(lang, "Krijoni dhe dërgoni propozime", "Create and send proposals", "Crea y envía propuestas", "Angebote erstellen und senden", "Креирајте и испратете предлози") as string,
              count: "12",
              color: "from-indigo-500 to-indigo-600",
              delay: "delay-600"
            }
          ].map((module, index) => (
            <Card 
              key={index} 
              className={`group glass-effect border-primary/20 hover-lift scale-in ${module.delay} cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02] animate-fade-in-up overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 pulse-glow relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <module.icon className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <Badge variant="secondary" className="font-bold text-lg px-3 py-1 bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
                    {module.count}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {module.description}
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-muted/30 rounded-full h-1">
                    <div 
                      className={`h-1 bg-gradient-to-r ${module.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{sq(lang, "Kliko për të eksploruar", "Click to explore", "Haz clic para explorar", "Klicken zum Erkunden", "Кликнете за истражување")}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <Link href="/ai-dashboard">
            <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {sq(lang, "Inteligjenca Biznesore me AI", "AI-Powered Business Intelligence", "Inteligencia de Negocios con IA", "KI-gestützte Business Intelligence", "Деловна интелигенција со ВИ", "Intelligence d'affaires par IA", "Inteligência de negócios por IA", "Business intelligence con IA")}
                      </h3>
                      <p className="text-gray-600">
                        {sq(lang, "Zbuloni njohuri të zgjuara, komanda zanore dhe automatizim", "Discover smart insights, voice commands, and automation", "Descubre perspectivas inteligentes, comandos de voz y automatización", "Entdecken Sie intelligente Einblicke, Sprachbefehle und Automatisierung", "Откријте паметни увиди, гласовни команди и автоматизација")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">{sq(lang, "Eksploro Veçoritë AI", "Explore AI Features", "Explorar Funciones IA", "KI-Funktionen erkunden", "Истражи ВИ функции")}</span>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass-effect border-green-200/20 hover-lift scale-in stagger-1 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">€24,750</div>
              <p className="text-sm text-muted-foreground">{sq(lang, "Të ardhurat Mujore", "Monthly Revenue", "Ingresos Mensuales", "Monatliche Einnahmen", "Месечни приходи", "Revenu mensuel", "Receita mensal", "Ricavi mensili")}</p>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-4/5"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-blue-200/20 hover-lift scale-in stagger-2 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">1,234</div>
              <p className="text-sm text-muted-foreground">{sq(lang, "Faturat Totale", "Total Invoices", "Facturas Totales", "Gesamte Rechnungen", "Вкупно фактури")}</p>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-purple-200/20 hover-lift scale-in stagger-3 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">98.5%</div>
              <p className="text-sm text-muted-foreground">{sq(lang, "Shkalla e Mbledhjes", "Collection Rate", "Tasa de Cobro", "Inkassoquote", "Стапка на наплата")}</p>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-orange-200/20 hover-lift scale-in stagger-4 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">156</div>
              <p className="text-sm text-muted-foreground">{sq(lang, "Klientë Aktivë", "Active Clients", "Clientes Activos", "Aktive Kunden", "Активни клиенти")}</p>
              <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full w-3/5"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ChatBot />
      
      <AccessibilityControls />
    </div>
  );
}