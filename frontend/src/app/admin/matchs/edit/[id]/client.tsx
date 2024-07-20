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
import { set } from "date-fns";

interface Category {
  id: string;
  name: string;
}




export default function Edit({ id }: { id: number | string }) {
  

  const [category, setCategory] = useState("");
  const [scoreAllie, setScoreAllie] = useState("");
  const [scoreAdverse, setScoreAdverse] = useState("");
  const [dateMatch, setDateMatch] = useState("");
  const [lieuMatch, setLieuMatch] = useState("");
  const [equipeAdverse, setEquipeAdverse] = useState("");
  const [newEquipe, setNewEquipe] = useState("");
  const [status, setStatus] = useState("offline");
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [equipes, setEquipes] = useState<string[]>([]);
  const [usedEquipes, setUsedEquipes] = useState<string[]>([]);

  const router = useRouter();
  const { toast } = useToast();
  const access_key = localStorage.getItem('accessToken');

  useEffect(() => {
    fetchData();

    return () => {
      setCategories([]);
      setEquipes([]);
      setUsedEquipes([]);
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    // Récupérer les catégories et les équipes et le match
    try {
      const categoriesResponse = await axios.get(`${Backend_URL}/match-category`, {
        headers: { 'Authorization': `Bearer ${access_key}` }
      });
      setCategories(categoriesResponse.data);

      const equipesResponse = await axios.get(`${Backend_URL}/match/team`, {
        headers: { 'Authorization': `Bearer ${access_key}` }
      });

      const match = await axios.get(`${Backend_URL}/match/${id}`, {
        headers: { 'Authorization': `Bearer ${access_key}` }
      });


      const equipesReponseTab: string[] = [];
      equipesResponse.data.forEach((equipe: any) => {
        equipesReponseTab.push(equipe.team_enemy);
      });


      setEquipes(equipesReponseTab);

      setEquipeAdverse(match.data.team_enemy);

      setCategory(match.data.categoryId);
      setScoreAllie(match.data.score_ally);
      setScoreAdverse(match.data.score_enemy);
      setDateMatch(new Date(match.data.date).toISOString().slice(0, 16));
      setLieuMatch(match.data.localisation);
      setStatus(match.data.status ? 'online' : 'offline');
      
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des données",
        duration: 3000
      });
    } finally {
      setLoading(false);
    }


  };

  const addEquipe = () => {
    if (newEquipe.trim() === "") {
      toast({
        variant: 'destructive',
        description: "Veuillez entrer le nom de l'équipe",
        duration: 3000
      });
      return;
    }
    if (equipes.includes(newEquipe)) {
      toast({
        variant: 'destructive',
        description: "L'équipe existe déjà",
        duration: 3000
      });
      return;
    }
    setEquipes(prevEquipes => [...prevEquipes, newEquipe]);
    setNewEquipe("");
    setEquipeAdverse(newEquipe);
  }

  const deleteEquipe = () => {
    if (equipeAdverse === "") {
      toast({
        variant: 'destructive',
        description: "Veuillez sélectionner une équipe à supprimer",
        duration: 3000
      });
      return;
    }
    if (usedEquipes.includes(equipeAdverse)) {
      toast({
        variant: 'destructive',
        description: "L'équipe est utilisée dans un match",
        duration: 3000
      });
      return;
    }
    setEquipes(prevEquipes => prevEquipes.filter(equipe => equipe !== equipeAdverse));
    setEquipeAdverse("");
  }



  const handleSubmit = async (e:any) => {

    e.preventDefault();

    setLoading(true);

   

    // La catégorie et la statut de l'équipe sont obligatoires
    if(category === '' || status === '' || scoreAllie === '' || scoreAdverse === '' || dateMatch === '' || lieuMatch === '' || equipeAdverse === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir tous les champs',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // Les scores doivent être des nombres
    if(isNaN(parseInt(scoreAllie)) || isNaN(parseInt(scoreAdverse))) {
      toast({
        variant: 'destructive',
        description: 'Les scores doivent être des nombres',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // La date doit être valide
    if(new Date(dateMatch).getTime() > Date.now()) {
      toast({
        variant: 'destructive',
        description: 'La date du match doit être inférieur à la date actuelle',
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
    axios.patch(`${Backend_URL}/match/${id}`, {
      categoryId: category,
      score_ally: parseInt(scoreAllie),
      score_enemy: parseInt(scoreAdverse),
      date: dateMatch,
      localisation: lieuMatch,
      team_enemy: equipeAdverse,
      status: localStatusBool,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        if(response.status === 201 || response.status === 200) 
        {
          
          router.push('/admin/matchs');
          toast({
            description: 'Match modifié avec succès',
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
                    <Link href="/admin/matchs">Matchs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Modifier</BreadcrumbPage>
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
                Modifier un match
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
                    <CardTitle>Détails du match</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">

                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Select value={category} onValueChange={(value) => setCategory(value)}>
                          <SelectTrigger id="status" aria-label="Catégorie">
                            <SelectValue placeholder="Catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                            {categories.length === 0 && (
                                <SelectItem value="null" disabled>Aucune catégorie disponible</SelectItem>
                            )}
                            
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-between gap-6">
                        <div className="grid gap-3 w-full">
                          <Label htmlFor="name">Score allié</Label>
                          <Input id="name" type="number" placeholder="score" value={scoreAllie} onChange={(e) => setScoreAllie(e.target.value)} />
                        </div>
                        <div className="grid gap-3 w-full">
                          <Label htmlFor="name">Score adverse</Label>
                          <Input id="name" type="number" placeholder="score" value={scoreAdverse} onChange={(e) => setScoreAdverse(e.target.value)} />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Date du match</Label>
                        <Input id="name" type="datetime-local" value={dateMatch} onChange={(e) => setDateMatch(e.target.value)} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Lieu du match</Label>
                        <Select value={lieuMatch} onValueChange={(value) => setLieuMatch(value)}>
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

                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Détails de l'équipe</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Equipe adverse</Label>
                        <Select value={equipeAdverse} onValueChange={(value) => setEquipeAdverse(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Equipe" />
                          </SelectTrigger>
                          <SelectContent>
                            {equipes.map((equipe) => (
                              <SelectItem key={equipe} value={equipe}>
                                {equipe}
                              </SelectItem>
                            ))}
                            {equipes.length === 0 && (
                                <SelectItem value="null" disabled>Aucune équipe disponible</SelectItem>
                            )}
                            
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
                              <Input id="name-1" className="col-span-3" value={newEquipe} onChange={(e) => setNewEquipe(e.target.value)} />
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit" size="sm" className="w-full mt-4" onClick={addEquipe}>
                                  Ajouter l'équipe
                                </Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>

                      <Button variant="destructive" size="sm" onClick={deleteEquipe} disabled={equipeAdverse === ""}>
                        Supprimer l'équipe
                      </Button>

                        
                        
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
