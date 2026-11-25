// File: frontend/components/Icon/Icon.js
// Purpose: Draws one line icon from the design system icon set.
// Source: docs/design/system/components.d.ts (IconProps)
// Screens: all

import iconPaths from "./iconPaths";

// Renders an icon by name. Without a label it is hidden from screen readers.
export default function Icon({ name, size = 20, color = "currentColor", fill = "none", strokeWidth = 2, label, style }) {
  let ariaProps = { "aria-hidden": "true" };
  if (label) {
    ariaProps = { role: "img", "aria-label": label };
  }

  const pathStyle = {
    stroke: color,
    strokeWidth: strokeWidth,
    fill: fill,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flex: "none", ...style }} {...ariaProps}>
      <path d={iconPaths[name] || ""} style={pathStyle} />
    </svg>
  );
}
