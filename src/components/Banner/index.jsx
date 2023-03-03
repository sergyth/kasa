

import '../../styles/Banner.css'

// est-ce possible d'ajouter des props a Banner pour pouvoir le reutiliser sur la page a propos?
const Banner = ({source, text}) =>{
    return(
        <div className='app-banniere'>
            <img src={source} alt="une falaise" className='app-img-banniere' />
            <div className="app-img-background app-img-banniere"></div>
            <p className='app-slogan'>{text}</p>
        </div>   
    )
}

export default Banner;