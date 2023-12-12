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
            <section className='banner'>
            <p className='text-white'>
                     <link
                        href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap"
                        rel="stylesheet"
                    /> 
                    <h1 id='c-a'>Disfruta la aventura</h1>
                </p>
                <section className="containerForm">
                    <form className='aa' action="">

                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Destinos
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Guatape
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Jericó
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        San Rafael
                                    </a>
                                </li>
                            </ul>

                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                fecha inicio
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                <input  type="date" />
                                </li>
                                {/* <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li> */}
                            </ul>
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                fecha final
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                <input type="date" />
                                </li>
                                {/* <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li> */}
                            </ul>

                            <button className='eh' type="button">
                                <i className="bi bi-search" />
                            </button>

                        </div>
                        

                    </form>
                </section>
            </section>

            <section>
                <ContenidoPrincipal>
                </ContenidoPrincipal>
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