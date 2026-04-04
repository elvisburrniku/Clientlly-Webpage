import { useEffect, useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Building, ArrowRight, CreditCard, Mail } from 'lucide-react';
import { useLanguage } from "@/lib/i18n";

function sq(lang: string, alb: string | JSX.Element, eng: string | JSX.Element, es?: string | JSX.Element, de?: string | JSX.Element, mk?: string | JSX.Element): string | JSX.Element { switch(lang) { case 'sq': return alb; case 'es': return es ?? eng; case 'de': return de ?? eng; case 'mk': return mk ?? eng; default: return eng; } }

export default function Success() {
  const [location] = useLocation();
  const [sessionId, setSessionId] = useState<string>('');
  const { currentLanguage: lang } = useLanguage();
  
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const sessionIdFromUrl = params.get('session_id');
    if (sessionIdFromUrl) {
      setSessionId(sessionIdFromUrl);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 py-8 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Building className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">BusinessFlow Pro</span>
          </div>
        </div>

        <Card className="border-green-200 bg-green-50/50 animate-bounce-in">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Check className="h-8 w-8 text-green-600 animate-bounce-in" />
            </div>
            <CardTitle className="text-2xl text-green-800">
              {sq(lang, "Abonimet u krye me sukses!", "Subscription Successful!", "¡Suscripción Exitosa!", "Abonnement erfolgreich!", "Претплатата е успешна!")}
            </CardTitle>
            <p className="text-green-700">
              {sq(lang, "Abonimi juaj është aktiv dhe gati për përdorim!", "Your subscription is now active and ready to use!", "¡Tu suscripción está activa y lista para usar!", "Ihr Abonnement ist jetzt aktiv und einsatzbereit!", "Вашата претплата е сега активна и подготвена за употреба!")}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-4">{sq(lang, "Çfarë ndodh tani?", "What happens next?", "Qué pasa después?", "Was passiert als Nächstes?", "Што следува понатаму?")}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 slide-in-left stagger-1">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">{sq(lang, "Konfigurimi i Llogarisë", "Account Setup", "Configuración de Cuenta", "Kontoeinrichtung", "Поставување на сметка")}</p>
                    <p className="text-sm text-green-600">
                      {sq(lang, "Llogaria juaj BusinessFlow Pro po krijohet automatikisht", "Your BusinessFlow Pro account is being created automatically", "Tu cuenta de BusinessFlow Pro se está creando automáticamente", "Ihr BusinessFlow Pro-Konto wird automatisch erstellt", "Вашата сметка на BusinessFlow Pro се креира автоматски")}
                      <span className="loading-dots ml-1">
                        <span>.</span><span>.</span><span>.</span>
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 slide-in-left stagger-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">{sq(lang, "Email-i i Mirëseardhjes", "Welcome Email", "Correo de Bienvenida", "Willkommens-E-Mail", "Е-пошта за добредојде")}</p>
                    <p className="text-sm text-green-600">{sq(lang, "Kontrolloni email-in tuaj për udhëzimet e hyrjes dhe guidën e fillimit", "Check your email for login instructions and getting started guide", "Revisa tu correo para instrucciones de inicio de sesión y guía de inicio", "Überprüfen Sie Ihre E-Mail für Anmeldeanweisungen und die Erste-Schritte-Anleitung", "Проверете ја вашата е-пошта за упатства за најава и водич за почеток")}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 slide-in-left stagger-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">{sq(lang, "Konfirmimi i Pagesës", "Billing Confirmation", "Confirmación de Facturación", "Zahlungsbestätigung", "Потврда за плаќање")}</p>
                    <p className="text-sm text-green-600">{sq(lang, "Do të merrni një faturë nga Stripe për abonimin tuaj", "You'll receive a receipt from Stripe for your subscription", "Recibirás un recibo de Stripe por tu suscripción", "Sie erhalten eine Quittung von Stripe für Ihr Abonnement", "Ќе добиете сметка од Stripe за вашата претплата")}</p>
                  </div>
                </div>
              </div>
            </div>

            {sessionId && (
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>{sq(lang, "ID e Sesionit:", "Session ID:", "ID de Sesión:", "Sitzungs-ID:", "ID на сесија:")}</strong> {sessionId}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {sq(lang, "Ruajeni këtë për regjistrimet tuaja nëse keni nevojë për mbështetje", "Keep this for your records if you need support", "Guarde esto para sus registros si necesita soporte", "Bewahren Sie dies für Ihre Unterlagen auf, falls Sie Support benötigen", "Зачувајте го ова за вашите записи ако ви треба поддршка")}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard"
                className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-primary-foreground rounded-md h-10 px-4 py-2 text-sm font-medium"
              >
                <span>{sq(lang, "Shko te Paneli", "Go to Dashboard", "Ir al Panel", "Zum Dashboard", "Оди на табла")}</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              
              <Link href="/"
                className="flex-1 inline-flex items-center justify-center border border-input bg-background hover:bg-accent rounded-md h-10 px-4 py-2 text-sm font-medium"
              >
                {sq(lang, "Kthehu në Ballë", "Return to Home", "Volver al Inicio", "Zurück zur Startseite", "Врати се на почетна")}
              </Link>
            </div>
            
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                {sq(lang, "Keni nevojë për ndihmë për të filluar?", "Need help getting started?", "Necesitas ayuda para empezar?", "Brauchen Sie Hilfe beim Einstieg?", "Ви треба помош за почеток?")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="link" size="sm">
                  {sq(lang, "Shiko Dokumentacionin", "View Documentation", "Ver Documentación", "Dokumentation anzeigen", "Прегледај документација")}
                </Button>
                <Button variant="link" size="sm">
                  {sq(lang, "Kontakto Mbështetjen", "Contact Support", "Contactar Soporte", "Support kontaktieren", "Контактирај поддршка")}
                </Button>
                <Button variant="link" size="sm">
                  {sq(lang, "Bashkohu me Komunitetin", "Join Community", "Unirse a la Comunidad", "Community beitreten", "Придружи се на заедницата")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}