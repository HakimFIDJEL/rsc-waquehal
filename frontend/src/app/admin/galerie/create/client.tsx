"use client";
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
  PlusCircle,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import  ImageUploader  from "@/components/ImageUploader"

interface ImageFile {
  file: File;
  src: string;
}

export default function Create() {
  
  const [images, setImages] = useState<ImageFile[]>([]);

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();
  const access_key = localStorage.getItem('accessToken');

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    setLoading(true);

    // La galerie doit avoir une image
    if(images.length === 0) {
      toast({
        variant: 'destructive',
        description: 'Une image est requise',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // La catégorie et la statut de l'équipe sont obligatoires
    if(title === '' || status === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir tous les champs',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    let localStatusBool = false;
    if(status === 'online') {
      localStatusBool = true;
    } else {

    }


    // use axios to send data to server
    axios.post(`${Backend_URL}/galerie`, {
      title: title,
      status: localStatusBool,
      image: "",
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) 
        {

            // Upload de l'image
            const formData = new FormData();
            formData.append('file', images[0].file);
            axios.post(`${Backend_URL}/galerie/upload/${response.data.id}`, formData, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data',
              }
            }).then((response) => {
                if(response.status === 201 || response.status === 200) {
                  toast({
                    description: 'L\'image a été créé avec succès',
                    duration: 3000
                  });
                  router.push('/admin/galerie');
                }
              }).catch((error) => {
                toast({
                  variant: 'destructive',
                  description: error.response?.data?.message || error.message,
                  duration: 3000
                });
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
  }



  return (

   
        <>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
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
                      <Link href="/admin/galerie">Galerie</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Créer</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center gap-4">
                <Link href="/admin/galerie">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Retour</span>
                  </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Ajouter une image
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  {/* <Button variant="outline" size="sm">
                    Annuler
                  </Button> */}
                  <Button size="sm" className="gap-1" onClick={handleSubmit} disabled={loading}>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Enregistrer
                    </span>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Détails de l'image</CardTitle>
                    </CardHeader>
                    <Separator className="mb-8" />
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Titre</Label>
                          <Input
                            id="name"
                            type="text"
                            className="w-full"
                            placeholder="Le titre de l'image"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="name">Statut</Label>
                          <Select value={status} onValueChange={(value) => setStatus(value)}>
                            <SelectTrigger id="status" aria-label="Sélectionner le statut">
                              <SelectValue placeholder="Sélectionner le statut" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="online">En ligne</SelectItem>
                              <SelectItem value="offline">Hors ligne</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                
                
                
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  
                  <Card
                    className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                  >
                    <CardHeader>
                      <CardTitle>L'image sélectionnée</CardTitle>
                    </CardHeader>
                    <Separator className="mb-8" />
                    <CardContent>
                      <div className="grid gap-2">
                        <ImageUploader 
                          images={images} 
                          setImages={setImages} 
                          limit={1}
                          deleteUrl=''
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                </div>
              </div>
            </div>
          </main>
          <Toaster />
        </>


        


      
  )
}
