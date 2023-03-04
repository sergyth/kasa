import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel"
import cards from "../../datas/kasa.json"
import "../../styles/Logement.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


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
