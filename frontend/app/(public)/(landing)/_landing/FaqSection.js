// File: frontend/app/(public)/(landing)/_landing/FaqSection.js
// Purpose: "Questions people ask first": an accordion where one answer is open at a time.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "Do students need an app or an account?",
    answer:
      "No. They go to interactly.app/join on any phone browser and type the code from the screen. Accounts are optional and only keep their stickers and recaps.",
  },
  {
    question: "How many people can join one session?",
    answer: "Up to 50 on Free, 300 on Pro and 1,000 on Team.",
  },
  {
    question: "Can I use my existing slides?",
    answer: "Yes. Upload a PDF or PowerPoint and add activities between your slides.",
  },
  {
    question: "What does the AI look at?",
    answer:
      "Only the answers from your own sessions. It groups similar wrong answers and suggests a short follow-up. You decide whether to use it.",
  },
  {
    question: "Is it free for students?",
    answer: "Always. Plans are for the person running the session.",
  },
];

// Shows the FAQ list. The first answer starts open, as in the design.
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // Opens the clicked question, or closes it if it is already open
  function toggle(index) {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <Container className={styles.inner}>
        <h2 id="faq-heading" className={styles.title}>
          Questions people ask first
        </h2>
        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className={styles.item}>
                <button type="button" className={styles.question} onClick={() => toggle(index)} aria-expanded={open}>
                  {faq.question}
                  <span className={open ? styles.iconOpen : styles.icon}>
                    <Icon name="plus" size={22} strokeWidth={2.2} />
                  </span>
                </button>
                {open && <p className={styles.answer}>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
