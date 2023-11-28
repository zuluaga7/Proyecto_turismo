import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Carrusel/Carrusel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import parque_de_jerico from '../../assets/img/parque_de_jerico.jpg'
import guatape from '../../assets/img/guatape.jpg'
import bizcocho from '../../assets/img/bizcocho.jpg'



export default function App() {
  return (
    <>
    <h1><small>Antójate y viaja con nosotros</small></h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><img id='one' type='button' src={bizcocho} alt="san rafa" /></SwiperSlide>
        <SwiperSlide><img id='dos' src={guatape} alt="" /></SwiperSlide>
        <SwiperSlide><img id='tree' src={parque_de_jerico} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
