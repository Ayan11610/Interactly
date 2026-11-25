// File: frontend/app/(public)/features/_features/ActivityTypes.js
// Purpose: "24 activity types": three groups of activity names shown as badges.
// Screens: PUB-03

import Container from "@/components/Container/Container";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Badge from "@/components/Badge/Badge";
import styles from "./ActivityTypes.module.css";

// Groups and activity names copied from the design
const groups = [
  {
    title: "Check understanding",
    swatch: styles.peach,
    activities: [
      "Quiz",
      "True / False",
      "Fill in the blanks",
      "Match the columns",
      "Sequencing",
      "Sort into categories",
      "Odd one out",
      "Error spotting",
    ],
  },
  {
    title: "Build knowledge",
    swatch: styles.lemon,
    activities: ["Word cloud", "Mind map", "Table completion", "Label the diagram", "Flashcards", "Memory pairs", "Bingo"],
  },
  {
    title: "Get them talking",
    swatch: styles.mint,
    activities: [
      "Poll",
      "Q&A",
      "Exit ticket",
      "Muddiest point",
      "Role-play",
      "Scenario decisions",
      "Teach-back",
      "Branching story",
      "Jigsaw",
    ],
  },
];

// Shows the heading, one card per group and the hand-written note
export default function ActivityTypes() {
  return (
    <section className={styles.section} aria-labelledby="types-heading">
      <Container className={styles.inner}>
        <SectionHeading id="types-heading" eyebrow="24 ACTIVITY TYPES" title="An activity for every part of the lecture" />
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <span className={styles.groupHead}>
                <span className={styles.swatch + " " + group.swatch} />
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </span>
              <div className={styles.badges}>
                {group.activities.map((activity) => (
                  <Badge key={activity}>{activity}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className={styles.handNote}>try one on the home page</p>
      </Container>
    </section>
  );
}
