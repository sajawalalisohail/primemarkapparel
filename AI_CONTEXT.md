# PrimeMark Apparel: AI Agent Development Context

This document provides essential context for AI agents working on the PrimeMark Apparel codebase. Adherence to these guidelines is critical for maintaining code quality, consistency, and stability.

## 1. Core Stack & Versions

- **Next.js:** `16.1.3` (App Router)
- **React:** `19.2.3`
- **TypeScript:** `^5`
- **Tailwind CSS:** `v4`
- **Framer Motion:** `^12.29.0`
- **Supabase:** `@supabase/supabase-js: ^2.90.1`

## 2. Project Structure

- **`src/app/`**: Main application source. Uses the Next.js App Router file-system-based routing.
  - `layout.tsx`: Root layout, shared across all pages.
  - `page.tsx`: Entry point for a specific route.
  - `globals.css`: Global styles and Tailwind CSS theme configuration.
- **`src/components/`**: Shared, reusable React components.
- **`src/lib/`**: Utility functions and library initializations.
  - `supabase.ts`: Supabase client instance.
  - `motion/`: Framer Motion variants and constants.
- **`public/`**: Static assets (images, fonts, etc.).
- **`eslint.config.mjs`, `next.config.ts`, `tsconfig.json`**: Core configuration files. Treat as protected.

## 3. Development Scripts

- **Development Server:** `npm run dev`
- **Linting:** `npm run lint`
- **Type Checking:** `npx tsc --noEmit`
- **Production Build:** `npm run build`

## 4. Key Architectural Conventions

### Next.js App Router

- **Server Components by Default:** All components in `src/app` are React Server Components (RSCs) unless explicitly marked with a `"use client"` directive.
- **Client Components:** Only use the `"use client"` directive for components that require interactivity (event handlers like `onClick`, `onChange`), state (`useState`, `useEffect`), or browser-only APIs.
- **Minimize Client Boundary:** Do not promote large component trees to the client. Keep client components as small and leaf-level as possible to preserve the benefits of server rendering (performance, reduced bundle size).
- **Hydration:** Be vigilant against hydration errors. Ensure valid HTML nesting (e.g., no `<div>` inside `<p>`) and correct use of server/client boundaries.

### Styling & Theming

- **CSS Variables:** All semantic colors for the UI *must* be applied using the variables defined in `src/app/globals.css` (e.g., `var(--color-background)`, `var(--color-text-primary)`).
- **No Hardcoded Colors:** Do not use hardcoded hex codes (e.g., `#FFFFFF`, `bg-blue-500`) for UI elements that are part of the theme. This ensures consistency and proper theming behavior (e.g., dark/light mode).
- **Tailwind CSS:** Use Tailwind v4 utility classes for styling. The theme is configured in `globals.css`.

### Animation

- **Framer Motion:** Use Framer Motion for animations. To maintain a consistent "premium" feel, use the `premiumEase` constant from `src/lib/motion/variants.ts` for transitions where appropriate.
- **Performance:** Prioritize `transform` and `opacity` for animations to avoid layout thrashing.

## 5. Protected Areas

The following files and folders are critical to the project's configuration and stability. Do not modify them without explicit user instruction and a clear understanding of the impact:

- `next.config.ts`
- `tsconfig.json`
- `package.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `src/app/globals.css` (especially theme variables)

Modifying these files can have wide-ranging effects on the build process, type safety, and overall application behavior.
