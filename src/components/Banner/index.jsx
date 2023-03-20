import './banner.css'

const Banner = ({source, text}) =>{
    return(
        <div className='banniere'>
            <img src={source} alt="une falaise" className='banniere_img' />
            <div className="banniere--background banniere_img"></div>
            <p className='banniere_slogan'>{text}</p>
        </div>   
    )
}

export default Banner;