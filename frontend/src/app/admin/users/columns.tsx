"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpDown, MoreHorizontal, Trash2, Settings2 } from "lucide-react";

const user = localStorage.getItem('user');

export type Data = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export function formatDate(date: string) {
  return new Date(date).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export const columns = (deleteUser: (id: string | number) => void): ColumnDef<Data>[] => [
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
      );
    },
    cell: ({ cell }) => <span className="pl-4">#{cell.getValue<string>()}</span>,
  },
  {
    accessorKey: "name",
    header: "Nom",
    cell: ({ cell }) => <span>{cell.getValue<string>()}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ cell }) => <span>{cell.getValue<string>()}</span>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ cell }) => <span>{formatDate(cell.getValue<string>())}</span>,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">

        {user == row.original.id && (
  
        <Link href={`/admin/users/edit/${row.original.id}`}>
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

        )}

        {user != row.original.id && (
        
        
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
              <AlertDialogAction onClick={() => deleteUser(row.original.id)}>
                Oui, supprimer !
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        )}


      </div>
    ),
  },
];
