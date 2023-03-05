import { useParams } from "react-router-dom"
import cards from '../../datas/kasa.json'
import Label from '../../components/Label'
import '../../styles/Presentation.css'

const Presentation = () =>{

  const {cardId} = useParams()
  const card = cards.find(card => card.id === cardId )
  const {title, location, tags} = card
   

  return(
    <div>
      <Label title={title} location={location} tags={tags} />
    </div>
    
  )

}
export default Presentation