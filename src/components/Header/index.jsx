
import logo from "../../assets/logo.svg"
import Navbar from '../Navbar'
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo du site" className="header_logo" />
      <Navbar />
    </header>
  )
}
export default Header
