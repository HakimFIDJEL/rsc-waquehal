"use client";

export function Footer() {

    const year = new Date().getFullYear();
  return <>
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
                        src="/images/wasquehal/logoRSCBlanc.png"
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
                  <h4>Liens utiles</h4>
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
                  <h4>
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

  </>;
}