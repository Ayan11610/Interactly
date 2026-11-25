// File: server/controllers/health/getHealth.js
// Purpose: Tells the caller that the server is running.
// Screens: none (project setup)

// Sends a simple status so we can check the server is up
function getHealth(req, res) {
  res.json({ status: "ok" });
}

module.exports = getHealth;
