import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="app-nav">
      <NavLink to="/" className='app-link app-accueil'>
        Accueil
      </NavLink>
      <NavLink to="About" className="app-link app-propos ">
        A Propos
      </NavLink>
    </div>
  )
}
