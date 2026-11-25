// File: frontend/app/(auth)/forgot-password/page.js
// Purpose: Forgot password page (route "/forgot-password").
// Screens: IAM-05 Forgot Password

import AuthSplitLayout from "../_auth/AuthSplitLayout";
import ForgotPasswordForm from "../_auth/ForgotPasswordForm";

export const metadata = {
  title: "Forgot password · Interactly",
};

// Shows the IAM-05 card
export default function ForgotPasswordPage() {
  return (
    <AuthSplitLayout screenCode="IAM-05" handNote="happens to the best of us">
      <ForgotPasswordForm />
    </AuthSplitLayout>
  );
}
