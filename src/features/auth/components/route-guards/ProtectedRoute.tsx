// src/features/auth/components/ProtectedRoute.tsx
"use client";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  // Evita el flicker de contenido hasta saber si hay user
  if (user === undefined) return null;

  return <>{user && children}</>;
}
