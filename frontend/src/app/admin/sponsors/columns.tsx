"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ArrowUpDown, MoreHorizontal, Trash2, Settings2, FileImage  } from "lucide-react"
import { Backend_URL } from "@/lib/Constant"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type data = {
    id: string
    status: string
    name: string
    image: string
    website: string
    created_at: string
}

// get a date formated as 2023-07-12 10:42 AM, 12/07/2023 10:42
export function formatDate(date: string) {
    return new Date(date).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export const columns = (deleteData: (id: string | number) => void): ColumnDef<data>[] => [      
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ cell }) => (
            <span className="pl-4"
            >#{cell.getValue<string>()}</span>
        ),
    },
    {
        accessorKey: "status",
        header: "Statut",
        cell: ({ cell }) => (
            cell.getValue<boolean>() === true ? (
                <Badge variant="default"style={{ whiteSpace: "nowrap" }}>En ligne</Badge>
            ) : (
                <Badge variant="secondary"style={{ whiteSpace: "nowrap" }}>Hors ligne</Badge>
            )
        ),
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const image = row.original.image;
            if (image ) 
            {
                const imageUrl = `${Backend_URL}${image}`;
                return (
                    <img src={imageUrl} alt="image" className="w-20 h-20 rounded-lg" />
                );

            }
            return (
                <div className="flex items-center justify-center w-10 h-10 border rounded-lg">
                    <FileImage />
                </div>
            );
        },
    },
    
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "website",
        header: "Site Web",
        cell: ({ cell }) => (
            <a
                className="text-blue-600 hover:underline"
                href={cell.getValue<string>()}
                target="_blank"
                rel="noopener noreferrer"
            >
                {cell.getValue<string>()}
            </a>
        ),
    },
    
    {
        accessorKey: "createdAt",
        // sortable
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ cell }) => (
            <span>{formatDate(cell.getValue<string>())}</span>
        ),
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => (
            <div className="flex gap-2">
                <Link href={`/admin/sponsors/edit/${row.original.id}`}>
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="secondary" size="sm">
                                <Settings2 />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Modifier</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        
                            <Button variant="default" size="sm">
                                <Trash2 />
                            </Button>
                          
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Êtes vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Vous êtes sur le point de supprimer cet élément. Cette action est irréversible.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => deleteData(row.original.id)}>
                                Oui, supprimer !
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        ),

    },
]
