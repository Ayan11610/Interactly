// File: frontend/app/(public)/(landing)/_landing/TryPoll.js
// Purpose: "Try it here" poll demo: three options whose bars move when the visitor votes.
// Screens: PUB-01

"use client";

import { useState } from "react";
import panel from "./TryPanel.module.css";
import styles from "./TryPoll.module.css";

const options = ["Monday 2 pm", "Wednesday 11 am", "Friday after lab"];
const startingVotes = [5, 9, 6];

// Shows the poll. The visitor can change their vote; their vote adds one to that option.
export default function TryPoll() {
  const [picked, setPicked] = useState(null);

  const votes = [];
  let total = 0;
  for (let i = 0; i < startingVotes.length; i++) {
    let count = startingVotes[i];
    if (picked === i) {
      count = count + 1;
    }
    votes.push(count);
    total = total + count;
  }

  return (
    <div className={panel.panel + " " + styles.list}>
      <h3 className={panel.question}>Best time for office hours?</h3>
      {options.map((label, index) => {
        const percent = Math.round((votes[index] / total) * 100);
        return (
          <button
            key={label}
            type="button"
            className={styles.option + " " + panel.pressable}
            onClick={() => setPicked(index)}
            aria-pressed={picked === index}
          >
            <span className={styles.bar} style={{ width: percent + "%" }} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
            <span className={styles.percent}>{percent}%</span>
          </button>
        );
      })}
    </div>
  );
}
