import React from 'react'
import './Venecia.css'
import venecia_viajee from '../../assets/img/venecia_viajee.jpg'
import { Link } from 'react-router-dom'

const Venecia = () => {
  return (
    <div className='cuerpoo'>
      <>
  <h3 className='tituloo'>Pueblo a descubrir</h3>
  <h1 className='titulooo'>Venecia y la pirámide más grande de Colombia</h1>
  <a href="https://turismoantioquia.travel/san-rafael/" target="_blank">
    {" "}
    <img id='imagenn'
      src={venecia_viajee}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <aside className='textoo'>
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
  </aside>
 <div>
    <h1 className='titulooo'>Qué hacer en Venecia - Antioquia</h1>
    <ul id='p-a'>
      <li>
        <p id='p-b'>Cerro Tusa</p>
      </li>
      <li>
        <p id='p-b'>Cuevas de Santa Catalina</p>
      </li>
      <li>
        <p id='p-b'>Cerro Bravo</p>
      </li>
      <li>
        <p id='p-b'>La Diosa del Espejo</p>
      </li>
    </ul>
    <h1 className='titulooo'>Lugares para visitar</h1>
    <ul id='p-a'>
      <li>
        <p id='p-b'>La piedra del sacrificio</p>
      </li>
      <li>
        <p id='p-b'>Mirador turístico Miraflores</p>
      </li>
      <li>
        <p id='p-b'>Museo Cerro Tusa Zenufaná</p>
      </li>
      <section className='piee'>
      <h1 id='p-c'>
        {" "}
        <small> Disfruta la experiencia!!!</small>
       
      </h1>
      <Link id='p-d' to="/">Volver</Link>
      <Link id='p-d' to="/login" type='button'>Click para ingresar y activar membreseía</Link>
      </section>
  </ul>
  </div>
</>

    </div>
  )
}

export default Venecia
