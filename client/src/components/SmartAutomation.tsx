import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { 
  Zap, 
  Plus, 
  Settings, 
  Play,
  Pause,
  Clock,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
  Calendar,
  Mail,
  DollarSign,
  Users
} from "lucide-react";

interface AutomationRule {
  id: string;
  name: string;
  description?: string;
  triggerType: string;
  triggerConditions: any;
  actions: any[];
  isEnabled: boolean;
  lastTriggered?: string;
  createdAt: string;
}

export function SmartAutomation() {
  const { toast } = useToast();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingRule, setEditingRule] = useState<AutomationRule | null>(null);
  const [newRule, setNewRule] = useState({
    name: '',
    description: '',
    triggerType: '',
    triggerConditions: {},
    actions: []
  });

  // Mock automation rules data
  const mockAutomationRules: AutomationRule[] = [
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
      createdAt: new Date(Date.now() - 14 * 86400000).toISOString()
    }
  ];

  const automationRules = mockAutomationRules;
  const isLoading = false;

  const createRuleMutation = useMutation({
    mutationFn: async (rule: any) => {
      // Mock implementation
      console.log('Creating automation rule:', rule);
      return { success: true };
    },
    onSuccess: () => {
      setShowCreateDialog(false);
      setNewRule({ name: '', description: '', triggerType: '', triggerConditions: {}, actions: [] });
      toast({ title: "Automation rule created", description: "Your new automation is now active." });
    }
  });

  const toggleRuleMutation = useMutation({
    mutationFn: async ({ id, enabled }: { id: string; enabled: boolean }) => {
      // Mock implementation
      console.log('Toggling automation rule:', id, enabled);
      return { success: true };
    },
    onSuccess: () => {
      toast({ title: "Rule updated" });
    }
  });

  const deleteRuleMutation = useMutation({
    mutationFn: async (id: string) => {
      // Mock implementation
      console.log('Deleting automation rule:', id);
      return { success: true };
    },
    onSuccess: () => {
      toast({ title: "Rule deleted", description: "Automation rule has been removed." });
    }
  });

  const triggerTypes = [
    { value: 'invoice_overdue', label: 'Invoice Overdue', icon: DollarSign },
    { value: 'expense_threshold', label: 'Expense Threshold', icon: AlertCircle },
    { value: 'revenue_milestone', label: 'Revenue Milestone', icon: CheckCircle },
    { value: 'client_inactive', label: 'Client Inactive', icon: Users },
    { value: 'contract_expiry', label: 'Contract Expiry', icon: Calendar },
  ];

  const actionTypes = [
    { value: 'send_email', label: 'Send Email', icon: Mail },
    { value: 'create_task', label: 'Create Task', icon: Plus },
    { value: 'send_reminder', label: 'Send Reminder', icon: Clock },
    { value: 'update_status', label: 'Update Status', icon: Settings },
  ];

  const getTriggerIcon = (type: string) => {
    const trigger = triggerTypes.find(t => t.value === type);
    const Icon = trigger?.icon || Zap;
    return <Icon className="h-4 w-4" />;
  };

  const formatLastTriggered = (date?: string) => {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold">Smart Automation</h2>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {automationRules.filter((rule: AutomationRule) => rule.isEnabled).length} active
          </Badge>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Rule
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Automation Rule</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Rule Name</Label>
                <Input
                  id="name"
                  value={newRule.name}
                  onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                  placeholder="e.g., Send overdue reminders"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newRule.description}
                  onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                  placeholder="What does this automation do?"
                />
              </div>
              <div>
                <Label htmlFor="trigger">Trigger</Label>
                <Select value={newRule.triggerType} onValueChange={(value) => setNewRule({ ...newRule, triggerType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a trigger" />
                  </SelectTrigger>
                  <SelectContent>
                    {triggerTypes.map((trigger) => (
                      <SelectItem key={trigger.value} value={trigger.value}>
                        <div className="flex items-center gap-2">
                          <trigger.icon className="h-4 w-4" />
                          {trigger.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={() => createRuleMutation.mutate(newRule)}
                disabled={!newRule.name || !newRule.triggerType}
                className="w-full"
              >
                Create Automation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Automation Rules */}
      <div className="space-y-4">
        {automationRules.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-2">No automation rules yet</h3>
              <p className="text-gray-500 mb-4">
                Create your first automation rule to save time and streamline your workflow.
              </p>
              <Button onClick={() => setShowCreateDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Rule
              </Button>
            </CardContent>
          </Card>
        ) : (
          automationRules.map((rule: AutomationRule) => (
            <Card key={rule.id} className={`transition-all duration-200 ${
              rule.isEnabled ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-gray-300'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getTriggerIcon(rule.triggerType)}
                      <h3 className="font-medium">{rule.name}</h3>
                      <Badge variant={rule.isEnabled ? "default" : "secondary"}>
                        {rule.isEnabled ? "Active" : "Paused"}
                      </Badge>
                    </div>
                    {rule.description && (
                      <p className="text-sm text-gray-600 mb-2">{rule.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Last triggered: {formatLastTriggered(rule.lastTriggered)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Created: {new Date(rule.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={rule.isEnabled}
                      onCheckedChange={(enabled) => 
                        toggleRuleMutation.mutate({ id: rule.id, enabled })
                      }
                    />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => deleteRuleMutation.mutate(rule.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Quick Setup Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Setup Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div 
              className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => {
                setNewRule({
                  name: 'Overdue Invoice Reminders',
                  description: 'Automatically send reminders for invoices overdue by 7 days',
                  triggerType: 'invoice_overdue',
                  triggerConditions: { days: 7 },
                  actions: []
                });
                setShowCreateDialog(true);
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium">Overdue Invoice Reminders</h4>
              </div>
              <p className="text-sm text-gray-600">
                Automatically send friendly reminders when invoices are overdue
              </p>
            </div>
            
            <div 
              className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => {
                setNewRule({
                  name: 'Monthly Revenue Reports',
                  description: 'Generate and send monthly revenue reports automatically',
                  triggerType: 'revenue_milestone',
                  triggerConditions: { period: 'monthly' },
                  actions: []
                });
                setShowCreateDialog(true);
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium">Monthly Revenue Reports</h4>
              </div>
              <p className="text-sm text-gray-600">
                Automatically generate and send monthly financial summaries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}