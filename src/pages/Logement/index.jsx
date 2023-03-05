import { useParams } from "react-router-dom"
import cards from "../../datas/kasa.json"
import Carousel from "../../components/Carousel"
import Presentation from "../../components/Presentation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../../styles/Logement.css"

const Logement = () => {
  const { cardId } = useParams()
  const card = cards.find((card) => card.id === cardId)
  //const {pictures} = card

  return  (
    <div className="main-logement">
      <div className="logement">
        <FontAwesomeIcon icon={faChevronLeft} />
        <Carousel pictures={card.pictures} />
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="presentation-wrapper">
        <Presentation/>
      </div>
    </div>
  )
}
export default Logement
