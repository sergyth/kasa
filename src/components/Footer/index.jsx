import "./Footer.css"

const Footer = ({logo}) => {
  return (
    <div className="footer">
      <img src={logo} alt="logo du site" className="footer_logo" />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
export default Footer
