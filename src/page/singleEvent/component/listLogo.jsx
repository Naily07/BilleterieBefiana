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

export default function FunctionListelogo({partenariat}){
  console.log("PP", partenariat);
    return(
      <>
        {
         partenariat?.map((vlogo, ilogo)=>(
          <Box key={ilogo}>
            <Box sx={{ width: "75px", height: "75px", backgroundImage: `url(${vlogo.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></Box>
          </Box>
         )) 
        }
      </>
    )
  }