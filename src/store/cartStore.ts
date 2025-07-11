import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const existing = get().cart.find((p) => p.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
            ),
          });
        } else {
          set({ cart: [...get().cart, product] });
        }
      },
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter((p) => p.id !== productId) });
      },
      clearCart: () => set({ cart: [] }),
      getTotal: () =>
        get().cart.reduce((total, p) => total + p.price * p.quantity, 0),
    }),
    { name: 'cart-storage' }
  )
);
