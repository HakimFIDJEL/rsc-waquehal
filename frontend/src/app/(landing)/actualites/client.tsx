"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";

import { Backend_URL } from "@/lib/Constant";
import axios from "axios";

type News = {
    id: string
    images: [Image]
    title: string
    content: string
    status: string
    createdAt: string
}

type Image = {
    id: string
    url: string
    title: string
    createdAt: string
}


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import NewCard from "@/components/u/NewCard";

export default function Index()
{
    const [news, setNews] = useState<News[]>([]);

    const fetchData = async () => {

    try {
        const galeriesFetched = await axios.get(`${Backend_URL}/news`);

        setNews(galeriesFetched.data);

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

    const Carousel = ({ images }: { images: Image[] }) => (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            style={{ width: "100%", height: "100%" }}
            onClick={(swiper) => {
                const url = images[swiper.clickedIndex].url;
                window.open(`${Backend_URL}${url}`, '_blank');
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ height: "350px" }}>
                    <img
                        src={`${Backend_URL}${image.url}`}
                        alt={image.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        
    
    )

    return <>
      <Hero 
        title="Les actualités"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "Les actualités",
            link: "/actualites"
          }
        ]}
        image=""
      />

      {/* <div className="portfolio_gridIII float_left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ft_left_heading_wraper left_gallery_heading">
                <h1>
                  Les actualités
                </h1>
              </div>
              
            </div>
          </div>

          <div className="row">


          </div>
        </div>
      </div> */}

      <div className="news_wrapper float_left" style={{ marginBottom: "560px" }}>
        <div className="container">
            <div className="row">
                {news
                    .filter(newItem => newItem.status !== 'false')
                    .map((newItem, index) => (

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <article className="news-post-wrapper clearfix">
                            <div className="" style={{ maxHeight: "400px" }}>
                                <Carousel images={newItem.images} />
                            </div>
                            <div className="blog-content">
                                <div className="like_thumb">
                                <span className="like">
                                    <i className="fa fa-camera" />
                                </span>
                                </div>
                                <header className="entry-header">
                                    <h4 className="entry-title">
                                            {newItem.title}
                                    </h4>
                                </header>
                                <div className="entry-content">
                                    <p style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", paddingBottom: "0", marginBottom: "20px" }}>
                                        {newItem.content}
                                    </p>
                                    <a href={`/actualites/${newItem.id}`} className="btn btn-primary">Lire la suite</a>
                                   
                                </div>
                                {/* /.entry-content */}
                            </div>
                        </article>
                    </div>

                ))}
                {news.length === 0 && <div className="alert alert-info w-100">Aucune actualitée enregistrée</div>}

            </div>
        </div>
    </div>


      

    
    </>
  
}