// File: frontend/components/PageSwipe/PageSwipe.js
// Purpose: The page-transition effect: a thick ink brush stroke sweeps across the screen
//          once every time the page address changes. Decorative only; it never blocks clicks.
// Source: docs/design/system/motion.md ("swipe", 460ms, at z-transition)
// Screens: every page (added once in app/layout.js)

"use client";

import { usePathname } from "next/navigation";
import styles from "./PageSwipe.module.css";

// Using the address as the key makes React draw a fresh stroke (and replay the animation)
// on every navigation
export default function PageSwipe() {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.swipe} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 390 844" preserveAspectRatio="none">
        <path className={styles.stroke} d="M-30 430 C 70 360, 150 500, 230 410 S 370 380, 430 450" />
      </svg>
    </div>
  );
}
