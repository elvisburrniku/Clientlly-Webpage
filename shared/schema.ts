import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  integer,
  boolean,
  serial,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  stripeCustomerId: varchar("stripe_customer_id"),
  stripeSubscriptionId: varchar("stripe_subscription_id"),
  subscriptionStatus: varchar("subscription_status"), // active, canceled, past_due, etc.
  subscriptionPlan: varchar("subscription_plan"), // basic, professional, business
  currency: varchar("currency").default("USD"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Demo requests table
export const demoRequests = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name").notNull(),
  email: varchar("email").notNull(),
  companyName: varchar("company_name").notNull(),
  companySize: varchar("company_size").notNull(),
  message: text("message"),
  status: varchar("status").default("pending"), // pending, contacted, completed
  createdAt: timestamp("created_at").defaultNow(),
});

// Subscription plans table
export const subscriptionPlans = pgTable("subscription_plans", {
  id: varchar("id").primaryKey(), // basic, professional, business
  name: varchar("name").notNull(),
  price: integer("price").notNull(), // price in cents
  features: jsonb("features").notNull(),
  stripePriceId: varchar("stripe_price_id"),
  isActive: boolean("is_active").default(true),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  firstName: true,
  lastName: true,
});

// Workflow recommendations table
export const workflowRecommendations = pgTable("workflow_recommendations", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  category: varchar("category").notNull(), // automation, optimization, integration, etc.
  priority: varchar("priority").default("medium"), // low, medium, high, critical
  estimatedTimeSaving: integer("estimated_time_saving"), // minutes per week
  difficulty: varchar("difficulty").default("easy"), // easy, medium, hard
  status: varchar("status").default("pending"), // pending, viewed, implemented, dismissed
  metadata: jsonb("metadata"), // additional data like affected workflows, requirements
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User workflow analytics table
export const workflowAnalytics = pgTable("workflow_analytics", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  action: varchar("action").notNull(), // invoice_created, expense_added, report_generated, etc.
  category: varchar("category").notNull(), // invoicing, expenses, reports, crm, etc.
  duration: integer("duration"), // time spent in milliseconds
  metadata: jsonb("metadata"), // context data like invoice amount, client info, etc.
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).pick({
  fullName: true,
  email: true,
  companyName: true,
  companySize: true,
  message: true,
});

export const insertWorkflowRecommendationSchema = createInsertSchema(workflowRecommendations).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertWorkflowAnalyticsSchema = createInsertSchema(workflowAnalytics).omit({
  id: true,
  timestamp: true,
});

export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type DemoRequest = typeof demoRequests.$inferSelect;
export type WorkflowRecommendation = typeof workflowRecommendations.$inferSelect;
export type InsertWorkflowRecommendation = z.infer<typeof insertWorkflowRecommendationSchema>;
export type WorkflowAnalytics = typeof workflowAnalytics.$inferSelect;
export type InsertWorkflowAnalytics = z.infer<typeof insertWorkflowAnalyticsSchema>;

export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type InsertSubscriptionPlan = typeof subscriptionPlans.$inferInsert;
