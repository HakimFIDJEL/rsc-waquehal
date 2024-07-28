"use client";

export function SideBar()
{
    const year = new Date().getFullYear();

    return <>
        <div id="sidebar" className="bounce-to-right">
            <div id="toggle_close">×</div>
            <div id="cssmenu">
                <a href="/">
                    <img src="/images/wasquehal/logoRSC.png" alt="logo" style={{ width: "100px", height: "100px" }} className="img-responsive" />
                </a>
                <ul className="sidebb">

                    
                
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/galeries">Galerie</a>
                    </li>
                    <li>
                        <a href="/matchs">Résultats</a>
                    </li>
                    <li>
                        <a href="/actualites">Actualités</a>
                    </li>
                    <li>
                        <a href="/club">Club</a>
                    </li>
                    <li>
                        <a href="/regles">Règles</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                
                </ul>
            </div>
            <div className="btm_foter_box sidebar_btm_txt">
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
                <p>
                <i className="fa fa-copyright" /> {year} RSC Wasquehal. 
                </p>
            </div>
        </div>

    </>
}