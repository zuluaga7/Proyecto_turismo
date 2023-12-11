import React from 'react'
import './Contacto.css'
import { Link } from 'react-router-dom'

function Contacto() {
  return (
    <>
     <form className="Foormulario">
        <div className="reelleno">
          <h1 className='tiitulo'>¡Ahorra tiempo y dinero!</h1>
          <h4>
            <small className="suib">
              Regístrate para ser el primero en recibir las últimas noticias sobre viajes, tours y mucho más!
            </small>
          </h4>
          <section className="iirr">
            <form action="#" id="form-registro">
             <input type="text" />
              <section>
              <Link id='p-j' to="/login">volver</Link>
              </section>
              
            </form>
          </section>
        </div>
      </form>
      
    <section>
    <Link id='p-h' to="/">Volver</Link>
    </section>
    </>
  )
}

export default Contacto
