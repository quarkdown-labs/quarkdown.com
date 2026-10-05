const REPO = 'https://github.com/iamgio/quarkdown';

// Quarkdown Studio's origin: the local dev server while developing, the deployed Studio otherwise.
const STUDIO = import.meta.env.DEV ? 'http://localhost:5173' : 'https://studio.quarkdown.com';

/** Studio route that opens a checkout for a plan, billed every interval. */
const checkout = (plan: string, interval: 'monthly' | 'yearly') =>
  `${STUDIO}/billing/checkout?${new URLSearchParams({ plan, interval })}`;

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
  studio: STUDIO,
  upgrade: checkout('pro', 'monthly'),
  contact: 'mailto:info@quarkdown.com',
  productHunt: 'https://www.producthunt.com/products/quarkdown',
  discussions: `${REPO}/discussions`,
  sponsor: 'https://github.com/sponsors/iamgio',
  repo: REPO,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
