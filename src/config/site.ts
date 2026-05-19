export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || "https://lavelleptyltd.com.au",
  name: "Lavelle Pty Ltd",
  description:
    "Lavelle Pty Ltd provides senior project delivery consulting, practical PMO resources and digital asset development for organisations that need stronger governance and clearer project control.",
  email: "hello@lavelleptyltd.com.au",
  linkedin: "https://linkedin.com/in/skylavelle",
  web3formsKey: "21e468ca-496b-45eb-8313-d1b7d5d229c9",
} as const;

export const analytics = {
  gaId: import.meta.env.PUBLIC_GA_ID || "",
} as const;

export const products = {
  steeringCommitteePack: {
    name: "Steering Pack",
    price: "897",
    href: "/templates/steering-committee-pack",
    pmoResourcesHref: "/pmo-resources#steering-committee-pack",
    description:
      "Charter, meeting cadence, status report template, RAID summary, financials view and decision log.",
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || "",
  },
  projectRecoveryPack: {
    name: "Project Recovery Pack",
    price: "1,247",
    href: "/templates/project-recovery-pack",
    pmoResourcesHref: "/pmo-resources#project-recovery-pack",
    description:
      "For project managers stepping into a program that needs stabilising. Recovery assessment, stakeholder reset, replan and governance artefacts.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || "",
  },
  businessCasePack: {
    name: "Business Case Pack",
    price: "1,197",
    href: "/templates/business-case-pack",
    pmoResourcesHref: "/pmo-resources#business-case-pack",
    description:
      "End-to-end business case structure. Problem definition, options analysis, benefits, costs, risks and approval routing.",
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || "",
  },
  procurementPack: {
    name: "Procurement Pack",
    price: "1,197",
    href: "/templates/procurement-pack",
    pmoResourcesHref: "/pmo-resources#procurement-pack",
    description:
      "RFP planning, evaluation scoring, BAFO process, recommendation report and delegate approval templates.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || "",
  },
} as const;
