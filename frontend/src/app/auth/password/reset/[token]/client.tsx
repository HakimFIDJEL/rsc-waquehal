'use client';
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
import { useEffect, useState } from "react"
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { useRouter } from "next/navigation";
import LoadingCard from "@/components/LoadingCard";
import Link from "next/link"



export default function LoginForm({ token }: { token: string })
 {

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [loadingPage, setLoadingPage] = useState(true);
  const router = useRouter();


  useEffect(() => {
    
    // On vérifie si le token est valide
    axios.get(`${Backend_URL}/user/password/reset/${token}`).then((response) => {
      setLoadingPage(false);
    })
    .catch((error) => {
        router.push('/auth/login')
    });

  }, []);



  if(loadingPage) {

    return <LoadingCard />

  }


  const handleSubmit = async (e:any) => {
    e.preventDefault();


    if(password !== passwordConfirmation) {
      toast({
        variant: 'destructive',
          description: "Les mots de passe ne correspondent pas. Veuillez les renseigner à nouveau.",
          duration: 3000
      });
      return;
    }

    setLoading(true);

    // On envoie la requête pour réinitialiser le mot de passe
    axios.post(`${Backend_URL}/user/password/reset/${token}`, {
      newPassword: password,
      confirmPassword: passwordConfirmation
    }).then((response) => {
      router.push('/auth/login');
    }).catch((error) => {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
        duration: 3000
      });
    }).finally(() => {
      setLoading(false);
    });

  }
  
  

  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Réinitialisez votre mot de passe</CardTitle>
          <CardDescription>
            Vous avez oublié votre mot de passe ? Pas de panique, renseignez votre nouveau mot de passe pour le réinitialiser.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Renseignez votre nouveau mot de passe</Label>
                  
                </div>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirmez votre nouveau mot de passe</Label>
                  
                </div>
                <Input id="password" type="password" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                Réinitialiser
              </Button>
              <Link href="/auth/login">
                <Button type="button" variant="outline" className="w-full">
                  Retour à la connexion
                </Button>
              </Link>
            </div>
          </form>
          
        </CardContent>
      </Card>
      <Toaster />
    </>
  )
}
