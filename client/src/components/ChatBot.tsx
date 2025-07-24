import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2,
  HelpCircle,
  Zap
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the BusinessFlow Pro AI Assistant. I'm here to help you with questions about our features, pricing, and getting started. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    'pricing': "Our pricing is simple and transparent:\n• Basic Plan: $29/month - Perfect for small businesses\n• Professional: $79/month - Most popular for growing teams\n• Business: $159/month - Advanced features for larger organizations\n\nAll plans include a 14-day free trial. Would you like to know more about any specific plan?",
    'features': "BusinessFlow Pro includes:\n• Professional Invoicing & Estimates\n• Smart Expense Tracking\n• Debt Management\n• Client & Vendor Management\n• Inventory Management\n• Attendance Tracking\n• Smart Calendar\n• Insights & Reports\n• Mobile Apps\n• Enterprise Security\n\nWhich feature would you like to learn more about?",
    'trial': "Yes! We offer a 14-day free trial for all plans. No credit card required to start. You can explore all features and see how BusinessFlow Pro fits your business needs. Ready to start your free trial?",
    'support': "I'm here to help! For technical support, you can:\n• Chat with me for instant answers\n• Contact our support team at support@businessflowpro.com\n• Check our knowledge base\n• Schedule a demo for personalized assistance\n\nWhat specific issue can I help you with?",
    'migration': "We make switching to BusinessFlow Pro seamless! Our migration service includes:\n• Automated data import from 50+ platforms\n• Dedicated migration specialist\n• Zero downtime guarantee\n• Free data cleanup and organization\n\nWhich platform are you currently using? I can provide specific migration details.",
    'demo': "I'd be happy to arrange a personalized demo! Our demos include:\n• Live walkthrough of features relevant to your business\n• Q&A with our product experts\n• Custom setup recommendations\n• Special onboarding offers\n\nWould you like me to schedule a demo for you?",
    'security': "Security is our top priority:\n• Bank-level 256-bit SSL encryption\n• SOC 2 Type II certified\n• GDPR & CCPA compliant\n• Regular security audits\n• Automated backups\n• 99.9% uptime guarantee\n\nYour business data is completely secure with us. Any specific security questions?",
    'mobile': "Yes! BusinessFlow Pro includes native mobile apps for iOS and Android:\n• Full offline functionality\n• Receipt scanning with AI categorization\n• Push notifications\n• Real-time sync\n• Mobile-optimized interface\n\nDownload from App Store or Google Play. Need help setting up the mobile app?"
  };

  const getKeywords = (text: string): string[] => {
    const keywords = ['pricing', 'price', 'cost', 'plan', 'features', 'feature', 'trial', 'free', 'support', 'help', 'migration', 'migrate', 'switch', 'demo', 'demonstration', 'security', 'secure', 'mobile', 'app', 'phone'];
    return keywords.filter(keyword => text.toLowerCase().includes(keyword));
  };

  const generateResponse = (userMessage: string): string => {
    const keywords = getKeywords(userMessage);
    const lowerMessage = userMessage.toLowerCase();

    // Check for specific keywords and return appropriate responses
    if (keywords.includes('pricing') || keywords.includes('price') || keywords.includes('cost') || keywords.includes('plan')) {
      return predefinedResponses.pricing;
    }
    if (keywords.includes('features') || keywords.includes('feature')) {
      return predefinedResponses.features;
    }
    if (keywords.includes('trial') || keywords.includes('free')) {
      return predefinedResponses.trial;
    }
    if (keywords.includes('support') || keywords.includes('help')) {
      return predefinedResponses.support;
    }
    if (keywords.includes('migration') || keywords.includes('migrate') || keywords.includes('switch')) {
      return predefinedResponses.migration;
    }
    if (keywords.includes('demo') || keywords.includes('demonstration')) {
      return predefinedResponses.demo;
    }
    if (keywords.includes('security') || keywords.includes('secure')) {
      return predefinedResponses.security;
    }
    if (keywords.includes('mobile') || keywords.includes('app') || keywords.includes('phone')) {
      return predefinedResponses.mobile;
    }

    // Generic responses for common greetings and questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to BusinessFlow Pro. I'm here to help you with any questions about our business management platform. What would you like to know?";
    }
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Thank you for chatting with me! Feel free to reach out anytime if you have more questions. Have a great day!";
    }

    // Default response
    return "I'd be happy to help! I can assist you with questions about:\n• Pricing and plans\n• Features and capabilities\n• Free trial information\n• Demos and support\n• Data migration\n• Mobile apps\n\nWhat specific question do you have? You can also contact our support team for more detailed assistance.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "View pricing plans", action: () => setInputValue("What are your pricing plans?") },
    { text: "Start free trial", action: () => setInputValue("How do I start a free trial?") },
    { text: "Schedule demo", action: () => setInputValue("I'd like to schedule a demo") },
    { text: "See all features", action: () => setInputValue("What features do you offer?") }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          size="lg"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
        <div className="absolute -top-12 -left-8 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Need help? Chat with us
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 transition-all duration-300 shadow-2xl border-0 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold text-white">BusinessFlow Pro Support</CardTitle>
                <div className="flex items-center space-x-1 text-xs text-white/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white">AI Agent • Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Quick Actions */}
            <div className="p-4 border-b bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="cursor-pointer hover:bg-blue-100 text-xs"
                    onClick={action.action}
                  >
                    {action.text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      {message.sender === 'user' ? 
                        <User className="h-4 w-4 text-white" /> : 
                        <Bot className="h-4 w-4 text-gray-600" />
                      }
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                      <Bot className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="rounded-lg p-3 bg-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700"
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