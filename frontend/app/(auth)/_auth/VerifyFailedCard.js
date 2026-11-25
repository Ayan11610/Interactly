// File: frontend/app/(auth)/_auth/VerifyFailedCard.js
// Purpose: Content of the "code didn't work" card. Worded for codes instead of the design's
//          "link" (owner decision), because IAM-07 uses a 6-digit code.
// Screens: IAM-09 Email Verification Failed

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { resendEmailCode } from "@/services/authService";
import AuthHeading from "./AuthHeading";
import { FailedIcon } from "./StatusIcons";
import styles from "./AuthForm.module.css";

// Shows the cross, the message, "Send a new code" and "Back to log in"
export default function VerifyFailedCard() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") || "";
  const forStudents = params.get("student") === "1";
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Sends a fresh code, then goes back to the code screen
  async function handleResend() {
    setBusy(true);
    const result = await resendEmailCode(email);
    if (result.error) {
      setError(result.error);
      setBusy(false);
      return;
    }
    router.push("/verify-email?email=" + encodeURIComponent(email) + (forStudents ? "&student=1" : ""));
  }

  let loginHref = "/login";
  if (forStudents) {
    loginHref = "/student/login";
  }

  return (
    <>
      <FailedIcon />
      <AuthHeading title="That code didn't work" text="It may have expired or been used already. We can send a fresh one." />
      {error && <Alert tone="error" title="Couldn't send a new code">{error}</Alert>}
      <Button variant="primary" size="lg" block onClick={handleResend} disabled={busy || email === ""}>
        {busy ? "Sending…" : "Send a new code"}
      </Button>
      <div className={styles.links}>
        <Link href={loginHref} className={styles.link}>
          Back to log in
        </Link>
      </div>
    </>
  );
}
