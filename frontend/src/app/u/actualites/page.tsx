import React from 'react';

import { ActuCard } from '@/components/elements/ActuCard';
import { Arrow } from '@/components/elements/Arrow';

import { Button } from '@/components/forms/Button';
import { Input } from '@/components/forms/Input';

import  Carousel  from '@/components/elements/Carousel';

export const metadata = {
  title: 'RSC Wasquehal - Actualites',
};


export default function Actualites()
{

  const actuSwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 3,

    grid: {
        rows: 2,
        fill: 'row',
    },

    // responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },

    // navigation
    navigation: {
      nextEl: '.news .news__arrows__buttons .arrow.right',
      prevEl: '.news .news__arrows__buttons .arrow.left',
    },

    // pagination
    pagination: {
      el: '.news .news__arrows__buttons .buttons__container',
      clickable: true,
      
    },

    
  };

  return <main className="news-index">
    <section className="hero section">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__content__title fade-in-up">LES Actualités</div>
            <div className="hero__content__description fade-in-up">Afin de rester à jour avec les infos du club</div>
          </div>
          <div className="hero__cover"></div>
        </div>
    </section>

    <section className="section news">
        <div className="container">
            <div className="news__title__wrapper">
                <div className="title">
                  <div className="title__bar"></div>
                  <h1>Les actualités</h1>
                </div>  
      
                <form className="input__container" method="GET" action="">
                  <Input 
                    type="text" 
                    placeholder="Rechercher une actualité"
                  />
                  <ul className="">
                    <li>Actu 1</li>
                    <li>Actu 2</li>
                    <li>Actu 3</li>
                  </ul>

                    <Button 
                      className="secondary-button" 
                      type="submit"
                    >
                      <Arrow direction="right" />
                    </Button>
      
                </form>
      
            </div>


            <div className="news__content__wrapper">



              <div className="news__last__wrapper">


                <div className="news__last left">
                  <div className="news__img fade-in-left">
                    <img src="" alt="" />
                  </div>
                  <div className="news__description fade-in-right">
                    <div className="news__title">Titre de l'actualité</div>
                    <div className="news__button">
                      <a href="" className="btn secondary-button">En savoir plus</a>
                    </div>
                  </div>
                </div>
                <div className="news__last right">
                  <div className="news__img fade-in-right">
                    <img src="" alt="" />
                  </div>
                  <div className="news__description fade-in-left">
                    <div className="news__title">Titre de l'actualité</div>
                    <div className="news__button">
                      <a href="" className="btn secondary-button">En savoir plus</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="news__wrapper">



                  <Carousel options={actuSwiperOptions} >
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                  
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    




                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                  <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    





                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                    
                    <ActuCard
                      imgSrc=""
                      title="Titre de l'actualité"
                      date="2023-11-11"
                      href="/"
                    />
                  
                  </Carousel>




              </div>

              <div className="news__arrows__buttons">
                  <Arrow direction="left" />

                  <div className="buttons__container">

                  </div>


                  <Arrow direction="right" />
              </div>



            </div>

        </div>
    </section>
  </main>

}

    



  
    



  

