import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Maximize2, Home, HelpCircle, Send, ArrowLeft, Search, ChevronRight, Bot, User, MessageSquare, DollarSign, Users, Calendar, Settings, CreditCard, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface HelpTopic {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentView, setCurrentView] = useState<'menu' | 'chat' | 'search'>('menu');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  


  const helpTopics: HelpTopic[] = [
    { id: '1', title: 'Pricing & Plans', description: 'Learn about our subscription options', icon: DollarSign },
    { id: '2', title: 'Account Setup', description: 'Get help setting up your account', icon: Users },
    { id: '3', title: 'Features Overview', description: 'Discover all available features', icon: Settings },
    { id: '4', title: 'Billing Support', description: 'Questions about billing and payments', icon: CreditCard },
    { id: '5', title: 'Technical Support', description: 'Get help with technical issues', icon: Shield },
    { id: '6', title: 'Schedule Demo', description: 'Book a personalized demo', icon: Calendar },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const startChat = (initialMessage?: string) => {
    setCurrentView('chat');
    if (initialMessage && !messages.find(m => m.text === initialMessage)) {
      handleSendMessage(initialMessage);
    }
  };

  const getAIResponse = async (userMessage: string): Promise<string> => {
    const responses: { [key: string]: string } = {
      'pricing': 'Our BusinessFlow Pro plans start at $29/month for Basic, $79/month for Professional, and $159/month for Business. Each plan includes different features to scale with your needs. Would you like me to explain the differences?',
      'features': 'BusinessFlow Pro includes invoicing, expense tracking, CRM, inventory management, attendance tracking, debt management, and much more. Which specific feature would you like to learn about?',
      'demo': 'I\'d be happy to help you schedule a demo! You can book a personalized demonstration at your convenience. Would you like me to guide you through the booking process?',
      'trial': 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. Would you like to begin your free trial today?',
      'support': 'Our support team is available 24/7 to help with any questions. You can reach us through this chat, email, or phone. How can I assist you today?',
      'security': 'We use bank-level encryption and comply with industry standards to keep your data secure. All data is encrypted in transit and at rest. Would you like more details about our security measures?',
    };

    const message = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    return 'Thank you for your message! Our team will help you with that. Is there anything specific about BusinessFlow Pro you\'d like to know more about? I can help with pricing, features, demos, or any other questions.';
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(async () => {
      const aiResponse = await getAIResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => {
            setIsOpen(true);
            setIsClosing(false);
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden hover:scale-110"
        >
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">1</span>
          </div>
          
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
        </button>

        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 shadow-lg whitespace-nowrap">
          <div className="text-xs font-medium">Need help?</div>
          <div className="text-xs text-gray-300">Chat with BusinessFlow Pro</div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-84 sm:w-[420px] transition-all duration-300 ease-in-out shadow-2xl border-0 overflow-hidden transform ${
        isMinimized ? 'h-16 scale-95' : 'h-[560px] sm:h-[600px] scale-100'
      } ${
        isClosing 
          ? 'animate-out slide-out-to-bottom-4 fade-out duration-200' 
          : isOpen 
            ? 'animate-in slide-in-from-bottom-4 fade-in duration-300' 
            : ''
      }`}>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 flex-shrink-0">
          <div className="flex items-center justify-between min-h-[44px]">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-white truncate leading-tight">BusinessFlow Pro</h2>
                <p className="text-xs sm:text-sm text-blue-100 truncate leading-tight">Support bot • AI Agent</p>
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
                  setIsClosing(true);
                  setTimeout(() => {
                    setIsOpen(false);
                    setIsClosing(false);
                    setCurrentView('menu');
                    setMessages([]);
                  }, 200);
                }}
                className="text-white hover:bg-white/20 h-7 w-7 sm:h-8 sm:w-8 p-0 transition-colors"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[516px] sm:h-[556px]">
            {/* Menu View */}
            {currentView === 'menu' && (
              <div className="flex flex-col h-full min-h-0">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-b border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Hello there.</h3>
                  <p className="text-blue-700">How can we help?</p>
                </div>

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

                <div className="flex-1 overflow-y-auto bg-white min-h-0">
                  {helpTopics.map((topic) => {
                    const IconComponent = topic.icon;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => startChat(topic.title)}
                        className="w-full px-3 sm:px-4 py-3 border-b border-blue-200 bg-white hover:bg-blue-50 transition-colors text-left flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <IconComponent className="h-4 w-4 text-blue-600 flex-shrink-0" />
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

                <div className="flex border-t border-blue-200 bg-blue-50 mt-auto">
                  <button 
                    onClick={() => setCurrentView('menu')}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors bg-blue-100"
                  >
                    <Home className="h-6 w-6 mb-1 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">Home</span>
                  </button>
                  <button 
                    onClick={() => startChat()}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Messages</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('search')}
                    className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-blue-100 transition-colors"
                  >
                    <HelpCircle className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Help</span>
                  </button>
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
                
                <div className="flex border-t border-blue-200 bg-blue-50 mt-auto">
                  <button 
                    onClick={() => setCurrentView('menu')}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <Home className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Home</span>
                  </button>
                  <button 
                    onClick={() => startChat()}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Messages</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('search')}
                    className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-blue-100 transition-colors bg-blue-100"
                  >
                    <HelpCircle className="h-6 w-6 mb-1 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">Help</span>
                  </button>
                </div>
              </div>
            )}

            {/* Chat View */}
            {currentView === 'chat' && (
              <div className="flex flex-col h-full">
                <div className="p-3 sm:p-4 border-b border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setCurrentView('menu')}>
                      <ArrowLeft className="h-5 w-5 text-blue-700" />
                    </button>
                    <h3 className="text-lg font-semibold text-blue-900">Chat Support</h3>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gray-50 min-h-0">
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
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex border-t border-blue-200 bg-blue-50 mt-auto">
                  <button 
                    onClick={() => setCurrentView('menu')}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <Home className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Home</span>
                  </button>
                  <button 
                    onClick={() => startChat()}
                    className="flex-1 flex flex-col items-center justify-center py-4 border-r border-blue-200 hover:bg-blue-100 transition-colors bg-blue-100"
                  >
                    <MessageCircle className="h-6 w-6 mb-1 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">Messages</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('search')}
                    className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-blue-100 transition-colors"
                  >
                    <HelpCircle className="h-6 w-6 mb-1 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500">Help</span>
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        )}


      </Card>
    </div>
  );
}