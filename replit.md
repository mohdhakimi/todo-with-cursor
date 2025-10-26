# Overview

This is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS. The project uses the Next.js App Router architecture and includes a comprehensive UI component library based on shadcn/ui with Radix UI primitives. The application currently implements a simple todo list feature with add, edit, delete, and toggle functionality.

**Migration Status**: Successfully migrated from Vercel to Replit on October 26, 2025. The application is configured to run on port 5000 with proper host bindings for the Replit environment.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework Choice: Next.js 16 with App Router**
- **Problem**: Need a modern React framework with server-side rendering capabilities and optimal performance
- **Solution**: Next.js App Router provides file-based routing, server components by default, and excellent developer experience
- **Pros**: Built-in optimization, server components reduce bundle size, excellent SEO capabilities
- **Cons**: Learning curve for server vs client component patterns

**Styling Approach: Tailwind CSS with CSS Variables**
- **Problem**: Need a scalable, maintainable styling solution with theme support
- **Solution**: Tailwind CSS with custom theme configuration using CSS variables (OKLCH color space)
- **Pros**: Utility-first approach reduces CSS bloat, easy theming with CSS variables, dark mode support
- **Cons**: Requires learning Tailwind conventions

**Component Library: shadcn/ui (New York style)**
- **Problem**: Need accessible, customizable UI components without heavy dependencies
- **Solution**: shadcn/ui components built on Radix UI primitives with Tailwind styling
- **Rationale**: Copy-paste components provide full control, Radix UI ensures accessibility
- **Key Dependencies**: 
  - Radix UI primitives for accessible component foundations
  - class-variance-authority (CVA) for component variant management
  - lucide-react for iconography

**State Management**
- **Current Approach**: React useState hooks for local component state
- **Pattern**: Client-side state management within individual components
- **Note**: No global state management solution currently implemented (Redux, Zustand, etc. may be added later if needed)

## Build and Development

**TypeScript Configuration**
- **Target**: ES2017 for broad compatibility
- **Strict Mode**: Enabled for type safety
- **Path Aliases**: `@/*` mapped to project root for clean imports
- **JSX**: Configured for react-jsx runtime

**Development Server Configuration**
- **Port**: Custom port 5000 (instead of default 3000)
- **Host**: 0.0.0.0 for network accessibility
- **Hot Reload**: Next.js built-in fast refresh enabled

**Font Optimization**
- **Solution**: next/font for automatic font optimization
- **Fonts Used**: Geist Sans and Geist Mono from Vercel
- **Benefit**: Self-hosted fonts with zero layout shift

## Design System

**Theme System**
- **Color Palette**: OKLCH color space for perceptually uniform colors
- **CSS Variables**: All theme tokens defined as CSS variables for runtime theming
- **Dark Mode**: Built-in support through next-themes (included but not yet implemented in components)
- **Border Radius**: Configurable radius system (sm, md, lg, xl variants)

**Component Variants**
- **Pattern**: CVA-based variant system for consistent component APIs
- **Example**: Button component with variant (default, destructive, outline, secondary, ghost, link) and size (default, sm, lg, icon) options

## Current Features

**Todo List Application**
- **Functionality**: Create, read, update, delete (CRUD) operations for todos
- **State Shape**: Todos stored as array of objects with id, text, and completed properties
- **Client-Side Only**: Currently no persistence layer (in-memory state only)

# External Dependencies

## UI Component Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, popover, select, tabs, toast, tooltip, etc.)
- **lucide-react**: Icon library providing consistent, customizable SVG icons

## Form Management
- **@hookform/resolvers**: Validation resolvers for react-hook-form (included but not yet actively used)

## Utility Libraries
- **class-variance-authority**: Type-safe component variant management
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Merges Tailwind CSS classes intelligently to avoid conflicts
- **cmdk**: Command menu component (included but not yet implemented)
- **date-fns**: Date manipulation library
- **embla-carousel-react**: Carousel component library
- **input-otp**: OTP input component

## Analytics and Monitoring
- **@vercel/analytics**: Vercel Analytics integration for production metrics

## Potential Future Integrations
- **Database**: No ORM or database client currently configured (Drizzle may be added later)
- **Authentication**: No auth solution currently implemented
- **API Routes**: Next.js API routes available but not yet utilized
- **State Management**: Global state solution may be added if application complexity increases