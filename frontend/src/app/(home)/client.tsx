"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constant";
import MatchCard from "@/components/u/MatchCard";

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
  status: string
  createdAt: string
}


type Image = {
  id: string
  url: string
  title: string
  createdAt: string
}

export default function Index()
{

  const [matchs, setMatchs] = useState<Match[]>([]);
  const [galeries, setGaleries] = useState<Galerie[]>([]);
  const [news, setNews] = useState<News[]>([]);

  const fetchData = async () => {

    try {
      const matchs = await axios.get(`${Backend_URL}/match`);
      const galeries = await axios.get(`${Backend_URL}/galerie`);
      const news = await axios.get(`${Backend_URL}/news`);

      setMatchs(matchs.data.slice(0, 3));
      setGaleries(galeries.data.slice(0, 8));
      setNews(news.data.slice(0, 3));

      console.log('matchs', matchs.data);
      console.log('galeries', galeries.data);
      console.log('news', news.data);

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
    <div className="ft_navi_main_wrapper float_left">
      <div className="ft_logo_wrapper">
       
        <div className="resp_logo_wrapper d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <a href="#">
            <img src="/images/hockey/logo2.png" alt="logo" />
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
      <div className="ft_middle_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <a href="index.html">
          <img src="/images/hockey/logo.png" alt="logo" />
        </a>
      </div>
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
        </ul>
      </div>
    </div>

    {/* Matchs - Todo*/}
    <div className="upcoming_match_wrapper float_left" style={{ marginTop: 0, paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left">
              <h1>Les derniers matchs</h1>
              <img src="images/hockey/heading_icon.png" alt="icon" />
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">

           
            <MatchCard matches={matchs} />


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
        </div>
      </div>
    </div>

    {/* Banner - Todo*/}
    <div className="next_match_new float_left">
      <div className="next_match_overlay">
        <img src="" alt="" className="img-responsive" style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed" }} />
      </div>
     
    </div>

    {/* Gallery - Todo*/}
    <div className="portfolio_grid float_left">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left heading_special">
              <h1>La galerie</h1>
              <img src="/images/hockey/heading_icon.png" alt="icon" />
            </div>
          </div>
        </div>
        <div className="row portfoli_inner">

          {/* Element à répéter */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="portfolio_item">
              <img src="images/hockey/pic1.jpg" alt="" />
              <div className="portfolio_hover">
                <a href="#"> hockey world cup 2023</a>
                <div className="zoom_popup">
                  <a className="img-link" href="images/hockey/pic1.jpg">
                    <i className="flaticon-magnifier" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    {/* Count - Todo*/}
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
                <span className="timer">230</span>+
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
                <span className="timer">60</span>+
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
                <span className="timer">27</span>+
                <h5 className="con4">Trophés gagnés</h5>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>


    {/* News - Todo*/}
    <div className="latest_news_wraper float_left" style={{ marginBottom: "560px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_left heading_special">
              <h1>Les dernières actualités</h1>
              <img src="images/hockey/heading_icon.png" alt="icon" />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ne_recent_left_side_wrapper float_left">
              <div className="row">

                {/* Element à répéter */}
                <div className="col-md-12">
                  <div className="ne_re_left_bottom_main_wrapper aa">
                    <div className="ne_re_bottom_img">
                      <div className="news_overlay" />
                      <img src="images/hockey/ne1.jpg" alt="rs_img" />
                      
                    </div>
                    <div className="ne_re_bottom_img_cont">
                      <h1>the world championship</h1>
                      <p style={{visibility: "hidden"}}>
                        <i className="fa fa-map-marker" />
                        New Salford Road, Uk, M6 7AF
                      </p>
                      <p className="cntnt_pp">
                        Atletico had some success in friendlies in 2012 and 2013.
                        The team won 1–0 in Italy on February 29, 2012, the team's
                        first ever win over Italy. On June 2, 2013, the U.S. played
                        a friendly against Germany at a sold out RFK Stadium.
                      </p>
                      <div className="news_bottom_text float_left">
                        <div className="news_text_left">
                          <div className="adminActions" style={{visibility: "hidden"}}>
                            <input
                              type="checkbox"
                              name="adminToggle"
                              className="adminToggle"
                            />
                            <a className="adminButton" href="#!">
                              <i className="fa fa-share-alt" />
                            </a>
                            <div className="adminButtons">
                              <a href="#" title="Add Company">
                                <i className="fa fa-facebook-f" />
                              </a>
                              <a href="#" title="Add User">
                                <i className="fa fa-linkedin" />
                              </a>
                              <a href="#" title="Edit Company">
                                <i className="fa fa-twitter" />
                              </a>
                              <a href="#" title="Edit User">
                                <i className="fa fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="news_text_center">
                          <p>MONDAY 08:00 PM</p>
                        </div>
                        <div className="news_text_right">
                          <div className="hs_btn_wrapper cart_btn news_btn">
                            <a href="#" className="hocky_btn ckeck_btn">
                              <div className="btn-front">En savoir plus</div>
                              <div className="btn-back">En savoir plus</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hs_btn_wrapper cart_btn news_btn awerer">
                  <a href="/actualites" className="hocky_btn ckeck_btn">
                    <div className="btn-front">Voir plus</div>
                    <div className="btn-back">Voir plus</div>
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
                    <a href="index.html">
                      <img
                        src="images/hockey/logo.png"
                        className="img-responsive"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="abotus_content">
                    <p>
                      Fusce et sem elementum, mis nibh nec, tincidunt ipsum etiau
                      euntum, mis nibh nec, tincid ctor.
                    </p>
                    <p>
                      Cras vel dui vel orciarel gravida.rpis. Quisque sitmi
                      tincidunt ipsum etiau.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-1 col-md-6 col-xs-12 col-sm-6">
                
              </div>

              <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                <div className="footer_widget section2_useful_wrapper">
                  <h4>useful links </h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        About academy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        academy profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        academy team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        events
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        played matches
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-6">
                <div className="footer_widget section2_useful_second_wrapper">
                  <h4>
                    contact <span> info </span>
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-location-arrow" />
                      Timposn, Suite 247 USA
                    </li>
                    <li>
                      <i className="fa fa-flag" /> ABN 11 119 159 741
                    </li>
                    <li>
                      <i className="fa fa-phone-square" />
                      +61 3 8376 6284
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-square" />
                        info@example.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
        
        {/* Do Links */}
        <div className="section2_bottom_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="btm_foter_box">
                  <p>
                    <i className="fa fa-copyright" /> 2024 RSC-Wasquehal.
                  </p>
                  <ul className="aboutus_social_icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
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