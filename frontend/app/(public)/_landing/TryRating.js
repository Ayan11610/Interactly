// File: frontend/app/(public)/_landing/TryRating.js
// Purpose: "Try it here" rating demo: the visitor gives today's lecture one to five stars.
// Screens: PUB-01

"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import panel from "./TryPanel.module.css";
import styles from "./TryRating.module.css";

const starValues = [1, 2, 3, 4, 5];

// Shows five star buttons. Every star up to the chosen one is filled.
export default function TryRating() {
  const [rating, setRating] = useState(0);

  let note = "";
  if (rating >= 4) {
    note = "thanks! the lecturer sees the average, not your name";
  } else if (rating > 0) {
    note = "thanks, honest answers help";
  }

  return (
    <div className={panel.panel}>
      <h3 className={panel.question}>How clear was today&apos;s lecture?</h3>
      <div className={styles.stars}>
        {starValues.map((value) => {
          const filled = value <= rating;
          let starClass = styles.star + " " + panel.pressable;
          let starFill = "none";
          if (filled) {
            starClass = starClass + " " + styles.filled;
            starFill = "var(--lemon-400)";
          }
          return (
            <button key={value} type="button" className={starClass} onClick={() => setRating(value)} aria-label={value + " stars"}>
              <Icon name="shape-star" size={28} fill={starFill} />
            </button>
          );
        })}
      </div>
      <span className={panel.note}>{note}</span>
    </div>
  );
}
