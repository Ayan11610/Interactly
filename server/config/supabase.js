// File: server/config/supabase.js
// Purpose: Creates the Supabase client the backend uses for auth only (checking login tokens).
//          It uses the service role key, so it must never be sent to the frontend.
// Screens: none (project setup)

const { createClient } = require("@supabase/supabase-js");
const env = require("./env");

let supabase = null;

// Only create the client when both values are set, so the server can still start
// (for example to serve /api/health) before the Supabase keys are added.
if (env.supabaseUrl && env.supabaseServiceRoleKey) {
  supabase = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
} else {
  console.warn("Supabase is not set up: add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to server/.env");
}

module.exports = supabase;
