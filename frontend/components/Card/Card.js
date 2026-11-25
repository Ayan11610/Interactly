// File: frontend/components/Card/Card.js
// Purpose: The design-system card: white box with an ink border, optionally with a hard shadow.
// Source: docs/design/system/components.d.ts (CardProps)
// Screens: IAM-01 to IAM-09 and most app screens

import styles from "./Card.module.css";

// Shows a card. raised adds the shadow. as picks the HTML tag (default "section").
export default function Card({ raised = false, as = "section", className, children, ...rest }) {
  const Tag = as;
  const classes = [styles.card];
  if (raised) {
    classes.push(styles.raised);
  }
  if (className) {
    classes.push(className);
  }

  return (
    <Tag className={classes.join(" ")} {...rest}>
      {children}
    </Tag>
  );
}
