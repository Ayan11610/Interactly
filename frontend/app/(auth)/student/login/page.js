// File: frontend/app/(auth)/student/login/page.js
// Purpose: Student login page (route "/student/login"), phone-first.
// Screens: IAM-03 Participant Login

import AuthPhoneLayout from "../../_auth/AuthPhoneLayout";
import AuthHeading from "../../_auth/AuthHeading";
import LoginForm from "../../_auth/LoginForm";

export const metadata = {
  title: "Student log in · Interactly",
};

// Shows the IAM-03 phone screen with the login form
export default function StudentLoginPage() {
  return (
    <AuthPhoneLayout screenCode="IAM-03" handNote="or just join with a code">
      <AuthHeading phone title="Log in to keep your stickers" text="Your answers and stickers follow you to every session." />
      <LoginForm forStudents />
    </AuthPhoneLayout>
  );
}
