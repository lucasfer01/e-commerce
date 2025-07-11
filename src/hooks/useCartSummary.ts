import { useCartStore } from '@/store';
import { useMemo } from 'react';

export const useCartSummary = () => {
  const cart = useCartStore((state) => state.cart);

  const summary = useMemo(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return { total, itemCount };
  }, [cart]);

  return summary;
};
