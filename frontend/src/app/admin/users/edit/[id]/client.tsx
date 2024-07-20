"use client";
import Link from "next/link"
import {
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { useRouter } from "next/navigation";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Edit({ id } : { id: string | number })
{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  

  const router = useRouter();

  const { toast } = useToast();


  const GetUser = () => {
    axios.get(`${Backend_URL}/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
      const user = response.data;
      setName(user.name);
      setEmail(user.email);
    })
    .catch((error) => {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
        duration: 3000
      });
    });
  }

  

  // On récupère les valeurs des champs et on les envoie au serveur
  const handleUpdate = () => {

    setLoadingUpdate(true);
    
    // Champs non vides
    if(!name || !email) {
      toast({
        variant: "destructive",
        description: "Veuillez remplir tous les champs",
        duration: 3000  
      });
      setLoadingUpdate(false);
      return;
    }


    // Si le mail est au format valide
    if(!email.includes('@') || !email.includes('.'))
    {
        toast({
          variant: "destructive",
          description: "Veuillez entrer une adresse email valide",
          duration: 3000
        })
        return;
    }


    // use axios to send data to server
    axios.patch(`${Backend_URL}/user/${id}`, {
      name: name,
      email: email
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then((response) => {
      if(response.status === 200 || response.status === 201) {
        toast({
          description: "Vos informations ont été mises à jour avec succès.",
          duration: 3000
        });
      }
      else 
      {
        toast({
          variant: 'destructive',
          description: "Une erreur s'est produite, veuillez réessayer.",
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
        setLoadingUpdate(false);
    });



    
  }

  const handlePassword = () => {
    
    setLoadingPassword(true);
    
    if(!newPassword || !passwordConfirm || !password) {
      toast({
        variant: "destructive",
        description: "Veuillez remplir tous les champs",
        duration: 3000  
      })
      setLoadingPassword(false);
      return;
    }

    if(newPassword !== passwordConfirm) {
      toast({
        variant: "destructive",
        description: "Les mots de passe ne correspondent pas",
        duration: 3000
      });
      setLoadingPassword(false);
      return;
    }

    axios.patch(`${Backend_URL}/user/password/${id}`, {
      currentPassword: password,
      newPassword: newPassword,
      confirmPassword: passwordConfirm
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then((response) => {
      if(response.status === 201 || response.status === 200) {
        toast({
          description: "Votre mot de passe a été mis à jour avec succès.",
          duration: 3000
        });

        setPassword('');
        setPasswordConfirm('');
        setNewPassword('');



      }
      else 
      {
        toast({
          variant: 'destructive',
          description: "Une erreur s'est produite, veuillez réessayer.",
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
        setLoadingPassword(false);
    });

  }
  

  useEffect(() => {
    GetUser();

    return () => {
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setNewPassword('');
    }
  }, []);



  return (

   <>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

  
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 w-full">
            <Breadcrumb className="hidden md:flex mt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/admin">Tableau de bord</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/admin/users">administrateurs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Modifier</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/users">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Modifier mes informations
              </h1>
            </div>
            <div className="grid gap-4  lg:gap-8">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Compte</TabsTrigger>
                  <TabsTrigger value="password">Sécurité</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Compte</CardTitle>
                      <CardDescription>
                        Modifier vos informations personnelles, cliquez sur "Enregistrer" pour valider.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" placeholder="Ex: John Doe" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Email</Label>
                        <Input id="email" placeholder="Ex: john.doe@example.com" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handleUpdate} disabled={loadingUpdate}>
                        Enregistrer
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sécurité</CardTitle>
                      <CardDescription>
                        Modifier votre mot de passe, cliquez sur "Enregistrer" pour valider.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Votre mot de passe</Label>
                        <Input id="password" type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Votre nouveau mot de passe</Label>
                        <Input id="newPassword" type="password" defaultValue={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Confirmez votre nouveau mot de passe</Label>
                        <Input id="passwordConfirm" type="password" defaultValue={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handlePassword} disabled={loadingPassword}>
                        Enregistrer
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>


        </main>

        <Toaster />
   </>


        


      
  )
}
