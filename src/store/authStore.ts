'use client';

import { create } from 'zustand';
import { User as FirebaseUser } from "firebase/auth";
import { UserProfile } from '@/types/userProfile';

interface AuthState {
    user: FirebaseUser | null | undefined; // El user original de Firebase
    userProfile: UserProfile | null | undefined; // Perfil extendido guardado en Firestore
    setUser: (user: FirebaseUser | null | undefined) => void;
    setUserProfile: (profile: UserProfile | null | undefined) => void;
  }

export const useAuthStore = create<AuthState>((set) => ({
    // user: {
    //     id: 'string',
    //     email: 'string',
    //     displayName: 'string'
    // },
    user: null,
    userProfile: undefined,
    setUser: (user) => set({ user }),
    setUserProfile: (profile) => set({ userProfile: profile }),
    logout: () => set({ user: null }),
}));
