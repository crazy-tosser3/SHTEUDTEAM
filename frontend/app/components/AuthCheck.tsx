'use client'

import { useAuthStore } from '../stores/AuthStore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuth && pathname != '/login') {
      router.replace('/login');
    }
  }, [isAuth, router, pathname]);

  return isAuth || pathname === '/login' ? <>{children}</> : null;
};