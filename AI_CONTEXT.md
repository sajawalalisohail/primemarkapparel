# PrimeMark Apparel: AI Agent Development Context

This document provides *mandatory* context for AI agents working on the PrimeMark Apparel codebase. You must adhere to these guidelines to maintain code quality, consistency, and stability.

## 1. Core Stack & Versions
- **Next.js:** `16.1.3` (App Router)
- **React:** `19.2.3`
- **TypeScript:** `^5` (Strict mode)
- **Tailwind CSS:** `v4` (Configuration via `@theme` in `global.css`)
- **Framer Motion:** `^12.29.0`
- **Supabase:** `@supabase/supabase-js` `^2.90.1`

## 2. Project Structure
- **`src/app/`**: App Router routes.
  - `layout.tsx`: Root layout & providers.
  - `globals.css`: **Single Source of Truth** for styles & theme variables.
- **`src/components/`**: Reusable UI components (shadcn-like or custom).
- **`src/lib/`**: Utilities.
  - `supabase.ts`: Supabase client.
  - `motion/variants.ts`: Shared animation constants.
- **`public/`**: Static assets.

## 3. Architecture & Conventions (CRITICAL)

### Server vs. Client Components
- **Default to Server Components:** Do not add `"use client"` unless absolutely necessary.
- **Client Boundaries:** Add `"use client"` *only* for:
  - Event listeners (`onClick`, `onChange`, `onSubmit`).
  - React Hooks (`useState`, `useEffect`, `useRef`).
  - Browser-only APIs (`window`, `document`, `localStorage`).
  - Framer Motion components (often requires client side for layout animations).
- **Optimization:** Keep client components leaf-level. Pass Server Components as `children` to Client Components where possible.

### Styling & Theming (Tailwind v4)
- **CSS Variables:** You **MUST** use the defined semantic variables in `src/app/globals.css`.
  - Backgrounds: `var(--color-bg)`, `var(--color-surface)`, `var(--color-surface-elevated)`
  - Text: `var(--color-text-primary)`, `var(--color-text-secondary)`, `var(--color-text-muted)`
  - Accents: `var(--color-accent)`, `var(--color-accent-hover)`, `var(--color-accent-glow)`
  - UI: `var(--color-border)`, `var(--color-overlay)`
- **NO Hardcoded Colors:** Never use hex codes (e.g., `#FFFFFF`) directly in classes. Use the CSS variables to ensure dark mode compatibility.
- **Responsive Design:** Mobile-first approach. Verify at `375px`, `768px`, and `1280px`.

### Animation (Framer Motion)
- **Consistency:** Import and use shared variants/easing from `src/lib/motion/variants.ts`.
  - **Easing:** Use `easeOut` for a consistent "premium" feel.
  - **Variants:** Use `fadeInUp`, `staggerContainer`, `scaleIn` where appropriate.
- **Performance:** Animate `opacity` and `transform` only. Avoid animating layout properties (`width`, `height`, `top`) that trigger reflows.

## 4. Required Checks Before Committing
1. **Hydration Errors:** Ensure HTML validity (e.g., no `<div>` inside `<p>`).
2. **Linter:** `npm run lint` must pass.
3. **Type Check:** `npx tsc --noEmit` must pass.
4. **Build:** `npm run build` must pass.

## 5. Protected Files
Do not modify these configuration files unless explicitly instructed:
- `next.config.ts`
- `tailwind.config.ts` (if present) / `postcss.config.mjs`
- `tsconfig.json`
- `package.json`
- `eslint.config.mjs`
