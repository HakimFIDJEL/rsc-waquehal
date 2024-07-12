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

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  // const { data: session } = useSession();
  const { toast } = useToast();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      toast({ description: 'Veuillez remplir tous les champs', variant: "destructive", duration: 3000});
      return;
    }

    setDisabled(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const result = await authenticate(null, formData);
      console.log('Result:', result);
      if (result && result.backendTokens) {
        localStorage.setItem('accessToken', result.backendTokens.accessToken);
        localStorage.setItem('refreshToken', result.backendTokens.refreshToken);
        localStorage.setItem('user', JSON.stringify(result.user.id));
        
        router.push('/admin');
      } else {
        // Handle authentication failure
        toast({ description: 'Email ou mot de passe invalide', variant: "destructive", duration: 3000 });
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast({ description: 'Erreur d\'authentification', variant: "destructive", duration: 3000 });
    } finally {
      setDisabled(false);
    }
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
