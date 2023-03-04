import "../../styles/Carousel.css"
import { useParams } from "react-router-dom"
import cards from '../../datas/kasa.json'

const Carousel = () => {
  let index = 0
  const { cardId } = useParams()
  const card = cards.find(card => card.id === cardId)
  const {id, title} =card
  return (
    <div className="carousel-box">
      {
       card.pictures.map(picture =>{
        index++;
        return(
          <img key={`${id}${index}`}src={picture} alt={`${title}-${index}`} className="carousel-item" />
        )
       })  
      }
    </div>
  )
}
export default Carousel
