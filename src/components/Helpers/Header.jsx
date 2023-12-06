import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <header>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/Destinos'></Link>
      <Link to='/San-rafael'></Link>
      
      </nav>
    </header>
  )
}

export default Header
