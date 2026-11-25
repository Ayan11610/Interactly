// File: frontend/app/(auth)/_auth/AuthSplitLayout.js
// Purpose: The desktop auth layout: lemon side panel on the left, a white card on the right.
//          On narrow screens the panel sits on top and the card below it.
// Screens: IAM-01, IAM-02, IAM-05, IAM-06, IAM-07, IAM-08, IAM-09

import Logo from "@/components/Logo/Logo";
import Card from "@/components/Card/Card";
import { RoughFilter } from "@/components/Doodles/Doodles";
import SidePanelDoodles from "./SidePanelDoodles";
import styles from "./AuthSplitLayout.module.css";

// Draws the waving mascot at the bottom of the side panel
function PanelMascot() {
  return (
    <svg width="96" height="96" viewBox="0 0 120 120" className={styles.mascot} aria-hidden="true">
      <path className={styles.line} d="M50 22 L58 6 L66 22" />
      <circle className={styles.face} cx="60" cy="64" r="44" transform="translate(4 3)" />
      <circle className={styles.line} cx="60" cy="64" r="44" />
      <circle className={styles.eye} cx="46" cy="58" r="4.5" />
      <circle className={styles.eye} cx="74" cy="58" r="4.5" />
      <circle className={styles.cheek} cx="36" cy="72" r="5" />
      <circle className={styles.cheek} cx="84" cy="72" r="5" />
      <path className={styles.line} d="M46 76 Q60 88 74 76" />
    </svg>
  );
}

// screenCode is shown above the card; handNote is the optional hand-written line in the panel.
// children is the content of the card (title, form, links).
export default function AuthSplitLayout({ screenCode, handNote, children }) {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <aside className={styles.panel}>
        <SidePanelDoodles />
        <div className={styles.raised}>
          <Logo size={32} />
        </div>
        <div className={styles.pitch}>
          <p className={styles.headline}>Ask. Answer. See it live.</p>
          <p className={styles.body}>
            Polls, quizzes, word clouds and Q&amp;A for your lectures, with results on the big screen as students
            answer.
          </p>
          {handNote && <p className={styles.handNote}>{handNote}</p>}
        </div>
        <div className={styles.raised}>
          <PanelMascot />
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.column}>
          <span className={styles.screenCode}>{screenCode}</span>
          <Card raised className={styles.card}>
            {children}
          </Card>
        </div>
      </main>
    </div>
  );
}
