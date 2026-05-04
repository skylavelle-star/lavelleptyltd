export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://lavelleptyltd.com.au',
  name: 'Lavelle Pty Ltd',
  description:
    'Lavelle Pty Ltd provides senior project delivery consulting, practical PMO resources and digital asset development for organisations that need stronger governance and clearer project control.',
  email: 'hello@lavelleptyltd.com.au',
  linkedin: 'https://linkedin.com/in/skylavelle',
  web3formsKey: 'dc7b04fa-6e86-415e-8d01-1fe332b4bf21',
} as const;

export const analytics = {
  gaId: import.meta.env.PUBLIC_GA_ID || '',
} as const;

export const products = {
  projectRecoveryPack: {
    name: 'Project Recovery Pack',
    description:
      'Structured templates and artefacts for senior project managers taking over or recovering a failing project. Covers health diagnostics, stakeholder reset, risk re-baselining, recovery roadmaps and steering committee reporting.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || '',
  },
  businessCasePack: {
    name: 'Business Case Pack',
    description:
      'Templates and guidance for building a structured business case for technology or business change investments. Covers options analysis, financial model, benefits mapping, risk, governance and delegate approval documentation.',
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || '',
  },
  procurementPack: {
    name: 'Procurement Pack',
    description:
      'A practical pack of artefacts for planning and managing procurement processes. Covers RFP development, evaluation governance, scoring, BAFO management, clarification processes and delegate approval documentation.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || '',
  },
  steeringCommitteePack: {
    name: 'Steering Committee Pack',
    description:
      'Reporting templates and governance guidance for project boards and steering committees. Covers status reporting, RAG ratings, risk and issue escalation, financial summary, decision log and meeting governance.',
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || '',
  },
} as const;
