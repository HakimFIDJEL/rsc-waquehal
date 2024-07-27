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




    return <>
      <Hero 
        title="Les règles"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "Les règles",
            link: "/regles"
          }
        ]}
        image=""
      />


        <div className="our_history_wrapper float_left" style={{ marginBottom: "560px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper gallery_heading_center text-center">
                            <h1>Le Rink-Hockey</h1>
                        </div>
                    </div>
                    <div className="col-md-12 pdtpp">
                        <div className="welcome_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#rule1">
                                        Règle 1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#rule2">
                                        Règle 2
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="tab-content about_tab_content">
                            <div id="rule1" className="tab-pane active">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Règle 1
                                            </h1>
                                            <p>
                                                Du texte et encore du texte
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rule2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Règle 2
                                            </h1>
                                            <p>
                                                Du texte et encore du texte
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </>
  
}