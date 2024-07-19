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
  url: string;
}

export default function Edit({ params }: {params : { id: number | string }}) {
  

  const [images, setImages] = useState<ImageFile[]>([]);

  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();
  const access_key = localStorage.getItem('accessToken');


  const fetchData = async () => {
    // On récupère les catégories de match
    try {
      const response = await axios.get(`${Backend_URL}/sponsor/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      

      const sponsor = response.data;
      setName(sponsor.name);
      setWebsite(sponsor.website);
      setStatus(sponsor.status ? 'online' : 'offline');
     

      const imageUrl = `${Backend_URL}${sponsor.image}`;
      const imageResponse = await fetch(imageUrl);
      const blob = await imageResponse.blob();
      const file = new File([blob], 'sponsor');

      setImages([{
        file: file,
        url: imageUrl
      }]);

      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des équipes",
        duration: 3000
      });
    }
  }

  useEffect(() => {
    fetchData();


    return () => {
      // cleanup
    }
  }, []);

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    setLoading(true);

    // L'équipe doit avoir une image
    if(images.length === 0) {
      toast({
        variant: 'destructive',
        description: 'L\'image de l\'équipe est requise',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // La catégorie et la statut de l'équipe sont obligatoires
    if(name === '' || website === '' || status === '') {
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
    axios.patch(`${Backend_URL}/sponsor/${params.id}`, {
      name: name,
      website: website,
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
            axios.post(`${Backend_URL}/sponsor/upload/${response.data.id}`, formData, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data',
              }
            }).then((response) => {
                if(response.status === 201 || response.status === 200) {
                  toast({
                    description: 'Le sponsor a été créé avec succès',
                    duration: 3000
                  });
                  router.push('/admin/sponsors');
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
                    <Link href="/admin/sponsors">Sponsors</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Modifier</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/sponsors">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Modifier un sponsor
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

              <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Détails du sponsor</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">

                      <div className="grid gap-3">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name"  placeholder="Ex: Adidas" onChange={(e) => setName(e.target.value)} value={name}/>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Site internet</Label>
                        <Input id="name" placeholder="Ex: https://adidas.com" onChange={(e) => setWebsite(e.target.value)} value={website}/>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader className="pr-12">
                    <CardTitle>Statut du sponsor</CardTitle>
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
                    <CardTitle>Le logo du sponsor</CardTitle>
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
