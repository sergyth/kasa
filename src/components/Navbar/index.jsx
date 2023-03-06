import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="app-nav">
      <NavLink to="/" className='app-link app-accueil'>
        Accueil
      </NavLink>
      <NavLink to="about" className="app-link app-propos ">
        A Propos
      </NavLink>
    </nav>
  )
}
