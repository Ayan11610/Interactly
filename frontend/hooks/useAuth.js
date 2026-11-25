// File: frontend/hooks/useAuth.js
// Purpose: Short way for a page to read the logged-in user from AuthContext.
// Screens: every logged-in page

"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

// Returns { session, profile, loading, profileError }. profile.role is the user's role.
export function useAuth() {
  return useContext(AuthContext);
}
