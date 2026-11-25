// File: server/config/plans.js
// Purpose: The subscription plans, hard-coded in one place. Nobody edits plans through the
//          app; the database only stores which plan each instructor is on (by planType key).
// Source: docs/design/screens/PUB-02.html (Pricing page) and SFR-022, SFR-023
// Diagram: class diagram (Subscription.planType, price, getUsageLimit)

// null in a limit means "no limit". Prices are in PKR and are still to be set by the owner
// (the design shows placeholders), so they are null for the paid plans for now.
const plans = {
  free: {
    planType: "free",
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    limits: {
      sessionsPerMonth: 3,
      participantsPerSession: 50,
      activityTypes: 6,
      reportsKept: 3,
    },
    features: [
      "3 live sessions a month",
      "Up to 50 people per session",
      "Polls, quizzes, word clouds, Q&A",
      "Live results on the projector",
      "Last 3 session reports",
    ],
  },
  pro: {
    planType: "pro",
    name: "Pro",
    monthlyPrice: null,
    yearlyPrice: null,
    limits: {
      sessionsPerMonth: null,
      participantsPerSession: 300,
      activityTypes: 24,
      reportsKept: null,
    },
    features: [
      "Unlimited live sessions",
      "Up to 300 people per session",
      "All 24 activity types",
      "AI misconception detection",
      "Full reports and exports",
    ],
  },
  team: {
    planType: "team",
    name: "Team",
    monthlyPrice: null,
    yearlyPrice: null,
    limits: {
      sessionsPerMonth: null,
      participantsPerSession: 1000,
      activityTypes: 24,
      reportsKept: null,
    },
    features: [
      "Everything in Pro",
      "Up to 1,000 people per session",
      "Shared activity library",
      "Department reports",
      "Cross-session engagement and student tracking across classes",
    ],
  },
};

// Every new instructor starts on this plan
const defaultPlanType = "free";

module.exports = { plans, defaultPlanType };
