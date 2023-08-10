import { NavLink } from 'react-router-dom'

// Estilos
import './Header.css'

//Importamos el logo
import Logo from '../../Assets/Logo.png'

const Header = () => {
  return (
    <div>
      <div className='nav-principal'>
        <div className='logo'>
          <img src={Logo} alt="img" className="w-20" />
          <h2>Clima-Comfort</h2>
        </div>
        <nav className='navegacion'>
          <NavLink to="/" >¿Quienes Somos?</NavLink>
          <NavLink to="/" >Contactenos</NavLink>
          <NavLink to="/" >Nuestro Trabajo</NavLink>
          <NavLink to="/" >Gary haz tu parte</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header