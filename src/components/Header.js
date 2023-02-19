import logo from '../assets/logo.svg';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="app-header">
        <img src={logo} alt="logo du site" className='app-logo' />
        <nav className='app-nav'>
            <a href="#accueil" className='app-link app-accueil'>Accueil</a><a href="#a propos" className='app-link app-propos '>A Propos</a>
        </nav>
      </header>
    )
}
export default Header;