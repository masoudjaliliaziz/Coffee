export type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

export type SignUpData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type loginData = {
  email: string;
  password: string;
};

export type MostSellersProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category?: string;
  image_url?: string;
  craated_at: string;
  category_id: string;
  badge_id: string;
  badges: { name: string };
  categories: { name: string };
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string | null;
  image_url: string | null;
  craated_at: string;
  category_id: string;
  badge_id: string;
  badges: { name: string } | null;
  categories: { name: string | null };
};
