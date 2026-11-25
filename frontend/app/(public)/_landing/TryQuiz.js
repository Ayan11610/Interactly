// File: frontend/app/(public)/_landing/TryQuiz.js
// Purpose: "Try it here" quiz demo: one question with four coloured answer tiles.
// Screens: PUB-01

"use client";

import { useState } from "react";
import DemoTile, { getTileState } from "./DemoTile";
import panel from "./TryPanel.module.css";
import styles from "./TryQuiz.module.css";

const answers = ["The newest item", "The oldest item", "A random item", "The smallest item"];
const correctIndex = 0;

// Shows the quiz. After a pick the tiles show right and wrong, with a short note.
export default function TryQuiz() {
  const [picked, setPicked] = useState(null);

  let note = "";
  if (picked === correctIndex) {
    note = "nailed it, last in first out";
  } else if (picked !== null) {
    note = "think of a pile of plates";
  }

  return (
    <div className={panel.panel}>
      <h3 className={panel.question}>What does a stack return first?</h3>
      <div className={styles.tiles}>
        {answers.map((label, index) => (
          <DemoTile
            key={label}
            index={index}
            label={label}
            layout="row"
            state={getTileState(picked, correctIndex, index)}
            onPick={() => setPicked(index)}
          />
        ))}
      </div>
      <span className={panel.note}>{note}</span>
    </div>
  );
}
