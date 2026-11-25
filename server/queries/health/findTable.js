// File: server/queries/health/findTable.js
// Purpose: SQL to check whether a table exists in the public schema.
// Screens: none (setup check)

const db = require("../../config/db");

// Returns true if the table exists, false if it does not
async function findTable(tableName) {
  const result = await db.query(
    "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1) AS found",
    [tableName]
  );
  return result.rows[0].found;
}

module.exports = findTable;
