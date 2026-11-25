// File: frontend/app/(auth)/_auth/LoginForm.js
// Purpose: Email + password login form shared by the instructor and student login screens.
//          After login it sends the user to the home page for their role (read from the profile).
// Screens: IAM-01 (instructor), IAM-03 (student)
// Diagram: sequence 5.5.2 (login -> validateCredentials -> Login Successful / Invalid Credentials)

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField/TextField";
import Checkbox from "@/components/Checkbox/Checkbox";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { logIn, resendEmailCode, homePathForRole } from "@/services/authService";
import styles from "./AuthForm.module.css";

// forStudents switches the links (and hides "Keep me logged in", as in IAM-03)
export default function LoginForm({ forStudents = false }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Logs in, or shows why it failed. Unconfirmed accounts get a new code and go to IAM-07.
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (email.trim() === "" || password === "") {
      setError("Enter your email and password.");
      return;
    }

    setBusy(true);
    const result = await logIn(email.trim(), password, remember);
    if (result.notConfirmed) {
      await resendEmailCode(email.trim());
      router.push("/verify-email?email=" + encodeURIComponent(email.trim()) + (forStudents ? "&student=1" : ""));
      return;
    }
    if (result.error) {
      setError(result.error);
      setBusy(false);
      return;
    }
    router.push(homePathForRole(result.profile.role));
  }

  let signUpLink = <Link href="/signup" className={styles.link}>New here? Create an account</Link>;
  if (forStudents) {
    signUpLink = <Link href="/student/signup" className={styles.link}>Create an account</Link>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {error && <Alert tone="error" title="Couldn't log you in">{error}</Alert>}
      <TextField label="Email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!forStudents && (
        <Checkbox label="Keep me logged in on this device" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
      )}
      <Button type="submit" variant="primary" size="lg" block disabled={busy}>
        {busy ? "Logging in…" : "Log in"}
      </Button>
      <div className={styles.links}>
        <Link href="/forgot-password" className={styles.link}>
          Forgot password?
        </Link>
        {signUpLink}
        {forStudents && (
          <Link href="/join" className={styles.link}>
            Join as a guest
          </Link>
        )}
      </div>
    </form>
  );
}
