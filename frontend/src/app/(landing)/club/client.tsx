"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";

import { Backend_URL } from "@/lib/Constant";
import axios from "axios";

import { Trophy } from "lucide-react";

type Trophees = {
    id: string
    ranking: number
    season: string
    title: string
    category: string
    status: boolean
    createdAt: string
}

type Sponsors = {
    id: string
    status: string
    name: string
    image: string
    website: string
    created_at: string
}


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';

export default function Index()
{
    const [trophees, setTrophees] = useState<Trophees[]>([]);
    const [sponsors, setSponsors] = useState<Sponsors[]>([]);

    const fetchData = async () => {

        try {
            const palmaresFetched = await axios.get(`${Backend_URL}/palmares`);
            const sponsorsFetched = await axios.get(`${Backend_URL}/sponsor`);

            setTrophees(palmaresFetched.data);
            setSponsors(sponsorsFetched.data);
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

    const getTrophyColor = (ranking: number): string => {
        switch (ranking) {
            case 1:
                return "#FFD700"; // Or
            case 2:
                return "#C0C0C0"; // Argent
            case 3:
                return "#CD7F32"; // Bronze
            default:
                return "#808080"; // Gris
        }
    }
    
 
    const TrophyCarousel = ({ trophees }: { trophees: Trophees[] }) => (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 5000 }}
            style={{ width: "100%", height: "100%" }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }}
        >
            {trophees
                .filter(trophee => trophee.status !== false)
                .map((trophee, index) => (
                <SwiperSlide key={index} style={{ height: "350px" }}>
                    <div className="item" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className="trophyslider_wrapper float_left">
                            <Trophy size={80} color={getTrophyColor(trophee.ranking)} />
                            <p style={{ whiteSpace: "nowrap" }}>
                                {trophee.title} ({trophee.ranking} e)<br />
                                {trophee.category} <br />
                            </p>
                        </div>
                        <div className="portfolio_hover">
                            {trophee.season}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )

    const SponsorCarousel = ({ sponsors }: { sponsors: Sponsors[] }) => (
            
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 5000 }}
                style={{ width: "100%", height: "100%" }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
            >
                {sponsors
                    .filter(sponsor => sponsor.status !== 'false')
                    .map((sponsor, index) => (
                    <SwiperSlide key={index} style={{ height: "350px" }}>
                        <div className="item" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <a href={sponsor.website}>
                                <div className="trophyslider_wrapper float_left">
                                    <img src={`${Backend_URL}${sponsor.image}`} alt={`${sponsor.name}`} className="img-responsive w-100" />
                                </div>
                                {sponsor.name}
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )



    return <>
      <Hero 
        title="Le club"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "Le club",
            link: "/club"
          }
        ]}
        image="/images/wasquehal/img1.jpg"
      />

        {/* Qui sommes nous ? */}
        <div className="iner_about_wrapper float_left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about_slider_wrapper float_left">
                            <div className="item">
                                <div className="about_image">
                                    <img
                                        src="/images/wasquehal/img6.jpg"
                                        className="img-responsive w-100"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about_welcome_content float_left">
                            <h1>Qui sommes-nous ?</h1>
                            <p>
                                Bienvenue à votre club de Rink-Hockey local, offrant des installations de première classe pour tous les niveaux de jeu. Rejoignez-nous pour des formations personnalisées, des tournois passionnants et des événements sociaux amusants. Contactez-nous dès aujourd'hui pour en savoir plus sur la façon de devenir membre et de rejoindre notre équipe de champions ! 
                            </p>
                            <ul className="welcome_link">
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Un club familial
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Une inscription rapide et facile
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Des formations personnalisées
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Des tournois passionnants
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Notre organigramme */}
        <div className="our_history_wrapper float_left">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper gallery_heading_center text-center">
                            <h1>Notre oranigramme</h1>
                        </div>
                    </div>
                    <div className="col-md-12 pdtpp">
                        <div className="welcome_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#role1">
                                        Bureau
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#role2">
                                        Sportifs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#role3">
                                        Réstauration
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#role4">
                                        Résponsables matériels
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content about_tab_content">
                            <div id="role1" className="tab-pane active">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Bureau
                                            </h1>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Président : Thomas Poillion (contact : 06 87 06 07 96)
                                                    </li>
                                                    <li>
                                                        Secrétaire : Nathalie Bacqueville
                                                    </li>
                                                    <li>
                                                        Trésorier : Matthieu Cazier (contact : 06 69 22 85 40)
                                                    </li>
                                                    <li>
                                                        Président d’honneur : Franck Bacqueville
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="role2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Sportifs
                                            </h1>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Entraineur N1F / N3 / Prénat / U20 et U18 : Aurelien Joly & Christophe Florencio
                                                    </li>
                                                    <li>
                                                        Entraineur U16 : Sandrine Adams & Chloé DHaese
                                                    </li>
                                                    <li>
                                                        Entraineur U14 : Maxime Roussel & Quentin Rousseau
                                                    </li>
                                                    <li>
                                                        Entraineur U12 : Maxime Roussel & Quentin Rousseau
                                                    </li>
                                                    <li>
                                                        Ecole Patinage : Nathalie Bacqueville, Maxime Roussel, Manon Roussel & Thomas Poillion
                                                    </li>
                                                    <li>
                                                        Entraineur Gardien : Paulo Martins & Thomas Poillion
                                                    </li>
                                                    <li>
                                                        Entraineur Loisirs : Sylvain Clément
                                                    </li>
                                                    <li>
                                                        Responsable Arbitres : Laurent DHaese
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="role3" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Réstauration
                                            </h1>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Team Buvette : Camille – Julie
                                                    </li>
                                                    <li>
                                                        Team Repas : Pascal – Carole – Stéphanie – Nathalie – Maryline
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="role4" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Résponsables matériels
                                            </h1>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Responsable Matériel : Sylvain Clément
                                                    </li>
                                                    <li>
                                                        Responsable Communication : Matthieu Cazier
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Palmarès */}
        {trophees && (

            <div className="trophy_wrapper float_left" style={{ background: "#343a40" }}>
                <div className="dream_overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ft_left_heading_wraper gallery_heading_center text-center">
                                <h1 style={{ color: "#fff" }}>
                                    Palmarès
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trophy_slider">
                                <TrophyCarousel trophees={trophees} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}

        
        {/* Nos partenaires */}
        {trophees && (
            <div className="trophy_wrapper float_left" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ft_left_heading_wraper gallery_heading_center text-center">
                                <h1 >
                                    Nos sponsors
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trophy_slider">
                                <SponsorCarousel sponsors={sponsors} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}

        {/* Notre histoire */}
        <div className="our_history_wrapper float_left" style={{ marginBottom: "560px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper gallery_heading_center text-center">
                            <h1>Notre histoire</h1>
                        </div>
                    </div>
                    <div className="col-md-12 pdtpp">
                        <div className="welcome_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#history1">
                                        Création
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#history2">
                                        Développement
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="tab-content about_tab_content">
                            <div id="history1" className="tab-pane active">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Création
                                            </h1>
                                            <p>
                                                Créé en 1992, par Daniel Adams avec un groupe de passionnés. Il a d’abord fallu transformer les anciens terrains de tennis, laissés à l’abandon, en salle de Rink Hockey. De l’envie, ils en ont montré pour monter toute la piste historique en planches d’aggloméré… D’ailleurs, à peine montée, il fallait déjà tout réajuster avec l’humidité du canal, les planches s’étaient naturellement déformées. Sans se décourager, l’équipe a peu a peu aménagé la salle avec une buvette, une table de marques … puis les abords de la salle en installant « LE » chalet sur le parking, servant de vestiaires, de club house, de rangements …
                                            </p>
                                            <p>
                                                Et rapidement, le club s’est mis à l’honneur en décrochant un titre de champion de France féminin en 1996. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="history2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Développement
                                            </h1>
                                            <p>
                                                Pour Daniel, et l’équipe dirigeante, une chose comptait… développer le rink hockey au sein de Wasquehal. Et pour y arriver, cela ne pouvait passer que par la transmission de leur passion. Que ce soit sur la piste dès l’école de patinage pour former les futurs champions des équipes Elite, mais aussi en prenant le temps d’expliquer avec passion, les moindres détails de ce sport eu courant. 
                                            </p>
                                            <p>
                                                Franck Bacqueville a ensuite pris la suite, dans la lignée, et c’est ensuite Thomas Poillion. En 2017, lors des 25 ans du club, la salle de RinkHockey porte désormais le nom de Daniel Adams. 
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