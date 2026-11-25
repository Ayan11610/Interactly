// File: frontend/app/(public)/features/_features/AiInsightsSection.js
// Purpose: "AI insights": what the session-level AI feedback does, with three example cards.
//          Static text only; nothing is sent to the AI service.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Icon from "@/components/Icon/Icon";
import styles from "./AiInsightsSection.module.css";

// Example insights copied from the design. The first one is highlighted in lemon.
const insights = [
  { icon: "ai-insights", title: "Misconception detection", example: "\"6 students mixed up stack and queue order.\"" },
  { icon: "chat", title: "Question and feedback summary", example: "\"Most questions were about circular queues.\"" },
  { icon: "plus", title: "Follow-up suggestions", example: "\"Add a 3-question quiz after slide 9.\"" },
];

// Shows the description on one side and the three example cards on the other
export default function AiInsightsSection() {
  return (
    <section className={styles.section} aria-labelledby="ai-insights-heading">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <SectionHeading id="ai-insights-heading" eyebrow="AI INSIGHTS" title="Know what to revisit before the next class" />
          <p className={styles.lead}>
            After each session Interactly groups similar wrong answers, summarises open questions and suggests a short
            follow-up activity. It only reads answers from your own sessions.
          </p>
        </div>

        <div className={styles.cards}>
          {insights.map((insight, index) => {
            let cardClass = styles.card;
            if (index === 0) {
              cardClass = styles.card + " " + styles.highlight;
            }
            return (
              <div key={insight.title} className={cardClass}>
                <Icon name={insight.icon} size={22} />
                <span className={styles.cardText}>
                  <strong className={styles.cardTitle}>{insight.title}</strong>
                  <span className={styles.example}>{insight.example}</span>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
