"use client";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";


export default function ForgotForm() {

  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);

    // use axios to send data to server
    axios.post(`${Backend_URL}/auth/forgot`, {
      email: email,
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) 
        {
          toast({
              description: "Un email de réinitialisation de mot de passe a été envoyé à l'adresse renseignée.",
              duration: 3000
          });
        }
    })
    .catch((error) => {
        toast({
            variant: 'destructive',
            description: error.response?.data?.message || error.message,
            duration: 3000
        });
    }).finally(() => {
        setLoading(false);
    });
        
  };


  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Mot de passe oublié ?</CardTitle>
          <CardDescription>
            Renseignez votre adresse mail pour recevoir un lien de réinitialisation de votre mot de passe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Adresse mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre adresse mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  Envoyer le lien
                </Button>
                <Link href="/auth/login">
                  <Button type="button" variant="outline" className="w-full">
                    Retour à la connexion
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </>
  );
  
}
