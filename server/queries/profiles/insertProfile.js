// File: server/queries/profiles/insertProfile.js
// Purpose: SQL to create one profile row. Does nothing if the row already exists.
// Diagram: class diagram (User.register), sequence 5.5.1 (Register and Sign Up)

const db = require("../../config/db");

// Inserts the profile and returns it. If a profile with this id already exists, returns null.
async function insertProfile(profile) {
  const result = await db.query(
    `INSERT INTO profiles (id, name, email, role)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (id) DO NOTHING
     RETURNING id, name, email, role, designation, total_sessions, created_at`,
    [profile.id, profile.name, profile.email, profile.role]
  );

  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
}

module.exports = insertProfile;
