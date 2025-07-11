"use client";

import ProtectedRoute from "@/features/auth/components/route-guards/ProtectedRoute";

// import { signInAnonymously } from 'firebase/auth';
// import { auth } from '@/lib/firebase';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useAnonymousAuth } from '@/hooks/useAnonymousAuth';

export default function HomePage() {
  // useAnonymousAuth();

  return (
    <ProtectedRoute>
      <h1>AUTHENTICATED</h1>
    </ProtectedRoute>
  );
}
