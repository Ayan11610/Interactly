// File: frontend/app/(public)/pricing/page.js
// Purpose: Pricing page of the public site (route "/pricing"). Static: plan text is
//          hard-coded and the page makes no backend calls.
// Screens: PUB-02 (desktop and mobile)

import PublicHeader from "@/components/PublicHeader/PublicHeader";
import PublicFooter from "@/components/PublicFooter/PublicFooter";
import { RoughFilter } from "@/components/Doodles/Doodles";
import PlanChooser from "./_pricing/PlanChooser";
import CompareSection from "./_pricing/CompareSection";
import BillingFaq from "./_pricing/BillingFaq";
import PricingCta from "./_pricing/PricingCta";
import styles from "./page.module.css";

export const metadata = {
  title: "Pricing · Interactly",
};

// Puts the Pricing page sections together in the design order
export default function PricingPage() {
  return (
    <div className={styles.page}>
      <RoughFilter />
      <PublicHeader compact />
      <main>
        <PlanChooser />
        <CompareSection />
        <BillingFaq />
        <PricingCta />
      </main>
      <PublicFooter compact screenCode="PUB-02" />
    </div>
  );
}
