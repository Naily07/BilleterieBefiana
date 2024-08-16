import Accueil from "./page/accueil/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./page/createEvente/CreateEvent";
import CreateBillet from "./page/createBillet/CreateBillet";
import Login from "./page/login/signupOrganisateur";
import SignupUserAccountType from "./page/signupUserAccounType/SignupUserAccountType";
import PointDeVente from "./page/pointDeVente/PointDeVente";
import PointDeVenteId from "./page/pointDeVenteId/PointDeVenteId";
import SingleEvent from "./page/singleEvent/SingleEevent";
import CreateAcount from "./page/createCount/CreateAcount";
import AccueilUser from "./page/accueiluser/AccueilUser";
import Ticket from "./page/ticket/Ticket";
import GestionBillet from "./page/gestionBillet/GestionBillet";
import Layout from "./page/Layout";
import LayoutSignUp from "./page/Layout copy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<LayoutSignUp><CreateAcount /></LayoutSignUp>}/>
        <Route path="/signup/organisateur" element={<Login />} />
        <Route
          path="/signup/account-type"
          element={<SignupUserAccountType />}
        />
        <Route path="/accueil" element={ <Layout><Accueil /></Layout> } />
        <Route path="/organisateur/point-de-vente" element={  <><PointDeVente /></>   } />
        <Route path="/point-de-vente/:id" element={ <> <PointDeVenteId /> </>} />
        <Route path="/event/:slug" element={ <Layout><SingleEvent /></Layout> } />
        <Route path="/event/:slug/modified" element={ <Layout><CreateEvent /></Layout> } />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/event/:slug/billeterie" element={<GestionBillet />} />
        <Route path="/accueiluser" element={<AccueilUser />} />
        <Route path="/tiket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
