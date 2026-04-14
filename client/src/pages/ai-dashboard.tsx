import { AIInsights } from "@/components/AIInsights";
import { VoiceCommands } from "@/components/VoiceCommands";
import { SmartAutomation } from "@/components/SmartAutomation";
import { MobileFeatures } from "@/components/MobileFeatures";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Brain, 
  Mic, 
  Zap, 
  Smartphone,
  ArrowLeft,
  Sparkles
} from "lucide-react";
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

export default function AIDashboard() {
  const { currentLanguage: lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  {sq(lang, "Kthehu te Paneli", "Back to Dashboard", "Volver al Panel", "Zurück zum Dashboard", "Назад на табла")}
                </button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {sq(lang, "Inteligjenca Biznesore me AI", "AI-Powered Business Intelligence", "Inteligencia de Negocios con IA", "KI-gestützte Business Intelligence", "Деловна интелигенција со ВИ", "Intelligence d'affaires par IA", "Inteligência de negócios por IA", "Business intelligence con IA")}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {sq(lang, "Njohuri të zgjuara, automatizim dhe kontrolle zanore", "Smart insights, automation, and voice controls", "Perspectivas inteligentes, automatización y controles de voz", "Intelligente Einblicke, Automatisierung und Sprachsteuerung", "Паметни увиди, автоматизација и гласовни контроли")}
                  </p>
                </div>
              </div>
            </div>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">
              <Sparkles className="h-3 w-3 mr-1" />
              {sq(lang, "I Përmirësuar me AI", "AI Enhanced", "Mejorado con IA", "KI-Verbessert", "Подобрено со ВИ")}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="insights" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              {sq(lang, "Njohuritë AI", "AI Insights", "Perspectivas IA", "KI-Einblicke", "ВИ увиди")}
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              {sq(lang, "Komandat Zanore", "Voice Commands", "Comandos de Voz", "Sprachbefehle", "Гласовни команди", "Commandes vocales", "Comandos de voz", "Comandi vocali")}
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {sq(lang, "Automatizimi", "Automation", "Automatización", "Automatisierung", "Автоматизација", "Automatisation", "Automatização", "Automazione")}
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              {sq(lang, "Veçoritë Mobile", "Mobile Features", "Funciones Móviles", "Mobile Funktionen", "Мобилни функции")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  {sq(lang, "Paneli i Inteligjencës Biznesore", "Business Intelligence Dashboard", "Panel de Inteligencia de Negocios", "Business-Intelligence-Dashboard", "Табла за деловна интелигенција")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AIInsights />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-blue-600" />
                  {sq(lang, "Qendra e Komandave Zanore", "Voice Command Center", "Centro de Comandos de Voz", "Sprachbefehlszentrale", "Центар за гласовни команди")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <VoiceCommands />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  {sq(lang, "Qendra e Automatizimit të Zgjuar", "Smart Automation Hub", "Centro de Automatización Inteligente", "Smart-Automatisierungs-Hub", "Центар за паметна автоматизација")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SmartAutomation />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-600" />
                  {sq(lang, "Veçoritë Mobile & PWA", "Mobile & PWA Features", "Funciones Móviles y PWA", "Mobile & PWA Funktionen", "Мобилни и PWA функции")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MobileFeatures />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}