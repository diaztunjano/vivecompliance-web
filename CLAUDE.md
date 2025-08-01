# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React-based landing page for Vive Compliance built with modern web technologies. The application serves as the company's main website showcasing their compliance services, team, and resources.

## Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives via shadcn/ui
- **Analytics**: Vercel Analytics
- **Forms**: React Hook Form with Web3Forms integration

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture & Structure

### Component Organization
- **Main App**: `src/App.tsx` orchestrates all page sections in order
- **Components**: Located in `src/components/` - each section is a separate component
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Utils**: Helper functions in `src/lib/utils.ts`

### Key Sections (in order of appearance)
1. **Navbar** - Navigation with mobile sidebar
2. **Hero** - Main landing section with CTA
3. **Sponsors** - Partner logos and certifications
4. **About** - Company mission and vision
5. **Features** - Service differentiators
6. **Testimonials** - Client testimonials with carousel
7. **ViveComplianceMagazine** - Magazine section
8. **Webinars** - Educational content
9. **Team** - Team member profiles
10. **Contact** - Contact form and information
11. **FAQ** - Frequently asked questions
12. **Footer** - Links, contact info, and legal

### Configuration Files
- **Vite**: `vite.config.ts` with "@" alias for src folder
- **Tailwind**: `tailwind.config.js` with shadcn/ui theme extensions
- **shadcn/ui**: `components.json` for component configuration
- **TypeScript**: Standard React TS configuration

### Styling Approach
- Uses Tailwind CSS with CSS variables for theming
- Dark mode support via class-based switching
- Component variants using class-variance-authority
- shadcn/ui design system for consistent UI

### State Management
- Minimal state - mostly component-level React state
- Theme context via ThemeProvider
- PopUp state managed in App.tsx with 3-second delay

### External Integrations
- **Vercel Analytics**: Automatic page view tracking
- **Web3Forms**: Contact form submissions
- **YouTube**: Embedded videos in webinars section

## Content Management
The application content is primarily hardcoded in components, following the detailed specifications in `docs/prd.md`. The PRD defines all sections, content, and functionality requirements in Spanish.

## Image Assets
- **Team photos**: `public/team/`
- **Testimonials**: `public/testimonials/`  
- **Sponsors**: `public/sponsors_logos/`
- **Events**: `public/eventos/` and `public/seminarios/`

## Development Notes
- Components follow consistent patterns using shadcn/ui
- Forms use React Hook Form with proper validation
- Responsive design with mobile-first approach
- SEO optimized with proper meta tags
- Performance optimized with Vite bundling