// File: frontend/components/Alert/Alert.js
// Purpose: The design-system message box for errors, successes, warnings and info.
//          Repeated error / success messages all use this one component.
// Source: docs/design/system/components.d.ts (AlertProps)
// Screens: IAM-01 to IAM-07 and every form that can fail

import Icon from "@/components/Icon/Icon";
import styles from "./Alert.module.css";

// Icon name and colour for each tone
const toneIcons = {
  error: { name: "close", color: "var(--error-text)" },
  success: { name: "check", color: "var(--success-text)" },
  warning: { name: "flag", color: "var(--text-primary)" },
  info: { name: "help", color: "var(--text-primary)" },
};

// Shows a message. tone: error | success | warning | info. Errors are announced to screen readers.
export default function Alert({ tone = "info", title, children, action }) {
  const icon = toneIcons[tone];
  let role = "status";
  if (tone === "error") {
    role = "alert";
  }

  return (
    <div role={role} className={styles.alert + " " + styles[tone]}>
      <Icon name={icon.name} size={24} color={icon.color} strokeWidth={2.4} />
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {children && <span className={styles.text}>{children}</span>}
      </span>
      {action}
    </div>
  );
}
