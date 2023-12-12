import React from 'react'
import './Nosotross.css'
import { Link } from 'react-router-dom'

function Nosotross() {
  return (
    <div className='ayy'>
      <h1 className='titulo'>Bienvenidos a la página oficial de turismo de Puebliando-Ando</h1>
      <p>Puebliando-Ando es el programa de turismo del Departamento de Antioquia que
         busca posicionar y fortalecer a los municipios del Departamento como territorios 
         turísticos a nivel local, regional, nacional e internacional; a través del desarrollo
          de mercados especializados, la instalación de capacidades territoriales y el marketing 
          enfocados en los saberes, talentos y vivencias.</p>
      <p>Antioquia cuenta con 9 subregiones y 125 municipios, los cuales
         fueron categorizados y priorizados con base en criterios técnicos
          para realizar la promoción e intervención turística por fases. 
          En el 2020, se inició una primera fase con 20 municipios mágicos, 
          en el 2022 se sumaron 15 más, ahora son 35, se espera que éstos aumenten
           progresivamente a medida que se trabaja de la mano con las Alcaldías 
           municipales y entes aliados.</p>
           <h1 className='titulo'>¡Nuestra misión es que te enamores de Antioquia y te animes a recorrerla!</h1>

      <section id='a-d'>
    <Link id='p-i' to="/">Volver</Link>
    </section>
    </div>
    
  )
}

export default Nosotross
