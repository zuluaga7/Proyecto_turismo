import React from 'react'
import './Registrate.css'

export default function Registrate() {
  return (
    <div>
      <form class="Formulario">
    
    <div class="relleno">
        <h1>¡Ahorra tiempo y dinero!</h1>
    <h4><small> Registrate para ser el primero en recibir las últimas noticias sobre viajes, tours y mucho más!</small></h4>
      
          <section>
            <input type="email" placeholder="Tu dirección de e-mail" />
            <button className='env' type='submit'>¡Suscribite!</button>
          </section>

         
         
    </div>
  </form>
    </div>
  )
}
