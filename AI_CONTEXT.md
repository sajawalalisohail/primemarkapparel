# AI Context & Repository Guide

## 1. Project Overview
PrimeMark Apparel is a premium bulk apparel manufacturing website connecting mid-market buyers with factories in Pakistan.
- **Core Business:** B2B manufacturing (Uniforms, Hoodies, Workwear).
- **Key Features:** Product catalog, RFQ forms, Dark/Light mode theming, Premium animations.

## 2. Tech Stack
- **Framework:** Next.js 16.1.3 (App Router)
- **Language:** TypeScript ^5.0
- **Styling:** Tailwind CSS v4 (configured via CSS variables and `@theme` in `src/app/globals.css`)
- **Animations:** Framer Motion ^12.0
- **Database/Backend:** Supabase (Client in `src/lib`, SQL migrations in root)
- **Icons:** Inline SVGs / Heroicons (pattern based on existing components)

## 3. Folder Architecture
```
/
├── src/
│   ├── app/              # Next.js App Router (pages, layouts, routes)
│   ├── components/       # Reusable UI components
│   └── lib/              # Utilities, Supabase client, helpers
├── public/               # Static assets (images, branding, fonts)
├── next.config.ts        # Next.js configuratio
├── globals.css           # Global styles & Tailwind @theme configuration
└── package.json          # Dependencies & scripts
```

## 4. Architectural Patterns
1.  **App Router:** Use `page.tsx` for routes, `layout.tsx` for wrapping. Prefer Server Components where possible; add `"use client"` only when interactivity is needed.
2.  **Theming:** 
    -   Strictly use CSS variables for colors (e.g., `var(--color-bg)`, `var(--color-text-primary)`). 
    -   **NEVER** hardcode hex colors for backgrounds or text unless specific to a brand/logo.
    -   Support both Light and Dark modes.
3.  **Components:** 
    -   Function components with TypeScript interfaces.
    -   Keep components small and focused.
    -   Use `premiumEase` constant for consistent animation timing.
4.  **Styling:** 
    -   Use Tailwind utility classes. 
    -   Use `font-display`, `font-body`, `font-heading` for typography (configured in globals).
5.  **Server vs Client Components:**
    -   Default to Server Components.
    -   Only add `"use client"` when required for:
        -   event handlers
        -   state
        -   browser APIs
        -   Framer Motion animations
    -   Avoid promoting entire trees to client unnecessarily.

## 5. Development Workflow
### Commands
-   **Install:** `npm install`
-   **Development:** `npm run dev`
-   **Linting:** `npm run lint`
-   **Build:** `npm run build` (Must pass before completion)

### Common Pitfalls
-   **Tailwind v4:** This repo uses Tailwind v4. Configuration is largely in CSS, not `tailwind.config.js`.
-   **Hydration Errors:** Ensure standard HTML nesting rules are followed (no `div` inside `p`).
-   **Font Loading:** Detailed in `globals.css` via local font files.
-   **Images:** Use `next/image` for all bitmaps. Use `fill` + parent relative container for responsive sizing.

## 6. Environment
-   `NEXT_PUBLIC_SUPABASE_URL`
-   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
-   `NEXT_PUBLIC_GA_MEASUREMENT_ID`
*Do not commit actual secrets.*

## 7. Protected / Sensitive Areas
Agents should be cautious when modifying:
-   `src/app/layout.tsx` (global layout stability)
-   `src/app/globals.css` (theme tokens and Tailwind v4 setup)
-   `src/lib/supabase` (authentication and database wiring)
-   Any animation timing constants (e.g., `premiumEase`)

If modification is required, prefer minimal diffs and preserve existing patterns.
