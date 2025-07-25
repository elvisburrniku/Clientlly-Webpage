import { pgTable, text, integer, timestamp, boolean, json, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// AI Predictions and Analytics
export const aiPredictions = pgTable("ai_predictions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  predictionType: text("prediction_type").notNull(), // 'cash_flow', 'revenue', 'expense_category', 'business_health'
  data: json("data").notNull(), // Prediction results and metadata
  confidence: integer("confidence").notNull(), // 0-100 confidence score
  timeframe: text("timeframe").notNull(), // '1_month', '3_months', '6_months', '1_year'
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"), // When prediction becomes stale
});

// Smart Automation Rules
export const automationRules = pgTable("automation_rules", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  triggerType: text("trigger_type").notNull(), // 'invoice_overdue', 'expense_threshold', 'revenue_milestone'
  triggerConditions: json("trigger_conditions").notNull(),
  actions: json("actions").notNull(), // Array of actions to perform
  isEnabled: boolean("is_enabled").default(true).notNull(),
  lastTriggered: timestamp("last_triggered"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Business Intelligence Insights
export const businessInsights = pgTable("business_insights", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  insightType: text("insight_type").notNull(), // 'opportunity', 'warning', 'trend', 'recommendation'
  title: text("title").notNull(),
  description: text("description").notNull(),
  priority: text("priority").notNull().default("medium"), // 'low', 'medium', 'high', 'critical'
  data: json("data"), // Supporting data and metrics
  actionSuggestions: json("action_suggestions"), // Recommended actions
  isRead: boolean("is_read").default(false).notNull(),
  isDismissed: boolean("is_dismissed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Voice Commands History
export const voiceCommands = pgTable("voice_commands", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  command: text("command").notNull(),
  interpretedAction: text("interpreted_action").notNull(),
  executedSuccessfully: boolean("executed_successfully").notNull(),
  result: json("result"), // Command execution result
  confidence: integer("confidence").notNull(), // Voice recognition confidence
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Smart Templates for Documents/Invoices
export const smartTemplates = pgTable("smart_templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  templateType: text("template_type").notNull(), // 'invoice', 'proposal', 'contract', 'email'
  name: text("name").notNull(),
  content: json("content").notNull(), // Template structure and AI placeholders
  aiSuggestions: json("ai_suggestions"), // AI-generated content suggestions
  usageCount: integer("usage_count").default(0).notNull(),
  lastUsed: timestamp("last_used"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Export schemas
export const insertAiPredictionSchema = createInsertSchema(aiPredictions).omit({ id: true, createdAt: true });
export const insertAutomationRuleSchema = createInsertSchema(automationRules).omit({ id: true, createdAt: true, lastTriggered: true });
export const insertBusinessInsightSchema = createInsertSchema(businessInsights).omit({ id: true, createdAt: true });
export const insertVoiceCommandSchema = createInsertSchema(voiceCommands).omit({ id: true, createdAt: true });
export const insertSmartTemplateSchema = createInsertSchema(smartTemplates).omit({ id: true, createdAt: true, lastUsed: true });

// Export types
export type AiPrediction = typeof aiPredictions.$inferSelect;
export type InsertAiPrediction = z.infer<typeof insertAiPredictionSchema>;
export type AutomationRule = typeof automationRules.$inferSelect;
export type InsertAutomationRule = z.infer<typeof insertAutomationRuleSchema>;
export type BusinessInsight = typeof businessInsights.$inferSelect;
export type InsertBusinessInsight = z.infer<typeof insertBusinessInsightSchema>;
export type VoiceCommand = typeof voiceCommands.$inferSelect;
export type InsertVoiceCommand = z.infer<typeof insertVoiceCommandSchema>;
export type SmartTemplate = typeof smartTemplates.$inferSelect;
export type InsertSmartTemplate = z.infer<typeof insertSmartTemplateSchema>;