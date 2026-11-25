// File: frontend/app/(public)/(landing)/_landing/DemoPoll.js
// Purpose: The "Tabs or spaces?" demo poll in the hero. The visitor votes once,
//          the bars grow and the doodle students hop.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Badge from "@/components/Badge/Badge";
import DoodleKid from "./DoodleKid";
import styles from "./DemoPoll.module.css";

const options = ["Tabs", "Spaces", "Whatever the linter says"];
const letters = ["A", "B", "C"];
const barClasses = [styles.barA, styles.barB, styles.barC];
const kidCount = 8;

// Shows the demo poll card with its three options and the row of doodle students.
export default function DemoPoll() {
  const [votes, setVotes] = useState([3, 4, 1]);
  const [picked, setPicked] = useState(null);

  let total = 0;
  for (let i = 0; i < votes.length; i++) {
    total = total + votes[i];
  }

  // Adds the visitor's vote. They can only vote once.
  function vote(index) {
    if (picked !== null) {
      return;
    }
    const newVotes = [...votes];
    newVotes[index] = newVotes[index] + 1;
    setVotes(newVotes);
    setPicked(index);
  }

  const voted = picked !== null;
  let crowdLine = "8 doodle students are waiting for your vote";
  if (voted) {
    crowdLine = "Your vote is in. Watch the bars move.";
  }

  const kids = [];
  for (let i = 0; i < kidCount; i++) {
    kids.push(<DoodleKid key={i} colourIndex={i % 4} voted={voted} delay={i * 60} />);
  }

  return (
    <section className={styles.card} aria-label="Live demo poll">
      <div className={styles.top}>
        <Badge tone="mint" live>
          Live poll · demo room
        </Badge>
        <span className={styles.count}>{total} votes</span>
      </div>
      <h2 className={styles.question}>Tabs or spaces?</h2>

      <div className={styles.options} role="group" aria-label="Vote">
        {options.map((label, index) => {
          let percent = 0;
          if (voted) {
            percent = Math.round((votes[index] / total) * 100);
          }
          let optionClass = styles.option;
          if (picked === index) {
            optionClass = styles.option + " " + styles.picked;
          }
          return (
            <button key={label} type="button" className={optionClass} onClick={() => vote(index)} aria-pressed={picked === index}>
              <span className={barClasses[index]} style={{ width: percent + "%" }} aria-hidden="true" />
              <span className={styles.letter}>{letters[index]}</span>
              <span className={styles.label}>{label}</span>
              <span className={styles.percent}>{voted ? percent + "%" : ""}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.crowd}>
        <div className={styles.kids} aria-hidden="true">
          {kids}
        </div>
        <span className={styles.crowdLine}>{crowdLine}</span>
      </div>
    </section>
  );
}
