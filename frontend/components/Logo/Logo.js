// File: frontend/components/Logo/Logo.js
// Purpose: The Interactly logo: the smiling lemon mark, with or without the word "Interactly".
// Source: docs/design/system/components.d.ts (LogoProps)
// Screens: PUB-01, PUB-02, PUB-03 and every page header

import styles from "./Logo.module.css";

// Draws the logo. markOnly hides the word; onDark uses a light outline for ink backgrounds.
export default function Logo({ size = 28, markOnly = false, onDark = false }) {
  let wrapperClass = styles.logo;
  if (onDark) {
    wrapperClass = styles.logo + " " + styles.onDark;
  }

  const mark = (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <circle className={styles.face} cx="60" cy="64" r="44" transform="translate(4 3)" />
      <circle className={styles.outline} cx="60" cy="64" r="44" />
      <circle className={styles.eye} cx="46" cy="58" r="6" />
      <circle className={styles.eye} cx="74" cy="58" r="6" />
      <path className={styles.smile} d="M44 76 Q60 90 76 76" />
    </svg>
  );

  if (markOnly) {
    return (
      <span className={wrapperClass} role="img" aria-label="Interactly">
        {mark}
      </span>
    );
  }

  return (
    <span className={wrapperClass}>
      {mark}
      <span className={styles.word}>Interactly</span>
    </span>
  );
}
