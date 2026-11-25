// File: server/routes/health/healthRoutes.js
// Purpose: Maps the health check URL to its controller.
// Screens: none (project setup)

const express = require("express");
const getHealth = require("../../controllers/health/getHealth");
const getDatabaseHealth = require("../../controllers/health/getDatabaseHealth");

const router = express.Router();

// GET /api/health
router.get("/", getHealth);

// GET /api/health/db
router.get("/db", getDatabaseHealth);

module.exports = router;
