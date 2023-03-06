
import '../../styles/Label.css'
const Label = ({title, location, tags,id}) =>{
  let index = 0
return(
  <div className="label-box">
    <p className="title">{title}</p>
    <p className="location">{location}</p>
    <div className="tags">
      {
        tags.map(tag =>
        {index++
          return(
          <span key={`${id}${index}`} className='tag'>{tag}</span>)}) 
      }
    </div>
  </div>
)
}
export default Label