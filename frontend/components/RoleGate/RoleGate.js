// File: frontend/components/RoleGate/RoleGate.js
// Purpose: Wraps a page that only some roles may open. Logged-out visitors are sent to log in;
//          logged-in users with another role see Access Denied (IAM-18).
//          This only hides pages; the backend checks the role again on every request.
// Screens: IAM-18 Access Denied, and every protected page

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { homePathForRole } from "@/services/authService";
import AccessDenied from "@/components/AccessDenied/AccessDenied";
import Alert from "@/components/Alert/Alert";
import AppLoader from "@/components/AppLoader/AppLoader";

// allowedRoles e.g. ["instructor"]; loginPath is where logged-out visitors go
export default function RoleGate({ allowedRoles, loginPath = "/login", children }) {
  const router = useRouter();
  const { session, profile, loading, profileError } = useAuth();

  // Sends logged-out visitors to the login page once we know they are logged out
  useEffect(() => {
    if (!loading && !session) {
      router.replace(loginPath);
    }
  }, [loading, session, loginPath, router]);

  // Shows the loading screen (ST-01) while we find out who is logged in
  if (loading || !session) {
    return <AppLoader />;
  }
  if (profileError) {
    return <Alert tone="error" title="Couldn't load your account">{profileError}</Alert>;
  }
  if (!profile || !allowedRoles.includes(profile.role)) {
    let homeHref = "/";
    if (profile) {
      homeHref = homePathForRole(profile.role);
    }
    return <AccessDenied homeHref={homeHref} />;
  }
  return children;
}
