import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className='nav_link nav_accueil'>
        Accueil
      </NavLink>
      <NavLink to="about" className="nav_link nav_about ">
        A Propos
      </NavLink>
    </nav>
  )
}
