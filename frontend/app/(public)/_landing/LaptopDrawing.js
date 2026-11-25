// File: frontend/app/(public)/_landing/LaptopDrawing.js
// Purpose: Simple box drawing of a laptop building an activity ("How it works" step 01).
// Screens: PUB-01

import frame from "./DrawingFrame.module.css";
import styles from "./LaptopDrawing.module.css";

// Draws the laptop on a lemon card. Decorative only, so it is hidden from screen readers.
export default function LaptopDrawing() {
  return (
    <div className={frame.frame + " " + frame.lemonBg + " " + styles.laptopFrame} aria-hidden="true">
      <div className={styles.laptop}>
        <div className={styles.screen}>
          <span className={styles.sidebar} />
          <span className={styles.content}>
            <span className={styles.titleBar} />
            <span className={styles.grid}>
              <span className={frame.colourA} />
              <span className={frame.colourB} />
              <span className={frame.colourC} />
              <span className={frame.colourD} />
            </span>
          </span>
        </div>
        <div className={styles.base} />
      </div>
    </div>
  );
}
