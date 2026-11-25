// File: server/routes/health/healthRoutes.js
// Purpose: Maps the health check URL to its controller.
// Screens: none (project setup)

const express = require("express");
const getHealth = require("../../controllers/health/getHealth");

const router = express.Router();

// GET /api/health
router.get("/", getHealth);

module.exports = router;
