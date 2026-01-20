# PrimeMark Apparel - Project Overview

## Project Description

PrimeMark Apparel is a B2B e-commerce/marketing website for a bulk apparel manufacturing company based in Pakistan. The platform targets wholesale clothing buyers looking to manufacture uniforms, scrubs, industrial workwear, hoodies, denim, and custom apparel in bulk.

---

## Tech Stack

### Core Framework
- **Next.js 16.1.3** - Full-stack React framework with App Router (latest version)
- **React 19.2.3** - UI component library
- **TypeScript 5** - Type-safe JavaScript
- **Node.js** - Runtime environment

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework (using new @tailwindcss/postcss v4)
- **PostCSS 4** - CSS processing

### Backend & Database
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Authentication
  - Row Level Security (RLS)
  - Real-time capabilities

### Development Tools
- **ESLint 9** - Code linting with Next.js configuration
- **Git** - Version control

### Fonts
- **Geist** - Next.js default font family
- **Geist Mono** - Monospace variant

---

## Design System

### Color Palette
- **Background**: `zinc-950` (very dark, near-black)
- **Cards/Surfaces**: `zinc-900` (dark gray)
- **Borders**: `zinc-800` (medium dark gray)
- **Text Primary**: `white`
- **Text Secondary**: `zinc-400`
- **Text Tertiary**: `zinc-500`
- **Primary Accent**: `amber-500` / `amber-400` (orange/yellow)
- **Focus States**: `amber-400` with ring

### Status Colors
- **New**: `amber-400` (yellow-orange)
- **In Progress**: `blue-400`
- **Quoted**: `green-400`
- **Closed**: `zinc-400` (gray)

### Typography Scale
- **H1**: `text-3xl sm:text-4xl font-bold`
- **H2**: `text-2xl sm:text-3xl font-bold`
- **H3**: `text-xl font-semibold`
- **Body**: `text-base`
- **Small**: `text-sm`
- **Extra Small**: `text-xs`

### Spacing Convention
- Uses Tailwind's default spacing scale
- Common patterns:
  - Page padding: `px-4 sm:px-6 lg:px-8`
  - Section spacing: `py-16 lg:py-24`
  - Card padding: `p-6` or `p-8`
  - Gap between elements: `gap-4`, `gap-6`, `gap-8`

### Border Radius
- **Small**: `rounded-lg` (0.5rem)
- **Large**: `rounded-xl` (0.75rem)
- **Full**: `rounded-full` (circles)

---

## Project Structure

```
primemarkapparel/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Home page (/)
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── globals.css           # Global styles
│   │   ├── icon.png              # Favicon
│   │   ├── about/page.tsx        # About page
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── faq/page.tsx          # FAQ page
│   │   ├── industries/page.tsx   # Industries served
│   │   ├── products/page.tsx     # Product catalog
│   │   ├── process/page.tsx      # Manufacturing process
│   │   ├── quality/page.tsx      # Quality assurance
│   │   ├── rfq/page.tsx          # Request for Quote
│   │   ├── services/page.tsx     # Services page
│   │   └── admin/                # Admin area
│   │       ├── login/page.tsx    # Admin login
│   │       └── dashboard/page.tsx # Admin dashboard
│   │
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx            # Main navigation
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── TrustBar.tsx          # Trust indicators
│   │   ├── ProductCategories.tsx # Product grid
│   │   ├── Industries.tsx        # Industries section
│   │   ├── HowItWorks.tsx        # Process flow
│   │   ├── Quality.tsx           # Quality section
│   │   ├── Testimonials.tsx      # Customer testimonials
│   │   ├── FAQ.tsx               # Expandable FAQ
│   │   ├── FinalCTA.tsx          # Final call-to-action
│   │   ├── RFQForm.tsx           # Request for Quote form
│   │   ├── AvailableSamples.tsx  # Sample availability
│   │   ├── BulkCapabilities.tsx  # Bulk manufacturing info
│   │   ├── PricingGuide.tsx      # Pricing information
│   │   ├── PageCTA.tsx           # Generic page CTA
│   │   ├── PageHeader.tsx        # Reusable page header
│   │   ├── Section.tsx           # Layout wrapper
│   │   ├── Button.tsx            # Reusable button
│   │   └── StickyCTA.tsx         # Sticky CTA button
│   │
│   └── lib/
│       └── supabase.ts           # Supabase client configuration
│
├── public/                       # Static assets
│   ├── logo/                     # Logo files
│   ├── branding/                 # Brand images
│   ├── industries/               # Industry-specific images
│   └── services/                 # Service images
│
├── Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.ts            # Next.js configuration
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── eslint.config.mjs         # ESLint configuration
│   ├── .env.local                # Environment variables (not in git)
│   ├── .gitignore                # Git ignore patterns
│   └── tailwind.config.ts        # Tailwind CSS configuration
│
├── Documentation
│   ├── README.md                 # Project readme
│   ├── SUPABASE_SETUP_INSTRUCTIONS.md
│   ├── ADMIN_ENHANCEMENTS.md
│   └── PROJECT_OVERVIEW.md       # This file
│
└── Database Scripts
    ├── supabase-setup.sql        # Initial database setup
    └── supabase-status-migration.sql # Status column migration
```

---

## Key Features

### Public Website
1. **Product Catalog** - 6 main product categories (Uniforms, Scrubs, Workwear, Hoodies, Denim, Custom)
2. **RFQ Form** - Request for Quote with validation and Supabase integration
3. **Services Pages** - Sampling, size patterns, screen printing
4. **Process Documentation** - Manufacturing process transparency
5. **Industries Showcase** - Target markets (corporate, healthcare, construction, etc.)
6. **Quality Assurance** - Standards and guarantees
7. **FAQ Section** - Comprehensive Q&A with expandable items
8. **Responsive Design** - Mobile, tablet, and desktop optimized

### Admin Dashboard
1. **Authentication** - Secure login for two admin emails only
2. **RFQ Management** - View all submissions with detailed information
3. **Status Tracking** - Update RFQ status (New → In Progress → Quoted → Closed)
4. **Contact Links** - Clickable email and phone links
5. **Status Badges** - Color-coded visual indicators
6. **Real-time Updates** - Status changes update immediately

---

## Database Schema

### rfq_submissions Table

```sql
CREATE TABLE rfq_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  product_type TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  customization TEXT,
  details TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'quoted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Row Level Security (RLS) Policies

1. **Public Insert** - Anyone can submit RFQs (anonymous users)
2. **Admin View** - Only authenticated admins can view RFQs
3. **Admin Update** - Only authenticated admins can update RFQ status

---

## Environment Variables

Required in `.env.local` and Vercel:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Admin emails (optional, already hardcoded)
ADMIN_EMAIL_1=ali@primemarkapparel.com
ADMIN_EMAIL_2=suleman@primemarkapparel.com
```

---

## NPM Scripts

```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "eslint"             // Run linter
}
```

---

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Manual Deployment
1. Run `npm run build`
2. Run `npm start`
3. Ensure environment variables are set on hosting platform

---

## Authentication Flow

### Admin Access
1. Navigate to `/admin/login`
2. Enter email and password
3. System checks if email is in allowed list
4. Authenticate with Supabase
5. Redirect to `/admin/dashboard`

### Allowed Admins
- ali@primemarkapparel.com
- suleman@primemarkapparel.com

---

## SEO Configuration

### Metadata (layout.tsx)
- **Title**: "PrimeMark Apparel | Premium Bulk Apparel Manufacturing from Pakistan"
- **Description**: Comprehensive description for bulk apparel manufacturing
- **Keywords**: 8 SEO keywords (bulk apparel, wholesale, uniforms, etc.)
- **Open Graph**: Social media preview image (1200x630px)
- **Twitter Card**: Twitter-specific metadata
- **Robots**: `index, follow` (SEO enabled)

---

## Component Architecture

### Server Components (Default)
- All `page.tsx` files
- Most presentational components
- Layout components

### Client Components (use client directive)
- `Navbar.tsx` - State management for mobile menu and dropdowns
- `RFQForm.tsx` - Form state and validation
- `FAQ.tsx` - Expandable items state
- `admin/login/page.tsx` - Authentication state
- `admin/dashboard/page.tsx` - RFQ management state

---

## Performance Optimizations

1. **Next.js Image Component** - Automatic image optimization
2. **Priority Loading** - Critical images loaded first (hero, logo)
3. **Responsive Images** - Proper sizing with `sizes` attribute
4. **Code Splitting** - Automatic by Next.js
5. **Static Generation** - Pages pre-rendered where possible

---

## Accessibility Features

1. **Semantic HTML** - Proper heading hierarchy
2. **ARIA Labels** - Screen reader support
3. **Focus Management** - Visible focus states
4. **Keyboard Navigation** - Tab-accessible forms and links
5. **Color Contrast** - WCAG compliant (dark theme with high contrast)

---

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **JavaScript**: ES2017+ (as per tsconfig target)

---

## Known Limitations

1. **No CMS** - Content is hardcoded in components
2. **No Image Upload** - Admin cannot upload images via dashboard
3. **No Email Notifications** - RFQ submissions don't trigger emails automatically
4. **No Export Feature** - Cannot export RFQs to CSV/Excel
5. **No Search/Filter** - Admin dashboard lacks search and filter functionality

---

## Future Enhancement Opportunities

### High Priority
1. Email notifications on RFQ submission
2. Admin dashboard filters and search
3. CSV export for RFQs
4. Automated response templates

### Medium Priority
5. Client portal for tracking quotes
6. Sample request system
7. Product catalog CMS
8. Analytics dashboard

### Low Priority
9. Multi-language support
10. Live chat integration
11. Document uploads (tech specs, designs)
12. Quote generation tool

---

## Contact Information

- **Website**: primemarkapparel.com
- **Email**: sales@primemarkapparel.com
- **WhatsApp**: +1 304 685 4016
- **Admin Login**: `/admin/login`

---

## License

Proprietary - All rights reserved by PrimeMark Apparel

---

## Version History

- **v1.0** - Initial launch with basic RFQ functionality
- **v1.1** - Added admin dashboard with status management
- **v1.2** - Enhanced UI/UX with improved design system
