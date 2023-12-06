import '../Menu/Menu.css'
import logo_chiva from '../../assets/img/logo_chiva.png'
import chiva_l from '../../assets/img/chiva_l.png'
import Registrate from '../Registrate/Registrate'

export function Menu() {
    return (
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
            A donde ir
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Guatapé
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Jérico
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Urrao
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                San Rafael 
              </a>
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
          Qué hacer
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Aventuras
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cultura
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Gastronomía
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Rutas
          </a>
        </li>
      </ul>
      <section className='login'>
        <a href="">Iniciar sesión</a>

        <a href="">Crear cuenta</a>
      </section>
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
    )
}