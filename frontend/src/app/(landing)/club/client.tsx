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
        image=""
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
                                        src="/images/inner/abt1.jpg"
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
                                Un texte décrivant le club
                            </p>
                            <ul className="welcome_link">
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Information 1
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Information 2
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Information 3
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Information 4
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fa fa-check-circle" />
                                    Information 5
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
                                        Rôle 1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#role2">
                                        Rôle 2
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
                                                Rôle 1
                                            </h1>
                                            <p>
                                                Du texte et encore du texte
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="role2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Rôle 2
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
                                        Histoire 1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#history2">
                                        Histoire 2
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
                                                Histoire 1
                                            </h1>
                                            <p>
                                                Du texte et encore du texte
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
                                                Histoire 2
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