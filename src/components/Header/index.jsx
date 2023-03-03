
import logo from "../../assets/logo.svg"
import Navbar from '../Navbar'
import "../../styles/Header.css"

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="logo du site" className="app-logo" />
      <Navbar />
    </header>
  )
}
export default Header
