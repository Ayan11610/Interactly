// File: frontend/app/(public)/pricing/_pricing/BillingFaq.js
// Purpose: "Billing questions": a list of questions that open and close with <details>.
// Screens: PUB-02

import Container from "@/components/Container/Container";
import styles from "./BillingFaq.module.css";

// Questions and answers copied from the design. The contact email is still a placeholder.
const questions = [
  { question: "Is it free for students?", answer: "Always. Plans are for the person running the session." },
  { question: "Can I switch plans later?", answer: "Yes, any time. Changes apply from your next billing date." },
  {
    question: "What happens if I cancel?",
    answer: "You keep Pro until the end of the period you paid for. Your presentations and reports are not deleted.",
  },
  {
    question: "Do you offer university pricing?",
    answer: "Yes. Team plans can be billed to a department. [CONTACT EMAIL]",
  },
];

// Shows the questions. The browser opens and closes each one; the first starts open.
export default function BillingFaq() {
  return (
    <section className={styles.section} aria-labelledby="billing-heading">
      <Container className={styles.inner}>
        <h2 id="billing-heading" className={styles.title}>
          Billing questions
        </h2>
        <div className={styles.list}>
          {questions.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
