import "./Rating.css"

const Rating = ({ name, picture, children }) => {
  return (
    <div className="rating-wrapper">
      <div className="rating_profile">
        <div className="rating_profile-name">{name}</div>
        <img src={picture} alt={`profile de ${name}`} className="rating_profile-pic" />
      </div>
      <div className="rating_stars">{children}</div>
    </div>
  )
}
export default Rating
