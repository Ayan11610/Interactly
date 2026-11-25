// File: frontend/app/(public)/(landing)/_landing/TryItSection.js
// Purpose: "Try it here" section: five activity tabs, each with a small working demo.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Container from "@/components/Container/Container";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { BoltDoodle } from "@/components/Doodles/Doodles";
import TryQuiz from "./TryQuiz";
import TryPoll from "./TryPoll";
import TryWordCloud from "./TryWordCloud";
import TryQa from "./TryQa";
import TryRating from "./TryRating";
import styles from "./TryItSection.module.css";

// The tabs in design order, with the swatch colour class and the demo each one shows
const tabs = [
  { key: "quiz", label: "Quiz", swatch: styles.swatchQuiz, Demo: TryQuiz },
  { key: "poll", label: "Poll", swatch: styles.swatchPoll, Demo: TryPoll },
  { key: "cloud", label: "Word cloud", swatch: styles.swatchCloud, Demo: TryWordCloud },
  { key: "qa", label: "Q&A", swatch: styles.swatchQa, Demo: TryQa },
  { key: "rate", label: "Rating", swatch: styles.swatchRating, Demo: TryRating },
];

// Shows the tab row and the demo of the chosen tab
export default function TryItSection() {
  const [activeKey, setActiveKey] = useState("quiz");

  let ActiveDemo = TryQuiz;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].key === activeKey) {
      ActiveDemo = tabs[i].Demo;
    }
  }

  return (
    <section className={styles.section} aria-labelledby="play-heading">
      <BoltDoodle className={styles.bolt} />
      <Container className={styles.inner}>
        <SectionHeading id="play-heading" eyebrow="TRY IT HERE" title="Pick an activity and answer it" />

        <div className={styles.tabs} role="tablist" aria-label="Activities">
          {tabs.map((tab) => {
            const selected = tab.key === activeKey;
            let tabClass = styles.tab;
            if (selected) {
              tabClass = styles.tab + " " + styles.selected;
            }
            return (
              <button key={tab.key} type="button" role="tab" className={tabClass} aria-selected={selected} onClick={() => setActiveKey(tab.key)}>
                <span className={styles.swatch + " " + tab.swatch} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={styles.panel} role="tabpanel">
          <ActiveDemo key={activeKey} />
        </div>
      </Container>
    </section>
  );
}
