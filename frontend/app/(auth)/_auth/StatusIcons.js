// File: frontend/app/(auth)/_auth/StatusIcons.js
// Purpose: The big hand-drawn icons at the top of the email screens: an envelope (IAM-07),
//          a green tick (IAM-08) and a peach cross (IAM-09). Decorative only.
// Screens: IAM-07, IAM-08, IAM-09

import styles from "./StatusIcons.module.css";

// Envelope with a little "sent" spark
export function EnvelopeIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 170 170" className={styles.icon} aria-hidden="true">
      <rect className={styles.lemonFill} x="26" y="50" width="118" height="80" rx="4" transform="translate(5 4)" />
      <rect className={styles.line} x="26" y="50" width="118" height="80" rx="4" />
      <path className={styles.line} d="M26 54 L85 98 L144 54" />
      <path className={styles.thinLine} d="M140 30 L148 20 M150 44 H162" />
    </svg>
  );
}

// Mint circle with a tick that draws itself
export function SuccessIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 170 170" className={styles.icon} aria-hidden="true">
      <circle className={styles.mintFill} cx="85" cy="85" r="56" transform="translate(5 4)" />
      <circle className={styles.line + " " + styles.drawCircle} cx="85" cy="85" r="56" />
      <path className={styles.thickLine + " " + styles.drawTick} d="M60 88 L78 106 L112 66" />
    </svg>
  );
}

// Peach circle with a cross
export function FailedIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 170 170" className={styles.icon} aria-hidden="true">
      <circle className={styles.peachFill} cx="85" cy="85" r="56" transform="translate(5 4)" />
      <circle className={styles.line} cx="85" cy="85" r="56" />
      <path className={styles.thickLine} d="M64 64 L106 106 M106 64 L64 106" />
    </svg>
  );
}
