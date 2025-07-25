import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { 
  Eye, 
  Type, 
  Palette, 
  Settings, 
  RotateCcw, 
  Contrast, 
  Focus,
  Zap,
  Check,
  X
} from 'lucide-react';

export function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    settings, 
    updateTheme, 
    updateFontSize, 
    toggleReducedMotion, 
    toggleFocusIndicators,
    resetToDefault 
  } = useAccessibility();

  const themeOptions = [
    { value: 'default', label: 'Default', description: 'Standard color scheme' },
    { value: 'high-contrast-light', label: 'High Contrast Light', description: 'Black text on white background' },
    { value: 'high-contrast-dark', label: 'High Contrast Dark', description: 'White text on black background' },
    { value: 'high-contrast-blue', label: 'High Contrast Blue', description: 'Yellow text on dark blue background' },
  ];

  const fontSizeOptions = [
    { value: 'normal', label: 'Normal', description: 'Standard text size' },
    { value: 'large', label: 'Large', description: '125% larger text' },
    { value: 'extra-large', label: 'Extra Large', description: '150% larger text' },
  ];

  return (
    <>
      {/* Floating Accessibility Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl transition-all duration-300 hover:scale-110"
            size="icon"
            aria-label="Open accessibility settings"
          >
            <Eye className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3 text-2xl">
              <Eye className="h-6 w-6 text-blue-600" />
              <span>Accessibility Settings</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Current Settings Overview */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Current Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    Theme: {themeOptions.find(t => t.value === settings.theme)?.label}
                  </Badge>
                  <Badge variant="secondary">
                    Font: {fontSizeOptions.find(f => f.value === settings.fontSize)?.label}
                  </Badge>
                  <Badge variant={settings.reducedMotion ? "default" : "outline"}>
                    {settings.reducedMotion ? <Check className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    Reduced Motion
                  </Badge>
                  <Badge variant={settings.focusIndicators ? "default" : "outline"}>
                    {settings.focusIndicators ? <Check className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    Enhanced Focus
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* High Contrast Themes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Contrast className="h-5 w-5" />
                  <span>Color Themes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={settings.theme} onValueChange={updateTheme}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {themeOptions.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        <div className="flex flex-col">
                          <span className="font-medium">{theme.label}</span>
                          <span className="text-sm text-muted-foreground">{theme.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Font Size */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Type className="h-5 w-5" />
                  <span>Text Size</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={settings.fontSize} onValueChange={updateFontSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontSizeOptions.map((fontSize) => (
                      <SelectItem key={fontSize.value} value={fontSize.value}>
                        <div className="flex flex-col">
                          <span className="font-medium">{fontSize.label}</span>
                          <span className="text-sm text-muted-foreground">{fontSize.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Motion and Focus Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Motion & Focus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="reduced-motion" className="text-sm font-medium">
                      Reduce Motion
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Minimizes animations and transitions
                    </p>
                  </div>
                  <Switch
                    id="reduced-motion"
                    checked={settings.reducedMotion}
                    onCheckedChange={toggleReducedMotion}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="focus-indicators" className="text-sm font-medium">
                      Enhanced Focus Indicators
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Makes focus outlines more visible
                    </p>
                  </div>
                  <Switch
                    id="focus-indicators"
                    checked={settings.focusIndicators}
                    onCheckedChange={toggleFocusIndicators}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Reset Button */}
            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={resetToDefault}
                className="flex items-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset to Default</span>
              </Button>
              
              <Button onClick={() => setIsOpen(false)}>
                Apply Settings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}