// File: frontend/app/(auth)/_auth/ForgotPasswordForm.js
// Purpose: Asks for an email and sends a password reset link that opens /reset-password.
// Screens: IAM-05 Forgot Password

"use client";

import { useState } from "react";
import Link from "next/link";
import TextField from "@/components/TextField/TextField";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { sendPasswordReset } from "@/services/authService";
import AuthHeading from "./AuthHeading";
import styles from "./AuthForm.module.css";

// Shows the email box; after sending, a success message replaces the button
export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  // Sends the reset email
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Enter the email you signed up with.");
      return;
    }
    setBusy(true);
    const result = await sendPasswordReset(email.trim());
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <AuthHeading title="Forgot your password?" text="Enter your email and we'll send a reset link." />
      {error && <Alert tone="error" title="Couldn't send the link">{error}</Alert>}
      {sent && (
        <Alert tone="success" title="Check your email">
          If an account exists for {email.trim()}, a reset link is on its way.
        </Alert>
      )}
      <TextField label="Email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {!sent && (
        <Button type="submit" variant="primary" size="lg" block disabled={busy}>
          {busy ? "Sending…" : "Send reset link"}
        </Button>
      )}
      <div className={styles.links}>
        <Link href="/login" className={styles.link}>
          Back to log in
        </Link>
      </div>
    </form>
  );
}
