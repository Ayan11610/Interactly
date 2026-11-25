// File: frontend/app/(public)/pricing/_pricing/planData.js
// Purpose: Static text for the three plans on the Pricing page, copied from the design.
//          Prices are placeholders in the design until the owner sets them.
//          The real plan limits will live in server/config/plans.js.
// Screens: PUB-02

export const plans = [
  {
    name: "Free",
    tagline: "For trying it in one class",
    monthlyPrice: "PKR 0",
    yearlyPrice: "PKR 0",
    features: [
      "3 live sessions a month",
      "Up to 50 people per session",
      "Polls, quizzes, word clouds, Q&A",
      "Live results on the projector",
      "Last 3 session reports",
    ],
    cta: "Start free",
    href: "/signup",
    recommended: false,
  },
  {
    name: "Pro",
    tagline: "For one instructor, every class",
    monthlyPrice: "PKR [MONTHLY PRICE]",
    yearlyPrice: "PKR [YEARLY PRICE]",
    features: [
      "Unlimited live sessions",
      "Up to 300 people per session",
      "All 24 activity types",
      "AI misconception detection",
      "Full reports and exports",
    ],
    cta: "Try Pro",
    href: "/signup",
    recommended: true,
  },
  {
    name: "Team",
    tagline: "For a department",
    monthlyPrice: "PKR [MONTHLY PRICE]",
    yearlyPrice: "PKR [YEARLY PRICE]",
    features: [
      "Everything in Pro",
      "Up to 1,000 people per session",
      "Shared activity library",
      "Department reports",
      "Cross-session engagement and student tracking across classes",
    ],
    cta: "Talk to us",
    href: "/signup",
    recommended: false,
  },
];

// Rows of the "Everything side by side" table. true = tick, false = cross, text = shown as is.
export const compareRows = [
  { feature: "Live sessions a month", free: "3", pro: "Unlimited", team: "Unlimited" },
  { feature: "People per session", free: "50", pro: "300", team: "1,000" },
  { feature: "Activity types", free: "6", pro: "All 24", team: "All 24" },
  { feature: "AI insights", free: false, pro: true, team: true },
  { feature: "Session reports", free: "Last 3", pro: "All", team: "All" },
  { feature: "Export to PDF, CSV, Excel", free: false, pro: true, team: true },
  { feature: "Shared library", free: false, pro: false, team: true },
  { feature: "Cross-session engagement tracking", free: false, pro: false, team: true },
];
