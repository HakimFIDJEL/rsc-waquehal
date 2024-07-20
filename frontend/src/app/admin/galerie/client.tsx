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

import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios';
import { Backend_URL } from "@/lib/Constant";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function Index() {
  
  const { toast } = useToast();
  const [data, setData] = useState([]);
  const access_key = localStorage.getItem('accessToken');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Backend_URL}/galerie`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des images de la galerie",
        duration: 3000
      });
    }
  };

  const deleteData = async (id: string | number) => {
    try {
      const response = await axios.delete(`${Backend_URL}/galerie/${id}`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      if(response.status === 200) {
        toast({
          description: "L\'image a été supprimée avec succès",
          duration: 3000
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la suppression de l'image",
        duration: 3000
      });
    }
  };

  useEffect(() => {
    fetchData();


    return () => {
      // cleanup
    }
  }, []);

 
  return (

    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/admin">Tableau de bord</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Galerie</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Tabs defaultValue="all">
          <div className="flex items-center">
            
            <div className="ml-auto flex items-center gap-2">
              
              <Link href="/admin/galerie/create">
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Ajouter une image
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <TabsContent value="all">
            
            <DataTable
              title="La galerie de votre site"
              subtitle="Retrouvez ici toutes les images de votre site"
              columns={columns(deleteData)}
              data={data}
              loading={loading}
            />
              
                
              
          </TabsContent>
        </Tabs>
      </main>
      <Toaster />
    </>

        




      
  )
}
