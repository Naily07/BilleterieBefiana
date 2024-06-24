import { Box } from "@mui/material"
import CtnTypeEvenement from "../ctnTypeevenement/CtnTypeEvenement"
import Headera from "../header/Headera"
import Headerb from "../header/Headerb"
import Footer from "../footer/Footer"

function Accueil() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex:1 }}>
        <Headera />
        <Headerb />
      </Box>
      <CtnTypeEvenement />
      <Footer />
    </>
  )
}

export default Accueil