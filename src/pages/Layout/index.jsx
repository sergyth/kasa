import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import logo from "../../assets/logo-footer.svg"

const Layout = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
      <Footer logo={logo}/>
    </div>
  )
}
export default Layout
