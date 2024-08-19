"use client";
import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";
import { Backend_URL } from "@/lib/Constant";
import axios from "axios";
import React from 'react';

type Activites = {
    id: string
    images: [Image]
    status: string
    name: string
    description: string
    website: string
    category: Category
    createdAt: string
}

type Image = {
    id: string
    url: string
    title: string
    createdAt: string
}

type Category = {
    id: string
    name: string
}

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';


export default function Index()
{

    const [activites, setActivites] = useState<Activites[]>([]);


    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState('');

    const fetchData = async () => {
        try {
            const activitesFetched = await axios.get(`${Backend_URL}/activity`);
            setActivites(activitesFetched.data);

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
            autoplay={{ delay: 5000 }}
            style={{ width: "100%", height: "100%", zIndex: "0" }}
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


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        console.log(name, email, message);

        // L'email doit être valide
        if (!email.includes('@') && !email.includes('.')) {
            setStatus('error');
            setLoading(false);
            return;
        }

        try {

            await axios.post(`${Backend_URL}/contact`, {
                name,
                email,
                message
            });

            setName('');
            setEmail('');
            setMessage('');
            setStatus('success');
            
        } catch (error) {
            console.log(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

    return <>
        <Hero 
            title="Nous contacter"
            breadcrumbs={[
                {
                title: "Accueil",
                link: "/"
                },
                {
                title: "Nous contacter",
                link: "/contact"
                }
            ]}
            image="/images/wasquehal/img4.jpg"
        />


        {/* Icônes de contact */}
        <div className="contact_icon_section float_left cont_2_wrapper">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="main cont_2">
                        <div className="rotate">
                        <i className="fa fa-map-marker" />
                        </div>
                        <h4>
                        Adresse
                        </h4>
                        <p>
                            <a href="https://maps.app.goo.gl/L95bRPag8b7b3UYeA" target="_blank">

                                50 rue Lavoisier
                                <br /> 59290, Wasquehal
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="main cont_2">
                    <div className="rotate">
                    <i className="fa fa-envelope" />
                    </div>
                    <h4>
                    <a href="#">Email</a>
                    </h4>
                    <p>
                    <a href="mailto:rscw.sec@yahoo.com" >
                        rscw.sec@yahoo.com
                    </a>
                    </p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="main cont_2">
                    <div className="rotate">
                    <i className="fa fa-phone" />
                    </div>
                    <h4>
                    <a href="#">Téléphone</a>
                    </h4>
                    <p>
                    +33 6 87 06 07 96
                    </p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="main cont_2">
                    <div className="rotate">
                    <i className="fa fa-globe" />
                    </div>
                    <h4>
                    <a href="#">Inscription</a>
                    </h4>
                    <p>
                        <a href="/Dossier-Inscription-2024-2025.pdf" className="btn btn-primary" style={{textTransform: 'none'}} download target="_blank">
                            Télécharger le formulaire
                        </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Formulaire de contact */}
        <div className="contact_wrapper float_left inner_contact_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ft_left_heading_wraper login_head text-center gallery_heading_center">
                            <h1>Nous contacter</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-pos">
                                        <div className="form-group i-name">
                                            <label className="sr-only">Nom</label>
                                            <input
                                                type="text"
                                                className="form-control require"
                                                name="name"
                                                id="namTen-first"
                                                placeholder="Nom complet*"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                required
                                                style={{textTransform: 'none'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-e">
                                        <div className="form-group i-email">
                                            <label className="sr-only">Email </label>
                                            <input
                                                type="email"
                                                className="form-control require"
                                                name="email"
                                                id="emailTen"
                                                placeholder="Adresse email *"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                required
                                                style={{textTransform: 'none'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* /.col-md-12 */}
                                <div className="col-md-12">
                                    <div className="form-m">
                                        <div className="form-group i-message">
                                            <label className="sr-only">Votre message</label>
                                            <textarea
                                                className="form-control require"
                                                name="message"
                                                rows={5}
                                                id="messageTen"
                                                placeholder="Votre message*"
                                                onChange={(e) => setMessage(e.target.value)}
                                                value={message}
                                                required
                                                style={{textTransform: 'none'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* /.col-md-12 */}
                                {status === 'success' && <div className="alert alert-success w-100 mt-4">Votre message a été envoyé avec succès</div>}
                                {status === 'error' && <div className="alert alert-danger w-100 mt-4">Une erreur s'est produite lors de l'envoi du message</div>}
                                <div className="col-md-12">
                                    <div className="tb_es_btn_div">
                                        <div className="tb_es_btn_wrapper cont_2_btn">
                                            <button type="submit" className="submitForm" disabled={loading}>
                                                Envoyer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Activités aux alentours */}
        <div className="portfolio_grid float_left" style={{marginBottom: '560px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper gallery_heading_center text-center">
                            <h1>Les activités aux alentours</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pi_3">



                {activites.map((activite) => (
                    <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 p-0 dribbbl`}>
                        <div className="portfolio_item">
                            <Carousel images={activite.images} />
                            <div className="portfolio_hover" style={{zIndex: "100"}}>
                                <a  style={{textTransform: "none"}}>
                                    {activite.category.name}
                                    <br />
                                    {activite.name}
                                    <span>
                                        {activite.description}
                                    </span>
                                </a>
                                <div className="zoom_popup">
                                    <a className="img-link" href={activite.website} target="_blank">
                                        <i className="flaticon-search" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 


                
            </div>
        </div>



        


    </>
  
}