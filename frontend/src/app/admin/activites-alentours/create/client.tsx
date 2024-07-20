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
import { Textarea } from "@/components/ui/textarea"
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

import { useRef, useState, useEffect } from "react"
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

interface Category {
  id: string;
  name: string;
}


export default function Create() {
  
  const [categoryId, setCategoryId] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');

  const [images, setImages] = useState<ImageFile[]>([]);
  const [status, setStatus] = useState("offline");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const access_key = localStorage.getItem('accessToken');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Backend_URL}/activity-category`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des catégories d'activités",
        duration: 3000
      });
    }
  }

  const addCategory = async () => {

    if(categoryTitle === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir le champ',
        duration: 3000
      });
      return;
    }

    try {
      const response = await axios.post(`${Backend_URL}/activity-category`, {
        name: categoryTitle
      }, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setCategories([...categories, response.data]);
      setCategoryTitle('');
      toast({
        description: 'Catégorie ajoutée avec succès',
        duration: 3000
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
        duration: 3000
      });
    }


  }

  const removeCategory = async () => {

    try {
      const response = await axios.delete(`${Backend_URL}/activity-category/${categoryId}`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setCategories(categories.filter((category) => category.id !== categoryId));
      setCategoryId('');
      toast({
        description: 'Catégorie supprimée avec succès',
        duration: 3000
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
        duration: 3000
      });
    
    }

  }


  const handleSubmit = async (e:any) => {

    setLoading(true);

    // Egalement vérifier qu'il y a un moins une image
    if(name === '' || description === '' || website === '' || categoryId === '') {
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

    // Il doit y a voir au moins une image
    if(images.length === 0) {
      toast({
        variant: 'destructive',
        description: 'Veuillez ajouter au moins une image',
        duration: 3000
      });
      setLoading(false);
      return;
    }


    // use axios to send data to server
    axios.post(`${Backend_URL}/activity`, {
      name: name,
      description: description,
      website: website,
      categoryId: categoryId,
      status: localStatusBool
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) {
          const newsId = response.data.id;
          

          // Upload images
          const formData = new FormData();
          images.forEach((image) => {
            formData.append('files', image.file);
          });


          axios.post(`${Backend_URL}/activity/upload/${newsId}`, formData, {
            headers: {
               "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "multipart/form-data"
            }
          }).then((response) => {
            if(response.status === 200 || response.status === 201) {
              toast({
                description: 'Activité créée avec succès',
                duration: 3000
              });
              router.push('/admin/activites-alentours');
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

  useEffect(() => {
    fetchData();


    return () => {
      // cleanup
    }
  }, []);

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
                    <Link href="/admin/actitivtes-alentours">Activités aux alentours</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Créer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/activites-alentours">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Créer un activité
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
                    <CardTitle>Détails de l'activité</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">

                      <div className="grid gap-3">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" placeholder="Ex: McDonald's" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Description</Label>
                        <Textarea id="name" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Site Web</Label>
                        <Input id="name" placeholder="Ex: https://mcdonalds.fr" value={website} onChange={(e) => setWebsite(e.target.value)} />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Select value={categoryId} onValueChange={(value) => setCategoryId(value)}>
                          <SelectTrigger id="status" aria-label="Catégorie">
                            <SelectValue placeholder="Catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))}
                            {categories.length === 0 && (
                             
                              <SelectItem value="null" disabled>Aucune catégorie disponible</SelectItem>
                            
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex justify-between gap-6">
                        <div className="grid gap-3 w-full">
                          <Sheet key="sheet-add">
                            <SheetTrigger asChild>
                              <Button variant="secondary" size="sm">
                                Ajouter une catégorie
                              </Button>
                            </SheetTrigger>
                            <SheetContent>
                              <SheetHeader>
                                <SheetTitle>Ajouter une catégorie</SheetTitle>
                                <SheetDescription>
                                  <Separator className="mt-2" />
                                </SheetDescription>
                              </SheetHeader>
                              <div className="grid gap-6 py-4">
                                <div className="grid gap-4">
                                  <Label htmlFor="name-1">Nom de la catégorie</Label>
                                  <Input id="name-1"  className="col-span-3" value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} />
                                </div>
                              </div>
                              <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit" size="sm" className="w-full mt-4" onClick={addCategory}>
                                      Ajouter la catégorie
                                    </Button>
                                </SheetClose>
                              </SheetFooter>
                            </SheetContent>
                          </Sheet>
                        </div>
                        <div className="grid gap-3 w-full">
                          <Button variant="destructive" size="sm" onClick={removeCategory} disabled={categoryId === ''}>
                            Supprimer la catégorie sélectionnée
                          </Button>
                        </div>
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
                    <CardTitle>Images de l'activité</CardTitle>
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

                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader className="pr-12">
                    <CardTitle>Statut de l'activité</CardTitle>
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
            </div>
          </div>
        </main>
        <Toaster />
    </>

        


      
  )
}
