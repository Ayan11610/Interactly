// File: frontend/components/TextField/TextField.js
// Purpose: The design-system text input with a label, an optional hint and an error message.
// Source: docs/design/system/components.d.ts (TextFieldProps)
// Screens: IAM-01 to IAM-06 and every form

"use client";

import { useId } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./TextField.module.css";

// Shows a labelled input. error replaces hint and turns the border red.
// Any other prop (type, value, onChange, autoComplete, ...) goes straight to the <input>.
export default function TextField({ label, hint, error, icon, id, ...inputProps }) {
  const autoId = useId();
  const inputId = id || autoId;
  const messageId = inputId + "-msg";

  let inputClass = styles.input;
  if (icon) {
    inputClass = inputClass + " " + styles.withIcon;
  }
  if (error) {
    inputClass = inputClass + " " + styles.invalid;
  }

  let describedBy = undefined;
  if (error || hint) {
    describedBy = messageId;
  }

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <span className={styles.control}>
        {icon && (
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        )}
        <input
          id={inputId}
          type="text"
          className={inputClass}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...inputProps}
        />
      </span>
      {error && (
        <span id={messageId} className={styles.error} role="alert">
          {error}
        </span>
      )}
      {!error && hint && (
        <span id={messageId} className={styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
}
