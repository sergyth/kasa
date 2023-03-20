import "./card.css"

const Card = ({ cover, title, id }) => {
  return (
    <div className="card">
      <img
        src={cover}
        alt={`'apercu de ${title}'`}
        className="card--background card"
      />
      <div className="card_title-wrapper">
        <p className="card_title">{title}</p>
      </div>
    </div>
  )
}
export default Card
