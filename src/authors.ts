/**
 * Author database keyed by GitHub username. The avatar is fetched from
 * `https://github.com/{username}.png`, so no `image` field is stored here.
 */
export const authors = {
  iamgio: {
    name: 'Giorgio Garofalo',
    bio: 'Quarkdown author and project lead. Software engineer, architect and designer.',
  },
} as const satisfies Record<string, { name: string; bio: string }>;

export type AuthorId = keyof typeof authors;

export const authorIds = Object.keys(authors) as [AuthorId, ...AuthorId[]];

export interface ResolvedAuthor {
  id: AuthorId;
  name: string;
  bio: string;
  url: string;
  avatar: string;
}

export const getAuthor = (id: AuthorId): ResolvedAuthor => ({
  id,
  ...authors[id],
  url: `https://github.com/${id}`,
  avatar: `https://github.com/${id}.png?size=160`,
});
