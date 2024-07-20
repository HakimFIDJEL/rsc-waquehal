"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink,
  } from "@/components/ui/breadcrumb"
import { useEffect } from "react";
import { Backend_URL } from "@/lib/Constant";

import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"
import { 
    Dialog, 
    DialogContent,
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

import { DollarSign, Users, CreditCard, Activity, Construction } from "lucide-react";

import { Button } from "@/components/ui/button"
import  Link  from "next/link"
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { useState } from "react"
import axios from 'axios';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

    
type Actualites = {
    id: string
    images: []
    title: string
    status: boolean
    createdAt: string
}

type Equipes = {
    id: string
    image: string
    category: string
    status: boolean
    createdAt: string
    players: []
}

type Trophees = {
    id: string
    ranking: number
    season: string
    title: string
    category: string
    status: boolean
    createdAt: string
}

type Sponsors = {
    id: string
    status: boolean
    name: string
    image: string
    website: string
    created_at: string
}

type Contacts = {
    id: string
    name: string
    email: string
    message: string
    createdAt: string
}

export default function Dashboard ()  {

    const { toast } = useToast();
    const [data, setData] = useState([]);
    const access_key = localStorage.getItem('accessToken');
    const [loading, setLoading] = useState(true);

    const [actualites, setActualites] = useState<Actualites[]>([]);
    const [equipes, setEquipes] = useState<Equipes[]>([]);
    const [trophees, setTrophees] = useState<Trophees[]>([]);
    const [sponsors, setSponsors] = useState<Sponsors[]>([]);
    const [contacts, setContacts] = useState<Contacts[]>([]);

    function formatDate(date: string) {
        return new Date(date).toLocaleString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const fetchData = async () => {
        // Actualités
        try {
            const response = await axios.get(`${Backend_URL}/news`, {
                headers: {
                    'Authorization': `Bearer ${access_key}`
                }
            });
            setActualites(response.data);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                description: 'Impossible de récupérer les actualités',
                duration: 3000,
            });
        }

        // Equipes
        try {
            const response = await axios.get(`${Backend_URL}/match-team`, {
                headers: {
                    'Authorization': `Bearer ${access_key}`
                }
            });
            setEquipes(response.data);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                description: 'Impossible de récupérer les équipes',
                duration: 3000,
            });
        }

        // Trophées
        try {
            const response = await axios.get(`${Backend_URL}/palmares`, {
                headers: {
                    'Authorization': `Bearer ${access_key}`
                }
            });
            setTrophees(response.data);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                description: 'Impossible de récupérer les trophées',
                duration: 3000,
            });
        }
        
        // Sponsors
        try {
            const response = await axios.get(`${Backend_URL}/sponsor`, {
                headers: {
                    'Authorization': `Bearer ${access_key}`
                }
            });
            setSponsors(response.data);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                description: 'Impossible de récupérer les sponsors',
                duration: 3000,
            });
        }

        // Contacts
        try {
            const response = await axios.get(`${Backend_URL}/contact`, {
                headers: {
                    'Authorization': `Bearer ${access_key}`
                }
            });
            setContacts(response.data);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                description: 'Impossible de récupérer les contacts',
                duration: 3000,
            });
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
 

  return (
    
    <>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                        <Link href="javascript:void(0);">RSC Wasquehal</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Tableau de bord</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Big title with a small text, welcome */}
            <div className="flex flex-col gap-2 md:gap-1">
                <h2 className="text-3xl font-bold">Tableau de bord</h2>
                <p className="text-muted-foreground text-md">
                    Bienvenue sur le tableau de bord de l'administration du RSC Wasquehal. Vous trouverez ici un résumé des dernières informations.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Actualités
                        </CardTitle>
                        <Link href="/admin/actualites">
                            <Button size="icon">
                                <ArrowUpRight className="h-6 w-6" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">
                        {actualites.length > 0 ? actualites.length : 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Dont {actualites.filter(actualite => actualite.status === false).length} qui ne sont pas en ligne
                    </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Equipes
                        </CardTitle>
                        <Link href="/admin/equipes">
                            <Button size="icon">
                                <ArrowUpRight className="h-6 w-6" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">
                        {equipes.length > 0 ? equipes.length : 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Soit {equipes.reduce((acc, equipe) => acc + equipe.players.length, 0)} joueurs
                    </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Trophées
                        </CardTitle>
                        <Link href="/admin/palmares">
                            <Button size="icon">
                                <ArrowUpRight className="h-6 w-6" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">
                        {trophees.length > 0 ? trophees.length : 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Dont {trophees.filter(trophee => trophee.ranking <= 3).length} dans le top 3
                    </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Sponsors
                        </CardTitle>
                        <Link href="/admin/sponsors">
                            <Button size="icon">
                                <ArrowUpRight className="h-6 w-6" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">
                        {sponsors.length > 0 ? sponsors.length : 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Cela fait chaud au coeur
                    </p>
                    </CardContent>
                </Card>
                
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card
                className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>
                        Contacts
                    </CardTitle>
                    <CardDescription>
                        Liste des derniers contacts envoyés depuis le formulaire
                    </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link href="/admin/contact">
                    Tout voir
                    <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Contact</TableHead>
                        <TableHead className="text-right">Message</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            // On limite à 5 contacts
                            contacts.slice(0, 5).map(contact => (
                                <TableRow key={contact.id}>
                                    <TableCell>
                                        <div className="font-medium">{contact.name}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            <a href={`mailto:${contact.email}`}>
                                                {contact.email}
                                            </a>
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {formatDate(contact.createdAt)}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    Voir
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                <DialogTitle>Contenu du message</DialogTitle>
                                                
                                                <DialogDescription>
                                                    <Separator className="mt-2 mb-4" />
                                                    {contact.message}
                                                </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                        {
                            contacts.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                                        Aucun contact
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>


                        
                </Table>
                </CardContent>
            </Card>
            <Card className="text-muted-foreground">
                <CardHeader>
                <CardTitle>
                    {/* space between */}
                    <div className="flex flex-row items-center justify-between">
                        Calendrier
                        <Construction className="h-9 w-9" />   
                    </div> 
                </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                    
                    <p>
                        Le calendrier n'est pas encore disponible :(
                    </p>
                </CardContent>
            </Card>
            </div>
        </main>
        <Toaster />
    </>

  )
}


