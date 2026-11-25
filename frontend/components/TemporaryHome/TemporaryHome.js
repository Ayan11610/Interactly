// File: frontend/components/TemporaryHome/TemporaryHome.js
// Purpose: TEMPORARY page body shown after login until the real pages exist:
//          the instructor dashboard (GEN-01, step 4) and the Join page (SM-13, step 6).
//          It shows who is logged in and a Log out button. Delete it when those are built.
// Screens: none yet (stands in for GEN-01 and SM-13)

"use client";

import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { useAuth } from "@/hooks/useAuth";
import { logOut } from "@/services/authService";
import styles from "./TemporaryHome.module.css";

// title names the page that will replace this one, e.g. "Instructor dashboard"
export default function TemporaryHome({ title, comingIn }) {
  const { profile } = useAuth();

  // Logs out, then loads the landing page fresh. A full page load (not router.push) is used
  // so the protected page cannot send the user to the login page first.
  async function handleLogOut() {
    await logOut();
    window.location.assign("/");
  }

  return (
    <Container className={styles.page}>
      <Card raised className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>This page is built in {comingIn}.</p>
        {profile && (
          <p className={styles.text}>
            Logged in as <strong>{profile.name || profile.email || "guest"}</strong> ({profile.role}).
          </p>
        )}
        {profile && <Button onClick={handleLogOut}>Log out</Button>}
        {!profile && <Button href="/">Back to home</Button>}
      </Card>
    </Container>
  );
}
