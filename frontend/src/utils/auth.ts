import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkAuth = () => {
    const token = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push('/auth/login');
    }
  };

  useEffect(() => {
    checkAuth();

    return () => {
      // cleanup
    }
  }, []);

  return { isAuthenticated, checkAuth };
};