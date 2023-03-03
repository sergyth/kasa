import Banner from "../../components/Banner"
import Dropdown from "../../components/Dropdown"
import banniere from "../../assets/banniere-about.png"
import "../../styles/Dropdown.css"

const dropdown = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Securité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const APropos = () => {
  let items = []
  dropdown.map((item) => {
    item = <Dropdown
      key={item.title}
      title={item.title}
      description={item.description}
    />
    items.push(item)
    return items
  })

  return (
    <div className="about">
      <Banner source={banniere} text="" />
      <ul>{items}</ul>
    </div>
  )
}
export default APropos
