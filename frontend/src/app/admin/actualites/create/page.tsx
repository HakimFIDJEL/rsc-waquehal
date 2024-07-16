"use client";
import Link from "next/link"
import Image from "next/image";
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
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

import  ImageUploader  from "@/components/ImageUploader"

interface ImageFile {
  file: File;
  src: string;
}

export default function Create() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<ImageFile[]>([]);
  const [status, setStatus] = useState("offline");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const ImageContainerRef = useRef(null);

  const handleSubmit = async (e:any) => {

    setLoading(true);

    // Egalement vérifier qu'il y a un moins une image
    if(title === '' || description === '') {
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
    axios.post(`${Backend_URL}/news`, {
      title: title,
      content: description,
      status: localStatusBool
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) {
          const newsId = response.data.id;
          toast({
            description: 'Actualité créée avec succès, les images sont en cours de chargement',
            duration: 3000
          });

          // Upload images
          const formData = new FormData();
          images.forEach((image) => {
            formData.append('files', image.file);
          });


          axios.post(`${Backend_URL}/news/upload/${newsId}`, formData, {
            headers: {
               "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "multipart/form-data"
            }
          }).then((response) => {
            if(response.status === 200 || response.status === 201) {
              toast({
                description: 'Les images ont été téléchargées avec succès',
                duration: 3000
              });
              router.push('/admin/actualites');
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
                      <Link href="/admin/actualites">Actualités</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Créer</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center gap-4">
                <Link href="/admin/actualites">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Retour</span>
                  </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Créer une actualité
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
                      <CardTitle>Détails de l'actualité</CardTitle>
                    </CardHeader>
                    <Separator className="mb-8" />
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Titre</Label>
                          <Input
                            id="title"
                            type="text"
                            className="w-full"
                            placeholder="Ex: Le club a remporté le championnat"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            placeholder="La description de l'actualité"
                            className="min-h-32 max-h-56"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-07-chunk-3">
                    <CardHeader>
                      <CardTitle>Statut de l'actualité</CardTitle>
                    </CardHeader>
                    <Separator className="mb-8" />
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
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
                      <CardTitle>Les images de l'actualité</CardTitle>
                    </CardHeader>
                    <Separator className="mb-8" />
                    <CardContent>
                      <div className="grid gap-2">


                      <ImageUploader 
                        images={images} 
                        setImages={setImages} 
                        limit={null}
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
