import "../../styles/Card.css"
//import Link from "react"
//import { useParams } from "react-router-dom"

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img
        src={cover}
        alt={`'apercu de ${title}'`}
        className="card-background card"
      />
      <div className="title-wrapper">
        <p className="card-title">{title}</p>
      </div>
    </div>
  )
}
export default Card
