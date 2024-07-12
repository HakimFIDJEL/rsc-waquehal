import React from 'react';

import { Arrow } from '@/components/elements/Arrow';
import { TrophyCard } from '@/components/elements/TrophyCard';
import { SponsorCard } from '@/components/elements/SponsorCard';
import { Button } from '@/components/forms/Button';

import  Carousel  from '@/components/elements/Carousel';
import { Autoplay } from 'swiper/modules';

export const metadata = {
    title: 'RSC Wasquehal - Club',
};


export default function Club()
{
    const palmaresSwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 4,
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

    const sponsorSwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 4,
        Autoplay: {
            delay: 5000,
        },
        loop : true,

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
          nextEl: '.sponsors .arrows__wrapper .arrow.right',
          prevEl: '.sponsors .arrows__wrapper .arrow.left',
        },
        
      };
    
    return <main className="club">

        <section className="hero section">
            <div className="hero__container">
                <div className="hero__content">
                <div className="hero__content__title fade-in-up">Le club</div>
                <div className="hero__content__description fade-in-up">L’archive de nos matchs passés et à venir.</div>
                </div>
                <div className="hero__cover"></div>
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
        
        
        
        
                <div className="palmares__content fade-in-up" id="palmares__slick">
                    
                    
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
    
    
        
        </section>


        <section className="organigramme section">

            <div className="container">
            <div className="organigramme__title__wrapper">
                <div className="title">
                <div className="title__bar"></div>
                <h1>L'organigramme</h1>
                </div>  
            </div>

            <div className="organigramme__content">


                <div className="title">
                <div className="circle">
                    <div className="circle__in fade-in"></div>
                </div>
                <h2>Bureau</h2>
                </div>
                <div className="description">
                    <span className="fade-in-left">
                    <div className="subtitle">Président</div>
                    <div className="name">Thomas Poillion</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Secrétaire</div>
                    <div className="name">Nathalie Bacqueville</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Trésorier</div>
                    <div className="name">Mathier Cazier</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Président d'honneur</div>
                    <div className="name">Franck Bacqueville</div>
                    </span>
                </div>

                <div className="title">
                <div className="circle">
                    <div className="circle__in fade-in"></div>
                </div>
                <h2>Sportifs</h2>
                </div>
                <div className="description">
                    <span className="fade-in-left">
                    <div className="subtitle">Entraineur N1F / N3 / Prénat / U20 et U18</div>
                    <div className="name">Aurélien Joly & Christophe Florencio</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Entraineur U16</div>
                    <div className="name">Sandrine Adams & Chloé DHaese</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Entraineur U14 et U12</div>
                    <div className="name">Maxime Roussel & Quentin Rousseau</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Ecole Patinage</div>
                    <div className="name">Nathalie Bacqueville, Maxime Roussel, Manon Roussel & Thomas Poillion</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Entraineur Gardien</div>
                    <div className="name">Paulo Martins & Thomas Poillion</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Entraineur Loisirs</div>
                    <div className="name">Sylvain Clément</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Responsable Arbitres</div>
                    <div className="name">Laurent Dhaese</div>
                    </span>
                </div>


                <div className="title">
                <div className="circle">
                    <div className="circle__in fade-in"></div>
                </div>
                <h2>Réstauration</h2>
                </div>
                <div className="description">
                    <span className="fade-in-left">
                    <div className="subtitle">Team Buvette</div>
                    <div className="name">Camille – Julie</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Team Repas</div>
                    <div className="name">Pascal – Carole – Stéphanie – Nathalie – Maryline</div>
                    </span>
                </div>


                <div className="title">
                <div className="circle">
                    <div className="circle__in fade-in"></div>
                </div>
                <h2>Résponsable matériel</h2>
                </div>
                <div className="description">
                    <span className="fade-in-left">
                    <div className="subtitle">Responsable Matériel</div>
                    <div className="name">Sylvain Clément</div>
                    </span>
                    <span className="fade-in-left">
                    <div className="subtitle">Responsable Communication</div>
                    <div className="name">Matthieu Cazier</div>
                    </span>
                </div>

                <div className="title">
                <div className="circle">
                    <div className="circle__in fade-in"></div>
                </div>

                <Button 
                    href="/"
                    className="btn primary-outline-button"
                >
                    Nous contacter 
                </Button>

                </div>

                







            </div>
            
            </div>

            <div className="organigramme__wave">
                <svg width="1440" height="58" viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 49.3108L48 51.966C96 54.6212 192 59.9315 288 57.2763C384 54.6212 480 43.6211 576 35.6555C672 27.3106 768 22.0002 864 24.6554C960 27.3106 1056 38.3107 1152 43.6211C1248 49.3108 1344 49.3108 1392 49.3108H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V49.3108Z" fill="#1C1D1F"/>
                </svg>
            </div>
        </section>



        <section className="section content">
            <div className="container">
                <div className="title">
                    <h2>Les règles</h2>
                </div>
                <div className="description">
                    <p className="fade-in-left">Créé en 1992, par Daniel Adams avec un groupe de passionnés. Il a d’abord fallu transformer les anciens terrains de tennis, laissés à l’abandon, en salle de Rink Hockey. De l’envie, ils en ont montré pour monter toute la piste historique en planches d’aggloméré… D’ailleurs, à peine montée, il fallait déjà tout réajuster avec l’humidité du canal, les planches s’étaient naturellement déformées.</p>
                    <p className="fade-in-left">Sans se décourager, l’équipe a peu a peu aménagé la salle avec une buvette, une table de marques … puis les abords de la salle en installant « LE » chalet sur le parking, servant de vestiaires, de club house, de rangements …
                        Et rapidement, le club s’est mis à l’honneur en décrochant un titre de champion de France féminin en 1996.</p>
                    <p className="fade-in-left">Pour Daniel, et l’équipe dirigeante, une chose comptait… développer le rink hockey au sein de Wasquehal. Et pour y arriver, cela ne pouvait passer que par la transmission de leur passion. Que ce soit sur la piste dès l’école de patinage pour former les futurs champions des équipes Elite, mais aussi en prenant le temps d’expliquer avec passion, les moindres détails de ce sport eu courant.</p>
                    <p className="fade-in-left">Franck Bacqueville a ensuite pris la suite, dans la lignée, et c’est ensuite Thomas Poillion. En 2017, lors des 25 ans du club, la salle de RinkHockey porte désormais le nom de Daniel Adams.</p>
                </div>
            </div>
        </section>


    

        <section className="sponsors section">
        <div className="sponsors__container container">


            <div className="sponsors__title__wrapper">
                <div className="title">
                    <div className="title__bar"></div>
                    <h1>Nos sponsors</h1>
                </div>  
                <div className="arrows__wrapper">
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                </div>
            </div>




            <div className="sponsors__content fade-in-up" id="sponsors__slick">

                <Carousel options={sponsorSwiperOptions} >

                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />
                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />
                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />
                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />
                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />
                    <SponsorCard
                        imgSrc=""
                        sponsor=""
                        href=""
                    />

                </Carousel>

            

            
            

            </div>


        </div>


        

        </section>
    </main>
}