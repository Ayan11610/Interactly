// File: server/app.js
// Purpose: Creates the Express app and connects middleware and routes. Does not start the server.
// Screens: none (project setup)

const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const healthRoutes = require("./routes/health/healthRoutes");
const profileRoutes = require("./routes/profiles/profileRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Allow the frontend to call the API and read JSON request bodies
app.use(cors({ origin: env.clientUrl }));
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/profiles", profileRoutes);

// These two must stay last
app.use(notFound);
app.use(errorHandler);

module.exports = app;
