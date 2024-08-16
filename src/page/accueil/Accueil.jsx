import { accordionActionsClasses, Box, Stack } from "@mui/material";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Navbar from "../../components/header/navBar";
import Footer from "../../components/footer/Footer";
import SliderAccuiel from "../../components/event/sliderTypeEvent";
import ListEvent from "./component/listEvent";
import HideAppBar from "../../components/header/hideBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { LoginRequest, LoginUser, RegisterUser } from "../../services/account";

import CircularProgress from "@mui/material/CircularProgress";
import {
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Login from "../login/signupOrganisateur";
import { useTokenStore } from "../../services/hooks/useTokenStore";
import useAuth from "../../services/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAccountStore } from "../../services/hooks/useAccountStore";
import HeaderbUser from "../../components/header/HeaderbUser";
function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function Accueil() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const { access } = useTokenStore();
  const { account } = useAccountStore();
  return (
    <>
      <HeaderAccueil />
      {account?.account_type == "organisateur" ? (
        <HideAppBar>
          <Navbar />
        </HideAppBar>
      ) : (
        <HideAppBar>
          <HeaderbUser />
        </HideAppBar>
      )}
      {/* <Box sx={{ zIndex: 1 }}> */}
      {/* </Box> */}
      <Box
        sx={{
          px: [0, 2, 5, 10],
        }}
        m={0}
      >
        <SliderAccuiel />
        <ListEvent />
      </Box>
      <Footer />
    </>
  );
}

export default Accueil;
