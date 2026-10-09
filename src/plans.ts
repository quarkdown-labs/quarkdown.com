import type { TabOption } from './components/TabSwitcher.astro';
import { links, type BillingInterval } from './links';

/** Billing intervals the pricing page switches between, the first one shown by default. */
export const billingIntervals: (TabOption & { id: BillingInterval })[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly', hint: 'Save 14%' },
];

/** A value that is either the same for every billing interval, or set per interval. */
export type PerInterval<T> = T | Record<BillingInterval, T>;

/** [value] for [interval]. */
export function forInterval<T extends object | string>(value: PerInterval<T>, interval: BillingInterval): T {
  return typeof value === 'object' && interval in value ? (value as Record<BillingInterval, T>)[interval] : (value as T);
}

export interface PlanAction {
  label: string;
  href: PerInterval<string>;
  variant: 'primary' | 'secondary';
}

export interface PlanPrice {
  amount: string;
  period?: string;
  /** A line under the price, e.g. how it is billed. */
  note?: string;
}

export interface Plan {
  /** Id of the plan in Quarkdown Studio, which links here with `?current=<id>`. */
  id: 'free' | 'pro' | 'enterprise';
  name: string;
  badge?: string;
  price?: PerInterval<PlanPrice>;
  highlighted?: boolean;
  features: string[];
  action?: PlanAction;
}

/** Label of the action of the plan the visitor's Studio organization already holds. */
export const currentPlanLabel = 'Your current plan';

/** Query parameter Quarkdown Studio names the visitor's current plan with. */
export const currentPlanParam = 'current';

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: { amount: '$0', period: 'mo' },
    features: [
      'All document types: plain, paged, slide, docs',
      'Unlimited live previews',
      'HTML, PDF export',
      '3 active projects',
      '3 exports/hour, per project',
      '20MB storage',
    ],
    action: { label: 'Open Studio', href: links.studio, variant: 'secondary' },
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Best value',
    price: {
      monthly: { amount: '$6.99', period: 'mo' },
      yearly: { amount: '$6', period: 'mo', note: 'Billed $72 yearly' },
    },
    highlighted: true,
    features: [
      'Everything in Free',
      'Read & write via MCP',
      'Unlimited active projects',
      'Unlimited exports',
      'Markdown export',
      'Priority export queue',
      'Priority support',
      '1GB storage',
    ],
    action: { label: 'Upgrade now', href: links.upgrade, variant: 'primary' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { amount: 'Custom' },
    features: [
      'Everything in Pro',
      'White-glove setup',
      'Custom features for your business',
    ],
    action: { label: 'Contact us', href: links.contact, variant: 'secondary' },
  },
];

/** A plan's value for a compared feature: included or not, or a description of the allowance. */
export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  feature: string;
  values: Record<Plan['id'], ComparisonValue>;
}

/** Feature-by-feature comparison of the plans. */
export const comparison: ComparisonRow[] = [
  { feature: 'Powered by Quarkdown', values: { free: true, pro: true, enterprise: true } },
  { feature: 'All 4 document types', values: { free: true, pro: true, enterprise: true } },
  { feature: 'Live previews', values: { free: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' } },
  { feature: 'Vim mode', values: { free: true, pro: true, enterprise: true } },
  { feature: 'Spell checker', values: { free: true, pro: true, enterprise: true } },
  { feature: 'Present slides', values: { free: true, pro: true, enterprise: true } },
  { feature: 'Knowledge graph visualization', values: { free: true, pro: true, enterprise: true } },
  { feature: 'HTML and PDF export', values: { free: true, pro: true, enterprise: true } },
  { feature: 'Markdown export', values: { free: false, pro: true, enterprise: true } },
  { feature: 'Active projects', values: { free: '3', pro: 'Unlimited', enterprise: 'Unlimited' } },
  { feature: 'Exports', values: { free: '3/hour, per project', pro: 'Unlimited', enterprise: 'Unlimited' } },
  { feature: 'Export timeout', values: { free: '5s', pro: '30s', enterprise: 'Custom' } },
  { feature: 'Export artifact retention', values: { free: false, pro: '20 days', enterprise: 'Custom' } },
  { feature: 'Priority export queue', values: { free: false, pro: true, enterprise: true } },
  { feature: 'Storage', values: { free: '20MB', pro: '1GB', enterprise: 'Custom' } },
  { feature: 'Real-time collaboration', values: { free: false, pro: 'Soon', enterprise: 'Soon' } },
  { feature: 'Read & write via MCP', values: { free: false, pro: true, enterprise: true } },
  { feature: 'Priority support', values: { free: false, pro: true, enterprise: true } },
  { feature: 'White-glove setup', values: { free: false, pro: false, enterprise: true } },
  { feature: 'On-premises deployment', values: { free: false, pro: false, enterprise: 'Soon' } },
  { feature: 'Custom features', values: { free: false, pro: false, enterprise: true } },
  { feature: 'App languages', values: { free: 'English, Mandarin', pro: 'English, Mandarin', enterprise: 'English, Mandarin' } },
];
