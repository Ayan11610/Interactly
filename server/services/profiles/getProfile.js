// File: server/services/profiles/getProfile.js
// Purpose: Reads the logged-in user's profile.
// Diagram: class diagram (User)

const findProfileById = require("../../queries/profiles/findProfileById");
const formatProfile = require("./formatProfile");

// Returns the formatted profile, or null if the user has no profile yet
async function getProfile(userId) {
  const row = await findProfileById(userId);
  if (!row) {
    return null;
  }
  return formatProfile(row);
}

module.exports = getProfile;
