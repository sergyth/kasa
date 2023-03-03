import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel"
import cards from "../../datas/kasa.json"
import '../../styles/Logement.css'


const Logement = () => {
  const { cardId } = useParams()
  const card = cards.find(card => card.id === cardId)
  const {id, title} =card

    
return( 
    <div className="main-logement">
      <div className='logement'>
        <div className='arrow-left'>L</div>
        <Carousel pictures={card.pictures}/>
        <div className="arrow-right">R</div>
      </div>
    </div>
  )
}
export default Logement
