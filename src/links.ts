const REPO = 'https://github.com/iamgio/quarkdown';

export const links = {
  wiki: '/wiki',
  docs: '/docs',
  github: REPO,
  gettingStarted: `${REPO}?tab=readme-ov-file#getting-started`,
  learnMore: `${REPO}?tab=readme-ov-file#table-of-contents`,
} as const;
