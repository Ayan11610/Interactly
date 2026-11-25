// File: frontend/app/(auth)/_auth/ResetPasswordForm.js
// Purpose: Lets a user who opened the reset email link choose a new password.
//          The link logs them in for this one step; afterwards they log in again (IAM-01).
// Screens: IAM-06 Reset Password

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField/TextField";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { useAuth } from "@/hooks/useAuth";
import { saveNewPassword, logOut } from "@/services/authService";
import { checkPassword, describeStrength } from "@/services/passwordRules";
import AuthHeading from "./AuthHeading";
import StrengthMeter from "./StrengthMeter";
import styles from "./AuthForm.module.css";

// Shows the two password boxes and the strength meter
export default function ResetPasswordForm() {
  const router = useRouter();
  const { session, loading } = useAuth();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Checks both boxes, saves the password, then sends the user to log in again
  async function handleSubmit(event) {
    event.preventDefault();
    const problem = checkPassword(password);
    if (problem) {
      setError(problem);
      return;
    }
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }
    setBusy(true);
    const result = await saveNewPassword(password);
    if (result.error) {
      setError(result.error);
      setBusy(false);
      return;
    }
    await logOut();
    router.push("/login");
  }

  // Opened without a valid link (or the link expired)
  if (!loading && !session) {
    return (
      <div className={styles.form}>
        <AuthHeading title="Set a new password" />
        <Alert tone="error" title="This reset link has expired">
          Reset links work once and only for a short time. Ask for a new one.
        </Alert>
        <Button href="/forgot-password" variant="primary" size="lg" block>
          Send a new link
        </Button>
      </div>
    );
  }

  let hint = "At least 8 characters with a number";
  if (password) {
    hint = describeStrength(password);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <AuthHeading title="Set a new password" text="Pick something you have not used here before." />
      {error && <Alert tone="error" title="Couldn't save it">{error}</Alert>}
      <TextField
        label="New password"
        type="password"
        autoComplete="new-password"
        hint={hint}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm new password"
        type="password"
        autoComplete="new-password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <StrengthMeter password={password} />
      <Button type="submit" variant="primary" size="lg" block disabled={busy || loading}>
        {busy ? "Saving…" : "Save new password"}
      </Button>
      <div className={styles.links}>
        <Link href="/login" className={styles.link}>
          Back to log in
        </Link>
      </div>
    </form>
  );
}
