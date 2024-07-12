'use server'

import { Backend_URL } from '@/lib/Constant'

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log('Email:', email, 'Password:', password);

    const res = await fetch(`${Backend_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });

    console.log('Fetch response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Fetch error:', res.statusText, errorText);
      return null;
    } else {
      const result = await res.json();
      console.log('Fetch result:', result);
      return result;
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

