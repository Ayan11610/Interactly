// File: frontend/app/(public)/pricing/_pricing/PricingCta.js
// Purpose: Lemon call-to-action box at the bottom of the Pricing page.
// Screens: PUB-02

import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./PricingCta.module.css";

// Shows "Run your next class on Free" with a Start free button
export default function PricingCta() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <div className={styles.box}>
          <div className={styles.text}>
            <h2 id="cta-heading" className={styles.title}>
              Run your next class on Free
            </h2>
            <p className={styles.lead}>No card needed. Upgrade when you outgrow 3 sessions a month.</p>
          </div>
          <Button href="/signup" size="lg">
            Start free
          </Button>
        </div>
      </Container>
    </section>
  );
}
