// File: frontend/app/loading.js
// Purpose: Next.js shows this automatically while any page is still loading
//          (for example the first time a page is opened).
// Screens: ST-01 Application Loading

import AppLoader from "@/components/AppLoader/AppLoader";

// The loading screen for every route
export default function Loading() {
  return <AppLoader />;
}
