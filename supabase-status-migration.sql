-- Migration: Add status column to existing rfq_submissions table
-- Run this ONLY if you already created the table without the status column

-- Add status column with default value 'new'
ALTER TABLE rfq_submissions
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new'
CHECK (status IN ('new', 'in_progress', 'quoted', 'closed'));

-- Add UPDATE policy for admins (if not already exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'rfq_submissions'
    AND policyname = 'Admins can update RFQs'
  ) THEN
    CREATE POLICY "Admins can update RFQs"
    ON rfq_submissions
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);
  END IF;
END $$;
