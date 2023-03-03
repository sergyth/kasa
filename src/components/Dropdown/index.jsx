import "../../styles/Dropdown.css"
import { useState } from "react"
//utiliser children en lieu et place de description
const Dropdown = (props) => {
  const [dropdown, updateDropdown] = useState(true)
  return dropdown ? (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="arrow-down" onClick={() => updateDropdown(false)}>v</button>
      </div>
    </li>
  ) : (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="arrow-top" onClick={() => updateDropdown(true)}>^</button>
      </div>
      <div className="dropdown-bottom">
        <p className="dropdown-description">{props.description}</p>
      </div>
    </li>
  )
}
export default Dropdown
