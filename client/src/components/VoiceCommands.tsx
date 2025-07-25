import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Settings,
  Radio,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface VoiceCommandResult {
  success: boolean;
  command: string;
  action: string;
  result?: any;
  confidence: number;
}

export function VoiceCommands() {
  const { toast } = useToast();
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [lastCommand, setLastCommand] = useState<VoiceCommandResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const processVoiceCommandMutation = useMutation({
    mutationFn: async (command: string): Promise<VoiceCommandResult> => {
      // Mock voice command processing
      const lowerCommand = command.toLowerCase();
      
      if (lowerCommand.includes('create invoice')) {
        return {
          success: true,
          command,
          action: 'Create new invoice',
          confidence: 85
        };
      } else if (lowerCommand.includes('show') && lowerCommand.includes('expense')) {
        return {
          success: true,
          command,
          action: 'Display expense report',
          confidence: 90
        };
      } else if (lowerCommand.includes('add') && lowerCommand.includes('client')) {
        return {
          success: true,
          command,
          action: 'Add new client',
          confidence: 88
        };
      }
      
      return {
        success: false,
        command,
        action: 'Unknown command',
        confidence: confidence || 0
      };
    },
    onSuccess: (result: VoiceCommandResult) => {
      setLastCommand(result);
      setIsProcessing(false);
      if (result.success) {
        toast({
          title: "Command executed",
          description: `${result.action} completed successfully`,
        });
      } else {
        toast({
          title: "Command failed",
          description: "I couldn't understand that command. Please try again.",
          variant: "destructive"
        });
      }
    },
    onError: () => {
      setIsProcessing(false);
      toast({
        title: "Error",
        description: "Failed to process voice command",
        variant: "destructive"
      });
    }
  });

  useEffect(() => {
    // Check if Speech Recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
        setTranscript("");
      };
      
      recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        const confidence = event.results[last][0].confidence;
        
        setTranscript(transcript);
        setConfidence(Math.round(confidence * 100));
        
        if (event.results[last].isFinal) {
          setIsProcessing(true);
          processVoiceCommandMutation.mutate(transcript);
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "Voice recognition error",
          description: "Please check your microphone and try again",
          variant: "destructive"
        });
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [processVoiceCommandMutation]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const exampleCommands = [
    "Create invoice for John Smith, $500",
    "Show me this month's expenses",
    "Add new client Microsoft",
    "Schedule meeting for tomorrow 3 PM",
    "Generate revenue report",
    "Mark invoice 12345 as paid"
  ];

  if (!isSupported) {
    return (
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-yellow-700">
            <VolumeX className="h-5 w-5" />
            <p className="text-sm">Voice commands are not supported in your browser.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Voice Control Panel */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Volume2 className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold">Voice Commands</h3>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                AI Powered
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>

          {/* Main Voice Control */}
          <div className="text-center space-y-4">
            <Button
              size="lg"
              onClick={isListening ? stopListening : startListening}
              disabled={isProcessing}
              className={`h-20 w-20 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {isListening ? (
                <MicOff className="h-8 w-8" />
              ) : isProcessing ? (
                <Radio className="h-8 w-8 animate-spin" />
              ) : (
                <Mic className="h-8 w-8" />
              )}
            </Button>

            <div className="space-y-2">
              {isListening && (
                <p className="text-red-600 font-medium animate-pulse">
                  Listening... Speak now
                </p>
              )}
              {isProcessing && (
                <p className="text-blue-600 font-medium">
                  Processing command...
                </p>
              )}
              {!isListening && !isProcessing && (
                <p className="text-gray-600">
                  Click the microphone to start
                </p>
              )}
            </div>

            {/* Live Transcript */}
            {transcript && (
              <Card className="border-dashed border-2 border-gray-300">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Live Transcript</span>
                    {confidence > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {confidence}% confidence
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm italic">{transcript}</p>
                </CardContent>
              </Card>
            )}

            {/* Last Command Result */}
            {lastCommand && (
              <Card className={`border-l-4 ${
                lastCommand.success ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'
              }`}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {lastCommand.success ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span className="text-sm font-medium">
                      {lastCommand.success ? 'Command Executed' : 'Command Failed'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>You said:</strong> "{lastCommand.command}"
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Action:</strong> {lastCommand.action}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Example Commands */}
      <Card>
        <CardContent className="p-4">
          <h4 className="font-medium mb-3">Try these voice commands:</h4>
          <div className="grid gap-2">
            {exampleCommands.map((command, index) => (
              <div 
                key={index}
                className="text-sm p-2 bg-gray-50 rounded border-l-4 border-l-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => {
                  setTranscript(command);
                  processVoiceCommandMutation.mutate(command);
                }}
              >
                "{command}"
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Click any example to test it, or use the microphone for voice input
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}