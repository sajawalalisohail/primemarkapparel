# Developer Guide - PrimeMark Apparel

## Getting Started

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** package manager
- **Git** for version control
- **Supabase Account** (free tier works)
- **Code Editor** (VS Code recommended)

### Initial Setup

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
   cp .env.example .env.local

   # Add your Supabase credentials
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Set up Supabase database**
   - Go to Supabase Dashboard → SQL Editor
   - Run the SQL from `supabase-setup.sql`
   - Invite admin users via Authentication → Users

5. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

---

## Project Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build optimized production bundle
npm start            # Start production server
npm run lint         # Run ESLint for code quality

# Deployment
vercel               # Deploy to Vercel (if Vercel CLI installed)
```

---

## Development Workflow

### Adding a New Page

1. Create page file in `src/app/`
   ```tsx
   // src/app/my-page/page.tsx
   export default function MyPage() {
     return (
       <main>
         <h1>My New Page</h1>
       </main>
     );
   }
   ```

2. Add navigation link in `Navbar.tsx`
   ```tsx
   <Link href="/my-page">My Page</Link>
   ```

3. Update metadata if needed in `layout.tsx`

### Creating a New Component

1. Create component file in `src/components/`
   ```tsx
   // src/components/MyComponent.tsx
   export default function MyComponent() {
     return <div>My Component</div>;
   }
   ```

2. Use server components by default
   - Only add `"use client"` if you need:
     - State (`useState`)
     - Effects (`useEffect`)
     - Event handlers
     - Browser APIs

3. Follow naming conventions:
   - PascalCase for component files
   - Descriptive names (not generic like "Card" or "Box")

### Styling Guidelines

1. **Use Tailwind utility classes**
   ```tsx
   <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
     <h2 className="text-2xl font-bold text-white mb-4">Title</h2>
   </div>
   ```

2. **Maintain dark theme consistency**
   - Background: `bg-zinc-950` or `bg-zinc-900`
   - Text: `text-white`, `text-zinc-400`, `text-zinc-500`
   - Accent: `text-amber-500`, `bg-amber-500`

3. **Responsive design patterns**
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   ```

4. **Button patterns**
   ```tsx
   // Primary CTA
   <button className="px-6 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-lg hover:bg-amber-400">

   // Secondary
   <button className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700">
   ```

---

## Database Development

### Adding a New Field to RFQ Table

1. **Create migration SQL**
   ```sql
   -- add-phone-field.sql
   ALTER TABLE rfq_submissions
   ADD COLUMN phone TEXT;
   ```

2. **Run in Supabase SQL Editor**

3. **Update TypeScript interface**
   ```tsx
   // src/app/admin/dashboard/page.tsx
   interface RFQ {
     // ... existing fields
     phone?: string; // Add new field
   }
   ```

4. **Update form submission**
   ```tsx
   // src/components/RFQForm.tsx
   const { error } = await supabase.from("rfq_submissions").insert({
     // ... existing fields
     phone: formData.phone,
   });
   ```

### Testing RLS Policies

```sql
-- Test as anonymous user
SELECT * FROM rfq_submissions; -- Should fail

-- Test insert as anonymous
INSERT INTO rfq_submissions (name, company, email, product_type, quantity)
VALUES ('Test', 'Test Co', 'test@test.com', 'Uniforms', 100); -- Should succeed

-- Test as authenticated user
SELECT * FROM rfq_submissions; -- Should succeed
```

---

## TypeScript Best Practices

### Interface Definitions
```tsx
// Always define interfaces for data structures
interface FormData {
  name: string;
  email: string;
  quantity: string;
}

// Use proper types for props
interface ComponentProps {
  title: string;
  onSubmit: () => void;
  isLoading?: boolean; // Optional props use ?
}
```

### Typing Supabase Responses
```tsx
const { data, error } = await supabase
  .from("rfq_submissions")
  .select("*");

if (error) {
  console.error("Error:", error);
  return;
}

// data is now properly typed
const rfqs: RFQ[] = data || [];
```

---

## Component Patterns

### Server Component (Default)
```tsx
// No "use client" directive needed
export default function ServerComponent() {
  return <div>I render on the server</div>;
}
```

### Client Component
```tsx
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Form Handling Pattern
```tsx
"use client";

import { useState, FormEvent } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({ name: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit logic
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

---

## Supabase Integration

### Client Setup
```tsx
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Inserting Data
```tsx
const { data, error } = await supabase
  .from("rfq_submissions")
  .insert({
    name: "John",
    email: "john@example.com",
    // ... other fields
  });

if (error) throw error;
```

### Querying Data
```tsx
const { data, error } = await supabase
  .from("rfq_submissions")
  .select("*")
  .order("created_at", { ascending: false });
```

### Updating Data
```tsx
const { error } = await supabase
  .from("rfq_submissions")
  .update({ status: "quoted" })
  .eq("id", rfqId);
```

### Authentication
```tsx
// Sign in
const { error } = await supabase.auth.signInWithPassword({
  email: "admin@example.com",
  password: "password123",
});

// Get current user
const { data: { user } } = await supabase.auth.getUser();

// Sign out
await supabase.auth.signOut();
```

---

## Routing

### File-Based Routing
```
src/app/
├── page.tsx              → /
├── about/page.tsx        → /about
├── products/page.tsx     → /products
└── admin/
    ├── login/page.tsx    → /admin/login
    └── dashboard/page.tsx → /admin/dashboard
```

### Linking Between Pages
```tsx
import Link from "next/link";

<Link href="/about">About Us</Link>
```

### Programmatic Navigation
```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };
}
```

---

## Image Optimization

### Using Next.js Image
```tsx
import Image from "next/image";

<Image
  src="/logo.svg"
  alt="Logo"
  width={200}
  height={50}
  priority  // For above-the-fold images
/>
```

### Responsive Images
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Error Handling

### Form Validation
```tsx
const [errors, setErrors] = useState<{[key: string]: string}>({});

const validate = () => {
  const newErrors: {[key: string]: string} = {};

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

### Async Error Handling
```tsx
try {
  const { error } = await supabase.from("table").insert(data);
  if (error) throw error;

  // Success
} catch (error) {
  console.error("Error:", error);
  alert("Something went wrong");
}
```

---

## Testing Locally

### Test RFQ Submission
1. Go to `http://localhost:3000/rfq`
2. Fill out form with test data
3. Submit form
4. Check Supabase dashboard for new row

### Test Admin Login
1. Go to `http://localhost:3000/admin/login`
2. Use admin credentials
3. Verify redirect to dashboard
4. Test status updates

### Test Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

---

## Debugging

### Common Issues

**1. Supabase connection fails**
```bash
# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Restart dev server
npm run dev
```

**2. Build fails with TypeScript errors**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix by updating interfaces
```

**3. Styles not applying**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**4. Environment variables not working**
- Restart dev server after changing `.env.local`
- Ensure variables start with `NEXT_PUBLIC_` for client-side access

---

## Performance Tips

1. **Use Server Components by default** - Faster initial load
2. **Add loading states** - Better UX during async operations
3. **Optimize images** - Use Next.js Image component
4. **Minimize client-side JavaScript** - Only add "use client" when necessary
5. **Use proper caching** - Leverage Next.js caching strategies

---

## Git Workflow

### Commit Messages
```bash
# Good commit messages
git commit -m "Add RFQ status filtering to admin dashboard"
git commit -m "Fix mobile menu toggle bug"
git commit -m "Update Supabase schema with phone field"

# Bad commit messages
git commit -m "Update stuff"
git commit -m "Fix bug"
```

### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/add-export-functionality

# Work on feature
git add .
git commit -m "Add CSV export button to admin dashboard"

# Merge to main
git checkout main
git merge feature/add-export-functionality
```

---

## Deployment Checklist

### Before Deploying to Production

- [ ] Run `npm run build` locally to check for errors
- [ ] Test all forms and user flows
- [ ] Verify environment variables are set in Vercel
- [ ] Check mobile responsiveness
- [ ] Test admin login and dashboard
- [ ] Verify Supabase RLS policies are correct
- [ ] Update SEO metadata if needed
- [ ] Test email links and phone numbers
- [ ] Check console for errors
- [ ] Verify all images load correctly

### Vercel Deployment
1. Push to main branch
2. Vercel auto-deploys
3. Check build logs for errors
4. Test production site

---

## Troubleshooting

### Issue: "supabaseUrl is required"
**Solution**: Add environment variables to Vercel dashboard

### Issue: Admin login fails
**Solution**:
1. Check if user is invited in Supabase Auth
2. Verify email is in allowed list
3. Check RLS policies

### Issue: Form submission fails
**Solution**:
1. Check browser console for errors
2. Verify Supabase table schema matches insert data
3. Check RLS policies allow insert

### Issue: Images not loading
**Solution**:
1. Verify image path is correct
2. Check file exists in `public/` folder
3. Use Next.js Image component

---

## Code Style Guide

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`)
- **Functions**: camelCase (`handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)
- **Interfaces**: PascalCase with 'I' prefix optional (`FormData`)

### File Organization
```tsx
// 1. Imports
import { useState } from "react";
import { supabase } from "@/lib/supabase";

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export default function Component({ title }: Props) {
  // 4. State
  const [value, setValue] = useState("");

  // 5. Functions
  const handleClick = () => {};

  // 6. Effects
  useEffect(() => {}, []);

  // 7. Render
  return <div>{title}</div>;
}
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Getting Help

1. Check existing documentation files
2. Search GitHub issues
3. Consult Next.js/Supabase docs
4. Ask team members
5. Debug with console.log()
