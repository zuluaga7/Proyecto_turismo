import React from 'react'
import './Venecia.css'
import venecia_viajee from '../../assets/img/venecia_viajee.jpg'
import { Link } from 'react-router-dom'

const Venecia = () => {
  return (
    <div>
      <>
  <h3>Pueblo a descubrir</h3>
  <h1>Venecia y la pirámide más grande de Colombia</h1>
  <a href="https://turismoantioquia.travel/san-rafael/" target="_blank">
    {" "}
    <img
      src={venecia_viajee}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <p>
  Este municipio está ubicado en la subregión suroeste del departamento,
   distante 58,5 kilómetros de Medellín y con una temperatura promedio de 23 grados 
   centígrados.
  </p>
  <p>
  Al hablar de Venecia la primera referencia que hay que hacer es la del Cerro Tusa,
   una montaña en forma de pirámide con 1.850 Mt sobre el nivel del mar, destino deseado
   de muchos aventureros y una experiencia inolvidable para quienes deciden conquistarlo; 
   además hay que decir que es la pirámide natural más alta del Colombia.
  </p>
  <p>
  En las fincas alrededor del Cerro Tusa puedes encontrar un sinfín de hoteles,
   piscinas naturales y experiencias que te harán recordar siempre a Venecia. 
   Este es un municipio que le encanta a los turistas aventureros, de bienestar,
    amantes de la naturaleza y a los puebliadores.
  </p>
  <p>
  Sobre su economía podemos decir que, además del turismo de naturaleza, recibe viajeros
   excursionistas, de experiencia y que buscan avistamiento de aves o también experiencias 
   más intensas como la espeleología; también hay agricultura, ganadería y minería.
  </p>
  <p>
  Como es lógico, se celebran las Fiestas del Cerro Tusa entre junio y julio, también las 
  Fiestas de la Canoa en uno de sus corregimientos, al igual que la Semana Santa.
  </p>
  <div>
    <h1>Qué hacer en Venecia - Antioquia</h1>
    <ul>
      <li>
        <p>Cerro Tusa</p>
      </li>
      <li>
        <p>Cuevas de Santa Catalina</p>
      </li>
      <li>
        <p>Cerro Bravo</p>
      </li>
      <li>
        <p>La Diosa del Espejo</p>
      </li>
    </ul>
    <h1>Lugares para visitar</h1>
    <ul>
      <li>
        <p>La piedra del sacrificio</p>
      </li>
      <li>
        <p>Mirador turístico Miraflores</p>
      </li>
      <li>
        <p>Museo Cerro Tusa Zenufaná</p>
      </li>
      <h1>
        {" "}
        <small> Disfruta la experiencia!!!</small>
        <Link to="/">Volver</Link>
      </h1>
      <Link to="/login" type='button'>Click para ingresar y activar membreseía</Link>
    </ul>
  </div>
</>

    </div>
  )
}

export default Venecia
