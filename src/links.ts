const REPO = 'https://github.com/iamgio/quarkdown';

export const links = {
  base: 'https://quarkdown.com',
  wiki: '/wiki',
  quickstart: '/wiki/quickstart',
  docs: '/docs/quarkdown-stdlib',
  vsCode: '/vs-code',
  productHunt: 'https://www.producthunt.com/products/quarkdown',
  discussions: `${REPO}/discussions`,
  repo: REPO,
  gettingStarted: `${REPO}?tab=readme-ov-file#getting-started`,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
