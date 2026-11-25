// File: frontend/app/(public)/(landing)/_landing/PhonesDrawing.js
// Purpose: Simple box drawing of three phones joining a session ("How it works" step 02).
// Screens: PUB-01

import frame from "./DrawingFrame.module.css";
import styles from "./PhonesDrawing.module.css";

const phones = [
  { tilt: styles.tiltLeft, colour: frame.colourA },
  { tilt: styles.raised, colour: frame.colourB },
  { tilt: styles.tiltRight, colour: frame.colourC },
];

// Draws the three phones on a peach card. Decorative only.
export default function PhonesDrawing() {
  return (
    <div className={frame.frame + " " + frame.peachBg + " " + styles.phonesFrame} aria-hidden="true">
      {phones.map((phone, index) => (
        <div key={index} className={styles.phone + " " + phone.tilt}>
          <span className={styles.phoneTitle} />
          <span className={styles.phoneBlock + " " + phone.colour} />
          <span className={styles.phoneBlock} />
        </div>
      ))}
    </div>
  );
}
