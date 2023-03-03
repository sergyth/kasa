import { useParams } from "react-router-dom"
import Carroussel from "../../components/Carousel"
import cards from "../../datas/kasa.json"
//import Link from 'react';

const Logement = () => {
  const { cardId } = useParams()
  const card = cards.find(card => card.id === cardId)
  const {id, title} =card

    
return( 
    <div className='logement'>
      <div className='arrow-left'>L</div>
      <Carroussel pictures={card.pictures}/>
      <div className="arrow-right">R</div>
    </div>
  )
}
export default Logement
