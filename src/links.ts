const REPO = 'https://github.com/iamgio/quarkdown';

export const links = {
  wiki: '/wiki',
  quickstart: '/wiki/quickstart',
  docs: '/docs/quarkdown-stdlib',
  vsCode: '/vs-code',
  discussions: `${REPO}/discussions`,
  github: REPO,
  gettingStarted: `${REPO}?tab=readme-ov-file#getting-started`,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
