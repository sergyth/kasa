
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Layout"
import Accueil from "../Accueil"
import APropos from "../APropos"
import Logement from "../Logement"
import ErrorPage from "../ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="/:cardId" element={<Logement />} />
          <Route path="About" element={<APropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
