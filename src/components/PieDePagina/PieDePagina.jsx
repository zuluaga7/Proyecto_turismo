import React from 'react'
import '../PieDePagina/PieDePagina.css'
export default function PieDePagina() {
  return (
    <>
     <footer className="footer">
  <div className="footer-content container">
    <div className="link">
      <h3>Qué hacer?</h3>
      <ul>
        <li>
          <a href="#">Aventura</a>
        </li>
        <li>
          <a href="#">Cultura</a>
        </li>
        <li>
          <a href="#">Gastronomía</a>
        </li>
      </ul>
    </div>
    <div className="link">
      <h3>Quienes somos?</h3>
      <ul>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Preguntas Frecuentes</a>
        </li>
        <li>
          <a href="#">La vida en Puebliando'Ando</a>
        </li>
      </ul>
    </div>
    <div className="link">
      <h3>Ayuda</h3>
      <ul>
        <li>
          <a href="#">Viajes</a>
        </li>
        <li>
          <a href="#">Promociones</a>
        </li>
        <li>
          <a href="#">Transporte</a>
        </li>
      </ul>
    </div>
  </div>
  <nav className='img'>
  <i id='intento' class="bi bi-facebook"></i>
  <i class="bi bi-messenger"></i>
  <i class="bi bi-youtube"></i>
  <i class="bi bi-instagram"></i>
  <i class="bi bi-twitter-x"></i>
    </nav>    
  </footer>
<section className='pie'>
    <h2>© 2023 Antioquia es vida. Todos los derechos reservados.</h2>
  
  </section>

        </>
  )
}
