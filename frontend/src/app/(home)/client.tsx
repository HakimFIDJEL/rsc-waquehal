"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constant";
import MatchCard from "@/components/u/MatchCard";
import GalerieCard from "@/components/u/GalerieCard";
import NewCard from "@/components/u/NewCard";

type Match = {
  id: string
  team_enemy: string
  category: Category
  score_ally: number
  score_enemy: number
  localisation: string
  date: string
  createdAt: string
}

type Category = {
  id: string
  name: string
  createdAt: string
}

type Galerie = {
  id: string
  title: string
  image: string
  status: string
  createdAt: string
}


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


type Equipe = {
  id: string
  image: string
  category: string
  categoryId: string
  players : Player[]
  status: string
  createdAt: string
}

type Player = {
  id: number;
  name: string;
  captain: string;
}

type Trophees = {
  id: string
  ranking: number
  season: string
  title: string
  category: string
  status: boolean
  createdAt: string
}


export default function Index()
{

  const [matchs, setMatchs] = useState<Match[]>([]);
  const [matchsSliced, setMatchsSliced] = useState<Match[]>([]);
  const [galeries, setGaleries] = useState<Galerie[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [trophees, setTrophees] = useState<Trophees[]>([]);

  const year = new Date().getFullYear();

  const fetchData = async () => {

    try {
      const matchsFetched = await axios.get(`${Backend_URL}/match`);
      const galeriesFetched = await axios.get(`${Backend_URL}/galerie`);
      const newsFetched = await axios.get(`${Backend_URL}/news`);
      const equipesFetched = await axios.get(`${Backend_URL}/match-team`);
      const palmaresFetched = await axios.get(`${Backend_URL}/palmares`);

      setMatchsSliced(matchsFetched.data.slice(0, 3));

      setMatchs(matchsFetched.data);
      setGaleries(galeriesFetched.data.slice(0, 8));
      setNews(newsFetched.data.slice(0, 3));
      setEquipes(equipesFetched.data);
      setTrophees(palmaresFetched.data);

     
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

  return <>

    {/* Nav - Done*/}
    <div className="ft_navi_main_wrapper float_left" style={{ zIndex: 1000 }}>
      <div className="ft_logo_wrapper">
       
        <div className="resp_logo_wrapper d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <a href="#">
            <img src="/images/wasquehal/logoRSC.png" alt="logo" className="img-responsive" style={{ width: "100px", height: "100px" }} />
          </a>
          <div className="resp_menu">
            <div className="menu_toggle rotate" id="menu_toggle_icon">
              <i className="fa fa-angle-down" />
            </div>
            <div id="menu_open" className="menu_dropdown">
              <ul className="menu_wrapper menu_wrapper_2 menu_wrapper_resp">
                <li>
                  <a href="/" title="">
                    Accueil
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/galeries" title="">
                    Galerie
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/matchs" title="">
                    Résultats
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/actualites" title="">
                    Actualités
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/club" title="">
                    Club
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/regles" title="">
                    Règles
                  </a>
                </li>
                <li className="common_dropdown_wrapper float_left">
                  <a href="/contact" title="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ft_middle_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <a href="/" style={{ backgroundColor: "white",  marginTop: "20px" }}>
          <img src="/images/wasquehal/logoRSC.png" alt="logo" className="img-responsive" style={{ width: "100px", height: "100px" }} />
        </a>
      </div> */}
    </div>

    {/* Hero - Done*/}
    <div className="slider-area">
      <div className="fullscreen-container" style={{ width: "100vw", height: "100vh" }}>

        {/* First Cover that takes the full size and cover under the video for no overlapse */}
        <div className="fullscreen-bg bg-dark" style={{ width: "100%", height: "100%", position: "absolute", zIndex: "0"}}>
        </div>

        {/* Video in the background that takes the full screen */}
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: "1" }}
        >
          <source src="/images/hockey/video.mp4" type="video/mp4" />
        </video>

        {/* Shade cover for the video */}
        <div
          className="fullscreen-bg bg-dark"
          style={{ width: "100%", height: "100%", position: "absolute", zIndex: "2", opacity: "0.5" }}
        ></div>

        {/* Title & subtitle that fade in */}
        <div className="fullscreen-bg-title" style={{ zIndex: "3", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "Poppins" }}>
          <h1 style={{ color: "white", fontSize: "5.4em", textAlign: "center" }}>
            Rsc Wasquehal
          </h1>
          <p style={{ color: "white", fontSize: "2em", textAlign: "center", marginTop: "1rem", fontWeight: "200"  }}>
            Un club, une passion
          </p>
        </div>
           
      </div>

      <div className="menu_main_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block" style={{ zIndex: "5" }}>
        <ul className="menu_wrapper_2">
          <li>
            <a href="/" title="">
              Accueil
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/galeries" title="">
              Galerie
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/matchs" title="">
              Résultats
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/actualites" title="">
              Actualités
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/club" title="">
              Club
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/regles" title="">
              Règles
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/contact" title="">
              Contact
            </a>
          </li>
          <li className="common_dropdown_wrapper float_left">
            <a href="/" title="">
              <img src="/images/wasquehal/logoRSC.png" alt="logo" className="img-responsive" style={{ width: "100px", height: "100px" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Matchs - Done*/}
    <div className="upcoming_match_wrapper float_left" style={{ marginTop: 0, paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left">
              <h1>Les derniers matchs</h1>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">

           
            <MatchCard matches={matchsSliced} />

            {matchsSliced.length === 0 && <div className="alert alert-info w-100">Aucun match enregistré</div>}

            

          </div>


          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="upcoming_match_img float_left">
              <img
                src="/images/hockey/upmatch.jpg"
                className="img-responsive"
                alt="img"
              />
            </div>
          </div>

          <div className="hs_btn_wrapper cart_btn news_btn awerer" style={{marginTop: "3rem"}}>
            <a href="/matchs" className="btn btn-primary pl-5 pr-5">
              Voir plus
            </a>
          </div>


        </div>
      </div>
    </div>

    {/* Banner - Done*/}
    <div className="next_match_new float_left">
      <div className="next_match_overlay">
        <img src="" alt="" className="img-responsive" style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed" }} />
      </div>
     
    </div>

    {/* Gallery - Done*/}
    <div className="portfolio_grid float_left">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left heading_special">
              <h1>La galerie</h1>
            </div>
          </div>
        </div>
        <div className="row" style={{ height: "auto" }}>

          <GalerieCard galeries={galeries} />

          {galeries.length === 0 && <div className="alert alert-info w-100">Aucune image enregistrée</div>}

          <div className="hs_btn_wrapper cart_btn news_btn awerer">
            <a href="/galeries" className="btn btn-primary pl-5 pr-5">
              Voir plus
            </a>
          </div>
          
        </div>
      </div>
    </div>


    {/* Count - Done*/}
    <div className="counter_section float_left">
      <div className="counter-section">
        <div className="container text-center">
          <div className="row">


            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 pddddd">
              <div className="counter_cntnt_box float_left">
                <div className="tb_icon">
                  <div className="icon">
                    <a href="">
                      <i className="flaticon-cricket" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="count-description">
                <span className="timer">
                  {matchs.length}  
                </span>+
                <h5 className="con1"> Matchs Joués</h5>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 pddddd">
              <div className="counter_cntnt_box float_left">
                <div className="tb_icon">
                  <div className="icon">
                    <a href="">
                      <i className="flaticon-hockey-helmet" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="count-description">
                <span className="timer">4</span>+
                <h5 className="con2">Années d'existence</h5>
              </div>
            </div>



            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 pddddd">
              <div className="counter_cntnt_box float_left">
                <div className="tb_icon">
                  <div className="icon">
                    <a href="">
                      <i className="flaticon-cricket-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="count-description">
                <span className="timer">
                  {equipes.reduce((acc, equipe) => acc + equipe.players.length, 0)}  
                </span>+
                <h5 className="con2">Joueurs actifs</h5>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 pddddd">
              <div className="counter_cntnt_box float_left">
                <div className="tb_icon">
                  <div className="icon">
                    <a href="">
                      <i className="flaticon-trophy" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="count-description">
                <span className="timer">
                  {trophees.length}  
                </span>+
                <h5 className="con4">Trophés gagnés</h5>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>


    {/* News - Done*/}
    <div className="latest_news_wraper float_left" style={{ marginBottom: "560px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left heading_special">
              <h1>Les dernières actualités</h1>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ne_recent_left_side_wrapper float_left">
              <div className="row">

                <NewCard news={news} />

                {news.length === 0 && <div className="alert alert-info w-100">Aucune actualité enregistrée</div>}



                <div className="hs_btn_wrapper cart_btn news_btn awerer">
                  <a href="/actualites" className="btn btn-primary pl-5 pr-5">
                    Voir plus
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Footer - Todo*/}
    <div className="footer_wrapper float_left">
      
      {/* section-2 start*/}
      <div className="section_2">
        <div className="section2_footer_overlay" />

        <div className="section2_footer_wrapper">
          <div className="container">
            <div className="row">

              
              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-6">
                <div className="footer_widget section2_about_wrapper">
                  <div className="wrapper_first_image">
                    <a href="/">
                      <img
                        src="/images/wasquehal/logoRSC.png"
                        className="img-responsive"
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </a>
                  </div>
                  <div className="abotus_content">
                    <p>
                      Club de Rink hockey local, n'hésitez pas à découvrir ce sport peu connu.
                    </p>
                    <br />
                    <p>
                      Contactez-nous dès aujourd'hui pour en savoir plus sur la façon de devenir membre et de rejoindre notre équipe de champions ! 
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-1 col-md-6 col-xs-12 col-sm-6">
                
              </div>

              <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                <div className="footer_widget section2_useful_wrapper">
                  <h4 style={{color: "#fff"}}>Liens utiles</h4>
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-angle-right" />
                        Accueil
                      </a>
                    </li>
                    <li>
                      <a href="/galeries">
                        <i className="fa fa-angle-right" />
                        Galerie
                      </a>
                    </li>
                    <li>
                      <a href="/matchs">
                        <i className="fa fa-angle-right" />
                        Résultats
                      </a>
                    </li>
                    <li>
                      <a href="/actualites">
                        <i className="fa fa-angle-right" />
                        Actualités
                      </a>
                    </li>
                    <li>
                      <a href="/club">
                        <i className="fa fa-angle-right" />
                        Club
                      </a>
                    </li>
                    <li>
                      <a href="/regles">
                        <i className="fa fa-angle-right" />
                        Règles
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <i className="fa fa-angle-right" />
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-6">
                <div className="footer_widget section2_useful_second_wrapper">
                  <h4 style={{color: "#fff"}}>
                    Informations de contact
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-location-arrow" />
                      50 rue Lavoisier, 59290 Wasquehal
                    </li>
                    <li>
                      <i className="fa fa-phone-square" />
                      +33 6 87 06 07 96
                    </li>
                    <li>
                      <a href="mailto:rscw.sec@yahoo.com">
                        <i className="fa fa-envelope-square" />
                        rscw.sec@yahoo.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
        
        <div className="section2_bottom_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="btm_foter_box">
                  <p>
                    <i className="fa fa-copyright" /> {year} RSC-Wasquehal.
                  </p>
                  <ul className="aboutus_social_icons">
                    <li>
                      <a href="https://fr-fr.facebook.com/RSCWasquehal/" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@rscwasquehal2001" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/rscwasquehal/" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="close_wrapper"></div>
      {/* section-2 end */}
    </div>
  </>
}