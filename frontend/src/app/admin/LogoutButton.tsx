'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/auth';
import { Button } from "@/components/ui/button"

export default function LogoutButton ()  {
    // remove the token from local storage
    const router = useRouter();
    const { checkAuth } = useAuth();

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        checkAuth();
        router.push('/auth/login');
    };
  

    return (
        <Button type="button" onClick={logout}>
                Se déconnecter
        </Button>
    );
};
