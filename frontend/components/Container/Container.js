// File: frontend/components/Container/Container.js
// Purpose: Centres page content at a max width of 1280px with fluid side padding.
// Source: the ".wrap" helper in the PUB- screen designs
// Screens: PUB-01, PUB-02, PUB-03

import styles from "./Container.module.css";

// Wraps children in the centred page column. Extra classes can be added with className.
export default function Container({ className, children }) {
  let classes = styles.container;
  if (className) {
    classes = styles.container + " " + className;
  }

  return <div className={classes}>{children}</div>;
}
