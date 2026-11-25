// File: frontend/components/AppLoader/AppLoader.js
// Purpose: The full-page loading screen: the mascot draws itself in a loop above
//          "Interactly" and a short message. Used on first load, while a page loads,
//          and while a protected page checks who is logged in.
// Screens: ST-01 Application Loading

import { RoughFilter, SpiralDoodle, StarDoodle } from "@/components/Doodles/Doodles";
import styles from "./AppLoader.module.css";

// Draws the mascot. Its outline, antenna and smile keep drawing and undrawing.
function DrawingMascot() {
  return (
    <svg width="160" height="160" viewBox="0 0 120 120" className={styles.mascot} aria-hidden="true">
      <circle className={styles.face} cx="60" cy="64" r="44" transform="translate(4 3)" />
      <circle className={styles.line + " " + styles.draw} cx="60" cy="64" r="44" />
      <path className={styles.line + " " + styles.draw + " " + styles.second} d="M50 22 L58 6 L66 22" />
      <path className={styles.line + " " + styles.draw + " " + styles.third} d="M46 76 Q60 88 74 76" />
      <circle className={styles.eye + " " + styles.leftEye} cx="46" cy="58" r="4.5" />
      <circle className={styles.eye + " " + styles.rightEye} cx="74" cy="58" r="4.5" />
    </svg>
  );
}

// message defaults to the design's "Sharpening pencils…"
export default function AppLoader({ message = "Sharpening pencils…" }) {
  return (
    <div className={styles.page} role="status" aria-live="polite">
      <RoughFilter />
      <main className={styles.main}>
        <SpiralDoodle size={200} className={styles.spiral} />
        <StarDoodle size={40} className={styles.star} />
        <svg width="16" height="16" viewBox="0 0 16 16" className={styles.dot} aria-hidden="true">
          <circle className={styles.line} cx="8" cy="8" r="5" />
        </svg>
        <DrawingMascot />
        <span className={styles.name}>Interactly</span>
        <span className={styles.message}>{message}</span>
        <span className={styles.screenCode}>ST-01</span>
      </main>
    </div>
  );
}
