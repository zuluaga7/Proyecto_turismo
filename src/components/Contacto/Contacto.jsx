import React from 'react'
import './Contacto.css'
import { Link } from 'react-router-dom'

function Contacto() {
  return (
    <>
     <form className="Foormulario">
        <div className="reelleno">
          <h1 className='tiitulo'>¡No dudes en escribirnos!</h1>
          <h4>
            <small className="suib">
              Estaremos atentos para resolver cualquier inquietud!
            </small>
          </h4>
          <section className="iirr">
            <form action="#" id="form-registro">
             <input type="text" placeholder='Nombre'/>
             <input type="email" placeholder='Email'/>
             <textarea name="" id="o-p" cols="23" rows="1" placeholder='Mensaje'></textarea>
              <section id='j-p'> 
              <Link id='p-j' to="/">Volver</Link>
              <Link id='p-j' to="/">Enviar</Link>
              </section>
              
            </form>
          </section>
        </div>
      </form>
    </>
  )
}

export default Contacto
