-- Run this SQL in your Supabase SQL Editor
-- This sets up everything needed for RFQ submission and admin access

-- 1. Create RFQ submissions table
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

-- 2. Enable Row Level Security
ALTER TABLE rfq_submissions ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow anyone to insert (public RFQ submission)
CREATE POLICY "Anyone can submit RFQ"
ON rfq_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Policy: Only authenticated admins can view all RFQs
CREATE POLICY "Admins can view all RFQs"
ON rfq_submissions
FOR SELECT
TO authenticated
USING (true);

-- 5. Policy: Only authenticated admins can update RFQs (for status changes)
CREATE POLICY "Admins can update RFQs"
ON rfq_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 6. Create admin users (you'll need to invite them via Supabase Auth)
-- Go to Supabase Dashboard > Authentication > Users > Invite User
-- Add these emails:
--   - ali@primemarkapparel.com
--   - suleman@primemarkapparel.com
-- They will receive email invitations to set passwords

-- Note: After running this SQL, go to Authentication > Users and invite the two admin emails
