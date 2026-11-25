// File: frontend/app/(auth)/_auth/CodeBoxes.js
// Purpose: The six boxes for the email verification code. One real input sits invisibly on
//          top, so typing, pasting and phone keyboards all work; the boxes only show the digits.
// Screens: IAM-07

"use client";

import { useState } from "react";
import styles from "./CodeBoxes.module.css";

const boxCount = 6;

// value is the digits typed so far; onChange gets the new digits (numbers only, max 6)
export default function CodeBoxes({ value, onChange }) {
  const [focused, setFocused] = useState(false);

  // Keeps only digits and cuts the code to six
  function handleChange(event) {
    const digits = event.target.value.replace(/\D/g, "").slice(0, boxCount);
    onChange(digits);
  }

  const boxes = [];
  for (let i = 0; i < boxCount; i++) {
    let boxClass = styles.box;
    if (i < value.length) {
      boxClass = boxClass + " " + styles.filled;
    } else if (focused && i === value.length) {
      boxClass = boxClass + " " + styles.current;
    }
    boxes.push(
      <span key={i} className={boxClass} style={{ animationDelay: i * 80 + "ms" }} aria-hidden="true">
        {value[i] || ""}
      </span>
    );
  }

  return (
    <div className={styles.field}>
      <label htmlFor="verify-code" className={styles.label}>
        Verification code
      </label>
      <div className={styles.row}>
        {boxes}
        <input
          id="verify-code"
          className={styles.input}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={boxCount}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}
