// File: frontend/app/(public)/pricing/_pricing/PlanChooser.js
// Purpose: Top of the Pricing page: the title, the monthly / yearly switch and the three
//          plan cards. The switch and the cards share one piece of state, so they live together.
// Screens: PUB-02

"use client";

import { useState } from "react";
import Container from "@/components/Container/Container";
import { SpiralDoodle, StarDoodle } from "@/components/Doodles/Doodles";
import BillingToggle from "./BillingToggle";
import PlanCard from "./PlanCard";
import { plans } from "./planData";
import styles from "./PlanChooser.module.css";

// Shows the intro and the plan cards. Prices follow the billing period the visitor picks.
export default function PlanChooser() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className={styles.intro}>
        <SpiralDoodle size={220} className={styles.spiral} />
        <StarDoodle size={48} className={styles.star} />
        <Container className={styles.introInner}>
          <span className={styles.screenCode}>PUB-02</span>
          <h1 className={styles.title}>Pick a plan for how often you teach</h1>
          <p className={styles.lead}>
            Every plan includes the join code, live results on the projector and free access for students. Prices
            are placeholders until they are final.
          </p>
          <BillingToggle yearly={yearly} onChange={setYearly} />
          <p className={styles.handNote}>students never pay</p>
        </Container>
      </section>

      <section className={styles.plans} aria-label="Plans">
        <Container className={styles.cards}>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </Container>
      </section>
    </>
  );
}
