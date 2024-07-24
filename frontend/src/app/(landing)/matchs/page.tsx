import React from 'react';

import { MatchCard } from '@/components/elements/MatchCard';
import { Arrow } from '@/components/elements/Arrow';
import { Button } from '@/components/forms/Button';

import  Carousel  from '@/components/elements/Carousel';

export const metadata = {
  title: 'RSC Wasquehal - Matchs',
};

export default function Matchs()
{

  const matchsToComeSwiperOptions = {
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
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },

    // navigation
    navigation: {
      nextEl: '.matchsToCome .arrows__wrapper .arrow.right',
      prevEl: '.matchsToCome .arrows__wrapper .arrow.left',
    },
    
  };
  const matchsLastSwiperOptions = {
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
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },

    // navigation
    navigation: {
      nextEl: '.matchsLast .arrows__wrapper .arrow.right',
      prevEl: '.matchsLast .arrows__wrapper .arrow.left',
    },
    
  };

  return <main className='matchs'>
    <section className="hero section">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content__title fade-in-up">LES MATCHS</div>
          <div className="hero__content__description fade-in-up">L’archive de nos matchs passés et à venir.</div>
        </div>
        <div className="hero__cover"></div>
      </div>
    </section>

    <section className="matchsToCome section">

      <div className="matchs__container container">


        <div className="matchs__title__wrapper">
          <div className="title">
            <div className="title__bar"></div>
            <h1>Les derniers matchs</h1>
          </div>  
          <div className="arrows__wrapper">
            <Arrow direction="left"/>
            <Arrow direction="right"/>
          </div>
        </div>




        <div className="matchs__content fade-in-up">
          
          <Carousel options={matchsToComeSwiperOptions} >
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
          </Carousel>
          
          




        </div>


      </div>
    </section>


    <section className="matchsLast section">
        <div className="matchs__container container">
  
  
          <div className="matchs__title__wrapper">
            <div className="title">
              <div className="title__bar"></div>
              <h1>Les derniers matchs</h1>
            </div>  
            <div className="arrows__wrapper">
              <Arrow direction="left"/>
              <Arrow direction="right"/>
            </div>
          </div>
  
  
  
  
          <div className="matchs__content fade-in-up" id="matchsLast__slick">
            
            <Carousel options={matchsLastSwiperOptions} >
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
  
       
  
        <div className="matchs__wave">
          <svg width="1440" height="58" viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 49.3108L48 51.966C96 54.6212 192 59.9315 288 57.2763C384 54.6212 480 43.6211 576 35.6555C672 27.3106 768 22.0002 864 24.6554C960 27.3106 1056 38.3107 1152 43.6211C1248 49.3108 1344 49.3108 1392 49.3108H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V49.3108Z" fill="#383A4B"/>
          </svg>
        </div>
  
    </section>


    <section className="teams section">
      <div className="teams__container container">
        <div className="teams__title__wrapper">
          <div className="title">
            <div className="title__bar"></div>
            <h1>Les équipes</h1>
          </div>  

          <form className="input__container" method="GET" action="">
            <input type="text" placeholder="Rechercher une équipe" />
            <ul className="">
              <li>Equipe 1</li>
              <li>Equipe 2</li>
              <li>Equipe 3</li>
            </ul>
            <Button 
              type="submit"
              className="scope primary-button"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z" stroke="white" strokeWidth="1.5"/>
                <path d="M17.5 17.5L21 21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Button>

          </form>

        </div>


        <div className="teams__content">
          <div className="team__image fade-in-left">
            <img src="" alt="" />
          </div>
  
          <table className="team__results fade-in-right">
            <thead>
              <tr>
                <th>
                  Equipe adverse
                </th>
                <th>
                  Résultat
                </th>
                <th>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="win">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
              <tr className="lose">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
              <tr className="equal">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
              <tr className="win">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
              <tr className="win">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
              <tr className="lose">
                <td>Partis Saint Germain - U16</td>
                <td>Victoire (5-2)</td>
                <td>10/22</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>






    </section>


    <section className="players section">
      <div className="players__container container">
        <div className="delimiter"></div>
        <ul>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li className="captain">John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
        </ul>
        <div className="delimiter"></div>
      </div>
    </section>

  </main>;

}
    
    