import "../../styles/Carousel.css"
import { useState } from "react"
//import cards from "../../datas/kasa.json"
// import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const Carousel = ({ title, card }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = card.pictures
  const length = slides.length

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }
  const next = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  console.log(currentIndex)

  return (
    <div className="carousel-box">
      <FontAwesomeIcon icon={faChevronLeft} onClick={previous} />
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === currentIndex ? "carousel-item active" : "carousel-item"
            }
          >
            {index === currentIndex && (
              <img
                src={picture}
                alt={`${title}-${index}`}
                className="picture"
              />
            )}
          </div>
        )
      })}
      <FontAwesomeIcon icon={faChevronRight} onClick={next} />
    </div>
  )
}
export default Carousel
