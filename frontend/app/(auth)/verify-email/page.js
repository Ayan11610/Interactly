// File: frontend/app/(auth)/verify-email/page.js
// Purpose: Email verification page (route "/verify-email?email=..."), opened after sign-up.
// Screens: IAM-07 Email Verification

import { Suspense } from "react";
import AuthSplitLayout from "../_auth/AuthSplitLayout";
import VerifyEmailForm from "../_auth/VerifyEmailForm";

export const metadata = {
  title: "Check your inbox · Interactly",
};

// Suspense is needed because the form reads the email from the URL
export default function VerifyEmailPage() {
  return (
    <AuthSplitLayout screenCode="IAM-07">
      <Suspense fallback={null}>
        <VerifyEmailForm />
      </Suspense>
    </AuthSplitLayout>
  );
}
