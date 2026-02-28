const REPO = 'https://github.com/iamgio/quarkdown';

export const links = {
  wiki: '/wiki',
  quickstart: '/quickstart',
  docs: '/docs',
  vsCode: '/vs-code',
  github: REPO,
  gettingStarted: `${REPO}?tab=readme-ov-file#getting-started`,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
