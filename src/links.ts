const REPO = 'https://github.com/iamgio/quarkdown';

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
  // TODO: point to Quarkdown Studio and its checkout once they exist.
  studio: '#',
  upgrade: '#',
  contact: 'mailto:info@quarkdown.com',
  productHunt: 'https://www.producthunt.com/products/quarkdown',
  discussions: `${REPO}/discussions`,
  sponsor: 'https://github.com/sponsors/iamgio',
  repo: REPO,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
