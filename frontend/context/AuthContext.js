// File: frontend/context/AuthContext.js
// Purpose: Shares the logged-in user and their profile (with the role) with every page.
//          It listens to Supabase for log in / log out and loads the profile from our backend.
// Screens: every logged-in page; IAM-18 (Access Denied) uses the role from here

"use client";

import { createContext, useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { loadOrCreateProfile } from "@/services/profileService";

export const AuthContext = createContext(null);

// Wraps the app. Pages read { session, profile, loading, profileError } through useAuth().
export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileError, setProfileError] = useState("");

  useEffect(() => {
    let active = true;

    // Loads the profile for the current session, or clears it when logged out
    async function applySession(newSession) {
      if (!active) {
        return;
      }
      setSession(newSession);
      if (!newSession) {
        setProfile(null);
        setProfileError("");
        setLoading(false);
        return;
      }
      try {
        const loaded = await loadOrCreateProfile(newSession.access_token);
        if (active) {
          setProfile(loaded);
          setProfileError("");
        }
      } catch (err) {
        if (active) {
          setProfile(null);
          setProfileError(err.message);
        }
      }
      if (active) {
        setLoading(false);
      }
    }

    // Supabase calls this on page load and every time the user logs in or out.
    // The profile is loaded outside the callback, as Supabase recommends.
    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === "TOKEN_REFRESHED") {
        setSession(newSession);
        return;
      }
      setTimeout(() => applySession(newSession), 0);
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const value = { session: session, profile: profile, loading: loading, profileError: profileError };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
