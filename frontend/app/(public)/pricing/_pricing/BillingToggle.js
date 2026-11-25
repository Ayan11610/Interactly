// File: frontend/app/(public)/pricing/_pricing/BillingToggle.js
// Purpose: Two joined buttons to switch the prices between monthly and yearly.
// Screens: PUB-02

import styles from "./BillingToggle.module.css";

// Shows "Monthly" and "Yearly". yearly is the current choice; onChange gets true or false.
export default function BillingToggle({ yearly, onChange }) {
  let monthlyClass = styles.option + " " + styles.first;
  let yearlyClass = styles.option;
  if (yearly) {
    yearlyClass = yearlyClass + " " + styles.chosen;
  } else {
    monthlyClass = monthlyClass + " " + styles.chosen;
  }

  return (
    <div className={styles.toggle} role="group" aria-label="Billing period">
      <button type="button" className={monthlyClass} aria-pressed={!yearly} onClick={() => onChange(false)}>
        Monthly
      </button>
      <button type="button" className={yearlyClass} aria-pressed={yearly} onClick={() => onChange(true)}>
        Yearly <span className={styles.saving}>2 months free</span>
      </button>
    </div>
  );
}
