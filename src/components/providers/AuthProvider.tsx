'use client';

import { ReactNode } from 'react';
import { useFirebaseAuthListener } from '@/features/auth/hooks/useFirebaseAuthListener';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  useFirebaseAuthListener(); // Escucha auth changes
  return <>{children}</>;
};

export default AuthProvider;