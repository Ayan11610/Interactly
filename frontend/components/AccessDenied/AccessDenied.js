// File: frontend/components/AccessDenied/AccessDenied.js
// Purpose: Full-page "You don't have access to this" screen, shown when a logged-in user
//          opens a page their role may not use. The design's "Ask for access" button is
//          left out: there is no access-request feature in this phase.
// Screens: IAM-18 Access Denied

import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import { RoughFilter, SpiralDoodle, StarDoodle, BoltDoodle } from "@/components/Doodles/Doodles";
import styles from "./AccessDenied.module.css";

// Draws the lemon padlock
function Padlock() {
  return (
    <svg width="190" height="190" viewBox="0 0 170 170" className={styles.padlock} aria-hidden="true">
      <rect className={styles.lockFill} x="42" y="74" width="86" height="70" rx="4" transform="translate(5 4)" />
      <rect className={styles.line} x="42" y="74" width="86" height="70" rx="4" />
      <path className={styles.line} d="M58 74 V54 C58 36 72 28 85 28 C98 28 112 36 112 54 V74" />
      <circle className={styles.line} cx="85" cy="104" r="7" />
      <path className={styles.line} d="M85 111 V124" />
    </svg>
  );
}

// homeHref is where "Go to dashboard" leads for this user's role
export default function AccessDenied({ homeHref }) {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <header className={styles.header}>
        <Logo size={30} />
        <span className={styles.screenCode}>IAM-18</span>
      </header>
      <SpiralDoodle size={220} className={styles.spiral} />
      <StarDoodle size={46} className={styles.star} />
      <BoltDoodle width={30} className={styles.bolt} />
      <main className={styles.main}>
        <Padlock />
        <h1 className={styles.title}>You don&apos;t have access to this</h1>
        <p className={styles.text}>This page belongs to another instructor or a team you are not in.</p>
        <div className={styles.actions}>
          <Button href={homeHref} size="lg">
            Go to dashboard
          </Button>
        </div>
      </main>
    </div>
  );
}
