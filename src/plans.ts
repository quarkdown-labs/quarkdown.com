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
  name: string;
  badge?: string;
  price?: PlanPrice;
  highlighted?: boolean;
  features: string[];
  action?: PlanAction;
}

export const plans: Plan[] = [
  {
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
  },
  {
    name: 'Pro',
    badge: 'Best value',
    price: { amount: '$7', period: 'mo' },
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
    action: { label: 'Upgrade', href: links.upgrade, variant: 'primary' },
  },
  {
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
