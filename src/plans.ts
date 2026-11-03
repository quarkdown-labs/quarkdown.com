import type { TabOption } from './components/TabSwitcher.astro';
import { currencies, formatPrice, inEveryCurrency, mapCurrencies, type PerCurrency } from './currencies';
import { links, type BillingInterval, type Currency } from './links';

/** Price of Pro billed monthly, per month. */
const proMonthly: PerCurrency<number> = { usd: 6.99, eur: 6.99, gbp: 5.99 };

/** Price of Pro billed yearly, per year. */
const proYearly: PerCurrency<number> = { usd: 72, eur: 72, gbp: 60 };

/** Months in a year, the yearly price's share of which is shown per month. */
const MONTHS_PER_YEAR = 12;

/** Cents in a unit of currency, the precision a per-month price is rounded to. */
const CENTS = 100;

/** Hundredths in a whole, for writing a share as a percentage. */
const PERCENT = 100;

/** The share of a year of monthly Pro that yearly Pro saves, the smallest across currencies, in percent. */
const yearlySavingPercent = Math.round(
  Math.min(...currencies.map(({ id }) => 1 - proYearly[id] / (proMonthly[id] * MONTHS_PER_YEAR))) * PERCENT,
);

/** Billing intervals the pricing page switches between, the first one shown by default. */
export const billingIntervals: (TabOption & { id: BillingInterval })[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly', hint: `Save ${yearlySavingPercent}%` },
];

/** A value that is either the same for every billing interval, or set per interval. */
export type PerInterval<T> = T | Record<BillingInterval, T>;

/** [value] for [interval]. */
export function forInterval<T extends object | string>(value: PerInterval<T>, interval: BillingInterval): T {
  return typeof value === 'object' && interval in value ? (value as Record<BillingInterval, T>)[interval] : (value as T);
}

export interface PlanAction {
  label: string;
  /** Where the action leads, the same for every billing interval and currency or built from them. */
  href: string | ((interval: BillingInterval, currency: Currency) => string);
  variant: 'primary' | 'secondary';
}

export interface PlanPrice {
  /** Amount per currency, or a word standing in for one, e.g. Custom. */
  amount: PerCurrency<number> | string;
  period?: string;
  /** What is charged at once, shown under the price, e.g. a yearly total. */
  billed?: { amount: PerCurrency<number>; period: string };
}

/** A price as shown in one currency. */
export interface ShownPrice {
  amount: string;
  period?: string;
  /** A line under the price, e.g. how it is billed. */
  note?: string;
}

/** [price] as shown in [currency]. */
export function showPrice({ amount, period, billed }: PlanPrice, currency: Currency): ShownPrice {
  return {
    amount: typeof amount === 'string' ? amount : formatPrice(amount[currency], currency),
    period,
    note: billed && `Billed ${formatPrice(billed.amount[currency], currency)} ${billed.period}`,
  };
}

/** Where [action] leads for [interval] and [currency]. */
export function actionHref({ href }: PlanAction, interval: BillingInterval, currency: Currency): string {
  return typeof href === 'string' ? href : href(interval, currency);
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

/** Days after a first, undiscounted subscription payment within which it is refunded on request, no questions asked. */
export const refundWindowDays = 7;

/** Label of the action of the plan the visitor's Studio organization already holds. */
export const currentPlanLabel = 'Your current plan';

/** Query parameter Quarkdown Studio names the visitor's current plan with. */
export const currentPlanParam = 'current';

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: { amount: inEveryCurrency(0), period: 'mo' },
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
      monthly: { amount: proMonthly, period: 'mo' },
      yearly: {
        amount: mapCurrencies(proYearly, (total) => Math.round((total / MONTHS_PER_YEAR) * CENTS) / CENTS),
        period: 'mo',
        billed: { amount: proYearly, period: 'yearly' },
      },
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
  { feature: 'Writing suggestions', values: { free: true, pro: true, enterprise: true } },
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
  { feature: 'Read, write and export via MCP', values: { free: false, pro: true, enterprise: true } },
  { feature: 'Priority support', values: { free: false, pro: true, enterprise: true } },
  { feature: 'White-glove setup', values: { free: false, pro: false, enterprise: true } },
  { feature: 'On-premises deployment', values: { free: false, pro: false, enterprise: 'Soon' } },
  { feature: 'Custom features', values: { free: false, pro: false, enterprise: true } },
  { feature: 'App languages', values: { free: 'English, Mandarin', pro: 'English, Mandarin', enterprise: 'English, Mandarin' } },
];
