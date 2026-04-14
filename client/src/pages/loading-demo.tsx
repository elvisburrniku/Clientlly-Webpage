import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandLoader, InlineSpinner, SkeletonLoader, FeatureLoader, CardLoader, SuccessAnimation } from "@/components/LoadingStates";
import { ArrowLeft, Play, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';
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

export default function LoadingDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { currentLanguage: lang } = useLanguage();

  const demos = [
    {
      id: 'brand-loader',
      title: sq(lang, "Ngarkuesi i Markës", "Brand Loader", "Cargador de Marca", "Marken-Lader", "Вчитувач на бренд") as string,
      description: sq(lang, "Rrotullimi kryesor i ngarkimit me ikona lundruese biznesi", "Main brand loading spinner with floating business icons", "Cargador principal de marca con iconos de negocio flotantes", "Hauptmarken-Ladeanzeige mit schwebenden Geschäftssymbolen", "Главен вчитувач на бренд со лебдечки деловни икони") as string,
      component: <BrandLoader size="lg" message={sq(lang, "Duke ngarkuar BusinessFlow Pro...", "Loading BusinessFlow Pro...", "Cargando BusinessFlow Pro...", "BusinessFlow Pro wird geladen...", "Се вчитува BusinessFlow Pro...") as string} />
    },
    {
      id: 'feature-loader',
      title: sq(lang, "Ngarkuesi i Veçorive", "Feature Loader", "Cargador de Funciones", "Funktions-Lader", "Вчитувач на функции") as string,
      description: sq(lang, "Ngarkimi hap pas hapi me tregues progresi", "Step-by-step loading with progress indicators", "Carga paso a paso con indicadores de progreso", "Schrittweises Laden mit Fortschrittsanzeigen", "Чекор-по-чекор вчитување со индикатори за напредок") as string,
      component: <FeatureLoader feature={sq(lang, "Sistemi i Faturimit", "Invoicing System", "Sistema de Facturación", "Rechnungssystem", "Систем за фактурирање") as string} steps={[
        sq(lang, "Duke u lidhur me bazën e të dhënave", "Connecting to database", "Conectando a la base de datos", "Verbindung zur Datenbank", "Поврзување со базата на податоци") as string,
        sq(lang, "Duke ngarkuar shabllonet e faturave", "Loading invoice templates", "Cargando plantillas de factura", "Rechnungsvorlagen laden", "Вчитување шаблони за фактури") as string,
        sq(lang, "Duke vendosur llogaritjet", "Setting up calculations", "Configurando cálculos", "Berechnungen einrichten", "Поставување пресметки") as string,
        sq(lang, "Gati për të krijuar fatura", "Ready to create invoices", "Listo para crear facturas", "Bereit Rechnungen zu erstellen", "Подготвено за креирање фактури") as string
      ]} />
    },
    {
      id: 'card-loader',
      title: sq(lang, "Skeleti i Kartës", "Card Skeleton", "Esqueleto de Tarjeta", "Karten-Skelett", "Скелет на картичка") as string,
      description: sq(lang, "Karta vendmbajtëse për ngarkimin e përmbajtjes", "Placeholder cards for content loading", "Tarjetas de marcador de posición para carga de contenido", "Platzhalter-Karten für das Laden von Inhalten", "Картички-заменици за вчитување содржина") as string,
      component: <CardLoader count={3} />
    },
    {
      id: 'skeleton-loader',
      title: sq(lang, "Ngarkuesi Skelet", "Skeleton Loader", "Cargador Esqueleto", "Skelett-Lader", "Скелет вчитувач") as string,
      description: sq(lang, "Vendmbajtës për përmbajtjen tekstuale", "Text content placeholder", "Marcador de posición de contenido de texto", "Textinhalt-Platzhalter", "Заменица за текстуална содржина") as string,
      component: (
        <div className="space-y-6 max-w-md">
          <SkeletonLoader lines={3} />
          <SkeletonLoader lines={2} />
          <SkeletonLoader lines={4} />
        </div>
      )
    },
    {
      id: 'inline-spinner',
      title: sq(lang, "Rrotulluesit e Brendshëm", "Inline Spinners", "Indicadores en Línea", "Inline-Spinner", "Вградени вртежи") as string,
      description: sq(lang, "Rrotullues të vegjël për butonat dhe përdorim inline", "Small spinners for buttons and inline use", "Pequeños indicadores para botones y uso en línea", "Kleine Spinner für Buttons und Inline-Nutzung", "Мали вртежи за копчиња и вградена употреба") as string,
      component: (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Button disabled className="flex items-center space-x-2">
              <InlineSpinner size="sm" />
              <span>{sq(lang, "Duke ruajtur...", "Saving...", "Guardando...", "Speichern...", "Зачувување...")}</span>
            </Button>
            <Button disabled className="flex items-center space-x-2">
              <InlineSpinner size="xs" />
              <span>{sq(lang, "Duke ngarkuar", "Loading", "Cargando", "Laden", "Вчитување")}</span>
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <InlineSpinner size="md" />
            <span>{sq(lang, "Duke përpunuar pagesën...", "Processing payment...", "Procesando pago...", "Zahlung wird verarbeitet...", "Обработка на плаќање...")}</span>
          </div>
        </div>
      )
    },
    {
      id: 'success-animation',
      title: sq(lang, "Animacioni i Suksesit", "Success Animation", "Animación de Éxito", "Erfolgsanimation", "Анимација на успех") as string,
      description: sq(lang, "Animacion festimi për veprimet e përfunduara", "Celebration animation for completed actions", "Animación de celebración para acciones completadas", "Feieranimation für abgeschlossene Aktionen", "Анимација за прославување на завршени дејства") as string,
      component: <SuccessAnimation message={sq(lang, "Pagesa e suksesshme!", "Payment successful!", "¡Pago exitoso!", "Zahlung erfolgreich!", "Плаќањето е успешно!") as string} />
    }
  ];

  const runSuccessDemo = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50">
      <header className="border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>{sq(lang, "Kthehu në Ballë", "Back to Home", "Volver al Inicio", "Zurück zur Startseite", "Назад на почетна")}</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">{sq(lang, "Demo e Gjendjes së Ngarkimit", "Loading States Demo", "Demo de Estados de Carga", "Ladezustände Demo", "Демо на состојби на вчитување")}</h1>
            <div></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {sq(lang,
              <>{sq(lang, "Gjendjet e Ngarkimit me ", "Loading States with ", "Estados de Carga con ", "Ladezustände mit ", "Состојби на вчитување со ")}<span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{sq(lang, "Personalitet të Markës", "Brand Personality", "Personalidad de Marca", "Markenpersönlichkeit", "Личност на бренд")}</span></>,
              <>Loading States with <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand Personality</span></>,
              <>Estados de Carga con <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Personalidad de Marca</span></>,
              <>Ladezustände mit <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Markenpersönlichkeit</span></>,
              <>Состојби на вчитување со <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Личност на бренд</span></>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {sq(lang,
              "Përvoja intuitive dhe argëtuese ngarkimi që pasqyrojnë markën profesionale por të afrueshme të BusinessFlow Pro.",
              "Intuitive and playful loading experiences that reflect BusinessFlow Pro's professional yet approachable brand.",
              "Experiencias de carga intuitivas y divertidas que reflejan la marca profesional pero accesible de BusinessFlow Pro.",
              "Intuitive und spielerische Ladeerlebnisse, die die professionelle, aber zugängliche Marke von BusinessFlow Pro widerspiegeln.",
              "Интуитивни и забавни искуства на вчитување што го одразуваат професионалниот но пристапен бренд на BusinessFlow Pro."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {demos.map((demo) => (
            <Card key={demo.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{demo.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{demo.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={activeDemo === demo.id ? "secondary" : "outline"}
                    onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
                    className="flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>{activeDemo === demo.id ? sq(lang, "Fshih", "Hide", "Ocultar", "Ausblenden", "Сокриј") : sq(lang, "Demo", "Demo", "Demo", "Demo", "Демо")}</span>
                  </Button>
                </div>
              </CardHeader>
              {activeDemo === demo.id && (
                <CardContent className="pt-0">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                    {demo.component}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{sq(lang, "Demo Interaktive", "Interactive Demo", "Demo Interactiva", "Interaktive Demo", "Интерактивно демо")}</CardTitle>
            <p className="text-muted-foreground">{sq(lang, "Provoni skenarë të ndryshëm ngarkimi", "Try out different loading scenarios", "Prueba diferentes escenarios de carga", "Probieren Sie verschiedene Ladeszenarien aus", "Пробајте различни сценарија на вчитување")}</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                onClick={() => setActiveDemo('brand-loader')}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{sq(lang, "Ngarkimi i Aplikacionit", "App Loading", "Carga de App", "App-Laden", "Вчитување апликација")}</span>
              </Button>
              
              <Button
                onClick={() => setActiveDemo('feature-loader')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{sq(lang, "Ngarkimi i Veçorive", "Feature Loading", "Carga de Funciones", "Funktions-Laden", "Вчитување функции")}</span>
              </Button>
              
              <Button
                onClick={() => setActiveDemo('card-loader')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{sq(lang, "Ngarkimi i Përmbajtjes", "Content Loading", "Carga de Contenido", "Inhalts-Laden", "Вчитување содржина")}</span>
              </Button>
              
              <Button
                onClick={runSuccessDemo}
                variant="outline"
                className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
              >
                <Play className="h-4 w-4" />
                <span>{sq(lang, "Animacioni i Suksesit", "Success Animation", "Animación de Éxito", "Erfolgsanimation", "Анимација на успех")}</span>
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
              {showSuccess ? (
                <SuccessAnimation message={sq(lang, "Demo u përfundua me sukses!", "Demo completed successfully!", "¡Demo completada exitosamente!", "Demo erfolgreich abgeschlossen!", "Демото е успешно завршено!") as string} />
              ) : activeDemo ? (
                demos.find(demo => demo.id === activeDemo)?.component
              ) : (
                <div className="text-center text-muted-foreground">
                  <RefreshCw className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">{sq(lang, "Zgjidhni një demo më lart për ta parë në veprim", "Select a demo above to see it in action", "Selecciona una demo arriba para verla en acción", "Wählen Sie oben eine Demo, um sie in Aktion zu sehen", "Изберете демо погоре за да го видите во акција")}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{sq(lang, "Parimet e Dizajnit", "Design Principles", "Principios de Diseño", "Designprinzipien", "Принципи на дизајн")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold">{sq(lang, "Konsistenca e Markës", "Brand Consistency", "Consistencia de Marca", "Markenkonsistenz", "Конзистентност на бренд")}</h3>
                <p className="text-sm text-muted-foreground">{sq(lang, "Të gjitha gjendjet e ngarkimit pasqyrojnë identitetin vizual të BusinessFlow Pro me ngjyra dhe tipografi konsistente.", "All loading states reflect BusinessFlow Pro's visual identity with consistent colors and typography.", "Todos los estados de carga reflejan la identidad visual de BusinessFlow Pro con colores y tipografía consistentes.", "Alle Ladezustände spiegeln die visuelle Identität von BusinessFlow Pro mit konsistenten Farben und Typografie wider.", "Сите состојби на вчитување го одразуваат визуелниот идентитет на BusinessFlow Pro со конзистентни бои и типографија.")}</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">{sq(lang, "I Fokusuar në Performancë", "Performance Focused", "Enfocado en Rendimiento", "Leistungsorientiert", "Фокусирано на перформанси")}</h3>
                <p className="text-sm text-muted-foreground">{sq(lang, "Animacione të lehta që nuk ndikojnë performancën duke ofruar reagim tërheqës.", "Lightweight animations that don't impact performance while providing engaging feedback.", "Animaciones ligeras que no impactan el rendimiento mientras proporcionan retroalimentación atractiva.", "Leichte Animationen, die die Leistung nicht beeinträchtigen und gleichzeitig ansprechendes Feedback bieten.", "Лесни анимации што не влијаат на перформансите додека обезбедуваат привлечен фидбек.")}</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">{sq(lang, "Personalitet Lojtar", "Playful Personality", "Personalidad Juguetona", "Verspielte Persönlichkeit", "Разигран карактер")}</h3>
                <p className="text-sm text-muted-foreground">{sq(lang, "Animacione profesionale por të afrueshme që e bëjnë pritjen të këndshme në vend të frustruese.", "Professional yet approachable animations that make waiting enjoyable rather than frustrating.", "Animaciones profesionales pero accesibles que hacen la espera agradable en lugar de frustrante.", "Professionelle, aber zugängliche Animationen, die das Warten angenehm statt frustrierend machen.", "Професионални но пристапни анимации што го прават чекањето пријатно наместо фрустрирачко.")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}