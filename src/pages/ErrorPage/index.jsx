
import {Link} from 'react-router-dom'
import '../../styles/ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className='errorPage'>
      <p className="errorCode">404</p>
      <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' className='toHome'>Retourner sur la page d'accueil</Link>
    </div>
  )
}
