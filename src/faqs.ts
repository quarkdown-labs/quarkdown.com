import { links } from './links';

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'I already know Markdown. How hard is it to learn Quarkdown?',
    answer: `Quarkdown is a Markdown superset: the well-known Markdown syntax works out of the box. Quarkdown extensions are opt-in for document setup (instead of frontmatter) and whenever you need advanced control. The <a href="${links.quickstart}">quickstart</a> helps you get writing in minutes.`,
  },
  {
    question: 'How does it compare to LaTeX or Typst?',
    answer: 'Quarkdown keeps the low friction of Markdown, while granting fine-grained control over the document, and typesetting-grade output.<ul><li>Use Quarkdown for fast iterations and low overhead.</li><li>Choose LaTeX for widespread collaboration and state-of-the-art typesetting.</li><li>Pick Typst for a larger ecosystem and for producing tagged PDFs.</li></ul>',
  },
  {
    question: 'Are docs and wikis ready for production?',
    answer: 'Yes, <code>.doctype {docs}</code> produces sites on the same ballpark as Astro Starlight, Docusaurus, or MkDocs, while being extremely easy to set up and fast to compile. SEO, agent readiness and accessibility are supported out of the box.',
  },
  {
    question: 'What output formats are supported?',
    answer: 'Quarkdown can output to HTML, PDF, Markdown, and plain text via the <code>--renderer</code> (<code>-r</code>) option.',
  },
  {
    question: 'Quarkdown is Turing complete. How is it safe?',
    answer: 'Quarkdown is designed to be safe by default, relying on a restrictive permission system to prevent unauthorized actions. For instance, files outside the project directory cannot be read unless the <code>--allow global-read</code> option is granted.',
  },
  {
    question: 'Where can I ask questions or report bugs?',
    answer: `Head to <a href="${links.discussions}" target="_blank" rel="noopener">GitHub Discussions</a> for questions, ideas and showcases, or <a href="${links.repo}/issues" target="_blank" rel="noopener">open an issue</a> for bugs and requests.`,
  },
];
