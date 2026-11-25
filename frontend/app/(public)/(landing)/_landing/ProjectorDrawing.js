// File: frontend/app/(public)/(landing)/_landing/ProjectorDrawing.js
// Purpose: Simple box drawing of a projector showing a bar chart ("How it works" step 03).
// Screens: PUB-01

import frame from "./DrawingFrame.module.css";
import styles from "./ProjectorDrawing.module.css";

const bars = [
  { height: "30%", colour: frame.colourA },
  { height: "85%", colour: frame.colourB },
  { height: "15%", colour: frame.colourC },
  { height: "10%", colour: frame.colourD },
];

// Draws the dark projector screen on a mint card. Decorative only.
export default function ProjectorDrawing() {
  return (
    <div className={frame.frame + " " + frame.mintBg + " " + styles.projectorFrame} aria-hidden="true">
      <div className={styles.projector}>
        {bars.map((bar, index) => (
          <span key={index} className={styles.bar + " " + bar.colour} style={{ height: bar.height }} />
        ))}
      </div>
    </div>
  );
}
