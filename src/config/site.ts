export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://lavelleptyltd.com.au',
  name: 'Lavelle Pty Ltd',
  description:
    'Lavelle Pty Ltd provides senior project delivery consulting, practical PMO resources and digital asset development for organisations that need stronger governance and clearer project control.',
  email: 'hello@lavelleptyltd.com.au',
  linkedin: 'https://linkedin.com/in/skylavelle',
  skyLavelleUrl: 'https://skylavelle.com.au',
  web3formsKey: 'dc7b04fa-6e86-415e-8d01-1fe332b4bf21',
} as const;

export const analytics = {
  gaId: import.meta.env.PUBLIC_GA_ID || '',
} as const;

export const products = {
  projectRecoveryPack: {
    name: 'Project Recovery Pack',
    price: '$297',
    href: '/templates/project-recovery-pack',
    pmoResourcesHref: '/pmo-resources#project-recovery-pack',
    description:
      'For project managers stepping into a project that needs stabilising. Includes recovery assessment, stakeholder alignment, replan, governance reset and steering committee update artefacts.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || '',
  },
  businessCasePack: {
    name: 'Business Case Pack',
    price: '$247',
    href: '/templates/business-case-pack',
    pmoResourcesHref: '/pmo-resources#business-case-pack',
    description:
      'End-to-end business case structure including problem definition, options analysis, benefits, costs, risks, dependencies and approval routing.',
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || '',
  },
  procurementPack: {
    name: 'Procurement Pack',
    price: '$297',
    href: '/templates/procurement-pack',
    pmoResourcesHref: '/pmo-resources#procurement-pack',
    description:
      'RFP planning, evaluation criteria, scoring frameworks, BAFO process, recommendation report and delegate approval templates.',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || '',
  },
  steeringCommitteePack: {
    name: 'Steering Committee Pack',
    price: '$147',
    href: '/templates/steering-committee-pack',
    pmoResourcesHref: '/pmo-resources#steering-committee-pack',
    description:
      'Steering committee charter, meeting cadence, status report template, RAID summary, financials view and decision log.',
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || '',
  },
} as const;
