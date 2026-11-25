// File: server/routes/profiles/profileRoutes.js
// Purpose: Maps the profile URLs to their controllers. Both need a logged-in user.
// Screens: IAM-01 to IAM-04, IAM-07 (login and sign-up flow)

const express = require("express");
const requireAuth = require("../../middleware/requireAuth");
const getMyProfile = require("../../controllers/profiles/getMyProfile");
const createMyProfile = require("../../controllers/profiles/createMyProfile");

const router = express.Router();

// GET /api/profiles/me
router.get("/me", requireAuth, getMyProfile);

// POST /api/profiles/me
router.post("/me", requireAuth, createMyProfile);

module.exports = router;
