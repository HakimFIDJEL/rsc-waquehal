import Image from "next/image"
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

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Label } from "@/components/ui/label"




import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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

export const metadata = {
  title: 'RSC Admin - Tableau de bord',
};


export default function Create() {
  



  return (

   


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
                            <SelectItem value="online">U20</SelectItem>
                            <SelectItem value="offline">U17</SelectItem>
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

        


      
  )
}
