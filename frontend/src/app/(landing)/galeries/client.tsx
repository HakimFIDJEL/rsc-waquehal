"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";

import { Backend_URL } from "@/lib/Constant";
import axios from "axios";

type Galerie = {
  id: string
  title: string
  image: string
  status: string
  createdAt: string
}

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
import GalerieCard from "@/components/u/GalerieCard";


export default function Index()
{
  const [galeries, setGaleries] = useState<Galerie[]>([]);

  const fetchData = async () => {

    try {
      const galeriesFetched = await axios.get(`${Backend_URL}/galerie`);

      setGaleries(galeriesFetched.data);

    } catch (error) {
      console.error(error);
    }

  }


  useEffect(() => {

      fetchData();

      return () => {
          // cleanup
      }
  }, []);

    return <>
      <Hero 
        title="La galerie"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "La galerie",
            link: "/galeries"
          }
        ]}
        image="/images/wasquehal/img2.webp"
      />

      <div className="portfolio_gridIII float_left">
        <div className="container">
          
          <div className="row">

            {/* A répéter par image */}

            <GalerieCard galeries={galeries} />
            {galeries.length === 0 && <div className="alert alert-info w-100">Aucune image enregistrée</div>}
            
          </div>
        </div>
      </div>

    
    </>
  
}