// File: frontend/app/layout.js
// Purpose: Root layout for every page. Loads the design tokens, global styles and fonts,
//          wraps every page in AuthProvider so pages know who is logged in, and shows the
//          loading splash (ST-01) while the site first opens and the brush-stroke swipe
//          on every page change.
// Screens: all (app shell root)

import "@/styles/tokens.css";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import PageSwipe from "@/components/PageSwipe/PageSwipe";

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

// Wraps every page in the html and body tags and adds the font links.
// suppressHydrationWarning: the splash script adds data-app-ready to <html> before React starts.
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsUrl} />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <PageSwipe />
        <SplashScreen />
      </body>
    </html>
  );
}
