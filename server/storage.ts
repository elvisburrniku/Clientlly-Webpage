import {
  users,
  demoRequests,
  subscriptionPlans,
  workflowRecommendations,
  workflowAnalytics,
  type User,
  type UpsertUser,
  type DemoRequest,
  type InsertDemoRequest,
  type SubscriptionPlan,
  type WorkflowRecommendation,
  type InsertWorkflowRecommendation,
  type WorkflowAnalytics,
  type InsertWorkflowAnalytics,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserStripeInfo(
    userId: string,
    stripeCustomerId: string,
    stripeSubscriptionId?: string
  ): Promise<User>;
  updateUserSubscription(
    userId: string,
    status: string,
    plan?: string
  ): Promise<User>;

  // Demo request operations
  createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;

  // Subscription plan operations
  getSubscriptionPlans(): Promise<SubscriptionPlan[]>;
  getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined>;

  // Workflow recommendations operations
  createWorkflowRecommendation(recommendation: InsertWorkflowRecommendation): Promise<WorkflowRecommendation>;
  getUserWorkflowRecommendations(userId: string): Promise<WorkflowRecommendation[]>;
  updateRecommendationStatus(id: number, status: string): Promise<WorkflowRecommendation>;
  deleteWorkflowRecommendation(id: number): Promise<void>;

  // Workflow analytics operations
  trackWorkflowAction(analytics: InsertWorkflowAnalytics): Promise<WorkflowAnalytics>;
  getUserWorkflowAnalytics(userId: string, limit?: number): Promise<WorkflowAnalytics[]>;
  getWorkflowAnalyticsByCategory(userId: string, category: string): Promise<WorkflowAnalytics[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations (mandatory for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserStripeInfo(
    userId: string,
    stripeCustomerId: string,
    stripeSubscriptionId?: string
  ): Promise<User> {
    const updateData: Partial<User> = {
      stripeCustomerId,
      updatedAt: new Date(),
    };
    
    if (stripeSubscriptionId) {
      updateData.stripeSubscriptionId = stripeSubscriptionId;
    }

    const [user] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, userId))
      .returning();
    return user;
  }

  async updateUserSubscription(
    userId: string,
    status: string,
    plan?: string
  ): Promise<User> {
    const updateData: Partial<User> = {
      subscriptionStatus: status,
      updatedAt: new Date(),
    };
    
    if (plan) {
      updateData.subscriptionPlan = plan;
    }

    const [user] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, userId))
      .returning();
    return user;
  }

  // Demo request operations
  async createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const [request] = await db
      .insert(demoRequests)
      .values(demoRequest)
      .returning();
    return request;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return await db.select().from(demoRequests);
  }

  // Subscription plan operations
  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return await db
      .select()
      .from(subscriptionPlans)
      .where(eq(subscriptionPlans.isActive, true));
  }

  async getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined> {
    const [plan] = await db
      .select()
      .from(subscriptionPlans)
      .where(eq(subscriptionPlans.id, id));
    return plan;
  }

  // Workflow recommendations operations
  async createWorkflowRecommendation(recommendation: InsertWorkflowRecommendation): Promise<WorkflowRecommendation> {
    const [created] = await db
      .insert(workflowRecommendations)
      .values(recommendation)
      .returning();
    return created;
  }

  async getUserWorkflowRecommendations(userId: string): Promise<WorkflowRecommendation[]> {
    return await db
      .select()
      .from(workflowRecommendations)
      .where(eq(workflowRecommendations.userId, userId))
      .orderBy(workflowRecommendations.createdAt);
  }

  async updateRecommendationStatus(id: number, status: string): Promise<WorkflowRecommendation> {
    const [updated] = await db
      .update(workflowRecommendations)
      .set({ status, updatedAt: new Date() })
      .where(eq(workflowRecommendations.id, id))
      .returning();
    return updated;
  }

  async deleteWorkflowRecommendation(id: number): Promise<void> {
    await db
      .delete(workflowRecommendations)
      .where(eq(workflowRecommendations.id, id));
  }

  // Workflow analytics operations
  async trackWorkflowAction(analytics: InsertWorkflowAnalytics): Promise<WorkflowAnalytics> {
    const [tracked] = await db
      .insert(workflowAnalytics)
      .values(analytics)
      .returning();
    return tracked;
  }

  async getUserWorkflowAnalytics(userId: string, limit: number = 100): Promise<WorkflowAnalytics[]> {
    return await db
      .select()
      .from(workflowAnalytics)
      .where(eq(workflowAnalytics.userId, userId))
      .orderBy(workflowAnalytics.timestamp)
      .limit(limit);
  }

  async getWorkflowAnalyticsByCategory(userId: string, category: string): Promise<WorkflowAnalytics[]> {
    return await db
      .select()
      .from(workflowAnalytics)
      .where(
        and(
          eq(workflowAnalytics.userId, userId),
          eq(workflowAnalytics.category, category)
        )
      )
      .orderBy(workflowAnalytics.timestamp);
  }
}

export const storage = new DatabaseStorage();
