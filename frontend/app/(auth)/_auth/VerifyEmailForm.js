// File: frontend/app/(auth)/_auth/VerifyEmailForm.js
// Purpose: Asks for the 6-digit code from the sign-up email. A right code logs the user in
//          and opens IAM-08; a wrong or expired code opens IAM-09. Includes the resend timer.
// Screens: IAM-07 Email Verification

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { verifyEmailCode, resendEmailCode } from "@/services/authService";
import AuthHeading from "./AuthHeading";
import CodeBoxes from "./CodeBoxes";
import { EnvelopeIcon } from "./StatusIcons";
import styles from "./AuthForm.module.css";

const resendWaitSeconds = 60;

// Turns 42 into "0:42"
function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  let rest = String(seconds % 60);
  if (rest.length === 1) {
    rest = "0" + rest;
  }
  return minutes + ":" + rest;
}

// Shows the code boxes, the Verify button and the resend timer
export default function VerifyEmailForm() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") || "";
  const forStudents = params.get("student") === "1";

  const [code, setCode] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(resendWaitSeconds);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  // Counts the resend timer down once per second
  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  // Checks the code with Supabase
  async function handleSubmit(event) {
    event.preventDefault();
    if (code.length !== 6) {
      setMessage("Type all 6 digits from the email.");
      return;
    }
    setBusy(true);
    const result = await verifyEmailCode(email, code);
    if (result.error) {
      router.push("/verify-email/failed?email=" + encodeURIComponent(email) + (forStudents ? "&student=1" : ""));
      return;
    }
    router.push("/verify-email/success");
  }

  // Sends a new code and restarts the timer
  async function handleResend() {
    const result = await resendEmailCode(email);
    setMessage(result.error || "We sent a new code.");
    setSecondsLeft(resendWaitSeconds);
  }

  let differentEmailHref = "/signup";
  if (forStudents) {
    differentEmailHref = "/student/signup";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <EnvelopeIcon />
      <AuthHeading title="Check your inbox" text={"We sent a 6-digit code to " + email + "."} />
      {message && <Alert tone="info" title={message} />}
      <CodeBoxes value={code} onChange={setCode} />
      <Button type="submit" variant="primary" size="lg" block disabled={busy}>
        {busy ? "Checking…" : "Verify email"}
      </Button>
      <div className={styles.links}>
        {secondsLeft > 0 ? (
          <span className={styles.muted}>Resend code in {formatSeconds(secondsLeft)}</span>
        ) : (
          <Button variant="ghost" onClick={handleResend}>
            Resend code
          </Button>
        )}
        <Link href={differentEmailHref} className={styles.link}>
          Use a different email
        </Link>
      </div>
    </form>
  );
}
