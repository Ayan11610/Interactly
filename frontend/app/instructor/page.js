// File: frontend/app/instructor/page.js
// Purpose: TEMPORARY instructor home (route "/instructor") so login can be tested.
//          Instructors only; others see Access Denied. Replaced by the dashboard in step 4.
// Screens: stands in for GEN-01; IAM-18 for other roles

import RoleGate from "@/components/RoleGate/RoleGate";
import TemporaryHome from "@/components/TemporaryHome/TemporaryHome";

// Shows the temporary home inside the instructor-only gate
export default function InstructorHomePage() {
  return (
    <RoleGate allowedRoles={["instructor"]} loginPath="/login">
      <TemporaryHome title="Instructor dashboard" comingIn="step 4 (App shell, GEN-01)" />
    </RoleGate>
  );
}
