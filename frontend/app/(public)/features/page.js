// File: frontend/app/(public)/features/page.js
// Purpose: Features page of the public site (route "/features"). Static: no backend calls.
// Screens: PUB-03 (desktop and mobile)

import PublicHeader from "@/components/PublicHeader/PublicHeader";
import PublicFooter from "@/components/PublicFooter/PublicFooter";
import { RoughFilter } from "@/components/Doodles/Doodles";
import FeaturesIntro from "./_features/FeaturesIntro";
import FeatureGrid from "./_features/FeatureGrid";
import ActivityTypes from "./_features/ActivityTypes";
import ProjectorSection from "./_features/ProjectorSection";
import AiInsightsSection from "./_features/AiInsightsSection";
import FeaturesCta from "./_features/FeaturesCta";
import styles from "./page.module.css";

export const metadata = {
  title: "Features · Interactly",
};

// Puts the Features page sections together in the design order
export default function FeaturesPage() {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <PublicHeader compact />
      <main>
        <FeaturesIntro />
        <FeatureGrid />
        <ActivityTypes />
        <ProjectorSection />
        <AiInsightsSection />
        <FeaturesCta />
      </main>
      <PublicFooter compact screenCode="PUB-03" />
    </div>
  );
}
