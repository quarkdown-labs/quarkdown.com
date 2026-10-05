import { links } from './links';

export interface PlanAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface PlanPrice {
  amount: string;
  period?: string;
}

export interface Plan {
  /** Id of the plan in Quarkdown Studio, which links here with `?current=<id>`. */
  id: 'free' | 'pro' | 'enterprise';
  name: string;
  badge?: string;
  price?: PlanPrice;
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
    price: { amount: '$6.99', period: 'mo' },
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
