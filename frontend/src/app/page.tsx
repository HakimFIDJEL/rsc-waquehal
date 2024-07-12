import React, { createContext, useEffect, useRef } from 'react';
// import "../scripts/home.js";

import { HomeInfoCard } from '@/components/elements/HomeInfoCard';
import { HomeActuCard } from '@/components/elements/HomeActuCard';
import { MatchCard } from '@/components/elements/MatchCard';
import { GalerieCard } from '@/components/elements/GalerieCard';
import { TrophyCard } from '@/components/elements/TrophyCard';

import { Arrow } from '@/components/elements/Arrow';
import { Button } from '@/components/forms/Button';

import  Carousel  from '@/components/elements/Carousel';

import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Scroll } from "@/components/Scroll";

import "@/styles/css/style.css";

export const metadata = {
  title: 'RSC Wasquehal - Accueil',
};

export default function Home()
{

  const actuSwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    // navigation
    navigation: {
      nextEl: '.actualites .arrows__wrapper .arrow.right',
      prevEl: '.actualites .arrows__wrapper .arrow.left',
    },
  };

  const galerieSwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 4,
    // navigation
    navigation: {
      nextEl: '.galeries .arrows__wrapper .arrow.right',
      prevEl: '.galeries .arrows__wrapper .arrow.left',
    },
    // responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  };

  const matchSwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 3,
    // responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
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
      nextEl: '.matchs .arrows__wrapper .arrow.right',
      prevEl: '.matchs .arrows__wrapper .arrow.left',
    },
    
  };

  const palmaresSwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    // responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },

    // navigation
    navigation: {
      nextEl: '.palmares .arrows__wrapper .arrow.right',
      prevEl: '.palmares .arrows__wrapper .arrow.left',
    },
    
  };


  return <html lang="fr">
      <head>
        
      </head>
      <body className="home">
        <Header />

          <main className='home'>
            <section className="hero section">
              <div className="hero__container container">
                <div className="hero__content">
                  <div className="hero__content__subtitle fade-in-left">Bienvenue sur,</div>
                  <div className="hero__content__title fade-in-left">RSC WASQUEHAL</div>
                  <div className="hero__content__description fade-in-left">Un club convivial de Rink-Hockey</div>
                </div>
                <div className="hero__cover"></div>
              </div>
            </section>

            <section className="infos section">
              <div className="infos__cta">Qui sommes nous ?</div>
              <div className="infos__container fade-in-up container">
                <HomeInfoCard 
                  stat="100"
                  description="Plus d'une centaine de membres"
                  href="/"
                />
                <HomeInfoCard 
                  stat="20"
                  description="Une vingtaine de bénévoles aident"
                  href="/"
                />
                <HomeInfoCard 
                  stat="300"
                  description="Matchs passés par les équipes"
                  href="/"
                />
                <HomeInfoCard 
                  stat="40"
                  description="Trophées récoltés bien mérités"
                  href="/"
                />
              </div>

              <div className="infos__wave">
                <svg width="1440" height="58" viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 49.3108L48 51.966C96 54.6212 192 59.9315 288 57.2763C384 54.6212 480 43.6211 576 35.6555C672 27.3106 768 22.0002 864 24.6554C960 27.3106 1056 38.3107 1152 43.6211C1248 49.3108 1344 49.3108 1392 49.3108H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V49.3108Z" fill="#383A4B"/>
                </svg>
              </div>
            </section>


            <section className="actualites section">
              <div className="actualites__container container">


                <div className="actualites__title__wrapper">
                  <div className="title">
                    <div className="title__bar"></div>
                    <h1>Les actualités du club</h1>
                  </div>  
                  <div className="arrows__wrapper">
                    
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                  </div>
                </div>




                <div className="actualites__content">
                  
                  <div className="mainActu fade-in-left">

                    <img className="mainActu__image" />
                    <div className="mainActu__cover"></div>
                    <div className="mainActu__description">
                      <h2 className="mainActu__description__title">The title of the news</h2>
                      <div className="mainActu__description__date">11 / 12 / 2023</div>
                    </div>


                  </div>

                  <div className="otherActus fade-in-right">

                    <Carousel options={actuSwiperOptions} >
                      <div className="actualites__wrapper">

                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />
                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />
                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />
                        


                      </div>
                      <div className="actualites__wrapper">

                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />
                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />
                        <HomeActuCard
                          imageSrc=""
                          title="The title of the news"
                          text="The description of the new which can be a bit long but no problem because if it overflow, the three dots will take place"
                          date="2023-12-11"
                        />

                      </div>
                    </Carousel>



                  </div>


                </div>


              </div>

              <div className="actualites__seeMore">
                <Button 
                  href="/"
                  className="secondary-button"
                >
                  Voir plus
                </Button>
              </div>
            </section>

            <section className="matchs section">
              <div className="matchs__container container">


                <div className="matchs__title__wrapper">
                  <div className="title">
                    <div className="title__bar"></div>
                    <h1>Les derniers matchs</h1>
                  </div>  
                  <div className="arrows__wrapper">
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                  </div>
                </div>




                <div className="matchs__content fade-in-up">

                  <Carousel options={matchSwiperOptions} >

                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={true}
                    />
                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={false}
                    />
                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={true}
                    />
                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={true}
                    />
                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={true}
                    />
                    <MatchCard 
                      team1="RSC Wasquehal"
                      team2="SCRA"
                      team1Score="4"
                      team2Score="2"
                      team1Logo=""
                      team2Logo=""
                      date="2023-03-05"
                      category="U20"
                      exterieur={true}
                    />

                  </Carousel>



                </div>


              </div>

              <div className="matchs__seeMore">
                <Button 
                  href="/"
                  className="secondary-button"
                >
                  Voir plus
                </Button>
              </div>

              <div className="matchs__wave">
                <svg width="1440" height="58" viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 49.3108L48 51.966C96 54.6212 192 59.9315 288 57.2763C384 54.6212 480 43.6211 576 35.6555C672 27.3106 768 22.0002 864 24.6554C960 27.3106 1056 38.3107 1152 43.6211C1248 49.3108 1344 49.3108 1392 49.3108H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V49.3108Z" fill="#383A4B"/>
                </svg>
              </div>

            </section>


            <section className="galeries section">
              <div className="galeries__container container">


                <div className="galeries__title__wrapper">
                  <div className="title">
                    <div className="title__bar"></div>
                    <h1>La galerie du club</h1>
                  </div>  
                  <div className="arrows__wrapper">
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                  </div>
                </div>




                <div className="galeries__content fade-in-up">
                  
                  <Carousel options={galerieSwiperOptions} >
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                    <GalerieCard 
                      src=""
                      description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                      date="2023-12-11"
                    />
                  </Carousel>

                
                  


                
                


                </div>


              </div>

              <div className="galeries__seeMore">
                <Button 
                  href="/"
                  className="secondary-button"
                >
                  Voir plus
                </Button>
              </div>
            </section>
            

            <section className="palmares section">
              <div className="palmares__container container">


                <div className="palmares__title__wrapper">
                  <div className="title">
                    <div className="title__bar"></div>
                    <h1>Le palmares</h1>
                  </div>  
                  <div className="arrows__wrapper">
                    <Arrow direction="left" />
                    <Arrow direction="right" />  
                  </div>
                </div>




                <div className="palmares__content fade-in-up">

                  <Carousel options={palmaresSwiperOptions} >

                    <TrophyCard
                      placement="1"
                      title="Championnat du monde"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />

                    <TrophyCard
                      placement="3"
                      title="Championnat du monde"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />

                    <TrophyCard
                      placement="2"
                      title="Championnat de France"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />

                    <TrophyCard
                      placement="4"
                      title="Championnat du monde"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />  
                    <TrophyCard
                      placement="4"
                      title="Championnat du monde"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />  
                    <TrophyCard
                      placement="4"
                      title="Championnat du monde"
                      season="2019 - 2020"
                      team="Pré Nationale"
                    />  

                  </Carousel>
                  
                
                </div>


              </div>

              <div className="palmares__seeMore">
                <a href="" className="secondary-button">
                  Voir plus
                </a>
              </div>

          
            </section>

          </main>

        <Footer />
        <Scroll />
      </body>
  </html>
  

}
  



