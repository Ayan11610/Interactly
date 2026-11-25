// File: frontend/app/(public)/_landing/DoodleKid.js
// Purpose: One small doodle student face shown under the hero demo poll.
// Screens: PUB-01

import styles from "./DoodleKid.module.css";

const colourClasses = [styles.lemon, styles.peach, styles.mint, styles.lime];

// Draws a face in one of four colours. After a vote it smiles and hops (delay in ms).
export default function DoodleKid({ colourIndex, voted, delay }) {
  let mouth = "M15 27 H25";
  let className = styles.kid;
  if (voted) {
    mouth = "M14 26 Q20 31 26 26";
    className = styles.kid + " " + styles.hop;
  }

  return (
    <svg width="34" height="34" viewBox="0 0 40 40" className={className} style={{ animationDelay: delay + "ms" }}>
      <circle className={colourClasses[colourIndex]} cx="20" cy="21" r="16" />
      <circle className={styles.eye} cx="15" cy="19" r="2" />
      <circle className={styles.eye} cx="25" cy="19" r="2" />
      <path className={styles.mouth} d={mouth} />
    </svg>
  );
}
