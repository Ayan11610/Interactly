// File: frontend/app/(public)/(landing)/_landing/JoinCodeForm.js
// Purpose: The big join-code box in the hero. Typing the demo code 123456 opens the demo quiz.
//          It is a demo only: nothing is sent to the server.
// Screens: PUB-01

"use client";

import { useState } from "react";
import styles from "./JoinCodeForm.module.css";

export const demoCode = "123456";

// Shows the code input. code and onCodeChange come from the hero, which opens the demo quiz.
export default function JoinCodeForm({ code, onCodeChange }) {
  const [wrongCount, setWrongCount] = useState(0);

  // Keeps only digits (max 6) and counts wrong full codes so the box can shake each time
  function handleChange(event) {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 6);
    if (digits.length === 6 && digits !== demoCode) {
      setWrongCount(wrongCount + 1);
    }
    onCodeChange(digits);
  }

  // The page has no real form submit; Enter should not reload the page
  function handleSubmit(event) {
    event.preventDefault();
  }

  const isWrong = code.length === 6 && code !== demoCode;
  let hint = "";
  if (code === demoCode) {
    hint = "Joining the demo room…";
  } else if (isWrong) {
    hint = "That code doesn't exist. Try 123456.";
  }

  // Two animations with different names so the shake restarts on every wrong code
  let inputClass = styles.input;
  if (wrongCount > 0 && wrongCount % 2 === 1) {
    inputClass = styles.input + " " + styles.shakeOne;
  } else if (wrongCount > 0) {
    inputClass = styles.input + " " + styles.shakeTwo;
  }

  let hintClass = styles.hint;
  if (isWrong) {
    hintClass = styles.hint + " " + styles.hintError;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="hero-code" className={styles.label}>
        Got a join code? Try the demo code <span className={styles.mono}>123456</span>
      </label>
      <input
        id="hero-code"
        className={inputClass}
        inputMode="numeric"
        maxLength={6}
        placeholder="000 000"
        value={code}
        onChange={handleChange}
      />
      <span className={hintClass} aria-live="polite">
        {hint}
      </span>
    </form>
  );
}
