// File: frontend/app/(public)/_landing/TryQa.js
// Purpose: "Try it here" Q&A demo: questions from the room that the visitor can upvote.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import panel from "./TryPanel.module.css";
import styles from "./TryQa.module.css";

const questions = [
  { text: "Can a queue be built with two stacks?", votes: 14 },
  { text: "Will recursion be on the midterm?", votes: 9 },
  { text: "Why does BFS need a queue?", votes: 6 },
];

// Shows the questions. Each heart button toggles the visitor's upvote on that question.
export default function TryQa() {
  const [upvoted, setUpvoted] = useState([false, false, false]);

  // Turns the upvote on one question on or off
  function toggleUpvote(index) {
    const next = [...upvoted];
    next[index] = !next[index];
    setUpvoted(next);
  }

  return (
    <div className={panel.panel + " " + styles.list}>
      <h3 className={panel.question}>Questions from the room</h3>
      {questions.map((question, index) => {
        const on = upvoted[index];
        let count = question.votes;
        let buttonClass = styles.upvote + " " + panel.pressable;
        let heartFill = "none";
        if (on) {
          count = count + 1;
          buttonClass = buttonClass + " " + styles.upvoted;
          heartFill = "var(--peach-400)";
        }
        return (
          <div key={question.text} className={styles.question}>
            <span className={styles.text}>{question.text}</span>
            <button type="button" className={buttonClass} onClick={() => toggleUpvote(index)} aria-pressed={on} aria-label="Upvote">
              <span className={on ? styles.pop : undefined}>
                <Icon name="heart" fill={heartFill} />
              </span>
              <span className={styles.count}>{count}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
