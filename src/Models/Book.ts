export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  categories: string[];
  price: number;
  oldPrice?: number;
  inStock: boolean;
  createdAt: string;
  imageUrl: string;
};
