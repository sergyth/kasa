
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Accueil from "./pages/Accueil"
import APropos from "./pages/APropos"
import Logement from "./pages/Logement"
import ErrorPage from "./pages/ErrorPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="logement/:cardId" element={<Logement />} />
          <Route path="about" element={<APropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
