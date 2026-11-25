// File: frontend/app/(auth)/_auth/AuthHeading.js
// Purpose: The title and grey sentence at the top of every auth card or phone form.
// Screens: IAM-01 to IAM-09

import styles from "./AuthHeading.module.css";

// phone = true uses the bigger h1 of the student phone screens; otherwise an h2 inside a card
export default function AuthHeading({ title, text, phone = false }) {
  let titleNode = <h2 className={styles.title}>{title}</h2>;
  if (phone) {
    titleNode = <h1 className={styles.title + " " + styles.phoneTitle}>{title}</h1>;
  }

  return (
    <div className={styles.heading}>
      {titleNode}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
