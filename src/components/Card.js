import '../styles/Card.css'



const Card = ({id,title}) =>{
    
    return (
        <li key={id} className='app-card'>
            <div className='app-card app-card-background'>
                <p className='app-card-title'>{title}</p>
            </div>
        </li>)
}
export default Card;