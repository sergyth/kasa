import "../../styles/Dropdown.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//utiliser children en lieu et place de description
const Dropdown = (props) => {
  const [dropdown, updateDropdown] = useState(true)
  return dropdown ? (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="chevron-down" onClick={() => updateDropdown(false)}>
        <FontAwesomeIcon icon=" fa-chevron-down" />
        </button>
      </div>
    </li>
  ) : (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="chevron-up" onClick={() => updateDropdown(true)}>
        <FontAwesomeIcon icon=" fa-chevron-up" />
        </button>
      </div>
      <div className="dropdown-bottom">
        <p className="dropdown-description">{props.description}</p>
      </div>
    </li>
  )
}
export default Dropdown
