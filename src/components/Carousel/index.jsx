import "../../styles/Carousel.css"
import { useState } from "react"
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

  return (
    <div className="carousel-box">
      {length > 1 && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} onClick={previous} />
          <FontAwesomeIcon icon={faChevronRight} onClick={next} />
        </>
      )}

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
            {length > 1 && <span className="numerotation">{`${index + 1}/${length}`}</span>}
          </div>
        )
      })}
    </div>
  )
}
export default Carousel
