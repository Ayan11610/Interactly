// File: server/index.js
// Purpose: Starts the HTTP server. The app itself is built in app.js.
// Screens: none (project setup)

const http = require("http");
const app = require("./app");
const env = require("./config/env");

// A plain HTTP server so Socket.IO can be attached to it later
const server = http.createServer(app);

server.listen(env.port, () => {
  console.log(`Interactly server running on port ${env.port}`);
});
