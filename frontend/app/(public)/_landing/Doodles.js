// File: frontend/app/(public)/_landing/Doodles.js
// Purpose: Hand-drawn decorations used on the landing page (spiral, star, lightning bolt)
//          and the SVG filter that gives them their rough pencil edge.
// Screens: PUB-01

import styles from "./Doodles.module.css";

// Hidden SVG that defines the "rough" filter. Render it once per page.
export function RoughFilter() {
  return (
    <svg width="0" height="0" className={styles.filterHolder} aria-hidden="true">
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
        <feDisplacementMap in="SourceGraphic" scale="3" />
      </filter>
    </svg>
  );
}

// Big spiral in the top right corner of the hero
export function SpiralDoodle() {
  return (
    <svg width="240" height="240" viewBox="0 0 170 170" className={styles.spiral} aria-hidden="true">
      <path
        className={styles.stroke}
        d="M85 85 m0 -6 a6 6 0 1 1 -6 8 a14 14 0 1 1 20 -14 a24 24 0 1 1 -34 22 a36 36 0 1 1 50 -36 a48 48 0 1 1 -66 50 a60 60 0 1 1 84 -64"
      />
    </svg>
  );
}

// Peach star in the bottom left of the hero
export function StarDoodle() {
  const starPath = "M48 10 L57 36 L86 37 L62 54 L71 83 L48 66 L24 84 L33 55 L9 38 L38 36 Z";
  return (
    <svg width="56" height="56" viewBox="0 0 96 96" className={styles.star} aria-hidden="true">
      <path className={styles.starFill} d={starPath} transform="translate(5 5)" />
      <path className={styles.starStroke} d={starPath} />
    </svg>
  );
}

// Lime lightning bolt next to the "Try it here" heading
export function BoltDoodle() {
  const boltPath = "M18 3 L5 25 H15 L11 43 L26 18 H16 Z";
  return (
    <svg width="44" height="66" viewBox="0 0 30 46" className={styles.bolt} aria-hidden="true">
      <path className={styles.boltFill} d={boltPath} transform="translate(2 2)" />
      <path className={styles.boltStroke} d={boltPath} />
    </svg>
  );
}
