import Image from "next/image"
import Link from "next/link"
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

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
import { DataTable } from "@/components/ui/data-table"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export const metadata = {
  title: 'RSC Admin - Tableau de bord',
};

import { columns } from "./columns"


export default function Index() {
  

  type Data = {
    id: string
    opponent: string
    category: string
    score1: number
    score2: number
    location: string
    created_at: string
  }[];


  const data: Data = [
    {
      id: "1",
      opponent: "FC Nantes",
      category: "U15",
      score1: 2,
      score2: 1,
      location: "Domicile",
      created_at: "2021-09-12",
    }
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Matchs</h1>
          </div> */}
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/admin">Tableau de bord</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Matchs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>


    <Tabs defaultValue="all">
      <div className="flex items-center">
        
        <div className="ml-auto flex items-center gap-2">
          
          <Link href="/admin/matchs/create">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Ajouter un match
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <TabsContent value="all">
        
        <DataTable
          title="Les matchs"
          subtitle="Retrouvez ici tous les matchs de votre site"
          columns={columns}
          data={data}
        />
          
            
          
      </TabsContent>
    </Tabs>


    {/* Peut être utile */}
    {/* <div
      className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
    >
      
    </div> */}


  </main>

        




      
  )
}
