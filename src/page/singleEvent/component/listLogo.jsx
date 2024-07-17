import { Box } from "@mui/material"

import logoTelma from "../../../assets/logo/id3lrheCqW.jpeg"
import logoorange from "../../../assets/logo/Orange-logo.jpg"
import logoairtel from "../../../assets/logo/Airtel-logo.png"
const funlogo = [
  {
    logo: logoTelma,
  },
  {
    logo: logoorange,
  },
  {
    logo: logoairtel
  }
]

export default function FunctionListelogo(){
    return(
      <>
        {
         funlogo.map((vlogo, ilogo)=>(
          <Box key={ilogo}>
            <Box sx={{ width: "75px", height: "75px", backgroundImage: `url(${vlogo.logo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></Box>
          </Box>
         )) 
        }
      </>
    )
  }