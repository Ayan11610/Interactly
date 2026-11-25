// File: server/services/profiles/createProfile.js
// Purpose: Creates the profile for a newly signed-up (or guest) user, the first time they log in.
//          Decides the role: anonymous users are guests; others keep the role they picked at
//          sign-up, but only "instructor" or "participant" are accepted.
// Diagram: sequence 5.5.1 (Register and Sign Up: register -> updateProfile -> Registration Successful)

const findProfileById = require("../../queries/profiles/findProfileById");
const insertProfile = require("../../queries/profiles/insertProfile");
const formatProfile = require("./formatProfile");

const allowedSignUpRoles = ["instructor", "participant"];

// Works out the role for a new profile from the verified Supabase user
function chooseRole(user) {
  if (user.isAnonymous) {
    return "guest";
  }
  if (allowedSignUpRoles.includes(user.signUpData.role)) {
    return user.signUpData.role;
  }
  return "participant";
}

// Returns the user's profile, creating it first if it does not exist yet.
// created tells the caller whether a new row was made.
async function createProfile(user) {
  const existing = await findProfileById(user.id);
  if (existing) {
    return { profile: formatProfile(existing), created: false };
  }

  let name = null;
  if (typeof user.signUpData.name === "string" && user.signUpData.name.trim() !== "") {
    name = user.signUpData.name.trim();
  }

  const inserted = await insertProfile({
    id: user.id,
    name: name,
    email: user.email || null,
    role: chooseRole(user),
  });

  // Two requests at the same moment: the other one created it, so read it back
  if (!inserted) {
    const again = await findProfileById(user.id);
    return { profile: formatProfile(again), created: false };
  }
  return { profile: formatProfile(inserted), created: true };
}

module.exports = createProfile;
