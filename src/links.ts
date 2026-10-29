const REPO = 'https://github.com/iamgio/quarkdown';
/** Where visitors reach Quarkdown by email. */
export const contactEmail = 'info@quarkdown.com';

// Quarkdown Studio's origin: the local dev server while developing, the deployed Studio otherwise.
const STUDIO = import.meta.env.DEV ? 'http://localhost:5173' : 'https://studio.quarkdown.com';

/** How often a paid plan is billed, as Quarkdown Studio names it. */
export type BillingInterval = 'monthly' | 'yearly';

/** Studio route that opens a checkout for a plan, billed every interval. */
const checkout = (plan: string, interval: BillingInterval) =>
  `${STUDIO}/billing/checkout?${new URLSearchParams({ plan, interval })}`;

/** A link that composes an email to Quarkdown, optionally prefilled. */
export function mailto(subject?: string, body?: string) {
  const fields = Object.entries({ subject, body })
    .filter(([, value]) => value)
    // Not URLSearchParams: mail clients do not read `+` as a space.
    .map(([key, value]) => `${key}=${encodeURIComponent(value!)}`);
  return `mailto:${contactEmail}${fields.length > 0 ? `?${fields.join('&')}` : ''}`;
}

export const links = {
  base: 'https://quarkdown.com',
  wiki: '/wiki',
  quickstart: '/wiki/quickstart',
  docs: '/docs/quarkdown-stdlib',
  // TODO: point to the tools index page once it exists.
  tools: '/',
  vsCode: '/vs-code',
  blog: '/blog',
  pricing: '/pricing',
  education: '/pricing/education',
  privacy: '/privacy',
  terms: '/terms',
  studio: STUDIO,
  packages: `${STUDIO}/atoms`,
  waitlist: `${STUDIO}/waitlist`,
  upgrade: {
    monthly: checkout('pro', 'monthly'),
    yearly: checkout('pro', 'yearly'),
  },
  contact: mailto(),
  productHunt: 'https://www.producthunt.com/products/quarkdown',
  discussions: `${REPO}/discussions`,
  sponsor: 'https://github.com/sponsors/iamgio',
  repo: REPO,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
