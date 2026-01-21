# PrimeMark Apparel - Color Palette

## Overview
This project uses a light, premium B2B aesthetic inspired by JOOR.com, with a clean enterprise-grade design system.

---

## Primary Colors

### Backgrounds
| Color | Tailwind Class | Hex Code | Usage |
|-------|---------------|----------|-------|
| **Primary Background** | `bg-white` | `#FFFFFF` | Main page background, card backgrounds |
| **Secondary Background** | `bg-slate-50` | `#F8FAFC` | Alternating sections, subtle backgrounds |
| **Footer Background** | `bg-slate-900` | `#0F172A` | Footer (kept dark for contrast) |
| **Light Gray** | `bg-slate-100` | `#F1F5F9` | Placeholders, subtle containers |

### Text Colors
| Color | Tailwind Class | Hex Code | Usage |
|-------|---------------|----------|-------|
| **Primary Text** | `text-slate-900` | `#0F172A` | Headlines, main content, important text |
| **Secondary Text** | `text-slate-600` | `#475569` | Body text, descriptions, subtext |
| **Tertiary Text** | `text-slate-500` | `#64748B` | Muted text, captions, less important info |
| **Muted Text** | `text-slate-400` | `#94A3B8` | Placeholders, disabled states |
| **White Text** | `text-white` | `#FFFFFF` | Text on dark backgrounds (footer, hero overlay) |

---

## Accent Colors

### Brand Blue (Primary Accent)
| Color | Tailwind Class | Hex Code | Usage |
|-------|---------------|----------|-------|
| **Deep Navy** | `text-blue-900` / `bg-blue-900` | `#1E3A8A` | Primary accent, icons, links, brand elements |
| **Navy Hover** | `text-blue-800` / `bg-blue-800` | `#1E40AF` | Hover states for blue-900 elements |
| **Medium Blue** | `text-blue-600` / `bg-blue-600` | `#2563EB` | Hero CTA button, special emphasis |
| **Blue Hover** | `bg-blue-700` | `#1D4ED8` | Hover state for blue-600 |
| **Focus Ring** | `focus:ring-blue-500` | `#3B82F6` | Focus outlines, accessibility |
| **Light Blue Background** | `bg-blue-50` | `#EFF6FF` | Highlight boxes, icon containers |
| **Light Blue Border** | `border-blue-200` | `#BFDBFE` | Borders for blue-50 containers |
| **Selection Background** | `bg-blue-100` | `#DBEAFE` | Text selection highlight |

### Amber (Secondary Accent - Limited Use)
| Color | Tailwind Class | Hex Code | Usage |
|-------|---------------|----------|-------|
| **Amber-500** | `bg-amber-500` / `text-amber-400` | `#F59E0B` | Form required indicators, occasional accents |
| **Amber-400** | `text-amber-400` | `#FBBF24` | Hover states, footer links (legacy) |

---

## UI Elements

### Buttons
| Type | Background | Text | Hover | Usage |
|------|-----------|------|-------|-------|
| **Primary CTA** | `bg-slate-900` | `text-white` | `hover:bg-slate-800` | Main call-to-action buttons |
| **Secondary** | `bg-white` | `text-slate-700` | `hover:bg-slate-50` | Secondary actions, outlined buttons |
| **Hero CTA** | `bg-blue-600` | `text-white` | `hover:bg-blue-700` | Hero section primary button |
| **Outline** | `bg-transparent` | `text-blue-900` | `hover:bg-blue-50` | Tertiary actions |

### Borders
| Color | Tailwind Class | Hex Code | Usage |
|-------|---------------|----------|-------|
| **Light Border** | `border-slate-200` | `#E2E8F0` | Card borders, section dividers |
| **Medium Border** | `border-slate-300` | `#CBD5E1` | Input borders, button borders |
| **Dark Border** | `border-slate-800` | `#1E293B` | Footer borders |

### Status Colors
| Status | Background | Text | Border | Usage |
|--------|-----------|------|--------|-------|
| **New** | `bg-amber-100` | `text-amber-800` | `border-amber-200` | Admin dashboard status |
| **In Progress** | `bg-blue-100` | `text-blue-800` | `border-blue-200` | Admin dashboard status |
| **Quoted** | `bg-green-100` | `text-green-800` | `border-green-200` | Admin dashboard status |
| **Closed** | `bg-slate-100` | `text-slate-600` | `border-slate-200` | Admin dashboard status |
| **Error** | `bg-red-50` | `text-red-600` | `border-red-200` | Error messages, validation |

---

## CSS Variables

Defined in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;    /* Primary background */
  --foreground: #0f172a;   /* Primary text color */
}
```

---

## Special Elements

### Scrollbar
- **Track**: `#F1F5F9` (slate-100)
- **Thumb**: `#CBD5E1` (slate-300)
- **Thumb Hover**: `#94A3B8` (slate-400)

### Focus States
- **Outline**: `#3B82F6` (blue-500)
- **Offset**: 2px

### Selection
- **Background**: `#DBEAFE` (blue-100)
- **Text**: `#1E3A8A` (blue-900)

---

## Usage Guidelines

### Primary Brand Color
- **Blue-900** (`#1E3A8A`) is the primary brand accent
- Used for: Icons, links, accent text, brand elements
- Replaces the previous amber-500 accent color

### Text Hierarchy
1. **Slate-900**: Headlines, important content
2. **Slate-600**: Body text, descriptions
3. **Slate-500**: Muted text, captions
4. **Slate-400**: Placeholders, disabled states

### Background Alternation
- Use `bg-white` for primary sections
- Use `bg-slate-50` for alternating sections to create visual rhythm
- Footer remains `bg-slate-900` for contrast

### Buttons
- Primary CTAs: `bg-slate-900` (black) with white text
- Secondary: White with `slate-900` border
- Special emphasis: `bg-blue-600` (Hero section)

---

## Color Mapping (Old → New)

| Old Theme | New Theme | Purpose |
|-----------|-----------|---------|
| `zinc-950` (bg) | `white` | Primary background |
| `zinc-900` (cards) | `white` + shadow | Card backgrounds |
| `zinc-800` (borders) | `slate-200` | Borders |
| `zinc-400` (text) | `slate-600` | Secondary text |
| `white` (text) | `slate-900` | Primary text |
| `amber-500` (accent) | `blue-900` | Brand accent |
| `amber-400` (accent) | `blue-800` | Accent hover |

---

## Accessibility

- All text meets WCAG contrast requirements
- Focus states use `blue-500` for visibility
- Reduced motion preferences are respected
- Color is not the sole indicator of information

---

## Notes

- The design system follows a light, premium B2B aesthetic
- Colors are chosen for professional, enterprise-grade appearance
- The palette emphasizes readability and trust-building
- Blue-900 serves as the primary brand color, replacing amber accents
