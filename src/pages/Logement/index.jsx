import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel"
import cards from "../../datas/kasa.json"
import "../../styles/Logement.css"
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faChevronLeft, faChevronRight);


const Logement = () => {
  const { cardId } = useParams()
  const card = cards.find((card) => card.id === cardId)

  return (
    <div className="main-logement">
      <div className="logement">
        <FontAwesomeIcon icon=" fa-chevron-left" />
        <Carousel pictures={card.pictures} />
        <FontAwesomeIcon icon=" fa-chevron-right" />
      </div>
    </div>
  )
}
export default Logement
