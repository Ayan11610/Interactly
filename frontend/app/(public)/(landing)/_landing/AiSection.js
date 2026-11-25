// File: frontend/app/(public)/(landing)/_landing/AiSection.js
// Purpose: "After class" section: a pile of student answers that collapses into one
//          session-level AI suggestion when the visitor presses "Find the pattern".
//          Demo text only; nothing is sent to the AI service.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./AiSection.module.css";

const studentAnswers = [
  "A queue is like a stack but backwards",
  "last in, first out?",
  "the newest item leaves first",
  "FIFO means first in, first out",
  "items leave from the top",
];

// Works out where one answer card sits: spread out normally, stacked behind the suggestion when on
function getAnswerStyle(index, patternShown) {
  let left = "2%";
  let tilt = -1.5;
  if (index % 2 === 1) {
    left = "18%";
    tilt = 1.5;
  }
  if (patternShown) {
    return {
      left: left,
      top: 150 + index * 6 + "px",
      opacity: 0.35,
      transform: "rotate(" + (index * 3 - 6) + "deg) scale(0.92)",
    };
  }
  return { left: left, top: index * 66 + "px", opacity: 1, transform: "rotate(" + tilt + "deg)" };
}

// Shows the text, the toggle button and the answers / suggestion demo
export default function AiSection() {
  const [patternShown, setPatternShown] = useState(false);

  let buttonText = "Find the pattern";
  if (patternShown) {
    buttonText = "Show the answers again";
  }

  return (
    <section className={styles.section} aria-labelledby="ai-heading">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <SectionHeading id="ai-heading" eyebrow="AFTER CLASS" title="Finds where most students got confused" />
          <p className={styles.lead}>
            Interactly reads every open answer and points out the mistake most of the class shares, with a short
            follow-up activity you can use next time.
          </p>
          <Button size="lg" className={styles.toggle} onClick={() => setPatternShown(!patternShown)}>
            {buttonText}
          </Button>
        </div>

        <div className={styles.board}>
          {studentAnswers.map((answer, index) => (
            <div key={answer} className={styles.answer} style={getAnswerStyle(index, patternShown)}>
              <span className={styles.answerLabel}>Student answer</span>
              {answer}
            </div>
          ))}

          {patternShown && (
            <div className={styles.suggestion}>
              <svg width="52" height="52" viewBox="0 0 170 170" className={styles.bulb} aria-hidden="true">
                <path d="M62 120 H108 M68 136 H102 M85 22 C58 22 46 42 46 62 C46 86 66 94 66 114 H104 C104 94 124 86 124 62 C124 42 112 22 85 22 Z" />
              </svg>
              <span className={styles.suggestionTitle}>Most students confuse stacks and queues</span>
              <span className={styles.suggestionText}>
                4 of 5 answers describe last in, first out. Try a 3-question follow-up with a canteen-line example.
              </span>
              <span className={styles.suggestionActions}>
                <span className={styles.useChip}>Use suggestion</span>
                <span className={styles.dismiss}>Dismiss</span>
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
