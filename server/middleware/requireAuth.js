// File: server/middleware/requireAuth.js
// Purpose: Lets a request through only if it carries a valid Supabase login token
//          ("Authorization: Bearer <token>"). Adds req.user for later steps.
// Diagram: sequence 5.5.2 (Login and Authentication)

const supabase = require("../config/supabase");

// Makes an error that the error handler will send with this status code
function makeError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

// Reads the token from the Authorization header and asks Supabase who it belongs to
async function requireAuth(req, res, next) {
  if (!supabase) {
    return next(new Error("Supabase is not set up on the server"));
  }

  const header = req.headers.authorization || "";
  if (!header.startsWith("Bearer ")) {
    return next(makeError(401, "Please log in first"));
  }
  const token = header.slice("Bearer ".length);

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return next(makeError(401, "Your session has expired. Please log in again"));
    }

    // signUpData holds what the user typed at sign-up (name, chosen role); it is only used
    // once, to create the profile. After that the role is always read from the profiles table.
    req.user = {
      id: data.user.id,
      email: data.user.email,
      isAnonymous: data.user.is_anonymous === true,
      signUpData: data.user.user_metadata || {},
    };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = requireAuth;
