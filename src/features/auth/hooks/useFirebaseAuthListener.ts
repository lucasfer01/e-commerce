'use client';

// hooks/useFirebaseAuthListener.ts
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from '@/store';
import { auth } from '@/lib/firebase/firebase';
import { getUserProfile } from '@/features/users/services/getUserProfile';
// import { log } from '@/utils/logger';

export function useFirebaseAuthListener() {
  const setUser = useAuthStore((s) => s.setUser);
  const setUserProfile = useAuthStore((s) => s.setUserProfile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
  
      if (firebaseUser) {
        setUserProfile(undefined); // indica que está cargando
        try {
          const profile = await getUserProfile(firebaseUser.uid);
          setUserProfile(profile);
        } catch (err) {
          console.error("Error loading profile:", err);
          setUserProfile(null); // error al cargar
        }
      } else {
        // 🔥 No seteamos null directamente, esperamos que Firebase confirme
        setUserProfile(null); // ahora sí, si es realmente null
      }
    });
  
    return unsubscribe;
  }, []);
}
