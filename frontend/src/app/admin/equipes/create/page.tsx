import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
  PlusCircle,
  Settings2,
  Trash2,
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
  Table,
  TableBody,
  TableCaption,
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
  
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
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
export const metadata = {
  title: 'RSC Admin - Tableau de bord',
};


export default function Create() {
  

  const players = [
    {
      id: "1",
      name: "John Doe",
      capitaine: "1",
    },
    {
      id: "2",
      name: "Jane Doe",
      capitaine: "0",
    },
    {
      id: "3",
      name: "John Smith",
      capitaine: "0",
    },
  ]


  return (

   


<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

  
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 pb-8">

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
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Détails de l'équipe</CardTitle>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Catégorie</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Ex: U20, Pré nationale, etc."
                        />
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
                                <Input id="name-1" value="Pedro Duarte" className="col-span-3" />
                              </div>
                              <div className="grid gap-4">
                                <Label htmlFor="logo-1">Joueur capitaine ?</Label>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div>Non</div>
                                    <Switch id="captain" />
                                    <div>Oui</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SheetFooter>
                              <SheetClose asChild>
                                  <Button type="submit" size="sm" className="w-full mt-4">
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
                          <TableHead>Capitaine</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                      {players.map((player) => (
                        <TableRow key={player.id}>
                          <TableCell>{player.id}</TableCell>
                          <TableCell>{player.name}</TableCell>
                          <TableCell>
                            {/* badge */}

                            {player.capitaine === "1" ? (
                              <Badge variant="default">Oui</Badge>
                            ) : (
                              <Badge variant="outline">Non</Badge>
                            )}

                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              {/* sheet */}
                              <Sheet key="sheet-edit">
                                <SheetTrigger asChild>
                                  <Button variant="secondary" size="sm">
                                    <Settings2 className="h-4 w-4" />
                                  </Button>
                                </SheetTrigger>
                                <SheetContent>
                                  <SheetHeader>
                                    <SheetTitle>Modifier le joueur</SheetTitle>
                                    <SheetDescription>
                                      <Separator className="mt-2" />
                                    </SheetDescription>
                                  </SheetHeader>
                                  <div className="grid gap-6 py-4">
                                    <div className="grid gap-4">
                                      <Label htmlFor="name-1">Nom du joueur</Label>
                                      <Input id="name-1" value={player.name} className="col-span-3" />
                                    </div>
                                    <div className="grid gap-4">
                                      <Label htmlFor="logo-1">Joueur capitaine ?</Label>
                                      <div>
                                        <div className="flex items-center gap-2">
                                          <div>Non</div>
                                          <Switch id="captain" />
                                          <div>Oui</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <SheetFooter>
                                    <SheetClose asChild>
                                      
                                      <div className="grid gap-4 py-4 w-full">
                                        <Button type="submit" className="w-full" size="sm">
                                          Modifier le joueur
                                        </Button>
                                        <Button type="submit" variant="destructive" className="w-full" size="sm">
                                          Supprimer le joueur
                                        </Button>

                                      </div>
                                      

                                    </SheetClose>
                                  </SheetFooter>
                                </SheetContent>
                              </Sheet>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}

                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>Capitaine</TableHead>
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
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                              <Upload className="h-4 w-4 text-muted-foreground" />
                              <span className="sr-only">Upload</span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ajouter une image</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                        
                      
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
                
              </div>
            </div>
          </div>
        </main>

        


      
  )
}
