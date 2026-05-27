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
    href: "/resources/steering-committee-pack",
    description:
      "Charter, meeting cadence, status report template, RAID summary, financials view and decision log.",
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || "",
  },
  projectRecoveryPack: {
    name: "Project Recovery Pack",
    price: "1,247",
    href: "/resources/project-recovery-pack",
    description:
      "For project managers stepping into a program that needs stabilising. Recovery assessment, stakeholder reset, replan and governance artefacts.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || "",
  },
  businessCasePack: {
    name: "Business Case Pack",
    price: "1,197",
    href: "/resources/business-case-pack",
    description:
      "End-to-end business case structure. Problem definition, options analysis, benefits, costs, risks and approval routing.",
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || "",
  },
  procurementPack: {
    name: "Procurement Pack",
    price: "1,197",
    href: "/resources/procurement-pack",
    description:
      "RFP planning, evaluation scoring, BAFO process, recommendation report and delegate approval templates.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || "",
  },
  projectSetupPack: {
    name: "Project Setup Pack",
    price: "847",
    href: "/resources/project-setup-pack",
    description:
      "The artefacts a new project manager needs in the first two weeks. Onboarding checklist, project schedule, PMP, scope and high-level requirements, kick-off pack.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_SETUP_PACK || "",
  },
  discoveryPack: {
    name: "Discovery Pack",
    price: "947",
    href: "/resources/discovery-pack",
    description:
      "BA Discovery Assessment, Change Impact Assessment, Project Approach Selector, Project Assurance Checklist and the Project Tailoring Calculator.",
    checkoutUrl: import.meta.env.PUBLIC_LS_DISCOVERY_PACK || "",
  },
  requirementsDesignPack: {
    name: "Requirements & Design Pack",
    price: "947",
    href: "/resources/requirements-design-pack",
    description:
      "Screens, workflow, use cases, service analysis, gap analysis and a working traceability matrix for the Design stage.",
    checkoutUrl: import.meta.env.PUBLIC_LS_REQUIREMENTS_DESIGN_PACK || "",
  },
  financialControlPack: {
    name: "Financial Control Pack",
    price: "1,247",
    href: "/resources/financial-control-pack",
    description:
      "Cost estimate, estimation guidelines, budget phasing, financial control tracker, contingency calculator and supporting workbooks.",
    checkoutUrl: import.meta.env.PUBLIC_LS_FINANCIAL_CONTROL_PACK || "",
  },
  testingPack: {
    name: "Testing Pack",
    price: "747",
    href: "/resources/testing-pack",
    description:
      "Quality Management Approach, Quality Plan, Product Status Account and Quality Inspection Sheet - the test stage artefact set.",
    checkoutUrl: import.meta.env.PUBLIC_LS_TESTING_PACK || "",
  },
  cutoverPack: {
    name: "Cutover Pack",
    price: "747",
    href: "/resources/cutover-pack",
    description:
      "Release Plan Runsheet and Go / No-Go Checklist - every cutover step evidenced and reversible.",
    checkoutUrl: import.meta.env.PUBLIC_LS_CUTOVER_PACK || "",
  },
  trainingChangePack: {
    name: "Training / Change Pack",
    price: "747",
    href: "/resources/training-change-pack",
    description:
      "Communication & Training Approach, Operational Acceptance Criteria and Change Control Approach Review for the Cutover-to-Closure transition.",
    checkoutUrl: import.meta.env.PUBLIC_LS_TRAINING_CHANGE_PACK || "",
  },
  completePractitionerLibrary: {
    name: "Complete Practitioner Library",
    price: "12,997",
    href: "/resources/complete-practitioner-library",
    description:
      "The entire opinionated library in a single transaction. Every stage pack, every bundle, the Framework documentation and twelve months of artefact updates - single named user.",
    checkoutUrl: import.meta.env.PUBLIC_LS_COMPLETE_LIBRARY || "",
  },
  tier3LightBundle: {
    name: "Tier 3 Light Bundle",
    price: "1,997",
    href: "/bundles/tier-3-light",
    description:
      "Lightweight artefact set for small, contained delivery. Tailoring score 7-14.",
    checkoutUrl: import.meta.env.PUBLIC_LS_TIER_3_LIGHT || "",
  },
  tier2StandardBundle: {
    name: "Tier 2 Standard Bundle",
    price: "4,497",
    href: "/bundles/tier-2-standard",
    description:
      "Standard mid-complexity artefact set - most enterprise projects land here. Tailoring score 15-24.",
    checkoutUrl: import.meta.env.PUBLIC_LS_TIER_2_STANDARD || "",
  },
  tier1MajorBundle: {
    name: "Tier 1 Major Bundle",
    price: "7,997",
    href: "/bundles/tier-1-major",
    description:
      "Full programme artefact set for high-complexity, high-scrutiny delivery. Tailoring score 25-35.",
    checkoutUrl: import.meta.env.PUBLIC_LS_TIER_1_MAJOR || "",
  },
  projectRecoveryBundle: {
    name: "Project Recovery Bundle",
    price: "2,997",
    href: "/bundles/project-recovery-bundle",
    description:
      "Consulting-led recovery artefact set. Project Assurance Checklist, RAID Register, Sponsor Update One-Page, Project Change Request and the recovery framing doc.",
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_BUNDLE || "",
  },
} as const;
