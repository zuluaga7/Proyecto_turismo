import '../Menu/Menu.css'
import logo_chiva from '../../assets/img/logo_chiva.png'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

//Componentes
import Cultura from '../Cultura/Cultura';
import Aventuras from '../Aventuras/Aventuras';
import Gastronomia from '../Gastronomia/Gastronomia';
import Contacto from '../Contacto/Contacto';



export function Menu() {
    return (
      <Router>
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top menu">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
               <img src={logo_chiva} alt=""/> 
              {/* <img src={chiva_l} alt=""/> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Qué hacer
                  </a>
                  <ul className="dropdown-menu">
        
                    <li>
                    <Link to="/aventuras" className="dropdown-item">Aventuras</Link>
                     </li>
                    <li>
                    <li>
                      <Link to="/cultura" className="dropdown-item">Cultura</Link>
                    </li>
                    </li>
                    <li>
                    <Link to="/gastronomia" className="dropdown-item">Gastronomía</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  Ayuda
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                    <Link to="/contacto" className="dropdown-item">Contáctenos</Link>
                    </li>
                   </ul>
                </li>
              </ul>
             
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-5" 
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit"><i class="bi bi-binoculars"></i></button>
                
              </form> */}
            </div>
          </div>
        </nav>
        
        </>
        <Routes>
          <Route path="/cultura" element={<Cultura />}></Route>
          <Route path='/Aventuras' element={<Aventuras />}></Route>
          <Route path='/Gastronomia' element={<Gastronomia />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>
        </Routes>
      </Router>
    )
}