// File: frontend/components/Checkbox/Checkbox.js
// Purpose: The design-system checkbox: a square box with a tick and a label beside it.
// Source: docs/design/system/components.d.ts (CheckboxProps)
// Screens: IAM-01, IAM-02, IAM-04 and any form with a checkbox

"use client";

import { useId } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Checkbox.module.css";

// Shows a checkbox. Any other prop (checked, onChange, required, ...) goes to the <input>.
export default function Checkbox({ label, id, ...inputProps }) {
  const autoId = useId();
  const inputId = id || autoId;

  return (
    <label htmlFor={inputId} className={styles.check}>
      <span className={styles.box}>
        <input id={inputId} type="checkbox" className={styles.input} {...inputProps} />
        <span className={styles.face} aria-hidden="true">
          <Icon name="check" size={14} strokeWidth={3.2} color="var(--text-on-light)" />
        </span>
      </span>
      {label}
    </label>
  );
}
