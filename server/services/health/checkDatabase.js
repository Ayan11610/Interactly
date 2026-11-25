// File: server/services/health/checkDatabase.js
// Purpose: Checks the database connection and whether the first migration has been run.
// Screens: none (setup check)

const findTable = require("../../queries/health/findTable");

// Returns { profilesTable: true } once migration 001 has been run. Throws if the database is unreachable.
async function checkDatabase() {
  const profilesTable = await findTable("profiles");
  return { profilesTable: profilesTable };
}

module.exports = checkDatabase;
