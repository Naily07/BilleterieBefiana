import Accueil from "./page/accueil/Accueil"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./page/createEvente/CreateEvent"
import CreateBillet from "./page/createBillet/CreateBillet"
import Login from "./page/login/Login"
import SignupUserAccountType from "./page/signupUserAccounType/SignupUserAccountType"
import PointDeVente from "./page/pointDeVente/PointDeVente"
import PointDeVenteId from "./page/pointDeVenteId/PointDeVenteId"
import SingleEevent from "./page/singleEvent/SingleEevent"
import CreateAcount from "./page/createCount/CreateAcount"
import AccueilUser from "./page/accueiluser/AccueilUser"
import Ticket from "./page/ticket/Ticket"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup/organisateur" element={<Login />} />
        <Route path="/signup/user/account-type" element={<SignupUserAccountType />} />
        <Route path="/organisateur/point-de-vente" element={<PointDeVente />} />
        <Route path="/point-de-vente/id" element={<PointDeVenteId />} />
        <Route path="/single-event/event-name" element={<SingleEevent />} />
        <Route path="/create-count" element={<CreateAcount />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/createbillet" element={<CreateBillet />} />
        <Route path="/accueiluser" element={<AccueilUser />} />
        <Route path="/tiket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
