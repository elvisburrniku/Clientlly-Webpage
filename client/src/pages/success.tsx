import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Building, ArrowRight, CreditCard, Mail } from 'lucide-react';

export default function Success() {
  const [location] = useLocation();
  const [sessionId, setSessionId] = useState<string>('');
  
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const sessionIdFromUrl = params.get('session_id');
    if (sessionIdFromUrl) {
      setSessionId(sessionIdFromUrl);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-8 px-4">
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
              Subscription Successful!
            </CardTitle>
            <p className="text-green-700">
              Welcome to BusinessFlow Pro! Your subscription is now active.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-4">What happens next?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 slide-in-left stagger-1">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Account Setup</p>
                    <p className="text-sm text-green-600">
                      Your BusinessFlow Pro account is being created automatically
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
                    <p className="font-medium text-green-800">Welcome Email</p>
                    <p className="text-sm text-green-600">Check your email for login instructions and getting started guide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 slide-in-left stagger-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Billing Confirmation</p>
                    <p className="text-sm text-green-600">You'll receive a receipt from Stripe for your subscription</p>
                  </div>
                </div>
              </div>
            </div>

            {sessionId && (
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Session ID:</strong> {sessionId}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Keep this for your records if you need support
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
                onClick={() => window.location.href = '/dashboard'}
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="flex-1"
              >
                Return to Home
              </Button>
            </div>
            
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                Need help getting started?
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="link" size="sm">
                  View Documentation
                </Button>
                <Button variant="link" size="sm">
                  Contact Support
                </Button>
                <Button variant="link" size="sm">
                  Join Community
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}