// File: frontend/app/(public)/features/_features/FeatureGrid.js
// Purpose: Grid of six feature cards, each with a tinted icon box, a title and one sentence.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import styles from "./FeatureGrid.module.css";

// Card text copied from the design; tint is the class for the icon box colour
const features = [
  {
    icon: "live",
    tint: styles.mint,
    title: "Live session control",
    text: "Next, pause and show results from one panel. The projector screen follows along on its own.",
  },
  {
    icon: "qr-code",
    tint: styles.lemon,
    title: "Join with a code",
    text: "Six digits or a QR code. No app, no account, works on any phone browser.",
  },
  {
    icon: "reports",
    tint: styles.peach,
    title: "Results that move",
    text: "Bars grow, word clouds fill in and leaderboards reshuffle as answers arrive.",
  },
  {
    icon: "chat",
    tint: styles.paleMint,
    title: "Moderated Q&A",
    text: "Questions come in anonymously, you approve them, and the room upvotes the best ones.",
  },
  {
    icon: "download",
    tint: styles.sunken,
    title: "Session reports",
    text: "Every session ends with a report you can share or export as PDF, CSV or Excel.",
  },
  {
    icon: "activity-bank",
    tint: styles.lime,
    title: "Activity bank",
    text: "Save any activity and reuse it in another presentation in two clicks.",
  },
];

// Shows the six cards. Each card fades in a little after the one before it.
export default function FeatureGrid() {
  return (
    <section className={styles.section} aria-label="Main features">
      <Container className={styles.grid}>
        {features.map((feature, index) => (
          <article key={feature.title} className={styles.card} style={{ animationDelay: index * 60 + "ms" }}>
            <span className={styles.iconBox + " " + feature.tint}>
              <Icon name={feature.icon} size={24} />
            </span>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
