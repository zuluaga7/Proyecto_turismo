import React from 'react'
import './Urrao.css'
import sanrafael_parque_viaje from '../../assets/img/parqueprincipal_sanrafel_viaje.jpg'
import { Link } from 'react-router-dom'

const Urrao = () => {
  return (
    <div>
      <>
  <h3>Pueblo a descubrir</h3>
  <h1>Urrao, "el paraíso perdido" de Antioquia</h1>
  <a href="https://turismoantioquia.travel/san-rafael/" target="_blank">
    {" "}
    <img
      src={sanrafael_parque_viaje}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <p>
  Este municipio, ubicado en la región suroeste del departamento, se encuentra a 130 
  kilómetros de Medellín y cuenta con una temperatura promedio de 14 grados centígrados.
  </p>
  <p>
  Urrao enamora a quien da un paso sobre su tierra y es un lugar ideal para el ecoturismo,
   el turismo arqueológico, étnico y cultural, porque se pueden encontrar reservas tan importantes 
   como el Páramo del Sol, el Parque Natural Las Orquídeas, la Reserva Colibrí del Sol, entre otros
    lugares ricos en flora y fauna; también existe un complejo natural formado por los páramos
     de Frontino, Urrao, El Pesetas, El Indio, Alto de San José, Cerro Plateado y El Brechón, que es destino de 
     caminantes que buscan un desafío mayor.
  </p>
  <p>
  Su economía se compone principalmente de agricultura, con cultivos de granadilla,
   frijol, caña, maíz, papa y hortalizas como el aguacate; también por ganadería de levante
    y lechera, explotación minera y maderera.
  </p>
  <p>
  En cuanto a su riqueza gastronómica, sin duda el queso dulce de Urrao es la especialidad 
  de la casa. En resumen, se trata de un municipio de vocación aventurera y 100% natural.
  </p>
  
  <div>
    <h1>Qué hacer en Urrao - Antioquia</h1>
    <ul>
      <li>
        <p>páramo del Sol </p>
      </li>
      <li>
        <p>Reserva del Colibrí del sol</p>
      </li>
      <li>
        <p>Valle de Penderisco</p>
      </li>
      <li>
        <p>Parque Nacional Las Oquídeas</p>
      </li>
    </ul>
    <h1>
        {" "}
        <small> Disfruta la experiencia!!!</small>
        <Link to="/">Volver</Link>
      </h1>
      <Link to="/login" type='button'>Click para ingresar y activar membreseía</Link>
    
  </div>
</>

    </div>
  )
}

export default Urrao
