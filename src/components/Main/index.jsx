import cards from "../../datas/kasa.json"
import Card from "../../components/Card"
import {Link} from "react-router-dom"
import '../../styles/Card.css'
import '../../styles/Main.css'

const Main = () => {
  return (
    <div className="main">
      {cards.map((card) => {
        return (
          <div className="card">
            <Link to={`/${card.id} `}>
              <Card
                title={card.title}
                cover={card.cover}
              />
            </Link>  
          </div>
        )
      })}
    </div>
  )
}
export default Main
