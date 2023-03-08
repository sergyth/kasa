
import banniere from "../../assets/banniere-home.png"
import Banner from "../../components/Banner"
import Main from "../../components/Main"

const Accueil = () => {
  return (
    <div className=".accueil" >
      <Banner source={banniere} text='Chez vous, partout et ailleurs'/>
      <Main/>
    </div>
  )
}
export default Accueil
