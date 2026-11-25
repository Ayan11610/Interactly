// File: frontend/app/(public)/(landing)/_landing/DemoTile.js
// Purpose: One coloured answer tile (A to D) for the small quiz demos on the landing page.
// Screens: PUB-01 (hero demo quiz and "Try it here" quiz tab)

import styles from "./DemoTile.module.css";

const letters = ["A", "B", "C", "D"];
const colourClasses = [styles.colourA, styles.colourB, styles.colourC, styles.colourD];

// Works out how a tile should look after the visitor picks an answer.
// idle = nothing picked, correct = picked the right one, answer = the right one they missed,
// wrong = the one they picked by mistake, faded = every other tile.
export function getTileState(pickedIndex, correctIndex, tileIndex) {
  if (pickedIndex === null) {
    return "idle";
  }
  if (tileIndex === correctIndex) {
    if (pickedIndex === correctIndex) {
      return "correct";
    }
    return "answer";
  }
  if (tileIndex === pickedIndex) {
    return "wrong";
  }
  return "faded";
}

// Shows one tile. layout "stacked" puts the letter above the label (hero),
// layout "row" puts them side by side (Try it here).
export default function DemoTile({ index, label, state, layout, onPick }) {
  const classes = [styles.tile, styles[layout], colourClasses[index], styles[state]];

  return (
    <button type="button" className={classes.join(" ")} onClick={onPick}>
      <span className={styles.key}>{letters[index]}</span>
      {label}
    </button>
  );
}
