export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://lavelleptyltd.com.au',
  name: 'Lavelle Pty Ltd',
  description:
    'Lavelle Pty Ltd provides senior project delivery consulting, practical PMO resources and digital asset development for organisations that need stronger governance and clearer project control.',
  email: 'hello@lavelleptyltd.com.au',
  linkedin: 'https://linkedin.com/in/skylavelle',
  skyLavelleUrl: 'https://skylavelle.com.au',
  web3formsKey: '21e468ca-496b-45eb-8313-d1b7d5d229c9',
} as const;

export const analytics = {
  gaId: import.meta.env.PUBLIC_GA_ID || '',
} as const;

export const products = {
  projectRecoveryPack: {
    name: 'Project Recovery Pack',
    price: 'AUD 297',
    href: '/templates/project-recovery-pack',
    pmoResourcesHref: '/pmo-resources#project-recovery-pack',
    description:
      'For project managers stepping into a program that needs stabilising. Recovery assessment, stakeholder reset, replan and governance artefacts.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || '',
    whatsIncluded: [
      'Recovery assessment template',
      'Stakeholder reset communication pack',
      'Replan and governance reset artefacts',
      'Steering committee update template',
    ],
  },
  businessCasePack: {
    name: 'Business Case Pack',
    price: 'AUD 247',
    href: '/templates/business-case-pack',
    pmoResourcesHref: '/pmo-resources#business-case-pack',
    description:
      'End-to-end business case structure. Problem definition, options analysis, benefits, costs, risks and approval routing.',
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || '',
    whatsIncluded: [
      'Problem statement and case for change',
      'Options analysis framework',
      'Benefits register and financial model',
      'Risk, dependency and approval routing artefacts',
    ],
  },
  procurementPack: {
    name: 'Procurement Pack',
    price: 'AUD 297',
    href: '/templates/procurement-pack',
    pmoResourcesHref: '/pmo-resources#procurement-pack',
    description:
      'RFP planning, evaluation scoring, BAFO process, recommendation report and delegate approval templates.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || '',
    whatsIncluded: [
      'RFP planning and evaluation criteria',
      'Scoring framework with weighted matrices',
      'BAFO process templates',
      'Recommendation report and delegate approval pack',
    ],
  },
  steeringCommitteePack: {
    name: 'Steering Committee Pack',
    price: 'AUD 147',
    href: '/templates/steering-committee-pack',
    pmoResourcesHref: '/pmo-resources#steering-committee-pack',
    description:
      'Charter, meeting cadence, status report template, RAID summary, financials view and decision log.',
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || '',
    whatsIncluded: [
      'Steering committee charter',
      'Meeting cadence and agenda templates',
      'Status report template with RAID summary',
      'Financials view and decision log',
    ],
  },
  bundlePack: {
    name: 'Four-Pack Bundle',
    price: 'AUD 797',
    href: '/templates/bundle',
    pmoResourcesHref: '/pmo-resources',
    description:
      'All four PMO packs - Steering Committee, Business Case, Procurement and Project Recovery - at a significant saving versus individual purchase.',
    checkoutUrl: import.meta.env.PUBLIC_LS_BUNDLE_PACK || '',
    whatsIncluded: [
      'Steering Committee Pack (8 documents)',
      'Business Case Pack',
      'Procurement Pack',
      'Project Recovery Pack (9 documents)',
    ],
  },
} as const;
