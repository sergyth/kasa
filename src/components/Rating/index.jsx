import "../../styles/Rating.css"

const Rating = ({ name, picture, children }) => {
  return (
    <div className="rating-wrapper">
      <div className="profile">
        <div className="profile-name">{name}</div>
        <img src={picture} alt={`profile de ${name}`} className="profile-pic" />
      </div>
      <div className="rating">{children}</div>
    </div>
  )
}
export default Rating
