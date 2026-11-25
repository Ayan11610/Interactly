// File: frontend/app/(auth)/reset-password/page.js
// Purpose: Reset password page (route "/reset-password"), opened from the reset email link.
// Screens: IAM-06 Reset Password

import AuthSplitLayout from "../_auth/AuthSplitLayout";
import ResetPasswordForm from "../_auth/ResetPasswordForm";

export const metadata = {
  title: "Set a new password · Interactly",
};

// Shows the IAM-06 card
export default function ResetPasswordPage() {
  return (
    <AuthSplitLayout screenCode="IAM-06">
      <ResetPasswordForm />
    </AuthSplitLayout>
  );
}
