export const landingPageTutorialSteps = [
  {
    id: 'welcome',
    title: 'Welcome to BusinessFlow Pro!',
    description: 'Let\'s take a quick tour of our comprehensive business management platform. This walkthrough will show you the key features and how to get started.',
    targetElement: '.logo-container',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'pulse' as const
  },
  {
    id: 'navigation',
    title: 'Navigation Menu',
    description: 'Use the navigation menu to explore different sections: Features, Pricing, and access your Calculator. These links will help you find everything you need.',
    targetElement: 'nav .hidden.lg\\:flex',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'bounce' as const
  },
  {
    id: 'cta-buttons',
    title: 'Get Started Options',
    description: 'Ready to begin? You can "Try Free First" to explore with no commitment, "Buy Now" to get full access immediately, or "Learn More" to see a demo.',
    targetElement: '.flex.flex-col.sm\\:flex-row.gap-6.justify-center',
    position: 'top' as const,
    highlightElement: true,
    animation: 'pulse' as const
  },
  {
    id: 'features-grid',
    title: 'Feature Overview',
    description: 'Explore our comprehensive business management features. Each card shows a key capability - click "Learn more" on any feature to dive deeper.',
    targetElement: '#features .grid.grid-cols-1.md\\:grid-cols-2',
    position: 'top' as const,
    highlightElement: true,
    animation: 'fade' as const
  },
  {
    id: 'pricing-section',
    title: 'Choose Your Plan',
    description: 'Select the perfect plan for your business size. Toggle between monthly and yearly billing to see savings. Each plan builds on the previous with more features.',
    targetElement: '#pricing',
    position: 'center' as const,
    highlightElement: false,
    animation: 'slide' as const
  },
  {
    id: 'calculator-link',
    title: 'Pricing Calculator',
    description: 'Not sure which plan fits? Use our intelligent calculator to get personalized recommendations based on your business needs and team size.',
    targetElement: 'nav a[href="/calculator"]',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'bounce' as const
  }
];

export const dashboardTutorialSteps = [
  {
    id: 'dashboard-welcome',
    title: 'Welcome to Your Dashboard!',
    description: 'This is your business command center. From here you can access all your tools and see important metrics at a glance.',
    targetElement: '.dashboard-header',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'pulse' as const
  },
  {
    id: 'quick-stats',
    title: 'Business Overview',
    description: 'These cards show your key business metrics: revenue, expenses, invoices, and clients. They update in real-time as your business grows.',
    targetElement: '.stats-grid',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'fade' as const
  },
  {
    id: 'recent-activity',
    title: 'Recent Activity',
    description: 'Stay updated with your latest business activities. See recent invoices, payments, and important notifications in one place.',
    targetElement: '.recent-activity',
    position: 'top' as const,
    highlightElement: true,
    animation: 'slide' as const
  },
  {
    id: 'navigation-sidebar',
    title: 'Feature Access',
    description: 'Use the sidebar to navigate between different business functions: invoicing, expenses, clients, reports, and more.',
    targetElement: '.sidebar-nav',
    position: 'right' as const,
    highlightElement: true,
    animation: 'bounce' as const
  }
];

export const calculatorTutorialSteps = [
  {
    id: 'calculator-intro',
    title: 'Smart Plan Calculator',
    description: 'Answer a few questions about your business and we\'ll recommend the perfect plan for your needs and budget.',
    targetElement: '.calculator-header',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'pulse' as const
  },
  {
    id: 'business-questions',
    title: 'Tell Us About Your Business',
    description: 'Select your business size, monthly revenue, and team size. This helps us understand your requirements.',
    targetElement: '.business-questions',
    position: 'bottom' as const,
    highlightElement: true,
    animation: 'fade' as const
  },
  {
    id: 'recommendations',
    title: 'Personalized Recommendations',
    description: 'Based on your answers, we\'ll highlight the best plan for you and explain why it\'s the right fit for your business.',
    targetElement: '.plan-recommendations',
    position: 'top' as const,
    highlightElement: true,
    animation: 'slide' as const
  }
];