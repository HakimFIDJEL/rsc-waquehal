"use client";

import React from "react";

import { useParams } from 'next/navigation';

import { Button } from "@/components/forms/Button";

import { Arrow } from "@/components/elements/Arrow";
import { ActuThumb } from "@/components/elements/ActuThumb";

import  Carousel  from '@/components/elements/Carousel';

export default function Show() 
{
  const params = useParams();
  const { slug, id } = params;

  const actuSwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,

   
    
    // loop: true,
    // responsive
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 0,
        // center mode
        centeredSlides: true,
        
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 0,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
    },

    // navigation
    navigation: {
        nextEl: '.news .news__carroussel .arrow.right',
        prevEl: '.news .news__carroussel .arrow.left',
    },

    

};

  return <main className="news-show">

    <section className="hero section">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__content__title fade-in-up">Mon actualité</div>
            <div className="hero__content__description fade-in-up">La description de mon actualité !!</div>
          </div>
          <div className="hero__cover"></div>
        </div>
    </section>

    <section className="section news">
      <div className="container">

        <div className="back__wrapper">


            <Button href="/u/actualites/" className="">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M22.2592 9.96872C22.5235 9.96872 22.777 9.86373 22.9639 9.67684C23.1508 9.48996 23.2558 9.23649 23.2558 8.97219C23.2558 8.7079 23.1508 8.45443 22.9639 8.26754C22.777 8.08066 22.5235 7.97567 22.2592 7.97567V9.96872ZM22.2592 7.97567L1 7.97567V9.96872L22.2592 9.96872V7.97567Z" fill="#092140"/>
                <path d="M8.97221 0.999998L1 8.97221L8.97221 16.9444" stroke="#092140" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
    
                <span>
                Retour aux actualités
                </span>
            </Button>

        </div>

        
        <div className="content">
          <div className="news__img__carroussel">
            <div className="news__img">
              <img src="" alt="" />
            </div>


            <div className="news__carroussel" >

              <Arrow direction="left" />

              <div id="news__carroussel__slick">
                <div className="news__thumb__wrapper">

                  <Carousel options={actuSwiperOptions}>
                    <ActuThumb 
                        src=""
                        alt=""
                    />
                    <ActuThumb 
                        src=""
                        alt=""
                    />
                    <ActuThumb 
                        src=""
                        alt=""
                    />
                    <ActuThumb 
                        src=""
                        alt=""
                    />
                  </Carousel>
                </div>
              </div>




              <Arrow direction="right" />
                


            </div>


          </div>


          <div className="news__description">
            <div className="news__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="news__date">
              11 Nov. 2023
            </div>
          </div>
        </div>



      </div>
    </section>

  </main>
    



}
