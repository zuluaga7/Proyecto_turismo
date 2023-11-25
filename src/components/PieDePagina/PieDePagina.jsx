import React from 'react'
import '../PieDePagina/PieDePagina.css'
export default function PieDePagina() {
  return (
    <>
     <footer className="footer">
  <div className="footer-content container">
    <div className="link">
      <h3>contacto</h3>
      <ul>
        <li>
          <a href="#">Tel: 3213456784</a>
        </li>
        <li>
          <a href="#">Pbx: 01 8000 31 65 78</a>
        </li>
        <li>
          <a href="#">Escribenos</a>
        </li>
      </ul>
    </div>
    <div className="link">
      <h3>Quienes somos?</h3>
      <ul>
        <li>
          <a href="#">Cultura</a>
        </li>
        <li>
          <a href="#">Trabaja aquí</a>
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
          <a href="#">Preguntas frecuentes</a>
        </li>
      </ul>
    </div>
  </div>
  
  <nav className='img'>
  <i id='one' class="bi bi-facebook"></i>
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
