// File: frontend/app/(auth)/student/signup/page.js
// Purpose: Student sign-up page (route "/student/signup"), phone-first.
// Screens: IAM-04 Participant Registration

import AuthPhoneLayout from "../../_auth/AuthPhoneLayout";
import AuthHeading from "../../_auth/AuthHeading";
import SignUpForm from "../../_auth/SignUpForm";

export const metadata = {
  title: "Create a student account · Interactly",
};

// Shows the IAM-04 phone screen with the student sign-up form
export default function StudentSignUpPage() {
  return (
    <AuthPhoneLayout screenCode="IAM-04" handNote="takes 20 seconds">
      <AuthHeading phone title="Create a student account" text="Save your answers, stickers and session recaps." />
      <SignUpForm forStudents />
    </AuthPhoneLayout>
  );
}
