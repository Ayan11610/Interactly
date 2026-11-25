// File: frontend/app/(public)/_landing/HowItWorksSection.js
// Purpose: "How it works" section: three numbered steps from laptop to phones to projector.
// Screens: PUB-01

import Container from "@/components/Container/Container";
import SectionHeading from "./SectionHeading";
import LaptopDrawing from "./LaptopDrawing";
import PhonesDrawing from "./PhonesDrawing";
import ProjectorDrawing from "./ProjectorDrawing";
import styles from "./HowItWorksSection.module.css";

const steps = [
  {
    number: "01",
    title: "Build it on your laptop",
    text: "Drop a quiz, poll or word cloud between your slides. Reuse anything from your activity bank.",
    Drawing: LaptopDrawing,
  },
  {
    number: "02",
    title: "Students join with a code",
    text: "No app and no account. They open interactly.app/join, type six digits and they're in.",
    Drawing: PhonesDrawing,
  },
  {
    number: "03",
    title: "Answers land on the projector",
    text: "Bars grow, words float in, and quizzes end with a podium for the top three.",
    Drawing: ProjectorDrawing,
  },
];

// Shows the three steps. The dashed arrow above them points from step 01 to step 03.
export default function HowItWorksSection() {
  return (
    <section id="how" className={styles.section} aria-labelledby="how-heading">
      <Container className={styles.inner}>
        <SectionHeading id="how-heading" eyebrow="HOW IT WORKS" title="Laptop to phones to projector, in under a minute" />

        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={styles.arrow} aria-hidden="true">
          <path className={styles.dashed} d="M30 40 C220 0 380 60 600 30 S980 0 1170 40" />
          <path className={styles.arrowHead} d="M1150 26 L1172 40 L1150 52" />
        </svg>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <article key={step.number} className={styles.step} style={{ animationDelay: index * 120 + "ms" }}>
              <step.Drawing />
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
