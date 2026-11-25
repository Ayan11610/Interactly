// File: frontend/app/(auth)/_auth/VerifiedCard.js
// Purpose: Content of the "Email verified" card. The button goes to the home page for the
//          user's role, which is read from AuthContext.
// Screens: IAM-08 Email Verification Successful

"use client";

import Button from "@/components/Button/Button";
import { useAuth } from "@/hooks/useAuth";
import { homePathForRole } from "@/services/authService";
import AuthHeading from "./AuthHeading";
import { SuccessIcon } from "./StatusIcons";

// Shows the tick, the message and "Go to dashboard"
export default function VerifiedCard() {
  const { profile } = useAuth();

  let homePath = "/login";
  if (profile) {
    homePath = homePathForRole(profile.role);
  }

  return (
    <>
      <SuccessIcon />
      <AuthHeading title="Email verified" text="Your account is ready. Create your first presentation or start a session." />
      <Button href={homePath} variant="primary" size="lg" block>
        Go to dashboard
      </Button>
    </>
  );
}
