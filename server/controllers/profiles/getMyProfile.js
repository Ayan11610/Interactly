// File: server/controllers/profiles/getMyProfile.js
// Purpose: Sends the logged-in user's profile (name, role, ...).
// Screens: used by every logged-in page through AuthContext

const getProfile = require("../../services/profiles/getProfile");

// GET /api/profiles/me -> 200 { profile } or 404 if the profile has not been created yet
async function getMyProfile(req, res, next) {
  try {
    const profile = await getProfile(req.user.id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json({ profile: profile });
  } catch (err) {
    next(err);
  }
}

module.exports = getMyProfile;
