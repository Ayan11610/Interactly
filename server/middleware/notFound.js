// File: server/middleware/notFound.js
// Purpose: Answers with 404 when no route matches the request.
// Screens: none (project setup)

// Runs after all routes, so any request that reaches it has no matching route
function notFound(req, res) {
  res.status(404).json({ error: "Route not found" });
}

module.exports = notFound;
