// File: frontend/app/(public)/features/_features/ProjectorSection.js
// Purpose: "Readable from the back row": the projector picture next to a short description.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ProjectorPreview from "./ProjectorPreview";
import styles from "./ProjectorSection.module.css";

// Shows the projector picture and its text side by side (stacked on phones)
export default function ProjectorSection() {
  return (
    <section className={styles.section} aria-labelledby="projector-heading">
      <Container className={styles.inner}>
        <ProjectorPreview />
        <div className={styles.text}>
          <SectionHeading id="projector-heading" eyebrow="PROJECTOR" title="Readable from the back row" />
          <p className={styles.lead}>
            Dark mode, big type and a join code that stays on screen. Results only appear when you choose.
          </p>
        </div>
      </Container>
    </section>
  );
}
