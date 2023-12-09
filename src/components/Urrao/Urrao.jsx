import React from 'react'
import './Urrao.css'
import urrao_viaje from '../../assets/img/urrao_viaje.jpg'
import { Link } from 'react-router-dom'

const Urrao = () => {
  return (
    <div className='cuerpoo'>
      <>
  <h3 className='tituloo'>Pueblo a descubrir</h3>
  <h1 className='titulooo'>Urrao, "el paraíso perdido" de Antioquia</h1>
  <a>
    {" "}
    <img id='imagenn'
      src={urrao_viaje}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <aside className='textoo'>
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
  </aside>
  <div>
    <h1 className='titulooo'>Qué hacer en Urrao - Antioquia</h1>
    <ul id='p-a'>
      <li>
        <p id='p-b'>páramo del Sol </p>
      </li>
      <li>
        <p id='p-b'>Reserva del Colibrí del sol</p>
      </li>
      <li>
        <p id='p-b'>Valle de Penderisco</p>
      </li>
      <li>
        <p id='p-b'>Parque Nacional Las Oquídeas</p>
      </li>
    </ul>
    <section className='piee'> 
    <h1 id='p-c'>
        {" "}
        <small> Disfruta la experiencia!!!</small>
              </h1>
              <Link id='p-d' to="/">Volver</Link>
              <Link id='p-d' to="/login" type='button'>Click para ingresar y activar membreseía</Link>
              </section>
    </div>
</>

    </div>
  )
}

export default Urrao
