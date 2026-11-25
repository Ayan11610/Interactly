// File: frontend/app/(auth)/login/page.js
// Purpose: Instructor login page (route "/login").
// Screens: IAM-01 Instructor Login

import AuthSplitLayout from "../_auth/AuthSplitLayout";
import AuthHeading from "../_auth/AuthHeading";
import LoginForm from "../_auth/LoginForm";

export const metadata = {
  title: "Log in · Interactly",
};

// Shows the IAM-01 card with the login form
export default function InstructorLoginPage() {
  return (
    <AuthSplitLayout screenCode="IAM-01" handNote="students join with a code, no login">
      <AuthHeading title="Log in" text="Welcome back. Your presentations are where you left them." />
      <LoginForm />
    </AuthSplitLayout>
  );
}
