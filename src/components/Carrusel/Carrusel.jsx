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
import guatape_c from '../../assets/img/guatape_c.jpg'
import bizcocho_c from '../../assets/img/bizcocho_c.jpg'
import amanecer_C from '../../assets/img/amanecer_c.jpg'
import carbonero_c from '../../assets/img/carbonero_c.jpg'
import cascada_samaria_c from '../../assets/img/cascada_samaria_c.jpg'
import desde_arriba_c from '../../assets/img/desde_arriba_c.jpg'
import cerro_c from '../../assets/img/cerro_c.webp'
import guata_c from '../../assets/img/guata_c.jpeg'
import paaramo_c from '../../assets/img/paaramo_c.jpg'
import paramo_c from '../../assets/img/paramo_c.jpg'
import piedra_c from '../../assets/img/piedra_c.avif'
import indio from '../../assets/img/cascada_indio.jpg'




export default function App() {
  return (
    <>
      <h1><small>¡Antójate y viaja con nosotros!</small></h1>
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

        <SwiperSlide ><img src={cerro_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img id='on' src={desde_arriba_c} alt="" /></SwiperSlide>
        <SwiperSlide><img id='one' type='button' src={bizcocho_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={paramo_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img id='dos' src={guatape_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img id='tres' src={amanecer_C} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={piedra_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img id='cuatro' src={carbonero_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={guata_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img id='cinco' src={cascada_samaria_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={paaramo_c} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={indio} alt="" /></SwiperSlide>




      </Swiper>
    </>
  );
}
