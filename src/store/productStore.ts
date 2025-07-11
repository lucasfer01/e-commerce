import { create } from 'zustand';
import { Product } from '@/types';

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  getProductById: (id: string) => Product | undefined;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  setProducts: (products) => set({ products }),
  getProductById: (id) => get().products.find((p) => p.id === id),
}));
