"use client";
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
  PlusCircle,
  Settings2,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
import { Switch } from "@/components/ui/switch"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"

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


export default function Create() 
{

  type Player = {
    id: number;
    name: string;
    captain: string;
  }

  type Category = {
    id: string;
    name: string;
  }


  const [category, setCategory] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);

  const [images, setImages] = useState<ImageFile[]>([]);

  const [name, setName] = useState('');
  const [captain, setCaptain] = useState(false);
  const [editingPlayerId, setEditingPlayerId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingCaptain, setEditingCaptain] = useState(false);
  
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category []>([]);

  const router = useRouter();
  const { toast } = useToast();
  const access_key = localStorage.getItem('accessToken');

  // Récupère les catégories de match
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Backend_URL}/match-category`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des équipes",
        duration: 3000
      });
    }
  };

  const addPlayer = () => {
    if (name === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir le nom du joueur',
        duration: 3000
      });
      return;
    }

    if (players.find(player => player.name === name)) {
      toast({
        variant: 'destructive',
        description: 'Un joueur avec ce nom existe déjà',
        duration: 3000
      });
      return;
    }

    if (captain && players.find(player => player.captain === '1')) {
      toast({
        variant: 'destructive',
        description: 'Un joueur capitaine existe déjà',
        duration: 3000
      });
      return;
    }

    const player = {
      id: players.length + 1,
      name: name,
      captain: captain ? '1' : '0'
    };

    setPlayers([...players, player]);
    setName('');
    setCaptain(false);
  };

  const editPlayer = (id: number) => {

    if (editingName === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir le nom du joueur',
        duration: 3000
      });
      return;
    }

    if (editingCaptain && players.find(player => player.captain === '1' && player.id !== id)) {
      toast({
        variant: 'destructive',
        description: 'Un joueur capitaine existe déjà',
        duration: 3000
      });
      return;
    }

    // Vérifie qu'un joueur avec le même nom n'existe pas
    if (players.find(player => player.name === editingName && player.id !== id)) {
      toast({
        variant: 'destructive',
        description: 'Un joueur avec ce nom existe déjà',
        duration: 3000
      });
      return;
    }

    const updatedPlayers = players.map(player =>
      player.id === id ? { ...player, name: editingName, captain: editingCaptain ? '1' : '0' } : player
    );
    setPlayers(updatedPlayers);
    setEditingPlayerId(null);
  };

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

    console.log(category, status);
    // La catégorie et la statut de l'équipe sont obligatoires
    if(category === '' || status === '') {
      toast({
        variant: 'destructive',
        description: 'Veuillez remplir tous les champs',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // Il doit y avoir au moins un joueur dans l'équipe
    if(players.length === 0) {
      toast({
        variant: 'destructive',
        description: 'Veuillez ajouter au moins un joueur',
        duration: 3000
      });
      setLoading(false);
      return;
    }

    // Il doit y avoir un seul capitaine
    if(players.filter(player => player.captain === '1').length !== 1) {
      toast({
        variant: 'destructive',
        description: 'Il doit y avoir un seul capitaine',
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

    // replace the players with the dto adjusting the captain boolean
    const playersDto = players.map(player => {
      return {
        name: player.name,
        captain: player.captain === '1' ? true : false
      }
    });


    // use axios to send data to server
    axios.post(`${Backend_URL}/match-team`, {
      team: {
        status: localStatusBool,
        categoryId: category,
        image: "",
      },
      players: playersDto
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
            axios.post(`${Backend_URL}/match-team/upload/${response.data.id}`, formData, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data',
              }
            }).then((response) => {
                if(response.status === 201 || response.status === 200) {
                  toast({
                    description: 'L\'équipe a été créée avec succès',
                    duration: 3000
                  });
                  router.push('/admin/equipes');
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

  
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 pb-8">


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
                    <Link href="/admin/equipes">Equipes</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Créer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/equipes">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Créer une équipe
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
                    <CardTitle>Détails de l'équipe</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Select value={category} onValueChange={(value) => setCategory(value)}>
                          <SelectTrigger id="status" aria-label="Catégorie">
                            <SelectValue placeholder="Catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {/*  A regler  */}
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
                      
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex  justify-between gap-2">
                        <div>
                          Les joueurs de l'équipe
                        </div>

                        <Sheet key="sheet-add">
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">
                              Ajouter un joueur
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Ajouter un joueur</SheetTitle>
                              <SheetDescription>
                                <Separator className="mt-2" />
                              </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-6 py-4">
                              <div className="grid gap-4">
                                <Label htmlFor="name-1">Nom du joueur</Label>
                                <Input id="name-1"  className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} />
                              </div>
                              <div className="grid gap-4">
                                <Label htmlFor="logo-1">Joueur captain ?</Label>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div>Non</div>
                                    <Switch id="captain" checked={captain} onCheckedChange={(e) => setCaptain(e)} />
                                    <div>Oui</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SheetFooter>
                              <SheetClose asChild>
                                  <Button type="submit" size="sm" className="w-full mt-4" onClick={addPlayer}>
                                    Ajouter le joueur
                                  </Button>
                              </SheetClose>
                            </SheetFooter>
                          </SheetContent>
                        </Sheet>

                      </div>
                      
                    </CardTitle>
                  </CardHeader>
                    <Separator className="mb-8" />
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>captain</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>

                        {players.map(player => (
                          <TableRow key={player.id}>
                            <TableCell>{player.id}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>
                              {player.captain === '1' ? (
                                <Badge variant="default">Oui</Badge>
                              ) : (
                                <Badge variant="outline">Non</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Sheet key={`sheet-edit-${player.id}`}>
                                  <SheetTrigger asChild>
                                    <Button variant="secondary" size="sm" onClick={() => {
                                      setEditingPlayerId(player.id);
                                      setEditingName(player.name);
                                      setEditingCaptain(player.captain === '1');
                                    }}>
                                      <Settings2 className="h-4 w-4" />
                                    </Button>
                                  </SheetTrigger>
                                  {editingPlayerId === player.id && (
                                    <SheetContent>
                                      <SheetHeader>
                                        <SheetTitle>Modifier le joueur</SheetTitle>
                                        <SheetDescription>
                                          <Separator className="mt-2" />
                                        </SheetDescription>
                                      </SheetHeader>
                                      <div className="grid gap-6 py-4">
                                        <div className="grid gap-4">
                                          <Label htmlFor={`name-${player.id}`}>Nom du joueur</Label>
                                          <Input id={`name-${player.id}`} value={editingName} className="col-span-3" onChange={(e) => setEditingName(e.target.value)} />
                                        </div>
                                        <div className="grid gap-4">
                                          <Label htmlFor={`captain-${player.id}`}>Joueur captain ?</Label>
                                          <div>
                                            <div className="flex items-center gap-2">
                                              <div>Non</div>
                                              <Switch id={`captain-${player.id}`} checked={editingCaptain} onCheckedChange={(e) => setEditingCaptain(e)} />
                                              <div>Oui</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <SheetFooter>
                                        <SheetClose asChild>
                                          <div className="grid gap-4 py-4 w-full">
                                            <Button type="submit" className="w-full" size="sm" onClick={() => editPlayer(player.id)}>
                                              Modifier le joueur
                                            </Button>
                                            <Button type="submit" variant="destructive" className="w-full" size="sm" onClick={() => setPlayers(players.filter(p => p.id !== player.id))}>
                                              Supprimer le joueur
                                            </Button>
                                          </div>
                                        </SheetClose>
                                      </SheetFooter>
                                    </SheetContent>
                                  )}
                                </Sheet>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}

                        {players.length === 0 && (
                          
                          <TableRow>
                            <TableCell colSpan={4}>
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-muted-foreground">Aucun joueur trouvé</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        
                        )}

                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>captain</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </CardContent>
                </Card>

               
               
               
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>L'image de l'équipe</CardTitle>
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

                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Statut de l'équipe</CardTitle>
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
