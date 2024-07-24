"use client";

export function SideBar()
{
    return <>
        <div id="sidebar" className="bounce-to-right">
            <div id="toggle_close">×</div>
            <div id="cssmenu">
                <a href="index.html">
                <img src="/images/inner/logo.png" alt="logo" />
                </a>
                <ul className="sidebb">
                <li className="has-sub">
                    <a href="#">index</a>
                    <ul>
                    <li>
                        <a href="badminton.html">badminton</a>
                    </li>
                    <li>
                        <a href="index_baseball.html">baseball</a>
                    </li>
                    <li>
                        <a href="index_basketball.html">basketball</a>
                    </li>
                    <li>
                        <a href="index_cricket.html">cricket</a>
                    </li>
                    <li>
                        <a href="index_football.html">football</a>
                    </li>
                    <li>
                        <a href="index_hockey.html">hockey</a>
                    </li>
                    <li>
                        <a href="index_racing.html">racing</a>
                    </li>
                    <li>
                        <a href="index_rugby.html">rugby</a>
                    </li>
                    <li>
                        <a href="index_tenis.html">tenis</a>
                    </li>
                    <li>
                        <a href="index_wwe.html">Wwe</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="about_us.html">about us</a>
                </li>
                <li className="has-sub">
                    <a href="#">gallery</a>
                    <ul>
                    <li>
                        <a href="gallery_3column.html">gallery III</a>
                    </li>
                    <li>
                        <a href="gallery_4column.html">gallery IV</a>
                    </li>
                    <li>
                        <a href="gallery_fullwidth.html">gallery fullwidth</a>
                    </li>
                    <li>
                        <a href="gallery_masonry.html">gallery masonry</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">latest result</a>
                    <ul>
                    <li>
                        <a href="latest_result.html">result I</a>
                    </li>
                    <li>
                        <a href="latest_result_2.html"> result II</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">news</a>
                    <ul>
                    <li>
                        <a href="news.html">news</a>
                    </li>
                    <li>
                        <a href="news_details.html"> news details</a>
                    </li>
                    <li>
                        <a href="news_left_sidebar.html"> news left sidebar</a>
                    </li>
                    <li>
                        <a href="news_right_sidebar.html"> news right sidebar</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">players</a>
                    <ul>
                    <li>
                        <a href="our_players.html">our players</a>
                    </li>
                    <li>
                        <a href="player_details.html"> player details</a>
                    </li>
                    <li>
                        <a href="player_details_2.html"> player details II</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">pages</a>
                    <ul>
                    <li>
                        <a href="championship.html">championship</a>
                    </li>
                    <li>
                        <a href="ticket_booking.html">ticket booking</a>
                    </li>
                    <li>
                        <a href="next_match.html"> next match</a>
                    </li>
                    <li>
                        <a href="error.html">error 404</a>
                    </li>
                    <li>
                        <a href="login.html"> login</a>
                    </li>
                    <li>
                        <a href="register.html"> register</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">shop</a>
                    <ul>
                    <li>
                        <a href="shop_fullwidth.html">shop fullwidth</a>
                    </li>
                    <li>
                        <a href="shop_sidebar.html">shop sidebar</a>
                    </li>
                    <li>
                        <a href="product_single.html"> product single</a>
                    </li>
                    </ul>
                </li>
                <li className="has-sub">
                    <a href="#">contact us</a>
                    <ul>
                    <li>
                        <a href="contact_us.html">contact I</a>
                    </li>
                    <li>
                        <a href="contact_us_2.html">contact II</a>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
            <div className="btm_foter_box sidebar_btm_txt">
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
                <p>
                <i className="fa fa-copyright" /> 2023 sporteyz. design by
                <a href="index.html"> webstrot .</a>
                </p>
            </div>
        </div>

    </>
}