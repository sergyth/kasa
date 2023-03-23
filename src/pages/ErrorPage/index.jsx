import { Link } from "react-router-dom"
import "./errorPage.css"

export default function ErrorPage() {

  return (
    <div className="errorPage">
      <p className="errorPage_code">404</p>
      <p className="errorPage_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorPage_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
