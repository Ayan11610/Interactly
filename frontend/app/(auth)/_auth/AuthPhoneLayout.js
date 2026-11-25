// File: frontend/app/(auth)/_auth/AuthPhoneLayout.js
// Purpose: The phone-first auth layout for students: logo bar, a single column form and a
//          hand-written note at the bottom. On wide screens the column stays phone width.
// Screens: IAM-03, IAM-04

import Logo from "@/components/Logo/Logo";
import { RoughFilter, SpiralDoodle, StarDoodle } from "@/components/Doodles/Doodles";
import styles from "./AuthPhoneLayout.module.css";

// screenCode is shown in the top bar; handNote at the bottom; children is the form.
export default function AuthPhoneLayout({ screenCode, handNote, children }) {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <div className={styles.phone}>
        <header className={styles.header}>
          <Logo size={28} />
          <span className={styles.screenCode}>{screenCode}</span>
        </header>
        <SpiralDoodle size={150} className={styles.spiral} />
        <StarDoodle size={36} className={styles.star} />
        <main className={styles.main}>
          {children}
          {handNote && <p className={styles.handNote}>{handNote}</p>}
        </main>
      </div>
    </div>
  );
}
