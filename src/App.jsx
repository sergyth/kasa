
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from "./pages/Layout"
import Accueil from "./pages/Accueil"
import APropos from "./pages/APropos"
import Logement from "./pages/Logement"
import ErrorPage from "./pages/ErrorPage"


function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {index:true, element:<Accueil/>},
        { path: "about", element: <APropos/>},
        {path:"logement/:cardId", element:<Logement/>}        
      ] 
    }
  ])

  return <RouterProvider router={router}/>

  
}
export default App
