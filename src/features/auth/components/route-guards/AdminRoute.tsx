'use client';

import { useAuthStore } from '@/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const userProfile = useAuthStore((s) => s.userProfile);
  const router = useRouter();

  useEffect(() => {
    if (userProfile === null) {
      router.push('/login'); // usuario no logueado
    }
  }, [userProfile, router]);

  if (userProfile === undefined) {
    return <p>Cargando perfil...</p>; // 🔄 está cargando
  }

  if (userProfile === null) {
    return null; // ya se redirige en el useEffect
  }

  if (!userProfile.isAdmin) {
    return <p>No tenés permisos para ver esto.</p>;
  }

  return <>{children}</>;
}
