# Clientlly - Full-Stack Business Management Platform

## Overview

Clientlly is a comprehensive business management SaaS application designed for small to medium-sized businesses in Kosovo and the region. It offers a full-stack solution with 16 integrated modules including professional invoicing, smart expense tracking, debt management, client and vendor management, HR management, and detailed insights and reports. The platform provides full 8-language support: Albanian (sq 🇽🇰), English (en 🇬🇧), Spanish (es 🇪🇸), German (de 🇩🇪), Macedonian (mk 🇲🇰), French (fr 🇫🇷), Portuguese (pt 🇵🇹), Italian (it 🇮🇹). Uses Euro (€) currency by default. Company registered in Kosovo.

## Translation System (8-Language Infrastructure)

- **i18n.ts**: Core infrastructure — `T5` type, `t(lang, T5)` function, `useLanguage()` hook, `SUPPORTED_LANGUAGES` array (sq/en/es/de/mk/fr/pt/it)
- **translations.ts**: Central namespace objects: `C` (common), `LANDING`, `SUBSCRIBE`, `COMPARE`, `ABOUT`, `CONTACT`, `COLLAB`, `TRIAL`, `LOGIN`, `FEATURES_PAGE`, `FEAT`, `CHAT`, `PLAN_F`
- **Footer.tsx**: Fully migrated to `t(lang, C.xxx)` pattern — all 5 languages
- **landing.tsx**: Fully translated — all sections in 5 languages including hero, nav, features, stats, testimonials, pricing, community, CTA
- **All secondary pages**: Have 5-language `sq()` helper function with English fallback for ES/DE/MK strings not yet translated:
  - about.tsx, contact.tsx, trial.tsx, collaboration.tsx — hero titles translated in 5 languages
  - compare-features.tsx — hero title and plan comparison translated
  - subscribe.tsx — step titles in 5 languages, has `lang` variable and `sq()` helper
  - login.tsx — hero title in 5 languages, has `lang` variable and `sq()` helper

## User Preferences

Preferred communication style: Simple, everyday language.

**CRITICAL TRANSLATION RULE**: NEVER change the English website content when translating to other languages. English content must remain exactly as originally designed with all animations, styling, and text preserved. Translations only apply when users select Albanian or Macedonian languages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **UI/UX Decisions**:
    - Consistent yellow accent theme (amber-400 to orange-400 gradients) for key sections (CTAs, hero sections, VIP support, login, trial forms).
    - Professional, subtle animations (e.g., `fade-in`, `gradient-text`) across major titles for visual consistency.
    - Minimalist design principles applied by removing excessive decorative elements like floating background logos, sparkle animations (except in specific branded areas), and redundant cards.
    - Standardized typography with bold titles and normal-weight body text for readability and clear hierarchy.
    - Responsive design for optimal viewing on desktop and mobile devices.
    - Unified navigation with consistent logo branding, menu structure (About Us, Features, Pricing, Contact Us, Login, Buy Now, Start Your Trial), and mobile menu functionality.
    - Use of glass effects and gradient styling for cards and interactive elements.
    - European currency (EUR) as default with consistent formatting across all pricing displays.
    - Implementation of comprehensive legal pages (Terms of Service, Privacy Policy) and dedicated feature pages with consistent design patterns, tabbed interfaces, and customer testimonials.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM (Neon serverless PostgreSQL)
- **Authentication**: Replit Auth (OpenID Connect)
- **Session Management**: Express sessions with PostgreSQL store
- **Payment Processing**: Stripe webhooks and API integration

### Key Features and Implementations:
- **Subscription Management**: Stripe integration for flexible pricing tiers (€20/€35/€50 monthly with yearly discounts), automated billing, and feature-based access.
- **Multi-language Support**: Comprehensive translation system for English, Albanian, and Macedonian, ensuring English content remains untouched.
- **Career Page**: Redesigned into a comprehensive job application form with resume uploads and email redirection.
- **API Documentation**: Dedicated developer portal with code examples and API endpoint references.
- **Client Management**: Professional CRM suite with 360° profiles, analytics, follow-ups, and pipeline tracking.
- **HR Management**: Employee tracking, payroll, and performance management.
- **Invoicing & Expense Tracking**: Professional invoicing with selective privacy blur on sensitive data and tax-ready expense management with Euro currency consistency.
- **Data Protection**: Dedicated page outlining privacy principles, user rights, data categories, and retention policies.
- **Trial System**: Internal trial page integration for all "Start Your Trial" buttons.

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Auth**: Authentication provider
- **Stripe**: Payment processing and subscription management
- **Brevo (formerly SendGrid)**: Email service for transactional emails (e.g., career applications)

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Production bundle optimization
- **Vite**: Development server and build system

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon system
- **Tailwind CSS**: Utility-first styling