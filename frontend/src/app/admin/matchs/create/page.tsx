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
import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


export default function Create() {
  

  const [category, setCategory] = useState("");
  const [scoreAllie, setScoreAllie] = useState("");
  const [scoreAdverse, setScoreAdverse] = useState("");
  const [dateMatch, setDateMatch] = useState("");
  const [lieuMatch, setLieuMatch] = useState("");
  const [equipeAdverse, setEquipeAdverse] = useState("");
  const [status, setStatus] = useState("offline");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { toast } = useToast();
  const access_key = localStorage.getItem('accessToken');

  // Récupère les catégories de match
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Backend_URL}/equipes`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des actualités",
        duration: 3000
      });
    }
  };

  const handleSubmit = async (e:any) => {

    setLoading(true);

    // Egalement vérifier qu'il y a un moins une image
    if(!category || !scoreAllie || !scoreAdverse || !dateMatch || !lieuMatch || !equipeAdverse || !status) {
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
    axios.post(`${Backend_URL}/matchs`, {
      category: category,
      scoreAllie: scoreAllie,
      scoreAdverse: scoreAdverse,
      dateMatch: dateMatch,
      lieuMatch: lieuMatch,
      equipeAdverse: equipeAdverse,
      status: localStatusBool
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) {
            toast({
                description: 'Le match a été créé avec succès',
                duration: 3000
            });
            router.push('/admin/matchs');
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
                    <Link href="/admin/matchs">Matchs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Créer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/matchs">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Créer un match
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                {/* <Button variant="outline" size="sm">
                  Annuler
                </Button> */}
                <Button size="sm" className="gap-1">
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
                    <CardTitle>Détails du match</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">

                      {/* Catégorie */}
                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Catégorie">
                            <SelectValue placeholder="Catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-between gap-6">
                        <div className="grid gap-3 w-full">
                          <Label htmlFor="name">Score allié</Label>
                          <Input id="name" placeholder="score" />
                        </div>
                        <div className="grid gap-3 w-full">
                          <Label htmlFor="name">Score adverse</Label>
                          <Input id="name" placeholder="score" />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Date du match</Label>
                        <Input id="name" type="datetime-local" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Lieu du match</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Localisation">
                            <SelectValue placeholder="Localisation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="domicile">Domicile</SelectItem>
                            <SelectItem value="exterieur">Extérieur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      

                    </div>
                  </CardContent>
                </Card>


               

                
               
               
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                
                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader className="pr-12">
                    <CardTitle>Statut du match</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Select>
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

                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Détails de l'équipe</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Equipe adverse</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Equipe 1</SelectItem>
                            <SelectItem value="dark">Equipe 2</SelectItem>
                            <SelectItem value="system">Equipe 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">

                      <Sheet key="sheet-1">
                        <SheetTrigger asChild>
                          <Button variant="default" size="sm">
                            Ajouter une équipe
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Ajouter une équipe</SheetTitle>
                            <SheetDescription>
                              <Separator className="mt-2" />
                            </SheetDescription>
                          </SheetHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-4">
                              <Label htmlFor="name-1">Nom de l'équipe</Label>
                              <Input id="name-1" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid gap-4">
                              <Label htmlFor="logo-1">Logo de l'équipe</Label>
                              <button className="flex py-4 w-full items-center justify-center rounded-md border border-dashed">
                                <Upload className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Upload</span>
                              </button>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit" size="sm" className="w-full mt-4">
                                  Ajouter l'équipe
                                </Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>

                      <Sheet key="sheet-2">
                        <SheetTrigger asChild>
                          <Button type="submit" variant="secondary" size="sm">
                            Modifier l'équipe
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Modifier une équipe</SheetTitle>
                            <SheetDescription>
                              <Separator className="mt-2" />
                            </SheetDescription>
                          </SheetHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-4">
                              <Label htmlFor="name-2">Nom de l'équipe</Label>
                              <Input id="name-2" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid gap-4">
                              <Label htmlFor="logo-2">Logo de l'équipe</Label>
                              <button className="flex py-4 w-full items-center justify-center rounded-md border border-dashed">
                                <Upload className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Upload</span>
                              </button>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                                <div className="grid gap-4 py-4 w-full">
                                  <Button type="submit" className="w-full" size="sm">
                                    Modifier l'équipe
                                  </Button>
                                  <Button type="submit" variant="destructive" className="w-full" size="sm">
                                    Supprimer l'équipe
                                  </Button>

                                </div>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>

                        
                        
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
