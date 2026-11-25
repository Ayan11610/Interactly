// File: frontend/components/Badge/Badge.js
// Purpose: A small bordered label, optionally with a pulsing "live" dot.
// Source: docs/design/system/components.d.ts (BadgeProps)
// Screens: PUB-01 and any screen that shows a status chip

import styles from "./Badge.module.css";

// Shows a badge. tone: white | lemon | peach | mint | lime | cream | ink.
export default function Badge({ tone = "white", small = false, live = false, children }) {
  const classes = [styles.badge, styles[tone]];
  if (small) {
    classes.push(styles.small);
  }

  return (
    <span className={classes.join(" ")}>
      {live && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
