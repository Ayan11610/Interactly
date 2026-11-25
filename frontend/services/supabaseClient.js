// File: frontend/services/supabaseClient.js
// Purpose: The one Supabase client the browser uses, for auth only (sign up, log in,
//          log out, email codes, password reset). Uses the public anon key, never the
//          service role key. Data goes through our own backend, not through Supabase.
// Screens: IAM-01 to IAM-09

import { createClient } from "@supabase/supabase-js";
import { authStorage } from "./authStorage";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: authStorage,
    persistSession: true,
    autoRefreshToken: true,
    // Lets the password reset link (IAM-06) log the user in from the URL
    detectSessionInUrl: true,
  },
});
