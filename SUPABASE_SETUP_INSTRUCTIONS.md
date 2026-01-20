# Supabase Setup Instructions

## 1. Run SQL in Supabase

### For New Setup
1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Open the file [supabase-setup.sql](supabase-setup.sql)
4. Copy all the SQL and paste it into the Supabase SQL Editor
5. Click **Run** to execute the SQL

This will:
- Create the `rfq_submissions` table with status column
- Enable Row Level Security (RLS)
- Set up policies to allow public submissions, admin viewing, and admin updates

### If You Already Created the Table (Migration)
If you already ran the old SQL without the status column:
1. Open [supabase-status-migration.sql](supabase-status-migration.sql)
2. Copy the SQL and run it in the Supabase SQL Editor
3. This will add the status column and update policy to your existing table

## 2. Invite Admin Users

1. In your Supabase dashboard, go to **Authentication** → **Users**
2. Click **Invite User**
3. Add these two email addresses (one at a time):
   - `ali@primemarkapparel.com`
   - `suleman@primemarkapparel.com`
4. Each admin will receive an email invitation to set their password

## 3. Update Environment Variables

Make sure your `.env.local` file has the correct Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these in your Supabase dashboard under **Settings** → **API**

## 4. Test the Setup

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/rfq`
3. Submit a test RFQ
4. Go to `http://localhost:3000/admin/login`
5. Log in with one of the admin emails
6. View the RFQ submission in the dashboard

## How It Works

### Public RFQ Submission
- Users can submit RFQs without authentication
- Data is saved to Supabase `rfq_submissions` table
- RLS policy allows `INSERT` for anonymous users

### Admin Access
- Only `ali@primemarkapparel.com` and `suleman@primemarkapparel.com` can log in
- Login checks email against allowed list before authenticating
- RLS policy allows `SELECT` and `UPDATE` only for authenticated users
- Dashboard displays all RFQ submissions ordered by newest first
- Admins can update RFQ status (New → In Progress → Quoted → Closed)
- Status badges with color coding (Amber for new, Blue for in progress, Green for quoted, Gray for closed)
- Clickable email and phone links for quick contact
- Empty state when no submissions exist
- Smooth loading states throughout

### Entry Points
- **Public RFQ Form**: `/rfq` or homepage form
- **Admin Login**: `/admin/login` (small link in footer)
- **Admin Dashboard**: `/admin/dashboard` (auto-redirects if not logged in)

## Files Changed/Created

### New Files
- `src/lib/supabase.ts` - Supabase client
- `src/app/admin/login/page.tsx` - Admin login page
- `src/app/admin/dashboard/page.tsx` - Admin dashboard
- `supabase-setup.sql` - Database setup script

### Modified Files
- `src/components/RFQForm.tsx` - Now saves to Supabase instead of just logging
- `src/components/Footer.tsx` - Added small "Admin" link
- `package.json` - Added `@supabase/supabase-js` dependency

## Security Notes

- Only two email addresses can access admin dashboard
- RLS policies prevent unauthorized database access
- Public users can only insert, not read submissions
- Admins must be authenticated to view any data
