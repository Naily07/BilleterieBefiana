import { Box, Stack } from "@mui/material";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Navbar from "../../components/header/navBar";
import Footer from "../../components/footer/Footer";
import SliderAccuiel from "../../components/event/sliderTypeEvent";
import ListEvent from "./component/listEvent";
import HideAppBar from "../../components/header/hideBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { RegisterUser } from "../../services/account";

import CircularProgress from '@mui/material/CircularProgress';
import { useParams, useSearchParams } from "react-router-dom";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

function Accueil() {
  const [useSearch] = useSearchParams();
  const [isRegistered, setIsRegistered] = useState(false);
  // useEffect(()=>{
  //   console.log("Code",useSearch.get("code"))
  //   RegisterUser(useSearch.get("code")).then((res)=>{
  //     console.log(res)
  //     setIsRegistered(true)
  //   })
  // }, [])
  // if(!isRegistered){
  //   return  (
  //     <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>  
  //       <CircularIndeterminate/>
  //     </Stack>
  //   )
  // }
  return (
    <>
      <HeaderAccueil />
      <HideAppBar>
        <Navbar />
      </HideAppBar>
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
