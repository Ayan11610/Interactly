// File: frontend/app/(public)/_landing/HeroSection.js
// Purpose: Top section of the landing page: headline, sign-up buttons, the join-code box,
//          and the demo poll (or the demo quiz once the demo code is typed).
// Screens: PUB-01

"use client";

import { useState } from "react";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import JoinCodeForm, { demoCode } from "./JoinCodeForm";
import DemoPoll from "./DemoPoll";
import DemoQuiz from "./DemoQuiz";
import { SpiralDoodle, StarDoodle } from "@/components/Doodles/Doodles";
import styles from "./HeroSection.module.css";

// Shows the hero. The code typed in the join box decides whether the poll or the quiz shows.
export default function HeroSection() {
  const [code, setCode] = useState("");

  // Clears the code so the demo quiz closes and the poll comes back
  function leaveDemo() {
    setCode("");
  }

  const demoOpen = code === demoCode;

  return (
    <section className={styles.hero}>
      <SpiralDoodle className={styles.spiral} />
      <StarDoodle className={styles.star} />
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.badge}>
            <Badge tone="mint">For lectures, labs and tutorials</Badge>
          </span>
          <h1 className={styles.title}>
            Ask the room.{" "}
            <span className={styles.underlined}>
              See it answer.
              <svg viewBox="0 0 300 24" preserveAspectRatio="none" className={styles.underline} aria-hidden="true">
                <path d="M4 16 C80 4 200 4 296 14" />
              </svg>
            </span>
          </h1>
          <p className={styles.lead}>
            Polls, quizzes, word clouds and Q&amp;A for your classes. Students answer on their phones and the
            results grow on the big screen as they come in.
          </p>
          <div className={styles.actions}>
            <Button href="/signup" variant="primary" size="lg" iconAfter="arrow-right">
              Start free
            </Button>
            <Button href="#how" size="lg">
              See how it works
            </Button>
            <span className={styles.handNote}>it&apos;s free, go on!</span>
          </div>
          <JoinCodeForm code={code} onCodeChange={setCode} />
        </div>

        <div className={styles.demo}>
          {demoOpen ? <DemoQuiz onLeave={leaveDemo} /> : <DemoPoll />}
        </div>
      </Container>
    </section>
  );
}
