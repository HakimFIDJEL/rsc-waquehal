"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { authenticate } from "@/lib/actions";
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from "next/navigation";
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { toast } = useToast();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({ description: 'Veuillez remplir tous les champs', variant: "destructive", duration: 3000});
      return;
    }

    setDisabled(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // use axios to send data to server
    axios.post(`${Backend_URL}/auth/login`, JSON.stringify({ email, password }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response: any) => {
      if (response.status === 200 || response.status === 201) 
      {
        if(response.data.backendTokens && response.data.user)
        {
          localStorage.setItem('accessToken', response.data.backendTokens.accessToken);
          localStorage.setItem('refreshToken', response.data.backendTokens.refreshToken);
          localStorage.setItem('user', JSON.stringify(response.data.user.id));
          
          router.push('/admin');
        }
        else 
        {
          toast({ description: 'Email ou mot de passe invalide', variant: "destructive", duration: 3000 });
        }
      } else {
        // Handle authentication failure
        toast({ description: 'Email ou mot de passe invalide', variant: "destructive", duration: 3000 });
      }
    })
    .catch((error) => {
        toast({
            variant: 'destructive',
            description: error.response?.data?.message || error.message,
            duration: 3000
        });
    }).finally(() => {
        setDisabled(false);
    });
        
  };



  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Connectez-vous en tant qu'administrateur pour accéder à votre tableau de bord.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Adresse mail</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  name="password"
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={disabled}>
                Connexion
              </Button>
              <Link href="/auth/password/forgot" className="ml-auto inline-block text-sm underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </>
  );
}
