"use client";

export function Footer() {
  return <>
    <div className="footer_wrapper float_left">
        <div className="news_section">
            <div className="container">
            <div className="news_letter_wrapper float_left">
                <div className="lr_nl_heading_wrapper">
                <h2>subscribe Our Newsletter</h2>
                <p>Receive 15% Discount From Your First Order.</p>
                </div>
                <div className="lr_nl_form_wrapper">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
                </div>
            </div>
            </div>
        </div>
        <div className="section_2">
            <div className="section2_footer_overlay" />
            <div className="section2_footer_wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                    <div className="footer_widget section2_about_wrapper">
                    <div className="wrapper_first_image">
                        <a href="index.html">
                        <img
                            src="images/inner/btm_logo.png"
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
                    <a href="#">READ MORE</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                    <div className="footer_widget section2_blog_wrapper">
                    <h4>portfolio</h4>
                    <div className="ft_blog_wrapper1">
                        <div className="ft_blog_image">
                        <img
                            src="images/inner/bg1.jpg"
                            className="img-responsive"
                            alt="blog-img1_img"
                        />
                        </div>
                        <div className="ft_blog_text">
                        <h5>
                            <a href="#">Fusce Quisque gravida sitmi</a>
                        </h5>
                        <div className="ft_blog_date">June 20, 2023</div>
                        </div>
                    </div>
                    <div className="ft_blog_wrapper2">
                        <div className="ft_blog_image">
                        <img
                            src="images/inner/bg2.jpg"
                            className="img-responsive"
                            alt="blog-img2_img"
                        />
                        </div>
                        <div className="ft_blog_text">
                        <h5>
                            <a href="#">Cras vel dui vel orciarel</a>
                        </h5>
                        <div className="ft_blog_date">June 28, 2023</div>
                        </div>
                    </div>
                    </div>
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
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
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
            <div className="section2_bottom_wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div className="btm_foter_box">
                    <p>
                        <i className="fa fa-copyright" /> 2023 sporteyz. design by{" "}
                        <a href="index.html"> webstrot .</a>
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
                        {" "}
                        <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />{" "}
                        </a>{" "}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="close_wrapper"></div>
    </div>

  </>;
}