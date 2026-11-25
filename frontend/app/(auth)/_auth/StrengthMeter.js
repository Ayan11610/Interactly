// File: frontend/app/(auth)/_auth/StrengthMeter.js
// Purpose: Four small bars that fill up as the new password gets stronger.
// Screens: IAM-06 Reset Password

import { passwordStrength } from "@/services/passwordRules";
import styles from "./StrengthMeter.module.css";

// Shows the bars for the given password (score 0 to 4)
export default function StrengthMeter({ password }) {
  const score = passwordStrength(password);
  const bars = [];
  for (let i = 0; i < 4; i++) {
    let barClass = styles.bar;
    if (i < score) {
      barClass = barClass + " " + styles.on;
    }
    bars.push(<span key={i} className={barClass} />);
  }

  return (
    <div className={styles.meter} role="img" aria-label={"Password strength " + score + " of 4"}>
      {bars}
    </div>
  );
}
