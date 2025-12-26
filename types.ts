
export type Category = string;

export interface PortfolioItem {
  id: number;
  url: string;
  category: Category;
  title: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}
