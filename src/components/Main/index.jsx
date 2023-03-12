import cards from "../../datas/kasa.json"
import Card from "../../components/Card"
import { Link } from "react-router-dom"
import "./Main.css"

const Main = () => {
  return (              
    <main className="main">
      {cards.map((card) => {
        return (
          <div className="card" key={`card-${card.id}`}>
            <Link to={`logement/${card.id} `}>
              <Card  title={card.title} cover={card.cover} />
            </Link>
          </div>
        )
      })}
    </main>
  )
}
export default Main
