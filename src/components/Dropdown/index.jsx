import "../../styles/Dropdown.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
//utiliser children en lieu et place de description
const Dropdown = (props) => {
  const [dropdown, updateDropdown] = useState(true)
  return dropdown ? (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="chevron-down" onClick={() => updateDropdown(false)}>
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </li>
  ) : (
    <li key={props.title} className="dropdown-wrapper">
      <div className="dropdown-top">
        <span>{props.title}</span>
        <button className="chevron-up" onClick={() => updateDropdown(true)}>
        <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className="dropdown-bottom">
        {props.children}
      </div>
    </li>
  )
}
export default Dropdown
