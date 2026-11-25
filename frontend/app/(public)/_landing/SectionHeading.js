// File: frontend/app/(public)/_landing/SectionHeading.js
// Purpose: The small mono eyebrow and big title that open each landing page section.
// Screens: PUB-01

import styles from "./SectionHeading.module.css";

// Shows an optional eyebrow (e.g. "HOW IT WORKS") above the section title.
// id is put on the h2 so the section can point to it with aria-labelledby.
export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className={styles.heading}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  );
}
