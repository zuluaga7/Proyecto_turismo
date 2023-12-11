import React from 'react'
import '../PieDePagina/PieDePagina.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Nosotross from '../Nosotross/Nosotross'
import Aventuras from '../Aventuras/Aventuras'
import Cultura from '../Cultura/Cultura'
import Gastronomia from '../Gastronomia/Gastronomia'

export default function PieDePagina() {
  return (
    <Router>
         <>
     <footer className="footer">
  <div className="footer-content container">
    <div className="link">
      <h3>Qué hacer?</h3>
      <ul>
        <li>
        <Link to="/aventuras" className="dropdown-item">Aventuras</Link>
        </li>
        <li>
        <Link to="/cultura" className="dropdown-item">Cultura</Link>
        </li>
        <li>
        <Link to="/gastronomia" className="dropdown-item">Gastronomía</Link>
        </li>
      </ul>
    </div>
    <div className="link">
      <h3>Quiénes somos?</h3>
      <ul>
       
        <li>
          <Link to="/Nosotross"> La vida en Puebliando'Ando</Link>
          
        </li>
      </ul>
    </div>
    <div className="link">
      <h3>Contacto</h3>
      <ul>
        <li>
          <a href="#">Medellin-Antioquia</a>
        </li>
        <li>
          <a href="#">+57 3152758601</a>
        </li>
        <li>
          <a href="#">Transporte</a>
        </li>
      </ul>
    </div>
  </div>
  <nav className='img'>
  <a id='intento' href="https://www.instagram.com/kzuluaga777/" target="_blank"  class="bi bi-facebook"></a>
  <a id='intento' href="https://www.instagram.com/kzuluaga777/" target="_blank" class="bi bi-messenger"></a>
  <a id='intento' href="https://www.instagram.com/kzuluaga777/" target="_blank" class="bi bi-youtube"></a>
  <a id='intento' href="https://www.instagram.com/kzuluaga777/" target="_blank" class="bi bi-instagram"></a>
  <a id='intento' href="https://www.instagram.com/kzuluaga777/" target="_blank" class="bi bi-twitter-x"></a>
    </nav>    
  </footer>
<section className='pie'>
    <h2>© 2023 Antioquia es vida. Todos los derechos reservados.</h2>
  
  </section>

        </>
        <Routes>
          <Route path='/Nosotross' element={<Nosotross />}></Route>
          <Route path='/Aventuras' element={<Aventuras />}></Route>
          <Route path="/cultura" element={<Cultura />}></Route>
          <Route path='/Gastronomia' element={<Gastronomia />}></Route>
        </Routes>
    </Router>
 
  )
}
