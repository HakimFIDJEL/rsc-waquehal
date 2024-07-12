"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

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

import { Separator } from "@/components/ui/separator"

import { ArrowUpDown, MoreHorizontal, Trash2, Settings2, FileImage, FileText  } from "lucide-react"


  

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type data = {
    id: string
    name: string
    email: string
    message: string
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

export const columns: ColumnDef<data>[] = [    
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
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "email",
        header: "Mail",
        cell: ({ cell }) => (
            <a href={`mailto:${cell.getValue<string>()}`} className="text-blue-500">
                {cell.getValue<string>()}
            </a>
        ),
    },
    {
        accessorKey: "created_at",
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
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary" size="sm">
                            <FileText />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Contenu du message</DialogTitle>
                        
                        <DialogDescription>
                            <Separator className="mt-2 mb-4" />
                            {row.original.message}
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
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
                        <AlertDialogAction>Oui, supprimer !</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        ),

    },
]
