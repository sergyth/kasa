import data from '../datas/kasa.json';
import Card from './Card';
import '../styles/Main.css';


const Main = ({props}) =>{
    const flatList = []
    data.map(flat => {
       flat = <Card key={flat.id} title={flat.title}/>
       flatList.push(flat)
       return flatList
    })
    
    return( <ul className='app-main'>
                {flatList}
           </ul>) 
}
export default Main;