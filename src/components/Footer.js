
import logo from '../assets/logo-footer.svg';
import '../styles/Footer.css'


const Footer = () =>{
    return(<div className='app-footer'>
        <img src={logo} alt="logo du site" className='app-logo-footer' />
        <p className='app-copyright'>© 2020 Kasa. All rights reserved</p>
    </div> )
}
export default Footer;