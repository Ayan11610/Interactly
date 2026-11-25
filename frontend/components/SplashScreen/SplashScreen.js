// File: frontend/components/SplashScreen/SplashScreen.js
// Purpose: Covers the site with the loading screen while it first opens, then fades away.
//          A tiny plain script (not React) marks the page as ready once the browser has
//          loaded it, so the splash always goes away, even if React fails to start.
//          It also gives up after 4 seconds, so it can never block the site.
// Screens: ST-01 Application Loading (first load)

import AppLoader from "@/components/AppLoader/AppLoader";
import styles from "./SplashScreen.module.css";

// Runs in the browser straight away: adds data-app-ready to <html> shortly after the page loads
const hideScript = `
(function () {
  function markReady() {
    document.documentElement.setAttribute("data-app-ready", "");
  }
  function afterLoad() {
    setTimeout(markReady, 500);
  }
  if (document.readyState === "complete") {
    afterLoad();
  } else {
    window.addEventListener("load", afterLoad);
  }
  setTimeout(markReady, 4000);
})();
`;

// Shows the loader on top of everything until <html> gets data-app-ready
export default function SplashScreen() {
  return (
    <>
      <div className={styles.splash} aria-hidden="true">
        <AppLoader />
      </div>
      <script dangerouslySetInnerHTML={{ __html: hideScript }} />
    </>
  );
}
