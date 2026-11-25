// File: server/controllers/health/getDatabaseHealth.js
// Purpose: Tells the caller whether the server can reach the database and whether the
//          profiles table (migration 001) has been created.
// Screens: none (setup check)

const checkDatabase = require("../../services/health/checkDatabase");

// Sends { status: "ok", profilesTable: true/false }, or a 503 if the database cannot be reached
async function getDatabaseHealth(req, res) {
  try {
    const result = await checkDatabase();
    res.json({ status: "ok", profilesTable: result.profilesTable });
  } catch (err) {
    console.error("Database check failed:", err.message);
    res.status(503).json({ error: "Cannot reach the database" });
  }
}

module.exports = getDatabaseHealth;
