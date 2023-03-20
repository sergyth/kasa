import "./label.css"
const Label = ({ title, location, tags }) => {
  return (
    <div className="label-box">
      <p className="label-box_title">{title}</p>
      <p className="label-box_location">{location}</p>
      <div className="label-box_tags">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="label-box_tag">
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
export default Label
