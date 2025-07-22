# BusinessFlow Pro - Full-Stack Business Management Platform

## Overview

BusinessFlow Pro is a comprehensive business management SaaS application built with a modern full-stack architecture. The platform provides a beautiful subscription-based frontend similar to Cliently, featuring invoicing, expense tracking, CRM, HR management, and contract management capabilities. The system includes seamless Stripe payment integration and comprehensive Laravel integration documentation for automated user account creation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 22, 2025)

✓ Built complete subscription website with Cliently-inspired design
✓ Implemented Stripe payment integration with three pricing tiers
✓ Created comprehensive demo request functionality
✓ Added Replit Auth integration for user management
✓ Developed responsive landing page with feature showcases
✓ Built authenticated dashboard for business management
✓ Created detailed Laravel integration guide with webhooks
✓ Implemented PostgreSQL database with user and subscription tracking
✓ Built interactive pricing calculator with real-time recommendations
✓ Created step-by-step subscription flow with email collection (FreshBooks-style)
✓ Added comprehensive user onboarding with account creation, company details, and payment steps
✓ Implemented development mode webhook mocking for testing subscription flow
✓ Created production-ready webhook handling for Laravel account creation
✓ Added comprehensive Laravel integration documentation with code examples
✓ COMPLETED comprehensive translation system for entire landing page (July 19, 2025)
✓ Implemented reactive language switching with global state management
✓ Added location detection with automatic country, currency, and timezone detection
✓ Built language selector supporting 12 languages with country flags
✓ Completed translations for all sections: Navigation, Hero, Features, Pricing, Testimonials, Contact, Footer, Demo modal
✓ Added comprehensive Spanish translations structure ready for expansion to all 12 languages
✓ COMPLETED migration from Replit Agent to standard Replit environment (July 22, 2025)
✓ Fixed all TypeScript errors and updated Stripe API integration
✓ Updated features section with comprehensive business management features
✓ Added "Learn more" buttons for each feature with beautiful animations
✓ Removed bank feeds, capture & organize receipts features as requested
✓ Enhanced feature cards with consistent styling and hover animations
✓ Integrated custom 3D logo (orange/purple design) replacing text branding
✓ Updated navigation to use 3D logo as primary brand element across all pages
✓ Fixed feature page navigation - back buttons now properly redirect to main features section
✓ Updated back button URLs to use full domain path for proper navigation flow
✓ COMPLETED button text updates (July 22, 2025) - changed all "Get Started" to "Buy Now" and "Start Free" to "Try It Free"
✓ Added comprehensive multi-currency support with 10 major currencies and real-time price conversion
✓ Updated database schema with currency field for user preferences

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **Payment Processing**: Stripe React components for checkout flows

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Authentication**: Replit Auth (OpenID Connect)
- **Session Management**: Express sessions with PostgreSQL store
- **Payment Processing**: Stripe webhooks and API integration

### Database Schema
- **Users**: Core user profiles with Stripe integration fields
- **Sessions**: Required for Replit Auth (connect-pg-simple)
- **Demo Requests**: Lead generation and sales pipeline
- **Subscription Plans**: Flexible pricing tiers with features

## Key Components

### Authentication System
- **Provider**: Replit Auth with OpenID Connect
- **Session Storage**: PostgreSQL-backed sessions
- **User Management**: Automatic user creation and profile management
- **Authorization**: Route-level protection with authentication middleware

### Subscription Management
- **Payment Gateway**: Stripe with webhook validation
- **Pricing Tiers**: Basic ($29), Professional ($79), Business ($159)
- **Features**: Tiered feature access based on subscription level
- **Billing**: Automated subscription lifecycle management

### Frontend Components
- **Landing Page**: Marketing site with demo request forms
- **Dashboard**: Authenticated user interface for business management
- **Subscription Flow**: Stripe Elements integration for payment processing
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### API Routes
- **Authentication**: User profile and session management
- **Subscriptions**: Stripe integration for plan management
- **Demo Requests**: Lead capture and management
- **Webhooks**: Stripe event processing for subscription updates

## Data Flow

### User Registration Flow
1. User authenticates via Replit Auth
2. Profile automatically created/updated in database
3. Redirect to dashboard or subscription selection
4. Stripe customer creation on subscription selection

### Subscription Flow
1. User selects pricing plan
2. Stripe Payment Intent created
3. Payment processed via Stripe Elements
4. Webhook updates user subscription status
5. Feature access granted based on plan tier

### Authentication Flow
1. Replit Auth handles OAuth flow
2. Session stored in PostgreSQL
3. User profile synchronized with auth provider
4. Protected routes check authentication status

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Auth**: Authentication provider
- **Stripe**: Payment processing and subscription management

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Production bundle optimization
- **Vite**: Development server and build system

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon system
- **Tailwind CSS**: Utility-first styling

## Deployment Strategy

### Production Build
- **Frontend**: Vite production build with asset optimization
- **Backend**: ESBuild bundle with external packages
- **Database**: Drizzle schema push for migrations
- **Environment**: NODE_ENV-based configuration

### Environment Variables
- **Database**: `DATABASE_URL` for Neon connection
- **Authentication**: Replit Auth configuration
- **Payments**: Stripe public/secret keys and webhook secrets
- **Sessions**: Secure session secret for encryption

### Development Workflow
- **Hot Reloading**: Vite dev server with HMR
- **Type Safety**: TypeScript across frontend and backend
- **Database**: Development migrations with Drizzle Kit
- **API Development**: Express middleware with error handling

The application follows a monorepo structure with shared TypeScript types and utilities, enabling rapid development while maintaining type safety across the full stack. The architecture supports horizontal scaling through the serverless database and stateless API design with session-based authentication.