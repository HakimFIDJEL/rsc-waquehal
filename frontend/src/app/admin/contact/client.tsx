"use client";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

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
      const response = await axios.get(`${Backend_URL}/contact`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la récupération des contacts",
        duration: 3000
      });
    }
  };

  const deleteData = async (id: string | number) => {
    try {
      const response = await axios.delete(`${Backend_URL}/contact/${id}`, {
        headers: {
          'Authorization': `Bearer ${access_key}`
        }
      });
      if(response.status === 200) {
        toast({
          description: "Le contact a été supprimé avec succès",
          duration: 3000
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        description: "Une erreur s'est produite lors de la suppression du contact",
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Tabs defaultValue="all">
          <div className="flex items-center"></div>
          <TabsContent value="all">
            <DataTable
              title="Les contacts"
              subtitle="Retrouvez ici tous les contacts de votre site"
              columns={columns(deleteData)}
              data={data}
              loading={loading}
            />
          </TabsContent>
        </Tabs>
      </main>
      <Toaster />
    </>
  );
}
