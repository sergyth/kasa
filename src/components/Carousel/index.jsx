import "../../styles/Carousel.css"
//import { useParams } from "react-router-dom"
import cards from '../../datas/kasa.json'

const Carousel = ({id,title}) => {
  let index = 0
  // const { cardId } = useParams()
  // const card = cards.find(card => card.id === cardId)
  // const {id, title} =card
  return (
    <div className="carousel-box">
      {cards.map((card) =>{
       return card.pictures.map(picture =>{
        index++;
        return(
          <img key={`${card.id}${index}`}src={picture} alt={`${card.title}-${index}`} className="carousel-item" />
        )
       })
        }) 
      }
    </div>
  )
}
export default Carousel
