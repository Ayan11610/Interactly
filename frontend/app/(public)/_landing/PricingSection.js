// File: frontend/app/(public)/_landing/PricingSection.js
// Purpose: Short pricing preview with the three plans. Static text only; the full
//          comparison is on the Pricing page and nothing here talks to the backend.
// Screens: PUB-01

import Link from "next/link";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PricingSection.module.css";

// Plan text copied from the design. Prices are still "[PRICE]" placeholders in the design.
const plans = [
  {
    name: "Free",
    price: "PKR 0",
    perMonth: false,
    text: "3 live sessions a month, up to 50 people, polls, quizzes and word clouds.",
    cta: "Start free",
    href: "/signup",
    recommended: false,
  },
  {
    name: "Pro",
    price: "PKR [PRICE]",
    perMonth: true,
    text: "Unlimited sessions, 300 people, all 24 activity types, AI insights and reports.",
    cta: "Try Pro",
    href: "/signup",
    recommended: true,
  },
  {
    name: "Team",
    price: "PKR [PRICE]",
    perMonth: true,
    text: "Everything in Pro, plus a shared library, department reports and admin controls.",
    cta: "Talk to us",
    href: "/pricing",
    recommended: false,
  },
];

// Shows the heading, the "Compare every plan" link and one card per plan
export default function PricingSection() {
  return (
    <section className={styles.section} aria-labelledby="price-heading">
      <Container className={styles.inner}>
        <div className={styles.top}>
          <SectionHeading id="price-heading" title="Start free. Upgrade when your class does." />
          <Link href="/pricing" className={styles.compare}>
            Compare every plan
          </Link>
        </div>

        <div className={styles.cards}>
          {plans.map((plan) => {
            let cardClass = styles.card;
            let ctaVariant = "secondary";
            if (plan.recommended) {
              cardClass = styles.card + " " + styles.recommended;
              ctaVariant = "primary";
            }
            return (
              <article key={plan.name} className={cardClass}>
                {plan.recommended && <span className={styles.stamp}>Recommended</span>}
                <h3 className={styles.name}>{plan.name}</h3>
                <span className={styles.price}>
                  {plan.price}
                  {plan.perMonth && <span className={styles.perMonth}> / month</span>}
                </span>
                <span className={styles.text}>{plan.text}</span>
                <Button href={plan.href} variant={ctaVariant} block className={styles.cta}>
                  {plan.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
