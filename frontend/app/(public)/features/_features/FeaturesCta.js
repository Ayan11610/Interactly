// File: frontend/app/(public)/features/_features/FeaturesCta.js
// Purpose: Closing row of the Features page: "Ready for your next lecture?" with two buttons.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./FeaturesCta.module.css";

// Shows the closing heading with Start free and Join a session
export default function FeaturesCta() {
  return (
    <section className={styles.section} aria-labelledby="features-cta-heading">
      <Container className={styles.row}>
        <h2 id="features-cta-heading" className={styles.title}>
          Ready for your next lecture?
        </h2>
        <span className={styles.actions}>
          <Button href="/signup" variant="primary" size="lg">
            Start free
          </Button>
          <Button href="/join" size="lg">
            Join a session
          </Button>
        </span>
      </Container>
    </section>
  );
}
