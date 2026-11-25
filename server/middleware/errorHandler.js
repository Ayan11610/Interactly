// File: server/middleware/errorHandler.js
// Purpose: Catches errors thrown in routes and sends one clear JSON error.
// Screens: none (project setup)

// Express knows this is an error handler because it takes four arguments
function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  let message = "Something went wrong on the server";

  // Only show our own error messages; hide unexpected internal details
  if (status < 500) {
    message = err.message;
  }

  console.error(err);
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
