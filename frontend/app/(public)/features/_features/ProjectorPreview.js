// File: frontend/app/(public)/features/_features/ProjectorPreview.js
// Purpose: A small picture of the dark projector screen: join code, question and a bar chart.
// Screens: PUB-03

import styles from "./ProjectorPreview.module.css";

// Demo answers: letter, vote count, bar height and colour class
const bars = [
  { letter: "A", votes: 6, height: "23%", colour: styles.colourA },
  { letter: "B", votes: 18, height: "69%", colour: styles.colourB },
  { letter: "C", votes: 1, height: "4%", colour: styles.colourC },
  { letter: "D", votes: 1, height: "4%", colour: styles.colourD },
];

// Shows the projector mock-up. The bars grow up one after another.
export default function ProjectorPreview() {
  return (
    <div className={styles.screen}>
      <span className={styles.top}>
        <span>interactly.app/join</span>
        <span className={styles.code}>482 913</span>
      </span>
      <span className={styles.question}>Which data structure serves items first in, first out?</span>

      <div className={styles.chart} role="img" aria-label="Bar chart">
        <div className={styles.plot}>
          {bars.map((bar, index) => (
            <div key={bar.letter} className={styles.column}>
              <span className={styles.votes}>{bar.votes}</span>
              <div
                className={styles.bar + " " + bar.colour}
                style={{ height: bar.height, animationDelay: index * 60 + "ms" }}
              />
            </div>
          ))}
        </div>
        <div className={styles.letters}>
          {bars.map((bar) => (
            <span key={bar.letter} className={styles.letter}>
              {bar.letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
