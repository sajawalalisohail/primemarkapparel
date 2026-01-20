# PrimeMark Apparel

> Premium bulk apparel manufacturing from Pakistan - B2B e-commerce platform

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E)](https://supabase.com/)

---

## Overview

PrimeMark Apparel is a modern B2B platform connecting wholesale buyers with bulk apparel manufacturing in Pakistan. The platform specializes in uniforms, scrubs, industrial workwear, hoodies, denim, and custom apparel at scale.

### Key Features

- **RFQ Management System** - Request for Quote with admin dashboard
- **Product Catalog** - 6 main product categories with detailed information
- **Admin Dashboard** - Secure management of quote requests with status tracking
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Real-time Updates** - Status changes reflect immediately
- **Dark Theme** - Professional B2B aesthetic with amber accents

---

## Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- **Supabase Account** (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd primemarkapparel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   touch .env.local
   ```

   Add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Set up Supabase database**
   - Go to your Supabase Dashboard → SQL Editor
   - Run the SQL from `supabase-setup.sql`
   - Invite admin users via Authentication → Users

5. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.1.3 (App Router) |
| **UI Library** | React 19.2.3 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Supabase Auth |
| **Deployment** | Vercel |

---

## Project Structure

```
primemarkapparel/
├── src/
│   ├── app/                  # Next.js pages (App Router)
│   │   ├── admin/            # Admin area
│   │   │   ├── login/        # Admin login
│   │   │   └── dashboard/    # Admin dashboard
│   │   ├── about/            # About page
│   │   ├── products/         # Product catalog
│   │   ├── rfq/              # Request for Quote
│   │   └── ...               # Other pages
│   ├── components/           # Reusable React components
│   │   ├── RFQForm.tsx       # Quote request form
│   │   ├── Navbar.tsx        # Navigation
│   │   └── ...               # Other components
│   └── lib/
│       └── supabase.ts       # Supabase client
├── public/                   # Static assets
├── supabase-setup.sql        # Database setup
└── Documentation files
```

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## Documentation

Comprehensive documentation is available in the following files:

- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Complete project documentation
- **[DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)** - Development guidelines and patterns
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Deployment instructions for Vercel and other platforms
- **[SUPABASE_SETUP_INSTRUCTIONS.md](SUPABASE_SETUP_INSTRUCTIONS.md)** - Database setup guide
- **[ADMIN_ENHANCEMENTS.md](ADMIN_ENHANCEMENTS.md)** - Admin dashboard features

---

## Environment Variables

Required environment variables (add to `.env.local`):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional (already hardcoded in app)
ADMIN_EMAIL_1=ali@primemarkapparel.com
ADMIN_EMAIL_2=suleman@primemarkapparel.com
```

**Important:** Never commit `.env.local` to version control.

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero and overview |
| `/products` | Product catalog |
| `/rfq` | Request for Quote form |
| `/admin/login` | Admin login (restricted) |
| `/admin/dashboard` | RFQ management (admins only) |
| `/about` | Company information |
| `/services` | Manufacturing services |
| `/industries` | Target industries |
| `/quality` | Quality assurance |
| `/faq` | Frequently asked questions |

---

## Admin Access

### Authorized Admins
Only these emails can access the admin dashboard:
- `ali@primemarkapparel.com`
- `suleman@primemarkapparel.com`

### Admin Features
- View all RFQ submissions
- Update RFQ status (New → In Progress → Quoted → Closed)
- Clickable email and phone links
- Color-coded status badges
- Real-time status updates

---

## Database Schema

### rfq_submissions Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `name` | TEXT | Customer name |
| `company` | TEXT | Company name |
| `email` | TEXT | Contact email |
| `product_type` | TEXT | Type of product |
| `quantity` | INTEGER | Order quantity |
| `customization` | TEXT | Customization options |
| `details` | TEXT | Additional details |
| `status` | TEXT | RFQ status (new/in_progress/quoted/closed) |
| `created_at` | TIMESTAMP | Submission timestamp |

---

## Security

### Authentication
- Admin access restricted to two email addresses
- Supabase Auth for secure login
- Session management handled by Supabase

### Database Security
- Row Level Security (RLS) enabled
- Public can insert RFQs (anonymous)
- Only authenticated admins can view/update RFQs
- Environment variables for sensitive data

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

**Detailed instructions:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### Production URL
- Primary: `primemarkapparel.vercel.app`
- Custom domain: Configure in Vercel dashboard

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Support

- **Email**: sales@primemarkapparel.com
- **WhatsApp**: +1 304 685 4016
- **Documentation**: See documentation files in project root

---

## License

Proprietary - All rights reserved by PrimeMark Apparel

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Backend powered by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ for B2B bulk apparel manufacturing**
