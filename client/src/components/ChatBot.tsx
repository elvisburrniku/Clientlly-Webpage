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
  Zap,
  Search,
  MessageSquare,
  FileText,
  CreditCard,
  Settings,
  Phone,
  Mail,
  ChevronRight,
  Clock,
  Home,
  ArrowLeft
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

interface HelpTopic {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentView, setCurrentView] = useState<'menu' | 'chat' | 'search'>('menu');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const helpTopics: HelpTopic[] = [
    {
      id: 'pricing',
      title: 'Pricing and billing',
      description: 'Plans, payments, and subscription management',
      icon: CreditCard
    },
    {
      id: 'features',
      title: 'Features and capabilities',
      description: 'Learn about invoicing, expenses, CRM, and more',
      icon: Zap
    },
    {
      id: 'getting-started',
      title: 'Getting started',
      description: 'Setup, onboarding, and first steps',
      icon: FileText
    },
    {
      id: 'account',
      title: 'Account management',
      description: 'Profile, settings, and team management',
      icon: Settings
    },
    {
      id: 'mobile',
      title: 'Mobile apps',
      description: 'iOS and Android app support',
      icon: Phone
    },
    {
      id: 'contact',
      title: 'Contact support',
      description: 'Speak with our support team',
      icon: Mail
    }
  ];

  const recentMessages = [
    {
      id: '1',
      title: 'Hello!',
      sender: 'BusinessFlow Pro',
      time: '17m ago'
    }
  ];

  const startChat = (topic?: string) => {
    setCurrentView('chat');
    if (topic) {
      const topicMessage: Message = {
        id: Date.now().toString(),
        text: `I'd like to know more about ${topic}`,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([topicMessage]);
      setIsTyping(true);
      
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(`I'd like to know more about ${topic}`),
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    } else {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hi! I'm the BusinessFlow Pro AI Assistant. I'm here to help you with questions about our features, pricing, and getting started. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Chat Widget Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
        >
          {/* Logo/Brand Icon */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">1</span>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 shadow-lg whitespace-nowrap">
          <div className="text-xs font-medium">Need help?</div>
          <div className="text-xs text-gray-300">Chat with BusinessFlow Pro</div>
          {/* Tooltip Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <Card className={`w-80 sm:w-96 transition-all duration-300 shadow-2xl border-0 overflow-hidden ${isMinimized ? 'h-16' : 'h-[500px] sm:h-[544px]'}`}>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              {/* Logo matching the button */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-sm font-semibold truncate">BusinessFlow Pro</CardTitle>
                <p className="text-xs text-blue-100 truncate">Support Team • Online now</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 h-7 w-7 sm:h-8 sm:w-8 p-0 transition-colors"
              >
                {isMinimized ? <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" /> : <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  setCurrentView('menu');
                  setMessages([]);
                }}
                className="text-white hover:bg-white/20 h-7 w-7 sm:h-8 sm:w-8 p-0 transition-colors"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[500px]">
            {/* Menu View */}
            {currentView === 'menu' && (
              <div className="flex flex-col h-full">
                {/* Welcome Message */}
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-b border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Hello there.</h3>
                  <p className="text-blue-700">How can we help?</p>
                </div>

                {/* Recent Messages */}
                <div className="px-3 sm:px-4 py-3 border-b border-blue-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-3 w-3 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700">Recent message</p>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">B</span>
                          </div>
                          <span className="text-xs text-gray-500 truncate">BusinessFlow Pro • 17m ago</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Send Message */}
                <button 
                  onClick={() => startChat()}
                  className="px-3 sm:px-4 py-4 border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors text-left flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Send us a message</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>

                {/* Search for Help */}
                <button 
                  onClick={() => setCurrentView('search')}
                  className="px-3 sm:px-4 py-4 border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors text-left flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Search for help</span>
                  </div>
                  <Search className="h-4 w-4 text-gray-400" />
                </button>

                {/* Help Topics */}
                <div className="flex-1 overflow-y-auto bg-white">
                  {helpTopics.map((topic) => {
                    const IconComponent = topic.icon;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => startChat(topic.title)}
                        className="w-full px-3 sm:px-4 py-4 border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors text-left flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <IconComponent className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{topic.title}</p>
                            <p className="text-xs text-gray-600 truncate">{topic.description}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation */}
                <div className="flex border-t border-blue-200 bg-blue-50">
                  <div className="flex-1 text-center py-3 border-r border-blue-200">
                    <Home className="h-4 w-4 mx-auto text-blue-600 mb-1" />
                    <span className="text-xs text-blue-600 font-medium">Home</span>
                  </div>
                  <div className="flex-1 text-center py-3 border-r border-blue-200">
                    <MessageCircle className="h-4 w-4 mx-auto text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">Messages</span>
                  </div>
                  <div className="flex-1 text-center py-3">
                    <HelpCircle className="h-4 w-4 mx-auto text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">Help</span>
                  </div>
                </div>
              </div>
            )}

            {/* Search View */}
            {currentView === 'search' && (
              <div className="flex flex-col h-full bg-white">
                <div className="p-3 sm:p-4 border-b border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="flex items-center space-x-2 mb-3">
                    <button onClick={() => setCurrentView('menu')}>
                      <ArrowLeft className="h-5 w-5 text-blue-700" />
                    </button>
                    <h3 className="text-lg font-semibold text-blue-900">Search for help</h3>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search help topics..."
                      className="pl-10 bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white">
                  <p className="text-sm text-gray-600">Type your question or search for help topics.</p>
                </div>
              </div>
            )}

            {/* Chat View */}
            {currentView === 'chat' && (
              <>
                <div className="p-3 sm:p-4 border-b border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setCurrentView('menu')}>
                      <ArrowLeft className="h-5 w-5 text-blue-700" />
                    </button>
                    <h3 className="text-lg font-semibold text-blue-900">Chat Support</h3>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-500'
                        }`}>
                          {message.sender === 'user' ? 
                            <User className="h-4 w-4 text-white" /> : 
                            <Bot className="h-4 w-4 text-white" />
                          }
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-900 shadow-sm border border-gray-200'
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
                      <div className="flex items-start space-x-2 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-500">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="rounded-lg p-3 bg-white shadow-sm border border-gray-200">
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
                <div className="p-3 sm:p-4 border-t border-blue-200 bg-white">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-500"
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
              </>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}