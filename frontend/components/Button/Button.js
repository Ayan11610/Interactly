// File: frontend/components/Button/Button.js
// Purpose: The design-system button. Renders a link when given href, otherwise a <button>.
// Source: docs/design/system/components.d.ts (ButtonProps)
// Screens: all

import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import styles from "./Button.module.css";

// Builds the class list from the variant, size and block props
function getButtonClasses(variant, size, block, className) {
  const classes = [styles.button, styles[variant], styles[size]];
  if (block) {
    classes.push(styles.block);
  }
  if (className) {
    classes.push(className);
  }
  return classes.join(" ");
}

// Shows a button. variant: primary | secondary | ghost | on-ink | danger. size: sm | md | lg.
// icon is drawn before the text; iconAfter is drawn after it (e.g. an arrow).
export default function Button({
  variant = "secondary",
  size = "sm",
  block = false,
  icon,
  iconAfter,
  href,
  className,
  children,
  ...rest
}) {
  const classes = getButtonClasses(variant, size, block, className);

  const content = (
    <>
      {icon && <Icon name={icon} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
