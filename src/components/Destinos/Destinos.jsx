import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Registrate from '../Registrate/Registrate'
import InicioSesion from '../InicioSesion/InicioSesion';

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
import Guatape from '../Guatape/Guatape';
import Jardin from '../Jardin/Jardin';
import Jerico from '../Jerico/Jerico';
import SanRafael from '../SanRafael/SanRafael';
import Urrao from '../Urrao/Urrao';
import Venecia from '../Venecia/Venecia';


export default function App() {


  return (
    <Router>
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
                <p className="precio">$1'250'531</p>
                <Link to='/destinos/Guatape' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <img src={jardin_ir} alt="" />
              <div className="product-txt">
                <h3>Jardín</h3>
                <p>Pueblo de los muchos cerros</p>
                <p className="precio">$750'000</p>
                <Link to='/destinos/Jardin' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={parque_de_jerico_ir} alt="" />
              <div className="product-txt">
                <h3>Jericó</h3>
                <p>Las Atenas del suroeste Antioqueño</p>
                <p className="precio">$650'000</p>
                <Link to='/destinos/Jerico' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={sanrafa_ir} alt="" />
              <div className="product-txt">
                <h3>San Rafael</h3>
                <p>Embrujo de aguas cristalinas</p>
                <p className="precio">$950'000</p>
                <Link to='/destinos/San-rafael' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={urrao_ir} alt="" />
              <div className="product-txt">
                <h3>Urrao</h3>
                <p>Un paraíso natural de Antioquia</p>
                <p className="precio">$750'000</p>
                <Link to='/destinos/Urrao' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="product">
              <img src={venecia_ir} alt="" />
              <div className="product-txt">
                <h3>Venecia</h3>
                <p>La pirámide natural más grande</p>
                <p className="precio">$950'000</p>
                <Link to='/destinos/Venecia' className="agregar-carrito btn-2" data-id={2}>Ver viaje</Link>
              </div>
            </div>
          </SwiperSlide>
        </div>

      </Swiper>

    </>
    <Routes>
      <Route path='/destinos/San-rafael' element={<SanRafael />}></Route>
      <Route path='/destinos/Guatape' element={<Guatape />}> </Route>
      <Route path='/destinos/Jardin' element={<Jardin />}></Route>
      <Route path='/destinos/Jerico' element={<Jerico />}></Route>
      <Route path='/destinos/Urrao' element={<Urrao />}></Route>
      <Route path='/destinos/Venecia' element={<Venecia />}></Route>
    
      
        <Route path='/Menu/Guatape' element={<Guatape />}> </Route>
      <Route path='/registro' element={<Registrate />}></Route>
      <Route path='/login' element={<InicioSesion />}></Route>
    </Routes>
    </Router>
  );
}