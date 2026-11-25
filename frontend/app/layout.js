// File: frontend/app/layout.js
// Purpose: Root layout for every page. Loads the design tokens, global styles and fonts.
// Screens: all (app shell root)

import "@/styles/tokens.css";
import "@/styles/globals.css";

// Google Fonts used by the Interactly design system (see docs/design/system/README.md)
const fontsUrl =
  "https://fonts.googleapis.com/css2" +
  "?family=Bricolage+Grotesque:opsz,wght@12..96,700" +
  "&family=Instrument+Sans:wght@400;500;600" +
  "&family=IBM+Plex+Mono:wght@500" +
  "&family=Patrick+Hand" +
  "&display=swap";

export const metadata = {
  title: "Interactly",
  description: "A real-time interactive presentation and audience engagement platform",
};

// Wraps every page in the html and body tags and adds the font links
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsUrl} />
      </head>
      <body>{children}</body>
    </html>
  );
}
