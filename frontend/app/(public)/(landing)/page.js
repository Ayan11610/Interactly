// File: frontend/app/(public)/(landing)/page.js
// Purpose: Landing page of the public site (route "/"). Static: the demos run in the
//          browser only and the page makes no backend calls.
// Screens: PUB-01 (desktop and mobile)

import PublicHeader from "@/components/PublicHeader/PublicHeader";
import PublicFooter from "@/components/PublicFooter/PublicFooter";
import { RoughFilter } from "@/components/Doodles/Doodles";
import HeroSection from "./_landing/HeroSection";
import HowItWorksSection from "./_landing/HowItWorksSection";
import TryItSection from "./_landing/TryItSection";
import AiSection from "./_landing/AiSection";
import PricingSection from "./_landing/PricingSection";
import FaqSection from "./_landing/FaqSection";
import styles from "./page.module.css";

// Puts the landing page sections together in the design order
export default function LandingPage() {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <PublicHeader />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TryItSection />
        <AiSection />
        <PricingSection />
        <FaqSection />
      </main>
      <PublicFooter screenCode="PUB-01" />
    </div>
  );
}
