# Quarkdown Website

Homepage for [Quarkdown](https://github.com/iamgio/quarkdown) at **quarkdown.com**.

## Stack

- **Astro** — static site generator
- **TypeScript** (strict) — type checking
- **SCSS** — styling (`sass` dev dependency, use `<style lang="scss">` in `.astro` files)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview production build locally

## Project Structure

```
src/
  pages/       → routes (file-based routing)
  layouts/     → reusable page layouts
  components/  → UI components (.astro or .tsx)
  styles/      → global SCSS files
  generated/   → HTML fragments written by external CI, imported with `?raw`
public/        → static assets (served as-is)
```

## Tools

`/tools` hosts small utility pages. They are ordinary pages of this repository, written and edited here like any other,
and they are safe from the `/docs` (API reference) and `/wiki` routes, which the Quarkdown repository overwrites on
every release.

One of them is generated: `src/generated/emoji-list.html`, the table behind `/tools/emoji`, is a bare HTML fragment
produced by the `Update emoji list` workflow of the [Quarkdown repository](https://github.com/iamgio/quarkdown), which
commits it here on demand. It is the only file that workflow touches, and the only one under `src/generated/`. Do not
edit it by hand; it carries no styling of its own, so the page renders it with the site theme.

## Engineering Practices

- **DRY** — no repetitions; extract shared logic and styles
- **Reuse** — create components, SCSS mixins, and utility classes whenever possible
- **No hardcoding** — use variables, props, and configuration over magic values

## Performance

- **No icon font libraries** — use inline SVGs via `Icon.astro` (Bootstrap-style) and `SimpleIcon.astro` (brand icons from `icons.json`)
- **Responsive images** — always set `widths` and `sizes` on `<Image>` to serve appropriately-sized variants
- **Minimal font preloads** — only preload body (`--font-body`) and heading (`--font-heading`) fonts; other fonts load normally
- **Centralized metadata** — site metadata lives in `src/meta.ts`, links/URLs in `src/links.ts`; avoid hardcoding values in templates

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` trigger build + deploy.
