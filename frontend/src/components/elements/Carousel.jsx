'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';

const Carousel = ({ children, options }) => {


  
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]} {...options}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;


