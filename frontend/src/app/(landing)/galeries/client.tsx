"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect } from "react";


export default function Index()
{

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
            link: "/u/galeries"
          }
        ]}
        image=""
      />

      <div className="portfolio_gridIII float_left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ft_left_heading_wraper left_gallery_heading">
                <h1>
                  La galerie
                </h1>
              </div>
              
            </div>
          </div>
          <div className="row portfoli_inner">

            {/* A répéter par image */}

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="portfolio_item">
                <img src="/images/inner/pic1.jpg" alt="" />
                <div className="portfolio_hover">
                  <a href="#">the final championship</a>
                  <div className="zoom_popup">
                    <a className="img-link" href="/images/inner/pic1.jpg">
                      <i className="flaticon-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    
    </>
  
}