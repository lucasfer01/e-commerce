'use client';

import { useAuthStore } from "@/store";

export const useIsAdmin = () => {
  const profile = useAuthStore((s) => s.userProfile);
  console.log('========= PROFILE FROM USEISADMIN ===========', profile)

  return {
    isAdmin: profile?.isAdmin === true,
    isLoading: profile === undefined,
  };
};