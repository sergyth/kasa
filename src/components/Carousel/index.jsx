import "../../styles/Carousel.css"
import "../../styles/Logement.css"
import { useState } from "react"
//import cards from "../../datas/kasa.json"
// import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const Carousel = ({id,title,cards, index ,card}) => {
 
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselItems =[...card.pictures]
  const previous = ()=>{
    const isFirstItem = currentIndex === 0
    const newIndex = isFirstItem? (carouselItems.length - 1) : (currentIndex - 1)
    setCurrentIndex(newIndex)
  }
  const next = ()=>{
    const isLastItem = currentIndex === carouselItems.length - 1
    const newIndex = isLastItem? (0) : (currentIndex +1 )
    setCurrentIndex(newIndex)
  }
  
  
  return (
    <div className="carousel-box">
      <FontAwesomeIcon key={`${id}//${index}`} icon={faChevronLeft} onClick={previous} />
      {cards.map((card) => {
        return card.pictures.map((picture,index) => {
          
          return (
            <img
              key={`carousel-img-${index}`}
              src={picture}
              alt={`${title}/${index}`}
              className="carousel-item"
            />
          )
        })
      })}
      <FontAwesomeIcon key={`${id}00${index}`} icon={faChevronRight} onClick={next} />
    </div>
  )
}
export default Carousel
