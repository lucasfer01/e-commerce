import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  toggleCart: () => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  modalContent: React.ReactNode | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  modalContent: null,
  openModal: (content) => set({ modalContent: content }),
  closeModal: () => set({ modalContent: null }),
}));
