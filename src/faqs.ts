import { contactEmail, links, mailto } from './links';
import { educationDiscount } from './education';
import { refundWindowDays } from './plans';

export interface Faq {
  question: string;
  answer: string;
}

/** Questions about the Quarkdown language and compiler. */
export const quarkdownFaqs: Faq[] = [
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

/** Questions about Quarkdown Studio's plans and billing. */
export const pricingFaqs: Faq[] = [
  {
    question: 'What is Quarkdown Studio?',
    answer: 'Quarkdown Studio is the official online editor for Quarkdown. Write with a live preview, manage your projects and export them to PDF, HTML or Markdown, straight from your browser with nothing to install.',
  },
  {
    question: 'Is my work private?',
    answer: `Your projects are yours: we never sell your data or use your work to train AI models, and you can download your sources at any time. Read our <a href="${links.privacy}">privacy policy</a> for the details.`,
  },
  {
    question: 'Do I need a credit card for the Free plan?',
    answer: 'No. The Free plan is free forever, with no card required. Upgrade only when you need more projects, exports or storage.',
  },
  {
    question: 'What happens to my projects if I go over the Free limits?',
    answer: 'Nothing is deleted. Your three most recently created projects stay active, and older ones are frozen until you upgrade or delete a newer one. If your storage fills up, your files become read-only until you free some space or upgrade.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. Cancel from <em>Settings → Team</em> in Studio, and your plan stays active until the end of the period you paid for.',
  },
  {
    question: 'How does the money-back guarantee work?',
    answer: `If you are subscribing for the first time, email <a href="${mailto()}">${contactEmail}</a> within ${refundWindowDays} days of your first payment and we will refund it in full, no questions asked. The refund cancels your subscription, and your account returns to the Free plan right away. The guarantee applies to subscriptions bought without a discount or promo code, including the education discount, and does not cover renewals.`,
  },
  {
    question: 'Do you offer discounts for students and educators?',
    answer: `Yes, students and educators get <a href="${links.education}">${educationDiscount} off Pro</a> for a year.`,
  },
  {
    question: 'Can AI agents work on my projects?',
    answer: 'With Pro, agents such as Claude and Cursor can read, write and export your projects through MCP. You can disconnect them at any time from <em>Settings → Apps</em>.',
  },
];
