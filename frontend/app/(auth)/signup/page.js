// File: frontend/app/(auth)/signup/page.js
// Purpose: Instructor sign-up page (route "/signup"). The design's Institution field is left
//          out on purpose (owner decision: not in the class diagram).
// Screens: IAM-02 Instructor Registration

import AuthSplitLayout from "../_auth/AuthSplitLayout";
import AuthHeading from "../_auth/AuthHeading";
import SignUpForm from "../_auth/SignUpForm";

export const metadata = {
  title: "Create your account · Interactly",
};

// Shows the IAM-02 card with the instructor sign-up form
export default function InstructorSignUpPage() {
  return (
    <AuthSplitLayout screenCode="IAM-02" handNote="it's free, go on!">
      <AuthHeading title="Create your instructor account" text="Free for up to 3 sessions a month." />
      <SignUpForm />
    </AuthSplitLayout>
  );
}
