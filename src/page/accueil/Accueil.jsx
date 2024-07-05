import { Box, Stack } from "@mui/material";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Navbar from "../../components/header/Headerb";
import Footer from "../../components/footer/Footer";
import SliderAccuiel from "./component/slider";
import ListEvent from "./component/listEvent";

function Accueil() {
  return (
    <>
      <Box px={10}>
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
          <HeaderAccueil />
          <Navbar />
        </Box>
        <SliderAccuiel />
        <ListEvent />
      </Box>
      <Footer />
    </>
  );
}

export default Accueil;
