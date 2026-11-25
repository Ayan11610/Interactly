// File: frontend/app/(auth)/verify-email/success/page.js
// Purpose: Shown after a correct email code (route "/verify-email/success").
// Screens: IAM-08 Email Verification Successful

import AuthSplitLayout from "../../_auth/AuthSplitLayout";
import VerifiedCard from "../../_auth/VerifiedCard";

export const metadata = {
  title: "Email verified · Interactly",
};

// Shows the IAM-08 card
export default function VerifySuccessPage() {
  return (
    <AuthSplitLayout screenCode="IAM-08" handNote="welcome aboard">
      <VerifiedCard />
    </AuthSplitLayout>
  );
}
