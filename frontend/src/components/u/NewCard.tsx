type News = {
    id: string
    images: [Image]
    title: string
    content : string
    status: string
    createdAt: string
}

type Image = {
    id: string
    url: string
    title: string
    createdAt: string
}

import { Backend_URL } from "@/lib/Constant"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';



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
            <SwiperSlide key={index} className="ne_re_bottom_img">
                <div className="news_overlay" />
                <img
                    src={`${Backend_URL}${image.url}`}
                    alt={image.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </SwiperSlide>
        ))}
    </Swiper>
    

)

const NewCard = ({ news }: { news: News[] }) => (

    <>
        {news.map((newItem, index) => (
            <div className="col-md-12 " key={index}>
                <div className="ne_re_left_bottom_main_wrapper" style={{ display: "flex" }}>
                    <div className="ne_re_bottom_img" style={{ maxHeight: "250px" }}>

                        <Carousel images={newItem.images} />

                       
                    </div>
                    <div className="ne_re_bottom_img_cont" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "30px 80px 30px 30px" }}>

                        <div>
                            <h1>
                                {newItem.title}
                            </h1>
                            
                            <p className="cntnt_pp" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", padding:"8px 0 0 0" }}>
                                {newItem.content}
                            </p>
                        </div>

                        <div className="news_bottom_text float_left d-flex justify-content-between">
                            <div className="news_text_center">
                                    {new Date(newItem.createdAt).toLocaleDateString()}
                            </div>
                            {/* Button for the news */}
                            <a href={`/actualites/${newItem.id}`}>
                                <button className="btn btn-primary">En savoir plus</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>

)

export default NewCard