// File: frontend/app/(auth)/_auth/SidePanelDoodles.js
// Purpose: The scattered doodles on the lemon side panel of the desktop auth pages.
//          Decorative only, so everything is hidden from screen readers.
// Screens: IAM-01, IAM-02, IAM-05 to IAM-09

import { SpiralDoodle, StarDoodle, BoltDoodle } from "@/components/Doodles/Doodles";
import styles from "./SidePanelDoodles.module.css";

// Draws the spiral, star, bolt, heart, sparkle and small circle at their design positions
export default function SidePanelDoodles() {
  return (
    <>
      <SpiralDoodle size={230} className={styles.spiral} />
      <StarDoodle size={54} className={styles.star} />
      <BoltDoodle width={30} className={styles.bolt} />
      <svg width="40" height="40" viewBox="0 0 44 40" className={styles.heart} aria-hidden="true">
        <path
          className={styles.heartFill}
          d="M22 36 C4 24 2 10 12 6 C18 4 21 9 22 12 C23 9 27 3 33 6 C42 10 40 24 22 36 Z"
          transform="translate(3 2)"
        />
        <path className={styles.line} d="M22 36 C4 24 2 10 12 6 C18 4 21 9 22 12 C23 9 27 3 33 6 C42 10 40 24 22 36 Z" />
      </svg>
      <svg width="26" height="26" viewBox="0 0 34 34" className={styles.sparkle} aria-hidden="true">
        <path className={styles.line} d="M17 4 V30 M4 17 H30 M8 8 L26 26 M26 8 L8 26" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" className={styles.dot} aria-hidden="true">
        <circle className={styles.thinLine} cx="8" cy="8" r="5" />
      </svg>
    </>
  );
}
