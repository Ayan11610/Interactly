// File: frontend/app/join/page.js
// Purpose: TEMPORARY Join page (route "/join"). Open to everyone, because guests join
//          without logging in. Replaced by the real Join a session screen in step 6.
// Screens: stands in for SM-13

import TemporaryHome from "@/components/TemporaryHome/TemporaryHome";

// Shows the temporary page
export default function JoinPage() {
  return <TemporaryHome title="Join a session" comingIn="step 6 (Session management, SM-13)" />;
}
