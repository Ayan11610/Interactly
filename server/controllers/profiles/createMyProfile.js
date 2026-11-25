// File: server/controllers/profiles/createMyProfile.js
// Purpose: Creates the logged-in user's profile after their first login (or guest sign-in).
// Screens: IAM-01, IAM-03 (first login), IAM-07 (after the email code is verified)

const createProfile = require("../../services/profiles/createProfile");

// POST /api/profiles/me -> 201 { profile } when created, 200 { profile } if it already existed
async function createMyProfile(req, res, next) {
  try {
    const result = await createProfile(req.user);
    let status = 200;
    if (result.created) {
      status = 201;
    }
    res.status(status).json({ profile: result.profile });
  } catch (err) {
    next(err);
  }
}

module.exports = createMyProfile;
