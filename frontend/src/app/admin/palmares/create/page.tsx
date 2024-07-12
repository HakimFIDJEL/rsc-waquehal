"use client";
import Link from "next/link"
import {
  ChevronLeft,
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
  CardDescription,
  CardFooter,
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
import { useRouter } from "next/navigation"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"



export default function Create() {
  
  const [title, setTitle] = useState('');
  const [ranking, setRanking] = useState('');
  const [season, setSeason] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState("offline");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e:any) => {

    setLoading(true);

    if(title === '' || ranking === '' || season === '' || category === '') {
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
    axios.post(`${Backend_URL}/palmares`, {
      title: title,
      ranking: Number(ranking),
      season: season,
      category: category,
      status: localStatusBool
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((response) => {
        // si on a un code 201, on a réussi à créer l'utilisateur
        if(response.status === 201 || response.status === 200) {
            router.push('/admin/palmares');
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

      {/* margin top */}

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
                    <Link href="/admin/palmares">Palmares</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Créer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/palmares">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Créer un trophée
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
                    <CardTitle>Détails du trophée</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">

                      <div className="grid gap-3">
                        <Label htmlFor="name">Titre</Label>
                        <Input id="title" type="text" placeholder="Ex: Championnat de France" value={title} onChange={(e) => setTitle(e.target.value)} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Classement</Label>
                        <Input id="ranking" placeholder="Classement" type="number" value={ranking} onChange={(e) => setRanking(e.target.value)} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Saison</Label>
                        <Input id="season" type="text" placeholder="Ex: 2019-2020" value={season} onChange={(e) => setSeason(e.target.value)} />
                      </div>
                      
                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Input id="category" type="text" placeholder="Ex: U18" value={category} onChange={(e) => setCategory(e.target.value)} />
                      </div>
                    </div>
                  </CardContent>
                </Card>


               

                
               
               
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                
                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader className="pr-12">
                    <CardTitle>Statut du trophée</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Select name="status" value={status} onValueChange={(value) => setStatus(value)}>
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
