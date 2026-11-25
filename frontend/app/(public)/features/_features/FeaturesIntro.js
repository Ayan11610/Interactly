// File: frontend/app/(public)/features/_features/FeaturesIntro.js
// Purpose: Top of the Features page: title, short line and the Start free / See pricing buttons.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import { SpiralDoodle, BoltDoodle } from "@/components/Doodles/Doodles";
import styles from "./FeaturesIntro.module.css";

// Shows the page intro with its two doodles
export default function FeaturesIntro() {
  return (
    <section className={styles.intro}>
      <SpiralDoodle size={220} className={styles.spiral} />
      <BoltDoodle width={36} className={styles.bolt} />
      <Container className={styles.inner}>
        <span className={styles.screenCode}>PUB-03</span>
        <h1 className={styles.title}>Everything you need to run a class that talks back</h1>
        <p className={styles.lead}>From the first slide to the report you read after class.</p>
        <div className={styles.actions}>
          <Button href="/signup" variant="primary" size="lg">
            Start free
          </Button>
          <Button href="/pricing" size="lg">
            See pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
