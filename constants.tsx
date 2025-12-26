
import { PortfolioItem, PricingPlan } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, url: 'https://res.cloudinary.com/dbmikomtn/image/upload/v1766743624/WhatsApp_Image_2025-12-25_at_8.31.42_PM_yxgjt2.jpg', category: 'Weddings', title: 'love' },
  { id: 2, url: 'https://res.cloudinary.com/dbmikomtn/image/upload/v1766743624/WhatsApp_Image_2025-12-25_at_11.50.33_PM_k7n0um.jpg', category: 'Portraits', title: 'together' },
  { id: 4, url: 'https://res.cloudinary.com/dbmikomtn/image/upload/v1766743624/WhatsApp_Image_2025-12-25_at_8.31.42_PM_1_u93r82.jpg', category: 'Weddings', title: 'not perfect just real' },
  { id: 5, url: 'https://res.cloudinary.com/dbmikomtn/image/upload/v1766743624/WhatsApp_Image_2025-12-25_at_8.31.35_PM_mzsgno.jpg', category: 'Portraits', title: 'elegance' },
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
