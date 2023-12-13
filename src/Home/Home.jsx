import React from 'react'
import './Home.css'
import { Menu } from '../components/Menu/Menu'
import ContenidoPrincipal from '../components/ContenidoPrincipal/ContenidoPrincipal'
import Carrusel from '../components/Carrusel/Carrusel'
import PieDePagina from '../components/PieDePagina/PieDePagina'
import Registrate from '../components/Registrate/Registrate'
import Destinos from '../components/Destinos/Destinos'
import Landingpage from '../components/Landingpage/Landingpage'





export function Home() {
    return (
        <>
            <header>
                <Menu></Menu>
                <Landingpage></Landingpage>
            </header>
            
            <section>
                <ContenidoPrincipal>
                </ContenidoPrincipal>
            </section>
            <section className='banner'>
            <p className='text-white'>
                     <link
                        href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap"
                        rel="stylesheet"
                    /> 
                    <h1 id='c-a'>Disfruta la aventura</h1>
                </p>
               </section>
             <section>
                <Carrusel></Carrusel>
            </section>

            <section>
                <Destinos></Destinos>
            </section>
            <section>
                <PieDePagina></PieDePagina>
            </section>

        </>
    )
}