
import { PortfolioItem, PricingPlan } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, url: 'lovers3.jpg', category: 'Weddings', title: 'love' },
  { id: 2, url: 'https://picsum.photos/800/800?random=2', category: 'Portraits', title: 'Urban Soul' },
  { id: 4, url: 'https://picsum.photos/800/500?random=4', category: 'Weddings', title: 'Golden Hour Kiss' },
  { id: 5, url: 'https://picsum.photos/500/800?random=5', category: 'Portraits', title: 'Childhood Joy' },
  { id: 7, url: 'https://picsum.photos/600/600?random=7', category: 'Weddings', title: 'Reception Glow' },
  { id: 8, url: 'https://picsum.photos/800/700?random=8', category: 'Portraits', title: 'Classic Elegance' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: 'Essential Session',
    price: '$200',
    features: ['1 Hour Session', '10 Edited Photos', 'Online Gallery', 'Personal Use License'],
  },
  {
    id: 2,
    name: 'Professional Package',
    price: '$500',
    isFeatured: true,
    features: ['3 Hour Session', '30 Edited Photos', 'Physical Prints (5)', 'Online Gallery', 'Commercial License'],
  },
  {
    id: 3,
    name: 'Legacy Experience',
    price: '$1200',
    features: ['Full Day Coverage', 'All Raw & Edited Photos', 'Premium Photo Album', 'High-Res Digital Files', 'Drone Photography Included'],
  },
];
