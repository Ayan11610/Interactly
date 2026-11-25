// File: frontend/app/(public)/pricing/_pricing/PlanCard.js
// Purpose: One plan card on the Pricing page: name, tagline, price, feature list and button.
// Screens: PUB-02

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import styles from "./PlanCard.module.css";

// Shows one plan. yearly decides which price and period are shown.
export default function PlanCard({ plan, yearly }) {
  let price = plan.monthlyPrice;
  let period = " / month";
  if (yearly) {
    price = plan.yearlyPrice;
    period = " / year";
  }

  let cardClass = styles.card;
  let buttonVariant = "secondary";
  if (plan.recommended) {
    cardClass = styles.card + " " + styles.recommended;
    buttonVariant = "primary";
  }

  return (
    <article className={cardClass}>
      {plan.recommended && <span className={styles.stamp}>Recommended</span>}
      <div className={styles.heading}>
        <h3 className={styles.name}>{plan.name}</h3>
        <span className={styles.tagline}>{plan.tagline}</span>
      </div>
      <span className={styles.price}>
        {price}
        <span className={styles.period}>{period}</span>
      </span>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <Icon name="check" size={18} strokeWidth={2.6} color="var(--success-text)" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button href={plan.href} variant={buttonVariant} size="lg" block className={styles.button}>
        {plan.cta}
      </Button>
    </article>
  );
}
