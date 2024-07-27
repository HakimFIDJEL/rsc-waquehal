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

export default function Show({ id } : { id: string }) {

    const [news, setNews] = useState<News>();

    const fetchData = async () => {

        try {
            const newsFetched = await axios.get(`${Backend_URL}/news/${id}`);

            setNews(newsFetched.data);

            console.log(newsFetched);

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
        title={news?.title || ""}
        breadcrumbs={[
            {
                title: "Accueil",
                link: "/"
            },
            {
                title: "Les actualités",
                link: "/actualites"
            },
            {
                title: news?.title || "",
                link: `/actualites/${id}`
            }   
        ]}
        image=""
      />

  

    <div className="news_wrapper float_left">
        <div className="container">
            <div className="row">
               
              <div className="news_wrapper float_left blog_btm_padder">
                <div className="container">
                  <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                      <a href="/actualites">
                        <button className="btn btn-primary">Retour aux actualités</button>
                      </a>


                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">


                      {news && (

                        <article className="news-post-wrapper clearfix">
                          <div className="single-post-thumbnail">
                            <span className="post_thumbnail_icon">
                              <i className="fa fa-image" />
                            </span>
                            <Carousel images={news.images} />
                          </div>

                          <div className="news-content float_left">
                            <div className="entry-content">
                              <h4 className="entry-title">
                                <a href="#">{news.title}</a>
                              </h4>
                              <p>
                                {news.content}
                              </p>
                              {/* Contenu citation */}
                              {/* <div className="entry_content_border">
                                <p>
                                  Contenu Citation
                                </p>
                              </div> */}

                              {/* Contenu texte */}
                              {/* <p>
                                Contenu texte
                              </p> */}

                              {/* Contenu liste à puce */}
                              {/* <ul className="m-40">
                                <li>
                                  <i className="fa fa-check" />
                                  <a href="#">
                                    Sollicitudin, lorem quis bibendum auctor, nisi elit
                                    consequat
                                  </a>
                                </li>
                                <li>
                                  <i className="fa fa-check" />
                                  <a href="#">
                                    Lorem quis bibendum auctor elit consequat Sollicitudin nibh.
                                  </a>
                                </li>
                                <li>
                                  <i className="fa fa-check" />
                                  <a href="#">
                                    Sed rutrum suere orci. Lorem ipsum dolor sitt amet gravida.
                                  </a>
                                </li>
                                <li>
                                  <i className="fa fa-check" />
                                  <a href="#">
                                    Nisi Elit Consequat Sollicitudin Bibendum Auctor Aenean.
                                  </a>
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </article>

                      )}

                      {!news && (
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <h1>Chargement...</h1>
                        </div>
                      )}

                    </div>

                   
                  </div>
                </div>
              </div>


            </div>
        </div>
    </div>


      

    
    </>
  
}