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
      'Read and write with your local AI agent',
      'Unlimited active projects',
      'Unlimited exports',
      'Markdown export',
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
