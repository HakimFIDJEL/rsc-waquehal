"use client";
import Link from "next/link"
import {
  ChevronLeft,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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

import { Separator } from "@/components/ui/separator"

import React, { useEffect, useRef, useState } from 'react';


import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { useRouter } from "next/navigation";

export default function Create() {
  
  const uploadButtonRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

 

  // On récupère les valeurs des champs et on les envoie au serveur
  const handleSave = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const randomPassword = Math.random().toString(36).slice(-8);
    setLoading(true);
    
    // Champs non vides
    if(!name || !email) {
      toast({
        variant: "destructive",
        description: "Veuillez remplir tous les champs",
        duration: 3000  
      })
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
    axios.post(`${Backend_URL}/user`, {
      name: name,
      email: email,
      password: randomPassword
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        // si on a un code 201, on a réussi à créer l'utilisateur
        if(response.status === 201 || response.status === 200) {
            router.push('/admin/users');
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
  }
  



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
                  <BreadcrumbPage>Créer</BreadcrumbPage>
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
                Créer un administrateur
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button size="sm" className="gap-1" ref={uploadButtonRef} onClick={handleSave} disabled={loading}>
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Enregistrer
                  </span>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:gap-8">
                <Card className="w-full">

                  <CardHeader>
                    <CardTitle>Détails de l'utilisateur</CardTitle>
                  </CardHeader>
                    <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" type="text" required placeholder="Ex: John Doe" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Adresse mail</Label>
                        <Input id="email" placeholder="Ex: john@doe.fr" required type="email" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              



          </div>


        </main>

        <Toaster />
   </>


        


      
  )
}
