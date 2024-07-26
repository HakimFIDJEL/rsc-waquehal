"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";

import { Backend_URL } from "@/lib/Constant";
import axios from "axios";

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


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';

export default function Show({ id } : { id: string }) {

    const [news, setNews] = useState<News>();

    const fetchData = async () => {

        try {
            const galeriesFetched = await axios.get(`${Backend_URL}/news/${id}`);

            setNews(galeriesFetched.data);

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
            navigation
            autoplay={{ delay: 5000 }}
            style={{ width: "100%", height: "100%" }}
            onClick={(swiper) => {
                const url = images[swiper.clickedIndex].url;
                window.open(`${Backend_URL}${url}`, '_blank');
            }}
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

    return <>
      <Hero 
        title={news?.title || ""}
        breadcrumbs={[
            {
                title: "Accueil",
                link: "/"
            },
            {
                title: "Les actualités",
                link: "/actualites"
            },
            {
                title: news?.title || "",
                link: `/actualites/${id}`
            }   
        ]}
        image=""
      />

  

    <div className="news_wrapper float_left">
        <div className="container">
            <div className="row">
               
              <div className="news_wrapper float_left blog_btm_padder">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <article className="news-post-wrapper clearfix">
                        <header className="single_entry_header">
                          <div className="row">
                            <div className="col-lg-2 col-md-2">
                              <div className="avatar">
                                <img className="" src="images/inner/avatar1.jpg" alt="img" />
                              </div>
                            </div>
                            <div className="col-md-10 col-md-10 post_info_wrapper">
                              <div className="post_info clearfix">
                                <h4 className="entry-title">
                                  <a href="#">John due </a>
                                </h4>
                                {/* /.entry-title */}
                                <div className="entry-meta">
                                  <ul>
                                    <li>
                                      <span className="posted-date">
                                        <a href="#">
                                          <i className="fa fa-calendar" />
                                          12 Nov, 2022
                                        </a>
                                      </span>
                                    </li>
                                    <li>
                                      <span className="posted-in">
                                        {" "}
                                        <a href="#">
                                          <i className="fa fa-comments" /> 245{" "}
                                        </a>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                {/* /.entry-meta */}
                              </div>
                            </div>
                          </div>
                        </header>
                        {/* /.entry-header */}
                        <div className="single-post-thumbnail">
                          <span className="post_thumbnail_icon">
                            <i className="fa fa-image" />
                          </span>
                          <img
                            src="images/inner/news_single1.jpg"
                            className="img-responsive"
                            alt="Image"
                          />
                        </div>
                        {/* /.post-thumbnail */}
                        <div className="news-content float_left">
                          <div className="entry-content">
                            <h4 className="entry-title">
                              <a href="#">Professional Soccer Advice team worldcup</a>
                            </h4>
                            {/* /.entry-title */}
                            <p>
                              Estibulum vitae fringilla in, rhoncus luctus ante. Integer
                              porttitor fringilla vestibulum. Phasellus curs our tinnt nulla,
                              ut ttis augue finibus ac. Vivamus elementum enim ac enim
                              ultrices rhoncus. Duis et nibh blat, eifend liberost amet,
                              suscipit enim. Sed rutrum posuere orci.Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit. Vivamus auctor lacinia
                              pellentesque. Vivamus et tellus in urna us porttitor. Sed auctor
                              ut nunc in pulvinar. Fusce lacinia, velit vitae pharetra
                              porttitor, nunc libero sollicitudin odio, quis iaculis tortor
                              ligula feugiat ex. Nam ut cursus mi. Nullam eu erat in justo
                              euismod ultrices ut id enim.
                            </p>
                            <div className="entry_content_border">
                              <p>
                                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate.
                              </p>
                            </div>
                            <p>
                              Duis et nibh blat, eifend liberost amet, suscipit enim. Sed
                              rutrum suere orci. Lorem ipsum dolor sitt amet. This is
                              Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                              auctor aliqet. Aenean sollicitudin, lorem quis bibendum.
                            </p>
                            <ul className="m-40">
                              <li>
                                <i className="fa fa-check" />
                                <a href="#">
                                  Sollicitudin, lorem quis bibendum auctor, nisi elit
                                  consequat
                                </a>
                              </li>
                              <li>
                                <i className="fa fa-check" />
                                <a href="#">
                                  Lorem quis bibendum auctor elit consequat Sollicitudin nibh.
                                </a>
                              </li>
                              <li>
                                <i className="fa fa-check" />
                                <a href="#">
                                  Sed rutrum suere orci. Lorem ipsum dolor sitt amet gravida.
                                </a>
                              </li>
                              <li>
                                <i className="fa fa-check" />
                                <a href="#">
                                  Nisi Elit Consequat Sollicitudin Bibendum Auctor Aenean.
                                </a>
                              </li>
                            </ul>
                            <p>
                              Duis et nibh blat, eifend liberost amet, suscipit enim. Sed
                              rutrum suere orci. Lorem ipsum dolor sitt amet. This is
                              Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                              auctor aliqet. Aenean sollicitudin, lorem quis bibendum.
                            </p>
                            <div className="entry_content_img_wrapper m-40">
                              <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                  <div className="entry_content_img img_left">
                                    <img src="images/inner/news_single2.jpg" alt="Image" />
                                  </div>
                                  {/* /.post-thumbnail */}
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                  <div className="entry_content_text">
                                    <p>
                                      This is Photoshop's version of Lorem Ipsum. Proin
                                      gravida nibh vel velit auctor rem quis bibendum auctor,
                                      nisi elit consequat ipsum, nec sagittis sem nibh id
                                      elit. Duis sed odio sit ametSed rutrum suere orci. Lorem
                                      ipsum dolor sitt amet. This is Photoshop's Lorem Ipsum.
                                      Proin gravida nibh vel velit auctor aliqet. Aenean
                                      sollicitudin, lorem quis bibendum.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="entry_content_img_wrapper m-40">
                              <div className="row">
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                  <div className="entry_content_text">
                                    <p>
                                      This is Photos consequat ipsum, nec sagittis sem nibh id
                                      elit. Duis sed odio sit amhop's version of Lorem Ipsum.
                                      Proin gravida nibh vel velit auctor aliquet. Aenean
                                      sollicitudin, lorem quis bibendum auctor, nisi elit
                                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                                      odio sit amet nibh vulputate.Duis et nibh blat, eifend
                                      liberost amet, suscipit enim. Sed rutrum suere orci.
                                      Lorem ipsum dolor sitt amet. m.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                  <div className="entry_content_img img_right">
                                    <img src="images/inner/news_single3.jpg" alt="Image" />
                                  </div>
                                  {/* /.post-thumbnail */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /.entry-content */}
                        </div>
                        {/* /.blog-content */}
                      </article>
                      {/* blog_post_bottom_wrapper start */}
                      <div className="blog_post_bottom_wrapper float_left">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                            <div className="share_icons float_left">
                              Share:
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-google-plus" aria-hidden="true" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-vimeo" aria-hidden="true" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-instagram" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-youtube" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                            <div className="tags float_left">
                              Tags:
                              <ul>
                                <li>
                                  <a href="#">sports </a>
                                </li>
                                <li>
                                  <a href="#">highlights</a>
                                </li>
                                <li>
                                  <a href="#">interviews</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* blog_post_bottom_wrapper end */}
                      {/* comments_wrapper start */}
                      <div className="comments_wrapper">
                        <h4>Comments (03)</h4>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div className="comments_Box">
                              <div className="img_wrapper">
                                <img
                                  src="images/inner/author1.jpg"
                                  className=""
                                  alt="author_img"
                                />
                              </div>
                              <div className="text_wrapper">
                                <div className="author_detail">
                                  <span className="author_name"> Jhon Doe </span>
                                  <span className="publish_date">25 August, 2022 </span>
                                </div>
                                <div className="author_content">
                                  <p>
                                    Integer porttitor fringilla vestibulum. Phasellus curs our
                                    tinnt nulla, ut mattis augue finibus ac. Vivamus elementum
                                    enim ac enim ultrices rhoncus.{" "}
                                  </p>
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div className="comments_Box">
                              <div className="row">
                                <div className="col-lg-11 col-md-12 col-12 col-sm-12 col-lg-offset-1">
                                  <div className="img_wrapper">
                                    <img
                                      src="images/inner/author2.jpg"
                                      className=""
                                      alt="author_img"
                                    />
                                  </div>
                                  <div className="text_wrapper">
                                    <div className="author_detail">
                                      <span className="author_name"> Steffa Ferello </span>
                                      <span className="publish_date"> July 1, 2022 </span>
                                    </div>
                                    <div className="author_content">
                                      <p>
                                        Integer porttitor fringilla vestibulum. Phasellus curs
                                        our tinnt nulla, ut mattis augue finibus ac. Vivamus
                                        elementum enim ac enim ultrices rhoncus.{" "}
                                      </p>
                                      <a href="#">Reply</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div className="comments_Box last_comment_box">
                              <div className="img_wrapper">
                                <img
                                  src="images/inner/author4.jpg"
                                  className=""
                                  alt="author_img"
                                />
                              </div>
                              <div className="text_wrapper">
                                <div className="author_detail">
                                  <span className="author_name"> Eva Marilla </span>
                                  <span className="publish_date"> July 5, 2022 </span>
                                </div>
                                <div className="author_content">
                                  <p>
                                    Integer porttitor fringilla vestibulum. Phasellus curs our
                                    tinnt nulla, ut mattis augue finibus ac. Vivamus elementum
                                    enim ac enim ultrices rhoncus.{" "}
                                  </p>
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* comments_wrapper end */}
                      {/* comments_form start */}
                      <div className="comments_form">
                        <h4>Leave A Comment</h4>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="formsix-pos">
                              <div className="form-group i-name">
                                <label className="sr-only">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name *"
                                />
                              </div>
                            </div>
                          </div>
                          {/* /.col-md-6 */}
                          <div className="col-md-6">
                            <div className="formsix-e">
                              <div className="form-group i-email">
                                <label className="sr-only">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email Address *"
                                />
                              </div>
                            </div>
                          </div>
                          {/* /.col-md-6 */}
                          <div className="col-md-12">
                            <div className="formsix-m">
                              <div className="form-group i-message">
                                <label className="sr-only">Message</label>
                                <textarea
                                  className="form-control"
                                  rows={6}
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="tb_es_btn_div contact_wrapper">
                              <div className="tb_es_btn_wrapper">
                                <button type="button">submit</button>
                              </div>
                            </div>
                          </div>
                          {/* /.col-md-12 */}
                        </div>
                        {/* /.row*/}
                      </div>
                      {/* /.comments_form*/}
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 left_sidebar_wrapper">
                      <div className="sidebar_widget">
                        <div className="widget_heading">
                          <h2>Search</h2>
                        </div>
                        <form className="search_form" role="search">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Keyword..."
                            />
                          </div>
                          <button type="submit">
                            <i className="fa fa-search" />
                          </button>
                        </form>
                      </div>
                      <div className="sidebar_widget">
                        <div className="widget_heading">
                          <h2>Categories</h2>
                        </div>
                        <div className="category_wrapper">
                          <ul>
                            <li className="active">
                              <a href="#">
                                news
                                <span>(27)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                interview
                                <span>(25)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                compitions
                                <span>(22)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                dispatch
                                <span>(2)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Portfolio
                                <span>(20)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                matches rivew
                                <span>(18)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                highlights
                                <span>(15)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                castening
                                <span>(12)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*end of category_wrapper*/}
                      </div>
                      <div className="sidebar_widget">
                        <div className="widget_heading">
                          <h2>tags</h2>
                        </div>
                        <div className="tag_cloud_wrapper">
                          <ul>
                            <li>
                              <a href="#">team</a>
                            </li>
                            <li>
                              <a href="#">sports</a>
                            </li>
                            <li>
                              <a href="#">soccer</a>
                            </li>
                            <li>
                              <a href="#">football</a>
                            </li>
                            <li>
                              <a href="#">player</a>
                            </li>
                            <li className="active">
                              <a href="#">Portfolio</a>
                            </li>
                            <li>
                              <a href="#">worldcup</a>
                            </li>
                            <li>
                              <a href="#">Video</a>
                            </li>
                            <li>
                              <a href="#">funtime</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="sidebar_widget">
                        <div className="widget_heading">
                          <h2>Instagram</h2>
                        </div>
                        <ul className="instagram_images">
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery1.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery2.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery3.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery4.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery5.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="instagram_wrapper">
                              <div className="instagram_img_wrapper">
                                <img
                                  src="images/inner/gallery6.jpg"
                                  className="img-responsive"
                                  alt="gallery_img"
                                />
                                <div className="instagram_img_overlay">
                                  <div className="instagram_img_overlay_icon">
                                    <i className="fa fa-search" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
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


      

    
    </>
  
}