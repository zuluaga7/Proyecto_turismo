import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Destinos/Destinos.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import parque_de_jerico from '../../assets/img/parque_de_jerico.jpg'
import cascada_samaria from '../../assets/img/cascada_samaria.jpg'


export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div class="product-content">
        <SwiperSlide>
        <div className="product">
  <img src={parque_de_jerico} alt="" />
  <div className="product-txt">
    
    <p>Jérico</p>
    <p className="precio">$18'250'531</p>
    <a href="#" className="agregar-carrito btn-2" data-id={1}>
      Agregar viaje 
    </a>
  </div>
</div>
        </SwiperSlide>

         <SwiperSlide>
         <div className="product">
  <img src="assets/img/2.png" alt="" />
  <div className="product-txt">
    <h3>Chaqueta para hombre Mountain Gear</h3>
    <p>calidad premium</p>
    <p className="precio">$450'000</p>
    <a href="#" className="agregar-carrito btn-2" data-id={2}>
      Agregar al carrito
    </a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        </div>
        
      </Swiper>
      
    </>
    
  );
}
