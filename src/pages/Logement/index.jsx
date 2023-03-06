import { useParams } from "react-router-dom"
import cards from "../../datas/kasa.json"
import Carousel from "../../components/Carousel"
import Label from "../../components/Label"
import Rating from "../../components/Rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import "../../styles/Logement.css"
import Dropdown from "../../components/Dropdown"

const Logement = () => {
  const { cardId } = useParams()
  const card = cards.find((card) => card.id === cardId)
  
  const {id, title, location, tags } = card

  let starList = []
  for (let i = 0; i < 5; i++) {
    starList.push( <FontAwesomeIcon
      icon={faStar}
      key={`rating-${i}`}
      className={i > (card.rating - 1)? "white-star star": "star"}
    />)
  }

  return (
    <div className="main-logement">
      <div className="logement">
        <Carousel id={id} title={title} cards={cards} card={card} />
      </div>
      <div className="presentation-wrapper">
        <Label title={title} location={location} tags={tags} />
        <Rating picture={card.host.picture} name={card.host.name}>
          {starList}
        </Rating>
      </div>
      <ul className="dropdown-logement">
        <Dropdown title="Description">{card.description}</Dropdown>
        <Dropdown title="Equipements">
          {card.equipments.map((equipement, index) => (
            <span key={`equipement-${index}`}>{equipement}</span>
          ))}
        </Dropdown>
      </ul>
    </div>
  )
}
export default Logement
