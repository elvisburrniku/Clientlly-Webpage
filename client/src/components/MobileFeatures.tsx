import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { 
  Smartphone, 
  Camera, 
  Wifi, 
  WifiOff,
  Bell,
  BellOff,
  Download,
  Upload,
  Scan,
  FileText,
  CreditCard,
  MapPin,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface MobileCapability {
  id: string;
  name: string;
  description: string;
  icon: any;
  isEnabled: boolean;
  isAvailable: boolean;
  lastUsed?: string;
}

export function MobileFeatures() {
  const { toast } = useToast();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [capabilities, setCapabilities] = useState<MobileCapability[]>([
    {
      id: 'offline_mode',
      name: 'Offline Mode',
      description: 'Work without internet, sync when connected',
      icon: WifiOff,
      isEnabled: true,
      isAvailable: true,
    },
    {
      id: 'camera_capture',
      name: 'Receipt Scanner',
      description: 'Scan receipts and documents with your camera',
      icon: Camera,
      isEnabled: true,
      isAvailable: 'mediaDevices' in navigator,
    },
    {
      id: 'push_notifications',
      name: 'Push Notifications',
      description: 'Get notified about important business events',
      icon: Bell,
      isEnabled: false,
      isAvailable: 'serviceWorker' in navigator && 'PushManager' in window,
    },
    {
      id: 'voice_input',
      name: 'Voice Commands',
      description: 'Control the app with voice commands',
      icon: Zap,
      isEnabled: false,
      isAvailable: 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window,
    },
    {
      id: 'geolocation',
      name: 'Location Services',
      description: 'Automatic mileage tracking and location-based features',
      icon: MapPin,
      isEnabled: false,
      isAvailable: 'geolocation' in navigator,
    },
    {
      id: 'background_sync',
      name: 'Background Sync',
      description: 'Continue syncing data in the background',
      icon: Upload,
      isEnabled: true,
      isAvailable: 'serviceWorker' in navigator,
    },
  ]);

  useEffect(() => {
    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Listen for PWA install prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setInstallPrompt(null);
        toast({
          title: "App installed!",
          description: "BusinessFlow Pro is now available on your home screen",
        });
      }
    }
  };

  const toggleCapability = async (id: string) => {
    const capability = capabilities.find(c => c.id === id);
    if (!capability || !capability.isAvailable) return;

    if (id === 'push_notifications' && !capability.isEnabled) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setCapabilities(prev => 
            prev.map(c => c.id === id ? { ...c, isEnabled: true } : c)
          );
          toast({
            title: "Notifications enabled",
            description: "You'll now receive important business alerts",
          });
        } else {
          toast({
            title: "Notifications blocked",
            description: "Please enable notifications in your browser settings",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Notification permission error:', error);
      }
    } else if (id === 'geolocation' && !capability.isEnabled) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setCapabilities(prev => 
            prev.map(c => c.id === id ? { ...c, isEnabled: true } : c)
          );
          toast({
            title: "Location access granted",
            description: "You can now use location-based features",
          });
        },
        () => {
          toast({
            title: "Location access denied",
            description: "Please enable location access in your browser settings",
            variant: "destructive"
          });
        }
      );
    } else {
      setCapabilities(prev => 
        prev.map(c => c.id === id ? { ...c, isEnabled: !c.isEnabled } : c)
      );
    }
  };

  const startCameraCapture = () => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          toast({
            title: "Camera ready",
            description: "You can now scan receipts and documents",
          });
        })
        .catch(() => {
          toast({
            title: "Camera access denied",
            description: "Please enable camera access to scan documents",
            variant: "destructive"
          });
        });
    }
  };

  return (
    <div className="space-y-6">
      {/* Mobile Status */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Mobile Experience</h2>
            </div>
            <div className="flex items-center gap-2">
              {isOnline ? (
                <Badge className="bg-green-100 text-green-800">
                  <Wifi className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              ) : (
                <Badge className="bg-orange-100 text-orange-800">
                  <WifiOff className="h-3 w-3 mr-1" />
                  Offline
                </Badge>
              )}
              {isInstalled && (
                <Badge className="bg-purple-100 text-purple-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Installed
                </Badge>
              )}
            </div>
          </div>

          {/* PWA Install */}
          {!isInstalled && installPrompt && (
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-blue-900">Install BusinessFlow Pro</h3>
                  <p className="text-sm text-blue-700">
                    Install as an app for faster access and offline capabilities
                  </p>
                </div>
                <Button onClick={handleInstallApp} className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Install
                </Button>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              onClick={startCameraCapture}
              className="p-4 h-auto flex-col gap-2 border-blue-200 hover:bg-blue-50"
            >
              <Camera className="h-6 w-6 text-blue-600" />
              <span className="text-sm">Scan Receipt</span>
            </Button>
            <Button 
              variant="outline"
              className="p-4 h-auto flex-col gap-2 border-green-200 hover:bg-green-50"
            >
              <FileText className="h-6 w-6 text-green-600" />
              <span className="text-sm">Quick Invoice</span>
            </Button>
            <Button 
              variant="outline"
              className="p-4 h-auto flex-col gap-2 border-purple-200 hover:bg-purple-50"
            >
              <Clock className="h-6 w-6 text-purple-600" />
              <span className="text-sm">Time Tracker</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle>Mobile Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div key={capability.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${capability.isAvailable ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Icon className={`h-5 w-5 ${capability.isAvailable ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium">{capability.name}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                    {!capability.isAvailable && (
                      <p className="text-xs text-red-600 mt-1">Not supported in this browser</p>
                    )}
                  </div>
                </div>
                <Switch
                  checked={capability.isEnabled}
                  onCheckedChange={() => toggleCapability(capability.id)}
                  disabled={!capability.isAvailable}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Offline Data Status */}
      {!isOnline && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <div>
                <h3 className="font-medium text-orange-900">Working Offline</h3>
                <p className="text-sm text-orange-700">
                  Your changes are being saved locally and will sync when you're back online.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mobile Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1 rounded-full">
                <Smartphone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Add to Home Screen</h4>
                <p className="text-xs text-gray-600">
                  Install the app for faster access and native feel
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Camera className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Scan Everything</h4>
                <p className="text-xs text-gray-600">
                  Use your camera to quickly capture receipts and business cards
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-1 rounded-full">
                <Bell className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Stay Notified</h4>
                <p className="text-xs text-gray-600">
                  Enable notifications to never miss important business events
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}