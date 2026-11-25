-- File: database/migrations/001_create_profiles.sql
-- Purpose: Creates the profiles table. One row per Supabase Auth user, holding the
--          role and the fields from the class diagram's User, Instructor and
--          RegisteredParticipant classes. Passwords stay in Supabase Auth, not here.
-- Diagram: class diagram (User, Instructor, RegisteredParticipant), ERD (User)

CREATE TABLE IF NOT EXISTS profiles (
  -- Same id as the Supabase Auth user; deleting the auth user deletes the profile
  id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,

  -- User: guests (anonymous sign-in) have no email, and give a display name per session
  name TEXT,
  email TEXT,

  -- The only three roles. There is no admin role.
  role TEXT NOT NULL CHECK (role IN ('instructor', 'participant', 'guest')),

  -- Instructor only
  designation TEXT,

  -- RegisteredParticipant only
  total_sessions INTEGER NOT NULL DEFAULT 0,
  engagement_history TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Finding a registered user by email (e.g. when signing up twice)
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles (email);
