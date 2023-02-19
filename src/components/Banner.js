import banniere from '../assets/banniere-home.png'
import '../styles/Banner.css'


const Banner = () =>{
    return(
        <div className='app-banniere'>
            <img src={banniere} alt="une falaise" className='app-img-banniere' />
            <div className="app-img-background app-img-banniere"></div>
            <p className='app-slogan'>Chez vous, partout et ailleurs</p>
        </div>   
    )
}

export default Banner;