// File: server/config/db.js
// Purpose: Connects to the PostgreSQL database on Supabase through pg and exports one
//          query helper. Every file in queries/ uses this helper.
// Screens: none (project setup)

const { Pool } = require("pg");
const env = require("./env");

// One shared pool of connections for the whole server.
// Supabase only accepts encrypted connections, so SSL is turned on.
const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: { rejectUnauthorized: false },
});

// Logs connection problems that happen while the server is idle (e.g. the database restarted)
pool.on("error", (err) => {
  console.error("Database connection error:", err.message);
});

// Runs one SQL statement. Always pass user input in params ($1, $2, ...), never in the text.
async function query(text, params) {
  if (!env.databaseUrl) {
    throw new Error("DATABASE_URL is missing from server/.env");
  }
  return pool.query(text, params);
}

module.exports = { query };
