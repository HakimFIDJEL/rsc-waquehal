"use client";
import Link from "next/link"
import {
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
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

import { columns } from "./columns"

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { Backend_URL } from "@/lib/Constant";
import { set } from "date-fns";

export default function Index() {
  
  const { toast } = useToast();
  const [users, setUsers] = useState([]);
  const access_key = localStorage.getItem('accessToken');
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem('user');
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${Backend_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des utilisateurs",
        duration: 3000
      });
    }
  };

 

  const deleteUser = async (id: string | number) => {
    try {
      const response = await axios.delete(`${Backend_URL}/user/${id}`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      if(response.status === 200) {
        toast({
          description: "L'utilisateur a été supprimé avec succès",
          duration: 3000
        });
        fetchUsers();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la suppression de l'utilisateur",
        duration: 3000
      });
    }
  };
    


  useEffect(() => {
    fetchUsers();


    return () => {
      // cleanup
    }
  }, []);
  

  
  return (
    <>
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
                <BreadcrumbPage>Administrateurs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>


    <Tabs defaultValue="all">
      <div className="flex items-center">
        
        <div className="ml-auto flex items-center gap-2">
          
          <Link href="/admin/users/create">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Ajouter un administrateur
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <TabsContent value="all">
        
        <DataTable
          title="Les administrateurs"
          subtitle="Retrouvez ici tous les administrateurs du site."
          columns={columns(deleteUser)}
          data={users}
          loading={loading}
        />
          
            
          
      </TabsContent>
    </Tabs>


    </main>      
    <Toaster />
    </>
  )
}
