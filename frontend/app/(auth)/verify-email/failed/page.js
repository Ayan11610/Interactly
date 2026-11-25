// File: frontend/app/(auth)/verify-email/failed/page.js
// Purpose: Shown after a wrong or expired email code (route "/verify-email/failed?email=...").
// Screens: IAM-09 Email Verification Failed

import { Suspense } from "react";
import AuthSplitLayout from "../../_auth/AuthSplitLayout";
import VerifyFailedCard from "../../_auth/VerifyFailedCard";

export const metadata = {
  title: "Code didn't work · Interactly",
};

// Suspense is needed because the card reads the email from the URL
export default function VerifyFailedPage() {
  return (
    <AuthSplitLayout screenCode="IAM-09">
      <Suspense fallback={null}>
        <VerifyFailedCard />
      </Suspense>
    </AuthSplitLayout>
  );
}
