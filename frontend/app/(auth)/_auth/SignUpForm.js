// File: frontend/app/(auth)/_auth/SignUpForm.js
// Purpose: Sign-up form shared by the instructor and student registration screens.
//          Checks the fields, creates the Supabase account, then opens IAM-07 to enter the code.
// Screens: IAM-02 (instructor), IAM-04 (student)
// Diagram: sequence 5.5.1 (register -> validateCredentials -> Invalid Info / Registration Successful)

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField/TextField";
import Checkbox from "@/components/Checkbox/Checkbox";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { signUp } from "@/services/authService";
import { checkPassword } from "@/services/passwordRules";
import styles from "./AuthForm.module.css";

// Checks the form before anything is sent. Returns an error message or "".
function validate(name, email, password, agreed) {
  if (name.trim().length < 2) {
    return "Enter your name.";
  }
  if (!email.includes("@") || !email.includes(".")) {
    return "Enter a valid email address.";
  }
  const passwordProblem = checkPassword(password);
  if (passwordProblem) {
    return passwordProblem;
  }
  if (!agreed) {
    return "Please agree to the Terms and Privacy Policy.";
  }
  return "";
}

// forStudents: role "participant" and the IAM-04 labels; otherwise an instructor (IAM-02)
export default function SignUpForm({ forStudents = false }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Creates the account and moves on to the code screen
  async function handleSubmit(event) {
    event.preventDefault();
    const problem = validate(name, email.trim(), password, agreed);
    setError(problem);
    if (problem) {
      return;
    }

    setBusy(true);
    let role = "instructor";
    if (forStudents) {
      role = "participant";
    }
    const result = await signUp(name.trim(), email.trim(), password, role);
    if (result.error) {
      setError(result.error);
      setBusy(false);
      return;
    }
    let nextPath = "/verify-email?email=" + encodeURIComponent(email.trim());
    if (forStudents) {
      nextPath = nextPath + "&student=1";
    }
    router.push(nextPath);
  }

  let loginHref = "/login";
  if (forStudents) {
    loginHref = "/student/login";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {error && <Alert tone="error" title="Check your details">{error}</Alert>}
      <TextField
        label={forStudents ? "Name" : "Full name"}
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={forStudents ? "Email" : "University email"}
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="new-password"
        hint="At least 8 characters with a number"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox label="I agree to the Terms and Privacy Policy" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
      <Button type="submit" variant="primary" size="lg" block disabled={busy}>
        {busy ? "Creating account…" : "Create account"}
      </Button>
      <div className={styles.links}>
        <Link href={loginHref} className={styles.link}>
          Already have an account? Log in
        </Link>
      </div>
    </form>
  );
}
