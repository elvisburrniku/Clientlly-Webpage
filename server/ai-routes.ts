import { Request, Response } from "express";

// Mock AI data for demonstration
const mockInsights = [
  {
    id: '1',
    insightType: 'opportunity',
    title: 'Revenue Growth Opportunity',
    description: 'Client ABC Corp has increased spending by 40% this quarter. Consider proposing additional services.',
    priority: 'high',
    actionSuggestions: [
      'Schedule a meeting to discuss expanded services',
      'Prepare a custom proposal for additional features'
    ],
    isRead: false,
    isDismissed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    insightType: 'warning',
    title: 'Payment Delay Pattern',
    description: 'Three clients have delayed payments by more than 10 days this month.',
    priority: 'medium',
    actionSuggestions: [
      'Review payment terms with affected clients',
      'Consider implementing automated reminders'
    ],
    isRead: false,
    isDismissed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    insightType: 'trend',
    title: 'Seasonal Revenue Trend',
    description: 'Revenue typically increases by 25% in Q4. Plan inventory and resources accordingly.',
    priority: 'medium',
    actionSuggestions: [
      'Increase inventory for Q4 demand',
      'Consider seasonal pricing adjustments'
    ],
    isRead: true,
    isDismissed: false,
    createdAt: new Date().toISOString()
  }
];

const mockPredictions = [
  {
    id: '1',
    predictionType: 'cash_flow',
    data: { projected: 12450, confidence: 87 },
    confidence: 87,
    timeframe: '1_month',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    predictionType: 'revenue',
    data: { expected: 28900, growth: 15 },
    confidence: 92,
    timeframe: '3_months',
    createdAt: new Date().toISOString()
  }
];

const mockAutomationRules = [
  {
    id: '1',
    name: 'Overdue Invoice Reminders',
    description: 'Send automatic reminders for invoices overdue by 7+ days',
    triggerType: 'invoice_overdue',
    triggerConditions: { days: 7 },
    actions: [{ type: 'send_email', template: 'overdue_reminder' }],
    isEnabled: true,
    lastTriggered: new Date(Date.now() - 86400000).toISOString(),
    createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
  },
  {
    id: '2',
    name: 'Monthly Revenue Reports',
    description: 'Generate monthly revenue summaries automatically',
    triggerType: 'revenue_milestone',
    triggerConditions: { period: 'monthly' },
    actions: [{ type: 'send_email', template: 'revenue_report' }],
    isEnabled: true,
    lastTriggered: null,
    createdAt: new Date(Date.now() - 14 * 86400000).toISOString()
  }
];

export async function getAIInsights(req: Request, res: Response) {
  try {
    res.json(mockInsights);
  } catch (error) {
    console.error('Error fetching AI insights:', error);
    res.status(500).json({ error: 'Failed to fetch insights' });
  }
}

export async function getAIPredictions(req: Request, res: Response) {
  try {
    res.json(mockPredictions);
  } catch (error) {
    console.error('Error fetching AI predictions:', error);
    res.status(500).json({ error: 'Failed to fetch predictions' });
  }
}

export async function markInsightAsRead(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const insight = mockInsights.find(i => i.id === id);
    if (insight) {
      insight.isRead = true;
    }
    res.json({ success: true });
  } catch (error) {
    console.error('Error marking insight as read:', error);
    res.status(500).json({ error: 'Failed to update insight' });
  }
}

export async function dismissInsight(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const insight = mockInsights.find(i => i.id === id);
    if (insight) {
      insight.isDismissed = true;
    }
    res.json({ success: true });
  } catch (error) {
    console.error('Error dismissing insight:', error);
    res.status(500).json({ error: 'Failed to dismiss insight' });
  }
}

export async function processVoiceCommand(req: Request, res: Response) {
  try {
    const { command, confidence } = req.body;
    
    // Mock voice command processing
    let result = {
      success: false,
      command,
      action: 'Unknown command',
      confidence: confidence || 0
    };

    // Simple command matching
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('create invoice')) {
      result = {
        success: true,
        command,
        action: 'Create new invoice',
        confidence: confidence || 85
      };
    } else if (lowerCommand.includes('show') && lowerCommand.includes('expense')) {
      result = {
        success: true,
        command,
        action: 'Display expense report',
        confidence: confidence || 90
      };
    } else if (lowerCommand.includes('add') && lowerCommand.includes('client')) {
      result = {
        success: true,
        command,
        action: 'Add new client',
        confidence: confidence || 88
      };
    } else if (lowerCommand.includes('schedule') && lowerCommand.includes('meeting')) {
      result = {
        success: true,
        command,
        action: 'Schedule calendar meeting',
        confidence: confidence || 82
      };
    } else if (lowerCommand.includes('revenue report')) {
      result = {
        success: true,
        command,
        action: 'Generate revenue report',
        confidence: confidence || 95
      };
    }

    res.json(result);
  } catch (error) {
    console.error('Error processing voice command:', error);
    res.status(500).json({ error: 'Failed to process voice command' });
  }
}

export async function getAutomationRules(req: Request, res: Response) {
  try {
    res.json(mockAutomationRules);
  } catch (error) {
    console.error('Error fetching automation rules:', error);
    res.status(500).json({ error: 'Failed to fetch automation rules' });
  }
}

export async function createAutomationRule(req: Request, res: Response) {
  try {
    const { name, description, triggerType, triggerConditions, actions } = req.body;
    
    const newRule = {
      id: String(mockAutomationRules.length + 1),
      name,
      description: description || '',
      triggerType,
      triggerConditions: triggerConditions || {},
      actions: actions || [],
      isEnabled: true,
      lastTriggered: null,
      createdAt: new Date().toISOString()
    };
    
    mockAutomationRules.push(newRule);
    res.status(201).json(newRule);
  } catch (error) {
    console.error('Error creating automation rule:', error);
    res.status(500).json({ error: 'Failed to create automation rule' });
  }
}

export async function toggleAutomationRule(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { enabled } = req.body;
    
    const rule = mockAutomationRules.find(r => r.id === id);
    if (rule) {
      rule.isEnabled = enabled;
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error toggling automation rule:', error);
    res.status(500).json({ error: 'Failed to toggle automation rule' });
  }
}

export async function deleteAutomationRule(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const index = mockAutomationRules.findIndex(r => r.id === id);
    
    if (index !== -1) {
      mockAutomationRules.splice(index, 1);
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting automation rule:', error);
    res.status(500).json({ error: 'Failed to delete automation rule' });
  }
}