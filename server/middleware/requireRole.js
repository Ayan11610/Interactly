// File: server/middleware/requireRole.js
// Purpose: Lets a request through only if the logged-in user has one of the allowed roles.
//          The role is always read from the profiles table, never from the request.
//          Use it after requireAuth, e.g. router.post("/", requireAuth, requireRole("instructor"), ...)
// Screens: IAM-18 (Access Denied) is what the frontend shows when this returns 403

const findProfileById = require("../queries/profiles/findProfileById");

// Builds the middleware for the given roles, e.g. requireRole("instructor", "participant")
function requireRole(...allowedRoles) {
  // Checks the user's role and adds req.profile for later steps
  return async function checkRole(req, res, next) {
    try {
      const profile = await findProfileById(req.user.id);

      if (!profile || !allowedRoles.includes(profile.role)) {
        const error = new Error("You do not have access to this page");
        error.status = 403;
        return next(error);
      }

      req.profile = profile;
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = requireRole;
