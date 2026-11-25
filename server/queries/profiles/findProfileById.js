// File: server/queries/profiles/findProfileById.js
// Purpose: SQL to read one profile by its Supabase user id.
// Diagram: class diagram (User)

const db = require("../../config/db");

// Returns the profile row, or null if this user has no profile yet
async function findProfileById(userId) {
  const result = await db.query(
    "SELECT id, name, email, role, designation, total_sessions, created_at FROM profiles WHERE id = $1",
    [userId]
  );

  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
}

module.exports = findProfileById;
