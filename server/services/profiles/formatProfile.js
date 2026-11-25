// File: server/services/profiles/formatProfile.js
// Purpose: Turns a profiles row (snake_case) into the JSON shape the frontend receives (camelCase).
// Diagram: class diagram (User, Instructor, RegisteredParticipant)

// Returns { id, name, email, role, designation, totalSessions, createdAt }
function formatProfile(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    designation: row.designation,
    totalSessions: row.total_sessions,
    createdAt: row.created_at,
  };
}

module.exports = formatProfile;
