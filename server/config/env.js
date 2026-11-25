// File: server/config/env.js
// Purpose: Loads the .env file and exports the settings the server needs.
// Screens: none (project setup)

const dotenv = require("dotenv");

// quiet: true stops dotenv printing a message every time the server starts
dotenv.config({ quiet: true });

const env = {
  port: process.env.PORT || 4000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
  databaseUrl: process.env.DATABASE_URL,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
};

module.exports = env;
