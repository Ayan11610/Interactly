// File: frontend/app/(public)/_landing/DemoQuiz.js
// Purpose: The demo quiz that replaces the hero poll after the visitor types code 123456.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import DemoTile, { getTileState } from "./DemoTile";
import styles from "./DemoQuiz.module.css";

const answers = ["Stack", "Queue", "Binary tree", "Hash table"];
const correctIndex = 1;

// Shows the demo quiz card. onLeave closes it and brings the poll back.
export default function DemoQuiz({ onLeave }) {
  const [picked, setPicked] = useState(null);

  let note = "";
  if (picked === correctIndex) {
    note = "yesss! +100";
  } else if (picked !== null) {
    note = "so close, think first in, first out";
  }

  return (
    <section className={styles.card} aria-label="Demo quiz">
      <div className={styles.top}>
        <Badge tone="peach">Demo quiz · you&apos;re in</Badge>
        <Button onClick={onLeave}>Leave</Button>
      </div>
      <h2 className={styles.question}>Which one serves items first in, first out?</h2>

      <div className={styles.tiles}>
        {answers.map((label, index) => (
          <DemoTile
            key={label}
            index={index}
            label={label}
            layout="stacked"
            state={getTileState(picked, correctIndex, index)}
            onPick={() => setPicked(index)}
          />
        ))}
      </div>

      <span className={styles.note}>{note}</span>
    </section>
  );
}
