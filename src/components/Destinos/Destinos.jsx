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
import guatape_ir from '../../assets/img/guatape_ir.jpg'
import jardin_ir from '../../assets/img/jardin_ir.jpg'
import parque_de_jerico_ir from '../../assets/img/parque_de_jerico_ir.jpg'
import sanrafa_ir from '../../assets/img/sanrafa_ir.jpg'
import urrao_ir from '../../assets/img/urrao_ir.jpg'
import venecia_ir from '../../assets/img/venecia_ir.jpg'


export default function App() {


  return (

    <>
      <h1><small className='jum'>Rutas turísticas para conocer Antioquia</small></h1>
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
              <img src={guatape_ir} alt="" />
              <div className="product-txt">
                <h3>Guatapé</h3>
                <p>Pueblo de Zócalos</p>
                <p className="precio">$18'250'531</p>
                <a href="#" className="agregar-carrito btn-2" data-id={1}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <img src={jardin_ir} alt="" />
              <div className="product-txt">
                <h3>Jardín</h3>
                <p>Pueblo de los muchos cerros</p>
                <p className="precio">$450'000</p>
                <a href="#" className="agregar-carrito btn-2" data-id={2}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={parque_de_jerico_ir} alt="" />
              <div className="product-txt">
                <h3>Jericó</h3>
                <p>Las Atenas del suroeste Antioqueño</p>
                <p className="precio">$450'000</p>
                <a href="#" className="agregar-carrito btn-2" data-id={2}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={sanrafa_ir} alt="" />
              <div className="product-txt">
                <h3>San Rafael</h3>
                <p>Embrujo de aguas cristalinas</p>
                <p className="precio">$450'000</p>
                <a href="#" className="agregar-carrito btn-2" data-id={2}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={urrao_ir} alt="" />
              <div className="product-txt">
                <h3>Urrao</h3>
                <p>Un paraíso natural de Antioquia</p>
                <p className="precio">$450'000</p>
                <a href="#" className="agregar-carrito btn-2" data-id={2}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={venecia_ir} alt="" />
              <div className="product-txt">
                <h3>Venecia</h3>
                <p>La pirámide natural más grande</p>
                <p className="precio">$450'000</p>
                <a href="https://turismoantioquia.travel/san-rafael/" target="_blank" className="agregar-carrito btn-2" data-id={2}>
                  Ver viaje
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>

      </Swiper>

    </>

  );
}
